import { useEffect, useCallback } from 'react';
import styled from 'styled-components';
import { useImmer } from "use-immer";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import ClearIcon from '@material-ui/icons/Delete';
import RefreshIcon from '@material-ui/icons/Refresh';
import { 
    findInderTable, renderToDiv, getClipboardData, isTable,
    parseTableToResult, tableToSJsonc
} from './helper';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Grid from '@material-ui/core/Grid';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import Snackbar from '@material-ui/core/Snackbar';

const Box = styled.div`
    padding: 10px 10px 0 10px;
    height: 100%;
    width: 100%;
    background: #2B2B2B;
    box-sizing: border-box;
    overflow: hidden;
    display: flex;
    flex-direction: column;
`;

const Head = styled.div`
    height: 50px;
    flex-shrink: 0;
`;

const Body = styled.div`
    flex: 1;
    overflow: scroll;
`;

const Paste = styled.div`
    border: 1px dashed grey;
    box-sizing: border-box;
    color: #fff;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0.2;
`;

const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
    select: {
        '&': {
            minWidth: '120px',
            maxWidth: '300px'
        },
        '& .MuiSelect-root, & .MuiFormLabel-root, & .MuiSvgIcon-root': {
            color: '#fff',
            fontSize: '14px'
        },
        '& .MuiFormLabel-root.MuiInputLabel-shrink': {
            transform: 'translate(0, 1.5px) scale(1)'
        },
        '& .MuiInput-underline:before': {
            border: 'none'
        }
    },
    buttonPanel: {
        '&': {
            height: '50px'
        },
        '& .MuiIconButton-root': {
            padding: '0'
        }
    }
});

interface Props {
    onChange?: (sjonc: string) => void;
}

interface Data {
    table: {
        head: string[];
        body: string[][];
    },
    settings: {
        name: number;
        type: number;
        comments: number;
    },
    showMsg: boolean;
}

export function TableEditor (props: Props) {
    const classes = useStyles();
    const [data, updateData] = useImmer<Data>({
        table: {head: [], body: []},
        settings: {
            name: 0,
            type: 1,
            comments: 2,
        },
        showMsg: false
    });

    const toSJsonc = useCallback(() => {
        return tableToSJsonc(data.table.body, data.settings)
    }, [data.table, data.settings]);

    useEffect(() => {
        props.onChange?.(toSJsonc())
    }, [toSJsonc]);

    return (
        <Box>
            <Head>
                <Grid container >
                    <Grid item xs={8}>
                        {
                            !!data.table.head.length && (['name', 'type', 'comments'] as Array<keyof Data['settings']>).map((key) => (
                                <FormControl size="small" key={key} className={classes.select}>
                                    <InputLabel id="demo-simple-select-label">{key} column</InputLabel>
                                    <Select
                                        value={data.settings[key]}
                                        label="name"
                                        onChange={(ev) => {
                                            updateData(draft => {
                                                draft.settings[key] = ev.target.value as number;
                                            })
                                        }}
                                    >
                                        {data.table.head.map((name, index) => (
                                            <MenuItem value={index} key={index}>{name}</MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            ))
                        }
                    </Grid>
                    <Grid 
                        item xs={4} container 
                        justifyContent="flex-end" 
                        alignItems="center"
                        className={classes.buttonPanel}
                    >
                        <Tooltip title="Delete Table">
                            <IconButton>
                                <ClearIcon style={{ color: '#fff', cursor: 'pointer' }} onClick={() => {
                                    updateData(draft => {
                                        draft.table = {head: [], body: []}
                                    })
                                }}/>
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="Reset">
                            <IconButton>
                                <RefreshIcon style={{ color: '#fff', cursor: 'pointer' }} onClick={() => {
                                    props.onChange?.(toSJsonc());
                                }}/>
                            </IconButton>
                        </Tooltip>
                    </Grid>
                </Grid>
            </Head>
            <Body onPaste={(e) => {
                const str = getClipboardData(e);
                const div = renderToDiv(str);
                const table = findInderTable(div);

                if (isTable(table)) {
                    const result = parseTableToResult(table);

                    updateData(draft => {
                        draft.table = result;
                    });
                } else {
                    updateData((draft) => { draft.showMsg = true })
                }
            }}>
                <Snackbar
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                    open={data.showMsg}
                    autoHideDuration={1500}
                    onClose={() => updateData((draft) => { draft.showMsg = false })}
                    message="粘贴内容无法解析"
                />
                {
                    data.table.head.length === 0 &&
                    data.table.body.length === 0 &&
                    <Paste>复制表格在此区域粘贴</Paste>
                }
                <TableContainer component={Paper}>
                    <Table className={classes.table} aria-label="simple table">
                        <TableHead>
                        <TableRow>
                            {data.table.head.map((item, index) => (
                                <TableCell key={index}>{item}</TableCell>
                            ))}
                        </TableRow>
                        </TableHead>
                        <TableBody>
                            {data.table.body.map((row, index) => (
                                <TableRow key={index}>
                                    {row.map((item, sIndex) => (
                                        <TableCell key={sIndex}>{item}</TableCell>
                                    ))}
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Body>
        </Box>
    )
}
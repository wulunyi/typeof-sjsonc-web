import FormLabel from '@material-ui/core/FormLabel';
import { useEffect } from 'react';
import { useImmer } from "use-immer";
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import SettingsIcon from '@material-ui/icons/Settings';
import { makeStyles } from '@material-ui/core/styles';
import { StyledTextField } from './StyledTextField';
import { StyledCheckbox } from './StyleCheckbox';
import Switch from '@material-ui/core/Switch';
import TableChartIcon from '@material-ui/icons/TableChart';
import styled from 'styled-components';
import hotkeys from 'hotkeys-js';

const TitlePanel = styled.div`
    display: flex; 
    align-items: center; 
    justify-content: space-between;
    margin: 10px 0;
`;

const useStyles = makeStyles({
    root: {
        '& .MuiFormLabel-root': {
            color: '#fff',
            display: 'flex',
            alignItems: 'center',
        },
    },
    body: {
        paddingLeft: '12px'
    }
});

export const DEFAULT_NAME = 'root';
export const DEFAULT_SETTINGS = {
    name: DEFAULT_NAME,
    useTableInput: false,
    options: {
      disallowComments: false,
      separate: true,
      prefix: ''
    }
};

export type SettingsValue = typeof DEFAULT_SETTINGS;

export interface SettingsProps {
    value?: SettingsValue;
    onChange?: (v: SettingsValue) => void;
}

export function TypeofSettings(props: SettingsProps) {
    const classes = useStyles();
    const [settings, updateSettings] = useImmer<SettingsValue>(props.value ?? DEFAULT_SETTINGS);

    useEffect(() => {
        if (props.value !== settings) {
            updateSettings((dragft) => {dragft = props.value ?? DEFAULT_SETTINGS});
        }
    }, [props.value]);

    useEffect(() => {
        props.onChange?.(settings)
    }, [settings])

    useEffect(() => {
        hotkeys('ctrl+`', () => {
            updateSettings(draft => { draft.useTableInput = !draft.useTableInput })
        })
    }, [updateSettings])

    return (
        <FormControl component="fieldset" fullWidth className={classes.root}>
            <TitlePanel>
                <FormLabel focused={false} component="legend">
                    <SettingsIcon />&nbsp;&nbsp;Render Settings
                </FormLabel>
            </TitlePanel>
            <FormGroup className={classes.body}>
                <StyledTextField
                    label="Interface Name"
                    value={settings.name}
                    placeholder={'root'}
                    onChange={(event) => {
                        updateSettings((dragft) => { dragft.name = event.target.value });
                    }}
                />

                <StyledTextField
                    label="Prefix"
                    value={settings.options.prefix}
                    placeholder={'前缀'}
                    onChange={(event) => {
                        updateSettings((dragft) => { dragft.options.prefix = event.target.value });
                    }}
                />

                <FormControlLabel
                    control={<StyledCheckbox
                        name="disallowComments"
                        checked={settings.options.disallowComments}
                        onChange={(_, checked) => {
                            updateSettings((dragft) => {
                                dragft.options.disallowComments = checked;
                            })
                        }}
                    />}
                    label="Disable Comments"
                />

                <FormControlLabel
                    control={<StyledCheckbox
                        name="separate"
                        checked={settings.options.separate}
                        onChange={(_, checked) => {
                            updateSettings((dragft) => {
                                dragft.options.separate = checked;
                            })
                        }}
                    />}
                    label="Separate Mode"
                />
            </FormGroup>
            <TitlePanel>
                <FormLabel focused={false} component="legend">
                    <TableChartIcon />&nbsp;&nbsp;From Table
                </FormLabel>
                <Switch
                    checked={settings.useTableInput}
                    onChange={(_, checked) => {
                        updateSettings((dragft) => {
                            dragft.useTableInput = checked;
                        });
                    }}
                    color="primary"
                />
            </TitlePanel>
        </FormControl>
    )
}
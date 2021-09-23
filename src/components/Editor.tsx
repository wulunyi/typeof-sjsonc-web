import CodeMirror from 'codemirror';
import { useEffect, useLayoutEffect, useRef, useMemo } from 'react';
import { useImmer } from "use-immer";
import styled from 'styled-components';
import CopyIcon from '@material-ui/icons/FileCopy';
import CopyToClipboard from 'react-copy-to-clipboard';
import Snackbar from '@material-ui/core/Snackbar';

import 'codemirror/theme/darcula.css';
import 'codemirror/lib/codemirror.css';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import { aegis } from '../utils/monitor';

const FullSizeDiv = styled.div`
    position: relative;
    height: 100%;
    width: 100%;
`;

const AbsoluteDiv = styled.div`
  right: 10px;
  top: 10px;
  position: absolute;
  z-index: 10;
  cursor: pointer;
  user-select: none;
`;

interface Props {
    value?: string;
    onChange?: (v: string) => void;
    disabled?: boolean;
    copyable?: boolean;
}

interface Data {
    value: string;
    editor: CodeMirror.Editor | undefined;
    showMsg: boolean;
}

export function Editor(props: Props) {
    const containerRef = useRef<HTMLDivElement>(null);
    const [data, updateData] = useImmer<Data>({
        value: props.value ?? '',
        editor: undefined,
        showMsg: false,
    });
    
    useLayoutEffect(() => {
        if (containerRef.current) {
            const instance = CodeMirror(containerRef.current, {
                value: props.value ?? "",
                mode: 'default',
                theme: "darcula",
                readOnly: props.disabled ?? false,
                lineNumbers: true,
                lineWrapping: true,
            })

            updateData((draft) => {draft.editor = instance});

            instance.on("change", (e) => {
                const newValue = e.getValue();
                updateData((draft) => {draft.value = newValue});
                props.onChange?.(newValue);
            })
        }
    }, []);
    useEffect(() => {
        const {editor, value} = data;

        if (editor && props.value !== value && typeof props.value ==='string') {
            editor.setValue(props.value)
        }
    }, [props.value])

    const CopyAbility = useMemo(() => {
        if (!props.copyable) return null;

        return (
            <>
                <AbsoluteDiv>
                    <Tooltip title="Copy" placement="left">
                        <CopyToClipboard
                            text={data.value}
                            onCopy={() => { 
                                aegis.report('copy');
                                updateData((draft) => { draft.showMsg = true });
                            }}
                        >
                                <IconButton>
                                    <CopyIcon style={{ color: '#fff' }} />
                                </IconButton>
                        </CopyToClipboard>
                    </Tooltip>
                </AbsoluteDiv>

                <Snackbar
                    anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                    open={data.showMsg}
                    autoHideDuration={1500}
                    onClose={() => updateData((draft) => { draft.showMsg = false })}
                    message="复制成功"
                />
            </>
        )
    }, [data.showMsg, props.copyable])

    return (
        <FullSizeDiv>
            <FullSizeDiv ref={containerRef}></FullSizeDiv>

            {CopyAbility}
        </FullSizeDiv>
    ) 
}
import { useCallback, useEffect, useMemo } from 'react';
import { useImmer } from "use-immer";
import { typeofSjsonc } from 'typeof-sjsonc';
import camelcase from 'lodash.camelcase';
import trim from 'lodash.trim';
import styled from 'styled-components';
import { SplitPane }  from 'react-collapse-pane';
import { DEMO_SJSONC } from './mock';
import { Editor } from './components/Editor';
import { GithubLinkIcon } from './components/GithubLinkIcon';
import { DEFAULT_SETTINGS, TypeofSettings } from './components/TypeofSettings';
import { TableEditor } from './components/TableEditor';
import { storage } from './utils/storage';
import { RENDER_SETTINGS_STORAGE_KEY } from './constants';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import hotkeys from 'hotkeys-js';
import { aegis } from './utils/monitor';

const FullSizeDiv = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  min-width: 500px;
  min-height: 400px;
`;

const FlexDiv = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
`;

const Side = styled.div`
  width: 258px;
  background-color: rgb(44, 49, 56);
  flex-shrink: 0;
  padding: 10px;
  box-sizing: border-box;
  color: #fff;
  user-select: none;
`;

const Hover = styled.div`
	position: fixed;
	top: 50px;
	right: 10px;
	z-index: 999;
`;

const DEFAULT_DATA = {
	sjsonc:  DEMO_SJSONC,
	typeofResult: '',
	settings: storage.get<typeof DEFAULT_SETTINGS>(RENDER_SETTINGS_STORAGE_KEY) ?? DEFAULT_SETTINGS
};

export function App() {
	const [data, updateData] = useImmer(DEFAULT_DATA);
	
	const transformFn = useCallback((sjsonc: string) => {
		const { settings } = data;
		try {
			updateData((dragft) => {
				dragft.sjsonc = sjsonc;
			});
			const result = typeofSjsonc(
				sjsonc,
				trim(settings.name) === '' ? DEFAULT_SETTINGS.name : camelcase(settings.name),
				settings.options
			);
			updateData((dragft) => {
				dragft.typeofResult = result;
			});
		} catch (e) {
			updateData((dragft) => {
				dragft.typeofResult = (e as Error).message;
			});
		}
	}, [data.settings]);

	useEffect(() => {
		transformFn(data.sjsonc)
	}, [transformFn]);

	useEffect(() => {
        hotkeys('ctrl+c,command+c', (ev) => {
            aegis.reportEvent('event.copy');
        });
    }, [])

	const renderEditor = useMemo(() => {
		const CodeEditor = (
			<FullSizeDiv>
				<SplitPane split="vertical">
					<FullSizeDiv>
						<Editor value={data.sjsonc} onChange={transformFn} />
					</FullSizeDiv>
					<FullSizeDiv>
						<Editor value={data.typeofResult} disabled copyable/>
					</FullSizeDiv>
				</SplitPane>
			</FullSizeDiv>
		)

		if (!data.settings.useTableInput) {
			return CodeEditor;
		}

		return (
			<SplitPane split="horizontal">
				<FullSizeDiv>
					{CodeEditor}
				</FullSizeDiv>
				
				<FullSizeDiv>
					<TableEditor onChange={transformFn}/>
				</FullSizeDiv>
			</SplitPane>
		)
	}, [data.settings.useTableInput, data.sjsonc, data.typeofResult]);

	return (
		<FullSizeDiv>
			<Hover>
				<Tooltip title="Star And Issues" placement="left">
					<IconButton>
					<	GithubLinkIcon />
					</IconButton>
				</Tooltip>
			</Hover>

			<FlexDiv>
				<Side>
					<TypeofSettings value={data.settings} onChange={(v) => {
						updateData((draft) => { draft.settings = v});
						storage.set(RENDER_SETTINGS_STORAGE_KEY, v);
					}} />
				</Side>

				<FullSizeDiv>
					{renderEditor}
				</FullSizeDiv>
			</FlexDiv>
		</FullSizeDiv>
	);
}


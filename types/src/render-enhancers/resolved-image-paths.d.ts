import { MarkdownEngineRenderOption } from '../markdown-engine';
export default function enhance($: any, options: MarkdownEngineRenderOption, resolveFilePath: (path: string, useRelativeFilePath: boolean, fileDirectoryPath?: string) => string): Promise<void>;

export function parse(input_stream: antlr4.InputStream): any[];
export function parse_file(file: string): any[];
export class ThriftData {
    static from_file(file: string): ThriftData;
    static from_str(data: string): ThriftData;
    constructor(input_stream: antlr4.InputStream);
    tokens: antlr4.Token[];
    parser: ThriftParser;
    document: ThriftParser.DocumentContext;
}

import antlr4 from 'antlr4';
import ThriftParser from "./ThriftParser.js";
import ThriftLexer from "./ThriftLexer.js";
export { ThriftParser, ThriftLexer };
//# sourceMappingURL=index.d.ts.map

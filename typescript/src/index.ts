import { CharStreams, CharStream, CommonTokenStream, ParserRuleContext } from 'antlr4ts';
import { ThriftParser, DocumentContext } from './ThriftParser';
import { ThriftLexer } from './ThriftLexer';

export {
    ThriftParser,
    ThriftLexer,
}

export type ParserReult = [
    ThriftLexer,
    CommonTokenStream,
    ThriftParser,
    DocumentContext,
];

export function parse(input_stream: CharStream) : ParserReult {
    const lexer = new ThriftLexer(input_stream);
    const stream = new CommonTokenStream(lexer);
    const parser = new ThriftParser(stream);
    const ctx = new ParserRuleContext();
    parser.enterRule(ctx, 0, 0);
    const document = parser.document();
    return [lexer, stream, parser, document];
}

export class ThriftData {
    tokens : CommonTokenStream;
    document : DocumentContext;

    constructor(input_stream: CharStream) {
        const [, tokens, , document] = parse(input_stream);
        this.tokens = tokens;
        this.document = document;
    }

    static from_string(data: string) {
        const input_stream = CharStreams.fromString(data);
        return new ThriftData(input_stream);
    }
}

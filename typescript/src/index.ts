import { CharStreams, CharStream, CommonTokenStream, ParserRuleContext } from 'antlr4ts';
import { BailErrorStrategy } from 'antlr4ts';
import { ThriftParser, DocumentContext } from './ThriftParser';
import { ThriftLexer } from './ThriftLexer';

export {
    ThriftParser,
    ThriftLexer,
}

// define in Thrift.g4, comment type's token.channel
export const CommentChannel = 2

export type ParserReult = [
    ThriftLexer,
    CommonTokenStream,
    ThriftParser,
    DocumentContext,
];

export function parse(inputStream: CharStream) : ParserReult {
    const lexer = new ThriftLexer(inputStream);
    const stream = new CommonTokenStream(lexer);
    const parser = new ThriftParser(stream);
    parser.errorHandler = new BailErrorStrategy();

    const ctx = new ParserRuleContext();
    parser.enterRule(ctx, 0, 0);
    const document = parser.document();
    return [lexer, stream, parser, document];
}

export class ThriftData {
    tokens : CommonTokenStream;
    document : DocumentContext;

    constructor(inputStream: CharStream) {
        const [, tokens, , document] = parse(inputStream);
        this.tokens = tokens;
        this.document = document;
    }

    static fromString(data: string) {
        const inputStream = CharStreams.fromString(data);
        return new ThriftData(inputStream);
    }
}

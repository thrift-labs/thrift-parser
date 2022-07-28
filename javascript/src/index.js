import antlr4 from 'antlr4';
import ThriftParser from './ThriftParser.js';
import ThriftLexer from './ThriftLexer.js';

export {
    ThriftParser,
    ThriftLexer,
}

export function parse(input_stream) {
    const lexer = new ThriftLexer(input_stream);
    const stream = new antlr4.CommonTokenStream(lexer);
    const parser = new ThriftParser(stream);
    parser._errHandler = new antlr4.error.BailErrorStrategy();

    const ctx = new antlr4.ParserRuleContext();
    parser.enterRule(ctx, 0, 0);
    const document = parser.document();
    return [lexer, stream, parser, document];
}

export function parse_file(file) {
    const input_stream = new antlr4.FileStream(file);
    return parse(input_stream);
}

export class ThriftData {
    constructor(input_stream) {
        const [, tokens, parser, document] = parse(input_stream);
        this.tokens = tokens;
        this.parser = parser;
        this.document = document;
    }

    static from_file(file) {
        const input_stream = new antlr4.FileStream(file);
        return new ThriftData(input_stream);
    }

    static from_str(data) {
        const input_stream = new antlr4.InputStream(data);
        return new ThriftData(input_stream);
    }
}

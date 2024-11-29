package thriftlabs.thriftparser;

import org.antlr.v4.runtime.CharStreams;
import org.antlr.v4.runtime.CommonTokenStream;
import org.antlr.v4.runtime.CharStream;

public class Thrift {
    public static final int CommentChannel = 2; // 定义评论通道的常量

    public static ParserResult parse(CharStream stream) {
        ThriftLexer lexer = new ThriftLexer(stream);
        CommonTokenStream tokens = new CommonTokenStream(lexer);
        ThriftParser parser = new ThriftParser(tokens);
        ThriftParser.DocumentContext document = parser.document();
        return new ParserResult(lexer, tokens, parser, document);
    }

    public static ParserResult parse(String content) {
        CharStream stream = CharStreams.fromString(content);
        ThriftLexer lexer = new ThriftLexer(stream);
        CommonTokenStream tokens = new CommonTokenStream(lexer);
        ThriftParser parser = new ThriftParser(tokens);
        ThriftParser.DocumentContext document = parser.document();
        return new ParserResult(lexer, tokens, parser, document);
    }

    public static class ParserResult {
        public ThriftLexer lexer;
        public CommonTokenStream tokens;
        public ThriftParser parser;
        public ThriftParser.DocumentContext document;

        public ParserResult(ThriftLexer lexer, CommonTokenStream tokens, ThriftParser parser,
                ThriftParser.DocumentContext document) {
            this.lexer = lexer;
            this.tokens = tokens;
            this.parser = parser;
            this.document = document;
        }
    }
}

package thriftlabs.thriftparser;

import org.antlr.v4.runtime.CharStreams;
import org.antlr.v4.runtime.CommonTokenStream;
import org.antlr.v4.runtime.CharStream;
import org.antlr.v4.runtime.ParserRuleContext;

import thriftlabs.thriftparser.*;

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

    public static class ThriftData {
        private CommonTokenStream tokens;
        private ThriftParser.DocumentContext document;

        public ThriftData(CharStream inputStream) {
            ParserResult result = parse(inputStream);
            this.tokens = result.tokens;
            this.document = result.document;
        }

        public static ThriftData fromString(String data) {
            CharStream inputStream = CharStreams.fromString(data);
            return new ThriftData(inputStream);
        }
    }

    public static class ParserResult {
        ThriftLexer lexer;
        CommonTokenStream tokens;
        ThriftParser parser;
        ThriftParser.DocumentContext document;

        public ParserResult(ThriftLexer lexer, CommonTokenStream tokens, ThriftParser parser,
                ThriftParser.DocumentContext document) {
            this.lexer = lexer;
            this.tokens = tokens;
            this.parser = parser;
            this.document = document;
        }
    }
}

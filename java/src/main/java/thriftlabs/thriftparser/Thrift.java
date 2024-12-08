package thriftlabs.thriftparser;

import org.antlr.v4.runtime.CharStreams;
import org.antlr.v4.runtime.CommonTokenStream;
import org.antlr.v4.runtime.Parser;
import org.antlr.v4.runtime.RecognitionException;
import org.antlr.v4.runtime.Recognizer;
import org.antlr.v4.runtime.atn.ATNConfigSet;
import org.antlr.v4.runtime.dfa.DFA;

import java.util.ArrayList;
import java.util.BitSet;
import java.util.List;

import org.antlr.v4.runtime.ANTLRErrorListener;
import org.antlr.v4.runtime.CharStream;

public class Thrift {
    public static final int CommentChannel = 2; // 定义评论通道的常量

    public static ParserResult parse(CharStream stream) {
        ParseErrorListener listener = new ParseErrorListener();
        ThriftLexer lexer = new ThriftLexer(stream);
        lexer.addErrorListener(listener);
        CommonTokenStream tokens = new CommonTokenStream(lexer);
        ThriftParser parser = new ThriftParser(tokens);
        parser.addErrorListener(listener);
        ThriftParser.DocumentContext document = parser.document();
        List<ParseError> errors = listener.getErrors();
        return new ParserResult(lexer, tokens, parser, document, errors);
    }

    public static ParserResult parse(String content) {
        CharStream stream = CharStreams.fromString(content);
        return parse(stream);
    }

    public static class ParserResult {
        public ThriftLexer lexer;
        public CommonTokenStream tokens;
        public ThriftParser parser;
        public ThriftParser.DocumentContext document;
        public List<ParseError> errors;

        public ParserResult(ThriftLexer lexer, CommonTokenStream tokens, ThriftParser parser,
                ThriftParser.DocumentContext document, List<ParseError> errors) {
            this.lexer = lexer;
            this.tokens = tokens;
            this.parser = parser;
            this.document = document;
            this.errors = errors;
        }

        public boolean isSuccess() {
            return this.errors.isEmpty();
        }
    }

    public static class ParseError {
        private final int line;
        private final int charPositionInLine;
        private final String offendingText;
        private final String message;

        public ParseError(int line, int charPositionInLine, String offendingText, String message) {
            this.line = line;
            this.charPositionInLine = charPositionInLine;
            this.offendingText = offendingText;
            this.message = message;
        }

        public int getLine() {
            return line;
        }

        public int getCharPositionInLine() {
            return charPositionInLine;
        }

        public String getOffendingText() {
            return offendingText;
        }

        public String getMessage() {
            return message;
        }

        @Override
        public String toString() {
            return "ParseError{" +
                    "line=" + line +
                    ", charPositionInLine=" + charPositionInLine +
                    ", offendingText='" + offendingText + '\'' +
                    ", message='" + message + '\'' +
                    '}';
        }
    }

    public static class ParseErrorListener implements ANTLRErrorListener {
        private final List<ParseError> errors = new ArrayList<>();

        public List<ParseError> getErrors() {
            return errors;
        }

        @Override
        public void syntaxError(Recognizer<?, ?> recognizer, Object offendingSymbol, int line, int charPositionInLine,
                String msg, RecognitionException e) {
            ParseError error = new ParseError(line, charPositionInLine, offendingSymbol.toString(), msg);
            this.errors.add(error);
        }

        @Override
        public void reportAmbiguity(Parser recognizer, DFA dfa, int startIndex, int stopIndex, boolean exact,
                BitSet ambigAlts, ATNConfigSet configs) {
        }

        @Override
        public void reportAttemptingFullContext(Parser recognizer, DFA dfa, int startIndex, int stopIndex,
                BitSet conflictingAlts, ATNConfigSet configs) {
        }

        @Override
        public void reportContextSensitivity(Parser recognizer, DFA dfa, int startIndex, int stopIndex, int prediction,
                ATNConfigSet configs) {
        }

    }
}

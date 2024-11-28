package thriftlabs.thriftparser;

import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.tree.*;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.assertEquals;

import java.util.List;

import thriftlabs.thriftparser.ThriftLexer;
import thriftlabs.thriftparser.ThriftParser;

public class ParserTest {

    public static String content = "include \"./other.thrift\" \n" +
            "namespace py demo_thrift\n" +
            "namespace go demo_thrift\n" +
            "namespace java thriftlabs.thriftxx.demo_thrift\n" +
            "\n" +
            "const string __VERSION__ = \"0.0.8\"\n" +
            "\n" +
            "struct DemoStruct {" +
            "1: required string x1;" +
            "}";

    @Test
    public void testParse() {
        CharStream charStream = CharStreams.fromString(content);
        ThriftLexer lexer = new ThriftLexer(charStream);
        CommonTokenStream tokens = new CommonTokenStream(lexer);
        ThriftParser parser = new ThriftParser(tokens);

        ThriftParser.HeaderContext header = parser.header();
        var n = header.include_();
        TerminalNode tn = n.LITERAL();
        Token t = tn.getSymbol();
        String s = t.getText();

        assertEquals("\"./other.thrift\"", s);
    }

    @Test
    public void testThrift() {
        Thrift.ParserResult td = Thrift.parse(content);
        List<ThriftParser.HeaderContext> headers = td.document.header();
        assertEquals(headers.size(), 4);
    }
}

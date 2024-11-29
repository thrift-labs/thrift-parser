package thriftlabs.thriftparser.integration;

import java.util.List;

import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.assertEquals;

import thriftlabs.thriftparser.Thrift;
import thriftlabs.thriftparser.ThriftParser;

public class ParseIntegrationTest {

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
    public void testThrift() {
        Thrift.ParserResult td = Thrift.parse(content);
        List<ThriftParser.HeaderContext> headers = td.document.header();
        assertEquals(headers.size(), 4);
    }
}

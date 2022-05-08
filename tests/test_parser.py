import os
import glob

from antlr4 import FileStream
from antlr4 import CommonTokenStream
from antlr4 import ParserRuleContext


from thrift_parser.ThriftLexer import ThriftLexer
from thrift_parser.ThriftParser import ThriftParser


TEST_DIR = os.path.dirname(os.path.abspath(__file__))


def parse_one_thrift(filepath):
    file_abspath = os.path.abspath(os.path.join(TEST_DIR, filepath))
    input_stream = FileStream(file_abspath, encoding='utf8')
    lexer = ThriftLexer(input_stream)
    stream = CommonTokenStream(lexer)
    parser = ThriftParser(stream)
    return parser


def test_files():
    # TODO: use *.thrift
    files = glob.glob('./fixtures/ThriftTest.thrift')
    for file in files:
        parser = parse_one_thrift('../' + file)
        ctx = ParserRuleContext()
        parser.enterRule(ctx, 0, 0)
        document = parser.document()
        assert len(document.children) > 0


def test_load_normal():
    parser = parse_one_thrift('../fixtures/tutorial.thrift')
    ctx = ParserRuleContext()
    parser.enterRule(ctx, 0, 0)
    document = parser.document()
    assert len(document.children) > 0
    header = document.children[0]
    assert header.getText() == 'include"shared.thrift"'

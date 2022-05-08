import os

from antlr4 import FileStream
from antlr4 import CommonTokenStream
from antlr4 import ParserRuleContext


from thrift_parser.ThriftLexer import ThriftLexer
from thrift_parser.ThriftParser import ThriftParser


TEST_DIR = os.path.dirname(os.path.abspath(__file__))



def parse_one_thrift(filepath):
    file_abspath = os.path.abspath(os.path.join(TEST_DIR, filepath))
    input_stream = FileStream(file_abspath)
    lexer = ThriftLexer(input_stream)
    stream = CommonTokenStream(lexer)
    parser = ThriftParser(stream)
    return parser


def test_load_normal():
    parser = parse_one_thrift('./tutorial.thrift')
    ctx = ParserRuleContext()
    parser.enterRule(ctx, 0, 0)
    document = parser.document()
    assert len(document.children) > 0
    header = document.children[0]
    assert header.getText() == 'include"shared.thrift"'

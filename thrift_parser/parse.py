from antlr4 import FileStream
from antlr4 import CommonTokenStream

from .ThriftLexer import ThriftLexer
from .ThriftParser import ThriftParser


def parse_file(file):
    input_stream = FileStream(file, encoding='utf8')
    lexer = ThriftLexer(input_stream)
    stream = CommonTokenStream(lexer)
    parser = ThriftParser(stream)
    return parser

from antlr4 import FileStream
from antlr4 import CommonTokenStream
from antlr4 import ParserRuleContext

from .ThriftLexer import ThriftLexer
from .ThriftParser import ThriftParser


def parse(input_stream, ctx=None):
    lexer = ThriftLexer(input_stream)
    stream = CommonTokenStream(lexer)
    parser = ThriftParser(stream)

    if not ctx:
        ctx = ParserRuleContext()

    parser.enterRule(ctx, 0, 0)
    document = parser.document()

    return (lexer, stream, parser, document)


def parse_file(file, ctx=None):
    input_stream = FileStream(file, encoding='utf8')
    return parse(input_stream, ctx=ctx)

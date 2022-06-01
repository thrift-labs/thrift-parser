from __future__ import annotations
from typing import List, Optional, Tuple

from antlr4 import InputStream
from antlr4 import FileStream
from antlr4 import StdinStream
from antlr4 import CommonTokenStream
from antlr4 import ParserRuleContext
from antlr4.Token import CommonToken

from .ThriftLexer import ThriftLexer
from .ThriftParser import ThriftParser


ParseResult = Tuple[ThriftLexer, CommonTokenStream, ThriftParser, ThriftParser.DocumentContext]

def parse(input_stream: InputStream, ctx: Optional[ParserRuleContext] = None) -> ParseResult:
    lexer = ThriftLexer(input_stream)
    stream = CommonTokenStream(lexer)
    parser = ThriftParser(stream)

    if not ctx:
        ctx = ParserRuleContext()

    parser.enterRule(ctx, 0, 0)
    document = parser.document()

    return (lexer, stream, parser, document)


def parse_file(file, ctx=None)  -> ParseResult:
    input_stream = FileStream(file, encoding='utf8')
    return parse(input_stream, ctx=ctx)


class ThriftData(object):

    def __init__(self, input_stream: InputStream):
        _, tokens, _, document = parse(input_stream)
        self.tokens: List[CommonToken] = tokens.tokens
        self.document: ThriftParser.DocumentContext = document

    @classmethod
    def from_file(cls, file: str) -> ThriftData:
        input_stream = FileStream(file, encoding='utf8')
        return cls(input_stream)

    @classmethod
    def from_stdin(cls) -> ThriftData:
        input_stream = StdinStream(encoding='utf8')
        return cls(input_stream)

    @classmethod
    def from_str(cls, data: str) -> ThriftData:
        input_stream = InputStream(data)
        return cls(input_stream)

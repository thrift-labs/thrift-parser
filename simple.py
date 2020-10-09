
from sly import Lexer, Parser

# https://thrift.apache.org/docs/idl

class ThriftLexer(Lexer):
    tokens = { INCLUDE, IDENTIFIER, COMMA, SEMICOLON, NUMBER, STRING}
    literals = {':', ';', ',', '{', '}', '(', ')', '=', '<', '>', '[', ']', '*'}

    INCLUDE = r'include'
    IDENTIFIER = r'[a-zA-Z_](\.[a-zA-Z_0-9]|[a-zA-Z_0-9])*'
    NUMBER = r'\d+'
    COMMA = r'\,'
    SEMICOLON = r'\;'
    STRING = r'[\"\']([^\\\n]|(\\.))*?[\"\']'

    ignore = ' \t'
    ignore_SILLYCOMM = r'\/\*\**\*\/'
    ignore_MULTICOMM = r'\/\*[^*]\/*([^*/]|[^*]\/|\*[^/])*\**\*\/'
    ignore_DOCTEXT = r'\/\*\*([^*/]|[^*]\/|\*[^/])*\**\*\/'
    ignore_COMMENT = r'\/\/[^\n]*'
    ignore_UNIXCOMMENT = r'\#[^\n]*'

    @_(r'\n+')
    def newline(self, t):
        self.lineno += t.value.count('\n')

    def error(self, t):
        print("Illegal character '%s'" % t.value[0])
        self.index += 1


class ThriftParser(Parser):
    tokens = ThriftLexer.tokens

    precedence = (
        ('right', '{', '('),
        ('left', '}', ')'),
    )


    @_('INCLUDE STRING')
    def statement(self, p):
        print("include", p.__dict__, p)

    @_('"{" expr "}"')
    def statement(self, p):
        print(p)

    @_('"(" expr ")"')
    def statement(self, p):
        print(p)

    @_('NUMBER IDENTIFIER IDENTIFIER COMMA')
    def statement(self, p):
        print(p)

    @_('NUMBER ":" IDENTIFIER IDENTIFIER COMMA')
    def statement(self, p):
        print("param", p.__dict__)

    @_('NUMBER ":" IDENTIFIER IDENTIFIER SEMICOLON')
    def statement(self, p):
        print("field or param", p.__dict__)

    @_('NUMBER')
    def expr(self, p):
        print("number", p.__dict__)

    @_('IDENTIFIER')
    def expr(self, p):
        print("expr", p.__dict__)


if __name__ == '__main__':
    with open('./tutorial/tutorial.thrift', 'r') as f:
        text = f.read()
        lexer = ThriftLexer()
        for token in lexer.tokenize(text):
            print(token)

        print('--------------split----------')
        lexer = ThriftLexer()
        parser = ThriftParser()
        parser.parse(lexer.tokenize(text))

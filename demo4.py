import re

from sly import Lexer, Parser


class LiteralLexer(Lexer):
    tokens = {
        IDENTIFIER,
        LITERAL,
    }

    # this can not find "b = \\" ok \\" "
    # LITERAL = r'("[^"]*")' + '|' + r"('[^']*')"

    # this build error
    # LITERAL = r'''(\"|\')((?<!\\)\\\1|.)*?\1'''

    LITERAL = r'''(\"|\')((?<!\\)\\\2|.)*?\2'''

    IDENTIFIER = r'[a-zA-Z_][a-zA-Z0-9._]*'

    ignore = ' \t'
    ignore_newline = r'\n+'

    def ignore_newline(self, t):
        self.lineno += t.value.count('\n')

    def error(self, t):
        print("Illegal character '%s'" % t.value[0])
        self.index += 1


if __name__ == '__main__':
    file = './tutorial/simple.thrift'
    with open(file, 'r') as f:
        text = f.read()

    lexer = LiteralLexer()
    for token in lexer.tokenize(text):
        print(token)

    m = re.compile(r'''(\"|\')((?<!\\)\\\1|.)*?\1''').match('''"b = \\" ok \\" "''')
    print(m)
    # error here
    # m = re.compile(LiteralLexer.LITERAL).match(text)
    # print(m)


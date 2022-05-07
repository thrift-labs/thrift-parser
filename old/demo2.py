from sly import Lexer, Parser


class NumberLexer(Lexer):
    tokens = {
        INT_CONSTANT,
        DOUBLE_CONSTANT,
    }

    DOUBLE_CONSTANT = r'\d*(((\.\d+)([Ee](\+|-)?\d+)?)|((\.\d+)?([Ee](\+|-)?\d+)))'
    INT_CONSTANT = r'\d+'


    ignore = ' \t'
    ignore_newline = r'\n+'

    def ignore_newline(self, t):
        self.lineno += t.value.count('\n')

    def error(self, t):
        print("Illegal character '%s'" % t.value[0])
        self.index += 1


if __name__ == '__main__':
    text = '''
1
.3
1.2
1.03
1.00003E10'''
    lexer = NumberLexer()
    for token in lexer.tokenize(text):
        print(token)

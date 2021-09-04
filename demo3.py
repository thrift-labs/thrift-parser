from sly import Lexer, Parser


class NumberLexer(Lexer):
    tokens = {
        IDENTIFIER,
        BASE_TYPE,
    }

    IDENTIFIER = r'[a-zA-Z_][a-zA-Z0-9._]*'
    IDENTIFIER['string'] = BASE_TYPE
    IDENTIFIER['bool'] = BASE_TYPE

    types = r'bool|byte|i8|i16|i32|i64|double|string|binary|slist'.split('|')
    for token in types:
        IDENTIFIER[token] = BASE_TYPE

    ignore = ' \t'
    ignore_newline = r'\n+'

    def ignore_newline(self, t):
        self.lineno += t.value.count('\n')

    def error(self, t):
        print("Illegal character '%s'" % t.value[0])
        self.index += 1


if __name__ == '__main__':
    text = '''
int x
string y
string string_value
bool z'''

    lexer = NumberLexer()
    for token in lexer.tokenize(text):
        print(token)

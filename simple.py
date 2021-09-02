from sly import Lexer, Parser


class ThriftLexer(Lexer):
    tokens = { INCLUDE, CPP_INCLUDE, NAMESPACE, NAMESPACE_SCOPE,
        CONST, TYPEDEF, ENUM, SENUM, STRUCT, UNION, EXCEPTION,
        SERVICE, EXTENDS, REQUIRED, OPTIONAL, ONE_WAY, VOID, THROWS,
        MAP_TYPE, SET_TYPE, LIST_TYPE, BASE_TYPE, CPP_TYPE,
        XSD_ALL, XSD_OPTIONAL, XSD_NILLABLE, XSD_ATTRS,
        REVERSED_KEYWORDS,
        L_BRACE, L_PAREN, L_ANGLE, L_BRACKS,
        R_BRACE, R_PAREN, R_ANGLE, R_BRACKS,
        COMMA, COLON, ASSIGN, POSITIVE, NEGATIVE, SEMI,
        INT_CONSTANT, DOUBLE_CONSTANT,
        LITERAL, IDENTIFIER, STIDENTIFIER, LIST_SEPARATOR,
        ONE_LINE_COMMENT, LINES_COMMENT,
    }

    ignore = ' \t'

    # https://thrift.apache.org/docs/idl
    INCLUDE = r'include'
    CPP_INCLUDE = r'cpp_include'
    NAMESPACE = r'namespace'
    NAMESPACE_SCOPE = r'cl|c_glib|cpp|dart|delphi|haxe|go|java|js|lua|netstd|perl|php|py|py\.twisted|rb|st|xsd'

    CONST = r'const'
    TYPEDEF = r'typedef'
    ENUM = r'enum'
    SENUM = r'senum'
    STRUCT = r'struct'
    UNION = r'union'
    EXCEPTION = r'exception'
    SERVICE = r'service'
    EXTENDS = r'extends'
    REQUIRED = r'required'
    OPTIONAL = r'optional'
    ONE_WAY = r'oneway'
    VOID = r'void'
    THROWS = r'throws'
    MAP_TYPE = r'map'
    SET_TYPE = r'SET'
    LIST_TYPE = 'list'

    BASE_TYPE = r'bool|byte|i8|i16|i32|i64|double|string|binary|slist'
    CPP_TYPE = r'cpp_type'

    XSD_ALL = r'xsd_all'
    XSD_OPTIONAL = r'xsd_optional'
    XSD_NILLABLE = r'xsd_nillable'
    XSD_ATTRS = r'xsd_attrs'

    REVERSED_KEYWORD_LIST = ["BEGIN", "END", "__CLASS__", "__DIR__", "__FILE__", "__FUNCTION__",
"__LINE__", "__METHOD__", "__NAMESPACE__", "abstract", "alias", "and", "args", "as",
"assert", "begin", "break", "case", "catch", "class", "clone", "continue", "declare",
"def", "default", "del", "delete", "do", "dynamic", "elif", "else", "elseif", "elsif",
"end", "enddeclare", "endfor", "endforeach", "endif", "endswitch", "endwhile", "ensure",
"except", "exec", "finally", "float", "for", "foreach", "from", "function", "global",
"goto", "if", "implements", "import", "in", "inline", "instanceof", "interface", "is",
"lambda", "module", "native", "new", "next", "nil", "not", "or", "package", "pass",
"public", "print", "private", "protected", "raise", "redo", "rescue", "retry", "register",
"return", "self", "sizeof", "static", "super", "switch", "synchronized", "then", "this",
"throw", "transient", "try", "undef", "unless", "unsigned", "until", "use", "var",
"virtual", "volatile", "when", "while", "with", "xor", "yield"]
    REVERSED_KEYWORDS = r'|'.join(REVERSED_KEYWORD_LIST)

    L_BRACE = r'{'
    R_BRACE = r'}'
    L_PAREN = r'\('
    R_PAREN = r'\)'
    L_ANGLE = r'<'
    R_ANGLE = r'>'
    L_BRACKS = r'\['
    R_BRACKS = r'\]'

    COMMA = r','
    COLON = r':'
    ASSIGN = r'='
    POSITIVE = r'\+'
    NEGATIVE = r'-'
    SEMI = r';'

    DOUBLE_CONSTANT = r'[+-]?\d+(\.\d+)?([Ee]\d+)?'
    INT_CONSTANT = r'\d+'

    LITERAL = r'("[^"]*")' + '|' + r"('[^']*')"

    IDENTIFIER = r'[a-zA-Z_][a-zA-Z0-9._]*'
    STIDENTIFIER = r'[a-zA-Z_][a-zA-Z0-9._-]*'
    LIST_SEPARATOR = r',|;'

    ONE_LINE_COMMENT = r'(//|#)[^\n]*'
    LINES_COMMENT = r'(/\*(.|\n)*?\*/)'

    #IDENTIFIER['namespace'] = NAMESPACE
    #IDENTIFIER['namespace'] = NAMESPACE

    ignore_newline = r'\n+'

    # Extra action for newlines
    def ignore_newline(self, t):
        self.lineno += t.value.count('\n')

    def error(self, t):
        print("Illegal character '%s'" % t.value[0])
        self.index += 1

'''
class ThriftParser(Parser):
    tokens = ThriftLexer.tokens
'''


if __name__ == '__main__':
    with open('./tutorial/tutorial.thrift', 'r') as f:
        text = f.read()
        lexer = ThriftLexer()
        for token in lexer.tokenize(text):
            print(token)

        print('--------------split----------')
        '''
        lexer = ThriftLexer()
        parser = ThriftParser()
        parser.parse(lexer.tokenize(text))
        '''

    with open('./tutorial/shared.thrift', 'r') as f:
        text = f.read()
        lexer = ThriftLexer()
        for token in lexer.tokenize(text):
            print(token)

        '''
        print('--------------split----------')
        lexer = ThriftLexer()
        parser = ThriftParser()
        parser.parse(lexer.tokenize(text))
        '''

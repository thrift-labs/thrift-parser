from sly import Lexer, Parser


# https://thrift.apache.org/docs/idl


class ThriftLexer(Lexer):
    tokens = { INCLUDE, CPP_INCLUDE, NAMESPACE, NAMESPACE_SCOPE,
        CONST, TYPEDEF, ENUM, SENUM, STRUCT, UNION, EXCEPTION,
        SERVICE, EXTENDS, REQUIRED, OPTIONAL, ONE_WAY, VOID, THROWS,
        MAP, SET, LIST, BASE_TYPE, CPP_TYPE,
        XSD_ALL, XSD_OPTIONAL, XSD_NILLABLE, XSD_ATTRS,
        REVERSED_KEYWORDS,
        L_BRACE, L_PAREN, L_ANGLE, L_BRACKS,
        R_BRACE, R_PAREN, R_ANGLE, R_BRACKS,
        COMMA, COLON, ASSIGN, POSITIVE, NEGATIVE, SEMI,
        INT_CONSTANT, DOUBLE_CONSTANT,
        LITERAL, IDENTIFIER, STIDENTIFIER,
        # ONE_LINE_COMMENT, LINES_COMMENT,
    }

    ignore = ' \t'

    # https://thrift.apache.org/docs/idl
    INCLUDE = r'include'
    CPP_INCLUDE = r'cpp_include'
    NAMESPACE = r'namespace'

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
    MAP = r'map'
    SET = r'SET'
    LIST = 'list'

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
    # [6]  NamespaceScope  ::=  '*' | 'c_glib' | 'cpp' | 'delphi' | 'haxe' | 'go' | 'java' | 'js' | 'lua' | 'netstd' | 'perl' | 'php' | 'py' | 'py.twisted' | 'rb' | 'st' | 'xsd'
    NAMESPACE_SCOPE = r'cl|c_glib|cpp|dart|delphi|haxe|go|java|js|lua|netstd|perl|php|py|py\.twisted|rb|st|xsd'

    LITERAL = r'("[^"]*")' + '|' + r"('[^']*')"

    IDENTIFIER = r'[a-zA-Z_][a-zA-Z0-9._]*'
    STIDENTIFIER = r'[a-zA-Z_][a-zA-Z0-9._-]*'

    #ONE_LINE_COMMENT = r'(//|#)[^\n]*'
    #LINES_COMMENT = r'(/\*(.|\n)*?\*/)'

    ignore_newline = r'\n+'
    ignore_comment = r'((//|#)[^\n]*)|(/\*(.|\n)*?\*/)'

    # Extra action for newlines
    def ignore_newline(self, t):
        self.lineno += t.value.count('\n')

    def error(self, t):
        print("Illegal character '%s'" % t.value[0])
        self.index += 1


class ThriftParser(Parser):
    tokens = ThriftLexer.tokens
    precedence = ()

    @_("{ Header } { Definition }")
    def Document(self, p):
        # [1]  Document        ::=  Header* Definition*
        print(p)

    @_("Include", "CppInclude", "Namespace")
    def Header(self, p):
        # [2]  Header          ::=  Include | CppInclude | Namespace
        print(p)

    @_("INCLUDE LITERAL")
    def Include(self, p):
        # [3]  Include         ::=  'include' Literal
        print(p)

    @_("CPP_INCLUDE LITERAL")
    def CppInclude(self, p):
        # [4]  CppInclude      ::=  'cpp_include' Literal
        print(p)

    @_("NAMESPACE NAMESPACE_SCOPE IDENTIFIER")
    def Namespace(self, p):
        # [5]  Namespace       ::=  ( 'namespace' ( NamespaceScope Identifier ) )
        print(p)

    # NamespaceScope
    # [6]  NamespaceScope  ::=  '*' | 'c_glib' | 'cpp' | 'delphi' | 'haxe' | 'go' | 'java' | 'js' | 'lua' | 'netstd' | 'perl' | 'php' | 'py' | 'py.twisted' | 'rb' | 'st' | 'xsd'

    @_("Const", "Typedef", "Enum", "Senum", "Struct", "Union", "Exception", "Service")
    def Definition(self, p):
        # [7]  Definition      ::=  Const | Typedef | Enum | Senum | Struct | Union | Exception | Service
        print(p)

    @_("CONST FieldType IDENTIFIER ASSIGN ConstValue [ ListSeparator ]")
    def Const(self, p):
        # [8]  Const           ::=  'const' FieldType Identifier '=' ConstValue ListSeparator?
        print(p)

    @_("TYPEDEF DefinitionType IDENTIFIER")
    def Typedef(self, p):
        # [9]  Typedef         ::=  'typedef' DefinitionType Identifier
        print(p)

    @_("ENUM IDENTIFIER L_BRACE { EnumItem } R_BRACE")
    def Enum(self, p):
        # [10] Enum            ::=  'enum' Identifier '{' (Identifier ('=' IntConstant)? ListSeparator?)* '}'
        print(p)

    @_("IDENTIFIER [ ListSeparator ]")
    def EnumItem(self, p):
        # [10] Enum            ::=  'enum' Identifier '{' (Identifier ('=' IntConstant)? ListSeparator?)* '}'
        print(p)

    @_("IDENTIFIER ASSIGN INT_CONSTANT [ ListSeparator ]")
    def EnumItem(self, p):
        # [10] Enum            ::=  'enum' Identifier '{' (Identifier ('=' IntConstant)? ListSeparator?)* '}'
        print(p)

    @_("SENUM IDENTIFIER L_BRACE { SenumItem } R_BRACE")
    def Senum(self, p):
        # [11] Senum           ::=  'senum' Identifier '{' (Literal ListSeparator?)* '}'
        print(p)

    @_("LITERAL [ ListSeparator ]")
    def SenumItem(self, p):
        print(p)

    @_("STRUCT IDENTIFIER [ XSD_ALL ] L_BRACE { Field } R_BRACE")
    def Struct(self, p):
        # [12] Struct          ::=  'struct' Identifier 'xsd_all'? '{' Field* '}'
        print(p)

    @_("UNION IDENTIFIER [ XSD_ALL ] L_BRACE { Field } R_BRACE")
    def Union(self, p):
        # [13] Union          ::=  'union' Identifier 'xsd_all'? '{' Field* '}'
        print(p)

    @_("EXCEPTION IDENTIFIER L_BRACE { Field } R_BRACE")
    def Exception(self, p):
        # [14] Exception       ::=  'exception' Identifier '{' Field* '}'
        pass

    @_("SERVICE IDENTIFIER [ EXTENDS IDENTIFIER ] L_BRACE { Function } R_BRACE")
    def Service(self, p):
        # [15] Service         ::=  'service' Identifier ( 'extends' Identifier )? '{' Function* '}'
        pass

    @_("[ FieldID ] [ FieldReq ] FieldType IDENTIFIER [ ASSIGN ConstValue ] XsdFieldOptions [ ListSeparator ]")
    def Field(self, p):
        # [16] Field           ::=  FieldID? FieldReq? FieldType Identifier ('=' ConstValue)? XsdFieldOptions ListSeparator?
        print(p)

    @_("INT_CONSTANT COLON")
    def FieldID(self, p):
        # [17] FieldID         ::=  IntConstant ':'
        print(p)

    @_("REQUIRED", "OPTIONAL")
    def FieldReq(self, p):
        # [18] FieldReq        ::=  'required' | 'optional'
        print(p)

    @_("[ XSD_OPTIONAL ] [ XSD_NILLABLE ] [ XsdAttrs ]")
    def XsdFieldOptions(self, p):
        # [19] XsdFieldOptions ::=  'xsd_optional'? 'xsd_nillable'? XsdAttrs?
        pass

    @_("XSD_ATTRS L_BRACE { Field } R_BRACE")
    def XsdAttrs(self, p):
        # [20] XsdAttrs        ::=  'xsd_attrs' '{' Field* '}'
        pass

    @_("[ ONE_WAY ] FunctionType IDENTIFIER L_PAREN { Field } R_PAREN [ Throws ] [ ListSeparator ]")
    def Function(self, p):
        # [21] Function        ::=  'oneway'? FunctionType Identifier '(' Field* ')' Throws? ListSeparator?
        pass

    @_("FieldType", "VOID")
    def FunctionType(self, p):
        # [22] FunctionType    ::=  FieldType | 'void'
        pass

    @_("THROWS L_PAREN { Field } R_PAREN")
    def Throws(self, p):
        # [23] Throws          ::=  'throws' '(' Field* ')'
        pass

    @_("IDENTIFIER", "BASE_TYPE", "ContainerType")
    def FieldType(self, p):
        # [24] FieldType       ::=  Identifier | BaseType | ContainerType
        pass

    @_("BASE_TYPE", "ContainerType")
    def DefinitionType(self, p):
        # [25] DefinitionType  ::=  BaseType | ContainerType
        pass

    # BASE_TYPE
    # [26] BaseType        ::=  'bool' | 'byte' | 'i8' | 'i16' | 'i32' | 'i64' | 'double' | 'string' | 'binary' | 'slist'

    @_("MapType", "SetType", "ListType")
    def ContainerType(self, p):
        # [27] ContainerType   ::=  MapType | SetType | ListType
        pass

    @_("MAP [ CppType ] L_ANGLE FieldType COMMA FieldType R_ANGLE")
    def MapType(self, p):
        # [28] MapType         ::=  'map' CppType? '<' FieldType ',' FieldType '>'
        pass

    @_("SET [ CppType ] L_ANGLE FieldType R_ANGLE")
    def SetType(self, p):
        # [29] SetType         ::=  'set' CppType? '<' FieldType '>'
        pass

    @_("LIST L_ANGLE FieldType R_ANGLE [ CppType ]")
    def ListType(self, p):
        # [30] ListType        ::=  'list' '<' FieldType '>' CppType?
        pass

    @_("CPP_TYPE LITERAL")
    def CppType(self, p):
        # [31] CppType         ::=  'cpp_type' Literal
        pass

    @_("IntConstant", "DoubleConstant", "LITERAL", "IDENTIFIER", "ConstList", "ConstMap")
    def ConstValue(self, p):
        # [32] ConstValue      ::=  IntConstant | DoubleConstant | Literal | Identifier | ConstList | ConstMap
        print(p)

    @_("[ Sign ] INT_CONSTANT")
    def IntConstant(self, p):
        # # [33] IntConstant     ::=  ('+' | '-')? Digit+
        pass

    @_("[ Sign ] DOUBLE_CONSTANT")
    def DoubleConstant(self, p):
        # [34] DoubleConstant  ::=  ('+' | '-')? Digit* ('.' Digit+)? ( ('E' | 'e') IntConstant )?
        pass

    @_("POSITIVE", "NEGATIVE")
    def Sign(self, p):
        pass

    @_("L_BRACKS { ConstValue [ ListSeparator ] } R_BRACKS")
    def ConstList(self, p):
        # [35] ConstList       ::=  '[' (ConstValue ListSeparator?)* ']'
        pass

    @_("L_BRACE { ConstValue COLON ConstValue [ ListSeparator ] } R_BRACE")
    def ConstMap(self, p):
        # [36] ConstMap        ::=  '{' (ConstValue ':' ConstValue ListSeparator?)* '}'
        pass

    # Literal
    # [37] Literal         ::=  ('"' [^"]* '"') | ("'" [^']* "'")

    #Identifier
    #[38] Identifier      ::=  ( Letter | '_' ) ( Letter | Digit | '.' | '_' )*

    # STIdentifier
    # [39] STIdentifier    ::=  ( Letter | '_' ) ( Letter | Digit | '.' | '_' | '-' )*

    @_("COMMA", "SEMI")
    def ListSeparator(self, p):
        # [40] ListSeparator   ::=  ',' | ';'
        print(p)

    # [41] Letter          ::=  ['A'-'Z'] | ['a'-'z']
    # [42] Digit           ::=  ['0'-'9']


if __name__ == '__main__':
    with open('./tutorial/tutorial.thrift', 'r') as f:
        text = f.read()
        lexer = ThriftLexer()
        for token in lexer.tokenize(text):
            pass
            # print(token)

        print('--------------split----------')
        lexer = ThriftLexer()
        parser = ThriftParser()
        parser.parse(lexer.tokenize(text))

    '''
    with open('./tutorial/shared.thrift', 'r') as f:
        text = f.read()
        lexer = ThriftLexer()
        for token in lexer.tokenize(text):
            print(token)

        print('--------------split----------')
        lexer = ThriftLexer()
        parser = ThriftParser()
        parser.parse(lexer.tokenize(text))
        '''

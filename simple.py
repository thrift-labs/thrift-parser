from sly import Lexer, Parser


# https://thrift.apache.org/docs/idl


class ThriftLexer(Lexer):
    tokens = {
        L_BRACE, L_PAREN, L_ANGLE, L_BRACKS,
        R_BRACE, R_PAREN, R_ANGLE, R_BRACKS,
        COMMA, COLON, ASSIGN, POSITIVE, NEGATIVE, SEMI, ASTERISK,
        INT_CONSTANT, DOUBLE_CONSTANT,
        LITERAL, IDENTIFIER, STIDENTIFIER,
        # ONE_LINE_COMMENT, LINES_COMMENT,
        INCLUDE, CPP_INCLUDE, NAMESPACE,
        CONST, TYPEDEF, ENUM, SENUM, STRUCT, UNION, EXCEPTION,
        SERVICE, EXTENDS, REQUIRED, OPTIONAL, ONEWAY, VOID, THROWS,
        MAP, SET, LIST, BASE_TYPE, CPP_TYPE,
        XSD_ALL, XSD_OPTIONAL, XSD_NILLABLE, XSD_ATTRS,
        # REVERSED_KEYWORDS,
    }

    ignore = ' \t'

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
    ASTERISK = r'\*'

    DOUBLE_CONSTANT = r'((\d+|(\d*\.\d+))[Ee][\+-]?\d+)|(\d*\.\d+)'
    INT_CONSTANT = r'\d+'

    LITERAL = r'("[^"]*")' + '|' + r"('[^']*')"
    IDENTIFIER = r'[a-zA-Z_][a-zA-Z0-9._]*'
    STIDENTIFIER = r'[a-zA-Z_][a-zA-Z0-9._-]*'

    # https://thrift.apache.org/docs/idl
    IDENTIFIER['include'] = INCLUDE
    IDENTIFIER['cpp_include'] = CPP_INCLUDE
    IDENTIFIER['namespace'] = NAMESPACE

    IDENTIFIER['const'] = CONST
    IDENTIFIER['typedef'] = TYPEDEF
    IDENTIFIER['enum'] = ENUM
    IDENTIFIER['senum'] = SENUM
    IDENTIFIER['struct'] = STRUCT
    IDENTIFIER['union'] = UNION
    IDENTIFIER['exception'] = EXCEPTION
    IDENTIFIER['service'] = SERVICE
    IDENTIFIER['extends'] = EXTENDS
    IDENTIFIER['required'] = REQUIRED
    IDENTIFIER['optional'] = OPTIONAL
    IDENTIFIER['oneway'] = ONEWAY
    IDENTIFIER['void'] = VOID
    IDENTIFIER['throws'] = THROWS
    IDENTIFIER['map'] = MAP
    IDENTIFIER['set'] = SET
    IDENTIFIER['list'] = LIST

    IDENTIFIER['bool'] = BASE_TYPE
    IDENTIFIER['byte'] = BASE_TYPE
    IDENTIFIER['i8'] = BASE_TYPE
    IDENTIFIER['i16'] = BASE_TYPE
    IDENTIFIER['i32'] = BASE_TYPE
    IDENTIFIER['i64'] = BASE_TYPE
    IDENTIFIER['double'] = BASE_TYPE
    IDENTIFIER['string'] = BASE_TYPE
    IDENTIFIER['binary'] = BASE_TYPE
    IDENTIFIER['slist'] = BASE_TYPE

    IDENTIFIER['cpp_type'] = CPP_TYPE

    IDENTIFIER['xsd_all'] = XSD_ALL
    IDENTIFIER['xsd_optional'] = XSD_OPTIONAL
    IDENTIFIER['xsd_nillable'] = XSD_NILLABLE
    IDENTIFIER['xsd_attrs'] = XSD_ATTRS

    # TODO
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
    # REVERSED_KEYWORDS = r'|'.join(REVERSED_KEYWORD_LIST)

    # ONE_LINE_COMMENT = r'(//|#)[^\n]*'
    # LINES_COMMENT = r'(/\*(.|\n)*?\*/)'

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
        pass

    @_("Include", "CppInclude", "Namespace")
    def Header(self, p):
        # [2]  Header          ::=  Include | CppInclude | Namespace
        pass

    @_("INCLUDE LITERAL")
    def Include(self, p):
        # [3]  Include         ::=  'include' Literal
        pass

    @_("CPP_INCLUDE LITERAL")
    def CppInclude(self, p):
        # [4]  CppInclude      ::=  'cpp_include' Literal
        pass

    @_("NAMESPACE NamespaceScope IDENTIFIER")
    def Namespace(self, p):
        # [5]  Namespace       ::=  ( 'namespace' ( NamespaceScope Identifier ) )
        pass

    # @_("'*' | 'c_glib' | 'cpp' | 'delphi' | 'haxe' | 'go' | 'java' | 'js' | 'lua' | 'netstd' | 'perl' | 'php' | 'py' | 'py.twisted' | 'rb' | 'st' | 'xsd'","IDENTIFIER")
    @_("IDENTIFIER", "ASTERISK")
    def NamespaceScope(self, p):
        # # [6]  NamespaceScope  ::=  '*' | 'c_glib' | 'cpp' | 'delphi' | 'haxe' | 'go' | 'java' | 'js' | 'lua' | 'netstd' | 'perl' | 'php' | 'py' | 'py.twisted' | 'rb' | 'st' | 'xsd'
        pass

    @_("Const", "Typedef", "Enum", "Senum", "Struct", "Union", "Exception", "Service")
    def Definition(self, p):
        # [7]  Definition      ::=  Const | Typedef | Enum | Senum | Struct | Union | Exception | Service
        pass

    @_("CONST FieldType IDENTIFIER ASSIGN ConstValue [ ListSeparator ]")
    def Const(self, p):
        # [8]  Const           ::=  'const' FieldType Identifier '=' ConstValue ListSeparator?
        pass

    @_("TYPEDEF DefinitionType IDENTIFIER")
    def Typedef(self, p):
        # [9]  Typedef         ::=  'typedef' DefinitionType Identifier
        pass

    @_("ENUM IDENTIFIER L_BRACE { EnumItem } R_BRACE")
    def Enum(self, p):
        # [10] Enum            ::=  'enum' Identifier '{' (Identifier ('=' IntConstant)? ListSeparator?)* '}'
        pass

    @_("IDENTIFIER [ ListSeparator ]")
    def EnumItem(self, p):
        # [10] Enum            ::=  'enum' Identifier '{' (Identifier ('=' IntConstant)? ListSeparator?)* '}'
        pass

    @_("IDENTIFIER ASSIGN IntConstant [ ListSeparator ]")
    def EnumItem(self, p):
        # [10] Enum            ::=  'enum' Identifier '{' (Identifier ('=' IntConstant)? ListSeparator?)* '}'
        pass

    @_("SENUM IDENTIFIER L_BRACE { SenumItem } R_BRACE")
    def Senum(self, p):
        # [11] Senum           ::=  'senum' Identifier '{' (Literal ListSeparator?)* '}'
        pass

    @_("LITERAL [ ListSeparator ]")
    def SenumItem(self, p):
        # [11] Senum           ::=  'senum' Identifier '{' (Literal ListSeparator?)* '}'
        pass

    @_("STRUCT IDENTIFIER [ XSD_ALL ] L_BRACE { Field } R_BRACE")
    def Struct(self, p):
        # [12] Struct          ::=  'struct' Identifier 'xsd_all'? '{' Field* '}'
        pass

    @_("UNION IDENTIFIER [ XSD_ALL ] L_BRACE { Field } R_BRACE")
    def Union(self, p):
        # [13] Union          ::=  'union' Identifier 'xsd_all'? '{' Field* '}'
        pass

    @_("EXCEPTION IDENTIFIER L_BRACE { Field } R_BRACE")
    def Exception(self, p):
        # [14] Exception       ::=  'exception' Identifier '{' Field* '}'
        pass

    @_("SERVICE IDENTIFIER [ EXTENDS IDENTIFIER ] L_BRACE { Function } R_BRACE")
    def Service(self, p):
        # [15] Service         ::=  'service' Identifier ( 'extends' Identifier )? '{' Function* '}'
        pass

    @_("FieldID [ FieldReq ] FieldType IDENTIFIER [ ASSIGN ConstValue ] XsdFieldOptions [ ListSeparator ]")
    def Field(self, p):
        # NOTE: FieldID may not be empty
        # [16] Field           ::=  FieldID? FieldReq? FieldType Identifier ('=' ConstValue)? XsdFieldOptions ListSeparator?
        pass

    @_("INT_CONSTANT COLON")
    def FieldID(self, p):
        # [17] FieldID         ::=  IntConstant ':'
        pass

    @_("REQUIRED", "OPTIONAL")
    def FieldReq(self, p):
        # [18] FieldReq        ::=  'required' | 'optional'
        pass

    @_("[ XSD_OPTIONAL ] [ XSD_NILLABLE ] [ XsdAttrs ]")
    def XsdFieldOptions(self, p):
        # [19] XsdFieldOptions ::=  'xsd_optional'? 'xsd_nillable'? XsdAttrs?
        pass

    @_("XSD_ATTRS L_BRACE { Field } R_BRACE")
    def XsdAttrs(self, p):
        # [20] XsdAttrs        ::=  'xsd_attrs' '{' Field* '}'
        pass

    @_("[ ONEWAY ] FunctionType IDENTIFIER L_PAREN { Field } R_PAREN [ Throws ] [ ListSeparator ]")
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

    @_("IDENTIFIER", "BaseType", "ContainerType")
    def FieldType(self, p):
        # [24] FieldType       ::=  Identifier | BaseType | ContainerType
        pass

    @_("BaseType", "ContainerType")
    def DefinitionType(self, p):
        # [25] DefinitionType  ::=  BaseType | ContainerType
        pass

    @_("BASE_TYPE")
    def BaseType(self, p):
        # [26] BaseType        ::=  'bool' | 'byte' | 'i8' | 'i16' | 'i32' | 'i64' | 'double' | 'string' | 'binary' | 'slist'
        pass

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
        pass

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
        pass

    # [41] Letter          ::=  ['A'-'Z'] | ['a'-'z']
    # [42] Digit           ::=  ['0'-'9']

    def error(self, p):
        import pdb
        pdb.set_trace()
        print(p)


def run_file(file):
    print(f'---run file {file}----------')
    with open(file, 'r') as f:
        text = f.read()
        lexer = ThriftLexer()
        for token in lexer.tokenize(text):
            pass
        lexer = ThriftLexer()
        parser = ThriftParser()
        parser.parse(lexer.tokenize(text))


if __name__ == '__main__':
    run_file('./tutorial/tutorial.thrift')
    run_file('./tutorial/shared.thrift')
    run_file('./tutorial/ThriftTest.thrift')

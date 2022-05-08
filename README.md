# thrift-parser

```bash
pip install thrift-parser
```

`Thrift.g4` is from https://github.com/antlr/grammars-v4


## parse

```python
from thrift_parser import parse_file

lexer, tokens, parser, document = parse_file('tutorial.thrift')
```

or you can try antlr's way

```python
from antlr4 import FileStream
from antlr4 import CommonTokenStream
from antlr4 import ParserRuleContext

from thrift_parser.ThriftLexer import ThriftLexer
from thrift_parser.ThriftParser import ThriftParser


def main(file):
    input_stream = FileStream(file, encoding='utf8')
    lexer = ThriftLexer(input_stream)
    stream = CommonTokenStream(lexer)
    parser = ThriftParser(stream)
    ctx = ParserRuleContext()

    parser.enterRule(ctx, 0, 0)
    document = parser.document()
    return document

```


# Why ? thrift-parser

python thrift parser --> thrift-fmt --> auto format my thrift files in one style


# Deprecated [My Old Try]

<s>python3 simple.py</s>s>

<s>1. include + struct + service</s>

1. 支持 Annotation (uri = 'https://github.com/')

list<
    map<
        set<i32> (python.immutable = ""),
        map<i32,
            set<
                list<
                    map<Insanity,string> (python.immutable = "")
                    >
                (python.immutable = "")
            >>>> list_field,


2. 支持解析 Comment


3. more test https://github.com/evernote/evernote-thrift/tree/master/src

4. ast 封装


## COPYING

将参考以下代码

https://thrift.apache.org/docs/idl

https://github.com/apache/thrift APACHE


sly: https://github.com/dabeaz/sly

ptsd: https://github.com/wickman/ptsd MIT

ply: https://github.com/dabeaz/ply BSD

js thrift-parser: https://github.com/eleme/thrift-parser MIT

annotationTest.thrift https://git-wip-us.apache.org/repos/asf?p=thrift.git;a=blob_plain;f=test/AnnotationTest.thrift;hb=HEAD
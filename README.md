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


# Why ?

python thrift parser --> thrift-fmt --> auto format my thrift files in one style


# TODO

1. remove last EOF in documents ?
2. more ast operate: like ServiceNode.Append(MethodNode), 这样可以动态生成 Thrift 文件
3. other language?
4. better code

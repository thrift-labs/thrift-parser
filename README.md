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


# Why ? thrift-parser

python thrift parser --> thrift-fmt --> auto format my thrift files in one style


# My Old Try

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
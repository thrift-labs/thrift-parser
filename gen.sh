#!/bin/sh

alias antlr4='java -jar /usr/local/lib/antlr-4.10.1-complete.jar'

antlr4 -Dlanguage=Python3 Thrift.g4 -o python/thrift_parser
antlr4 -Dlanguage=JavaScript Thrift.g4 -o ./javascript/src
# use antlr4ts
typescript/node_modules/.bin/antlr4ts Thrift.g4 -o typescript/src

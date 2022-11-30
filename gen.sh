#!/bin/sh

alias antlr4='java -jar /usr/local/lib/antlr-4.11.1-complete.jar'

rm -rf python/thrift_parser/Thrift*
antlr4 -Dlanguage=Python3 Thrift.g4 -o python/thrift_parser
rm -rf javascript/src/Thrift*
antlr4 -Dlanguage=JavaScript Thrift.g4 -o ./javascript/src

# use antlr4ts
cd typescript && npm install && cd ..
rm -rf typescript/src/Thrift*
typescript/node_modules/.bin/antlr4ts Thrift.g4 -o typescript/src

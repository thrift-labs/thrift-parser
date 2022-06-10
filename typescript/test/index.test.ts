import 'mocha';
import assert  from 'assert';

import { TerminalNode } from 'antlr4ts/tree';
import { ThriftData } from '../src';

describe('Thrift Data', function () {
    describe('test', function () {
      it('load thrift from string', function () {
        const data = ThriftData.from_string('include "shared.thrift"');
        assert.strictEqual(data.tokens.get(0).text, 'include');
        const header = data.document.getChild(0);
        const include = header.getChild(0);
        const token = include.getChild(0);
        assert.strictEqual(token.text, 'include');
        console.log(token);
        assert.ok(token instanceof TerminalNode);
        assert.strictEqual(token.childCount, 0);
      });
    });
});

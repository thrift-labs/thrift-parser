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

        assert.ok(token instanceof TerminalNode);
        assert.strictEqual(token.childCount, 0);
      });

      it('load literal value', function () {
        const thrift = `const string default_user = 'it\\'s name is \\" x \\" or \\'x\\' \\r\\t\\n';`
        const data = ThriftData.from_string(thrift);
        assert.strictEqual(data.tokens.get(0).text, 'const');

        const defines = data.document.getChild(0);
        const constValue = defines.getChild(0);
        const token = constValue.getChild(0);
        assert.strictEqual(token.text, 'const');

        assert.ok(token instanceof TerminalNode);
        assert.strictEqual(token.childCount, 0);

        assert.strictEqual(data.tokens.get(8).text, `'it\\'s name is \\" x \\" or \\'x\\' \\r\\t\\n'`);
      });

      it('load literal value2', function () {
        const thrift = `const string default_user = "\\'default_user\\'" ;
        const string default_name = '"abc\\'s"';`

        const data = ThriftData.from_string(thrift);
        assert.equal(true, data instanceof ThriftData);
        assert.notEqual(data.tokens.get(0).text, '');
      });

      it('test complex literal more', () => {
        const thrift = `const string default_user = "\\'default_user\\'" ;
        const string default_name = '"abc\\'s"';`
        const data = ThriftData.from_string(thrift);
        assert.equal(true, data instanceof ThriftData);
        assert.notEqual(data.tokens.get(0).text, '');
      })

      it('test read from file', () => {
        const data = ThriftData.from_file(
          '../fixtures/literal.thrift');
        assert.equal(true, data instanceof ThriftData);
        assert.equal(data.tokens.get(0).text, 'const');
        assert.equal(data.tokens.get(8).text, `"\\'default_user\\'"`);
        assert.equal(data.tokens.get(20).text, `'"abc\\'s"'`);
      })

    });
});

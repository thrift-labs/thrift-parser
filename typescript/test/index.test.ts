import 'mocha';
import assert  from 'assert';

import { ThriftData } from '../src';

describe('Array', function () {
    describe('#indexOf()', function () {
      it('should return -1 when the value is not present', function () {
        const data = ThriftData.from_string('include "shared.thrift"');
        assert.strictEqual(data.tokens.get(0).text, 'include');
      });
    });
});

import os
import glob

from antlr4 import ParserRuleContext

from thrift_parser import parse_file


TEST_DIR = os.path.dirname(os.path.abspath(__file__))


def get_abs_filepath(filepath):
    return os.path.abspath(os.path.join(TEST_DIR, filepath))


def test_files():
    files = glob.glob('./fixtures/*.thrift')
    for file in files:
        _, _, parser = parse_file(get_abs_filepath('../' + file))

        ctx = ParserRuleContext()
        parser.enterRule(ctx, 0, 0)
        document = parser.document()

        assert len(document.children) > 0


def test_load_normal():
    _, _, parser = parse_file(get_abs_filepath('../fixtures/tutorial.thrift'))

    ctx = ParserRuleContext()
    parser.enterRule(ctx, 0, 0)
    document = parser.document()

    assert len(document.children) > 0
    header = document.children[0]
    assert header.getText() == 'include"shared.thrift"'

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
        _, _, _, document = parse_file(get_abs_filepath('../' + file))
        assert len(document.children) > 0


def test_load_normal():
    _, _, _, document = parse_file(get_abs_filepath('../fixtures/tutorial.thrift'))

    assert len(document.children) > 0
    header = document.children[0]
    assert header.getText() == 'include"shared.thrift"'


def test_get_comments_tokens():
    _, Tokens, _, _ = parse_file(get_abs_filepath('../fixtures/tutorial.thrift'))
    comments = []
    for token in Tokens.tokens:
        if token.channel == 2:
            comments.append(token)

    assert len(comments) > 0

import os
import glob

from thrift_parser import parse_file, ThriftData


TEST_DIR = os.path.dirname(os.path.abspath(__file__))


def get_abs_filepath(filepath):
    return os.path.abspath(os.path.join(TEST_DIR, filepath))


def test_files():
    files = glob.glob('../../fixtures/*.thrift')
    for file in files:
        file = get_abs_filepath('../' + file)
        _, _, _, document = parse_file(file)
        assert len(document.children) > 0
        data = ThriftData.from_file(file)
        assert len(data.tokens) > 0
        assert len(data.document.children) > 0


def test_load_normal():
    _, _, _, document = parse_file(get_abs_filepath('../../fixtures/tutorial.thrift'))

    assert len(document.children) > 0
    header = document.children[0]
    assert header.getText() == 'include"shared.thrift"'


def test_get_comments_tokens():
    _, Tokens, _, _ = parse_file(get_abs_filepath('../../fixtures/tutorial.thrift'))
    comments = []
    for token in Tokens.tokens:
        if token.channel == 2:
            comments.append(token)

    assert len(comments) > 0


def test_from_str():
    data = ThriftData.from_str('include "shared.thrift"')
    assert data.tokens[0].text == 'include'


def test_literal_value():
    thrift = r'''
    const string default_user = "it\'s name is \" x \" ";
    '''
    data = data = ThriftData.from_str(thrift.strip())
    assert len(data.tokens) == 11
    assert data.tokens[8].text == r'"it\'s name is \" x \" "'

def test_literal_value_quote():
    thrift = '''
    const string default_user = 'it\\'s name is \\" x \\" or \\'x\\' \\r\\t\\n';
    '''
    data = data = ThriftData.from_str(thrift.strip())
    assert len(data.tokens) == 11
    assert data.tokens[8].text == '''
    'it\\'s name is \\" x \\" or \\'x\\' \\r\\t\\n'
    '''.strip()
    assert data.tokens[8].text == r'''
    'it\'s name is \" x \" or \'x\' \r\t\n'
    '''.strip()

def test_literal_value_with_annotation():
    thrift = r'''
    struct A {
        1: string id (go.tag = "gorm:\"primary_key\" json:\"id\" sq:\"eq,\"");
    }
    '''
    data = data = ThriftData.from_str(thrift.strip())
    assert len(data.tokens) == 24
    assert data.tokens[18].text == r'"gorm:\"primary_key\" json:\"id\" sq:\"eq,\""'

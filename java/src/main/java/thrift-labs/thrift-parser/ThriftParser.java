// Generated from Thrift.g4 by ANTLR 4.13.2
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast", "CheckReturnValue", "this-escape"})
public class ThriftParser extends Parser {
	static { RuntimeMetaData.checkVersion("4.13.2", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		T__0=1, T__1=2, T__2=3, T__3=4, T__4=5, T__5=6, T__6=7, T__7=8, T__8=9, 
		T__9=10, T__10=11, T__11=12, T__12=13, T__13=14, T__14=15, T__15=16, T__16=17, 
		T__17=18, T__18=19, T__19=20, T__20=21, T__21=22, T__22=23, T__23=24, 
		T__24=25, T__25=26, T__26=27, T__27=28, T__28=29, T__29=30, T__30=31, 
		T__31=32, T__32=33, T__33=34, T__34=35, T__35=36, INTEGER=37, HEX_INTEGER=38, 
		DOUBLE=39, TYPE_BOOL=40, TYPE_BYTE=41, TYPE_I16=42, TYPE_I32=43, TYPE_I64=44, 
		TYPE_DOUBLE=45, TYPE_STRING=46, TYPE_BINARY=47, LITERAL=48, IDENTIFIER=49, 
		COMMA=50, WS=51, SL_COMMENT=52, ML_COMMENT=53;
	public static final int
		RULE_document = 0, RULE_header = 1, RULE_include_ = 2, RULE_namespace_ = 3, 
		RULE_cpp_include = 4, RULE_definition = 5, RULE_const_rule = 6, RULE_typedef_ = 7, 
		RULE_enum_rule = 8, RULE_enum_field = 9, RULE_senum = 10, RULE_struct_ = 11, 
		RULE_union_ = 12, RULE_exception_ = 13, RULE_service = 14, RULE_field = 15, 
		RULE_field_id = 16, RULE_field_req = 17, RULE_function_ = 18, RULE_oneway = 19, 
		RULE_function_type = 20, RULE_throws_list = 21, RULE_type_annotations = 22, 
		RULE_type_annotation = 23, RULE_annotation_value = 24, RULE_field_type = 25, 
		RULE_base_type = 26, RULE_container_type = 27, RULE_map_type = 28, RULE_set_type = 29, 
		RULE_list_type = 30, RULE_cpp_type = 31, RULE_const_value = 32, RULE_integer = 33, 
		RULE_const_list = 34, RULE_const_map_entry = 35, RULE_const_map = 36, 
		RULE_list_separator = 37, RULE_real_base_type = 38;
	private static String[] makeRuleNames() {
		return new String[] {
			"document", "header", "include_", "namespace_", "cpp_include", "definition", 
			"const_rule", "typedef_", "enum_rule", "enum_field", "senum", "struct_", 
			"union_", "exception_", "service", "field", "field_id", "field_req", 
			"function_", "oneway", "function_type", "throws_list", "type_annotations", 
			"type_annotation", "annotation_value", "field_type", "base_type", "container_type", 
			"map_type", "set_type", "list_type", "cpp_type", "const_value", "integer", 
			"const_list", "const_map_entry", "const_map", "list_separator", "real_base_type"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'include'", "'namespace'", "'*'", "'cpp_namespace'", "'php_namespace'", 
			"'cpp_include'", "'const'", "'='", "'typedef'", "'enum'", "'{'", "'}'", 
			"'senum'", "'struct'", "'union'", "'exception'", "'service'", "'extends'", 
			"':'", "'required'", "'optional'", "'('", "')'", "'oneway'", "'async'", 
			"'void'", "'throws'", "'map'", "'<'", "'>'", "'set'", "'list'", "'cpp_type'", 
			"'['", "']'", "';'", null, null, null, "'bool'", "'byte'", "'i16'", "'i32'", 
			"'i64'", "'double'", "'string'", "'binary'", null, null, "','"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, "INTEGER", "HEX_INTEGER", "DOUBLE", "TYPE_BOOL", "TYPE_BYTE", "TYPE_I16", 
			"TYPE_I32", "TYPE_I64", "TYPE_DOUBLE", "TYPE_STRING", "TYPE_BINARY", 
			"LITERAL", "IDENTIFIER", "COMMA", "WS", "SL_COMMENT", "ML_COMMENT"
		};
	}
	private static final String[] _SYMBOLIC_NAMES = makeSymbolicNames();
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}

	@Override
	public String getGrammarFileName() { return "Thrift.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public ThriftParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@SuppressWarnings("CheckReturnValue")
	public static class DocumentContext extends ParserRuleContext {
		public TerminalNode EOF() { return getToken(ThriftParser.EOF, 0); }
		public List<HeaderContext> header() {
			return getRuleContexts(HeaderContext.class);
		}
		public HeaderContext header(int i) {
			return getRuleContext(HeaderContext.class,i);
		}
		public List<DefinitionContext> definition() {
			return getRuleContexts(DefinitionContext.class);
		}
		public DefinitionContext definition(int i) {
			return getRuleContext(DefinitionContext.class,i);
		}
		public DocumentContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_document; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ThriftListener ) ((ThriftListener)listener).enterDocument(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ThriftListener ) ((ThriftListener)listener).exitDocument(this);
		}
	}

	public final DocumentContext document() throws RecognitionException {
		DocumentContext _localctx = new DocumentContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_document);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(81);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 118L) != 0)) {
				{
				{
				setState(78);
				header();
				}
				}
				setState(83);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(87);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 255616L) != 0)) {
				{
				{
				setState(84);
				definition();
				}
				}
				setState(89);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(90);
			match(EOF);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class HeaderContext extends ParserRuleContext {
		public Include_Context include_() {
			return getRuleContext(Include_Context.class,0);
		}
		public Namespace_Context namespace_() {
			return getRuleContext(Namespace_Context.class,0);
		}
		public Cpp_includeContext cpp_include() {
			return getRuleContext(Cpp_includeContext.class,0);
		}
		public HeaderContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_header; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ThriftListener ) ((ThriftListener)listener).enterHeader(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ThriftListener ) ((ThriftListener)listener).exitHeader(this);
		}
	}

	public final HeaderContext header() throws RecognitionException {
		HeaderContext _localctx = new HeaderContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_header);
		try {
			setState(95);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__0:
				enterOuterAlt(_localctx, 1);
				{
				setState(92);
				include_();
				}
				break;
			case T__1:
			case T__3:
			case T__4:
				enterOuterAlt(_localctx, 2);
				{
				setState(93);
				namespace_();
				}
				break;
			case T__5:
				enterOuterAlt(_localctx, 3);
				{
				setState(94);
				cpp_include();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class Include_Context extends ParserRuleContext {
		public TerminalNode LITERAL() { return getToken(ThriftParser.LITERAL, 0); }
		public Include_Context(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_include_; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ThriftListener ) ((ThriftListener)listener).enterInclude_(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ThriftListener ) ((ThriftListener)listener).exitInclude_(this);
		}
	}

	public final Include_Context include_() throws RecognitionException {
		Include_Context _localctx = new Include_Context(_ctx, getState());
		enterRule(_localctx, 4, RULE_include_);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(97);
			match(T__0);
			setState(98);
			match(LITERAL);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class Namespace_Context extends ParserRuleContext {
		public List<TerminalNode> IDENTIFIER() { return getTokens(ThriftParser.IDENTIFIER); }
		public TerminalNode IDENTIFIER(int i) {
			return getToken(ThriftParser.IDENTIFIER, i);
		}
		public TerminalNode LITERAL() { return getToken(ThriftParser.LITERAL, 0); }
		public Type_annotationsContext type_annotations() {
			return getRuleContext(Type_annotationsContext.class,0);
		}
		public Namespace_Context(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_namespace_; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ThriftListener ) ((ThriftListener)listener).enterNamespace_(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ThriftListener ) ((ThriftListener)listener).exitNamespace_(this);
		}
	}

	public final Namespace_Context namespace_() throws RecognitionException {
		Namespace_Context _localctx = new Namespace_Context(_ctx, getState());
		enterRule(_localctx, 6, RULE_namespace_);
		int _la;
		try {
			setState(113);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,4,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(100);
				match(T__1);
				setState(101);
				match(T__2);
				setState(102);
				_la = _input.LA(1);
				if ( !(_la==LITERAL || _la==IDENTIFIER) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(103);
				match(T__1);
				setState(104);
				match(IDENTIFIER);
				setState(105);
				_la = _input.LA(1);
				if ( !(_la==LITERAL || _la==IDENTIFIER) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(107);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==T__21) {
					{
					setState(106);
					type_annotations();
					}
				}

				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(109);
				match(T__3);
				setState(110);
				match(IDENTIFIER);
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(111);
				match(T__4);
				setState(112);
				match(IDENTIFIER);
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class Cpp_includeContext extends ParserRuleContext {
		public TerminalNode LITERAL() { return getToken(ThriftParser.LITERAL, 0); }
		public Cpp_includeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_cpp_include; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ThriftListener ) ((ThriftListener)listener).enterCpp_include(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ThriftListener ) ((ThriftListener)listener).exitCpp_include(this);
		}
	}

	public final Cpp_includeContext cpp_include() throws RecognitionException {
		Cpp_includeContext _localctx = new Cpp_includeContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_cpp_include);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(115);
			match(T__5);
			setState(116);
			match(LITERAL);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class DefinitionContext extends ParserRuleContext {
		public Const_ruleContext const_rule() {
			return getRuleContext(Const_ruleContext.class,0);
		}
		public Typedef_Context typedef_() {
			return getRuleContext(Typedef_Context.class,0);
		}
		public Enum_ruleContext enum_rule() {
			return getRuleContext(Enum_ruleContext.class,0);
		}
		public SenumContext senum() {
			return getRuleContext(SenumContext.class,0);
		}
		public Struct_Context struct_() {
			return getRuleContext(Struct_Context.class,0);
		}
		public Union_Context union_() {
			return getRuleContext(Union_Context.class,0);
		}
		public Exception_Context exception_() {
			return getRuleContext(Exception_Context.class,0);
		}
		public ServiceContext service() {
			return getRuleContext(ServiceContext.class,0);
		}
		public DefinitionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_definition; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ThriftListener ) ((ThriftListener)listener).enterDefinition(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ThriftListener ) ((ThriftListener)listener).exitDefinition(this);
		}
	}

	public final DefinitionContext definition() throws RecognitionException {
		DefinitionContext _localctx = new DefinitionContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_definition);
		try {
			setState(126);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__6:
				enterOuterAlt(_localctx, 1);
				{
				setState(118);
				const_rule();
				}
				break;
			case T__8:
				enterOuterAlt(_localctx, 2);
				{
				setState(119);
				typedef_();
				}
				break;
			case T__9:
				enterOuterAlt(_localctx, 3);
				{
				setState(120);
				enum_rule();
				}
				break;
			case T__12:
				enterOuterAlt(_localctx, 4);
				{
				setState(121);
				senum();
				}
				break;
			case T__13:
				enterOuterAlt(_localctx, 5);
				{
				setState(122);
				struct_();
				}
				break;
			case T__14:
				enterOuterAlt(_localctx, 6);
				{
				setState(123);
				union_();
				}
				break;
			case T__15:
				enterOuterAlt(_localctx, 7);
				{
				setState(124);
				exception_();
				}
				break;
			case T__16:
				enterOuterAlt(_localctx, 8);
				{
				setState(125);
				service();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class Const_ruleContext extends ParserRuleContext {
		public Field_typeContext field_type() {
			return getRuleContext(Field_typeContext.class,0);
		}
		public TerminalNode IDENTIFIER() { return getToken(ThriftParser.IDENTIFIER, 0); }
		public Const_valueContext const_value() {
			return getRuleContext(Const_valueContext.class,0);
		}
		public List_separatorContext list_separator() {
			return getRuleContext(List_separatorContext.class,0);
		}
		public Const_ruleContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_const_rule; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ThriftListener ) ((ThriftListener)listener).enterConst_rule(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ThriftListener ) ((ThriftListener)listener).exitConst_rule(this);
		}
	}

	public final Const_ruleContext const_rule() throws RecognitionException {
		Const_ruleContext _localctx = new Const_ruleContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_const_rule);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(128);
			match(T__6);
			setState(129);
			field_type();
			setState(130);
			match(IDENTIFIER);
			setState(133);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==T__7) {
				{
				setState(131);
				match(T__7);
				setState(132);
				const_value();
				}
			}

			setState(136);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==T__35 || _la==COMMA) {
				{
				setState(135);
				list_separator();
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class Typedef_Context extends ParserRuleContext {
		public Field_typeContext field_type() {
			return getRuleContext(Field_typeContext.class,0);
		}
		public TerminalNode IDENTIFIER() { return getToken(ThriftParser.IDENTIFIER, 0); }
		public Type_annotationsContext type_annotations() {
			return getRuleContext(Type_annotationsContext.class,0);
		}
		public Typedef_Context(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_typedef_; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ThriftListener ) ((ThriftListener)listener).enterTypedef_(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ThriftListener ) ((ThriftListener)listener).exitTypedef_(this);
		}
	}

	public final Typedef_Context typedef_() throws RecognitionException {
		Typedef_Context _localctx = new Typedef_Context(_ctx, getState());
		enterRule(_localctx, 14, RULE_typedef_);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(138);
			match(T__8);
			setState(139);
			field_type();
			setState(140);
			match(IDENTIFIER);
			setState(142);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==T__21) {
				{
				setState(141);
				type_annotations();
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class Enum_ruleContext extends ParserRuleContext {
		public TerminalNode IDENTIFIER() { return getToken(ThriftParser.IDENTIFIER, 0); }
		public List<Enum_fieldContext> enum_field() {
			return getRuleContexts(Enum_fieldContext.class);
		}
		public Enum_fieldContext enum_field(int i) {
			return getRuleContext(Enum_fieldContext.class,i);
		}
		public Type_annotationsContext type_annotations() {
			return getRuleContext(Type_annotationsContext.class,0);
		}
		public Enum_ruleContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_enum_rule; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ThriftListener ) ((ThriftListener)listener).enterEnum_rule(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ThriftListener ) ((ThriftListener)listener).exitEnum_rule(this);
		}
	}

	public final Enum_ruleContext enum_rule() throws RecognitionException {
		Enum_ruleContext _localctx = new Enum_ruleContext(_ctx, getState());
		enterRule(_localctx, 16, RULE_enum_rule);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(144);
			match(T__9);
			setState(145);
			match(IDENTIFIER);
			setState(146);
			match(T__10);
			setState(150);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==IDENTIFIER) {
				{
				{
				setState(147);
				enum_field();
				}
				}
				setState(152);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(153);
			match(T__11);
			setState(155);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==T__21) {
				{
				setState(154);
				type_annotations();
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class Enum_fieldContext extends ParserRuleContext {
		public TerminalNode IDENTIFIER() { return getToken(ThriftParser.IDENTIFIER, 0); }
		public IntegerContext integer() {
			return getRuleContext(IntegerContext.class,0);
		}
		public Type_annotationsContext type_annotations() {
			return getRuleContext(Type_annotationsContext.class,0);
		}
		public List_separatorContext list_separator() {
			return getRuleContext(List_separatorContext.class,0);
		}
		public Enum_fieldContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_enum_field; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ThriftListener ) ((ThriftListener)listener).enterEnum_field(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ThriftListener ) ((ThriftListener)listener).exitEnum_field(this);
		}
	}

	public final Enum_fieldContext enum_field() throws RecognitionException {
		Enum_fieldContext _localctx = new Enum_fieldContext(_ctx, getState());
		enterRule(_localctx, 18, RULE_enum_field);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(157);
			match(IDENTIFIER);
			setState(160);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==T__7) {
				{
				setState(158);
				match(T__7);
				setState(159);
				integer();
				}
			}

			setState(163);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==T__21) {
				{
				setState(162);
				type_annotations();
				}
			}

			setState(166);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==T__35 || _la==COMMA) {
				{
				setState(165);
				list_separator();
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class SenumContext extends ParserRuleContext {
		public TerminalNode IDENTIFIER() { return getToken(ThriftParser.IDENTIFIER, 0); }
		public List<TerminalNode> LITERAL() { return getTokens(ThriftParser.LITERAL); }
		public TerminalNode LITERAL(int i) {
			return getToken(ThriftParser.LITERAL, i);
		}
		public Type_annotationsContext type_annotations() {
			return getRuleContext(Type_annotationsContext.class,0);
		}
		public List<List_separatorContext> list_separator() {
			return getRuleContexts(List_separatorContext.class);
		}
		public List_separatorContext list_separator(int i) {
			return getRuleContext(List_separatorContext.class,i);
		}
		public SenumContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_senum; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ThriftListener ) ((ThriftListener)listener).enterSenum(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ThriftListener ) ((ThriftListener)listener).exitSenum(this);
		}
	}

	public final SenumContext senum() throws RecognitionException {
		SenumContext _localctx = new SenumContext(_ctx, getState());
		enterRule(_localctx, 20, RULE_senum);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(168);
			match(T__12);
			setState(169);
			match(IDENTIFIER);
			setState(170);
			match(T__10);
			setState(177);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==LITERAL) {
				{
				{
				setState(171);
				match(LITERAL);
				setState(173);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==T__35 || _la==COMMA) {
					{
					setState(172);
					list_separator();
					}
				}

				}
				}
				setState(179);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(180);
			match(T__11);
			setState(182);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==T__21) {
				{
				setState(181);
				type_annotations();
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class Struct_Context extends ParserRuleContext {
		public TerminalNode IDENTIFIER() { return getToken(ThriftParser.IDENTIFIER, 0); }
		public List<FieldContext> field() {
			return getRuleContexts(FieldContext.class);
		}
		public FieldContext field(int i) {
			return getRuleContext(FieldContext.class,i);
		}
		public Type_annotationsContext type_annotations() {
			return getRuleContext(Type_annotationsContext.class,0);
		}
		public Struct_Context(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_struct_; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ThriftListener ) ((ThriftListener)listener).enterStruct_(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ThriftListener ) ((ThriftListener)listener).exitStruct_(this);
		}
	}

	public final Struct_Context struct_() throws RecognitionException {
		Struct_Context _localctx = new Struct_Context(_ctx, getState());
		enterRule(_localctx, 22, RULE_struct_);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(184);
			match(T__13);
			setState(185);
			match(IDENTIFIER);
			setState(186);
			match(T__10);
			setState(190);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 843744449396736L) != 0)) {
				{
				{
				setState(187);
				field();
				}
				}
				setState(192);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(193);
			match(T__11);
			setState(195);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==T__21) {
				{
				setState(194);
				type_annotations();
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class Union_Context extends ParserRuleContext {
		public TerminalNode IDENTIFIER() { return getToken(ThriftParser.IDENTIFIER, 0); }
		public List<FieldContext> field() {
			return getRuleContexts(FieldContext.class);
		}
		public FieldContext field(int i) {
			return getRuleContext(FieldContext.class,i);
		}
		public Type_annotationsContext type_annotations() {
			return getRuleContext(Type_annotationsContext.class,0);
		}
		public Union_Context(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_union_; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ThriftListener ) ((ThriftListener)listener).enterUnion_(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ThriftListener ) ((ThriftListener)listener).exitUnion_(this);
		}
	}

	public final Union_Context union_() throws RecognitionException {
		Union_Context _localctx = new Union_Context(_ctx, getState());
		enterRule(_localctx, 24, RULE_union_);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(197);
			match(T__14);
			setState(198);
			match(IDENTIFIER);
			setState(199);
			match(T__10);
			setState(203);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 843744449396736L) != 0)) {
				{
				{
				setState(200);
				field();
				}
				}
				setState(205);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(206);
			match(T__11);
			setState(208);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==T__21) {
				{
				setState(207);
				type_annotations();
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class Exception_Context extends ParserRuleContext {
		public TerminalNode IDENTIFIER() { return getToken(ThriftParser.IDENTIFIER, 0); }
		public List<FieldContext> field() {
			return getRuleContexts(FieldContext.class);
		}
		public FieldContext field(int i) {
			return getRuleContext(FieldContext.class,i);
		}
		public Type_annotationsContext type_annotations() {
			return getRuleContext(Type_annotationsContext.class,0);
		}
		public Exception_Context(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_exception_; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ThriftListener ) ((ThriftListener)listener).enterException_(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ThriftListener ) ((ThriftListener)listener).exitException_(this);
		}
	}

	public final Exception_Context exception_() throws RecognitionException {
		Exception_Context _localctx = new Exception_Context(_ctx, getState());
		enterRule(_localctx, 26, RULE_exception_);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(210);
			match(T__15);
			setState(211);
			match(IDENTIFIER);
			setState(212);
			match(T__10);
			setState(216);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 843744449396736L) != 0)) {
				{
				{
				setState(213);
				field();
				}
				}
				setState(218);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(219);
			match(T__11);
			setState(221);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==T__21) {
				{
				setState(220);
				type_annotations();
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ServiceContext extends ParserRuleContext {
		public List<TerminalNode> IDENTIFIER() { return getTokens(ThriftParser.IDENTIFIER); }
		public TerminalNode IDENTIFIER(int i) {
			return getToken(ThriftParser.IDENTIFIER, i);
		}
		public List<Function_Context> function_() {
			return getRuleContexts(Function_Context.class);
		}
		public Function_Context function_(int i) {
			return getRuleContext(Function_Context.class,i);
		}
		public Type_annotationsContext type_annotations() {
			return getRuleContext(Type_annotationsContext.class,0);
		}
		public ServiceContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_service; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ThriftListener ) ((ThriftListener)listener).enterService(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ThriftListener ) ((ThriftListener)listener).exitService(this);
		}
	}

	public final ServiceContext service() throws RecognitionException {
		ServiceContext _localctx = new ServiceContext(_ctx, getState());
		enterRule(_localctx, 28, RULE_service);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(223);
			match(T__16);
			setState(224);
			match(IDENTIFIER);
			setState(227);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==T__17) {
				{
				setState(225);
				match(T__17);
				setState(226);
				match(IDENTIFIER);
				}
			}

			setState(229);
			match(T__10);
			setState(233);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 843332246831104L) != 0)) {
				{
				{
				setState(230);
				function_();
				}
				}
				setState(235);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(236);
			match(T__11);
			setState(238);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==T__21) {
				{
				setState(237);
				type_annotations();
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class FieldContext extends ParserRuleContext {
		public Field_typeContext field_type() {
			return getRuleContext(Field_typeContext.class,0);
		}
		public TerminalNode IDENTIFIER() { return getToken(ThriftParser.IDENTIFIER, 0); }
		public Field_idContext field_id() {
			return getRuleContext(Field_idContext.class,0);
		}
		public Field_reqContext field_req() {
			return getRuleContext(Field_reqContext.class,0);
		}
		public Const_valueContext const_value() {
			return getRuleContext(Const_valueContext.class,0);
		}
		public Type_annotationsContext type_annotations() {
			return getRuleContext(Type_annotationsContext.class,0);
		}
		public List_separatorContext list_separator() {
			return getRuleContext(List_separatorContext.class,0);
		}
		public FieldContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_field; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ThriftListener ) ((ThriftListener)listener).enterField(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ThriftListener ) ((ThriftListener)listener).exitField(this);
		}
	}

	public final FieldContext field() throws RecognitionException {
		FieldContext _localctx = new FieldContext(_ctx, getState());
		enterRule(_localctx, 30, RULE_field);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(241);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==INTEGER || _la==HEX_INTEGER) {
				{
				setState(240);
				field_id();
				}
			}

			setState(244);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==T__19 || _la==T__20) {
				{
				setState(243);
				field_req();
				}
			}

			setState(246);
			field_type();
			setState(247);
			match(IDENTIFIER);
			setState(250);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==T__7) {
				{
				setState(248);
				match(T__7);
				setState(249);
				const_value();
				}
			}

			setState(253);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==T__21) {
				{
				setState(252);
				type_annotations();
				}
			}

			setState(256);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==T__35 || _la==COMMA) {
				{
				setState(255);
				list_separator();
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class Field_idContext extends ParserRuleContext {
		public IntegerContext integer() {
			return getRuleContext(IntegerContext.class,0);
		}
		public Field_idContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_field_id; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ThriftListener ) ((ThriftListener)listener).enterField_id(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ThriftListener ) ((ThriftListener)listener).exitField_id(this);
		}
	}

	public final Field_idContext field_id() throws RecognitionException {
		Field_idContext _localctx = new Field_idContext(_ctx, getState());
		enterRule(_localctx, 32, RULE_field_id);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(258);
			integer();
			setState(259);
			match(T__18);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class Field_reqContext extends ParserRuleContext {
		public Field_reqContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_field_req; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ThriftListener ) ((ThriftListener)listener).enterField_req(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ThriftListener ) ((ThriftListener)listener).exitField_req(this);
		}
	}

	public final Field_reqContext field_req() throws RecognitionException {
		Field_reqContext _localctx = new Field_reqContext(_ctx, getState());
		enterRule(_localctx, 34, RULE_field_req);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(261);
			_la = _input.LA(1);
			if ( !(_la==T__19 || _la==T__20) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class Function_Context extends ParserRuleContext {
		public Function_typeContext function_type() {
			return getRuleContext(Function_typeContext.class,0);
		}
		public TerminalNode IDENTIFIER() { return getToken(ThriftParser.IDENTIFIER, 0); }
		public OnewayContext oneway() {
			return getRuleContext(OnewayContext.class,0);
		}
		public List<FieldContext> field() {
			return getRuleContexts(FieldContext.class);
		}
		public FieldContext field(int i) {
			return getRuleContext(FieldContext.class,i);
		}
		public Throws_listContext throws_list() {
			return getRuleContext(Throws_listContext.class,0);
		}
		public Type_annotationsContext type_annotations() {
			return getRuleContext(Type_annotationsContext.class,0);
		}
		public List_separatorContext list_separator() {
			return getRuleContext(List_separatorContext.class,0);
		}
		public Function_Context(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_function_; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ThriftListener ) ((ThriftListener)listener).enterFunction_(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ThriftListener ) ((ThriftListener)listener).exitFunction_(this);
		}
	}

	public final Function_Context function_() throws RecognitionException {
		Function_Context _localctx = new Function_Context(_ctx, getState());
		enterRule(_localctx, 36, RULE_function_);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(264);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==T__23 || _la==T__24) {
				{
				setState(263);
				oneway();
				}
			}

			setState(266);
			function_type();
			setState(267);
			match(IDENTIFIER);
			setState(268);
			match(T__21);
			setState(272);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 843744449396736L) != 0)) {
				{
				{
				setState(269);
				field();
				}
				}
				setState(274);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(275);
			match(T__22);
			setState(277);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==T__26) {
				{
				setState(276);
				throws_list();
				}
			}

			setState(280);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==T__21) {
				{
				setState(279);
				type_annotations();
				}
			}

			setState(283);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==T__35 || _la==COMMA) {
				{
				setState(282);
				list_separator();
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class OnewayContext extends ParserRuleContext {
		public OnewayContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_oneway; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ThriftListener ) ((ThriftListener)listener).enterOneway(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ThriftListener ) ((ThriftListener)listener).exitOneway(this);
		}
	}

	public final OnewayContext oneway() throws RecognitionException {
		OnewayContext _localctx = new OnewayContext(_ctx, getState());
		enterRule(_localctx, 38, RULE_oneway);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(285);
			_la = _input.LA(1);
			if ( !(_la==T__23 || _la==T__24) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class Function_typeContext extends ParserRuleContext {
		public Field_typeContext field_type() {
			return getRuleContext(Field_typeContext.class,0);
		}
		public Function_typeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_function_type; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ThriftListener ) ((ThriftListener)listener).enterFunction_type(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ThriftListener ) ((ThriftListener)listener).exitFunction_type(this);
		}
	}

	public final Function_typeContext function_type() throws RecognitionException {
		Function_typeContext _localctx = new Function_typeContext(_ctx, getState());
		enterRule(_localctx, 40, RULE_function_type);
		try {
			setState(289);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__27:
			case T__30:
			case T__31:
			case TYPE_BOOL:
			case TYPE_BYTE:
			case TYPE_I16:
			case TYPE_I32:
			case TYPE_I64:
			case TYPE_DOUBLE:
			case TYPE_STRING:
			case TYPE_BINARY:
			case IDENTIFIER:
				enterOuterAlt(_localctx, 1);
				{
				setState(287);
				field_type();
				}
				break;
			case T__25:
				enterOuterAlt(_localctx, 2);
				{
				setState(288);
				match(T__25);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class Throws_listContext extends ParserRuleContext {
		public List<FieldContext> field() {
			return getRuleContexts(FieldContext.class);
		}
		public FieldContext field(int i) {
			return getRuleContext(FieldContext.class,i);
		}
		public Throws_listContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_throws_list; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ThriftListener ) ((ThriftListener)listener).enterThrows_list(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ThriftListener ) ((ThriftListener)listener).exitThrows_list(this);
		}
	}

	public final Throws_listContext throws_list() throws RecognitionException {
		Throws_listContext _localctx = new Throws_listContext(_ctx, getState());
		enterRule(_localctx, 42, RULE_throws_list);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(291);
			match(T__26);
			setState(292);
			match(T__21);
			setState(296);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 843744449396736L) != 0)) {
				{
				{
				setState(293);
				field();
				}
				}
				setState(298);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(299);
			match(T__22);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class Type_annotationsContext extends ParserRuleContext {
		public List<Type_annotationContext> type_annotation() {
			return getRuleContexts(Type_annotationContext.class);
		}
		public Type_annotationContext type_annotation(int i) {
			return getRuleContext(Type_annotationContext.class,i);
		}
		public Type_annotationsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_type_annotations; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ThriftListener ) ((ThriftListener)listener).enterType_annotations(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ThriftListener ) ((ThriftListener)listener).exitType_annotations(this);
		}
	}

	public final Type_annotationsContext type_annotations() throws RecognitionException {
		Type_annotationsContext _localctx = new Type_annotationsContext(_ctx, getState());
		enterRule(_localctx, 44, RULE_type_annotations);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(301);
			match(T__21);
			setState(305);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==IDENTIFIER) {
				{
				{
				setState(302);
				type_annotation();
				}
				}
				setState(307);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(308);
			match(T__22);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class Type_annotationContext extends ParserRuleContext {
		public TerminalNode IDENTIFIER() { return getToken(ThriftParser.IDENTIFIER, 0); }
		public Annotation_valueContext annotation_value() {
			return getRuleContext(Annotation_valueContext.class,0);
		}
		public List_separatorContext list_separator() {
			return getRuleContext(List_separatorContext.class,0);
		}
		public Type_annotationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_type_annotation; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ThriftListener ) ((ThriftListener)listener).enterType_annotation(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ThriftListener ) ((ThriftListener)listener).exitType_annotation(this);
		}
	}

	public final Type_annotationContext type_annotation() throws RecognitionException {
		Type_annotationContext _localctx = new Type_annotationContext(_ctx, getState());
		enterRule(_localctx, 46, RULE_type_annotation);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(310);
			match(IDENTIFIER);
			setState(313);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==T__7) {
				{
				setState(311);
				match(T__7);
				setState(312);
				annotation_value();
				}
			}

			setState(316);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==T__35 || _la==COMMA) {
				{
				setState(315);
				list_separator();
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class Annotation_valueContext extends ParserRuleContext {
		public IntegerContext integer() {
			return getRuleContext(IntegerContext.class,0);
		}
		public TerminalNode LITERAL() { return getToken(ThriftParser.LITERAL, 0); }
		public Annotation_valueContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_annotation_value; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ThriftListener ) ((ThriftListener)listener).enterAnnotation_value(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ThriftListener ) ((ThriftListener)listener).exitAnnotation_value(this);
		}
	}

	public final Annotation_valueContext annotation_value() throws RecognitionException {
		Annotation_valueContext _localctx = new Annotation_valueContext(_ctx, getState());
		enterRule(_localctx, 48, RULE_annotation_value);
		try {
			setState(320);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case INTEGER:
			case HEX_INTEGER:
				enterOuterAlt(_localctx, 1);
				{
				setState(318);
				integer();
				}
				break;
			case LITERAL:
				enterOuterAlt(_localctx, 2);
				{
				setState(319);
				match(LITERAL);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class Field_typeContext extends ParserRuleContext {
		public Base_typeContext base_type() {
			return getRuleContext(Base_typeContext.class,0);
		}
		public TerminalNode IDENTIFIER() { return getToken(ThriftParser.IDENTIFIER, 0); }
		public Container_typeContext container_type() {
			return getRuleContext(Container_typeContext.class,0);
		}
		public Field_typeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_field_type; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ThriftListener ) ((ThriftListener)listener).enterField_type(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ThriftListener ) ((ThriftListener)listener).exitField_type(this);
		}
	}

	public final Field_typeContext field_type() throws RecognitionException {
		Field_typeContext _localctx = new Field_typeContext(_ctx, getState());
		enterRule(_localctx, 50, RULE_field_type);
		try {
			setState(325);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case TYPE_BOOL:
			case TYPE_BYTE:
			case TYPE_I16:
			case TYPE_I32:
			case TYPE_I64:
			case TYPE_DOUBLE:
			case TYPE_STRING:
			case TYPE_BINARY:
				enterOuterAlt(_localctx, 1);
				{
				setState(322);
				base_type();
				}
				break;
			case IDENTIFIER:
				enterOuterAlt(_localctx, 2);
				{
				setState(323);
				match(IDENTIFIER);
				}
				break;
			case T__27:
			case T__30:
			case T__31:
				enterOuterAlt(_localctx, 3);
				{
				setState(324);
				container_type();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class Base_typeContext extends ParserRuleContext {
		public Real_base_typeContext real_base_type() {
			return getRuleContext(Real_base_typeContext.class,0);
		}
		public Type_annotationsContext type_annotations() {
			return getRuleContext(Type_annotationsContext.class,0);
		}
		public Base_typeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_base_type; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ThriftListener ) ((ThriftListener)listener).enterBase_type(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ThriftListener ) ((ThriftListener)listener).exitBase_type(this);
		}
	}

	public final Base_typeContext base_type() throws RecognitionException {
		Base_typeContext _localctx = new Base_typeContext(_ctx, getState());
		enterRule(_localctx, 52, RULE_base_type);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(327);
			real_base_type();
			setState(329);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==T__21) {
				{
				setState(328);
				type_annotations();
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class Container_typeContext extends ParserRuleContext {
		public Map_typeContext map_type() {
			return getRuleContext(Map_typeContext.class,0);
		}
		public Set_typeContext set_type() {
			return getRuleContext(Set_typeContext.class,0);
		}
		public List_typeContext list_type() {
			return getRuleContext(List_typeContext.class,0);
		}
		public Type_annotationsContext type_annotations() {
			return getRuleContext(Type_annotationsContext.class,0);
		}
		public Container_typeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_container_type; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ThriftListener ) ((ThriftListener)listener).enterContainer_type(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ThriftListener ) ((ThriftListener)listener).exitContainer_type(this);
		}
	}

	public final Container_typeContext container_type() throws RecognitionException {
		Container_typeContext _localctx = new Container_typeContext(_ctx, getState());
		enterRule(_localctx, 54, RULE_container_type);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(334);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__27:
				{
				setState(331);
				map_type();
				}
				break;
			case T__30:
				{
				setState(332);
				set_type();
				}
				break;
			case T__31:
				{
				setState(333);
				list_type();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			setState(337);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==T__21) {
				{
				setState(336);
				type_annotations();
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class Map_typeContext extends ParserRuleContext {
		public List<Field_typeContext> field_type() {
			return getRuleContexts(Field_typeContext.class);
		}
		public Field_typeContext field_type(int i) {
			return getRuleContext(Field_typeContext.class,i);
		}
		public TerminalNode COMMA() { return getToken(ThriftParser.COMMA, 0); }
		public Cpp_typeContext cpp_type() {
			return getRuleContext(Cpp_typeContext.class,0);
		}
		public Map_typeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_map_type; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ThriftListener ) ((ThriftListener)listener).enterMap_type(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ThriftListener ) ((ThriftListener)listener).exitMap_type(this);
		}
	}

	public final Map_typeContext map_type() throws RecognitionException {
		Map_typeContext _localctx = new Map_typeContext(_ctx, getState());
		enterRule(_localctx, 56, RULE_map_type);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(339);
			match(T__27);
			setState(341);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==T__32) {
				{
				setState(340);
				cpp_type();
				}
			}

			setState(343);
			match(T__28);
			setState(344);
			field_type();
			setState(345);
			match(COMMA);
			setState(346);
			field_type();
			setState(347);
			match(T__29);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class Set_typeContext extends ParserRuleContext {
		public Field_typeContext field_type() {
			return getRuleContext(Field_typeContext.class,0);
		}
		public Cpp_typeContext cpp_type() {
			return getRuleContext(Cpp_typeContext.class,0);
		}
		public Set_typeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_set_type; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ThriftListener ) ((ThriftListener)listener).enterSet_type(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ThriftListener ) ((ThriftListener)listener).exitSet_type(this);
		}
	}

	public final Set_typeContext set_type() throws RecognitionException {
		Set_typeContext _localctx = new Set_typeContext(_ctx, getState());
		enterRule(_localctx, 58, RULE_set_type);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(349);
			match(T__30);
			setState(351);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==T__32) {
				{
				setState(350);
				cpp_type();
				}
			}

			setState(353);
			match(T__28);
			setState(354);
			field_type();
			setState(355);
			match(T__29);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class List_typeContext extends ParserRuleContext {
		public Field_typeContext field_type() {
			return getRuleContext(Field_typeContext.class,0);
		}
		public Cpp_typeContext cpp_type() {
			return getRuleContext(Cpp_typeContext.class,0);
		}
		public List_typeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_list_type; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ThriftListener ) ((ThriftListener)listener).enterList_type(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ThriftListener ) ((ThriftListener)listener).exitList_type(this);
		}
	}

	public final List_typeContext list_type() throws RecognitionException {
		List_typeContext _localctx = new List_typeContext(_ctx, getState());
		enterRule(_localctx, 60, RULE_list_type);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(357);
			match(T__31);
			setState(358);
			match(T__28);
			setState(359);
			field_type();
			setState(360);
			match(T__29);
			setState(362);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==T__32) {
				{
				setState(361);
				cpp_type();
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class Cpp_typeContext extends ParserRuleContext {
		public TerminalNode LITERAL() { return getToken(ThriftParser.LITERAL, 0); }
		public Cpp_typeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_cpp_type; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ThriftListener ) ((ThriftListener)listener).enterCpp_type(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ThriftListener ) ((ThriftListener)listener).exitCpp_type(this);
		}
	}

	public final Cpp_typeContext cpp_type() throws RecognitionException {
		Cpp_typeContext _localctx = new Cpp_typeContext(_ctx, getState());
		enterRule(_localctx, 62, RULE_cpp_type);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(364);
			match(T__32);
			setState(365);
			match(LITERAL);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class Const_valueContext extends ParserRuleContext {
		public IntegerContext integer() {
			return getRuleContext(IntegerContext.class,0);
		}
		public TerminalNode DOUBLE() { return getToken(ThriftParser.DOUBLE, 0); }
		public TerminalNode LITERAL() { return getToken(ThriftParser.LITERAL, 0); }
		public TerminalNode IDENTIFIER() { return getToken(ThriftParser.IDENTIFIER, 0); }
		public Const_listContext const_list() {
			return getRuleContext(Const_listContext.class,0);
		}
		public Const_mapContext const_map() {
			return getRuleContext(Const_mapContext.class,0);
		}
		public Const_valueContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_const_value; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ThriftListener ) ((ThriftListener)listener).enterConst_value(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ThriftListener ) ((ThriftListener)listener).exitConst_value(this);
		}
	}

	public final Const_valueContext const_value() throws RecognitionException {
		Const_valueContext _localctx = new Const_valueContext(_ctx, getState());
		enterRule(_localctx, 64, RULE_const_value);
		try {
			setState(373);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case INTEGER:
			case HEX_INTEGER:
				enterOuterAlt(_localctx, 1);
				{
				setState(367);
				integer();
				}
				break;
			case DOUBLE:
				enterOuterAlt(_localctx, 2);
				{
				setState(368);
				match(DOUBLE);
				}
				break;
			case LITERAL:
				enterOuterAlt(_localctx, 3);
				{
				setState(369);
				match(LITERAL);
				}
				break;
			case IDENTIFIER:
				enterOuterAlt(_localctx, 4);
				{
				setState(370);
				match(IDENTIFIER);
				}
				break;
			case T__33:
				enterOuterAlt(_localctx, 5);
				{
				setState(371);
				const_list();
				}
				break;
			case T__10:
				enterOuterAlt(_localctx, 6);
				{
				setState(372);
				const_map();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class IntegerContext extends ParserRuleContext {
		public TerminalNode INTEGER() { return getToken(ThriftParser.INTEGER, 0); }
		public TerminalNode HEX_INTEGER() { return getToken(ThriftParser.HEX_INTEGER, 0); }
		public IntegerContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_integer; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ThriftListener ) ((ThriftListener)listener).enterInteger(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ThriftListener ) ((ThriftListener)listener).exitInteger(this);
		}
	}

	public final IntegerContext integer() throws RecognitionException {
		IntegerContext _localctx = new IntegerContext(_ctx, getState());
		enterRule(_localctx, 66, RULE_integer);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(375);
			_la = _input.LA(1);
			if ( !(_la==INTEGER || _la==HEX_INTEGER) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class Const_listContext extends ParserRuleContext {
		public List<Const_valueContext> const_value() {
			return getRuleContexts(Const_valueContext.class);
		}
		public Const_valueContext const_value(int i) {
			return getRuleContext(Const_valueContext.class,i);
		}
		public List<List_separatorContext> list_separator() {
			return getRuleContexts(List_separatorContext.class);
		}
		public List_separatorContext list_separator(int i) {
			return getRuleContext(List_separatorContext.class,i);
		}
		public Const_listContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_const_list; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ThriftListener ) ((ThriftListener)listener).enterConst_list(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ThriftListener ) ((ThriftListener)listener).exitConst_list(this);
		}
	}

	public final Const_listContext const_list() throws RecognitionException {
		Const_listContext _localctx = new Const_listContext(_ctx, getState());
		enterRule(_localctx, 68, RULE_const_list);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(377);
			match(T__33);
			setState(384);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 845404182677504L) != 0)) {
				{
				{
				setState(378);
				const_value();
				setState(380);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==T__35 || _la==COMMA) {
					{
					setState(379);
					list_separator();
					}
				}

				}
				}
				setState(386);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(387);
			match(T__34);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class Const_map_entryContext extends ParserRuleContext {
		public List<Const_valueContext> const_value() {
			return getRuleContexts(Const_valueContext.class);
		}
		public Const_valueContext const_value(int i) {
			return getRuleContext(Const_valueContext.class,i);
		}
		public List_separatorContext list_separator() {
			return getRuleContext(List_separatorContext.class,0);
		}
		public Const_map_entryContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_const_map_entry; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ThriftListener ) ((ThriftListener)listener).enterConst_map_entry(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ThriftListener ) ((ThriftListener)listener).exitConst_map_entry(this);
		}
	}

	public final Const_map_entryContext const_map_entry() throws RecognitionException {
		Const_map_entryContext _localctx = new Const_map_entryContext(_ctx, getState());
		enterRule(_localctx, 70, RULE_const_map_entry);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(389);
			const_value();
			setState(390);
			match(T__18);
			setState(391);
			const_value();
			setState(393);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==T__35 || _la==COMMA) {
				{
				setState(392);
				list_separator();
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class Const_mapContext extends ParserRuleContext {
		public List<Const_map_entryContext> const_map_entry() {
			return getRuleContexts(Const_map_entryContext.class);
		}
		public Const_map_entryContext const_map_entry(int i) {
			return getRuleContext(Const_map_entryContext.class,i);
		}
		public Const_mapContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_const_map; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ThriftListener ) ((ThriftListener)listener).enterConst_map(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ThriftListener ) ((ThriftListener)listener).exitConst_map(this);
		}
	}

	public final Const_mapContext const_map() throws RecognitionException {
		Const_mapContext _localctx = new Const_mapContext(_ctx, getState());
		enterRule(_localctx, 72, RULE_const_map);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(395);
			match(T__10);
			setState(399);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 845404182677504L) != 0)) {
				{
				{
				setState(396);
				const_map_entry();
				}
				}
				setState(401);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(402);
			match(T__11);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class List_separatorContext extends ParserRuleContext {
		public TerminalNode COMMA() { return getToken(ThriftParser.COMMA, 0); }
		public List_separatorContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_list_separator; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ThriftListener ) ((ThriftListener)listener).enterList_separator(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ThriftListener ) ((ThriftListener)listener).exitList_separator(this);
		}
	}

	public final List_separatorContext list_separator() throws RecognitionException {
		List_separatorContext _localctx = new List_separatorContext(_ctx, getState());
		enterRule(_localctx, 74, RULE_list_separator);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(404);
			_la = _input.LA(1);
			if ( !(_la==T__35 || _la==COMMA) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class Real_base_typeContext extends ParserRuleContext {
		public TerminalNode TYPE_BOOL() { return getToken(ThriftParser.TYPE_BOOL, 0); }
		public TerminalNode TYPE_BYTE() { return getToken(ThriftParser.TYPE_BYTE, 0); }
		public TerminalNode TYPE_I16() { return getToken(ThriftParser.TYPE_I16, 0); }
		public TerminalNode TYPE_I32() { return getToken(ThriftParser.TYPE_I32, 0); }
		public TerminalNode TYPE_I64() { return getToken(ThriftParser.TYPE_I64, 0); }
		public TerminalNode TYPE_DOUBLE() { return getToken(ThriftParser.TYPE_DOUBLE, 0); }
		public TerminalNode TYPE_STRING() { return getToken(ThriftParser.TYPE_STRING, 0); }
		public TerminalNode TYPE_BINARY() { return getToken(ThriftParser.TYPE_BINARY, 0); }
		public Real_base_typeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_real_base_type; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ThriftListener ) ((ThriftListener)listener).enterReal_base_type(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ThriftListener ) ((ThriftListener)listener).exitReal_base_type(this);
		}
	}

	public final Real_base_typeContext real_base_type() throws RecognitionException {
		Real_base_typeContext _localctx = new Real_base_typeContext(_ctx, getState());
		enterRule(_localctx, 76, RULE_real_base_type);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(406);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 280375465082880L) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static final String _serializedATN =
		"\u0004\u00015\u0199\u0002\u0000\u0007\u0000\u0002\u0001\u0007\u0001\u0002"+
		"\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002\u0004\u0007\u0004\u0002"+
		"\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002\u0007\u0007\u0007\u0002"+
		"\b\u0007\b\u0002\t\u0007\t\u0002\n\u0007\n\u0002\u000b\u0007\u000b\u0002"+
		"\f\u0007\f\u0002\r\u0007\r\u0002\u000e\u0007\u000e\u0002\u000f\u0007\u000f"+
		"\u0002\u0010\u0007\u0010\u0002\u0011\u0007\u0011\u0002\u0012\u0007\u0012"+
		"\u0002\u0013\u0007\u0013\u0002\u0014\u0007\u0014\u0002\u0015\u0007\u0015"+
		"\u0002\u0016\u0007\u0016\u0002\u0017\u0007\u0017\u0002\u0018\u0007\u0018"+
		"\u0002\u0019\u0007\u0019\u0002\u001a\u0007\u001a\u0002\u001b\u0007\u001b"+
		"\u0002\u001c\u0007\u001c\u0002\u001d\u0007\u001d\u0002\u001e\u0007\u001e"+
		"\u0002\u001f\u0007\u001f\u0002 \u0007 \u0002!\u0007!\u0002\"\u0007\"\u0002"+
		"#\u0007#\u0002$\u0007$\u0002%\u0007%\u0002&\u0007&\u0001\u0000\u0005\u0000"+
		"P\b\u0000\n\u0000\f\u0000S\t\u0000\u0001\u0000\u0005\u0000V\b\u0000\n"+
		"\u0000\f\u0000Y\t\u0000\u0001\u0000\u0001\u0000\u0001\u0001\u0001\u0001"+
		"\u0001\u0001\u0003\u0001`\b\u0001\u0001\u0002\u0001\u0002\u0001\u0002"+
		"\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003"+
		"\u0001\u0003\u0003\u0003l\b\u0003\u0001\u0003\u0001\u0003\u0001\u0003"+
		"\u0001\u0003\u0003\u0003r\b\u0003\u0001\u0004\u0001\u0004\u0001\u0004"+
		"\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0005"+
		"\u0001\u0005\u0001\u0005\u0003\u0005\u007f\b\u0005\u0001\u0006\u0001\u0006"+
		"\u0001\u0006\u0001\u0006\u0001\u0006\u0003\u0006\u0086\b\u0006\u0001\u0006"+
		"\u0003\u0006\u0089\b\u0006\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007"+
		"\u0003\u0007\u008f\b\u0007\u0001\b\u0001\b\u0001\b\u0001\b\u0005\b\u0095"+
		"\b\b\n\b\f\b\u0098\t\b\u0001\b\u0001\b\u0003\b\u009c\b\b\u0001\t\u0001"+
		"\t\u0001\t\u0003\t\u00a1\b\t\u0001\t\u0003\t\u00a4\b\t\u0001\t\u0003\t"+
		"\u00a7\b\t\u0001\n\u0001\n\u0001\n\u0001\n\u0001\n\u0003\n\u00ae\b\n\u0005"+
		"\n\u00b0\b\n\n\n\f\n\u00b3\t\n\u0001\n\u0001\n\u0003\n\u00b7\b\n\u0001"+
		"\u000b\u0001\u000b\u0001\u000b\u0001\u000b\u0005\u000b\u00bd\b\u000b\n"+
		"\u000b\f\u000b\u00c0\t\u000b\u0001\u000b\u0001\u000b\u0003\u000b\u00c4"+
		"\b\u000b\u0001\f\u0001\f\u0001\f\u0001\f\u0005\f\u00ca\b\f\n\f\f\f\u00cd"+
		"\t\f\u0001\f\u0001\f\u0003\f\u00d1\b\f\u0001\r\u0001\r\u0001\r\u0001\r"+
		"\u0005\r\u00d7\b\r\n\r\f\r\u00da\t\r\u0001\r\u0001\r\u0003\r\u00de\b\r"+
		"\u0001\u000e\u0001\u000e\u0001\u000e\u0001\u000e\u0003\u000e\u00e4\b\u000e"+
		"\u0001\u000e\u0001\u000e\u0005\u000e\u00e8\b\u000e\n\u000e\f\u000e\u00eb"+
		"\t\u000e\u0001\u000e\u0001\u000e\u0003\u000e\u00ef\b\u000e\u0001\u000f"+
		"\u0003\u000f\u00f2\b\u000f\u0001\u000f\u0003\u000f\u00f5\b\u000f\u0001"+
		"\u000f\u0001\u000f\u0001\u000f\u0001\u000f\u0003\u000f\u00fb\b\u000f\u0001"+
		"\u000f\u0003\u000f\u00fe\b\u000f\u0001\u000f\u0003\u000f\u0101\b\u000f"+
		"\u0001\u0010\u0001\u0010\u0001\u0010\u0001\u0011\u0001\u0011\u0001\u0012"+
		"\u0003\u0012\u0109\b\u0012\u0001\u0012\u0001\u0012\u0001\u0012\u0001\u0012"+
		"\u0005\u0012\u010f\b\u0012\n\u0012\f\u0012\u0112\t\u0012\u0001\u0012\u0001"+
		"\u0012\u0003\u0012\u0116\b\u0012\u0001\u0012\u0003\u0012\u0119\b\u0012"+
		"\u0001\u0012\u0003\u0012\u011c\b\u0012\u0001\u0013\u0001\u0013\u0001\u0014"+
		"\u0001\u0014\u0003\u0014\u0122\b\u0014\u0001\u0015\u0001\u0015\u0001\u0015"+
		"\u0005\u0015\u0127\b\u0015\n\u0015\f\u0015\u012a\t\u0015\u0001\u0015\u0001"+
		"\u0015\u0001\u0016\u0001\u0016\u0005\u0016\u0130\b\u0016\n\u0016\f\u0016"+
		"\u0133\t\u0016\u0001\u0016\u0001\u0016\u0001\u0017\u0001\u0017\u0001\u0017"+
		"\u0003\u0017\u013a\b\u0017\u0001\u0017\u0003\u0017\u013d\b\u0017\u0001"+
		"\u0018\u0001\u0018\u0003\u0018\u0141\b\u0018\u0001\u0019\u0001\u0019\u0001"+
		"\u0019\u0003\u0019\u0146\b\u0019\u0001\u001a\u0001\u001a\u0003\u001a\u014a"+
		"\b\u001a\u0001\u001b\u0001\u001b\u0001\u001b\u0003\u001b\u014f\b\u001b"+
		"\u0001\u001b\u0003\u001b\u0152\b\u001b\u0001\u001c\u0001\u001c\u0003\u001c"+
		"\u0156\b\u001c\u0001\u001c\u0001\u001c\u0001\u001c\u0001\u001c\u0001\u001c"+
		"\u0001\u001c\u0001\u001d\u0001\u001d\u0003\u001d\u0160\b\u001d\u0001\u001d"+
		"\u0001\u001d\u0001\u001d\u0001\u001d\u0001\u001e\u0001\u001e\u0001\u001e"+
		"\u0001\u001e\u0001\u001e\u0003\u001e\u016b\b\u001e\u0001\u001f\u0001\u001f"+
		"\u0001\u001f\u0001 \u0001 \u0001 \u0001 \u0001 \u0001 \u0003 \u0176\b"+
		" \u0001!\u0001!\u0001\"\u0001\"\u0001\"\u0003\"\u017d\b\"\u0005\"\u017f"+
		"\b\"\n\"\f\"\u0182\t\"\u0001\"\u0001\"\u0001#\u0001#\u0001#\u0001#\u0003"+
		"#\u018a\b#\u0001$\u0001$\u0005$\u018e\b$\n$\f$\u0191\t$\u0001$\u0001$"+
		"\u0001%\u0001%\u0001&\u0001&\u0001&\u0000\u0000\'\u0000\u0002\u0004\u0006"+
		"\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018\u001a\u001c\u001e \"$&(*,."+
		"02468:<>@BDFHJL\u0000\u0006\u0001\u000001\u0001\u0000\u0014\u0015\u0001"+
		"\u0000\u0018\u0019\u0001\u0000%&\u0002\u0000$$22\u0001\u0000(/\u01b6\u0000"+
		"Q\u0001\u0000\u0000\u0000\u0002_\u0001\u0000\u0000\u0000\u0004a\u0001"+
		"\u0000\u0000\u0000\u0006q\u0001\u0000\u0000\u0000\bs\u0001\u0000\u0000"+
		"\u0000\n~\u0001\u0000\u0000\u0000\f\u0080\u0001\u0000\u0000\u0000\u000e"+
		"\u008a\u0001\u0000\u0000\u0000\u0010\u0090\u0001\u0000\u0000\u0000\u0012"+
		"\u009d\u0001\u0000\u0000\u0000\u0014\u00a8\u0001\u0000\u0000\u0000\u0016"+
		"\u00b8\u0001\u0000\u0000\u0000\u0018\u00c5\u0001\u0000\u0000\u0000\u001a"+
		"\u00d2\u0001\u0000\u0000\u0000\u001c\u00df\u0001\u0000\u0000\u0000\u001e"+
		"\u00f1\u0001\u0000\u0000\u0000 \u0102\u0001\u0000\u0000\u0000\"\u0105"+
		"\u0001\u0000\u0000\u0000$\u0108\u0001\u0000\u0000\u0000&\u011d\u0001\u0000"+
		"\u0000\u0000(\u0121\u0001\u0000\u0000\u0000*\u0123\u0001\u0000\u0000\u0000"+
		",\u012d\u0001\u0000\u0000\u0000.\u0136\u0001\u0000\u0000\u00000\u0140"+
		"\u0001\u0000\u0000\u00002\u0145\u0001\u0000\u0000\u00004\u0147\u0001\u0000"+
		"\u0000\u00006\u014e\u0001\u0000\u0000\u00008\u0153\u0001\u0000\u0000\u0000"+
		":\u015d\u0001\u0000\u0000\u0000<\u0165\u0001\u0000\u0000\u0000>\u016c"+
		"\u0001\u0000\u0000\u0000@\u0175\u0001\u0000\u0000\u0000B\u0177\u0001\u0000"+
		"\u0000\u0000D\u0179\u0001\u0000\u0000\u0000F\u0185\u0001\u0000\u0000\u0000"+
		"H\u018b\u0001\u0000\u0000\u0000J\u0194\u0001\u0000\u0000\u0000L\u0196"+
		"\u0001\u0000\u0000\u0000NP\u0003\u0002\u0001\u0000ON\u0001\u0000\u0000"+
		"\u0000PS\u0001\u0000\u0000\u0000QO\u0001\u0000\u0000\u0000QR\u0001\u0000"+
		"\u0000\u0000RW\u0001\u0000\u0000\u0000SQ\u0001\u0000\u0000\u0000TV\u0003"+
		"\n\u0005\u0000UT\u0001\u0000\u0000\u0000VY\u0001\u0000\u0000\u0000WU\u0001"+
		"\u0000\u0000\u0000WX\u0001\u0000\u0000\u0000XZ\u0001\u0000\u0000\u0000"+
		"YW\u0001\u0000\u0000\u0000Z[\u0005\u0000\u0000\u0001[\u0001\u0001\u0000"+
		"\u0000\u0000\\`\u0003\u0004\u0002\u0000]`\u0003\u0006\u0003\u0000^`\u0003"+
		"\b\u0004\u0000_\\\u0001\u0000\u0000\u0000_]\u0001\u0000\u0000\u0000_^"+
		"\u0001\u0000\u0000\u0000`\u0003\u0001\u0000\u0000\u0000ab\u0005\u0001"+
		"\u0000\u0000bc\u00050\u0000\u0000c\u0005\u0001\u0000\u0000\u0000de\u0005"+
		"\u0002\u0000\u0000ef\u0005\u0003\u0000\u0000fr\u0007\u0000\u0000\u0000"+
		"gh\u0005\u0002\u0000\u0000hi\u00051\u0000\u0000ik\u0007\u0000\u0000\u0000"+
		"jl\u0003,\u0016\u0000kj\u0001\u0000\u0000\u0000kl\u0001\u0000\u0000\u0000"+
		"lr\u0001\u0000\u0000\u0000mn\u0005\u0004\u0000\u0000nr\u00051\u0000\u0000"+
		"op\u0005\u0005\u0000\u0000pr\u00051\u0000\u0000qd\u0001\u0000\u0000\u0000"+
		"qg\u0001\u0000\u0000\u0000qm\u0001\u0000\u0000\u0000qo\u0001\u0000\u0000"+
		"\u0000r\u0007\u0001\u0000\u0000\u0000st\u0005\u0006\u0000\u0000tu\u0005"+
		"0\u0000\u0000u\t\u0001\u0000\u0000\u0000v\u007f\u0003\f\u0006\u0000w\u007f"+
		"\u0003\u000e\u0007\u0000x\u007f\u0003\u0010\b\u0000y\u007f\u0003\u0014"+
		"\n\u0000z\u007f\u0003\u0016\u000b\u0000{\u007f\u0003\u0018\f\u0000|\u007f"+
		"\u0003\u001a\r\u0000}\u007f\u0003\u001c\u000e\u0000~v\u0001\u0000\u0000"+
		"\u0000~w\u0001\u0000\u0000\u0000~x\u0001\u0000\u0000\u0000~y\u0001\u0000"+
		"\u0000\u0000~z\u0001\u0000\u0000\u0000~{\u0001\u0000\u0000\u0000~|\u0001"+
		"\u0000\u0000\u0000~}\u0001\u0000\u0000\u0000\u007f\u000b\u0001\u0000\u0000"+
		"\u0000\u0080\u0081\u0005\u0007\u0000\u0000\u0081\u0082\u00032\u0019\u0000"+
		"\u0082\u0085\u00051\u0000\u0000\u0083\u0084\u0005\b\u0000\u0000\u0084"+
		"\u0086\u0003@ \u0000\u0085\u0083\u0001\u0000\u0000\u0000\u0085\u0086\u0001"+
		"\u0000\u0000\u0000\u0086\u0088\u0001\u0000\u0000\u0000\u0087\u0089\u0003"+
		"J%\u0000\u0088\u0087\u0001\u0000\u0000\u0000\u0088\u0089\u0001\u0000\u0000"+
		"\u0000\u0089\r\u0001\u0000\u0000\u0000\u008a\u008b\u0005\t\u0000\u0000"+
		"\u008b\u008c\u00032\u0019\u0000\u008c\u008e\u00051\u0000\u0000\u008d\u008f"+
		"\u0003,\u0016\u0000\u008e\u008d\u0001\u0000\u0000\u0000\u008e\u008f\u0001"+
		"\u0000\u0000\u0000\u008f\u000f\u0001\u0000\u0000\u0000\u0090\u0091\u0005"+
		"\n\u0000\u0000\u0091\u0092\u00051\u0000\u0000\u0092\u0096\u0005\u000b"+
		"\u0000\u0000\u0093\u0095\u0003\u0012\t\u0000\u0094\u0093\u0001\u0000\u0000"+
		"\u0000\u0095\u0098\u0001\u0000\u0000\u0000\u0096\u0094\u0001\u0000\u0000"+
		"\u0000\u0096\u0097\u0001\u0000\u0000\u0000\u0097\u0099\u0001\u0000\u0000"+
		"\u0000\u0098\u0096\u0001\u0000\u0000\u0000\u0099\u009b\u0005\f\u0000\u0000"+
		"\u009a\u009c\u0003,\u0016\u0000\u009b\u009a\u0001\u0000\u0000\u0000\u009b"+
		"\u009c\u0001\u0000\u0000\u0000\u009c\u0011\u0001\u0000\u0000\u0000\u009d"+
		"\u00a0\u00051\u0000\u0000\u009e\u009f\u0005\b\u0000\u0000\u009f\u00a1"+
		"\u0003B!\u0000\u00a0\u009e\u0001\u0000\u0000\u0000\u00a0\u00a1\u0001\u0000"+
		"\u0000\u0000\u00a1\u00a3\u0001\u0000\u0000\u0000\u00a2\u00a4\u0003,\u0016"+
		"\u0000\u00a3\u00a2\u0001\u0000\u0000\u0000\u00a3\u00a4\u0001\u0000\u0000"+
		"\u0000\u00a4\u00a6\u0001\u0000\u0000\u0000\u00a5\u00a7\u0003J%\u0000\u00a6"+
		"\u00a5\u0001\u0000\u0000\u0000\u00a6\u00a7\u0001\u0000\u0000\u0000\u00a7"+
		"\u0013\u0001\u0000\u0000\u0000\u00a8\u00a9\u0005\r\u0000\u0000\u00a9\u00aa"+
		"\u00051\u0000\u0000\u00aa\u00b1\u0005\u000b\u0000\u0000\u00ab\u00ad\u0005"+
		"0\u0000\u0000\u00ac\u00ae\u0003J%\u0000\u00ad\u00ac\u0001\u0000\u0000"+
		"\u0000\u00ad\u00ae\u0001\u0000\u0000\u0000\u00ae\u00b0\u0001\u0000\u0000"+
		"\u0000\u00af\u00ab\u0001\u0000\u0000\u0000\u00b0\u00b3\u0001\u0000\u0000"+
		"\u0000\u00b1\u00af\u0001\u0000\u0000\u0000\u00b1\u00b2\u0001\u0000\u0000"+
		"\u0000\u00b2\u00b4\u0001\u0000\u0000\u0000\u00b3\u00b1\u0001\u0000\u0000"+
		"\u0000\u00b4\u00b6\u0005\f\u0000\u0000\u00b5\u00b7\u0003,\u0016\u0000"+
		"\u00b6\u00b5\u0001\u0000\u0000\u0000\u00b6\u00b7\u0001\u0000\u0000\u0000"+
		"\u00b7\u0015\u0001\u0000\u0000\u0000\u00b8\u00b9\u0005\u000e\u0000\u0000"+
		"\u00b9\u00ba\u00051\u0000\u0000\u00ba\u00be\u0005\u000b\u0000\u0000\u00bb"+
		"\u00bd\u0003\u001e\u000f\u0000\u00bc\u00bb\u0001\u0000\u0000\u0000\u00bd"+
		"\u00c0\u0001\u0000\u0000\u0000\u00be\u00bc\u0001\u0000\u0000\u0000\u00be"+
		"\u00bf\u0001\u0000\u0000\u0000\u00bf\u00c1\u0001\u0000\u0000\u0000\u00c0"+
		"\u00be\u0001\u0000\u0000\u0000\u00c1\u00c3\u0005\f\u0000\u0000\u00c2\u00c4"+
		"\u0003,\u0016\u0000\u00c3\u00c2\u0001\u0000\u0000\u0000\u00c3\u00c4\u0001"+
		"\u0000\u0000\u0000\u00c4\u0017\u0001\u0000\u0000\u0000\u00c5\u00c6\u0005"+
		"\u000f\u0000\u0000\u00c6\u00c7\u00051\u0000\u0000\u00c7\u00cb\u0005\u000b"+
		"\u0000\u0000\u00c8\u00ca\u0003\u001e\u000f\u0000\u00c9\u00c8\u0001\u0000"+
		"\u0000\u0000\u00ca\u00cd\u0001\u0000\u0000\u0000\u00cb\u00c9\u0001\u0000"+
		"\u0000\u0000\u00cb\u00cc\u0001\u0000\u0000\u0000\u00cc\u00ce\u0001\u0000"+
		"\u0000\u0000\u00cd\u00cb\u0001\u0000\u0000\u0000\u00ce\u00d0\u0005\f\u0000"+
		"\u0000\u00cf\u00d1\u0003,\u0016\u0000\u00d0\u00cf\u0001\u0000\u0000\u0000"+
		"\u00d0\u00d1\u0001\u0000\u0000\u0000\u00d1\u0019\u0001\u0000\u0000\u0000"+
		"\u00d2\u00d3\u0005\u0010\u0000\u0000\u00d3\u00d4\u00051\u0000\u0000\u00d4"+
		"\u00d8\u0005\u000b\u0000\u0000\u00d5\u00d7\u0003\u001e\u000f\u0000\u00d6"+
		"\u00d5\u0001\u0000\u0000\u0000\u00d7\u00da\u0001\u0000\u0000\u0000\u00d8"+
		"\u00d6\u0001\u0000\u0000\u0000\u00d8\u00d9\u0001\u0000\u0000\u0000\u00d9"+
		"\u00db\u0001\u0000\u0000\u0000\u00da\u00d8\u0001\u0000\u0000\u0000\u00db"+
		"\u00dd\u0005\f\u0000\u0000\u00dc\u00de\u0003,\u0016\u0000\u00dd\u00dc"+
		"\u0001\u0000\u0000\u0000\u00dd\u00de\u0001\u0000\u0000\u0000\u00de\u001b"+
		"\u0001\u0000\u0000\u0000\u00df\u00e0\u0005\u0011\u0000\u0000\u00e0\u00e3"+
		"\u00051\u0000\u0000\u00e1\u00e2\u0005\u0012\u0000\u0000\u00e2\u00e4\u0005"+
		"1\u0000\u0000\u00e3\u00e1\u0001\u0000\u0000\u0000\u00e3\u00e4\u0001\u0000"+
		"\u0000\u0000\u00e4\u00e5\u0001\u0000\u0000\u0000\u00e5\u00e9\u0005\u000b"+
		"\u0000\u0000\u00e6\u00e8\u0003$\u0012\u0000\u00e7\u00e6\u0001\u0000\u0000"+
		"\u0000\u00e8\u00eb\u0001\u0000\u0000\u0000\u00e9\u00e7\u0001\u0000\u0000"+
		"\u0000\u00e9\u00ea\u0001\u0000\u0000\u0000\u00ea\u00ec\u0001\u0000\u0000"+
		"\u0000\u00eb\u00e9\u0001\u0000\u0000\u0000\u00ec\u00ee\u0005\f\u0000\u0000"+
		"\u00ed\u00ef\u0003,\u0016\u0000\u00ee\u00ed\u0001\u0000\u0000\u0000\u00ee"+
		"\u00ef\u0001\u0000\u0000\u0000\u00ef\u001d\u0001\u0000\u0000\u0000\u00f0"+
		"\u00f2\u0003 \u0010\u0000\u00f1\u00f0\u0001\u0000\u0000\u0000\u00f1\u00f2"+
		"\u0001\u0000\u0000\u0000\u00f2\u00f4\u0001\u0000\u0000\u0000\u00f3\u00f5"+
		"\u0003\"\u0011\u0000\u00f4\u00f3\u0001\u0000\u0000\u0000\u00f4\u00f5\u0001"+
		"\u0000\u0000\u0000\u00f5\u00f6\u0001\u0000\u0000\u0000\u00f6\u00f7\u0003"+
		"2\u0019\u0000\u00f7\u00fa\u00051\u0000\u0000\u00f8\u00f9\u0005\b\u0000"+
		"\u0000\u00f9\u00fb\u0003@ \u0000\u00fa\u00f8\u0001\u0000\u0000\u0000\u00fa"+
		"\u00fb\u0001\u0000\u0000\u0000\u00fb\u00fd\u0001\u0000\u0000\u0000\u00fc"+
		"\u00fe\u0003,\u0016\u0000\u00fd\u00fc\u0001\u0000\u0000\u0000\u00fd\u00fe"+
		"\u0001\u0000\u0000\u0000\u00fe\u0100\u0001\u0000\u0000\u0000\u00ff\u0101"+
		"\u0003J%\u0000\u0100\u00ff\u0001\u0000\u0000\u0000\u0100\u0101\u0001\u0000"+
		"\u0000\u0000\u0101\u001f\u0001\u0000\u0000\u0000\u0102\u0103\u0003B!\u0000"+
		"\u0103\u0104\u0005\u0013\u0000\u0000\u0104!\u0001\u0000\u0000\u0000\u0105"+
		"\u0106\u0007\u0001\u0000\u0000\u0106#\u0001\u0000\u0000\u0000\u0107\u0109"+
		"\u0003&\u0013\u0000\u0108\u0107\u0001\u0000\u0000\u0000\u0108\u0109\u0001"+
		"\u0000\u0000\u0000\u0109\u010a\u0001\u0000\u0000\u0000\u010a\u010b\u0003"+
		"(\u0014\u0000\u010b\u010c\u00051\u0000\u0000\u010c\u0110\u0005\u0016\u0000"+
		"\u0000\u010d\u010f\u0003\u001e\u000f\u0000\u010e\u010d\u0001\u0000\u0000"+
		"\u0000\u010f\u0112\u0001\u0000\u0000\u0000\u0110\u010e\u0001\u0000\u0000"+
		"\u0000\u0110\u0111\u0001\u0000\u0000\u0000\u0111\u0113\u0001\u0000\u0000"+
		"\u0000\u0112\u0110\u0001\u0000\u0000\u0000\u0113\u0115\u0005\u0017\u0000"+
		"\u0000\u0114\u0116\u0003*\u0015\u0000\u0115\u0114\u0001\u0000\u0000\u0000"+
		"\u0115\u0116\u0001\u0000\u0000\u0000\u0116\u0118\u0001\u0000\u0000\u0000"+
		"\u0117\u0119\u0003,\u0016\u0000\u0118\u0117\u0001\u0000\u0000\u0000\u0118"+
		"\u0119\u0001\u0000\u0000\u0000\u0119\u011b\u0001\u0000\u0000\u0000\u011a"+
		"\u011c\u0003J%\u0000\u011b\u011a\u0001\u0000\u0000\u0000\u011b\u011c\u0001"+
		"\u0000\u0000\u0000\u011c%\u0001\u0000\u0000\u0000\u011d\u011e\u0007\u0002"+
		"\u0000\u0000\u011e\'\u0001\u0000\u0000\u0000\u011f\u0122\u00032\u0019"+
		"\u0000\u0120\u0122\u0005\u001a\u0000\u0000\u0121\u011f\u0001\u0000\u0000"+
		"\u0000\u0121\u0120\u0001\u0000\u0000\u0000\u0122)\u0001\u0000\u0000\u0000"+
		"\u0123\u0124\u0005\u001b\u0000\u0000\u0124\u0128\u0005\u0016\u0000\u0000"+
		"\u0125\u0127\u0003\u001e\u000f\u0000\u0126\u0125\u0001\u0000\u0000\u0000"+
		"\u0127\u012a\u0001\u0000\u0000\u0000\u0128\u0126\u0001\u0000\u0000\u0000"+
		"\u0128\u0129\u0001\u0000\u0000\u0000\u0129\u012b\u0001\u0000\u0000\u0000"+
		"\u012a\u0128\u0001\u0000\u0000\u0000\u012b\u012c\u0005\u0017\u0000\u0000"+
		"\u012c+\u0001\u0000\u0000\u0000\u012d\u0131\u0005\u0016\u0000\u0000\u012e"+
		"\u0130\u0003.\u0017\u0000\u012f\u012e\u0001\u0000\u0000\u0000\u0130\u0133"+
		"\u0001\u0000\u0000\u0000\u0131\u012f\u0001\u0000\u0000\u0000\u0131\u0132"+
		"\u0001\u0000\u0000\u0000\u0132\u0134\u0001\u0000\u0000\u0000\u0133\u0131"+
		"\u0001\u0000\u0000\u0000\u0134\u0135\u0005\u0017\u0000\u0000\u0135-\u0001"+
		"\u0000\u0000\u0000\u0136\u0139\u00051\u0000\u0000\u0137\u0138\u0005\b"+
		"\u0000\u0000\u0138\u013a\u00030\u0018\u0000\u0139\u0137\u0001\u0000\u0000"+
		"\u0000\u0139\u013a\u0001\u0000\u0000\u0000\u013a\u013c\u0001\u0000\u0000"+
		"\u0000\u013b\u013d\u0003J%\u0000\u013c\u013b\u0001\u0000\u0000\u0000\u013c"+
		"\u013d\u0001\u0000\u0000\u0000\u013d/\u0001\u0000\u0000\u0000\u013e\u0141"+
		"\u0003B!\u0000\u013f\u0141\u00050\u0000\u0000\u0140\u013e\u0001\u0000"+
		"\u0000\u0000\u0140\u013f\u0001\u0000\u0000\u0000\u01411\u0001\u0000\u0000"+
		"\u0000\u0142\u0146\u00034\u001a\u0000\u0143\u0146\u00051\u0000\u0000\u0144"+
		"\u0146\u00036\u001b\u0000\u0145\u0142\u0001\u0000\u0000\u0000\u0145\u0143"+
		"\u0001\u0000\u0000\u0000\u0145\u0144\u0001\u0000\u0000\u0000\u01463\u0001"+
		"\u0000\u0000\u0000\u0147\u0149\u0003L&\u0000\u0148\u014a\u0003,\u0016"+
		"\u0000\u0149\u0148\u0001\u0000\u0000\u0000\u0149\u014a\u0001\u0000\u0000"+
		"\u0000\u014a5\u0001\u0000\u0000\u0000\u014b\u014f\u00038\u001c\u0000\u014c"+
		"\u014f\u0003:\u001d\u0000\u014d\u014f\u0003<\u001e\u0000\u014e\u014b\u0001"+
		"\u0000\u0000\u0000\u014e\u014c\u0001\u0000\u0000\u0000\u014e\u014d\u0001"+
		"\u0000\u0000\u0000\u014f\u0151\u0001\u0000\u0000\u0000\u0150\u0152\u0003"+
		",\u0016\u0000\u0151\u0150\u0001\u0000\u0000\u0000\u0151\u0152\u0001\u0000"+
		"\u0000\u0000\u01527\u0001\u0000\u0000\u0000\u0153\u0155\u0005\u001c\u0000"+
		"\u0000\u0154\u0156\u0003>\u001f\u0000\u0155\u0154\u0001\u0000\u0000\u0000"+
		"\u0155\u0156\u0001\u0000\u0000\u0000\u0156\u0157\u0001\u0000\u0000\u0000"+
		"\u0157\u0158\u0005\u001d\u0000\u0000\u0158\u0159\u00032\u0019\u0000\u0159"+
		"\u015a\u00052\u0000\u0000\u015a\u015b\u00032\u0019\u0000\u015b\u015c\u0005"+
		"\u001e\u0000\u0000\u015c9\u0001\u0000\u0000\u0000\u015d\u015f\u0005\u001f"+
		"\u0000\u0000\u015e\u0160\u0003>\u001f\u0000\u015f\u015e\u0001\u0000\u0000"+
		"\u0000\u015f\u0160\u0001\u0000\u0000\u0000\u0160\u0161\u0001\u0000\u0000"+
		"\u0000\u0161\u0162\u0005\u001d\u0000\u0000\u0162\u0163\u00032\u0019\u0000"+
		"\u0163\u0164\u0005\u001e\u0000\u0000\u0164;\u0001\u0000\u0000\u0000\u0165"+
		"\u0166\u0005 \u0000\u0000\u0166\u0167\u0005\u001d\u0000\u0000\u0167\u0168"+
		"\u00032\u0019\u0000\u0168\u016a\u0005\u001e\u0000\u0000\u0169\u016b\u0003"+
		">\u001f\u0000\u016a\u0169\u0001\u0000\u0000\u0000\u016a\u016b\u0001\u0000"+
		"\u0000\u0000\u016b=\u0001\u0000\u0000\u0000\u016c\u016d\u0005!\u0000\u0000"+
		"\u016d\u016e\u00050\u0000\u0000\u016e?\u0001\u0000\u0000\u0000\u016f\u0176"+
		"\u0003B!\u0000\u0170\u0176\u0005\'\u0000\u0000\u0171\u0176\u00050\u0000"+
		"\u0000\u0172\u0176\u00051\u0000\u0000\u0173\u0176\u0003D\"\u0000\u0174"+
		"\u0176\u0003H$\u0000\u0175\u016f\u0001\u0000\u0000\u0000\u0175\u0170\u0001"+
		"\u0000\u0000\u0000\u0175\u0171\u0001\u0000\u0000\u0000\u0175\u0172\u0001"+
		"\u0000\u0000\u0000\u0175\u0173\u0001\u0000\u0000\u0000\u0175\u0174\u0001"+
		"\u0000\u0000\u0000\u0176A\u0001\u0000\u0000\u0000\u0177\u0178\u0007\u0003"+
		"\u0000\u0000\u0178C\u0001\u0000\u0000\u0000\u0179\u0180\u0005\"\u0000"+
		"\u0000\u017a\u017c\u0003@ \u0000\u017b\u017d\u0003J%\u0000\u017c\u017b"+
		"\u0001\u0000\u0000\u0000\u017c\u017d\u0001\u0000\u0000\u0000\u017d\u017f"+
		"\u0001\u0000\u0000\u0000\u017e\u017a\u0001\u0000\u0000\u0000\u017f\u0182"+
		"\u0001\u0000\u0000\u0000\u0180\u017e\u0001\u0000\u0000\u0000\u0180\u0181"+
		"\u0001\u0000\u0000\u0000\u0181\u0183\u0001\u0000\u0000\u0000\u0182\u0180"+
		"\u0001\u0000\u0000\u0000\u0183\u0184\u0005#\u0000\u0000\u0184E\u0001\u0000"+
		"\u0000\u0000\u0185\u0186\u0003@ \u0000\u0186\u0187\u0005\u0013\u0000\u0000"+
		"\u0187\u0189\u0003@ \u0000\u0188\u018a\u0003J%\u0000\u0189\u0188\u0001"+
		"\u0000\u0000\u0000\u0189\u018a\u0001\u0000\u0000\u0000\u018aG\u0001\u0000"+
		"\u0000\u0000\u018b\u018f\u0005\u000b\u0000\u0000\u018c\u018e\u0003F#\u0000"+
		"\u018d\u018c\u0001\u0000\u0000\u0000\u018e\u0191\u0001\u0000\u0000\u0000"+
		"\u018f\u018d\u0001\u0000\u0000\u0000\u018f\u0190\u0001\u0000\u0000\u0000"+
		"\u0190\u0192\u0001\u0000\u0000\u0000\u0191\u018f\u0001\u0000\u0000\u0000"+
		"\u0192\u0193\u0005\f\u0000\u0000\u0193I\u0001\u0000\u0000\u0000\u0194"+
		"\u0195\u0007\u0004\u0000\u0000\u0195K\u0001\u0000\u0000\u0000\u0196\u0197"+
		"\u0007\u0005\u0000\u0000\u0197M\u0001\u0000\u0000\u00006QW_kq~\u0085\u0088"+
		"\u008e\u0096\u009b\u00a0\u00a3\u00a6\u00ad\u00b1\u00b6\u00be\u00c3\u00cb"+
		"\u00d0\u00d8\u00dd\u00e3\u00e9\u00ee\u00f1\u00f4\u00fa\u00fd\u0100\u0108"+
		"\u0110\u0115\u0118\u011b\u0121\u0128\u0131\u0139\u013c\u0140\u0145\u0149"+
		"\u014e\u0151\u0155\u015f\u016a\u0175\u017c\u0180\u0189\u018f";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}
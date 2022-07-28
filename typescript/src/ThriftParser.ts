// Generated from Thrift.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { ThriftListener } from "./ThriftListener";

export class ThriftParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly T__5 = 6;
	public static readonly T__6 = 7;
	public static readonly T__7 = 8;
	public static readonly T__8 = 9;
	public static readonly T__9 = 10;
	public static readonly T__10 = 11;
	public static readonly T__11 = 12;
	public static readonly T__12 = 13;
	public static readonly T__13 = 14;
	public static readonly T__14 = 15;
	public static readonly T__15 = 16;
	public static readonly T__16 = 17;
	public static readonly T__17 = 18;
	public static readonly T__18 = 19;
	public static readonly T__19 = 20;
	public static readonly T__20 = 21;
	public static readonly T__21 = 22;
	public static readonly T__22 = 23;
	public static readonly T__23 = 24;
	public static readonly T__24 = 25;
	public static readonly T__25 = 26;
	public static readonly T__26 = 27;
	public static readonly T__27 = 28;
	public static readonly T__28 = 29;
	public static readonly T__29 = 30;
	public static readonly T__30 = 31;
	public static readonly T__31 = 32;
	public static readonly T__32 = 33;
	public static readonly T__33 = 34;
	public static readonly T__34 = 35;
	public static readonly T__35 = 36;
	public static readonly INTEGER = 37;
	public static readonly HEX_INTEGER = 38;
	public static readonly DOUBLE = 39;
	public static readonly TYPE_BOOL = 40;
	public static readonly TYPE_BYTE = 41;
	public static readonly TYPE_I16 = 42;
	public static readonly TYPE_I32 = 43;
	public static readonly TYPE_I64 = 44;
	public static readonly TYPE_DOUBLE = 45;
	public static readonly TYPE_STRING = 46;
	public static readonly TYPE_BINARY = 47;
	public static readonly LITERAL_VALUE = 48;
	public static readonly IDENTIFIER = 49;
	public static readonly COMMA = 50;
	public static readonly WS = 51;
	public static readonly SL_COMMENT = 52;
	public static readonly ML_COMMENT = 53;
	public static readonly RULE_document = 0;
	public static readonly RULE_header = 1;
	public static readonly RULE_include_ = 2;
	public static readonly RULE_namespace_ = 3;
	public static readonly RULE_cpp_include = 4;
	public static readonly RULE_definition = 5;
	public static readonly RULE_const_rule = 6;
	public static readonly RULE_typedef_ = 7;
	public static readonly RULE_enum_rule = 8;
	public static readonly RULE_enum_field = 9;
	public static readonly RULE_senum = 10;
	public static readonly RULE_struct_ = 11;
	public static readonly RULE_union_ = 12;
	public static readonly RULE_exception_ = 13;
	public static readonly RULE_service = 14;
	public static readonly RULE_field = 15;
	public static readonly RULE_field_id = 16;
	public static readonly RULE_field_req = 17;
	public static readonly RULE_function_ = 18;
	public static readonly RULE_oneway = 19;
	public static readonly RULE_function_type = 20;
	public static readonly RULE_throws_list = 21;
	public static readonly RULE_type_annotations = 22;
	public static readonly RULE_type_annotation = 23;
	public static readonly RULE_annotation_value = 24;
	public static readonly RULE_field_type = 25;
	public static readonly RULE_base_type = 26;
	public static readonly RULE_container_type = 27;
	public static readonly RULE_map_type = 28;
	public static readonly RULE_set_type = 29;
	public static readonly RULE_list_type = 30;
	public static readonly RULE_cpp_type = 31;
	public static readonly RULE_const_value = 32;
	public static readonly RULE_integer = 33;
	public static readonly RULE_const_list = 34;
	public static readonly RULE_const_map_entry = 35;
	public static readonly RULE_const_map = 36;
	public static readonly RULE_list_separator = 37;
	public static readonly RULE_real_base_type = 38;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"document", "header", "include_", "namespace_", "cpp_include", "definition", 
		"const_rule", "typedef_", "enum_rule", "enum_field", "senum", "struct_", 
		"union_", "exception_", "service", "field", "field_id", "field_req", "function_", 
		"oneway", "function_type", "throws_list", "type_annotations", "type_annotation", 
		"annotation_value", "field_type", "base_type", "container_type", "map_type", 
		"set_type", "list_type", "cpp_type", "const_value", "integer", "const_list", 
		"const_map_entry", "const_map", "list_separator", "real_base_type",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'include'", "'namespace'", "'*'", "'cpp_namespace'", "'php_namespace'", 
		"'cpp_include'", "'const'", "'='", "'typedef'", "'enum'", "'{'", "'}'", 
		"'senum'", "'struct'", "'union'", "'exception'", "'service'", "'extends'", 
		"':'", "'required'", "'optional'", "'('", "')'", "'oneway'", "'async'", 
		"'void'", "'throws'", "'map'", "'<'", "'>'", "'set'", "'list'", "'cpp_type'", 
		"'['", "']'", "';'", undefined, undefined, undefined, "'bool'", "'byte'", 
		"'i16'", "'i32'", "'i64'", "'double'", "'string'", "'binary'", undefined, 
		undefined, "','",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, "INTEGER", "HEX_INTEGER", "DOUBLE", "TYPE_BOOL", 
		"TYPE_BYTE", "TYPE_I16", "TYPE_I32", "TYPE_I64", "TYPE_DOUBLE", "TYPE_STRING", 
		"TYPE_BINARY", "LITERAL_VALUE", "IDENTIFIER", "COMMA", "WS", "SL_COMMENT", 
		"ML_COMMENT",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(ThriftParser._LITERAL_NAMES, ThriftParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return ThriftParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "Thrift.g4"; }

	// @Override
	public get ruleNames(): string[] { return ThriftParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return ThriftParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(ThriftParser._ATN, this);
	}
	// @RuleVersion(0)
	public document(): DocumentContext {
		let _localctx: DocumentContext = new DocumentContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, ThriftParser.RULE_document);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 81;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ThriftParser.T__0) | (1 << ThriftParser.T__1) | (1 << ThriftParser.T__3) | (1 << ThriftParser.T__4) | (1 << ThriftParser.T__5))) !== 0)) {
				{
				{
				this.state = 78;
				this.header();
				}
				}
				this.state = 83;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 87;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ThriftParser.T__6) | (1 << ThriftParser.T__8) | (1 << ThriftParser.T__9) | (1 << ThriftParser.T__12) | (1 << ThriftParser.T__13) | (1 << ThriftParser.T__14) | (1 << ThriftParser.T__15) | (1 << ThriftParser.T__16))) !== 0)) {
				{
				{
				this.state = 84;
				this.definition();
				}
				}
				this.state = 89;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 90;
			this.match(ThriftParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public header(): HeaderContext {
		let _localctx: HeaderContext = new HeaderContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, ThriftParser.RULE_header);
		try {
			this.state = 95;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ThriftParser.T__0:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 92;
				this.include_();
				}
				break;
			case ThriftParser.T__1:
			case ThriftParser.T__3:
			case ThriftParser.T__4:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 93;
				this.namespace_();
				}
				break;
			case ThriftParser.T__5:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 94;
				this.cpp_include();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public include_(): Include_Context {
		let _localctx: Include_Context = new Include_Context(this._ctx, this.state);
		this.enterRule(_localctx, 4, ThriftParser.RULE_include_);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 97;
			this.match(ThriftParser.T__0);
			this.state = 98;
			this.match(ThriftParser.LITERAL_VALUE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public namespace_(): Namespace_Context {
		let _localctx: Namespace_Context = new Namespace_Context(this._ctx, this.state);
		this.enterRule(_localctx, 6, ThriftParser.RULE_namespace_);
		let _la: number;
		try {
			this.state = 113;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 4, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 100;
				this.match(ThriftParser.T__1);
				this.state = 101;
				this.match(ThriftParser.T__2);
				this.state = 102;
				_la = this._input.LA(1);
				if (!(_la === ThriftParser.LITERAL_VALUE || _la === ThriftParser.IDENTIFIER)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 103;
				this.match(ThriftParser.T__1);
				this.state = 104;
				this.match(ThriftParser.IDENTIFIER);
				this.state = 105;
				_la = this._input.LA(1);
				if (!(_la === ThriftParser.LITERAL_VALUE || _la === ThriftParser.IDENTIFIER)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 107;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ThriftParser.T__21) {
					{
					this.state = 106;
					this.type_annotations();
					}
				}

				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 109;
				this.match(ThriftParser.T__3);
				this.state = 110;
				this.match(ThriftParser.IDENTIFIER);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 111;
				this.match(ThriftParser.T__4);
				this.state = 112;
				this.match(ThriftParser.IDENTIFIER);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public cpp_include(): Cpp_includeContext {
		let _localctx: Cpp_includeContext = new Cpp_includeContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, ThriftParser.RULE_cpp_include);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 115;
			this.match(ThriftParser.T__5);
			this.state = 116;
			this.match(ThriftParser.LITERAL_VALUE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public definition(): DefinitionContext {
		let _localctx: DefinitionContext = new DefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, ThriftParser.RULE_definition);
		try {
			this.state = 126;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ThriftParser.T__6:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 118;
				this.const_rule();
				}
				break;
			case ThriftParser.T__8:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 119;
				this.typedef_();
				}
				break;
			case ThriftParser.T__9:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 120;
				this.enum_rule();
				}
				break;
			case ThriftParser.T__12:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 121;
				this.senum();
				}
				break;
			case ThriftParser.T__13:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 122;
				this.struct_();
				}
				break;
			case ThriftParser.T__14:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 123;
				this.union_();
				}
				break;
			case ThriftParser.T__15:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 124;
				this.exception_();
				}
				break;
			case ThriftParser.T__16:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 125;
				this.service();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public const_rule(): Const_ruleContext {
		let _localctx: Const_ruleContext = new Const_ruleContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, ThriftParser.RULE_const_rule);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 128;
			this.match(ThriftParser.T__6);
			this.state = 129;
			this.field_type();
			this.state = 130;
			this.match(ThriftParser.IDENTIFIER);
			this.state = 133;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ThriftParser.T__7) {
				{
				this.state = 131;
				this.match(ThriftParser.T__7);
				this.state = 132;
				this.const_value();
				}
			}

			this.state = 136;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ThriftParser.T__35 || _la === ThriftParser.COMMA) {
				{
				this.state = 135;
				this.list_separator();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typedef_(): Typedef_Context {
		let _localctx: Typedef_Context = new Typedef_Context(this._ctx, this.state);
		this.enterRule(_localctx, 14, ThriftParser.RULE_typedef_);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 138;
			this.match(ThriftParser.T__8);
			this.state = 139;
			this.field_type();
			this.state = 140;
			this.match(ThriftParser.IDENTIFIER);
			this.state = 142;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ThriftParser.T__21) {
				{
				this.state = 141;
				this.type_annotations();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public enum_rule(): Enum_ruleContext {
		let _localctx: Enum_ruleContext = new Enum_ruleContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, ThriftParser.RULE_enum_rule);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 144;
			this.match(ThriftParser.T__9);
			this.state = 145;
			this.match(ThriftParser.IDENTIFIER);
			this.state = 146;
			this.match(ThriftParser.T__10);
			this.state = 150;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ThriftParser.IDENTIFIER) {
				{
				{
				this.state = 147;
				this.enum_field();
				}
				}
				this.state = 152;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 153;
			this.match(ThriftParser.T__11);
			this.state = 155;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ThriftParser.T__21) {
				{
				this.state = 154;
				this.type_annotations();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public enum_field(): Enum_fieldContext {
		let _localctx: Enum_fieldContext = new Enum_fieldContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, ThriftParser.RULE_enum_field);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 157;
			this.match(ThriftParser.IDENTIFIER);
			this.state = 160;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ThriftParser.T__7) {
				{
				this.state = 158;
				this.match(ThriftParser.T__7);
				this.state = 159;
				this.integer();
				}
			}

			this.state = 163;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ThriftParser.T__21) {
				{
				this.state = 162;
				this.type_annotations();
				}
			}

			this.state = 166;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ThriftParser.T__35 || _la === ThriftParser.COMMA) {
				{
				this.state = 165;
				this.list_separator();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public senum(): SenumContext {
		let _localctx: SenumContext = new SenumContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, ThriftParser.RULE_senum);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 168;
			this.match(ThriftParser.T__12);
			this.state = 169;
			this.match(ThriftParser.IDENTIFIER);
			this.state = 170;
			this.match(ThriftParser.T__10);
			this.state = 177;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ThriftParser.LITERAL_VALUE) {
				{
				{
				this.state = 171;
				this.match(ThriftParser.LITERAL_VALUE);
				this.state = 173;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ThriftParser.T__35 || _la === ThriftParser.COMMA) {
					{
					this.state = 172;
					this.list_separator();
					}
				}

				}
				}
				this.state = 179;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 180;
			this.match(ThriftParser.T__11);
			this.state = 182;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ThriftParser.T__21) {
				{
				this.state = 181;
				this.type_annotations();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public struct_(): Struct_Context {
		let _localctx: Struct_Context = new Struct_Context(this._ctx, this.state);
		this.enterRule(_localctx, 22, ThriftParser.RULE_struct_);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 184;
			this.match(ThriftParser.T__13);
			this.state = 185;
			this.match(ThriftParser.IDENTIFIER);
			this.state = 186;
			this.match(ThriftParser.T__10);
			this.state = 190;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 20)) & ~0x1F) === 0 && ((1 << (_la - 20)) & ((1 << (ThriftParser.T__19 - 20)) | (1 << (ThriftParser.T__20 - 20)) | (1 << (ThriftParser.T__27 - 20)) | (1 << (ThriftParser.T__30 - 20)) | (1 << (ThriftParser.T__31 - 20)) | (1 << (ThriftParser.INTEGER - 20)) | (1 << (ThriftParser.HEX_INTEGER - 20)) | (1 << (ThriftParser.TYPE_BOOL - 20)) | (1 << (ThriftParser.TYPE_BYTE - 20)) | (1 << (ThriftParser.TYPE_I16 - 20)) | (1 << (ThriftParser.TYPE_I32 - 20)) | (1 << (ThriftParser.TYPE_I64 - 20)) | (1 << (ThriftParser.TYPE_DOUBLE - 20)) | (1 << (ThriftParser.TYPE_STRING - 20)) | (1 << (ThriftParser.TYPE_BINARY - 20)) | (1 << (ThriftParser.IDENTIFIER - 20)))) !== 0)) {
				{
				{
				this.state = 187;
				this.field();
				}
				}
				this.state = 192;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 193;
			this.match(ThriftParser.T__11);
			this.state = 195;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ThriftParser.T__21) {
				{
				this.state = 194;
				this.type_annotations();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public union_(): Union_Context {
		let _localctx: Union_Context = new Union_Context(this._ctx, this.state);
		this.enterRule(_localctx, 24, ThriftParser.RULE_union_);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 197;
			this.match(ThriftParser.T__14);
			this.state = 198;
			this.match(ThriftParser.IDENTIFIER);
			this.state = 199;
			this.match(ThriftParser.T__10);
			this.state = 203;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 20)) & ~0x1F) === 0 && ((1 << (_la - 20)) & ((1 << (ThriftParser.T__19 - 20)) | (1 << (ThriftParser.T__20 - 20)) | (1 << (ThriftParser.T__27 - 20)) | (1 << (ThriftParser.T__30 - 20)) | (1 << (ThriftParser.T__31 - 20)) | (1 << (ThriftParser.INTEGER - 20)) | (1 << (ThriftParser.HEX_INTEGER - 20)) | (1 << (ThriftParser.TYPE_BOOL - 20)) | (1 << (ThriftParser.TYPE_BYTE - 20)) | (1 << (ThriftParser.TYPE_I16 - 20)) | (1 << (ThriftParser.TYPE_I32 - 20)) | (1 << (ThriftParser.TYPE_I64 - 20)) | (1 << (ThriftParser.TYPE_DOUBLE - 20)) | (1 << (ThriftParser.TYPE_STRING - 20)) | (1 << (ThriftParser.TYPE_BINARY - 20)) | (1 << (ThriftParser.IDENTIFIER - 20)))) !== 0)) {
				{
				{
				this.state = 200;
				this.field();
				}
				}
				this.state = 205;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 206;
			this.match(ThriftParser.T__11);
			this.state = 208;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ThriftParser.T__21) {
				{
				this.state = 207;
				this.type_annotations();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public exception_(): Exception_Context {
		let _localctx: Exception_Context = new Exception_Context(this._ctx, this.state);
		this.enterRule(_localctx, 26, ThriftParser.RULE_exception_);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 210;
			this.match(ThriftParser.T__15);
			this.state = 211;
			this.match(ThriftParser.IDENTIFIER);
			this.state = 212;
			this.match(ThriftParser.T__10);
			this.state = 216;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 20)) & ~0x1F) === 0 && ((1 << (_la - 20)) & ((1 << (ThriftParser.T__19 - 20)) | (1 << (ThriftParser.T__20 - 20)) | (1 << (ThriftParser.T__27 - 20)) | (1 << (ThriftParser.T__30 - 20)) | (1 << (ThriftParser.T__31 - 20)) | (1 << (ThriftParser.INTEGER - 20)) | (1 << (ThriftParser.HEX_INTEGER - 20)) | (1 << (ThriftParser.TYPE_BOOL - 20)) | (1 << (ThriftParser.TYPE_BYTE - 20)) | (1 << (ThriftParser.TYPE_I16 - 20)) | (1 << (ThriftParser.TYPE_I32 - 20)) | (1 << (ThriftParser.TYPE_I64 - 20)) | (1 << (ThriftParser.TYPE_DOUBLE - 20)) | (1 << (ThriftParser.TYPE_STRING - 20)) | (1 << (ThriftParser.TYPE_BINARY - 20)) | (1 << (ThriftParser.IDENTIFIER - 20)))) !== 0)) {
				{
				{
				this.state = 213;
				this.field();
				}
				}
				this.state = 218;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 219;
			this.match(ThriftParser.T__11);
			this.state = 221;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ThriftParser.T__21) {
				{
				this.state = 220;
				this.type_annotations();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public service(): ServiceContext {
		let _localctx: ServiceContext = new ServiceContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, ThriftParser.RULE_service);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 223;
			this.match(ThriftParser.T__16);
			this.state = 224;
			this.match(ThriftParser.IDENTIFIER);
			this.state = 227;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ThriftParser.T__17) {
				{
				this.state = 225;
				this.match(ThriftParser.T__17);
				this.state = 226;
				this.match(ThriftParser.IDENTIFIER);
				}
			}

			this.state = 229;
			this.match(ThriftParser.T__10);
			this.state = 233;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 24)) & ~0x1F) === 0 && ((1 << (_la - 24)) & ((1 << (ThriftParser.T__23 - 24)) | (1 << (ThriftParser.T__24 - 24)) | (1 << (ThriftParser.T__25 - 24)) | (1 << (ThriftParser.T__27 - 24)) | (1 << (ThriftParser.T__30 - 24)) | (1 << (ThriftParser.T__31 - 24)) | (1 << (ThriftParser.TYPE_BOOL - 24)) | (1 << (ThriftParser.TYPE_BYTE - 24)) | (1 << (ThriftParser.TYPE_I16 - 24)) | (1 << (ThriftParser.TYPE_I32 - 24)) | (1 << (ThriftParser.TYPE_I64 - 24)) | (1 << (ThriftParser.TYPE_DOUBLE - 24)) | (1 << (ThriftParser.TYPE_STRING - 24)) | (1 << (ThriftParser.TYPE_BINARY - 24)) | (1 << (ThriftParser.IDENTIFIER - 24)))) !== 0)) {
				{
				{
				this.state = 230;
				this.function_();
				}
				}
				this.state = 235;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 236;
			this.match(ThriftParser.T__11);
			this.state = 238;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ThriftParser.T__21) {
				{
				this.state = 237;
				this.type_annotations();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public field(): FieldContext {
		let _localctx: FieldContext = new FieldContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, ThriftParser.RULE_field);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 241;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ThriftParser.INTEGER || _la === ThriftParser.HEX_INTEGER) {
				{
				this.state = 240;
				this.field_id();
				}
			}

			this.state = 244;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ThriftParser.T__19 || _la === ThriftParser.T__20) {
				{
				this.state = 243;
				this.field_req();
				}
			}

			this.state = 246;
			this.field_type();
			this.state = 247;
			this.match(ThriftParser.IDENTIFIER);
			this.state = 250;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ThriftParser.T__7) {
				{
				this.state = 248;
				this.match(ThriftParser.T__7);
				this.state = 249;
				this.const_value();
				}
			}

			this.state = 253;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ThriftParser.T__21) {
				{
				this.state = 252;
				this.type_annotations();
				}
			}

			this.state = 256;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ThriftParser.T__35 || _la === ThriftParser.COMMA) {
				{
				this.state = 255;
				this.list_separator();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public field_id(): Field_idContext {
		let _localctx: Field_idContext = new Field_idContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, ThriftParser.RULE_field_id);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 258;
			this.integer();
			this.state = 259;
			this.match(ThriftParser.T__18);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public field_req(): Field_reqContext {
		let _localctx: Field_reqContext = new Field_reqContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, ThriftParser.RULE_field_req);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 261;
			_la = this._input.LA(1);
			if (!(_la === ThriftParser.T__19 || _la === ThriftParser.T__20)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public function_(): Function_Context {
		let _localctx: Function_Context = new Function_Context(this._ctx, this.state);
		this.enterRule(_localctx, 36, ThriftParser.RULE_function_);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 264;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ThriftParser.T__23 || _la === ThriftParser.T__24) {
				{
				this.state = 263;
				this.oneway();
				}
			}

			this.state = 266;
			this.function_type();
			this.state = 267;
			this.match(ThriftParser.IDENTIFIER);
			this.state = 268;
			this.match(ThriftParser.T__21);
			this.state = 272;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 20)) & ~0x1F) === 0 && ((1 << (_la - 20)) & ((1 << (ThriftParser.T__19 - 20)) | (1 << (ThriftParser.T__20 - 20)) | (1 << (ThriftParser.T__27 - 20)) | (1 << (ThriftParser.T__30 - 20)) | (1 << (ThriftParser.T__31 - 20)) | (1 << (ThriftParser.INTEGER - 20)) | (1 << (ThriftParser.HEX_INTEGER - 20)) | (1 << (ThriftParser.TYPE_BOOL - 20)) | (1 << (ThriftParser.TYPE_BYTE - 20)) | (1 << (ThriftParser.TYPE_I16 - 20)) | (1 << (ThriftParser.TYPE_I32 - 20)) | (1 << (ThriftParser.TYPE_I64 - 20)) | (1 << (ThriftParser.TYPE_DOUBLE - 20)) | (1 << (ThriftParser.TYPE_STRING - 20)) | (1 << (ThriftParser.TYPE_BINARY - 20)) | (1 << (ThriftParser.IDENTIFIER - 20)))) !== 0)) {
				{
				{
				this.state = 269;
				this.field();
				}
				}
				this.state = 274;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 275;
			this.match(ThriftParser.T__22);
			this.state = 277;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ThriftParser.T__26) {
				{
				this.state = 276;
				this.throws_list();
				}
			}

			this.state = 280;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ThriftParser.T__21) {
				{
				this.state = 279;
				this.type_annotations();
				}
			}

			this.state = 283;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ThriftParser.T__35 || _la === ThriftParser.COMMA) {
				{
				this.state = 282;
				this.list_separator();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public oneway(): OnewayContext {
		let _localctx: OnewayContext = new OnewayContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, ThriftParser.RULE_oneway);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 285;
			_la = this._input.LA(1);
			if (!(_la === ThriftParser.T__23 || _la === ThriftParser.T__24)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public function_type(): Function_typeContext {
		let _localctx: Function_typeContext = new Function_typeContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, ThriftParser.RULE_function_type);
		try {
			this.state = 289;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ThriftParser.T__27:
			case ThriftParser.T__30:
			case ThriftParser.T__31:
			case ThriftParser.TYPE_BOOL:
			case ThriftParser.TYPE_BYTE:
			case ThriftParser.TYPE_I16:
			case ThriftParser.TYPE_I32:
			case ThriftParser.TYPE_I64:
			case ThriftParser.TYPE_DOUBLE:
			case ThriftParser.TYPE_STRING:
			case ThriftParser.TYPE_BINARY:
			case ThriftParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 287;
				this.field_type();
				}
				break;
			case ThriftParser.T__25:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 288;
				this.match(ThriftParser.T__25);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public throws_list(): Throws_listContext {
		let _localctx: Throws_listContext = new Throws_listContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, ThriftParser.RULE_throws_list);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 291;
			this.match(ThriftParser.T__26);
			this.state = 292;
			this.match(ThriftParser.T__21);
			this.state = 296;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 20)) & ~0x1F) === 0 && ((1 << (_la - 20)) & ((1 << (ThriftParser.T__19 - 20)) | (1 << (ThriftParser.T__20 - 20)) | (1 << (ThriftParser.T__27 - 20)) | (1 << (ThriftParser.T__30 - 20)) | (1 << (ThriftParser.T__31 - 20)) | (1 << (ThriftParser.INTEGER - 20)) | (1 << (ThriftParser.HEX_INTEGER - 20)) | (1 << (ThriftParser.TYPE_BOOL - 20)) | (1 << (ThriftParser.TYPE_BYTE - 20)) | (1 << (ThriftParser.TYPE_I16 - 20)) | (1 << (ThriftParser.TYPE_I32 - 20)) | (1 << (ThriftParser.TYPE_I64 - 20)) | (1 << (ThriftParser.TYPE_DOUBLE - 20)) | (1 << (ThriftParser.TYPE_STRING - 20)) | (1 << (ThriftParser.TYPE_BINARY - 20)) | (1 << (ThriftParser.IDENTIFIER - 20)))) !== 0)) {
				{
				{
				this.state = 293;
				this.field();
				}
				}
				this.state = 298;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 299;
			this.match(ThriftParser.T__22);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public type_annotations(): Type_annotationsContext {
		let _localctx: Type_annotationsContext = new Type_annotationsContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, ThriftParser.RULE_type_annotations);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 301;
			this.match(ThriftParser.T__21);
			this.state = 305;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ThriftParser.IDENTIFIER) {
				{
				{
				this.state = 302;
				this.type_annotation();
				}
				}
				this.state = 307;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 308;
			this.match(ThriftParser.T__22);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public type_annotation(): Type_annotationContext {
		let _localctx: Type_annotationContext = new Type_annotationContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, ThriftParser.RULE_type_annotation);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 310;
			this.match(ThriftParser.IDENTIFIER);
			this.state = 313;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ThriftParser.T__7) {
				{
				this.state = 311;
				this.match(ThriftParser.T__7);
				this.state = 312;
				this.annotation_value();
				}
			}

			this.state = 316;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ThriftParser.T__35 || _la === ThriftParser.COMMA) {
				{
				this.state = 315;
				this.list_separator();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public annotation_value(): Annotation_valueContext {
		let _localctx: Annotation_valueContext = new Annotation_valueContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, ThriftParser.RULE_annotation_value);
		try {
			this.state = 320;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ThriftParser.INTEGER:
			case ThriftParser.HEX_INTEGER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 318;
				this.integer();
				}
				break;
			case ThriftParser.LITERAL_VALUE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 319;
				this.match(ThriftParser.LITERAL_VALUE);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public field_type(): Field_typeContext {
		let _localctx: Field_typeContext = new Field_typeContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, ThriftParser.RULE_field_type);
		try {
			this.state = 325;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ThriftParser.TYPE_BOOL:
			case ThriftParser.TYPE_BYTE:
			case ThriftParser.TYPE_I16:
			case ThriftParser.TYPE_I32:
			case ThriftParser.TYPE_I64:
			case ThriftParser.TYPE_DOUBLE:
			case ThriftParser.TYPE_STRING:
			case ThriftParser.TYPE_BINARY:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 322;
				this.base_type();
				}
				break;
			case ThriftParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 323;
				this.match(ThriftParser.IDENTIFIER);
				}
				break;
			case ThriftParser.T__27:
			case ThriftParser.T__30:
			case ThriftParser.T__31:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 324;
				this.container_type();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public base_type(): Base_typeContext {
		let _localctx: Base_typeContext = new Base_typeContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, ThriftParser.RULE_base_type);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 327;
			this.real_base_type();
			this.state = 329;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ThriftParser.T__21) {
				{
				this.state = 328;
				this.type_annotations();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public container_type(): Container_typeContext {
		let _localctx: Container_typeContext = new Container_typeContext(this._ctx, this.state);
		this.enterRule(_localctx, 54, ThriftParser.RULE_container_type);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 334;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ThriftParser.T__27:
				{
				this.state = 331;
				this.map_type();
				}
				break;
			case ThriftParser.T__30:
				{
				this.state = 332;
				this.set_type();
				}
				break;
			case ThriftParser.T__31:
				{
				this.state = 333;
				this.list_type();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 337;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ThriftParser.T__21) {
				{
				this.state = 336;
				this.type_annotations();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public map_type(): Map_typeContext {
		let _localctx: Map_typeContext = new Map_typeContext(this._ctx, this.state);
		this.enterRule(_localctx, 56, ThriftParser.RULE_map_type);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 339;
			this.match(ThriftParser.T__27);
			this.state = 341;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ThriftParser.T__32) {
				{
				this.state = 340;
				this.cpp_type();
				}
			}

			this.state = 343;
			this.match(ThriftParser.T__28);
			this.state = 344;
			this.field_type();
			this.state = 345;
			this.match(ThriftParser.COMMA);
			this.state = 346;
			this.field_type();
			this.state = 347;
			this.match(ThriftParser.T__29);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public set_type(): Set_typeContext {
		let _localctx: Set_typeContext = new Set_typeContext(this._ctx, this.state);
		this.enterRule(_localctx, 58, ThriftParser.RULE_set_type);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 349;
			this.match(ThriftParser.T__30);
			this.state = 351;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ThriftParser.T__32) {
				{
				this.state = 350;
				this.cpp_type();
				}
			}

			this.state = 353;
			this.match(ThriftParser.T__28);
			this.state = 354;
			this.field_type();
			this.state = 355;
			this.match(ThriftParser.T__29);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public list_type(): List_typeContext {
		let _localctx: List_typeContext = new List_typeContext(this._ctx, this.state);
		this.enterRule(_localctx, 60, ThriftParser.RULE_list_type);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 357;
			this.match(ThriftParser.T__31);
			this.state = 358;
			this.match(ThriftParser.T__28);
			this.state = 359;
			this.field_type();
			this.state = 360;
			this.match(ThriftParser.T__29);
			this.state = 362;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ThriftParser.T__32) {
				{
				this.state = 361;
				this.cpp_type();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public cpp_type(): Cpp_typeContext {
		let _localctx: Cpp_typeContext = new Cpp_typeContext(this._ctx, this.state);
		this.enterRule(_localctx, 62, ThriftParser.RULE_cpp_type);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 364;
			this.match(ThriftParser.T__32);
			this.state = 365;
			this.match(ThriftParser.LITERAL_VALUE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public const_value(): Const_valueContext {
		let _localctx: Const_valueContext = new Const_valueContext(this._ctx, this.state);
		this.enterRule(_localctx, 64, ThriftParser.RULE_const_value);
		try {
			this.state = 373;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ThriftParser.INTEGER:
			case ThriftParser.HEX_INTEGER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 367;
				this.integer();
				}
				break;
			case ThriftParser.DOUBLE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 368;
				this.match(ThriftParser.DOUBLE);
				}
				break;
			case ThriftParser.LITERAL_VALUE:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 369;
				this.match(ThriftParser.LITERAL_VALUE);
				}
				break;
			case ThriftParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 370;
				this.match(ThriftParser.IDENTIFIER);
				}
				break;
			case ThriftParser.T__33:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 371;
				this.const_list();
				}
				break;
			case ThriftParser.T__10:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 372;
				this.const_map();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public integer(): IntegerContext {
		let _localctx: IntegerContext = new IntegerContext(this._ctx, this.state);
		this.enterRule(_localctx, 66, ThriftParser.RULE_integer);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 375;
			_la = this._input.LA(1);
			if (!(_la === ThriftParser.INTEGER || _la === ThriftParser.HEX_INTEGER)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public const_list(): Const_listContext {
		let _localctx: Const_listContext = new Const_listContext(this._ctx, this.state);
		this.enterRule(_localctx, 68, ThriftParser.RULE_const_list);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 377;
			this.match(ThriftParser.T__33);
			this.state = 384;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ThriftParser.T__10 || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (ThriftParser.T__33 - 34)) | (1 << (ThriftParser.INTEGER - 34)) | (1 << (ThriftParser.HEX_INTEGER - 34)) | (1 << (ThriftParser.DOUBLE - 34)) | (1 << (ThriftParser.LITERAL_VALUE - 34)) | (1 << (ThriftParser.IDENTIFIER - 34)))) !== 0)) {
				{
				{
				this.state = 378;
				this.const_value();
				this.state = 380;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ThriftParser.T__35 || _la === ThriftParser.COMMA) {
					{
					this.state = 379;
					this.list_separator();
					}
				}

				}
				}
				this.state = 386;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 387;
			this.match(ThriftParser.T__34);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public const_map_entry(): Const_map_entryContext {
		let _localctx: Const_map_entryContext = new Const_map_entryContext(this._ctx, this.state);
		this.enterRule(_localctx, 70, ThriftParser.RULE_const_map_entry);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 389;
			this.const_value();
			this.state = 390;
			this.match(ThriftParser.T__18);
			this.state = 391;
			this.const_value();
			this.state = 393;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ThriftParser.T__35 || _la === ThriftParser.COMMA) {
				{
				this.state = 392;
				this.list_separator();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public const_map(): Const_mapContext {
		let _localctx: Const_mapContext = new Const_mapContext(this._ctx, this.state);
		this.enterRule(_localctx, 72, ThriftParser.RULE_const_map);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 395;
			this.match(ThriftParser.T__10);
			this.state = 399;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ThriftParser.T__10 || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (ThriftParser.T__33 - 34)) | (1 << (ThriftParser.INTEGER - 34)) | (1 << (ThriftParser.HEX_INTEGER - 34)) | (1 << (ThriftParser.DOUBLE - 34)) | (1 << (ThriftParser.LITERAL_VALUE - 34)) | (1 << (ThriftParser.IDENTIFIER - 34)))) !== 0)) {
				{
				{
				this.state = 396;
				this.const_map_entry();
				}
				}
				this.state = 401;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 402;
			this.match(ThriftParser.T__11);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public list_separator(): List_separatorContext {
		let _localctx: List_separatorContext = new List_separatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 74, ThriftParser.RULE_list_separator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 404;
			_la = this._input.LA(1);
			if (!(_la === ThriftParser.T__35 || _la === ThriftParser.COMMA)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public real_base_type(): Real_base_typeContext {
		let _localctx: Real_base_typeContext = new Real_base_typeContext(this._ctx, this.state);
		this.enterRule(_localctx, 76, ThriftParser.RULE_real_base_type);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 406;
			_la = this._input.LA(1);
			if (!(((((_la - 40)) & ~0x1F) === 0 && ((1 << (_la - 40)) & ((1 << (ThriftParser.TYPE_BOOL - 40)) | (1 << (ThriftParser.TYPE_BYTE - 40)) | (1 << (ThriftParser.TYPE_I16 - 40)) | (1 << (ThriftParser.TYPE_I32 - 40)) | (1 << (ThriftParser.TYPE_I64 - 40)) | (1 << (ThriftParser.TYPE_DOUBLE - 40)) | (1 << (ThriftParser.TYPE_STRING - 40)) | (1 << (ThriftParser.TYPE_BINARY - 40)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x037\u019B\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
		"\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04#" +
		"\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x03\x02\x07\x02R\n\x02\f" +
		"\x02\x0E\x02U\v\x02\x03\x02\x07\x02X\n\x02\f\x02\x0E\x02[\v\x02\x03\x02" +
		"\x03\x02\x03\x03\x03\x03\x03\x03\x05\x03b\n\x03\x03\x04\x03\x04\x03\x04" +
		"\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x05\x05n\n\x05" +
		"\x03\x05\x03\x05\x03\x05\x03\x05\x05\x05t\n\x05\x03\x06\x03\x06\x03\x06" +
		"\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x05\x07" +
		"\x81\n\x07\x03\b\x03\b\x03\b\x03\b\x03\b\x05\b\x88\n\b\x03\b\x05\b\x8B" +
		"\n\b\x03\t\x03\t\x03\t\x03\t\x05\t\x91\n\t\x03\n\x03\n\x03\n\x03\n\x07" +
		"\n\x97\n\n\f\n\x0E\n\x9A\v\n\x03\n\x03\n\x05\n\x9E\n\n\x03\v\x03\v\x03" +
		"\v\x05\v\xA3\n\v\x03\v\x05\v\xA6\n\v\x03\v\x05\v\xA9\n\v\x03\f\x03\f\x03" +
		"\f\x03\f\x03\f\x05\f\xB0\n\f\x07\f\xB2\n\f\f\f\x0E\f\xB5\v\f\x03\f\x03" +
		"\f\x05\f\xB9\n\f\x03\r\x03\r\x03\r\x03\r\x07\r\xBF\n\r\f\r\x0E\r\xC2\v" +
		"\r\x03\r\x03\r\x05\r\xC6\n\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x07\x0E\xCC" +
		"\n\x0E\f\x0E\x0E\x0E\xCF\v\x0E\x03\x0E\x03\x0E\x05\x0E\xD3\n\x0E\x03\x0F" +
		"\x03\x0F\x03\x0F\x03\x0F\x07\x0F\xD9\n\x0F\f\x0F\x0E\x0F\xDC\v\x0F\x03" +
		"\x0F\x03\x0F\x05\x0F\xE0\n\x0F\x03\x10\x03\x10\x03\x10\x03\x10\x05\x10" +
		"\xE6\n\x10\x03\x10\x03\x10\x07\x10\xEA\n\x10\f\x10\x0E\x10\xED\v\x10\x03" +
		"\x10\x03\x10\x05\x10\xF1\n\x10\x03\x11\x05\x11\xF4\n\x11\x03\x11\x05\x11" +
		"\xF7\n\x11\x03\x11\x03\x11\x03\x11\x03\x11\x05\x11\xFD\n\x11\x03\x11\x05" +
		"\x11\u0100\n\x11\x03\x11\x05\x11\u0103\n\x11\x03\x12\x03\x12\x03\x12\x03" +
		"\x13\x03\x13\x03\x14\x05\x14\u010B\n\x14\x03\x14\x03\x14\x03\x14\x03\x14" +
		"\x07\x14\u0111\n\x14\f\x14\x0E\x14\u0114\v\x14\x03\x14\x03\x14\x05\x14" +
		"\u0118\n\x14\x03\x14\x05\x14\u011B\n\x14\x03\x14\x05\x14\u011E\n\x14\x03" +
		"\x15\x03\x15\x03\x16\x03\x16\x05\x16\u0124\n\x16\x03\x17\x03\x17\x03\x17" +
		"\x07\x17\u0129\n\x17\f\x17\x0E\x17\u012C\v\x17\x03\x17\x03\x17\x03\x18" +
		"\x03\x18\x07\x18\u0132\n\x18\f\x18\x0E\x18\u0135\v\x18\x03\x18\x03\x18" +
		"\x03\x19\x03\x19\x03\x19\x05\x19\u013C\n\x19\x03\x19\x05\x19\u013F\n\x19" +
		"\x03\x1A\x03\x1A\x05\x1A\u0143\n\x1A\x03\x1B\x03\x1B\x03\x1B\x05\x1B\u0148" +
		"\n\x1B\x03\x1C\x03\x1C\x05\x1C\u014C\n\x1C\x03\x1D\x03\x1D\x03\x1D\x05" +
		"\x1D\u0151\n\x1D\x03\x1D\x05\x1D\u0154\n\x1D\x03\x1E\x03\x1E\x05\x1E\u0158" +
		"\n\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1F\x03\x1F" +
		"\x05\x1F\u0162\n\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03 \x03 \x03 \x03" +
		" \x03 \x05 \u016D\n \x03!\x03!\x03!\x03\"\x03\"\x03\"\x03\"\x03\"\x03" +
		"\"\x05\"\u0178\n\"\x03#\x03#\x03$\x03$\x03$\x05$\u017F\n$\x07$\u0181\n" +
		"$\f$\x0E$\u0184\v$\x03$\x03$\x03%\x03%\x03%\x03%\x05%\u018C\n%\x03&\x03" +
		"&\x07&\u0190\n&\f&\x0E&\u0193\v&\x03&\x03&\x03\'\x03\'\x03(\x03(\x03(" +
		"\x02\x02\x02)\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02" +
		"\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02" +
		"&\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02<\x02>\x02@\x02" +
		"B\x02D\x02F\x02H\x02J\x02L\x02N\x02\x02\b\x03\x0223\x03\x02\x16\x17\x03" +
		"\x02\x1A\x1B\x03\x02\'(\x04\x02&&44\x03\x02*1\x02\u01B8\x02S\x03\x02\x02" +
		"\x02\x04a\x03\x02\x02\x02\x06c\x03\x02\x02\x02\bs\x03\x02\x02\x02\nu\x03" +
		"\x02\x02\x02\f\x80\x03\x02\x02\x02\x0E\x82\x03\x02\x02\x02\x10\x8C\x03" +
		"\x02\x02\x02\x12\x92\x03\x02\x02\x02\x14\x9F\x03\x02\x02\x02\x16\xAA\x03" +
		"\x02\x02\x02\x18\xBA\x03\x02\x02\x02\x1A\xC7\x03\x02\x02\x02\x1C\xD4\x03" +
		"\x02\x02\x02\x1E\xE1\x03\x02\x02\x02 \xF3\x03\x02\x02\x02\"\u0104\x03" +
		"\x02\x02\x02$\u0107\x03\x02\x02\x02&\u010A\x03\x02\x02\x02(\u011F\x03" +
		"\x02\x02\x02*\u0123\x03\x02\x02\x02,\u0125\x03\x02\x02\x02.\u012F\x03" +
		"\x02\x02\x020\u0138\x03\x02\x02\x022\u0142\x03\x02\x02\x024\u0147\x03" +
		"\x02\x02\x026\u0149\x03\x02\x02\x028\u0150\x03\x02\x02\x02:\u0155\x03" +
		"\x02\x02\x02<\u015F\x03\x02\x02\x02>\u0167\x03\x02\x02\x02@\u016E\x03" +
		"\x02\x02\x02B\u0177\x03\x02\x02\x02D\u0179\x03\x02\x02\x02F\u017B\x03" +
		"\x02\x02\x02H\u0187\x03\x02\x02\x02J\u018D\x03\x02\x02\x02L\u0196\x03" +
		"\x02\x02\x02N\u0198\x03\x02\x02\x02PR\x05\x04\x03\x02QP\x03\x02\x02\x02" +
		"RU\x03\x02\x02\x02SQ\x03\x02\x02\x02ST\x03\x02\x02\x02TY\x03\x02\x02\x02" +
		"US\x03\x02\x02\x02VX\x05\f\x07\x02WV\x03\x02\x02\x02X[\x03\x02\x02\x02" +
		"YW\x03\x02\x02\x02YZ\x03\x02\x02\x02Z\\\x03\x02\x02\x02[Y\x03\x02\x02" +
		"\x02\\]\x07\x02\x02\x03]\x03\x03\x02\x02\x02^b\x05\x06\x04\x02_b\x05\b" +
		"\x05\x02`b\x05\n\x06\x02a^\x03\x02\x02\x02a_\x03\x02\x02\x02a`\x03\x02" +
		"\x02\x02b\x05\x03\x02\x02\x02cd\x07\x03\x02\x02de\x072\x02\x02e\x07\x03" +
		"\x02\x02\x02fg\x07\x04\x02\x02gh\x07\x05\x02\x02ht\t\x02\x02\x02ij\x07" +
		"\x04\x02\x02jk\x073\x02\x02km\t\x02\x02\x02ln\x05.\x18\x02ml\x03\x02\x02" +
		"\x02mn\x03\x02\x02\x02nt\x03\x02\x02\x02op\x07\x06\x02\x02pt\x073\x02" +
		"\x02qr\x07\x07\x02\x02rt\x073\x02\x02sf\x03\x02\x02\x02si\x03\x02\x02" +
		"\x02so\x03\x02\x02\x02sq\x03\x02\x02\x02t\t\x03\x02\x02\x02uv\x07\b\x02" +
		"\x02vw\x072\x02\x02w\v\x03\x02\x02\x02x\x81\x05\x0E\b\x02y\x81\x05\x10" +
		"\t\x02z\x81\x05\x12\n\x02{\x81\x05\x16\f\x02|\x81\x05\x18\r\x02}\x81\x05" +
		"\x1A\x0E\x02~\x81\x05\x1C\x0F\x02\x7F\x81\x05\x1E\x10\x02\x80x\x03\x02" +
		"\x02\x02\x80y\x03\x02\x02\x02\x80z\x03\x02\x02\x02\x80{\x03\x02\x02\x02" +
		"\x80|\x03\x02\x02\x02\x80}\x03\x02\x02\x02\x80~\x03\x02\x02\x02\x80\x7F" +
		"\x03\x02\x02\x02\x81\r\x03\x02\x02\x02\x82\x83\x07\t\x02\x02\x83\x84\x05" +
		"4\x1B\x02\x84\x87\x073\x02\x02\x85\x86\x07\n\x02\x02\x86\x88\x05B\"\x02" +
		"\x87\x85\x03\x02\x02\x02\x87\x88\x03\x02\x02\x02\x88\x8A\x03\x02\x02\x02" +
		"\x89\x8B\x05L\'\x02\x8A\x89\x03\x02\x02\x02\x8A\x8B\x03\x02\x02\x02\x8B" +
		"\x0F\x03\x02\x02\x02\x8C\x8D\x07\v\x02\x02\x8D\x8E\x054\x1B\x02\x8E\x90" +
		"\x073\x02\x02\x8F\x91\x05.\x18\x02\x90\x8F\x03\x02\x02\x02\x90\x91\x03" +
		"\x02\x02\x02\x91\x11\x03\x02\x02\x02\x92\x93\x07\f\x02\x02\x93\x94\x07" +
		"3\x02\x02\x94\x98\x07\r\x02\x02\x95\x97\x05\x14\v\x02\x96\x95\x03\x02" +
		"\x02\x02\x97\x9A\x03\x02\x02\x02\x98\x96\x03\x02\x02\x02\x98\x99\x03\x02" +
		"\x02\x02\x99\x9B\x03\x02\x02\x02\x9A\x98\x03\x02\x02\x02\x9B\x9D\x07\x0E" +
		"\x02\x02\x9C\x9E\x05.\x18\x02\x9D\x9C\x03\x02\x02\x02\x9D\x9E\x03\x02" +
		"\x02\x02\x9E\x13\x03\x02\x02\x02\x9F\xA2\x073\x02\x02\xA0\xA1\x07\n\x02" +
		"\x02\xA1\xA3\x05D#\x02\xA2\xA0\x03\x02\x02\x02\xA2\xA3\x03\x02\x02\x02" +
		"\xA3\xA5\x03\x02\x02\x02\xA4\xA6\x05.\x18\x02\xA5\xA4\x03\x02\x02\x02" +
		"\xA5\xA6\x03\x02\x02\x02\xA6\xA8\x03\x02\x02\x02\xA7\xA9\x05L\'\x02\xA8" +
		"\xA7\x03\x02\x02\x02\xA8\xA9\x03\x02\x02\x02\xA9\x15\x03\x02\x02\x02\xAA" +
		"\xAB\x07\x0F\x02\x02\xAB\xAC\x073\x02\x02\xAC\xB3\x07\r\x02\x02\xAD\xAF" +
		"\x072\x02\x02\xAE\xB0\x05L\'\x02\xAF\xAE\x03\x02\x02\x02\xAF\xB0\x03\x02" +
		"\x02\x02\xB0\xB2\x03\x02\x02\x02\xB1\xAD\x03\x02\x02\x02\xB2\xB5\x03\x02" +
		"\x02\x02\xB3\xB1\x03\x02\x02\x02\xB3\xB4\x03\x02\x02\x02\xB4\xB6\x03\x02" +
		"\x02\x02\xB5\xB3\x03\x02\x02\x02\xB6\xB8\x07\x0E\x02\x02\xB7\xB9\x05." +
		"\x18\x02\xB8\xB7\x03\x02\x02\x02\xB8\xB9\x03\x02\x02\x02\xB9\x17\x03\x02" +
		"\x02\x02\xBA\xBB\x07\x10\x02\x02\xBB\xBC\x073\x02\x02\xBC\xC0\x07\r\x02" +
		"\x02\xBD\xBF\x05 \x11\x02\xBE\xBD\x03\x02\x02\x02\xBF\xC2\x03\x02\x02" +
		"\x02\xC0\xBE\x03\x02\x02\x02\xC0\xC1\x03\x02\x02\x02\xC1\xC3\x03\x02\x02" +
		"\x02\xC2\xC0\x03\x02\x02\x02\xC3\xC5\x07\x0E\x02\x02\xC4\xC6\x05.\x18" +
		"\x02\xC5\xC4\x03\x02\x02\x02\xC5\xC6\x03\x02\x02\x02\xC6\x19\x03\x02\x02" +
		"\x02\xC7\xC8\x07\x11\x02\x02\xC8\xC9\x073\x02\x02\xC9\xCD\x07\r\x02\x02" +
		"\xCA\xCC\x05 \x11\x02\xCB\xCA\x03\x02\x02\x02\xCC\xCF\x03\x02\x02\x02" +
		"\xCD\xCB\x03\x02\x02\x02\xCD\xCE\x03\x02\x02\x02\xCE\xD0\x03\x02\x02\x02" +
		"\xCF\xCD\x03\x02\x02\x02\xD0\xD2\x07\x0E\x02\x02\xD1\xD3\x05.\x18\x02" +
		"\xD2\xD1\x03\x02\x02\x02\xD2\xD3\x03\x02\x02\x02\xD3\x1B\x03\x02\x02\x02" +
		"\xD4\xD5\x07\x12\x02\x02\xD5\xD6\x073\x02\x02\xD6\xDA\x07\r\x02\x02\xD7" +
		"\xD9\x05 \x11\x02\xD8\xD7\x03\x02\x02\x02\xD9\xDC\x03\x02\x02\x02\xDA" +
		"\xD8\x03\x02\x02\x02\xDA\xDB\x03\x02\x02\x02\xDB\xDD\x03\x02\x02\x02\xDC" +
		"\xDA\x03\x02\x02\x02\xDD\xDF\x07\x0E\x02\x02\xDE\xE0\x05.\x18\x02\xDF" +
		"\xDE\x03\x02\x02\x02\xDF\xE0\x03\x02\x02\x02\xE0\x1D\x03\x02\x02\x02\xE1" +
		"\xE2\x07\x13\x02\x02\xE2\xE5\x073\x02\x02\xE3\xE4\x07\x14\x02\x02\xE4" +
		"\xE6\x073\x02\x02\xE5\xE3\x03\x02\x02\x02\xE5\xE6\x03\x02\x02\x02\xE6" +
		"\xE7\x03\x02\x02\x02\xE7\xEB\x07\r\x02\x02\xE8\xEA\x05&\x14\x02\xE9\xE8" +
		"\x03\x02\x02\x02\xEA\xED\x03\x02\x02\x02\xEB\xE9\x03\x02\x02\x02\xEB\xEC" +
		"\x03\x02\x02\x02\xEC\xEE\x03\x02\x02\x02\xED\xEB\x03\x02\x02\x02\xEE\xF0" +
		"\x07\x0E\x02\x02\xEF\xF1\x05.\x18\x02\xF0\xEF\x03\x02\x02\x02\xF0\xF1" +
		"\x03\x02\x02\x02\xF1\x1F\x03\x02\x02\x02\xF2\xF4\x05\"\x12\x02\xF3\xF2" +
		"\x03\x02\x02\x02\xF3\xF4\x03\x02\x02\x02\xF4\xF6\x03\x02\x02\x02\xF5\xF7" +
		"\x05$\x13\x02\xF6\xF5\x03\x02\x02\x02\xF6\xF7\x03\x02\x02\x02\xF7\xF8" +
		"\x03\x02\x02\x02\xF8\xF9\x054\x1B\x02\xF9\xFC\x073\x02\x02\xFA\xFB\x07" +
		"\n\x02\x02\xFB\xFD\x05B\"\x02\xFC\xFA\x03\x02\x02\x02\xFC\xFD\x03\x02" +
		"\x02\x02\xFD\xFF\x03\x02\x02\x02\xFE\u0100\x05.\x18\x02\xFF\xFE\x03\x02" +
		"\x02\x02\xFF\u0100\x03\x02\x02\x02\u0100\u0102\x03\x02\x02\x02\u0101\u0103" +
		"\x05L\'\x02\u0102\u0101\x03\x02\x02\x02\u0102\u0103\x03\x02\x02\x02\u0103" +
		"!\x03\x02\x02\x02\u0104\u0105\x05D#\x02\u0105\u0106\x07\x15\x02\x02\u0106" +
		"#\x03\x02\x02\x02\u0107\u0108\t\x03\x02\x02\u0108%\x03\x02\x02\x02\u0109" +
		"\u010B\x05(\x15\x02\u010A\u0109\x03\x02\x02\x02\u010A\u010B\x03\x02\x02" +
		"\x02\u010B\u010C\x03\x02\x02\x02\u010C\u010D\x05*\x16\x02\u010D\u010E" +
		"\x073\x02\x02\u010E\u0112\x07\x18\x02\x02\u010F\u0111\x05 \x11\x02\u0110" +
		"\u010F\x03\x02\x02\x02\u0111\u0114\x03\x02\x02\x02\u0112\u0110\x03\x02" +
		"\x02\x02\u0112\u0113\x03\x02\x02\x02\u0113\u0115\x03\x02\x02\x02\u0114" +
		"\u0112\x03\x02\x02\x02\u0115\u0117\x07\x19\x02\x02\u0116\u0118\x05,\x17" +
		"\x02\u0117\u0116\x03\x02\x02\x02\u0117\u0118\x03\x02\x02\x02\u0118\u011A" +
		"\x03\x02\x02\x02\u0119\u011B\x05.\x18\x02\u011A\u0119\x03\x02\x02\x02" +
		"\u011A\u011B\x03\x02\x02\x02\u011B\u011D\x03\x02\x02\x02\u011C\u011E\x05" +
		"L\'\x02\u011D\u011C\x03\x02\x02\x02\u011D\u011E\x03\x02\x02\x02\u011E" +
		"\'\x03\x02\x02\x02\u011F\u0120\t\x04\x02\x02\u0120)\x03\x02\x02\x02\u0121" +
		"\u0124\x054\x1B\x02\u0122\u0124\x07\x1C\x02\x02\u0123\u0121\x03\x02\x02" +
		"\x02\u0123\u0122\x03\x02\x02\x02\u0124+\x03\x02\x02\x02\u0125\u0126\x07" +
		"\x1D\x02\x02\u0126\u012A\x07\x18\x02\x02\u0127\u0129\x05 \x11\x02\u0128" +
		"\u0127\x03\x02\x02\x02\u0129\u012C\x03\x02\x02\x02\u012A\u0128\x03\x02" +
		"\x02\x02\u012A\u012B\x03\x02\x02\x02\u012B\u012D\x03\x02\x02\x02\u012C" +
		"\u012A\x03\x02\x02\x02\u012D\u012E\x07\x19\x02\x02\u012E-\x03\x02\x02" +
		"\x02\u012F\u0133\x07\x18\x02\x02\u0130\u0132\x050\x19\x02\u0131\u0130" +
		"\x03\x02\x02\x02\u0132\u0135\x03\x02\x02\x02\u0133\u0131\x03\x02\x02\x02" +
		"\u0133\u0134\x03\x02\x02\x02\u0134\u0136\x03\x02\x02\x02\u0135\u0133\x03" +
		"\x02\x02\x02\u0136\u0137\x07\x19\x02\x02\u0137/\x03\x02\x02\x02\u0138" +
		"\u013B\x073\x02\x02\u0139\u013A\x07\n\x02\x02\u013A\u013C\x052\x1A\x02" +
		"\u013B\u0139\x03\x02\x02\x02\u013B\u013C\x03\x02\x02\x02\u013C\u013E\x03" +
		"\x02\x02\x02\u013D\u013F\x05L\'\x02\u013E\u013D\x03\x02\x02\x02\u013E" +
		"\u013F\x03\x02\x02\x02\u013F1\x03\x02\x02\x02\u0140\u0143\x05D#\x02\u0141" +
		"\u0143\x072\x02\x02\u0142\u0140\x03\x02\x02\x02\u0142\u0141\x03\x02\x02" +
		"\x02\u01433\x03\x02\x02\x02\u0144\u0148\x056\x1C\x02\u0145\u0148\x073" +
		"\x02\x02\u0146\u0148\x058\x1D\x02\u0147\u0144\x03\x02\x02\x02\u0147\u0145" +
		"\x03\x02\x02\x02\u0147\u0146\x03\x02\x02\x02\u01485\x03\x02\x02\x02\u0149" +
		"\u014B\x05N(\x02\u014A\u014C\x05.\x18\x02\u014B\u014A\x03\x02\x02\x02" +
		"\u014B\u014C\x03\x02\x02\x02\u014C7\x03\x02\x02\x02\u014D\u0151\x05:\x1E" +
		"\x02\u014E\u0151\x05<\x1F\x02\u014F\u0151\x05> \x02\u0150\u014D\x03\x02" +
		"\x02\x02\u0150\u014E\x03\x02\x02\x02\u0150\u014F\x03\x02\x02\x02\u0151" +
		"\u0153\x03\x02\x02\x02\u0152\u0154\x05.\x18\x02\u0153\u0152\x03\x02\x02" +
		"\x02\u0153\u0154\x03\x02\x02\x02\u01549\x03\x02\x02\x02\u0155\u0157\x07" +
		"\x1E\x02\x02\u0156\u0158\x05@!\x02\u0157\u0156\x03\x02\x02\x02\u0157\u0158" +
		"\x03\x02\x02\x02\u0158\u0159\x03\x02\x02\x02\u0159\u015A\x07\x1F\x02\x02" +
		"\u015A\u015B\x054\x1B\x02\u015B\u015C\x074\x02\x02\u015C\u015D\x054\x1B" +
		"\x02\u015D\u015E\x07 \x02\x02\u015E;\x03\x02\x02\x02\u015F\u0161\x07!" +
		"\x02\x02\u0160\u0162\x05@!\x02\u0161\u0160\x03\x02\x02\x02\u0161\u0162" +
		"\x03\x02\x02\x02\u0162\u0163\x03\x02\x02\x02\u0163\u0164\x07\x1F\x02\x02" +
		"\u0164\u0165\x054\x1B\x02\u0165\u0166\x07 \x02\x02\u0166=\x03\x02\x02" +
		"\x02\u0167\u0168\x07\"\x02\x02\u0168\u0169\x07\x1F\x02\x02\u0169\u016A" +
		"\x054\x1B\x02\u016A\u016C\x07 \x02\x02\u016B\u016D\x05@!\x02\u016C\u016B" +
		"\x03\x02\x02\x02\u016C\u016D\x03\x02\x02\x02\u016D?\x03\x02\x02\x02\u016E" +
		"\u016F\x07#\x02\x02\u016F\u0170\x072\x02\x02\u0170A\x03\x02\x02\x02\u0171" +
		"\u0178\x05D#\x02\u0172\u0178\x07)\x02\x02\u0173\u0178\x072\x02\x02\u0174" +
		"\u0178\x073\x02\x02\u0175\u0178\x05F$\x02\u0176\u0178\x05J&\x02\u0177" +
		"\u0171\x03\x02\x02\x02\u0177\u0172\x03\x02\x02\x02\u0177\u0173\x03\x02" +
		"\x02\x02\u0177\u0174\x03\x02\x02\x02\u0177\u0175\x03\x02\x02\x02\u0177" +
		"\u0176\x03\x02\x02\x02\u0178C\x03\x02\x02\x02\u0179\u017A\t\x05\x02\x02" +
		"\u017AE\x03\x02\x02\x02\u017B\u0182\x07$\x02\x02\u017C\u017E\x05B\"\x02" +
		"\u017D\u017F\x05L\'\x02\u017E\u017D\x03\x02\x02\x02\u017E\u017F\x03\x02" +
		"\x02\x02\u017F\u0181\x03\x02\x02\x02\u0180\u017C\x03\x02\x02\x02\u0181" +
		"\u0184\x03\x02\x02\x02\u0182\u0180\x03\x02\x02\x02\u0182\u0183\x03\x02" +
		"\x02\x02\u0183\u0185\x03\x02\x02\x02\u0184\u0182\x03\x02\x02\x02\u0185" +
		"\u0186\x07%\x02\x02\u0186G\x03\x02\x02\x02\u0187\u0188\x05B\"\x02\u0188" +
		"\u0189\x07\x15\x02\x02\u0189\u018B\x05B\"\x02\u018A\u018C\x05L\'\x02\u018B" +
		"\u018A\x03\x02\x02\x02\u018B\u018C\x03\x02\x02\x02\u018CI\x03\x02\x02" +
		"\x02\u018D\u0191\x07\r\x02\x02\u018E\u0190\x05H%\x02\u018F\u018E\x03\x02" +
		"\x02\x02\u0190\u0193\x03\x02\x02\x02\u0191\u018F\x03\x02\x02\x02\u0191" +
		"\u0192\x03\x02\x02\x02\u0192\u0194\x03\x02\x02\x02\u0193\u0191\x03\x02" +
		"\x02\x02\u0194\u0195\x07\x0E\x02\x02\u0195K\x03\x02\x02\x02\u0196\u0197" +
		"\t\x06\x02\x02\u0197M\x03\x02\x02\x02\u0198\u0199\t\x07\x02\x02\u0199" +
		"O\x03\x02\x02\x028SYams\x80\x87\x8A\x90\x98\x9D\xA2\xA5\xA8\xAF\xB3\xB8" +
		"\xC0\xC5\xCD\xD2\xDA\xDF\xE5\xEB\xF0\xF3\xF6\xFC\xFF\u0102\u010A\u0112" +
		"\u0117\u011A\u011D\u0123\u012A\u0133\u013B\u013E\u0142\u0147\u014B\u0150" +
		"\u0153\u0157\u0161\u016C\u0177\u017E\u0182\u018B\u0191";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!ThriftParser.__ATN) {
			ThriftParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(ThriftParser._serializedATN));
		}

		return ThriftParser.__ATN;
	}

}

export class DocumentContext extends ParserRuleContext {
	public EOF(): TerminalNode { return this.getToken(ThriftParser.EOF, 0); }
	public header(): HeaderContext[];
	public header(i: number): HeaderContext;
	public header(i?: number): HeaderContext | HeaderContext[] {
		if (i === undefined) {
			return this.getRuleContexts(HeaderContext);
		} else {
			return this.getRuleContext(i, HeaderContext);
		}
	}
	public definition(): DefinitionContext[];
	public definition(i: number): DefinitionContext;
	public definition(i?: number): DefinitionContext | DefinitionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DefinitionContext);
		} else {
			return this.getRuleContext(i, DefinitionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ThriftParser.RULE_document; }
	// @Override
	public enterRule(listener: ThriftListener): void {
		if (listener.enterDocument) {
			listener.enterDocument(this);
		}
	}
	// @Override
	public exitRule(listener: ThriftListener): void {
		if (listener.exitDocument) {
			listener.exitDocument(this);
		}
	}
}


export class HeaderContext extends ParserRuleContext {
	public include_(): Include_Context | undefined {
		return this.tryGetRuleContext(0, Include_Context);
	}
	public namespace_(): Namespace_Context | undefined {
		return this.tryGetRuleContext(0, Namespace_Context);
	}
	public cpp_include(): Cpp_includeContext | undefined {
		return this.tryGetRuleContext(0, Cpp_includeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ThriftParser.RULE_header; }
	// @Override
	public enterRule(listener: ThriftListener): void {
		if (listener.enterHeader) {
			listener.enterHeader(this);
		}
	}
	// @Override
	public exitRule(listener: ThriftListener): void {
		if (listener.exitHeader) {
			listener.exitHeader(this);
		}
	}
}


export class Include_Context extends ParserRuleContext {
	public LITERAL_VALUE(): TerminalNode { return this.getToken(ThriftParser.LITERAL_VALUE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ThriftParser.RULE_include_; }
	// @Override
	public enterRule(listener: ThriftListener): void {
		if (listener.enterInclude_) {
			listener.enterInclude_(this);
		}
	}
	// @Override
	public exitRule(listener: ThriftListener): void {
		if (listener.exitInclude_) {
			listener.exitInclude_(this);
		}
	}
}


export class Namespace_Context extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode[];
	public IDENTIFIER(i: number): TerminalNode;
	public IDENTIFIER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ThriftParser.IDENTIFIER);
		} else {
			return this.getToken(ThriftParser.IDENTIFIER, i);
		}
	}
	public LITERAL_VALUE(): TerminalNode | undefined { return this.tryGetToken(ThriftParser.LITERAL_VALUE, 0); }
	public type_annotations(): Type_annotationsContext | undefined {
		return this.tryGetRuleContext(0, Type_annotationsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ThriftParser.RULE_namespace_; }
	// @Override
	public enterRule(listener: ThriftListener): void {
		if (listener.enterNamespace_) {
			listener.enterNamespace_(this);
		}
	}
	// @Override
	public exitRule(listener: ThriftListener): void {
		if (listener.exitNamespace_) {
			listener.exitNamespace_(this);
		}
	}
}


export class Cpp_includeContext extends ParserRuleContext {
	public LITERAL_VALUE(): TerminalNode { return this.getToken(ThriftParser.LITERAL_VALUE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ThriftParser.RULE_cpp_include; }
	// @Override
	public enterRule(listener: ThriftListener): void {
		if (listener.enterCpp_include) {
			listener.enterCpp_include(this);
		}
	}
	// @Override
	public exitRule(listener: ThriftListener): void {
		if (listener.exitCpp_include) {
			listener.exitCpp_include(this);
		}
	}
}


export class DefinitionContext extends ParserRuleContext {
	public const_rule(): Const_ruleContext | undefined {
		return this.tryGetRuleContext(0, Const_ruleContext);
	}
	public typedef_(): Typedef_Context | undefined {
		return this.tryGetRuleContext(0, Typedef_Context);
	}
	public enum_rule(): Enum_ruleContext | undefined {
		return this.tryGetRuleContext(0, Enum_ruleContext);
	}
	public senum(): SenumContext | undefined {
		return this.tryGetRuleContext(0, SenumContext);
	}
	public struct_(): Struct_Context | undefined {
		return this.tryGetRuleContext(0, Struct_Context);
	}
	public union_(): Union_Context | undefined {
		return this.tryGetRuleContext(0, Union_Context);
	}
	public exception_(): Exception_Context | undefined {
		return this.tryGetRuleContext(0, Exception_Context);
	}
	public service(): ServiceContext | undefined {
		return this.tryGetRuleContext(0, ServiceContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ThriftParser.RULE_definition; }
	// @Override
	public enterRule(listener: ThriftListener): void {
		if (listener.enterDefinition) {
			listener.enterDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: ThriftListener): void {
		if (listener.exitDefinition) {
			listener.exitDefinition(this);
		}
	}
}


export class Const_ruleContext extends ParserRuleContext {
	public field_type(): Field_typeContext {
		return this.getRuleContext(0, Field_typeContext);
	}
	public IDENTIFIER(): TerminalNode { return this.getToken(ThriftParser.IDENTIFIER, 0); }
	public const_value(): Const_valueContext | undefined {
		return this.tryGetRuleContext(0, Const_valueContext);
	}
	public list_separator(): List_separatorContext | undefined {
		return this.tryGetRuleContext(0, List_separatorContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ThriftParser.RULE_const_rule; }
	// @Override
	public enterRule(listener: ThriftListener): void {
		if (listener.enterConst_rule) {
			listener.enterConst_rule(this);
		}
	}
	// @Override
	public exitRule(listener: ThriftListener): void {
		if (listener.exitConst_rule) {
			listener.exitConst_rule(this);
		}
	}
}


export class Typedef_Context extends ParserRuleContext {
	public field_type(): Field_typeContext {
		return this.getRuleContext(0, Field_typeContext);
	}
	public IDENTIFIER(): TerminalNode { return this.getToken(ThriftParser.IDENTIFIER, 0); }
	public type_annotations(): Type_annotationsContext | undefined {
		return this.tryGetRuleContext(0, Type_annotationsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ThriftParser.RULE_typedef_; }
	// @Override
	public enterRule(listener: ThriftListener): void {
		if (listener.enterTypedef_) {
			listener.enterTypedef_(this);
		}
	}
	// @Override
	public exitRule(listener: ThriftListener): void {
		if (listener.exitTypedef_) {
			listener.exitTypedef_(this);
		}
	}
}


export class Enum_ruleContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(ThriftParser.IDENTIFIER, 0); }
	public enum_field(): Enum_fieldContext[];
	public enum_field(i: number): Enum_fieldContext;
	public enum_field(i?: number): Enum_fieldContext | Enum_fieldContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Enum_fieldContext);
		} else {
			return this.getRuleContext(i, Enum_fieldContext);
		}
	}
	public type_annotations(): Type_annotationsContext | undefined {
		return this.tryGetRuleContext(0, Type_annotationsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ThriftParser.RULE_enum_rule; }
	// @Override
	public enterRule(listener: ThriftListener): void {
		if (listener.enterEnum_rule) {
			listener.enterEnum_rule(this);
		}
	}
	// @Override
	public exitRule(listener: ThriftListener): void {
		if (listener.exitEnum_rule) {
			listener.exitEnum_rule(this);
		}
	}
}


export class Enum_fieldContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(ThriftParser.IDENTIFIER, 0); }
	public integer(): IntegerContext | undefined {
		return this.tryGetRuleContext(0, IntegerContext);
	}
	public type_annotations(): Type_annotationsContext | undefined {
		return this.tryGetRuleContext(0, Type_annotationsContext);
	}
	public list_separator(): List_separatorContext | undefined {
		return this.tryGetRuleContext(0, List_separatorContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ThriftParser.RULE_enum_field; }
	// @Override
	public enterRule(listener: ThriftListener): void {
		if (listener.enterEnum_field) {
			listener.enterEnum_field(this);
		}
	}
	// @Override
	public exitRule(listener: ThriftListener): void {
		if (listener.exitEnum_field) {
			listener.exitEnum_field(this);
		}
	}
}


export class SenumContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(ThriftParser.IDENTIFIER, 0); }
	public LITERAL_VALUE(): TerminalNode[];
	public LITERAL_VALUE(i: number): TerminalNode;
	public LITERAL_VALUE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ThriftParser.LITERAL_VALUE);
		} else {
			return this.getToken(ThriftParser.LITERAL_VALUE, i);
		}
	}
	public type_annotations(): Type_annotationsContext | undefined {
		return this.tryGetRuleContext(0, Type_annotationsContext);
	}
	public list_separator(): List_separatorContext[];
	public list_separator(i: number): List_separatorContext;
	public list_separator(i?: number): List_separatorContext | List_separatorContext[] {
		if (i === undefined) {
			return this.getRuleContexts(List_separatorContext);
		} else {
			return this.getRuleContext(i, List_separatorContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ThriftParser.RULE_senum; }
	// @Override
	public enterRule(listener: ThriftListener): void {
		if (listener.enterSenum) {
			listener.enterSenum(this);
		}
	}
	// @Override
	public exitRule(listener: ThriftListener): void {
		if (listener.exitSenum) {
			listener.exitSenum(this);
		}
	}
}


export class Struct_Context extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(ThriftParser.IDENTIFIER, 0); }
	public field(): FieldContext[];
	public field(i: number): FieldContext;
	public field(i?: number): FieldContext | FieldContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FieldContext);
		} else {
			return this.getRuleContext(i, FieldContext);
		}
	}
	public type_annotations(): Type_annotationsContext | undefined {
		return this.tryGetRuleContext(0, Type_annotationsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ThriftParser.RULE_struct_; }
	// @Override
	public enterRule(listener: ThriftListener): void {
		if (listener.enterStruct_) {
			listener.enterStruct_(this);
		}
	}
	// @Override
	public exitRule(listener: ThriftListener): void {
		if (listener.exitStruct_) {
			listener.exitStruct_(this);
		}
	}
}


export class Union_Context extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(ThriftParser.IDENTIFIER, 0); }
	public field(): FieldContext[];
	public field(i: number): FieldContext;
	public field(i?: number): FieldContext | FieldContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FieldContext);
		} else {
			return this.getRuleContext(i, FieldContext);
		}
	}
	public type_annotations(): Type_annotationsContext | undefined {
		return this.tryGetRuleContext(0, Type_annotationsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ThriftParser.RULE_union_; }
	// @Override
	public enterRule(listener: ThriftListener): void {
		if (listener.enterUnion_) {
			listener.enterUnion_(this);
		}
	}
	// @Override
	public exitRule(listener: ThriftListener): void {
		if (listener.exitUnion_) {
			listener.exitUnion_(this);
		}
	}
}


export class Exception_Context extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(ThriftParser.IDENTIFIER, 0); }
	public field(): FieldContext[];
	public field(i: number): FieldContext;
	public field(i?: number): FieldContext | FieldContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FieldContext);
		} else {
			return this.getRuleContext(i, FieldContext);
		}
	}
	public type_annotations(): Type_annotationsContext | undefined {
		return this.tryGetRuleContext(0, Type_annotationsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ThriftParser.RULE_exception_; }
	// @Override
	public enterRule(listener: ThriftListener): void {
		if (listener.enterException_) {
			listener.enterException_(this);
		}
	}
	// @Override
	public exitRule(listener: ThriftListener): void {
		if (listener.exitException_) {
			listener.exitException_(this);
		}
	}
}


export class ServiceContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode[];
	public IDENTIFIER(i: number): TerminalNode;
	public IDENTIFIER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ThriftParser.IDENTIFIER);
		} else {
			return this.getToken(ThriftParser.IDENTIFIER, i);
		}
	}
	public function_(): Function_Context[];
	public function_(i: number): Function_Context;
	public function_(i?: number): Function_Context | Function_Context[] {
		if (i === undefined) {
			return this.getRuleContexts(Function_Context);
		} else {
			return this.getRuleContext(i, Function_Context);
		}
	}
	public type_annotations(): Type_annotationsContext | undefined {
		return this.tryGetRuleContext(0, Type_annotationsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ThriftParser.RULE_service; }
	// @Override
	public enterRule(listener: ThriftListener): void {
		if (listener.enterService) {
			listener.enterService(this);
		}
	}
	// @Override
	public exitRule(listener: ThriftListener): void {
		if (listener.exitService) {
			listener.exitService(this);
		}
	}
}


export class FieldContext extends ParserRuleContext {
	public field_type(): Field_typeContext {
		return this.getRuleContext(0, Field_typeContext);
	}
	public IDENTIFIER(): TerminalNode { return this.getToken(ThriftParser.IDENTIFIER, 0); }
	public field_id(): Field_idContext | undefined {
		return this.tryGetRuleContext(0, Field_idContext);
	}
	public field_req(): Field_reqContext | undefined {
		return this.tryGetRuleContext(0, Field_reqContext);
	}
	public const_value(): Const_valueContext | undefined {
		return this.tryGetRuleContext(0, Const_valueContext);
	}
	public type_annotations(): Type_annotationsContext | undefined {
		return this.tryGetRuleContext(0, Type_annotationsContext);
	}
	public list_separator(): List_separatorContext | undefined {
		return this.tryGetRuleContext(0, List_separatorContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ThriftParser.RULE_field; }
	// @Override
	public enterRule(listener: ThriftListener): void {
		if (listener.enterField) {
			listener.enterField(this);
		}
	}
	// @Override
	public exitRule(listener: ThriftListener): void {
		if (listener.exitField) {
			listener.exitField(this);
		}
	}
}


export class Field_idContext extends ParserRuleContext {
	public integer(): IntegerContext {
		return this.getRuleContext(0, IntegerContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ThriftParser.RULE_field_id; }
	// @Override
	public enterRule(listener: ThriftListener): void {
		if (listener.enterField_id) {
			listener.enterField_id(this);
		}
	}
	// @Override
	public exitRule(listener: ThriftListener): void {
		if (listener.exitField_id) {
			listener.exitField_id(this);
		}
	}
}


export class Field_reqContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ThriftParser.RULE_field_req; }
	// @Override
	public enterRule(listener: ThriftListener): void {
		if (listener.enterField_req) {
			listener.enterField_req(this);
		}
	}
	// @Override
	public exitRule(listener: ThriftListener): void {
		if (listener.exitField_req) {
			listener.exitField_req(this);
		}
	}
}


export class Function_Context extends ParserRuleContext {
	public function_type(): Function_typeContext {
		return this.getRuleContext(0, Function_typeContext);
	}
	public IDENTIFIER(): TerminalNode { return this.getToken(ThriftParser.IDENTIFIER, 0); }
	public oneway(): OnewayContext | undefined {
		return this.tryGetRuleContext(0, OnewayContext);
	}
	public field(): FieldContext[];
	public field(i: number): FieldContext;
	public field(i?: number): FieldContext | FieldContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FieldContext);
		} else {
			return this.getRuleContext(i, FieldContext);
		}
	}
	public throws_list(): Throws_listContext | undefined {
		return this.tryGetRuleContext(0, Throws_listContext);
	}
	public type_annotations(): Type_annotationsContext | undefined {
		return this.tryGetRuleContext(0, Type_annotationsContext);
	}
	public list_separator(): List_separatorContext | undefined {
		return this.tryGetRuleContext(0, List_separatorContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ThriftParser.RULE_function_; }
	// @Override
	public enterRule(listener: ThriftListener): void {
		if (listener.enterFunction_) {
			listener.enterFunction_(this);
		}
	}
	// @Override
	public exitRule(listener: ThriftListener): void {
		if (listener.exitFunction_) {
			listener.exitFunction_(this);
		}
	}
}


export class OnewayContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ThriftParser.RULE_oneway; }
	// @Override
	public enterRule(listener: ThriftListener): void {
		if (listener.enterOneway) {
			listener.enterOneway(this);
		}
	}
	// @Override
	public exitRule(listener: ThriftListener): void {
		if (listener.exitOneway) {
			listener.exitOneway(this);
		}
	}
}


export class Function_typeContext extends ParserRuleContext {
	public field_type(): Field_typeContext | undefined {
		return this.tryGetRuleContext(0, Field_typeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ThriftParser.RULE_function_type; }
	// @Override
	public enterRule(listener: ThriftListener): void {
		if (listener.enterFunction_type) {
			listener.enterFunction_type(this);
		}
	}
	// @Override
	public exitRule(listener: ThriftListener): void {
		if (listener.exitFunction_type) {
			listener.exitFunction_type(this);
		}
	}
}


export class Throws_listContext extends ParserRuleContext {
	public field(): FieldContext[];
	public field(i: number): FieldContext;
	public field(i?: number): FieldContext | FieldContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FieldContext);
		} else {
			return this.getRuleContext(i, FieldContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ThriftParser.RULE_throws_list; }
	// @Override
	public enterRule(listener: ThriftListener): void {
		if (listener.enterThrows_list) {
			listener.enterThrows_list(this);
		}
	}
	// @Override
	public exitRule(listener: ThriftListener): void {
		if (listener.exitThrows_list) {
			listener.exitThrows_list(this);
		}
	}
}


export class Type_annotationsContext extends ParserRuleContext {
	public type_annotation(): Type_annotationContext[];
	public type_annotation(i: number): Type_annotationContext;
	public type_annotation(i?: number): Type_annotationContext | Type_annotationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Type_annotationContext);
		} else {
			return this.getRuleContext(i, Type_annotationContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ThriftParser.RULE_type_annotations; }
	// @Override
	public enterRule(listener: ThriftListener): void {
		if (listener.enterType_annotations) {
			listener.enterType_annotations(this);
		}
	}
	// @Override
	public exitRule(listener: ThriftListener): void {
		if (listener.exitType_annotations) {
			listener.exitType_annotations(this);
		}
	}
}


export class Type_annotationContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(ThriftParser.IDENTIFIER, 0); }
	public annotation_value(): Annotation_valueContext | undefined {
		return this.tryGetRuleContext(0, Annotation_valueContext);
	}
	public list_separator(): List_separatorContext | undefined {
		return this.tryGetRuleContext(0, List_separatorContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ThriftParser.RULE_type_annotation; }
	// @Override
	public enterRule(listener: ThriftListener): void {
		if (listener.enterType_annotation) {
			listener.enterType_annotation(this);
		}
	}
	// @Override
	public exitRule(listener: ThriftListener): void {
		if (listener.exitType_annotation) {
			listener.exitType_annotation(this);
		}
	}
}


export class Annotation_valueContext extends ParserRuleContext {
	public integer(): IntegerContext | undefined {
		return this.tryGetRuleContext(0, IntegerContext);
	}
	public LITERAL_VALUE(): TerminalNode | undefined { return this.tryGetToken(ThriftParser.LITERAL_VALUE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ThriftParser.RULE_annotation_value; }
	// @Override
	public enterRule(listener: ThriftListener): void {
		if (listener.enterAnnotation_value) {
			listener.enterAnnotation_value(this);
		}
	}
	// @Override
	public exitRule(listener: ThriftListener): void {
		if (listener.exitAnnotation_value) {
			listener.exitAnnotation_value(this);
		}
	}
}


export class Field_typeContext extends ParserRuleContext {
	public base_type(): Base_typeContext | undefined {
		return this.tryGetRuleContext(0, Base_typeContext);
	}
	public IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(ThriftParser.IDENTIFIER, 0); }
	public container_type(): Container_typeContext | undefined {
		return this.tryGetRuleContext(0, Container_typeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ThriftParser.RULE_field_type; }
	// @Override
	public enterRule(listener: ThriftListener): void {
		if (listener.enterField_type) {
			listener.enterField_type(this);
		}
	}
	// @Override
	public exitRule(listener: ThriftListener): void {
		if (listener.exitField_type) {
			listener.exitField_type(this);
		}
	}
}


export class Base_typeContext extends ParserRuleContext {
	public real_base_type(): Real_base_typeContext {
		return this.getRuleContext(0, Real_base_typeContext);
	}
	public type_annotations(): Type_annotationsContext | undefined {
		return this.tryGetRuleContext(0, Type_annotationsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ThriftParser.RULE_base_type; }
	// @Override
	public enterRule(listener: ThriftListener): void {
		if (listener.enterBase_type) {
			listener.enterBase_type(this);
		}
	}
	// @Override
	public exitRule(listener: ThriftListener): void {
		if (listener.exitBase_type) {
			listener.exitBase_type(this);
		}
	}
}


export class Container_typeContext extends ParserRuleContext {
	public map_type(): Map_typeContext | undefined {
		return this.tryGetRuleContext(0, Map_typeContext);
	}
	public set_type(): Set_typeContext | undefined {
		return this.tryGetRuleContext(0, Set_typeContext);
	}
	public list_type(): List_typeContext | undefined {
		return this.tryGetRuleContext(0, List_typeContext);
	}
	public type_annotations(): Type_annotationsContext | undefined {
		return this.tryGetRuleContext(0, Type_annotationsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ThriftParser.RULE_container_type; }
	// @Override
	public enterRule(listener: ThriftListener): void {
		if (listener.enterContainer_type) {
			listener.enterContainer_type(this);
		}
	}
	// @Override
	public exitRule(listener: ThriftListener): void {
		if (listener.exitContainer_type) {
			listener.exitContainer_type(this);
		}
	}
}


export class Map_typeContext extends ParserRuleContext {
	public field_type(): Field_typeContext[];
	public field_type(i: number): Field_typeContext;
	public field_type(i?: number): Field_typeContext | Field_typeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Field_typeContext);
		} else {
			return this.getRuleContext(i, Field_typeContext);
		}
	}
	public COMMA(): TerminalNode { return this.getToken(ThriftParser.COMMA, 0); }
	public cpp_type(): Cpp_typeContext | undefined {
		return this.tryGetRuleContext(0, Cpp_typeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ThriftParser.RULE_map_type; }
	// @Override
	public enterRule(listener: ThriftListener): void {
		if (listener.enterMap_type) {
			listener.enterMap_type(this);
		}
	}
	// @Override
	public exitRule(listener: ThriftListener): void {
		if (listener.exitMap_type) {
			listener.exitMap_type(this);
		}
	}
}


export class Set_typeContext extends ParserRuleContext {
	public field_type(): Field_typeContext {
		return this.getRuleContext(0, Field_typeContext);
	}
	public cpp_type(): Cpp_typeContext | undefined {
		return this.tryGetRuleContext(0, Cpp_typeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ThriftParser.RULE_set_type; }
	// @Override
	public enterRule(listener: ThriftListener): void {
		if (listener.enterSet_type) {
			listener.enterSet_type(this);
		}
	}
	// @Override
	public exitRule(listener: ThriftListener): void {
		if (listener.exitSet_type) {
			listener.exitSet_type(this);
		}
	}
}


export class List_typeContext extends ParserRuleContext {
	public field_type(): Field_typeContext {
		return this.getRuleContext(0, Field_typeContext);
	}
	public cpp_type(): Cpp_typeContext | undefined {
		return this.tryGetRuleContext(0, Cpp_typeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ThriftParser.RULE_list_type; }
	// @Override
	public enterRule(listener: ThriftListener): void {
		if (listener.enterList_type) {
			listener.enterList_type(this);
		}
	}
	// @Override
	public exitRule(listener: ThriftListener): void {
		if (listener.exitList_type) {
			listener.exitList_type(this);
		}
	}
}


export class Cpp_typeContext extends ParserRuleContext {
	public LITERAL_VALUE(): TerminalNode { return this.getToken(ThriftParser.LITERAL_VALUE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ThriftParser.RULE_cpp_type; }
	// @Override
	public enterRule(listener: ThriftListener): void {
		if (listener.enterCpp_type) {
			listener.enterCpp_type(this);
		}
	}
	// @Override
	public exitRule(listener: ThriftListener): void {
		if (listener.exitCpp_type) {
			listener.exitCpp_type(this);
		}
	}
}


export class Const_valueContext extends ParserRuleContext {
	public integer(): IntegerContext | undefined {
		return this.tryGetRuleContext(0, IntegerContext);
	}
	public DOUBLE(): TerminalNode | undefined { return this.tryGetToken(ThriftParser.DOUBLE, 0); }
	public LITERAL_VALUE(): TerminalNode | undefined { return this.tryGetToken(ThriftParser.LITERAL_VALUE, 0); }
	public IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(ThriftParser.IDENTIFIER, 0); }
	public const_list(): Const_listContext | undefined {
		return this.tryGetRuleContext(0, Const_listContext);
	}
	public const_map(): Const_mapContext | undefined {
		return this.tryGetRuleContext(0, Const_mapContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ThriftParser.RULE_const_value; }
	// @Override
	public enterRule(listener: ThriftListener): void {
		if (listener.enterConst_value) {
			listener.enterConst_value(this);
		}
	}
	// @Override
	public exitRule(listener: ThriftListener): void {
		if (listener.exitConst_value) {
			listener.exitConst_value(this);
		}
	}
}


export class IntegerContext extends ParserRuleContext {
	public INTEGER(): TerminalNode | undefined { return this.tryGetToken(ThriftParser.INTEGER, 0); }
	public HEX_INTEGER(): TerminalNode | undefined { return this.tryGetToken(ThriftParser.HEX_INTEGER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ThriftParser.RULE_integer; }
	// @Override
	public enterRule(listener: ThriftListener): void {
		if (listener.enterInteger) {
			listener.enterInteger(this);
		}
	}
	// @Override
	public exitRule(listener: ThriftListener): void {
		if (listener.exitInteger) {
			listener.exitInteger(this);
		}
	}
}


export class Const_listContext extends ParserRuleContext {
	public const_value(): Const_valueContext[];
	public const_value(i: number): Const_valueContext;
	public const_value(i?: number): Const_valueContext | Const_valueContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Const_valueContext);
		} else {
			return this.getRuleContext(i, Const_valueContext);
		}
	}
	public list_separator(): List_separatorContext[];
	public list_separator(i: number): List_separatorContext;
	public list_separator(i?: number): List_separatorContext | List_separatorContext[] {
		if (i === undefined) {
			return this.getRuleContexts(List_separatorContext);
		} else {
			return this.getRuleContext(i, List_separatorContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ThriftParser.RULE_const_list; }
	// @Override
	public enterRule(listener: ThriftListener): void {
		if (listener.enterConst_list) {
			listener.enterConst_list(this);
		}
	}
	// @Override
	public exitRule(listener: ThriftListener): void {
		if (listener.exitConst_list) {
			listener.exitConst_list(this);
		}
	}
}


export class Const_map_entryContext extends ParserRuleContext {
	public const_value(): Const_valueContext[];
	public const_value(i: number): Const_valueContext;
	public const_value(i?: number): Const_valueContext | Const_valueContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Const_valueContext);
		} else {
			return this.getRuleContext(i, Const_valueContext);
		}
	}
	public list_separator(): List_separatorContext | undefined {
		return this.tryGetRuleContext(0, List_separatorContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ThriftParser.RULE_const_map_entry; }
	// @Override
	public enterRule(listener: ThriftListener): void {
		if (listener.enterConst_map_entry) {
			listener.enterConst_map_entry(this);
		}
	}
	// @Override
	public exitRule(listener: ThriftListener): void {
		if (listener.exitConst_map_entry) {
			listener.exitConst_map_entry(this);
		}
	}
}


export class Const_mapContext extends ParserRuleContext {
	public const_map_entry(): Const_map_entryContext[];
	public const_map_entry(i: number): Const_map_entryContext;
	public const_map_entry(i?: number): Const_map_entryContext | Const_map_entryContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Const_map_entryContext);
		} else {
			return this.getRuleContext(i, Const_map_entryContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ThriftParser.RULE_const_map; }
	// @Override
	public enterRule(listener: ThriftListener): void {
		if (listener.enterConst_map) {
			listener.enterConst_map(this);
		}
	}
	// @Override
	public exitRule(listener: ThriftListener): void {
		if (listener.exitConst_map) {
			listener.exitConst_map(this);
		}
	}
}


export class List_separatorContext extends ParserRuleContext {
	public COMMA(): TerminalNode { return this.getToken(ThriftParser.COMMA, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ThriftParser.RULE_list_separator; }
	// @Override
	public enterRule(listener: ThriftListener): void {
		if (listener.enterList_separator) {
			listener.enterList_separator(this);
		}
	}
	// @Override
	public exitRule(listener: ThriftListener): void {
		if (listener.exitList_separator) {
			listener.exitList_separator(this);
		}
	}
}


export class Real_base_typeContext extends ParserRuleContext {
	public TYPE_BOOL(): TerminalNode | undefined { return this.tryGetToken(ThriftParser.TYPE_BOOL, 0); }
	public TYPE_BYTE(): TerminalNode | undefined { return this.tryGetToken(ThriftParser.TYPE_BYTE, 0); }
	public TYPE_I16(): TerminalNode | undefined { return this.tryGetToken(ThriftParser.TYPE_I16, 0); }
	public TYPE_I32(): TerminalNode | undefined { return this.tryGetToken(ThriftParser.TYPE_I32, 0); }
	public TYPE_I64(): TerminalNode | undefined { return this.tryGetToken(ThriftParser.TYPE_I64, 0); }
	public TYPE_DOUBLE(): TerminalNode | undefined { return this.tryGetToken(ThriftParser.TYPE_DOUBLE, 0); }
	public TYPE_STRING(): TerminalNode | undefined { return this.tryGetToken(ThriftParser.TYPE_STRING, 0); }
	public TYPE_BINARY(): TerminalNode | undefined { return this.tryGetToken(ThriftParser.TYPE_BINARY, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ThriftParser.RULE_real_base_type; }
	// @Override
	public enterRule(listener: ThriftListener): void {
		if (listener.enterReal_base_type) {
			listener.enterReal_base_type(this);
		}
	}
	// @Override
	public exitRule(listener: ThriftListener): void {
		if (listener.exitReal_base_type) {
			listener.exitReal_base_type(this);
		}
	}
}



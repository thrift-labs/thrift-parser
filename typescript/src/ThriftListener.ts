// Generated from Thrift.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { DocumentContext } from "./ThriftParser";
import { HeaderContext } from "./ThriftParser";
import { Include_Context } from "./ThriftParser";
import { Namespace_Context } from "./ThriftParser";
import { Cpp_includeContext } from "./ThriftParser";
import { DefinitionContext } from "./ThriftParser";
import { Const_ruleContext } from "./ThriftParser";
import { Typedef_Context } from "./ThriftParser";
import { Enum_ruleContext } from "./ThriftParser";
import { Enum_fieldContext } from "./ThriftParser";
import { SenumContext } from "./ThriftParser";
import { Struct_Context } from "./ThriftParser";
import { Union_Context } from "./ThriftParser";
import { Exception_Context } from "./ThriftParser";
import { ServiceContext } from "./ThriftParser";
import { FieldContext } from "./ThriftParser";
import { Field_idContext } from "./ThriftParser";
import { Field_reqContext } from "./ThriftParser";
import { Function_Context } from "./ThriftParser";
import { OnewayContext } from "./ThriftParser";
import { Function_typeContext } from "./ThriftParser";
import { Throws_listContext } from "./ThriftParser";
import { Type_annotationsContext } from "./ThriftParser";
import { Type_annotationContext } from "./ThriftParser";
import { Annotation_valueContext } from "./ThriftParser";
import { Field_typeContext } from "./ThriftParser";
import { Base_typeContext } from "./ThriftParser";
import { Container_typeContext } from "./ThriftParser";
import { Map_typeContext } from "./ThriftParser";
import { Set_typeContext } from "./ThriftParser";
import { List_typeContext } from "./ThriftParser";
import { Cpp_typeContext } from "./ThriftParser";
import { Const_valueContext } from "./ThriftParser";
import { IntegerContext } from "./ThriftParser";
import { Const_listContext } from "./ThriftParser";
import { Const_map_entryContext } from "./ThriftParser";
import { Const_mapContext } from "./ThriftParser";
import { List_separatorContext } from "./ThriftParser";
import { Real_base_typeContext } from "./ThriftParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `ThriftParser`.
 */
export interface ThriftListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `ThriftParser.document`.
	 * @param ctx the parse tree
	 */
	enterDocument?: (ctx: DocumentContext) => void;
	/**
	 * Exit a parse tree produced by `ThriftParser.document`.
	 * @param ctx the parse tree
	 */
	exitDocument?: (ctx: DocumentContext) => void;

	/**
	 * Enter a parse tree produced by `ThriftParser.header`.
	 * @param ctx the parse tree
	 */
	enterHeader?: (ctx: HeaderContext) => void;
	/**
	 * Exit a parse tree produced by `ThriftParser.header`.
	 * @param ctx the parse tree
	 */
	exitHeader?: (ctx: HeaderContext) => void;

	/**
	 * Enter a parse tree produced by `ThriftParser.include_`.
	 * @param ctx the parse tree
	 */
	enterInclude_?: (ctx: Include_Context) => void;
	/**
	 * Exit a parse tree produced by `ThriftParser.include_`.
	 * @param ctx the parse tree
	 */
	exitInclude_?: (ctx: Include_Context) => void;

	/**
	 * Enter a parse tree produced by `ThriftParser.namespace_`.
	 * @param ctx the parse tree
	 */
	enterNamespace_?: (ctx: Namespace_Context) => void;
	/**
	 * Exit a parse tree produced by `ThriftParser.namespace_`.
	 * @param ctx the parse tree
	 */
	exitNamespace_?: (ctx: Namespace_Context) => void;

	/**
	 * Enter a parse tree produced by `ThriftParser.cpp_include`.
	 * @param ctx the parse tree
	 */
	enterCpp_include?: (ctx: Cpp_includeContext) => void;
	/**
	 * Exit a parse tree produced by `ThriftParser.cpp_include`.
	 * @param ctx the parse tree
	 */
	exitCpp_include?: (ctx: Cpp_includeContext) => void;

	/**
	 * Enter a parse tree produced by `ThriftParser.definition`.
	 * @param ctx the parse tree
	 */
	enterDefinition?: (ctx: DefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `ThriftParser.definition`.
	 * @param ctx the parse tree
	 */
	exitDefinition?: (ctx: DefinitionContext) => void;

	/**
	 * Enter a parse tree produced by `ThriftParser.const_rule`.
	 * @param ctx the parse tree
	 */
	enterConst_rule?: (ctx: Const_ruleContext) => void;
	/**
	 * Exit a parse tree produced by `ThriftParser.const_rule`.
	 * @param ctx the parse tree
	 */
	exitConst_rule?: (ctx: Const_ruleContext) => void;

	/**
	 * Enter a parse tree produced by `ThriftParser.typedef_`.
	 * @param ctx the parse tree
	 */
	enterTypedef_?: (ctx: Typedef_Context) => void;
	/**
	 * Exit a parse tree produced by `ThriftParser.typedef_`.
	 * @param ctx the parse tree
	 */
	exitTypedef_?: (ctx: Typedef_Context) => void;

	/**
	 * Enter a parse tree produced by `ThriftParser.enum_rule`.
	 * @param ctx the parse tree
	 */
	enterEnum_rule?: (ctx: Enum_ruleContext) => void;
	/**
	 * Exit a parse tree produced by `ThriftParser.enum_rule`.
	 * @param ctx the parse tree
	 */
	exitEnum_rule?: (ctx: Enum_ruleContext) => void;

	/**
	 * Enter a parse tree produced by `ThriftParser.enum_field`.
	 * @param ctx the parse tree
	 */
	enterEnum_field?: (ctx: Enum_fieldContext) => void;
	/**
	 * Exit a parse tree produced by `ThriftParser.enum_field`.
	 * @param ctx the parse tree
	 */
	exitEnum_field?: (ctx: Enum_fieldContext) => void;

	/**
	 * Enter a parse tree produced by `ThriftParser.senum`.
	 * @param ctx the parse tree
	 */
	enterSenum?: (ctx: SenumContext) => void;
	/**
	 * Exit a parse tree produced by `ThriftParser.senum`.
	 * @param ctx the parse tree
	 */
	exitSenum?: (ctx: SenumContext) => void;

	/**
	 * Enter a parse tree produced by `ThriftParser.struct_`.
	 * @param ctx the parse tree
	 */
	enterStruct_?: (ctx: Struct_Context) => void;
	/**
	 * Exit a parse tree produced by `ThriftParser.struct_`.
	 * @param ctx the parse tree
	 */
	exitStruct_?: (ctx: Struct_Context) => void;

	/**
	 * Enter a parse tree produced by `ThriftParser.union_`.
	 * @param ctx the parse tree
	 */
	enterUnion_?: (ctx: Union_Context) => void;
	/**
	 * Exit a parse tree produced by `ThriftParser.union_`.
	 * @param ctx the parse tree
	 */
	exitUnion_?: (ctx: Union_Context) => void;

	/**
	 * Enter a parse tree produced by `ThriftParser.exception_`.
	 * @param ctx the parse tree
	 */
	enterException_?: (ctx: Exception_Context) => void;
	/**
	 * Exit a parse tree produced by `ThriftParser.exception_`.
	 * @param ctx the parse tree
	 */
	exitException_?: (ctx: Exception_Context) => void;

	/**
	 * Enter a parse tree produced by `ThriftParser.service`.
	 * @param ctx the parse tree
	 */
	enterService?: (ctx: ServiceContext) => void;
	/**
	 * Exit a parse tree produced by `ThriftParser.service`.
	 * @param ctx the parse tree
	 */
	exitService?: (ctx: ServiceContext) => void;

	/**
	 * Enter a parse tree produced by `ThriftParser.field`.
	 * @param ctx the parse tree
	 */
	enterField?: (ctx: FieldContext) => void;
	/**
	 * Exit a parse tree produced by `ThriftParser.field`.
	 * @param ctx the parse tree
	 */
	exitField?: (ctx: FieldContext) => void;

	/**
	 * Enter a parse tree produced by `ThriftParser.field_id`.
	 * @param ctx the parse tree
	 */
	enterField_id?: (ctx: Field_idContext) => void;
	/**
	 * Exit a parse tree produced by `ThriftParser.field_id`.
	 * @param ctx the parse tree
	 */
	exitField_id?: (ctx: Field_idContext) => void;

	/**
	 * Enter a parse tree produced by `ThriftParser.field_req`.
	 * @param ctx the parse tree
	 */
	enterField_req?: (ctx: Field_reqContext) => void;
	/**
	 * Exit a parse tree produced by `ThriftParser.field_req`.
	 * @param ctx the parse tree
	 */
	exitField_req?: (ctx: Field_reqContext) => void;

	/**
	 * Enter a parse tree produced by `ThriftParser.function_`.
	 * @param ctx the parse tree
	 */
	enterFunction_?: (ctx: Function_Context) => void;
	/**
	 * Exit a parse tree produced by `ThriftParser.function_`.
	 * @param ctx the parse tree
	 */
	exitFunction_?: (ctx: Function_Context) => void;

	/**
	 * Enter a parse tree produced by `ThriftParser.oneway`.
	 * @param ctx the parse tree
	 */
	enterOneway?: (ctx: OnewayContext) => void;
	/**
	 * Exit a parse tree produced by `ThriftParser.oneway`.
	 * @param ctx the parse tree
	 */
	exitOneway?: (ctx: OnewayContext) => void;

	/**
	 * Enter a parse tree produced by `ThriftParser.function_type`.
	 * @param ctx the parse tree
	 */
	enterFunction_type?: (ctx: Function_typeContext) => void;
	/**
	 * Exit a parse tree produced by `ThriftParser.function_type`.
	 * @param ctx the parse tree
	 */
	exitFunction_type?: (ctx: Function_typeContext) => void;

	/**
	 * Enter a parse tree produced by `ThriftParser.throws_list`.
	 * @param ctx the parse tree
	 */
	enterThrows_list?: (ctx: Throws_listContext) => void;
	/**
	 * Exit a parse tree produced by `ThriftParser.throws_list`.
	 * @param ctx the parse tree
	 */
	exitThrows_list?: (ctx: Throws_listContext) => void;

	/**
	 * Enter a parse tree produced by `ThriftParser.type_annotations`.
	 * @param ctx the parse tree
	 */
	enterType_annotations?: (ctx: Type_annotationsContext) => void;
	/**
	 * Exit a parse tree produced by `ThriftParser.type_annotations`.
	 * @param ctx the parse tree
	 */
	exitType_annotations?: (ctx: Type_annotationsContext) => void;

	/**
	 * Enter a parse tree produced by `ThriftParser.type_annotation`.
	 * @param ctx the parse tree
	 */
	enterType_annotation?: (ctx: Type_annotationContext) => void;
	/**
	 * Exit a parse tree produced by `ThriftParser.type_annotation`.
	 * @param ctx the parse tree
	 */
	exitType_annotation?: (ctx: Type_annotationContext) => void;

	/**
	 * Enter a parse tree produced by `ThriftParser.annotation_value`.
	 * @param ctx the parse tree
	 */
	enterAnnotation_value?: (ctx: Annotation_valueContext) => void;
	/**
	 * Exit a parse tree produced by `ThriftParser.annotation_value`.
	 * @param ctx the parse tree
	 */
	exitAnnotation_value?: (ctx: Annotation_valueContext) => void;

	/**
	 * Enter a parse tree produced by `ThriftParser.field_type`.
	 * @param ctx the parse tree
	 */
	enterField_type?: (ctx: Field_typeContext) => void;
	/**
	 * Exit a parse tree produced by `ThriftParser.field_type`.
	 * @param ctx the parse tree
	 */
	exitField_type?: (ctx: Field_typeContext) => void;

	/**
	 * Enter a parse tree produced by `ThriftParser.base_type`.
	 * @param ctx the parse tree
	 */
	enterBase_type?: (ctx: Base_typeContext) => void;
	/**
	 * Exit a parse tree produced by `ThriftParser.base_type`.
	 * @param ctx the parse tree
	 */
	exitBase_type?: (ctx: Base_typeContext) => void;

	/**
	 * Enter a parse tree produced by `ThriftParser.container_type`.
	 * @param ctx the parse tree
	 */
	enterContainer_type?: (ctx: Container_typeContext) => void;
	/**
	 * Exit a parse tree produced by `ThriftParser.container_type`.
	 * @param ctx the parse tree
	 */
	exitContainer_type?: (ctx: Container_typeContext) => void;

	/**
	 * Enter a parse tree produced by `ThriftParser.map_type`.
	 * @param ctx the parse tree
	 */
	enterMap_type?: (ctx: Map_typeContext) => void;
	/**
	 * Exit a parse tree produced by `ThriftParser.map_type`.
	 * @param ctx the parse tree
	 */
	exitMap_type?: (ctx: Map_typeContext) => void;

	/**
	 * Enter a parse tree produced by `ThriftParser.set_type`.
	 * @param ctx the parse tree
	 */
	enterSet_type?: (ctx: Set_typeContext) => void;
	/**
	 * Exit a parse tree produced by `ThriftParser.set_type`.
	 * @param ctx the parse tree
	 */
	exitSet_type?: (ctx: Set_typeContext) => void;

	/**
	 * Enter a parse tree produced by `ThriftParser.list_type`.
	 * @param ctx the parse tree
	 */
	enterList_type?: (ctx: List_typeContext) => void;
	/**
	 * Exit a parse tree produced by `ThriftParser.list_type`.
	 * @param ctx the parse tree
	 */
	exitList_type?: (ctx: List_typeContext) => void;

	/**
	 * Enter a parse tree produced by `ThriftParser.cpp_type`.
	 * @param ctx the parse tree
	 */
	enterCpp_type?: (ctx: Cpp_typeContext) => void;
	/**
	 * Exit a parse tree produced by `ThriftParser.cpp_type`.
	 * @param ctx the parse tree
	 */
	exitCpp_type?: (ctx: Cpp_typeContext) => void;

	/**
	 * Enter a parse tree produced by `ThriftParser.const_value`.
	 * @param ctx the parse tree
	 */
	enterConst_value?: (ctx: Const_valueContext) => void;
	/**
	 * Exit a parse tree produced by `ThriftParser.const_value`.
	 * @param ctx the parse tree
	 */
	exitConst_value?: (ctx: Const_valueContext) => void;

	/**
	 * Enter a parse tree produced by `ThriftParser.integer`.
	 * @param ctx the parse tree
	 */
	enterInteger?: (ctx: IntegerContext) => void;
	/**
	 * Exit a parse tree produced by `ThriftParser.integer`.
	 * @param ctx the parse tree
	 */
	exitInteger?: (ctx: IntegerContext) => void;

	/**
	 * Enter a parse tree produced by `ThriftParser.const_list`.
	 * @param ctx the parse tree
	 */
	enterConst_list?: (ctx: Const_listContext) => void;
	/**
	 * Exit a parse tree produced by `ThriftParser.const_list`.
	 * @param ctx the parse tree
	 */
	exitConst_list?: (ctx: Const_listContext) => void;

	/**
	 * Enter a parse tree produced by `ThriftParser.const_map_entry`.
	 * @param ctx the parse tree
	 */
	enterConst_map_entry?: (ctx: Const_map_entryContext) => void;
	/**
	 * Exit a parse tree produced by `ThriftParser.const_map_entry`.
	 * @param ctx the parse tree
	 */
	exitConst_map_entry?: (ctx: Const_map_entryContext) => void;

	/**
	 * Enter a parse tree produced by `ThriftParser.const_map`.
	 * @param ctx the parse tree
	 */
	enterConst_map?: (ctx: Const_mapContext) => void;
	/**
	 * Exit a parse tree produced by `ThriftParser.const_map`.
	 * @param ctx the parse tree
	 */
	exitConst_map?: (ctx: Const_mapContext) => void;

	/**
	 * Enter a parse tree produced by `ThriftParser.list_separator`.
	 * @param ctx the parse tree
	 */
	enterList_separator?: (ctx: List_separatorContext) => void;
	/**
	 * Exit a parse tree produced by `ThriftParser.list_separator`.
	 * @param ctx the parse tree
	 */
	exitList_separator?: (ctx: List_separatorContext) => void;

	/**
	 * Enter a parse tree produced by `ThriftParser.real_base_type`.
	 * @param ctx the parse tree
	 */
	enterReal_base_type?: (ctx: Real_base_typeContext) => void;
	/**
	 * Exit a parse tree produced by `ThriftParser.real_base_type`.
	 * @param ctx the parse tree
	 */
	exitReal_base_type?: (ctx: Real_base_typeContext) => void;
}


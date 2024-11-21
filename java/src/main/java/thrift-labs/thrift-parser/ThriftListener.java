// Generated from Thrift.g4 by ANTLR 4.13.2
import org.antlr.v4.runtime.tree.ParseTreeListener;

/**
 * This interface defines a complete listener for a parse tree produced by
 * {@link ThriftParser}.
 */
public interface ThriftListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by {@link ThriftParser#document}.
	 * @param ctx the parse tree
	 */
	void enterDocument(ThriftParser.DocumentContext ctx);
	/**
	 * Exit a parse tree produced by {@link ThriftParser#document}.
	 * @param ctx the parse tree
	 */
	void exitDocument(ThriftParser.DocumentContext ctx);
	/**
	 * Enter a parse tree produced by {@link ThriftParser#header}.
	 * @param ctx the parse tree
	 */
	void enterHeader(ThriftParser.HeaderContext ctx);
	/**
	 * Exit a parse tree produced by {@link ThriftParser#header}.
	 * @param ctx the parse tree
	 */
	void exitHeader(ThriftParser.HeaderContext ctx);
	/**
	 * Enter a parse tree produced by {@link ThriftParser#include_}.
	 * @param ctx the parse tree
	 */
	void enterInclude_(ThriftParser.Include_Context ctx);
	/**
	 * Exit a parse tree produced by {@link ThriftParser#include_}.
	 * @param ctx the parse tree
	 */
	void exitInclude_(ThriftParser.Include_Context ctx);
	/**
	 * Enter a parse tree produced by {@link ThriftParser#namespace_}.
	 * @param ctx the parse tree
	 */
	void enterNamespace_(ThriftParser.Namespace_Context ctx);
	/**
	 * Exit a parse tree produced by {@link ThriftParser#namespace_}.
	 * @param ctx the parse tree
	 */
	void exitNamespace_(ThriftParser.Namespace_Context ctx);
	/**
	 * Enter a parse tree produced by {@link ThriftParser#cpp_include}.
	 * @param ctx the parse tree
	 */
	void enterCpp_include(ThriftParser.Cpp_includeContext ctx);
	/**
	 * Exit a parse tree produced by {@link ThriftParser#cpp_include}.
	 * @param ctx the parse tree
	 */
	void exitCpp_include(ThriftParser.Cpp_includeContext ctx);
	/**
	 * Enter a parse tree produced by {@link ThriftParser#definition}.
	 * @param ctx the parse tree
	 */
	void enterDefinition(ThriftParser.DefinitionContext ctx);
	/**
	 * Exit a parse tree produced by {@link ThriftParser#definition}.
	 * @param ctx the parse tree
	 */
	void exitDefinition(ThriftParser.DefinitionContext ctx);
	/**
	 * Enter a parse tree produced by {@link ThriftParser#const_rule}.
	 * @param ctx the parse tree
	 */
	void enterConst_rule(ThriftParser.Const_ruleContext ctx);
	/**
	 * Exit a parse tree produced by {@link ThriftParser#const_rule}.
	 * @param ctx the parse tree
	 */
	void exitConst_rule(ThriftParser.Const_ruleContext ctx);
	/**
	 * Enter a parse tree produced by {@link ThriftParser#typedef_}.
	 * @param ctx the parse tree
	 */
	void enterTypedef_(ThriftParser.Typedef_Context ctx);
	/**
	 * Exit a parse tree produced by {@link ThriftParser#typedef_}.
	 * @param ctx the parse tree
	 */
	void exitTypedef_(ThriftParser.Typedef_Context ctx);
	/**
	 * Enter a parse tree produced by {@link ThriftParser#enum_rule}.
	 * @param ctx the parse tree
	 */
	void enterEnum_rule(ThriftParser.Enum_ruleContext ctx);
	/**
	 * Exit a parse tree produced by {@link ThriftParser#enum_rule}.
	 * @param ctx the parse tree
	 */
	void exitEnum_rule(ThriftParser.Enum_ruleContext ctx);
	/**
	 * Enter a parse tree produced by {@link ThriftParser#enum_field}.
	 * @param ctx the parse tree
	 */
	void enterEnum_field(ThriftParser.Enum_fieldContext ctx);
	/**
	 * Exit a parse tree produced by {@link ThriftParser#enum_field}.
	 * @param ctx the parse tree
	 */
	void exitEnum_field(ThriftParser.Enum_fieldContext ctx);
	/**
	 * Enter a parse tree produced by {@link ThriftParser#senum}.
	 * @param ctx the parse tree
	 */
	void enterSenum(ThriftParser.SenumContext ctx);
	/**
	 * Exit a parse tree produced by {@link ThriftParser#senum}.
	 * @param ctx the parse tree
	 */
	void exitSenum(ThriftParser.SenumContext ctx);
	/**
	 * Enter a parse tree produced by {@link ThriftParser#struct_}.
	 * @param ctx the parse tree
	 */
	void enterStruct_(ThriftParser.Struct_Context ctx);
	/**
	 * Exit a parse tree produced by {@link ThriftParser#struct_}.
	 * @param ctx the parse tree
	 */
	void exitStruct_(ThriftParser.Struct_Context ctx);
	/**
	 * Enter a parse tree produced by {@link ThriftParser#union_}.
	 * @param ctx the parse tree
	 */
	void enterUnion_(ThriftParser.Union_Context ctx);
	/**
	 * Exit a parse tree produced by {@link ThriftParser#union_}.
	 * @param ctx the parse tree
	 */
	void exitUnion_(ThriftParser.Union_Context ctx);
	/**
	 * Enter a parse tree produced by {@link ThriftParser#exception_}.
	 * @param ctx the parse tree
	 */
	void enterException_(ThriftParser.Exception_Context ctx);
	/**
	 * Exit a parse tree produced by {@link ThriftParser#exception_}.
	 * @param ctx the parse tree
	 */
	void exitException_(ThriftParser.Exception_Context ctx);
	/**
	 * Enter a parse tree produced by {@link ThriftParser#service}.
	 * @param ctx the parse tree
	 */
	void enterService(ThriftParser.ServiceContext ctx);
	/**
	 * Exit a parse tree produced by {@link ThriftParser#service}.
	 * @param ctx the parse tree
	 */
	void exitService(ThriftParser.ServiceContext ctx);
	/**
	 * Enter a parse tree produced by {@link ThriftParser#field}.
	 * @param ctx the parse tree
	 */
	void enterField(ThriftParser.FieldContext ctx);
	/**
	 * Exit a parse tree produced by {@link ThriftParser#field}.
	 * @param ctx the parse tree
	 */
	void exitField(ThriftParser.FieldContext ctx);
	/**
	 * Enter a parse tree produced by {@link ThriftParser#field_id}.
	 * @param ctx the parse tree
	 */
	void enterField_id(ThriftParser.Field_idContext ctx);
	/**
	 * Exit a parse tree produced by {@link ThriftParser#field_id}.
	 * @param ctx the parse tree
	 */
	void exitField_id(ThriftParser.Field_idContext ctx);
	/**
	 * Enter a parse tree produced by {@link ThriftParser#field_req}.
	 * @param ctx the parse tree
	 */
	void enterField_req(ThriftParser.Field_reqContext ctx);
	/**
	 * Exit a parse tree produced by {@link ThriftParser#field_req}.
	 * @param ctx the parse tree
	 */
	void exitField_req(ThriftParser.Field_reqContext ctx);
	/**
	 * Enter a parse tree produced by {@link ThriftParser#function_}.
	 * @param ctx the parse tree
	 */
	void enterFunction_(ThriftParser.Function_Context ctx);
	/**
	 * Exit a parse tree produced by {@link ThriftParser#function_}.
	 * @param ctx the parse tree
	 */
	void exitFunction_(ThriftParser.Function_Context ctx);
	/**
	 * Enter a parse tree produced by {@link ThriftParser#oneway}.
	 * @param ctx the parse tree
	 */
	void enterOneway(ThriftParser.OnewayContext ctx);
	/**
	 * Exit a parse tree produced by {@link ThriftParser#oneway}.
	 * @param ctx the parse tree
	 */
	void exitOneway(ThriftParser.OnewayContext ctx);
	/**
	 * Enter a parse tree produced by {@link ThriftParser#function_type}.
	 * @param ctx the parse tree
	 */
	void enterFunction_type(ThriftParser.Function_typeContext ctx);
	/**
	 * Exit a parse tree produced by {@link ThriftParser#function_type}.
	 * @param ctx the parse tree
	 */
	void exitFunction_type(ThriftParser.Function_typeContext ctx);
	/**
	 * Enter a parse tree produced by {@link ThriftParser#throws_list}.
	 * @param ctx the parse tree
	 */
	void enterThrows_list(ThriftParser.Throws_listContext ctx);
	/**
	 * Exit a parse tree produced by {@link ThriftParser#throws_list}.
	 * @param ctx the parse tree
	 */
	void exitThrows_list(ThriftParser.Throws_listContext ctx);
	/**
	 * Enter a parse tree produced by {@link ThriftParser#type_annotations}.
	 * @param ctx the parse tree
	 */
	void enterType_annotations(ThriftParser.Type_annotationsContext ctx);
	/**
	 * Exit a parse tree produced by {@link ThriftParser#type_annotations}.
	 * @param ctx the parse tree
	 */
	void exitType_annotations(ThriftParser.Type_annotationsContext ctx);
	/**
	 * Enter a parse tree produced by {@link ThriftParser#type_annotation}.
	 * @param ctx the parse tree
	 */
	void enterType_annotation(ThriftParser.Type_annotationContext ctx);
	/**
	 * Exit a parse tree produced by {@link ThriftParser#type_annotation}.
	 * @param ctx the parse tree
	 */
	void exitType_annotation(ThriftParser.Type_annotationContext ctx);
	/**
	 * Enter a parse tree produced by {@link ThriftParser#annotation_value}.
	 * @param ctx the parse tree
	 */
	void enterAnnotation_value(ThriftParser.Annotation_valueContext ctx);
	/**
	 * Exit a parse tree produced by {@link ThriftParser#annotation_value}.
	 * @param ctx the parse tree
	 */
	void exitAnnotation_value(ThriftParser.Annotation_valueContext ctx);
	/**
	 * Enter a parse tree produced by {@link ThriftParser#field_type}.
	 * @param ctx the parse tree
	 */
	void enterField_type(ThriftParser.Field_typeContext ctx);
	/**
	 * Exit a parse tree produced by {@link ThriftParser#field_type}.
	 * @param ctx the parse tree
	 */
	void exitField_type(ThriftParser.Field_typeContext ctx);
	/**
	 * Enter a parse tree produced by {@link ThriftParser#base_type}.
	 * @param ctx the parse tree
	 */
	void enterBase_type(ThriftParser.Base_typeContext ctx);
	/**
	 * Exit a parse tree produced by {@link ThriftParser#base_type}.
	 * @param ctx the parse tree
	 */
	void exitBase_type(ThriftParser.Base_typeContext ctx);
	/**
	 * Enter a parse tree produced by {@link ThriftParser#container_type}.
	 * @param ctx the parse tree
	 */
	void enterContainer_type(ThriftParser.Container_typeContext ctx);
	/**
	 * Exit a parse tree produced by {@link ThriftParser#container_type}.
	 * @param ctx the parse tree
	 */
	void exitContainer_type(ThriftParser.Container_typeContext ctx);
	/**
	 * Enter a parse tree produced by {@link ThriftParser#map_type}.
	 * @param ctx the parse tree
	 */
	void enterMap_type(ThriftParser.Map_typeContext ctx);
	/**
	 * Exit a parse tree produced by {@link ThriftParser#map_type}.
	 * @param ctx the parse tree
	 */
	void exitMap_type(ThriftParser.Map_typeContext ctx);
	/**
	 * Enter a parse tree produced by {@link ThriftParser#set_type}.
	 * @param ctx the parse tree
	 */
	void enterSet_type(ThriftParser.Set_typeContext ctx);
	/**
	 * Exit a parse tree produced by {@link ThriftParser#set_type}.
	 * @param ctx the parse tree
	 */
	void exitSet_type(ThriftParser.Set_typeContext ctx);
	/**
	 * Enter a parse tree produced by {@link ThriftParser#list_type}.
	 * @param ctx the parse tree
	 */
	void enterList_type(ThriftParser.List_typeContext ctx);
	/**
	 * Exit a parse tree produced by {@link ThriftParser#list_type}.
	 * @param ctx the parse tree
	 */
	void exitList_type(ThriftParser.List_typeContext ctx);
	/**
	 * Enter a parse tree produced by {@link ThriftParser#cpp_type}.
	 * @param ctx the parse tree
	 */
	void enterCpp_type(ThriftParser.Cpp_typeContext ctx);
	/**
	 * Exit a parse tree produced by {@link ThriftParser#cpp_type}.
	 * @param ctx the parse tree
	 */
	void exitCpp_type(ThriftParser.Cpp_typeContext ctx);
	/**
	 * Enter a parse tree produced by {@link ThriftParser#const_value}.
	 * @param ctx the parse tree
	 */
	void enterConst_value(ThriftParser.Const_valueContext ctx);
	/**
	 * Exit a parse tree produced by {@link ThriftParser#const_value}.
	 * @param ctx the parse tree
	 */
	void exitConst_value(ThriftParser.Const_valueContext ctx);
	/**
	 * Enter a parse tree produced by {@link ThriftParser#integer}.
	 * @param ctx the parse tree
	 */
	void enterInteger(ThriftParser.IntegerContext ctx);
	/**
	 * Exit a parse tree produced by {@link ThriftParser#integer}.
	 * @param ctx the parse tree
	 */
	void exitInteger(ThriftParser.IntegerContext ctx);
	/**
	 * Enter a parse tree produced by {@link ThriftParser#const_list}.
	 * @param ctx the parse tree
	 */
	void enterConst_list(ThriftParser.Const_listContext ctx);
	/**
	 * Exit a parse tree produced by {@link ThriftParser#const_list}.
	 * @param ctx the parse tree
	 */
	void exitConst_list(ThriftParser.Const_listContext ctx);
	/**
	 * Enter a parse tree produced by {@link ThriftParser#const_map_entry}.
	 * @param ctx the parse tree
	 */
	void enterConst_map_entry(ThriftParser.Const_map_entryContext ctx);
	/**
	 * Exit a parse tree produced by {@link ThriftParser#const_map_entry}.
	 * @param ctx the parse tree
	 */
	void exitConst_map_entry(ThriftParser.Const_map_entryContext ctx);
	/**
	 * Enter a parse tree produced by {@link ThriftParser#const_map}.
	 * @param ctx the parse tree
	 */
	void enterConst_map(ThriftParser.Const_mapContext ctx);
	/**
	 * Exit a parse tree produced by {@link ThriftParser#const_map}.
	 * @param ctx the parse tree
	 */
	void exitConst_map(ThriftParser.Const_mapContext ctx);
	/**
	 * Enter a parse tree produced by {@link ThriftParser#list_separator}.
	 * @param ctx the parse tree
	 */
	void enterList_separator(ThriftParser.List_separatorContext ctx);
	/**
	 * Exit a parse tree produced by {@link ThriftParser#list_separator}.
	 * @param ctx the parse tree
	 */
	void exitList_separator(ThriftParser.List_separatorContext ctx);
	/**
	 * Enter a parse tree produced by {@link ThriftParser#real_base_type}.
	 * @param ctx the parse tree
	 */
	void enterReal_base_type(ThriftParser.Real_base_typeContext ctx);
	/**
	 * Exit a parse tree produced by {@link ThriftParser#real_base_type}.
	 * @param ctx the parse tree
	 */
	void exitReal_base_type(ThriftParser.Real_base_typeContext ctx);
}
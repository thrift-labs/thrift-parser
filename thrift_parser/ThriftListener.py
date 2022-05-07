# Generated from antlr-gammars-v4/Thrift.g4 by ANTLR 4.10.1
from antlr4 import *
if __name__ is not None and "." in __name__:
    from .ThriftParser import ThriftParser
else:
    from ThriftParser import ThriftParser

# This class defines a complete listener for a parse tree produced by ThriftParser.
class ThriftListener(ParseTreeListener):

    # Enter a parse tree produced by ThriftParser#document.
    def enterDocument(self, ctx:ThriftParser.DocumentContext):
        pass

    # Exit a parse tree produced by ThriftParser#document.
    def exitDocument(self, ctx:ThriftParser.DocumentContext):
        pass


    # Enter a parse tree produced by ThriftParser#header.
    def enterHeader(self, ctx:ThriftParser.HeaderContext):
        pass

    # Exit a parse tree produced by ThriftParser#header.
    def exitHeader(self, ctx:ThriftParser.HeaderContext):
        pass


    # Enter a parse tree produced by ThriftParser#include_.
    def enterInclude_(self, ctx:ThriftParser.Include_Context):
        pass

    # Exit a parse tree produced by ThriftParser#include_.
    def exitInclude_(self, ctx:ThriftParser.Include_Context):
        pass


    # Enter a parse tree produced by ThriftParser#namespace_.
    def enterNamespace_(self, ctx:ThriftParser.Namespace_Context):
        pass

    # Exit a parse tree produced by ThriftParser#namespace_.
    def exitNamespace_(self, ctx:ThriftParser.Namespace_Context):
        pass


    # Enter a parse tree produced by ThriftParser#cpp_include.
    def enterCpp_include(self, ctx:ThriftParser.Cpp_includeContext):
        pass

    # Exit a parse tree produced by ThriftParser#cpp_include.
    def exitCpp_include(self, ctx:ThriftParser.Cpp_includeContext):
        pass


    # Enter a parse tree produced by ThriftParser#definition.
    def enterDefinition(self, ctx:ThriftParser.DefinitionContext):
        pass

    # Exit a parse tree produced by ThriftParser#definition.
    def exitDefinition(self, ctx:ThriftParser.DefinitionContext):
        pass


    # Enter a parse tree produced by ThriftParser#const_rule.
    def enterConst_rule(self, ctx:ThriftParser.Const_ruleContext):
        pass

    # Exit a parse tree produced by ThriftParser#const_rule.
    def exitConst_rule(self, ctx:ThriftParser.Const_ruleContext):
        pass


    # Enter a parse tree produced by ThriftParser#typedef_.
    def enterTypedef_(self, ctx:ThriftParser.Typedef_Context):
        pass

    # Exit a parse tree produced by ThriftParser#typedef_.
    def exitTypedef_(self, ctx:ThriftParser.Typedef_Context):
        pass


    # Enter a parse tree produced by ThriftParser#enum_rule.
    def enterEnum_rule(self, ctx:ThriftParser.Enum_ruleContext):
        pass

    # Exit a parse tree produced by ThriftParser#enum_rule.
    def exitEnum_rule(self, ctx:ThriftParser.Enum_ruleContext):
        pass


    # Enter a parse tree produced by ThriftParser#enum_field.
    def enterEnum_field(self, ctx:ThriftParser.Enum_fieldContext):
        pass

    # Exit a parse tree produced by ThriftParser#enum_field.
    def exitEnum_field(self, ctx:ThriftParser.Enum_fieldContext):
        pass


    # Enter a parse tree produced by ThriftParser#senum.
    def enterSenum(self, ctx:ThriftParser.SenumContext):
        pass

    # Exit a parse tree produced by ThriftParser#senum.
    def exitSenum(self, ctx:ThriftParser.SenumContext):
        pass


    # Enter a parse tree produced by ThriftParser#struct_.
    def enterStruct_(self, ctx:ThriftParser.Struct_Context):
        pass

    # Exit a parse tree produced by ThriftParser#struct_.
    def exitStruct_(self, ctx:ThriftParser.Struct_Context):
        pass


    # Enter a parse tree produced by ThriftParser#union_.
    def enterUnion_(self, ctx:ThriftParser.Union_Context):
        pass

    # Exit a parse tree produced by ThriftParser#union_.
    def exitUnion_(self, ctx:ThriftParser.Union_Context):
        pass


    # Enter a parse tree produced by ThriftParser#exception.
    def enterException(self, ctx:ThriftParser.ExceptionContext):
        pass

    # Exit a parse tree produced by ThriftParser#exception.
    def exitException(self, ctx:ThriftParser.ExceptionContext):
        pass


    # Enter a parse tree produced by ThriftParser#service.
    def enterService(self, ctx:ThriftParser.ServiceContext):
        pass

    # Exit a parse tree produced by ThriftParser#service.
    def exitService(self, ctx:ThriftParser.ServiceContext):
        pass


    # Enter a parse tree produced by ThriftParser#field.
    def enterField(self, ctx:ThriftParser.FieldContext):
        pass

    # Exit a parse tree produced by ThriftParser#field.
    def exitField(self, ctx:ThriftParser.FieldContext):
        pass


    # Enter a parse tree produced by ThriftParser#field_id.
    def enterField_id(self, ctx:ThriftParser.Field_idContext):
        pass

    # Exit a parse tree produced by ThriftParser#field_id.
    def exitField_id(self, ctx:ThriftParser.Field_idContext):
        pass


    # Enter a parse tree produced by ThriftParser#field_req.
    def enterField_req(self, ctx:ThriftParser.Field_reqContext):
        pass

    # Exit a parse tree produced by ThriftParser#field_req.
    def exitField_req(self, ctx:ThriftParser.Field_reqContext):
        pass


    # Enter a parse tree produced by ThriftParser#function_.
    def enterFunction_(self, ctx:ThriftParser.Function_Context):
        pass

    # Exit a parse tree produced by ThriftParser#function_.
    def exitFunction_(self, ctx:ThriftParser.Function_Context):
        pass


    # Enter a parse tree produced by ThriftParser#oneway.
    def enterOneway(self, ctx:ThriftParser.OnewayContext):
        pass

    # Exit a parse tree produced by ThriftParser#oneway.
    def exitOneway(self, ctx:ThriftParser.OnewayContext):
        pass


    # Enter a parse tree produced by ThriftParser#function_type.
    def enterFunction_type(self, ctx:ThriftParser.Function_typeContext):
        pass

    # Exit a parse tree produced by ThriftParser#function_type.
    def exitFunction_type(self, ctx:ThriftParser.Function_typeContext):
        pass


    # Enter a parse tree produced by ThriftParser#throws_list.
    def enterThrows_list(self, ctx:ThriftParser.Throws_listContext):
        pass

    # Exit a parse tree produced by ThriftParser#throws_list.
    def exitThrows_list(self, ctx:ThriftParser.Throws_listContext):
        pass


    # Enter a parse tree produced by ThriftParser#type_annotations.
    def enterType_annotations(self, ctx:ThriftParser.Type_annotationsContext):
        pass

    # Exit a parse tree produced by ThriftParser#type_annotations.
    def exitType_annotations(self, ctx:ThriftParser.Type_annotationsContext):
        pass


    # Enter a parse tree produced by ThriftParser#type_annotation.
    def enterType_annotation(self, ctx:ThriftParser.Type_annotationContext):
        pass

    # Exit a parse tree produced by ThriftParser#type_annotation.
    def exitType_annotation(self, ctx:ThriftParser.Type_annotationContext):
        pass


    # Enter a parse tree produced by ThriftParser#annotation_value.
    def enterAnnotation_value(self, ctx:ThriftParser.Annotation_valueContext):
        pass

    # Exit a parse tree produced by ThriftParser#annotation_value.
    def exitAnnotation_value(self, ctx:ThriftParser.Annotation_valueContext):
        pass


    # Enter a parse tree produced by ThriftParser#field_type.
    def enterField_type(self, ctx:ThriftParser.Field_typeContext):
        pass

    # Exit a parse tree produced by ThriftParser#field_type.
    def exitField_type(self, ctx:ThriftParser.Field_typeContext):
        pass


    # Enter a parse tree produced by ThriftParser#base_type.
    def enterBase_type(self, ctx:ThriftParser.Base_typeContext):
        pass

    # Exit a parse tree produced by ThriftParser#base_type.
    def exitBase_type(self, ctx:ThriftParser.Base_typeContext):
        pass


    # Enter a parse tree produced by ThriftParser#container_type.
    def enterContainer_type(self, ctx:ThriftParser.Container_typeContext):
        pass

    # Exit a parse tree produced by ThriftParser#container_type.
    def exitContainer_type(self, ctx:ThriftParser.Container_typeContext):
        pass


    # Enter a parse tree produced by ThriftParser#map_type.
    def enterMap_type(self, ctx:ThriftParser.Map_typeContext):
        pass

    # Exit a parse tree produced by ThriftParser#map_type.
    def exitMap_type(self, ctx:ThriftParser.Map_typeContext):
        pass


    # Enter a parse tree produced by ThriftParser#set_type.
    def enterSet_type(self, ctx:ThriftParser.Set_typeContext):
        pass

    # Exit a parse tree produced by ThriftParser#set_type.
    def exitSet_type(self, ctx:ThriftParser.Set_typeContext):
        pass


    # Enter a parse tree produced by ThriftParser#list_type.
    def enterList_type(self, ctx:ThriftParser.List_typeContext):
        pass

    # Exit a parse tree produced by ThriftParser#list_type.
    def exitList_type(self, ctx:ThriftParser.List_typeContext):
        pass


    # Enter a parse tree produced by ThriftParser#cpp_type.
    def enterCpp_type(self, ctx:ThriftParser.Cpp_typeContext):
        pass

    # Exit a parse tree produced by ThriftParser#cpp_type.
    def exitCpp_type(self, ctx:ThriftParser.Cpp_typeContext):
        pass


    # Enter a parse tree produced by ThriftParser#const_value.
    def enterConst_value(self, ctx:ThriftParser.Const_valueContext):
        pass

    # Exit a parse tree produced by ThriftParser#const_value.
    def exitConst_value(self, ctx:ThriftParser.Const_valueContext):
        pass


    # Enter a parse tree produced by ThriftParser#integer.
    def enterInteger(self, ctx:ThriftParser.IntegerContext):
        pass

    # Exit a parse tree produced by ThriftParser#integer.
    def exitInteger(self, ctx:ThriftParser.IntegerContext):
        pass


    # Enter a parse tree produced by ThriftParser#const_list.
    def enterConst_list(self, ctx:ThriftParser.Const_listContext):
        pass

    # Exit a parse tree produced by ThriftParser#const_list.
    def exitConst_list(self, ctx:ThriftParser.Const_listContext):
        pass


    # Enter a parse tree produced by ThriftParser#const_map_entry.
    def enterConst_map_entry(self, ctx:ThriftParser.Const_map_entryContext):
        pass

    # Exit a parse tree produced by ThriftParser#const_map_entry.
    def exitConst_map_entry(self, ctx:ThriftParser.Const_map_entryContext):
        pass


    # Enter a parse tree produced by ThriftParser#const_map.
    def enterConst_map(self, ctx:ThriftParser.Const_mapContext):
        pass

    # Exit a parse tree produced by ThriftParser#const_map.
    def exitConst_map(self, ctx:ThriftParser.Const_mapContext):
        pass


    # Enter a parse tree produced by ThriftParser#list_separator.
    def enterList_separator(self, ctx:ThriftParser.List_separatorContext):
        pass

    # Exit a parse tree produced by ThriftParser#list_separator.
    def exitList_separator(self, ctx:ThriftParser.List_separatorContext):
        pass


    # Enter a parse tree produced by ThriftParser#real_base_type.
    def enterReal_base_type(self, ctx:ThriftParser.Real_base_typeContext):
        pass

    # Exit a parse tree produced by ThriftParser#real_base_type.
    def exitReal_base_type(self, ctx:ThriftParser.Real_base_typeContext):
        pass



del ThriftParser
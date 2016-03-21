ace.define("ace/theme/spacegray",["require","exports","module","ace/lib/dom"], function(require, exports, module) {

exports.isDark = true;
exports.cssClass = "ace-spacegray";
exports.cssText = ".ace_editor.ace-spacegray {\
    background-color: #2B303B;\
    color: #C0C5CE\
}\
.ace_editor.ace-spacegray .ace_fold-widget {\
    display: none !important\
}\
.ace_editor.ace-spacegray .ace_indent-guide {\
    background: 0 0 !important\
}\
.ace_editor.ace-spacegray .ace_print-margin {\
    background: #303943;\
    width: 1px\
}\
.ace_editor.ace-spacegray .ace_gutter {\
    background: #2B303B;\
    color: #757A84\
}\
.ace_editor.ace-spacegray .ace_cursor {\
    color: #C0C5CE\
}\
.ace_editor.ace-spacegray .ace_identifier {\
    color: #759FB3\
}\
.ace_editor.ace-spacegray .ace_punctuation {\
    color: #C0C5CE !important\
}\
.ace_editor.ace-spacegray .ace-spacegray.ace_multiselect .ace_selection.ace_start,\
.ace_editor.ace-spacegray .ace_marker-layer .ace_active-line + .ace_selection,\
.ace_editor.ace-spacegray .ace_marker-layer .ace_selection {\
    background: #4F5B66\
}\
.ace_editor.ace-spacegray .ace_marker-layer .ace_step {\
    background: #ff0\
}\
.ace_editor.ace-spacegray .ace_marker-layer .ace_bracket {\
    margin: -1px 0 0 -1px;\
    border: 1px solid #323A43\
}\
.ace_editor.ace-spacegray .ace_marker-layer .ace_active-line {\
    background: #323A43\
}\
.ace_editor.ace-spacegray .ace_gutter-active-line {\
    background-color: #323A43\
}\
.ace_editor.ace-spacegray .ace_marker-layer .ace_selected-word {\
    border: 1px solid #4F5B66;\
    background: 0 0\
}\
.ace_editor.ace-spacegray .ace_invisible {\
    color: #323A43\
}\
.ace_editor.ace-spacegray .ace_keyword, .ace_editor.ace-spacegray .ace_meta,\
.ace_editor.ace-spacegray .ace_storage, .ace_editor.ace-spacegray .ace_storage.ace_type,\
.ace_editor.ace-spacegray .ace_support.ace_type {\
    color: #B48EAD\
}\
.ace_editor.ace-spacegray .ace_keyword.ace_operator {\
    color: #C0C5CE\
}\
.ace_editor.ace-spacegray .ace_constant.ace_character, .ace_editor.ace-spacegray .ace_constant.ace_language,\
.ace_editor.ace-spacegray .ace_constant.ace_numeric, .ace_editor.ace-spacegray .ace_keyword.ace_other.ace_unit,\
.ace_editor.ace-spacegray .ace_support.ace_constant, .ace_editor.ace-spacegray .ace_variable.ace_parameter {\
    color: #D08770\
}\
.ace_editor.ace-spacegray .ace_attribute-name {\
    color: #D08770 !important\
}\
.ace_editor.ace-spacegray .ace_constant.ace_other {\
    color: #96B5B4\
}\
.ace_editor.ace-spacegray .ace_invalid, .ace_editor.ace-spacegray .ace_invalid.ace_deprecated {\
    color: #2B303B;\
    background-color: #BF616A\
}\
.ace_editor.ace-spacegray .ace_fold {\
    background-color: #4271AE;\
    border-color: #4D4D4C\
}\
.ace_editor.ace-spacegray .ace_entity.ace_name.ace_function, .ace_editor.ace-spacegray .ace_support.ace_function,\
.ace_editor.ace-spacegray .ace_variable {\
    color: #BF616A\
}\
.ace_editor.ace-spacegray .ace_support.ace_class, .ace_editor.ace-spacegray .ace_support.ace_type {\
    color: #D08770\
}\
.ace_editor.ace-spacegray .ace_heading, .ace_editor.ace-spacegray .ace_markup.ace_heading,\
.ace_editor.ace-spacegray .ace_string {\
    color: #A3BE8C\
}\
.ace_editor.ace-spacegray .ace_entity.ace_name.ace_tag, .ace_editor.ace-spacegray .ace_entity.ace_other.ace_attribute-name,\
.ace_editor.ace-spacegray .ace_meta.ace_tag, .ace_editor.ace-spacegray .ace_string.ace_regexp,\
.ace_editor.ace-spacegray .ace_variable {\
    color: #BF616A\
}\
.ace_editor.ace-spacegray .ace_comment {\
    color: #65737E\
}\
.ace-spacegray .ace_entity.ace_name.ace_tag,\
.ace-spacegray .ace_entity.ace_other.ace_attribute-name {\
color: #606060\
}\
.ace-spacegray .ace_indent-guide {\
background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAEklEQVQImWNgYGBgYHB3d/8PAAOIAdULw8qMAAAAAElFTkSuQmCC) right repeat-y\
}";

var dom = require("../lib/dom");
dom.importCssString(exports.cssText, exports.cssClass);
});

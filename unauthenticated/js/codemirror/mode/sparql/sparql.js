!function(t){"object"==typeof exports&&"object"==typeof module?t(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],t):t(CodeMirror)}(function(t){t.defineMode("sparql",function(t){function e(t,o){var r=t.next();return i=null,"$"==r||"?"==r?"?"==r&&t.match(/\s/,!1)?"operator":(t.match(/^[A-Za-z0-9_\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][A-Za-z0-9_\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]*/),"variable-2"):"<"!=r||t.match(/^[\s\u00a0=]/,!1)?'"'==r||"'"==r?(o.tokenize=function(t){return function(n,o){for(var r,i=!1;null!=(r=n.next());){if(r==t&&!i){o.tokenize=e;break}i=!i&&"\\"==r}return"string"}}(r),o.tokenize(t,o)):/[{}\(\),\.;\[\]]/.test(r)?(i=r,"bracket"):"#"==r?(t.skipToEnd(),"comment"):s.test(r)?"operator":":"==r?(n(t),"atom"):"@"==r?(t.eatWhile(/[a-z\d\-]/i),"meta"):(t.eatWhile(/[_\w\d]/),t.eat(":")?(n(t),"atom"):(r=t.current(),a.test(r)?"builtin":c.test(r)?"keyword":"variable")):(t.match(/^[^\s\u00a0>]*>?/),"atom")}function n(t){t.match(/(\.(?=[\w_\-\\%])|[:\w_-]|\\[-\\_~.!$&'()*+,;=/?#@%]|%[a-f\d][a-f\d])+/i)}function o(t,e,n){t.context={prev:t.context,indent:t.indent,col:n,type:e}}function r(t){t.indent=t.context.indent,t.context=t.context.prev}var i,u=t.indentUnit,a=RegExp("^(?:str|lang|langmatches|datatype|bound|sameterm|isiri|isuri|iri|uri|bnode|count|sum|min|max|avg|sample|group_concat|rand|abs|ceil|floor|round|concat|substr|strlen|replace|ucase|lcase|encode_for_uri|contains|strstarts|strends|strbefore|strafter|year|month|day|hours|minutes|seconds|timezone|tz|now|uuid|struuid|md5|sha1|sha256|sha384|sha512|coalesce|if|strlang|strdt|isnumeric|regex|exists|isblank|isliteral|a|bind)$","i"),c=RegExp("^(?:base|prefix|select|distinct|reduced|construct|describe|ask|from|named|where|order|limit|offset|filter|optional|graph|by|asc|desc|as|having|undef|values|group|minus|in|not|service|silent|using|insert|delete|union|true|false|with|data|copy|to|move|add|create|drop|clear|load)$","i"),s=/[*+\-<>=&|\^\/!\?]/;return{startState:function(){return{tokenize:e,context:null,indent:0,col:0}},token:function(t,e){if(t.sol()&&(e.context&&null==e.context.align&&(e.context.align=!1),e.indent=t.indentation()),t.eatSpace())return null;var n=e.tokenize(t,e);if("comment"!=n&&e.context&&null==e.context.align&&"pattern"!=e.context.type&&(e.context.align=!0),"("==i)o(e,")",t.column());else if("["==i)o(e,"]",t.column());else if("{"==i)o(e,"}",t.column());else if(/[\]\}\)]/.test(i)){for(;e.context&&"pattern"==e.context.type;)r(e);e.context&&i==e.context.type&&(r(e),"}"==i&&e.context&&"pattern"==e.context.type&&r(e))}else"."==i&&e.context&&"pattern"==e.context.type?r(e):/atom|string|variable/.test(n)&&e.context&&(/[\}\]]/.test(e.context.type)?o(e,"pattern",t.column()):"pattern"!=e.context.type||e.context.align||(e.context.align=!0,e.context.col=t.column()));return n},indent:function(t,e){var n=e&&e.charAt(0),o=t.context;if(/[\]\}]/.test(n))for(;o&&"pattern"==o.type;)o=o.prev;return n=o&&n==o.type,o?"pattern"==o.type?o.col:o.align?o.col+(n?0:1):o.indent+(n?0:u):0},lineComment:"#"}}),t.defineMIME("application/sparql-query","sparql")});
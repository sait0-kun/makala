(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[342],{

/***/ "./node_modules/prismjs/components/prism-regex.min.js":
/*!************************************************************!*\
  !*** ./node_modules/prismjs/components/prism-regex.min.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

!function(n){var a={pattern:/\\[\\(){}[\]^$+*?|.]/,alias:"escape"},e=/\\(?:x[\da-fA-F]{2}|u[\da-fA-F]{4}|u\{[\da-fA-F]+\}|c[a-zA-Z]|0[0-7]{0,2}|[123][0-7]{2}|.)/,t="(?:[^\\\\-]|"+e.source+")",i=RegExp(t+"-"+t),r={pattern:/(<|')[^<>']+(?=[>']$)/,lookbehind:!0,alias:"variable"};n.languages.regex={charset:{pattern:/((?:^|[^\\])(?:\\\\)*)\[(?:[^\\\]]|\\[\s\S])*\]/,lookbehind:!0,inside:{"charset-negation":{pattern:/(^\[)\^/,lookbehind:!0,alias:"operator"},"charset-punctuation":{pattern:/^\[|\]$/,alias:"punctuation"},range:{pattern:i,inside:{escape:e,"range-punctuation":{pattern:/-/,alias:"operator"}}},"special-escape":a,charclass:{pattern:/\\[wsd]|\\p{[^{}]+}/i,alias:"class-name"},escape:e}},"special-escape":a,charclass:{pattern:/\.|\\[wsd]|\\p{[^{}]+}/i,alias:"class-name"},backreference:[{pattern:/\\(?![123][0-7]{2})[1-9]/,alias:"keyword"},{pattern:/\\k<[^<>']+>/,alias:"keyword",inside:{"group-name":r}}],anchor:{pattern:/[$^]|\\[ABbGZz]/,alias:"function"},escape:e,group:[{pattern:/\((?:\?(?:<[^<>']+>|'[^<>']+'|[>:]|<?[=!]|[idmnsuxU]+(?:-[idmnsuxU]+)?:?))?/,alias:"punctuation",inside:{"group-name":r}},{pattern:/\)/,alias:"punctuation"}],quantifier:{pattern:/(?:[+*?]|\{(?:\d+,?\d*)\})[?+]?/,alias:"number"},alternation:{pattern:/\|/,alias:"keyword"}},["actionscript","coffescript","flow","javascript","typescript","vala"].forEach(function(a){var e=n.languages[a];e&&(e.regex.inside={"language-regex":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/i,lookbehind:!0,inside:n.languages.regex},"regex-flags":/[a-z]+$/i,"regex-delimiter":/^\/|\/$/})})}(Prism);

/***/ })

}]);
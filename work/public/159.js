(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[159],{

/***/ "./node_modules/prismjs/components/prism-haxe.min.js":
/*!***********************************************************!*\
  !*** ./node_modules/prismjs/components/prism-haxe.min.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Prism.languages.haxe=Prism.languages.extend("clike",{string:{pattern:/(["'])(?:(?!\1)[^\\]|\\[\s\S])*\1/,greedy:!0,inside:{interpolation:{pattern:/(^|[^\\])\$(?:\w+|\{[^}]+\})/,lookbehind:!0,inside:{interpolation:{pattern:/^\$\w*/,alias:"variable"}}}}},keyword:/\bthis\b|\b(?:abstract|as|break|case|cast|catch|class|continue|default|do|dynamic|else|enum|extends|extern|from|for|function|if|implements|import|in|inline|interface|macro|new|null|override|public|private|return|static|super|switch|throw|to|try|typedef|using|var|while)(?!\.)\b/,operator:/\.{3}|\+\+?|-[->]?|[=!]=?|&&?|\|\|?|<[<=]?|>[>=]?|[*\/%~^]/}),Prism.languages.insertBefore("haxe","class-name",{regex:{pattern:/~\/(?:[^\/\\\r\n]|\\.)+\/[igmsu]*/,greedy:!0}}),Prism.languages.insertBefore("haxe","keyword",{preprocessor:{pattern:/#\w+/,alias:"builtin"},metadata:{pattern:/@:?\w+/,alias:"symbol"},reification:{pattern:/\$(?:\w+|(?=\{))/,alias:"variable"}}),Prism.languages.haxe.string.inside.interpolation.inside.rest=Prism.languages.haxe,delete Prism.languages.haxe["class-name"];

/***/ })

}]);
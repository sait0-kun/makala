(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[292],{

/***/ "./node_modules/prismjs/components/prism-pascaligo.min.js":
/*!****************************************************************!*\
  !*** ./node_modules/prismjs/components/prism-pascaligo.min.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

!function(e){var n="(?:\\w+(?:<braces>)?|<braces>)".replace(/<braces>/g,function(){return"\\((?:[^()]|\\((?:[^()]|\\([^()]*\\))*\\))*\\)"}),t=e.languages.pascaligo={comment:/\(\*[\s\S]+?\*\)|\/\/.*/,string:{pattern:/(["'`])(?:\\[\s\S]|(?!\1)[^\\])*\1|\^[a-z]/i,greedy:!0},"class-name":[{pattern:RegExp("(\\btype\\s+\\w+\\s+is\\s+)<type>".replace(/<type>/g,function(){return n}),"i"),lookbehind:!0,inside:null},{pattern:RegExp("<type>(?=\\s+is\\b)".replace(/<type>/g,function(){return n}),"i"),inside:null},{pattern:RegExp("(:\\s*)<type>".replace(/<type>/g,function(){return n})),lookbehind:!0,inside:null}],keyword:{pattern:/(^|[^&])\b(?:begin|block|case|const|else|end|fail|for|from|function|if|is|nil|of|remove|return|skip|then|type|var|while|with)\b/i,lookbehind:!0},boolean:{pattern:/(^|[^&])\b(?:True|False)\b/i,lookbehind:!0},builtin:{pattern:/(^|[^&])\b(?:bool|int|list|map|nat|record|string|unit)\b/i,lookbehind:!0},function:/\w+(?=\s*\()/i,number:[/%[01]+|&[0-7]+|\$[a-f\d]+/i,/\b\d+(?:\.\d+)?(?:e[+-]?\d+)?(?:mtz|n)?/i],operator:/->|=\/=|\.\.|\*\*|:=|<[<=>]?|>[>=]?|[+\-*\/]=?|[@^=|]|\b(?:and|mod|or)\b/,punctuation:/\(\.|\.\)|[()\[\]:;,.{}]/},i=["comment","keyword","builtin","operator","punctuation"].reduce(function(e,n){return e[n]=t[n],e},{});t["class-name"].forEach(function(e){e.inside=i})}(Prism);

/***/ })

}]);
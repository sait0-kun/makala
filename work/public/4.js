(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./node_modules/prismjs/components/prism-actionscript.js":
/*!***************************************************************!*\
  !*** ./node_modules/prismjs/components/prism-actionscript.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Prism.languages.actionscript = Prism.languages.extend('javascript',  {
	'keyword': /\b(?:as|break|case|catch|class|const|default|delete|do|else|extends|finally|for|function|if|implements|import|in|instanceof|interface|internal|is|native|new|null|package|private|protected|public|return|super|switch|this|throw|try|typeof|use|var|void|while|with|dynamic|each|final|get|include|namespace|native|override|set|static)\b/,
	'operator': /\+\+|--|(?:[+\-*\/%^]|&&?|\|\|?|<<?|>>?>?|[!=]=?)=?|[~?@]/
});
Prism.languages.actionscript['class-name'].alias = 'function';

if (Prism.languages.markup) {
	Prism.languages.insertBefore('actionscript', 'string', {
		'xml': {
			pattern: /(^|[^.])<\/?\w+(?:\s+[^\s>\/=]+=("|')(?:\\[\s\S]|(?!\2)[^\\])*\2)*\s*\/?>/,
			lookbehind: true,
			inside: Prism.languages.markup
		}
	});
}


/***/ })

}]);
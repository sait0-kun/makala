(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[287],{

/***/ "./node_modules/prismjs/components/prism-parser.js":
/*!*********************************************************!*\
  !*** ./node_modules/prismjs/components/prism-parser.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function (Prism) {

	var parser = Prism.languages.parser = Prism.languages.extend('markup', {
		'keyword': {
			pattern: /(^|[^^])(?:\^(?:case|eval|for|if|switch|throw)\b|@(?:BASE|CLASS|GET(?:_DEFAULT)?|OPTIONS|SET_DEFAULT|USE)\b)/,
			lookbehind: true
		},
		'variable': {
			pattern: /(^|[^^])\B\$(?:\w+|(?=[.{]))(?:(?:\.|::?)\w+)*(?:\.|::?)?/,
			lookbehind: true,
			inside: {
				'punctuation': /\.|:+/
			}
		},
		'function': {
			pattern: /(^|[^^])\B[@^]\w+(?:(?:\.|::?)\w+)*(?:\.|::?)?/,
			lookbehind: true,
			inside: {
				'keyword': {
					pattern: /(^@)(?:GET_|SET_)/,
					lookbehind: true
				},
				'punctuation': /\.|:+/
			}
		},
		'escape': {
			pattern: /\^(?:[$^;@()\[\]{}"':]|#[a-f\d]*)/i,
			alias: 'builtin'
		},
		'punctuation': /[\[\](){};]/
	});

	parser = Prism.languages.insertBefore('parser', 'keyword', {
		'parser-comment': {
			pattern: /(\s)#.*/,
			lookbehind: true,
			alias: 'comment'
		},
		'expression': {
			// Allow for 3 levels of depth
			pattern: /(^|[^^])\((?:[^()]|\((?:[^()]|\((?:[^()])*\))*\))*\)/,
			greedy: true,
			lookbehind: true,
			inside: {
				'string': {
					pattern: /(^|[^^])(["'])(?:(?!\2)[^^]|\^[\s\S])*\2/,
					lookbehind: true
				},
				'keyword': parser.keyword,
				'variable': parser.variable,
				'function': parser.function,
				'boolean': /\b(?:true|false)\b/,
				'number': /\b(?:0x[a-f\d]+|\d+\.?\d*(?:e[+-]?\d+)?)\b/i,
				'escape': parser.escape,
				'operator': /[~+*\/\\%]|!(?:\|\|?|=)?|&&?|\|\|?|==|<[<=]?|>[>=]?|-[fd]?|\b(?:def|eq|ge|gt|in|is|le|lt|ne)\b/,
				'punctuation': parser.punctuation
			}
		}
	});

	parser = Prism.languages.insertBefore('inside', 'punctuation', {
		'expression': parser.expression,
		'keyword': parser.keyword,
		'variable': parser.variable,
		'function': parser.function,
		'escape': parser.escape,
		'parser-punctuation': {
			pattern: parser.punctuation,
			alias: 'punctuation'
		}
	}, parser['tag'].inside['attr-value']);

}(Prism));


/***/ })

}]);
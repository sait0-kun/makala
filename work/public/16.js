(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[16],{

/***/ "./node_modules/prismjs/components/prism-apl.js":
/*!******************************************************!*\
  !*** ./node_modules/prismjs/components/prism-apl.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Prism.languages.apl = {
	'comment': /(?:⍝|#[! ]).*$/m,
	'string': {
		pattern: /'(?:[^'\r\n]|'')*'/,
		greedy: true
	},
	'number': /¯?(?:\d*\.?\b\d+(?:e[+¯]?\d+)?|¯|∞)(?:j¯?(?:\d*\.?\d+(?:e[+¯]?\d+)?|¯|∞))?/i,
	'statement': /:[A-Z][a-z][A-Za-z]*\b/,
	'system-function': {
		pattern: /⎕[A-Z]+/i,
		alias: 'function'
	},
	'constant': /[⍬⌾#⎕⍞]/,
	'function': /[-+×÷⌈⌊∣|⍳⍸?*⍟○!⌹<≤=>≥≠≡≢∊⍷∪∩~∨∧⍱⍲⍴,⍪⌽⊖⍉↑↓⊂⊃⊆⊇⌷⍋⍒⊤⊥⍕⍎⊣⊢⍁⍂≈⍯↗¤→]/,
	'monadic-operator': {
		pattern: /[\\\/⌿⍀¨⍨⌶&∥]/,
		alias: 'operator'
	},
	'dyadic-operator': {
		pattern: /[.⍣⍠⍤∘⌸@⌺⍥]/,
		alias: 'operator'
	},
	'assignment': {
		pattern: /←/,
		alias: 'keyword'
	},
	'punctuation': /[\[;\]()◇⋄]/,
	'dfn': {
		pattern: /[{}⍺⍵⍶⍹∇⍫:]/,
		alias: 'builtin'
	}
};


/***/ })

}]);
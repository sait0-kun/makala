(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[31],{

/***/ "./node_modules/prismjs/components/prism-aspnet.min.js":
/*!*************************************************************!*\
  !*** ./node_modules/prismjs/components/prism-aspnet.min.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Prism.languages.aspnet=Prism.languages.extend("markup",{"page-directive":{pattern:/<%\s*@.*%>/i,alias:"tag",inside:{"page-directive":{pattern:/<%\s*@\s*(?:Assembly|Control|Implements|Import|Master(?:Type)?|OutputCache|Page|PreviousPageType|Reference|Register)?|%>/i,alias:"tag"},rest:Prism.languages.markup.tag.inside}},directive:{pattern:/<%.*%>/i,alias:"tag",inside:{directive:{pattern:/<%\s*?[$=%#:]{0,2}|%>/i,alias:"tag"},rest:Prism.languages.csharp}}}),Prism.languages.aspnet.tag.pattern=/<(?!%)\/?[^\s>\/]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+))?)*\s*\/?>/i,Prism.languages.insertBefore("inside","punctuation",{directive:Prism.languages.aspnet.directive},Prism.languages.aspnet.tag.inside["attr-value"]),Prism.languages.insertBefore("aspnet","comment",{"asp-comment":{pattern:/<%--[\s\S]*?--%>/,alias:["asp","comment"]}}),Prism.languages.insertBefore("aspnet",Prism.languages.javascript?"script":"tag",{"asp-script":{pattern:/(<script(?=.*runat=['"]?server['"]?)[\s\S]*?>)[\s\S]*?(?=<\/script>)/i,lookbehind:!0,alias:["asp","script"],inside:Prism.languages.csharp||{}}});

/***/ })

}]);
webpackHotUpdate_N_E("pages/[blog]",{

/***/ "./src/components/Author.tsx":
/*!***********************************!*\
  !*** ./src/components/Author.tsx ***!
  \***********************************/
/*! exports provided: Author */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Author\", function() { return Author; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_optimized_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-optimized-image */ \"./node_modules/react-optimized-image/lib/index.js\");\n/* harmony import */ var react_optimized_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_optimized_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\nvar _jsxFileName = \"/Users/ryan/repos/cp4mcmkb/src/components/Author.tsx\",\n    _this = undefined;\n\n\n\nvar Author = function Author(_ref) {\n  var data = _ref.data;\n  var profilepic = data.author.replace(' ', '').toLowerCase();\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \"author flex\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_optimized_image__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      src: __webpack_require__(\"./public/profilepics sync recursive ^\\\\.\\\\/.*\\\\.jpg$?02a8\")(\"./\".concat(profilepic, \".jpg\")),\n      alt: \"Profile Picture\",\n      webp: true,\n      sizes: [400],\n      className: \"rounded-full h-12 w-12\",\n      rawSrc: {\n        fallback: {\n          400: {\n            1: __webpack_require__(\"./public/profilepics sync recursive ^\\\\.\\\\/.*\\\\.jpg$?cbed\")(\"./\".concat(profilepic, \".jpg\"))\n          }\n        },\n        webp: {\n          400: {\n            1: __webpack_require__(\"./public/profilepics sync recursive ^\\\\.\\\\/.*\\\\.jpg$?b9ec\")(\"./\".concat(profilepic, \".jpg\"))\n          }\n        }\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"flex flex-col ml-4\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"\",\n        children: data.author\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"\",\n        children: data.date\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 14,\n    columnNumber: 5\n  }, _this);\n};\n_c = Author;\n\nvar _c;\n\n$RefreshReg$(_c, \"Author\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQXV0aG9yLnRzeD9iN2IzIl0sIm5hbWVzIjpbIkF1dGhvciIsImRhdGEiLCJwcm9maWxlcGljIiwiYXV0aG9yIiwicmVwbGFjZSIsInRvTG93ZXJDYXNlIiwicmVxdWlyZSIsImRhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBUU8sSUFBTUEsTUFBNkIsR0FBRyxTQUFoQ0EsTUFBZ0MsT0FBWTtBQUFBLE1BQVZDLElBQVUsUUFBVkEsSUFBVTtBQUN2RCxNQUFNQyxVQUFVLEdBQUdELElBQUksQ0FBQ0UsTUFBTCxDQUFZQyxPQUFaLENBQW9CLEdBQXBCLEVBQXlCLEVBQXpCLEVBQTZCQyxXQUE3QixFQUFuQjtBQUVBLHNCQUNFO0FBQUssYUFBUyxFQUFDLGFBQWY7QUFBQSw0QkFDRSxxRUFBQyw0REFBRDtBQUNFLFNBQUcsRUFBRUMsaUZBQVEsWUFBNEJKLFVBQTdCLFVBRGQ7QUFFRSxTQUFHLEVBQUMsaUJBRk47QUFHRSxVQUFJLE1BSE47QUFJRSxXQUFLLEVBQUUsQ0FBQyxHQUFELENBSlQ7QUFLRSxlQUFTLEVBQUMsd0JBTFo7QUFBQTtBQUFBO0FBQUE7QUFBQSw0R0FDMkNBLFVBRDNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw0R0FDMkNBLFVBRDNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBUUU7QUFBSyxlQUFTLEVBQUMsb0JBQWY7QUFBQSw4QkFDRTtBQUFLLGlCQUFTLEVBQUMsRUFBZjtBQUFBLGtCQUFtQkQsSUFBSSxDQUFDRTtBQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFFRTtBQUFLLGlCQUFTLEVBQUMsRUFBZjtBQUFBLGtCQUFtQkYsSUFBSSxDQUFDTTtBQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBUkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFlRCxDQWxCTTtLQUFNUCxNIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvQXV0aG9yLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWcgZnJvbSAncmVhY3Qtb3B0aW1pemVkLWltYWdlJ1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtGcm9udG1hdHRlcn0gZnJvbSAnLi4vdHlwZXMnXG4vLyBpbXBvcnQgTmV4dExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuXG5pbnRlcmZhY2UgQXV0aG9yUHJvcHMge1xuICBkYXRhOiBGcm9udG1hdHRlclxufVxuXG5leHBvcnQgY29uc3QgQXV0aG9yOiBSZWFjdC5GQzxBdXRob3JQcm9wcz4gPSAoe2RhdGF9KSA9PiB7XG4gIGNvbnN0IHByb2ZpbGVwaWMgPSBkYXRhLmF1dGhvci5yZXBsYWNlKCcgJywgJycpLnRvTG93ZXJDYXNlKClcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYXV0aG9yIGZsZXhcIj5cbiAgICAgIDxJbWdcbiAgICAgICAgc3JjPXtyZXF1aXJlKGAuLi8uLi9wdWJsaWMvcHJvZmlsZXBpY3MvJHtwcm9maWxlcGljfS5qcGdgKX1cbiAgICAgICAgYWx0PVwiUHJvZmlsZSBQaWN0dXJlXCJcbiAgICAgICAgd2VicFxuICAgICAgICBzaXplcz17WzQwMF19XG4gICAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWQtZnVsbCBoLTEyIHctMTJcIlxuICAgICAgLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBtbC00XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+e2RhdGEuYXV0aG9yfTwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPntkYXRhLmRhdGV9PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Author.tsx\n");

/***/ })

})
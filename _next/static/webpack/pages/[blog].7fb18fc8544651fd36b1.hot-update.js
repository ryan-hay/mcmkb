webpackHotUpdate_N_E("pages/[blog]",{

/***/ "./src/pages/[blog].tsx":
/*!******************************!*\
  !*** ./src/pages/[blog].tsx ***!
  \******************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_BlogLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/BlogLayout */ \"./src/components/BlogLayout.tsx\");\n/* harmony import */ var remark_gfm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! remark-gfm */ \"./node_modules/remark-gfm/index.js\");\n/* harmony import */ var remark_gfm__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(remark_gfm__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_optimized_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-optimized-image */ \"./node_modules/react-optimized-image/lib/index.js\");\n/* harmony import */ var react_optimized_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_optimized_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-markdown */ \"./node_modules/react-markdown/lib/react-markdown.js\");\n/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _components_Author__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Author */ \"./src/components/Author.tsx\");\n/* harmony import */ var _components_CodeBlock__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/CodeBlock */ \"./src/components/CodeBlock.tsx\");\n/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Footer */ \"./src/components/Footer.tsx\");\n/* harmony import */ var _utils_formatDate__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/formatDate */ \"./src/utils/formatDate.ts\");\n\n\n\nvar _jsxFileName = \"/Users/ryan/repos/cp4mcmkb/src/pages/[blog].tsx\",\n    _this = undefined;\n\n\n\n\n\n\n\n\n\n\n\nvar Blog = function Blog(_ref) {\n  var data = _ref.data,\n      content = _ref.content;\n  var frontmatter = data;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_BlogLayout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n      title: frontmatter.title,\n      description: frontmatter.description,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n        className: \"mt-6 mb-12 text-5xl\",\n        children: frontmatter.title\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 20,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"my-6\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Author__WEBPACK_IMPORTED_MODULE_6__[\"Author\"], {\n          author: frontmatter.author,\n          date: Object(_utils_formatDate__WEBPACK_IMPORTED_MODULE_9__[\"formatDate\"])(frontmatter.date)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 22,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 21,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"markdown-body mb-12\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_markdown__WEBPACK_IMPORTED_MODULE_5___default.a, {\n          plugins: [remark_gfm__WEBPACK_IMPORTED_MODULE_2___default.a],\n          source: content,\n          renderers: {\n            code: _components_CodeBlock__WEBPACK_IMPORTED_MODULE_7__[\"CodeBlock\"],\n            image: function image(props) {\n              var src = props.src,\n                  alt = props.alt; // If image source is pointing to an external URL\n\n              if (src.includes('https://')) {\n                return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n                  src: src,\n                  alt: alt\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 35,\n                  columnNumber: 26\n                }, _this);\n              } else {\n                // image source is pointing to a locally hosted image\n                // Need to convert the image path from relative in the MD to relative of this file\n                // strip ./assets and surrounding quotes\n                var imageName = src.replace('./assets', '').replace(/'/g, '');\n                return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_optimized_image__WEBPACK_IMPORTED_MODULE_3___default.a, {\n                  src: __webpack_require__(\"./src/content sync recursive ^\\\\.\\\\/.*$?7146\")(\"./\".concat(data.slug, \"/assets\").concat(imageName)),\n                  alt: alt,\n                  webp: true,\n                  sizes: [400, 800],\n                  rawSrc: {\n                    fallback: {\n                      400: {\n                        1: __webpack_require__(\"./src/content sync recursive ^\\\\.\\\\/.*$?1395\")(\"./\".concat(data.slug, \"/assets\").concat(imageName, \"\"))\n                      },\n                      800: {\n                        1: __webpack_require__(\"./src/content sync recursive ^\\\\.\\\\/.*$?2d9d\")(\"./\".concat(data.slug, \"/assets\").concat(imageName, \"\"))\n                      }\n                    },\n                    webp: {\n                      400: {\n                        1: __webpack_require__(\"./src/content sync recursive ^\\\\.\\\\/.*$?c54a\")(\"./\".concat(data.slug, \"/assets\").concat(imageName, \"\"))\n                      },\n                      800: {\n                        1: __webpack_require__(\"./src/content sync recursive ^\\\\.\\\\/.*$?b8f8\")(\"./\".concat(data.slug, \"/assets\").concat(imageName, \"\"))\n                      }\n                    }\n                  }\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 42,\n                  columnNumber: 21\n                }, _this);\n              }\n            }\n          },\n          escapeHtml: false\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 25,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_optimized_image__WEBPACK_IMPORTED_MODULE_3___default.a, {\n        className: \"mb-16\",\n        src: __webpack_require__(/*! ../../public/defaultImages/separator.png */ \"./public/defaultImages/separator.png\"),\n        rawSrc: {\n          fallback: {\n            original: {\n              1: __webpack_require__(/*! ../../public/defaultImages/separator.png */ \"./public/defaultImages/separator.png\")\n            }\n          }\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 55,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Footer__WEBPACK_IMPORTED_MODULE_8__[\"Footer\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true);\n};\n\n_c = Blog;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Blog);\n\nvar _c;\n\n$RefreshReg$(_c, \"Blog\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL1tibG9nXS50c3g/N2UxNyJdLCJuYW1lcyI6WyJCbG9nIiwiZGF0YSIsImNvbnRlbnQiLCJmcm9udG1hdHRlciIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJhdXRob3IiLCJmb3JtYXREYXRlIiwiZGF0ZSIsImdmbSIsImNvZGUiLCJDb2RlQmxvY2siLCJpbWFnZSIsInByb3BzIiwic3JjIiwiYWx0IiwiaW5jbHVkZXMiLCJpbWFnZU5hbWUiLCJyZXBsYWNlIiwicmVxdWlyZSIsInNsdWciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLE9BQStCO0FBQUEsTUFBN0JDLElBQTZCLFFBQTdCQSxJQUE2QjtBQUFBLE1BQXZCQyxPQUF1QixRQUF2QkEsT0FBdUI7QUFDMUMsTUFBTUMsV0FBVyxHQUFHRixJQUFwQjtBQUVBLHNCQUNFO0FBQUEsNEJBQ0UscUVBQUMsOERBQUQ7QUFBWSxXQUFLLEVBQUVFLFdBQVcsQ0FBQ0MsS0FBL0I7QUFBc0MsaUJBQVcsRUFBRUQsV0FBVyxDQUFDRSxXQUEvRDtBQUFBLDhCQUNFO0FBQUksaUJBQVMsRUFBQyxxQkFBZDtBQUFBLGtCQUFxQ0YsV0FBVyxDQUFDQztBQUFqRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFFRTtBQUFLLGlCQUFTLEVBQUMsTUFBZjtBQUFBLCtCQUNFLHFFQUFDLHlEQUFEO0FBQVEsZ0JBQU0sRUFBRUQsV0FBVyxDQUFDRyxNQUE1QjtBQUFvQyxjQUFJLEVBQUVDLG9FQUFVLENBQUNKLFdBQVcsQ0FBQ0ssSUFBYjtBQUFwRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZGLGVBS0U7QUFBSyxpQkFBUyxFQUFDLHFCQUFmO0FBQUEsK0JBQ0UscUVBQUMscURBQUQ7QUFDRSxpQkFBTyxFQUFFLENBQUNDLGlEQUFELENBRFg7QUFFRSxnQkFBTSxFQUFFUCxPQUZWO0FBR0UsbUJBQVMsRUFBRTtBQUNUUSxnQkFBSSxFQUFFQywrREFERztBQUVUQyxpQkFBSyxFQUFFLGVBQUNDLEtBQUQsRUFBZ0I7QUFBQSxrQkFDZEMsR0FEYyxHQUNGRCxLQURFLENBQ2RDLEdBRGM7QUFBQSxrQkFDVEMsR0FEUyxHQUNGRixLQURFLENBQ1RFLEdBRFMsRUFHckI7O0FBQ0Esa0JBQUtELEdBQUQsQ0FBZ0JFLFFBQWhCLENBQXlCLFVBQXpCLENBQUosRUFBMEM7QUFDeEMsb0NBQU87QUFBSyxxQkFBRyxFQUFFRixHQUFWO0FBQWUscUJBQUcsRUFBRUM7QUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFBUDtBQUNELGVBRkQsTUFFTztBQUNMO0FBQ0E7QUFDQTtBQUNBLG9CQUFNRSxTQUFTLEdBQUdILEdBQUcsQ0FBQ0ksT0FBSixDQUFZLFVBQVosRUFBd0IsRUFBeEIsRUFBNEJBLE9BQTVCLENBQW9DLElBQXBDLEVBQTBDLEVBQTFDLENBQWxCO0FBQ0Esb0NBQ0UscUVBQUMsNERBQUQ7QUFDRSxxQkFBRyxFQUFFQyxvRUFBUSxZQUFjbEIsSUFBSSxDQUFDbUIsSUFBcEIsb0JBQWtDSCxTQUFsQyxFQURkO0FBRUUscUJBQUcsRUFBRUYsR0FGUDtBQUdFLHNCQUFJLE1BSE47QUFJRSx1QkFBSyxFQUFFLENBQUMsR0FBRCxFQUFNLEdBQU4sQ0FKVDtBQUFBO0FBQUE7QUFBQTtBQUFBLDJHQUM2QmQsSUFBSSxDQUFDbUIsSUFEbEMsb0JBQ2dESCxTQURoRDtBQUFBO0FBQUE7QUFBQSwyR0FDNkJoQixJQUFJLENBQUNtQixJQURsQyxvQkFDZ0RILFNBRGhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyR0FDNkJoQixJQUFJLENBQUNtQixJQURsQyxvQkFDZ0RILFNBRGhEO0FBQUE7QUFBQTtBQUFBLDJHQUM2QmhCLElBQUksQ0FBQ21CLElBRGxDLG9CQUNnREgsU0FEaEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQURGO0FBUUQ7QUFDRjtBQXRCUSxXQUhiO0FBMkJFLG9CQUFVLEVBQUU7QUEzQmQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFMRixlQW9DRSxxRUFBQyw0REFBRDtBQUNFLGlCQUFTLEVBQUMsT0FEWjtBQUVFLFdBQUcsRUFBRUUsbUJBQU8sQ0FBQyx1RkFGZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQXBDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQTBDRSxxRUFBQyx5REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBMUNGO0FBQUEsa0JBREY7QUE4Q0QsQ0FqREQ7O0tBQU1uQixJOztBQW1EU0EsbUVBQWYiLCJmaWxlIjoiLi9zcmMvcGFnZXMvW2Jsb2ddLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCbG9nTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvQmxvZ0xheW91dCdcbmltcG9ydCBnZm0gZnJvbSAncmVtYXJrLWdmbSdcbmltcG9ydCBJbWcgZnJvbSAncmVhY3Qtb3B0aW1pemVkLWltYWdlJ1xuaW1wb3J0IG1hdHRlciBmcm9tICdncmF5LW1hdHRlcidcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBSZWFjdE1hcmtkb3duIGZyb20gJ3JlYWN0LW1hcmtkb3duJ1xuaW1wb3J0IHtHZXRTdGF0aWNQYXRocywgR2V0U3RhdGljUHJvcHN9IGZyb20gJ25leHQnXG5pbXBvcnQge0F1dGhvcn0gZnJvbSAnLi4vY29tcG9uZW50cy9BdXRob3InXG5pbXBvcnQge0Jsb2dEYXRhfSBmcm9tICcuLi90eXBlcydcbmltcG9ydCB7Q29kZUJsb2NrfSBmcm9tICcuLi9jb21wb25lbnRzL0NvZGVCbG9jaydcbmltcG9ydCB7Rm9vdGVyfSBmcm9tICcuLi9jb21wb25lbnRzL0Zvb3RlcidcbmltcG9ydCB7Zm9ybWF0RGF0ZX0gZnJvbSAnLi4vdXRpbHMvZm9ybWF0RGF0ZSdcblxuY29uc3QgQmxvZyA9ICh7ZGF0YSwgY29udGVudH06IEJsb2dEYXRhKSA9PiB7XG4gIGNvbnN0IGZyb250bWF0dGVyID0gZGF0YVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxCbG9nTGF5b3V0IHRpdGxlPXtmcm9udG1hdHRlci50aXRsZX0gZGVzY3JpcHRpb249e2Zyb250bWF0dGVyLmRlc2NyaXB0aW9ufT5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cIm10LTYgbWItMTIgdGV4dC01eGxcIj57ZnJvbnRtYXR0ZXIudGl0bGV9PC9oMT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteS02XCI+XG4gICAgICAgICAgPEF1dGhvciBhdXRob3I9e2Zyb250bWF0dGVyLmF1dGhvcn0gZGF0ZT17Zm9ybWF0RGF0ZShmcm9udG1hdHRlci5kYXRlKX0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFya2Rvd24tYm9keSBtYi0xMlwiPlxuICAgICAgICAgIDxSZWFjdE1hcmtkb3duXG4gICAgICAgICAgICBwbHVnaW5zPXtbZ2ZtXX1cbiAgICAgICAgICAgIHNvdXJjZT17Y29udGVudH1cbiAgICAgICAgICAgIHJlbmRlcmVycz17e1xuICAgICAgICAgICAgICBjb2RlOiBDb2RlQmxvY2ssXG4gICAgICAgICAgICAgIGltYWdlOiAocHJvcHM6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHtzcmMsIGFsdH0gPSBwcm9wc1xuXG4gICAgICAgICAgICAgICAgLy8gSWYgaW1hZ2Ugc291cmNlIGlzIHBvaW50aW5nIHRvIGFuIGV4dGVybmFsIFVSTFxuICAgICAgICAgICAgICAgIGlmICgoc3JjIGFzIHN0cmluZykuaW5jbHVkZXMoJ2h0dHBzOi8vJykpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiA8aW1nIHNyYz17c3JjfSBhbHQ9e2FsdH0gLz5cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgLy8gaW1hZ2Ugc291cmNlIGlzIHBvaW50aW5nIHRvIGEgbG9jYWxseSBob3N0ZWQgaW1hZ2VcbiAgICAgICAgICAgICAgICAgIC8vIE5lZWQgdG8gY29udmVydCB0aGUgaW1hZ2UgcGF0aCBmcm9tIHJlbGF0aXZlIGluIHRoZSBNRCB0byByZWxhdGl2ZSBvZiB0aGlzIGZpbGVcbiAgICAgICAgICAgICAgICAgIC8vIHN0cmlwIC4vYXNzZXRzIGFuZCBzdXJyb3VuZGluZyBxdW90ZXNcbiAgICAgICAgICAgICAgICAgIGNvbnN0IGltYWdlTmFtZSA9IHNyYy5yZXBsYWNlKCcuL2Fzc2V0cycsICcnKS5yZXBsYWNlKC8nL2csICcnKVxuICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgPEltZ1xuICAgICAgICAgICAgICAgICAgICAgIHNyYz17cmVxdWlyZShgLi4vY29udGVudC8ke2RhdGEuc2x1Z30vYXNzZXRzJHtpbWFnZU5hbWV9YCl9XG4gICAgICAgICAgICAgICAgICAgICAgYWx0PXthbHR9XG4gICAgICAgICAgICAgICAgICAgICAgd2VicFxuICAgICAgICAgICAgICAgICAgICAgIHNpemVzPXtbNDAwLCA4MDBdfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBlc2NhcGVIdG1sPXtmYWxzZX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPEltZ1xuICAgICAgICAgIGNsYXNzTmFtZT1cIm1iLTE2XCJcbiAgICAgICAgICBzcmM9e3JlcXVpcmUoYC4uLy4uL3B1YmxpYy9kZWZhdWx0SW1hZ2VzL3NlcGFyYXRvci5wbmdgKX1cbiAgICAgICAgLz5cbiAgICAgIDwvQmxvZ0xheW91dD5cbiAgICAgIDxGb290ZXIgLz5cbiAgICA8Lz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBCbG9nXG5cbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wczogR2V0U3RhdGljUHJvcHMgPSBhc3luYyAoe3BhcmFtc30pID0+IHtcbiAgY29uc3QgYmxvZyA9IHBhcmFtcz8uYmxvZ1xuXG4gIGNvbnN0IGNvbnRlbnQgPSBhd2FpdCBpbXBvcnQoYC4uL2NvbnRlbnQvJHtibG9nfS8ke2Jsb2d9Lm1kYClcbiAgY29uc3QgYmxvZ0RhdGE6IEJsb2dEYXRhID0gbWF0dGVyKGNvbnRlbnQuZGVmYXVsdCkgYXMgYW55XG5cbiAgY29uc3QgZm9ybWF0dGVkQmxvZ0RhdGEgPSB7XG4gICAgLi4uYmxvZ0RhdGEuZGF0YSxcbiAgICAvLyBEYXRlIGZpZWxkIG11c3QgYmUgc2VyaWFsaXphYmxlXG4gICAgZGF0ZTogYmxvZ0RhdGEuZGF0YS5kYXRlLnRvSlNPTigpLFxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgZGF0YTogZm9ybWF0dGVkQmxvZ0RhdGEsXG4gICAgICBjb250ZW50OiBibG9nRGF0YS5jb250ZW50LFxuICAgIH0sXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1BhdGhzOiBHZXRTdGF0aWNQYXRocyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgZnMgPSByZXF1aXJlKCdmcycpXG5cbiAgLy8gQ2FsbCBbYmxvZ10udHN4IGZvciBlYWNoIGJsb2cgZmlsZSBpbiB0aGUgY29udGVudCBkaXJlY3RvcnlcblxuICAvLyBHZXQgYXJyYXkgb2YgZmlsZW5hbWVzIGluIGNvbnRlbnQgZGlyXG4gIGNvbnN0IGZpbGVzOiBzdHJpbmdbXSA9IGZzLnJlYWRkaXJTeW5jKGAke3Byb2Nlc3MuY3dkKCl9L3NyYy9jb250ZW50YCwgJ3V0Zi04JylcblxuICBjb25zdCBibG9nRGlyTmFtZXMgPSBmaWxlcy5maWx0ZXIoYmxvZ0Rpck5hbWUgPT4gYmxvZ0Rpck5hbWUpXG5cbiAgY29uc3QgcGF0aHMgPSBibG9nRGlyTmFtZXMubWFwKGJsb2dEaXIgPT4gKHtcbiAgICBwYXJhbXM6IHtibG9nOiBibG9nRGlyfSxcbiAgfSkpXG5cbiAgcmV0dXJuIHtcbiAgICBwYXRocyxcbiAgICBmYWxsYmFjazogZmFsc2UsXG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/[blog].tsx\n");

/***/ })

})
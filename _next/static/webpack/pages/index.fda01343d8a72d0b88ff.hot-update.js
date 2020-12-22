webpackHotUpdate_N_E("pages/index",{

/***/ "./src/utils/blogs.ts":
/*!****************************!*\
  !*** ./src/utils/blogs.ts ***!
  \****************************/
/*! exports provided: getAllBlogsFrontmatter, sortBlogFrontmatterByNewestDate, sortBlogsByCategory, getRawBlogsContent, formatBlogTags */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(process, module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getAllBlogsFrontmatter\", function() { return getAllBlogsFrontmatter; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"sortBlogFrontmatterByNewestDate\", function() { return sortBlogFrontmatterByNewestDate; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"sortBlogsByCategory\", function() { return sortBlogsByCategory; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getRawBlogsContent\", function() { return getRawBlogsContent; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"formatBlogTags\", function() { return formatBlogTags; });\n/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gray-matter */ \"./node_modules/gray-matter/index.js\");\n/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(gray_matter__WEBPACK_IMPORTED_MODULE_0__);\n\nvar getAllBlogsFrontmatter = function getAllBlogsFrontmatter(rawBlogsContent) {\n  var blogs = rawBlogsContent.map(function (blog) {\n    return gray_matter__WEBPACK_IMPORTED_MODULE_0___default()(blog);\n  });\n  var allBlogsFrontmatter = blogs.map(function (blog) {\n    return blog.data;\n  }); // sort the blogs frontmatter from newest to oldest\n\n  var sortedBlogFrontmatter = sortBlogFrontmatterByNewestDate(allBlogsFrontmatter);\n\n  var _sortBlogsByCategory = sortBlogsByCategory(sortedBlogFrontmatter),\n      customerStoriesBlogs = _sortBlogsByCategory.customerStoriesBlogs,\n      developerBlogs = _sortBlogsByCategory.developerBlogs,\n      thoughtleadershipBlogs = _sortBlogsByCategory.thoughtleadershipBlogs,\n      eventsBlogs = _sortBlogsByCategory.eventsBlogs,\n      productBlogs = _sortBlogsByCategory.productBlogs,\n      announcementBlogs = _sortBlogsByCategory.announcementBlogs,\n      featuredBlogs = _sortBlogsByCategory.featuredBlogs;\n\n  return {\n    allBlogs: sortedBlogFrontmatter,\n    customerStoriesBlogs: customerStoriesBlogs,\n    developerBlogs: developerBlogs,\n    thoughtleadershipBlogs: thoughtleadershipBlogs,\n    eventsBlogs: eventsBlogs,\n    productBlogs: productBlogs,\n    announcementBlogs: announcementBlogs,\n    featuredBlogs: featuredBlogs\n  };\n};\nvar sortBlogFrontmatterByNewestDate = function sortBlogFrontmatterByNewestDate(blogs) {\n  blogs.sort(function (a, b) {\n    var dateA = new Date(a.date);\n    var dateB = new Date(b.date);\n    return dateB - dateA;\n  });\n  return blogs;\n};\nvar sortBlogsByCategory = function sortBlogsByCategory(sortedBlogFrontmatter) {\n  var blogsByCategories = {\n    customerstories: [],\n    developer: [],\n    thoughtleadership: [],\n    events: [],\n    product: [],\n    announcement: [],\n    featured: []\n  };\n  sortedBlogFrontmatter.forEach(function (blogFrontmatter) {\n    // Category string manipulation\n    // Remove spaces, make lowercase and split categories by comma\n    var noSpaceCategories = blogFrontmatter.categories.replace(/ /g, '').toLowerCase();\n    var categories = noSpaceCategories.split(','); // push the blog into each categories array\n\n    categories.forEach(function (category) {\n      ;\n      blogsByCategories[category].push(blogFrontmatter);\n      return;\n    });\n  });\n  return {\n    customerStoriesBlogs: blogsByCategories.customerstories,\n    developerBlogs: blogsByCategories.developer,\n    thoughtleadershipBlogs: blogsByCategories.thoughtleadership,\n    eventsBlogs: blogsByCategories.events,\n    productBlogs: blogsByCategories.product,\n    announcementBlogs: blogsByCategories.announcement,\n    featuredBlogs: blogsByCategories.featured\n  };\n};\nvar getRawBlogsContent = function getRawBlogsContent(fs) {\n  // Get array of filenames in content dir\n  var blogs = fs.readdirSync(\"\".concat(process.cwd(), \"/src/content\"), 'utf-8');\n  return blogs.map(function (blog) {\n    var path = \"\".concat(process.cwd(), \"/src/content/\").concat(blog, \"/\").concat(blog, \".md\"); // get the content of the blog post\n\n    var rawContent = fs.readFileSync(path, {\n      encoding: 'utf-8'\n    });\n    return rawContent;\n  });\n};\nvar formatBlogTags = function formatBlogTags(tags) {\n  if ((tags === null || tags === void 0 ? void 0 : tags.length) > 0) {\n    var noSpaceTags = tags.replace(/ /g, '').toLowerCase();\n    return noSpaceTags.split(',');\n  }\n};\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/process/browser.js */ \"./node_modules/process/browser.js\"), __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3V0aWxzL2Jsb2dzLnRzPzg3Y2EiXSwibmFtZXMiOlsiZ2V0QWxsQmxvZ3NGcm9udG1hdHRlciIsInJhd0Jsb2dzQ29udGVudCIsImJsb2dzIiwibWFwIiwiYmxvZyIsIm1hdHRlciIsImFsbEJsb2dzRnJvbnRtYXR0ZXIiLCJkYXRhIiwic29ydGVkQmxvZ0Zyb250bWF0dGVyIiwic29ydEJsb2dGcm9udG1hdHRlckJ5TmV3ZXN0RGF0ZSIsInNvcnRCbG9nc0J5Q2F0ZWdvcnkiLCJjdXN0b21lclN0b3JpZXNCbG9ncyIsImRldmVsb3BlckJsb2dzIiwidGhvdWdodGxlYWRlcnNoaXBCbG9ncyIsImV2ZW50c0Jsb2dzIiwicHJvZHVjdEJsb2dzIiwiYW5ub3VuY2VtZW50QmxvZ3MiLCJmZWF0dXJlZEJsb2dzIiwiYWxsQmxvZ3MiLCJzb3J0IiwiYSIsImIiLCJkYXRlQSIsIkRhdGUiLCJkYXRlIiwiZGF0ZUIiLCJibG9nc0J5Q2F0ZWdvcmllcyIsImN1c3RvbWVyc3RvcmllcyIsImRldmVsb3BlciIsInRob3VnaHRsZWFkZXJzaGlwIiwiZXZlbnRzIiwicHJvZHVjdCIsImFubm91bmNlbWVudCIsImZlYXR1cmVkIiwiZm9yRWFjaCIsImJsb2dGcm9udG1hdHRlciIsIm5vU3BhY2VDYXRlZ29yaWVzIiwiY2F0ZWdvcmllcyIsInJlcGxhY2UiLCJ0b0xvd2VyQ2FzZSIsInNwbGl0IiwiY2F0ZWdvcnkiLCJwdXNoIiwiZ2V0UmF3QmxvZ3NDb250ZW50IiwiZnMiLCJyZWFkZGlyU3luYyIsInByb2Nlc3MiLCJjd2QiLCJwYXRoIiwicmF3Q29udGVudCIsInJlYWRGaWxlU3luYyIsImVuY29kaW5nIiwiZm9ybWF0QmxvZ1RhZ3MiLCJ0YWdzIiwibGVuZ3RoIiwibm9TcGFjZVRhZ3MiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlPLElBQU1BLHNCQUFzQixHQUFH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L2Jsb2dzLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1hdHRlciBmcm9tICdncmF5LW1hdHRlcidcbmltcG9ydCB7QmxvZ0RhdGEsIENhdGVnb3J5fSBmcm9tICcuLi90eXBlcydcbmltcG9ydCB7QmxvZ0Zyb250bWF0dGVyfSBmcm9tICcuLi90eXBlcydcblxuZXhwb3J0IGNvbnN0IGdldEFsbEJsb2dzRnJvbnRtYXR0ZXIgPSAocmF3QmxvZ3NDb250ZW50OiBzdHJpbmdbXSkgPT4ge1xuICBjb25zdCBibG9nczogQmxvZ0RhdGFbXSA9IHJhd0Jsb2dzQ29udGVudC5tYXAoYmxvZyA9PiBtYXR0ZXIoYmxvZykpIGFzIGFueVxuICBjb25zdCBhbGxCbG9nc0Zyb250bWF0dGVyID0gYmxvZ3MubWFwKGJsb2cgPT4gYmxvZy5kYXRhKVxuXG4gIC8vIHNvcnQgdGhlIGJsb2dzIGZyb250bWF0dGVyIGZyb20gbmV3ZXN0IHRvIG9sZGVzdFxuICBjb25zdCBzb3J0ZWRCbG9nRnJvbnRtYXR0ZXIgPSBzb3J0QmxvZ0Zyb250bWF0dGVyQnlOZXdlc3REYXRlKGFsbEJsb2dzRnJvbnRtYXR0ZXIpXG5cbiAgY29uc3Qge1xuICAgIGN1c3RvbWVyU3Rvcmllc0Jsb2dzLFxuICAgIGRldmVsb3BlckJsb2dzLFxuICAgIHRob3VnaHRsZWFkZXJzaGlwQmxvZ3MsXG4gICAgZXZlbnRzQmxvZ3MsXG4gICAgcHJvZHVjdEJsb2dzLFxuICAgIGFubm91bmNlbWVudEJsb2dzLFxuICAgIGZlYXR1cmVkQmxvZ3MsXG4gIH0gPSBzb3J0QmxvZ3NCeUNhdGVnb3J5KHNvcnRlZEJsb2dGcm9udG1hdHRlcilcblxuICByZXR1cm4ge1xuICAgIGFsbEJsb2dzOiBzb3J0ZWRCbG9nRnJvbnRtYXR0ZXIsXG4gICAgY3VzdG9tZXJTdG9yaWVzQmxvZ3MsXG4gICAgZGV2ZWxvcGVyQmxvZ3MsXG4gICAgdGhvdWdodGxlYWRlcnNoaXBCbG9ncyxcbiAgICBldmVudHNCbG9ncyxcbiAgICBwcm9kdWN0QmxvZ3MsXG4gICAgYW5ub3VuY2VtZW50QmxvZ3MsXG4gICAgZmVhdHVyZWRCbG9ncyxcbiAgfVxufVxuXG5leHBvcnQgY29uc3Qgc29ydEJsb2dGcm9udG1hdHRlckJ5TmV3ZXN0RGF0ZSA9IChibG9nczogQmxvZ0Zyb250bWF0dGVyW10pID0+IHtcbiAgYmxvZ3Muc29ydChmdW5jdGlvbiAoYTogQmxvZ0Zyb250bWF0dGVyLCBiOiBCbG9nRnJvbnRtYXR0ZXIpIHtcbiAgICBjb25zdCBkYXRlQSA9IG5ldyBEYXRlKGEuZGF0ZSkgYXMgYW55XG4gICAgY29uc3QgZGF0ZUIgPSBuZXcgRGF0ZShiLmRhdGUpIGFzIGFueVxuICAgIHJldHVybiBkYXRlQiAtIGRhdGVBXG4gIH0pXG5cbiAgcmV0dXJuIGJsb2dzXG59XG5cbmV4cG9ydCBjb25zdCBzb3J0QmxvZ3NCeUNhdGVnb3J5ID0gKHNvcnRlZEJsb2dGcm9udG1hdHRlcjogQmxvZ0Zyb250bWF0dGVyW10pID0+IHtcbiAgY29uc3QgYmxvZ3NCeUNhdGVnb3JpZXM6IHtba2V5IGluIENhdGVnb3J5XTogQmxvZ0Zyb250bWF0dGVyW119ID0ge1xuICAgIGN1c3RvbWVyc3RvcmllczogW10sXG4gICAgZGV2ZWxvcGVyOiBbXSxcbiAgICB0aG91Z2h0bGVhZGVyc2hpcDogW10sXG4gICAgZXZlbnRzOiBbXSxcbiAgICBwcm9kdWN0OiBbXSxcbiAgICBhbm5vdW5jZW1lbnQ6IFtdLFxuICAgIGZlYXR1cmVkOiBbXSxcbiAgfVxuXG4gIHNvcnRlZEJsb2dGcm9udG1hdHRlci5mb3JFYWNoKGJsb2dGcm9udG1hdHRlciA9PiB7XG4gICAgLy8gQ2F0ZWdvcnkgc3RyaW5nIG1hbmlwdWxhdGlvblxuICAgIC8vIFJlbW92ZSBzcGFjZXMsIG1ha2UgbG93ZXJjYXNlIGFuZCBzcGxpdCBjYXRlZ29yaWVzIGJ5IGNvbW1hXG4gICAgY29uc3Qgbm9TcGFjZUNhdGVnb3JpZXMgPSBibG9nRnJvbnRtYXR0ZXIuY2F0ZWdvcmllcy5yZXBsYWNlKC8gL2csICcnKS50b0xvd2VyQ2FzZSgpXG4gICAgY29uc3QgY2F0ZWdvcmllcyA9IG5vU3BhY2VDYXRlZ29yaWVzLnNwbGl0KCcsJylcblxuICAgIC8vIHB1c2ggdGhlIGJsb2cgaW50byBlYWNoIGNhdGVnb3JpZXMgYXJyYXlcbiAgICBjYXRlZ29yaWVzLmZvckVhY2goY2F0ZWdvcnkgPT4ge1xuICAgICAgOyhibG9nc0J5Q2F0ZWdvcmllcyBhcyBhbnkpW2NhdGVnb3J5XS5wdXNoKGJsb2dGcm9udG1hdHRlcilcbiAgICAgIHJldHVyblxuICAgIH0pXG4gIH0pXG5cbiAgcmV0dXJuIHtcbiAgICBjdXN0b21lclN0b3JpZXNCbG9nczogYmxvZ3NCeUNhdGVnb3JpZXMuY3VzdG9tZXJzdG9yaWVzLFxuICAgIGRldmVsb3BlckJsb2dzOiBibG9nc0J5Q2F0ZWdvcmllcy5kZXZlbG9wZXIsXG4gICAgdGhvdWdodGxlYWRlcnNoaXBCbG9nczogYmxvZ3NCeUNhdGVnb3JpZXMudGhvdWdodGxlYWRlcnNoaXAsXG4gICAgZXZlbnRzQmxvZ3M6IGJsb2dzQnlDYXRlZ29yaWVzLmV2ZW50cyxcbiAgICBwcm9kdWN0QmxvZ3M6IGJsb2dzQnlDYXRlZ29yaWVzLnByb2R1Y3QsXG4gICAgYW5ub3VuY2VtZW50QmxvZ3M6IGJsb2dzQnlDYXRlZ29yaWVzLmFubm91bmNlbWVudCxcbiAgICBmZWF0dXJlZEJsb2dzOiBibG9nc0J5Q2F0ZWdvcmllcy5mZWF0dXJlZCxcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgZ2V0UmF3QmxvZ3NDb250ZW50ID0gKGZzOiBhbnkpID0+IHtcbiAgLy8gR2V0IGFycmF5IG9mIGZpbGVuYW1lcyBpbiBjb250ZW50IGRpclxuICBjb25zdCBibG9nczogc3RyaW5nW10gPSBmcy5yZWFkZGlyU3luYyhgJHtwcm9jZXNzLmN3ZCgpfS9zcmMvY29udGVudGAsICd1dGYtOCcpXG5cbiAgcmV0dXJuIGJsb2dzLm1hcChibG9nID0+IHtcbiAgICBjb25zdCBwYXRoID0gYCR7cHJvY2Vzcy5jd2QoKX0vc3JjL2NvbnRlbnQvJHtibG9nfS8ke2Jsb2d9Lm1kYFxuICAgIC8vIGdldCB0aGUgY29udGVudCBvZiB0aGUgYmxvZyBwb3N0XG4gICAgY29uc3QgcmF3Q29udGVudDogc3RyaW5nID0gZnMucmVhZEZpbGVTeW5jKHBhdGgsIHtcbiAgICAgIGVuY29kaW5nOiAndXRmLTgnLFxuICAgIH0pXG5cbiAgICByZXR1cm4gcmF3Q29udGVudFxuICB9KVxufVxuXG5leHBvcnQgY29uc3QgZm9ybWF0QmxvZ1RhZ3MgPSAodGFnczogc3RyaW5nKSA9PiB7XG4gIGlmICh0YWdzPy5sZW5ndGggPiAwKSB7XG4gICAgY29uc3Qgbm9TcGFjZVRhZ3MgPSB0YWdzLnJlcGxhY2UoLyAvZywgJycpLnRvTG93ZXJDYXNlKClcbiAgICByZXR1cm4gbm9TcGFjZVRhZ3Muc3BsaXQoJywnKVxuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/utils/blogs.ts\n");

/***/ })

})
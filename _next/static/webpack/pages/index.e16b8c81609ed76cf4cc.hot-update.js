webpackHotUpdate_N_E("pages/index",{

/***/ "./src/utils/blogs.ts":
/*!****************************!*\
  !*** ./src/utils/blogs.ts ***!
  \****************************/
/*! exports provided: getAllBlogsFrontmatter, sortBlogFrontmatterByNewestDate, sortBlogsByCategory, getRawBlogsContent, formatBlogTags, calculateReadingTime */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(process, module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getAllBlogsFrontmatter\", function() { return getAllBlogsFrontmatter; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"sortBlogFrontmatterByNewestDate\", function() { return sortBlogFrontmatterByNewestDate; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"sortBlogsByCategory\", function() { return sortBlogsByCategory; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getRawBlogsContent\", function() { return getRawBlogsContent; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"formatBlogTags\", function() { return formatBlogTags; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"calculateReadingTime\", function() { return calculateReadingTime; });\n/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gray-matter */ \"./node_modules/gray-matter/index.js\");\n/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(gray_matter__WEBPACK_IMPORTED_MODULE_0__);\n\nvar getAllBlogsFrontmatter = function getAllBlogsFrontmatter(rawBlogsContent) {\n  var blogs = rawBlogsContent.map(function (blog) {\n    return gray_matter__WEBPACK_IMPORTED_MODULE_0___default()(blog);\n  });\n  var allBlogsFrontmatter = blogs.map(function (blog) {\n    return blog.data;\n  }); // sort the blogs frontmatter from newest to oldest\n\n  var sortedBlogFrontmatter = sortBlogFrontmatterByNewestDate(allBlogsFrontmatter);\n\n  var _sortBlogsByCategory = sortBlogsByCategory(sortedBlogFrontmatter),\n      customerStoriesBlogs = _sortBlogsByCategory.customerStoriesBlogs,\n      developerBlogs = _sortBlogsByCategory.developerBlogs,\n      thoughtleadershipBlogs = _sortBlogsByCategory.thoughtleadershipBlogs,\n      eventsBlogs = _sortBlogsByCategory.eventsBlogs,\n      productBlogs = _sortBlogsByCategory.productBlogs,\n      announcementBlogs = _sortBlogsByCategory.announcementBlogs,\n      featuredBlogs = _sortBlogsByCategory.featuredBlogs;\n\n  return {\n    allBlogs: sortedBlogFrontmatter,\n    customerStoriesBlogs: customerStoriesBlogs,\n    developerBlogs: developerBlogs,\n    thoughtleadershipBlogs: thoughtleadershipBlogs,\n    eventsBlogs: eventsBlogs,\n    productBlogs: productBlogs,\n    announcementBlogs: announcementBlogs,\n    featuredBlogs: featuredBlogs\n  };\n};\nvar sortBlogFrontmatterByNewestDate = function sortBlogFrontmatterByNewestDate(blogs) {\n  blogs.sort(function (a, b) {\n    var dateA = new Date(a.date);\n    var dateB = new Date(b.date);\n    return dateB - dateA;\n  });\n  return blogs;\n};\nvar sortBlogsByCategory = function sortBlogsByCategory(sortedBlogFrontmatter) {\n  var blogsByCategories = {\n    customerstories: [],\n    developer: [],\n    thoughtleadership: [],\n    events: [],\n    product: [],\n    announcement: [],\n    featured: []\n  };\n  sortedBlogFrontmatter.forEach(function (blogFrontmatter) {\n    // Category string manipulation\n    // Remove spaces, make lowercase and split categories by comma\n    var noSpaceCategories = blogFrontmatter.categories.replace(/ /g, '').toLowerCase();\n    var categories = noSpaceCategories.split(','); // push the blog into each categories array\n\n    categories.forEach(function (category) {\n      ;\n      blogsByCategories[category].push(blogFrontmatter);\n      return;\n    });\n  });\n  return {\n    customerStoriesBlogs: blogsByCategories.customerstories,\n    developerBlogs: blogsByCategories.developer,\n    thoughtleadershipBlogs: blogsByCategories.thoughtleadership,\n    eventsBlogs: blogsByCategories.events,\n    productBlogs: blogsByCategories.product,\n    announcementBlogs: blogsByCategories.announcement,\n    featuredBlogs: blogsByCategories.featured\n  };\n};\nvar getRawBlogsContent = function getRawBlogsContent(fs) {\n  // Get array of filenames in content dir\n  var blogs = fs.readdirSync(\"\".concat(process.cwd(), \"/src/content\"), 'utf-8');\n  return blogs.map(function (blog) {\n    var path = \"\".concat(process.cwd(), \"/src/content/\").concat(blog, \"/\").concat(blog, \".md\"); // get the content of the blog post\n\n    var rawContent = fs.readFileSync(path, {\n      encoding: 'utf-8'\n    });\n    return rawContent;\n  });\n};\nvar formatBlogTags = function formatBlogTags(tagString) {\n  if ((tagString === null || tagString === void 0 ? void 0 : tagString.length) > 0) {\n    console.log('Tags have length');\n    var noSpaceTags = tagString.replace(/ /g, '').toLowerCase();\n    var tags = noSpaceTags.split(',');\n    var hashSymbolTags = tags.map(function (tag) {\n      return \"#\".concat(tag);\n    });\n    return hashSymbolTags.join(' ');\n  }\n};\nvar calculateReadingTime = function calculateReadingTime(str) {\n  var words = [];\n  str.replace(/[A-Z]+/gi, function (m) {\n    return words.push(m);\n  });\n  return words.length / 250;\n};\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/process/browser.js */ \"./node_modules/process/browser.js\"), __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3V0aWxzL2Jsb2dzLnRzPzg3Y2EiXSwibmFtZXMiOlsiZ2V0QWxsQmxvZ3NGcm9udG1hdHRlciIsInJhd0Jsb2dzQ29udGVudCIsImJsb2dzIiwibWFwIiwiYmxvZyIsIm1hdHRlciIsImFsbEJsb2dzRnJvbnRtYXR0ZXIiLCJkYXRhIiwic29ydGVkQmxvZ0Zyb250bWF0dGVyIiwic29ydEJsb2dGcm9udG1hdHRlckJ5TmV3ZXN0RGF0ZSIsInNvcnRCbG9nc0J5Q2F0ZWdvcnkiLCJjdXN0b21lclN0b3JpZXNCbG9ncyIsImRldmVsb3BlckJsb2dzIiwidGhvdWdodGxlYWRlcnNoaXBCbG9ncyIsImV2ZW50c0Jsb2dzIiwicHJvZHVjdEJsb2dzIiwiYW5ub3VuY2VtZW50QmxvZ3MiLCJmZWF0dXJlZEJsb2dzIiwiYWxsQmxvZ3MiLCJzb3J0IiwiYSIsImIiLCJkYXRlQSIsIkRhdGUiLCJkYXRlIiwiZGF0ZUIiLCJibG9nc0J5Q2F0ZWdvcmllcyIsImN1c3RvbWVyc3RvcmllcyIsImRldmVsb3BlciIsInRob3VnaHRsZWFkZXJzaGlwIiwiZXZlbnRzIiwicHJvZHVjdCIsImFubm91bmNlbWVudCIsImZlYXR1cmVkIiwiZm9yRWFjaCIsImJsb2dGcm9udG1hdHRlciIsIm5vU3BhY2VDYXRlZ29yaWVzIiwiY2F0ZWdvcmllcyIsInJlcGxhY2UiLCJ0b0xvd2VyQ2FzZSIsInNwbGl0IiwiY2F0ZWdvcnkiLCJwdXNoIiwiZ2V0UmF3QmxvZ3NDb250ZW50IiwiZnMiLCJyZWFkZGlyU3luYyIsInByb2Nlc3MiLCJjd2QiLCJwYXRoIiwicmF3Q29udGVudCIsInJlYWRGaWxlU3luYyIsImVuY29kaW5nIiwiZm9ybWF0QmxvZ1RhZ3MiLCJ0YWdTdHJpbmciLCJsZW5ndGgiLCJjb25zb2xlIiwibG9nIiwibm9TcGFjZVRhZ3MiLCJ0YWdzIiwiaGFzaFN5bWJvbFRhZ3MiLCJ0YWciLCJqb2luIiwiY2FsY3VsYXRlUmVhZGluZ1RpbWUi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LFNBQVMsQ0FBQ2YsT0FBVixDQUFrQixJQUFsQixFQUF3QixFQUF4QixFQUE0QkMsV0FBNUIsRUFBcEI7QUFDQSxRQUFNbUIsSUFBSSxHQUFHRCxXQUFXLENBQUNqQixLQUFaLENBQWtCLEdBQWxCLENBQWI7QUFDQSxRQUFNbUIsY0FBYyxHQUFHRCxJQUFJLENBQUN2RCxHQUFMLENBQVMsVUFBQXlELEdBQUc7QUFBQSx3QkFBUUEsR0FBUjtBQUFBLEtBQVosQ0FBdkI7QUFDQSxXQUFPRCxjQUFjLENBQUNFLElBQWYsQ0FBb0IsR0FBcEIsQ0FBUDtBQUNEO0FBQ0YsQ0FSTTtBQVVBLElBQU1DLG9CQUFvQixHQUFHLFNBQXZCQSxvQkFBdUIsQ0FBQ0MsR0FBRCxFQUFpQjtBQUNuRCxNQUFNQyxLQUFLLEdBQUcsRUFBZDtBQUNBRCxLQUFHLENBQUN6QixPQUFKLENBQVksVUFBWixFQUF3QixVQUFDMkIsQ0FBRDtBQUFBLFdBQVlELEtBQUssQ0FBQ3RCLElBQU4sQ0FBV3VCLENBQVgsQ0FBWjtBQUFBLEdBQXhCO0FBQ0EsU0FBT0QsS0FBSyxDQUFDVixNQUFOLEdBQWUsR0FBdEI7QUFDRCxDQUpNIiwiZmlsZSI6Ii4vc3JjL3V0aWxzL2Jsb2dzLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1hdHRlciBmcm9tICdncmF5LW1hdHRlcidcbmltcG9ydCB7QmxvZ0RhdGEsIENhdGVnb3J5fSBmcm9tICcuLi90eXBlcydcbmltcG9ydCB7QmxvZ0Zyb250bWF0dGVyfSBmcm9tICcuLi90eXBlcydcblxuZXhwb3J0IGNvbnN0IGdldEFsbEJsb2dzRnJvbnRtYXR0ZXIgPSAocmF3QmxvZ3NDb250ZW50OiBzdHJpbmdbXSkgPT4ge1xuICBjb25zdCBibG9nczogQmxvZ0RhdGFbXSA9IHJhd0Jsb2dzQ29udGVudC5tYXAoYmxvZyA9PiBtYXR0ZXIoYmxvZykpIGFzIGFueVxuICBjb25zdCBhbGxCbG9nc0Zyb250bWF0dGVyID0gYmxvZ3MubWFwKGJsb2cgPT4gYmxvZy5kYXRhKVxuXG4gIC8vIHNvcnQgdGhlIGJsb2dzIGZyb250bWF0dGVyIGZyb20gbmV3ZXN0IHRvIG9sZGVzdFxuICBjb25zdCBzb3J0ZWRCbG9nRnJvbnRtYXR0ZXIgPSBzb3J0QmxvZ0Zyb250bWF0dGVyQnlOZXdlc3REYXRlKGFsbEJsb2dzRnJvbnRtYXR0ZXIpXG5cbiAgY29uc3Qge1xuICAgIGN1c3RvbWVyU3Rvcmllc0Jsb2dzLFxuICAgIGRldmVsb3BlckJsb2dzLFxuICAgIHRob3VnaHRsZWFkZXJzaGlwQmxvZ3MsXG4gICAgZXZlbnRzQmxvZ3MsXG4gICAgcHJvZHVjdEJsb2dzLFxuICAgIGFubm91bmNlbWVudEJsb2dzLFxuICAgIGZlYXR1cmVkQmxvZ3MsXG4gIH0gPSBzb3J0QmxvZ3NCeUNhdGVnb3J5KHNvcnRlZEJsb2dGcm9udG1hdHRlcilcblxuICByZXR1cm4ge1xuICAgIGFsbEJsb2dzOiBzb3J0ZWRCbG9nRnJvbnRtYXR0ZXIsXG4gICAgY3VzdG9tZXJTdG9yaWVzQmxvZ3MsXG4gICAgZGV2ZWxvcGVyQmxvZ3MsXG4gICAgdGhvdWdodGxlYWRlcnNoaXBCbG9ncyxcbiAgICBldmVudHNCbG9ncyxcbiAgICBwcm9kdWN0QmxvZ3MsXG4gICAgYW5ub3VuY2VtZW50QmxvZ3MsXG4gICAgZmVhdHVyZWRCbG9ncyxcbiAgfVxufVxuXG5leHBvcnQgY29uc3Qgc29ydEJsb2dGcm9udG1hdHRlckJ5TmV3ZXN0RGF0ZSA9IChibG9nczogQmxvZ0Zyb250bWF0dGVyW10pID0+IHtcbiAgYmxvZ3Muc29ydChmdW5jdGlvbiAoYTogQmxvZ0Zyb250bWF0dGVyLCBiOiBCbG9nRnJvbnRtYXR0ZXIpIHtcbiAgICBjb25zdCBkYXRlQSA9IG5ldyBEYXRlKGEuZGF0ZSkgYXMgYW55XG4gICAgY29uc3QgZGF0ZUIgPSBuZXcgRGF0ZShiLmRhdGUpIGFzIGFueVxuICAgIHJldHVybiBkYXRlQiAtIGRhdGVBXG4gIH0pXG5cbiAgcmV0dXJuIGJsb2dzXG59XG5cbmV4cG9ydCBjb25zdCBzb3J0QmxvZ3NCeUNhdGVnb3J5ID0gKHNvcnRlZEJsb2dGcm9udG1hdHRlcjogQmxvZ0Zyb250bWF0dGVyW10pID0+IHtcbiAgY29uc3QgYmxvZ3NCeUNhdGVnb3JpZXM6IHtba2V5IGluIENhdGVnb3J5XTogQmxvZ0Zyb250bWF0dGVyW119ID0ge1xuICAgIGN1c3RvbWVyc3RvcmllczogW10sXG4gICAgZGV2ZWxvcGVyOiBbXSxcbiAgICB0aG91Z2h0bGVhZGVyc2hpcDogW10sXG4gICAgZXZlbnRzOiBbXSxcbiAgICBwcm9kdWN0OiBbXSxcbiAgICBhbm5vdW5jZW1lbnQ6IFtdLFxuICAgIGZlYXR1cmVkOiBbXSxcbiAgfVxuXG4gIHNvcnRlZEJsb2dGcm9udG1hdHRlci5mb3JFYWNoKGJsb2dGcm9udG1hdHRlciA9PiB7XG4gICAgLy8gQ2F0ZWdvcnkgc3RyaW5nIG1hbmlwdWxhdGlvblxuICAgIC8vIFJlbW92ZSBzcGFjZXMsIG1ha2UgbG93ZXJjYXNlIGFuZCBzcGxpdCBjYXRlZ29yaWVzIGJ5IGNvbW1hXG4gICAgY29uc3Qgbm9TcGFjZUNhdGVnb3JpZXMgPSBibG9nRnJvbnRtYXR0ZXIuY2F0ZWdvcmllcy5yZXBsYWNlKC8gL2csICcnKS50b0xvd2VyQ2FzZSgpXG4gICAgY29uc3QgY2F0ZWdvcmllcyA9IG5vU3BhY2VDYXRlZ29yaWVzLnNwbGl0KCcsJylcblxuICAgIC8vIHB1c2ggdGhlIGJsb2cgaW50byBlYWNoIGNhdGVnb3JpZXMgYXJyYXlcbiAgICBjYXRlZ29yaWVzLmZvckVhY2goY2F0ZWdvcnkgPT4ge1xuICAgICAgOyhibG9nc0J5Q2F0ZWdvcmllcyBhcyBhbnkpW2NhdGVnb3J5XS5wdXNoKGJsb2dGcm9udG1hdHRlcilcbiAgICAgIHJldHVyblxuICAgIH0pXG4gIH0pXG5cbiAgcmV0dXJuIHtcbiAgICBjdXN0b21lclN0b3JpZXNCbG9nczogYmxvZ3NCeUNhdGVnb3JpZXMuY3VzdG9tZXJzdG9yaWVzLFxuICAgIGRldmVsb3BlckJsb2dzOiBibG9nc0J5Q2F0ZWdvcmllcy5kZXZlbG9wZXIsXG4gICAgdGhvdWdodGxlYWRlcnNoaXBCbG9nczogYmxvZ3NCeUNhdGVnb3JpZXMudGhvdWdodGxlYWRlcnNoaXAsXG4gICAgZXZlbnRzQmxvZ3M6IGJsb2dzQnlDYXRlZ29yaWVzLmV2ZW50cyxcbiAgICBwcm9kdWN0QmxvZ3M6IGJsb2dzQnlDYXRlZ29yaWVzLnByb2R1Y3QsXG4gICAgYW5ub3VuY2VtZW50QmxvZ3M6IGJsb2dzQnlDYXRlZ29yaWVzLmFubm91bmNlbWVudCxcbiAgICBmZWF0dXJlZEJsb2dzOiBibG9nc0J5Q2F0ZWdvcmllcy5mZWF0dXJlZCxcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgZ2V0UmF3QmxvZ3NDb250ZW50ID0gKGZzOiBhbnkpID0+IHtcbiAgLy8gR2V0IGFycmF5IG9mIGZpbGVuYW1lcyBpbiBjb250ZW50IGRpclxuICBjb25zdCBibG9nczogc3RyaW5nW10gPSBmcy5yZWFkZGlyU3luYyhgJHtwcm9jZXNzLmN3ZCgpfS9zcmMvY29udGVudGAsICd1dGYtOCcpXG5cbiAgcmV0dXJuIGJsb2dzLm1hcChibG9nID0+IHtcbiAgICBjb25zdCBwYXRoID0gYCR7cHJvY2Vzcy5jd2QoKX0vc3JjL2NvbnRlbnQvJHtibG9nfS8ke2Jsb2d9Lm1kYFxuICAgIC8vIGdldCB0aGUgY29udGVudCBvZiB0aGUgYmxvZyBwb3N0XG4gICAgY29uc3QgcmF3Q29udGVudDogc3RyaW5nID0gZnMucmVhZEZpbGVTeW5jKHBhdGgsIHtcbiAgICAgIGVuY29kaW5nOiAndXRmLTgnLFxuICAgIH0pXG5cbiAgICByZXR1cm4gcmF3Q29udGVudFxuICB9KVxufVxuXG5leHBvcnQgY29uc3QgZm9ybWF0QmxvZ1RhZ3MgPSAodGFnU3RyaW5nOiBzdHJpbmcpID0+IHtcbiAgaWYgKHRhZ1N0cmluZz8ubGVuZ3RoID4gMCkge1xuICAgIGNvbnNvbGUubG9nKCdUYWdzIGhhdmUgbGVuZ3RoJylcbiAgICBjb25zdCBub1NwYWNlVGFncyA9IHRhZ1N0cmluZy5yZXBsYWNlKC8gL2csICcnKS50b0xvd2VyQ2FzZSgpXG4gICAgY29uc3QgdGFncyA9IG5vU3BhY2VUYWdzLnNwbGl0KCcsJylcbiAgICBjb25zdCBoYXNoU3ltYm9sVGFncyA9IHRhZ3MubWFwKHRhZyA9PiBgIyR7dGFnfWApXG4gICAgcmV0dXJuIGhhc2hTeW1ib2xUYWdzLmpvaW4oJyAnKVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBjYWxjdWxhdGVSZWFkaW5nVGltZSA9IChzdHI6IHN0cmluZykgPT4ge1xuICBjb25zdCB3b3JkcyA9IFtdXG4gIHN0ci5yZXBsYWNlKC9bQS1aXSsvZ2ksIChtOiBhbnkpID0+IHdvcmRzLnB1c2gobSkgYXMgYW55KVxuICByZXR1cm4gd29yZHMubGVuZ3RoIC8gMjUwXG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/utils/blogs.ts\n");

/***/ })

})
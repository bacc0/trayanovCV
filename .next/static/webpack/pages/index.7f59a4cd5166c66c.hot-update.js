"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_HomePage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_components/HomePage */ \"./_components/HomePage.js\");\n/* harmony import */ var _components_Tech__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_components/Tech */ \"./_components/Tech.js\");\n/* harmony import */ var _components_About__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_components/About */ \"./_components/About.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Home() {\n    _s();\n    var tempWindowWidth = 0;\n    var tempWindowHeight = 0;\n    // ---------------------------------    Detect window Size\n    if (true) {\n        var win = window, doc = document, docElem = doc.documentElement, body = doc.getElementsByTagName('body')[0], tempWindowWidth = win.innerWidth || docElem.clientWidth || body.clientWidth, tempWindowHeight = win.innerHeight || docElem.clientHeight || body.clientHeight;\n    // ---------------------------------    Detect organic scroll Y \n    // var scroll_Y_organic = 0\n    // scroll_Y_organic = window.scrollY\n    // ---------------------------------     Get height of the document Content\n    // var doc_content_Height = 0\n    // var body = document.body,\n    //      html = document.documentElement;\n    // var doc_content_Height = Math.max(body.scrollHeight, body.offsetHeight,\n    //      html.clientHeight, html.scrollHeight, html.offsetHeight);\n    }\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(tempWindowWidth), W_screenSize = ref[0], set_W_screenSize = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(tempWindowHeight), H_screenSize = ref1[0], set_H_screenSize = ref1[1];\n    if (true) {\n        window.addEventListener('resize', function() {\n            set_W_screenSize(window.innerWidth);\n            set_H_screenSize(window.innerHeight);\n        });\n    }\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"section\", {\n        className: \"pages-wrapper\",\n        __source: {\n            fileName: \"/Users/trayanov/Work/trayanovCV/pages/index.js\",\n            lineNumber: 46,\n            columnNumber: 11\n        },\n        __self: this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_HomePage__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                __source: {\n                    fileName: \"/Users/trayanov/Work/trayanovCV/pages/index.js\",\n                    lineNumber: 47,\n                    columnNumber: 14\n                },\n                __self: this\n            }),\n            W_screenSize,\n            \"--\",\n            H_screenSize\n        ]\n    }));\n};\n_s(Home, \"NF/AE6K/lsmL0F6xc7QdcO8sbaM=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQXFEO0FBRVA7QUFDUjtBQUNFOztBQUd6QixRQUFRLENBQUNNLElBQUksR0FBRyxDQUFDOztJQUUzQixHQUFHLENBQUNDLGVBQWUsR0FBRyxDQUFDO0lBQ3ZCLEdBQUcsQ0FBQ0MsZ0JBQWdCLEdBQUcsQ0FBQztJQUV4QixFQUEwRDtJQUMxRCxFQUFFLEVBQUUsSUFBNkIsRUFBRSxDQUFDO1FBQy9CLEdBQUcsQ0FBQ0MsR0FBRyxHQUFHQyxNQUFNLEVBQ2hCQyxHQUFHLEdBQUdDLFFBQVEsRUFDZEMsT0FBTyxHQUFHRixHQUFHLENBQUNHLGVBQWUsRUFDN0JDLElBQUksR0FBR0osR0FBRyxDQUFDSyxvQkFBb0IsQ0FBQyxDQUFNLE9BQUUsQ0FBQyxHQUN6Q1QsZUFBZSxHQUFHRSxHQUFHLENBQUNRLFVBQVUsSUFBSUosT0FBTyxDQUFDSyxXQUFXLElBQUlILElBQUksQ0FBQ0csV0FBVyxFQUMzRVYsZ0JBQWdCLEdBQUdDLEdBQUcsQ0FBQ1UsV0FBVyxJQUFJTixPQUFPLENBQUNPLFlBQVksSUFBSUwsSUFBSSxDQUFDSyxZQUFZO0lBRy9FLEVBQWdFO0lBQ2hFLEVBQTJCO0lBQzNCLEVBQW9DO0lBQ3BDLEVBQTJFO0lBQzNFLEVBQTZCO0lBQzdCLEVBQTRCO0lBQzVCLEVBQXdDO0lBRXhDLEVBQTBFO0lBQzFFLEVBQWlFO0lBQ3RFLENBQUM7SUFFRCxHQUFLLENBQW9DbkIsR0FBeUIsR0FBekJBLCtDQUFRLENBQUNNLGVBQWUsR0FBMURjLFlBQVksR0FBc0JwQixHQUF5QixLQUE3Q3FCLGdCQUFnQixHQUFJckIsR0FBeUI7SUFDbEUsR0FBSyxDQUFvQ0EsSUFBMEIsR0FBMUJBLCtDQUFRLENBQUNPLGdCQUFnQixHQUEzRGUsWUFBWSxHQUFzQnRCLElBQTBCLEtBQTlDdUIsZ0JBQWdCLEdBQUl2QixJQUEwQjtJQUVuRSxFQUFFLEVBQUUsSUFBNkIsRUFBRSxDQUFDO1FBQy9CUyxNQUFNLENBQUNlLGdCQUFnQixDQUFDLENBQVEsU0FBRSxRQUM1QyxHQURrRCxDQUFDO1lBRXBDSCxnQkFBZ0IsQ0FBQ1osTUFBTSxDQUFDTyxVQUFVO1lBQ2xDTyxnQkFBZ0IsQ0FBQ2QsTUFBTSxDQUFDUyxXQUFXO1FBQ3hDLENBQUM7SUFDTixDQUFDO0lBQ0QsTUFBTSx1RUFDQU8sQ0FBTztRQUFDQyxTQUFTLEVBQUMsQ0FBZTs7Ozs7Ozs7aUZBQzdCeEIsNERBQVE7Ozs7Ozs7O1lBQ1RrQixZQUFZO1lBQUMsQ0FDZDtZQUFDRSxZQUFZOzs7QUFPMUIsQ0FBQztHQWhEdUJqQixJQUFJO0tBQUpBLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlLCBGcmFnbWVudCB9IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgSG9tZVBhZ2UgZnJvbSAnLi4vX2NvbXBvbmVudHMvSG9tZVBhZ2UnXG5pbXBvcnQgVGVjaCBmcm9tICcuLi9fY29tcG9uZW50cy9UZWNoJ1xuaW1wb3J0IEFib3V0IGZyb20gJy4uL19jb21wb25lbnRzL0Fib3V0J1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG5cbiAgICAgdmFyIHRlbXBXaW5kb3dXaWR0aCA9IDBcbiAgICAgdmFyIHRlbXBXaW5kb3dIZWlnaHQgPSAwXG5cbiAgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICAgIERldGVjdCB3aW5kb3cgU2l6ZVxuICAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICB2YXIgd2luID0gd2luZG93LFxuICAgICAgICAgIGRvYyA9IGRvY3VtZW50LFxuICAgICAgICAgIGRvY0VsZW0gPSBkb2MuZG9jdW1lbnRFbGVtZW50LFxuICAgICAgICAgIGJvZHkgPSBkb2MuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2JvZHknKVswXSxcbiAgICAgICAgICB0ZW1wV2luZG93V2lkdGggPSB3aW4uaW5uZXJXaWR0aCB8fCBkb2NFbGVtLmNsaWVudFdpZHRoIHx8IGJvZHkuY2xpZW50V2lkdGgsXG4gICAgICAgICAgdGVtcFdpbmRvd0hlaWdodCA9IHdpbi5pbm5lckhlaWdodCB8fCBkb2NFbGVtLmNsaWVudEhlaWdodCB8fCBib2R5LmNsaWVudEhlaWdodDtcblxuXG4gICAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICAgIERldGVjdCBvcmdhbmljIHNjcm9sbCBZIFxuICAgICAgICAgIC8vIHZhciBzY3JvbGxfWV9vcmdhbmljID0gMFxuICAgICAgICAgIC8vIHNjcm9sbF9ZX29yZ2FuaWMgPSB3aW5kb3cuc2Nyb2xsWVxuICAgICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAgICAgR2V0IGhlaWdodCBvZiB0aGUgZG9jdW1lbnQgQ29udGVudFxuICAgICAgICAgIC8vIHZhciBkb2NfY29udGVudF9IZWlnaHQgPSAwXG4gICAgICAgICAgLy8gdmFyIGJvZHkgPSBkb2N1bWVudC5ib2R5LFxuICAgICAgICAgIC8vICAgICAgaHRtbCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcblxuICAgICAgICAgIC8vIHZhciBkb2NfY29udGVudF9IZWlnaHQgPSBNYXRoLm1heChib2R5LnNjcm9sbEhlaWdodCwgYm9keS5vZmZzZXRIZWlnaHQsXG4gICAgICAgICAgLy8gICAgICBodG1sLmNsaWVudEhlaWdodCwgaHRtbC5zY3JvbGxIZWlnaHQsIGh0bWwub2Zmc2V0SGVpZ2h0KTtcbiAgICAgfVxuXG4gICAgIGNvbnN0IFtXX3NjcmVlblNpemUsIHNldF9XX3NjcmVlblNpemVdID0gdXNlU3RhdGUodGVtcFdpbmRvd1dpZHRoKVxuICAgICBjb25zdCBbSF9zY3JlZW5TaXplLCBzZXRfSF9zY3JlZW5TaXplXSA9IHVzZVN0YXRlKHRlbXBXaW5kb3dIZWlnaHQpXG5cbiAgICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsICgpID0+IHtcblxuICAgICAgICAgICAgICAgc2V0X1dfc2NyZWVuU2l6ZSh3aW5kb3cuaW5uZXJXaWR0aClcbiAgICAgICAgICAgICAgIHNldF9IX3NjcmVlblNpemUod2luZG93LmlubmVySGVpZ2h0KVxuICAgICAgICAgIH0pXG4gICAgIH1cbiAgICAgcmV0dXJuIChcbiAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9J3BhZ2VzLXdyYXBwZXInPlxuICAgICAgICAgICAgIDwgSG9tZVBhZ2UvPlxuICAgICAgICAgICAgIHtXX3NjcmVlblNpemV9LS1cbiAgICAgICAgICAgICB7SF9zY3JlZW5TaXplfVxuICAgICAgICAgICAgIHsvKiA8IFRlY2gvPlxuICAgICAgICAgICAgIDwgQWJvdXQvPiAqL31cblxuICAgICAgICAgICBcbiAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgIClcbn1cbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkZyYWdtZW50IiwiSG9tZVBhZ2UiLCJUZWNoIiwiQWJvdXQiLCJIb21lIiwidGVtcFdpbmRvd1dpZHRoIiwidGVtcFdpbmRvd0hlaWdodCIsIndpbiIsIndpbmRvdyIsImRvYyIsImRvY3VtZW50IiwiZG9jRWxlbSIsImRvY3VtZW50RWxlbWVudCIsImJvZHkiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsImlubmVyV2lkdGgiLCJjbGllbnRXaWR0aCIsImlubmVySGVpZ2h0IiwiY2xpZW50SGVpZ2h0IiwiV19zY3JlZW5TaXplIiwic2V0X1dfc2NyZWVuU2l6ZSIsIkhfc2NyZWVuU2l6ZSIsInNldF9IX3NjcmVlblNpemUiLCJhZGRFdmVudExpc3RlbmVyIiwic2VjdGlvbiIsImNsYXNzTmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});
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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_HomePage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_components/HomePage */ \"./_components/HomePage.js\");\n/* harmony import */ var _components_Tech__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_components/Tech */ \"./_components/Tech.js\");\n/* harmony import */ var _components_About__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_components/About */ \"./_components/About.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var detect_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! detect-browser */ \"./node_modules/detect-browser/es/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar temp = 0;\nfunction Home() {\n    _s();\n    var tempWindowWidth = 0;\n    var tempWindowHeight = 0;\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('down'), scrollDirection = ref[0], setScrollDirection = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(tempWindowWidth), W_screenSize = ref1[0], set_W_screenSize = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(tempWindowHeight), H_screenSize = ref2[0], set_H_screenSize = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('light'), theme = ref3[0], setTheme = ref3[1];\n    var scrollYProgress = (0,framer_motion__WEBPACK_IMPORTED_MODULE_5__.useViewportScroll)(0).scrollYProgress;\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), Y_position = ref4[0], set_Y_position = ref4[1];\n    var ref5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), current = ref5[0], set_Y_position = ref5[1];\n    // ---------------------------------    Detect window Size\n    if (true) {\n        var win = window, doc = document, docElem = doc.documentElement, body = doc.getElementsByTagName('body')[0], tempWindowWidth = win.innerWidth || docElem.clientWidth || body.clientWidth, tempWindowHeight = win.innerHeight || docElem.clientHeight || body.clientHeight;\n    }\n    // ---------------------------------    Detect window scrolling Directions (UP DOWN)\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var checkScrollDirection = function checkScrollDirection(event) {\n            if (checkScrollDirectionIsUp(event)) {\n                setScrollDirection('down');\n            } else {\n                setScrollDirection('up');\n            }\n        };\n        var checkScrollDirectionIsUp = function checkScrollDirectionIsUp(event) {\n            if (event.wheelDelta) return event.wheelDelta > 0;\n            return event.deltaY < 0;\n        };\n        var scrollableElement = document.body;\n        scrollableElement.addEventListener('wheel', checkScrollDirection);\n    }, []);\n    // ---------------------------------    Mobile Detect window scrolling Directions (UP DOWN)\n    var oldValue = 0;\n    var newValue = 0;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        window.addEventListener('scroll', function(e) {\n            newValue = window.pageYOffset;\n            if (oldValue < newValue) {\n                setScrollDirection('up');\n            } else if (oldValue > newValue) {\n                setScrollDirection('down');\n            }\n            oldValue = newValue;\n        });\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        if (Y_position === 0) {\n            console.log(0);\n            setScrollDirection('down');\n        }\n    }, [\n        Y_position\n    ]);\n    //-------------------\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        scrollYProgress.onChange(function(v) {\n            return set_Y_position(v);\n        });\n    }, [\n        scrollYProgress\n    ]);\n    // ---------------------------------    Detect Browser Name\n    var browser = (0,detect_browser__WEBPACK_IMPORTED_MODULE_6__.detect)();\n    var browserName = '';\n    if (browser.name === 'firefox') {\n        browserName = browser.name;\n    }\n    if (true) {\n        window.addEventListener('resize', function() {\n            set_W_screenSize(window.innerWidth);\n            set_H_screenSize(window.innerHeight);\n        });\n    }\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"section\", {\n        className: \"pages-wrapper\",\n        __source: {\n            fileName: \"/Users/trayanov/Work/trayanovCV/pages/index.js\",\n            lineNumber: 117,\n            columnNumber: 11\n        },\n        __self: this,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_HomePage__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            W_screenSize: W_screenSize,\n            theme: theme,\n            setTheme: setTheme,\n            scrollDirection: scrollDirection,\n            Y_position: Y_position,\n            __source: {\n                fileName: \"/Users/trayanov/Work/trayanovCV/pages/index.js\",\n                lineNumber: 119,\n                columnNumber: 16\n            },\n            __self: this\n        })\n    }));\n};\n_s(Home, \"lLHZlkr8ao9KzlJj7ByBOsQXptI=\", false, function() {\n    return [\n        framer_motion__WEBPACK_IMPORTED_MODULE_5__.useViewportScroll\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SyxDQUFTLFVBQUUsQ0FBQztRQUM1QkQsV0FBVyxHQUFHRCxPQUFPLENBQUNFLElBQUk7SUFDL0IsQ0FBQztJQUlELEVBQUUsRUFBRSxJQUE2QixFQUFFLENBQUM7UUFDL0I1QixNQUFNLENBQUNpQixnQkFBZ0IsQ0FBQyxDQUFRLFNBQUUsUUFDNUMsR0FEa0QsQ0FBQztZQUVwQzNCLGdCQUFnQixDQUFDVSxNQUFNLENBQUNPLFVBQVU7WUFDbENmLGdCQUFnQixDQUFDUSxNQUFNLENBQUNTLFdBQVc7UUFDeEMsQ0FBQztJQUNOLENBQUM7SUFFRCxNQUFNLHNFQUNBb0IsQ0FBTztRQUFDQyxTQUFTLEVBQUMsQ0FBZTs7Ozs7Ozt1RkFFM0JwRCw0REFBUTtZQUNMVyxZQUFZLEVBQUVBLFlBQVk7WUFBRUksS0FBSyxFQUFFQSxLQUFLO1lBQ3hDQyxRQUFRLEVBQUVBLFFBQVE7WUFBRVAsZUFBZSxFQUFFQSxlQUFlO1lBQ3BEUyxVQUFVLEVBQUVBLFVBQVU7Ozs7Ozs7OztBQVUxQyxDQUFDO0dBekh1QlosSUFBSTs7UUFVS0gsNERBQWlCOzs7S0FWMUJHLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlLCBGcmFnbWVudCB9IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgSG9tZVBhZ2UgZnJvbSAnLi4vX2NvbXBvbmVudHMvSG9tZVBhZ2UnXG5pbXBvcnQgVGVjaCBmcm9tICcuLi9fY29tcG9uZW50cy9UZWNoJ1xuaW1wb3J0IEFib3V0IGZyb20gJy4uL19jb21wb25lbnRzL0Fib3V0J1xuaW1wb3J0IHsgdXNlVmlld3BvcnRTY3JvbGwgfSBmcm9tICdmcmFtZXItbW90aW9uJ1xuaW1wb3J0IHsgZGV0ZWN0IH0gZnJvbSAnZGV0ZWN0LWJyb3dzZXInXG5cblxudmFyIHRlbXAgPSAwXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuXG4gICAgIHZhciB0ZW1wV2luZG93V2lkdGggPSAwXG4gICAgIHZhciB0ZW1wV2luZG93SGVpZ2h0ID0gMFxuXG4gICAgIGNvbnN0IFtzY3JvbGxEaXJlY3Rpb24sIHNldFNjcm9sbERpcmVjdGlvbl0gPSB1c2VTdGF0ZSgnZG93bicpXG5cbiAgICAgY29uc3QgW1dfc2NyZWVuU2l6ZSwgc2V0X1dfc2NyZWVuU2l6ZV0gPSB1c2VTdGF0ZSh0ZW1wV2luZG93V2lkdGgpXG4gICAgIGNvbnN0IFtIX3NjcmVlblNpemUsIHNldF9IX3NjcmVlblNpemVdID0gdXNlU3RhdGUodGVtcFdpbmRvd0hlaWdodClcbiAgICAgY29uc3QgW3RoZW1lLCBzZXRUaGVtZV0gPSB1c2VTdGF0ZSgnbGlnaHQnKVxuICAgICBjb25zdCB7IHNjcm9sbFlQcm9ncmVzcyB9ID0gdXNlVmlld3BvcnRTY3JvbGwoMClcbiAgICAgY29uc3QgW1lfcG9zaXRpb24sIHNldF9ZX3Bvc2l0aW9uXSA9IHVzZVN0YXRlKDApXG4gICAgIGNvbnN0IFtjdXJyZW50LCBzZXRfWV9wb3NpdGlvbl0gPSB1c2VTdGF0ZSgwKVxuXG4gICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAgICBEZXRlY3Qgd2luZG93IFNpemVcbiAgICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgdmFyIHdpbiA9IHdpbmRvdyxcbiAgICAgICAgICAgICAgIGRvYyA9IGRvY3VtZW50LFxuICAgICAgICAgICAgICAgZG9jRWxlbSA9IGRvYy5kb2N1bWVudEVsZW1lbnQsXG4gICAgICAgICAgICAgICBib2R5ID0gZG9jLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdib2R5JylbMF0sXG4gICAgICAgICAgICAgICB0ZW1wV2luZG93V2lkdGggPSB3aW4uaW5uZXJXaWR0aCB8fCBkb2NFbGVtLmNsaWVudFdpZHRoIHx8IGJvZHkuY2xpZW50V2lkdGgsXG4gICAgICAgICAgICAgICB0ZW1wV2luZG93SGVpZ2h0ID0gd2luLmlubmVySGVpZ2h0IHx8IGRvY0VsZW0uY2xpZW50SGVpZ2h0IHx8IGJvZHkuY2xpZW50SGVpZ2h0O1xuICAgICB9XG5cbiAgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICAgIERldGVjdCB3aW5kb3cgc2Nyb2xsaW5nIERpcmVjdGlvbnMgKFVQIERPV04pXG4gICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgICAgdmFyIHNjcm9sbGFibGVFbGVtZW50ID0gZG9jdW1lbnQuYm9keVxuICAgICAgICAgIHNjcm9sbGFibGVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3doZWVsJywgY2hlY2tTY3JvbGxEaXJlY3Rpb24pXG4gICAgICAgICAgZnVuY3Rpb24gY2hlY2tTY3JvbGxEaXJlY3Rpb24oZXZlbnQpIHtcblxuICAgICAgICAgICAgICAgaWYgKGNoZWNrU2Nyb2xsRGlyZWN0aW9uSXNVcChldmVudCkpIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0U2Nyb2xsRGlyZWN0aW9uKCdkb3duJylcbiAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzZXRTY3JvbGxEaXJlY3Rpb24oJ3VwJylcbiAgICAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgZnVuY3Rpb24gY2hlY2tTY3JvbGxEaXJlY3Rpb25Jc1VwKGV2ZW50KSB7XG5cbiAgICAgICAgICAgICAgIGlmIChldmVudC53aGVlbERlbHRhKSByZXR1cm4gZXZlbnQud2hlZWxEZWx0YSA+IDBcbiAgICAgICAgICAgICAgIHJldHVybiBldmVudC5kZWx0YVkgPCAwXG4gICAgICAgICAgfVxuXG5cbiAgICAgfSwgW10pXG4gICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAgICBNb2JpbGUgRGV0ZWN0IHdpbmRvdyBzY3JvbGxpbmcgRGlyZWN0aW9ucyAoVVAgRE9XTilcblxuICAgICBsZXQgb2xkVmFsdWUgPSAwXG4gICAgIGxldCBuZXdWYWx1ZSA9IDBcblxuICAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgbmV3VmFsdWUgPSB3aW5kb3cucGFnZVlPZmZzZXQ7XG4gICAgICAgICAgICAgICBpZiAob2xkVmFsdWUgPCBuZXdWYWx1ZSkge1xuICAgICAgICAgICAgICAgICAgIFxuXG4gICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgc2V0U2Nyb2xsRGlyZWN0aW9uKCd1cCcpXG4gICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgIH0gZWxzZSBpZiAob2xkVmFsdWUgPiBuZXdWYWx1ZSkge1xuXG4gICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICBzZXRTY3JvbGxEaXJlY3Rpb24oJ2Rvd24nKVxuICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICBvbGRWYWx1ZSA9IG5ld1ZhbHVlO1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgIFxuICAgICB9LCBbXSlcblxuICAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICAgIGlmIChZX3Bvc2l0aW9uID09PSAwKSB7XG4gICAgICAgICAgICAgICBjb25zb2xlLmxvZygwKVxuICAgICAgICAgICAgICAgc2V0U2Nyb2xsRGlyZWN0aW9uKCdkb3duJylcbiAgICAgICAgICB9XG4gICAgIH0sIFtZX3Bvc2l0aW9uXSlcblxuICAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAgICB1c2VFZmZlY3QoKCkgPT4ge1xuXG4gICAgICAgICAgc2Nyb2xsWVByb2dyZXNzLm9uQ2hhbmdlKCh2KSA9PiBzZXRfWV9wb3NpdGlvbih2KSlcbiAgICAgfSwgW3Njcm9sbFlQcm9ncmVzc10pXG5cblxuICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gICAgRGV0ZWN0IEJyb3dzZXIgTmFtZVxuICAgICBjb25zdCBicm93c2VyID0gZGV0ZWN0KClcbiAgICAgbGV0IGJyb3dzZXJOYW1lID0gJydcblxuICAgICBpZiAoYnJvd3Nlci5uYW1lID09PSAnZmlyZWZveCcpIHtcbiAgICAgICAgICBicm93c2VyTmFtZSA9IGJyb3dzZXIubmFtZVxuICAgICB9XG5cblxuXG4gICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCAoKSA9PiB7XG5cbiAgICAgICAgICAgICAgIHNldF9XX3NjcmVlblNpemUod2luZG93LmlubmVyV2lkdGgpXG4gICAgICAgICAgICAgICBzZXRfSF9zY3JlZW5TaXplKHdpbmRvdy5pbm5lckhlaWdodClcbiAgICAgICAgICB9KVxuICAgICB9XG5cbiAgICAgcmV0dXJuIChcbiAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9J3BhZ2VzLXdyYXBwZXInPlxuXG4gICAgICAgICAgICAgICA8IEhvbWVQYWdlXG4gICAgICAgICAgICAgICAgICAgIFdfc2NyZWVuU2l6ZT17V19zY3JlZW5TaXplfSB0aGVtZT17dGhlbWV9XG4gICAgICAgICAgICAgICAgICAgIHNldFRoZW1lPXtzZXRUaGVtZX0gc2Nyb2xsRGlyZWN0aW9uPXtzY3JvbGxEaXJlY3Rpb259XG4gICAgICAgICAgICAgICAgICAgIFlfcG9zaXRpb249e1lfcG9zaXRpb259XG4gICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgey8qIHtXX3NjcmVlblNpemV9LS1cbiAgICAgICAgICAgICB7SF9zY3JlZW5TaXplfSAqL31cbiAgICAgICAgICAgICAgIHsvKiA8IFRlY2gvPlxuICAgICAgICAgICAgIDwgQWJvdXQvPiAqL31cblxuXG4gICAgICAgICAgPC9zZWN0aW9uPlxuICAgICApXG59XG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJGcmFnbWVudCIsIkhvbWVQYWdlIiwiVGVjaCIsIkFib3V0IiwidXNlVmlld3BvcnRTY3JvbGwiLCJkZXRlY3QiLCJ0ZW1wIiwiSG9tZSIsInRlbXBXaW5kb3dXaWR0aCIsInRlbXBXaW5kb3dIZWlnaHQiLCJzY3JvbGxEaXJlY3Rpb24iLCJzZXRTY3JvbGxEaXJlY3Rpb24iLCJXX3NjcmVlblNpemUiLCJzZXRfV19zY3JlZW5TaXplIiwiSF9zY3JlZW5TaXplIiwic2V0X0hfc2NyZWVuU2l6ZSIsInRoZW1lIiwic2V0VGhlbWUiLCJzY3JvbGxZUHJvZ3Jlc3MiLCJZX3Bvc2l0aW9uIiwic2V0X1lfcG9zaXRpb24iLCJjdXJyZW50Iiwid2luIiwid2luZG93IiwiZG9jIiwiZG9jdW1lbnQiLCJkb2NFbGVtIiwiZG9jdW1lbnRFbGVtZW50IiwiYm9keSIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwiaW5uZXJXaWR0aCIsImNsaWVudFdpZHRoIiwiaW5uZXJIZWlnaHQiLCJjbGllbnRIZWlnaHQiLCJjaGVja1Njcm9sbERpcmVjdGlvbiIsImV2ZW50IiwiY2hlY2tTY3JvbGxEaXJlY3Rpb25Jc1VwIiwid2hlZWxEZWx0YSIsImRlbHRhWSIsInNjcm9sbGFibGVFbGVtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsIm9sZFZhbHVlIiwibmV3VmFsdWUiLCJlIiwicGFnZVlPZmZzZXQiLCJjb25zb2xlIiwibG9nIiwib25DaGFuZ2UiLCJ2IiwiYnJvd3NlciIsImJyb3dzZXJOYW1lIiwibmFtZSIsInNlY3Rpb24iLCJjbGFzc05hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});
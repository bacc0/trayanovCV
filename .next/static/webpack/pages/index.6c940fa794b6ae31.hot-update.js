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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_HomePage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_components/HomePage */ \"./_components/HomePage.js\");\n/* harmony import */ var _components_Tech__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_components/Tech */ \"./_components/Tech.js\");\n/* harmony import */ var _components_About__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_components/About */ \"./_components/About.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var detect_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! detect-browser */ \"./node_modules/detect-browser/es/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar temp = 0;\nfunction Home() {\n    _s();\n    var tempWindowWidth = 0;\n    var tempWindowHeight = 0;\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('down'), scrollDirection = ref[0], setScrollDirection = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(tempWindowWidth), W_screenSize = ref1[0], set_W_screenSize = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(tempWindowHeight), H_screenSize = ref2[0], set_H_screenSize = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('light'), theme = ref3[0], setTheme = ref3[1];\n    var scrollYProgress = (0,framer_motion__WEBPACK_IMPORTED_MODULE_5__.useViewportScroll)(0).scrollYProgress;\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), Y_position = ref4[0], set_Y_position = ref4[1];\n    var ref5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), currentBrowser = ref5[0], setCurrentBrowser = ref5[1];\n    // ---------------------------------    Detect window Size\n    if (true) {\n        var win = window, doc = document, docElem = doc.documentElement, body = doc.getElementsByTagName('body')[0], tempWindowWidth = win.innerWidth || docElem.clientWidth || body.clientWidth, tempWindowHeight = win.innerHeight || docElem.clientHeight || body.clientHeight;\n    }\n    // ---------------------------------    Detect window scrolling Directions (UP DOWN)\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var checkScrollDirection = function checkScrollDirection(event) {\n            if (checkScrollDirectionIsUp(event)) {\n                setScrollDirection('down');\n            } else {\n                setScrollDirection('up');\n            }\n        };\n        var checkScrollDirectionIsUp = function checkScrollDirectionIsUp(event) {\n            if (event.wheelDelta) return event.wheelDelta > 0;\n            return event.deltaY < 0;\n        };\n        var scrollableElement = document.body;\n        scrollableElement.addEventListener('wheel', checkScrollDirection);\n    }, []);\n    // ---------------------------------    Mobile Detect window scrolling Directions (UP DOWN)\n    var oldValue = 0;\n    var newValue = 0;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        window.addEventListener('scroll', function(e) {\n            newValue = window.pageYOffset;\n            if (oldValue < newValue) {\n                setScrollDirection('up');\n            } else if (oldValue > newValue) {\n                setScrollDirection('down');\n            }\n            oldValue = newValue;\n        });\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        if (Y_position === 0) {\n            console.log(0);\n            setScrollDirection('down');\n        }\n    }, [\n        Y_position\n    ]);\n    //-------------------\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        scrollYProgress.onChange(function(v) {\n            return set_Y_position(v);\n        });\n    }, [\n        scrollYProgress\n    ]);\n    // ---------------------------------    Detect Browser Name\n    var browser = (0,detect_browser__WEBPACK_IMPORTED_MODULE_6__.detect)();\n    if (browser.name === 'firefox') {\n        setCurrentBrowser(browser.name);\n    }\n    if (true) {\n        window.addEventListener('resize', function() {\n            set_W_screenSize(window.innerWidth);\n            set_H_screenSize(window.innerHeight);\n        });\n    }\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"section\", {\n        className: \"pages-wrapper\",\n        __source: {\n            fileName: \"/Users/trayanov/Work/trayanovCV/pages/index.js\",\n            lineNumber: 117,\n            columnNumber: 11\n        },\n        __self: this,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_HomePage__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            W_screenSize: W_screenSize,\n            theme: theme,\n            setTheme: setTheme,\n            scrollDirection: scrollDirection,\n            Y_position: Y_position,\n            currentBrowser: currentBrowser,\n            __source: {\n                fileName: \"/Users/trayanov/Work/trayanovCV/pages/index.js\",\n                lineNumber: 119,\n                columnNumber: 16\n            },\n            __self: this\n        })\n    }));\n};\n_s(Home, \"lLHZlkr8ao9KzlJj7ByBOsQXptI=\", false, function() {\n    return [\n        framer_motion__WEBPACK_IMPORTED_MODULE_5__.useViewportScroll\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QixDQUFDNEIsT0FBTyxDQUFDQyxJQUFJO0lBQ25DLENBQUM7SUFJRCxFQUFFLEVBQUUsSUFBNkIsRUFBRSxDQUFDO1FBQy9CM0IsTUFBTSxDQUFDaUIsZ0JBQWdCLENBQUMsQ0FBUSxTQUFFLFFBQzVDLEdBRGtELENBQUM7WUFFcEM1QixnQkFBZ0IsQ0FBQ1csTUFBTSxDQUFDTyxVQUFVO1lBQ2xDaEIsZ0JBQWdCLENBQUNTLE1BQU0sQ0FBQ1MsV0FBVztRQUN4QyxDQUFDO0lBQ04sQ0FBQztJQUVELE1BQU0sc0VBQ0FtQixDQUFPO1FBQUNDLFNBQVMsRUFBQyxDQUFlOzs7Ozs7O3VGQUUzQnBELDREQUFRO1lBQ0xXLFlBQVksRUFBRUEsWUFBWTtZQUFFSSxLQUFLLEVBQUVBLEtBQUs7WUFDeENDLFFBQVEsRUFBRUEsUUFBUTtZQUFFUCxlQUFlLEVBQUVBLGVBQWU7WUFDcERTLFVBQVUsRUFBRUEsVUFBVTtZQUN0QkUsY0FBYyxFQUFFQSxjQUFjOzs7Ozs7Ozs7QUFNbEQsQ0FBQztHQXRIdUJkLElBQUk7O1FBVUtILDREQUFpQjs7O0tBVjFCRyxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgRnJhZ21lbnQgfSBmcm9tICdyZWFjdCdcblxuaW1wb3J0IEhvbWVQYWdlIGZyb20gJy4uL19jb21wb25lbnRzL0hvbWVQYWdlJ1xuaW1wb3J0IFRlY2ggZnJvbSAnLi4vX2NvbXBvbmVudHMvVGVjaCdcbmltcG9ydCBBYm91dCBmcm9tICcuLi9fY29tcG9uZW50cy9BYm91dCdcbmltcG9ydCB7IHVzZVZpZXdwb3J0U2Nyb2xsIH0gZnJvbSAnZnJhbWVyLW1vdGlvbidcbmltcG9ydCB7IGRldGVjdCB9IGZyb20gJ2RldGVjdC1icm93c2VyJ1xuXG5cbnZhciB0ZW1wID0gMFxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcblxuICAgICB2YXIgdGVtcFdpbmRvd1dpZHRoID0gMFxuICAgICB2YXIgdGVtcFdpbmRvd0hlaWdodCA9IDBcblxuICAgICBjb25zdCBbc2Nyb2xsRGlyZWN0aW9uLCBzZXRTY3JvbGxEaXJlY3Rpb25dID0gdXNlU3RhdGUoJ2Rvd24nKVxuXG4gICAgIGNvbnN0IFtXX3NjcmVlblNpemUsIHNldF9XX3NjcmVlblNpemVdID0gdXNlU3RhdGUodGVtcFdpbmRvd1dpZHRoKVxuICAgICBjb25zdCBbSF9zY3JlZW5TaXplLCBzZXRfSF9zY3JlZW5TaXplXSA9IHVzZVN0YXRlKHRlbXBXaW5kb3dIZWlnaHQpXG4gICAgIGNvbnN0IFt0aGVtZSwgc2V0VGhlbWVdID0gdXNlU3RhdGUoJ2xpZ2h0JylcbiAgICAgY29uc3QgeyBzY3JvbGxZUHJvZ3Jlc3MgfSA9IHVzZVZpZXdwb3J0U2Nyb2xsKDApXG4gICAgIGNvbnN0IFtZX3Bvc2l0aW9uLCBzZXRfWV9wb3NpdGlvbl0gPSB1c2VTdGF0ZSgwKVxuICAgICBjb25zdCBbY3VycmVudEJyb3dzZXIsIHNldEN1cnJlbnRCcm93c2VyXSA9IHVzZVN0YXRlKDApXG5cbiAgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICAgIERldGVjdCB3aW5kb3cgU2l6ZVxuICAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICB2YXIgd2luID0gd2luZG93LFxuICAgICAgICAgICAgICAgZG9jID0gZG9jdW1lbnQsXG4gICAgICAgICAgICAgICBkb2NFbGVtID0gZG9jLmRvY3VtZW50RWxlbWVudCxcbiAgICAgICAgICAgICAgIGJvZHkgPSBkb2MuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2JvZHknKVswXSxcbiAgICAgICAgICAgICAgIHRlbXBXaW5kb3dXaWR0aCA9IHdpbi5pbm5lcldpZHRoIHx8IGRvY0VsZW0uY2xpZW50V2lkdGggfHwgYm9keS5jbGllbnRXaWR0aCxcbiAgICAgICAgICAgICAgIHRlbXBXaW5kb3dIZWlnaHQgPSB3aW4uaW5uZXJIZWlnaHQgfHwgZG9jRWxlbS5jbGllbnRIZWlnaHQgfHwgYm9keS5jbGllbnRIZWlnaHQ7XG4gICAgIH1cblxuICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gICAgRGV0ZWN0IHdpbmRvdyBzY3JvbGxpbmcgRGlyZWN0aW9ucyAoVVAgRE9XTilcbiAgICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgICB2YXIgc2Nyb2xsYWJsZUVsZW1lbnQgPSBkb2N1bWVudC5ib2R5XG4gICAgICAgICAgc2Nyb2xsYWJsZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignd2hlZWwnLCBjaGVja1Njcm9sbERpcmVjdGlvbilcbiAgICAgICAgICBmdW5jdGlvbiBjaGVja1Njcm9sbERpcmVjdGlvbihldmVudCkge1xuXG4gICAgICAgICAgICAgICBpZiAoY2hlY2tTY3JvbGxEaXJlY3Rpb25Jc1VwKGV2ZW50KSkge1xuICAgICAgICAgICAgICAgICAgICBzZXRTY3JvbGxEaXJlY3Rpb24oJ2Rvd24nKVxuICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHNldFNjcm9sbERpcmVjdGlvbigndXAnKVxuICAgICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBmdW5jdGlvbiBjaGVja1Njcm9sbERpcmVjdGlvbklzVXAoZXZlbnQpIHtcblxuICAgICAgICAgICAgICAgaWYgKGV2ZW50LndoZWVsRGVsdGEpIHJldHVybiBldmVudC53aGVlbERlbHRhID4gMFxuICAgICAgICAgICAgICAgcmV0dXJuIGV2ZW50LmRlbHRhWSA8IDBcbiAgICAgICAgICB9XG5cblxuICAgICB9LCBbXSlcbiAgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICAgIE1vYmlsZSBEZXRlY3Qgd2luZG93IHNjcm9sbGluZyBEaXJlY3Rpb25zIChVUCBET1dOKVxuXG4gICAgIGxldCBvbGRWYWx1ZSA9IDBcbiAgICAgbGV0IG5ld1ZhbHVlID0gMFxuXG4gICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIChlKSA9PiB7XG4gICAgICAgICAgICAgICBuZXdWYWx1ZSA9IHdpbmRvdy5wYWdlWU9mZnNldDtcbiAgICAgICAgICAgICAgIGlmIChvbGRWYWx1ZSA8IG5ld1ZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgXG5cbiAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICBzZXRTY3JvbGxEaXJlY3Rpb24oJ3VwJylcbiAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgfSBlbHNlIGlmIChvbGRWYWx1ZSA+IG5ld1ZhbHVlKSB7XG5cbiAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgIHNldFNjcm9sbERpcmVjdGlvbignZG93bicpXG4gICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgIG9sZFZhbHVlID0gbmV3VmFsdWU7XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgXG4gICAgIH0sIFtdKVxuXG4gICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgICAgaWYgKFlfcG9zaXRpb24gPT09IDApIHtcbiAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKDApXG4gICAgICAgICAgICAgICBzZXRTY3JvbGxEaXJlY3Rpb24oJ2Rvd24nKVxuICAgICAgICAgIH1cbiAgICAgfSwgW1lfcG9zaXRpb25dKVxuXG4gICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICAgIHVzZUVmZmVjdCgoKSA9PiB7XG5cbiAgICAgICAgICBzY3JvbGxZUHJvZ3Jlc3Mub25DaGFuZ2UoKHYpID0+IHNldF9ZX3Bvc2l0aW9uKHYpKVxuICAgICB9LCBbc2Nyb2xsWVByb2dyZXNzXSlcblxuXG4gICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAgICBEZXRlY3QgQnJvd3NlciBOYW1lXG4gICAgIGNvbnN0IGJyb3dzZXIgPSBkZXRlY3QoKVxuICAgICBcblxuICAgICBpZiAoYnJvd3Nlci5uYW1lID09PSAnZmlyZWZveCcpIHtcbiAgICAgICAgICBzZXRDdXJyZW50QnJvd3Nlcihicm93c2VyLm5hbWUpXG4gICAgIH1cblxuXG5cbiAgICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsICgpID0+IHtcblxuICAgICAgICAgICAgICAgc2V0X1dfc2NyZWVuU2l6ZSh3aW5kb3cuaW5uZXJXaWR0aClcbiAgICAgICAgICAgICAgIHNldF9IX3NjcmVlblNpemUod2luZG93LmlubmVySGVpZ2h0KVxuICAgICAgICAgIH0pXG4gICAgIH1cblxuICAgICByZXR1cm4gKFxuICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT0ncGFnZXMtd3JhcHBlcic+XG5cbiAgICAgICAgICAgICAgIDwgSG9tZVBhZ2VcbiAgICAgICAgICAgICAgICAgICAgV19zY3JlZW5TaXplPXtXX3NjcmVlblNpemV9IHRoZW1lPXt0aGVtZX1cbiAgICAgICAgICAgICAgICAgICAgc2V0VGhlbWU9e3NldFRoZW1lfSBzY3JvbGxEaXJlY3Rpb249e3Njcm9sbERpcmVjdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgWV9wb3NpdGlvbj17WV9wb3NpdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgY3VycmVudEJyb3dzZXI9e2N1cnJlbnRCcm93c2VyfVxuICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgXG5cbiAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgIClcbn1cbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkZyYWdtZW50IiwiSG9tZVBhZ2UiLCJUZWNoIiwiQWJvdXQiLCJ1c2VWaWV3cG9ydFNjcm9sbCIsImRldGVjdCIsInRlbXAiLCJIb21lIiwidGVtcFdpbmRvd1dpZHRoIiwidGVtcFdpbmRvd0hlaWdodCIsInNjcm9sbERpcmVjdGlvbiIsInNldFNjcm9sbERpcmVjdGlvbiIsIldfc2NyZWVuU2l6ZSIsInNldF9XX3NjcmVlblNpemUiLCJIX3NjcmVlblNpemUiLCJzZXRfSF9zY3JlZW5TaXplIiwidGhlbWUiLCJzZXRUaGVtZSIsInNjcm9sbFlQcm9ncmVzcyIsIllfcG9zaXRpb24iLCJzZXRfWV9wb3NpdGlvbiIsImN1cnJlbnRCcm93c2VyIiwic2V0Q3VycmVudEJyb3dzZXIiLCJ3aW4iLCJ3aW5kb3ciLCJkb2MiLCJkb2N1bWVudCIsImRvY0VsZW0iLCJkb2N1bWVudEVsZW1lbnQiLCJib2R5IiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJpbm5lcldpZHRoIiwiY2xpZW50V2lkdGgiLCJpbm5lckhlaWdodCIsImNsaWVudEhlaWdodCIsImNoZWNrU2Nyb2xsRGlyZWN0aW9uIiwiZXZlbnQiLCJjaGVja1Njcm9sbERpcmVjdGlvbklzVXAiLCJ3aGVlbERlbHRhIiwiZGVsdGFZIiwic2Nyb2xsYWJsZUVsZW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwib2xkVmFsdWUiLCJuZXdWYWx1ZSIsImUiLCJwYWdlWU9mZnNldCIsImNvbnNvbGUiLCJsb2ciLCJvbkNoYW5nZSIsInYiLCJicm93c2VyIiwibmFtZSIsInNlY3Rpb24iLCJjbGFzc05hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});
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

/***/ "./components/ExperienceCard.tsx":
/*!***************************************!*\
  !*** ./components/ExperienceCard.tsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ExperienceCard; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n\n\n\nfunction ExperienceCard(param) {\n    var companyLogo = param.companyLogo, companyName = param.companyName, title = param.title, technologies = param.technologies, startDate = param.startDate, endDate = param.endDate, points = param.points;\n    var _this = this;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"article\", {\n        className: \"flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[300px] md:w-[450px] lg:w-[600px] snap-center bg-[#292929] p-10 opacity-40 border border-[#292929] hover:opacity-100 cursor-pointer transition duration-200 overflow-hidden mt-20 hover:border-[#F7AB0A]\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.img, {\n                initial: {\n                    opacity: 0,\n                    y: -100\n                },\n                whileInView: {\n                    opacity: 1,\n                    y: 0\n                },\n                transition: {\n                    duration: 1.2\n                },\n                viewport: {\n                    once: true\n                },\n                className: \"h-16 w-16 md:w-32 md:h-32 rounded-full object-cover object-center lg:h-[200px] lg:w-[200px]\",\n                src: companyLogo\n            }, void 0, false, {\n                fileName: \"/Users/ns056642/NS056642/javascript/react/shenoyninad.github.io/components/ExperienceCard.tsx\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"px-0 md:px-10 overflow-y-scroll\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                        className: \"lg:text-2xl md:text-xl font-light\",\n                        children: title\n                    }, void 0, false, {\n                        fileName: \"/Users/ns056642/NS056642/javascript/react/shenoyninad.github.io/components/ExperienceCard.tsx\",\n                        lineNumber: 36,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"font-bold mt-1 lg:text-xl md:text-base text-sm\",\n                        children: companyName\n                    }, void 0, false, {\n                        fileName: \"/Users/ns056642/NS056642/javascript/react/shenoyninad.github.io/components/ExperienceCard.tsx\",\n                        lineNumber: 37,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex space-x-2 my-4\",\n                        children: technologies.map(function(technology) {\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                className: \"md:h-8 md:w-8 h-4 w-4\",\n                                src: technology\n                            }, void 0, false, {\n                                fileName: \"/Users/ns056642/NS056642/javascript/react/shenoyninad.github.io/components/ExperienceCard.tsx\",\n                                lineNumber: 42,\n                                columnNumber: 13\n                            }, _this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"/Users/ns056642/NS056642/javascript/react/shenoyninad.github.io/components/ExperienceCard.tsx\",\n                        lineNumber: 40,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"uppercase text-gray-300 py-3\",\n                        children: [\n                            startDate,\n                            \" - \",\n                            endDate\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/ns056642/NS056642/javascript/react/shenoyninad.github.io/components/ExperienceCard.tsx\",\n                        lineNumber: 48,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        className: \"list-disc space-y-5 ml-5 text-md\",\n                        children: points.map(function(point) {\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                children: point\n                            }, void 0, false, {\n                                fileName: \"/Users/ns056642/NS056642/javascript/react/shenoyninad.github.io/components/ExperienceCard.tsx\",\n                                lineNumber: 54,\n                                columnNumber: 13\n                            }, _this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"/Users/ns056642/NS056642/javascript/react/shenoyninad.github.io/components/ExperienceCard.tsx\",\n                        lineNumber: 52,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ns056642/NS056642/javascript/react/shenoyninad.github.io/components/ExperienceCard.tsx\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ns056642/NS056642/javascript/react/shenoyninad.github.io/components/ExperienceCard.tsx\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, this);\n};\n_c = ExperienceCard;\nvar _c;\n$RefreshReg$(_c, \"ExperienceCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0V4cGVyaWVuY2VDYXJkLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUEwQjtBQUNhO0FBYXhCLFNBQVNFLGNBQWMsQ0FBQyxLQVEvQixFQUFFO1FBUFJDLFdBQVcsR0FEMEIsS0FRL0IsQ0FQTkEsV0FBVyxFQUNYQyxXQUFXLEdBRjBCLEtBUS9CLENBTk5BLFdBQVcsRUFDWEMsS0FBSyxHQUhnQyxLQVEvQixDQUxOQSxLQUFLLEVBQ0xDLFlBQVksR0FKeUIsS0FRL0IsQ0FKTkEsWUFBWSxFQUNaQyxTQUFTLEdBTDRCLEtBUS9CLENBSE5BLFNBQVMsRUFDVEMsT0FBTyxHQU44QixLQVEvQixDQUZOQSxPQUFPLEVBQ1BDLE1BQU0sR0FQK0IsS0FRL0IsQ0FETkEsTUFBTTs7SUFFTixxQkFDRSw4REFBQ0MsU0FBTztRQUFDQyxTQUFTLEVBQUMsMFFBQTBROzswQkFDM1IsOERBQUNWLHFEQUFVO2dCQUNUWSxPQUFPLEVBQUU7b0JBQUVDLE9BQU8sRUFBRSxDQUFDO29CQUFFQyxDQUFDLEVBQUUsQ0FBQyxHQUFHO2lCQUFFO2dCQUNoQ0MsV0FBVyxFQUFFO29CQUFFRixPQUFPLEVBQUUsQ0FBQztvQkFBRUMsQ0FBQyxFQUFFLENBQUM7aUJBQUU7Z0JBQ2pDRSxVQUFVLEVBQUU7b0JBQUVDLFFBQVEsRUFBRSxHQUFHO2lCQUFFO2dCQUM3QkMsUUFBUSxFQUFFO29CQUFFQyxJQUFJLEVBQUUsSUFBSTtpQkFBRTtnQkFDeEJULFNBQVMsRUFBQyw2RkFBNkY7Z0JBQ3ZHVSxHQUFHLEVBQUVsQixXQUFXOzs7OztvQkFDaEI7MEJBRUYsOERBQUNtQixLQUFHO2dCQUFDWCxTQUFTLEVBQUMsaUNBQWlDOztrQ0FDOUMsOERBQUNZLElBQUU7d0JBQUNaLFNBQVMsRUFBQyxtQ0FBbUM7a0NBQUVOLEtBQUs7Ozs7OzRCQUFNO2tDQUM5RCw4REFBQ21CLEdBQUM7d0JBQUNiLFNBQVMsRUFBQyxnREFBZ0Q7a0NBQzFEUCxXQUFXOzs7Ozs0QkFDVjtrQ0FDSiw4REFBQ2tCLEtBQUc7d0JBQUNYLFNBQVMsRUFBQyxxQkFBcUI7a0NBQ2pDTCxZQUFZLENBQUNtQixHQUFHLENBQUMsU0FBQ0MsVUFBVTtpREFDM0IsOERBQUNkLEtBQUc7Z0NBQ0ZELFNBQVMsRUFBQyx1QkFBdUI7Z0NBQ2pDVSxHQUFHLEVBQUVLLFVBQVU7Ozs7O3FDQUNmO3lCQUNILENBQUM7Ozs7OzRCQUNFO2tDQUNOLDhEQUFDRixHQUFDO3dCQUFDYixTQUFTLEVBQUMsOEJBQThCOzs0QkFDeENKLFNBQVM7NEJBQUMsS0FBRzs0QkFBQ0MsT0FBTzs7Ozs7OzRCQUNwQjtrQ0FFSiw4REFBQ21CLElBQUU7d0JBQUNoQixTQUFTLEVBQUMsa0NBQWtDO2tDQUM3Q0YsTUFBTSxDQUFDZ0IsR0FBRyxDQUFDLFNBQUNHLEtBQUs7aURBQ2hCLDhEQUFDQyxJQUFFOzBDQUFFRCxLQUFLOzs7OztxQ0FBTTt5QkFDakIsQ0FBQzs7Ozs7NEJBQ0M7Ozs7OztvQkFDRDs7Ozs7O1lBQ0UsQ0FDVjtDQUNIO0FBN0N1QjFCLEtBQUFBLGNBQWMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9FeHBlcmllbmNlQ2FyZC50c3g/ZjlkZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XG5pbXBvcnQganNJY29uIGZyb20gJy4uL2Fzc2V0L2ljb25zL2phdmEtc2NyaXB0LnBuZyc7XG5cbnR5cGUgUHJvcHMgPSB7XG4gIGNvbXBhbnlMb2dvOiBzdHJpbmc7XG4gIGNvbXBhbnlOYW1lOiBzdHJpbmc7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIHRlY2hub2xvZ2llczogQXJyYXk8c3RyaW5nPjtcbiAgc3RhcnREYXRlOiBzdHJpbmc7XG4gIGVuZERhdGU6IHN0cmluZztcbiAgcG9pbnRzOiBBcnJheTxzdHJpbmc+O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRXhwZXJpZW5jZUNhcmQoe1xuICBjb21wYW55TG9nbyxcbiAgY29tcGFueU5hbWUsXG4gIHRpdGxlLFxuICB0ZWNobm9sb2dpZXMsXG4gIHN0YXJ0RGF0ZSxcbiAgZW5kRGF0ZSxcbiAgcG9pbnRzLFxufTogUHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8YXJ0aWNsZSBjbGFzc05hbWU9J2ZsZXggZmxleC1jb2wgcm91bmRlZC1sZyBpdGVtcy1jZW50ZXIgc3BhY2UteS03IGZsZXgtc2hyaW5rLTAgdy1bMzAwcHhdIG1kOnctWzQ1MHB4XSBsZzp3LVs2MDBweF0gc25hcC1jZW50ZXIgYmctWyMyOTI5MjldIHAtMTAgb3BhY2l0eS00MCBib3JkZXIgYm9yZGVyLVsjMjkyOTI5XSBob3ZlcjpvcGFjaXR5LTEwMCBjdXJzb3ItcG9pbnRlciB0cmFuc2l0aW9uIGR1cmF0aW9uLTIwMCBvdmVyZmxvdy1oaWRkZW4gbXQtMjAgaG92ZXI6Ym9yZGVyLVsjRjdBQjBBXSc+XG4gICAgICA8bW90aW9uLmltZ1xuICAgICAgICBpbml0aWFsPXt7IG9wYWNpdHk6IDAsIHk6IC0xMDAgfX1cbiAgICAgICAgd2hpbGVJblZpZXc9e3sgb3BhY2l0eTogMSwgeTogMCB9fVxuICAgICAgICB0cmFuc2l0aW9uPXt7IGR1cmF0aW9uOiAxLjIgfX1cbiAgICAgICAgdmlld3BvcnQ9e3sgb25jZTogdHJ1ZSB9fVxuICAgICAgICBjbGFzc05hbWU9J2gtMTYgdy0xNiBtZDp3LTMyIG1kOmgtMzIgcm91bmRlZC1mdWxsIG9iamVjdC1jb3ZlciBvYmplY3QtY2VudGVyIGxnOmgtWzIwMHB4XSBsZzp3LVsyMDBweF0nXG4gICAgICAgIHNyYz17Y29tcGFueUxvZ299XG4gICAgICAvPlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0ncHgtMCBtZDpweC0xMCBvdmVyZmxvdy15LXNjcm9sbCc+XG4gICAgICAgIDxoNCBjbGFzc05hbWU9J2xnOnRleHQtMnhsIG1kOnRleHQteGwgZm9udC1saWdodCc+e3RpdGxlfTwvaDQ+XG4gICAgICAgIDxwIGNsYXNzTmFtZT0nZm9udC1ib2xkIG10LTEgbGc6dGV4dC14bCBtZDp0ZXh0LWJhc2UgdGV4dC1zbSc+XG4gICAgICAgICAge2NvbXBhbnlOYW1lfVxuICAgICAgICA8L3A+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IHNwYWNlLXgtMiBteS00Jz5cbiAgICAgICAgICB7dGVjaG5vbG9naWVzLm1hcCgodGVjaG5vbG9neSkgPT4gKFxuICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICBjbGFzc05hbWU9J21kOmgtOCBtZDp3LTggaC00IHctNCdcbiAgICAgICAgICAgICAgc3JjPXt0ZWNobm9sb2d5fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxwIGNsYXNzTmFtZT0ndXBwZXJjYXNlIHRleHQtZ3JheS0zMDAgcHktMyc+XG4gICAgICAgICAge3N0YXJ0RGF0ZX0gLSB7ZW5kRGF0ZX1cbiAgICAgICAgPC9wPlxuXG4gICAgICAgIDx1bCBjbGFzc05hbWU9J2xpc3QtZGlzYyBzcGFjZS15LTUgbWwtNSB0ZXh0LW1kJz5cbiAgICAgICAgICB7cG9pbnRzLm1hcCgocG9pbnQpID0+IChcbiAgICAgICAgICAgIDxsaT57cG9pbnR9PC9saT5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC91bD5cbiAgICAgIDwvZGl2PlxuICAgIDwvYXJ0aWNsZT5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsIm1vdGlvbiIsIkV4cGVyaWVuY2VDYXJkIiwiY29tcGFueUxvZ28iLCJjb21wYW55TmFtZSIsInRpdGxlIiwidGVjaG5vbG9naWVzIiwic3RhcnREYXRlIiwiZW5kRGF0ZSIsInBvaW50cyIsImFydGljbGUiLCJjbGFzc05hbWUiLCJpbWciLCJpbml0aWFsIiwib3BhY2l0eSIsInkiLCJ3aGlsZUluVmlldyIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsInZpZXdwb3J0Iiwib25jZSIsInNyYyIsImRpdiIsImg0IiwicCIsIm1hcCIsInRlY2hub2xvZ3kiLCJ1bCIsInBvaW50IiwibGkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/ExperienceCard.tsx\n"));

/***/ })

});
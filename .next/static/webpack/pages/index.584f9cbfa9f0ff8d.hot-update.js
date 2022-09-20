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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ExperienceCard; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n\n\n\nfunction ExperienceCard(param) {\n    var companyLogo = param.companyLogo, companyName = param.companyName, title = param.title, technologies = param.technologies, startDate = param.startDate, endDate = param.endDate, points = param.points;\n    var _this = this;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"article\", {\n        className: \"flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[300px] md:w-[450px] lg:w-[600px] snap-center bg-[#292929] p-10 opacity-40 border border-[#292929] hover:opacity-100 cursor-pointer transition duration-200 overflow-hidden mt-20 hover:border-[#F7AB0A]\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.img, {\n                initial: {\n                    opacity: 0,\n                    y: -100\n                },\n                whileInView: {\n                    opacity: 1,\n                    y: 0\n                },\n                transition: {\n                    duration: 1.2\n                },\n                viewport: {\n                    once: true\n                },\n                className: \"h-16 w-16 md:w-32 md:h-32 rounded-full object-cover object-center lg:h-[200px] lg:w-[200px]\",\n                src: companyLogo\n            }, void 0, false, {\n                fileName: \"/Users/ns056642/NS056642/javascript/react/shenoyninad.github.io/components/ExperienceCard.tsx\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"px-0 md:px-10 overflow-y-scroll\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                        className: \"lg:text-2xl md:text-xl font-light\",\n                        children: title\n                    }, void 0, false, {\n                        fileName: \"/Users/ns056642/NS056642/javascript/react/shenoyninad.github.io/components/ExperienceCard.tsx\",\n                        lineNumber: 36,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"font-bold mt-1 lg:text-xl\",\n                        children: companyName\n                    }, void 0, false, {\n                        fileName: \"/Users/ns056642/NS056642/javascript/react/shenoyninad.github.io/components/ExperienceCard.tsx\",\n                        lineNumber: 37,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex space-x-2 my-4\",\n                        children: technologies.map(function(technology) {\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                className: \"h-8 w-8\",\n                                src: technology\n                            }, void 0, false, {\n                                fileName: \"/Users/ns056642/NS056642/javascript/react/shenoyninad.github.io/components/ExperienceCard.tsx\",\n                                lineNumber: 40,\n                                columnNumber: 13\n                            }, _this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"/Users/ns056642/NS056642/javascript/react/shenoyninad.github.io/components/ExperienceCard.tsx\",\n                        lineNumber: 38,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"uppercase text-gray-300 py-3\",\n                        children: [\n                            startDate,\n                            \" - \",\n                            endDate\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/ns056642/NS056642/javascript/react/shenoyninad.github.io/components/ExperienceCard.tsx\",\n                        lineNumber: 46,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        className: \"list-disc space-y-5 ml-5 text-md\",\n                        children: points.map(function(point) {\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                children: point\n                            }, void 0, false, {\n                                fileName: \"/Users/ns056642/NS056642/javascript/react/shenoyninad.github.io/components/ExperienceCard.tsx\",\n                                lineNumber: 52,\n                                columnNumber: 13\n                            }, _this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"/Users/ns056642/NS056642/javascript/react/shenoyninad.github.io/components/ExperienceCard.tsx\",\n                        lineNumber: 50,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ns056642/NS056642/javascript/react/shenoyninad.github.io/components/ExperienceCard.tsx\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ns056642/NS056642/javascript/react/shenoyninad.github.io/components/ExperienceCard.tsx\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, this);\n};\n_c = ExperienceCard;\nvar _c;\n$RefreshReg$(_c, \"ExperienceCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0V4cGVyaWVuY2VDYXJkLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUEwQjtBQUNhO0FBYXhCLFNBQVNFLGNBQWMsQ0FBQyxLQVEvQixFQUFFO1FBUFJDLFdBQVcsR0FEMEIsS0FRL0IsQ0FQTkEsV0FBVyxFQUNYQyxXQUFXLEdBRjBCLEtBUS9CLENBTk5BLFdBQVcsRUFDWEMsS0FBSyxHQUhnQyxLQVEvQixDQUxOQSxLQUFLLEVBQ0xDLFlBQVksR0FKeUIsS0FRL0IsQ0FKTkEsWUFBWSxFQUNaQyxTQUFTLEdBTDRCLEtBUS9CLENBSE5BLFNBQVMsRUFDVEMsT0FBTyxHQU44QixLQVEvQixDQUZOQSxPQUFPLEVBQ1BDLE1BQU0sR0FQK0IsS0FRL0IsQ0FETkEsTUFBTTs7SUFFTixxQkFDRSw4REFBQ0MsU0FBTztRQUFDQyxTQUFTLEVBQUMsMFFBQTBROzswQkFDM1IsOERBQUNWLHFEQUFVO2dCQUNUWSxPQUFPLEVBQUU7b0JBQUVDLE9BQU8sRUFBRSxDQUFDO29CQUFFQyxDQUFDLEVBQUUsQ0FBQyxHQUFHO2lCQUFFO2dCQUNoQ0MsV0FBVyxFQUFFO29CQUFFRixPQUFPLEVBQUUsQ0FBQztvQkFBRUMsQ0FBQyxFQUFFLENBQUM7aUJBQUU7Z0JBQ2pDRSxVQUFVLEVBQUU7b0JBQUVDLFFBQVEsRUFBRSxHQUFHO2lCQUFFO2dCQUM3QkMsUUFBUSxFQUFFO29CQUFFQyxJQUFJLEVBQUUsSUFBSTtpQkFBRTtnQkFDeEJULFNBQVMsRUFBQyw2RkFBNkY7Z0JBQ3ZHVSxHQUFHLEVBQUVsQixXQUFXOzs7OztvQkFDaEI7MEJBRUYsOERBQUNtQixLQUFHO2dCQUFDWCxTQUFTLEVBQUMsaUNBQWlDOztrQ0FDOUMsOERBQUNZLElBQUU7d0JBQUNaLFNBQVMsRUFBQyxtQ0FBbUM7a0NBQUVOLEtBQUs7Ozs7OzRCQUFNO2tDQUM5RCw4REFBQ21CLEdBQUM7d0JBQUNiLFNBQVMsRUFBQywyQkFBMkI7a0NBQUVQLFdBQVc7Ozs7OzRCQUFLO2tDQUMxRCw4REFBQ2tCLEtBQUc7d0JBQUNYLFNBQVMsRUFBQyxxQkFBcUI7a0NBQ2pDTCxZQUFZLENBQUNtQixHQUFHLENBQUMsU0FBQ0MsVUFBVTtpREFDM0IsOERBQUNkLEtBQUc7Z0NBQ0ZELFNBQVMsRUFBQyxTQUFTO2dDQUNuQlUsR0FBRyxFQUFFSyxVQUFVOzs7OztxQ0FDZjt5QkFDSCxDQUFDOzs7Ozs0QkFDRTtrQ0FDTiw4REFBQ0YsR0FBQzt3QkFBQ2IsU0FBUyxFQUFDLDhCQUE4Qjs7NEJBQ3hDSixTQUFTOzRCQUFDLEtBQUc7NEJBQUNDLE9BQU87Ozs7Ozs0QkFDcEI7a0NBRUosOERBQUNtQixJQUFFO3dCQUFDaEIsU0FBUyxFQUFDLGtDQUFrQztrQ0FDN0NGLE1BQU0sQ0FBQ2dCLEdBQUcsQ0FBQyxTQUFDRyxLQUFLO2lEQUNoQiw4REFBQ0MsSUFBRTswQ0FBRUQsS0FBSzs7Ozs7cUNBQU07eUJBQ2pCLENBQUM7Ozs7OzRCQUNDOzs7Ozs7b0JBQ0Q7Ozs7OztZQUNFLENBQ1Y7Q0FDSDtBQTNDdUIxQixLQUFBQSxjQUFjIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvRXhwZXJpZW5jZUNhcmQudHN4P2Y5ZGUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xuaW1wb3J0IGpzSWNvbiBmcm9tICcuLi9hc3NldC9pY29ucy9qYXZhLXNjcmlwdC5wbmcnO1xuXG50eXBlIFByb3BzID0ge1xuICBjb21wYW55TG9nbzogc3RyaW5nO1xuICBjb21wYW55TmFtZTogc3RyaW5nO1xuICB0aXRsZTogc3RyaW5nO1xuICB0ZWNobm9sb2dpZXM6IEFycmF5PHN0cmluZz47XG4gIHN0YXJ0RGF0ZTogc3RyaW5nO1xuICBlbmREYXRlOiBzdHJpbmc7XG4gIHBvaW50czogQXJyYXk8c3RyaW5nPjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEV4cGVyaWVuY2VDYXJkKHtcbiAgY29tcGFueUxvZ28sXG4gIGNvbXBhbnlOYW1lLFxuICB0aXRsZSxcbiAgdGVjaG5vbG9naWVzLFxuICBzdGFydERhdGUsXG4gIGVuZERhdGUsXG4gIHBvaW50cyxcbn06IFByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPGFydGljbGUgY2xhc3NOYW1lPSdmbGV4IGZsZXgtY29sIHJvdW5kZWQtbGcgaXRlbXMtY2VudGVyIHNwYWNlLXktNyBmbGV4LXNocmluay0wIHctWzMwMHB4XSBtZDp3LVs0NTBweF0gbGc6dy1bNjAwcHhdIHNuYXAtY2VudGVyIGJnLVsjMjkyOTI5XSBwLTEwIG9wYWNpdHktNDAgYm9yZGVyIGJvcmRlci1bIzI5MjkyOV0gaG92ZXI6b3BhY2l0eS0xMDAgY3Vyc29yLXBvaW50ZXIgdHJhbnNpdGlvbiBkdXJhdGlvbi0yMDAgb3ZlcmZsb3ctaGlkZGVuIG10LTIwIGhvdmVyOmJvcmRlci1bI0Y3QUIwQV0nPlxuICAgICAgPG1vdGlvbi5pbWdcbiAgICAgICAgaW5pdGlhbD17eyBvcGFjaXR5OiAwLCB5OiAtMTAwIH19XG4gICAgICAgIHdoaWxlSW5WaWV3PXt7IG9wYWNpdHk6IDEsIHk6IDAgfX1cbiAgICAgICAgdHJhbnNpdGlvbj17eyBkdXJhdGlvbjogMS4yIH19XG4gICAgICAgIHZpZXdwb3J0PXt7IG9uY2U6IHRydWUgfX1cbiAgICAgICAgY2xhc3NOYW1lPSdoLTE2IHctMTYgbWQ6dy0zMiBtZDpoLTMyIHJvdW5kZWQtZnVsbCBvYmplY3QtY292ZXIgb2JqZWN0LWNlbnRlciBsZzpoLVsyMDBweF0gbGc6dy1bMjAwcHhdJ1xuICAgICAgICBzcmM9e2NvbXBhbnlMb2dvfVxuICAgICAgLz5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9J3B4LTAgbWQ6cHgtMTAgb3ZlcmZsb3cteS1zY3JvbGwnPlxuICAgICAgICA8aDQgY2xhc3NOYW1lPSdsZzp0ZXh0LTJ4bCBtZDp0ZXh0LXhsIGZvbnQtbGlnaHQnPnt0aXRsZX08L2g0PlxuICAgICAgICA8cCBjbGFzc05hbWU9J2ZvbnQtYm9sZCBtdC0xIGxnOnRleHQteGwnPntjb21wYW55TmFtZX08L3A+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IHNwYWNlLXgtMiBteS00Jz5cbiAgICAgICAgICB7dGVjaG5vbG9naWVzLm1hcCgodGVjaG5vbG9neSkgPT4gKFxuICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICBjbGFzc05hbWU9J2gtOCB3LTgnXG4gICAgICAgICAgICAgIHNyYz17dGVjaG5vbG9neX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8cCBjbGFzc05hbWU9J3VwcGVyY2FzZSB0ZXh0LWdyYXktMzAwIHB5LTMnPlxuICAgICAgICAgIHtzdGFydERhdGV9IC0ge2VuZERhdGV9XG4gICAgICAgIDwvcD5cblxuICAgICAgICA8dWwgY2xhc3NOYW1lPSdsaXN0LWRpc2Mgc3BhY2UteS01IG1sLTUgdGV4dC1tZCc+XG4gICAgICAgICAge3BvaW50cy5tYXAoKHBvaW50KSA9PiAoXG4gICAgICAgICAgICA8bGk+e3BvaW50fTwvbGk+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvdWw+XG4gICAgICA8L2Rpdj5cbiAgICA8L2FydGljbGU+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJtb3Rpb24iLCJFeHBlcmllbmNlQ2FyZCIsImNvbXBhbnlMb2dvIiwiY29tcGFueU5hbWUiLCJ0aXRsZSIsInRlY2hub2xvZ2llcyIsInN0YXJ0RGF0ZSIsImVuZERhdGUiLCJwb2ludHMiLCJhcnRpY2xlIiwiY2xhc3NOYW1lIiwiaW1nIiwiaW5pdGlhbCIsIm9wYWNpdHkiLCJ5Iiwid2hpbGVJblZpZXciLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJ2aWV3cG9ydCIsIm9uY2UiLCJzcmMiLCJkaXYiLCJoNCIsInAiLCJtYXAiLCJ0ZWNobm9sb2d5IiwidWwiLCJwb2ludCIsImxpIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/ExperienceCard.tsx\n"));

/***/ })

});
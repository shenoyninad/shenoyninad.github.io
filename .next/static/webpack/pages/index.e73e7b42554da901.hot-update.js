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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ExperienceCard; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var _asset_icons_java_script_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../asset/icons/java-script.png */ \"./asset/icons/java-script.png\");\n\n\n\n\nfunction ExperienceCard(param) {\n    var companyLogo = param.companyLogo, companyName = param.companyName, title = param.title, startDate = param.startDate, endDate = param.endDate, points = param.points;\n    var _this = this;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"article\", {\n        className: \"flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[300px] md:w-[450px] xl:w-[600px] snap-center bg-[#292929] p-10 opacity-40 border border-[#292929] hover:opacity-100 cursor-pointer transition duration-200 overflow-hidden mt-20 hover:border-[#F7AB0A]\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.img, {\n                initial: {\n                    opacity: 0,\n                    y: -100\n                },\n                whileInView: {\n                    opacity: 1,\n                    y: 0\n                },\n                transition: {\n                    duration: 1.2\n                },\n                viewport: {\n                    once: true\n                },\n                className: \"w-32 h-32 rounded-full object-cover object-center xl:h-[200px] xl:w-[200px]\",\n                src: companyLogo\n            }, void 0, false, {\n                fileName: \"/Users/ns056642/NS056642/javascript/react/shenoyninad.github.io/components/ExperienceCard.tsx\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"px-0 md:px-10 overflow-y-scroll\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                        className: \"text-2xl font-light\",\n                        children: title\n                    }, void 0, false, {\n                        fileName: \"/Users/ns056642/NS056642/javascript/react/shenoyninad.github.io/components/ExperienceCard.tsx\",\n                        lineNumber: 35,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"font-bold mt-1 text-xl\",\n                        children: companyName\n                    }, void 0, false, {\n                        fileName: \"/Users/ns056642/NS056642/javascript/react/shenoyninad.github.io/components/ExperienceCard.tsx\",\n                        lineNumber: 36,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex space-x-2 my-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                className: \"h-8 w-8\",\n                                src: _asset_icons_java_script_png__WEBPACK_IMPORTED_MODULE_2__[\"default\"].src\n                            }, void 0, false, {\n                                fileName: \"/Users/ns056642/NS056642/javascript/react/shenoyninad.github.io/components/ExperienceCard.tsx\",\n                                lineNumber: 38,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                className: \"h-8 w-8\",\n                                src: _asset_icons_java_script_png__WEBPACK_IMPORTED_MODULE_2__[\"default\"].src\n                            }, void 0, false, {\n                                fileName: \"/Users/ns056642/NS056642/javascript/react/shenoyninad.github.io/components/ExperienceCard.tsx\",\n                                lineNumber: 42,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                className: \"h-8 w-8\",\n                                src: _asset_icons_java_script_png__WEBPACK_IMPORTED_MODULE_2__[\"default\"].src\n                            }, void 0, false, {\n                                fileName: \"/Users/ns056642/NS056642/javascript/react/shenoyninad.github.io/components/ExperienceCard.tsx\",\n                                lineNumber: 46,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/ns056642/NS056642/javascript/react/shenoyninad.github.io/components/ExperienceCard.tsx\",\n                        lineNumber: 37,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"uppercase text-gray-300 py-3\",\n                        children: [\n                            startDate,\n                            \" - \",\n                            endDate\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/ns056642/NS056642/javascript/react/shenoyninad.github.io/components/ExperienceCard.tsx\",\n                        lineNumber: 51,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        className: \"list-disc space-y-5 ml-5 text-md\",\n                        children: points.map(function(point) {\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                children: point\n                            }, void 0, false, {\n                                fileName: \"/Users/ns056642/NS056642/javascript/react/shenoyninad.github.io/components/ExperienceCard.tsx\",\n                                lineNumber: 57,\n                                columnNumber: 13\n                            }, _this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"/Users/ns056642/NS056642/javascript/react/shenoyninad.github.io/components/ExperienceCard.tsx\",\n                        lineNumber: 55,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ns056642/NS056642/javascript/react/shenoyninad.github.io/components/ExperienceCard.tsx\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ns056642/NS056642/javascript/react/shenoyninad.github.io/components/ExperienceCard.tsx\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, this);\n};\n_c = ExperienceCard;\nvar _c;\n$RefreshReg$(_c, \"ExperienceCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0V4cGVyaWVuY2VDYXJkLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBMEI7QUFDYTtBQUNhO0FBWXJDLFNBQVNHLGNBQWMsQ0FBQyxLQU8vQixFQUFFO1FBTlJDLFdBQVcsR0FEMEIsS0FPL0IsQ0FOTkEsV0FBVyxFQUNYQyxXQUFXLEdBRjBCLEtBTy9CLENBTE5BLFdBQVcsRUFDWEMsS0FBSyxHQUhnQyxLQU8vQixDQUpOQSxLQUFLLEVBQ0xDLFNBQVMsR0FKNEIsS0FPL0IsQ0FITkEsU0FBUyxFQUNUQyxPQUFPLEdBTDhCLEtBTy9CLENBRk5BLE9BQU8sRUFDUEMsTUFBTSxHQU4rQixLQU8vQixDQUROQSxNQUFNOztJQUVOLHFCQUNFLDhEQUFDQyxTQUFPO1FBQUNDLFNBQVMsRUFBQywwUUFBMFE7OzBCQUMzUiw4REFBQ1YscURBQVU7Z0JBQ1RZLE9BQU8sRUFBRTtvQkFBRUMsT0FBTyxFQUFFLENBQUM7b0JBQUVDLENBQUMsRUFBRSxDQUFDLEdBQUc7aUJBQUU7Z0JBQ2hDQyxXQUFXLEVBQUU7b0JBQUVGLE9BQU8sRUFBRSxDQUFDO29CQUFFQyxDQUFDLEVBQUUsQ0FBQztpQkFBRTtnQkFDakNFLFVBQVUsRUFBRTtvQkFBRUMsUUFBUSxFQUFFLEdBQUc7aUJBQUU7Z0JBQzdCQyxRQUFRLEVBQUU7b0JBQUVDLElBQUksRUFBRSxJQUFJO2lCQUFFO2dCQUN4QlQsU0FBUyxFQUFDLDZFQUE2RTtnQkFDdkZVLEdBQUcsRUFBRWpCLFdBQVc7Ozs7O29CQUNoQjswQkFFRiw4REFBQ2tCLEtBQUc7Z0JBQUNYLFNBQVMsRUFBQyxpQ0FBaUM7O2tDQUM5Qyw4REFBQ1ksSUFBRTt3QkFBQ1osU0FBUyxFQUFDLHFCQUFxQjtrQ0FBRUwsS0FBSzs7Ozs7NEJBQU07a0NBQ2hELDhEQUFDa0IsR0FBQzt3QkFBQ2IsU0FBUyxFQUFDLHdCQUF3QjtrQ0FBRU4sV0FBVzs7Ozs7NEJBQUs7a0NBQ3ZELDhEQUFDaUIsS0FBRzt3QkFBQ1gsU0FBUyxFQUFDLHFCQUFxQjs7MENBQ2xDLDhEQUFDQyxLQUFHO2dDQUNGRCxTQUFTLEVBQUMsU0FBUztnQ0FDbkJVLEdBQUcsRUFBRW5CLHdFQUFVOzs7OztvQ0FDZjswQ0FDRiw4REFBQ1UsS0FBRztnQ0FDRkQsU0FBUyxFQUFDLFNBQVM7Z0NBQ25CVSxHQUFHLEVBQUVuQix3RUFBVTs7Ozs7b0NBQ2Y7MENBQ0YsOERBQUNVLEtBQUc7Z0NBQ0ZELFNBQVMsRUFBQyxTQUFTO2dDQUNuQlUsR0FBRyxFQUFFbkIsd0VBQVU7Ozs7O29DQUNmOzs7Ozs7NEJBQ0U7a0NBQ04sOERBQUNzQixHQUFDO3dCQUFDYixTQUFTLEVBQUMsOEJBQThCOzs0QkFDeENKLFNBQVM7NEJBQUMsS0FBRzs0QkFBQ0MsT0FBTzs7Ozs7OzRCQUNwQjtrQ0FFSiw4REFBQ2lCLElBQUU7d0JBQUNkLFNBQVMsRUFBQyxrQ0FBa0M7a0NBQzdDRixNQUFNLENBQUNpQixHQUFHLENBQUMsU0FBQ0MsS0FBSztpREFDaEIsOERBQUNDLElBQUU7MENBQUVELEtBQUs7Ozs7O3FDQUFNO3lCQUNqQixDQUFDOzs7Ozs0QkFDQzs7Ozs7O29CQUNEOzs7Ozs7WUFDRSxDQUNWO0NBQ0g7QUFoRHVCeEIsS0FBQUEsY0FBYyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0V4cGVyaWVuY2VDYXJkLnRzeD9mOWRlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJztcbmltcG9ydCBqc0ljb24gZnJvbSAnLi4vYXNzZXQvaWNvbnMvamF2YS1zY3JpcHQucG5nJztcbi8vaW1wb3J0IG1lZGljaUxvZ28gZnJvbSAnLi4vYXNzZXQvd29ya0V4L21lZGljaS10ZWNobm9sb2dpZXMuanBnJztcblxudHlwZSBQcm9wcyA9IHtcbiAgY29tcGFueUxvZ286IHN0cmluZztcbiAgY29tcGFueU5hbWU6IHN0cmluZztcbiAgdGl0bGU6IHN0cmluZztcbiAgc3RhcnREYXRlOiBzdHJpbmc7XG4gIGVuZERhdGU6IHN0cmluZztcbiAgcG9pbnRzOiBBcnJheTxzdHJpbmc+O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRXhwZXJpZW5jZUNhcmQoe1xuICBjb21wYW55TG9nbyxcbiAgY29tcGFueU5hbWUsXG4gIHRpdGxlLFxuICBzdGFydERhdGUsXG4gIGVuZERhdGUsXG4gIHBvaW50cyxcbn06IFByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPGFydGljbGUgY2xhc3NOYW1lPSdmbGV4IGZsZXgtY29sIHJvdW5kZWQtbGcgaXRlbXMtY2VudGVyIHNwYWNlLXktNyBmbGV4LXNocmluay0wIHctWzMwMHB4XSBtZDp3LVs0NTBweF0geGw6dy1bNjAwcHhdIHNuYXAtY2VudGVyIGJnLVsjMjkyOTI5XSBwLTEwIG9wYWNpdHktNDAgYm9yZGVyIGJvcmRlci1bIzI5MjkyOV0gaG92ZXI6b3BhY2l0eS0xMDAgY3Vyc29yLXBvaW50ZXIgdHJhbnNpdGlvbiBkdXJhdGlvbi0yMDAgb3ZlcmZsb3ctaGlkZGVuIG10LTIwIGhvdmVyOmJvcmRlci1bI0Y3QUIwQV0nPlxuICAgICAgPG1vdGlvbi5pbWdcbiAgICAgICAgaW5pdGlhbD17eyBvcGFjaXR5OiAwLCB5OiAtMTAwIH19XG4gICAgICAgIHdoaWxlSW5WaWV3PXt7IG9wYWNpdHk6IDEsIHk6IDAgfX1cbiAgICAgICAgdHJhbnNpdGlvbj17eyBkdXJhdGlvbjogMS4yIH19XG4gICAgICAgIHZpZXdwb3J0PXt7IG9uY2U6IHRydWUgfX1cbiAgICAgICAgY2xhc3NOYW1lPSd3LTMyIGgtMzIgcm91bmRlZC1mdWxsIG9iamVjdC1jb3ZlciBvYmplY3QtY2VudGVyIHhsOmgtWzIwMHB4XSB4bDp3LVsyMDBweF0nXG4gICAgICAgIHNyYz17Y29tcGFueUxvZ299XG4gICAgICAvPlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0ncHgtMCBtZDpweC0xMCBvdmVyZmxvdy15LXNjcm9sbCc+XG4gICAgICAgIDxoNCBjbGFzc05hbWU9J3RleHQtMnhsIGZvbnQtbGlnaHQnPnt0aXRsZX08L2g0PlxuICAgICAgICA8cCBjbGFzc05hbWU9J2ZvbnQtYm9sZCBtdC0xIHRleHQteGwnPntjb21wYW55TmFtZX08L3A+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IHNwYWNlLXgtMiBteS00Jz5cbiAgICAgICAgICA8aW1nXG4gICAgICAgICAgICBjbGFzc05hbWU9J2gtOCB3LTgnXG4gICAgICAgICAgICBzcmM9e2pzSWNvbi5zcmN9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8aW1nXG4gICAgICAgICAgICBjbGFzc05hbWU9J2gtOCB3LTgnXG4gICAgICAgICAgICBzcmM9e2pzSWNvbi5zcmN9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8aW1nXG4gICAgICAgICAgICBjbGFzc05hbWU9J2gtOCB3LTgnXG4gICAgICAgICAgICBzcmM9e2pzSWNvbi5zcmN9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxwIGNsYXNzTmFtZT0ndXBwZXJjYXNlIHRleHQtZ3JheS0zMDAgcHktMyc+XG4gICAgICAgICAge3N0YXJ0RGF0ZX0gLSB7ZW5kRGF0ZX1cbiAgICAgICAgPC9wPlxuXG4gICAgICAgIDx1bCBjbGFzc05hbWU9J2xpc3QtZGlzYyBzcGFjZS15LTUgbWwtNSB0ZXh0LW1kJz5cbiAgICAgICAgICB7cG9pbnRzLm1hcCgocG9pbnQpID0+IChcbiAgICAgICAgICAgIDxsaT57cG9pbnR9PC9saT5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC91bD5cbiAgICAgIDwvZGl2PlxuICAgIDwvYXJ0aWNsZT5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsIm1vdGlvbiIsImpzSWNvbiIsIkV4cGVyaWVuY2VDYXJkIiwiY29tcGFueUxvZ28iLCJjb21wYW55TmFtZSIsInRpdGxlIiwic3RhcnREYXRlIiwiZW5kRGF0ZSIsInBvaW50cyIsImFydGljbGUiLCJjbGFzc05hbWUiLCJpbWciLCJpbml0aWFsIiwib3BhY2l0eSIsInkiLCJ3aGlsZUluVmlldyIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsInZpZXdwb3J0Iiwib25jZSIsInNyYyIsImRpdiIsImg0IiwicCIsInVsIiwibWFwIiwicG9pbnQiLCJsaSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/ExperienceCard.tsx\n"));

/***/ })

});
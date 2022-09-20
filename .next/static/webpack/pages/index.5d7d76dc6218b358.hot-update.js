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

/***/ "./components/Projects.tsx":
/*!*********************************!*\
  !*** ./components/Projects.tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Projects; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_throw_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/src/_throw.mjs */ \"./node_modules/@swc/helpers/src/_throw.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _data_projects_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/projects.json */ \"./data/projects.json\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n\n\n\n\n\nfunction Projects(param) {\n    var param = param !== null ? param : (0,_swc_helpers_src_throw_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(new TypeError(\"Cannot destructure undefined\"));\n    var _this = this;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"min-h-screen relative justify-evenly items-center text-left flex flex-col overflow-hidden md:flex-row max-w-full mx-auto z-0\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                className: \"absolute text-gray-500 uppercase tracking-[15px] lg:top-24 mg:top-20 top-16 lg:text-xl md:text-lg text-sm\",\n                children: \"Projects\"\n            }, void 0, false, {\n                fileName: \"/Users/ns056642/NS056642/javascript/react/shenoyninad.github.io/components/Projects.tsx\",\n                lineNumber: 11,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"scrollbar-thin scrollbar-thumb-[#F7AB0A]/80 relative flex w-full snap-mandatory snap-x overflow-x-scroll overflow-y-hidden z-20\",\n                children: _data_projects_json__WEBPACK_IMPORTED_MODULE_2__.map(function(project, index) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex-shrink-0 w-screen snap-center flex flex-col items-center p-20 md:p-44\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.img, {\n                                initial: {\n                                    opacity: 0,\n                                    y: -100\n                                },\n                                whileInView: {\n                                    opacity: 1,\n                                    y: 0\n                                },\n                                transition: {\n                                    duration: 1\n                                },\n                                viewport: {\n                                    once: true\n                                },\n                                src: project.projectLogo,\n                                className: \"w-20 h-20\"\n                            }, void 0, false, {\n                                fileName: \"/Users/ns056642/NS056642/javascript/react/shenoyninad.github.io/components/Projects.tsx\",\n                                lineNumber: 18,\n                                columnNumber: 13\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                        className: \"text-2xl font-semibold text-center p-5\",\n                                        children: [\n                                            \"Project \",\n                                            index + 1,\n                                            \" of \",\n                                            _data_projects_json__WEBPACK_IMPORTED_MODULE_2__.length,\n                                            \":\",\n                                            \" \",\n                                            project.projectName\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/ns056642/NS056642/javascript/react/shenoyninad.github.io/components/Projects.tsx\",\n                                        lineNumber: 27,\n                                        columnNumber: 15\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"text-lg text-center md:text-left\",\n                                        children: project.description\n                                    }, void 0, false, {\n                                        fileName: \"/Users/ns056642/NS056642/javascript/react/shenoyninad.github.io/components/Projects.tsx\",\n                                        lineNumber: 31,\n                                        columnNumber: 15\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/ns056642/NS056642/javascript/react/shenoyninad.github.io/components/Projects.tsx\",\n                                lineNumber: 26,\n                                columnNumber: 13\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex md:flex-row flex-col md:space-x-5 md:space-y-0 mt-8\",\n                                children: [\n                                    project.buildAvailable ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: \"bg-[#F7AB0A] text-black font-bold rounded-sm px-10 py-3 cursor-pointer text-md\",\n                                        children: \"Take me to the build\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/ns056642/NS056642/javascript/react/shenoyninad.github.io/components/Projects.tsx\",\n                                        lineNumber: 37,\n                                        columnNumber: 17\n                                    }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n                                        fileName: \"/Users/ns056642/NS056642/javascript/react/shenoyninad.github.io/components/Projects.tsx\",\n                                        lineNumber: 41,\n                                        columnNumber: 17\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: \"bg-[#F7AB0A] text-black font-bold rounded-sm px-10 py-3 cursor-pointer text-md\",\n                                        children: \"Take me to the repo\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/ns056642/NS056642/javascript/react/shenoyninad.github.io/components/Projects.tsx\",\n                                        lineNumber: 43,\n                                        columnNumber: 15\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/ns056642/NS056642/javascript/react/shenoyninad.github.io/components/Projects.tsx\",\n                                lineNumber: 35,\n                                columnNumber: 13\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/ns056642/NS056642/javascript/react/shenoyninad.github.io/components/Projects.tsx\",\n                        lineNumber: 17,\n                        columnNumber: 11\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/ns056642/NS056642/javascript/react/shenoyninad.github.io/components/Projects.tsx\",\n                lineNumber: 15,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"absolute w-full top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12\"\n            }, void 0, false, {\n                fileName: \"/Users/ns056642/NS056642/javascript/react/shenoyninad.github.io/components/Projects.tsx\",\n                lineNumber: 51,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ns056642/NS056642/javascript/react/shenoyninad.github.io/components/Projects.tsx\",\n        lineNumber: 10,\n        columnNumber: 5\n    }, this);\n};\n_c = Projects;\nvar _c;\n$RefreshReg$(_c, \"Projects\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Byb2plY3RzLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOztBQUEwQjtBQUV1QjtBQUNWO0FBSXhCLFNBQVNHLFFBQVEsQ0FBQyxLQUFTLEVBQUU7UUFBWCxLQUFTLEdBQVQsS0FBUyxZQUFULEtBQVM7O0lBQ3hDLHFCQUNFLDhEQUFDQyxLQUFHO1FBQUNDLFNBQVMsRUFBQyw4SEFBOEg7OzBCQUMzSSw4REFBQ0MsSUFBRTtnQkFBQ0QsU0FBUyxFQUFDLDJHQUEyRzswQkFBQyxVQUUxSDs7Ozs7b0JBQUs7MEJBRUwsOERBQUNELEtBQUc7Z0JBQUNDLFNBQVMsRUFBQyxpSUFBaUk7MEJBQzdJSixvREFBZ0IsQ0FBQyxTQUFDTyxPQUFPLEVBQUVDLEtBQUs7eUNBQy9CLDhEQUFDTCxLQUFHO3dCQUFDQyxTQUFTLEVBQUMsNEVBQTRFOzswQ0FDekYsOERBQUNILHFEQUFVO2dDQUNUUyxPQUFPLEVBQUU7b0NBQUVDLE9BQU8sRUFBRSxDQUFDO29DQUFFQyxDQUFDLEVBQUUsQ0FBQyxHQUFHO2lDQUFFO2dDQUNoQ0MsV0FBVyxFQUFFO29DQUFFRixPQUFPLEVBQUUsQ0FBQztvQ0FBRUMsQ0FBQyxFQUFFLENBQUM7aUNBQUU7Z0NBQ2pDRSxVQUFVLEVBQUU7b0NBQUVDLFFBQVEsRUFBRSxDQUFDO2lDQUFFO2dDQUMzQkMsUUFBUSxFQUFFO29DQUFFQyxJQUFJLEVBQUUsSUFBSTtpQ0FBRTtnQ0FDeEJDLEdBQUcsRUFBRVgsT0FBTyxDQUFDWSxXQUFXO2dDQUN4QmYsU0FBUyxFQUFDLFdBQVc7Ozs7O3FDQUNyQjswQ0FDRiw4REFBQ0QsS0FBRzs7a0RBQ0YsOERBQUNpQixJQUFFO3dDQUFDaEIsU0FBUyxFQUFDLHdDQUF3Qzs7NENBQUMsVUFDN0M7NENBQUNJLEtBQUssR0FBRyxDQUFDOzRDQUFDLE1BQUk7NENBQUNSLHVEQUFtQjs0Q0FBQyxHQUFDOzRDQUFDLEdBQUc7NENBQ2hETyxPQUFPLENBQUNlLFdBQVc7Ozs7Ozs2Q0FDakI7a0RBQ0wsOERBQUNDLEdBQUM7d0NBQUNuQixTQUFTLEVBQUMsa0NBQWtDO2tEQUM1Q0csT0FBTyxDQUFDaUIsV0FBVzs7Ozs7NkNBQ2xCOzs7Ozs7cUNBQ0E7MENBQ04sOERBQUNyQixLQUFHO2dDQUFDQyxTQUFTLEVBQUMsMERBQTBEOztvQ0FDdEVHLE9BQU8sQ0FBQ2tCLGNBQWMsaUJBQ3JCLDhEQUFDQyxRQUFNO3dDQUFDdEIsU0FBUyxFQUFDLGdGQUFnRjtrREFBQyxzQkFFbkc7Ozs7OzZDQUFTLGlCQUVULDhEQUFDRCxLQUFHOzs7OzZDQUFHO2tEQUVULDhEQUFDdUIsUUFBTTt3Q0FBQ3RCLFNBQVMsRUFBQyxnRkFBZ0Y7a0RBQUMscUJBRW5HOzs7Ozs2Q0FBUzs7Ozs7O3FDQUNMOzs7Ozs7NkJBQ0Y7aUJBQ1AsQ0FBQzs7Ozs7b0JBQ0U7MEJBRU4sOERBQUNELEtBQUc7Z0JBQUNDLFNBQVMsRUFBQyx1RUFBdUU7Ozs7O29CQUFPOzs7Ozs7WUFDekYsQ0FDTjtDQUNIO0FBOUN1QkYsS0FBQUEsUUFBUSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1Byb2plY3RzLnRzeD9mM2Y4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgcHJvamVjdEljb24gZnJvbSAnLi4vYXNzZXQvaWNvbnMvc2NyaXB0LnBuZyc7XG5pbXBvcnQgcHJvamVjdHNKU09OIGZyb20gJy4uL2RhdGEvcHJvamVjdHMuanNvbic7XG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJztcblxudHlwZSBQcm9wcyA9IHt9O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9qZWN0cyh7fTogUHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT0nbWluLWgtc2NyZWVuIHJlbGF0aXZlIGp1c3RpZnktZXZlbmx5IGl0ZW1zLWNlbnRlciB0ZXh0LWxlZnQgZmxleCBmbGV4LWNvbCBvdmVyZmxvdy1oaWRkZW4gbWQ6ZmxleC1yb3cgbWF4LXctZnVsbCBteC1hdXRvIHotMCc+XG4gICAgICA8aDMgY2xhc3NOYW1lPSdhYnNvbHV0ZSB0ZXh0LWdyYXktNTAwIHVwcGVyY2FzZSB0cmFja2luZy1bMTVweF0gbGc6dG9wLTI0IG1nOnRvcC0yMCB0b3AtMTYgbGc6dGV4dC14bCBtZDp0ZXh0LWxnIHRleHQtc20nPlxuICAgICAgICBQcm9qZWN0c1xuICAgICAgPC9oMz5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9J3Njcm9sbGJhci10aGluIHNjcm9sbGJhci10aHVtYi1bI0Y3QUIwQV0vODAgcmVsYXRpdmUgZmxleCB3LWZ1bGwgc25hcC1tYW5kYXRvcnkgc25hcC14IG92ZXJmbG93LXgtc2Nyb2xsIG92ZXJmbG93LXktaGlkZGVuIHotMjAnPlxuICAgICAgICB7cHJvamVjdHNKU09OLm1hcCgocHJvamVjdCwgaW5kZXgpID0+IChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleC1zaHJpbmstMCB3LXNjcmVlbiBzbmFwLWNlbnRlciBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBwLTIwIG1kOnAtNDQnPlxuICAgICAgICAgICAgPG1vdGlvbi5pbWdcbiAgICAgICAgICAgICAgaW5pdGlhbD17eyBvcGFjaXR5OiAwLCB5OiAtMTAwIH19XG4gICAgICAgICAgICAgIHdoaWxlSW5WaWV3PXt7IG9wYWNpdHk6IDEsIHk6IDAgfX1cbiAgICAgICAgICAgICAgdHJhbnNpdGlvbj17eyBkdXJhdGlvbjogMSB9fVxuICAgICAgICAgICAgICB2aWV3cG9ydD17eyBvbmNlOiB0cnVlIH19XG4gICAgICAgICAgICAgIHNyYz17cHJvamVjdC5wcm9qZWN0TG9nb31cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPSd3LTIwIGgtMjAnXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT0ndGV4dC0yeGwgZm9udC1zZW1pYm9sZCB0ZXh0LWNlbnRlciBwLTUnPlxuICAgICAgICAgICAgICAgIFByb2plY3Qge2luZGV4ICsgMX0gb2Yge3Byb2plY3RzSlNPTi5sZW5ndGh9OnsnICd9XG4gICAgICAgICAgICAgICAge3Byb2plY3QucHJvamVjdE5hbWV9XG4gICAgICAgICAgICAgIDwvaDQ+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0ndGV4dC1sZyB0ZXh0LWNlbnRlciBtZDp0ZXh0LWxlZnQnPlxuICAgICAgICAgICAgICAgIHtwcm9qZWN0LmRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IG1kOmZsZXgtcm93IGZsZXgtY29sIG1kOnNwYWNlLXgtNSBtZDpzcGFjZS15LTAgbXQtOCc+XG4gICAgICAgICAgICAgIHtwcm9qZWN0LmJ1aWxkQXZhaWxhYmxlID8gKFxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdiZy1bI0Y3QUIwQV0gdGV4dC1ibGFjayBmb250LWJvbGQgcm91bmRlZC1zbSBweC0xMCBweS0zIGN1cnNvci1wb2ludGVyIHRleHQtbWQnPlxuICAgICAgICAgICAgICAgICAgVGFrZSBtZSB0byB0aGUgYnVpbGRcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICA8ZGl2IC8+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdiZy1bI0Y3QUIwQV0gdGV4dC1ibGFjayBmb250LWJvbGQgcm91bmRlZC1zbSBweC0xMCBweS0zIGN1cnNvci1wb2ludGVyIHRleHQtbWQnPlxuICAgICAgICAgICAgICAgIFRha2UgbWUgdG8gdGhlIHJlcG9cbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9J2Fic29sdXRlIHctZnVsbCB0b3AtWzMwJV0gYmctWyNGN0FCMEFdLzEwIGxlZnQtMCBoLVs1MDBweF0gLXNrZXcteS0xMic+PC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJwcm9qZWN0c0pTT04iLCJtb3Rpb24iLCJQcm9qZWN0cyIsImRpdiIsImNsYXNzTmFtZSIsImgzIiwibWFwIiwicHJvamVjdCIsImluZGV4IiwiaW1nIiwiaW5pdGlhbCIsIm9wYWNpdHkiLCJ5Iiwid2hpbGVJblZpZXciLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJ2aWV3cG9ydCIsIm9uY2UiLCJzcmMiLCJwcm9qZWN0TG9nbyIsImg0IiwibGVuZ3RoIiwicHJvamVjdE5hbWUiLCJwIiwiZGVzY3JpcHRpb24iLCJidWlsZEF2YWlsYWJsZSIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Projects.tsx\n"));

/***/ })

});
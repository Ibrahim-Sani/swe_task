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

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_NavBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/NavBar */ \"./src/components/NavBar.tsx\");\n/* harmony import */ var _components_UserProfile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/UserProfile */ \"./src/components/UserProfile.tsx\");\n/* harmony import */ var _components_SkillProfile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/SkillProfile */ \"./src/components/SkillProfile.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _styles_index_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/index.module.css */ \"./src/styles/index.module.css\");\n/* harmony import */ var _styles_index_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_index_module_css__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst Home = (param)=>{\n    let { proficiency , master , personName , personPicture , valueTwo  } = param;\n    _s();\n    const [value, getValue] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(\"\");\n    const searchFunction = (inputValue)=>{\n        getValue(inputValue);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_NavBar__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                    name: \"data\",\n                    onSearch: searchFunction\n                }, void 0, false, {\n                    fileName: \"/Users/deca/Documents/torre_co/torre-job-profile/src/pages/index.tsx\",\n                    lineNumber: 29,\n                    columnNumber: 5\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_UserProfile__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    data: personName,\n                    image: personPicture\n                }, void 0, false, {\n                    fileName: \"/Users/deca/Documents/torre_co/torre-job-profile/src/pages/index.tsx\",\n                    lineNumber: 30,\n                    columnNumber: 5\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SkillProfile__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    name: \"Master/Influencer\",\n                    header: \"Skills and Interest:\"\n                }, void 0, false, {\n                    fileName: \"/Users/deca/Documents/torre_co/torre-job-profile/src/pages/index.tsx\",\n                    lineNumber: 31,\n                    columnNumber: 5\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: valueTwo\n                }, void 0, false, {\n                    fileName: \"/Users/deca/Documents/torre_co/torre-job-profile/src/pages/index.tsx\",\n                    lineNumber: 32,\n                    columnNumber: 5\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_index_module_css__WEBPACK_IMPORTED_MODULE_5___default().master),\n                        children: master.map((element)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: (_styles_index_module_css__WEBPACK_IMPORTED_MODULE_5___default().button),\n                                    children: element.name !== undefined ? element.name : \"Username doesn't exist\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/deca/Documents/torre_co/torre-job-profile/src/pages/index.tsx\",\n                                    lineNumber: 40,\n                                    columnNumber: 15\n                                }, undefined)\n                            }, element.id, false, {\n                                fileName: \"/Users/deca/Documents/torre_co/torre-job-profile/src/pages/index.tsx\",\n                                lineNumber: 39,\n                                columnNumber: 13\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"/Users/deca/Documents/torre_co/torre-job-profile/src/pages/index.tsx\",\n                        lineNumber: 36,\n                        columnNumber: 7\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/deca/Documents/torre_co/torre-job-profile/src/pages/index.tsx\",\n                    lineNumber: 35,\n                    columnNumber: 5\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SkillProfile__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    name: \"Proficiency\",\n                    header: \"\"\n                }, void 0, false, {\n                    fileName: \"/Users/deca/Documents/torre_co/torre-job-profile/src/pages/index.tsx\",\n                    lineNumber: 46,\n                    columnNumber: 5\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_index_module_css__WEBPACK_IMPORTED_MODULE_5___default().master),\n                        children: proficiency.map((element)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: (_styles_index_module_css__WEBPACK_IMPORTED_MODULE_5___default().button),\n                                    children: element.name !== undefined ? element.name : \"Username doesn't exist\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/deca/Documents/torre_co/torre-job-profile/src/pages/index.tsx\",\n                                    lineNumber: 52,\n                                    columnNumber: 15\n                                }, undefined)\n                            }, element.id, false, {\n                                fileName: \"/Users/deca/Documents/torre_co/torre-job-profile/src/pages/index.tsx\",\n                                lineNumber: 51,\n                                columnNumber: 13\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"/Users/deca/Documents/torre_co/torre-job-profile/src/pages/index.tsx\",\n                        lineNumber: 48,\n                        columnNumber: 7\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/deca/Documents/torre_co/torre-job-profile/src/pages/index.tsx\",\n                    lineNumber: 47,\n                    columnNumber: 5\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/deca/Documents/torre_co/torre-job-profile/src/pages/index.tsx\",\n            lineNumber: 28,\n            columnNumber: 3\n        }, undefined)\n    }, void 0, false);\n};\n_s(Home, \"tDEjIKtMK+SILgUL3NJ1Hdnnt7g=\");\n_c = Home;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUN5QztBQUNTO0FBQ0U7QUFFcEI7QUFDbUI7QUFZbkQsTUFBTUssT0FBdUIsU0FBZ0U7UUFBL0QsRUFBQ0MsWUFBVyxFQUFFQyxPQUFNLEVBQUVDLFdBQVUsRUFBRUMsY0FBYSxFQUFFQyxTQUFRLEVBQUM7O0lBQ3RGLE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHVCwrQ0FBUUEsQ0FBQztJQUVuQyxNQUFNVSxpQkFBaUIsQ0FBQ0MsYUFBdUI7UUFDN0NGLFNBQVNFO0lBQ1g7SUFDQSxxQkFDRTtrQkFFRiw0RUFBQ0M7OzhCQUNDLDhEQUFDZiwwREFBTUE7b0JBQUNnQixNQUFPO29CQUFPQyxVQUFVSjs7Ozs7OzhCQUNoQyw4REFBQ1osK0RBQVdBO29CQUFDaUIsTUFBTVY7b0JBQVlXLE9BQVNWOzs7Ozs7OEJBQ3hDLDhEQUFDUCxnRUFBWUE7b0JBQUNjLE1BQUs7b0JBQW9CSSxRQUFPOzs7Ozs7OEJBQzlDLDhEQUFDTDs4QkFDRUw7Ozs7Ozs4QkFFSCw4REFBQ0s7OEJBQ0MsNEVBQUNBO3dCQUFJTSxXQUFXakIsd0VBQWlCO2tDQUU3QkcsT0FBT2UsR0FBRyxDQUFDLENBQUNDLHdCQUNWLDhEQUFDUjswQ0FDQyw0RUFBQ1M7b0NBQU9ILFdBQVdqQix3RUFBaUI7OENBQUdtQixRQUFRUCxJQUFJLEtBQUtTLFlBQVlGLFFBQVFQLElBQUksR0FBRyx3QkFBd0I7Ozs7OzsrQkFEbkdPLFFBQVFHLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs4QkFPNUIsOERBQUN4QixnRUFBWUE7b0JBQUNjLE1BQUs7b0JBQWNJLFFBQU87Ozs7Ozs4QkFDeEMsOERBQUNMOzhCQUNDLDRFQUFDQTt3QkFBSU0sV0FBV2pCLHdFQUFpQjtrQ0FFN0JFLFlBQVlnQixHQUFHLENBQUMsQ0FBQ0Msd0JBQ2YsOERBQUNSOzBDQUNDLDRFQUFDUztvQ0FBT0gsV0FBV2pCLHdFQUFpQjs4Q0FBR21CLFFBQVFQLElBQUksS0FBS1MsWUFBWUYsUUFBUVAsSUFBSSxHQUFHLHdCQUF3Qjs7Ozs7OytCQURuR08sUUFBUUcsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWFoQztHQTdDTXJCO0tBQUFBOztBQTZGTiwrREFBZUEsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvaW5kZXgudHN4PzE5YTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXG5pbXBvcnQgTmF2QmFyIGZyb20gJy4uL2NvbXBvbmVudHMvTmF2QmFyJ1xuaW1wb3J0IFVzZXJQcm9maWxlIGZyb20gJ0AvY29tcG9uZW50cy9Vc2VyUHJvZmlsZSdcbmltcG9ydCBTa2lsbFByb2ZpbGUgZnJvbSAnQC9jb21wb25lbnRzL1NraWxsUHJvZmlsZSdcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgaW5kZXhTdHlsZSBmcm9tICcuLi9zdHlsZXMvaW5kZXgubW9kdWxlLmNzcydcblxuXG50eXBlIGhvbWUgPSB7ICBcbiAgcHJvZmljaWVuY3k6IHN0cmluZ1tdLFxuICBtYXN0ZXI6IHN0cmluZ1tdLFxuICBwZXJzb25OYW1lOiBzdHJpbmcsXG4gIHBlcnNvblBpY3R1cmU6IHN0cmluZyxcbiAgdmFsdWVUd286IHN0cmluZ3x1bmRlZmluZWQ7XG59XG5cblxuY29uc3QgSG9tZTogUmVhY3QuRkM8aG9tZT4gPSAoe3Byb2ZpY2llbmN5LCBtYXN0ZXIsIHBlcnNvbk5hbWUsIHBlcnNvblBpY3R1cmUsIHZhbHVlVHdvfSkgPT4ge1xuICBjb25zdCBbdmFsdWUsIGdldFZhbHVlXSA9IHVzZVN0YXRlKCcnKVxuICBcbiAgY29uc3Qgc2VhcmNoRnVuY3Rpb24gPSAoaW5wdXRWYWx1ZTogc3RyaW5nKSA9PiB7XG4gICAgZ2V0VmFsdWUoaW5wdXRWYWx1ZSlcbiAgfVxuICByZXR1cm4gKFxuICAgIDw+XG4gIHsvKlRoaXMgaXMgdGhlIGNvbnRhaW5lciAqL31cbiAgPGRpdj5cbiAgICA8TmF2QmFyIG5hbWUgPSAnZGF0YScgb25TZWFyY2g9e3NlYXJjaEZ1bmN0aW9ufSAvPlxuICAgIDxVc2VyUHJvZmlsZSBkYXRhPXtwZXJzb25OYW1lfSBpbWFnZSA9IHtwZXJzb25QaWN0dXJlfSAvPlxuICAgIDxTa2lsbFByb2ZpbGUgbmFtZT1cIk1hc3Rlci9JbmZsdWVuY2VyXCIgaGVhZGVyPVwiU2tpbGxzIGFuZCBJbnRlcmVzdDpcIiAgLz5cbiAgICA8ZGl2PlxuICAgICAge3ZhbHVlVHdvfVxuICAgIDwvZGl2PlxuICAgIDxkaXYgPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2luZGV4U3R5bGUubWFzdGVyfT5cbiAgICAgICAge1xuICAgICAgICAgIG1hc3Rlci5tYXAoKGVsZW1lbnQ6IGFueSkgPT4gKFxuICAgICAgICAgICAgPGRpdiBrZXk9e2VsZW1lbnQuaWR9PlxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17aW5kZXhTdHlsZS5idXR0b259PntlbGVtZW50Lm5hbWUgIT09IHVuZGVmaW5lZCA/IGVsZW1lbnQubmFtZSA6IFwiVXNlcm5hbWUgZG9lc24ndCBleGlzdFwifTwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKSlcbiAgICAgICAgfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPFNraWxsUHJvZmlsZSBuYW1lPVwiUHJvZmljaWVuY3lcIiBoZWFkZXI9XCJcIiAgLz5cbiAgICA8ZGl2ID5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtpbmRleFN0eWxlLm1hc3Rlcn0+XG4gICAgICAgIHtcbiAgICAgICAgICBwcm9maWNpZW5jeS5tYXAoKGVsZW1lbnQ6IGFueSkgPT4gKFxuICAgICAgICAgICAgPGRpdiBrZXk9e2VsZW1lbnQuaWR9PlxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17aW5kZXhTdHlsZS5idXR0b259PntlbGVtZW50Lm5hbWUgIT09IHVuZGVmaW5lZCA/IGVsZW1lbnQubmFtZSA6IFwiVXNlcm5hbWUgZG9lc24ndCBleGlzdFwifTwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKSlcbiAgICAgICAgfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgXG4gICAgXG4gIDwvZGl2PlxuICB7LypUaGlzIGlzIHRoZSBlbmQgb2YgdGhlIGNvbnRhaW5lciAqL31cbjwvPlxuICApXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dDogeyBxdWVyeTogeyBpbnB1dDogc3RyaW5nIH0gfSkge1xuICBjb25zdCBpbnB1dFZhbHVlID0gY29udGV4dC5xdWVyeS5pbnB1dCB8fCAnJ1xuICBjb25zb2xlLmxvZyhpbnB1dFZhbHVlKVxuICBsZXQgcGVyc29uOiBhbnlcbiAgbGV0IHByb2ZpY2llbmN5O1xuICBsZXQgbWFzdGVyO1xuICBsZXQgcGVyc29uRGF0YTogYW55XG4gIGxldCBwZXJzb25OYW1lOiBhbnlcbiAgbGV0IHBlcnNvblBpY3R1cmU7XG4gIGxldCB2YWx1ZVR3bzogc3RyaW5nID0gJyc7XG4gIHRyeSB7XG4gICAgaWYoaW5wdXRWYWx1ZSA9PT0gdW5kZWZpbmVkKXtcbiAgICAgIHJldHVyblxuICAgIH1lbHNle1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoYGh0dHBzOi8vdG9ycmUuYmlvL2FwaS9iaW9zLyR7aW5wdXRWYWx1ZX1gKTtcbiAgICAgIGlmKHJlc3BvbnNlID09PSB1bmRlZmluZWQpe1xuICAgICAgICBjb25zdCBkYXRhID0ge21lc3NhZ2U6ICdObyB2YWx1ZSBnb3R0ZW4nLCBtZXNzYWdlMTogJ1VzZXJuYW1lIEVycm9yJywgbWVzc2FnZTM6ICdVc2VybmFtZSBkb2VzIG5vdCBleGlzdCd9XG4gICAgICAgIHBlcnNvbiA9IE9iamVjdC52YWx1ZXMoZGF0YSlcbiAgICAgIH1lbHNle1xuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuZGF0YTtcbiAgICAgICAgcGVyc29uID0gT2JqZWN0LnZhbHVlcyhkYXRhKVsyXVxuICAgICAgICBwZXJzb25EYXRhID0gT2JqZWN0LnZhbHVlcyhkYXRhKVswXVxuICAgICAgICBcbiAgICAgICAgcHJvZmljaWVuY3kgPSBwZXJzb24uZmlsdGVyKChlbGVtZW50OiBhbnkpID0+e1xuICAgICAgICAgIHJldHVybiBlbGVtZW50LnByb2ZpY2llbmN5ID09PSAncHJvZmljaWVudCdcbiAgICAgICAgfSApXG4gICAgICAgIG1hc3RlciA9IHBlcnNvbi5maWx0ZXIoKGVsZW1lbnQ6IFJlY29yZDxzdHJpbmcsIHVua25vd24+KSA9PntcbiAgICAgICAgICByZXR1cm4gZWxlbWVudC5wcm9maWNpZW5jeSA9PT0gJ2V4cGVydCdcbiAgICAgICAgfSlcbiAgICAgICAgcGVyc29uTmFtZSA9IHBlcnNvbkRhdGEubmFtZVxuICAgICAgICBwZXJzb25QaWN0dXJlID0gcGVyc29uRGF0YS5waWN0dXJlXG4gICAgICAgIGNvbnNvbGUubG9nKHByb2ZpY2llbmN5KVxuICAgICAgfVxuICAgICAgXG4gICAgfVxuICB9Y2F0Y2goZXJyKXtcbiAgICBpZihlcnIpe1xuICAgICAgcmV0dXJuIHZhbHVlVHdvID0gXCJVc2VybmFtZSBkb2Vzbid0IGV4aXN0LCB0cnkgYWdhaW5cIlxuICAgIH1cbiAgfVxuXG5cbiAgY29uc29sZS5sb2cocGVyc29uTmFtZSlcbiAgcmV0dXJuIHsgcHJvcHM6IHsgcHJvZmljaWVuY3ksIG1hc3RlciwgcGVyc29uTmFtZSwgcGVyc29uUGljdHVyZSwgdmFsdWVUd28gfSB9O1xuICBcbn1cbmV4cG9ydCBkZWZhdWx0IEhvbWU7Il0sIm5hbWVzIjpbIk5hdkJhciIsIlVzZXJQcm9maWxlIiwiU2tpbGxQcm9maWxlIiwidXNlU3RhdGUiLCJpbmRleFN0eWxlIiwiSG9tZSIsInByb2ZpY2llbmN5IiwibWFzdGVyIiwicGVyc29uTmFtZSIsInBlcnNvblBpY3R1cmUiLCJ2YWx1ZVR3byIsInZhbHVlIiwiZ2V0VmFsdWUiLCJzZWFyY2hGdW5jdGlvbiIsImlucHV0VmFsdWUiLCJkaXYiLCJuYW1lIiwib25TZWFyY2giLCJkYXRhIiwiaW1hZ2UiLCJoZWFkZXIiLCJjbGFzc05hbWUiLCJtYXAiLCJlbGVtZW50IiwiYnV0dG9uIiwidW5kZWZpbmVkIiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n"));

/***/ })

});
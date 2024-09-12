"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/main",{

/***/ "./pages/main.tsx":
/*!************************!*\
  !*** ./pages/main.tsx ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/layout */ \"./components/layout.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst MainPage = ()=>{\n    _s();\n    const [accounts, setAccounts] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const [loadedIframes, setLoadedIframes] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]); // 로드된 iframe 추적\n    const [dotCount, setDotCount] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0); // Noading 애니메이션의 점 개수 상태\n    const [searchTerm, setSearchTerm] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"); // 검색어 상태 관리\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        fetch(\"/data/insta.json\").then((response)=>response.json()).then((data)=>setAccounts(data)).catch((error)=>console.error(\"Error fetching Instagram accounts:\", error));\n    }, []);\n    // 점 개수를 0123으로 순차적으로 바꾸는 애니메이션 (0.2초 간격)\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const interval = setInterval(()=>{\n            setDotCount((prev)=>prev === 3 ? 0 : prev + 1);\n        }, 200); // 0.2초마다 점 개수 변경\n        return ()=>clearInterval(interval);\n    }, []);\n    const handleIframeLoad = (index)=>{\n        setLoadedIframes((prev)=>[\n                ...prev,\n                index\n            ]); // 로드된 iframe 인덱스를 저장\n    };\n    // Enter 키를 눌렀을 때 돋보기 버튼을 클릭한 것과 동일한 동작\n    const handleKeyPress = (event)=>{\n        if (event.key === \"Enter\") {\n            // 검색 버튼 클릭 동작\n            handleSearch();\n        }\n    };\n    const handleSearch = ()=>{\n        // 검색 로직 추가\n        console.log(\"Search:\", searchTerm);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"jsx-3ccbda099855084\" + \" \" + \"main-container\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"jsx-3ccbda099855084\" + \" \" + \"search-bar-container\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                placeholder: \"검색어를 입력하세요\",\n                                value: searchTerm,\n                                onChange: (e)=>setSearchTerm(e.target.value),\n                                onKeyPress: handleKeyPress,\n                                className: \"jsx-3ccbda099855084\" + \" \" + \"search-input\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\PC\\\\Desktop\\\\NODE_design\\\\nextjs_animation\\\\pages\\\\main.tsx\",\n                                lineNumber: 48,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: handleSearch,\n                                className: \"jsx-3ccbda099855084\" + \" \" + \"search-button\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: \"/images/돋보기.png\",\n                                    alt: \"Search\",\n                                    className: \"jsx-3ccbda099855084\" + \" \" + \"search-icon\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\PC\\\\Desktop\\\\NODE_design\\\\nextjs_animation\\\\pages\\\\main.tsx\",\n                                    lineNumber: 57,\n                                    columnNumber: 13\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\PC\\\\Desktop\\\\NODE_design\\\\nextjs_animation\\\\pages\\\\main.tsx\",\n                                lineNumber: 56,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\PC\\\\Desktop\\\\NODE_design\\\\nextjs_animation\\\\pages\\\\main.tsx\",\n                        lineNumber: 47,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"jsx-3ccbda099855084\" + \" \" + \"instagram-embeds\",\n                        children: accounts.map((account, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"jsx-3ccbda099855084\" + \" \" + \"instagram-embed\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"iframe\", {\n                                        src: \"https://www.instagram.com/\".concat(account.accountName, \"/embed\"),\n                                        width: \"100%\",\n                                        height: \"100%\",\n                                        frameBorder: \"0\",\n                                        scrolling: \"no\",\n                                        allowTransparency: true,\n                                        onLoad: ()=>handleIframeLoad(index),\n                                        className: \"jsx-3ccbda099855084\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\PC\\\\Desktop\\\\NODE_design\\\\nextjs_animation\\\\pages\\\\main.tsx\",\n                                        lineNumber: 64,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    !loadedIframes.includes(index) && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"jsx-3ccbda099855084\" + \" \" + \"loading-overlay\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"jsx-3ccbda099855084\",\n                                            children: [\n                                                \"Noading\",\n                                                Array(dotCount + 1).fill(\".\").join(\"\")\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\PC\\\\Desktop\\\\NODE_design\\\\nextjs_animation\\\\pages\\\\main.tsx\",\n                                            lineNumber: 75,\n                                            columnNumber: 19\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\PC\\\\Desktop\\\\NODE_design\\\\nextjs_animation\\\\pages\\\\main.tsx\",\n                                        lineNumber: 74,\n                                        columnNumber: 17\n                                    }, undefined)\n                                ]\n                            }, account.accountName, true, {\n                                fileName: \"C:\\\\Users\\\\PC\\\\Desktop\\\\NODE_design\\\\nextjs_animation\\\\pages\\\\main.tsx\",\n                                lineNumber: 63,\n                                columnNumber: 13\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\PC\\\\Desktop\\\\NODE_design\\\\nextjs_animation\\\\pages\\\\main.tsx\",\n                        lineNumber: 61,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\PC\\\\Desktop\\\\NODE_design\\\\nextjs_animation\\\\pages\\\\main.tsx\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, undefined),\n            (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n                id: \"3ccbda099855084\",\n                children: \".main-container.jsx-3ccbda099855084{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;padding:10px;max-width:100%;background-color:rgb(71,79,138);min-height:100vh}.search-bar-container.jsx-3ccbda099855084{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;width:100%;margin-bottom:20px}.search-input.jsx-3ccbda099855084{width:100%;padding:10px;border:2px solid#ccc;-webkit-border-radius:8px 0 0 8px;-moz-border-radius:8px 0 0 8px;border-radius:8px 0 0 8px;font-size:16px;outline:none}.search-button.jsx-3ccbda099855084{width:50px;background-color:#ccc;border:none;-webkit-border-radius:0 8px 8px 0;-moz-border-radius:0 8px 8px 0;border-radius:0 8px 8px 0;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;cursor:pointer}.search-icon.jsx-3ccbda099855084{width:24px;height:24px}.instagram-embeds.jsx-3ccbda099855084{width:100%;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;gap:20px}.instagram-embed.jsx-3ccbda099855084{position:relative;width:100%;padding:10px;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;max-width:100%;aspect-ratio:2.13/1;overflow:hidden;background-color:rgb(71,79,138);-webkit-border-radius:8px;-moz-border-radius:8px;border-radius:8px;-webkit-box-shadow:0 0 10px rgba(0,0,0,.3);-moz-box-shadow:0 0 10px rgba(0,0,0,.3);box-shadow:0 0 10px rgba(0,0,0,.3)}iframe.jsx-3ccbda099855084{width:100%;height:100%;border:none}.loading-overlay.jsx-3ccbda099855084{position:absolute;top:0;left:0;width:100%;height:100%;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;background-color:rgba(255,255,255,.8);z-index:10}.loading-overlay.jsx-3ccbda099855084 p.jsx-3ccbda099855084{font-size:54px;font-weight:bold;font-family:Arial,sans-serif}\"\n            }, void 0, false, void 0, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\PC\\\\Desktop\\\\NODE_design\\\\nextjs_animation\\\\pages\\\\main.tsx\",\n        lineNumber: 44,\n        columnNumber: 5\n    }, undefined);\n};\n_s(MainPage, \"PW6IIL+dlm111ESLN8nInhH/EdM=\");\n_c = MainPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MainPage);\nvar _c;\n$RefreshReg$(_c, \"MainPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9tYWluLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFtRDtBQUNUO0FBRTFDLE1BQU1JLFdBQXFCOztJQUN6QixNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR0osK0NBQVFBLENBQVEsRUFBRTtJQUNsRCxNQUFNLENBQUNLLGVBQWVDLGlCQUFpQixHQUFHTiwrQ0FBUUEsQ0FBVyxFQUFFLEdBQUcsZ0JBQWdCO0lBQ2xGLE1BQU0sQ0FBQ08sVUFBVUMsWUFBWSxHQUFHUiwrQ0FBUUEsQ0FBQyxJQUFJLHlCQUF5QjtJQUN0RSxNQUFNLENBQUNTLFlBQVlDLGNBQWMsR0FBR1YsK0NBQVFBLENBQUMsS0FBSyxZQUFZO0lBRTlERCxnREFBU0EsQ0FBQztRQUNSWSxNQUFNLG9CQUNIQyxJQUFJLENBQUMsQ0FBQ0MsV0FBYUEsU0FBU0MsSUFBSSxJQUNoQ0YsSUFBSSxDQUFDLENBQUNHLE9BQVNYLFlBQVlXLE9BQzNCQyxLQUFLLENBQUMsQ0FBQ0MsUUFBVUMsUUFBUUQsS0FBSyxDQUFDLHNDQUFzQ0E7SUFDMUUsR0FBRyxFQUFFO0lBRUwseUNBQXlDO0lBQ3pDbEIsZ0RBQVNBLENBQUM7UUFDUixNQUFNb0IsV0FBV0MsWUFBWTtZQUMzQlosWUFBWSxDQUFDYSxPQUFVQSxTQUFTLElBQUksSUFBSUEsT0FBTztRQUNqRCxHQUFHLE1BQU0saUJBQWlCO1FBRTFCLE9BQU8sSUFBTUMsY0FBY0g7SUFDN0IsR0FBRyxFQUFFO0lBRUwsTUFBTUksbUJBQW1CLENBQUNDO1FBQ3hCbEIsaUJBQWlCLENBQUNlLE9BQVM7bUJBQUlBO2dCQUFNRzthQUFNLEdBQUcscUJBQXFCO0lBQ3JFO0lBRUEsdUNBQXVDO0lBQ3ZDLE1BQU1DLGlCQUFpQixDQUFDQztRQUN0QixJQUFJQSxNQUFNQyxHQUFHLEtBQUssU0FBUztZQUN6QixjQUFjO1lBQ2RDO1FBQ0Y7SUFDRjtJQUVBLE1BQU1BLGVBQWU7UUFDbkIsV0FBVztRQUNYVixRQUFRVyxHQUFHLENBQUMsV0FBV3BCO0lBQ3pCO0lBRUEscUJBQ0UsOERBQUNSLDBEQUFNQTs7MEJBQ0wsOERBQUM2Qjt5REFBYzs7a0NBRWIsOERBQUNBO2lFQUFjOzswQ0FDYiw4REFBQ0M7Z0NBQ0NDLE1BQUs7Z0NBQ0xDLGFBQVk7Z0NBQ1pDLE9BQU96QjtnQ0FDUDBCLFVBQVUsQ0FBQ0MsSUFBTTFCLGNBQWMwQixFQUFFQyxNQUFNLENBQUNILEtBQUs7Z0NBQzdDSSxZQUFZYjt5RUFDRjs7Ozs7OzBDQUVaLDhEQUFDYztnQ0FBaUNDLFNBQVNaO3lFQUF6QjswQ0FDaEIsNEVBQUNhO29DQUFJQyxLQUFJO29DQUFrQkMsS0FBSTs2RUFBbUI7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQUl0RCw4REFBQ2I7aUVBQWM7a0NBQ1ozQixTQUFTeUMsR0FBRyxDQUFDLENBQUNDLFNBQVNyQixzQkFDdEIsOERBQUNNO3lFQUFjOztrREFDYiw4REFBQ2dCO3dDQUNDSixLQUFLLDZCQUFpRCxPQUFwQkcsUUFBUUUsV0FBVyxFQUFDO3dDQUN0REMsT0FBTTt3Q0FDTkMsUUFBTzt3Q0FDUEMsYUFBWTt3Q0FDWkMsV0FBVTt3Q0FDVkMsbUJBQW1CO3dDQUNuQkMsUUFBUSxJQUFNOUIsaUJBQWlCQzs7Ozs7OztvQ0FFaEMsQ0FBQ25CLGNBQWNpRCxRQUFRLENBQUM5Qix3QkFDdkIsOERBQUNNO2lGQUFjO2tEQUNiLDRFQUFDeUI7OztnREFBRTtnREFBUUMsTUFBTWpELFdBQVcsR0FBR2tELElBQUksQ0FBQyxLQUFLQyxJQUFJLENBQUM7Ozs7Ozs7Ozs7Ozs7K0JBWmRiLFFBQVFFLFdBQVc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaUhyRTtHQTVLTTdDO0tBQUFBO0FBOEtOLCtEQUFlQSxRQUFRQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL21haW4udHN4PzcxYjEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXQnO1xyXG5cclxuY29uc3QgTWFpblBhZ2U6IFJlYWN0LkZDID0gKCkgPT4ge1xyXG4gIGNvbnN0IFthY2NvdW50cywgc2V0QWNjb3VudHNdID0gdXNlU3RhdGU8YW55W10+KFtdKTtcclxuICBjb25zdCBbbG9hZGVkSWZyYW1lcywgc2V0TG9hZGVkSWZyYW1lc10gPSB1c2VTdGF0ZTxudW1iZXJbXT4oW10pOyAvLyDroZzrk5zrkJwgaWZyYW1lIOy2lOyggVxyXG4gIGNvbnN0IFtkb3RDb3VudCwgc2V0RG90Q291bnRdID0gdXNlU3RhdGUoMCk7IC8vIE5vYWRpbmcg7JWg64uI66mU7J207IWY7J2YIOygkCDqsJzsiJgg7IOB7YOcXHJcbiAgY29uc3QgW3NlYXJjaFRlcm0sIHNldFNlYXJjaFRlcm1dID0gdXNlU3RhdGUoJycpOyAvLyDqsoDsg4nslrQg7IOB7YOcIOq0gOumrFxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZmV0Y2goJy9kYXRhL2luc3RhLmpzb24nKVxyXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgLnRoZW4oKGRhdGEpID0+IHNldEFjY291bnRzKGRhdGEpKVxyXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBJbnN0YWdyYW0gYWNjb3VudHM6JywgZXJyb3IpKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIC8vIOygkCDqsJzsiJjrpbwgMDEyM+ycvOuhnCDsiJzssKjsoIHsnLzroZwg67CU6r6464qUIOyVoOuLiOuplOydtOyFmCAoMC4y7LSIIOqwhOqyqSlcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgIHNldERvdENvdW50KChwcmV2KSA9PiAocHJldiA9PT0gMyA/IDAgOiBwcmV2ICsgMSkpO1xyXG4gICAgfSwgMjAwKTsgLy8gMC4y7LSI66eI64ukIOygkCDqsJzsiJgg67OA6rK9XHJcblxyXG4gICAgcmV0dXJuICgpID0+IGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlSWZyYW1lTG9hZCA9IChpbmRleDogbnVtYmVyKSA9PiB7XHJcbiAgICBzZXRMb2FkZWRJZnJhbWVzKChwcmV2KSA9PiBbLi4ucHJldiwgaW5kZXhdKTsgLy8g66Gc65Oc65CcIGlmcmFtZSDsnbjrjbHsiqTrpbwg7KCA7J6lXHJcbiAgfTtcclxuXHJcbiAgLy8gRW50ZXIg7YKk66W8IOuIjOuggOydhCDrlYwg64+L67O06riwIOuyhO2KvOydhCDtgbTrpq3tlZwg6rKD6rO8IOuPmeydvO2VnCDrj5nsnpFcclxuICBjb25zdCBoYW5kbGVLZXlQcmVzcyA9IChldmVudDogUmVhY3QuS2V5Ym9hcmRFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xyXG4gICAgaWYgKGV2ZW50LmtleSA9PT0gJ0VudGVyJykge1xyXG4gICAgICAvLyDqsoDsg4kg67KE7Yq8IO2BtOumrSDrj5nsnpFcclxuICAgICAgaGFuZGxlU2VhcmNoKCk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU2VhcmNoID0gKCkgPT4ge1xyXG4gICAgLy8g6rKA7IOJIOuhnOyngSDstpTqsIBcclxuICAgIGNvbnNvbGUubG9nKCdTZWFyY2g6Jywgc2VhcmNoVGVybSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxMYXlvdXQ+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbi1jb250YWluZXJcIj5cclxuICAgICAgICB7Lyog6rKA7IOJ67CUICovfVxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoLWJhci1jb250YWluZXJcIj5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi6rKA7IOJ7Ja066W8IOyeheugpe2VmOyEuOyalFwiXHJcbiAgICAgICAgICAgIHZhbHVlPXtzZWFyY2hUZXJtfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFNlYXJjaFRlcm0oZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICBvbktleVByZXNzPXtoYW5kbGVLZXlQcmVzc30gLy8gRW50ZXLrpbwg64iM66CA7J2EIOuVjCDsnbTrsqTtirhcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwic2VhcmNoLWlucHV0XCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInNlYXJjaC1idXR0b25cIiBvbkNsaWNrPXtoYW5kbGVTZWFyY2h9PlxyXG4gICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMv64+L67O06riwLnBuZ1wiIGFsdD1cIlNlYXJjaFwiIGNsYXNzTmFtZT1cInNlYXJjaC1pY29uXCIgLz5cclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImluc3RhZ3JhbS1lbWJlZHNcIj5cclxuICAgICAgICAgIHthY2NvdW50cy5tYXAoKGFjY291bnQsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5zdGFncmFtLWVtYmVkXCIga2V5PXthY2NvdW50LmFjY291bnROYW1lfT5cclxuICAgICAgICAgICAgICA8aWZyYW1lXHJcbiAgICAgICAgICAgICAgICBzcmM9e2BodHRwczovL3d3dy5pbnN0YWdyYW0uY29tLyR7YWNjb3VudC5hY2NvdW50TmFtZX0vZW1iZWRgfVxyXG4gICAgICAgICAgICAgICAgd2lkdGg9XCIxMDAlXCJcclxuICAgICAgICAgICAgICAgIGhlaWdodD1cIjEwMCVcIlxyXG4gICAgICAgICAgICAgICAgZnJhbWVCb3JkZXI9XCIwXCJcclxuICAgICAgICAgICAgICAgIHNjcm9sbGluZz1cIm5vXCJcclxuICAgICAgICAgICAgICAgIGFsbG93VHJhbnNwYXJlbmN5PXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgb25Mb2FkPXsoKSA9PiBoYW5kbGVJZnJhbWVMb2FkKGluZGV4KX0gLy8gaWZyYW1lIOuhnOuTnCDsmYTro4wg7IucIOyymOumrFxyXG4gICAgICAgICAgICAgID48L2lmcmFtZT5cclxuICAgICAgICAgICAgICB7IWxvYWRlZElmcmFtZXMuaW5jbHVkZXMoaW5kZXgpICYmICggLy8g66Gc65SpIOykkeydvCDrlYzrp4wgTm9hZGluZyDtkZzsi5xcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9hZGluZy1vdmVybGF5XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxwPk5vYWRpbmd7QXJyYXkoZG90Q291bnQgKyAxKS5maWxsKCcuJykuam9pbignJyl9PC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAubWFpbi1jb250YWluZXIge1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig3MSwgNzksIDEzOCk7XHJcbiAgICAgICAgICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qIOqygOyDieuwlCDsu6jthYzsnbTrhIggKi9cclxuICAgICAgICAuc2VhcmNoLWJhci1jb250YWluZXIge1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTsgLyog64Sk67mE6rKM7J207IWYIOuwlOydmCA2MCUg65GQ6ruYICovXHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyog6rKA7IOJIOyeheugpSDtlYTrk5wgKi9cclxuICAgICAgICAuc2VhcmNoLWlucHV0IHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNjY2M7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHggMCAwIDhweDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKiDqsoDsg4kg67KE7Yq8ICovXHJcbiAgICAgICAgLnNlYXJjaC1idXR0b24ge1xyXG4gICAgICAgICAgd2lkdGg6IDUwcHg7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xyXG4gICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMCA4cHggOHB4IDA7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyOyAvKiDrsoTtirzsnoTsnYQg64KY7YOA64OEICovXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKiDrj4vrs7TquLAg7J2066+47KeAICovXHJcbiAgICAgICAgLnNlYXJjaC1pY29uIHtcclxuICAgICAgICAgIHdpZHRoOiAyNHB4O1xyXG4gICAgICAgICAgaGVpZ2h0OiAyNHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmluc3RhZ3JhbS1lbWJlZHMge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgIGdhcDogMjBweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5pbnN0YWdyYW0tZW1iZWQge1xyXG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlOyAvKiDroZzrlKkg7JWg64uI66mU7J207IWY7J2EIOqyuey5mOq4sCDsnITtlZwg7IOB64yAIOychOy5mCDshKTsoJUgKi9cclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBhc3BlY3QtcmF0aW86IDIuMTMgLyAxO1xyXG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig3MSwgNzksIDEzOCk7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICAgICAgICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZnJhbWUge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAubG9hZGluZy1vdmVybGF5IHtcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7IC8qIOyVveqwhCDtiKzrqoXtlZwg67Cw6rK9ICovXHJcbiAgICAgICAgICB6LWluZGV4OiAxMDsgLyogaWZyYW1lIOychOyXkCDroZzrlKkg7JWg64uI66mU7J207IWY7J20IO2RnOyLnOuQmOuPhOuhnSDshKTsoJUgKi9cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5sb2FkaW5nLW92ZXJsYXkgcCB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDU0cHg7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgc2Fucy1zZXJpZjtcclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvTGF5b3V0PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNYWluUGFnZTtcclxuXHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiTGF5b3V0IiwiTWFpblBhZ2UiLCJhY2NvdW50cyIsInNldEFjY291bnRzIiwibG9hZGVkSWZyYW1lcyIsInNldExvYWRlZElmcmFtZXMiLCJkb3RDb3VudCIsInNldERvdENvdW50Iiwic2VhcmNoVGVybSIsInNldFNlYXJjaFRlcm0iLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJkYXRhIiwiY2F0Y2giLCJlcnJvciIsImNvbnNvbGUiLCJpbnRlcnZhbCIsInNldEludGVydmFsIiwicHJldiIsImNsZWFySW50ZXJ2YWwiLCJoYW5kbGVJZnJhbWVMb2FkIiwiaW5kZXgiLCJoYW5kbGVLZXlQcmVzcyIsImV2ZW50Iiwia2V5IiwiaGFuZGxlU2VhcmNoIiwibG9nIiwiZGl2IiwiaW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsIm9uS2V5UHJlc3MiLCJidXR0b24iLCJvbkNsaWNrIiwiaW1nIiwic3JjIiwiYWx0IiwibWFwIiwiYWNjb3VudCIsImlmcmFtZSIsImFjY291bnROYW1lIiwid2lkdGgiLCJoZWlnaHQiLCJmcmFtZUJvcmRlciIsInNjcm9sbGluZyIsImFsbG93VHJhbnNwYXJlbmN5Iiwib25Mb2FkIiwiaW5jbHVkZXMiLCJwIiwiQXJyYXkiLCJmaWxsIiwiam9pbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/main.tsx\n"));

/***/ })

});
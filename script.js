/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it uses a non-standard name for the exports (exports).
(() => {
var exports = __webpack_exports__;
/*!*******************!*\
  !*** ./script.ts ***!
  \*******************/


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
function changeStyle(styleFile) {
  var linkElement = document.getElementById('theme-stylesheet');
  if (linkElement) {
    linkElement.href = "css/".concat(styleFile);
    console.log("Style changed to: css/".concat(styleFile));
  } else {
    console.error("Stylesheet link element not found!");
  }
}
window.changeStyle = changeStyle;
})();

/******/ })()
;
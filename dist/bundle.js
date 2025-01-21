/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./gallery.js":
/*!********************!*\
  !*** ./gallery.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _gallery_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gallery.scss */ \"./gallery.scss\");\n\r\n\r\nconst modal = document.getElementById('image-modal');\r\nconst modalImage = document.getElementById('modal-image');\r\nconst closeModal = document.getElementById('modal-close');\r\n\r\n// Add click event listeners to all images\r\ndocument.querySelectorAll('.grid-item img').forEach(img => {\r\n    img.addEventListener('click', () => {\r\n        modalImage.src = img.src; // Set modal image source\r\n        modal.style.display = 'flex'; // Show modal\r\n    });\r\n});\r\n\r\n// Close modal when clicking the close button\r\ncloseModal.addEventListener('click', () => {\r\n    modal.style.display = 'none';\r\n});\r\n\r\n// Close modal when clicking outside the image\r\nmodal.addEventListener('click', (e) => {\r\n    if (e.target === modal) {\r\n        modal.style.display = 'none';\r\n    }\r\n});\n\n//# sourceURL=webpack://group5/./gallery.js?");

/***/ }),

/***/ "./gallery.scss":
/*!**********************!*\
  !*** ./gallery.scss ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://group5/./gallery.scss?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./gallery.js");
/******/ 	
/******/ })()
;
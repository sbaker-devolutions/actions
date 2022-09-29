/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 778:
/***/ ((module) => {

module.exports = eval("require")("@actions/core");


/***/ }),

/***/ 919:
/***/ ((module) => {

module.exports = eval("require")("@appthreat/cdxgen");


/***/ }),

/***/ 81:
/***/ ((module) => {

"use strict";
module.exports = require("child_process");

/***/ }),

/***/ 147:
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __nccwpck_require__(moduleId) {
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			__webpack_modules__[moduleId](module, module.exports, __nccwpck_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete __webpack_module_cache__[moduleId];
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat */
/******/ 	
/******/ 	if (typeof __nccwpck_require__ !== 'undefined') __nccwpck_require__.ab = __dirname + "/";
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
const fs = __nccwpck_require__(147);
const core = __nccwpck_require__(778);
const cdxgen = __nccwpck_require__(919);
const execSync = (__nccwpck_require__(81).execSync);

try {
  try {
    execSync('cdxgen --help');
  } catch (error) {
    console.log('Installing cdxgen...');
    let output = execSync('npm install -g @appthreat/cdxgen', { encoding: 'utf-8' });
    console.log(output);
  }

  let output = execSync('cdxgen -r true -o bom.xml', { encoding: 'utf-8' });
  console.log(output);

} catch (error) {
  core.setFailed(error.message);
}
})();

module.exports = __webpack_exports__;
/******/ })()
;
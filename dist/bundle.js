/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// arrow function code start\nvar a = 10;\nvar b = 20;\n\nvar sum = function sum(a, b) {\n    return a + b;\n};\nconsole.log(sum(a, b));\n//arrow function code end\n\n\n//constant variable code start\nvar x = 10;\n\n//x = 25; // this line will not execute cuz x is a Constant variable\n\nconsole.log(x);\n//constant variable code end\n\n\n//constant array code start\nvar arr = [];\narr.push(10);\narr.push(14);\nconsole.log(arr);\n//constant array code end\n\n\n// problem with var variable declartaion\nvar ab = 10;\n\nif (true) {\n    var ab = 20;\n    console.log(ab);\n}\nconsole.log(ab); // it prints the value a = 20;\n// problem with var variable declartion \n\n// let variable declaration code start\nvar z = 10;\n\nif (true) {\n    var _z = 20;\n    console.log(_z);\n}\nconsole.log(z); // it prints the value of z = 10;\n// let variable declaration code end\n\n\n//let variable is so much useful for block code\nfunction demo() {\n    {\n        var _x = 10;\n        {\n            var _x2 = 15;\n            console.log(_x2);\n        }\n\n        _x = 20;\n        console.log(_x);\n    }\n}\ndemo();\n// code ends here\n\n//template string code starts here ---->\nvar name = 'Julhas Hossain';\nvar age = 25;\nvar email = 'eyaminkhan00@gmail.com';\n\nvar details = 'Name: ' + name + 'Age: ' + age + 'Email: ' + email;\n\nconsole.log(details);\n\n//template string code ends here ----->\n\n\n//template string multiline code starts here ------->\nvar name2 = 'Eyamin Khan';\nvar age2 = 23;\nvar email2 = 'eyamin@gmail.com';\n\nvar details2 = 'Name : ' + name2 + ' Age: ' + age2 + ' Email: ' + email2 + ' ';\nconsole.log(details2);\n\n//template string multiline code ends here ---------->\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });
"use strict";
(self["webpackChunkweb_package"] = self["webpackChunkweb_package"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Poppins:wght@100;300;400;500;600&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\r\n  --main-color: #ef7819;\r\n  --black: #141215;\r\n}\r\n\r\n* {\r\n  font-family: 'Poppins', sans-serif;\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n  outline: none;\r\n  border: none;\r\n  text-decoration: none;\r\n  text-transform: capitalize;\r\n  transition: all 0.2s linear;\r\n}\r\n\r\nhtml {\r\n  font-size: 62.5%;\r\n  overflow-x: hidden;\r\n  scroll-behavior: smooth;\r\n  scroll-padding-top: 7rem;\r\n}\r\n\r\nhtml::-webkit-scrollbar {\r\n  width: 1rem;\r\n}\r\n\r\nhtml::-webkit-scrollbar-track {\r\n  background: var(--black);\r\n}\r\n\r\nhtml::-webkit-scrollbar-thumb {\r\n  background: var(--main-color);\r\n}\r\n\r\nbody {\r\n  overflow-x: hidden;\r\n  background: var(--black);\r\n}\r\n\r\nsection {\r\n  padding: 2rem 6rem;\r\n}\r\n\r\n.header {\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  z-index: 1000;\r\n  padding: 2rem 9%;\r\n  background: rgba(0, 0, 0, 0.8);\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n}\r\n\r\n.header .logo {\r\n  font-size: 2.5rem;\r\n  color: #fff;\r\n  font-weight: bolder;\r\n}\r\n\r\n.header .logo i {\r\n  padding-right: 0.5rem;\r\n  color: var(--main-color);\r\n  animation: floating 2s linear infinite;\r\n}\r\n\r\n@keyframes floating {\r\n  0% {\r\n    transform: translateY(0);\r\n  }\r\n\r\n  100% {\r\n    transform: translateY(0);\r\n  }\r\n\r\n  50% {\r\n    transform: translateY(-1rem);\r\n  }\r\n}\r\n\r\n.header .navbar a {\r\n  font-size: 1.7rem;\r\n  color: #fff;\r\n  margin: 0 1rem;\r\n}\r\n\r\n.header .navbar a:hover {\r\n  color: var(--main-color);\r\n}\r\n\r\n.header.active {\r\n  padding: 2rem 9%;\r\n  background: #222;\r\n}\r\n\r\n.header .menu {\r\n  font-size: 2.5rem;\r\n  color: #fff;\r\n  margin-left: 2rem;\r\n  cursor: pointer;\r\n}\r\n\r\n.header .menu:hover {\r\n  color: var(--main-color);\r\n}\r\n\r\n.menu {\r\n  display: none;\r\n}\r\n\r\n.home {\r\n  padding: 0;\r\n}\r\n\r\n.home .home-slider .box {\r\n  min-height: 100vh;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  padding: 2rem;\r\n  background-size: cover !important;\r\n  background-position: center !important;\r\n}\r\n\r\n.home .home-slider .swiper-button-next {\r\n  right: 4rem;\r\n  color: #fff;\r\n  opacity: 0;\r\n}\r\n\r\n.home .home-slider .swiper-button-prev {\r\n  left: 4rem;\r\n  color: #fff;\r\n  opacity: 0;\r\n}\r\n\r\n.home .home-slider .swiper-button-next:hover,\r\n.home .home-slider .swiper-button-prev:hover {\r\n  color: var(--main-color);\r\n}\r\n\r\n.home .home-slider:hover .swiper-button-next,\r\n.home .home-slider:hover .swiper-button-prev {\r\n  opacity: 1;\r\n}\r\n\r\n.card-section {\r\n  display: grid;\r\n  grid-template-columns: repeat(3, 1fr);\r\n  grid-gap: 1rem;\r\n  margin-top: 2rem;\r\n}\r\n\r\n.card-section .card {\r\n  background: #222;\r\n  border-radius: 0.5rem;\r\n  padding: 2rem;\r\n  color: #fff;\r\n}\r\n\r\n.card-section .content .name-div {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  padding: 10px;\r\n}\r\n\r\n.card-section .content .name-div h2 {\r\n  font-size: 2rem;\r\n  font-weight: 600;\r\n  color: var(--main-color);\r\n}\r\n\r\n.card-section .content .likes {\r\n  font-size: 2rem;\r\n  font-weight: 900;\r\n  color: var(--main-color);\r\n}\r\n\r\n.card-section .description {\r\n  text-align: center;\r\n  padding: 1rem 1.5rem;\r\n  font-size: 1.7rem;\r\n  margin: 0 auto;\r\n  margin-bottom: 2rem;\r\n}\r\n\r\n.card-section .card .comment-btn {\r\n  padding: 10px;\r\n  font-size: 1.7rem;\r\n  border-radius: 5px;\r\n  border: none;\r\n  background: transparent;\r\n  box-shadow: 0 10px 15px rgb(55 148 143);\r\n  color: #fff;\r\n  font-weight: 900;\r\n  cursor: pointer;\r\n  margin: 0 auto;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n.card-section .card .comment-btn:hover {\r\n  background: var(--main-color);\r\n  color: #fff;\r\n}\r\n\r\n.footer .credit {\r\n  padding: 1rem;\r\n  padding-top: 2rem;\r\n  margin-top: 2rem;\r\n  border-top: 0.1rem solid #fff3;\r\n  font-size: 2rem;\r\n  color: #aaa;\r\n  text-align: center;\r\n}\r\n\r\n.footer .credit span {\r\n  color: var(--main-color);\r\n}\r\n\r\n/* media queries  */\r\n\r\n@media (max-width: 991px) {\r\n  html {\r\n    font-size: 55%;\r\n  }\r\n\r\n  section {\r\n    padding: 2rem;\r\n  }\r\n}\r\n\r\n@media (max-width: 768px) {\r\n  .menu {\r\n    display: inline-block;\r\n  }\r\n\r\n  .header .navbar {\r\n    position: absolute;\r\n    top: 99%;\r\n    left: 0;\r\n    right: 0;\r\n    background: rgba(0, 0, 0, 0.8);\r\n    clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);\r\n    min-height: 70vh;\r\n  }\r\n\r\n  .header .navbar.active {\r\n    clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);\r\n  }\r\n\r\n  .header .navbar a {\r\n    display: block;\r\n    margin: 2rem;\r\n    padding: 1rem;\r\n    font-size: 2.5rem;\r\n    text-align: center;\r\n  }\r\n\r\n  .card-section {\r\n    grid-template-columns: 2fr;\r\n  }\r\n}\r\n\r\n@media (max-width: 450px) {\r\n  html {\r\n    font-size: 50%;\r\n  }\r\n\r\n  .home .home-slider .swiper-button-next,\r\n  .home .home-slider .swiper-button-prev {\r\n    display: none;\r\n  }\r\n\r\n  .card-section {\r\n    grid-template-columns: 1fr;\r\n  }\r\n\r\n  .card-section .card {\r\n    padding: 0.3rem;\r\n  }\r\n\r\n  .card-section .card .comment-btn {\r\n    font-size: 1.5rem;\r\n    margin-bottom: 1rem;\r\n  }\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;300;400;500;600&display=swap');\r\n\r\n:root {\r\n  --main-color: #ef7819;\r\n  --black: #141215;\r\n}\r\n\r\n* {\r\n  font-family: 'Poppins', sans-serif;\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n  outline: none;\r\n  border: none;\r\n  text-decoration: none;\r\n  text-transform: capitalize;\r\n  transition: all 0.2s linear;\r\n}\r\n\r\nhtml {\r\n  font-size: 62.5%;\r\n  overflow-x: hidden;\r\n  scroll-behavior: smooth;\r\n  scroll-padding-top: 7rem;\r\n}\r\n\r\nhtml::-webkit-scrollbar {\r\n  width: 1rem;\r\n}\r\n\r\nhtml::-webkit-scrollbar-track {\r\n  background: var(--black);\r\n}\r\n\r\nhtml::-webkit-scrollbar-thumb {\r\n  background: var(--main-color);\r\n}\r\n\r\nbody {\r\n  overflow-x: hidden;\r\n  background: var(--black);\r\n}\r\n\r\nsection {\r\n  padding: 2rem 6rem;\r\n}\r\n\r\n.header {\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  z-index: 1000;\r\n  padding: 2rem 9%;\r\n  background: rgba(0, 0, 0, 0.8);\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n}\r\n\r\n.header .logo {\r\n  font-size: 2.5rem;\r\n  color: #fff;\r\n  font-weight: bolder;\r\n}\r\n\r\n.header .logo i {\r\n  padding-right: 0.5rem;\r\n  color: var(--main-color);\r\n  animation: floating 2s linear infinite;\r\n}\r\n\r\n@keyframes floating {\r\n  0% {\r\n    transform: translateY(0);\r\n  }\r\n\r\n  100% {\r\n    transform: translateY(0);\r\n  }\r\n\r\n  50% {\r\n    transform: translateY(-1rem);\r\n  }\r\n}\r\n\r\n.header .navbar a {\r\n  font-size: 1.7rem;\r\n  color: #fff;\r\n  margin: 0 1rem;\r\n}\r\n\r\n.header .navbar a:hover {\r\n  color: var(--main-color);\r\n}\r\n\r\n.header.active {\r\n  padding: 2rem 9%;\r\n  background: #222;\r\n}\r\n\r\n.header .menu {\r\n  font-size: 2.5rem;\r\n  color: #fff;\r\n  margin-left: 2rem;\r\n  cursor: pointer;\r\n}\r\n\r\n.header .menu:hover {\r\n  color: var(--main-color);\r\n}\r\n\r\n.menu {\r\n  display: none;\r\n}\r\n\r\n.home {\r\n  padding: 0;\r\n}\r\n\r\n.home .home-slider .box {\r\n  min-height: 100vh;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  padding: 2rem;\r\n  background-size: cover !important;\r\n  background-position: center !important;\r\n}\r\n\r\n.home .home-slider .swiper-button-next {\r\n  right: 4rem;\r\n  color: #fff;\r\n  opacity: 0;\r\n}\r\n\r\n.home .home-slider .swiper-button-prev {\r\n  left: 4rem;\r\n  color: #fff;\r\n  opacity: 0;\r\n}\r\n\r\n.home .home-slider .swiper-button-next:hover,\r\n.home .home-slider .swiper-button-prev:hover {\r\n  color: var(--main-color);\r\n}\r\n\r\n.home .home-slider:hover .swiper-button-next,\r\n.home .home-slider:hover .swiper-button-prev {\r\n  opacity: 1;\r\n}\r\n\r\n.card-section {\r\n  display: grid;\r\n  grid-template-columns: repeat(3, 1fr);\r\n  grid-gap: 1rem;\r\n  margin-top: 2rem;\r\n}\r\n\r\n.card-section .card {\r\n  background: #222;\r\n  border-radius: 0.5rem;\r\n  padding: 2rem;\r\n  color: #fff;\r\n}\r\n\r\n.card-section .content .name-div {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  padding: 10px;\r\n}\r\n\r\n.card-section .content .name-div h2 {\r\n  font-size: 2rem;\r\n  font-weight: 600;\r\n  color: var(--main-color);\r\n}\r\n\r\n.card-section .content .likes {\r\n  font-size: 2rem;\r\n  font-weight: 900;\r\n  color: var(--main-color);\r\n}\r\n\r\n.card-section .description {\r\n  text-align: center;\r\n  padding: 1rem 1.5rem;\r\n  font-size: 1.7rem;\r\n  margin: 0 auto;\r\n  margin-bottom: 2rem;\r\n}\r\n\r\n.card-section .card .comment-btn {\r\n  padding: 10px;\r\n  font-size: 1.7rem;\r\n  border-radius: 5px;\r\n  border: none;\r\n  background: transparent;\r\n  box-shadow: 0 10px 15px rgb(55 148 143);\r\n  color: #fff;\r\n  font-weight: 900;\r\n  cursor: pointer;\r\n  margin: 0 auto;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n.card-section .card .comment-btn:hover {\r\n  background: var(--main-color);\r\n  color: #fff;\r\n}\r\n\r\n.footer .credit {\r\n  padding: 1rem;\r\n  padding-top: 2rem;\r\n  margin-top: 2rem;\r\n  border-top: 0.1rem solid #fff3;\r\n  font-size: 2rem;\r\n  color: #aaa;\r\n  text-align: center;\r\n}\r\n\r\n.footer .credit span {\r\n  color: var(--main-color);\r\n}\r\n\r\n/* media queries  */\r\n\r\n@media (max-width: 991px) {\r\n  html {\r\n    font-size: 55%;\r\n  }\r\n\r\n  section {\r\n    padding: 2rem;\r\n  }\r\n}\r\n\r\n@media (max-width: 768px) {\r\n  .menu {\r\n    display: inline-block;\r\n  }\r\n\r\n  .header .navbar {\r\n    position: absolute;\r\n    top: 99%;\r\n    left: 0;\r\n    right: 0;\r\n    background: rgba(0, 0, 0, 0.8);\r\n    clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);\r\n    min-height: 70vh;\r\n  }\r\n\r\n  .header .navbar.active {\r\n    clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);\r\n  }\r\n\r\n  .header .navbar a {\r\n    display: block;\r\n    margin: 2rem;\r\n    padding: 1rem;\r\n    font-size: 2.5rem;\r\n    text-align: center;\r\n  }\r\n\r\n  .card-section {\r\n    grid-template-columns: 2fr;\r\n  }\r\n}\r\n\r\n@media (max-width: 450px) {\r\n  html {\r\n    font-size: 50%;\r\n  }\r\n\r\n  .home .home-slider .swiper-button-next,\r\n  .home .home-slider .swiper-button-prev {\r\n    display: none;\r\n  }\r\n\r\n  .card-section {\r\n    grid-template-columns: 1fr;\r\n  }\r\n\r\n  .card-section .card {\r\n    padding: 0.3rem;\r\n  }\r\n\r\n  .card-section .card .comment-btn {\r\n    font-size: 1.5rem;\r\n    margin-bottom: 1rem;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _assets_images_batman_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/images/batman.png */ "./src/assets/images/batman.png");
/* harmony import */ var _assets_images_image1_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/images/image1.png */ "./src/assets/images/image1.png");
/* harmony import */ var _assets_images_image2_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/images/image2.png */ "./src/assets/images/image2.png");
/* harmony import */ var _assets_images_image3_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/images/image3.png */ "./src/assets/images/image3.png");
/* harmony import */ var _assets_images_image4_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/images/image4.png */ "./src/assets/images/image4.png");
/* harmony import */ var _assets_images_image5_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/images/image5.png */ "./src/assets/images/image5.png");
/* harmony import */ var _assets_images_image6_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./assets/images/image6.png */ "./src/assets/images/image6.png");
/* harmony import */ var _assets_images_image7_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./assets/images/image7.png */ "./src/assets/images/image7.png");
/* harmony import */ var _assets_images_image8_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./assets/images/image8.png */ "./src/assets/images/image8.png");
/* harmony import */ var _assets_images_image9_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./assets/images/image9.png */ "./src/assets/images/image9.png");
/* harmony import */ var _assets_images_image10_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./assets/images/image10.png */ "./src/assets/images/image10.png");
/* harmony import */ var _assets_images_image11_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./assets/images/image11.png */ "./src/assets/images/image11.png");
/* harmony import */ var _modules_slideshow_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./modules/slideshow.js */ "./src/modules/slideshow.js");
/* harmony import */ var _modules_fetchData_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./modules/fetchData.js */ "./src/modules/fetchData.js");
/* harmony import */ var _modules_mobile_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./modules/mobile.js */ "./src/modules/mobile.js");


















(0,_modules_fetchData_js__WEBPACK_IMPORTED_MODULE_14__["default"])();
(0,_modules_slideshow_js__WEBPACK_IMPORTED_MODULE_13__["default"])();
(0,_modules_mobile_js__WEBPACK_IMPORTED_MODULE_15__["default"])();

// scroll spy
const section = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.header .navbar a');

window.onscroll = () => {
  if (window.scrollY > 0) {
    document.querySelector('.header').classList.add('active');
  } else {
    document.querySelector('.header').classList.remove('active');
  }

  section.forEach((sec) => {
    const top = window.scrollY;
    const offset = sec.offsetTop - 200;
    const height = sec.offsetHeight;
    const id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach((link) => {
        link.classList.remove('active');
        document
          .querySelector(`.header .navbar a[href*=${id}]`)
          .classList.add('active');
      });
    }
  });
};

window.onload = () => {
  if (window.scrollY > 0) {
    document.querySelector('.header').classList.add('active');
  } else {
    document.querySelector('.header').classList.remove('active');
  }
};


/***/ }),

/***/ "./src/modules/fetchData.js":
/*!**********************************!*\
  !*** ./src/modules/fetchData.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const API_URL = 'https://www.freetogame.com/api/games?category=shooter';
const cards = document.querySelector('.card-section');

const showData = (data) => {
  const cardContainer = document.createElement('div');
  cardContainer.classList.add('card');
  cardContainer.innerHTML = `
        <img
          src="${data.thumbnail}"
          class="card-image"
        />
        <div class="content">
          <div class="name-div">
            <h2>${data.title}</h2>
            <div class="likes">
              <i class="fa-solid fa-heart" id="love"></i>
              <span class="likes-info" id="516">4</span>
            </div>
          </div>
          <p class="description">
           ${data.short_description}
          </p>
          <button id="516" class="comment-btn">Comments</button>
        </div>
    `;
  cards.appendChild(cardContainer);
};

const fetchData = async () => {
  const response = await fetch(API_URL);
  const data = await response.json();
  for (let i = 0; i < 15; i += 1) {
    showData(data[i]);
  }
};

fetchData();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fetchData);


/***/ }),

/***/ "./src/modules/mobile.js":
/*!*******************************!*\
  !*** ./src/modules/mobile.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const navbar = document.querySelector('.navbar');
const menuBtn = document.querySelector('#menu-btn');
menuBtn.addEventListener('click', () => {
  navbar.classList.toggle('active');
});
window.onscroll = () => {
  navbar.classList.remove('active');
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (navbar);


/***/ }),

/***/ "./src/modules/slideshow.js":
/*!**********************************!*\
  !*** ./src/modules/slideshow.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// eslint-disable-next-line no-undef
const swiper = new Swiper('.home-slider', {
  spaceBetween: 20,
  effect: 'fade',
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  centeredSlides: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (swiper);


/***/ }),

/***/ "./src/assets/images/batman.png":
/*!**************************************!*\
  !*** ./src/assets/images/batman.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/images/batman.png";

/***/ }),

/***/ "./src/assets/images/image1.png":
/*!**************************************!*\
  !*** ./src/assets/images/image1.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/images/image1.png";

/***/ }),

/***/ "./src/assets/images/image10.png":
/*!***************************************!*\
  !*** ./src/assets/images/image10.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/images/image10.png";

/***/ }),

/***/ "./src/assets/images/image11.png":
/*!***************************************!*\
  !*** ./src/assets/images/image11.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/images/image11.png";

/***/ }),

/***/ "./src/assets/images/image2.png":
/*!**************************************!*\
  !*** ./src/assets/images/image2.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/images/image2.png";

/***/ }),

/***/ "./src/assets/images/image3.png":
/*!**************************************!*\
  !*** ./src/assets/images/image3.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/images/image3.png";

/***/ }),

/***/ "./src/assets/images/image4.png":
/*!**************************************!*\
  !*** ./src/assets/images/image4.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/images/image4.png";

/***/ }),

/***/ "./src/assets/images/image5.png":
/*!**************************************!*\
  !*** ./src/assets/images/image5.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/images/image5.png";

/***/ }),

/***/ "./src/assets/images/image6.png":
/*!**************************************!*\
  !*** ./src/assets/images/image6.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/images/image6.png";

/***/ }),

/***/ "./src/assets/images/image7.png":
/*!**************************************!*\
  !*** ./src/assets/images/image7.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/images/image7.png";

/***/ }),

/***/ "./src/assets/images/image8.png":
/*!**************************************!*\
  !*** ./src/assets/images/image8.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/images/image8.png";

/***/ }),

/***/ "./src/assets/images/image9.png":
/*!**************************************!*\
  !*** ./src/assets/images/image9.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/images/image9.png";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxNQUFNLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsTUFBTSxNQUFNLFlBQVksT0FBTyxNQUFNLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxhQUFhLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFV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Ozs7Ozs7Ozs7QUN4REE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLGVBQWU7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsV0FBVztBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixRQUFRO0FBQzFCO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxpRUFBZSxTQUFTLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ3RDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsTUFBTSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUNSdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDOztBQUVELGlFQUFlLE1BQU0sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYi1wYWNrYWdlLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly93ZWItcGFja2FnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2ViLXBhY2thZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93ZWItcGFja2FnZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly93ZWItcGFja2FnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWItcGFja2FnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2ViLXBhY2thZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2ViLXBhY2thZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2ViLXBhY2thZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWItcGFja2FnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dlYi1wYWNrYWdlLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3dlYi1wYWNrYWdlLy4vc3JjL21vZHVsZXMvZmV0Y2hEYXRhLmpzIiwid2VicGFjazovL3dlYi1wYWNrYWdlLy4vc3JjL21vZHVsZXMvbW9iaWxlLmpzIiwid2VicGFjazovL3dlYi1wYWNrYWdlLy4vc3JjL21vZHVsZXMvc2xpZGVzaG93LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UG9wcGluczp3Z2h0QDEwMDszMDA7NDAwOzUwMDs2MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcclxcbiAgLS1tYWluLWNvbG9yOiAjZWY3ODE5O1xcclxcbiAgLS1ibGFjazogIzE0MTIxNTtcXHJcXG59XFxyXFxuXFxyXFxuKiB7XFxyXFxuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBsaW5lYXI7XFxyXFxufVxcclxcblxcclxcbmh0bWwge1xcclxcbiAgZm9udC1zaXplOiA2Mi41JTtcXHJcXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcXHJcXG4gIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xcclxcbiAgc2Nyb2xsLXBhZGRpbmctdG9wOiA3cmVtO1xcclxcbn1cXHJcXG5cXHJcXG5odG1sOjotd2Via2l0LXNjcm9sbGJhciB7XFxyXFxuICB3aWR0aDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuaHRtbDo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xcclxcbiAgYmFja2dyb3VuZDogdmFyKC0tYmxhY2spO1xcclxcbn1cXHJcXG5cXHJcXG5odG1sOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxyXFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1tYWluLWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBvdmVyZmxvdy14OiBoaWRkZW47XFxyXFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1ibGFjayk7XFxyXFxufVxcclxcblxcclxcbnNlY3Rpb24ge1xcclxcbiAgcGFkZGluZzogMnJlbSA2cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyIHtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICByaWdodDogMDtcXHJcXG4gIHotaW5kZXg6IDEwMDA7XFxyXFxuICBwYWRkaW5nOiAycmVtIDklO1xcclxcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjgpO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXIgLmxvZ28ge1xcclxcbiAgZm9udC1zaXplOiAyLjVyZW07XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXIgLmxvZ28gaSB7XFxyXFxuICBwYWRkaW5nLXJpZ2h0OiAwLjVyZW07XFxyXFxuICBjb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XFxyXFxuICBhbmltYXRpb246IGZsb2F0aW5nIDJzIGxpbmVhciBpbmZpbml0ZTtcXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyBmbG9hdGluZyB7XFxyXFxuICAwJSB7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIDEwMCUge1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XFxyXFxuICB9XFxyXFxuXFxyXFxuICA1MCUge1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFyZW0pO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyIC5uYXZiYXIgYSB7XFxyXFxuICBmb250LXNpemU6IDEuN3JlbTtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgbWFyZ2luOiAwIDFyZW07XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXIgLm5hdmJhciBhOmhvdmVyIHtcXHJcXG4gIGNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlci5hY3RpdmUge1xcclxcbiAgcGFkZGluZzogMnJlbSA5JTtcXHJcXG4gIGJhY2tncm91bmQ6ICMyMjI7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXIgLm1lbnUge1xcclxcbiAgZm9udC1zaXplOiAyLjVyZW07XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAycmVtO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyIC5tZW51OmhvdmVyIHtcXHJcXG4gIGNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmhvbWUge1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuXFxyXFxuLmhvbWUgLmhvbWUtc2xpZGVyIC5ib3gge1xcclxcbiAgbWluLWhlaWdodDogMTAwdmg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgcGFkZGluZzogMnJlbTtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcXHJcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciAhaW1wb3J0YW50O1xcclxcbn1cXHJcXG5cXHJcXG4uaG9tZSAuaG9tZS1zbGlkZXIgLnN3aXBlci1idXR0b24tbmV4dCB7XFxyXFxuICByaWdodDogNHJlbTtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgb3BhY2l0eTogMDtcXHJcXG59XFxyXFxuXFxyXFxuLmhvbWUgLmhvbWUtc2xpZGVyIC5zd2lwZXItYnV0dG9uLXByZXYge1xcclxcbiAgbGVmdDogNHJlbTtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgb3BhY2l0eTogMDtcXHJcXG59XFxyXFxuXFxyXFxuLmhvbWUgLmhvbWUtc2xpZGVyIC5zd2lwZXItYnV0dG9uLW5leHQ6aG92ZXIsXFxyXFxuLmhvbWUgLmhvbWUtc2xpZGVyIC5zd2lwZXItYnV0dG9uLXByZXY6aG92ZXIge1xcclxcbiAgY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4uaG9tZSAuaG9tZS1zbGlkZXI6aG92ZXIgLnN3aXBlci1idXR0b24tbmV4dCxcXHJcXG4uaG9tZSAuaG9tZS1zbGlkZXI6aG92ZXIgLnN3aXBlci1idXR0b24tcHJldiB7XFxyXFxuICBvcGFjaXR5OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZC1zZWN0aW9uIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xcclxcbiAgZ3JpZC1nYXA6IDFyZW07XFxyXFxuICBtYXJnaW4tdG9wOiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZC1zZWN0aW9uIC5jYXJkIHtcXHJcXG4gIGJhY2tncm91bmQ6ICMyMjI7XFxyXFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxyXFxuICBwYWRkaW5nOiAycmVtO1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxufVxcclxcblxcclxcbi5jYXJkLXNlY3Rpb24gLmNvbnRlbnQgLm5hbWUtZGl2IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmQtc2VjdGlvbiAuY29udGVudCAubmFtZS1kaXYgaDIge1xcclxcbiAgZm9udC1zaXplOiAycmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gIGNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmQtc2VjdGlvbiAuY29udGVudCAubGlrZXMge1xcclxcbiAgZm9udC1zaXplOiAycmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXHJcXG4gIGNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmQtc2VjdGlvbiAuZGVzY3JpcHRpb24ge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgcGFkZGluZzogMXJlbSAxLjVyZW07XFxyXFxuICBmb250LXNpemU6IDEuN3JlbTtcXHJcXG4gIG1hcmdpbjogMCBhdXRvO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmQtc2VjdGlvbiAuY2FyZCAuY29tbWVudC1idG4ge1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG4gIGZvbnQtc2l6ZTogMS43cmVtO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxyXFxuICBib3gtc2hhZG93OiAwIDEwcHggMTVweCByZ2IoNTUgMTQ4IDE0Myk7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBtYXJnaW46IDAgYXV0bztcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5jYXJkLXNlY3Rpb24gLmNhcmQgLmNvbW1lbnQtYnRuOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQ6IHZhcigtLW1haW4tY29sb3IpO1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxufVxcclxcblxcclxcbi5mb290ZXIgLmNyZWRpdCB7XFxyXFxuICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgcGFkZGluZy10b3A6IDJyZW07XFxyXFxuICBtYXJnaW4tdG9wOiAycmVtO1xcclxcbiAgYm9yZGVyLXRvcDogMC4xcmVtIHNvbGlkICNmZmYzO1xcclxcbiAgZm9udC1zaXplOiAycmVtO1xcclxcbiAgY29sb3I6ICNhYWE7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5mb290ZXIgLmNyZWRpdCBzcGFuIHtcXHJcXG4gIGNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuLyogbWVkaWEgcXVlcmllcyAgKi9cXHJcXG5cXHJcXG5AbWVkaWEgKG1heC13aWR0aDogOTkxcHgpIHtcXHJcXG4gIGh0bWwge1xcclxcbiAgICBmb250LXNpemU6IDU1JTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIHNlY3Rpb24ge1xcclxcbiAgICBwYWRkaW5nOiAycmVtO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcXHJcXG4gIC5tZW51IHtcXHJcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmhlYWRlciAubmF2YmFyIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB0b3A6IDk5JTtcXHJcXG4gICAgbGVmdDogMDtcXHJcXG4gICAgcmlnaHQ6IDA7XFxyXFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC44KTtcXHJcXG4gICAgY2xpcC1wYXRoOiBwb2x5Z29uKDAgMCwgMTAwJSAwLCAxMDAlIDAsIDAgMCk7XFxyXFxuICAgIG1pbi1oZWlnaHQ6IDcwdmg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuaGVhZGVyIC5uYXZiYXIuYWN0aXZlIHtcXHJcXG4gICAgY2xpcC1wYXRoOiBwb2x5Z29uKDAgMCwgMTAwJSAwLCAxMDAlIDEwMCUsIDAlIDEwMCUpO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmhlYWRlciAubmF2YmFyIGEge1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgbWFyZ2luOiAycmVtO1xcclxcbiAgICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgICBmb250LXNpemU6IDIuNXJlbTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmNhcmQtc2VjdGlvbiB7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMmZyO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1heC13aWR0aDogNDUwcHgpIHtcXHJcXG4gIGh0bWwge1xcclxcbiAgICBmb250LXNpemU6IDUwJTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5ob21lIC5ob21lLXNsaWRlciAuc3dpcGVyLWJ1dHRvbi1uZXh0LFxcclxcbiAgLmhvbWUgLmhvbWUtc2xpZGVyIC5zd2lwZXItYnV0dG9uLXByZXYge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmNhcmQtc2VjdGlvbiB7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmNhcmQtc2VjdGlvbiAuY2FyZCB7XFxyXFxuICAgIHBhZGRpbmc6IDAuM3JlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jYXJkLXNlY3Rpb24gLmNhcmQgLmNvbW1lbnQtYnRuIHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XFxyXFxuICB9XFxyXFxufVxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltd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QUFjO0VBQ2hCOztFQUVBO0lBQ0UsYUFBYTtFQUNmO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLHFCQUFxQjtFQUN2Qjs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsT0FBTztJQUNQLFFBQVE7SUFDUiw4QkFBOEI7SUFDOUIsNENBQTRDO0lBQzVDLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLG1EQUFtRDtFQUNyRDs7RUFFQTtJQUNFLGNBQWM7SUFDZCxZQUFZO0lBQ1osYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSwwQkFBMEI7RUFDNUI7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsY0FBYztFQUNoQjs7RUFFQTs7SUFFRSxhQUFhO0VBQ2Y7O0VBRUE7SUFDRSwwQkFBMEI7RUFDNUI7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsaUJBQWlCO0lBQ2pCLG1CQUFtQjtFQUNyQjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBvcHBpbnM6d2dodEAxMDA7MzAwOzQwMDs1MDA7NjAwJmRpc3BsYXk9c3dhcCcpO1xcclxcblxcclxcbjpyb290IHtcXHJcXG4gIC0tbWFpbi1jb2xvcjogI2VmNzgxOTtcXHJcXG4gIC0tYmxhY2s6ICMxNDEyMTU7XFxyXFxufVxcclxcblxcclxcbioge1xcclxcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgbGluZWFyO1xcclxcbn1cXHJcXG5cXHJcXG5odG1sIHtcXHJcXG4gIGZvbnQtc2l6ZTogNjIuNSU7XFxyXFxuICBvdmVyZmxvdy14OiBoaWRkZW47XFxyXFxuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcXHJcXG4gIHNjcm9sbC1wYWRkaW5nLXRvcDogN3JlbTtcXHJcXG59XFxyXFxuXFxyXFxuaHRtbDo6LXdlYmtpdC1zY3JvbGxiYXIge1xcclxcbiAgd2lkdGg6IDFyZW07XFxyXFxufVxcclxcblxcclxcbmh0bWw6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcXHJcXG4gIGJhY2tncm91bmQ6IHZhcigtLWJsYWNrKTtcXHJcXG59XFxyXFxuXFxyXFxuaHRtbDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcclxcbiAgYmFja2dyb3VuZDogdmFyKC0tbWFpbi1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xcclxcbiAgYmFja2dyb3VuZDogdmFyKC0tYmxhY2spO1xcclxcbn1cXHJcXG5cXHJcXG5zZWN0aW9uIHtcXHJcXG4gIHBhZGRpbmc6IDJyZW0gNnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlciB7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgcmlnaHQ6IDA7XFxyXFxuICB6LWluZGV4OiAxMDAwO1xcclxcbiAgcGFkZGluZzogMnJlbSA5JTtcXHJcXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC44KTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyIC5sb2dvIHtcXHJcXG4gIGZvbnQtc2l6ZTogMi41cmVtO1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyIC5sb2dvIGkge1xcclxcbiAgcGFkZGluZy1yaWdodDogMC41cmVtO1xcclxcbiAgY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xcclxcbiAgYW5pbWF0aW9uOiBmbG9hdGluZyAycyBsaW5lYXIgaW5maW5pdGU7XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgZmxvYXRpbmcge1xcclxcbiAgMCUge1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAxMDAlIHtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xcclxcbiAgfVxcclxcblxcclxcbiAgNTAlIHtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcmVtKTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlciAubmF2YmFyIGEge1xcclxcbiAgZm9udC1zaXplOiAxLjdyZW07XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIG1hcmdpbjogMCAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyIC5uYXZiYXIgYTpob3ZlciB7XFxyXFxuICBjb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXIuYWN0aXZlIHtcXHJcXG4gIHBhZGRpbmc6IDJyZW0gOSU7XFxyXFxuICBiYWNrZ3JvdW5kOiAjMjIyO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyIC5tZW51IHtcXHJcXG4gIGZvbnQtc2l6ZTogMi41cmVtO1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxuICBtYXJnaW4tbGVmdDogMnJlbTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlciAubWVudTpob3ZlciB7XFxyXFxuICBjb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbi5tZW51IHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5ob21lIHtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxufVxcclxcblxcclxcbi5ob21lIC5ob21lLXNsaWRlciAuYm94IHtcXHJcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDJyZW07XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XFxyXFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgIWltcG9ydGFudDtcXHJcXG59XFxyXFxuXFxyXFxuLmhvbWUgLmhvbWUtc2xpZGVyIC5zd2lwZXItYnV0dG9uLW5leHQge1xcclxcbiAgcmlnaHQ6IDRyZW07XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIG9wYWNpdHk6IDA7XFxyXFxufVxcclxcblxcclxcbi5ob21lIC5ob21lLXNsaWRlciAuc3dpcGVyLWJ1dHRvbi1wcmV2IHtcXHJcXG4gIGxlZnQ6IDRyZW07XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIG9wYWNpdHk6IDA7XFxyXFxufVxcclxcblxcclxcbi5ob21lIC5ob21lLXNsaWRlciAuc3dpcGVyLWJ1dHRvbi1uZXh0OmhvdmVyLFxcclxcbi5ob21lIC5ob21lLXNsaWRlciAuc3dpcGVyLWJ1dHRvbi1wcmV2OmhvdmVyIHtcXHJcXG4gIGNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuLmhvbWUgLmhvbWUtc2xpZGVyOmhvdmVyIC5zd2lwZXItYnV0dG9uLW5leHQsXFxyXFxuLmhvbWUgLmhvbWUtc2xpZGVyOmhvdmVyIC5zd2lwZXItYnV0dG9uLXByZXYge1xcclxcbiAgb3BhY2l0eTogMTtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmQtc2VjdGlvbiB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcXHJcXG4gIGdyaWQtZ2FwOiAxcmVtO1xcclxcbiAgbWFyZ2luLXRvcDogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmQtc2VjdGlvbiAuY2FyZCB7XFxyXFxuICBiYWNrZ3JvdW5kOiAjMjIyO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcclxcbiAgcGFkZGluZzogMnJlbTtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZC1zZWN0aW9uIC5jb250ZW50IC5uYW1lLWRpdiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5jYXJkLXNlY3Rpb24gLmNvbnRlbnQgLm5hbWUtZGl2IGgyIHtcXHJcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICBjb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbi5jYXJkLXNlY3Rpb24gLmNvbnRlbnQgLmxpa2VzIHtcXHJcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxyXFxuICBjb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbi5jYXJkLXNlY3Rpb24gLmRlc2NyaXB0aW9uIHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDFyZW0gMS41cmVtO1xcclxcbiAgZm9udC1zaXplOiAxLjdyZW07XFxyXFxuICBtYXJnaW46IDAgYXV0bztcXHJcXG4gIG1hcmdpbi1ib3R0b206IDJyZW07XFxyXFxufVxcclxcblxcclxcbi5jYXJkLXNlY3Rpb24gLmNhcmQgLmNvbW1lbnQtYnRuIHtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxuICBmb250LXNpemU6IDEuN3JlbTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcclxcbiAgYm94LXNoYWRvdzogMCAxMHB4IDE1cHggcmdiKDU1IDE0OCAxNDMpO1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxuICBmb250LXdlaWdodDogOTAwO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZC1zZWN0aW9uIC5jYXJkIC5jb21tZW50LWJ0bjpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1tYWluLWNvbG9yKTtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9vdGVyIC5jcmVkaXQge1xcclxcbiAgcGFkZGluZzogMXJlbTtcXHJcXG4gIHBhZGRpbmctdG9wOiAycmVtO1xcclxcbiAgbWFyZ2luLXRvcDogMnJlbTtcXHJcXG4gIGJvcmRlci10b3A6IDAuMXJlbSBzb2xpZCAjZmZmMztcXHJcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG4gIGNvbG9yOiAjYWFhO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9vdGVyIC5jcmVkaXQgc3BhbiB7XFxyXFxuICBjb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbi8qIG1lZGlhIHF1ZXJpZXMgICovXFxyXFxuXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MXB4KSB7XFxyXFxuICBodG1sIHtcXHJcXG4gICAgZm9udC1zaXplOiA1NSU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICBzZWN0aW9uIHtcXHJcXG4gICAgcGFkZGluZzogMnJlbTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XFxyXFxuICAubWVudSB7XFxyXFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5oZWFkZXIgLm5hdmJhciB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdG9wOiA5OSU7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICAgIHJpZ2h0OiAwO1xcclxcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuOCk7XFxyXFxuICAgIGNsaXAtcGF0aDogcG9seWdvbigwIDAsIDEwMCUgMCwgMTAwJSAwLCAwIDApO1xcclxcbiAgICBtaW4taGVpZ2h0OiA3MHZoO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmhlYWRlciAubmF2YmFyLmFjdGl2ZSB7XFxyXFxuICAgIGNsaXAtcGF0aDogcG9seWdvbigwIDAsIDEwMCUgMCwgMTAwJSAxMDAlLCAwJSAxMDAlKTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5oZWFkZXIgLm5hdmJhciBhIHtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIG1hcmdpbjogMnJlbTtcXHJcXG4gICAgcGFkZGluZzogMXJlbTtcXHJcXG4gICAgZm9udC1zaXplOiAyLjVyZW07XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jYXJkLXNlY3Rpb24ge1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmcjtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDQ1MHB4KSB7XFxyXFxuICBodG1sIHtcXHJcXG4gICAgZm9udC1zaXplOiA1MCU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuaG9tZSAuaG9tZS1zbGlkZXIgLnN3aXBlci1idXR0b24tbmV4dCxcXHJcXG4gIC5ob21lIC5ob21lLXNsaWRlciAuc3dpcGVyLWJ1dHRvbi1wcmV2IHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jYXJkLXNlY3Rpb24ge1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jYXJkLXNlY3Rpb24gLmNhcmQge1xcclxcbiAgICBwYWRkaW5nOiAwLjNyZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY2FyZC1zZWN0aW9uIC5jYXJkIC5jb21tZW50LWJ0biB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0ICcuL2Fzc2V0cy9pbWFnZXMvYmF0bWFuLnBuZyc7XG5pbXBvcnQgJy4vYXNzZXRzL2ltYWdlcy9pbWFnZTEucG5nJztcbmltcG9ydCAnLi9hc3NldHMvaW1hZ2VzL2ltYWdlMi5wbmcnO1xuaW1wb3J0ICcuL2Fzc2V0cy9pbWFnZXMvaW1hZ2UzLnBuZyc7XG5pbXBvcnQgJy4vYXNzZXRzL2ltYWdlcy9pbWFnZTQucG5nJztcbmltcG9ydCAnLi9hc3NldHMvaW1hZ2VzL2ltYWdlNS5wbmcnO1xuaW1wb3J0ICcuL2Fzc2V0cy9pbWFnZXMvaW1hZ2U2LnBuZyc7XG5pbXBvcnQgJy4vYXNzZXRzL2ltYWdlcy9pbWFnZTcucG5nJztcbmltcG9ydCAnLi9hc3NldHMvaW1hZ2VzL2ltYWdlOC5wbmcnO1xuaW1wb3J0ICcuL2Fzc2V0cy9pbWFnZXMvaW1hZ2U5LnBuZyc7XG5pbXBvcnQgJy4vYXNzZXRzL2ltYWdlcy9pbWFnZTEwLnBuZyc7XG5pbXBvcnQgJy4vYXNzZXRzL2ltYWdlcy9pbWFnZTExLnBuZyc7XG5cbmltcG9ydCBzd2lwZXIgZnJvbSAnLi9tb2R1bGVzL3NsaWRlc2hvdy5qcyc7XG5pbXBvcnQgZmV0Y2hEYXRhIGZyb20gJy4vbW9kdWxlcy9mZXRjaERhdGEuanMnO1xuaW1wb3J0IG5hdmJhciBmcm9tICcuL21vZHVsZXMvbW9iaWxlLmpzJztcblxuZmV0Y2hEYXRhKCk7XG5zd2lwZXIoKTtcbm5hdmJhcigpO1xuXG4vLyBzY3JvbGwgc3B5XG5jb25zdCBzZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnc2VjdGlvbicpO1xuY29uc3QgbmF2TGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaGVhZGVyIC5uYXZiYXIgYScpO1xuXG53aW5kb3cub25zY3JvbGwgPSAoKSA9PiB7XG4gIGlmICh3aW5kb3cuc2Nyb2xsWSA+IDApIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyJykuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gIH0gZWxzZSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcicpLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICB9XG5cbiAgc2VjdGlvbi5mb3JFYWNoKChzZWMpID0+IHtcbiAgICBjb25zdCB0b3AgPSB3aW5kb3cuc2Nyb2xsWTtcbiAgICBjb25zdCBvZmZzZXQgPSBzZWMub2Zmc2V0VG9wIC0gMjAwO1xuICAgIGNvbnN0IGhlaWdodCA9IHNlYy5vZmZzZXRIZWlnaHQ7XG4gICAgY29uc3QgaWQgPSBzZWMuZ2V0QXR0cmlidXRlKCdpZCcpO1xuXG4gICAgaWYgKHRvcCA+PSBvZmZzZXQgJiYgdG9wIDwgb2Zmc2V0ICsgaGVpZ2h0KSB7XG4gICAgICBuYXZMaW5rcy5mb3JFYWNoKChsaW5rKSA9PiB7XG4gICAgICAgIGxpbmsuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICAgIGRvY3VtZW50XG4gICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoYC5oZWFkZXIgLm5hdmJhciBhW2hyZWYqPSR7aWR9XWApXG4gICAgICAgICAgLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgfSk7XG4gICAgfVxuICB9KTtcbn07XG5cbndpbmRvdy5vbmxvYWQgPSAoKSA9PiB7XG4gIGlmICh3aW5kb3cuc2Nyb2xsWSA+IDApIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyJykuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gIH0gZWxzZSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcicpLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICB9XG59O1xuIiwiY29uc3QgQVBJX1VSTCA9ICdodHRwczovL3d3dy5mcmVldG9nYW1lLmNvbS9hcGkvZ2FtZXM/Y2F0ZWdvcnk9c2hvb3Rlcic7XG5jb25zdCBjYXJkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJkLXNlY3Rpb24nKTtcblxuY29uc3Qgc2hvd0RhdGEgPSAoZGF0YSkgPT4ge1xuICBjb25zdCBjYXJkQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNhcmRDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY2FyZCcpO1xuICBjYXJkQ29udGFpbmVyLmlubmVySFRNTCA9IGBcbiAgICAgICAgPGltZ1xuICAgICAgICAgIHNyYz1cIiR7ZGF0YS50aHVtYm5haWx9XCJcbiAgICAgICAgICBjbGFzcz1cImNhcmQtaW1hZ2VcIlxuICAgICAgICAvPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGVudFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYW1lLWRpdlwiPlxuICAgICAgICAgICAgPGgyPiR7ZGF0YS50aXRsZX08L2gyPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxpa2VzXCI+XG4gICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEtc29saWQgZmEtaGVhcnRcIiBpZD1cImxvdmVcIj48L2k+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibGlrZXMtaW5mb1wiIGlkPVwiNTE2XCI+NDwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxwIGNsYXNzPVwiZGVzY3JpcHRpb25cIj5cbiAgICAgICAgICAgJHtkYXRhLnNob3J0X2Rlc2NyaXB0aW9ufVxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8YnV0dG9uIGlkPVwiNTE2XCIgY2xhc3M9XCJjb21tZW50LWJ0blwiPkNvbW1lbnRzPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgIGA7XG4gIGNhcmRzLmFwcGVuZENoaWxkKGNhcmRDb250YWluZXIpO1xufTtcblxuY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKEFQSV9VUkwpO1xuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IDE1OyBpICs9IDEpIHtcbiAgICBzaG93RGF0YShkYXRhW2ldKTtcbiAgfVxufTtcblxuZmV0Y2hEYXRhKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGZldGNoRGF0YTtcbiIsImNvbnN0IG5hdmJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXZiYXInKTtcbmNvbnN0IG1lbnVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWVudS1idG4nKTtcbm1lbnVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIG5hdmJhci5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcbn0pO1xud2luZG93Lm9uc2Nyb2xsID0gKCkgPT4ge1xuICBuYXZiYXIuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG59O1xuZXhwb3J0IGRlZmF1bHQgbmF2YmFyO1xuIiwiLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG5jb25zdCBzd2lwZXIgPSBuZXcgU3dpcGVyKCcuaG9tZS1zbGlkZXInLCB7XG4gIHNwYWNlQmV0d2VlbjogMjAsXG4gIGVmZmVjdDogJ2ZhZGUnLFxuICBsb29wOiB0cnVlLFxuICBuYXZpZ2F0aW9uOiB7XG4gICAgbmV4dEVsOiAnLnN3aXBlci1idXR0b24tbmV4dCcsXG4gICAgcHJldkVsOiAnLnN3aXBlci1idXR0b24tcHJldicsXG4gIH0sXG4gIGNlbnRlcmVkU2xpZGVzOiB0cnVlLFxuICBhdXRvcGxheToge1xuICAgIGRlbGF5OiA5NTAwLFxuICAgIGRpc2FibGVPbkludGVyYWN0aW9uOiBmYWxzZSxcbiAgfSxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBzd2lwZXI7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
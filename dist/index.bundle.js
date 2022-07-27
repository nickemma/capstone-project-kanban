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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\r\n  --main-color: #ef7819;\r\n  --black: #141215;\r\n}\r\n\r\n* {\r\n  font-family: 'Poppins', sans-serif;\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n  outline: none;\r\n  border: none;\r\n  text-decoration: none;\r\n  text-transform: capitalize;\r\n  transition: all 0.2s linear;\r\n}\r\n\r\nhtml {\r\n  font-size: 62.5%;\r\n  overflow-x: hidden;\r\n  scroll-behavior: smooth;\r\n  scroll-padding-top: 7rem;\r\n}\r\n\r\nhtml::-webkit-scrollbar {\r\n  width: 1rem;\r\n}\r\n\r\nhtml::-webkit-scrollbar-track {\r\n  background: var(--black);\r\n}\r\n\r\nhtml::-webkit-scrollbar-thumb {\r\n  background: var(--main-color);\r\n}\r\n\r\nbody {\r\n  overflow-x: hidden;\r\n  background: var(--black);\r\n}\r\n\r\nsection {\r\n  padding: 2rem 6rem;\r\n}\r\n\r\n.header {\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  z-index: 1000;\r\n  padding: 2rem 9%;\r\n  background: rgba(0, 0, 0, 0.8);\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n}\r\n\r\n.header .logo {\r\n  font-size: 2.5rem;\r\n  color: #fff;\r\n  font-weight: bolder;\r\n}\r\n\r\n.header .logo i {\r\n  padding-right: 0.5rem;\r\n  color: var(--main-color);\r\n  animation: floating 2s linear infinite;\r\n}\r\n\r\n@keyframes floating {\r\n  0% {\r\n    transform: translateY(0);\r\n  }\r\n\r\n  100% {\r\n    transform: translateY(0);\r\n  }\r\n\r\n  50% {\r\n    transform: translateY(-1rem);\r\n  }\r\n}\r\n\r\n.header .navbar a {\r\n  font-size: 1.7rem;\r\n  color: #fff;\r\n  margin: 0 1rem;\r\n}\r\n\r\n.footer .credit span a {\r\n  color: var(--main-color);\r\n  font-style: italic;\r\n}\r\n\r\n.header .navbar a:hover {\r\n  color: var(--main-color);\r\n}\r\n\r\n.menu {\r\n  display: none;\r\n}\r\n\r\n.header .menu {\r\n  font-size: 2.5rem;\r\n  color: #fff;\r\n  margin-left: 2rem;\r\n  cursor: pointer;\r\n}\r\n\r\n.header .menu:hover {\r\n  color: var(--main-color);\r\n}\r\n\r\n.home {\r\n  padding: 0;\r\n}\r\n\r\n.home .home-slider .box {\r\n  min-height: 100vh;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  padding: 2rem;\r\n  background-size: cover !important;\r\n  background-position: center !important;\r\n}\r\n\r\n.home .home-slider .swiper-button-next {\r\n  right: 4rem;\r\n  color: #fff;\r\n  opacity: 0;\r\n}\r\n\r\n.home .home-slider .swiper-button-prev {\r\n  left: 4rem;\r\n  color: #fff;\r\n  opacity: 0;\r\n}\r\n\r\n.home .home-slider .swiper-button-next:hover,\r\n.home .home-slider .swiper-button-prev:hover {\r\n  color: var(--main-color);\r\n}\r\n\r\n.home .home-slider:hover .swiper-button-next,\r\n.home .home-slider:hover .swiper-button-prev {\r\n  opacity: 1;\r\n}\r\n\r\n.card-section {\r\n  display: grid;\r\n  grid-template-columns: repeat(3, 1fr);\r\n  grid-gap: 1rem;\r\n  margin-top: 2rem;\r\n}\r\n\r\n.card-section .card {\r\n  background: #222;\r\n  border-radius: 0.5rem;\r\n  padding: 2rem;\r\n  color: #fff;\r\n}\r\n\r\n.card-section .content .name-div {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  padding: 10px;\r\n}\r\n\r\n.card-section .content .name-div h2 {\r\n  font-size: 2rem;\r\n  font-weight: 600;\r\n  color: var(--main-color);\r\n}\r\n\r\n.card-section .content .likes {\r\n  font-size: 2rem;\r\n  font-weight: 900;\r\n  color: var(--main-color);\r\n  cursor: pointer;\r\n}\r\n\r\n.card-section .description {\r\n  text-align: center;\r\n  padding: 1rem 1.5rem;\r\n  font-size: 1.7rem;\r\n  margin: 0 auto;\r\n  margin-bottom: 2rem;\r\n}\r\n\r\n.card-section .card .comment-btn {\r\n  padding: 10px;\r\n  font-size: 1.7rem;\r\n  border-radius: 5px;\r\n  border: none;\r\n  background: transparent;\r\n  box-shadow: 0 10px 15px rgb(55 148 143);\r\n  color: #fff;\r\n  font-weight: 900;\r\n  cursor: pointer;\r\n  margin: 0 auto;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n.card-section .card .comment-btn:hover {\r\n  background: var(--main-color);\r\n  color: #fff;\r\n}\r\n\r\n.footer .credit {\r\n  padding: 1rem;\r\n  padding-top: 2rem;\r\n  margin-top: 2rem;\r\n  border-top: 0.1rem solid #fff3;\r\n  font-size: 2rem;\r\n  color: #aaa;\r\n  text-align: center;\r\n}\r\n\r\n/* popup section */\r\n\r\n.popup-section {\r\n  background: #222;\r\n}\r\n\r\n.popup {\r\n  width: 60vw;\r\n  height: 90vh;\r\n  padding: 30px 50px;\r\n  background-color: #2e3130;\r\n  position: fixed;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  justify-content: space-between;\r\n  gap: 20px;\r\n  border-radius: 20px;\r\n  overflow-y: scroll;\r\n  color: #d2d1d3;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n.popup #close-btn {\r\n  background: transparent;\r\n  border: none;\r\n  align-self: flex-end;\r\n  font-size: 4rem;\r\n  color: #d2d1d3;\r\n  cursor: pointer;\r\n}\r\n\r\n.popup .display {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n.popup .display .description {\r\n  width: 90%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n.popup .display .description img {\r\n  width: 90%;\r\n  border-radius: 20px;\r\n}\r\n\r\n.popup .display .description .game-title {\r\n  font-size: 2.8rem;\r\n}\r\n\r\n.popup .display .display-details {\r\n  width: 80%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n.popup .display .display-details h3 {\r\n  font-size: 2rem;\r\n}\r\n\r\n.popup .display .display-details ul > li {\r\n  list-style: none;\r\n  font-size: 1.5rem;\r\n  padding-bottom: 1rem;\r\n  line-height: 1.2;\r\n}\r\n\r\n.popup .comment-section {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n.popup .comment-section .comment-show {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n.popup .comment-section .comment-show h3 {\r\n  font-size: 2rem;\r\n  font-weight: 900;\r\n  color: #d2d1d3;\r\n}\r\n\r\n.popup .comment-section .comment-show ul {\r\n  list-style: none;\r\n  font-style: italic;\r\n  font-size: 1.2rem;\r\n}\r\n\r\n.popup .comment-section .comment {\r\n  width: 70%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n.popup .comment-section .comment h3 {\r\n  font-size: 1.5rem;\r\n  margin-top: 5rem;\r\n}\r\n\r\n.popup .comment-section .comment form {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 10px;\r\n  width: 100%;\r\n}\r\n\r\n.popup .comment-section .comment form input[type='text'],\r\n.popup .comment-section .comment form textarea {\r\n  width: 100%;\r\n  font-size: 1.2rem;\r\n  padding: 10px;\r\n  border-radius: 10px;\r\n  border: none;\r\n}\r\n\r\n.popup .comment-section .comment form textarea {\r\n  height: 15rem;\r\n}\r\n\r\n.popup .comment-section .comment form .submit-btn {\r\n  align-self: flex-start;\r\n  font-size: 1.3rem;\r\n  font-weight: 900;\r\n  border: none;\r\n  padding: 10px;\r\n  border-radius: 0.5rem;\r\n  cursor: pointer;\r\n}\r\n\r\n/* media queries  */\r\n\r\n@media (max-width: 991px) {\r\n  html {\r\n    font-size: 55%;\r\n  }\r\n\r\n  section {\r\n    padding: 2rem;\r\n  }\r\n}\r\n\r\n@media (max-width: 768px) {\r\n  .menu {\r\n    display: inline-block;\r\n  }\r\n\r\n  .header .navbar {\r\n    position: absolute;\r\n    top: 99%;\r\n    left: 0;\r\n    right: 0;\r\n    background: rgba(0, 0, 0, 0.8);\r\n    clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);\r\n    min-height: 70vh;\r\n  }\r\n\r\n  .header .navbar.active {\r\n    clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);\r\n  }\r\n\r\n  .header .navbar a {\r\n    display: block;\r\n    margin: 2rem;\r\n    padding: 1rem;\r\n    font-size: 2.5rem;\r\n    text-align: center;\r\n  }\r\n\r\n  .card-section {\r\n    grid-template-columns: 2fr;\r\n  }\r\n\r\n  .popup {\r\n    width: 90vw;\r\n  }\r\n}\r\n\r\n@media (max-width: 450px) {\r\n  html {\r\n    font-size: 50%;\r\n  }\r\n\r\n  .home .home-slider .swiper-button-next,\r\n  .home .home-slider .swiper-button-prev {\r\n    display: none;\r\n  }\r\n\r\n  .card-section {\r\n    grid-template-columns: 1fr;\r\n  }\r\n\r\n  .card-section .card {\r\n    padding: 0.3rem;\r\n  }\r\n\r\n  .card-section .card .comment-btn {\r\n    font-size: 1.5rem;\r\n    margin-bottom: 1rem;\r\n  }\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;300;400;500;600&display=swap');\r\n\r\n:root {\r\n  --main-color: #ef7819;\r\n  --black: #141215;\r\n}\r\n\r\n* {\r\n  font-family: 'Poppins', sans-serif;\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n  outline: none;\r\n  border: none;\r\n  text-decoration: none;\r\n  text-transform: capitalize;\r\n  transition: all 0.2s linear;\r\n}\r\n\r\nhtml {\r\n  font-size: 62.5%;\r\n  overflow-x: hidden;\r\n  scroll-behavior: smooth;\r\n  scroll-padding-top: 7rem;\r\n}\r\n\r\nhtml::-webkit-scrollbar {\r\n  width: 1rem;\r\n}\r\n\r\nhtml::-webkit-scrollbar-track {\r\n  background: var(--black);\r\n}\r\n\r\nhtml::-webkit-scrollbar-thumb {\r\n  background: var(--main-color);\r\n}\r\n\r\nbody {\r\n  overflow-x: hidden;\r\n  background: var(--black);\r\n}\r\n\r\nsection {\r\n  padding: 2rem 6rem;\r\n}\r\n\r\n.header {\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  z-index: 1000;\r\n  padding: 2rem 9%;\r\n  background: rgba(0, 0, 0, 0.8);\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n}\r\n\r\n.header .logo {\r\n  font-size: 2.5rem;\r\n  color: #fff;\r\n  font-weight: bolder;\r\n}\r\n\r\n.header .logo i {\r\n  padding-right: 0.5rem;\r\n  color: var(--main-color);\r\n  animation: floating 2s linear infinite;\r\n}\r\n\r\n@keyframes floating {\r\n  0% {\r\n    transform: translateY(0);\r\n  }\r\n\r\n  100% {\r\n    transform: translateY(0);\r\n  }\r\n\r\n  50% {\r\n    transform: translateY(-1rem);\r\n  }\r\n}\r\n\r\n.header .navbar a {\r\n  font-size: 1.7rem;\r\n  color: #fff;\r\n  margin: 0 1rem;\r\n}\r\n\r\n.footer .credit span a {\r\n  color: var(--main-color);\r\n  font-style: italic;\r\n}\r\n\r\n.header .navbar a:hover {\r\n  color: var(--main-color);\r\n}\r\n\r\n.menu {\r\n  display: none;\r\n}\r\n\r\n.header .menu {\r\n  font-size: 2.5rem;\r\n  color: #fff;\r\n  margin-left: 2rem;\r\n  cursor: pointer;\r\n}\r\n\r\n.header .menu:hover {\r\n  color: var(--main-color);\r\n}\r\n\r\n.home {\r\n  padding: 0;\r\n}\r\n\r\n.home .home-slider .box {\r\n  min-height: 100vh;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  padding: 2rem;\r\n  background-size: cover !important;\r\n  background-position: center !important;\r\n}\r\n\r\n.home .home-slider .swiper-button-next {\r\n  right: 4rem;\r\n  color: #fff;\r\n  opacity: 0;\r\n}\r\n\r\n.home .home-slider .swiper-button-prev {\r\n  left: 4rem;\r\n  color: #fff;\r\n  opacity: 0;\r\n}\r\n\r\n.home .home-slider .swiper-button-next:hover,\r\n.home .home-slider .swiper-button-prev:hover {\r\n  color: var(--main-color);\r\n}\r\n\r\n.home .home-slider:hover .swiper-button-next,\r\n.home .home-slider:hover .swiper-button-prev {\r\n  opacity: 1;\r\n}\r\n\r\n.card-section {\r\n  display: grid;\r\n  grid-template-columns: repeat(3, 1fr);\r\n  grid-gap: 1rem;\r\n  margin-top: 2rem;\r\n}\r\n\r\n.card-section .card {\r\n  background: #222;\r\n  border-radius: 0.5rem;\r\n  padding: 2rem;\r\n  color: #fff;\r\n}\r\n\r\n.card-section .content .name-div {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  padding: 10px;\r\n}\r\n\r\n.card-section .content .name-div h2 {\r\n  font-size: 2rem;\r\n  font-weight: 600;\r\n  color: var(--main-color);\r\n}\r\n\r\n.card-section .content .likes {\r\n  font-size: 2rem;\r\n  font-weight: 900;\r\n  color: var(--main-color);\r\n  cursor: pointer;\r\n}\r\n\r\n.card-section .description {\r\n  text-align: center;\r\n  padding: 1rem 1.5rem;\r\n  font-size: 1.7rem;\r\n  margin: 0 auto;\r\n  margin-bottom: 2rem;\r\n}\r\n\r\n.card-section .card .comment-btn {\r\n  padding: 10px;\r\n  font-size: 1.7rem;\r\n  border-radius: 5px;\r\n  border: none;\r\n  background: transparent;\r\n  box-shadow: 0 10px 15px rgb(55 148 143);\r\n  color: #fff;\r\n  font-weight: 900;\r\n  cursor: pointer;\r\n  margin: 0 auto;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n.card-section .card .comment-btn:hover {\r\n  background: var(--main-color);\r\n  color: #fff;\r\n}\r\n\r\n.footer .credit {\r\n  padding: 1rem;\r\n  padding-top: 2rem;\r\n  margin-top: 2rem;\r\n  border-top: 0.1rem solid #fff3;\r\n  font-size: 2rem;\r\n  color: #aaa;\r\n  text-align: center;\r\n}\r\n\r\n/* popup section */\r\n\r\n.popup-section {\r\n  background: #222;\r\n}\r\n\r\n.popup {\r\n  width: 60vw;\r\n  height: 90vh;\r\n  padding: 30px 50px;\r\n  background-color: #2e3130;\r\n  position: fixed;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  justify-content: space-between;\r\n  gap: 20px;\r\n  border-radius: 20px;\r\n  overflow-y: scroll;\r\n  color: #d2d1d3;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n.popup #close-btn {\r\n  background: transparent;\r\n  border: none;\r\n  align-self: flex-end;\r\n  font-size: 4rem;\r\n  color: #d2d1d3;\r\n  cursor: pointer;\r\n}\r\n\r\n.popup .display {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n.popup .display .description {\r\n  width: 90%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n.popup .display .description img {\r\n  width: 90%;\r\n  border-radius: 20px;\r\n}\r\n\r\n.popup .display .description .game-title {\r\n  font-size: 2.8rem;\r\n}\r\n\r\n.popup .display .display-details {\r\n  width: 80%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n.popup .display .display-details h3 {\r\n  font-size: 2rem;\r\n}\r\n\r\n.popup .display .display-details ul > li {\r\n  list-style: none;\r\n  font-size: 1.5rem;\r\n  padding-bottom: 1rem;\r\n  line-height: 1.2;\r\n}\r\n\r\n.popup .comment-section {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n.popup .comment-section .comment-show {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n.popup .comment-section .comment-show h3 {\r\n  font-size: 2rem;\r\n  font-weight: 900;\r\n  color: #d2d1d3;\r\n}\r\n\r\n.popup .comment-section .comment-show ul {\r\n  list-style: none;\r\n  font-style: italic;\r\n  font-size: 1.2rem;\r\n}\r\n\r\n.popup .comment-section .comment {\r\n  width: 70%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n.popup .comment-section .comment h3 {\r\n  font-size: 1.5rem;\r\n  margin-top: 5rem;\r\n}\r\n\r\n.popup .comment-section .comment form {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 10px;\r\n  width: 100%;\r\n}\r\n\r\n.popup .comment-section .comment form input[type='text'],\r\n.popup .comment-section .comment form textarea {\r\n  width: 100%;\r\n  font-size: 1.2rem;\r\n  padding: 10px;\r\n  border-radius: 10px;\r\n  border: none;\r\n}\r\n\r\n.popup .comment-section .comment form textarea {\r\n  height: 15rem;\r\n}\r\n\r\n.popup .comment-section .comment form .submit-btn {\r\n  align-self: flex-start;\r\n  font-size: 1.3rem;\r\n  font-weight: 900;\r\n  border: none;\r\n  padding: 10px;\r\n  border-radius: 0.5rem;\r\n  cursor: pointer;\r\n}\r\n\r\n/* media queries  */\r\n\r\n@media (max-width: 991px) {\r\n  html {\r\n    font-size: 55%;\r\n  }\r\n\r\n  section {\r\n    padding: 2rem;\r\n  }\r\n}\r\n\r\n@media (max-width: 768px) {\r\n  .menu {\r\n    display: inline-block;\r\n  }\r\n\r\n  .header .navbar {\r\n    position: absolute;\r\n    top: 99%;\r\n    left: 0;\r\n    right: 0;\r\n    background: rgba(0, 0, 0, 0.8);\r\n    clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);\r\n    min-height: 70vh;\r\n  }\r\n\r\n  .header .navbar.active {\r\n    clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);\r\n  }\r\n\r\n  .header .navbar a {\r\n    display: block;\r\n    margin: 2rem;\r\n    padding: 1rem;\r\n    font-size: 2.5rem;\r\n    text-align: center;\r\n  }\r\n\r\n  .card-section {\r\n    grid-template-columns: 2fr;\r\n  }\r\n\r\n  .popup {\r\n    width: 90vw;\r\n  }\r\n}\r\n\r\n@media (max-width: 450px) {\r\n  html {\r\n    font-size: 50%;\r\n  }\r\n\r\n  .home .home-slider .swiper-button-next,\r\n  .home .home-slider .swiper-button-prev {\r\n    display: none;\r\n  }\r\n\r\n  .card-section {\r\n    grid-template-columns: 1fr;\r\n  }\r\n\r\n  .card-section .card {\r\n    padding: 0.3rem;\r\n  }\r\n\r\n  .card-section .card .comment-btn {\r\n    font-size: 1.5rem;\r\n    margin-bottom: 1rem;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
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
/* harmony import */ var _modules_addLike_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./modules/addLike.js */ "./src/modules/addLike.js");
/* harmony import */ var _modules_mobile_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./modules/mobile.js */ "./src/modules/mobile.js");
/* harmony import */ var _modules_itemCounter_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./modules/itemCounter.js */ "./src/modules/itemCounter.js");
/* harmony import */ var _modules_popUp_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./modules/popUp.js */ "./src/modules/popUp.js");
/* harmony import */ var _modules_addComment_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./modules/addComment.js */ "./src/modules/addComment.js");






















(0,_modules_fetchData_js__WEBPACK_IMPORTED_MODULE_14__["default"])();
(0,_modules_slideshow_js__WEBPACK_IMPORTED_MODULE_13__["default"])();
(0,_modules_addLike_js__WEBPACK_IMPORTED_MODULE_15__["default"])();
(0,_modules_mobile_js__WEBPACK_IMPORTED_MODULE_16__["default"])();
(0,_modules_itemCounter_js__WEBPACK_IMPORTED_MODULE_17__["default"])();
(0,_modules_addComment_js__WEBPACK_IMPORTED_MODULE_19__["default"])();
const game = new _modules_popUp_js__WEBPACK_IMPORTED_MODULE_18__["default"]();
game.getGame();


/***/ }),

/***/ "./src/modules/addComment.js":
/*!***********************************!*\
  !*** ./src/modules/addComment.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const url =
  'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/Y9ST6EsEV41gcCvlbOfZ/comments';
const comments = document.querySelector('.content');

const addComment = () => {
  comments.addEventListener('submit', (e) => {
    e.preventDefault();
    const submitted = e.target.closest('.form');
    const item = submitted.dataset.getComment;
    const userValue = submitted.querySelector('#name').value;
    const textArea = submitted.querySelector('#description').value;
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        item_id: item,
        username: userValue,
        comment: textArea,
      }),
    });
    fetch(
      `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/Y9ST6EsEV41gcCvlbOfZ/comments?item_id=${item}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const comments = document.querySelector('.comments');
        console.log(comments);
        const li = document.createElement('li');
        li.innerHTML = `
          <p>${data[0].comment}</p>
          <p>${data[0].username}</p>
        `;
        comments.appendChild(li);
      });
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addComment);


/***/ }),

/***/ "./src/modules/addLike.js":
/*!********************************!*\
  !*** ./src/modules/addLike.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const likes = document.querySelector('.card-section');
const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/Y9ST6EsEV41gcCvlbOfZ/likes';

const addLike = () => {
  likes.addEventListener('click', (e) => {
    const clicked = e.target.closest('.add-like');
    if (!clicked) return;
    const item = clicked.getAttribute('id');
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        item_id: item,
      }),
    });
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        const likesInfo = document.querySelector(`.likes-${item}`);
        likesInfo.querySelector('span').textContent = data.filter(
          (items) => items.item_id === item,
        )[0].likes;
      });
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addLike);


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
            <div class="likes likes-${data.id}">
              <i class="fa-solid fa-heart add-like" id="${data.id}"></i>
              <span class="likes-info ${data.id}" id="${data.id}">4</span>
            </div>
          </div>
          <p class="description">
           ${data.short_description}
          </p>
          <button id="${data.id}" class="comment-btn">Comments</button>
        </div>
    `;
  cards.appendChild(cardContainer);
  fetch(
    'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/Y9ST6EsEV41gcCvlbOfZ/likes',
  )
    .then((res) => res.json())
    .then((getData) => {
      const likesFilter = getData.filter(
        (items) => items.item_id === `${data.id}`,
      )[0].likes;
      if (!likesFilter) return;
      const likesInfo = document.querySelector(`.likes-${data.id}`);
      likesInfo.querySelector('span').textContent = likesFilter;
    });
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

/***/ "./src/modules/itemCounter.js":
/*!************************************!*\
  !*** ./src/modules/itemCounter.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const API_URL = 'https://www.freetogame.com/api/games?category=shooter';
const counter = document.querySelector('.counter');

const count = () => {
  fetch(API_URL)
    .then((res) => res.json())
    .then((data) => {
      for (let i = 0; i < data.length; i += 1) {
        counter.textContent = data.length;
      }
    });
};
count();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (count);


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

const mobileMenu = () => {
  const menu = document.querySelector('#menu-btn');
  menu.addEventListener('click', () => {
    navbar.classList.toggle('active');
  });
};
window.onscroll = () => {
  navbar.classList.remove('active');
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mobileMenu);


/***/ }),

/***/ "./src/modules/popUp.js":
/*!******************************!*\
  !*** ./src/modules/popUp.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Game)
/* harmony export */ });
class Game {
  // Initialization
  constructor() {
    this.API_URL = 'https://www.freetogame.com/api/games?category=shooter';
    this.gameContainer = document.querySelector('.content');
  }

  getGame = async () => {
    const response = await fetch(this.API_URL);
    const data = await response.json().catch((error) => new Error(error));
    this.popupGame(data);
  };

  popupGame = (data) => {
    const seeGame = document.querySelectorAll('.comment-btn');
    seeGame.forEach((item, index) => {
      item.addEventListener('click', () => {
        const modalPopup = document.createElement('section');
        modalPopup.classList.add = 'popup-section';
        modalPopup.innerHTML = `
        <div class="popup">
      <button id="close-btn">
          <i class="fa-solid fa-xmark"></i>
        </button>
        <div class="container">
          <div class="display">
            <div class="description">
              <img
                src="${data[index].thumbnail}"
                alt="thumbnail"
              />
              <h3 class="game-title">${data[index].title}</h3>
            </div>
            <div class="display-details">
              <h3>game details:</h3>
              <ul>
                <li>
                  ${data[index].short_description}
                </li>
                <li><strong>date of release:</strong> ${data[index].release_date}</li>
                <li><strong>genre:</strong> ${data[index].genre}</li>
                <li><strong>platform:</strong>${data[index].platform}</li>
              </ul>
            </div>
          </div>
          <div class="comment-section">
            <div class="comment-show comments-${data[index].id}">
              <h3 class="counter">
                Comments(<span class="total-comments">0</span>)
              </h3>
              <ul class="comments ${data[index].id}"  id="${data[index].id}">
               
              </ul>
            </div>
            <div class="comment">
              <div class="add-comment">
                <h3>Add Comment</h3>
              </div>
              <form class="form" data-get-comment="${data[index].id}">
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Your name"
                />
                <textarea
                  name="description"
                  id="description"
                  cols="30"
                  rows="10"
                  placeholder="Your insight"
                ></textarea>
                <button id="${data[index].id}" type="submit" class="submit-btn">
                  Comment
                </button>
              </form>
            </div>
          </div>
          </div>
          </div>
       `;
        this.gameContainer.appendChild(modalPopup);
        this.closeGame(modalPopup);
      });
    });
  };

  closeGame = (modalPopup) => {
    const closeBtn = document.querySelectorAll('#close-btn');
    closeBtn.forEach((item) => {
      item.addEventListener('click', () => {
        modalPopup.remove();
      });
    });
  };
}


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
const swiperMe = () => {
  // eslint-disable-next-line no-undef, no-unused-vars
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
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (swiperMe);


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksTUFBTSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLE1BQU0sTUFBTSxZQUFZLE9BQU8sTUFBTSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxhQUFhLE1BQU0sWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUs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RCxlQUFlO0FBQ3BFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLGVBQWU7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQy9GQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIOztBQUVBLGlFQUFlLFFBQVEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYi1wYWNrYWdlLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly93ZWItcGFja2FnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2ViLXBhY2thZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93ZWItcGFja2FnZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly93ZWItcGFja2FnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWItcGFja2FnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2ViLXBhY2thZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2ViLXBhY2thZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2ViLXBhY2thZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWItcGFja2FnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dlYi1wYWNrYWdlLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3dlYi1wYWNrYWdlLy4vc3JjL21vZHVsZXMvYWRkQ29tbWVudC5qcyIsIndlYnBhY2s6Ly93ZWItcGFja2FnZS8uL3NyYy9tb2R1bGVzL2FkZExpa2UuanMiLCJ3ZWJwYWNrOi8vd2ViLXBhY2thZ2UvLi9zcmMvbW9kdWxlcy9mZXRjaERhdGEuanMiLCJ3ZWJwYWNrOi8vd2ViLXBhY2thZ2UvLi9zcmMvbW9kdWxlcy9pdGVtQ291bnRlci5qcyIsIndlYnBhY2s6Ly93ZWItcGFja2FnZS8uL3NyYy9tb2R1bGVzL21vYmlsZS5qcyIsIndlYnBhY2s6Ly93ZWItcGFja2FnZS8uL3NyYy9tb2R1bGVzL3BvcFVwLmpzIiwid2VicGFjazovL3dlYi1wYWNrYWdlLy4vc3JjL21vZHVsZXMvc2xpZGVzaG93LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UG9wcGluczp3Z2h0QDEwMDszMDA7NDAwOzUwMDs2MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcclxcbiAgLS1tYWluLWNvbG9yOiAjZWY3ODE5O1xcclxcbiAgLS1ibGFjazogIzE0MTIxNTtcXHJcXG59XFxyXFxuXFxyXFxuKiB7XFxyXFxuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBsaW5lYXI7XFxyXFxufVxcclxcblxcclxcbmh0bWwge1xcclxcbiAgZm9udC1zaXplOiA2Mi41JTtcXHJcXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcXHJcXG4gIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xcclxcbiAgc2Nyb2xsLXBhZGRpbmctdG9wOiA3cmVtO1xcclxcbn1cXHJcXG5cXHJcXG5odG1sOjotd2Via2l0LXNjcm9sbGJhciB7XFxyXFxuICB3aWR0aDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuaHRtbDo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xcclxcbiAgYmFja2dyb3VuZDogdmFyKC0tYmxhY2spO1xcclxcbn1cXHJcXG5cXHJcXG5odG1sOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxyXFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1tYWluLWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBvdmVyZmxvdy14OiBoaWRkZW47XFxyXFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1ibGFjayk7XFxyXFxufVxcclxcblxcclxcbnNlY3Rpb24ge1xcclxcbiAgcGFkZGluZzogMnJlbSA2cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyIHtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICByaWdodDogMDtcXHJcXG4gIHotaW5kZXg6IDEwMDA7XFxyXFxuICBwYWRkaW5nOiAycmVtIDklO1xcclxcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjgpO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXIgLmxvZ28ge1xcclxcbiAgZm9udC1zaXplOiAyLjVyZW07XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXIgLmxvZ28gaSB7XFxyXFxuICBwYWRkaW5nLXJpZ2h0OiAwLjVyZW07XFxyXFxuICBjb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XFxyXFxuICBhbmltYXRpb246IGZsb2F0aW5nIDJzIGxpbmVhciBpbmZpbml0ZTtcXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyBmbG9hdGluZyB7XFxyXFxuICAwJSB7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIDEwMCUge1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XFxyXFxuICB9XFxyXFxuXFxyXFxuICA1MCUge1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFyZW0pO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyIC5uYXZiYXIgYSB7XFxyXFxuICBmb250LXNpemU6IDEuN3JlbTtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgbWFyZ2luOiAwIDFyZW07XFxyXFxufVxcclxcblxcclxcbi5mb290ZXIgLmNyZWRpdCBzcGFuIGEge1xcclxcbiAgY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xcclxcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyIC5uYXZiYXIgYTpob3ZlciB7XFxyXFxuICBjb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbi5tZW51IHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXIgLm1lbnUge1xcclxcbiAgZm9udC1zaXplOiAyLjVyZW07XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAycmVtO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyIC5tZW51OmhvdmVyIHtcXHJcXG4gIGNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuLmhvbWUge1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuXFxyXFxuLmhvbWUgLmhvbWUtc2xpZGVyIC5ib3gge1xcclxcbiAgbWluLWhlaWdodDogMTAwdmg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgcGFkZGluZzogMnJlbTtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcXHJcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciAhaW1wb3J0YW50O1xcclxcbn1cXHJcXG5cXHJcXG4uaG9tZSAuaG9tZS1zbGlkZXIgLnN3aXBlci1idXR0b24tbmV4dCB7XFxyXFxuICByaWdodDogNHJlbTtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgb3BhY2l0eTogMDtcXHJcXG59XFxyXFxuXFxyXFxuLmhvbWUgLmhvbWUtc2xpZGVyIC5zd2lwZXItYnV0dG9uLXByZXYge1xcclxcbiAgbGVmdDogNHJlbTtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgb3BhY2l0eTogMDtcXHJcXG59XFxyXFxuXFxyXFxuLmhvbWUgLmhvbWUtc2xpZGVyIC5zd2lwZXItYnV0dG9uLW5leHQ6aG92ZXIsXFxyXFxuLmhvbWUgLmhvbWUtc2xpZGVyIC5zd2lwZXItYnV0dG9uLXByZXY6aG92ZXIge1xcclxcbiAgY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4uaG9tZSAuaG9tZS1zbGlkZXI6aG92ZXIgLnN3aXBlci1idXR0b24tbmV4dCxcXHJcXG4uaG9tZSAuaG9tZS1zbGlkZXI6aG92ZXIgLnN3aXBlci1idXR0b24tcHJldiB7XFxyXFxuICBvcGFjaXR5OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZC1zZWN0aW9uIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xcclxcbiAgZ3JpZC1nYXA6IDFyZW07XFxyXFxuICBtYXJnaW4tdG9wOiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZC1zZWN0aW9uIC5jYXJkIHtcXHJcXG4gIGJhY2tncm91bmQ6ICMyMjI7XFxyXFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxyXFxuICBwYWRkaW5nOiAycmVtO1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxufVxcclxcblxcclxcbi5jYXJkLXNlY3Rpb24gLmNvbnRlbnQgLm5hbWUtZGl2IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmQtc2VjdGlvbiAuY29udGVudCAubmFtZS1kaXYgaDIge1xcclxcbiAgZm9udC1zaXplOiAycmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gIGNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmQtc2VjdGlvbiAuY29udGVudCAubGlrZXMge1xcclxcbiAgZm9udC1zaXplOiAycmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXHJcXG4gIGNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmQtc2VjdGlvbiAuZGVzY3JpcHRpb24ge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgcGFkZGluZzogMXJlbSAxLjVyZW07XFxyXFxuICBmb250LXNpemU6IDEuN3JlbTtcXHJcXG4gIG1hcmdpbjogMCBhdXRvO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmQtc2VjdGlvbiAuY2FyZCAuY29tbWVudC1idG4ge1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG4gIGZvbnQtc2l6ZTogMS43cmVtO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxyXFxuICBib3gtc2hhZG93OiAwIDEwcHggMTVweCByZ2IoNTUgMTQ4IDE0Myk7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBtYXJnaW46IDAgYXV0bztcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5jYXJkLXNlY3Rpb24gLmNhcmQgLmNvbW1lbnQtYnRuOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQ6IHZhcigtLW1haW4tY29sb3IpO1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxufVxcclxcblxcclxcbi5mb290ZXIgLmNyZWRpdCB7XFxyXFxuICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgcGFkZGluZy10b3A6IDJyZW07XFxyXFxuICBtYXJnaW4tdG9wOiAycmVtO1xcclxcbiAgYm9yZGVyLXRvcDogMC4xcmVtIHNvbGlkICNmZmYzO1xcclxcbiAgZm9udC1zaXplOiAycmVtO1xcclxcbiAgY29sb3I6ICNhYWE7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi8qIHBvcHVwIHNlY3Rpb24gKi9cXHJcXG5cXHJcXG4ucG9wdXAtc2VjdGlvbiB7XFxyXFxuICBiYWNrZ3JvdW5kOiAjMjIyO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXAge1xcclxcbiAgd2lkdGg6IDYwdnc7XFxyXFxuICBoZWlnaHQ6IDkwdmg7XFxyXFxuICBwYWRkaW5nOiAzMHB4IDUwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmUzMTMwO1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgdG9wOiA1MCU7XFxyXFxuICBsZWZ0OiA1MCU7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGdhcDogMjBweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxuICBvdmVyZmxvdy15OiBzY3JvbGw7XFxyXFxuICBjb2xvcjogI2QyZDFkMztcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwICNjbG9zZS1idG4ge1xcclxcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXHJcXG4gIGZvbnQtc2l6ZTogNHJlbTtcXHJcXG4gIGNvbG9yOiAjZDJkMWQzO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXAgLmRpc3BsYXkge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXAgLmRpc3BsYXkgLmRlc2NyaXB0aW9uIHtcXHJcXG4gIHdpZHRoOiA5MCU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cCAuZGlzcGxheSAuZGVzY3JpcHRpb24gaW1nIHtcXHJcXG4gIHdpZHRoOiA5MCU7XFxyXFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXAgLmRpc3BsYXkgLmRlc2NyaXB0aW9uIC5nYW1lLXRpdGxlIHtcXHJcXG4gIGZvbnQtc2l6ZTogMi44cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXAgLmRpc3BsYXkgLmRpc3BsYXktZGV0YWlscyB7XFxyXFxuICB3aWR0aDogODAlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXAgLmRpc3BsYXkgLmRpc3BsYXktZGV0YWlscyBoMyB7XFxyXFxuICBmb250LXNpemU6IDJyZW07XFxyXFxufVxcclxcblxcclxcbi5wb3B1cCAuZGlzcGxheSAuZGlzcGxheS1kZXRhaWxzIHVsID4gbGkge1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgcGFkZGluZy1ib3R0b206IDFyZW07XFxyXFxuICBsaW5lLWhlaWdodDogMS4yO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXAgLmNvbW1lbnQtc2VjdGlvbiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cCAuY29tbWVudC1zZWN0aW9uIC5jb21tZW50LXNob3cge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXAgLmNvbW1lbnQtc2VjdGlvbiAuY29tbWVudC1zaG93IGgzIHtcXHJcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxyXFxuICBjb2xvcjogI2QyZDFkMztcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwIC5jb21tZW50LXNlY3Rpb24gLmNvbW1lbnQtc2hvdyB1bCB7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcclxcbiAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxufVxcclxcblxcclxcbi5wb3B1cCAuY29tbWVudC1zZWN0aW9uIC5jb21tZW50IHtcXHJcXG4gIHdpZHRoOiA3MCU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cCAuY29tbWVudC1zZWN0aW9uIC5jb21tZW50IGgzIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgbWFyZ2luLXRvcDogNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwIC5jb21tZW50LXNlY3Rpb24gLmNvbW1lbnQgZm9ybSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGdhcDogMTBweDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXAgLmNvbW1lbnQtc2VjdGlvbiAuY29tbWVudCBmb3JtIGlucHV0W3R5cGU9J3RleHQnXSxcXHJcXG4ucG9wdXAgLmNvbW1lbnQtc2VjdGlvbiAuY29tbWVudCBmb3JtIHRleHRhcmVhIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwIC5jb21tZW50LXNlY3Rpb24gLmNvbW1lbnQgZm9ybSB0ZXh0YXJlYSB7XFxyXFxuICBoZWlnaHQ6IDE1cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXAgLmNvbW1lbnQtc2VjdGlvbiAuY29tbWVudCBmb3JtIC5zdWJtaXQtYnRuIHtcXHJcXG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxyXFxuICBmb250LXNpemU6IDEuM3JlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBtZWRpYSBxdWVyaWVzICAqL1xcclxcblxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiA5OTFweCkge1xcclxcbiAgaHRtbCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogNTUlO1xcclxcbiAgfVxcclxcblxcclxcbiAgc2VjdGlvbiB7XFxyXFxuICAgIHBhZGRpbmc6IDJyZW07XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xcclxcbiAgLm1lbnUge1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuaGVhZGVyIC5uYXZiYXIge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDogOTklO1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgICByaWdodDogMDtcXHJcXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjgpO1xcclxcbiAgICBjbGlwLXBhdGg6IHBvbHlnb24oMCAwLCAxMDAlIDAsIDEwMCUgMCwgMCAwKTtcXHJcXG4gICAgbWluLWhlaWdodDogNzB2aDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5oZWFkZXIgLm5hdmJhci5hY3RpdmUge1xcclxcbiAgICBjbGlwLXBhdGg6IHBvbHlnb24oMCAwLCAxMDAlIDAsIDEwMCUgMTAwJSwgMCUgMTAwJSk7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuaGVhZGVyIC5uYXZiYXIgYSB7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICBtYXJnaW46IDJyZW07XFxyXFxuICAgIHBhZGRpbmc6IDFyZW07XFxyXFxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY2FyZC1zZWN0aW9uIHtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnI7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAucG9wdXAge1xcclxcbiAgICB3aWR0aDogOTB2dztcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDQ1MHB4KSB7XFxyXFxuICBodG1sIHtcXHJcXG4gICAgZm9udC1zaXplOiA1MCU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuaG9tZSAuaG9tZS1zbGlkZXIgLnN3aXBlci1idXR0b24tbmV4dCxcXHJcXG4gIC5ob21lIC5ob21lLXNsaWRlciAuc3dpcGVyLWJ1dHRvbi1wcmV2IHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jYXJkLXNlY3Rpb24ge1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jYXJkLXNlY3Rpb24gLmNhcmQge1xcclxcbiAgICBwYWRkaW5nOiAwLjNyZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY2FyZC1zZWN0aW9uIC5jYXJkIC5jb21tZW50LWJ0biB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGtDQUFrQztFQUNsQyxTQUFTO0VBQ1QsVUFBVTtFQUNWLHNCQUFzQjtFQUN0QixhQUFhO0VBQ2IsWUFBWTtFQUNaLHFCQUFxQjtFQUNyQiwwQkFBMEI7RUFDMUIsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQix1QkFBdUI7RUFDdkIsd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0Usd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtF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QkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxtREFBbUQ7RUFDckQ7O0VBRUE7SUFDRSxjQUFjO0lBQ2QsWUFBWTtJQUNaLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UsMEJBQTBCO0VBQzVCOztFQUVBO0lBQ0UsV0FBVztFQUNiO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLGNBQWM7RUFDaEI7O0VBRUE7O0lBRUUsYUFBYTtFQUNmOztFQUVBO0lBQ0UsMEJBQTBCO0VBQzVCOztFQUVBO0lBQ0UsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGlCQUFpQjtJQUNqQixtQkFBbUI7RUFDckI7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Qb3BwaW5zOndnaHRAMTAwOzMwMDs0MDA7NTAwOzYwMCZkaXNwbGF5PXN3YXAnKTtcXHJcXG5cXHJcXG46cm9vdCB7XFxyXFxuICAtLW1haW4tY29sb3I6ICNlZjc4MTk7XFxyXFxuICAtLWJsYWNrOiAjMTQxMjE1O1xcclxcbn1cXHJcXG5cXHJcXG4qIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcXHJcXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGxpbmVhcjtcXHJcXG59XFxyXFxuXFxyXFxuaHRtbCB7XFxyXFxuICBmb250LXNpemU6IDYyLjUlO1xcclxcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xcclxcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XFxyXFxuICBzY3JvbGwtcGFkZGluZy10b3A6IDdyZW07XFxyXFxufVxcclxcblxcclxcbmh0bWw6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXHJcXG4gIHdpZHRoOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG5odG1sOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XFxyXFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1ibGFjayk7XFxyXFxufVxcclxcblxcclxcbmh0bWw6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXHJcXG4gIGJhY2tncm91bmQ6IHZhcigtLW1haW4tY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcXHJcXG4gIGJhY2tncm91bmQ6IHZhcigtLWJsYWNrKTtcXHJcXG59XFxyXFxuXFxyXFxuc2VjdGlvbiB7XFxyXFxuICBwYWRkaW5nOiAycmVtIDZyZW07XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXIge1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIHJpZ2h0OiAwO1xcclxcbiAgei1pbmRleDogMTAwMDtcXHJcXG4gIHBhZGRpbmc6IDJyZW0gOSU7XFxyXFxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuOCk7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlciAubG9nbyB7XFxyXFxuICBmb250LXNpemU6IDIuNXJlbTtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlciAubG9nbyBpIHtcXHJcXG4gIHBhZGRpbmctcmlnaHQ6IDAuNXJlbTtcXHJcXG4gIGNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcXHJcXG4gIGFuaW1hdGlvbjogZmxvYXRpbmcgMnMgbGluZWFyIGluZmluaXRlO1xcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIGZsb2F0aW5nIHtcXHJcXG4gIDAlIHtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xcclxcbiAgfVxcclxcblxcclxcbiAgMTAwJSB7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIDUwJSB7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXJlbSk7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXIgLm5hdmJhciBhIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS43cmVtO1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxuICBtYXJnaW46IDAgMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmZvb3RlciAuY3JlZGl0IHNwYW4gYSB7XFxyXFxuICBjb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XFxyXFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXIgLm5hdmJhciBhOmhvdmVyIHtcXHJcXG4gIGNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlciAubWVudSB7XFxyXFxuICBmb250LXNpemU6IDIuNXJlbTtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgbWFyZ2luLWxlZnQ6IDJyZW07XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXIgLm1lbnU6aG92ZXIge1xcclxcbiAgY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4uaG9tZSB7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4uaG9tZSAuaG9tZS1zbGlkZXIgLmJveCB7XFxyXFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nOiAycmVtO1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xcclxcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyICFpbXBvcnRhbnQ7XFxyXFxufVxcclxcblxcclxcbi5ob21lIC5ob21lLXNsaWRlciAuc3dpcGVyLWJ1dHRvbi1uZXh0IHtcXHJcXG4gIHJpZ2h0OiA0cmVtO1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxuICBvcGFjaXR5OiAwO1xcclxcbn1cXHJcXG5cXHJcXG4uaG9tZSAuaG9tZS1zbGlkZXIgLnN3aXBlci1idXR0b24tcHJldiB7XFxyXFxuICBsZWZ0OiA0cmVtO1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxuICBvcGFjaXR5OiAwO1xcclxcbn1cXHJcXG5cXHJcXG4uaG9tZSAuaG9tZS1zbGlkZXIgLnN3aXBlci1idXR0b24tbmV4dDpob3ZlcixcXHJcXG4uaG9tZSAuaG9tZS1zbGlkZXIgLnN3aXBlci1idXR0b24tcHJldjpob3ZlciB7XFxyXFxuICBjb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbi5ob21lIC5ob21lLXNsaWRlcjpob3ZlciAuc3dpcGVyLWJ1dHRvbi1uZXh0LFxcclxcbi5ob21lIC5ob21lLXNsaWRlcjpob3ZlciAuc3dpcGVyLWJ1dHRvbi1wcmV2IHtcXHJcXG4gIG9wYWNpdHk6IDE7XFxyXFxufVxcclxcblxcclxcbi5jYXJkLXNlY3Rpb24ge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XFxyXFxuICBncmlkLWdhcDogMXJlbTtcXHJcXG4gIG1hcmdpbi10b3A6IDJyZW07XFxyXFxufVxcclxcblxcclxcbi5jYXJkLXNlY3Rpb24gLmNhcmQge1xcclxcbiAgYmFja2dyb3VuZDogIzIyMjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXHJcXG4gIHBhZGRpbmc6IDJyZW07XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmQtc2VjdGlvbiAuY29udGVudCAubmFtZS1kaXYge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZC1zZWN0aW9uIC5jb250ZW50IC5uYW1lLWRpdiBoMiB7XFxyXFxuICBmb250LXNpemU6IDJyZW07XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZC1zZWN0aW9uIC5jb250ZW50IC5saWtlcyB7XFxyXFxuICBmb250LXNpemU6IDJyZW07XFxyXFxuICBmb250LXdlaWdodDogOTAwO1xcclxcbiAgY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZC1zZWN0aW9uIC5kZXNjcmlwdGlvbiB7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nOiAxcmVtIDEuNXJlbTtcXHJcXG4gIGZvbnQtc2l6ZTogMS43cmVtO1xcclxcbiAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICBtYXJnaW4tYm90dG9tOiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZC1zZWN0aW9uIC5jYXJkIC5jb21tZW50LWJ0biB7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgZm9udC1zaXplOiAxLjdyZW07XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXHJcXG4gIGJveC1zaGFkb3c6IDAgMTBweCAxNXB4IHJnYig1NSAxNDggMTQzKTtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIG1hcmdpbjogMCBhdXRvO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmQtc2VjdGlvbiAuY2FyZCAuY29tbWVudC1idG46aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZDogdmFyKC0tbWFpbi1jb2xvcik7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG59XFxyXFxuXFxyXFxuLmZvb3RlciAuY3JlZGl0IHtcXHJcXG4gIHBhZGRpbmc6IDFyZW07XFxyXFxuICBwYWRkaW5nLXRvcDogMnJlbTtcXHJcXG4gIG1hcmdpbi10b3A6IDJyZW07XFxyXFxuICBib3JkZXItdG9wOiAwLjFyZW0gc29saWQgI2ZmZjM7XFxyXFxuICBmb250LXNpemU6IDJyZW07XFxyXFxuICBjb2xvcjogI2FhYTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLyogcG9wdXAgc2VjdGlvbiAqL1xcclxcblxcclxcbi5wb3B1cC1zZWN0aW9uIHtcXHJcXG4gIGJhY2tncm91bmQ6ICMyMjI7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cCB7XFxyXFxuICB3aWR0aDogNjB2dztcXHJcXG4gIGhlaWdodDogOTB2aDtcXHJcXG4gIHBhZGRpbmc6IDMwcHggNTBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyZTMxMzA7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICB0b3A6IDUwJTtcXHJcXG4gIGxlZnQ6IDUwJTtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgZ2FwOiAyMHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXHJcXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcXHJcXG4gIGNvbG9yOiAjZDJkMWQzO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXAgI2Nsb3NlLWJ0biB7XFxyXFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcclxcbiAgZm9udC1zaXplOiA0cmVtO1xcclxcbiAgY29sb3I6ICNkMmQxZDM7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cCAuZGlzcGxheSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cCAuZGlzcGxheSAuZGVzY3JpcHRpb24ge1xcclxcbiAgd2lkdGg6IDkwJTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwIC5kaXNwbGF5IC5kZXNjcmlwdGlvbiBpbWcge1xcclxcbiAgd2lkdGg6IDkwJTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cCAuZGlzcGxheSAuZGVzY3JpcHRpb24gLmdhbWUtdGl0bGUge1xcclxcbiAgZm9udC1zaXplOiAyLjhyZW07XFxyXFxufVxcclxcblxcclxcbi5wb3B1cCAuZGlzcGxheSAuZGlzcGxheS1kZXRhaWxzIHtcXHJcXG4gIHdpZHRoOiA4MCU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cCAuZGlzcGxheSAuZGlzcGxheS1kZXRhaWxzIGgzIHtcXHJcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwIC5kaXNwbGF5IC5kaXNwbGF5LWRldGFpbHMgdWwgPiBsaSB7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxLjI7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cCAuY29tbWVudC1zZWN0aW9uIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwIC5jb21tZW50LXNlY3Rpb24gLmNvbW1lbnQtc2hvdyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cCAuY29tbWVudC1zZWN0aW9uIC5jb21tZW50LXNob3cgaDMge1xcclxcbiAgZm9udC1zaXplOiAycmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXHJcXG4gIGNvbG9yOiAjZDJkMWQzO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXAgLmNvbW1lbnQtc2VjdGlvbiAuY29tbWVudC1zaG93IHVsIHtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxyXFxuICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwIC5jb21tZW50LXNlY3Rpb24gLmNvbW1lbnQge1xcclxcbiAgd2lkdGg6IDcwJTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwIC5jb21tZW50LXNlY3Rpb24gLmNvbW1lbnQgaDMge1xcclxcbiAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICBtYXJnaW4tdG9wOiA1cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXAgLmNvbW1lbnQtc2VjdGlvbiAuY29tbWVudCBmb3JtIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZ2FwOiAxMHB4O1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cCAuY29tbWVudC1zZWN0aW9uIC5jb21tZW50IGZvcm0gaW5wdXRbdHlwZT0ndGV4dCddLFxcclxcbi5wb3B1cCAuY29tbWVudC1zZWN0aW9uIC5jb21tZW50IGZvcm0gdGV4dGFyZWEge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXAgLmNvbW1lbnQtc2VjdGlvbiAuY29tbWVudCBmb3JtIHRleHRhcmVhIHtcXHJcXG4gIGhlaWdodDogMTVyZW07XFxyXFxufVxcclxcblxcclxcbi5wb3B1cCAuY29tbWVudC1zZWN0aW9uIC5jb21tZW50IGZvcm0gLnN1Ym1pdC1idG4ge1xcclxcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXHJcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi8qIG1lZGlhIHF1ZXJpZXMgICovXFxyXFxuXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MXB4KSB7XFxyXFxuICBodG1sIHtcXHJcXG4gICAgZm9udC1zaXplOiA1NSU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICBzZWN0aW9uIHtcXHJcXG4gICAgcGFkZGluZzogMnJlbTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XFxyXFxuICAubWVudSB7XFxyXFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5oZWFkZXIgLm5hdmJhciB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdG9wOiA5OSU7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICAgIHJpZ2h0OiAwO1xcclxcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuOCk7XFxyXFxuICAgIGNsaXAtcGF0aDogcG9seWdvbigwIDAsIDEwMCUgMCwgMTAwJSAwLCAwIDApO1xcclxcbiAgICBtaW4taGVpZ2h0OiA3MHZoO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmhlYWRlciAubmF2YmFyLmFjdGl2ZSB7XFxyXFxuICAgIGNsaXAtcGF0aDogcG9seWdvbigwIDAsIDEwMCUgMCwgMTAwJSAxMDAlLCAwJSAxMDAlKTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5oZWFkZXIgLm5hdmJhciBhIHtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIG1hcmdpbjogMnJlbTtcXHJcXG4gICAgcGFkZGluZzogMXJlbTtcXHJcXG4gICAgZm9udC1zaXplOiAyLjVyZW07XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jYXJkLXNlY3Rpb24ge1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmcjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5wb3B1cCB7XFxyXFxuICAgIHdpZHRoOiA5MHZ3O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1heC13aWR0aDogNDUwcHgpIHtcXHJcXG4gIGh0bWwge1xcclxcbiAgICBmb250LXNpemU6IDUwJTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5ob21lIC5ob21lLXNsaWRlciAuc3dpcGVyLWJ1dHRvbi1uZXh0LFxcclxcbiAgLmhvbWUgLmhvbWUtc2xpZGVyIC5zd2lwZXItYnV0dG9uLXByZXYge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmNhcmQtc2VjdGlvbiB7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmNhcmQtc2VjdGlvbiAuY2FyZCB7XFxyXFxuICAgIHBhZGRpbmc6IDAuM3JlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jYXJkLXNlY3Rpb24gLmNhcmQgLmNvbW1lbnQtYnRuIHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XFxyXFxuICB9XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgJy4vYXNzZXRzL2ltYWdlcy9iYXRtYW4ucG5nJztcbmltcG9ydCAnLi9hc3NldHMvaW1hZ2VzL2ltYWdlMS5wbmcnO1xuaW1wb3J0ICcuL2Fzc2V0cy9pbWFnZXMvaW1hZ2UyLnBuZyc7XG5pbXBvcnQgJy4vYXNzZXRzL2ltYWdlcy9pbWFnZTMucG5nJztcbmltcG9ydCAnLi9hc3NldHMvaW1hZ2VzL2ltYWdlNC5wbmcnO1xuaW1wb3J0ICcuL2Fzc2V0cy9pbWFnZXMvaW1hZ2U1LnBuZyc7XG5pbXBvcnQgJy4vYXNzZXRzL2ltYWdlcy9pbWFnZTYucG5nJztcbmltcG9ydCAnLi9hc3NldHMvaW1hZ2VzL2ltYWdlNy5wbmcnO1xuaW1wb3J0ICcuL2Fzc2V0cy9pbWFnZXMvaW1hZ2U4LnBuZyc7XG5pbXBvcnQgJy4vYXNzZXRzL2ltYWdlcy9pbWFnZTkucG5nJztcbmltcG9ydCAnLi9hc3NldHMvaW1hZ2VzL2ltYWdlMTAucG5nJztcbmltcG9ydCAnLi9hc3NldHMvaW1hZ2VzL2ltYWdlMTEucG5nJztcblxuaW1wb3J0IHN3aXBlck1lIGZyb20gJy4vbW9kdWxlcy9zbGlkZXNob3cuanMnO1xuaW1wb3J0IGZldGNoRGF0YSBmcm9tICcuL21vZHVsZXMvZmV0Y2hEYXRhLmpzJztcbmltcG9ydCBhZGRMaWtlIGZyb20gJy4vbW9kdWxlcy9hZGRMaWtlLmpzJztcbmltcG9ydCBtb2JpbGVNZW51IGZyb20gJy4vbW9kdWxlcy9tb2JpbGUuanMnO1xuaW1wb3J0IGNvdW50IGZyb20gJy4vbW9kdWxlcy9pdGVtQ291bnRlci5qcyc7XG5pbXBvcnQgR2FtZSBmcm9tICcuL21vZHVsZXMvcG9wVXAuanMnO1xuaW1wb3J0IGFkZENvbW1lbnQgZnJvbSAnLi9tb2R1bGVzL2FkZENvbW1lbnQuanMnO1xuXG5mZXRjaERhdGEoKTtcbnN3aXBlck1lKCk7XG5hZGRMaWtlKCk7XG5tb2JpbGVNZW51KCk7XG5jb3VudCgpO1xuYWRkQ29tbWVudCgpO1xuY29uc3QgZ2FtZSA9IG5ldyBHYW1lKCk7XG5nYW1lLmdldEdhbWUoKTtcbiIsImNvbnN0IHVybCA9XG4gICdodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcy9ZOVNUNkVzRVY0MWdjQ3ZsYk9mWi9jb21tZW50cyc7XG5jb25zdCBjb21tZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7XG5cbmNvbnN0IGFkZENvbW1lbnQgPSAoKSA9PiB7XG4gIGNvbW1lbnRzLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IHN1Ym1pdHRlZCA9IGUudGFyZ2V0LmNsb3Nlc3QoJy5mb3JtJyk7XG4gICAgY29uc3QgaXRlbSA9IHN1Ym1pdHRlZC5kYXRhc2V0LmdldENvbW1lbnQ7XG4gICAgY29uc3QgdXNlclZhbHVlID0gc3VibWl0dGVkLnF1ZXJ5U2VsZWN0b3IoJyNuYW1lJykudmFsdWU7XG4gICAgY29uc3QgdGV4dEFyZWEgPSBzdWJtaXR0ZWQucXVlcnlTZWxlY3RvcignI2Rlc2NyaXB0aW9uJykudmFsdWU7XG4gICAgZmV0Y2godXJsLCB7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgQWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICBpdGVtX2lkOiBpdGVtLFxuICAgICAgICB1c2VybmFtZTogdXNlclZhbHVlLFxuICAgICAgICBjb21tZW50OiB0ZXh0QXJlYSxcbiAgICAgIH0pLFxuICAgIH0pO1xuICAgIGZldGNoKFxuICAgICAgYGh0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzL1k5U1Q2RXNFVjQxZ2NDdmxiT2ZaL2NvbW1lbnRzP2l0ZW1faWQ9JHtpdGVtfWBcbiAgICApXG4gICAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxuICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgIGNvbnN0IGNvbW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbW1lbnRzJyk7XG4gICAgICAgIGNvbnNvbGUubG9nKGNvbW1lbnRzKTtcbiAgICAgICAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICBsaS5pbm5lckhUTUwgPSBgXG4gICAgICAgICAgPHA+JHtkYXRhWzBdLmNvbW1lbnR9PC9wPlxuICAgICAgICAgIDxwPiR7ZGF0YVswXS51c2VybmFtZX08L3A+XG4gICAgICAgIGA7XG4gICAgICAgIGNvbW1lbnRzLmFwcGVuZENoaWxkKGxpKTtcbiAgICAgIH0pO1xuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGFkZENvbW1lbnQ7XG4iLCJjb25zdCBsaWtlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJkLXNlY3Rpb24nKTtcbmNvbnN0IHVybCA9ICdodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcy9ZOVNUNkVzRVY0MWdjQ3ZsYk9mWi9saWtlcyc7XG5cbmNvbnN0IGFkZExpa2UgPSAoKSA9PiB7XG4gIGxpa2VzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBjb25zdCBjbGlja2VkID0gZS50YXJnZXQuY2xvc2VzdCgnLmFkZC1saWtlJyk7XG4gICAgaWYgKCFjbGlja2VkKSByZXR1cm47XG4gICAgY29uc3QgaXRlbSA9IGNsaWNrZWQuZ2V0QXR0cmlidXRlKCdpZCcpO1xuICAgIGZldGNoKHVybCwge1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgIEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgfSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgaXRlbV9pZDogaXRlbSxcbiAgICAgIH0pLFxuICAgIH0pO1xuICAgIGZldGNoKHVybClcbiAgICAgIC50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXG4gICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICBjb25zdCBsaWtlc0luZm8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAubGlrZXMtJHtpdGVtfWApO1xuICAgICAgICBsaWtlc0luZm8ucXVlcnlTZWxlY3Rvcignc3BhbicpLnRleHRDb250ZW50ID0gZGF0YS5maWx0ZXIoXG4gICAgICAgICAgKGl0ZW1zKSA9PiBpdGVtcy5pdGVtX2lkID09PSBpdGVtLFxuICAgICAgICApWzBdLmxpa2VzO1xuICAgICAgfSk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgYWRkTGlrZTtcbiIsImNvbnN0IEFQSV9VUkwgPSAnaHR0cHM6Ly93d3cuZnJlZXRvZ2FtZS5jb20vYXBpL2dhbWVzP2NhdGVnb3J5PXNob290ZXInO1xuY29uc3QgY2FyZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FyZC1zZWN0aW9uJyk7XG5cbmNvbnN0IHNob3dEYXRhID0gKGRhdGEpID0+IHtcbiAgY29uc3QgY2FyZENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjYXJkQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NhcmQnKTtcbiAgY2FyZENvbnRhaW5lci5pbm5lckhUTUwgPSBgXG4gICAgICAgIDxpbWdcbiAgICAgICAgICBzcmM9XCIke2RhdGEudGh1bWJuYWlsfVwiXG4gICAgICAgICAgY2xhc3M9XCJjYXJkLWltYWdlXCJcbiAgICAgICAgLz5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwibmFtZS1kaXZcIj5cbiAgICAgICAgICAgIDxoMj4ke2RhdGEudGl0bGV9PC9oMj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsaWtlcyBsaWtlcy0ke2RhdGEuaWR9XCI+XG4gICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEtc29saWQgZmEtaGVhcnQgYWRkLWxpa2VcIiBpZD1cIiR7ZGF0YS5pZH1cIj48L2k+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibGlrZXMtaW5mbyAke2RhdGEuaWR9XCIgaWQ9XCIke2RhdGEuaWR9XCI+NDwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxwIGNsYXNzPVwiZGVzY3JpcHRpb25cIj5cbiAgICAgICAgICAgJHtkYXRhLnNob3J0X2Rlc2NyaXB0aW9ufVxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8YnV0dG9uIGlkPVwiJHtkYXRhLmlkfVwiIGNsYXNzPVwiY29tbWVudC1idG5cIj5Db21tZW50czwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICBgO1xuICBjYXJkcy5hcHBlbmRDaGlsZChjYXJkQ29udGFpbmVyKTtcbiAgZmV0Y2goXG4gICAgJ2h0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzL1k5U1Q2RXNFVjQxZ2NDdmxiT2ZaL2xpa2VzJyxcbiAgKVxuICAgIC50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXG4gICAgLnRoZW4oKGdldERhdGEpID0+IHtcbiAgICAgIGNvbnN0IGxpa2VzRmlsdGVyID0gZ2V0RGF0YS5maWx0ZXIoXG4gICAgICAgIChpdGVtcykgPT4gaXRlbXMuaXRlbV9pZCA9PT0gYCR7ZGF0YS5pZH1gLFxuICAgICAgKVswXS5saWtlcztcbiAgICAgIGlmICghbGlrZXNGaWx0ZXIpIHJldHVybjtcbiAgICAgIGNvbnN0IGxpa2VzSW5mbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5saWtlcy0ke2RhdGEuaWR9YCk7XG4gICAgICBsaWtlc0luZm8ucXVlcnlTZWxlY3Rvcignc3BhbicpLnRleHRDb250ZW50ID0gbGlrZXNGaWx0ZXI7XG4gICAgfSk7XG59O1xuXG5jb25zdCBmZXRjaERhdGEgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goQVBJX1VSTCk7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgMTU7IGkgKz0gMSkge1xuICAgIHNob3dEYXRhKGRhdGFbaV0pO1xuICB9XG59O1xuXG5mZXRjaERhdGEoKTtcblxuZXhwb3J0IGRlZmF1bHQgZmV0Y2hEYXRhO1xuIiwiY29uc3QgQVBJX1VSTCA9ICdodHRwczovL3d3dy5mcmVldG9nYW1lLmNvbS9hcGkvZ2FtZXM/Y2F0ZWdvcnk9c2hvb3Rlcic7XG5jb25zdCBjb3VudGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvdW50ZXInKTtcblxuY29uc3QgY291bnQgPSAoKSA9PiB7XG4gIGZldGNoKEFQSV9VUkwpXG4gICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcbiAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGNvdW50ZXIudGV4dENvbnRlbnQgPSBkYXRhLmxlbmd0aDtcbiAgICAgIH1cbiAgICB9KTtcbn07XG5jb3VudCgpO1xuZXhwb3J0IGRlZmF1bHQgY291bnQ7XG4iLCJjb25zdCBuYXZiYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2YmFyJyk7XG5cbmNvbnN0IG1vYmlsZU1lbnUgPSAoKSA9PiB7XG4gIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWVudS1idG4nKTtcbiAgbWVudS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBuYXZiYXIuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XG4gIH0pO1xufTtcbndpbmRvdy5vbnNjcm9sbCA9ICgpID0+IHtcbiAgbmF2YmFyLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgbW9iaWxlTWVudTtcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWUge1xuICAvLyBJbml0aWFsaXphdGlvblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLkFQSV9VUkwgPSAnaHR0cHM6Ly93d3cuZnJlZXRvZ2FtZS5jb20vYXBpL2dhbWVzP2NhdGVnb3J5PXNob290ZXInO1xuICAgIHRoaXMuZ2FtZUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7XG4gIH1cblxuICBnZXRHYW1lID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godGhpcy5BUElfVVJMKTtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpLmNhdGNoKChlcnJvcikgPT4gbmV3IEVycm9yKGVycm9yKSk7XG4gICAgdGhpcy5wb3B1cEdhbWUoZGF0YSk7XG4gIH07XG5cbiAgcG9wdXBHYW1lID0gKGRhdGEpID0+IHtcbiAgICBjb25zdCBzZWVHYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNvbW1lbnQtYnRuJyk7XG4gICAgc2VlR2FtZS5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29uc3QgbW9kYWxQb3B1cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbiAgICAgICAgbW9kYWxQb3B1cC5jbGFzc0xpc3QuYWRkID0gJ3BvcHVwLXNlY3Rpb24nO1xuICAgICAgICBtb2RhbFBvcHVwLmlubmVySFRNTCA9IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cInBvcHVwXCI+XG4gICAgICA8YnV0dG9uIGlkPVwiY2xvc2UtYnRuXCI+XG4gICAgICAgICAgPGkgY2xhc3M9XCJmYS1zb2xpZCBmYS14bWFya1wiPjwvaT5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGlzcGxheVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRlc2NyaXB0aW9uXCI+XG4gICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICBzcmM9XCIke2RhdGFbaW5kZXhdLnRodW1ibmFpbH1cIlxuICAgICAgICAgICAgICAgIGFsdD1cInRodW1ibmFpbFwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxoMyBjbGFzcz1cImdhbWUtdGl0bGVcIj4ke2RhdGFbaW5kZXhdLnRpdGxlfTwvaDM+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkaXNwbGF5LWRldGFpbHNcIj5cbiAgICAgICAgICAgICAgPGgzPmdhbWUgZGV0YWlsczo8L2gzPlxuICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgJHtkYXRhW2luZGV4XS5zaG9ydF9kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDxsaT48c3Ryb25nPmRhdGUgb2YgcmVsZWFzZTo8L3N0cm9uZz4gJHtkYXRhW2luZGV4XS5yZWxlYXNlX2RhdGV9PC9saT5cbiAgICAgICAgICAgICAgICA8bGk+PHN0cm9uZz5nZW5yZTo8L3N0cm9uZz4gJHtkYXRhW2luZGV4XS5nZW5yZX08L2xpPlxuICAgICAgICAgICAgICAgIDxsaT48c3Ryb25nPnBsYXRmb3JtOjwvc3Ryb25nPiR7ZGF0YVtpbmRleF0ucGxhdGZvcm19PC9saT5cbiAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb21tZW50LXNlY3Rpb25cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb21tZW50LXNob3cgY29tbWVudHMtJHtkYXRhW2luZGV4XS5pZH1cIj5cbiAgICAgICAgICAgICAgPGgzIGNsYXNzPVwiY291bnRlclwiPlxuICAgICAgICAgICAgICAgIENvbW1lbnRzKDxzcGFuIGNsYXNzPVwidG90YWwtY29tbWVudHNcIj4wPC9zcGFuPilcbiAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICAgPHVsIGNsYXNzPVwiY29tbWVudHMgJHtkYXRhW2luZGV4XS5pZH1cIiAgaWQ9XCIke2RhdGFbaW5kZXhdLmlkfVwiPlxuICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb21tZW50XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhZGQtY29tbWVudFwiPlxuICAgICAgICAgICAgICAgIDxoMz5BZGQgQ29tbWVudDwvaDM+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8Zm9ybSBjbGFzcz1cImZvcm1cIiBkYXRhLWdldC1jb21tZW50PVwiJHtkYXRhW2luZGV4XS5pZH1cIj5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJuYW1lXCJcbiAgICAgICAgICAgICAgICAgIGlkPVwibmFtZVwiXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIllvdXIgbmFtZVwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8dGV4dGFyZWFcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJkZXNjcmlwdGlvblwiXG4gICAgICAgICAgICAgICAgICBpZD1cImRlc2NyaXB0aW9uXCJcbiAgICAgICAgICAgICAgICAgIGNvbHM9XCIzMFwiXG4gICAgICAgICAgICAgICAgICByb3dzPVwiMTBcIlxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJZb3VyIGluc2lnaHRcIlxuICAgICAgICAgICAgICAgID48L3RleHRhcmVhPlxuICAgICAgICAgICAgICAgIDxidXR0b24gaWQ9XCIke2RhdGFbaW5kZXhdLmlkfVwiIHR5cGU9XCJzdWJtaXRcIiBjbGFzcz1cInN1Ym1pdC1idG5cIj5cbiAgICAgICAgICAgICAgICAgIENvbW1lbnRcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgYDtcbiAgICAgICAgdGhpcy5nYW1lQ29udGFpbmVyLmFwcGVuZENoaWxkKG1vZGFsUG9wdXApO1xuICAgICAgICB0aGlzLmNsb3NlR2FtZShtb2RhbFBvcHVwKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuXG4gIGNsb3NlR2FtZSA9IChtb2RhbFBvcHVwKSA9PiB7XG4gICAgY29uc3QgY2xvc2VCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjY2xvc2UtYnRuJyk7XG4gICAgY2xvc2VCdG4uZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgbW9kYWxQb3B1cC5yZW1vdmUoKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xufVxuIiwiY29uc3Qgc3dpcGVyTWUgPSAoKSA9PiB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZiwgbm8tdW51c2VkLXZhcnNcbiAgY29uc3Qgc3dpcGVyID0gbmV3IFN3aXBlcignLmhvbWUtc2xpZGVyJywge1xuICAgIHNwYWNlQmV0d2VlbjogMjAsXG4gICAgZWZmZWN0OiAnZmFkZScsXG4gICAgbG9vcDogdHJ1ZSxcbiAgICBuYXZpZ2F0aW9uOiB7XG4gICAgICBuZXh0RWw6ICcuc3dpcGVyLWJ1dHRvbi1uZXh0JyxcbiAgICAgIHByZXZFbDogJy5zd2lwZXItYnV0dG9uLXByZXYnLFxuICAgIH0sXG4gICAgY2VudGVyZWRTbGlkZXM6IHRydWUsXG4gICAgYXV0b3BsYXk6IHtcbiAgICAgIGRlbGF5OiA5NTAwLFxuICAgICAgZGlzYWJsZU9uSW50ZXJhY3Rpb246IGZhbHNlLFxuICAgIH0sXG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgc3dpcGVyTWU7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
"use strict";
(self["webpackChunkfree_to_play_games"] = self["webpackChunkfree_to_play_games"] || []).push([["index"],{

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
/* harmony import */ var _countComment_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./countComment.js */ "./src/modules/countComment.js");


const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/Y9ST6EsEV41gcCvlbOfZ/comments';
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
      `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/Y9ST6EsEV41gcCvlbOfZ/comments?item_id=${item}`,
    )
      .then((res) => res.json())
      .then((data) => {
        const comments = document.querySelector('.comments');
        comments.innerHTML = '';
        data.forEach((comment) => {
          const li = document.createElement('li');
          li.innerHTML = `
          <p>${comment.comment} by ${comment.username}</p>
        `;
          comments.appendChild(li);
          return (0,_countComment_js__WEBPACK_IMPORTED_MODULE_0__["default"])(data);
        });
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

/***/ "./src/modules/countComment.js":
/*!*************************************!*\
  !*** ./src/modules/countComment.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const countComment = (comment) => {
  const counter = document.querySelector('.total-comments');
  counter.textContent = comment.length;
  return counter;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (countComment);


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
const API_URL =
  'https://free-to-play-games-database.p.rapidapi.com/api/games?category=shooter';
const cards = document.querySelector('.card-section');
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '0123393eeamsh1bee10a3a220057p1fbee7jsn7ef939fd62ca',
    'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
  },
};
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
    'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/Y9ST6EsEV41gcCvlbOfZ/likes'
  )
    .then((res) => res.json())
    .then((getData) => {
      const likesFilter = getData.filter(
        (items) => items.item_id === `${data.id}`
      )[0].likes;
      if (!likesFilter) return;
      const likesInfo = document.querySelector(`.likes-${data.id}`);
      likesInfo.querySelector('span').textContent = likesFilter;
    });
};

const fetchData = async () => {
  const response = await fetch(API_URL, options);
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
const API_URL =
  'https://free-to-play-games-database.p.rapidapi.com/api/games?category=shooter';
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '0123393eeamsh1bee10a3a220057p1fbee7jsn7ef939fd62ca',
    'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
  },
};
const count = async () => {
  const games = await fetch(API_URL, options);
  const data = games.slice(0, 15).map((item) => item.id);
  document.querySelector('.counter').forEach((elem) => {
    elem.innerHTML = `${data.length}`;
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
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '0123393eeamsh1bee10a3a220057p1fbee7jsn7ef939fd62ca',
    'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
  },
};
class Game {
  // Initialization
  constructor() {
    this.API_URL =
      'https://free-to-play-games-database.p.rapidapi.com/api/games?category=shooter';
    this.gameContainer = document.querySelector('.content');
  }

  getGame = async () => {
    const response = await fetch(this.API_URL, options);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksTUFBTSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLE1BQU0sTUFBTSxZQUFZLE9BQU8sTUFBTSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxhQUFhLE1BQU0sWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUs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QUNBO0FBQ0Esb0JBQW9CO0FBQ3BCO0FBQ0Esd0RBQXdELHlCQUF5QjtBQUNqRiw4Q0FBOEMsa0JBQWtCO0FBQ2hFLGdEQUFnRCxxQkFBcUI7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnREFBZ0QsZUFBZTtBQUMvRDtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MsZUFBZSxTQUFTLGVBQWU7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQsZUFBZTtBQUNwRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixlQUFlO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUN2R0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDs7QUFFQSxpRUFBZSxRQUFRLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcmVlLXRvLXBsYXktZ2FtZXMvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2ZyZWUtdG8tcGxheS1nYW1lcy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vZnJlZS10by1wbGF5LWdhbWVzLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vZnJlZS10by1wbGF5LWdhbWVzLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2ZyZWUtdG8tcGxheS1nYW1lcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9mcmVlLXRvLXBsYXktZ2FtZXMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2ZyZWUtdG8tcGxheS1nYW1lcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9mcmVlLXRvLXBsYXktZ2FtZXMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vZnJlZS10by1wbGF5LWdhbWVzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vZnJlZS10by1wbGF5LWdhbWVzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vZnJlZS10by1wbGF5LWdhbWVzLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL2ZyZWUtdG8tcGxheS1nYW1lcy8uL3NyYy9tb2R1bGVzL2FkZENvbW1lbnQuanMiLCJ3ZWJwYWNrOi8vZnJlZS10by1wbGF5LWdhbWVzLy4vc3JjL21vZHVsZXMvYWRkTGlrZS5qcyIsIndlYnBhY2s6Ly9mcmVlLXRvLXBsYXktZ2FtZXMvLi9zcmMvbW9kdWxlcy9jb3VudENvbW1lbnQuanMiLCJ3ZWJwYWNrOi8vZnJlZS10by1wbGF5LWdhbWVzLy4vc3JjL21vZHVsZXMvZmV0Y2hEYXRhLmpzIiwid2VicGFjazovL2ZyZWUtdG8tcGxheS1nYW1lcy8uL3NyYy9tb2R1bGVzL2l0ZW1Db3VudGVyLmpzIiwid2VicGFjazovL2ZyZWUtdG8tcGxheS1nYW1lcy8uL3NyYy9tb2R1bGVzL21vYmlsZS5qcyIsIndlYnBhY2s6Ly9mcmVlLXRvLXBsYXktZ2FtZXMvLi9zcmMvbW9kdWxlcy9wb3BVcC5qcyIsIndlYnBhY2s6Ly9mcmVlLXRvLXBsYXktZ2FtZXMvLi9zcmMvbW9kdWxlcy9zbGlkZXNob3cuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Qb3BwaW5zOndnaHRAMTAwOzMwMDs0MDA7NTAwOzYwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxyXFxuICAtLW1haW4tY29sb3I6ICNlZjc4MTk7XFxyXFxuICAtLWJsYWNrOiAjMTQxMjE1O1xcclxcbn1cXHJcXG5cXHJcXG4qIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcXHJcXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGxpbmVhcjtcXHJcXG59XFxyXFxuXFxyXFxuaHRtbCB7XFxyXFxuICBmb250LXNpemU6IDYyLjUlO1xcclxcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xcclxcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XFxyXFxuICBzY3JvbGwtcGFkZGluZy10b3A6IDdyZW07XFxyXFxufVxcclxcblxcclxcbmh0bWw6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXHJcXG4gIHdpZHRoOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG5odG1sOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XFxyXFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1ibGFjayk7XFxyXFxufVxcclxcblxcclxcbmh0bWw6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXHJcXG4gIGJhY2tncm91bmQ6IHZhcigtLW1haW4tY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcXHJcXG4gIGJhY2tncm91bmQ6IHZhcigtLWJsYWNrKTtcXHJcXG59XFxyXFxuXFxyXFxuc2VjdGlvbiB7XFxyXFxuICBwYWRkaW5nOiAycmVtIDZyZW07XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXIge1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIHJpZ2h0OiAwO1xcclxcbiAgei1pbmRleDogMTAwMDtcXHJcXG4gIHBhZGRpbmc6IDJyZW0gOSU7XFxyXFxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuOCk7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlciAubG9nbyB7XFxyXFxuICBmb250LXNpemU6IDIuNXJlbTtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlciAubG9nbyBpIHtcXHJcXG4gIHBhZGRpbmctcmlnaHQ6IDAuNXJlbTtcXHJcXG4gIGNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcXHJcXG4gIGFuaW1hdGlvbjogZmxvYXRpbmcgMnMgbGluZWFyIGluZmluaXRlO1xcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIGZsb2F0aW5nIHtcXHJcXG4gIDAlIHtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xcclxcbiAgfVxcclxcblxcclxcbiAgMTAwJSB7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIDUwJSB7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXJlbSk7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXIgLm5hdmJhciBhIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS43cmVtO1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxuICBtYXJnaW46IDAgMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmZvb3RlciAuY3JlZGl0IHNwYW4gYSB7XFxyXFxuICBjb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XFxyXFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXIgLm5hdmJhciBhOmhvdmVyIHtcXHJcXG4gIGNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlciAubWVudSB7XFxyXFxuICBmb250LXNpemU6IDIuNXJlbTtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgbWFyZ2luLWxlZnQ6IDJyZW07XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXIgLm1lbnU6aG92ZXIge1xcclxcbiAgY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4uaG9tZSB7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4uaG9tZSAuaG9tZS1zbGlkZXIgLmJveCB7XFxyXFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nOiAycmVtO1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xcclxcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyICFpbXBvcnRhbnQ7XFxyXFxufVxcclxcblxcclxcbi5ob21lIC5ob21lLXNsaWRlciAuc3dpcGVyLWJ1dHRvbi1uZXh0IHtcXHJcXG4gIHJpZ2h0OiA0cmVtO1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxuICBvcGFjaXR5OiAwO1xcclxcbn1cXHJcXG5cXHJcXG4uaG9tZSAuaG9tZS1zbGlkZXIgLnN3aXBlci1idXR0b24tcHJldiB7XFxyXFxuICBsZWZ0OiA0cmVtO1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxuICBvcGFjaXR5OiAwO1xcclxcbn1cXHJcXG5cXHJcXG4uaG9tZSAuaG9tZS1zbGlkZXIgLnN3aXBlci1idXR0b24tbmV4dDpob3ZlcixcXHJcXG4uaG9tZSAuaG9tZS1zbGlkZXIgLnN3aXBlci1idXR0b24tcHJldjpob3ZlciB7XFxyXFxuICBjb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbi5ob21lIC5ob21lLXNsaWRlcjpob3ZlciAuc3dpcGVyLWJ1dHRvbi1uZXh0LFxcclxcbi5ob21lIC5ob21lLXNsaWRlcjpob3ZlciAuc3dpcGVyLWJ1dHRvbi1wcmV2IHtcXHJcXG4gIG9wYWNpdHk6IDE7XFxyXFxufVxcclxcblxcclxcbi5jYXJkLXNlY3Rpb24ge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XFxyXFxuICBncmlkLWdhcDogMXJlbTtcXHJcXG4gIG1hcmdpbi10b3A6IDJyZW07XFxyXFxufVxcclxcblxcclxcbi5jYXJkLXNlY3Rpb24gLmNhcmQge1xcclxcbiAgYmFja2dyb3VuZDogIzIyMjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXHJcXG4gIHBhZGRpbmc6IDJyZW07XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmQtc2VjdGlvbiAuY29udGVudCAubmFtZS1kaXYge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZC1zZWN0aW9uIC5jb250ZW50IC5uYW1lLWRpdiBoMiB7XFxyXFxuICBmb250LXNpemU6IDJyZW07XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZC1zZWN0aW9uIC5jb250ZW50IC5saWtlcyB7XFxyXFxuICBmb250LXNpemU6IDJyZW07XFxyXFxuICBmb250LXdlaWdodDogOTAwO1xcclxcbiAgY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZC1zZWN0aW9uIC5kZXNjcmlwdGlvbiB7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nOiAxcmVtIDEuNXJlbTtcXHJcXG4gIGZvbnQtc2l6ZTogMS43cmVtO1xcclxcbiAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICBtYXJnaW4tYm90dG9tOiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZC1zZWN0aW9uIC5jYXJkIC5jb21tZW50LWJ0biB7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgZm9udC1zaXplOiAxLjdyZW07XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXHJcXG4gIGJveC1zaGFkb3c6IDAgMTBweCAxNXB4IHJnYig1NSAxNDggMTQzKTtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIG1hcmdpbjogMCBhdXRvO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmQtc2VjdGlvbiAuY2FyZCAuY29tbWVudC1idG46aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZDogdmFyKC0tbWFpbi1jb2xvcik7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG59XFxyXFxuXFxyXFxuLmZvb3RlciAuY3JlZGl0IHtcXHJcXG4gIHBhZGRpbmc6IDFyZW07XFxyXFxuICBwYWRkaW5nLXRvcDogMnJlbTtcXHJcXG4gIG1hcmdpbi10b3A6IDJyZW07XFxyXFxuICBib3JkZXItdG9wOiAwLjFyZW0gc29saWQgI2ZmZjM7XFxyXFxuICBmb250LXNpemU6IDJyZW07XFxyXFxuICBjb2xvcjogI2FhYTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLyogcG9wdXAgc2VjdGlvbiAqL1xcclxcblxcclxcbi5wb3B1cC1zZWN0aW9uIHtcXHJcXG4gIGJhY2tncm91bmQ6ICMyMjI7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cCB7XFxyXFxuICB3aWR0aDogNjB2dztcXHJcXG4gIGhlaWdodDogOTB2aDtcXHJcXG4gIHBhZGRpbmc6IDMwcHggNTBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyZTMxMzA7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICB0b3A6IDUwJTtcXHJcXG4gIGxlZnQ6IDUwJTtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgZ2FwOiAyMHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXHJcXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcXHJcXG4gIGNvbG9yOiAjZDJkMWQzO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXAgI2Nsb3NlLWJ0biB7XFxyXFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcclxcbiAgZm9udC1zaXplOiA0cmVtO1xcclxcbiAgY29sb3I6ICNkMmQxZDM7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cCAuZGlzcGxheSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cCAuZGlzcGxheSAuZGVzY3JpcHRpb24ge1xcclxcbiAgd2lkdGg6IDkwJTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwIC5kaXNwbGF5IC5kZXNjcmlwdGlvbiBpbWcge1xcclxcbiAgd2lkdGg6IDkwJTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cCAuZGlzcGxheSAuZGVzY3JpcHRpb24gLmdhbWUtdGl0bGUge1xcclxcbiAgZm9udC1zaXplOiAyLjhyZW07XFxyXFxufVxcclxcblxcclxcbi5wb3B1cCAuZGlzcGxheSAuZGlzcGxheS1kZXRhaWxzIHtcXHJcXG4gIHdpZHRoOiA4MCU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cCAuZGlzcGxheSAuZGlzcGxheS1kZXRhaWxzIGgzIHtcXHJcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwIC5kaXNwbGF5IC5kaXNwbGF5LWRldGFpbHMgdWwgPiBsaSB7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxLjI7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cCAuY29tbWVudC1zZWN0aW9uIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwIC5jb21tZW50LXNlY3Rpb24gLmNvbW1lbnQtc2hvdyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cCAuY29tbWVudC1zZWN0aW9uIC5jb21tZW50LXNob3cgaDMge1xcclxcbiAgZm9udC1zaXplOiAycmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXHJcXG4gIGNvbG9yOiAjZDJkMWQzO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXAgLmNvbW1lbnQtc2VjdGlvbiAuY29tbWVudC1zaG93IHVsIHtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxyXFxuICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwIC5jb21tZW50LXNlY3Rpb24gLmNvbW1lbnQge1xcclxcbiAgd2lkdGg6IDcwJTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwIC5jb21tZW50LXNlY3Rpb24gLmNvbW1lbnQgaDMge1xcclxcbiAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICBtYXJnaW4tdG9wOiA1cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXAgLmNvbW1lbnQtc2VjdGlvbiAuY29tbWVudCBmb3JtIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZ2FwOiAxMHB4O1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cCAuY29tbWVudC1zZWN0aW9uIC5jb21tZW50IGZvcm0gaW5wdXRbdHlwZT0ndGV4dCddLFxcclxcbi5wb3B1cCAuY29tbWVudC1zZWN0aW9uIC5jb21tZW50IGZvcm0gdGV4dGFyZWEge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXAgLmNvbW1lbnQtc2VjdGlvbiAuY29tbWVudCBmb3JtIHRleHRhcmVhIHtcXHJcXG4gIGhlaWdodDogMTVyZW07XFxyXFxufVxcclxcblxcclxcbi5wb3B1cCAuY29tbWVudC1zZWN0aW9uIC5jb21tZW50IGZvcm0gLnN1Ym1pdC1idG4ge1xcclxcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXHJcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi8qIG1lZGlhIHF1ZXJpZXMgICovXFxyXFxuXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MXB4KSB7XFxyXFxuICBodG1sIHtcXHJcXG4gICAgZm9udC1zaXplOiA1NSU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICBzZWN0aW9uIHtcXHJcXG4gICAgcGFkZGluZzogMnJlbTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XFxyXFxuICAubWVudSB7XFxyXFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5oZWFkZXIgLm5hdmJhciB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdG9wOiA5OSU7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICAgIHJpZ2h0OiAwO1xcclxcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuOCk7XFxyXFxuICAgIGNsaXAtcGF0aDogcG9seWdvbigwIDAsIDEwMCUgMCwgMTAwJSAwLCAwIDApO1xcclxcbiAgICBtaW4taGVpZ2h0OiA3MHZoO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmhlYWRlciAubmF2YmFyLmFjdGl2ZSB7XFxyXFxuICAgIGNsaXAtcGF0aDogcG9seWdvbigwIDAsIDEwMCUgMCwgMTAwJSAxMDAlLCAwJSAxMDAlKTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5oZWFkZXIgLm5hdmJhciBhIHtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIG1hcmdpbjogMnJlbTtcXHJcXG4gICAgcGFkZGluZzogMXJlbTtcXHJcXG4gICAgZm9udC1zaXplOiAyLjVyZW07XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jYXJkLXNlY3Rpb24ge1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmcjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5wb3B1cCB7XFxyXFxuICAgIHdpZHRoOiA5MHZ3O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1heC13aWR0aDogNDUwcHgpIHtcXHJcXG4gIGh0bWwge1xcclxcbiAgICBmb250LXNpemU6IDUwJTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5ob21lIC5ob21lLXNsaWRlciAuc3dpcGVyLWJ1dHRvbi1uZXh0LFxcclxcbiAgLmhvbWUgLmhvbWUtc2xpZGVyIC5zd2lwZXItYnV0dG9uLXByZXYge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmNhcmQtc2VjdGlvbiB7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmNhcmQtc2VjdGlvbiAuY2FyZCB7XFxyXFxuICAgIHBhZGRpbmc6IDAuM3JlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jYXJkLXNlY3Rpb24gLmNhcmQgLmNvbW1lbnQtYnRuIHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XFxyXFxuICB9XFxyXFxufVxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3Ny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YixzQkFBc0I7RUFDdEIsU0FBUztFQUNULFdBQVc7QUFDYjs7QUFFQTs7RUFFRSxXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGFBQWE7RUFDYixxQkFBcUI7RUFDckIsZUFBZTtBQUNqQjs7QUFFQSxtQkFBbUI7O0FBRW5CO0VBQ0U7SUFDRSxjQUFjO0VBQ2hCOztFQUVBO0lBQ0UsYUFBYTtFQUNmO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLHFCQUFxQjtFQUN2Qjs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsT0FBTztJQUNQLFFBQVE7SUFDUiw4QkFBOEI7SUFDOUIsNENBQTRDO0lBQzVDLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLG1EQUFtRDtFQUNyRDs7RUFFQTtJQUNFLGNBQWM7SUFDZCxZQUFZO0lBQ1osYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSwwQkFBMEI7RUFDNUI7O0VBRUE7SUFDRSxXQUFXO0VBQ2I7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsY0FBYztFQUNoQjs7RUFFQTs7SUFFRSxhQUFhO0VBQ2Y7O0VBRUE7SUFDRSwwQkFBMEI7RUFDNUI7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsaUJBQWlCO0lBQ2pCLG1CQUFtQjtFQUNyQjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBvcHBpbnM6d2dodEAxMDA7MzAwOzQwMDs1MDA7NjAwJmRpc3BsYXk9c3dhcCcpO1xcclxcblxcclxcbjpyb290IHtcXHJcXG4gIC0tbWFpbi1jb2xvcjogI2VmNzgxOTtcXHJcXG4gIC0tYmxhY2s6ICMxNDEyMTU7XFxyXFxufVxcclxcblxcclxcbioge1xcclxcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgbGluZWFyO1xcclxcbn1cXHJcXG5cXHJcXG5odG1sIHtcXHJcXG4gIGZvbnQtc2l6ZTogNjIuNSU7XFxyXFxuICBvdmVyZmxvdy14OiBoaWRkZW47XFxyXFxuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcXHJcXG4gIHNjcm9sbC1wYWRkaW5nLXRvcDogN3JlbTtcXHJcXG59XFxyXFxuXFxyXFxuaHRtbDo6LXdlYmtpdC1zY3JvbGxiYXIge1xcclxcbiAgd2lkdGg6IDFyZW07XFxyXFxufVxcclxcblxcclxcbmh0bWw6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcXHJcXG4gIGJhY2tncm91bmQ6IHZhcigtLWJsYWNrKTtcXHJcXG59XFxyXFxuXFxyXFxuaHRtbDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcclxcbiAgYmFja2dyb3VuZDogdmFyKC0tbWFpbi1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xcclxcbiAgYmFja2dyb3VuZDogdmFyKC0tYmxhY2spO1xcclxcbn1cXHJcXG5cXHJcXG5zZWN0aW9uIHtcXHJcXG4gIHBhZGRpbmc6IDJyZW0gNnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlciB7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgcmlnaHQ6IDA7XFxyXFxuICB6LWluZGV4OiAxMDAwO1xcclxcbiAgcGFkZGluZzogMnJlbSA5JTtcXHJcXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC44KTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyIC5sb2dvIHtcXHJcXG4gIGZvbnQtc2l6ZTogMi41cmVtO1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyIC5sb2dvIGkge1xcclxcbiAgcGFkZGluZy1yaWdodDogMC41cmVtO1xcclxcbiAgY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xcclxcbiAgYW5pbWF0aW9uOiBmbG9hdGluZyAycyBsaW5lYXIgaW5maW5pdGU7XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgZmxvYXRpbmcge1xcclxcbiAgMCUge1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAxMDAlIHtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xcclxcbiAgfVxcclxcblxcclxcbiAgNTAlIHtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcmVtKTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlciAubmF2YmFyIGEge1xcclxcbiAgZm9udC1zaXplOiAxLjdyZW07XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIG1hcmdpbjogMCAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9vdGVyIC5jcmVkaXQgc3BhbiBhIHtcXHJcXG4gIGNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcXHJcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlciAubmF2YmFyIGE6aG92ZXIge1xcclxcbiAgY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudSB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyIC5tZW51IHtcXHJcXG4gIGZvbnQtc2l6ZTogMi41cmVtO1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxuICBtYXJnaW4tbGVmdDogMnJlbTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlciAubWVudTpob3ZlciB7XFxyXFxuICBjb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbi5ob21lIHtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxufVxcclxcblxcclxcbi5ob21lIC5ob21lLXNsaWRlciAuYm94IHtcXHJcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDJyZW07XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XFxyXFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgIWltcG9ydGFudDtcXHJcXG59XFxyXFxuXFxyXFxuLmhvbWUgLmhvbWUtc2xpZGVyIC5zd2lwZXItYnV0dG9uLW5leHQge1xcclxcbiAgcmlnaHQ6IDRyZW07XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIG9wYWNpdHk6IDA7XFxyXFxufVxcclxcblxcclxcbi5ob21lIC5ob21lLXNsaWRlciAuc3dpcGVyLWJ1dHRvbi1wcmV2IHtcXHJcXG4gIGxlZnQ6IDRyZW07XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIG9wYWNpdHk6IDA7XFxyXFxufVxcclxcblxcclxcbi5ob21lIC5ob21lLXNsaWRlciAuc3dpcGVyLWJ1dHRvbi1uZXh0OmhvdmVyLFxcclxcbi5ob21lIC5ob21lLXNsaWRlciAuc3dpcGVyLWJ1dHRvbi1wcmV2OmhvdmVyIHtcXHJcXG4gIGNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuLmhvbWUgLmhvbWUtc2xpZGVyOmhvdmVyIC5zd2lwZXItYnV0dG9uLW5leHQsXFxyXFxuLmhvbWUgLmhvbWUtc2xpZGVyOmhvdmVyIC5zd2lwZXItYnV0dG9uLXByZXYge1xcclxcbiAgb3BhY2l0eTogMTtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmQtc2VjdGlvbiB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcXHJcXG4gIGdyaWQtZ2FwOiAxcmVtO1xcclxcbiAgbWFyZ2luLXRvcDogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmQtc2VjdGlvbiAuY2FyZCB7XFxyXFxuICBiYWNrZ3JvdW5kOiAjMjIyO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcclxcbiAgcGFkZGluZzogMnJlbTtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZC1zZWN0aW9uIC5jb250ZW50IC5uYW1lLWRpdiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5jYXJkLXNlY3Rpb24gLmNvbnRlbnQgLm5hbWUtZGl2IGgyIHtcXHJcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICBjb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbi5jYXJkLXNlY3Rpb24gLmNvbnRlbnQgLmxpa2VzIHtcXHJcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxyXFxuICBjb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5jYXJkLXNlY3Rpb24gLmRlc2NyaXB0aW9uIHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDFyZW0gMS41cmVtO1xcclxcbiAgZm9udC1zaXplOiAxLjdyZW07XFxyXFxuICBtYXJnaW46IDAgYXV0bztcXHJcXG4gIG1hcmdpbi1ib3R0b206IDJyZW07XFxyXFxufVxcclxcblxcclxcbi5jYXJkLXNlY3Rpb24gLmNhcmQgLmNvbW1lbnQtYnRuIHtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxuICBmb250LXNpemU6IDEuN3JlbTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcclxcbiAgYm94LXNoYWRvdzogMCAxMHB4IDE1cHggcmdiKDU1IDE0OCAxNDMpO1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxuICBmb250LXdlaWdodDogOTAwO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZC1zZWN0aW9uIC5jYXJkIC5jb21tZW50LWJ0bjpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1tYWluLWNvbG9yKTtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9vdGVyIC5jcmVkaXQge1xcclxcbiAgcGFkZGluZzogMXJlbTtcXHJcXG4gIHBhZGRpbmctdG9wOiAycmVtO1xcclxcbiAgbWFyZ2luLXRvcDogMnJlbTtcXHJcXG4gIGJvcmRlci10b3A6IDAuMXJlbSBzb2xpZCAjZmZmMztcXHJcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG4gIGNvbG9yOiAjYWFhO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBwb3B1cCBzZWN0aW9uICovXFxyXFxuXFxyXFxuLnBvcHVwLXNlY3Rpb24ge1xcclxcbiAgYmFja2dyb3VuZDogIzIyMjtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwIHtcXHJcXG4gIHdpZHRoOiA2MHZ3O1xcclxcbiAgaGVpZ2h0OiA5MHZoO1xcclxcbiAgcGFkZGluZzogMzBweCA1MHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJlMzEzMDtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHRvcDogNTAlO1xcclxcbiAgbGVmdDogNTAlO1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBnYXA6IDIwcHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcclxcbiAgY29sb3I6ICNkMmQxZDM7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cCAjY2xvc2UtYnRuIHtcXHJcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxyXFxuICBmb250LXNpemU6IDRyZW07XFxyXFxuICBjb2xvcjogI2QyZDFkMztcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwIC5kaXNwbGF5IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwIC5kaXNwbGF5IC5kZXNjcmlwdGlvbiB7XFxyXFxuICB3aWR0aDogOTAlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXAgLmRpc3BsYXkgLmRlc2NyaXB0aW9uIGltZyB7XFxyXFxuICB3aWR0aDogOTAlO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwIC5kaXNwbGF5IC5kZXNjcmlwdGlvbiAuZ2FtZS10aXRsZSB7XFxyXFxuICBmb250LXNpemU6IDIuOHJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwIC5kaXNwbGF5IC5kaXNwbGF5LWRldGFpbHMge1xcclxcbiAgd2lkdGg6IDgwJTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwIC5kaXNwbGF5IC5kaXNwbGF5LWRldGFpbHMgaDMge1xcclxcbiAgZm9udC1zaXplOiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXAgLmRpc3BsYXkgLmRpc3BsYXktZGV0YWlscyB1bCA+IGxpIHtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gIHBhZGRpbmctYm90dG9tOiAxcmVtO1xcclxcbiAgbGluZS1oZWlnaHQ6IDEuMjtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwIC5jb21tZW50LXNlY3Rpb24ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXAgLmNvbW1lbnQtc2VjdGlvbiAuY29tbWVudC1zaG93IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwIC5jb21tZW50LXNlY3Rpb24gLmNvbW1lbnQtc2hvdyBoMyB7XFxyXFxuICBmb250LXNpemU6IDJyZW07XFxyXFxuICBmb250LXdlaWdodDogOTAwO1xcclxcbiAgY29sb3I6ICNkMmQxZDM7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cCAuY29tbWVudC1zZWN0aW9uIC5jb21tZW50LXNob3cgdWwge1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXHJcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXAgLmNvbW1lbnQtc2VjdGlvbiAuY29tbWVudCB7XFxyXFxuICB3aWR0aDogNzAlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXAgLmNvbW1lbnQtc2VjdGlvbiAuY29tbWVudCBoMyB7XFxyXFxuICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gIG1hcmdpbi10b3A6IDVyZW07XFxyXFxufVxcclxcblxcclxcbi5wb3B1cCAuY29tbWVudC1zZWN0aW9uIC5jb21tZW50IGZvcm0ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBnYXA6IDEwcHg7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwIC5jb21tZW50LXNlY3Rpb24gLmNvbW1lbnQgZm9ybSBpbnB1dFt0eXBlPSd0ZXh0J10sXFxyXFxuLnBvcHVwIC5jb21tZW50LXNlY3Rpb24gLmNvbW1lbnQgZm9ybSB0ZXh0YXJlYSB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cCAuY29tbWVudC1zZWN0aW9uIC5jb21tZW50IGZvcm0gdGV4dGFyZWEge1xcclxcbiAgaGVpZ2h0OiAxNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwIC5jb21tZW50LXNlY3Rpb24gLmNvbW1lbnQgZm9ybSAuc3VibWl0LWJ0biB7XFxyXFxuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xcclxcbiAgZm9udC1zaXplOiAxLjNyZW07XFxyXFxuICBmb250LXdlaWdodDogOTAwO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLyogbWVkaWEgcXVlcmllcyAgKi9cXHJcXG5cXHJcXG5AbWVkaWEgKG1heC13aWR0aDogOTkxcHgpIHtcXHJcXG4gIGh0bWwge1xcclxcbiAgICBmb250LXNpemU6IDU1JTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIHNlY3Rpb24ge1xcclxcbiAgICBwYWRkaW5nOiAycmVtO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcXHJcXG4gIC5tZW51IHtcXHJcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmhlYWRlciAubmF2YmFyIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB0b3A6IDk5JTtcXHJcXG4gICAgbGVmdDogMDtcXHJcXG4gICAgcmlnaHQ6IDA7XFxyXFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC44KTtcXHJcXG4gICAgY2xpcC1wYXRoOiBwb2x5Z29uKDAgMCwgMTAwJSAwLCAxMDAlIDAsIDAgMCk7XFxyXFxuICAgIG1pbi1oZWlnaHQ6IDcwdmg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuaGVhZGVyIC5uYXZiYXIuYWN0aXZlIHtcXHJcXG4gICAgY2xpcC1wYXRoOiBwb2x5Z29uKDAgMCwgMTAwJSAwLCAxMDAlIDEwMCUsIDAlIDEwMCUpO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmhlYWRlciAubmF2YmFyIGEge1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgbWFyZ2luOiAycmVtO1xcclxcbiAgICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgICBmb250LXNpemU6IDIuNXJlbTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmNhcmQtc2VjdGlvbiB7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMmZyO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnBvcHVwIHtcXHJcXG4gICAgd2lkdGg6IDkwdnc7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiA0NTBweCkge1xcclxcbiAgaHRtbCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogNTAlO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmhvbWUgLmhvbWUtc2xpZGVyIC5zd2lwZXItYnV0dG9uLW5leHQsXFxyXFxuICAuaG9tZSAuaG9tZS1zbGlkZXIgLnN3aXBlci1idXR0b24tcHJldiB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY2FyZC1zZWN0aW9uIHtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY2FyZC1zZWN0aW9uIC5jYXJkIHtcXHJcXG4gICAgcGFkZGluZzogMC4zcmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmNhcmQtc2VjdGlvbiAuY2FyZCAuY29tbWVudC1idG4ge1xcclxcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCAnLi9hc3NldHMvaW1hZ2VzL2JhdG1hbi5wbmcnO1xuaW1wb3J0ICcuL2Fzc2V0cy9pbWFnZXMvaW1hZ2UxLnBuZyc7XG5pbXBvcnQgJy4vYXNzZXRzL2ltYWdlcy9pbWFnZTIucG5nJztcbmltcG9ydCAnLi9hc3NldHMvaW1hZ2VzL2ltYWdlMy5wbmcnO1xuaW1wb3J0ICcuL2Fzc2V0cy9pbWFnZXMvaW1hZ2U0LnBuZyc7XG5pbXBvcnQgJy4vYXNzZXRzL2ltYWdlcy9pbWFnZTUucG5nJztcbmltcG9ydCAnLi9hc3NldHMvaW1hZ2VzL2ltYWdlNi5wbmcnO1xuaW1wb3J0ICcuL2Fzc2V0cy9pbWFnZXMvaW1hZ2U3LnBuZyc7XG5pbXBvcnQgJy4vYXNzZXRzL2ltYWdlcy9pbWFnZTgucG5nJztcbmltcG9ydCAnLi9hc3NldHMvaW1hZ2VzL2ltYWdlOS5wbmcnO1xuaW1wb3J0ICcuL2Fzc2V0cy9pbWFnZXMvaW1hZ2UxMC5wbmcnO1xuaW1wb3J0ICcuL2Fzc2V0cy9pbWFnZXMvaW1hZ2UxMS5wbmcnO1xuXG5pbXBvcnQgc3dpcGVyTWUgZnJvbSAnLi9tb2R1bGVzL3NsaWRlc2hvdy5qcyc7XG5pbXBvcnQgZmV0Y2hEYXRhIGZyb20gJy4vbW9kdWxlcy9mZXRjaERhdGEuanMnO1xuaW1wb3J0IGFkZExpa2UgZnJvbSAnLi9tb2R1bGVzL2FkZExpa2UuanMnO1xuaW1wb3J0IG1vYmlsZU1lbnUgZnJvbSAnLi9tb2R1bGVzL21vYmlsZS5qcyc7XG5pbXBvcnQgY291bnQgZnJvbSAnLi9tb2R1bGVzL2l0ZW1Db3VudGVyLmpzJztcbmltcG9ydCBHYW1lIGZyb20gJy4vbW9kdWxlcy9wb3BVcC5qcyc7XG5pbXBvcnQgYWRkQ29tbWVudCBmcm9tICcuL21vZHVsZXMvYWRkQ29tbWVudC5qcyc7XG5cbmZldGNoRGF0YSgpO1xuc3dpcGVyTWUoKTtcbmFkZExpa2UoKTtcbm1vYmlsZU1lbnUoKTtcbmNvdW50KCk7XG5hZGRDb21tZW50KCk7XG5jb25zdCBnYW1lID0gbmV3IEdhbWUoKTtcbmdhbWUuZ2V0R2FtZSgpO1xuIiwiaW1wb3J0IGNvdW50Q29tbWVudCBmcm9tICcuL2NvdW50Q29tbWVudC5qcyc7XG5cbmNvbnN0IHVybCA9ICdodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcy9ZOVNUNkVzRVY0MWdjQ3ZsYk9mWi9jb21tZW50cyc7XG5jb25zdCBjb21tZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7XG5cbmNvbnN0IGFkZENvbW1lbnQgPSAoKSA9PiB7XG4gIGNvbW1lbnRzLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IHN1Ym1pdHRlZCA9IGUudGFyZ2V0LmNsb3Nlc3QoJy5mb3JtJyk7XG4gICAgY29uc3QgaXRlbSA9IHN1Ym1pdHRlZC5kYXRhc2V0LmdldENvbW1lbnQ7XG4gICAgY29uc3QgdXNlclZhbHVlID0gc3VibWl0dGVkLnF1ZXJ5U2VsZWN0b3IoJyNuYW1lJykudmFsdWU7XG4gICAgY29uc3QgdGV4dEFyZWEgPSBzdWJtaXR0ZWQucXVlcnlTZWxlY3RvcignI2Rlc2NyaXB0aW9uJykudmFsdWU7XG4gICAgZmV0Y2godXJsLCB7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgQWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICBpdGVtX2lkOiBpdGVtLFxuICAgICAgICB1c2VybmFtZTogdXNlclZhbHVlLFxuICAgICAgICBjb21tZW50OiB0ZXh0QXJlYSxcbiAgICAgIH0pLFxuICAgIH0pO1xuICAgIGZldGNoKFxuICAgICAgYGh0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzL1k5U1Q2RXNFVjQxZ2NDdmxiT2ZaL2NvbW1lbnRzP2l0ZW1faWQ9JHtpdGVtfWAsXG4gICAgKVxuICAgICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcbiAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgIGNvbnN0IGNvbW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbW1lbnRzJyk7XG4gICAgICAgIGNvbW1lbnRzLmlubmVySFRNTCA9ICcnO1xuICAgICAgICBkYXRhLmZvckVhY2goKGNvbW1lbnQpID0+IHtcbiAgICAgICAgICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgICAgbGkuaW5uZXJIVE1MID0gYFxuICAgICAgICAgIDxwPiR7Y29tbWVudC5jb21tZW50fSBieSAke2NvbW1lbnQudXNlcm5hbWV9PC9wPlxuICAgICAgICBgO1xuICAgICAgICAgIGNvbW1lbnRzLmFwcGVuZENoaWxkKGxpKTtcbiAgICAgICAgICByZXR1cm4gY291bnRDb21tZW50KGRhdGEpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGFkZENvbW1lbnQ7XG4iLCJjb25zdCBsaWtlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJkLXNlY3Rpb24nKTtcbmNvbnN0IHVybCA9ICdodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcy9ZOVNUNkVzRVY0MWdjQ3ZsYk9mWi9saWtlcyc7XG5cbmNvbnN0IGFkZExpa2UgPSAoKSA9PiB7XG4gIGxpa2VzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBjb25zdCBjbGlja2VkID0gZS50YXJnZXQuY2xvc2VzdCgnLmFkZC1saWtlJyk7XG4gICAgaWYgKCFjbGlja2VkKSByZXR1cm47XG4gICAgY29uc3QgaXRlbSA9IGNsaWNrZWQuZ2V0QXR0cmlidXRlKCdpZCcpO1xuICAgIGZldGNoKHVybCwge1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgIEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgfSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgaXRlbV9pZDogaXRlbSxcbiAgICAgIH0pLFxuICAgIH0pO1xuICAgIGZldGNoKHVybClcbiAgICAgIC50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXG4gICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICBjb25zdCBsaWtlc0luZm8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAubGlrZXMtJHtpdGVtfWApO1xuICAgICAgICBsaWtlc0luZm8ucXVlcnlTZWxlY3Rvcignc3BhbicpLnRleHRDb250ZW50ID0gZGF0YS5maWx0ZXIoXG4gICAgICAgICAgKGl0ZW1zKSA9PiBpdGVtcy5pdGVtX2lkID09PSBpdGVtLFxuICAgICAgICApWzBdLmxpa2VzO1xuICAgICAgfSk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgYWRkTGlrZTtcbiIsImNvbnN0IGNvdW50Q29tbWVudCA9IChjb21tZW50KSA9PiB7XG4gIGNvbnN0IGNvdW50ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG90YWwtY29tbWVudHMnKTtcbiAgY291bnRlci50ZXh0Q29udGVudCA9IGNvbW1lbnQubGVuZ3RoO1xuICByZXR1cm4gY291bnRlcjtcbn07XG5leHBvcnQgZGVmYXVsdCBjb3VudENvbW1lbnQ7XG4iLCJjb25zdCBBUElfVVJMID1cbiAgJ2h0dHBzOi8vZnJlZS10by1wbGF5LWdhbWVzLWRhdGFiYXNlLnAucmFwaWRhcGkuY29tL2FwaS9nYW1lcz9jYXRlZ29yeT1zaG9vdGVyJztcbmNvbnN0IGNhcmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcmQtc2VjdGlvbicpO1xuY29uc3Qgb3B0aW9ucyA9IHtcbiAgbWV0aG9kOiAnR0VUJyxcbiAgaGVhZGVyczoge1xuICAgICdYLVJhcGlkQVBJLUtleSc6ICcwMTIzMzkzZWVhbXNoMWJlZTEwYTNhMjIwMDU3cDFmYmVlN2pzbjdlZjkzOWZkNjJjYScsXG4gICAgJ1gtUmFwaWRBUEktSG9zdCc6ICdmcmVlLXRvLXBsYXktZ2FtZXMtZGF0YWJhc2UucC5yYXBpZGFwaS5jb20nLFxuICB9LFxufTtcbmNvbnN0IHNob3dEYXRhID0gKGRhdGEpID0+IHtcbiAgY29uc3QgY2FyZENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjYXJkQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NhcmQnKTtcbiAgY2FyZENvbnRhaW5lci5pbm5lckhUTUwgPSBgXG4gICAgICAgIDxpbWdcbiAgICAgICAgICBzcmM9XCIke2RhdGEudGh1bWJuYWlsfVwiXG4gICAgICAgICAgY2xhc3M9XCJjYXJkLWltYWdlXCJcbiAgICAgICAgLz5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwibmFtZS1kaXZcIj5cbiAgICAgICAgICAgIDxoMj4ke2RhdGEudGl0bGV9PC9oMj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsaWtlcyBsaWtlcy0ke2RhdGEuaWR9XCI+XG4gICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEtc29saWQgZmEtaGVhcnQgYWRkLWxpa2VcIiBpZD1cIiR7ZGF0YS5pZH1cIj48L2k+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibGlrZXMtaW5mbyAke2RhdGEuaWR9XCIgaWQ9XCIke2RhdGEuaWR9XCI+NDwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxwIGNsYXNzPVwiZGVzY3JpcHRpb25cIj5cbiAgICAgICAgICAgJHtkYXRhLnNob3J0X2Rlc2NyaXB0aW9ufVxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8YnV0dG9uIGlkPVwiJHtkYXRhLmlkfVwiIGNsYXNzPVwiY29tbWVudC1idG5cIj5Db21tZW50czwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICBgO1xuICBjYXJkcy5hcHBlbmRDaGlsZChjYXJkQ29udGFpbmVyKTtcbiAgZmV0Y2goXG4gICAgJ2h0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzL1k5U1Q2RXNFVjQxZ2NDdmxiT2ZaL2xpa2VzJ1xuICApXG4gICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcbiAgICAudGhlbigoZ2V0RGF0YSkgPT4ge1xuICAgICAgY29uc3QgbGlrZXNGaWx0ZXIgPSBnZXREYXRhLmZpbHRlcihcbiAgICAgICAgKGl0ZW1zKSA9PiBpdGVtcy5pdGVtX2lkID09PSBgJHtkYXRhLmlkfWBcbiAgICAgIClbMF0ubGlrZXM7XG4gICAgICBpZiAoIWxpa2VzRmlsdGVyKSByZXR1cm47XG4gICAgICBjb25zdCBsaWtlc0luZm8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAubGlrZXMtJHtkYXRhLmlkfWApO1xuICAgICAgbGlrZXNJbmZvLnF1ZXJ5U2VsZWN0b3IoJ3NwYW4nKS50ZXh0Q29udGVudCA9IGxpa2VzRmlsdGVyO1xuICAgIH0pO1xufTtcblxuY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKEFQSV9VUkwsIG9wdGlvbnMpO1xuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IDE1OyBpICs9IDEpIHtcbiAgICBzaG93RGF0YShkYXRhW2ldKTtcbiAgfVxufTtcblxuZmV0Y2hEYXRhKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGZldGNoRGF0YTtcbiIsImNvbnN0IEFQSV9VUkwgPVxuICAnaHR0cHM6Ly9mcmVlLXRvLXBsYXktZ2FtZXMtZGF0YWJhc2UucC5yYXBpZGFwaS5jb20vYXBpL2dhbWVzP2NhdGVnb3J5PXNob290ZXInO1xuY29uc3Qgb3B0aW9ucyA9IHtcbiAgbWV0aG9kOiAnR0VUJyxcbiAgaGVhZGVyczoge1xuICAgICdYLVJhcGlkQVBJLUtleSc6ICcwMTIzMzkzZWVhbXNoMWJlZTEwYTNhMjIwMDU3cDFmYmVlN2pzbjdlZjkzOWZkNjJjYScsXG4gICAgJ1gtUmFwaWRBUEktSG9zdCc6ICdmcmVlLXRvLXBsYXktZ2FtZXMtZGF0YWJhc2UucC5yYXBpZGFwaS5jb20nLFxuICB9LFxufTtcbmNvbnN0IGNvdW50ID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCBnYW1lcyA9IGF3YWl0IGZldGNoKEFQSV9VUkwsIG9wdGlvbnMpO1xuICBjb25zdCBkYXRhID0gZ2FtZXMuc2xpY2UoMCwgMTUpLm1hcCgoaXRlbSkgPT4gaXRlbS5pZCk7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb3VudGVyJykuZm9yRWFjaCgoZWxlbSkgPT4ge1xuICAgIGVsZW0uaW5uZXJIVE1MID0gYCR7ZGF0YS5sZW5ndGh9YDtcbiAgfSk7XG59O1xuXG5jb3VudCgpO1xuXG5leHBvcnQgZGVmYXVsdCBjb3VudDtcbiIsImNvbnN0IG5hdmJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXZiYXInKTtcblxuY29uc3QgbW9iaWxlTWVudSA9ICgpID0+IHtcbiAgY29uc3QgbWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtZW51LWJ0bicpO1xuICBtZW51LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIG5hdmJhci5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcbiAgfSk7XG59O1xud2luZG93Lm9uc2Nyb2xsID0gKCkgPT4ge1xuICBuYXZiYXIuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBtb2JpbGVNZW51O1xuIiwiY29uc3Qgb3B0aW9ucyA9IHtcbiAgbWV0aG9kOiAnR0VUJyxcbiAgaGVhZGVyczoge1xuICAgICdYLVJhcGlkQVBJLUtleSc6ICcwMTIzMzkzZWVhbXNoMWJlZTEwYTNhMjIwMDU3cDFmYmVlN2pzbjdlZjkzOWZkNjJjYScsXG4gICAgJ1gtUmFwaWRBUEktSG9zdCc6ICdmcmVlLXRvLXBsYXktZ2FtZXMtZGF0YWJhc2UucC5yYXBpZGFwaS5jb20nLFxuICB9LFxufTtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWUge1xuICAvLyBJbml0aWFsaXphdGlvblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLkFQSV9VUkwgPVxuICAgICAgJ2h0dHBzOi8vZnJlZS10by1wbGF5LWdhbWVzLWRhdGFiYXNlLnAucmFwaWRhcGkuY29tL2FwaS9nYW1lcz9jYXRlZ29yeT1zaG9vdGVyJztcbiAgICB0aGlzLmdhbWVDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpO1xuICB9XG5cbiAgZ2V0R2FtZSA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHRoaXMuQVBJX1VSTCwgb3B0aW9ucyk7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKS5jYXRjaCgoZXJyb3IpID0+IG5ldyBFcnJvcihlcnJvcikpO1xuICAgIHRoaXMucG9wdXBHYW1lKGRhdGEpO1xuICB9O1xuXG4gIHBvcHVwR2FtZSA9IChkYXRhKSA9PiB7XG4gICAgY29uc3Qgc2VlR2FtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb21tZW50LWJ0bicpO1xuICAgIHNlZUdhbWUuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IG1vZGFsUG9wdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG4gICAgICAgIG1vZGFsUG9wdXAuY2xhc3NMaXN0LmFkZCA9ICdwb3B1cC1zZWN0aW9uJztcbiAgICAgICAgbW9kYWxQb3B1cC5pbm5lckhUTUwgPSBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJwb3B1cFwiPlxuICAgICAgPGJ1dHRvbiBpZD1cImNsb3NlLWJ0blwiPlxuICAgICAgICAgIDxpIGNsYXNzPVwiZmEtc29saWQgZmEteG1hcmtcIj48L2k+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImRpc3BsYXlcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkZXNjcmlwdGlvblwiPlxuICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgc3JjPVwiJHtkYXRhW2luZGV4XS50aHVtYm5haWx9XCJcbiAgICAgICAgICAgICAgICBhbHQ9XCJ0aHVtYm5haWxcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8aDMgY2xhc3M9XCJnYW1lLXRpdGxlXCI+JHtkYXRhW2luZGV4XS50aXRsZX08L2gzPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGlzcGxheS1kZXRhaWxzXCI+XG4gICAgICAgICAgICAgIDxoMz5nYW1lIGRldGFpbHM6PC9oMz5cbiAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICR7ZGF0YVtpbmRleF0uc2hvcnRfZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8bGk+PHN0cm9uZz5kYXRlIG9mIHJlbGVhc2U6PC9zdHJvbmc+ICR7ZGF0YVtpbmRleF0ucmVsZWFzZV9kYXRlfTwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPjxzdHJvbmc+Z2VucmU6PC9zdHJvbmc+ICR7ZGF0YVtpbmRleF0uZ2VucmV9PC9saT5cbiAgICAgICAgICAgICAgICA8bGk+PHN0cm9uZz5wbGF0Zm9ybTo8L3N0cm9uZz4ke2RhdGFbaW5kZXhdLnBsYXRmb3JtfTwvbGk+XG4gICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29tbWVudC1zZWN0aW9uXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29tbWVudC1zaG93IGNvbW1lbnRzLSR7ZGF0YVtpbmRleF0uaWR9XCI+XG4gICAgICAgICAgICAgIDxoMyBjbGFzcz1cImNvdW50ZXJcIj5cbiAgICAgICAgICAgICAgICBDb21tZW50cyg8c3BhbiBjbGFzcz1cInRvdGFsLWNvbW1lbnRzXCI+MDwvc3Bhbj4pXG4gICAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICAgIDx1bCBjbGFzcz1cImNvbW1lbnRzICR7ZGF0YVtpbmRleF0uaWR9XCIgIGlkPVwiJHtkYXRhW2luZGV4XS5pZH1cIj5cbiAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29tbWVudFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYWRkLWNvbW1lbnRcIj5cbiAgICAgICAgICAgICAgICA8aDM+QWRkIENvbW1lbnQ8L2gzPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGZvcm0gY2xhc3M9XCJmb3JtXCIgZGF0YS1nZXQtY29tbWVudD1cIiR7ZGF0YVtpbmRleF0uaWR9XCI+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICBuYW1lPVwibmFtZVwiXG4gICAgICAgICAgICAgICAgICBpZD1cIm5hbWVcIlxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJZb3VyIG5hbWVcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgICAgICAgICBuYW1lPVwiZGVzY3JpcHRpb25cIlxuICAgICAgICAgICAgICAgICAgaWQ9XCJkZXNjcmlwdGlvblwiXG4gICAgICAgICAgICAgICAgICBjb2xzPVwiMzBcIlxuICAgICAgICAgICAgICAgICAgcm93cz1cIjEwXCJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiWW91ciBpbnNpZ2h0XCJcbiAgICAgICAgICAgICAgICA+PC90ZXh0YXJlYT5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwiJHtkYXRhW2luZGV4XS5pZH1cIiB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJzdWJtaXQtYnRuXCI+XG4gICAgICAgICAgICAgICAgICBDb21tZW50XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgIGA7XG4gICAgICAgIHRoaXMuZ2FtZUNvbnRhaW5lci5hcHBlbmRDaGlsZChtb2RhbFBvcHVwKTtcbiAgICAgICAgdGhpcy5jbG9zZUdhbWUobW9kYWxQb3B1cCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcblxuICBjbG9zZUdhbWUgPSAobW9kYWxQb3B1cCkgPT4ge1xuICAgIGNvbnN0IGNsb3NlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI2Nsb3NlLWJ0bicpO1xuICAgIGNsb3NlQnRuLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIG1vZGFsUG9wdXAucmVtb3ZlKCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcbn1cbiIsImNvbnN0IHN3aXBlck1lID0gKCkgPT4ge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWYsIG5vLXVudXNlZC12YXJzXG4gIGNvbnN0IHN3aXBlciA9IG5ldyBTd2lwZXIoJy5ob21lLXNsaWRlcicsIHtcbiAgICBzcGFjZUJldHdlZW46IDIwLFxuICAgIGVmZmVjdDogJ2ZhZGUnLFxuICAgIGxvb3A6IHRydWUsXG4gICAgbmF2aWdhdGlvbjoge1xuICAgICAgbmV4dEVsOiAnLnN3aXBlci1idXR0b24tbmV4dCcsXG4gICAgICBwcmV2RWw6ICcuc3dpcGVyLWJ1dHRvbi1wcmV2JyxcbiAgICB9LFxuICAgIGNlbnRlcmVkU2xpZGVzOiB0cnVlLFxuICAgIGF1dG9wbGF5OiB7XG4gICAgICBkZWxheTogOTUwMCxcbiAgICAgIGRpc2FibGVPbkludGVyYWN0aW9uOiBmYWxzZSxcbiAgICB9LFxuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHN3aXBlck1lO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
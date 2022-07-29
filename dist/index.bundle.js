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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\r\n  --main-color: #ef7819;\r\n  --black: #141215;\r\n}\r\n\r\n* {\r\n  font-family: 'Poppins', sans-serif;\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n  outline: none;\r\n  border: none;\r\n  text-decoration: none;\r\n  text-transform: capitalize;\r\n  transition: all 0.2s linear;\r\n}\r\n\r\nhtml {\r\n  font-size: 62.5%;\r\n  overflow-x: hidden;\r\n  scroll-behavior: smooth;\r\n  scroll-padding-top: 7rem;\r\n}\r\n\r\nhtml::-webkit-scrollbar {\r\n  width: 1rem;\r\n}\r\n\r\nhtml::-webkit-scrollbar-track {\r\n  background: var(--black);\r\n}\r\n\r\nhtml::-webkit-scrollbar-thumb {\r\n  background: var(--main-color);\r\n}\r\n\r\nbody {\r\n  overflow-x: hidden;\r\n  background: var(--black);\r\n}\r\n\r\nsection {\r\n  padding: 2rem 6rem;\r\n}\r\n\r\n.header {\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  z-index: 1000;\r\n  padding: 2rem 9%;\r\n  background: rgba(0, 0, 0, 0.8);\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n}\r\n\r\n.header .logo {\r\n  font-size: 2.5rem;\r\n  color: #fff;\r\n  font-weight: bolder;\r\n}\r\n\r\n.header .logo i {\r\n  padding-right: 0.5rem;\r\n  color: var(--main-color);\r\n  animation: floating 2s linear infinite;\r\n}\r\n\r\n@keyframes floating {\r\n  0% {\r\n    transform: translateY(0);\r\n  }\r\n\r\n  100% {\r\n    transform: translateY(0);\r\n  }\r\n\r\n  50% {\r\n    transform: translateY(-1rem);\r\n  }\r\n}\r\n\r\n.header .navbar a {\r\n  font-size: 1.7rem;\r\n  color: #fff;\r\n  margin: 0 1rem;\r\n}\r\n\r\n.footer .credit span a {\r\n  color: var(--main-color);\r\n  font-style: italic;\r\n}\r\n\r\n.header .navbar a:hover {\r\n  color: var(--main-color);\r\n}\r\n\r\n.menu {\r\n  display: none;\r\n}\r\n\r\n.header .menu {\r\n  font-size: 2.5rem;\r\n  color: #fff;\r\n  margin-left: 2rem;\r\n  cursor: pointer;\r\n}\r\n\r\n.header .menu:hover {\r\n  color: var(--main-color);\r\n}\r\n\r\n.home {\r\n  padding: 0;\r\n}\r\n\r\n.home .home-slider .box {\r\n  min-height: 100vh;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  padding: 2rem;\r\n  background-size: cover !important;\r\n  background-position: center !important;\r\n}\r\n\r\n.home .home-slider .swiper-button-next {\r\n  right: 4rem;\r\n  color: #fff;\r\n  opacity: 0;\r\n}\r\n\r\n.home .home-slider .swiper-button-prev {\r\n  left: 4rem;\r\n  color: #fff;\r\n  opacity: 0;\r\n}\r\n\r\n.home .home-slider .swiper-button-next:hover,\r\n.home .home-slider .swiper-button-prev:hover {\r\n  color: var(--main-color);\r\n}\r\n\r\n.home .home-slider:hover .swiper-button-next,\r\n.home .home-slider:hover .swiper-button-prev {\r\n  opacity: 1;\r\n}\r\n\r\n.card-section {\r\n  display: grid;\r\n  grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));\r\n  grid-gap: 1rem;\r\n  margin-top: 2rem;\r\n}\r\n\r\n.card-section .card {\r\n  background: #222;\r\n  border-radius: 0.5rem;\r\n  padding: 2rem;\r\n  color: #fff;\r\n}\r\n.card-section .card img {\r\n  width: 100%;\r\n}\r\n\r\n.card-section .content .name-div {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  padding: 10px;\r\n}\r\n\r\n.card-section .content .name-div h2 {\r\n  font-size: 2rem;\r\n  font-weight: 600;\r\n  color: var(--main-color);\r\n}\r\n\r\n.card-section .content .likes {\r\n  font-size: 2rem;\r\n  font-weight: 900;\r\n  color: var(--main-color);\r\n  cursor: pointer;\r\n}\r\n\r\n.card-section .description {\r\n  text-align: center;\r\n  padding: 1rem 1.5rem;\r\n  font-size: 1.7rem;\r\n  margin: 0 auto;\r\n  margin-bottom: 2rem;\r\n}\r\n\r\n.card-section .card .comment-btn {\r\n  padding: 10px;\r\n  font-size: 1.7rem;\r\n  border-radius: 5px;\r\n  border: none;\r\n  background: transparent;\r\n  box-shadow: 0 10px 15px rgb(55 148 143);\r\n  color: #fff;\r\n  font-weight: 900;\r\n  cursor: pointer;\r\n  margin: 0 auto;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n.card-section .card .comment-btn:hover {\r\n  background: var(--main-color);\r\n  color: #fff;\r\n}\r\n\r\n.footer .credit {\r\n  padding: 1rem;\r\n  padding-top: 2rem;\r\n  margin-top: 2rem;\r\n  border-top: 0.1rem solid #fff3;\r\n  font-size: 2rem;\r\n  color: #aaa;\r\n  text-align: center;\r\n}\r\n\r\n/* popup section */\r\n\r\n.popup-section {\r\n  background: #222;\r\n}\r\n\r\n.popup {\r\n  width: 60vw;\r\n  height: 90vh;\r\n  padding: 30px 50px;\r\n  background-color: #2e3130;\r\n  position: fixed;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  justify-content: space-between;\r\n  gap: 20px;\r\n  border-radius: 21px;\r\n  overflow-y: scroll;\r\n  color: #d2d1d3;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n.popup #close-btn {\r\n  background: transparent;\r\n  border: none;\r\n  align-self: flex-end;\r\n  font-size: 4rem;\r\n  color: #d2d1d3;\r\n  cursor: pointer;\r\n}\r\n\r\n.popup .display {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n.popup .display .description {\r\n  width: 90%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n.popup .display .description img {\r\n  width: 90%;\r\n  border-radius: 20px;\r\n}\r\n\r\n.popup .display .description .game-title {\r\n  font-size: 2.8rem;\r\n}\r\n\r\n.popup .display .display-details {\r\n  width: 80%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n.popup .display .display-details h3 {\r\n  font-size: 2rem;\r\n}\r\n\r\n.popup .display .display-details ul > li {\r\n  list-style: none;\r\n  font-size: 1.5rem;\r\n  padding-bottom: 1rem;\r\n  line-height: 1.2;\r\n}\r\n\r\n.popup .comment-section {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n.popup .comment-section .comment-show {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n.popup .comment-section .comment-show h3 {\r\n  font-size: 2rem;\r\n  font-weight: 900;\r\n  color: #d2d1d3;\r\n}\r\n\r\n.popup .comment-section .comment-show ul {\r\n  list-style: none;\r\n  font-style: italic;\r\n  font-size: 1.2rem;\r\n}\r\n\r\n.popup .comment-section .comment {\r\n  width: 70%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n.popup .comment-section .comment h3 {\r\n  font-size: 1.5rem;\r\n  margin-top: 5rem;\r\n}\r\n\r\n.popup .comment-section .comment form {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 10px;\r\n  width: 100%;\r\n}\r\n\r\n.popup .comment-section .comment form input[type='text'],\r\n.popup .comment-section .comment form textarea {\r\n  width: 100%;\r\n  font-size: 1.2rem;\r\n  padding: 10px;\r\n  border-radius: 10px;\r\n  border: none;\r\n}\r\n\r\n.popup .comment-section .comment form textarea {\r\n  height: 15rem;\r\n}\r\n\r\n.popup .comment-section .comment form .submit-btn {\r\n  align-self: flex-start;\r\n  font-size: 1.3rem;\r\n  font-weight: 900;\r\n  border: none;\r\n  padding: 10px;\r\n  border-radius: 0.5rem;\r\n  cursor: pointer;\r\n}\r\n\r\n/* media queries  */\r\n\r\n@media (max-width: 991px) {\r\n  html {\r\n    font-size: 55%;\r\n  }\r\n\r\n  section {\r\n    padding: 2rem;\r\n  }\r\n}\r\n\r\n@media (max-width: 768px) {\r\n  .menu {\r\n    display: inline-block;\r\n  }\r\n\r\n  .header .navbar {\r\n    position: absolute;\r\n    top: 99%;\r\n    left: 0;\r\n    right: 0;\r\n    background: rgba(0, 0, 0, 0.8);\r\n    clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);\r\n    min-height: 70vh;\r\n  }\r\n\r\n  .header .navbar.active {\r\n    clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);\r\n  }\r\n\r\n  .header .navbar a {\r\n    display: block;\r\n    margin: 2rem;\r\n    padding: 1rem;\r\n    font-size: 2.5rem;\r\n    text-align: center;\r\n  }\r\n\r\n  .card-section {\r\n    grid-template-columns: 2fr;\r\n  }\r\n\r\n  .popup {\r\n    width: 90vw;\r\n  }\r\n}\r\n\r\n@media (max-width: 450px) {\r\n  html {\r\n    font-size: 50%;\r\n  }\r\n\r\n  .home .home-slider .swiper-button-next,\r\n  .home .home-slider .swiper-button-prev {\r\n    display: none;\r\n  }\r\n\r\n  .card-section {\r\n    grid-template-columns: 1fr;\r\n  }\r\n\r\n  .card-section .card {\r\n    padding: 0.3rem;\r\n  }\r\n\r\n  .card-section .card .comment-btn {\r\n    font-size: 1.5rem;\r\n    margin-bottom: 1rem;\r\n  }\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;300;400;500;600&display=swap');\r\n\r\n:root {\r\n  --main-color: #ef7819;\r\n  --black: #141215;\r\n}\r\n\r\n* {\r\n  font-family: 'Poppins', sans-serif;\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n  outline: none;\r\n  border: none;\r\n  text-decoration: none;\r\n  text-transform: capitalize;\r\n  transition: all 0.2s linear;\r\n}\r\n\r\nhtml {\r\n  font-size: 62.5%;\r\n  overflow-x: hidden;\r\n  scroll-behavior: smooth;\r\n  scroll-padding-top: 7rem;\r\n}\r\n\r\nhtml::-webkit-scrollbar {\r\n  width: 1rem;\r\n}\r\n\r\nhtml::-webkit-scrollbar-track {\r\n  background: var(--black);\r\n}\r\n\r\nhtml::-webkit-scrollbar-thumb {\r\n  background: var(--main-color);\r\n}\r\n\r\nbody {\r\n  overflow-x: hidden;\r\n  background: var(--black);\r\n}\r\n\r\nsection {\r\n  padding: 2rem 6rem;\r\n}\r\n\r\n.header {\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  z-index: 1000;\r\n  padding: 2rem 9%;\r\n  background: rgba(0, 0, 0, 0.8);\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n}\r\n\r\n.header .logo {\r\n  font-size: 2.5rem;\r\n  color: #fff;\r\n  font-weight: bolder;\r\n}\r\n\r\n.header .logo i {\r\n  padding-right: 0.5rem;\r\n  color: var(--main-color);\r\n  animation: floating 2s linear infinite;\r\n}\r\n\r\n@keyframes floating {\r\n  0% {\r\n    transform: translateY(0);\r\n  }\r\n\r\n  100% {\r\n    transform: translateY(0);\r\n  }\r\n\r\n  50% {\r\n    transform: translateY(-1rem);\r\n  }\r\n}\r\n\r\n.header .navbar a {\r\n  font-size: 1.7rem;\r\n  color: #fff;\r\n  margin: 0 1rem;\r\n}\r\n\r\n.footer .credit span a {\r\n  color: var(--main-color);\r\n  font-style: italic;\r\n}\r\n\r\n.header .navbar a:hover {\r\n  color: var(--main-color);\r\n}\r\n\r\n.menu {\r\n  display: none;\r\n}\r\n\r\n.header .menu {\r\n  font-size: 2.5rem;\r\n  color: #fff;\r\n  margin-left: 2rem;\r\n  cursor: pointer;\r\n}\r\n\r\n.header .menu:hover {\r\n  color: var(--main-color);\r\n}\r\n\r\n.home {\r\n  padding: 0;\r\n}\r\n\r\n.home .home-slider .box {\r\n  min-height: 100vh;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  padding: 2rem;\r\n  background-size: cover !important;\r\n  background-position: center !important;\r\n}\r\n\r\n.home .home-slider .swiper-button-next {\r\n  right: 4rem;\r\n  color: #fff;\r\n  opacity: 0;\r\n}\r\n\r\n.home .home-slider .swiper-button-prev {\r\n  left: 4rem;\r\n  color: #fff;\r\n  opacity: 0;\r\n}\r\n\r\n.home .home-slider .swiper-button-next:hover,\r\n.home .home-slider .swiper-button-prev:hover {\r\n  color: var(--main-color);\r\n}\r\n\r\n.home .home-slider:hover .swiper-button-next,\r\n.home .home-slider:hover .swiper-button-prev {\r\n  opacity: 1;\r\n}\r\n\r\n.card-section {\r\n  display: grid;\r\n  grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));\r\n  grid-gap: 1rem;\r\n  margin-top: 2rem;\r\n}\r\n\r\n.card-section .card {\r\n  background: #222;\r\n  border-radius: 0.5rem;\r\n  padding: 2rem;\r\n  color: #fff;\r\n}\r\n.card-section .card img {\r\n  width: 100%;\r\n}\r\n\r\n.card-section .content .name-div {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  padding: 10px;\r\n}\r\n\r\n.card-section .content .name-div h2 {\r\n  font-size: 2rem;\r\n  font-weight: 600;\r\n  color: var(--main-color);\r\n}\r\n\r\n.card-section .content .likes {\r\n  font-size: 2rem;\r\n  font-weight: 900;\r\n  color: var(--main-color);\r\n  cursor: pointer;\r\n}\r\n\r\n.card-section .description {\r\n  text-align: center;\r\n  padding: 1rem 1.5rem;\r\n  font-size: 1.7rem;\r\n  margin: 0 auto;\r\n  margin-bottom: 2rem;\r\n}\r\n\r\n.card-section .card .comment-btn {\r\n  padding: 10px;\r\n  font-size: 1.7rem;\r\n  border-radius: 5px;\r\n  border: none;\r\n  background: transparent;\r\n  box-shadow: 0 10px 15px rgb(55 148 143);\r\n  color: #fff;\r\n  font-weight: 900;\r\n  cursor: pointer;\r\n  margin: 0 auto;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n.card-section .card .comment-btn:hover {\r\n  background: var(--main-color);\r\n  color: #fff;\r\n}\r\n\r\n.footer .credit {\r\n  padding: 1rem;\r\n  padding-top: 2rem;\r\n  margin-top: 2rem;\r\n  border-top: 0.1rem solid #fff3;\r\n  font-size: 2rem;\r\n  color: #aaa;\r\n  text-align: center;\r\n}\r\n\r\n/* popup section */\r\n\r\n.popup-section {\r\n  background: #222;\r\n}\r\n\r\n.popup {\r\n  width: 60vw;\r\n  height: 90vh;\r\n  padding: 30px 50px;\r\n  background-color: #2e3130;\r\n  position: fixed;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  justify-content: space-between;\r\n  gap: 20px;\r\n  border-radius: 21px;\r\n  overflow-y: scroll;\r\n  color: #d2d1d3;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n.popup #close-btn {\r\n  background: transparent;\r\n  border: none;\r\n  align-self: flex-end;\r\n  font-size: 4rem;\r\n  color: #d2d1d3;\r\n  cursor: pointer;\r\n}\r\n\r\n.popup .display {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n.popup .display .description {\r\n  width: 90%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n.popup .display .description img {\r\n  width: 90%;\r\n  border-radius: 20px;\r\n}\r\n\r\n.popup .display .description .game-title {\r\n  font-size: 2.8rem;\r\n}\r\n\r\n.popup .display .display-details {\r\n  width: 80%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n.popup .display .display-details h3 {\r\n  font-size: 2rem;\r\n}\r\n\r\n.popup .display .display-details ul > li {\r\n  list-style: none;\r\n  font-size: 1.5rem;\r\n  padding-bottom: 1rem;\r\n  line-height: 1.2;\r\n}\r\n\r\n.popup .comment-section {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n.popup .comment-section .comment-show {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n.popup .comment-section .comment-show h3 {\r\n  font-size: 2rem;\r\n  font-weight: 900;\r\n  color: #d2d1d3;\r\n}\r\n\r\n.popup .comment-section .comment-show ul {\r\n  list-style: none;\r\n  font-style: italic;\r\n  font-size: 1.2rem;\r\n}\r\n\r\n.popup .comment-section .comment {\r\n  width: 70%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n.popup .comment-section .comment h3 {\r\n  font-size: 1.5rem;\r\n  margin-top: 5rem;\r\n}\r\n\r\n.popup .comment-section .comment form {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 10px;\r\n  width: 100%;\r\n}\r\n\r\n.popup .comment-section .comment form input[type='text'],\r\n.popup .comment-section .comment form textarea {\r\n  width: 100%;\r\n  font-size: 1.2rem;\r\n  padding: 10px;\r\n  border-radius: 10px;\r\n  border: none;\r\n}\r\n\r\n.popup .comment-section .comment form textarea {\r\n  height: 15rem;\r\n}\r\n\r\n.popup .comment-section .comment form .submit-btn {\r\n  align-self: flex-start;\r\n  font-size: 1.3rem;\r\n  font-weight: 900;\r\n  border: none;\r\n  padding: 10px;\r\n  border-radius: 0.5rem;\r\n  cursor: pointer;\r\n}\r\n\r\n/* media queries  */\r\n\r\n@media (max-width: 991px) {\r\n  html {\r\n    font-size: 55%;\r\n  }\r\n\r\n  section {\r\n    padding: 2rem;\r\n  }\r\n}\r\n\r\n@media (max-width: 768px) {\r\n  .menu {\r\n    display: inline-block;\r\n  }\r\n\r\n  .header .navbar {\r\n    position: absolute;\r\n    top: 99%;\r\n    left: 0;\r\n    right: 0;\r\n    background: rgba(0, 0, 0, 0.8);\r\n    clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);\r\n    min-height: 70vh;\r\n  }\r\n\r\n  .header .navbar.active {\r\n    clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);\r\n  }\r\n\r\n  .header .navbar a {\r\n    display: block;\r\n    margin: 2rem;\r\n    padding: 1rem;\r\n    font-size: 2.5rem;\r\n    text-align: center;\r\n  }\r\n\r\n  .card-section {\r\n    grid-template-columns: 2fr;\r\n  }\r\n\r\n  .popup {\r\n    width: 90vw;\r\n  }\r\n}\r\n\r\n@media (max-width: 450px) {\r\n  html {\r\n    font-size: 50%;\r\n  }\r\n\r\n  .home .home-slider .swiper-button-next,\r\n  .home .home-slider .swiper-button-prev {\r\n    display: none;\r\n  }\r\n\r\n  .card-section {\r\n    grid-template-columns: 1fr;\r\n  }\r\n\r\n  .card-section .card {\r\n    padding: 0.3rem;\r\n  }\r\n\r\n  .card-section .card .comment-btn {\r\n    font-size: 1.5rem;\r\n    margin-bottom: 1rem;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
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
const API_URL = 'https://free-to-play-games-database.p.rapidapi.com/api/games?category=shooter';
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
const API_URL = 'https://free-to-play-games-database.p.rapidapi.com/api/games?category=shooter';
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
    this.API_URL = 'https://free-to-play-games-database.p.rapidapi.com/api/games?category=shooter';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE1BQU0sTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxNQUFNLE1BQU0sWUFBWSxPQUFPLE1BQU0sVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxLQUFLLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sYUFBYSxNQUFNLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZ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dUJBQXVCLHNCQUFzQjtBQUM3QztBQUNBO0FBQ0EsdUNBQXVDLGtCQUFrQjtBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCO0FBQ0Esd0RBQXdELHlCQUF5QjtBQUNqRiw4Q0FBOEMsa0JBQWtCO0FBQ2hFLGdEQUFnRCxxQkFBcUI7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnREFBZ0QsZUFBZTtBQUMvRDtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MsZUFBZSxTQUFTLGVBQWU7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQsZUFBZTtBQUNwRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixlQUFlO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDdEdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7O0FBRUEsaUVBQWUsUUFBUSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJlZS10by1wbGF5LWdhbWVzLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9mcmVlLXRvLXBsYXktZ2FtZXMvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2ZyZWUtdG8tcGxheS1nYW1lcy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2ZyZWUtdG8tcGxheS1nYW1lcy8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9mcmVlLXRvLXBsYXktZ2FtZXMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vZnJlZS10by1wbGF5LWdhbWVzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9mcmVlLXRvLXBsYXktZ2FtZXMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vZnJlZS10by1wbGF5LWdhbWVzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2ZyZWUtdG8tcGxheS1nYW1lcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2ZyZWUtdG8tcGxheS1nYW1lcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2ZyZWUtdG8tcGxheS1nYW1lcy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9mcmVlLXRvLXBsYXktZ2FtZXMvLi9zcmMvbW9kdWxlcy9hZGRDb21tZW50LmpzIiwid2VicGFjazovL2ZyZWUtdG8tcGxheS1nYW1lcy8uL3NyYy9tb2R1bGVzL2FkZExpa2UuanMiLCJ3ZWJwYWNrOi8vZnJlZS10by1wbGF5LWdhbWVzLy4vc3JjL21vZHVsZXMvY291bnRDb21tZW50LmpzIiwid2VicGFjazovL2ZyZWUtdG8tcGxheS1nYW1lcy8uL3NyYy9tb2R1bGVzL2ZldGNoRGF0YS5qcyIsIndlYnBhY2s6Ly9mcmVlLXRvLXBsYXktZ2FtZXMvLi9zcmMvbW9kdWxlcy9pdGVtQ291bnRlci5qcyIsIndlYnBhY2s6Ly9mcmVlLXRvLXBsYXktZ2FtZXMvLi9zcmMvbW9kdWxlcy9tb2JpbGUuanMiLCJ3ZWJwYWNrOi8vZnJlZS10by1wbGF5LWdhbWVzLy4vc3JjL21vZHVsZXMvcG9wVXAuanMiLCJ3ZWJwYWNrOi8vZnJlZS10by1wbGF5LWdhbWVzLy4vc3JjL21vZHVsZXMvc2xpZGVzaG93LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UG9wcGluczp3Z2h0QDEwMDszMDA7NDAwOzUwMDs2MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcclxcbiAgLS1tYWluLWNvbG9yOiAjZWY3ODE5O1xcclxcbiAgLS1ibGFjazogIzE0MTIxNTtcXHJcXG59XFxyXFxuXFxyXFxuKiB7XFxyXFxuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBsaW5lYXI7XFxyXFxufVxcclxcblxcclxcbmh0bWwge1xcclxcbiAgZm9udC1zaXplOiA2Mi41JTtcXHJcXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcXHJcXG4gIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xcclxcbiAgc2Nyb2xsLXBhZGRpbmctdG9wOiA3cmVtO1xcclxcbn1cXHJcXG5cXHJcXG5odG1sOjotd2Via2l0LXNjcm9sbGJhciB7XFxyXFxuICB3aWR0aDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuaHRtbDo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xcclxcbiAgYmFja2dyb3VuZDogdmFyKC0tYmxhY2spO1xcclxcbn1cXHJcXG5cXHJcXG5odG1sOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxyXFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1tYWluLWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBvdmVyZmxvdy14OiBoaWRkZW47XFxyXFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1ibGFjayk7XFxyXFxufVxcclxcblxcclxcbnNlY3Rpb24ge1xcclxcbiAgcGFkZGluZzogMnJlbSA2cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyIHtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICByaWdodDogMDtcXHJcXG4gIHotaW5kZXg6IDEwMDA7XFxyXFxuICBwYWRkaW5nOiAycmVtIDklO1xcclxcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjgpO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXIgLmxvZ28ge1xcclxcbiAgZm9udC1zaXplOiAyLjVyZW07XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXIgLmxvZ28gaSB7XFxyXFxuICBwYWRkaW5nLXJpZ2h0OiAwLjVyZW07XFxyXFxuICBjb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XFxyXFxuICBhbmltYXRpb246IGZsb2F0aW5nIDJzIGxpbmVhciBpbmZpbml0ZTtcXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyBmbG9hdGluZyB7XFxyXFxuICAwJSB7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIDEwMCUge1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XFxyXFxuICB9XFxyXFxuXFxyXFxuICA1MCUge1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFyZW0pO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyIC5uYXZiYXIgYSB7XFxyXFxuICBmb250LXNpemU6IDEuN3JlbTtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgbWFyZ2luOiAwIDFyZW07XFxyXFxufVxcclxcblxcclxcbi5mb290ZXIgLmNyZWRpdCBzcGFuIGEge1xcclxcbiAgY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xcclxcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyIC5uYXZiYXIgYTpob3ZlciB7XFxyXFxuICBjb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbi5tZW51IHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXIgLm1lbnUge1xcclxcbiAgZm9udC1zaXplOiAyLjVyZW07XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAycmVtO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyIC5tZW51OmhvdmVyIHtcXHJcXG4gIGNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuLmhvbWUge1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuXFxyXFxuLmhvbWUgLmhvbWUtc2xpZGVyIC5ib3gge1xcclxcbiAgbWluLWhlaWdodDogMTAwdmg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgcGFkZGluZzogMnJlbTtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcXHJcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciAhaW1wb3J0YW50O1xcclxcbn1cXHJcXG5cXHJcXG4uaG9tZSAuaG9tZS1zbGlkZXIgLnN3aXBlci1idXR0b24tbmV4dCB7XFxyXFxuICByaWdodDogNHJlbTtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgb3BhY2l0eTogMDtcXHJcXG59XFxyXFxuXFxyXFxuLmhvbWUgLmhvbWUtc2xpZGVyIC5zd2lwZXItYnV0dG9uLXByZXYge1xcclxcbiAgbGVmdDogNHJlbTtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgb3BhY2l0eTogMDtcXHJcXG59XFxyXFxuXFxyXFxuLmhvbWUgLmhvbWUtc2xpZGVyIC5zd2lwZXItYnV0dG9uLW5leHQ6aG92ZXIsXFxyXFxuLmhvbWUgLmhvbWUtc2xpZGVyIC5zd2lwZXItYnV0dG9uLXByZXY6aG92ZXIge1xcclxcbiAgY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4uaG9tZSAuaG9tZS1zbGlkZXI6aG92ZXIgLnN3aXBlci1idXR0b24tbmV4dCxcXHJcXG4uaG9tZSAuaG9tZS1zbGlkZXI6aG92ZXIgLnN3aXBlci1idXR0b24tcHJldiB7XFxyXFxuICBvcGFjaXR5OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZC1zZWN0aW9uIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDMwcmVtLCAxZnIpKTtcXHJcXG4gIGdyaWQtZ2FwOiAxcmVtO1xcclxcbiAgbWFyZ2luLXRvcDogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmQtc2VjdGlvbiAuY2FyZCB7XFxyXFxuICBiYWNrZ3JvdW5kOiAjMjIyO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcclxcbiAgcGFkZGluZzogMnJlbTtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbn1cXHJcXG4uY2FyZC1zZWN0aW9uIC5jYXJkIGltZyB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmQtc2VjdGlvbiAuY29udGVudCAubmFtZS1kaXYge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZC1zZWN0aW9uIC5jb250ZW50IC5uYW1lLWRpdiBoMiB7XFxyXFxuICBmb250LXNpemU6IDJyZW07XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZC1zZWN0aW9uIC5jb250ZW50IC5saWtlcyB7XFxyXFxuICBmb250LXNpemU6IDJyZW07XFxyXFxuICBmb250LXdlaWdodDogOTAwO1xcclxcbiAgY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZC1zZWN0aW9uIC5kZXNjcmlwdGlvbiB7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nOiAxcmVtIDEuNXJlbTtcXHJcXG4gIGZvbnQtc2l6ZTogMS43cmVtO1xcclxcbiAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICBtYXJnaW4tYm90dG9tOiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZC1zZWN0aW9uIC5jYXJkIC5jb21tZW50LWJ0biB7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgZm9udC1zaXplOiAxLjdyZW07XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXHJcXG4gIGJveC1zaGFkb3c6IDAgMTBweCAxNXB4IHJnYig1NSAxNDggMTQzKTtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIG1hcmdpbjogMCBhdXRvO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmQtc2VjdGlvbiAuY2FyZCAuY29tbWVudC1idG46aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZDogdmFyKC0tbWFpbi1jb2xvcik7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG59XFxyXFxuXFxyXFxuLmZvb3RlciAuY3JlZGl0IHtcXHJcXG4gIHBhZGRpbmc6IDFyZW07XFxyXFxuICBwYWRkaW5nLXRvcDogMnJlbTtcXHJcXG4gIG1hcmdpbi10b3A6IDJyZW07XFxyXFxuICBib3JkZXItdG9wOiAwLjFyZW0gc29saWQgI2ZmZjM7XFxyXFxuICBmb250LXNpemU6IDJyZW07XFxyXFxuICBjb2xvcjogI2FhYTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLyogcG9wdXAgc2VjdGlvbiAqL1xcclxcblxcclxcbi5wb3B1cC1zZWN0aW9uIHtcXHJcXG4gIGJhY2tncm91bmQ6ICMyMjI7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cCB7XFxyXFxuICB3aWR0aDogNjB2dztcXHJcXG4gIGhlaWdodDogOTB2aDtcXHJcXG4gIHBhZGRpbmc6IDMwcHggNTBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyZTMxMzA7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICB0b3A6IDUwJTtcXHJcXG4gIGxlZnQ6IDUwJTtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgZ2FwOiAyMHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMjFweDtcXHJcXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcXHJcXG4gIGNvbG9yOiAjZDJkMWQzO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXAgI2Nsb3NlLWJ0biB7XFxyXFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcclxcbiAgZm9udC1zaXplOiA0cmVtO1xcclxcbiAgY29sb3I6ICNkMmQxZDM7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cCAuZGlzcGxheSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cCAuZGlzcGxheSAuZGVzY3JpcHRpb24ge1xcclxcbiAgd2lkdGg6IDkwJTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwIC5kaXNwbGF5IC5kZXNjcmlwdGlvbiBpbWcge1xcclxcbiAgd2lkdGg6IDkwJTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cCAuZGlzcGxheSAuZGVzY3JpcHRpb24gLmdhbWUtdGl0bGUge1xcclxcbiAgZm9udC1zaXplOiAyLjhyZW07XFxyXFxufVxcclxcblxcclxcbi5wb3B1cCAuZGlzcGxheSAuZGlzcGxheS1kZXRhaWxzIHtcXHJcXG4gIHdpZHRoOiA4MCU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cCAuZGlzcGxheSAuZGlzcGxheS1kZXRhaWxzIGgzIHtcXHJcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwIC5kaXNwbGF5IC5kaXNwbGF5LWRldGFpbHMgdWwgPiBsaSB7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxLjI7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cCAuY29tbWVudC1zZWN0aW9uIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwIC5jb21tZW50LXNlY3Rpb24gLmNvbW1lbnQtc2hvdyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cCAuY29tbWVudC1zZWN0aW9uIC5jb21tZW50LXNob3cgaDMge1xcclxcbiAgZm9udC1zaXplOiAycmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXHJcXG4gIGNvbG9yOiAjZDJkMWQzO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXAgLmNvbW1lbnQtc2VjdGlvbiAuY29tbWVudC1zaG93IHVsIHtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxyXFxuICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwIC5jb21tZW50LXNlY3Rpb24gLmNvbW1lbnQge1xcclxcbiAgd2lkdGg6IDcwJTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwIC5jb21tZW50LXNlY3Rpb24gLmNvbW1lbnQgaDMge1xcclxcbiAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICBtYXJnaW4tdG9wOiA1cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXAgLmNvbW1lbnQtc2VjdGlvbiAuY29tbWVudCBmb3JtIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZ2FwOiAxMHB4O1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cCAuY29tbWVudC1zZWN0aW9uIC5jb21tZW50IGZvcm0gaW5wdXRbdHlwZT0ndGV4dCddLFxcclxcbi5wb3B1cCAuY29tbWVudC1zZWN0aW9uIC5jb21tZW50IGZvcm0gdGV4dGFyZWEge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXAgLmNvbW1lbnQtc2VjdGlvbiAuY29tbWVudCBmb3JtIHRleHRhcmVhIHtcXHJcXG4gIGhlaWdodDogMTVyZW07XFxyXFxufVxcclxcblxcclxcbi5wb3B1cCAuY29tbWVudC1zZWN0aW9uIC5jb21tZW50IGZvcm0gLnN1Ym1pdC1idG4ge1xcclxcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXHJcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi8qIG1lZGlhIHF1ZXJpZXMgICovXFxyXFxuXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MXB4KSB7XFxyXFxuICBodG1sIHtcXHJcXG4gICAgZm9udC1zaXplOiA1NSU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICBzZWN0aW9uIHtcXHJcXG4gICAgcGFkZGluZzogMnJlbTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XFxyXFxuICAubWVudSB7XFxyXFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5oZWFkZXIgLm5hdmJhciB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdG9wOiA5OSU7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICAgIHJpZ2h0OiAwO1xcclxcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuOCk7XFxyXFxuICAgIGNsaXAtcGF0aDogcG9seWdvbigwIDAsIDEwMCUgMCwgMTAwJSAwLCAwIDApO1xcclxcbiAgICBtaW4taGVpZ2h0OiA3MHZoO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmhlYWRlciAubmF2YmFyLmFjdGl2ZSB7XFxyXFxuICAgIGNsaXAtcGF0aDogcG9seWdvbigwIDAsIDEwMCUgMCwgMTAwJSAxMDAlLCAwJSAxMDAlKTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5oZWFkZXIgLm5hdmJhciBhIHtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIG1hcmdpbjogMnJlbTtcXHJcXG4gICAgcGFkZGluZzogMXJlbTtcXHJcXG4gICAgZm9udC1zaXplOiAyLjVyZW07XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jYXJkLXNlY3Rpb24ge1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmcjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5wb3B1cCB7XFxyXFxuICAgIHdpZHRoOiA5MHZ3O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1heC13aWR0aDogNDUwcHgpIHtcXHJcXG4gIGh0bWwge1xcclxcbiAgICBmb250LXNpemU6IDUwJTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5ob21lIC5ob21lLXNsaWRlciAuc3dpcGVyLWJ1dHRvbi1uZXh0LFxcclxcbiAgLmhvbWUgLmhvbWUtc2xpZGVyIC5zd2lwZXItYnV0dG9uLXByZXYge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmNhcmQtc2VjdGlvbiB7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmNhcmQtc2VjdGlvbiAuY2FyZCB7XFxyXFxuICAgIHBhZGRpbmc6IDAuM3JlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jYXJkLXNlY3Rpb24gLmNhcmQgLmNvbW1lbnQtYnRuIHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XFxyXFxuICB9XFxyXFxufVxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7RUFDRSxxQkFBcUI7RUFDckIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usa0NBQWtDO0VBQ2xDLFNBQVM7RUFDVCxVQUFVO0VBQ1Ysc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYixZQUFZO0VBQ1oscUJBQXFCO0VBQ3JCLDBCQUEwQjtFQUMxQiwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2Qix3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSx3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLE1BQU07RUFDTixPQUFPO0VBQ1AsUUFBUTtFQUNSLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsOEJBQThCO0VBQzlCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsd0JBQXdCO0VBQ3hCLHNDQUFzQztBQUN4Qzs7QUFFQTtFQUNFO0lBQ0Usd0JBQXdCO0VBQzFCOztFQUVBO0lBQ0Usd0JBQXdCO0VBQzFCOztFQUVBO0lBQ0UsNEJBQTRCO0VBQzlCO0FBQ0Y7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsV0FBVztFQUNYLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixhQUFhO0VBQ2IsaUNBQWlDO0VBQ2pDLHNDQUFzQztBQUN4Qzs7QUFFQTtFQUNFLFdBQVc7RUFDWCxXQUFXO0VBQ1gsVUFBVTtBQUNaOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFdBQVc7RUFDWCxVQUFVO0FBQ1o7O0FBRUE7O0VBRUUsd0JBQXdCO0FBQzFCOztBQUVBOztFQUVFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGFBQWE7RUFDYiwyREFBMkQ7RUFDM0QsY0FBYztFQUNkLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixxQkFBcUI7RUFDckIsYUFBYTtFQUNiLFdBQVc7QUFDYjtBQUNBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFDOUIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQix3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLHdCQUF3QjtFQUN4QixlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLG9CQUFvQjtFQUNwQixpQkFBaUI7RUFDakIsY0FBYztFQUNkLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWix1QkFBdUI7RUFDdkIsdUNBQXVDO0VBQ3ZDLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGNBQWM7RUFDZCxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLDZCQUE2QjtFQUM3QixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQiw4QkFBOEI7RUFDOUIsZUFBZTtFQUNmLFdBQVc7RUFDWCxrQkFBa0I7QUFDcEI7O0FBRUEsa0JBQWtCOztBQUVsQjtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixlQUFlO0VBQ2YsUUFBUTtFQUNSLFNBQVM7RUFDVCxnQ0FBZ0M7RUFDaEMsOEJBQThCO0VBQzlCLFNBQVM7RUFDVCxtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osb0JBQW9CO0VBQ3BCLGVBQWU7RUFDZixjQUFjO0VBQ2QsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixTQUFTO0VBQ1QsV0FBVztBQUNiOztBQUVBOztFQUVFLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osYUFBYTtFQUNiLHFCQUFxQjtFQUNyQixlQUFlO0FBQ2pCOztBQUVBLG1CQUFtQjs7QUFFbkI7RUFDRTtJQUNFLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxhQUFhO0VBQ2Y7QUFDRjs7QUFFQTtFQUNFO0lBQ0UscUJBQXFCO0VBQ3ZCOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixPQUFPO0lBQ1AsUUFBUTtJQUNSLDhCQUE4QjtJQUM5Qiw0Q0FBNEM7SUFDNUMsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsbURBQW1EO0VBQ3JEOztFQUVBO0lBQ0UsY0FBYztJQUNkLFlBQVk7SUFDWixhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLDBCQUEwQjtFQUM1Qjs7RUFFQTtJQUNFLFdBQVc7RUFDYjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxjQUFjO0VBQ2hCOztFQUVBOztJQUVFLGFBQWE7RUFDZjs7RUFFQTtJQUNFLDBCQUEwQjtFQUM1Qjs7RUFFQTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxpQkFBaUI7SUFDakIsbUJBQW1CO0VBQ3JCO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UG9wcGluczp3Z2h0QDEwMDszMDA7NDAwOzUwMDs2MDAmZGlzcGxheT1zd2FwJyk7XFxyXFxuXFxyXFxuOnJvb3Qge1xcclxcbiAgLS1tYWluLWNvbG9yOiAjZWY3ODE5O1xcclxcbiAgLS1ibGFjazogIzE0MTIxNTtcXHJcXG59XFxyXFxuXFxyXFxuKiB7XFxyXFxuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBsaW5lYXI7XFxyXFxufVxcclxcblxcclxcbmh0bWwge1xcclxcbiAgZm9udC1zaXplOiA2Mi41JTtcXHJcXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcXHJcXG4gIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xcclxcbiAgc2Nyb2xsLXBhZGRpbmctdG9wOiA3cmVtO1xcclxcbn1cXHJcXG5cXHJcXG5odG1sOjotd2Via2l0LXNjcm9sbGJhciB7XFxyXFxuICB3aWR0aDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuaHRtbDo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xcclxcbiAgYmFja2dyb3VuZDogdmFyKC0tYmxhY2spO1xcclxcbn1cXHJcXG5cXHJcXG5odG1sOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxyXFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1tYWluLWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBvdmVyZmxvdy14OiBoaWRkZW47XFxyXFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1ibGFjayk7XFxyXFxufVxcclxcblxcclxcbnNlY3Rpb24ge1xcclxcbiAgcGFkZGluZzogMnJlbSA2cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyIHtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICByaWdodDogMDtcXHJcXG4gIHotaW5kZXg6IDEwMDA7XFxyXFxuICBwYWRkaW5nOiAycmVtIDklO1xcclxcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjgpO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXIgLmxvZ28ge1xcclxcbiAgZm9udC1zaXplOiAyLjVyZW07XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXIgLmxvZ28gaSB7XFxyXFxuICBwYWRkaW5nLXJpZ2h0OiAwLjVyZW07XFxyXFxuICBjb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XFxyXFxuICBhbmltYXRpb246IGZsb2F0aW5nIDJzIGxpbmVhciBpbmZpbml0ZTtcXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyBmbG9hdGluZyB7XFxyXFxuICAwJSB7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIDEwMCUge1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XFxyXFxuICB9XFxyXFxuXFxyXFxuICA1MCUge1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFyZW0pO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyIC5uYXZiYXIgYSB7XFxyXFxuICBmb250LXNpemU6IDEuN3JlbTtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgbWFyZ2luOiAwIDFyZW07XFxyXFxufVxcclxcblxcclxcbi5mb290ZXIgLmNyZWRpdCBzcGFuIGEge1xcclxcbiAgY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xcclxcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyIC5uYXZiYXIgYTpob3ZlciB7XFxyXFxuICBjb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbi5tZW51IHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXIgLm1lbnUge1xcclxcbiAgZm9udC1zaXplOiAyLjVyZW07XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAycmVtO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyIC5tZW51OmhvdmVyIHtcXHJcXG4gIGNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuLmhvbWUge1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuXFxyXFxuLmhvbWUgLmhvbWUtc2xpZGVyIC5ib3gge1xcclxcbiAgbWluLWhlaWdodDogMTAwdmg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgcGFkZGluZzogMnJlbTtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcXHJcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciAhaW1wb3J0YW50O1xcclxcbn1cXHJcXG5cXHJcXG4uaG9tZSAuaG9tZS1zbGlkZXIgLnN3aXBlci1idXR0b24tbmV4dCB7XFxyXFxuICByaWdodDogNHJlbTtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgb3BhY2l0eTogMDtcXHJcXG59XFxyXFxuXFxyXFxuLmhvbWUgLmhvbWUtc2xpZGVyIC5zd2lwZXItYnV0dG9uLXByZXYge1xcclxcbiAgbGVmdDogNHJlbTtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgb3BhY2l0eTogMDtcXHJcXG59XFxyXFxuXFxyXFxuLmhvbWUgLmhvbWUtc2xpZGVyIC5zd2lwZXItYnV0dG9uLW5leHQ6aG92ZXIsXFxyXFxuLmhvbWUgLmhvbWUtc2xpZGVyIC5zd2lwZXItYnV0dG9uLXByZXY6aG92ZXIge1xcclxcbiAgY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4uaG9tZSAuaG9tZS1zbGlkZXI6aG92ZXIgLnN3aXBlci1idXR0b24tbmV4dCxcXHJcXG4uaG9tZSAuaG9tZS1zbGlkZXI6aG92ZXIgLnN3aXBlci1idXR0b24tcHJldiB7XFxyXFxuICBvcGFjaXR5OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZC1zZWN0aW9uIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDMwcmVtLCAxZnIpKTtcXHJcXG4gIGdyaWQtZ2FwOiAxcmVtO1xcclxcbiAgbWFyZ2luLXRvcDogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmQtc2VjdGlvbiAuY2FyZCB7XFxyXFxuICBiYWNrZ3JvdW5kOiAjMjIyO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcclxcbiAgcGFkZGluZzogMnJlbTtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbn1cXHJcXG4uY2FyZC1zZWN0aW9uIC5jYXJkIGltZyB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmQtc2VjdGlvbiAuY29udGVudCAubmFtZS1kaXYge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZC1zZWN0aW9uIC5jb250ZW50IC5uYW1lLWRpdiBoMiB7XFxyXFxuICBmb250LXNpemU6IDJyZW07XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZC1zZWN0aW9uIC5jb250ZW50IC5saWtlcyB7XFxyXFxuICBmb250LXNpemU6IDJyZW07XFxyXFxuICBmb250LXdlaWdodDogOTAwO1xcclxcbiAgY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZC1zZWN0aW9uIC5kZXNjcmlwdGlvbiB7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nOiAxcmVtIDEuNXJlbTtcXHJcXG4gIGZvbnQtc2l6ZTogMS43cmVtO1xcclxcbiAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICBtYXJnaW4tYm90dG9tOiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZC1zZWN0aW9uIC5jYXJkIC5jb21tZW50LWJ0biB7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgZm9udC1zaXplOiAxLjdyZW07XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXHJcXG4gIGJveC1zaGFkb3c6IDAgMTBweCAxNXB4IHJnYig1NSAxNDggMTQzKTtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIG1hcmdpbjogMCBhdXRvO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmQtc2VjdGlvbiAuY2FyZCAuY29tbWVudC1idG46aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZDogdmFyKC0tbWFpbi1jb2xvcik7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG59XFxyXFxuXFxyXFxuLmZvb3RlciAuY3JlZGl0IHtcXHJcXG4gIHBhZGRpbmc6IDFyZW07XFxyXFxuICBwYWRkaW5nLXRvcDogMnJlbTtcXHJcXG4gIG1hcmdpbi10b3A6IDJyZW07XFxyXFxuICBib3JkZXItdG9wOiAwLjFyZW0gc29saWQgI2ZmZjM7XFxyXFxuICBmb250LXNpemU6IDJyZW07XFxyXFxuICBjb2xvcjogI2FhYTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLyogcG9wdXAgc2VjdGlvbiAqL1xcclxcblxcclxcbi5wb3B1cC1zZWN0aW9uIHtcXHJcXG4gIGJhY2tncm91bmQ6ICMyMjI7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cCB7XFxyXFxuICB3aWR0aDogNjB2dztcXHJcXG4gIGhlaWdodDogOTB2aDtcXHJcXG4gIHBhZGRpbmc6IDMwcHggNTBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyZTMxMzA7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICB0b3A6IDUwJTtcXHJcXG4gIGxlZnQ6IDUwJTtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgZ2FwOiAyMHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMjFweDtcXHJcXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcXHJcXG4gIGNvbG9yOiAjZDJkMWQzO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXAgI2Nsb3NlLWJ0biB7XFxyXFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcclxcbiAgZm9udC1zaXplOiA0cmVtO1xcclxcbiAgY29sb3I6ICNkMmQxZDM7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cCAuZGlzcGxheSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cCAuZGlzcGxheSAuZGVzY3JpcHRpb24ge1xcclxcbiAgd2lkdGg6IDkwJTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwIC5kaXNwbGF5IC5kZXNjcmlwdGlvbiBpbWcge1xcclxcbiAgd2lkdGg6IDkwJTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cCAuZGlzcGxheSAuZGVzY3JpcHRpb24gLmdhbWUtdGl0bGUge1xcclxcbiAgZm9udC1zaXplOiAyLjhyZW07XFxyXFxufVxcclxcblxcclxcbi5wb3B1cCAuZGlzcGxheSAuZGlzcGxheS1kZXRhaWxzIHtcXHJcXG4gIHdpZHRoOiA4MCU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cCAuZGlzcGxheSAuZGlzcGxheS1kZXRhaWxzIGgzIHtcXHJcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwIC5kaXNwbGF5IC5kaXNwbGF5LWRldGFpbHMgdWwgPiBsaSB7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxLjI7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cCAuY29tbWVudC1zZWN0aW9uIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwIC5jb21tZW50LXNlY3Rpb24gLmNvbW1lbnQtc2hvdyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cCAuY29tbWVudC1zZWN0aW9uIC5jb21tZW50LXNob3cgaDMge1xcclxcbiAgZm9udC1zaXplOiAycmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXHJcXG4gIGNvbG9yOiAjZDJkMWQzO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXAgLmNvbW1lbnQtc2VjdGlvbiAuY29tbWVudC1zaG93IHVsIHtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxyXFxuICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwIC5jb21tZW50LXNlY3Rpb24gLmNvbW1lbnQge1xcclxcbiAgd2lkdGg6IDcwJTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwIC5jb21tZW50LXNlY3Rpb24gLmNvbW1lbnQgaDMge1xcclxcbiAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICBtYXJnaW4tdG9wOiA1cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXAgLmNvbW1lbnQtc2VjdGlvbiAuY29tbWVudCBmb3JtIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZ2FwOiAxMHB4O1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cCAuY29tbWVudC1zZWN0aW9uIC5jb21tZW50IGZvcm0gaW5wdXRbdHlwZT0ndGV4dCddLFxcclxcbi5wb3B1cCAuY29tbWVudC1zZWN0aW9uIC5jb21tZW50IGZvcm0gdGV4dGFyZWEge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXAgLmNvbW1lbnQtc2VjdGlvbiAuY29tbWVudCBmb3JtIHRleHRhcmVhIHtcXHJcXG4gIGhlaWdodDogMTVyZW07XFxyXFxufVxcclxcblxcclxcbi5wb3B1cCAuY29tbWVudC1zZWN0aW9uIC5jb21tZW50IGZvcm0gLnN1Ym1pdC1idG4ge1xcclxcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXHJcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi8qIG1lZGlhIHF1ZXJpZXMgICovXFxyXFxuXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MXB4KSB7XFxyXFxuICBodG1sIHtcXHJcXG4gICAgZm9udC1zaXplOiA1NSU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICBzZWN0aW9uIHtcXHJcXG4gICAgcGFkZGluZzogMnJlbTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XFxyXFxuICAubWVudSB7XFxyXFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5oZWFkZXIgLm5hdmJhciB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdG9wOiA5OSU7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICAgIHJpZ2h0OiAwO1xcclxcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuOCk7XFxyXFxuICAgIGNsaXAtcGF0aDogcG9seWdvbigwIDAsIDEwMCUgMCwgMTAwJSAwLCAwIDApO1xcclxcbiAgICBtaW4taGVpZ2h0OiA3MHZoO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmhlYWRlciAubmF2YmFyLmFjdGl2ZSB7XFxyXFxuICAgIGNsaXAtcGF0aDogcG9seWdvbigwIDAsIDEwMCUgMCwgMTAwJSAxMDAlLCAwJSAxMDAlKTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5oZWFkZXIgLm5hdmJhciBhIHtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIG1hcmdpbjogMnJlbTtcXHJcXG4gICAgcGFkZGluZzogMXJlbTtcXHJcXG4gICAgZm9udC1zaXplOiAyLjVyZW07XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jYXJkLXNlY3Rpb24ge1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmcjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5wb3B1cCB7XFxyXFxuICAgIHdpZHRoOiA5MHZ3O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1heC13aWR0aDogNDUwcHgpIHtcXHJcXG4gIGh0bWwge1xcclxcbiAgICBmb250LXNpemU6IDUwJTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5ob21lIC5ob21lLXNsaWRlciAuc3dpcGVyLWJ1dHRvbi1uZXh0LFxcclxcbiAgLmhvbWUgLmhvbWUtc2xpZGVyIC5zd2lwZXItYnV0dG9uLXByZXYge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmNhcmQtc2VjdGlvbiB7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmNhcmQtc2VjdGlvbiAuY2FyZCB7XFxyXFxuICAgIHBhZGRpbmc6IDAuM3JlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jYXJkLXNlY3Rpb24gLmNhcmQgLmNvbW1lbnQtYnRuIHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XFxyXFxuICB9XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgJy4vYXNzZXRzL2ltYWdlcy9iYXRtYW4ucG5nJztcbmltcG9ydCAnLi9hc3NldHMvaW1hZ2VzL2ltYWdlMS5wbmcnO1xuaW1wb3J0ICcuL2Fzc2V0cy9pbWFnZXMvaW1hZ2UyLnBuZyc7XG5pbXBvcnQgJy4vYXNzZXRzL2ltYWdlcy9pbWFnZTMucG5nJztcbmltcG9ydCAnLi9hc3NldHMvaW1hZ2VzL2ltYWdlNC5wbmcnO1xuaW1wb3J0ICcuL2Fzc2V0cy9pbWFnZXMvaW1hZ2U1LnBuZyc7XG5pbXBvcnQgJy4vYXNzZXRzL2ltYWdlcy9pbWFnZTYucG5nJztcbmltcG9ydCAnLi9hc3NldHMvaW1hZ2VzL2ltYWdlNy5wbmcnO1xuaW1wb3J0ICcuL2Fzc2V0cy9pbWFnZXMvaW1hZ2U4LnBuZyc7XG5pbXBvcnQgJy4vYXNzZXRzL2ltYWdlcy9pbWFnZTkucG5nJztcbmltcG9ydCAnLi9hc3NldHMvaW1hZ2VzL2ltYWdlMTAucG5nJztcbmltcG9ydCAnLi9hc3NldHMvaW1hZ2VzL2ltYWdlMTEucG5nJztcblxuaW1wb3J0IHN3aXBlck1lIGZyb20gJy4vbW9kdWxlcy9zbGlkZXNob3cuanMnO1xuaW1wb3J0IGZldGNoRGF0YSBmcm9tICcuL21vZHVsZXMvZmV0Y2hEYXRhLmpzJztcbmltcG9ydCBhZGRMaWtlIGZyb20gJy4vbW9kdWxlcy9hZGRMaWtlLmpzJztcbmltcG9ydCBtb2JpbGVNZW51IGZyb20gJy4vbW9kdWxlcy9tb2JpbGUuanMnO1xuaW1wb3J0IGNvdW50IGZyb20gJy4vbW9kdWxlcy9pdGVtQ291bnRlci5qcyc7XG5pbXBvcnQgR2FtZSBmcm9tICcuL21vZHVsZXMvcG9wVXAuanMnO1xuaW1wb3J0IGFkZENvbW1lbnQgZnJvbSAnLi9tb2R1bGVzL2FkZENvbW1lbnQuanMnO1xuXG5mZXRjaERhdGEoKTtcbnN3aXBlck1lKCk7XG5hZGRMaWtlKCk7XG5tb2JpbGVNZW51KCk7XG5jb3VudCgpO1xuYWRkQ29tbWVudCgpO1xuY29uc3QgZ2FtZSA9IG5ldyBHYW1lKCk7XG5nYW1lLmdldEdhbWUoKTtcbiIsImltcG9ydCBjb3VudENvbW1lbnQgZnJvbSAnLi9jb3VudENvbW1lbnQuanMnO1xuXG5jb25zdCB1cmwgPSAnaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpL2FwcHMvWTlTVDZFc0VWNDFnY0N2bGJPZlovY29tbWVudHMnO1xuY29uc3QgY29tbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpO1xuXG5jb25zdCBhZGRDb21tZW50ID0gKCkgPT4ge1xuICBjb21tZW50cy5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBzdWJtaXR0ZWQgPSBlLnRhcmdldC5jbG9zZXN0KCcuZm9ybScpO1xuICAgIGNvbnN0IGl0ZW0gPSBzdWJtaXR0ZWQuZGF0YXNldC5nZXRDb21tZW50O1xuICAgIGNvbnN0IHVzZXJWYWx1ZSA9IHN1Ym1pdHRlZC5xdWVyeVNlbGVjdG9yKCcjbmFtZScpLnZhbHVlO1xuICAgIGNvbnN0IHRleHRBcmVhID0gc3VibWl0dGVkLnF1ZXJ5U2VsZWN0b3IoJyNkZXNjcmlwdGlvbicpLnZhbHVlO1xuICAgIGZldGNoKHVybCwge1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgIEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgfSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgaXRlbV9pZDogaXRlbSxcbiAgICAgICAgdXNlcm5hbWU6IHVzZXJWYWx1ZSxcbiAgICAgICAgY29tbWVudDogdGV4dEFyZWEsXG4gICAgICB9KSxcbiAgICB9KTtcbiAgICBmZXRjaChcbiAgICAgIGBodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcy9ZOVNUNkVzRVY0MWdjQ3ZsYk9mWi9jb21tZW50cz9pdGVtX2lkPSR7aXRlbX1gLFxuICAgIClcbiAgICAgIC50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXG4gICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICBjb25zdCBjb21tZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb21tZW50cycpO1xuICAgICAgICBjb21tZW50cy5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgZGF0YS5mb3JFYWNoKChjb21tZW50KSA9PiB7XG4gICAgICAgICAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICAgIGxpLmlubmVySFRNTCA9IGBcbiAgICAgICAgICA8cD4ke2NvbW1lbnQuY29tbWVudH0gYnkgJHtjb21tZW50LnVzZXJuYW1lfTwvcD5cbiAgICAgICAgYDtcbiAgICAgICAgICBjb21tZW50cy5hcHBlbmRDaGlsZChsaSk7XG4gICAgICAgICAgcmV0dXJuIGNvdW50Q29tbWVudChkYXRhKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBhZGRDb21tZW50O1xuIiwiY29uc3QgbGlrZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FyZC1zZWN0aW9uJyk7XG5jb25zdCB1cmwgPSAnaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpL2FwcHMvWTlTVDZFc0VWNDFnY0N2bGJPZlovbGlrZXMnO1xuXG5jb25zdCBhZGRMaWtlID0gKCkgPT4ge1xuICBsaWtlcy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgY29uc3QgY2xpY2tlZCA9IGUudGFyZ2V0LmNsb3Nlc3QoJy5hZGQtbGlrZScpO1xuICAgIGlmICghY2xpY2tlZCkgcmV0dXJuO1xuICAgIGNvbnN0IGl0ZW0gPSBjbGlja2VkLmdldEF0dHJpYnV0ZSgnaWQnKTtcbiAgICBmZXRjaCh1cmwsIHtcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICBBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgIH0sXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIGl0ZW1faWQ6IGl0ZW0sXG4gICAgICB9KSxcbiAgICB9KTtcbiAgICBmZXRjaCh1cmwpXG4gICAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxuICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgY29uc3QgbGlrZXNJbmZvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmxpa2VzLSR7aXRlbX1gKTtcbiAgICAgICAgbGlrZXNJbmZvLnF1ZXJ5U2VsZWN0b3IoJ3NwYW4nKS50ZXh0Q29udGVudCA9IGRhdGEuZmlsdGVyKFxuICAgICAgICAgIChpdGVtcykgPT4gaXRlbXMuaXRlbV9pZCA9PT0gaXRlbSxcbiAgICAgICAgKVswXS5saWtlcztcbiAgICAgIH0pO1xuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGFkZExpa2U7XG4iLCJjb25zdCBjb3VudENvbW1lbnQgPSAoY29tbWVudCkgPT4ge1xuICBjb25zdCBjb3VudGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvdGFsLWNvbW1lbnRzJyk7XG4gIGNvdW50ZXIudGV4dENvbnRlbnQgPSBjb21tZW50Lmxlbmd0aDtcbiAgcmV0dXJuIGNvdW50ZXI7XG59O1xuZXhwb3J0IGRlZmF1bHQgY291bnRDb21tZW50O1xuIiwiY29uc3QgQVBJX1VSTCA9ICdodHRwczovL2ZyZWUtdG8tcGxheS1nYW1lcy1kYXRhYmFzZS5wLnJhcGlkYXBpLmNvbS9hcGkvZ2FtZXM/Y2F0ZWdvcnk9c2hvb3Rlcic7XHJcbmNvbnN0IGNhcmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcmQtc2VjdGlvbicpO1xyXG5jb25zdCBvcHRpb25zID0ge1xyXG4gIG1ldGhvZDogJ0dFVCcsXHJcbiAgaGVhZGVyczoge1xyXG4gICAgJ1gtUmFwaWRBUEktS2V5JzogJzAxMjMzOTNlZWFtc2gxYmVlMTBhM2EyMjAwNTdwMWZiZWU3anNuN2VmOTM5ZmQ2MmNhJyxcclxuICAgICdYLVJhcGlkQVBJLUhvc3QnOiAnZnJlZS10by1wbGF5LWdhbWVzLWRhdGFiYXNlLnAucmFwaWRhcGkuY29tJyxcclxuICB9LFxyXG59O1xyXG5jb25zdCBzaG93RGF0YSA9IChkYXRhKSA9PiB7XHJcbiAgY29uc3QgY2FyZENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNhcmRDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY2FyZCcpO1xyXG4gIGNhcmRDb250YWluZXIuaW5uZXJIVE1MID0gYFxyXG4gICAgICAgIDxpbWdcclxuICAgICAgICAgIHNyYz1cIiR7ZGF0YS50aHVtYm5haWx9XCJcclxuICAgICAgICAgIGNsYXNzPVwiY2FyZC1pbWFnZVwiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGVudFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cIm5hbWUtZGl2XCI+XHJcbiAgICAgICAgICAgIDxoMj4ke2RhdGEudGl0bGV9PC9oMj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxpa2VzIGxpa2VzLSR7ZGF0YS5pZH1cIj5cclxuICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhLXNvbGlkIGZhLWhlYXJ0IGFkZC1saWtlXCIgaWQ9XCIke2RhdGEuaWR9XCI+PC9pPlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibGlrZXMtaW5mbyAke2RhdGEuaWR9XCIgaWQ9XCIke2RhdGEuaWR9XCI+NDwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxwIGNsYXNzPVwiZGVzY3JpcHRpb25cIj5cclxuICAgICAgICAgICAke2RhdGEuc2hvcnRfZGVzY3JpcHRpb259XHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICA8YnV0dG9uIGlkPVwiJHtkYXRhLmlkfVwiIGNsYXNzPVwiY29tbWVudC1idG5cIj5Db21tZW50czwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgYDtcclxuICBjYXJkcy5hcHBlbmRDaGlsZChjYXJkQ29udGFpbmVyKTtcclxuICBmZXRjaChcclxuICAgICdodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcy9ZOVNUNkVzRVY0MWdjQ3ZsYk9mWi9saWtlcycsXHJcbiAgKVxyXG4gICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcclxuICAgIC50aGVuKChnZXREYXRhKSA9PiB7XHJcbiAgICAgIGNvbnN0IGxpa2VzRmlsdGVyID0gZ2V0RGF0YS5maWx0ZXIoXHJcbiAgICAgICAgKGl0ZW1zKSA9PiBpdGVtcy5pdGVtX2lkID09PSBgJHtkYXRhLmlkfWAsXHJcbiAgICAgIClbMF0ubGlrZXM7XHJcbiAgICAgIGlmICghbGlrZXNGaWx0ZXIpIHJldHVybjtcclxuICAgICAgY29uc3QgbGlrZXNJbmZvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmxpa2VzLSR7ZGF0YS5pZH1gKTtcclxuICAgICAgbGlrZXNJbmZvLnF1ZXJ5U2VsZWN0b3IoJ3NwYW4nKS50ZXh0Q29udGVudCA9IGxpa2VzRmlsdGVyO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5jb25zdCBmZXRjaERhdGEgPSBhc3luYyAoKSA9PiB7XHJcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChBUElfVVJMLCBvcHRpb25zKTtcclxuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgMTU7IGkgKz0gMSkge1xyXG4gICAgc2hvd0RhdGEoZGF0YVtpXSk7XHJcbiAgfVxyXG59O1xyXG5cclxuZmV0Y2hEYXRhKCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmZXRjaERhdGE7XHJcbiIsImNvbnN0IEFQSV9VUkwgPSAnaHR0cHM6Ly9mcmVlLXRvLXBsYXktZ2FtZXMtZGF0YWJhc2UucC5yYXBpZGFwaS5jb20vYXBpL2dhbWVzP2NhdGVnb3J5PXNob290ZXInO1xyXG5jb25zdCBvcHRpb25zID0ge1xyXG4gIG1ldGhvZDogJ0dFVCcsXHJcbiAgaGVhZGVyczoge1xyXG4gICAgJ1gtUmFwaWRBUEktS2V5JzogJzAxMjMzOTNlZWFtc2gxYmVlMTBhM2EyMjAwNTdwMWZiZWU3anNuN2VmOTM5ZmQ2MmNhJyxcclxuICAgICdYLVJhcGlkQVBJLUhvc3QnOiAnZnJlZS10by1wbGF5LWdhbWVzLWRhdGFiYXNlLnAucmFwaWRhcGkuY29tJyxcclxuICB9LFxyXG59O1xyXG5jb25zdCBjb3VudCA9IGFzeW5jICgpID0+IHtcclxuICBjb25zdCBnYW1lcyA9IGF3YWl0IGZldGNoKEFQSV9VUkwsIG9wdGlvbnMpO1xyXG4gIGNvbnN0IGRhdGEgPSBnYW1lcy5zbGljZSgwLCAxNSkubWFwKChpdGVtKSA9PiBpdGVtLmlkKTtcclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY291bnRlcicpLmZvckVhY2goKGVsZW0pID0+IHtcclxuICAgIGVsZW0uaW5uZXJIVE1MID0gYCR7ZGF0YS5sZW5ndGh9YDtcclxuICB9KTtcclxufTtcclxuXHJcbmNvdW50KCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb3VudDtcclxuIiwiY29uc3QgbmF2YmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdmJhcicpO1xuXG5jb25zdCBtb2JpbGVNZW51ID0gKCkgPT4ge1xuICBjb25zdCBtZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21lbnUtYnRuJyk7XG4gIG1lbnUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgbmF2YmFyLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xuICB9KTtcbn07XG53aW5kb3cub25zY3JvbGwgPSAoKSA9PiB7XG4gIG5hdmJhci5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IG1vYmlsZU1lbnU7XG4iLCJjb25zdCBvcHRpb25zID0ge1xyXG4gIG1ldGhvZDogJ0dFVCcsXHJcbiAgaGVhZGVyczoge1xyXG4gICAgJ1gtUmFwaWRBUEktS2V5JzogJzAxMjMzOTNlZWFtc2gxYmVlMTBhM2EyMjAwNTdwMWZiZWU3anNuN2VmOTM5ZmQ2MmNhJyxcclxuICAgICdYLVJhcGlkQVBJLUhvc3QnOiAnZnJlZS10by1wbGF5LWdhbWVzLWRhdGFiYXNlLnAucmFwaWRhcGkuY29tJyxcclxuICB9LFxyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lIHtcclxuICAvLyBJbml0aWFsaXphdGlvblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5BUElfVVJMID0gJ2h0dHBzOi8vZnJlZS10by1wbGF5LWdhbWVzLWRhdGFiYXNlLnAucmFwaWRhcGkuY29tL2FwaS9nYW1lcz9jYXRlZ29yeT1zaG9vdGVyJztcclxuICAgIHRoaXMuZ2FtZUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7XHJcbiAgfVxyXG5cclxuICBnZXRHYW1lID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh0aGlzLkFQSV9VUkwsIG9wdGlvbnMpO1xyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKS5jYXRjaCgoZXJyb3IpID0+IG5ldyBFcnJvcihlcnJvcikpO1xyXG4gICAgdGhpcy5wb3B1cEdhbWUoZGF0YSk7XHJcbiAgfTtcclxuXHJcbiAgcG9wdXBHYW1lID0gKGRhdGEpID0+IHtcclxuICAgIGNvbnN0IHNlZUdhbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY29tbWVudC1idG4nKTtcclxuICAgIHNlZUdhbWUuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcclxuICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBjb25zdCBtb2RhbFBvcHVwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xyXG4gICAgICAgIG1vZGFsUG9wdXAuY2xhc3NMaXN0LmFkZCA9ICdwb3B1cC1zZWN0aW9uJztcclxuICAgICAgICBtb2RhbFBvcHVwLmlubmVySFRNTCA9IGBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwicG9wdXBcIj5cclxuICAgICAgPGJ1dHRvbiBpZD1cImNsb3NlLWJ0blwiPlxyXG4gICAgICAgICAgPGkgY2xhc3M9XCJmYS1zb2xpZCBmYS14bWFya1wiPjwvaT5cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGlzcGxheVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGVzY3JpcHRpb25cIj5cclxuICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICBzcmM9XCIke2RhdGFbaW5kZXhdLnRodW1ibmFpbH1cIlxyXG4gICAgICAgICAgICAgICAgYWx0PVwidGh1bWJuYWlsXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxoMyBjbGFzcz1cImdhbWUtdGl0bGVcIj4ke2RhdGFbaW5kZXhdLnRpdGxlfTwvaDM+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGlzcGxheS1kZXRhaWxzXCI+XHJcbiAgICAgICAgICAgICAgPGgzPmdhbWUgZGV0YWlsczo8L2gzPlxyXG4gICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgJHtkYXRhW2luZGV4XS5zaG9ydF9kZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGk+PHN0cm9uZz5kYXRlIG9mIHJlbGVhc2U6PC9zdHJvbmc+ICR7ZGF0YVtpbmRleF0ucmVsZWFzZV9kYXRlfTwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGk+PHN0cm9uZz5nZW5yZTo8L3N0cm9uZz4gJHtkYXRhW2luZGV4XS5nZW5yZX08L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpPjxzdHJvbmc+cGxhdGZvcm06PC9zdHJvbmc+JHtkYXRhW2luZGV4XS5wbGF0Zm9ybX08L2xpPlxyXG4gICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29tbWVudC1zZWN0aW9uXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb21tZW50LXNob3cgY29tbWVudHMtJHtkYXRhW2luZGV4XS5pZH1cIj5cclxuICAgICAgICAgICAgICA8aDMgY2xhc3M9XCJjb3VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICBDb21tZW50cyg8c3BhbiBjbGFzcz1cInRvdGFsLWNvbW1lbnRzXCI+MDwvc3Bhbj4pXHJcbiAgICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJjb21tZW50cyAke2RhdGFbaW5kZXhdLmlkfVwiICBpZD1cIiR7ZGF0YVtpbmRleF0uaWR9XCI+XHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29tbWVudFwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhZGQtY29tbWVudFwiPlxyXG4gICAgICAgICAgICAgICAgPGgzPkFkZCBDb21tZW50PC9oMz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8Zm9ybSBjbGFzcz1cImZvcm1cIiBkYXRhLWdldC1jb21tZW50PVwiJHtkYXRhW2luZGV4XS5pZH1cIj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJuYW1lXCJcclxuICAgICAgICAgICAgICAgICAgaWQ9XCJuYW1lXCJcclxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJZb3VyIG5hbWVcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDx0ZXh0YXJlYVxyXG4gICAgICAgICAgICAgICAgICBuYW1lPVwiZGVzY3JpcHRpb25cIlxyXG4gICAgICAgICAgICAgICAgICBpZD1cImRlc2NyaXB0aW9uXCJcclxuICAgICAgICAgICAgICAgICAgY29scz1cIjMwXCJcclxuICAgICAgICAgICAgICAgICAgcm93cz1cIjEwXCJcclxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJZb3VyIGluc2lnaHRcIlxyXG4gICAgICAgICAgICAgICAgPjwvdGV4dGFyZWE+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwiJHtkYXRhW2luZGV4XS5pZH1cIiB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJzdWJtaXQtYnRuXCI+XHJcbiAgICAgICAgICAgICAgICAgIENvbW1lbnRcclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICBgO1xyXG4gICAgICAgIHRoaXMuZ2FtZUNvbnRhaW5lci5hcHBlbmRDaGlsZChtb2RhbFBvcHVwKTtcclxuICAgICAgICB0aGlzLmNsb3NlR2FtZShtb2RhbFBvcHVwKTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBjbG9zZUdhbWUgPSAobW9kYWxQb3B1cCkgPT4ge1xyXG4gICAgY29uc3QgY2xvc2VCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjY2xvc2UtYnRuJyk7XHJcbiAgICBjbG9zZUJ0bi5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgbW9kYWxQb3B1cC5yZW1vdmUoKTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9O1xyXG59XHJcbiIsImNvbnN0IHN3aXBlck1lID0gKCkgPT4ge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWYsIG5vLXVudXNlZC12YXJzXG4gIGNvbnN0IHN3aXBlciA9IG5ldyBTd2lwZXIoJy5ob21lLXNsaWRlcicsIHtcbiAgICBzcGFjZUJldHdlZW46IDIwLFxuICAgIGVmZmVjdDogJ2ZhZGUnLFxuICAgIGxvb3A6IHRydWUsXG4gICAgbmF2aWdhdGlvbjoge1xuICAgICAgbmV4dEVsOiAnLnN3aXBlci1idXR0b24tbmV4dCcsXG4gICAgICBwcmV2RWw6ICcuc3dpcGVyLWJ1dHRvbi1wcmV2JyxcbiAgICB9LFxuICAgIGNlbnRlcmVkU2xpZGVzOiB0cnVlLFxuICAgIGF1dG9wbGF5OiB7XG4gICAgICBkZWxheTogOTUwMCxcbiAgICAgIGRpc2FibGVPbkludGVyYWN0aW9uOiBmYWxzZSxcbiAgICB9LFxuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHN3aXBlck1lO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
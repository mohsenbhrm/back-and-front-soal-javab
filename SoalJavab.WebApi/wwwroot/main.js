(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/footer/footer.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/footer/footer.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>footer works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/header/header.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/header/header.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-dark bg-dark fixed-top\">\r\n\r\n  <app-menu class=\"ml-3\"></app-menu>\r\n\r\n  <a class=\"navbar-brand ml-auto\" [routerLink]=\"['/']\" routerLinkActive=\"router-link-active\">سوال و جواب</a>\r\n\r\n  <form class=\"form-inline mx-3\">\r\n    <input class=\"form-control ml-sm-2\" type=\"search\" placeholder=\"{{ 'Search' | translate }}\" aria-label=\"Search\">\r\n    <!-- <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\">{{ 'Search' | translate }}</button> -->\r\n  </form>\r\n\r\n  <div class=\"d-flex justify-content-between\">\r\n    <ul class=\"navbar-nav flex-row mx-3 mt-2\">\r\n      <li class=\"nav-item\" ngbDropdown display=\"dynamic\" placement=\"bottom-left\">\r\n        <a class=\"nav-link\" style=\"cursor: pointer\" ngbDropdownToggle id=\"navbarDropdown1\" role=\"button\">\r\n          <i class=\"fa fa-language\"></i> {{ 'Language' | translate }} <b class=\"caret\"></b>\r\n        </a>\r\n        <div ngbDropdownMenu aria-labelledby=\"navbarDropdown1\" class=\"dropdown-menu dropdown-menu-right\">\r\n          <a ngbDropdownItem (click)=\"changeLang('en')\">{{ 'English' | translate }}</a>\r\n          <a ngbDropdownItem (click)=\"changeLang('fa')\">{{ 'Farsi' | translate }}</a>\r\n        </div>\r\n      </li>\r\n\r\n      <li class=\"nav-item mr-3\" ngbDropdown display=\"dynamic\" placement=\"bottom-left\">\r\n        <a class=\"nav-link\" style=\"cursor: pointer\" ngbDropdownToggle id=\"navbarDropdown2\" role=\"button\">\r\n          <i class=\"fa fa-user\"></i>\r\n           <span *ngIf=\"userInfo\"> {{userInfo.username}} </span>\r\n           <span *ngIf=\"!userInfo\">&nbsp;کاربر &nbsp;</span>\r\n           <b class=\"caret\"></b>\r\n        </a>\r\n        <div ngbDropdownMenu aria-labelledby=\"navbarDropdown2\" class=\"dropdown-menu dropdown-menu-right\">\r\n          <a ngbDropdownItem [routerLink]=\"['/home/profile']\" routerLinkActive=\"router-link-active\" ><i class=\"fa fa-user\"></i> {{ 'Profile' | translate }}</a>\r\n          <!-- <a ngbDropdownItem href=\"#\" (click)=\"$event.preventDefault()\"><i class=\"fa fa-fw fa-gear\"></i> {{ 'Settings' | translate }}</a> -->\r\n          <a ngbDropdownItem href=\"#\" (click)=\"onLoggedout()\"><i class=\"fa fa-fw fa-power-off\"></i> {{ 'Log Out' | translate }}</a>\r\n        </div>\r\n      </li>\r\n    </ul>\r\n\r\n  </div>\r\n\r\n\r\n\r\n</nav>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/layout.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/layout.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\r\n<section class=\"main-container\" >\r\n  <router-outlet></router-outlet>\r\n</section>\r\n\r\n<!-- <app-footer></app-footer> -->\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/menu/menu.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/menu/menu.component.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\r\n    <nav role='navigation'>\r\n      <div id=\"menuToggle\">\r\n        <input id=\"btnMenuToggle\" (click)=\"menuToggle($event)\" [checked]=\"menuExpanded\" type=\"checkbox\" />\r\n        <span></span>\r\n        <span></span>\r\n        <span class=\"m-0\"></span>\r\n        <ul id=\"menu\" class=\"list-unstyled\">\r\n          <li>\r\n            <a (click)=\"menuExpanded = false\" [routerLink]=\"['/dashboard']\" routerLinkActive=\"router-link-active\">داشبورد</a>\r\n          </li>\r\n          <!-- <li id=\"subMenuToggle\">\r\n            <input id=\"btnSubMenuToggle\" type=\"checkbox\" />\r\n            <div class=\"phx-btn\">\r\n              <svg height=\"20px\" viewBox=\"0 0 448 512\" width=\"20px\" xmlns=\"http://www.w3.org/2000/svg\">\r\n                <path class=\"phx-fill-white\"\r\n                  d=\"M231.536 475.535l7.071-7.07c4.686-4.686 4.686-12.284 0-16.971L60.113 273H436c6.627 0 12-5.373 12-12v-10c0-6.627-5.373-12-12-12H60.113L238.607 60.506c4.686-4.686 4.686-12.284 0-16.971l-7.071-7.07c-4.686-4.686-12.284-4.686-16.97 0L3.515 247.515c-4.686 4.686-4.686 12.284 0 16.971l211.051 211.05c4.686 4.686 12.284 4.686 16.97-.001z\"\r\n                  fill=\"currentColor\"></path>\r\n              </svg>\r\n            </div>\r\n            <label class=\"m-0\">محصول ها</label>\r\n            <ul id=\"sub-menu\" class=\"sub-menu list-unstyled\">\r\n              <li class=\"submenu-title\">محصول ها</li>\r\n              <li class=\"back-btn\"><a class=\"d-flex justify-content-between align-items-center\">\r\n                  <svg height=\"20px\" viewBox=\"0 0 448 512\" width=\"20px\" xmlns=\"http://www.w3.org/2000/svg\">\r\n                    <path class=\"phx-fill-white\"\r\n                      d=\"M216.464 36.465l-7.071 7.07c-4.686 4.686-4.686 12.284 0 16.971L387.887 239H12c-6.627 0-12 5.373-12 12v10c0 6.627 5.373 12 12 12h375.887L209.393 451.494c-4.686 4.686-4.686 12.284 0 16.971l7.071 7.07c4.686 4.686 12.284 4.686 16.97 0l211.051-211.05c4.686-4.686 4.686-12.284 0-16.971L233.434 36.465c-4.686-4.687-12.284-4.687-16.97 0z\"\r\n                      fill=\"currentColor\"></path>\r\n                  </svg>\r\n                  <label class=\"m-0\">بازگشت</label>\r\n                </a>\r\n              </li>\r\n              <li>\r\n                <a class=\"text-left\" (click)=\"menuExpanded = false\" [routerLink]=\"['/products/trade']\" routerLinkActive=\"router-link-active\">Phoenix Trade</a>\r\n              </li>\r\n              <li>\r\n                <a class=\"text-left\" (click)=\"menuExpanded = false\" [routerLink]=\"['/products/backoffice']\" routerLinkActive=\"router-link-active\">Phoenix Back\r\n                  Office</a>\r\n              </li>\r\n              <li>\r\n                <a class=\"text-left\" (click)=\"menuExpanded = false\" [routerLink]=\"['/products/fund']\" routerLinkActive=\"router-link-active\">Phoenix Fund</a>\r\n              </li>\r\n              <li>\r\n                <a class=\"text-left\" (click)=\"menuExpanded = false\" [routerLink]=\"['/products/ibshop']\" routerLinkActive=\"router-link-active\">iBshop</a>\r\n              </li>\r\n            </ul>\r\n          </li> -->\r\n          <li>\r\n            <a (click)=\"menuExpanded = false\" [routerLink]=\"['/home/question']\" routerLinkActive=\"router-link-active\" href=\"/\">ثبت سوال</a>\r\n          </li>\r\n          <li>\r\n            <a (click)=\"menuExpanded = false\" [routerLink]=\"['/home/my-questions']\" routerLinkActive=\"router-link-active\" href=\"/\">پرسش های من</a>\r\n          </li>\r\n          <li>\r\n            <a (click)=\"menuExpanded = false\" [routerLink]=\"['/home/my-answers']\" routerLinkActive=\"router-link-active\" href=\"/\">پاسخ های من</a>\r\n          </li>\r\n          <li>\r\n            <a (click)=\"menuExpanded = false\" [routerLink]=\"['/home/question-feed']\" routerLinkActive=\"router-link-active\" href=\"\">فید سوالات</a>\r\n          </li>\r\n          <!-- <li class=\"position-absolute w-100 px-2 d-md-none\" style=\"bottom: 0;\">\r\n         \r\n            <div class=\"phx-social-items d-flex justify-content-around align-items-center\">\r\n              <a class=\"phx-instagram\" href=\"https://www.instagram.com/join.phoenix\" target=\"_blank\">\r\n                <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" viewBox=\"0 0 34.8 34.8\">\r\n                  <title>Instagram</title>\r\n                  <path class=\"phx-fill-white\"\r\n                    d=\"M10.2,34.7A14.259,14.259,0,0,1,6,33.9a7.514,7.514,0,0,1-3.1-2,7.513,7.513,0,0,1-2-3.1,13.577,13.577,0,0,1-.8-4.2C0,22.7,0,22.1,0,17.4s0-5.3.1-7.2A14.23,14.23,0,0,1,.9,6a7.521,7.521,0,0,1,2-3.1A7.521,7.521,0,0,1,6,.9,13.571,13.571,0,0,1,10.2.1C12.1,0,12.7,0,17.4,0s5.3,0,7.2.1a14.231,14.231,0,0,1,4.2.8,7.513,7.513,0,0,1,3.1,2,7.514,7.514,0,0,1,2,3.1,13.571,13.571,0,0,1,.8,4.2c.1,1.8.1,2.5.1,7.2s0,5.3-.1,7.2a14.26,14.26,0,0,1-.8,4.2,7.506,7.506,0,0,1-2,3.1,7.506,7.506,0,0,1-3.1,2,13.577,13.577,0,0,1-4.2.8c-1.9.1-2.5.1-7.2.1S12.1,34.8,10.2,34.7Zm0-31.5A11.084,11.084,0,0,0,7,3.8,5.323,5.323,0,0,0,5,5.1a5.33,5.33,0,0,0-1.3,2,11.116,11.116,0,0,0-.6,3.2C3,12.2,3,12.7,3,17.4s0,5.3.1,7.1a11.116,11.116,0,0,0,.6,3.2,5.33,5.33,0,0,0,1.3,2A5.32,5.32,0,0,0,7,31a11.086,11.086,0,0,0,3.2.6c1.9.1,2.4.1,7.1.1s5.3,0,7.1-.1a11.086,11.086,0,0,0,3.2-.6,5.751,5.751,0,0,0,3.3-3.3,11.086,11.086,0,0,0,.6-3.2c.1-1.9.1-2.4.1-7.1s0-5.3-.1-7.1a11.085,11.085,0,0,0-.6-3.2,5.327,5.327,0,0,0-1.3-2,5.33,5.33,0,0,0-2-1.3,11.085,11.085,0,0,0-3.2-.6c-1.9-.1-2.4-.1-7.1-.1S12,3.1,10.2,3.2ZM8.3,17.4a9,9,0,1,1,9,9A9,9,0,0,1,8.3,17.4Zm3.2,0a5.8,5.8,0,1,0,5.8-5.8A5.8,5.8,0,0,0,11.5,17.4ZM24.5,8a2.05,2.05,0,0,1,2.1-2.1A2.1,2.1,0,1,1,24.5,8Z\" />\r\n                </svg>\r\n              </a>\r\n              <a class=\"phx-linkedin\" href=\"https://www.linkedin.com/company/phxsoft\" target=\"_blank\">\r\n                <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" viewBox=\"0 0 30.2 30\">\r\n                  <title>Linkedin</title>\r\n                  <path class=\"phx-fill-white\"\r\n                    d=\"M30,30H23.8V20.3c0-2.3,0-5.3-3.2-5.3s-3.7,2.5-3.7,5.1V30H10.7V10h6v2.7h.1a6.487,6.487,0,0,1,5.9-3.2c6.3,0,7.5,4.1,7.5,9.5V30ZM.5,30V10H6.7V30ZM0,3.6a3.6,3.6,0,0,1,7.2,0A3.65,3.65,0,0,1,3.6,7.2,3.6,3.6,0,0,1,0,3.6Z\" />\r\n                </svg>\r\n              </a>\r\n              <a class=\"phx-telegram\" href=\"https://t.me/joinphoenix\" target=\"_blank\">\r\n                <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" viewBox=\"0 0 34.995 29.519\">\r\n                  <title>Telegram</title>\r\n                  <path class=\"phx-fill-white\"\r\n                    d=\"M32.74.12l-32,12.5a1.16,1.16,0,0,0,.1,2.2l8.1,2.4,3,9.6a1.41,1.41,0,0,0,2.3.6l4.2-4.3,8.3,6.1a1.74,1.74,0,0,0,2.7-1l5.5-26.1a1.69,1.69,0,0,0-2.2-2Zm-4.1,5.8L13.84,19a2.19,2.19,0,0,0-.3.5l-.6,5.1a.15.15,0,0,1-.3,0L10.24,17a.81.81,0,0,1,.3-.9L28.14,5.2c.5-.2.9.4.5.7Z\"\r\n                    transform=\"translate(0.006 -0.025)\" />\r\n                </svg>\r\n              </a>\r\n              <a class=\"phx-twitter\" href=\"https://twitter.com/joinphoenix\" target=\"_blank\">\r\n                <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" viewBox=\"0 0 35.075 28.5\">\r\n                  <title>Twitter</title>\r\n                  <path class=\"phx-fill-white\"\r\n                    d=\"M31.5,7.3v.8c0,10-7.6,20.4-20.4,20.4a20.44,20.44,0,0,1-11-3.2c-.1,0-.1-.1-.1-.2s.1-.1.2-.1a9.7,9.7,0,0,0,1.7.1,13.74,13.74,0,0,0,8.3-2.7,7.19,7.19,0,0,1-6.3-5v-.2a.35.35,0,0,1,.2-.1,4.88,4.88,0,0,0,2.4,0,7.32,7.32,0,0,1-5.1-7V10c0-.1,0-.1.1-.1h.2a8.09,8.09,0,0,0,2.5.8A7.41,7.41,0,0,1,1.5,5a6.86,6.86,0,0,1,1-3.7l.1-.1c.1,0,.1,0,.1.1A20.34,20.34,0,0,0,17,8.7a6.6,6.6,0,0,1-.1-1.4A7.34,7.34,0,0,1,24.2,0a7.09,7.09,0,0,1,5.2,2.2A14.85,14.85,0,0,0,33.8.5H34c.1,0,.1.1.1.2a7.8,7.8,0,0,1-2.6,3.6,13.85,13.85,0,0,0,3.3-1H35c.1.1.1.1,0,.2a11.63,11.63,0,0,1-3.5,3.8Z\"\r\n                    transform=\"translate(0 0)\" />\r\n                </svg>\r\n              </a>\r\n              <a class=\"phx-youtube\" href=\"https://youtube.com/channel/UCbmXCHi9e9cS1ALin_Cg6Fg/\" target=\"_blank\">\r\n                <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" viewBox=\"0 0 35.436 24.899\">\r\n                  <title>YouTube</title>\r\n                  <path class=\"phx-fill-white\"\r\n                    d=\"M35.3,8.67a6.15,6.15,0,0,0-.1-1.3c-.1-1.79-.3-3.79-1.5-5.2a6,6,0,0,0-4-1.7C27.8.28,26,.17,24.1.08q-5.7-.16-11.4,0c-2,0-3.9.1-5.8.2-2.4.19-4.8.5-6,2.9-1,2.1-.9,4.9-.9,7.19,0,2.1,0,4.1.1,6.21.1,2.7.3,6.2,3.2,7.29a17.38,17.38,0,0,0,5.1.91c1.7.09,3.5.09,5.3.09,3.7.1,7.3-.09,11-.09a26.93,26.93,0,0,0,7.6-.91c2.1-.7,2.7-3,2.9-5a39.239,39.239,0,0,0,.2-5.9C35.3,11.57,35.4,10.17,35.3,8.67Zm-21.2,9.2V7.17c3,1.8,6.1,3.6,9.1,5.4-3,1.8-6,3.5-9.1,5.3Z\"\r\n                    transform=\"translate(0.003)\" />\r\n                </svg>\r\n              </a>\r\n              <a class=\"phx-aparat\" href=\"https://aparat.com/Join.Phoenix\" target=\"_blank\">\r\n                <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" viewBox=\"0 0 35.284 35.068\">\r\n                  <title>Aparat</title>\r\n                  <path class=\"phx-fill-white\"\r\n                    d=\"M2.69,11.79l1.5-6.2a7.28,7.28,0,0,1,8.7-5.4l6.2,1.6a13.51,13.51,0,0,0-16.4,10Zm27-7.4-6.1-1.5a13.51,13.51,0,0,1,10,16.4l1.5-6.2a7.24,7.24,0,0,0-5.4-8.7Zm-13.4,29,6.2,1.5a7.28,7.28,0,0,0,8.7-5.4l1.5-6.1A13.72,13.72,0,0,1,16.29,33.39ZM1.69,15.89l-1.5,6.2a7.24,7.24,0,0,0,5.4,8.7l6.1,1.5a13.51,13.51,0,0,1-10-16.4Zm31.5,1.7a15.5,15.5,0,1,1-15.5-15.5,15.5,15.5,0,0,1,15.5,15.5Zm-24.3-6.9a4.37,4.37,0,1,0,1.28-3.12A4.4,4.4,0,0,0,8.89,10.69Zm6.4,11.7a4.4,4.4,0,1,0-4.4,4.4A4.4,4.4,0,0,0,15.29,22.39Zm2.2-2.7a1.9,1.9,0,1,0-1.9-1.9,2,2,0,0,0,1.9,1.9Zm8.9,4.9a4.37,4.37,0,1,0-1.273,3.123A4.4,4.4,0,0,0,26.39,24.59Zm2.4-11.7a4.4,4.4,0,1,0-4.4,4.4,4.4,4.4,0,0,0,4.4-4.4Z\"\r\n                    transform=\"translate(0.002 -0.006)\" />\r\n                </svg>\r\n              </a>\r\n            </div>\r\n         \r\n          </li> -->\r\n        </ul>\r\n       \r\n        <div class=\"phx-backdrop\" (click)=\"menuExpanded = false\"></div>\r\n      </div>\r\n    </nav>\r\n  </div>\r\n  ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container h-100\">\r\n  <div class=\"row vh-100\">\r\n    <div class=\"col-md-5\">\r\n      <div class=\"d-flex flex-column justify-content-center align-items-center h-100\">\r\n        <form [formGroup]=\"loginForm\" class=\"w-100\">\r\n          <div class=\"form-group\">\r\n            <input type=\"text\" formControlName=\"userName\" class=\"form-control text-right\" placeholder=\"نام کاربری\">\r\n            <span *ngIf=\"loginForm.get('userName').hasError('required') && loginForm.get('userName').touched\" class=\"text-danger\">\r\n              <small>نام کاربری الزامی است</small>\r\n            </span>\r\n          </div>\r\n\r\n          <div class=\"form-group\">\r\n            <input type=\"password\" formControlName=\"passWord\" class=\"form-control text-right\" placeholder=\"رمز ورود\">\r\n            <span *ngIf=\"loginForm.get('passWord').hasError('required') && loginForm.get('userName').touched\" class=\"text-danger\">\r\n              <small>رمز عبور الزامی است</small>\r\n            </span>\r\n          </div>\r\n          <button [disabled]=\"loginButtonDisabled\" class=\"btn btn-primary text-light w-100\" type=\"submit\" (click)=\"onLoggedin()\">\r\n            <div *ngIf=\"loginButtonDisabled\" class=\"spinner-border text-light\" role=\"status\">\r\n              <span class=\"sr-only\">Loading...</span>\r\n            </div>\r\n            <span *ngIf=\"!loginButtonDisabled\">ورود</span>\r\n\r\n          </button>\r\n\r\n        </form>\r\n\r\n        <a class=\"my-4\" [routerLink]=\"['/sign-up']\" routerLinkActive=\"router-link-active\">ثبت نام</a>\r\n      </div>\r\n\r\n    </div>\r\n    <div class=\"col-md-7\">\r\n      <div class=\"d-flex flex-column justify-content-center align-items-center h-100\">\r\n        <img src=\"assets/images/question.png\" width=\"150px\" class=\"user-avatar\" />\r\n        <h4 class=\"my-3\">\r\n          سوال و جواب\r\n        </h4>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/sign-up/sign-up.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/sign-up/sign-up.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container h-100\">\r\n    <div class=\"row vh-100\">\r\n      <div class=\"col-md-5\">\r\n        <div class=\"py-5 d-flex flex-column justify-content-center align-items-center h-100\">\r\n          <form [formGroup]=\"signUpForm\" class=\"w-100\">\r\n            <div class=\"form-group\">\r\n              <input type=\"text\" formControlName=\"userName\" class=\"form-control text-right\" placeholder=\"نام کاربری\">\r\n              <span *ngIf=\"signUpForm.get('userName').hasError('required') && signUpForm.get('userName').touched\" class=\"text-danger\">\r\n                <small>نام کاربری الزامی است</small>\r\n              </span>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n              <input type=\"password\" formControlName=\"passWord\" class=\"form-control text-right\" placeholder=\"رمز ورود\">\r\n              <span *ngIf=\"signUpForm.get('passWord').hasError('required')  && signUpForm.get('passWord').touched\" class=\"text-danger\">\r\n                <small>رمز عبور الزامی است</small>\r\n              </span>\r\n              <span *ngIf=\"signUpForm.get('passWord').hasError('minlength')\" class=\"text-danger\">\r\n                <small>رمز ورود حدافل باید 6 کاراکتر یا بیشتر باشد</small>\r\n              </span>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n              <input type=\"password\" formControlName=\"repeatPassWord\" class=\"form-control text-right\" placeholder=\"تکرار رمز ورود\">\r\n              <span *ngIf=\"signUpForm.get('repeatPassWord').hasError('required') && signUpForm.get('repeatPassWord').touched\" class=\"text-danger\">\r\n                <small>تکرار رمز عبور الزامی است</small>\r\n              </span>\r\n              <span *ngIf=\"signUpForm.get('repeatPassWord').hasError('mustMatch')\" class=\"text-danger\">\r\n                <small>رمز عبور تطابق ندارد</small>\r\n              </span>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n              <input type=\"text\" formControlName=\"name\" class=\"form-control text-right\" placeholder=\"نام\">\r\n              <span *ngIf=\"signUpForm.get('name').hasError('required') && signUpForm.get('name').touched\" class=\"text-danger\">\r\n                <small>نام الزامی است</small>\r\n              </span>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n              <input type=\"text\" formControlName=\"family\" class=\"form-control text-right\" placeholder=\"نام خانوادگی\">\r\n              <span *ngIf=\"signUpForm.get('family').hasError('required') && signUpForm.get('family').touched\" class=\"text-danger\">\r\n                <small>نام خانوادگی الزامی است</small>\r\n              </span>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n              <input type=\"email\" formControlName=\"email\" class=\"form-control text-right\" placeholder=\"ایمیل\">\r\n              <span *ngIf=\"signUpForm.get('email').hasError('required') && signUpForm.get('email').touched\" class=\"text-danger\">\r\n                <small>ایمیل الزامی است</small>\r\n              </span>\r\n\r\n              <span *ngIf=\"signUpForm.get('email').hasError('email')\" class=\"text-danger\">\r\n                <small>قالب ایمیل را رعایت کنید</small>\r\n              </span>\r\n            </div>\r\n\r\n\r\n            <button [disabled]=\"signUpButtonDisabled\" class=\"btn btn-primary text-light w-100\" type=\"submit\" (click)=\"onSignedUp()\">\r\n              <div *ngIf=\"signUpButtonDisabled\" class=\"spinner-border text-light\" role=\"status\">\r\n                <span class=\"sr-only\">Loading...</span>\r\n              </div>\r\n              <span *ngIf=\"!signUpButtonDisabled\">ثبت نام</span>\r\n\r\n            </button>\r\n\r\n          </form>\r\n\r\n          <a class=\"my-4\" [routerLink]=\"['/login']\" routerLinkActive=\"router-link-active\">ورود</a>\r\n        </div>\r\n\r\n      </div>\r\n      <div class=\"col-md-7\">\r\n        <div class=\"d-flex flex-column justify-content-center align-items-center h-100\">\r\n          <img src=\"assets/images/question.png\" width=\"150px\" class=\"user-avatar\" />\r\n          <h4 class=\"my-3\">\r\n          سوال و جواب\r\n          </h4>\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/dashboard.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/dashboard.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"mb-3\">\r\n    <app-question></app-question>\r\n</div>\r\n\r\n<div class=\"mb-3\">\r\n    <app-questions-feed></app-questions-feed>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/my-answer-list/edit-answer-modal/edit-answer-modal.component.html":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/my-answer-list/edit-answer-modal/edit-answer-modal.component.html ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-header\">\r\n    <h4 class=\"modal-title\">ویرایش جواب</h4>\r\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross click')\">\r\n        <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n</div>\r\n<div class=\"modal-body\">\r\n    <!-- <span>{{item | json}}</span> -->\r\n\r\n    <div class=\"form-group\">\r\n        <input class=\"form-control\" [(ngModel)]=\"matn\">\r\n      </div>\r\n\r\n      <small *ngIf=\"!matn\" class=\"text-danger\">متن نمی تواند خالی باشد</small>\r\n</div>\r\n<div class=\"modal-footer\">\r\n    <button type=\"button\" class=\"btn btn-success\" (click)=\"sendEditedAnswerBack()\">ویرایش</button>\r\n    <button type=\"button\" NgbAutoFocus class=\"btn btn-danger\" (click)=\"activeModal.dismiss()\">لغو</button>\r\n\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/my-answer-list/my-answer-list.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/my-answer-list/my-answer-list.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"container-fluid\">\r\n    <div class=\"card\">\r\n        <div class=\"card-body\">\r\n            <h4>لیست جواب هایی که داده ام</h4>\r\n\r\n            <div class=\"scrollable-content\">\r\n                <ngb-accordion #acc=\"ngbAccordion\" [closeOthers]=\"true\" (panelChange)=\"getAnswerDetails($event)\">\r\n                    <ngb-panel *ngFor=\"let item of answerList; let i=$implicit\" id=\"{{i.idSoal}}-{{i.id}}\">\r\n                        <ng-template ngbPanelHeader>\r\n                            <div class=\"row no-gutters\">\r\n                                <div class=\"col-10\">\r\n                                    <button ngbPanelToggle class=\"btn pr-2 d-flex flex-column justify-content-center align-items-start\">\r\n                                        <div class=\"d-flex mb-2\">\r\n                                            <small class=\"text-lite-dark\">\r\n                                                <span>{{item.username}}</span>\r\n                                            </small>\r\n                                        </div>\r\n                                        <div class=\"\">\r\n                                            {{item.matn}}\r\n                                        </div>\r\n                                    </button>\r\n                                </div>\r\n                                <div class=\"col-2\">\r\n                                    <div class=\"d-flex justify-content-end align-items-center h-100\">\r\n                                        <ul class=\"list-unstyled list-inline m-2\">\r\n                                            <li class=\"list-inline-item\">\r\n                                                <button class=\"btn\" (click)=\"editAnswer(item)\">\r\n                                                    <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"14.039\"\r\n                                                        height=\"13.967\" viewBox=\"0 0 14.039 13.967\">\r\n                                                        <path id=\"Path_427\" data-name=\"Path 427\"\r\n                                                            d=\"M817.938,444.257a.349.349,0,0,0-.349.35v3.1a1.05,1.05,0,0,1-1.049,1.048h-9.81a1.05,1.05,0,0,1-1.049-1.048V438.6a1.051,1.051,0,0,1,1.049-1.048h3.1a.35.35,0,1,0,0-.7h-3.1a1.75,1.75,0,0,0-1.749,1.748v9.112a1.749,1.749,0,0,0,1.749,1.748h9.81a1.749,1.749,0,0,0,1.749-1.748v-3.1a.35.35,0,0,0-.35-.35Zm0,0\"\r\n                                                            transform=\"translate(-804.981 -435.491)\" fill=\"#242c32\" />\r\n                                                        <path id=\"Path_428\" data-name=\"Path 428\"\r\n                                                            d=\"M818.418,435.855a1.573,1.573,0,0,0-2.225,0l-6.238,6.238a.356.356,0,0,0-.09.154l-.82,2.961a.35.35,0,0,0,.43.43l2.961-.821a.358.358,0,0,0,.154-.09l6.237-6.238a1.575,1.575,0,0,0,0-2.225Zm-7.7,6.465,5.1-5.1,1.646,1.646-5.1,5.106Zm-.33.66L811.7,444.3l-1.82.5ZM818.334,438l-.371.371-1.647-1.647.372-.371a.873.873,0,0,1,1.236,0l.41.41a.876.876,0,0,1,0,1.237Zm0,0\"\r\n                                                            transform=\"translate(-805.25 -435.395)\" fill=\"#242c32\" />\r\n                                                    </svg>\r\n                                                </button>\r\n                                            </li>\r\n                                            <li class=\"list-inline-item\">\r\n                                                <button class=\"btn\" (click)=\"deleteAnswer(item)\">\r\n                                                    <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"13.964\"\r\n                                                        height=\"17.269\" viewBox=\"0 0 13.964 17.269\">\r\n                                                        <path id=\"Path_419\" data-name=\"Path 419\"\r\n                                                            d=\"M783.42,434.432h-2.688a2.337,2.337,0,0,0-4.643,0H773.4a1.975,1.975,0,0,0-1.973,1.973v.1a1.975,1.975,0,0,0,1.246,1.833v9.32a1.976,1.976,0,0,0,1.973,1.974h7.526a1.976,1.976,0,0,0,1.973-1.974v-9.32a1.975,1.975,0,0,0,1.246-1.833v-.1a1.975,1.975,0,0,0-1.973-1.973ZM778.41,433.3a1.4,1.4,0,0,1,1.376,1.133h-2.752a1.4,1.4,0,0,1,1.376-1.133Zm4.8,14.36a1.038,1.038,0,0,1-1.036,1.038h-7.526a1.039,1.039,0,0,1-1.037-1.038v-9.18h9.6Zm1.247-11.152a1.038,1.038,0,0,1-1.037,1.037H773.4a1.038,1.038,0,0,1-1.037-1.037v-.1a1.038,1.038,0,0,1,1.037-1.037H783.42a1.038,1.038,0,0,1,1.037,1.037Zm0,0\"\r\n                                                            transform=\"translate(-771.428 -432.363)\" fill=\"#242c32\" />\r\n                                                        <path id=\"Path_420\" data-name=\"Path 420\"\r\n                                                            d=\"M776.187,448.135a.468.468,0,0,0,.468-.468V442.4a.468.468,0,0,0-.935,0v5.268a.469.469,0,0,0,.468.468Zm0,0\"\r\n                                                            transform=\"translate(-771.713 -432.999)\" fill=\"#242c32\" />\r\n                                                        <path id=\"Path_421\" data-name=\"Path 421\"\r\n                                                            d=\"M778.874,448.135a.468.468,0,0,0,.468-.468V442.4a.468.468,0,0,0-.935,0v5.268a.468.468,0,0,0,.468.468Zm0,0\"\r\n                                                            transform=\"translate(-771.892 -432.999)\" fill=\"#242c32\" />\r\n                                                        <path id=\"Path_422\" data-name=\"Path 422\"\r\n                                                            d=\"M781.561,448.135a.469.469,0,0,0,.468-.468V442.4a.468.468,0,1,0-.935,0v5.268a.468.468,0,0,0,.468.468Zm0,0\"\r\n                                                            transform=\"translate(-772.07 -432.999)\" fill=\"#242c32\" />\r\n                                                    </svg>\r\n                                                </button>\r\n\r\n                                            </li>\r\n                                        </ul>\r\n                                    </div>\r\n\r\n                                </div>\r\n                            </div>\r\n                        </ng-template>\r\n                        <ng-template ngbPanelContent>\r\n                            <div>\r\n                                <div *ngIf=\"question\" class=\"card\">\r\n                                    <div class=\"card-body p-2\">\r\n                                        <div class=\"pr-2 d-flex flex-column justify-content-center align-items-start\">\r\n                                            <div class=\"d-flex mb-2\">\r\n                                                <small class=\"d-flex text-lite-dark\">\r\n                                                    <span>{{question.username}} </span> -\r\n                                                    <span>{{question.reshteh}} </span> -\r\n                                                    <span>{{question.zirreshteh}} </span> -\r\n                                                    <span>{{question.regDate}} </span>\r\n                                                </small>\r\n                                            </div>\r\n                                            <div class=\"\">\r\n                                                {{question.matn}}\r\n                                            </div>\r\n                                        </div>     \r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </ng-template>\r\n                    </ngb-panel>\r\n                </ngb-accordion>\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n</section>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/my-question-list/edit-question-modal/edit-question-modal.component.html":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/my-question-list/edit-question-modal/edit-question-modal.component.html ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-header\">\r\n    <h4 class=\"modal-title\">ویرایش سوال</h4>\r\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross click')\">\r\n        <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n</div>\r\n<div class=\"modal-body\">\r\n    <!-- <span>{{item | json}}</span> -->\r\n    <form [formGroup]=\"editQuestionForm\">\r\n        <div class=\"row\">\r\n          <!-- <div class=\"col-sm-6\">\r\n            <div class=\"form-group\">\r\n              <label for=\"exampleFormControlSelect1\">رشته</label>\r\n              <input disabled class=\"form-control\" value=\"{{item.reshteh}}\">\r\n            </div>\r\n          </div>\r\n          <div class=\"col-sm-6\">\r\n            <div class=\"form-group\">\r\n              <label for=\"exampleFormControlSelect1\">زیر رشته</label>\r\n              <input class=\"form-control\" disabled value=\"{{item.zirreshteh}}\">\r\n            </div>\r\n          </div> -->\r\n          <div class=\"col-12\">\r\n            <div class=\"form-group\">\r\n              <textarea formControlName=\"questionBody\" class=\"form-control\" placeholder=\"متن سوال\" rows=\"6\"></textarea>\r\n              <span *ngIf=\"editQuestionForm.get('questionBody').hasError('required') &&\r\n              editQuestionForm.get('questionBody').value === null &&\r\n              editQuestionForm.get('questionBody').touched\" class=\"text-danger\">\r\n                <small>متن سوال الزامی است</small>\r\n              </span>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"col-12\">\r\n            <div class=\"form-group\">\r\n              <tag-input  formControlName=\"tags\" (onAdd)=\"checkIfAvalable($event)\" theme='bootstrap' [onlyFromAutocomplete]=\"false\"\r\n              [placeholder]=\"'تگ بعدی'\" [secondaryPlaceholder]=\"'تگ را وارد کنید'\"\r\n              [separatorKeyCodes]=\"[32]\" [allowDupes]=\"false\">\r\n                <tag-input-dropdown [keepOpen]=\"false\" [autocompleteObservable]='requestAutocompleteItems' [showDropdownIfEmpty]=\"true\">\r\n                  <ng-template let-item=\"item\" let-index=\"index\">\r\n                    {{ item.display }}\r\n                  </ng-template>\r\n                </tag-input-dropdown>\r\n              </tag-input>\r\n              <span *ngIf=\"editQuestionForm.get('tags').hasError('required') &&\r\n              editQuestionForm.get('tags').touched\" class=\"text-danger\">\r\n                <small>تگ الزامی است</small>\r\n              </span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <!-- <button class=\"btn btn-primary\" type=\"submit\" (click)=\"editQuestion()\">\r\n          <div *ngIf=\"disabled\" class=\"spinner-border text-light\" role=\"status\">\r\n            <span class=\"sr-only\">Loading...</span>\r\n          </div>\r\n          <span *ngIf=\"!disabled\">ویرایش سوال</span>\r\n        </button> -->\r\n      </form>\r\n</div>\r\n<div class=\"modal-footer\">\r\n    <button type=\"button\" class=\"btn btn-success\" (click)=\"sendEditedQuestionBack()\">ویرایش</button>\r\n    <button type=\"button\" NgbAutoFocus class=\"btn btn-danger\" (click)=\"activeModal.dismiss()\">لغو</button>\r\n\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/my-question-list/my-question-list.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/my-question-list/my-question-list.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"container-fluid\">\r\n    <div class=\"card\">\r\n        <div class=\"card-body\">\r\n            <h4>لیست سوالاتی که پرسیده ام</h4>\r\n\r\n            <div class=\"scrollable-content\">\r\n                <ngb-accordion #acc=\"ngbAccordion\" [closeOthers]=\"true\" (panelChange)=\"getDetailsQuestion($event)\">\r\n                    <ngb-panel *ngFor=\"let item of questionList; let i=$implicit\" id=\"{{i.soalId}}\">\r\n                        <ng-template ngbPanelHeader>\r\n                            <div class=\"row no-gutters\">\r\n                                <div class=\"col-10\">\r\n                                    <button ngbPanelToggle class=\"btn pr-2 d-flex flex-column justify-content-center align-items-start\">\r\n                                        <div class=\"d-flex mb-2\">\r\n                                            <small class=\"text-lite-dark\">\r\n                                                <span class=\"badge badge-primary\">{{item.javabCount}}</span> -\r\n                                                <span>{{item.reshteh}}</span> -\r\n                                                <span>{{item.zirreshteh}}</span> -\r\n                                                <span>{{item.regDate}}</span>\r\n                                            </small>\r\n                                        </div>\r\n                                        <div class=\"\">\r\n                                            {{item.matn}}\r\n                                        </div>\r\n                                    </button>\r\n                                </div>\r\n                                <div class=\"col-2\">\r\n                                    <div class=\"d-flex justify-content-end align-items-center h-100\">\r\n                                        <ul class=\"list-unstyled list-inline m-2\">\r\n                                            <li class=\"list-inline-item\">\r\n                                                <button class=\"btn\" (click)=\"editQuestion(item)\">\r\n                                                    <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"14.039\"\r\n                                                        height=\"13.967\" viewBox=\"0 0 14.039 13.967\">\r\n                                                        <path id=\"Path_427\" data-name=\"Path 427\"\r\n                                                            d=\"M817.938,444.257a.349.349,0,0,0-.349.35v3.1a1.05,1.05,0,0,1-1.049,1.048h-9.81a1.05,1.05,0,0,1-1.049-1.048V438.6a1.051,1.051,0,0,1,1.049-1.048h3.1a.35.35,0,1,0,0-.7h-3.1a1.75,1.75,0,0,0-1.749,1.748v9.112a1.749,1.749,0,0,0,1.749,1.748h9.81a1.749,1.749,0,0,0,1.749-1.748v-3.1a.35.35,0,0,0-.35-.35Zm0,0\"\r\n                                                            transform=\"translate(-804.981 -435.491)\" fill=\"#242c32\" />\r\n                                                        <path id=\"Path_428\" data-name=\"Path 428\"\r\n                                                            d=\"M818.418,435.855a1.573,1.573,0,0,0-2.225,0l-6.238,6.238a.356.356,0,0,0-.09.154l-.82,2.961a.35.35,0,0,0,.43.43l2.961-.821a.358.358,0,0,0,.154-.09l6.237-6.238a1.575,1.575,0,0,0,0-2.225Zm-7.7,6.465,5.1-5.1,1.646,1.646-5.1,5.106Zm-.33.66L811.7,444.3l-1.82.5ZM818.334,438l-.371.371-1.647-1.647.372-.371a.873.873,0,0,1,1.236,0l.41.41a.876.876,0,0,1,0,1.237Zm0,0\"\r\n                                                            transform=\"translate(-805.25 -435.395)\" fill=\"#242c32\" />\r\n                                                    </svg>\r\n                                                </button>\r\n                                            </li>\r\n                                            <li class=\"list-inline-item\">\r\n                                                <button class=\"btn\" (click)=\"deleteQuestion(item)\">\r\n                                                    <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"13.964\"\r\n                                                        height=\"17.269\" viewBox=\"0 0 13.964 17.269\">\r\n                                                        <path id=\"Path_419\" data-name=\"Path 419\"\r\n                                                            d=\"M783.42,434.432h-2.688a2.337,2.337,0,0,0-4.643,0H773.4a1.975,1.975,0,0,0-1.973,1.973v.1a1.975,1.975,0,0,0,1.246,1.833v9.32a1.976,1.976,0,0,0,1.973,1.974h7.526a1.976,1.976,0,0,0,1.973-1.974v-9.32a1.975,1.975,0,0,0,1.246-1.833v-.1a1.975,1.975,0,0,0-1.973-1.973ZM778.41,433.3a1.4,1.4,0,0,1,1.376,1.133h-2.752a1.4,1.4,0,0,1,1.376-1.133Zm4.8,14.36a1.038,1.038,0,0,1-1.036,1.038h-7.526a1.039,1.039,0,0,1-1.037-1.038v-9.18h9.6Zm1.247-11.152a1.038,1.038,0,0,1-1.037,1.037H773.4a1.038,1.038,0,0,1-1.037-1.037v-.1a1.038,1.038,0,0,1,1.037-1.037H783.42a1.038,1.038,0,0,1,1.037,1.037Zm0,0\"\r\n                                                            transform=\"translate(-771.428 -432.363)\" fill=\"#242c32\" />\r\n                                                        <path id=\"Path_420\" data-name=\"Path 420\"\r\n                                                            d=\"M776.187,448.135a.468.468,0,0,0,.468-.468V442.4a.468.468,0,0,0-.935,0v5.268a.469.469,0,0,0,.468.468Zm0,0\"\r\n                                                            transform=\"translate(-771.713 -432.999)\" fill=\"#242c32\" />\r\n                                                        <path id=\"Path_421\" data-name=\"Path 421\"\r\n                                                            d=\"M778.874,448.135a.468.468,0,0,0,.468-.468V442.4a.468.468,0,0,0-.935,0v5.268a.468.468,0,0,0,.468.468Zm0,0\"\r\n                                                            transform=\"translate(-771.892 -432.999)\" fill=\"#242c32\" />\r\n                                                        <path id=\"Path_422\" data-name=\"Path 422\"\r\n                                                            d=\"M781.561,448.135a.469.469,0,0,0,.468-.468V442.4a.468.468,0,1,0-.935,0v5.268a.468.468,0,0,0,.468.468Zm0,0\"\r\n                                                            transform=\"translate(-772.07 -432.999)\" fill=\"#242c32\" />\r\n                                                    </svg>\r\n                                                </button>\r\n\r\n                                            </li>\r\n                                        </ul>\r\n                                    </div>\r\n\r\n                                </div>\r\n                            </div>\r\n                        </ng-template>\r\n                        <ng-template ngbPanelContent>\r\n                            <div *ngIf=\"answers\">\r\n                                <div *ngFor=\"let item of answers\" class=\"card\">\r\n                                    <div class=\"card-body p-2\">\r\n                                        <div class=\"d-flex flex-column\">\r\n                                            <span>{{item.username}}</span>\r\n                                            <span>{{item.matn}}</span>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </ng-template>\r\n                    </ngb-panel>\r\n                </ngb-accordion>\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n</section>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/profile.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/profile.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\r\n    <div class=\"row\">\r\n        <div class=\"col-12\">\r\n            <ul ngbNav #nav=\"ngbNav\" [activeId]=\"1\" class=\"nav-tabs\">\r\n                <li [ngbNavItem]=\"1\">\r\n                    <a ngbNavLink>تغییر رمز</a>\r\n                    <ng-template ngbNavContent>\r\n                        <form [formGroup]=\"changePasswordForm\">\r\n                            <div class=\"form-group\">\r\n                                <input type=\"password\" formControlName=\"currentPassword\" placeholder=\"رمز ورود فعلی\"\r\n                                    class=\"form-control\">\r\n                                <small\r\n                                    *ngIf=\"changePasswordForm.get('currentPassword').hasError('required') && changePasswordForm.get('currentPassword').touched\"\r\n                                    class=\"text-danger\">رمز فعلی الزامی است</small>\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                                <input type=\"password\" formControlName=\"newPassword\" placeholder=\"رمز ورود جدید\"\r\n                                    class=\"form-control\">\r\n                                <small\r\n                                    *ngIf=\"changePasswordForm.get('newPassword').hasError('required') && changePasswordForm.get('newPassword').touched\"\r\n                                    class=\"text-danger\">رمز جدید الزامی است</small>\r\n                                <small *ngIf=\"changePasswordForm.get('newPassword').hasError('minlength')\"\r\n                                    class=\"text-danger\">رمز جدید حداقل باید 6 حرف باشد</small>\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                                <input type=\"password\" formControlName=\"repeatPassword\"\r\n                                    placeholder=\"تکرار رمز ورود جدید\" class=\"form-control\">\r\n                                <small\r\n                                    *ngIf=\"changePasswordForm.get('repeatPassword').hasError('required') && changePasswordForm.get('repeatPassword').touched\"\r\n                                    class=\"text-danger\">تکرار رمز الزامی است</small>\r\n                                <small *ngIf=\"changePasswordForm.get('repeatPassword').hasError('mustMatch')\"\r\n                                    class=\"text-danger\">رمز عبور تطابق ندارد</small>\r\n                            </div>\r\n                            <button class=\"btn btn-primary\" (click)=\"changePassword()\">تغییر</button>\r\n                        </form>\r\n\r\n                    </ng-template>\r\n                </li>\r\n                <li [ngbNavItem]=\"2\">\r\n                    <a ngbNavLink>انتخاب تخصص</a>\r\n                    <ng-template ngbNavContent>\r\n                        <form [formGroup]=\"selectTagsForm\">\r\n                            <div class=\"form-group bg-white\">\r\n                                <tag-input  formControlName=\"tags\" (onAdd)=\"checkIfAvalable($event)\" theme='bootstrap' [onlyFromAutocomplete]=\"false\"\r\n                                [placeholder]=\"'تگ بعدی'\" [secondaryPlaceholder]=\"'تگ را وارد کنید'\"\r\n                                [separatorKeyCodes]=\"[32]\" [allowDupes]=\"false\">\r\n                                  <tag-input-dropdown [keepOpen]=\"false\" [autocompleteObservable]='requestAutocompleteItems' [showDropdownIfEmpty]=\"true\">\r\n                                    <ng-template let-item=\"item\" let-index=\"index\">\r\n                                      {{ item.display }}\r\n                                    </ng-template>\r\n                                  </tag-input-dropdown>\r\n                                </tag-input>\r\n                                <span *ngIf=\"selectTagsForm.get('tags').hasError('required') &&\r\n                                selectTagsForm.get('tags').touched\" class=\"text-danger\">\r\n                                  <small>تگ الزامی است</small>\r\n                                </span>\r\n                              </div>\r\n                        </form>\r\n                        <div class=\"mt-5 mb-2\">\r\n                            <button class=\"btn btn-success\" (click)=\"saveTags()\">ذخیره</button>\r\n                        </div>\r\n                    </ng-template>\r\n                </li>\r\n            </ul>\r\n\r\n            <div [ngbNavOutlet]=\"nav\" class=\"mt-2\"></div>\r\n        </div>\r\n\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/question/question.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/question/question.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"container-fluid\">\r\n  <div class=\"card\">\r\n    <div class=\"card-body\">\r\n      <h4>پرسش سوال</h4>\r\n      <form [formGroup]=\"registerQuestion\">\r\n        <div class=\"row\">\r\n          <!-- <div class=\"col-sm-6\">\r\n            <div class=\"form-group\">\r\n              <select formControlName=\"field\" class=\"form-control\">\r\n                <option [ngValue]=\"null\" disabled>رشته</option>\r\n                <option *ngFor=\"let item of fields\" [ngValue]=\"item.id\">{{item.onvan}}</option>\r\n              </select>\r\n              <span *ngIf=\"registerQuestion.get('field').hasError('required') &&\r\n               registerQuestion.get('field').value === null &&\r\n               registerQuestion.get('field').touched\" class=\"text-danger\">\r\n                <small>رشته الزامی است</small>\r\n              </span>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-sm-6\">\r\n            <div class=\"form-group\">\r\n              <select formControlName=\"subField\" class=\"form-control\">\r\n                <option [ngValue]=\"null\" disabled>زیر رشته</option>\r\n                <option *ngFor=\"let item of activeSubFields\" [ngValue]=\"item.id\">{{item.onvan}}</option>\r\n              </select>\r\n              <span *ngIf=\"registerQuestion.get('subField').hasError('required') &&\r\n              registerQuestion.get('subField').value === null &&\r\n              registerQuestion.get('subField').touched\" class=\"text-danger\">\r\n                <small>زیر رشته الزامی است</small>\r\n              </span>\r\n            </div>\r\n          </div> -->\r\n          <div class=\"col-12\">\r\n            <div class=\"form-group\">\r\n              <textarea formControlName=\"questionBody\" class=\"form-control\" placeholder=\"متن سوال\" rows=\"6\"></textarea>\r\n              <span *ngIf=\"registerQuestion.get('questionBody').hasError('required') &&\r\n              registerQuestion.get('questionBody').touched\" class=\"text-danger\">\r\n                <small>متن سوال الزامی است</small>\r\n              </span>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"col-12\">\r\n            <div class=\"form-group\">\r\n              <tag-input  formControlName=\"tags\" (onAdd)=\"checkIfAvalable($event)\" theme='bootstrap' [onlyFromAutocomplete]=\"false\"\r\n              [placeholder]=\"'تگ بعدی'\" [secondaryPlaceholder]=\"'تگ را وارد کنید'\"\r\n              [separatorKeyCodes]=\"[32]\" [allowDupes]=\"false\">\r\n                <tag-input-dropdown [keepOpen]=\"false\" [autocompleteObservable]='requestAutocompleteItems' [showDropdownIfEmpty]=\"true\">\r\n                  <ng-template let-item=\"item\" let-index=\"index\">\r\n                    {{ item.display }}\r\n                  </ng-template>\r\n                </tag-input-dropdown>\r\n              </tag-input>\r\n              <span *ngIf=\"registerQuestion.get('tags').hasError('required') &&\r\n              registerQuestion.get('tags').touched\" class=\"text-danger\">\r\n                <small>تگ الزامی است</small>\r\n              </span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <button class=\"btn btn-primary\" type=\"submit\" (click)=\"registerQuestionForm()\">\r\n          <div *ngIf=\"disabled\" class=\"spinner-border text-light\" role=\"status\">\r\n            <span class=\"sr-only\">Loading...</span>\r\n          </div>\r\n          <span *ngIf=\"!disabled\">ثبت سوال</span>\r\n        </button>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</section>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/questions-feed/questions-feed.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/questions-feed/questions-feed.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"container-fluid\">\r\n  <div class=\"card\">\r\n    <div class=\"card-body\">\r\n      <h4>لیست سوالاتی که می توانم پاسخ دهم</h4>\r\n      <div *ngIf=\"hasTags\">\r\n        <div *ngIf=\"questionList && questionList.length > 0\" class=\"scrollable-content\">\r\n          <ngb-accordion #acc=\"ngbAccordion\" [closeOthers]=\"true\">\r\n            <ngb-panel *ngFor=\"let item of questionList; let i=$implicit\" id=\"{{i.soalId}}\">\r\n              <ng-template ngbPanelHeader>\r\n                <div class=\"row no-gutters\">\r\n                  <div class=\"col-12\">\r\n                    <button ngbPanelToggle class=\"btn pr-2 d-flex flex-column justify-content-center align-items-start\">\r\n                      <div class=\"d-flex mb-2\">\r\n                        <small class=\"text-lite-dark\">\r\n                          <span class=\"badge badge-primary\">{{item.username}}</span> -\r\n                          <span>{{item.regDate}}</span>\r\n                        </small>\r\n                      </div>\r\n                      <div class=\"\">\r\n                        {{item.matn}}\r\n                      </div>\r\n                    </button>\r\n                  </div>\r\n                </div>\r\n              </ng-template>\r\n              <ng-template ngbPanelContent>\r\n                <div>\r\n                  <div class=\"card\">\r\n                    <div class=\"card-body\">\r\n                      <div class=\"row\">\r\n                        <div class=\"col-10\">\r\n                          <div class=\"form-group mb-0\">\r\n                            <input type=\"text\" [(ngModel)]=\"answer\" class=\"form-control\">\r\n                          </div>\r\n                        </div>\r\n                        <div class=\"col-2\">\r\n                          <button class=\"btn btn-primary\" [disabled]=\"!answer\" (click)=\"sendAnswer(item)\">\r\n                            <span *ngIf=\"answerLoading === false\">پاسخ</span>\r\n                            <div *ngIf=\"answerLoading === true\" class=\"spinner-border\" role=\"status\">\r\n                              <span class=\"sr-only\">Loading...</span>\r\n                            </div>\r\n                          </button>\r\n                        </div>\r\n\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </ng-template>\r\n            </ngb-panel>\r\n          </ngb-accordion>\r\n          <div class=\"d-flex justify-content-center align-items-center\">\r\n            <a *ngIf=\"questionList.length > 0\" href=\"javascript:void(0)\" class=\"m-3\" (click)=\"loadMore()\">\r\n              <span *ngIf=\"loadMoreLoading === false\">سوالات بیشتر</span>\r\n              <div *ngIf=\"loadMoreLoading === true\" class=\"spinner-border\" role=\"status\">\r\n                <span class=\"sr-only\">Loading...</span>\r\n              </div>\r\n            </a>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div *ngIf=\"!hasTags\" class=\"d-flex justify-content-center align-items-center\">\r\n        <h5 class=\"text-danger\">\r\n          لطفا در قسمت پروفایل تخصص های خود را انتخاب کنید\r\n        </h5>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</section>\r\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _layout_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layout/layout.component */ "./src/app/layout/layout.component.ts");
/* harmony import */ var _core_auth_auth_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core/auth/auth.guard */ "./src/app/core/auth/auth.guard.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _pages_question_question_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/question/question.component */ "./src/app/pages/question/question.component.ts");
/* harmony import */ var _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/dashboard/dashboard.component */ "./src/app/pages/dashboard/dashboard.component.ts");
/* harmony import */ var _pages_my_question_list_my_question_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/my-question-list/my-question-list.component */ "./src/app/pages/my-question-list/my-question-list.component.ts");
/* harmony import */ var _pages_my_answer_list_my_answer_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/my-answer-list/my-answer-list.component */ "./src/app/pages/my-answer-list/my-answer-list.component.ts");
/* harmony import */ var _pages_questions_feed_questions_feed_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/questions-feed/questions-feed.component */ "./src/app/pages/questions-feed/questions-feed.component.ts");
/* harmony import */ var _login_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./login/sign-up/sign-up.component */ "./src/app/login/sign-up/sign-up.component.ts");
/* harmony import */ var _pages_profile_profile_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/profile/profile.component */ "./src/app/pages/profile/profile.component.ts");













var routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
    },
    {
        path: 'login',
        // loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"]
    },
    {
        path: 'sign-up',
        component: _login_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_11__["SignUpComponent"]
    },
    {
        path: 'home',
        // component: LayoutComponent,
        canActivate: [_core_auth_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]],
        // loadChildren: () => import('./layout/layout.module').then(m => m.LayoutModule)
        component: _layout_layout_component__WEBPACK_IMPORTED_MODULE_3__["LayoutComponent"],
        children: [
            {
                path: '',
                redirectTo: 'dashboard',
                pathMatch: 'full'
            },
            {
                path: 'dashboard',
                component: _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__["DashboardComponent"],
            },
            {
                path: 'question',
                component: _pages_question_question_component__WEBPACK_IMPORTED_MODULE_6__["QuestionComponent"],
            },
            {
                path: 'my-questions',
                component: _pages_my_question_list_my_question_list_component__WEBPACK_IMPORTED_MODULE_8__["MyQuestionListComponent"],
            },
            {
                path: 'my-answers',
                component: _pages_my_answer_list_my_answer_list_component__WEBPACK_IMPORTED_MODULE_9__["MyAnswerListComponent"],
            },
            {
                path: 'question-feed',
                component: _pages_questions_feed_questions_feed_component__WEBPACK_IMPORTED_MODULE_10__["QuestionsFeedComponent"],
            },
            {
                path: 'profile',
                component: _pages_profile_profile_component__WEBPACK_IMPORTED_MODULE_12__["ProfileComponent"],
            }
        ]
    },
    {
        path: '**',
        pathMatch: 'full',
        redirectTo: 'home'
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");



var AppComponent = /** @class */ (function () {
    function AppComponent(translate) {
        this.translate = translate;
        this.title = 'front-soal-javab';
        this.translate.addLangs(['en', 'fa']);
        this.translate.setDefaultLang('fa');
        // const browserLang = this.translate.getBrowserLang();
        // this.translate.use(browserLang.match(/en|fa/) ? browserLang : 'fa');
    }
    AppComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"] }
    ]; };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: createTranslateLoader, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTranslateLoader", function() { return createTranslateLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_layout_layout_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/layout/layout.module */ "./src/app/layout/layout.module.ts");
/* harmony import */ var _app_core_core_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_core_auth_auth_guard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @app/core/auth/auth.guard */ "./src/app/core/auth/auth.guard.ts");
/* harmony import */ var _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/fesm5/ngx-translate-http-loader.js");
/* harmony import */ var _login_login_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./login/login.module */ "./src/app/login/login.module.ts");
/* harmony import */ var _pages_pages_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/pages.module */ "./src/app/pages/pages.module.ts");
















function createTranslateLoader(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_13__["TranslateHttpLoader"](http, './assets/i18n/', '.json');
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_8__["CommonModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__["TranslateModule"].forRoot({
                    loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__["TranslateLoader"],
                        useFactory: (createTranslateLoader),
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClient"]],
                    }
                }),
                _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_11__["SharedModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _app_core_core_module__WEBPACK_IMPORTED_MODULE_6__["CoreModule"],
                _login_login_module__WEBPACK_IMPORTED_MODULE_14__["LoginModule"],
                _app_layout_layout_module__WEBPACK_IMPORTED_MODULE_5__["LayoutModule"],
                _pages_pages_module__WEBPACK_IMPORTED_MODULE_15__["PagesModule"],
            ],
            providers: [
                _app_core_auth_auth_guard__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"],
                { provide: 'api.config', useValue: src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].apiConfig }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/core/auth/auth.guard.ts":
/*!*****************************************!*\
  !*** ./src/app/core/auth/auth.guard.ts ***!
  \*****************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_core_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/core/auth/auth.service */ "./src/app/core/auth/auth.service.ts");




var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        var account = this.authService.getAccount();
        if (account) {
            return true;
        }
        this.router.navigate(['/login']);
        return false;
    };
    AuthGuard.ctorParameters = function () { return [
        { type: _app_core_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/core/auth/auth.service.ts":
/*!*******************************************!*\
  !*** ./src/app/core/auth/auth.service.ts ***!
  \*******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_core_common_models_api_config_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/core/common/models/api-config.model */ "./src/app/core/common/models/api-config.model.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");








var AuthService = /** @class */ (function () {
    function AuthService(httpClient, router, apiConfig) {
        this.httpClient = httpClient;
        this.router = router;
        this.apiConfig = apiConfig;
        this.authStatus = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.account = {};
    }
    AuthService.prototype.login = function (username, password, captcha, rememberMe) {
        var _this = this;
        var credential = {
            username: username,
            password: password,
        };
        return this.httpClient.post(this.apiConfig.baseUrl + "/api/Account/login", credential)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (login) {
            if (login.access_token) {
                _this.storeToken(login); // , rememberMe);
            }
            return login;
        }));
    };
    AuthService.prototype.signUp = function (body) {
        var _this = this;
        return this.httpClient.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].apiConfig.baseUrl + "/api/Account/SignUp", body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (login) {
            if (login.access_token) {
                _this.storeToken(login); // , rememberMe);
                _this.router.navigate(['/home']);
            }
        }));
    };
    AuthService.prototype.storeToken = function (login, rememberMe) {
        this.account = login;
        if (this.account) {
            localStorage.setItem('authAccount', JSON.stringify(this.account));
            this.authStatus.next(true);
        }
    };
    AuthService.prototype.isAuthenticated = function () {
        return localStorage.getItem('authAccount') ? true : sessionStorage.getItem('authAccount') ? true : false;
    };
    AuthService.prototype.logout = function () {
        localStorage.removeItem('authAccount');
        sessionStorage.removeItem('authAccount');
        // sessionStorage.removeItem('userInfoData');
        var root = this.router.routerState.snapshot.root;
        this.authStatus.next(false);
        this.router.navigate(['/login']);
        // window.location.replace('/login');
    };
    AuthService.prototype.isProfile = function (routeSnapshot) {
        var isProfile = false;
        var routeName = routeSnapshot.routeConfig ? routeSnapshot.routeConfig.path : '';
        if (routeName === 'profile') {
            return true;
        }
        if (routeSnapshot.firstChild) {
            isProfile = this.isProfile(routeSnapshot.firstChild) || isProfile;
        }
        return isProfile;
    };
    AuthService.prototype.getAuthStatus = function () {
        return this.authStatus.asObservable();
    };
    AuthService.prototype.getAccount = function () {
        var account = localStorage.getItem('authAccount');
        if (account) {
            return JSON.parse(account);
        }
        return null;
    };
    AuthService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _app_core_common_models_api_config_model__WEBPACK_IMPORTED_MODULE_5__["ApiConfig"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: ['api.config',] }] }
    ]; };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])('api.config'))
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/core/common/models/api-config.model.ts":
/*!********************************************************!*\
  !*** ./src/app/core/common/models/api-config.model.ts ***!
  \********************************************************/
/*! exports provided: ApiConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiConfig", function() { return ApiConfig; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var ApiConfig = /** @class */ (function () {
    function ApiConfig() {
    }
    return ApiConfig;
}());



/***/ }),

/***/ "./src/app/core/core.module.ts":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth/auth.service */ "./src/app/core/auth/auth.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _interceptors_auth_interceptor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./interceptors/auth.interceptor */ "./src/app/core/interceptors/auth.interceptor.ts");
/* harmony import */ var _interceptors_auth_expired_interceptor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./interceptors/auth-expired.interceptor */ "./src/app/core/interceptors/auth-expired.interceptor.ts");
/* harmony import */ var _interceptors_errorhandler_interceptor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./interceptors/errorhandler.interceptor */ "./src/app/core/interceptors/errorhandler.interceptor.ts");







var CoreModule = /** @class */ (function () {
    function CoreModule(core) {
        if (core) {
            throw new Error('CoreModule should be imported only in AppModule.');
        }
    }
    CoreModule.ctorParameters = function () { return [
        { type: CoreModule, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"] }] }
    ]; };
    CoreModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]
            ],
            providers: [
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
                    useClass: _interceptors_auth_interceptor__WEBPACK_IMPORTED_MODULE_4__["AuthInterceptor"],
                    multi: true,
                    deps: [_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]]
                },
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
                    useClass: _interceptors_auth_expired_interceptor__WEBPACK_IMPORTED_MODULE_5__["AuthExpiredInterceptor"],
                    multi: true,
                    deps: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]]
                },
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
                    useClass: _interceptors_errorhandler_interceptor__WEBPACK_IMPORTED_MODULE_6__["ErrorHandlerInterceptor"],
                    multi: true,
                    deps: []
                }
            ]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"])())
    ], CoreModule);
    return CoreModule;
}());



/***/ }),

/***/ "./src/app/core/interceptors/auth-expired.interceptor.ts":
/*!***************************************************************!*\
  !*** ./src/app/core/interceptors/auth-expired.interceptor.ts ***!
  \***************************************************************/
/*! exports provided: AuthExpiredInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthExpiredInterceptor", function() { return AuthExpiredInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _app_core_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/core/auth/auth.service */ "./src/app/core/auth/auth.service.ts");




var AuthExpiredInterceptor = /** @class */ (function () {
    function AuthExpiredInterceptor(injector) {
        this.injector = injector;
    }
    AuthExpiredInterceptor.prototype.intercept = function (request, next) {
        var _this = this;
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (event) { }, function (err) {
            if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpErrorResponse"]) {
                if (err.status === 401) {
                    var loginService = _this.injector.get(_app_core_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]);
                    loginService.logout();
                }
            }
        }));
    };
    return AuthExpiredInterceptor;
}());



/***/ }),

/***/ "./src/app/core/interceptors/auth.interceptor.ts":
/*!*******************************************************!*\
  !*** ./src/app/core/interceptors/auth.interceptor.ts ***!
  \*******************************************************/
/*! exports provided: AuthInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");


var AuthInterceptor = /** @class */ (function () {
    function AuthInterceptor(loginService) {
        this.loginService = loginService;
    }
    AuthInterceptor.prototype.intercept = function (request, next) {
        if (!request ||
            !request.url ||
            !(/^http/.test(request.url) || /^https/.test(request.url))) {
            return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function (_) {
            }, function () {
            }));
        }
        var account = this.loginService.getAccount();
        if (account) {
            // console.log(account);
            request = request.clone({
                setHeaders: {
                    Authorization: "Bearer " + account.access_token
                }
            });
        }
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function (_) {
            // this.spinnerService.hide();
        }, function () {
            // this.spinnerService.hide();
        }));
    };
    return AuthInterceptor;
}());



/***/ }),

/***/ "./src/app/core/interceptors/errorhandler.interceptor.ts":
/*!***************************************************************!*\
  !*** ./src/app/core/interceptors/errorhandler.interceptor.ts ***!
  \***************************************************************/
/*! exports provided: ErrorHandlerInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorHandlerInterceptor", function() { return ErrorHandlerInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");



var ErrorHandlerInterceptor = /** @class */ (function () {
    function ErrorHandlerInterceptor() {
    }
    ErrorHandlerInterceptor.prototype.intercept = function (request, next) {
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (event) { }, function (err) {
            if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpErrorResponse"]) {
                if (!(err.status === 401 && (err.message === '' || (err.url && err.url.includes('/api/account'))))) {
                }
            }
        }));
    };
    return ErrorHandlerInterceptor;
}());



/***/ }),

/***/ "./src/app/layout/footer/footer.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/layout/footer/footer.component.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/layout/footer/footer.component.ts":
/*!***************************************************!*\
  !*** ./src/app/layout/footer/footer.component.ts ***!
  \***************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/footer/footer.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./footer.component.scss */ "./src/app/layout/footer/footer.component.scss")).default]
        })
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/layout/header/header.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/layout/header/header.component.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host .navbar {\n  background-color: #222;\n}\n:host .navbar .navbar-brand {\n  color: #fff;\n}\n:host .navbar .nav-item > a {\n  color: #999;\n}\n:host .navbar .nav-item > a:hover {\n  color: #fff;\n}\n:host .messages {\n  width: 300px;\n}\n:host .messages .media {\n  border-bottom: 1px solid #ddd;\n  padding: 5px 10px;\n}\n:host .messages .media:last-child {\n  border-bottom: none;\n}\n:host .messages .media-body h5 {\n  font-size: 13px;\n  font-weight: 600;\n}\n:host .messages .media-body .small {\n  margin: 0;\n}\n:host .messages .media-body .last {\n  font-size: 12px;\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2hlYWRlci9DOlxcVXNlcnNcXEFTVVNcXERvY3VtZW50c1xcVmlzdWFsIFN0dWRpbyAyMDE3XFxQcm9qZWN0c1xcU29hbEphdmFiUmVzdEZ1bGxcXGZyb250LXNvYWwtamF2YWIvc3JjXFxhcHBcXGxheW91dFxcaGVhZGVyXFxoZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2xheW91dC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVJO0VBQ0ksc0JBSGtCO0FDRTFCO0FERVE7RUFDSSxXQUFBO0FDQVo7QURFUTtFQUNJLFdBQUE7QUNBWjtBRENZO0VBQ0ksV0FBQTtBQ0NoQjtBREdJO0VBQ0ksWUFBQTtBQ0RSO0FERVE7RUFDSSw2QkFBQTtFQUNBLGlCQUFBO0FDQVo7QURDWTtFQUNJLG1CQUFBO0FDQ2hCO0FER1k7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7QUNEaEI7QURHWTtFQUNJLFNBQUE7QUNEaEI7QURHWTtFQUNJLGVBQUE7RUFDQSxTQUFBO0FDRGhCIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkdG9wbmF2LWJhY2tncm91bmQtY29sb3I6ICMyMjI7XHJcbjpob3N0IHtcclxuICAgIC5uYXZiYXIge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR0b3BuYXYtYmFja2dyb3VuZC1jb2xvcjtcclxuICAgICAgICAubmF2YmFyLWJyYW5kIHtcclxuICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5uYXYtaXRlbSA+IGEge1xyXG4gICAgICAgICAgICBjb2xvcjogIzk5OTtcclxuICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5tZXNzYWdlcyB7XHJcbiAgICAgICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgICAgIC5tZWRpYSB7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA1cHggMTBweDtcclxuICAgICAgICAgICAgJjpsYXN0LWNoaWxkIHtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IG5vbmU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLm1lZGlhLWJvZHkge1xyXG4gICAgICAgICAgICBoNSB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5zbWFsbCB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmxhc3Qge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIjpob3N0IC5uYXZiYXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjIyO1xufVxuOmhvc3QgLm5hdmJhciAubmF2YmFyLWJyYW5kIHtcbiAgY29sb3I6ICNmZmY7XG59XG46aG9zdCAubmF2YmFyIC5uYXYtaXRlbSA+IGEge1xuICBjb2xvcjogIzk5OTtcbn1cbjpob3N0IC5uYXZiYXIgLm5hdi1pdGVtID4gYTpob3ZlciB7XG4gIGNvbG9yOiAjZmZmO1xufVxuOmhvc3QgLm1lc3NhZ2VzIHtcbiAgd2lkdGg6IDMwMHB4O1xufVxuOmhvc3QgLm1lc3NhZ2VzIC5tZWRpYSB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xuICBwYWRkaW5nOiA1cHggMTBweDtcbn1cbjpob3N0IC5tZXNzYWdlcyAubWVkaWE6bGFzdC1jaGlsZCB7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG59XG46aG9zdCAubWVzc2FnZXMgLm1lZGlhLWJvZHkgaDUge1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG46aG9zdCAubWVzc2FnZXMgLm1lZGlhLWJvZHkgLnNtYWxsIHtcbiAgbWFyZ2luOiAwO1xufVxuOmhvc3QgLm1lc3NhZ2VzIC5tZWRpYS1ib2R5IC5sYXN0IHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBtYXJnaW46IDA7XG59Il19 */");

/***/ }),

/***/ "./src/app/layout/header/header.component.ts":
/*!***************************************************!*\
  !*** ./src/app/layout/header/header.component.ts ***!
  \***************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_core_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/core/auth/auth.service */ "./src/app/core/auth/auth.service.ts");
/* harmony import */ var _header_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./header.service */ "./src/app/layout/header/header.service.ts");






var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(translate, router, authService, headerService) {
        this.translate = translate;
        this.router = router;
        this.authService = authService;
        this.headerService = headerService;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.headerService.getUserInfo().subscribe(function (userInfo) {
            _this.userInfo = userInfo;
        });
    };
    HeaderComponent.prototype.onLoggedout = function () {
        this.authService.logout();
    };
    HeaderComponent.prototype.changeLang = function (language) {
        this.translate.use(language);
    };
    HeaderComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _app_core_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
        { type: _header_service__WEBPACK_IMPORTED_MODULE_5__["HeaderService"] }
    ]; };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/header/header.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header.component.scss */ "./src/app/layout/header/header.component.scss")).default]
        })
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/layout/header/header.service.ts":
/*!*************************************************!*\
  !*** ./src/app/layout/header/header.service.ts ***!
  \*************************************************/
/*! exports provided: HeaderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderService", function() { return HeaderService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");






var HeaderService = /** @class */ (function () {
    function HeaderService(http) {
        this.http = http;
        this.userInfo = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]({
            username: null,
            tags: []
        });
    }
    HeaderService.prototype.getUserInfo = function () {
        var _this = this;
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiConfig.baseUrl + "/api/Account/GetUserInfo").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (info) {
            _this.userInfo.next(info);
            return info;
        }));
    };
    HeaderService.prototype.ngOnDestroy = function () {
        this.userInfo.complete();
        this.userInfo.unsubscribe();
    };
    HeaderService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    HeaderService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], HeaderService);
    return HeaderService;
}());



/***/ }),

/***/ "./src/app/layout/layout.component.scss":
/*!**********************************************!*\
  !*** ./src/app/layout/layout.component.scss ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("* {\n  transition: margin-left 0.2s ease-in-out;\n}\n\n.main-container {\n  margin-top: 56px;\n  padding: 15px;\n  -ms-overflow-x: hidden;\n  overflow-x: hidden;\n  overflow-y: scroll;\n  position: relative;\n  overflow: hidden;\n}\n\n@media print {\n  .main-container {\n    margin-top: 0px !important;\n    margin-left: 0px !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L0M6XFxVc2Vyc1xcQVNVU1xcRG9jdW1lbnRzXFxWaXN1YWwgU3R1ZGlvIDIwMTdcXFByb2plY3RzXFxTb2FsSmF2YWJSZXN0RnVsbFxcZnJvbnQtc29hbC1qYXZhYi9zcmNcXGFwcFxcbGF5b3V0XFxsYXlvdXQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2xheW91dC9sYXlvdXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFLRSx3Q0FBQTtBQ0NGOztBRENBO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ0VGOztBREVBO0VBQ0U7SUFDRSwwQkFBQTtJQUNBLDJCQUFBO0VDQ0Y7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9sYXlvdXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IG1hcmdpbi1sZWZ0IDAuMnMgZWFzZS1pbi1vdXQ7XHJcbiAgLW1vei10cmFuc2l0aW9uOiBtYXJnaW4tbGVmdCAwLjJzIGVhc2UtaW4tb3V0O1xyXG4gIC1tcy10cmFuc2l0aW9uOiBtYXJnaW4tbGVmdCAwLjJzIGVhc2UtaW4tb3V0O1xyXG4gIC1vLXRyYW5zaXRpb246IG1hcmdpbi1sZWZ0IDAuMnMgZWFzZS1pbi1vdXQ7XHJcbiAgdHJhbnNpdGlvbjogbWFyZ2luLWxlZnQgMC4ycyBlYXNlLWluLW91dDtcclxufVxyXG4ubWFpbi1jb250YWluZXIge1xyXG4gIG1hcmdpbi10b3A6IDU2cHg7XHJcbiAgcGFkZGluZzogMTVweDtcclxuICAtbXMtb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcblxyXG59XHJcblxyXG5AbWVkaWEgcHJpbnQge1xyXG4gIC5tYWluLWNvbnRhaW5lciB7XHJcbiAgICBtYXJnaW4tdG9wOiAwcHggIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1sZWZ0OiAwcHggIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuIiwiKiB7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogbWFyZ2luLWxlZnQgMC4ycyBlYXNlLWluLW91dDtcbiAgLW1vei10cmFuc2l0aW9uOiBtYXJnaW4tbGVmdCAwLjJzIGVhc2UtaW4tb3V0O1xuICAtbXMtdHJhbnNpdGlvbjogbWFyZ2luLWxlZnQgMC4ycyBlYXNlLWluLW91dDtcbiAgLW8tdHJhbnNpdGlvbjogbWFyZ2luLWxlZnQgMC4ycyBlYXNlLWluLW91dDtcbiAgdHJhbnNpdGlvbjogbWFyZ2luLWxlZnQgMC4ycyBlYXNlLWluLW91dDtcbn1cblxuLm1haW4tY29udGFpbmVyIHtcbiAgbWFyZ2luLXRvcDogNTZweDtcbiAgcGFkZGluZzogMTVweDtcbiAgLW1zLW92ZXJmbG93LXg6IGhpZGRlbjtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuQG1lZGlhIHByaW50IHtcbiAgLm1haW4tY29udGFpbmVyIHtcbiAgICBtYXJnaW4tdG9wOiAwcHggIWltcG9ydGFudDtcbiAgICBtYXJnaW4tbGVmdDogMHB4ICFpbXBvcnRhbnQ7XG4gIH1cbn0iXX0= */");

/***/ }),

/***/ "./src/app/layout/layout.component.ts":
/*!********************************************!*\
  !*** ./src/app/layout/layout.component.ts ***!
  \********************************************/
/*! exports provided: LayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutComponent", function() { return LayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LayoutComponent = /** @class */ (function () {
    function LayoutComponent() {
    }
    LayoutComponent.prototype.ngOnInit = function () {
    };
    LayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-layout',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./layout.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/layout.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./layout.component.scss */ "./src/app/layout/layout.component.scss")).default]
        })
    ], LayoutComponent);
    return LayoutComponent;
}());



/***/ }),

/***/ "./src/app/layout/layout.module.ts":
/*!*****************************************!*\
  !*** ./src/app/layout/layout.module.ts ***!
  \*****************************************/
/*! exports provided: LayoutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutModule", function() { return LayoutModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header/header.component */ "./src/app/layout/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/layout/footer/footer.component.ts");
/* harmony import */ var _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _layout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./layout.component */ "./src/app/layout/layout.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./menu/menu.component */ "./src/app/layout/menu/menu.component.ts");








// const routes: Routes = [
//   {
//     path: '',
//     component: LayoutComponent,
//     pathMatch: 'full'
//   },
//   {
//     path: 'home',
//     component: LayoutComponent,
//     pathMatch: 'full',
//     children: [
//       {
//         path: '',
//         component: QuestionComponent,
//         pathMatch: 'full'
//       },
//       {
//         path: 'question',
//         component: QuestionComponent,
//         pathMatch: 'full'
//       }
//     ]
//   }
// ];
var LayoutModule = /** @class */ (function () {
    function LayoutModule() {
    }
    LayoutModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"],
                _layout_component__WEBPACK_IMPORTED_MODULE_5__["LayoutComponent"],
                _menu_menu_component__WEBPACK_IMPORTED_MODULE_7__["MenuComponent"],
            ],
            imports: [
                _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"]
            ]
        })
    ], LayoutModule);
    return LayoutModule;
}());



/***/ }),

/***/ "./src/app/layout/menu/menu.component.scss":
/*!*************************************************!*\
  !*** ./src/app/layout/menu/menu.component.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#menuToggle {\n  -webkit-user-select: none;\n  -moz-user-select: none;\n   -ms-user-select: none;\n       user-select: none;\n}\n\n#menuToggle input#btnMenuToggle {\n  display: block;\n  width: 24px;\n  height: 22px;\n  margin: 1px 0;\n  position: absolute;\n  cursor: pointer;\n  opacity: 0;\n  /* hide this */\n  z-index: 2;\n  /* and place it over the hamburger */\n  -webkit-touch-callout: none;\n}\n\n#menuToggle span {\n  display: block;\n  width: 24px;\n  height: 3px;\n  margin-bottom: 6px;\n  position: relative;\n  background: white;\n  z-index: 1;\n  transform-origin: 4px 0px;\n  transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;\n}\n\n#menuToggle span:first-child {\n  transform-origin: 0% 0%;\n}\n\n#menuToggle span:nth-last-child(2) {\n  transform-origin: 0% 100%;\n}\n\n#menuToggle input#btnMenuToggle:checked ~ span {\n  opacity: 1;\n  transform: rotate(45deg) translate(5px, 1px);\n  background: #fff;\n}\n\n#menuToggle input#btnMenuToggle:checked ~ span:nth-last-child(4) {\n  opacity: 0;\n  transform: rotate(0deg) scale(0.2, 0.2);\n}\n\n#menuToggle input#btnMenuToggle:checked ~ span:nth-last-child(3) {\n  opacity: 1;\n  transform: rotate(-45deg) translate(2px, -1px);\n}\n\n#menu {\n  position: absolute;\n  width: 300px;\n  margin: -45px 0 0 0;\n  padding: 15px 0;\n  padding-top: 59px;\n  right: 0;\n  background: #343a40;\n  -webkit-font-smoothing: antialiased;\n  transform-origin: 0% 0%;\n  transform: translate(100%, 0);\n  transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);\n  height: 100vh;\n  font-family: iranyekan;\n  font-weight: 200;\n}\n\n#menu li:first-child {\n  box-shadow: inset 0 1px rgba(0, 0, 0, 0.2);\n}\n\n#menu li a {\n  display: block;\n  padding: 15px 15px 18px;\n  box-shadow: inset 0 -1px rgba(0, 0, 0, 0.2);\n  font-size: 22px;\n  color: #fff;\n  text-shadow: 0 0 1px rgba(255, 255, 255, 0.1);\n  transition: background 0.3s, box-shadow 0.3s;\n}\n\n#menu li a:hover {\n  background-color: rgba(255, 255, 255, 0.2);\n}\n\n#menuToggle #btnMenuToggle:checked ~ ul {\n  transform: scale(1, 1);\n  opacity: 1;\n}\n\n#menuToggle input#btnMenuToggle:checked ~ .phx-backdrop {\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: -1;\n  width: 100vw;\n  height: 100vh;\n  background-color: rgba(0, 0, 0, 0.7);\n  transition: all 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);\n}\n\n#subMenuToggle {\n  -webkit-user-select: none;\n  -moz-user-select: none;\n   -ms-user-select: none;\n       user-select: none;\n}\n\n#subMenuToggle:hover {\n  background-color: rgba(255, 255, 255, 0.2);\n}\n\n#subMenuToggle input#btnSubMenuToggle {\n  display: block;\n  width: 100%;\n  height: 66px;\n  margin: 1px 0;\n  position: absolute;\n  cursor: pointer;\n  opacity: 0;\n  /* hide this */\n  z-index: 2;\n  /* and place it over the hamburger */\n  -webkit-touch-callout: none;\n}\n\n#subMenuToggle .phx-btn {\n  position: absolute;\n  left: 15px;\n  margin-top: 19px;\n}\n\n#sub-menu {\n  position: absolute;\n  width: 300px;\n  margin: 0;\n  padding: 15px 0;\n  padding-top: 0;\n  right: 0;\n  top: 59px;\n  background: #343a40;\n  -webkit-font-smoothing: antialiased;\n  height: 100vh;\n  font-family: iranyekan;\n  font-weight: 200;\n  -webkit-animation-duration: 1s;\n  animation-duration: 1s;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n  -webkit-animation-name: slideOutRight;\n  animation-name: slideOutRight;\n}\n\n#sub-menu li:first-child {\n  box-shadow: inset 0 1px rgba(0, 0, 0, 0.2);\n}\n\n#sub-menu li a,\nlabel {\n  display: block;\n  padding: 15px 15px 18px;\n  box-shadow: inset 0 -1px rgba(0, 0, 0, 0.2);\n  font-size: 22px;\n  color: #fff;\n  text-shadow: 0 0 1px rgba(255, 255, 255, 0.1);\n  transition: background 0.3s, box-shadow 0.3s;\n}\n\n#sub-menu li a:hover {\n  background-color: rgba(255, 255, 255, 0.2);\n}\n\n#subMenuToggle input#btnSubMenuToggle:checked {\n  top: 0;\n  height: 57px;\n}\n\n#subMenuToggle input#btnSubMenuToggle:checked ~ .phx-btn {\n  top: 19px;\n  margin-top: 0;\n  z-index: 1;\n  transform: rotate(180deg);\n  -webkit-animation-duration: 0.4s;\n  animation-duration: 0.4s;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n  -webkit-animation-name: zoomIn;\n  animation-name: zoomIn;\n}\n\n#subMenuToggle input#btnSubMenuToggle:checked ~ ul.sub-menu {\n  transform: scale(1, 1);\n  opacity: 1;\n  -webkit-animation-duration: 0.4s;\n  animation-duration: 0.4s;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n  -webkit-animation-name: slideInRight;\n  animation-name: slideInRight;\n}\n\n.phx-social-items > a {\n  padding: 0.8rem !important;\n}\n\n@media (max-width: 767.98px) {\n  #menuToggle span {\n    background: #fff;\n  }\n}\n\n@-webkit-keyframes zoomIn {\n  from {\n    opacity: 0;\n    transform: scale3d(0.3, 0.3, 0.3);\n  }\n  50% {\n    opacity: 1;\n  }\n}\n\n@keyframes zoomIn {\n  from {\n    opacity: 0;\n    transform: scale3d(0.3, 0.3, 0.3);\n  }\n  50% {\n    opacity: 1;\n  }\n}\n\n@-webkit-keyframes slideInRight {\n  from {\n    transform: translate3d(100%, 0, 0);\n    visibility: visible;\n  }\n  to {\n    transform: translate3d(0, 0, 0);\n  }\n}\n\n@keyframes slideInRight {\n  from {\n    transform: translate3d(100%, 0, 0);\n    visibility: visible;\n  }\n  to {\n    transform: translate3d(0, 0, 0);\n  }\n}\n\n@-webkit-keyframes slideOutRight {\n  from {\n    transform: translate3d(0, 0, 0);\n  }\n  to {\n    visibility: hidden;\n    transform: translate3d(100%, 0, 0);\n  }\n}\n\n@keyframes slideOutRight {\n  from {\n    transform: translate3d(0, 0, 0);\n  }\n  to {\n    visibility: hidden;\n    transform: translate3d(100%, 0, 0);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L21lbnUvQzpcXFVzZXJzXFxBU1VTXFxEb2N1bWVudHNcXFZpc3VhbCBTdHVkaW8gMjAxN1xcUHJvamVjdHNcXFNvYWxKYXZhYlJlc3RGdWxsXFxmcm9udC1zb2FsLWphdmFiL3NyY1xcYXBwXFxsYXlvdXRcXG1lbnVcXG1lbnUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2xheW91dC9tZW51L21lbnUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFNSSx5QkFBQTtFQUNBLHNCQUFBO0dBQUEscUJBQUE7T0FBQSxpQkFBQTtBQ0pKOztBRE9FO0VBQ0UsY0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBSUEsZUFBQTtFQUVBLFVBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtFQUNBLG9DQUFBO0VBRUEsMkJBQUE7QUNUSjs7QURZRTtFQUNFLGNBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFFQSxpQkFBQTtFQUVBLFVBQUE7RUFFQSx5QkFBQTtFQUVBLGlJQUFBO0FDYko7O0FEbUJFO0VBQ0UsdUJBQUE7QUNoQko7O0FEbUJFO0VBQ0UseUJBQUE7QUNoQko7O0FEbUJFO0VBQ0UsVUFBQTtFQUNBLDRDQUFBO0VBQ0EsZ0JBQUE7QUNoQko7O0FEbUJFO0VBQ0UsVUFBQTtFQUNBLHVDQUFBO0FDaEJKOztBRG1CRTtFQUNFLFVBQUE7RUFDQSw4Q0FBQTtBQ2hCSjs7QURtQkU7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFFBQUE7RUFFQSxtQkFBQTtFQUNBLG1DQUFBO0VBRUEsdUJBQUE7RUFDQSw2QkFBQTtFQUVBLDJEQUFBO0VBQ0EsYUFBQTtFQUVBLHNCQUFBO0VBQ0EsZ0JBQUE7QUNwQko7O0FEdUJFO0VBQ0UsMENBQUE7QUNwQko7O0FEdUJFO0VBQ0UsY0FBQTtFQUNBLHVCQUFBO0VBQ0EsMkNBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLDZDQUFBO0VBQ0EsNENBQUE7QUNwQko7O0FEdUJFO0VBRUUsMENBQUE7QUNyQko7O0FEd0JFO0VBQ0Usc0JBQUE7RUFDQSxVQUFBO0FDckJKOztBRHdCRTtFQUNFLGVBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG9DQUNFO0VBQ0YscURBQUE7QUN0Qko7O0FEMEJFO0VBTUUseUJBQUE7RUFDQSxzQkFBQTtHQUFBLHFCQUFBO09BQUEsaUJBQUE7QUM1Qko7O0FEK0JFO0VBQ0UsMENBQUE7QUM1Qko7O0FEZ0NFO0VBQ0UsY0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBSUEsZUFBQTtFQUVBLFVBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtFQUNBLG9DQUFBO0VBRUEsMkJBQUE7QUNsQ0o7O0FEcUNFO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7QUNsQ0o7O0FEcUNFO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxtQkFBQTtFQUNBLG1DQUFBO0VBTUEsYUFBQTtFQUVBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFFQSw4QkFBQTtFQUNBLHNCQUFBO0VBQ0EsaUNBQUE7RUFDQSx5QkFBQTtFQUNBLHFDQUFBO0VBQ0EsNkJBQUE7QUN6Q0o7O0FENkNFO0VBQ0UsMENBQUE7QUMxQ0o7O0FENkNFOztFQUVFLGNBQUE7RUFDQSx1QkFBQTtFQUNBLDJDQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSw2Q0FBQTtFQUNBLDRDQUFBO0FDMUNKOztBRDZDRTtFQUVFLDBDQUFBO0FDM0NKOztBRDhDRTtFQUNFLE1BQUE7RUFDQSxZQUFBO0FDM0NKOztBRDhDRTtFQUNFLFNBQUE7RUFDQSxhQUFBO0VBQ0EsVUFBQTtFQUNBLHlCQUFBO0VBRUEsZ0NBQUE7RUFDQSx3QkFBQTtFQUNBLGlDQUFBO0VBQ0EseUJBQUE7RUFDQSw4QkFBQTtFQUNBLHNCQUFBO0FDNUNKOztBRCtDRTtFQUNFLHNCQUFBO0VBQ0EsVUFBQTtFQUVBLGdDQUFBO0VBQ0Esd0JBQUE7RUFDQSxpQ0FBQTtFQUNBLHlCQUFBO0VBQ0Esb0NBQUE7RUFDQSw0QkFBQTtBQzdDSjs7QURnREU7RUFDTSwwQkFBQTtBQzdDUjs7QURnREU7RUFDSTtJQUNFLGdCQUFBO0VDN0NOO0FBQ0Y7O0FEd0VFO0VBQ0U7SUFDRSxVQUFBO0lBRUEsaUNBQUE7RUN0RUo7RUR5RUU7SUFDRSxVQUFBO0VDdkVKO0FBQ0Y7O0FEMEVFO0VBQ0U7SUFDRSxVQUFBO0lBRUEsaUNBQUE7RUN4RUo7RUQyRUU7SUFDRSxVQUFBO0VDekVKO0FBQ0Y7O0FENEVFO0VBQ0U7SUFFRSxrQ0FBQTtJQUNBLG1CQUFBO0VDMUVKO0VENkVFO0lBRUUsK0JBQUE7RUMzRUo7QUFDRjs7QUQ4RUU7RUFDRTtJQUVFLGtDQUFBO0lBQ0EsbUJBQUE7RUM1RUo7RUQrRUU7SUFFRSwrQkFBQTtFQzdFSjtBQUNGOztBRGdGRTtFQUNFO0lBRUUsK0JBQUE7RUM5RUo7RURpRkU7SUFDRSxrQkFBQTtJQUVBLGtDQUFBO0VDL0VKO0FBQ0Y7O0FEa0ZFO0VBQ0U7SUFFRSwrQkFBQTtFQ2hGSjtFRG1GRTtJQUNFLGtCQUFBO0lBRUEsa0NBQUE7RUNqRko7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9tZW51L21lbnUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbWVudVRvZ2dsZSB7XHJcbiAgICAvLyAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAvLyAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgLy8gIHRvcDogNTBweDtcclxuICAgIC8vICByaWdodDogNTBweDtcclxuICAgIC8vICB6LWluZGV4OiAxO1xyXG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG4gIH1cclxuICBcclxuICAjbWVudVRvZ2dsZSBpbnB1dCNidG5NZW51VG9nZ2xlIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDI0cHg7XHJcbiAgICBoZWlnaHQ6IDIycHg7XHJcbiAgICBtYXJnaW46IDFweCAwO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgLy8gIHRvcDogLTdweDtcclxuICAgIC8vICBsZWZ0OiAtNXB4O1xyXG4gIFxyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIFxyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIC8qIGhpZGUgdGhpcyAqL1xyXG4gICAgei1pbmRleDogMjtcclxuICAgIC8qIGFuZCBwbGFjZSBpdCBvdmVyIHRoZSBoYW1idXJnZXIgKi9cclxuICBcclxuICAgIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTtcclxuICB9XHJcbiAgXHJcbiAgI21lbnVUb2dnbGUgc3BhbiB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAyNHB4O1xyXG4gICAgaGVpZ2h0OiAzcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA2cHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgXHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgXHJcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiA0cHggMHB4O1xyXG4gIFxyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXMgY3ViaWMtYmV6aWVyKDAuNzcsIDAuMiwgMC4wNSwgMS4wKSxcclxuICAgICAgYmFja2dyb3VuZCAwLjVzIGN1YmljLWJlemllcigwLjc3LCAwLjIsIDAuMDUsIDEuMCksXHJcbiAgICAgIG9wYWNpdHkgMC41NXMgZWFzZTtcclxuICBcclxuICB9XHJcbiAgXHJcbiAgI21lbnVUb2dnbGUgc3BhbjpmaXJzdC1jaGlsZCB7XHJcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiAwJSAwJTtcclxuICB9XHJcbiAgXHJcbiAgI21lbnVUb2dnbGUgc3BhbjpudGgtbGFzdC1jaGlsZCgyKSB7XHJcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiAwJSAxMDAlO1xyXG4gIH1cclxuICBcclxuICAjbWVudVRvZ2dsZSBpbnB1dCNidG5NZW51VG9nZ2xlOmNoZWNrZWR+c3BhbiB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpIHRyYW5zbGF0ZSg1cHgsIDFweCk7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIH1cclxuICBcclxuICAjbWVudVRvZ2dsZSBpbnB1dCNidG5NZW51VG9nZ2xlOmNoZWNrZWR+c3BhbjpudGgtbGFzdC1jaGlsZCg0KSB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZykgc2NhbGUoMC4yLCAwLjIpO1xyXG4gIH1cclxuICBcclxuICAjbWVudVRvZ2dsZSBpbnB1dCNidG5NZW51VG9nZ2xlOmNoZWNrZWR+c3BhbjpudGgtbGFzdC1jaGlsZCgzKSB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKSB0cmFuc2xhdGUoMnB4LCAtMXB4KTtcclxuICB9XHJcbiAgXHJcbiAgI21lbnUge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgbWFyZ2luOiAtNDVweCAwIDAgMDtcclxuICAgIHBhZGRpbmc6IDE1cHggMDtcclxuICAgIHBhZGRpbmctdG9wOiA1OXB4O1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgXHJcbiAgICBiYWNrZ3JvdW5kOiAjMzQzYTQwO1xyXG4gICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XHJcbiAgXHJcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiAwJSAwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDEwMCUsIDApO1xyXG4gIFxyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXMgY3ViaWMtYmV6aWVyKDAuNzcsIDAuMiwgMC4wNSwgMS4wKTtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgXHJcbiAgICBmb250LWZhbWlseTogaXJhbnlla2FuO1xyXG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcclxuICB9XHJcbiAgXHJcbiAgI21lbnUgbGk6Zmlyc3QtY2hpbGQge1xyXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAxcHggcmdiYSgwLCAwLCAwLCAuMik7XHJcbiAgfVxyXG4gIFxyXG4gICNtZW51IGxpIGEge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDE1cHggMThweDtcclxuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgLTFweCByZ2JhKDAsIDAsIDAsIC4yKTtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgdGV4dC1zaGFkb3c6IDAgMCAxcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAuMSk7XHJcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIC4zcywgYm94LXNoYWRvdyAuM3M7XHJcbiAgfVxyXG4gIFxyXG4gICNtZW51IGxpIGE6aG92ZXIge1xyXG4gICAgLy8gIGJhY2tncm91bmQtY29sb3I6ICM1OTkzY2U7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIC4yKTtcclxuICB9XHJcbiAgXHJcbiAgI21lbnVUb2dnbGUgI2J0bk1lbnVUb2dnbGU6Y2hlY2tlZH51bCB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMCwgMS4wKTtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG4gIFxyXG4gICNtZW51VG9nZ2xlIGlucHV0I2J0bk1lbnVUb2dnbGU6Y2hlY2tlZH4ucGh4LWJhY2tkcm9wIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB6LWluZGV4OiAtMTtcclxuICAgIHdpZHRoOiAxMDB2dztcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOlxyXG4gICAgICByZ2JhKDAsIDAsIDAsIDAuNyk7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyBjdWJpYy1iZXppZXIoMC43NywgMC4yLCAwLjA1LCAxLjApO1xyXG4gIH1cclxuICBcclxuICAvLyBzdWIgbWVudVxyXG4gICNzdWJNZW51VG9nZ2xlIHtcclxuICAgIC8vICBkaXNwbGF5OiBibG9jaztcclxuICAgIC8vICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAvLyAgdG9wOiA1MHB4O1xyXG4gICAgLy8gIHJpZ2h0OiA1MHB4O1xyXG4gICAgLy8gIHotaW5kZXg6IDE7XHJcbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgfVxyXG4gIFxyXG4gICNzdWJNZW51VG9nZ2xlOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjIpO1xyXG4gIH1cclxuICBcclxuICBcclxuICAjc3ViTWVudVRvZ2dsZSBpbnB1dCNidG5TdWJNZW51VG9nZ2xlIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDY2cHg7XHJcbiAgICBtYXJnaW46IDFweCAwO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgLy8gIHRvcDogLTdweDtcclxuICAgIC8vICBsZWZ0OiAtNXB4O1xyXG4gIFxyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIFxyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIC8qIGhpZGUgdGhpcyAqL1xyXG4gICAgei1pbmRleDogMjtcclxuICAgIC8qIGFuZCBwbGFjZSBpdCBvdmVyIHRoZSBoYW1idXJnZXIgKi9cclxuICBcclxuICAgIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTtcclxuICB9XHJcbiAgXHJcbiAgI3N1Yk1lbnVUb2dnbGUgLnBoeC1idG4ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMTVweDtcclxuICAgIG1hcmdpbi10b3A6IDE5cHg7XHJcbiAgfVxyXG4gIFxyXG4gICNzdWItbWVudSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDA7XHJcbiAgICBwYWRkaW5nLXRvcDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgdG9wOiA1OXB4O1xyXG4gICAgYmFja2dyb3VuZDogIzM0M2E0MDtcclxuICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xyXG4gIFxyXG4gICAgLy8gdHJhbnNmb3JtLW9yaWdpbjogMCUgMCU7XHJcbiAgICAvLyB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxMDAlLCAwKTtcclxuICBcclxuICAgIC8vIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzIGN1YmljLWJlemllcigwLjc3LCAwLjIsIDAuMDUsIDEuMCk7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gIFxyXG4gICAgZm9udC1mYW1pbHk6IGlyYW55ZWthbjtcclxuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XHJcbiAgICAvLyBvcGFjaXR5OiAwO1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDFzO1xyXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcclxuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBzbGlkZU91dFJpZ2h0O1xyXG4gICAgYW5pbWF0aW9uLW5hbWU6IHNsaWRlT3V0UmlnaHQ7XHJcbiAgXHJcbiAgfVxyXG4gIFxyXG4gICNzdWItbWVudSBsaTpmaXJzdC1jaGlsZCB7XHJcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDFweCByZ2JhKDAsIDAsIDAsIC4yKTtcclxuICB9XHJcbiAgXHJcbiAgI3N1Yi1tZW51IGxpIGEsXHJcbiAgbGFiZWwge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDE1cHggMThweDtcclxuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgLTFweCByZ2JhKDAsIDAsIDAsIC4yKTtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgdGV4dC1zaGFkb3c6IDAgMCAxcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAuMSk7XHJcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIC4zcywgYm94LXNoYWRvdyAuM3M7XHJcbiAgfVxyXG4gIFxyXG4gICNzdWItbWVudSBsaSBhOmhvdmVyIHtcclxuICAgIC8vICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTk5M2NlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAuMik7XHJcbiAgfVxyXG4gIFxyXG4gICNzdWJNZW51VG9nZ2xlIGlucHV0I2J0blN1Yk1lbnVUb2dnbGU6Y2hlY2tlZCB7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBoZWlnaHQ6IDU3cHg7XHJcbiAgfVxyXG4gIFxyXG4gICNzdWJNZW51VG9nZ2xlIGlucHV0I2J0blN1Yk1lbnVUb2dnbGU6Y2hlY2tlZCB+IC5waHgtYnRuIHtcclxuICAgIHRvcDogMTlweDtcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcclxuICAgIC8vdHJhbnNpdGlvbjogYWxsIC40cyBlYXNlLWluLW91dDtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjRzO1xyXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjRzO1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xyXG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IHpvb21JbjtcclxuICAgIGFuaW1hdGlvbi1uYW1lOiB6b29tSW47XHJcbiAgfVxyXG4gIFxyXG4gICNzdWJNZW51VG9nZ2xlIGlucHV0I2J0blN1Yk1lbnVUb2dnbGU6Y2hlY2tlZH51bC5zdWItbWVudSB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMCwgMS4wKTtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICAvLyBwYWRkaW5nLXRvcDogNTlweDtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjRzO1xyXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjRzO1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xyXG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IHNsaWRlSW5SaWdodDtcclxuICAgIGFuaW1hdGlvbi1uYW1lOiBzbGlkZUluUmlnaHQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5waHgtc29jaWFsLWl0ZW1zID4gYXtcclxuICAgICAgICBwYWRkaW5nOiAwLjhyZW0gIWltcG9ydGFudDtcclxuICAgICAgfVxyXG4gIFxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjcuOThweCkge1xyXG4gICAgICAjbWVudVRvZ2dsZSBzcGFuIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgICB9XHJcbiAgICAvLyAgIC5waHgtc29jaWFsLWl0ZW1zID4gYTpmaXJzdC1jaGlsZHtcclxuICAgIC8vICAgICBwYWRkaW5nLXJpZ2h0OiAxLjJyZW0gIWltcG9ydGFudDtcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyAgIC5waHgtc29jaWFsLWl0ZW1zID4gYXtcclxuICAgIC8vICAgICBwYWRkaW5nOiAxcmVtICFpbXBvcnRhbnQ7XHJcbiAgICAvLyAgIH1cclxuICAgICAgXHJcbiAgICAvLyAucGh4LXNvY2lhbC1pdGVtcyA+IGE6bGFzdC1jaGlsZHtcclxuICAgIC8vICAgcGFkZGluZy1yaWdodDogMC41cmVtICFpbXBvcnRhbnQ7XHJcbiAgICAvLyAgIH1cclxuICB9XHJcbiAgXHJcbiAgLy8gQG1lZGlhIChtaW4td2lkdGg6NzY4KVxyXG4gIC8vIHtcclxuICBcclxuICAvLyAgIC5waHgtc29jaWFsLWl0ZW1zID4gYTpmaXJzdC1jaGlsZHtcclxuICAvLyAgICAgcGFkZGluZy1yaWdodDogMC41cmVtICFpbXBvcnRhbnQ7XHJcbiAgLy8gICAgIH1cclxuICAvLyAgICAgLnBoeC1zb2NpYWwtaXRlbXMgPiBhe1xyXG4gIC8vICAgICAgIHBhZGRpbmc6IDFyZW0gIWltcG9ydGFudDtcclxuICAvLyAgICAgfVxyXG4gICAgICBcclxuICAvLyAgIC5waHgtc29jaWFsLWl0ZW1zID4gYTpsYXN0LWNoaWxke1xyXG4gIC8vICAgICBwYWRkaW5nLXJpZ2h0OiAwLjVyZW0gIWltcG9ydGFudDtcclxuICAvLyAgICAgfVxyXG4gIC8vIH1cclxuICBALXdlYmtpdC1rZXlmcmFtZXMgem9vbUluIHtcclxuICAgIGZyb20ge1xyXG4gICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUzZCgwLjMsIDAuMywgMC4zKTtcclxuICAgICAgdHJhbnNmb3JtOiBzY2FsZTNkKDAuMywgMC4zLCAwLjMpO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgNTAlIHtcclxuICAgICAgb3BhY2l0eTogMTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgQGtleWZyYW1lcyB6b29tSW4ge1xyXG4gICAgZnJvbSB7XHJcbiAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZTNkKDAuMywgMC4zLCAwLjMpO1xyXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMC4zLCAwLjMsIDAuMyk7XHJcbiAgICB9XHJcbiAgXHJcbiAgICA1MCUge1xyXG4gICAgICBvcGFjaXR5OiAxO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBALXdlYmtpdC1rZXlmcmFtZXMgc2xpZGVJblJpZ2h0IHtcclxuICAgIGZyb20ge1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTAwJSwgMCwgMCk7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTAwJSwgMCwgMCk7XHJcbiAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgICB9XHJcbiAgXHJcbiAgICB0byB7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgQGtleWZyYW1lcyBzbGlkZUluUmlnaHQge1xyXG4gICAgZnJvbSB7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMDAlLCAwLCAwKTtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMDAlLCAwLCAwKTtcclxuICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICAgIH1cclxuICBcclxuICAgIHRvIHtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBALXdlYmtpdC1rZXlmcmFtZXMgc2xpZGVPdXRSaWdodCB7XHJcbiAgICBmcm9tIHtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgdG8ge1xyXG4gICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMDAlLCAwLCAwKTtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMDAlLCAwLCAwKTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgQGtleWZyYW1lcyBzbGlkZU91dFJpZ2h0IHtcclxuICAgIGZyb20ge1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XHJcbiAgICB9XHJcbiAgXHJcbiAgICB0byB7XHJcbiAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwMCUsIDAsIDApO1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwMCUsIDAsIDApO1xyXG4gICAgfVxyXG4gIH1cclxuICAiLCIjbWVudVRvZ2dsZSB7XG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIHVzZXItc2VsZWN0OiBub25lO1xufVxuXG4jbWVudVRvZ2dsZSBpbnB1dCNidG5NZW51VG9nZ2xlIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAyNHB4O1xuICBoZWlnaHQ6IDIycHg7XG4gIG1hcmdpbjogMXB4IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBvcGFjaXR5OiAwO1xuICAvKiBoaWRlIHRoaXMgKi9cbiAgei1pbmRleDogMjtcbiAgLyogYW5kIHBsYWNlIGl0IG92ZXIgdGhlIGhhbWJ1cmdlciAqL1xuICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7XG59XG5cbiNtZW51VG9nZ2xlIHNwYW4ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDI0cHg7XG4gIGhlaWdodDogM3B4O1xuICBtYXJnaW4tYm90dG9tOiA2cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIHotaW5kZXg6IDE7XG4gIHRyYW5zZm9ybS1vcmlnaW46IDRweCAwcHg7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzIGN1YmljLWJlemllcigwLjc3LCAwLjIsIDAuMDUsIDEpLCBiYWNrZ3JvdW5kIDAuNXMgY3ViaWMtYmV6aWVyKDAuNzcsIDAuMiwgMC4wNSwgMSksIG9wYWNpdHkgMC41NXMgZWFzZTtcbn1cblxuI21lbnVUb2dnbGUgc3BhbjpmaXJzdC1jaGlsZCB7XG4gIHRyYW5zZm9ybS1vcmlnaW46IDAlIDAlO1xufVxuXG4jbWVudVRvZ2dsZSBzcGFuOm50aC1sYXN0LWNoaWxkKDIpIHtcbiAgdHJhbnNmb3JtLW9yaWdpbjogMCUgMTAwJTtcbn1cblxuI21lbnVUb2dnbGUgaW5wdXQjYnRuTWVudVRvZ2dsZTpjaGVja2VkIH4gc3BhbiB7XG4gIG9wYWNpdHk6IDE7XG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKSB0cmFuc2xhdGUoNXB4LCAxcHgpO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxuXG4jbWVudVRvZ2dsZSBpbnB1dCNidG5NZW51VG9nZ2xlOmNoZWNrZWQgfiBzcGFuOm50aC1sYXN0LWNoaWxkKDQpIHtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZykgc2NhbGUoMC4yLCAwLjIpO1xufVxuXG4jbWVudVRvZ2dsZSBpbnB1dCNidG5NZW51VG9nZ2xlOmNoZWNrZWQgfiBzcGFuOm50aC1sYXN0LWNoaWxkKDMpIHtcbiAgb3BhY2l0eTogMTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKSB0cmFuc2xhdGUoMnB4LCAtMXB4KTtcbn1cblxuI21lbnUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAzMDBweDtcbiAgbWFyZ2luOiAtNDVweCAwIDAgMDtcbiAgcGFkZGluZzogMTVweCAwO1xuICBwYWRkaW5nLXRvcDogNTlweDtcbiAgcmlnaHQ6IDA7XG4gIGJhY2tncm91bmQ6ICMzNDNhNDA7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiAwJSAwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTAwJSwgMCk7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzIGN1YmljLWJlemllcigwLjc3LCAwLjIsIDAuMDUsIDEpO1xuICBoZWlnaHQ6IDEwMHZoO1xuICBmb250LWZhbWlseTogaXJhbnlla2FuO1xuICBmb250LXdlaWdodDogMjAwO1xufVxuXG4jbWVudSBsaTpmaXJzdC1jaGlsZCB7XG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbn1cblxuI21lbnUgbGkgYSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nOiAxNXB4IDE1cHggMThweDtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBjb2xvcjogI2ZmZjtcbiAgdGV4dC1zaGFkb3c6IDAgMCAxcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuM3MsIGJveC1zaGFkb3cgMC4zcztcbn1cblxuI21lbnUgbGkgYTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcbn1cblxuI21lbnVUb2dnbGUgI2J0bk1lbnVUb2dnbGU6Y2hlY2tlZCB+IHVsIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLCAxKTtcbiAgb3BhY2l0eTogMTtcbn1cblxuI21lbnVUb2dnbGUgaW5wdXQjYnRuTWVudVRvZ2dsZTpjaGVja2VkIH4gLnBoeC1iYWNrZHJvcCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB6LWluZGV4OiAtMTtcbiAgd2lkdGg6IDEwMHZ3O1xuICBoZWlnaHQ6IDEwMHZoO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNyk7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGN1YmljLWJlemllcigwLjc3LCAwLjIsIDAuMDUsIDEpO1xufVxuXG4jc3ViTWVudVRvZ2dsZSB7XG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIHVzZXItc2VsZWN0OiBub25lO1xufVxuXG4jc3ViTWVudVRvZ2dsZTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcbn1cblxuI3N1Yk1lbnVUb2dnbGUgaW5wdXQjYnRuU3ViTWVudVRvZ2dsZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA2NnB4O1xuICBtYXJnaW46IDFweCAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgb3BhY2l0eTogMDtcbiAgLyogaGlkZSB0aGlzICovXG4gIHotaW5kZXg6IDI7XG4gIC8qIGFuZCBwbGFjZSBpdCBvdmVyIHRoZSBoYW1idXJnZXIgKi9cbiAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiBub25lO1xufVxuXG4jc3ViTWVudVRvZ2dsZSAucGh4LWJ0biB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMTVweDtcbiAgbWFyZ2luLXRvcDogMTlweDtcbn1cblxuI3N1Yi1tZW51IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMzAwcHg7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMTVweCAwO1xuICBwYWRkaW5nLXRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogNTlweDtcbiAgYmFja2dyb3VuZDogIzM0M2E0MDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIGhlaWdodDogMTAwdmg7XG4gIGZvbnQtZmFtaWx5OiBpcmFueWVrYW47XG4gIGZvbnQtd2VpZ2h0OiAyMDA7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcbiAgLXdlYmtpdC1hbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xuICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBzbGlkZU91dFJpZ2h0O1xuICBhbmltYXRpb24tbmFtZTogc2xpZGVPdXRSaWdodDtcbn1cblxuI3N1Yi1tZW51IGxpOmZpcnN0LWNoaWxkIHtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAxcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xufVxuXG4jc3ViLW1lbnUgbGkgYSxcbmxhYmVsIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmc6IDE1cHggMTVweCAxOHB4O1xuICBib3gtc2hhZG93OiBpbnNldCAwIC0xcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICBmb250LXNpemU6IDIycHg7XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LXNoYWRvdzogMCAwIDFweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4zcywgYm94LXNoYWRvdyAwLjNzO1xufVxuXG4jc3ViLW1lbnUgbGkgYTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcbn1cblxuI3N1Yk1lbnVUb2dnbGUgaW5wdXQjYnRuU3ViTWVudVRvZ2dsZTpjaGVja2VkIHtcbiAgdG9wOiAwO1xuICBoZWlnaHQ6IDU3cHg7XG59XG5cbiNzdWJNZW51VG9nZ2xlIGlucHV0I2J0blN1Yk1lbnVUb2dnbGU6Y2hlY2tlZCB+IC5waHgtYnRuIHtcbiAgdG9wOiAxOXB4O1xuICBtYXJnaW4tdG9wOiAwO1xuICB6LWluZGV4OiAxO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xuICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMC40cztcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjRzO1xuICAtd2Via2l0LWFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IHpvb21JbjtcbiAgYW5pbWF0aW9uLW5hbWU6IHpvb21Jbjtcbn1cblxuI3N1Yk1lbnVUb2dnbGUgaW5wdXQjYnRuU3ViTWVudVRvZ2dsZTpjaGVja2VkIH4gdWwuc3ViLW1lbnUge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEsIDEpO1xuICBvcGFjaXR5OiAxO1xuICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMC40cztcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjRzO1xuICAtd2Via2l0LWFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IHNsaWRlSW5SaWdodDtcbiAgYW5pbWF0aW9uLW5hbWU6IHNsaWRlSW5SaWdodDtcbn1cblxuLnBoeC1zb2NpYWwtaXRlbXMgPiBhIHtcbiAgcGFkZGluZzogMC44cmVtICFpbXBvcnRhbnQ7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjcuOThweCkge1xuICAjbWVudVRvZ2dsZSBzcGFuIHtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICB9XG59XG5ALXdlYmtpdC1rZXlmcmFtZXMgem9vbUluIHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUzZCgwLjMsIDAuMywgMC4zKTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMC4zLCAwLjMsIDAuMyk7XG4gIH1cbiAgNTAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5Aa2V5ZnJhbWVzIHpvb21JbiB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlM2QoMC4zLCAwLjMsIDAuMyk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKDAuMywgMC4zLCAwLjMpO1xuICB9XG4gIDUwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuQC13ZWJraXQta2V5ZnJhbWVzIHNsaWRlSW5SaWdodCB7XG4gIGZyb20ge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMDAlLCAwLCAwKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwMCUsIDAsIDApO1xuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gIH1cbiAgdG8ge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICB9XG59XG5Aa2V5ZnJhbWVzIHNsaWRlSW5SaWdodCB7XG4gIGZyb20ge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMDAlLCAwLCAwKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwMCUsIDAsIDApO1xuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gIH1cbiAgdG8ge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICB9XG59XG5ALXdlYmtpdC1rZXlmcmFtZXMgc2xpZGVPdXRSaWdodCB7XG4gIGZyb20ge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICB9XG4gIHRvIHtcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwMCUsIDAsIDApO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTAwJSwgMCwgMCk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgc2xpZGVPdXRSaWdodCB7XG4gIGZyb20ge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICB9XG4gIHRvIHtcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwMCUsIDAsIDApO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTAwJSwgMCwgMCk7XG4gIH1cbn0iXX0= */");

/***/ }),

/***/ "./src/app/layout/menu/menu.component.ts":
/*!***********************************************!*\
  !*** ./src/app/layout/menu/menu.component.ts ***!
  \***********************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MenuComponent = /** @class */ (function () {
    function MenuComponent() {
        this.menuExpanded = false;
    }
    MenuComponent.prototype.ngOnInit = function () {
    };
    MenuComponent.prototype.menuToggle = function (e) {
        this.menuExpanded = !this.menuExpanded;
    };
    MenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-menu',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./menu.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/menu/menu.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./menu.component.scss */ "./src/app/layout/menu/menu.component.scss")).default]
        })
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.scss":
/*!********************************************!*\
  !*** ./src/app/login/login.component.scss ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_core_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/core/auth/auth.service */ "./src/app/core/auth/auth.service.ts");







var LoginComponent = /** @class */ (function () {
    function LoginComponent(fb, authService, router, toastr) {
        this.fb = fb;
        this.authService = authService;
        this.router = router;
        this.toastr = toastr;
        this.loginButtonDisabled = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.initForm();
    };
    LoginComponent.prototype.onLoggedin = function () {
        var _this = this;
        this.loginButtonDisabled = true;
        if (this.loginForm.invalid) {
            this.loginButtonDisabled = false;
            return;
        }
        else {
            var header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]();
            var body = {
                username: this.loginForm.controls.userName.value,
                password: this.loginForm.controls.passWord.value
            };
            header.set('Content-Type', 'application/json');
            // localStorage.setItem('authAccount', JSON.stringify('token'));
            // this.router.navigate(['/home']);
            this.authService.login(body.username, body.password).subscribe(function (token) {
                _this.loginButtonDisabled = false;
                if (token) {
                    _this.toastr.success('Login Successfull', 'Success');
                    _this.router.navigate(['/home']);
                }
                else {
                    _this.toastr.error('Login Failed', 'Error');
                }
            }, function (err) {
                _this.loginButtonDisabled = false;
                _this.toastr.error('Login Failed', 'Error');
            });
        }
    };
    LoginComponent.prototype.initForm = function () {
        this.loginForm = this.fb.group({
            userName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
            passWord: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]]
        });
    };
    LoginComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
        { type: _app_core_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] }
    ]; };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.scss */ "./src/app/login/login.component.scss")).default]
        })
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModule", function() { return LoginModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sign-up/sign-up.component */ "./src/app/login/sign-up/sign-up.component.ts");






// const routes: Routes = [
//   {
//     path: '',
//     component: LoginComponent,
//     pathMatch: 'full'
//   },
//   {
//     path: 'login',
//     component: LoginComponent,
//     pathMatch: 'full'
//   }
// ];
var LoginModule = /** @class */ (function () {
    function LoginModule() {
    }
    LoginModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"],
                _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_5__["SignUpComponent"]
            ],
            imports: [
                _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
                // RouterModule.forChild(routes)
            ]
        })
    ], LoginModule);
    return LoginModule;
}());



/***/ }),

/***/ "./src/app/login/sign-up/sign-up.component.scss":
/*!******************************************************!*\
  !*** ./src/app/login/sign-up/sign-up.component.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL3NpZ24tdXAvc2lnbi11cC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/login/sign-up/sign-up.component.ts":
/*!****************************************************!*\
  !*** ./src/app/login/sign-up/sign-up.component.ts ***!
  \****************************************************/
/*! exports provided: SignUpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpComponent", function() { return SignUpComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_core_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/core/auth/auth.service */ "./src/app/core/auth/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");






var SignUpComponent = /** @class */ (function () {
    function SignUpComponent(fb, authService, router, toastr) {
        this.fb = fb;
        this.authService = authService;
        this.router = router;
        this.toastr = toastr;
        this.signUpButtonDisabled = false;
        this.loading = false;
    }
    SignUpComponent.prototype.initForm = function () {
        this.signUpForm = this.fb.group({
            userName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            passWord: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)]],
            repeatPassWord: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            family: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
        }, {
            validator: this.MustMatch('passWord', 'repeatPassWord')
        });
    };
    SignUpComponent.prototype.MustMatch = function (controlName, matchingControlName) {
        return function (formGroup) {
            var control = formGroup.controls[controlName];
            var matchingControl = formGroup.controls[matchingControlName];
            if (matchingControl.errors && !matchingControl.errors.mustMatch) {
                // return if another validator has already found an error on the matchingControl
                return;
            }
            // set error on matchingControl if validation fails
            if (control.value !== matchingControl.value) {
                matchingControl.setErrors({ mustMatch: true });
            }
            else {
                matchingControl.setErrors(null);
            }
        };
    };
    SignUpComponent.prototype.ngOnInit = function () {
        this.initForm();
    };
    SignUpComponent.prototype.onSignedUp = function () {
        var _this = this;
        if (this.signUpForm.invalid) {
            return;
        }
        this.loading = true;
        var body = this.signUpForm.getRawValue();
        this.authService.signUp(body).subscribe(function (reponse) {
            _this.toastr.success('ثبت نام با موفقیت انجام شد. خوش آمدید', 'ثبت نام موفق');
        }, function (err) {
            _this.toastr.error(err.error.value, 'ثبت نام نا موفق');
            _this.signUpForm.controls.passWord.setValue('');
            _this.signUpForm.controls.repeatPassWord.setValue('');
        });
    };
    SignUpComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _app_core_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] }
    ]; };
    SignUpComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sign-up',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./sign-up.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/sign-up/sign-up.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./sign-up.component.scss */ "./src/app/login/sign-up/sign-up.component.scss")).default]
        })
    ], SignUpComponent);
    return SignUpComponent;
}());



/***/ }),

/***/ "./src/app/pages/dashboard/dashboard.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.component.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/dashboard/dashboard.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.component.ts ***!
  \********************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/dashboard.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/pages/dashboard/dashboard.component.scss")).default]
        })
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/pages/my-answer-list/edit-answer-modal/edit-answer-modal.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/my-answer-list/edit-answer-modal/edit-answer-modal.component.scss ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL215LWFuc3dlci1saXN0L2VkaXQtYW5zd2VyLW1vZGFsL2VkaXQtYW5zd2VyLW1vZGFsLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/my-answer-list/edit-answer-modal/edit-answer-modal.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/pages/my-answer-list/edit-answer-modal/edit-answer-modal.component.ts ***!
  \***************************************************************************************/
/*! exports provided: EditAnswerModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditAnswerModalComponent", function() { return EditAnswerModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");



var EditAnswerModalComponent = /** @class */ (function () {
    function EditAnswerModalComponent(activeModal) {
        this.activeModal = activeModal;
    }
    EditAnswerModalComponent.prototype.ngOnInit = function () {
        this.matn = this.item.matn;
    };
    EditAnswerModalComponent.prototype.sendEditedAnswerBack = function () {
        if (!this.matn) {
            return;
        }
        this.activeModal.close(this.matn);
    };
    EditAnswerModalComponent.ctorParameters = function () { return [
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], EditAnswerModalComponent.prototype, "item", void 0);
    EditAnswerModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit-answer-modal',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./edit-answer-modal.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/my-answer-list/edit-answer-modal/edit-answer-modal.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./edit-answer-modal.component.scss */ "./src/app/pages/my-answer-list/edit-answer-modal/edit-answer-modal.component.scss")).default]
        })
    ], EditAnswerModalComponent);
    return EditAnswerModalComponent;
}());



/***/ }),

/***/ "./src/app/pages/my-answer-list/my-answer-list.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/pages/my-answer-list/my-answer-list.component.scss ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host::ng-deep ngb-accordion .card {\n  border: 0 !important;\n  border-radius: 0 !important;\n  margin: 10px;\n  box-shadow: 0 1px 3px 0 #cacaca;\n}\n:host::ng-deep ngb-accordion .card .card-header {\n  padding: 0px 10px;\n}\n:host::ng-deep ngb-accordion .card .card-header button {\n  padding: 0;\n  width: 100%;\n}\n:host::ng-deep ngb-accordion .card .card-header button.btn {\n  color: var(--dark);\n}\n:host::ng-deep ngb-accordion .card .card-header button.btn:hover, :host::ng-deep ngb-accordion .card .card-header button.btn:focus {\n  box-shadow: none;\n  color: var(--gray-dark);\n  text-decoration: none;\n}\n:host::ng-deep .text-lite-dark {\n  color: #999;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbXktYW5zd2VyLWxpc3QvQzpcXFVzZXJzXFxBU1VTXFxEb2N1bWVudHNcXFZpc3VhbCBTdHVkaW8gMjAxN1xcUHJvamVjdHNcXFNvYWxKYXZhYlJlc3RGdWxsXFxmcm9udC1zb2FsLWphdmFiL3NyY1xcYXBwXFxwYWdlc1xcbXktYW5zd2VyLWxpc3RcXG15LWFuc3dlci1saXN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9teS1hbnN3ZXItbGlzdC9teS1hbnN3ZXItbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFTTtFQUNFLG9CQUFBO0VBQ0EsMkJBQUE7RUFDQSxZQUFBO0VBQ0EsK0JBQUE7QUNEUjtBREdRO0VBQ0UsaUJBQUE7QUNEVjtBREVVO0VBQ0UsVUFBQTtFQUNBLFdBQUE7QUNBWjtBREVZO0VBQ0Usa0JBQUE7QUNBZDtBRENjO0VBRUUsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0FDQWhCO0FEUUk7RUFDRSxXQUFBO0FDTk4iLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9teS1hbnN3ZXItbGlzdC9teS1hbnN3ZXItbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0OjpuZy1kZWVwIHtcclxuICAgIG5nYi1hY2NvcmRpb24ge1xyXG4gICAgICAuY2FyZCB7XHJcbiAgICAgICAgYm9yZGVyOiAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMCAhaW1wb3J0YW50O1xyXG4gICAgICAgIG1hcmdpbjogMTBweDtcclxuICAgICAgICBib3gtc2hhZG93OiAwIDFweCAzcHggMCAjY2FjYWNhO1xyXG4gIFxyXG4gICAgICAgIC5jYXJkLWhlYWRlciB7XHJcbiAgICAgICAgICBwYWRkaW5nOiAwcHggMTBweDtcclxuICAgICAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gIFxyXG4gICAgICAgICAgICAmLmJ0biB7XHJcbiAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWRhcmspO1xyXG4gICAgICAgICAgICAgICY6aG92ZXIsXHJcbiAgICAgICAgICAgICAgJjpmb2N1cyB7XHJcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWdyYXktZGFyayk7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgXHJcbiAgICAudGV4dC1saXRlLWRhcmsge1xyXG4gICAgICBjb2xvcjogIzk5OTtcclxuICAgIH1cclxuICB9XHJcbiAgIiwiOmhvc3Q6Om5nLWRlZXAgbmdiLWFjY29yZGlvbiAuY2FyZCB7XG4gIGJvcmRlcjogMCAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiAwICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogMTBweDtcbiAgYm94LXNoYWRvdzogMCAxcHggM3B4IDAgI2NhY2FjYTtcbn1cbjpob3N0OjpuZy1kZWVwIG5nYi1hY2NvcmRpb24gLmNhcmQgLmNhcmQtaGVhZGVyIHtcbiAgcGFkZGluZzogMHB4IDEwcHg7XG59XG46aG9zdDo6bmctZGVlcCBuZ2ItYWNjb3JkaW9uIC5jYXJkIC5jYXJkLWhlYWRlciBidXR0b24ge1xuICBwYWRkaW5nOiAwO1xuICB3aWR0aDogMTAwJTtcbn1cbjpob3N0OjpuZy1kZWVwIG5nYi1hY2NvcmRpb24gLmNhcmQgLmNhcmQtaGVhZGVyIGJ1dHRvbi5idG4ge1xuICBjb2xvcjogdmFyKC0tZGFyayk7XG59XG46aG9zdDo6bmctZGVlcCBuZ2ItYWNjb3JkaW9uIC5jYXJkIC5jYXJkLWhlYWRlciBidXR0b24uYnRuOmhvdmVyLCA6aG9zdDo6bmctZGVlcCBuZ2ItYWNjb3JkaW9uIC5jYXJkIC5jYXJkLWhlYWRlciBidXR0b24uYnRuOmZvY3VzIHtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgY29sb3I6IHZhcigtLWdyYXktZGFyayk7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbjpob3N0OjpuZy1kZWVwIC50ZXh0LWxpdGUtZGFyayB7XG4gIGNvbG9yOiAjOTk5O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/my-answer-list/my-answer-list.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/my-answer-list/my-answer-list.component.ts ***!
  \******************************************************************/
/*! exports provided: MyAnswerListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyAnswerListComponent", function() { return MyAnswerListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _my_answer_list_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./my-answer-list.service */ "./src/app/pages/my-answer-list/my-answer-list.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _edit_answer_modal_edit_answer_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit-answer-modal/edit-answer-modal.component */ "./src/app/pages/my-answer-list/edit-answer-modal/edit-answer-modal.component.ts");





var MyAnswerListComponent = /** @class */ (function () {
    function MyAnswerListComponent(answerListService, modalService) {
        this.answerListService = answerListService;
        this.modalService = modalService;
    }
    MyAnswerListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.answerListService.getMyAnswersList().subscribe(function (res) {
            _this.answerList = res;
        });
    };
    MyAnswerListComponent.prototype.getAnswerDetails = function ($event) {
        var _this = this;
        if ($event.nextState) {
            var id = $event.panelId.substring(0, $event.panelId.indexOf('-'));
            this.answerListService.getSoalById(id).subscribe(function (res) {
                _this.question = res;
            });
        }
    };
    MyAnswerListComponent.prototype.deleteAnswer = function (item) {
        var _this = this;
        this.answerListService.deleteAnswer(item.id).subscribe(function (res) {
            _this.answerListService.getMyAnswersList().subscribe(function (list) {
                _this.answerList = list;
            });
        });
    };
    MyAnswerListComponent.prototype.editAnswer = function (item) {
        var _this = this;
        var modalRef = this.modalService.open(_edit_answer_modal_edit_answer_modal_component__WEBPACK_IMPORTED_MODULE_4__["EditAnswerModalComponent"]);
        modalRef.componentInstance.item = item;
        modalRef.result.then(function (resolve) {
            console.log(resolve);
            var body = {
                Id: item.id,
                Matn: resolve
            };
            _this.answerListService.editAnswer(item.id, body).subscribe(function (res) {
                _this.answerListService.getMyAnswersList().subscribe(function (res) {
                    _this.answerList = res;
                });
            });
        }, function (reject) { });
    };
    MyAnswerListComponent.ctorParameters = function () { return [
        { type: _my_answer_list_service__WEBPACK_IMPORTED_MODULE_2__["MyAnswerListService"] },
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('acc', { static: false })
    ], MyAnswerListComponent.prototype, "acc", void 0);
    MyAnswerListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-my-answer-list',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./my-answer-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/my-answer-list/my-answer-list.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./my-answer-list.component.scss */ "./src/app/pages/my-answer-list/my-answer-list.component.scss")).default]
        })
    ], MyAnswerListComponent);
    return MyAnswerListComponent;
}());



/***/ }),

/***/ "./src/app/pages/my-answer-list/my-answer-list.service.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/my-answer-list/my-answer-list.service.ts ***!
  \****************************************************************/
/*! exports provided: MyAnswerListService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyAnswerListService", function() { return MyAnswerListService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




var MyAnswerListService = /** @class */ (function () {
    function MyAnswerListService(http) {
        this.http = http;
    }
    MyAnswerListService.prototype.getMyAnswersList = function () {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiConfig.baseUrl + "/api/Javab");
    };
    MyAnswerListService.prototype.getSoalById = function (id) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiConfig.baseUrl + "/api/Soal/" + id);
    };
    MyAnswerListService.prototype.deleteAnswer = function (id) {
        return this.http.delete(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiConfig.baseUrl + "/api/Javab/" + id);
    };
    MyAnswerListService.prototype.editAnswer = function (id, body) {
        return this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiConfig.baseUrl + "/api/Javab/" + id, body);
    };
    MyAnswerListService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    MyAnswerListService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], MyAnswerListService);
    return MyAnswerListService;
}());



/***/ }),

/***/ "./src/app/pages/my-question-list/edit-question-modal/edit-question-modal.component.scss":
/*!***********************************************************************************************!*\
  !*** ./src/app/pages/my-question-list/edit-question-modal/edit-question-modal.component.scss ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("::ng-deep .ng2-dropdown-menu {\n  z-index: 1100 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbXktcXVlc3Rpb24tbGlzdC9lZGl0LXF1ZXN0aW9uLW1vZGFsL0M6XFxVc2Vyc1xcQVNVU1xcRG9jdW1lbnRzXFxWaXN1YWwgU3R1ZGlvIDIwMTdcXFByb2plY3RzXFxTb2FsSmF2YWJSZXN0RnVsbFxcZnJvbnQtc29hbC1qYXZhYi9zcmNcXGFwcFxccGFnZXNcXG15LXF1ZXN0aW9uLWxpc3RcXGVkaXQtcXVlc3Rpb24tbW9kYWxcXGVkaXQtcXVlc3Rpb24tbW9kYWwuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL215LXF1ZXN0aW9uLWxpc3QvZWRpdC1xdWVzdGlvbi1tb2RhbC9lZGl0LXF1ZXN0aW9uLW1vZGFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0Usd0JBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL215LXF1ZXN0aW9uLWxpc3QvZWRpdC1xdWVzdGlvbi1tb2RhbC9lZGl0LXF1ZXN0aW9uLW1vZGFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOjpuZy1kZWVwIHtcclxuICAubmcyLWRyb3Bkb3duLW1lbnUge1xyXG4gICAgei1pbmRleDogMTEwMCAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG4iLCI6Om5nLWRlZXAgLm5nMi1kcm9wZG93bi1tZW51IHtcbiAgei1pbmRleDogMTEwMCAhaW1wb3J0YW50O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/my-question-list/edit-question-modal/edit-question-modal.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/my-question-list/edit-question-modal/edit-question-modal.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: EditQuestionModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditQuestionModalComponent", function() { return EditQuestionModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_pages_question_question_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/pages/question/question.service */ "./src/app/pages/question/question.service.ts");






var EditQuestionModalComponent = /** @class */ (function () {
    function EditQuestionModalComponent(fb, activeModal, questionService) {
        var _this = this;
        this.fb = fb;
        this.activeModal = activeModal;
        this.questionService = questionService;
        this.disabled = false;
        this.requestAutocompleteItems = function (text) {
            var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiConfig.baseUrl + "/api/Tags/" + text;
            return _this.questionService.tryTagSearch(url);
        };
    }
    EditQuestionModalComponent.prototype.ngOnInit = function () {
        this.initForm();
    };
    EditQuestionModalComponent.prototype.initForm = function () {
        var oldTags = [];
        this.item.tags.forEach(function (element) {
            oldTags.push({
                value: element.id,
                display: element.onvan
            });
        });
        this.editQuestionForm = this.fb.group({
            questionBody: [this.item.matn, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            tags: [oldTags, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
    };
    EditQuestionModalComponent.prototype.checkIfAvalable = function ($event) {
        var _this = this;
        if (typeof ($event.value) === 'string') {
            var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiConfig.baseUrl + "/api/Tags/" + $event.display + "/";
            return this.questionService.tryTagSearch(url).subscribe(function (res) {
                var result = res.find(function (el) { return el.display === $event.display; });
                if (result) {
                    var tagRes = _this.editQuestionForm.controls.tags.value.find(function (el) { return el.display === $event.display; });
                    tagRes.value = result.value;
                }
            });
        }
    };
    EditQuestionModalComponent.prototype.sendEditedQuestionBack = function () {
        if (this.editQuestionForm.invalid) {
            this.editQuestionForm.markAllAsTouched();
            return;
        }
        var editedFormData = this.editQuestionForm.getRawValue();
        var mappedTags = [];
        editedFormData.tags.forEach(function (element) {
            mappedTags.push({
                Id: (typeof element.value === 'string') ? 0 : element.value,
                name: element.display
            });
        });
        editedFormData.tags = mappedTags;
        this.activeModal.close(editedFormData);
    };
    EditQuestionModalComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"] },
        { type: _app_pages_question_question_service__WEBPACK_IMPORTED_MODULE_5__["QuestionService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], EditQuestionModalComponent.prototype, "item", void 0);
    EditQuestionModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit-question-modal',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./edit-question-modal.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/my-question-list/edit-question-modal/edit-question-modal.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./edit-question-modal.component.scss */ "./src/app/pages/my-question-list/edit-question-modal/edit-question-modal.component.scss")).default]
        })
    ], EditQuestionModalComponent);
    return EditQuestionModalComponent;
}());



/***/ }),

/***/ "./src/app/pages/my-question-list/my-question-list.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/pages/my-question-list/my-question-list.component.scss ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host::ng-deep ngb-accordion .card {\n  border: 0 !important;\n  border-radius: 0 !important;\n  margin: 10px;\n  box-shadow: 0 1px 3px 0 #cacaca;\n}\n:host::ng-deep ngb-accordion .card .card-header {\n  padding: 0px 10px;\n}\n:host::ng-deep ngb-accordion .card .card-header button {\n  padding: 0;\n  width: 100%;\n}\n:host::ng-deep ngb-accordion .card .card-header button.btn {\n  color: var(--dark);\n}\n:host::ng-deep ngb-accordion .card .card-header button.btn:hover, :host::ng-deep ngb-accordion .card .card-header button.btn:focus {\n  color: var(--gray-dark);\n  box-shadow: none;\n  text-decoration: none;\n}\n:host::ng-deep .text-lite-dark {\n  color: #999;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbXktcXVlc3Rpb24tbGlzdC9DOlxcVXNlcnNcXEFTVVNcXERvY3VtZW50c1xcVmlzdWFsIFN0dWRpbyAyMDE3XFxQcm9qZWN0c1xcU29hbEphdmFiUmVzdEZ1bGxcXGZyb250LXNvYWwtamF2YWIvc3JjXFxhcHBcXHBhZ2VzXFxteS1xdWVzdGlvbi1saXN0XFxteS1xdWVzdGlvbi1saXN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9teS1xdWVzdGlvbi1saXN0L215LXF1ZXN0aW9uLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUk7RUFDRSxvQkFBQTtFQUNBLDJCQUFBO0VBQ0EsWUFBQTtFQUNBLCtCQUFBO0FDRE47QURHTTtFQUNFLGlCQUFBO0FDRFI7QURFUTtFQUNFLFVBQUE7RUFDQSxXQUFBO0FDQVY7QURFVTtFQUNFLGtCQUFBO0FDQVo7QURDWTtFQUVFLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtBQ0FkO0FEUUU7RUFDRSxXQUFBO0FDTkoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9teS1xdWVzdGlvbi1saXN0L215LXF1ZXN0aW9uLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdDo6bmctZGVlcCB7XHJcbiAgbmdiLWFjY29yZGlvbiB7XHJcbiAgICAuY2FyZCB7XHJcbiAgICAgIGJvcmRlcjogMCAhaW1wb3J0YW50O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAwICFpbXBvcnRhbnQ7XHJcbiAgICAgIG1hcmdpbjogMTBweDtcclxuICAgICAgYm94LXNoYWRvdzogMCAxcHggM3B4IDAgI2NhY2FjYTtcclxuXHJcbiAgICAgIC5jYXJkLWhlYWRlciB7XHJcbiAgICAgICAgcGFkZGluZzogMHB4IDEwcHg7XHJcbiAgICAgICAgYnV0dG9uIHtcclxuICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICAgICAgICAmLmJ0biB7XHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1kYXJrKTtcclxuICAgICAgICAgICAgJjpob3ZlcixcclxuICAgICAgICAgICAgJjpmb2N1cyB7XHJcbiAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWdyYXktZGFyayk7XHJcbiAgICAgICAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC50ZXh0LWxpdGUtZGFyayB7XHJcbiAgICBjb2xvcjogIzk5OTtcclxuICB9XHJcbn1cclxuIiwiOmhvc3Q6Om5nLWRlZXAgbmdiLWFjY29yZGlvbiAuY2FyZCB7XG4gIGJvcmRlcjogMCAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiAwICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogMTBweDtcbiAgYm94LXNoYWRvdzogMCAxcHggM3B4IDAgI2NhY2FjYTtcbn1cbjpob3N0OjpuZy1kZWVwIG5nYi1hY2NvcmRpb24gLmNhcmQgLmNhcmQtaGVhZGVyIHtcbiAgcGFkZGluZzogMHB4IDEwcHg7XG59XG46aG9zdDo6bmctZGVlcCBuZ2ItYWNjb3JkaW9uIC5jYXJkIC5jYXJkLWhlYWRlciBidXR0b24ge1xuICBwYWRkaW5nOiAwO1xuICB3aWR0aDogMTAwJTtcbn1cbjpob3N0OjpuZy1kZWVwIG5nYi1hY2NvcmRpb24gLmNhcmQgLmNhcmQtaGVhZGVyIGJ1dHRvbi5idG4ge1xuICBjb2xvcjogdmFyKC0tZGFyayk7XG59XG46aG9zdDo6bmctZGVlcCBuZ2ItYWNjb3JkaW9uIC5jYXJkIC5jYXJkLWhlYWRlciBidXR0b24uYnRuOmhvdmVyLCA6aG9zdDo6bmctZGVlcCBuZ2ItYWNjb3JkaW9uIC5jYXJkIC5jYXJkLWhlYWRlciBidXR0b24uYnRuOmZvY3VzIHtcbiAgY29sb3I6IHZhcigtLWdyYXktZGFyayk7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbjpob3N0OjpuZy1kZWVwIC50ZXh0LWxpdGUtZGFyayB7XG4gIGNvbG9yOiAjOTk5O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/my-question-list/my-question-list.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pages/my-question-list/my-question-list.component.ts ***!
  \**********************************************************************/
/*! exports provided: MyQuestionListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyQuestionListComponent", function() { return MyQuestionListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _my_question_list_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./my-question-list.service */ "./src/app/pages/my-question-list/my-question-list.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _edit_question_modal_edit_question_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit-question-modal/edit-question-modal.component */ "./src/app/pages/my-question-list/edit-question-modal/edit-question-modal.component.ts");





var MyQuestionListComponent = /** @class */ (function () {
    function MyQuestionListComponent(myQListService, modalService) {
        this.myQListService = myQListService;
        this.modalService = modalService;
    }
    MyQuestionListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.myQListService.getMyQuestions().subscribe(function (res) {
            _this.questionList = res;
        });
    };
    MyQuestionListComponent.prototype.getDetailsQuestion = function ($event) {
        var _this = this;
        if ($event.nextState) {
            this.myQListService.getMyQuestionAnswers($event.panelId).subscribe(function (res) {
                _this.answers = res;
            });
        }
    };
    MyQuestionListComponent.prototype.deleteQuestion = function (item) {
        var _this = this;
        this.myQListService.deleteQuestion(item.soalId).subscribe(function (res) {
            _this.myQListService.getMyQuestions().subscribe(function (list) {
                _this.questionList = list;
            });
        });
    };
    MyQuestionListComponent.prototype.editQuestion = function (item) {
        var _this = this;
        var modalRef = this.modalService.open(_edit_question_modal_edit_question_modal_component__WEBPACK_IMPORTED_MODULE_4__["EditQuestionModalComponent"]);
        modalRef.componentInstance.item = item;
        modalRef.result.then(function (resolve) {
            // console.log(resolve);
            var body = {
                // ZirReshtehId: item.idZirreshteh,
                Id: item.soalId,
                Tags: resolve.tags,
                Matn: resolve.questionBody
            };
            _this.myQListService.editQuestion(item.soalId, body).subscribe(function (res) {
                _this.myQListService.getMyQuestions().subscribe(function (res2) {
                    _this.questionList = res2;
                });
            });
        }, function (reject) { });
    };
    MyQuestionListComponent.ctorParameters = function () { return [
        { type: _my_question_list_service__WEBPACK_IMPORTED_MODULE_2__["MyQuestionListService"] },
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"] }
    ]; };
    MyQuestionListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-my-question-list',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./my-question-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/my-question-list/my-question-list.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./my-question-list.component.scss */ "./src/app/pages/my-question-list/my-question-list.component.scss")).default]
        })
    ], MyQuestionListComponent);
    return MyQuestionListComponent;
}());



/***/ }),

/***/ "./src/app/pages/my-question-list/my-question-list.service.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/my-question-list/my-question-list.service.ts ***!
  \********************************************************************/
/*! exports provided: MyQuestionListService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyQuestionListService", function() { return MyQuestionListService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




var MyQuestionListService = /** @class */ (function () {
    function MyQuestionListService(http) {
        this.http = http;
    }
    MyQuestionListService.prototype.getMyQuestions = function () {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiConfig.baseUrl + "/api/Soal");
    };
    MyQuestionListService.prototype.getMyQuestionAnswers = function (id) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiConfig.baseUrl + "/api/Javab/" + id);
    };
    MyQuestionListService.prototype.deleteQuestion = function (id) {
        return this.http.delete(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiConfig.baseUrl + "/api/Soal/" + id);
    };
    MyQuestionListService.prototype.editQuestion = function (id, item) {
        return this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiConfig.baseUrl + "/api/Soal/" + id, item);
    };
    MyQuestionListService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    MyQuestionListService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], MyQuestionListService);
    return MyQuestionListService;
}());



/***/ }),

/***/ "./src/app/pages/pages.module.ts":
/*!***************************************!*\
  !*** ./src/app/pages/pages.module.ts ***!
  \***************************************/
/*! exports provided: PagesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesModule", function() { return PagesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _question_question_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./question/question.component */ "./src/app/pages/question/question.component.ts");
/* harmony import */ var _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/pages/dashboard/dashboard.component.ts");
/* harmony import */ var _my_question_list_my_question_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./my-question-list/my-question-list.component */ "./src/app/pages/my-question-list/my-question-list.component.ts");
/* harmony import */ var _my_answer_list_my_answer_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./my-answer-list/my-answer-list.component */ "./src/app/pages/my-answer-list/my-answer-list.component.ts");
/* harmony import */ var _questions_feed_questions_feed_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./questions-feed/questions-feed.component */ "./src/app/pages/questions-feed/questions-feed.component.ts");
/* harmony import */ var _my_question_list_edit_question_modal_edit_question_modal_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./my-question-list/edit-question-modal/edit-question-modal.component */ "./src/app/pages/my-question-list/edit-question-modal/edit-question-modal.component.ts");
/* harmony import */ var _my_answer_list_edit_answer_modal_edit_answer_modal_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./my-answer-list/edit-answer-modal/edit-answer-modal.component */ "./src/app/pages/my-answer-list/edit-answer-modal/edit-answer-modal.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/pages/profile/profile.component.ts");











var PagesModule = /** @class */ (function () {
    function PagesModule() {
    }
    PagesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _question_question_component__WEBPACK_IMPORTED_MODULE_2__["QuestionComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"],
                _my_question_list_my_question_list_component__WEBPACK_IMPORTED_MODULE_5__["MyQuestionListComponent"],
                _my_answer_list_my_answer_list_component__WEBPACK_IMPORTED_MODULE_6__["MyAnswerListComponent"],
                _questions_feed_questions_feed_component__WEBPACK_IMPORTED_MODULE_7__["QuestionsFeedComponent"],
                _my_question_list_edit_question_modal_edit_question_modal_component__WEBPACK_IMPORTED_MODULE_8__["EditQuestionModalComponent"],
                _my_answer_list_edit_answer_modal_edit_answer_modal_component__WEBPACK_IMPORTED_MODULE_9__["EditAnswerModalComponent"],
                _profile_profile_component__WEBPACK_IMPORTED_MODULE_10__["ProfileComponent"]
            ],
            imports: [
                _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]
            ],
            entryComponents: [
                _my_question_list_edit_question_modal_edit_question_modal_component__WEBPACK_IMPORTED_MODULE_8__["EditQuestionModalComponent"],
                _my_answer_list_edit_answer_modal_edit_answer_modal_component__WEBPACK_IMPORTED_MODULE_9__["EditAnswerModalComponent"]
            ]
        })
    ], PagesModule);
    return PagesModule;
}());



/***/ }),

/***/ "./src/app/pages/profile/profile.component.scss":
/*!******************************************************!*\
  !*** ./src/app/pages/profile/profile.component.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/profile/profile.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/profile/profile.component.ts ***!
  \****************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _profile_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile.service */ "./src/app/pages/profile/profile.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _app_layout_header_header_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/layout/header/header.service */ "./src/app/layout/header/header.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _question_question_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../question/question.service */ "./src/app/pages/question/question.service.ts");








var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(fb, profileService, toastrService, headerService, questionService) {
        var _this = this;
        this.fb = fb;
        this.profileService = profileService;
        this.toastrService = toastrService;
        this.headerService = headerService;
        this.questionService = questionService;
        // fields: any[];
        // activeSubFields: any[];
        // subfieldArray: any[] = [];
        this.userTags = [];
        this.requestAutocompleteItems = function (text) {
            var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].apiConfig.baseUrl + "/api/Tags/" + text;
            return _this.questionService.tryTagSearch(url);
        };
    }
    ProfileComponent.prototype.ngOnInit = function () {
        this.initChangePassForm();
        this.getUserTags();
        this.initSelectTagsFrom();
    };
    ProfileComponent.prototype.initChangePassForm = function () {
        this.changePasswordForm = this.fb.group({
            currentPassword: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            newPassword: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)]],
            repeatPassword: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        }, {
            validator: this.MustMatch('newPassword', 'repeatPassword')
        });
    };
    ProfileComponent.prototype.initSelectTagsFrom = function () {
        this.selectTagsForm = this.fb.group({
            tags: [this.userTags, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    };
    ProfileComponent.prototype.MustMatch = function (controlName, matchingControlName) {
        return function (formGroup) {
            var control = formGroup.controls[controlName];
            var matchingControl = formGroup.controls[matchingControlName];
            if (matchingControl.errors && !matchingControl.errors.mustMatch) {
                // return if another validator has already found an error on the matchingControl
                return;
            }
            // set error on matchingControl if validation fails
            if (control.value !== matchingControl.value) {
                matchingControl.setErrors({ mustMatch: true });
            }
            else {
                matchingControl.setErrors(null);
            }
        };
    };
    ProfileComponent.prototype.changePassword = function () {
        var _this = this;
        if (this.changePasswordForm.invalid) {
            return;
        }
        var tmp = this.changePasswordForm.getRawValue();
        var body = {
            CurrentPassword: tmp.currentPassword,
            NewPassword: tmp.newPassword
        };
        // console.log(body);
        this.profileService.changePassword(body).subscribe(function (res) {
            _this.toastrService.success('change pass', 'success');
        }, function (err) {
            _this.toastrService.error('change pass', 'error');
        });
    };
    ProfileComponent.prototype.getUserTags = function () {
        var _this = this;
        this.headerService.userInfo.subscribe(function (userInfo) {
            userInfo.tags.forEach(function (el) { return _this.userTags.push({ display: el.onvan, value: el.id }); });
        });
    };
    ProfileComponent.prototype.checkIfAvalable = function ($event) {
        var _this = this;
        if (typeof ($event.value) === 'string') {
            var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].apiConfig.baseUrl + "/api/Tags/" + $event.display + "/";
            return this.questionService.tryTagSearch(url).subscribe(function (res) {
                var result = res.find(function (el) { return el.display === $event.display; });
                if (result) {
                    var tagRes = _this.selectTagsForm.controls.tags.value.find(function (el) { return el.display === $event.display; });
                    tagRes.value = result.value;
                }
            });
        }
    };
    ProfileComponent.prototype.saveTags = function () {
        var _this = this;
        if (this.selectTagsForm.invalid) {
            this.selectTagsForm.markAllAsTouched();
            return;
        }
        var editedFormData = this.selectTagsForm.getRawValue();
        var mappedTags = [];
        editedFormData.tags.forEach(function (element) {
            mappedTags.push({
                Id: (typeof element.value === 'string') ? 0 : element.value,
                name: element.display
            });
        });
        this.profileService.setTags(mappedTags).subscribe(function (res) {
            _this.toastrService.success('ثبت شد', 'res', { timeOut: 2000 });
        }, function (err) {
            _this.toastrService.error('خطا', 'res', { timeOut: 2000 });
        });
    };
    ProfileComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _profile_service__WEBPACK_IMPORTED_MODULE_3__["ProfileService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] },
        { type: _app_layout_header_header_service__WEBPACK_IMPORTED_MODULE_5__["HeaderService"] },
        { type: _question_question_service__WEBPACK_IMPORTED_MODULE_7__["QuestionService"] }
    ]; };
    ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./profile.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/profile.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./profile.component.scss */ "./src/app/pages/profile/profile.component.scss")).default]
        })
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/pages/profile/profile.service.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/profile/profile.service.ts ***!
  \**************************************************/
/*! exports provided: ProfileService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileService", function() { return ProfileService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




var ProfileService = /** @class */ (function () {
    function ProfileService(http) {
        this.http = http;
    }
    ProfileService.prototype.changePassword = function (body) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiConfig.baseUrl + "/api/Account/ChangePassword", body);
    };
    ProfileService.prototype.setTags = function (body) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiConfig.baseUrl + "/api/UserTag", body);
    };
    ProfileService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    ProfileService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], ProfileService);
    return ProfileService;
}());



/***/ }),

/***/ "./src/app/pages/question/question.component.scss":
/*!********************************************************!*\
  !*** ./src/app/pages/question/question.component.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("textarea {\n  resize: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcXVlc3Rpb24vQzpcXFVzZXJzXFxBU1VTXFxEb2N1bWVudHNcXFZpc3VhbCBTdHVkaW8gMjAxN1xcUHJvamVjdHNcXFNvYWxKYXZhYlJlc3RGdWxsXFxmcm9udC1zb2FsLWphdmFiL3NyY1xcYXBwXFxwYWdlc1xccXVlc3Rpb25cXHF1ZXN0aW9uLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9xdWVzdGlvbi9xdWVzdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3F1ZXN0aW9uL3F1ZXN0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGV4dGFyZWEge1xyXG4gIHJlc2l6ZTogbm9uZTtcclxufVxyXG4iLCJ0ZXh0YXJlYSB7XG4gIHJlc2l6ZTogbm9uZTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/question/question.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/question/question.component.ts ***!
  \******************************************************/
/*! exports provided: QuestionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionComponent", function() { return QuestionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _question_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./question.service */ "./src/app/pages/question/question.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");






var QuestionComponent = /** @class */ (function () {
    function QuestionComponent(fb, questionService, toastrService) {
        var _this = this;
        this.fb = fb;
        this.questionService = questionService;
        this.toastrService = toastrService;
        // fields: any[];
        // activeSubFields: any[];
        this.disabled = false;
        this.requestAutocompleteItems = function (text) {
            // if (this.registerQuestion.controls.subField.hasError('required')) {
            //   this.registerQuestion.controls.subField.markAsTouched();
            //   this.registerQuestion.controls.field.markAsTouched();
            //   return (of([]).pipe(map(data => {
            //     return data;
            //   })));
            // } else {
            var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiConfig.baseUrl + "/api/Tags/" + text;
            return _this.questionService.tryTagSearch(url);
            // }
        };
    }
    QuestionComponent.prototype.ngOnInit = function () {
        // this.questionService.getEssentialForQuestion().subscribe(fields => {
        //   this.fields = fields;
        //   // console.log(fields);
        // });
        this.initForm();
        // this.registerQuestion.controls.field.valueChanges.subscribe(changes => {
        //   const x = this.fields.find(el => el.id === changes);
        //   if (x) {
        //     this.activeSubFields = x.zirreshteh;
        //   }
        // });
    };
    QuestionComponent.prototype.checkIfAvalable = function ($event) {
        var _this = this;
        if (typeof ($event.value) === 'string') {
            var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiConfig.baseUrl + "/api/Tags/" + $event.display + "/";
            return this.questionService.tryTagSearch(url).subscribe(function (res) {
                var result = res.find(function (el) { return el.display === $event.display; });
                if (result) {
                    var tagRes = _this.registerQuestion.controls.tags.value.find(function (el) { return el.display === $event.display; });
                    tagRes.value = result.value;
                }
            });
        }
    };
    QuestionComponent.prototype.initForm = function () {
        this.registerQuestion = this.fb.group({
            // field: [null, Validators.required],
            // subField: [null, Validators.required],
            questionBody: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            tags: [[], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    };
    QuestionComponent.prototype.registerQuestionForm = function () {
        var _this = this;
        if (this.registerQuestion.invalid) {
            this.registerQuestion.markAllAsTouched();
            return;
        }
        this.disabled = true;
        var tagsArr = this.registerQuestion.controls.tags.value;
        tagsArr = tagsArr.map(function (item) {
            var newItem = {
                id: typeof (item.value) === 'string' ? 0 : item.value,
                name: item.display
            };
            return newItem;
        });
        var body = {
            id: 0,
            matn: this.registerQuestion.controls.questionBody.value,
            // zirReshtehId: this.registerQuestion.controls.subField.value,
            tags: tagsArr
        };
        this.questionService.registerQuestion(body).subscribe(function (res) {
            _this.toastrService.success(JSON.stringify(res), 'res');
            _this.registerQuestion.reset();
            _this.disabled = false;
        }, function (err) {
            _this.toastrService.error(JSON.stringify(err), 'err');
            _this.disabled = false;
        });
    };
    QuestionComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _question_service__WEBPACK_IMPORTED_MODULE_3__["QuestionService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] }
    ]; };
    QuestionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-question',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./question.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/question/question.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./question.component.scss */ "./src/app/pages/question/question.component.scss")).default]
        })
    ], QuestionComponent);
    return QuestionComponent;
}());



/***/ }),

/***/ "./src/app/pages/question/question.service.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/question/question.service.ts ***!
  \****************************************************/
/*! exports provided: QuestionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionService", function() { return QuestionService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var QuestionService = /** @class */ (function () {
    function QuestionService(http) {
        this.http = http;
    }
    // getEssentialForQuestion(): Observable<any> {
    //   return this.http.get(`${environment.apiConfig.baseUrl}/api/Essentials`);
    // }
    QuestionService.prototype.tryTagSearch = function (url) {
        return this.http.get(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) {
            return data.map(function (d) {
                var tagData = {
                    value: d.id,
                    display: d.name
                };
                return tagData;
            });
        }));
    };
    QuestionService.prototype.registerQuestion = function (body) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiConfig.baseUrl + "/api/Soal", body);
    };
    QuestionService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    QuestionService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
    ], QuestionService);
    return QuestionService;
}());



/***/ }),

/***/ "./src/app/pages/questions-feed/questions-feed.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/pages/questions-feed/questions-feed.component.scss ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host::ng-deep ngb-accordion .card {\n  border: 0 !important;\n  border-radius: 0 !important;\n  margin: 10px;\n  box-shadow: 0 1px 3px 0 #cacaca;\n}\n:host::ng-deep ngb-accordion .card .card-header {\n  padding: 0px 10px;\n}\n:host::ng-deep ngb-accordion .card .card-header button {\n  padding: 0;\n  width: 100%;\n}\n:host::ng-deep ngb-accordion .card .card-header button.btn {\n  color: var(--dark);\n}\n:host::ng-deep ngb-accordion .card .card-header button.btn:hover, :host::ng-deep ngb-accordion .card .card-header button.btn:focus {\n  color: var(--gray-dark);\n  box-shadow: none;\n  text-decoration: none;\n}\n:host::ng-deep .text-lite-dark {\n  color: #999;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcXVlc3Rpb25zLWZlZWQvQzpcXFVzZXJzXFxBU1VTXFxEb2N1bWVudHNcXFZpc3VhbCBTdHVkaW8gMjAxN1xcUHJvamVjdHNcXFNvYWxKYXZhYlJlc3RGdWxsXFxmcm9udC1zb2FsLWphdmFiL3NyY1xcYXBwXFxwYWdlc1xccXVlc3Rpb25zLWZlZWRcXHF1ZXN0aW9ucy1mZWVkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9xdWVzdGlvbnMtZmVlZC9xdWVzdGlvbnMtZmVlZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFTTtFQUNFLG9CQUFBO0VBQ0EsMkJBQUE7RUFDQSxZQUFBO0VBQ0EsK0JBQUE7QUNEUjtBREdRO0VBQ0UsaUJBQUE7QUNEVjtBREVVO0VBQ0UsVUFBQTtFQUNBLFdBQUE7QUNBWjtBREVZO0VBQ0Usa0JBQUE7QUNBZDtBRENjO0VBRUUsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0FDQWhCO0FEUUk7RUFDRSxXQUFBO0FDTk4iLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9xdWVzdGlvbnMtZmVlZC9xdWVzdGlvbnMtZmVlZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0OjpuZy1kZWVwIHtcclxuICAgIG5nYi1hY2NvcmRpb24ge1xyXG4gICAgICAuY2FyZCB7XHJcbiAgICAgICAgYm9yZGVyOiAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMCAhaW1wb3J0YW50O1xyXG4gICAgICAgIG1hcmdpbjogMTBweDtcclxuICAgICAgICBib3gtc2hhZG93OiAwIDFweCAzcHggMCAjY2FjYWNhO1xyXG4gIFxyXG4gICAgICAgIC5jYXJkLWhlYWRlciB7XHJcbiAgICAgICAgICBwYWRkaW5nOiAwcHggMTBweDtcclxuICAgICAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gIFxyXG4gICAgICAgICAgICAmLmJ0biB7XHJcbiAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWRhcmspO1xyXG4gICAgICAgICAgICAgICY6aG92ZXIsXHJcbiAgICAgICAgICAgICAgJjpmb2N1cyB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tZ3JheS1kYXJrKTtcclxuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgXHJcbiAgICAudGV4dC1saXRlLWRhcmsge1xyXG4gICAgICBjb2xvcjogIzk5OTtcclxuICAgIH1cclxuICB9XHJcbiAgIiwiOmhvc3Q6Om5nLWRlZXAgbmdiLWFjY29yZGlvbiAuY2FyZCB7XG4gIGJvcmRlcjogMCAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiAwICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogMTBweDtcbiAgYm94LXNoYWRvdzogMCAxcHggM3B4IDAgI2NhY2FjYTtcbn1cbjpob3N0OjpuZy1kZWVwIG5nYi1hY2NvcmRpb24gLmNhcmQgLmNhcmQtaGVhZGVyIHtcbiAgcGFkZGluZzogMHB4IDEwcHg7XG59XG46aG9zdDo6bmctZGVlcCBuZ2ItYWNjb3JkaW9uIC5jYXJkIC5jYXJkLWhlYWRlciBidXR0b24ge1xuICBwYWRkaW5nOiAwO1xuICB3aWR0aDogMTAwJTtcbn1cbjpob3N0OjpuZy1kZWVwIG5nYi1hY2NvcmRpb24gLmNhcmQgLmNhcmQtaGVhZGVyIGJ1dHRvbi5idG4ge1xuICBjb2xvcjogdmFyKC0tZGFyayk7XG59XG46aG9zdDo6bmctZGVlcCBuZ2ItYWNjb3JkaW9uIC5jYXJkIC5jYXJkLWhlYWRlciBidXR0b24uYnRuOmhvdmVyLCA6aG9zdDo6bmctZGVlcCBuZ2ItYWNjb3JkaW9uIC5jYXJkIC5jYXJkLWhlYWRlciBidXR0b24uYnRuOmZvY3VzIHtcbiAgY29sb3I6IHZhcigtLWdyYXktZGFyayk7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbjpob3N0OjpuZy1kZWVwIC50ZXh0LWxpdGUtZGFyayB7XG4gIGNvbG9yOiAjOTk5O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/questions-feed/questions-feed.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/questions-feed/questions-feed.component.ts ***!
  \******************************************************************/
/*! exports provided: QuestionsFeedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionsFeedComponent", function() { return QuestionsFeedComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _questions_feed_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./questions-feed.service */ "./src/app/pages/questions-feed/questions-feed.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");





var QuestionsFeedComponent = /** @class */ (function () {
    function QuestionsFeedComponent(questionFeedService, toastrService) {
        this.questionFeedService = questionFeedService;
        this.toastrService = toastrService;
        this.subscription = [];
        this.hasTags = false;
        this.loadMoreLoading = false;
        this.answerLoading = false;
    }
    QuestionsFeedComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.questionFeedService.getUserInfoSubject().subscribe(function (info) {
            if (info && info.tags.length > 0) {
                _this.hasTags = true;
                _this.questionFeedService.getInitFeeds().subscribe(function (res) {
                    _this.questionList = res;
                });
                _this.newFeedTimer = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["interval"])(60000);
                var timer = _this.newFeedTimer.subscribe(function (ii) {
                    _this.questionFeedService.getNewFeeds().subscribe(function (newFeed) {
                        if (newFeed) {
                            newFeed.forEach(function (el) {
                                _this.questionList.unshift(el);
                            });
                            _this.questionList = tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](_this.questionList);
                        }
                    });
                });
                _this.subscription.push(timer);
            }
            else {
                _this.hasTags = false;
            }
        });
    };
    QuestionsFeedComponent.prototype.loadMore = function () {
        var _this = this;
        this.loadMoreLoading = true;
        this.questionFeedService.getFeedsLoadMore(this.questionList[this.questionList.length - 1].soalId).subscribe(function (moreQuestion) {
            _this.loadMoreLoading = false;
            moreQuestion.forEach(function (el) {
                _this.questionList.push(el);
            });
        }, function (err) {
            _this.loadMoreLoading = false;
        });
    };
    QuestionsFeedComponent.prototype.getDetailsQuestion = function ($event) { };
    QuestionsFeedComponent.prototype.sendAnswer = function (item) {
        var _this = this;
        this.answerLoading = true;
        this.questionFeedService.tryAnswer(item.soalId, this.answer).subscribe(function (resp) {
            _this.answerLoading = false;
            _this.toastrService.success('جواب با موفقیت ثبت شد', 'ثبت پاسخ');
            _this.answer = '';
        }, function (err) {
            _this.answerLoading = false;
            _this.toastrService.error('ثبت جواب ناموفق بود', 'ثبت پاسخ');
            _this.answer = '';
        });
    };
    QuestionsFeedComponent.prototype.ngOnDestroy = function () {
        this.subscription.forEach(function (el) {
            el.unsubscribe();
        });
    };
    QuestionsFeedComponent.ctorParameters = function () { return [
        { type: _questions_feed_service__WEBPACK_IMPORTED_MODULE_2__["QuestionsFeedService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] }
    ]; };
    QuestionsFeedComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-questions-feed',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./questions-feed.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/questions-feed/questions-feed.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./questions-feed.component.scss */ "./src/app/pages/questions-feed/questions-feed.component.scss")).default]
        })
    ], QuestionsFeedComponent);
    return QuestionsFeedComponent;
}());



/***/ }),

/***/ "./src/app/pages/questions-feed/questions-feed.service.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/questions-feed/questions-feed.service.ts ***!
  \****************************************************************/
/*! exports provided: QuestionsFeedService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionsFeedService", function() { return QuestionsFeedService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_layout_header_header_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/layout/header/header.service */ "./src/app/layout/header/header.service.ts");





var QuestionsFeedService = /** @class */ (function () {
    function QuestionsFeedService(http, headerServiec) {
        this.http = http;
        this.headerServiec = headerServiec;
    }
    QuestionsFeedService.prototype.getUserInfoSubject = function () {
        return this.headerServiec.userInfo;
    };
    QuestionsFeedService.prototype.getInitFeeds = function () {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiConfig.baseUrl + "/api/SoalToUser");
    };
    QuestionsFeedService.prototype.getFeedsLoadMore = function (id) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiConfig.baseUrl + "/api/SoalToUser/" + id);
    };
    QuestionsFeedService.prototype.getNewFeeds = function () {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiConfig.baseUrl + "/api/SoalToUser/getNewFeeds");
    };
    QuestionsFeedService.prototype.tryAnswer = function (id, body) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiConfig.baseUrl + "/api/Javab", { IdSoal: id, Matn: body });
    };
    QuestionsFeedService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _app_layout_header_header_service__WEBPACK_IMPORTED_MODULE_4__["HeaderService"] }
    ]; };
    QuestionsFeedService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], QuestionsFeedService);
    return QuestionsFeedService;
}());



/***/ }),

/***/ "./src/app/shared/shared-common.module.ts":
/*!************************************************!*\
  !*** ./src/app/shared/shared-common.module.ts ***!
  \************************************************/
/*! exports provided: SharedCommonModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedCommonModule", function() { return SharedCommonModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");




var SharedCommonModule = /** @class */ (function () {
    function SharedCommonModule() {
    }
    SharedCommonModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
            ],
            exports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
            ]
        })
    ], SharedCommonModule);
    return SharedCommonModule;
}());



/***/ }),

/***/ "./src/app/shared/shared-lib.module.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/shared-lib.module.ts ***!
  \*********************************************/
/*! exports provided: SharedLibModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedLibModule", function() { return SharedLibModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var ngx_chips__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-chips */ "./node_modules/ngx-chips/fesm5/ngx-chips.js");








var SharedLibModule = /** @class */ (function () {
    function SharedLibModule() {
    }
    SharedLibModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrModule"].forRoot({ positionClass: 'toast-bottom-left' }),
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbDropdownModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModalModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbAccordionModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbNavModule"],
                ngx_chips__WEBPACK_IMPORTED_MODULE_7__["TagInputModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"]
            ],
            exports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbDropdownModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModalModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbAccordionModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbNavModule"],
                ngx_chips__WEBPACK_IMPORTED_MODULE_7__["TagInputModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"]
            ]
        })
    ], SharedLibModule);
    return SharedLibModule;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_lib_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared-lib.module */ "./src/app/shared/shared-lib.module.ts");
/* harmony import */ var _shared_common_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared-common.module */ "./src/app/shared/shared-common.module.ts");




var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_shared_lib_module__WEBPACK_IMPORTED_MODULE_2__["SharedLibModule"], _shared_common_module__WEBPACK_IMPORTED_MODULE_3__["SharedCommonModule"]],
            exports: [_shared_lib_module__WEBPACK_IMPORTED_MODULE_2__["SharedLibModule"], _shared_common_module__WEBPACK_IMPORTED_MODULE_3__["SharedCommonModule"]],
            declarations: [],
            providers: [],
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

var server = 'https://localhost:5001';
//const server = 'http://localhost:5000';
// const server = 'http://192.168.43.179:5000';
//const server = 'http://192.168.1.5:5000';
var environment = {
    production: false,
    apiConfig: {
        apiEnv: 'prod',
        timeExpired: 1200,
        credentials: {
            clientId: '',
            clientSecret: ''
        },
        baseUrl: server,
        apiUrls: []
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\ASUS\Documents\Visual Studio 2017\Projects\SoalJavabRestFull\front-soal-javab\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
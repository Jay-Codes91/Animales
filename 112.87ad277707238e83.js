"use strict";
(self["webpackChunkAnimales"] = self["webpackChunkAnimales"] || []).push([[112],{

/***/ 6989:
/*!******************************************************************!*\
  !*** ./src/app/Components/pagina404/pagina404-routing.module.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Pagina404RoutingModule": () => (/* binding */ Pagina404RoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 4793);
/* harmony import */ var _pagina404_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pagina404.component */ 2643);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4650);




const routes = [{
  path: '',
  component: _pagina404_component__WEBPACK_IMPORTED_MODULE_0__.Pagina404Component
}];
let Pagina404RoutingModule = /*#__PURE__*/(() => {
  class Pagina404RoutingModule {}

  Pagina404RoutingModule.ɵfac = function Pagina404RoutingModule_Factory(t) {
    return new (t || Pagina404RoutingModule)();
  };

  Pagina404RoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: Pagina404RoutingModule
  });
  Pagina404RoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
  return Pagina404RoutingModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](Pagina404RoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 5112:
/*!**********************************************************!*\
  !*** ./src/app/Components/pagina404/pagina404.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Pagina404Module": () => (/* binding */ Pagina404Module)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6895);
/* harmony import */ var _pagina404_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pagina404-routing.module */ 6989);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4650);



let Pagina404Module = /*#__PURE__*/(() => {
  class Pagina404Module {}

  Pagina404Module.ɵfac = function Pagina404Module_Factory(t) {
    return new (t || Pagina404Module)();
  };

  Pagina404Module.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: Pagina404Module
  });
  Pagina404Module.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _pagina404_routing_module__WEBPACK_IMPORTED_MODULE_0__.Pagina404RoutingModule]
  });
  return Pagina404Module;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](Pagina404Module, {
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _pagina404_routing_module__WEBPACK_IMPORTED_MODULE_0__.Pagina404RoutingModule]
  });
})();

/***/ })

}]);
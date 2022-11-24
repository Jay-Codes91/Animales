"use strict";
(self["webpackChunkAnimales"] = self["webpackChunkAnimales"] || []).push([[459],{

/***/ 2301:
/*!*******************************************************************************!*\
  !*** ./src/app/Components/tipos-animales/insectos/insectos-routing.module.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InsectosRoutingModule": () => (/* binding */ InsectosRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 4793);
/* harmony import */ var _insectos_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./insectos.component */ 2209);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4650);




const routes = [{
  path: '',
  component: _insectos_component__WEBPACK_IMPORTED_MODULE_0__.InsectosComponent
}];
let InsectosRoutingModule = /*#__PURE__*/(() => {
  class InsectosRoutingModule {}

  InsectosRoutingModule.ɵfac = function InsectosRoutingModule_Factory(t) {
    return new (t || InsectosRoutingModule)();
  };

  InsectosRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: InsectosRoutingModule
  });
  InsectosRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
  return InsectosRoutingModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](InsectosRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 5292:
/*!***********************************************************************!*\
  !*** ./src/app/Components/tipos-animales/insectos/insectos.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InsectosModule": () => (/* binding */ InsectosModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6895);
/* harmony import */ var _insectos_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./insectos-routing.module */ 2301);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4650);



let InsectosModule = /*#__PURE__*/(() => {
  class InsectosModule {}

  InsectosModule.ɵfac = function InsectosModule_Factory(t) {
    return new (t || InsectosModule)();
  };

  InsectosModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: InsectosModule
  });
  InsectosModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _insectos_routing_module__WEBPACK_IMPORTED_MODULE_0__.InsectosRoutingModule]
  });
  return InsectosModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](InsectosModule, {
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _insectos_routing_module__WEBPACK_IMPORTED_MODULE_0__.InsectosRoutingModule]
  });
})();

/***/ })

}]);
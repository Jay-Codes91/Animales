"use strict";
(self["webpackChunkAnimales"] = self["webpackChunkAnimales"] || []).push([[991],{

/***/ 5033:
/*!**************************************************************************************!*\
  !*** ./src/app/Components/tipos-animales/insectos/insecto/insecto-routing.module.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InsectoRoutingModule": () => (/* binding */ InsectoRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 4793);
/* harmony import */ var _insecto_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./insecto.component */ 6856);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4650);




const routes = [{
  path: '',
  component: _insecto_component__WEBPACK_IMPORTED_MODULE_0__.InsectoComponent
}];
let InsectoRoutingModule = /*#__PURE__*/(() => {
  class InsectoRoutingModule {}

  InsectoRoutingModule.ɵfac = function InsectoRoutingModule_Factory(t) {
    return new (t || InsectoRoutingModule)();
  };

  InsectoRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: InsectoRoutingModule
  });
  InsectoRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
  return InsectoRoutingModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](InsectoRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 4991:
/*!******************************************************************************!*\
  !*** ./src/app/Components/tipos-animales/insectos/insecto/insecto.module.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InsectoModule": () => (/* binding */ InsectoModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6895);
/* harmony import */ var _insecto_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./insecto-routing.module */ 5033);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4650);



let InsectoModule = /*#__PURE__*/(() => {
  class InsectoModule {}

  InsectoModule.ɵfac = function InsectoModule_Factory(t) {
    return new (t || InsectoModule)();
  };

  InsectoModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: InsectoModule
  });
  InsectoModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _insecto_routing_module__WEBPACK_IMPORTED_MODULE_0__.InsectoRoutingModule]
  });
  return InsectoModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](InsectoModule, {
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _insecto_routing_module__WEBPACK_IMPORTED_MODULE_0__.InsectoRoutingModule]
  });
})();

/***/ })

}]);
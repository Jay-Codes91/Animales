"use strict";
(self["webpackChunkAnimales"] = self["webpackChunkAnimales"] || []).push([[292],{

/***/ 440:
/*!************************************************************!*\
  !*** ./src/app/Components/inicio/inicio-routing.module.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InicioRoutingModule": () => (/* binding */ InicioRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 4793);
/* harmony import */ var _inicio_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inicio.component */ 1269);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4650);




const routes = [{
  path: '',
  component: _inicio_component__WEBPACK_IMPORTED_MODULE_0__.InicioComponent
}];
let InicioRoutingModule = /*#__PURE__*/(() => {
  class InicioRoutingModule {}

  InicioRoutingModule.ɵfac = function InicioRoutingModule_Factory(t) {
    return new (t || InicioRoutingModule)();
  };

  InicioRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: InicioRoutingModule
  });
  InicioRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
  return InicioRoutingModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](InicioRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 1292:
/*!****************************************************!*\
  !*** ./src/app/Components/inicio/inicio.module.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InicioModule": () => (/* binding */ InicioModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6895);
/* harmony import */ var _inicio_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inicio-routing.module */ 440);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4650);



let InicioModule = /*#__PURE__*/(() => {
  class InicioModule {}

  InicioModule.ɵfac = function InicioModule_Factory(t) {
    return new (t || InicioModule)();
  };

  InicioModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: InicioModule
  });
  InicioModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _inicio_routing_module__WEBPACK_IMPORTED_MODULE_0__.InicioRoutingModule]
  });
  return InicioModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](InicioModule, {
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _inicio_routing_module__WEBPACK_IMPORTED_MODULE_0__.InicioRoutingModule]
  });
})();

/***/ })

}]);
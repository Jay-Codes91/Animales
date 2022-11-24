"use strict";
(self["webpackChunkAnimales"] = self["webpackChunkAnimales"] || []).push([[893],{

/***/ 9074:
/*!****************************************************************************!*\
  !*** ./src/app/Components/tipos-animales/tipos-animales-routing.module.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TiposAnimalesRoutingModule": () => (/* binding */ TiposAnimalesRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 4793);
/* harmony import */ var _tipos_animales_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tipos-animales.component */ 2798);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4650);




const routes = [{
  path: '',
  component: _tipos_animales_component__WEBPACK_IMPORTED_MODULE_0__.TiposAnimalesComponent
}];
let TiposAnimalesRoutingModule = /*#__PURE__*/(() => {
  class TiposAnimalesRoutingModule {}

  TiposAnimalesRoutingModule.ɵfac = function TiposAnimalesRoutingModule_Factory(t) {
    return new (t || TiposAnimalesRoutingModule)();
  };

  TiposAnimalesRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: TiposAnimalesRoutingModule
  });
  TiposAnimalesRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
  return TiposAnimalesRoutingModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](TiposAnimalesRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 7893:
/*!********************************************************************!*\
  !*** ./src/app/Components/tipos-animales/tipos-animales.module.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TiposAnimalesModule": () => (/* binding */ TiposAnimalesModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6895);
/* harmony import */ var _tipos_animales_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tipos-animales-routing.module */ 9074);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4650);



let TiposAnimalesModule = /*#__PURE__*/(() => {
  class TiposAnimalesModule {}

  TiposAnimalesModule.ɵfac = function TiposAnimalesModule_Factory(t) {
    return new (t || TiposAnimalesModule)();
  };

  TiposAnimalesModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: TiposAnimalesModule
  });
  TiposAnimalesModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _tipos_animales_routing_module__WEBPACK_IMPORTED_MODULE_0__.TiposAnimalesRoutingModule]
  });
  return TiposAnimalesModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](TiposAnimalesModule, {
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _tipos_animales_routing_module__WEBPACK_IMPORTED_MODULE_0__.TiposAnimalesRoutingModule]
  });
})();

/***/ })

}]);
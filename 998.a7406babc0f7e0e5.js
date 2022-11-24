"use strict";
(self["webpackChunkAnimales"] = self["webpackChunkAnimales"] || []).push([[998],{

/***/ 2775:
/*!*******************************************************************************!*\
  !*** ./src/app/Components/tipos-animales/reptiles/reptiles-routing.module.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReptilesRoutingModule": () => (/* binding */ ReptilesRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 4793);
/* harmony import */ var _reptiles_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reptiles.component */ 7530);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4650);




const routes = [{
  path: '',
  component: _reptiles_component__WEBPACK_IMPORTED_MODULE_0__.ReptilesComponent
}];
let ReptilesRoutingModule = /*#__PURE__*/(() => {
  class ReptilesRoutingModule {}

  ReptilesRoutingModule.ɵfac = function ReptilesRoutingModule_Factory(t) {
    return new (t || ReptilesRoutingModule)();
  };

  ReptilesRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: ReptilesRoutingModule
  });
  ReptilesRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
  return ReptilesRoutingModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ReptilesRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 6998:
/*!***********************************************************************!*\
  !*** ./src/app/Components/tipos-animales/reptiles/reptiles.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReptilesModule": () => (/* binding */ ReptilesModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6895);
/* harmony import */ var _reptiles_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reptiles-routing.module */ 2775);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4650);



let ReptilesModule = /*#__PURE__*/(() => {
  class ReptilesModule {}

  ReptilesModule.ɵfac = function ReptilesModule_Factory(t) {
    return new (t || ReptilesModule)();
  };

  ReptilesModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: ReptilesModule
  });
  ReptilesModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _reptiles_routing_module__WEBPACK_IMPORTED_MODULE_0__.ReptilesRoutingModule]
  });
  return ReptilesModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ReptilesModule, {
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _reptiles_routing_module__WEBPACK_IMPORTED_MODULE_0__.ReptilesRoutingModule]
  });
})();

/***/ })

}]);
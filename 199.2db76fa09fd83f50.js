"use strict";
(self["webpackChunkAnimales"] = self["webpackChunkAnimales"] || []).push([[199],{

/***/ 3664:
/*!***********************************************************************!*\
  !*** ./src/app/Components/tipos-animales/aves/aves-routing.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AvesRoutingModule": () => (/* binding */ AvesRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 4793);
/* harmony import */ var _aves_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./aves.component */ 4962);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4650);




const routes = [{
  path: '',
  component: _aves_component__WEBPACK_IMPORTED_MODULE_0__.AvesComponent
}];
let AvesRoutingModule = /*#__PURE__*/(() => {
  class AvesRoutingModule {}

  AvesRoutingModule.ɵfac = function AvesRoutingModule_Factory(t) {
    return new (t || AvesRoutingModule)();
  };

  AvesRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: AvesRoutingModule
  });
  AvesRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
  return AvesRoutingModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AvesRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 5199:
/*!***************************************************************!*\
  !*** ./src/app/Components/tipos-animales/aves/aves.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AvesModule": () => (/* binding */ AvesModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6895);
/* harmony import */ var _aves_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./aves-routing.module */ 3664);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4650);



let AvesModule = /*#__PURE__*/(() => {
  class AvesModule {}

  AvesModule.ɵfac = function AvesModule_Factory(t) {
    return new (t || AvesModule)();
  };

  AvesModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: AvesModule
  });
  AvesModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _aves_routing_module__WEBPACK_IMPORTED_MODULE_0__.AvesRoutingModule]
  });
  return AvesModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AvesModule, {
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _aves_routing_module__WEBPACK_IMPORTED_MODULE_0__.AvesRoutingModule]
  });
})();

/***/ })

}]);
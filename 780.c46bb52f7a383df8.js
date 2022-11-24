"use strict";
(self["webpackChunkAnimales"] = self["webpackChunkAnimales"] || []).push([[780],{

/***/ 1208:
/*!**********************************************************************!*\
  !*** ./src/app/Components/informacion/informacion-routing.module.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InformacionRoutingModule": () => (/* binding */ InformacionRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 4793);
/* harmony import */ var _informacion_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./informacion.component */ 8204);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4650);




const routes = [{
  path: '',
  component: _informacion_component__WEBPACK_IMPORTED_MODULE_0__.InformacionComponent
}];
let InformacionRoutingModule = /*#__PURE__*/(() => {
  class InformacionRoutingModule {}

  InformacionRoutingModule.ɵfac = function InformacionRoutingModule_Factory(t) {
    return new (t || InformacionRoutingModule)();
  };

  InformacionRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: InformacionRoutingModule
  });
  InformacionRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
  return InformacionRoutingModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](InformacionRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 3780:
/*!**************************************************************!*\
  !*** ./src/app/Components/informacion/informacion.module.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InformacionModule": () => (/* binding */ InformacionModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6895);
/* harmony import */ var _informacion_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./informacion-routing.module */ 1208);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4650);



let InformacionModule = /*#__PURE__*/(() => {
  class InformacionModule {}

  InformacionModule.ɵfac = function InformacionModule_Factory(t) {
    return new (t || InformacionModule)();
  };

  InformacionModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: InformacionModule
  });
  InformacionModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _informacion_routing_module__WEBPACK_IMPORTED_MODULE_0__.InformacionRoutingModule]
  });
  return InformacionModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](InformacionModule, {
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _informacion_routing_module__WEBPACK_IMPORTED_MODULE_0__.InformacionRoutingModule]
  });
})();

/***/ })

}]);
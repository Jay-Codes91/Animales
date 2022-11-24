"use strict";
(self["webpackChunkAnimales"] = self["webpackChunkAnimales"] || []).push([[50],{

/***/ 2302:
/*!************************************************************************************!*\
  !*** ./src/app/Components/tipos-animales/reptiles/reptil/reptil-routing.module.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReptilRoutingModule": () => (/* binding */ ReptilRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 4793);
/* harmony import */ var _reptil_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reptil.component */ 9132);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4650);




const routes = [{
  path: '',
  component: _reptil_component__WEBPACK_IMPORTED_MODULE_0__.ReptilComponent
}];
let ReptilRoutingModule = /*#__PURE__*/(() => {
  class ReptilRoutingModule {}

  ReptilRoutingModule.ɵfac = function ReptilRoutingModule_Factory(t) {
    return new (t || ReptilRoutingModule)();
  };

  ReptilRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: ReptilRoutingModule
  });
  ReptilRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
  return ReptilRoutingModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ReptilRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 3050:
/*!****************************************************************************!*\
  !*** ./src/app/Components/tipos-animales/reptiles/reptil/reptil.module.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReptilModule": () => (/* binding */ ReptilModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6895);
/* harmony import */ var _reptil_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reptil-routing.module */ 2302);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4650);



let ReptilModule = /*#__PURE__*/(() => {
  class ReptilModule {}

  ReptilModule.ɵfac = function ReptilModule_Factory(t) {
    return new (t || ReptilModule)();
  };

  ReptilModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: ReptilModule
  });
  ReptilModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _reptil_routing_module__WEBPACK_IMPORTED_MODULE_0__.ReptilRoutingModule]
  });
  return ReptilModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ReptilModule, {
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _reptil_routing_module__WEBPACK_IMPORTED_MODULE_0__.ReptilRoutingModule]
  });
})();

/***/ })

}]);
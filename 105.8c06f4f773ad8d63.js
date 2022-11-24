"use strict";
(self["webpackChunkAnimales"] = self["webpackChunkAnimales"] || []).push([[105],{

/***/ 6021:
/*!**************************************************************************************!*\
  !*** ./src/app/Components/tipos-animales/anfibios/anfibio/anfibio-routing.module.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnfibioRoutingModule": () => (/* binding */ AnfibioRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 4793);
/* harmony import */ var _anfibio_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./anfibio.component */ 4277);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4650);




const routes = [{
  path: '',
  component: _anfibio_component__WEBPACK_IMPORTED_MODULE_0__.AnfibioComponent
}];
let AnfibioRoutingModule = /*#__PURE__*/(() => {
  class AnfibioRoutingModule {}

  AnfibioRoutingModule.ɵfac = function AnfibioRoutingModule_Factory(t) {
    return new (t || AnfibioRoutingModule)();
  };

  AnfibioRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: AnfibioRoutingModule
  });
  AnfibioRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
  return AnfibioRoutingModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AnfibioRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 6105:
/*!******************************************************************************!*\
  !*** ./src/app/Components/tipos-animales/anfibios/anfibio/anfibio.module.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnfibioModule": () => (/* binding */ AnfibioModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6895);
/* harmony import */ var _anfibio_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./anfibio-routing.module */ 6021);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4650);



let AnfibioModule = /*#__PURE__*/(() => {
  class AnfibioModule {}

  AnfibioModule.ɵfac = function AnfibioModule_Factory(t) {
    return new (t || AnfibioModule)();
  };

  AnfibioModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: AnfibioModule
  });
  AnfibioModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _anfibio_routing_module__WEBPACK_IMPORTED_MODULE_0__.AnfibioRoutingModule]
  });
  return AnfibioModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AnfibioModule, {
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _anfibio_routing_module__WEBPACK_IMPORTED_MODULE_0__.AnfibioRoutingModule]
  });
})();

/***/ })

}]);
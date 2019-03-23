webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/graphs/Distance.js":
/*!***************************************!*\
  !*** ./components/graphs/Distance.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nivo_stream__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nivo/stream */ "./node_modules/@nivo/stream/dist/nivo-stream.esm.js");
var _this = undefined,
    _jsxFileName = "/Users/ericcrowder/Documents/repos/stravaR/components/graphs/Distance.js";




var Distance = function Distance(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_nivo_stream__WEBPACK_IMPORTED_MODULE_1__["ResponsiveStream"], {
    data: _this.props.data,
    keys: ['distance'],
    colors: "category10",
    curve: "linear",
    margin: {
      top: 50,
      right: 110,
      bottom: 50,
      left: 60
    },
    axisBottom: {
      orient: 'bottom',
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: 'Days',
      legendOffset: 36
    },
    axisLeft: {
      orient: 'left',
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: 'Distance',
      legendOffset: -40
    },
    offsetType: "none",
    fillOpacity: 0.85,
    borderColor: "#000",
    animate: true,
    motionStiffness: 90,
    motionDamping: 15,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Distance);

/***/ })

})
//# sourceMappingURL=index.js.97aaf5f9d25c30755acc.hot-update.js.map
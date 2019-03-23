webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/graphs/ElevationGain.js":
/*!********************************************!*\
  !*** ./components/graphs/ElevationGain.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nivo_stream__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nivo/stream */ "./node_modules/@nivo/stream/dist/nivo-stream.esm.js");
var _jsxFileName = "/Users/ericcrowder/Documents/repos/stravaR/components/graphs/ElevationGain.js";



var ElevationGain = function ElevationGain(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_nivo_stream__WEBPACK_IMPORTED_MODULE_1__["ResponsiveStream"], {
    data: props.data,
    keys: ['elevationGain'],
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

/* harmony default export */ __webpack_exports__["default"] = (ElevationGain);

/***/ })

})
//# sourceMappingURL=index.js.5fbdc8dcc53dc9b207f2.hot-update.js.map
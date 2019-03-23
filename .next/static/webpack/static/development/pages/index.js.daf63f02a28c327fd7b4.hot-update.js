webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Graph.js":
/*!*****************************!*\
  !*** ./components/Graph.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_server_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-server/config */ "./node_modules/next-server/config.js");
/* harmony import */ var next_server_config__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_server_config__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _graphs_Distance__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./graphs/Distance */ "./components/graphs/Distance.js");
/* harmony import */ var _graphs_ElevationGain__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./graphs/ElevationGain */ "./components/graphs/ElevationGain.js");



var _jsxFileName = "/Users/ericcrowder/Documents/repos/stravaR/components/Graph.js";





var _getConfig = next_server_config__WEBPACK_IMPORTED_MODULE_4___default()(),
    publicRuntimeConfig = _getConfig.publicRuntimeConfig;

var STRAVA_TOKEN = publicRuntimeConfig.STRAVA_TOKEN;

var Graph = function Graph() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState, 2),
      distanceData = _useState2[0],
      setDistanceData = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      _useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState3, 2),
      elevationGainData = _useState4[0],
      setElevationGainData = _useState4[1];

  var fetchStravaData =
  /*#__PURE__*/
  function () {
    var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var res, json, distanceData, elevationGainData;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return fetch('https://www.strava.com/api/v3/athlete/activities', {
                method: 'GET',
                headers: {
                  Authorization: "Bearer ".concat(STRAVA_TOKEN)
                }
              });

            case 2:
              res = _context.sent;
              _context.next = 5;
              return res.json();

            case 5:
              json = _context.sent;
              distanceData = json.map(function (activity) {
                if (activity.type === 'Run') {
                  return {
                    type: 'Run',
                    distance: Math.round(activity.distance * 0.000621371)
                  };
                } else {
                  return {
                    type: 'Ride',
                    distance: Math.round(activity.distance * 0.000621371)
                  };
                }
              });
              setDistanceData(distanceData);
              elevationGainData = json.map(function (activity) {
                if (activity.type === 'Run') {
                  return {
                    type: 'Run',
                    elevationGain: activity.total_elevation_gain
                  };
                } else {
                  return {
                    type: 'Ride',
                    elevationGain: activity.total_elevation_gain
                  };
                }
              });
              setElevationGainData(elevationGainData);

            case 10:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function fetchStravaData() {
      return _ref.apply(this, arguments);
    };
  }();

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    style: {
      height: 500,
      width: 1000,
      boxShadow: '10px 10px 8px 10px #BDBDBD'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_graphs_Distance__WEBPACK_IMPORTED_MODULE_5__["default"], {
    data: distanceData,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_graphs_ElevationGain__WEBPACK_IMPORTED_MODULE_6__["default"], {
    data: elevationGainData,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Graph);

/***/ })

})
//# sourceMappingURL=index.js.daf63f02a28c327fd7b4.hot-update.js.map
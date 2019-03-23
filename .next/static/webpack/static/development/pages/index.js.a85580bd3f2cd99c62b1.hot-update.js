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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _nivo_stream__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nivo/stream */ "./node_modules/@nivo/stream/dist/nivo-stream.esm.js");
/* harmony import */ var next_server_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next-server/config */ "./node_modules/next-server/config.js");
/* harmony import */ var next_server_config__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_server_config__WEBPACK_IMPORTED_MODULE_6__);




var _jsxFileName = "/Users/ericcrowder/Documents/repos/stravaR/components/Graph.js";




var _getConfig = next_server_config__WEBPACK_IMPORTED_MODULE_6___default()(),
    publicRuntimeConfig = _getConfig.publicRuntimeConfig;

var STRAVA_TOKEN = publicRuntimeConfig.STRAVA_TOKEN;

var Graph = function Graph() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])([]),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_useState, 2),
      data = _useState2[0],
      setData = _useState2[1];

  var fetchStravaData =
  /*#__PURE__*/
  function () {
    var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var res, json, formattedStravaData;
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
              formattedStravaData = json.map(function (activity) {
                var _ref2;

                if (activity.type === '') return _ref2 = {
                  name: activity.name,
                  elevationGain: activity.total_elevation_gain,
                  type: activity.type
                }, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref2, "name", activity.name), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref2, "startDate", activity.start_date_local), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref2, "distance", activity.distance), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref2, "elapsedTime", activity.elapsed_time), _ref2;
              });
              setData(formattedStravaData);

            case 8:
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

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    fetchStravaData();
  }, []);
  console.log(data);
  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_nivo_stream__WEBPACK_IMPORTED_MODULE_5__["ResponsiveStream"], {
    data: data,
    keys: ['Run', 'Ride'],
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
      legend: '',
      legendOffset: 36
    },
    axisLeft: {
      orient: 'left',
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: '',
      legendOffset: -40
    },
    offsetType: "none",
    fillOpacity: 0.85,
    borderColor: "#000",
    defs: [{
      id: 'dots',
      type: 'patternDots',
      background: 'inherit',
      color: '#2c998f',
      size: 4,
      padding: 2,
      stagger: true
    }, {
      id: 'squares',
      type: 'patternSquares',
      background: 'inherit',
      color: '#e4c912',
      size: 6,
      padding: 2,
      stagger: true
    }],
    fill: [{
      match: {
        id: 'Run'
      },
      id: 'dots'
    }, {
      match: {
        id: 'Ride'
      },
      id: 'squares'
    }],
    dotSize: 8,
    dotBorderWidth: 2,
    dotBorderColor: "inherit:brighter(0.7)",
    animate: true,
    motionStiffness: 90,
    motionDamping: 15,
    legends: [{
      anchor: 'bottom-right',
      direction: 'column',
      translateX: 100,
      itemWidth: 80,
      itemHeight: 20,
      itemTextColor: '#999',
      symbolSize: 12,
      symbolShape: 'circle',
      effects: [{
        on: 'hover',
        style: {
          itemTextColor: '#000'
        }
      }]
    }],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Graph);

/***/ })

})
//# sourceMappingURL=index.js.a85580bd3f2cd99c62b1.hot-update.js.map
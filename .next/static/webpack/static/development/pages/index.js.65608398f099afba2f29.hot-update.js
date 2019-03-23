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



var _jsxFileName = "/Users/ericcrowder/Documents/repos/stravaR/components/Graph.js";



var _getConfig = next_server_config__WEBPACK_IMPORTED_MODULE_4___default()(),
    publicRuntimeConfig = _getConfig.publicRuntimeConfig;

var STRAVA_TOKEN = publicRuntimeConfig.STRAVA_TOKEN;

var Graph = function Graph() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState, 2),
      data = _useState2[0],
      setData = _useState2[1];

  var fetchStravaData =
  /*#__PURE__*/
  function () {
    var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
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

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    fetchStravaData();
  }, []);
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    style: {
      height: 500,
      width: 1000,
      boxShadow: '10px 10px 8px 10px #BDBDBD'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(ResponsiveStream, {
    data: data,
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
      lineNumber: 52
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Graph);

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/extends.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/inheritsLoose.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
false,

/***/ "./node_modules/@nivo/core/dist/nivo-core.esm.js":
false,

/***/ "./node_modules/@nivo/legends/dist/nivo-legends.esm.js":
false,

/***/ "./node_modules/@nivo/stream/dist/nivo-stream.esm.js":
false,

/***/ "./node_modules/d3-array/src/array.js":
false,

/***/ "./node_modules/d3-array/src/ascending.js":
false,

/***/ "./node_modules/d3-array/src/bisect.js":
false,

/***/ "./node_modules/d3-array/src/bisector.js":
false,

/***/ "./node_modules/d3-array/src/constant.js":
false,

/***/ "./node_modules/d3-array/src/cross.js":
false,

/***/ "./node_modules/d3-array/src/descending.js":
false,

/***/ "./node_modules/d3-array/src/deviation.js":
false,

/***/ "./node_modules/d3-array/src/extent.js":
false,

/***/ "./node_modules/d3-array/src/histogram.js":
false,

/***/ "./node_modules/d3-array/src/identity.js":
false,

/***/ "./node_modules/d3-array/src/index.js":
false,

/***/ "./node_modules/d3-array/src/max.js":
false,

/***/ "./node_modules/d3-array/src/mean.js":
false,

/***/ "./node_modules/d3-array/src/median.js":
false,

/***/ "./node_modules/d3-array/src/merge.js":
false,

/***/ "./node_modules/d3-array/src/min.js":
false,

/***/ "./node_modules/d3-array/src/number.js":
false,

/***/ "./node_modules/d3-array/src/pairs.js":
false,

/***/ "./node_modules/d3-array/src/permute.js":
false,

/***/ "./node_modules/d3-array/src/quantile.js":
false,

/***/ "./node_modules/d3-array/src/range.js":
false,

/***/ "./node_modules/d3-array/src/scan.js":
false,

/***/ "./node_modules/d3-array/src/shuffle.js":
false,

/***/ "./node_modules/d3-array/src/sum.js":
false,

/***/ "./node_modules/d3-array/src/threshold/freedmanDiaconis.js":
false,

/***/ "./node_modules/d3-array/src/threshold/scott.js":
false,

/***/ "./node_modules/d3-array/src/threshold/sturges.js":
false,

/***/ "./node_modules/d3-array/src/ticks.js":
false,

/***/ "./node_modules/d3-array/src/transpose.js":
false,

/***/ "./node_modules/d3-array/src/variance.js":
false,

/***/ "./node_modules/d3-array/src/zip.js":
false,

/***/ "./node_modules/d3-collection/src/entries.js":
false,

/***/ "./node_modules/d3-collection/src/index.js":
false,

/***/ "./node_modules/d3-collection/src/keys.js":
false,

/***/ "./node_modules/d3-collection/src/map.js":
false,

/***/ "./node_modules/d3-collection/src/nest.js":
false,

/***/ "./node_modules/d3-collection/src/set.js":
false,

/***/ "./node_modules/d3-collection/src/values.js":
false,

/***/ "./node_modules/d3-color/src/color.js":
false,

/***/ "./node_modules/d3-color/src/cubehelix.js":
false,

/***/ "./node_modules/d3-color/src/define.js":
false,

/***/ "./node_modules/d3-color/src/index.js":
false,

/***/ "./node_modules/d3-color/src/lab.js":
false,

/***/ "./node_modules/d3-color/src/math.js":
false,

/***/ "./node_modules/d3-format/src/defaultLocale.js":
false,

/***/ "./node_modules/d3-format/src/exponent.js":
false,

/***/ "./node_modules/d3-format/src/formatDecimal.js":
false,

/***/ "./node_modules/d3-format/src/formatGroup.js":
false,

/***/ "./node_modules/d3-format/src/formatNumerals.js":
false,

/***/ "./node_modules/d3-format/src/formatPrefixAuto.js":
false,

/***/ "./node_modules/d3-format/src/formatRounded.js":
false,

/***/ "./node_modules/d3-format/src/formatSpecifier.js":
false,

/***/ "./node_modules/d3-format/src/formatTrim.js":
false,

/***/ "./node_modules/d3-format/src/formatTypes.js":
false,

/***/ "./node_modules/d3-format/src/identity.js":
false,

/***/ "./node_modules/d3-format/src/index.js":
false,

/***/ "./node_modules/d3-format/src/locale.js":
false,

/***/ "./node_modules/d3-format/src/precisionFixed.js":
false,

/***/ "./node_modules/d3-format/src/precisionPrefix.js":
false,

/***/ "./node_modules/d3-format/src/precisionRound.js":
false,

/***/ "./node_modules/d3-hierarchy/src/accessors.js":
false,

/***/ "./node_modules/d3-hierarchy/src/array.js":
false,

/***/ "./node_modules/d3-hierarchy/src/cluster.js":
false,

/***/ "./node_modules/d3-hierarchy/src/constant.js":
false,

/***/ "./node_modules/d3-hierarchy/src/hierarchy/ancestors.js":
false,

/***/ "./node_modules/d3-hierarchy/src/hierarchy/count.js":
false,

/***/ "./node_modules/d3-hierarchy/src/hierarchy/descendants.js":
false,

/***/ "./node_modules/d3-hierarchy/src/hierarchy/each.js":
false,

/***/ "./node_modules/d3-hierarchy/src/hierarchy/eachAfter.js":
false,

/***/ "./node_modules/d3-hierarchy/src/hierarchy/eachBefore.js":
false,

/***/ "./node_modules/d3-hierarchy/src/hierarchy/index.js":
false,

/***/ "./node_modules/d3-hierarchy/src/hierarchy/leaves.js":
false,

/***/ "./node_modules/d3-hierarchy/src/hierarchy/links.js":
false,

/***/ "./node_modules/d3-hierarchy/src/hierarchy/path.js":
false,

/***/ "./node_modules/d3-hierarchy/src/hierarchy/sort.js":
false,

/***/ "./node_modules/d3-hierarchy/src/hierarchy/sum.js":
false,

/***/ "./node_modules/d3-hierarchy/src/index.js":
false,

/***/ "./node_modules/d3-hierarchy/src/pack/enclose.js":
false,

/***/ "./node_modules/d3-hierarchy/src/pack/index.js":
false,

/***/ "./node_modules/d3-hierarchy/src/pack/siblings.js":
false,

/***/ "./node_modules/d3-hierarchy/src/partition.js":
false,

/***/ "./node_modules/d3-hierarchy/src/stratify.js":
false,

/***/ "./node_modules/d3-hierarchy/src/tree.js":
false,

/***/ "./node_modules/d3-hierarchy/src/treemap/binary.js":
false,

/***/ "./node_modules/d3-hierarchy/src/treemap/dice.js":
false,

/***/ "./node_modules/d3-hierarchy/src/treemap/index.js":
false,

/***/ "./node_modules/d3-hierarchy/src/treemap/resquarify.js":
false,

/***/ "./node_modules/d3-hierarchy/src/treemap/round.js":
false,

/***/ "./node_modules/d3-hierarchy/src/treemap/slice.js":
false,

/***/ "./node_modules/d3-hierarchy/src/treemap/sliceDice.js":
false,

/***/ "./node_modules/d3-hierarchy/src/treemap/squarify.js":
false,

/***/ "./node_modules/d3-interpolate/src/array.js":
false,

/***/ "./node_modules/d3-interpolate/src/basis.js":
false,

/***/ "./node_modules/d3-interpolate/src/basisClosed.js":
false,

/***/ "./node_modules/d3-interpolate/src/color.js":
false,

/***/ "./node_modules/d3-interpolate/src/constant.js":
false,

/***/ "./node_modules/d3-interpolate/src/cubehelix.js":
false,

/***/ "./node_modules/d3-interpolate/src/date.js":
false,

/***/ "./node_modules/d3-interpolate/src/discrete.js":
false,

/***/ "./node_modules/d3-interpolate/src/hcl.js":
false,

/***/ "./node_modules/d3-interpolate/src/hsl.js":
false,

/***/ "./node_modules/d3-interpolate/src/hue.js":
false,

/***/ "./node_modules/d3-interpolate/src/index.js":
false,

/***/ "./node_modules/d3-interpolate/src/lab.js":
false,

/***/ "./node_modules/d3-interpolate/src/number.js":
false,

/***/ "./node_modules/d3-interpolate/src/object.js":
false,

/***/ "./node_modules/d3-interpolate/src/piecewise.js":
false,

/***/ "./node_modules/d3-interpolate/src/quantize.js":
false,

/***/ "./node_modules/d3-interpolate/src/rgb.js":
false,

/***/ "./node_modules/d3-interpolate/src/round.js":
false,

/***/ "./node_modules/d3-interpolate/src/string.js":
false,

/***/ "./node_modules/d3-interpolate/src/transform/decompose.js":
false,

/***/ "./node_modules/d3-interpolate/src/transform/index.js":
false,

/***/ "./node_modules/d3-interpolate/src/transform/parse.js":
false,

/***/ "./node_modules/d3-interpolate/src/value.js":
false,

/***/ "./node_modules/d3-interpolate/src/zoom.js":
false,

/***/ "./node_modules/d3-path/src/index.js":
false,

/***/ "./node_modules/d3-path/src/path.js":
false,

/***/ "./node_modules/d3-scale-chromatic/src/categorical/Accent.js":
false,

/***/ "./node_modules/d3-scale-chromatic/src/categorical/Dark2.js":
false,

/***/ "./node_modules/d3-scale-chromatic/src/categorical/Paired.js":
false,

/***/ "./node_modules/d3-scale-chromatic/src/categorical/Pastel1.js":
false,

/***/ "./node_modules/d3-scale-chromatic/src/categorical/Pastel2.js":
false,

/***/ "./node_modules/d3-scale-chromatic/src/categorical/Set1.js":
false,

/***/ "./node_modules/d3-scale-chromatic/src/categorical/Set2.js":
false,

/***/ "./node_modules/d3-scale-chromatic/src/categorical/Set3.js":
false,

/***/ "./node_modules/d3-scale-chromatic/src/categorical/category10.js":
false,

/***/ "./node_modules/d3-scale-chromatic/src/colors.js":
false,

/***/ "./node_modules/d3-scale-chromatic/src/diverging/BrBG.js":
false,

/***/ "./node_modules/d3-scale-chromatic/src/diverging/PRGn.js":
false,

/***/ "./node_modules/d3-scale-chromatic/src/diverging/PiYG.js":
false,

/***/ "./node_modules/d3-scale-chromatic/src/diverging/PuOr.js":
false,

/***/ "./node_modules/d3-scale-chromatic/src/diverging/RdBu.js":
false,

/***/ "./node_modules/d3-scale-chromatic/src/diverging/RdGy.js":
false,

/***/ "./node_modules/d3-scale-chromatic/src/diverging/RdYlBu.js":
false,

/***/ "./node_modules/d3-scale-chromatic/src/diverging/RdYlGn.js":
false,

/***/ "./node_modules/d3-scale-chromatic/src/diverging/Spectral.js":
false,

/***/ "./node_modules/d3-scale-chromatic/src/index.js":
false,

/***/ "./node_modules/d3-scale-chromatic/src/ramp.js":
false,

/***/ "./node_modules/d3-scale-chromatic/src/sequential-multi/BuGn.js":
false,

/***/ "./node_modules/d3-scale-chromatic/src/sequential-multi/BuPu.js":
false,

/***/ "./node_modules/d3-scale-chromatic/src/sequential-multi/GnBu.js":
false,

/***/ "./node_modules/d3-scale-chromatic/src/sequential-multi/OrRd.js":
false,

/***/ "./node_modules/d3-scale-chromatic/src/sequential-multi/PuBu.js":
false,

/***/ "./node_modules/d3-scale-chromatic/src/sequential-multi/PuBuGn.js":
false,

/***/ "./node_modules/d3-scale-chromatic/src/sequential-multi/PuRd.js":
false,

/***/ "./node_modules/d3-scale-chromatic/src/sequential-multi/RdPu.js":
false,

/***/ "./node_modules/d3-scale-chromatic/src/sequential-multi/YlGn.js":
false,

/***/ "./node_modules/d3-scale-chromatic/src/sequential-multi/YlGnBu.js":
false,

/***/ "./node_modules/d3-scale-chromatic/src/sequential-multi/YlOrBr.js":
false,

/***/ "./node_modules/d3-scale-chromatic/src/sequential-multi/YlOrRd.js":
false,

/***/ "./node_modules/d3-scale-chromatic/src/sequential-multi/cubehelix.js":
false,

/***/ "./node_modules/d3-scale-chromatic/src/sequential-multi/rainbow.js":
false,

/***/ "./node_modules/d3-scale-chromatic/src/sequential-multi/sinebow.js":
false,

/***/ "./node_modules/d3-scale-chromatic/src/sequential-multi/viridis.js":
false,

/***/ "./node_modules/d3-scale-chromatic/src/sequential-single/Blues.js":
false,

/***/ "./node_modules/d3-scale-chromatic/src/sequential-single/Greens.js":
false,

/***/ "./node_modules/d3-scale-chromatic/src/sequential-single/Greys.js":
false,

/***/ "./node_modules/d3-scale-chromatic/src/sequential-single/Oranges.js":
false,

/***/ "./node_modules/d3-scale-chromatic/src/sequential-single/Purples.js":
false,

/***/ "./node_modules/d3-scale-chromatic/src/sequential-single/Reds.js":
false,

/***/ "./node_modules/d3-scale/src/array.js":
false,

/***/ "./node_modules/d3-scale/src/band.js":
false,

/***/ "./node_modules/d3-scale/src/constant.js":
false,

/***/ "./node_modules/d3-scale/src/continuous.js":
false,

/***/ "./node_modules/d3-scale/src/diverging.js":
false,

/***/ "./node_modules/d3-scale/src/identity.js":
false,

/***/ "./node_modules/d3-scale/src/index.js":
false,

/***/ "./node_modules/d3-scale/src/init.js":
false,

/***/ "./node_modules/d3-scale/src/linear.js":
false,

/***/ "./node_modules/d3-scale/src/log.js":
false,

/***/ "./node_modules/d3-scale/src/nice.js":
false,

/***/ "./node_modules/d3-scale/src/number.js":
false,

/***/ "./node_modules/d3-scale/src/ordinal.js":
false,

/***/ "./node_modules/d3-scale/src/pow.js":
false,

/***/ "./node_modules/d3-scale/src/quantile.js":
false,

/***/ "./node_modules/d3-scale/src/quantize.js":
false,

/***/ "./node_modules/d3-scale/src/sequential.js":
false,

/***/ "./node_modules/d3-scale/src/sequentialQuantile.js":
false,

/***/ "./node_modules/d3-scale/src/symlog.js":
false,

/***/ "./node_modules/d3-scale/src/threshold.js":
false,

/***/ "./node_modules/d3-scale/src/tickFormat.js":
false,

/***/ "./node_modules/d3-scale/src/time.js":
false,

/***/ "./node_modules/d3-scale/src/utcTime.js":
false,

/***/ "./node_modules/d3-shape/src/arc.js":
false,

/***/ "./node_modules/d3-shape/src/area.js":
false,

/***/ "./node_modules/d3-shape/src/areaRadial.js":
false,

/***/ "./node_modules/d3-shape/src/array.js":
false,

/***/ "./node_modules/d3-shape/src/constant.js":
false,

/***/ "./node_modules/d3-shape/src/curve/basis.js":
false,

/***/ "./node_modules/d3-shape/src/curve/basisClosed.js":
false,

/***/ "./node_modules/d3-shape/src/curve/basisOpen.js":
false,

/***/ "./node_modules/d3-shape/src/curve/bundle.js":
false,

/***/ "./node_modules/d3-shape/src/curve/cardinal.js":
false,

/***/ "./node_modules/d3-shape/src/curve/cardinalClosed.js":
false,

/***/ "./node_modules/d3-shape/src/curve/cardinalOpen.js":
false,

/***/ "./node_modules/d3-shape/src/curve/catmullRom.js":
false,

/***/ "./node_modules/d3-shape/src/curve/catmullRomClosed.js":
false,

/***/ "./node_modules/d3-shape/src/curve/catmullRomOpen.js":
false,

/***/ "./node_modules/d3-shape/src/curve/linear.js":
false,

/***/ "./node_modules/d3-shape/src/curve/linearClosed.js":
false,

/***/ "./node_modules/d3-shape/src/curve/monotone.js":
false,

/***/ "./node_modules/d3-shape/src/curve/natural.js":
false,

/***/ "./node_modules/d3-shape/src/curve/radial.js":
false,

/***/ "./node_modules/d3-shape/src/curve/step.js":
false,

/***/ "./node_modules/d3-shape/src/descending.js":
false,

/***/ "./node_modules/d3-shape/src/identity.js":
false,

/***/ "./node_modules/d3-shape/src/index.js":
false,

/***/ "./node_modules/d3-shape/src/line.js":
false,

/***/ "./node_modules/d3-shape/src/lineRadial.js":
false,

/***/ "./node_modules/d3-shape/src/link/index.js":
false,

/***/ "./node_modules/d3-shape/src/math.js":
false,

/***/ "./node_modules/d3-shape/src/noop.js":
false,

/***/ "./node_modules/d3-shape/src/offset/diverging.js":
false,

/***/ "./node_modules/d3-shape/src/offset/expand.js":
false,

/***/ "./node_modules/d3-shape/src/offset/none.js":
false,

/***/ "./node_modules/d3-shape/src/offset/silhouette.js":
false,

/***/ "./node_modules/d3-shape/src/offset/wiggle.js":
false,

/***/ "./node_modules/d3-shape/src/order/appearance.js":
false,

/***/ "./node_modules/d3-shape/src/order/ascending.js":
false,

/***/ "./node_modules/d3-shape/src/order/descending.js":
false,

/***/ "./node_modules/d3-shape/src/order/insideOut.js":
false,

/***/ "./node_modules/d3-shape/src/order/none.js":
false,

/***/ "./node_modules/d3-shape/src/order/reverse.js":
false,

/***/ "./node_modules/d3-shape/src/pie.js":
false,

/***/ "./node_modules/d3-shape/src/point.js":
false,

/***/ "./node_modules/d3-shape/src/pointRadial.js":
false,

/***/ "./node_modules/d3-shape/src/stack.js":
false,

/***/ "./node_modules/d3-shape/src/symbol.js":
false,

/***/ "./node_modules/d3-shape/src/symbol/circle.js":
false,

/***/ "./node_modules/d3-shape/src/symbol/cross.js":
false,

/***/ "./node_modules/d3-shape/src/symbol/diamond.js":
false,

/***/ "./node_modules/d3-shape/src/symbol/square.js":
false,

/***/ "./node_modules/d3-shape/src/symbol/star.js":
false,

/***/ "./node_modules/d3-shape/src/symbol/triangle.js":
false,

/***/ "./node_modules/d3-shape/src/symbol/wye.js":
false,

/***/ "./node_modules/d3-time-format/src/defaultLocale.js":
false,

/***/ "./node_modules/d3-time-format/src/index.js":
false,

/***/ "./node_modules/d3-time-format/src/isoFormat.js":
false,

/***/ "./node_modules/d3-time-format/src/isoParse.js":
false,

/***/ "./node_modules/d3-time-format/src/locale.js":
false,

/***/ "./node_modules/d3-time/src/day.js":
false,

/***/ "./node_modules/d3-time/src/duration.js":
false,

/***/ "./node_modules/d3-time/src/hour.js":
false,

/***/ "./node_modules/d3-time/src/index.js":
false,

/***/ "./node_modules/d3-time/src/interval.js":
false,

/***/ "./node_modules/d3-time/src/millisecond.js":
false,

/***/ "./node_modules/d3-time/src/minute.js":
false,

/***/ "./node_modules/d3-time/src/month.js":
false,

/***/ "./node_modules/d3-time/src/second.js":
false,

/***/ "./node_modules/d3-time/src/utcDay.js":
false,

/***/ "./node_modules/d3-time/src/utcHour.js":
false,

/***/ "./node_modules/d3-time/src/utcMinute.js":
false,

/***/ "./node_modules/d3-time/src/utcMonth.js":
false,

/***/ "./node_modules/d3-time/src/utcWeek.js":
false,

/***/ "./node_modules/d3-time/src/utcYear.js":
false,

/***/ "./node_modules/d3-time/src/week.js":
false,

/***/ "./node_modules/d3-time/src/year.js":
false,

/***/ "./node_modules/fbjs/lib/shallowEqual.js":
false,

/***/ "./node_modules/lodash/_DataView.js":
false,

/***/ "./node_modules/lodash/_Hash.js":
false,

/***/ "./node_modules/lodash/_LazyWrapper.js":
false,

/***/ "./node_modules/lodash/_ListCache.js":
false,

/***/ "./node_modules/lodash/_LodashWrapper.js":
false,

/***/ "./node_modules/lodash/_Map.js":
false,

/***/ "./node_modules/lodash/_MapCache.js":
false,

/***/ "./node_modules/lodash/_Promise.js":
false,

/***/ "./node_modules/lodash/_Set.js":
false,

/***/ "./node_modules/lodash/_SetCache.js":
false,

/***/ "./node_modules/lodash/_Stack.js":
false,

/***/ "./node_modules/lodash/_Symbol.js":
false,

/***/ "./node_modules/lodash/_Uint8Array.js":
false,

/***/ "./node_modules/lodash/_WeakMap.js":
false,

/***/ "./node_modules/lodash/_apply.js":
false,

/***/ "./node_modules/lodash/_arrayEach.js":
false,

/***/ "./node_modules/lodash/_arrayFilter.js":
false,

/***/ "./node_modules/lodash/_arrayIncludes.js":
false,

/***/ "./node_modules/lodash/_arrayIncludesWith.js":
false,

/***/ "./node_modules/lodash/_arrayLikeKeys.js":
false,

/***/ "./node_modules/lodash/_arrayMap.js":
false,

/***/ "./node_modules/lodash/_arrayPush.js":
false,

/***/ "./node_modules/lodash/_arraySome.js":
false,

/***/ "./node_modules/lodash/_assignMergeValue.js":
false,

/***/ "./node_modules/lodash/_assignValue.js":
false,

/***/ "./node_modules/lodash/_assocIndexOf.js":
false,

/***/ "./node_modules/lodash/_baseAssignValue.js":
false,

/***/ "./node_modules/lodash/_baseCreate.js":
false,

/***/ "./node_modules/lodash/_baseDifference.js":
false,

/***/ "./node_modules/lodash/_baseEach.js":
false,

/***/ "./node_modules/lodash/_baseFindIndex.js":
false,

/***/ "./node_modules/lodash/_baseFlatten.js":
false,

/***/ "./node_modules/lodash/_baseFor.js":
false,

/***/ "./node_modules/lodash/_baseForOwn.js":
false,

/***/ "./node_modules/lodash/_baseGet.js":
false,

/***/ "./node_modules/lodash/_baseGetAllKeys.js":
false,

/***/ "./node_modules/lodash/_baseGetTag.js":
false,

/***/ "./node_modules/lodash/_baseHasIn.js":
false,

/***/ "./node_modules/lodash/_baseIndexOf.js":
false,

/***/ "./node_modules/lodash/_baseIsArguments.js":
false,

/***/ "./node_modules/lodash/_baseIsEqual.js":
false,

/***/ "./node_modules/lodash/_baseIsEqualDeep.js":
false,

/***/ "./node_modules/lodash/_baseIsMatch.js":
false,

/***/ "./node_modules/lodash/_baseIsNaN.js":
false,

/***/ "./node_modules/lodash/_baseIsNative.js":
false,

/***/ "./node_modules/lodash/_baseIsTypedArray.js":
false,

/***/ "./node_modules/lodash/_baseIteratee.js":
false,

/***/ "./node_modules/lodash/_baseKeys.js":
false,

/***/ "./node_modules/lodash/_baseKeysIn.js":
false,

/***/ "./node_modules/lodash/_baseLodash.js":
false,

/***/ "./node_modules/lodash/_baseMap.js":
false,

/***/ "./node_modules/lodash/_baseMatches.js":
false,

/***/ "./node_modules/lodash/_baseMatchesProperty.js":
false,

/***/ "./node_modules/lodash/_baseMerge.js":
false,

/***/ "./node_modules/lodash/_baseMergeDeep.js":
false,

/***/ "./node_modules/lodash/_baseOrderBy.js":
false,

/***/ "./node_modules/lodash/_basePick.js":
false,

/***/ "./node_modules/lodash/_basePickBy.js":
false,

/***/ "./node_modules/lodash/_baseProperty.js":
false,

/***/ "./node_modules/lodash/_basePropertyDeep.js":
false,

/***/ "./node_modules/lodash/_baseRange.js":
false,

/***/ "./node_modules/lodash/_baseRest.js":
false,

/***/ "./node_modules/lodash/_baseSet.js":
false,

/***/ "./node_modules/lodash/_baseSetData.js":
false,

/***/ "./node_modules/lodash/_baseSetToString.js":
false,

/***/ "./node_modules/lodash/_baseSortBy.js":
false,

/***/ "./node_modules/lodash/_baseTimes.js":
false,

/***/ "./node_modules/lodash/_baseToString.js":
false,

/***/ "./node_modules/lodash/_baseUnary.js":
false,

/***/ "./node_modules/lodash/_cacheHas.js":
false,

/***/ "./node_modules/lodash/_castPath.js":
false,

/***/ "./node_modules/lodash/_cloneArrayBuffer.js":
false,

/***/ "./node_modules/lodash/_cloneBuffer.js":
false,

/***/ "./node_modules/lodash/_cloneTypedArray.js":
false,

/***/ "./node_modules/lodash/_compareAscending.js":
false,

/***/ "./node_modules/lodash/_compareMultiple.js":
false,

/***/ "./node_modules/lodash/_composeArgs.js":
false,

/***/ "./node_modules/lodash/_composeArgsRight.js":
false,

/***/ "./node_modules/lodash/_copyArray.js":
false,

/***/ "./node_modules/lodash/_copyObject.js":
false,

/***/ "./node_modules/lodash/_coreJsData.js":
false,

/***/ "./node_modules/lodash/_countHolders.js":
false,

/***/ "./node_modules/lodash/_createAssigner.js":
false,

/***/ "./node_modules/lodash/_createBaseEach.js":
false,

/***/ "./node_modules/lodash/_createBaseFor.js":
false,

/***/ "./node_modules/lodash/_createBind.js":
false,

/***/ "./node_modules/lodash/_createCtor.js":
false,

/***/ "./node_modules/lodash/_createCurry.js":
false,

/***/ "./node_modules/lodash/_createHybrid.js":
false,

/***/ "./node_modules/lodash/_createPartial.js":
false,

/***/ "./node_modules/lodash/_createRange.js":
false,

/***/ "./node_modules/lodash/_createRecurry.js":
false,

/***/ "./node_modules/lodash/_createWrap.js":
false,

/***/ "./node_modules/lodash/_defineProperty.js":
false,

/***/ "./node_modules/lodash/_equalArrays.js":
false,

/***/ "./node_modules/lodash/_equalByTag.js":
false,

/***/ "./node_modules/lodash/_equalObjects.js":
false,

/***/ "./node_modules/lodash/_flatRest.js":
false,

/***/ "./node_modules/lodash/_freeGlobal.js":
false,

/***/ "./node_modules/lodash/_getAllKeys.js":
false,

/***/ "./node_modules/lodash/_getData.js":
false,

/***/ "./node_modules/lodash/_getFuncName.js":
false,

/***/ "./node_modules/lodash/_getHolder.js":
false,

/***/ "./node_modules/lodash/_getMapData.js":
false,

/***/ "./node_modules/lodash/_getMatchData.js":
false,

/***/ "./node_modules/lodash/_getNative.js":
false,

/***/ "./node_modules/lodash/_getPrototype.js":
false,

/***/ "./node_modules/lodash/_getRawTag.js":
false,

/***/ "./node_modules/lodash/_getSymbols.js":
false,

/***/ "./node_modules/lodash/_getTag.js":
false,

/***/ "./node_modules/lodash/_getValue.js":
false,

/***/ "./node_modules/lodash/_getWrapDetails.js":
false,

/***/ "./node_modules/lodash/_hasPath.js":
false,

/***/ "./node_modules/lodash/_hashClear.js":
false,

/***/ "./node_modules/lodash/_hashDelete.js":
false,

/***/ "./node_modules/lodash/_hashGet.js":
false,

/***/ "./node_modules/lodash/_hashHas.js":
false,

/***/ "./node_modules/lodash/_hashSet.js":
false,

/***/ "./node_modules/lodash/_initCloneObject.js":
false,

/***/ "./node_modules/lodash/_insertWrapDetails.js":
false,

/***/ "./node_modules/lodash/_isFlattenable.js":
false,

/***/ "./node_modules/lodash/_isIndex.js":
false,

/***/ "./node_modules/lodash/_isIterateeCall.js":
false,

/***/ "./node_modules/lodash/_isKey.js":
false,

/***/ "./node_modules/lodash/_isKeyable.js":
false,

/***/ "./node_modules/lodash/_isLaziable.js":
false,

/***/ "./node_modules/lodash/_isMasked.js":
false,

/***/ "./node_modules/lodash/_isPrototype.js":
false,

/***/ "./node_modules/lodash/_isStrictComparable.js":
false,

/***/ "./node_modules/lodash/_listCacheClear.js":
false,

/***/ "./node_modules/lodash/_listCacheDelete.js":
false,

/***/ "./node_modules/lodash/_listCacheGet.js":
false,

/***/ "./node_modules/lodash/_listCacheHas.js":
false,

/***/ "./node_modules/lodash/_listCacheSet.js":
false,

/***/ "./node_modules/lodash/_mapCacheClear.js":
false,

/***/ "./node_modules/lodash/_mapCacheDelete.js":
false,

/***/ "./node_modules/lodash/_mapCacheGet.js":
false,

/***/ "./node_modules/lodash/_mapCacheHas.js":
false,

/***/ "./node_modules/lodash/_mapCacheSet.js":
false,

/***/ "./node_modules/lodash/_mapToArray.js":
false,

/***/ "./node_modules/lodash/_matchesStrictComparable.js":
false,

/***/ "./node_modules/lodash/_memoizeCapped.js":
false,

/***/ "./node_modules/lodash/_mergeData.js":
false,

/***/ "./node_modules/lodash/_metaMap.js":
false,

/***/ "./node_modules/lodash/_nativeCreate.js":
false,

/***/ "./node_modules/lodash/_nativeKeys.js":
false,

/***/ "./node_modules/lodash/_nativeKeysIn.js":
false,

/***/ "./node_modules/lodash/_nodeUtil.js":
false,

/***/ "./node_modules/lodash/_objectToString.js":
false,

/***/ "./node_modules/lodash/_overArg.js":
false,

/***/ "./node_modules/lodash/_overRest.js":
false,

/***/ "./node_modules/lodash/_realNames.js":
false,

/***/ "./node_modules/lodash/_reorder.js":
false,

/***/ "./node_modules/lodash/_replaceHolders.js":
false,

/***/ "./node_modules/lodash/_root.js":
false,

/***/ "./node_modules/lodash/_safeGet.js":
false,

/***/ "./node_modules/lodash/_setCacheAdd.js":
false,

/***/ "./node_modules/lodash/_setCacheHas.js":
false,

/***/ "./node_modules/lodash/_setData.js":
false,

/***/ "./node_modules/lodash/_setToArray.js":
false,

/***/ "./node_modules/lodash/_setToString.js":
false,

/***/ "./node_modules/lodash/_setWrapToString.js":
false,

/***/ "./node_modules/lodash/_shortOut.js":
false,

/***/ "./node_modules/lodash/_stackClear.js":
false,

/***/ "./node_modules/lodash/_stackDelete.js":
false,

/***/ "./node_modules/lodash/_stackGet.js":
false,

/***/ "./node_modules/lodash/_stackHas.js":
false,

/***/ "./node_modules/lodash/_stackSet.js":
false,

/***/ "./node_modules/lodash/_strictIndexOf.js":
false,

/***/ "./node_modules/lodash/_stringToPath.js":
false,

/***/ "./node_modules/lodash/_toKey.js":
false,

/***/ "./node_modules/lodash/_toSource.js":
false,

/***/ "./node_modules/lodash/_updateWrapDetails.js":
false,

/***/ "./node_modules/lodash/_wrapperClone.js":
false,

/***/ "./node_modules/lodash/constant.js":
false,

/***/ "./node_modules/lodash/eq.js":
false,

/***/ "./node_modules/lodash/flatten.js":
false,

/***/ "./node_modules/lodash/get.js":
false,

/***/ "./node_modules/lodash/hasIn.js":
false,

/***/ "./node_modules/lodash/identity.js":
false,

/***/ "./node_modules/lodash/isArguments.js":
false,

/***/ "./node_modules/lodash/isArray.js":
false,

/***/ "./node_modules/lodash/isArrayLike.js":
false,

/***/ "./node_modules/lodash/isArrayLikeObject.js":
false,

/***/ "./node_modules/lodash/isBuffer.js":
false,

/***/ "./node_modules/lodash/isEqual.js":
false,

/***/ "./node_modules/lodash/isFunction.js":
false,

/***/ "./node_modules/lodash/isLength.js":
false,

/***/ "./node_modules/lodash/isNumber.js":
false,

/***/ "./node_modules/lodash/isObject.js":
false,

/***/ "./node_modules/lodash/isObjectLike.js":
false,

/***/ "./node_modules/lodash/isPlainObject.js":
false,

/***/ "./node_modules/lodash/isString.js":
false,

/***/ "./node_modules/lodash/isSymbol.js":
false,

/***/ "./node_modules/lodash/isTypedArray.js":
false,

/***/ "./node_modules/lodash/keys.js":
false,

/***/ "./node_modules/lodash/keysIn.js":
false,

/***/ "./node_modules/lodash/last.js":
false,

/***/ "./node_modules/lodash/memoize.js":
false,

/***/ "./node_modules/lodash/merge.js":
false,

/***/ "./node_modules/lodash/noop.js":
false,

/***/ "./node_modules/lodash/partialRight.js":
false,

/***/ "./node_modules/lodash/pick.js":
false,

/***/ "./node_modules/lodash/property.js":
false,

/***/ "./node_modules/lodash/range.js":
false,

/***/ "./node_modules/lodash/set.js":
false,

/***/ "./node_modules/lodash/sortBy.js":
false,

/***/ "./node_modules/lodash/stubArray.js":
false,

/***/ "./node_modules/lodash/stubFalse.js":
false,

/***/ "./node_modules/lodash/toFinite.js":
false,

/***/ "./node_modules/lodash/toInteger.js":
false,

/***/ "./node_modules/lodash/toNumber.js":
false,

/***/ "./node_modules/lodash/toPlainObject.js":
false,

/***/ "./node_modules/lodash/toString.js":
false,

/***/ "./node_modules/lodash/without.js":
false,

/***/ "./node_modules/lodash/wrapperLodash.js":
false,

/***/ "./node_modules/object-assign/index.js":
false,

/***/ "./node_modules/performance-now/lib/performance-now.js":
false,

/***/ "./node_modules/process/browser.js":
false,

/***/ "./node_modules/prop-types/checkPropTypes.js":
false,

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
false,

/***/ "./node_modules/prop-types/index.js":
false,

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
false,

/***/ "./node_modules/raf/index.js":
false,

/***/ "./node_modules/raf/node_modules/performance-now/lib/performance-now.js":
false,

/***/ "./node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js":
false,

/***/ "./node_modules/react-measure/dist/index.esm.js":
false,

/***/ "./node_modules/react-measure/node_modules/@babel/runtime/helpers/esm/extends.js":
false,

/***/ "./node_modules/react-measure/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":
false,

/***/ "./node_modules/react-measure/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js":
false,

/***/ "./node_modules/react-motion/lib/Motion.js":
false,

/***/ "./node_modules/react-motion/lib/StaggeredMotion.js":
false,

/***/ "./node_modules/react-motion/lib/TransitionMotion.js":
false,

/***/ "./node_modules/react-motion/lib/mapToZero.js":
false,

/***/ "./node_modules/react-motion/lib/mergeDiff.js":
false,

/***/ "./node_modules/react-motion/lib/presets.js":
false,

/***/ "./node_modules/react-motion/lib/react-motion.js":
false,

/***/ "./node_modules/react-motion/lib/reorderKeys.js":
false,

/***/ "./node_modules/react-motion/lib/shouldStopAnimation.js":
false,

/***/ "./node_modules/react-motion/lib/spring.js":
false,

/***/ "./node_modules/react-motion/lib/stepper.js":
false,

/***/ "./node_modules/react-motion/lib/stripStyle.js":
false,

/***/ "./node_modules/recompose/compose.js":
false,

/***/ "./node_modules/recompose/defaultProps.js":
false,

/***/ "./node_modules/recompose/getDisplayName.js":
false,

/***/ "./node_modules/recompose/mapProps.js":
false,

/***/ "./node_modules/recompose/pure.js":
false,

/***/ "./node_modules/recompose/setDisplayName.js":
false,

/***/ "./node_modules/recompose/setPropTypes.js":
false,

/***/ "./node_modules/recompose/setStatic.js":
false,

/***/ "./node_modules/recompose/shallowEqual.js":
false,

/***/ "./node_modules/recompose/shouldUpdate.js":
false,

/***/ "./node_modules/recompose/utils/mapValues.js":
false,

/***/ "./node_modules/recompose/utils/pick.js":
false,

/***/ "./node_modules/recompose/withHandlers.js":
false,

/***/ "./node_modules/recompose/withProps.js":
false,

/***/ "./node_modules/recompose/withPropsOnChange.js":
false,

/***/ "./node_modules/recompose/withState.js":
false,

/***/ "./node_modules/recompose/wrapDisplayName.js":
false,

/***/ "./node_modules/resize-observer-polyfill/dist/ResizeObserver.es.js":
false,

/***/ "./node_modules/webpack/buildin/global.js":
false,

/***/ "./node_modules/webpack/buildin/module.js":
false

})
//# sourceMappingURL=index.js.65608398f099afba2f29.hot-update.js.map
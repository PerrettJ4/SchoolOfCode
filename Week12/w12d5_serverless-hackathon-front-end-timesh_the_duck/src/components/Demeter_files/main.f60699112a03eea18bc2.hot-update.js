webpackHotUpdate("main",{

/***/ "./src/pages/StudentPage.js":
/*!**********************************!*\
  !*** ./src/pages/StudentPage.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return StudentPage; });
/* harmony import */ var _components_StudentProfile_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/StudentProfile/index */ "./src/components/StudentProfile/index.js");
/* harmony import */ var components_MessageNotification__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/MessageNotification */ "./src/components/MessageNotification/index.js");
/* harmony import */ var components_Comments__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/Comments */ "./src/components/Comments/index.js");
/* harmony import */ var _components_ChartLine__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/ChartLine */ "./src/components/ChartLine/index.js");
/* harmony import */ var _components_SearchByName__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/SearchByName */ "./src/components/SearchByName/index.js");
/* harmony import */ var components_DetailedProgress__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/DetailedProgress */ "./src/components/DetailedProgress/index.js");
/* harmony import */ var lib_lineData__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lib/lineData */ "./src/lib/lineData.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/PerrettJ4/Desktop/Code/School of Code/week13+/phantom-elephants-frontend/src/pages/StudentPage.js",
    _s = __webpack_require__.$Refresh$.signature();












function StudentPage({
  backEndData
}) {
  _s();

  const data = [...backEndData, ...lib_lineData__WEBPACK_IMPORTED_MODULE_6__["fakeData"]];
  console.log("studentPage: ", data);
  const history = Object(react_router__WEBPACK_IMPORTED_MODULE_8__["useHistory"])();
  const [studentId, setStudentId] = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(Number(Object(react_router__WEBPACK_IMPORTED_MODULE_8__["useParams"])().id) || data[0].id);
  const studentObject = data.find(item => {
    return item.id === studentId;
  });
  const [student, setStudent] = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(studentObject);

  const changeStudent = name => {
    const newStudent = data.find(studentData => studentData.name.toLowerCase().includes(name.toLowerCase()));

    if (newStudent) {
      setStudent(newStudent);
      setStudentId(newStudent.id);
      history.push(`/student/${newStudent.id}`);
    }
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
      className: "bg-light-blue-500 pt-14 pb-28 px-3 md:px-8 h-auto",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
        className: "container mx-auto max-w-full",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
          className: "grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(components_MessageNotification__WEBPACK_IMPORTED_MODULE_1__["default"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_components_SearchByName__WEBPACK_IMPORTED_MODULE_4__["default"], {
            handleSubmit: changeStudent
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 41,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("section", {
      className: "grid",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_components_StudentProfile_index__WEBPACK_IMPORTED_MODULE_0__["default"], {
        student: student
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_components_ChartLine__WEBPACK_IMPORTED_MODULE_3__["default"], {
        data: [student],
        isGroup: false
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(components_DetailedProgress__WEBPACK_IMPORTED_MODULE_5__["default"], {
        student: student
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(components_Comments__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

_s(StudentPage, "mFvBRvHHvoqcCs/L4LTUcrzVBIk=", false, function () {
  return [react_router__WEBPACK_IMPORTED_MODULE_8__["useHistory"], react_router__WEBPACK_IMPORTED_MODULE_8__["useParams"]];
});

_c = StudentPage;

var _c;

__webpack_require__.$Refresh$.register(_c, "StudentPage");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ })

})
//# sourceMappingURL=main.f60699112a03eea18bc2.hot-update.js.map
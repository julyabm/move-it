webpackHotUpdate_N_E("pages/index",{

/***/ "./src/contexts/ChallengesContext.tsx":
/*!********************************************!*\
  !*** ./src/contexts/ChallengesContext.tsx ***!
  \********************************************/
/*! exports provided: ChallengesContext, ChallengesProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChallengesContext", function() { return ChallengesContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChallengesProvider", function() { return ChallengesProvider; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_ReactJS_moveit_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _challenges_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../challenges.json */ "./challenges.json");
var _challenges_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../challenges.json */ "./challenges.json", 1);
/* harmony import */ var _components_LevelUpModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/LevelUpModal */ "./src/components/LevelUpModal.tsx");



var _jsxFileName = "C:\\ReactJS\\moveit-next\\src\\contexts\\ChallengesContext.tsx",
    _s = $RefreshSig$();





var ChallengesContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_2__["createContext"])({});
function ChallengesProvider(_ref) {
  _s();

  var _rest$level, _rest$currentExperien, _rest$challengesCompl;

  var children = _ref.children,
      rest = Object(C_ReactJS_moveit_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["children"]);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])((_rest$level = rest.level) !== null && _rest$level !== void 0 ? _rest$level : 1),
      level = _useState[0],
      setLevel = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])((_rest$currentExperien = rest.currentExperience) !== null && _rest$currentExperien !== void 0 ? _rest$currentExperien : 0),
      currentExperience = _useState2[0],
      setCurrentExperience = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])((_rest$challengesCompl = rest.challengesCompleted) !== null && _rest$challengesCompl !== void 0 ? _rest$challengesCompl : 0),
      challengesCompleted = _useState3[0],
      setChallengesCompleted = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(null),
      activeChallenge = _useState4[0],
      setActiveChallenge = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      isLevelUpModalOpen = _useState5[0],
      setIsLevelUpModalOpen = _useState5[1];

  var experienceToNextLevel = Math.pow((level + 1) * 4, 2);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    Notification.requestPermission();
  }, []);

  function levelUp() {
    setLevel(level + 1);
    setIsLevelUpModalOpen(true);
  }

  function closeLevelUpModal() {
    setIsLevelUpModalOpen(false);
  } //cokies


  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.set('level', String(level));
    js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.set('currentExperience', String(currentExperience));
    js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.set('challengesCompleted', String(challengesCompleted));
  }, [level, currentExperience, challengesCompleted]);

  function startNewChallenge() {
    var ramdomChallengeIndex = Math.floor(Math.random() * _challenges_json__WEBPACK_IMPORTED_MODULE_4__.length);
    var challenge = _challenges_json__WEBPACK_IMPORTED_MODULE_4__[ramdomChallengeIndex];
    setActiveChallenge(challenge);
    new Audio('/notification.mp3').play();

    if (Notification.permission == 'granted') {
      new Notification('Novo desafio 🎉', {
        body: "Valendo ".concat(challenge.amount, "xp")
      });
    }
  }

  function resetChallenge() {
    setActiveChallenge(null);
  }

  function completeChallenge() {
    if (!activeChallenge) {
      return;
    }

    var amount = activeChallenge.amount;
    var finalExperience = currentExperience + amount;

    if (finalExperience >= experienceToNextLevel) {
      finalExperience = finalExperience - experienceToNextLevel;
      levelUp();
    }

    setCurrentExperience(finalExperience);
    setActiveChallenge(null);
    setChallengesCompleted(challengesCompleted + 1);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ChallengesContext.Provider, {
    value: {
      level: level,
      currentExperience: currentExperience,
      experienceToNextLevel: experienceToNextLevel,
      challengesCompleted: challengesCompleted,
      levelUp: levelUp,
      startNewChallenge: startNewChallenge,
      activeChallenge: activeChallenge,
      resetChallenge: resetChallenge,
      completeChallenge: completeChallenge
    },
    children: [children, isLevelUpModalOpen && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_LevelUpModal__WEBPACK_IMPORTED_MODULE_5__["LevelUpModal"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 33
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 103,
    columnNumber: 5
  }, this);
}

_s(ChallengesProvider, "dtpAc4/oILVauaIW4BhKify+Aj4=");

_c = ChallengesProvider;

var _c;

$RefreshReg$(_c, "ChallengesProvider");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRleHRzL0NoYWxsZW5nZXNDb250ZXh0LnRzeCJdLCJuYW1lcyI6WyJDaGFsbGVuZ2VzQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJDaGFsbGVuZ2VzUHJvdmlkZXIiLCJjaGlsZHJlbiIsInJlc3QiLCJ1c2VTdGF0ZSIsImxldmVsIiwic2V0TGV2ZWwiLCJjdXJyZW50RXhwZXJpZW5jZSIsInNldEN1cnJlbnRFeHBlcmllbmNlIiwiY2hhbGxlbmdlc0NvbXBsZXRlZCIsInNldENoYWxsZW5nZXNDb21wbGV0ZWQiLCJhY3RpdmVDaGFsbGVuZ2UiLCJzZXRBY3RpdmVDaGFsbGVuZ2UiLCJpc0xldmVsVXBNb2RhbE9wZW4iLCJzZXRJc0xldmVsVXBNb2RhbE9wZW4iLCJleHBlcmllbmNlVG9OZXh0TGV2ZWwiLCJNYXRoIiwicG93IiwidXNlRWZmZWN0IiwiTm90aWZpY2F0aW9uIiwicmVxdWVzdFBlcm1pc3Npb24iLCJsZXZlbFVwIiwiY2xvc2VMZXZlbFVwTW9kYWwiLCJDb29raWVzIiwic2V0IiwiU3RyaW5nIiwic3RhcnROZXdDaGFsbGVuZ2UiLCJyYW1kb21DaGFsbGVuZ2VJbmRleCIsImZsb29yIiwicmFuZG9tIiwiY2hhbGxlbmdlcyIsImxlbmd0aCIsImNoYWxsZW5nZSIsIkF1ZGlvIiwicGxheSIsInBlcm1pc3Npb24iLCJib2R5IiwiYW1vdW50IiwicmVzZXRDaGFsbGVuZ2UiLCJjb21wbGV0ZUNoYWxsZW5nZSIsImZpbmFsRXhwZXJpZW5jZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQTJCTyxJQUFNQSxpQkFBaUIsZ0JBQUdDLDJEQUFhLENBQUMsRUFBRCxDQUF2QztBQUVBLFNBQVNDLGtCQUFULE9BQ3VCO0FBQUE7O0FBQUE7O0FBQUEsTUFETUMsUUFDTixRQURNQSxRQUNOO0FBQUEsTUFEbUJDLElBQ25COztBQUFBLGtCQUNG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QUFDRCxtQkFBbUIsR0FBQyxDQUFyQixDQUF0QjtBQUNIOztBQUVGLHNCQUNDLHFFQUFDLGlCQUFELENBQW1CLFFBQW5CO0FBQ0EsU0FBSyxFQUFFO0FBQ0hKLFdBQUssRUFBTEEsS0FERztBQUVIRSx1QkFBaUIsRUFBakJBLGlCQUZHO0FBR0hRLDJCQUFxQixFQUFyQkEscUJBSEc7QUFJSE4seUJBQW1CLEVBQW5CQSxtQkFKRztBQUtIWSxhQUFPLEVBQVBBLE9BTEc7QUFNSEssdUJBQWlCLEVBQWpCQSxpQkFORztBQU9IZixxQkFBZSxFQUFmQSxlQVBHO0FBUUgyQixvQkFBYyxFQUFkQSxjQVJHO0FBU0hDLHVCQUFpQixFQUFqQkE7QUFURyxLQURQO0FBQUEsZUFZS3JDLFFBWkwsRUFjTVcsa0JBQWtCLGlCQUFJLHFFQUFDLHFFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFkNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREQ7QUFrQkY7O0dBdkZlWixrQjs7S0FBQUEsa0IiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYThiMzIwMzk2NzBiM2YxMTVhNzEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIHVzZVN0YXRlLCBSZWFjdE5vZGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IENvb2tpZXMgZnJvbSAnanMtY29va2llJztcclxuaW1wb3J0IGNoYWxsZW5nZXMgZnJvbSAnLi4vLi4vY2hhbGxlbmdlcy5qc29uJztcclxuaW1wb3J0IHsgTGV2ZWxVcE1vZGFsIH0gZnJvbSAnLi4vY29tcG9uZW50cy9MZXZlbFVwTW9kYWwnO1xyXG5cclxuaW50ZXJmYWNlIENoYWxsZW5nZSB7XHJcbiAgICB0eXBlOiAnYm9keScgfCAnZXllJztcclxuICAgIGRlc2NyaXB0aW9uOiBzdHJpbmc7XHJcbiAgICBhbW91bnQ6IG51bWJlcjtcclxufVxyXG5cclxuaW50ZXJmYWNlIENoYWxsZW5nZXNDb250ZXh0RGF0YSB7XHJcbiAgICBsZXZlbDogbnVtYmVyO1xyXG4gICAgY3VycmVudEV4cGVyaWVuY2U6IG51bWJlcjtcclxuICAgIGV4cGVyaWVuY2VUb05leHRMZXZlbDogbnVtYmVyO1xyXG4gICAgY2hhbGxlbmdlc0NvbXBsZXRlZDogbnVtYmVyO1xyXG4gICAgYWN0aXZlQ2hhbGxlbmdlOiBDaGFsbGVuZ2U7XHJcbiAgICBsZXZlbFVwOiAoKSA9PiB2b2lkO1xyXG4gICAgc3RhcnROZXdDaGFsbGVuZ2U6ICgpID0+IHZvaWQ7XHJcbiAgICByZXNldENoYWxsZW5nZTogKCkgPT4gdm9pZDtcclxuICAgIGNvbXBsZXRlQ2hhbGxlbmdlOiAoKSA9PiB2b2lkO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgQ2hhbGxlbmdlc1Byb3ZpZGVyUHJvcHN7XHJcbiAgICBjaGlsZHJlbjogUmVhY3ROb2RlO1xyXG4gICAgbGV2ZWw6IG51bWJlcjtcclxuICAgIGN1cnJlbnRFeHBlcmllbmNlOiBudW1iZXI7XHJcbiAgICBjaGFsbGVuZ2VzQ29tcGxldGVkOiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBDaGFsbGVuZ2VzQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoe30gYXMgQ2hhbGxlbmdlc0NvbnRleHREYXRhKTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBDaGFsbGVuZ2VzUHJvdmlkZXIoe2NoaWxkcmVuLCAuLi5yZXN0fVxyXG4gICAgOiBDaGFsbGVuZ2VzUHJvdmlkZXJQcm9wcyl7XHJcbiAgICBjb25zdCBbbGV2ZWwsIHNldExldmVsXT11c2VTdGF0ZShyZXN0LmxldmVsID8/IDEpO1xyXG4gICAgY29uc3QgW2N1cnJlbnRFeHBlcmllbmNlLHNldEN1cnJlbnRFeHBlcmllbmNlXSA9IHVzZVN0YXRlKHJlc3QuY3VycmVudEV4cGVyaWVuY2UgPz8gMCk7XHJcbiAgICBjb25zdCBbY2hhbGxlbmdlc0NvbXBsZXRlZCwgc2V0Q2hhbGxlbmdlc0NvbXBsZXRlZF0gPSB1c2VTdGF0ZShyZXN0LmNoYWxsZW5nZXNDb21wbGV0ZWQgPz8gMCk7XHJcblxyXG4gICAgY29uc3QgW2FjdGl2ZUNoYWxsZW5nZSwgc2V0QWN0aXZlQ2hhbGxlbmdlXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gICAgY29uc3QgW2lzTGV2ZWxVcE1vZGFsT3Blbiwgc2V0SXNMZXZlbFVwTW9kYWxPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgICBjb25zdCBleHBlcmllbmNlVG9OZXh0TGV2ZWwgPSBNYXRoLnBvdygobGV2ZWwrMSkqIDQsIDIpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgTm90aWZpY2F0aW9uLnJlcXVlc3RQZXJtaXNzaW9uKCk7XHJcbiAgICB9LCBbXSlcclxuXHJcbiAgICBmdW5jdGlvbiBsZXZlbFVwKCl7XHJcbiAgICAgICAgc2V0TGV2ZWwobGV2ZWwrMSk7XHJcbiAgICAgICAgc2V0SXNMZXZlbFVwTW9kYWxPcGVuKHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNsb3NlTGV2ZWxVcE1vZGFsKCl7XHJcbiAgICAgICAgc2V0SXNMZXZlbFVwTW9kYWxPcGVuKGZhbHNlKTtcclxuICAgIH1cclxuXHJcbiAgICAvL2Nva2llc1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBDb29raWVzLnNldCgnbGV2ZWwnLCBTdHJpbmcobGV2ZWwpKTtcclxuICAgICAgICBDb29raWVzLnNldCgnY3VycmVudEV4cGVyaWVuY2UnLCBTdHJpbmcoY3VycmVudEV4cGVyaWVuY2UpKTtcclxuICAgICAgICBDb29raWVzLnNldCgnY2hhbGxlbmdlc0NvbXBsZXRlZCcsIFN0cmluZyhjaGFsbGVuZ2VzQ29tcGxldGVkKSk7XHJcbiAgICB9LCBbbGV2ZWwsIGN1cnJlbnRFeHBlcmllbmNlLCBjaGFsbGVuZ2VzQ29tcGxldGVkXSk7XHJcblxyXG4gICAgZnVuY3Rpb24gc3RhcnROZXdDaGFsbGVuZ2UoKXtcclxuICAgICAgICBjb25zdCAgcmFtZG9tQ2hhbGxlbmdlSW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBjaGFsbGVuZ2VzLmxlbmd0aClcclxuICAgICAgICBjb25zdCBjaGFsbGVuZ2UgPSBjaGFsbGVuZ2VzW3JhbWRvbUNoYWxsZW5nZUluZGV4XTtcclxuXHJcbiAgICAgICAgc2V0QWN0aXZlQ2hhbGxlbmdlKGNoYWxsZW5nZSlcclxuXHJcbiAgICAgICAgbmV3IEF1ZGlvKCcvbm90aWZpY2F0aW9uLm1wMycpLnBsYXkoKTtcclxuICAgICAgICBcclxuICAgICAgICBpZiAoTm90aWZpY2F0aW9uLnBlcm1pc3Npb24gPT0gJ2dyYW50ZWQnKSB7XHJcbiAgICAgICAgICAgIG5ldyBOb3RpZmljYXRpb24oJ05vdm8gZGVzYWZpbyDwn46JJywgeyBcclxuICAgICAgICAgICAgICAgIGJvZHk6IGBWYWxlbmRvICR7Y2hhbGxlbmdlLmFtb3VudH14cGBcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcmVzZXRDaGFsbGVuZ2UoKXtcclxuICAgICAgICBzZXRBY3RpdmVDaGFsbGVuZ2UobnVsbCk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY29tcGxldGVDaGFsbGVuZ2UoKXtcclxuICAgICAgICBpZiAoIWFjdGl2ZUNoYWxsZW5nZSkgeyBcclxuICAgICAgICAgICAgcmV0dXJuOyBcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHthbW91bnR9ID0gYWN0aXZlQ2hhbGxlbmdlO1xyXG5cclxuICAgICAgICBsZXQgZmluYWxFeHBlcmllbmNlID0gY3VycmVudEV4cGVyaWVuY2UgKyBhbW91bnQ7XHJcblxyXG4gICAgICAgIGlmIChmaW5hbEV4cGVyaWVuY2UgPj0gZXhwZXJpZW5jZVRvTmV4dExldmVsKXtcclxuICAgICAgICAgICAgZmluYWxFeHBlcmllbmNlID0gZmluYWxFeHBlcmllbmNlIC1leHBlcmllbmNlVG9OZXh0TGV2ZWw7XHJcbiAgICAgICAgICAgIGxldmVsVXAoKTtcclxuICAgICAgICB9ICBcclxuICAgICAgICBcclxuICAgICAgICBzZXRDdXJyZW50RXhwZXJpZW5jZShmaW5hbEV4cGVyaWVuY2UpO1xyXG4gICAgICAgIHNldEFjdGl2ZUNoYWxsZW5nZShudWxsKTtcclxuICAgICAgICBzZXRDaGFsbGVuZ2VzQ29tcGxldGVkKGNoYWxsZW5nZXNDb21wbGV0ZWQrMSk7XHJcbiAgICB9XHJcblxyXG4gICByZXR1cm4gKFxyXG4gICAgPENoYWxsZW5nZXNDb250ZXh0LlByb3ZpZGVyIFxyXG4gICAgdmFsdWU9e3tcclxuICAgICAgICBsZXZlbCwgXHJcbiAgICAgICAgY3VycmVudEV4cGVyaWVuY2UsIFxyXG4gICAgICAgIGV4cGVyaWVuY2VUb05leHRMZXZlbCxcclxuICAgICAgICBjaGFsbGVuZ2VzQ29tcGxldGVkLCBcclxuICAgICAgICBsZXZlbFVwLFxyXG4gICAgICAgIHN0YXJ0TmV3Q2hhbGxlbmdlLFxyXG4gICAgICAgIGFjdGl2ZUNoYWxsZW5nZSxcclxuICAgICAgICByZXNldENoYWxsZW5nZSxcclxuICAgICAgICBjb21wbGV0ZUNoYWxsZW5nZSxcclxuICAgICAgICAgfX0+XHJcbiAgICAgICAge2NoaWxkcmVufVxyXG5cclxuICAgICAgICB7IGlzTGV2ZWxVcE1vZGFsT3BlbiAmJiA8TGV2ZWxVcE1vZGFsIC8+fVxyXG4gICAgICAgICAgICA8L0NoYWxsZW5nZXNDb250ZXh0LlByb3ZpZGVyPlxyXG4gICApIFxyXG59IFxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==
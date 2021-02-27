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



var _jsxFileName = "C:\\ReactJS\\moveit-next\\src\\contexts\\ChallengesContext.tsx",
    _s = $RefreshSig$();




var ChallengesContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_2__["createContext"])({});
function ChallengesProvider(_ref) {
  _s();

  var _rest$level, _rest$currentExperien, _rest$challengeComple;

  var children = _ref.children,
      rest = Object(C_ReactJS_moveit_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["children"]);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])((_rest$level = rest.level) !== null && _rest$level !== void 0 ? _rest$level : 1),
      level = _useState[0],
      setLevel = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])((_rest$currentExperien = rest.currentExperience) !== null && _rest$currentExperien !== void 0 ? _rest$currentExperien : 0),
      currentExperience = _useState2[0],
      setCurrentExperience = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])((_rest$challengeComple = rest.challengeCompleted) !== null && _rest$challengeComple !== void 0 ? _rest$challengeComple : 0),
      challengeCompleted = _useState3[0],
      setChallengesCompleted = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(null),
      activeChallenge = _useState4[0],
      setActiveChallenge = _useState4[1];

  var experienceToNextLevel = Math.pow((level + 1) * 4, 2);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    Notification.requestPermission();
  }, []);

  function levelUp() {
    setLevel(level + 1);
  } //cokies


  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.set('level', String(level));
    js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.set('currentExperience', String(currentExperience));
    js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.set('challengesCompleted', String(challengeCompleted));
  }, [level, currentExperience, challengeCompleted]);

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
    setChallengesCompleted(challengeCompleted + 1);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ChallengesContext.Provider, {
    value: {
      level: level,
      currentExperience: currentExperience,
      experienceToNextLevel: experienceToNextLevel,
      challengeCompleted: challengeCompleted,
      levelUp: levelUp,
      startNewChallenge: startNewChallenge,
      activeChallenge: activeChallenge,
      resetChallenge: resetChallenge,
      completeChallenge: completeChallenge
    },
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 96,
    columnNumber: 5
  }, this);
}

_s(ChallengesProvider, "bYkkHetHand7Urfc068PNW5QyqM=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRleHRzL0NoYWxsZW5nZXNDb250ZXh0LnRzeCJdLCJuYW1lcyI6WyJDaGFsbGVuZ2VzQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJDaGFsbGVuZ2VzUHJvdmlkZXIiLCJjaGlsZHJlbiIsInJlc3QiLCJ1c2VTdGF0ZSIsImxldmVsIiwic2V0TGV2ZWwiLCJjdXJyZW50RXhwZXJpZW5jZSIsInNldEN1cnJlbnRFeHBlcmllbmNlIiwiY2hhbGxlbmdlQ29tcGxldGVkIiwic2V0Q2hhbGxlbmdlc0NvbXBsZXRlZCIsImFjdGl2ZUNoYWxsZW5nZSIsInNldEFjdGl2ZUNoYWxsZW5nZSIsImV4cGVyaWVuY2VUb05leHRMZXZlbCIsIk1hdGgiLCJwb3ciLCJ1c2VFZmZlY3QiLCJOb3RpZmljYXRpb24iLCJyZXF1ZXN0UGVybWlzc2lvbiIsImxldmVsVXAiLCJDb29raWVzIiwic2V0IiwiU3RyaW5nIiwic3RhcnROZXdDaGFsbGVuZ2UiLCJyYW1kb21DaGFsbGVuZ2VJbmRleCIsImZsb29yIiwicmFuZG9tIiwiY2hhbGxlbmdlcyIsImxlbmd0aCIsImNoYWxsZW5nZSIsIkF1ZGlvIiwicGxheSIsInBlcm1pc3Npb24iLCJib2R5IiwiYW1vdW50IiwicmVzZXRDaGFsbGVuZ2UiLCJjb21wbGV0ZUNoYWxsZW5nZSIsImZpbmFsRXhwZXJpZW5jZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQTJCTyxJQUFNQSxpQkFBaUIsZ0JBQUdDLDJEQUFhLENBQUMsRUFBRCxDQUF2QztBQUVBLFNBQVNDLGtCQUFULE9BQ3VCO0FBQUE7O0FBQUE7O0FBQUEsTUFETUMsUUFDTixRQURNQSxRQUNOO0FBQUEsTUFEbUJDLElBQ25COztBQUFBLGtCQUNGQyxzREFBUSxnQkFBQ0QsSUFBSSxDQUFDRSxLQUFOLHFEQUFlLENBQWYsQ0FETjtBQUFBLE1BQ25CQSxLQURtQjtBQUFBLE1B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QkFBZSxFQUFmQSxlQVBHO0FBUUh3QixvQkFBYyxFQUFkQSxjQVJHO0FBU0hDLHVCQUFpQixFQUFqQkE7QUFURyxLQURQO0FBQUEsY0FZS2xDO0FBWkw7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUREO0FBZ0JGOztHQS9FZUQsa0I7O0tBQUFBLGtCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjQ1ZjU4NDNmNzRkZmE1MDdkZDA3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VTdGF0ZSwgUmVhY3ROb2RlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBDb29raWVzIGZyb20gJ2pzLWNvb2tpZSc7XHJcbmltcG9ydCBjaGFsbGVuZ2VzIGZyb20gJy4uLy4uL2NoYWxsZW5nZXMuanNvbic7XHJcblxyXG5pbnRlcmZhY2UgQ2hhbGxlbmdlIHtcclxuICAgIHR5cGU6ICdib2R5JyB8ICdleWUnO1xyXG4gICAgZGVzY3JpcHRpb246IHN0cmluZztcclxuICAgIGFtb3VudDogbnVtYmVyO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgQ2hhbGxlbmdlc0NvbnRleHREYXRhIHtcclxuICAgIGxldmVsOiBudW1iZXI7XHJcbiAgICBjdXJyZW50RXhwZXJpZW5jZTogbnVtYmVyO1xyXG4gICAgZXhwZXJpZW5jZVRvTmV4dExldmVsOiBudW1iZXI7XHJcbiAgICBjaGFsbGVuZ2VzQ29tcGxldGVkOiBudW1iZXI7XHJcbiAgICBhY3RpdmVDaGFsbGVuZ2U6IENoYWxsZW5nZTtcclxuICAgIGxldmVsVXA6ICgpID0+IHZvaWQ7XHJcbiAgICBzdGFydE5ld0NoYWxsZW5nZTogKCkgPT4gdm9pZDtcclxuICAgIHJlc2V0Q2hhbGxlbmdlOiAoKSA9PiB2b2lkO1xyXG4gICAgY29tcGxldGVDaGFsbGVuZ2U6ICgpID0+IHZvaWQ7XHJcbn1cclxuXHJcbmludGVyZmFjZSBDaGFsbGVuZ2VzUHJvdmlkZXJQcm9wc3tcclxuICAgIGNoaWxkcmVuOiBSZWFjdE5vZGU7XHJcbiAgICBsZXZlbDogbnVtYmVyO1xyXG4gICAgY3VycmVudEV4cGVyaWVuY2U6IG51bWJlcjtcclxuICAgIGNoYWxsZW5nZUNvbXBsZXRlZDogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgQ2hhbGxlbmdlc0NvbnRleHQgPSBjcmVhdGVDb250ZXh0KHt9IGFzIENoYWxsZW5nZXNDb250ZXh0RGF0YSk7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gQ2hhbGxlbmdlc1Byb3ZpZGVyKHtjaGlsZHJlbiwgLi4ucmVzdH1cclxuICAgIDogQ2hhbGxlbmdlc1Byb3ZpZGVyUHJvcHMpe1xyXG4gICAgY29uc3QgW2xldmVsLCBzZXRMZXZlbF09dXNlU3RhdGUocmVzdC5sZXZlbCA/PyAxKTtcclxuICAgIGNvbnN0IFtjdXJyZW50RXhwZXJpZW5jZSxzZXRDdXJyZW50RXhwZXJpZW5jZV0gPSB1c2VTdGF0ZShyZXN0LmN1cnJlbnRFeHBlcmllbmNlID8/IDApO1xyXG4gICAgY29uc3QgW2NoYWxsZW5nZUNvbXBsZXRlZCwgc2V0Q2hhbGxlbmdlc0NvbXBsZXRlZF0gPSB1c2VTdGF0ZShyZXN0LmNoYWxsZW5nZUNvbXBsZXRlZCA/PyAwKTtcclxuXHJcbiAgICBjb25zdCBbYWN0aXZlQ2hhbGxlbmdlLCBzZXRBY3RpdmVDaGFsbGVuZ2VdID0gdXNlU3RhdGUobnVsbCk7XHJcblxyXG4gICAgY29uc3QgZXhwZXJpZW5jZVRvTmV4dExldmVsID0gTWF0aC5wb3coKGxldmVsKzEpKiA0LCAyKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIE5vdGlmaWNhdGlvbi5yZXF1ZXN0UGVybWlzc2lvbigpO1xyXG4gICAgfSwgW10pXHJcblxyXG4gICAgZnVuY3Rpb24gbGV2ZWxVcCgpe1xyXG4gICAgICAgIHNldExldmVsKGxldmVsKzEpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vY29raWVzXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIENvb2tpZXMuc2V0KCdsZXZlbCcsIFN0cmluZyhsZXZlbCkpO1xyXG4gICAgICAgIENvb2tpZXMuc2V0KCdjdXJyZW50RXhwZXJpZW5jZScsIFN0cmluZyhjdXJyZW50RXhwZXJpZW5jZSkpO1xyXG4gICAgICAgIENvb2tpZXMuc2V0KCdjaGFsbGVuZ2VzQ29tcGxldGVkJywgU3RyaW5nKGNoYWxsZW5nZUNvbXBsZXRlZCkpO1xyXG4gICAgfSwgW2xldmVsLCBjdXJyZW50RXhwZXJpZW5jZSwgY2hhbGxlbmdlQ29tcGxldGVkXSk7XHJcblxyXG4gICAgZnVuY3Rpb24gc3RhcnROZXdDaGFsbGVuZ2UoKXtcclxuICAgICAgICBjb25zdCAgcmFtZG9tQ2hhbGxlbmdlSW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBjaGFsbGVuZ2VzLmxlbmd0aClcclxuICAgICAgICBjb25zdCBjaGFsbGVuZ2UgPSBjaGFsbGVuZ2VzW3JhbWRvbUNoYWxsZW5nZUluZGV4XTtcclxuXHJcbiAgICAgICAgc2V0QWN0aXZlQ2hhbGxlbmdlKGNoYWxsZW5nZSlcclxuXHJcbiAgICAgICAgbmV3IEF1ZGlvKCcvbm90aWZpY2F0aW9uLm1wMycpLnBsYXkoKTtcclxuICAgICAgICBcclxuICAgICAgICBpZiAoTm90aWZpY2F0aW9uLnBlcm1pc3Npb24gPT0gJ2dyYW50ZWQnKSB7XHJcbiAgICAgICAgICAgIG5ldyBOb3RpZmljYXRpb24oJ05vdm8gZGVzYWZpbyDwn46JJywgeyBcclxuICAgICAgICAgICAgICAgIGJvZHk6IGBWYWxlbmRvICR7Y2hhbGxlbmdlLmFtb3VudH14cGBcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcmVzZXRDaGFsbGVuZ2UoKXtcclxuICAgICAgICBzZXRBY3RpdmVDaGFsbGVuZ2UobnVsbCk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY29tcGxldGVDaGFsbGVuZ2UoKXtcclxuICAgICAgICBpZiAoIWFjdGl2ZUNoYWxsZW5nZSkgeyBcclxuICAgICAgICAgICAgcmV0dXJuOyBcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHthbW91bnR9ID0gYWN0aXZlQ2hhbGxlbmdlO1xyXG5cclxuICAgICAgICBsZXQgZmluYWxFeHBlcmllbmNlID0gY3VycmVudEV4cGVyaWVuY2UgKyBhbW91bnQ7XHJcblxyXG4gICAgICAgIGlmIChmaW5hbEV4cGVyaWVuY2UgPj0gZXhwZXJpZW5jZVRvTmV4dExldmVsKXtcclxuICAgICAgICAgICAgZmluYWxFeHBlcmllbmNlID0gZmluYWxFeHBlcmllbmNlIC1leHBlcmllbmNlVG9OZXh0TGV2ZWw7XHJcbiAgICAgICAgICAgIGxldmVsVXAoKTtcclxuICAgICAgICB9ICBcclxuICAgICAgICBcclxuICAgICAgICBzZXRDdXJyZW50RXhwZXJpZW5jZShmaW5hbEV4cGVyaWVuY2UpO1xyXG4gICAgICAgIHNldEFjdGl2ZUNoYWxsZW5nZShudWxsKTtcclxuICAgICAgICBzZXRDaGFsbGVuZ2VzQ29tcGxldGVkKGNoYWxsZW5nZUNvbXBsZXRlZCsxKTtcclxuICAgIH1cclxuXHJcbiAgIHJldHVybiAoXHJcbiAgICA8Q2hhbGxlbmdlc0NvbnRleHQuUHJvdmlkZXIgXHJcbiAgICB2YWx1ZT17e1xyXG4gICAgICAgIGxldmVsLCBcclxuICAgICAgICBjdXJyZW50RXhwZXJpZW5jZSwgXHJcbiAgICAgICAgZXhwZXJpZW5jZVRvTmV4dExldmVsLFxyXG4gICAgICAgIGNoYWxsZW5nZUNvbXBsZXRlZCwgXHJcbiAgICAgICAgbGV2ZWxVcCxcclxuICAgICAgICBzdGFydE5ld0NoYWxsZW5nZSxcclxuICAgICAgICBhY3RpdmVDaGFsbGVuZ2UsXHJcbiAgICAgICAgcmVzZXRDaGFsbGVuZ2UsXHJcbiAgICAgICAgY29tcGxldGVDaGFsbGVuZ2UsXHJcbiAgICAgICAgIH19PlxyXG4gICAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvQ2hhbGxlbmdlc0NvbnRleHQuUHJvdmlkZXI+XHJcbiAgICkgXHJcbn0gXHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9
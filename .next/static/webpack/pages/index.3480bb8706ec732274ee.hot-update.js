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
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 96,
    columnNumber: 5
  }, this);
}

_s(ChallengesProvider, "LA/StDcCJ1XcQ8PikC9CERJOL9A=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRleHRzL0NoYWxsZW5nZXNDb250ZXh0LnRzeCJdLCJuYW1lcyI6WyJDaGFsbGVuZ2VzQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJDaGFsbGVuZ2VzUHJvdmlkZXIiLCJjaGlsZHJlbiIsInJlc3QiLCJ1c2VTdGF0ZSIsImxldmVsIiwic2V0TGV2ZWwiLCJjdXJyZW50RXhwZXJpZW5jZSIsInNldEN1cnJlbnRFeHBlcmllbmNlIiwiY2hhbGxlbmdlc0NvbXBsZXRlZCIsInNldENoYWxsZW5nZXNDb21wbGV0ZWQiLCJhY3RpdmVDaGFsbGVuZ2UiLCJzZXRBY3RpdmVDaGFsbGVuZ2UiLCJleHBlcmllbmNlVG9OZXh0TGV2ZWwiLCJNYXRoIiwicG93IiwidXNlRWZmZWN0IiwiTm90aWZpY2F0aW9uIiwicmVxdWVzdFBlcm1pc3Npb24iLCJsZXZlbFVwIiwiQ29va2llcyIsInNldCIsIlN0cmluZyIsInN0YXJ0TmV3Q2hhbGxlbmdlIiwicmFtZG9tQ2hhbGxlbmdlSW5kZXgiLCJmbG9vciIsInJhbmRvbSIsImNoYWxsZW5nZXMiLCJsZW5ndGgiLCJjaGFsbGVuZ2UiLCJBdWRpbyIsInBsYXkiLCJwZXJtaXNzaW9uIiwiYm9keSIsImFtb3VudCIsInJlc2V0Q2hhbGxlbmdlIiwiY29tcGxldGVDaGFsbGVuZ2UiLCJmaW5hbEV4cGVyaWVuY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUEyQk8sSUFBTUEsaUJBQWlCLGdCQUFHQywyREFBYSxDQUFDLEVBQUQsQ0FBdkM7QUFFQSxTQUFTQyxrQkFBVCxPQUN1QjtBQUFBOztBQUFBOztBQUFBLE1BRE1DLFFBQ04sUUFETUEsUUFDTjtBQUFBLE1BRG1CQyxJQUNuQjs7QUFBQSxrQkFDRkMsc0RBQVEsZ0JBQUNELElBQUksQ0FBQ0UsS0FBTixxREFBZSxDQUFmLENBRE47QUFBQSxNQUNuQkEsS0FEbUI7QUFBQSxN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cUJBQWUsRUFBZkEsZUFQRztBQVFId0Isb0JBQWMsRUFBZEEsY0FSRztBQVNIQyx1QkFBaUIsRUFBakJBO0FBVEcsS0FEUDtBQUFBLGNBWUtsQztBQVpMO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERDtBQWdCRjs7R0EvRWVELGtCOztLQUFBQSxrQiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4zNDgwYmI4NzA2ZWM3MzIyNzRlZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlU3RhdGUsIFJlYWN0Tm9kZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQ29va2llcyBmcm9tICdqcy1jb29raWUnO1xyXG5pbXBvcnQgY2hhbGxlbmdlcyBmcm9tICcuLi8uLi9jaGFsbGVuZ2VzLmpzb24nO1xyXG5cclxuaW50ZXJmYWNlIENoYWxsZW5nZSB7XHJcbiAgICB0eXBlOiAnYm9keScgfCAnZXllJztcclxuICAgIGRlc2NyaXB0aW9uOiBzdHJpbmc7XHJcbiAgICBhbW91bnQ6IG51bWJlcjtcclxufVxyXG5cclxuaW50ZXJmYWNlIENoYWxsZW5nZXNDb250ZXh0RGF0YSB7XHJcbiAgICBsZXZlbDogbnVtYmVyO1xyXG4gICAgY3VycmVudEV4cGVyaWVuY2U6IG51bWJlcjtcclxuICAgIGV4cGVyaWVuY2VUb05leHRMZXZlbDogbnVtYmVyO1xyXG4gICAgY2hhbGxlbmdlc0NvbXBsZXRlZDogbnVtYmVyO1xyXG4gICAgYWN0aXZlQ2hhbGxlbmdlOiBDaGFsbGVuZ2U7XHJcbiAgICBsZXZlbFVwOiAoKSA9PiB2b2lkO1xyXG4gICAgc3RhcnROZXdDaGFsbGVuZ2U6ICgpID0+IHZvaWQ7XHJcbiAgICByZXNldENoYWxsZW5nZTogKCkgPT4gdm9pZDtcclxuICAgIGNvbXBsZXRlQ2hhbGxlbmdlOiAoKSA9PiB2b2lkO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgQ2hhbGxlbmdlc1Byb3ZpZGVyUHJvcHN7XHJcbiAgICBjaGlsZHJlbjogUmVhY3ROb2RlO1xyXG4gICAgbGV2ZWw6IG51bWJlcjtcclxuICAgIGN1cnJlbnRFeHBlcmllbmNlOiBudW1iZXI7XHJcbiAgICBjaGFsbGVuZ2VDb21wbGV0ZWQ6IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IENoYWxsZW5nZXNDb250ZXh0ID0gY3JlYXRlQ29udGV4dCh7fSBhcyBDaGFsbGVuZ2VzQ29udGV4dERhdGEpO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIENoYWxsZW5nZXNQcm92aWRlcih7Y2hpbGRyZW4sIC4uLnJlc3R9XHJcbiAgICA6IENoYWxsZW5nZXNQcm92aWRlclByb3BzKXtcclxuICAgIGNvbnN0IFtsZXZlbCwgc2V0TGV2ZWxdPXVzZVN0YXRlKHJlc3QubGV2ZWwgPz8gMSk7XHJcbiAgICBjb25zdCBbY3VycmVudEV4cGVyaWVuY2Usc2V0Q3VycmVudEV4cGVyaWVuY2VdID0gdXNlU3RhdGUocmVzdC5jdXJyZW50RXhwZXJpZW5jZSA/PyAwKTtcclxuICAgIGNvbnN0IFtjaGFsbGVuZ2VzQ29tcGxldGVkLCBzZXRDaGFsbGVuZ2VzQ29tcGxldGVkXSA9IHVzZVN0YXRlKHJlc3QuY2hhbGxlbmdlc0NvbXBsZXRlZCA/PyAwKTtcclxuXHJcbiAgICBjb25zdCBbYWN0aXZlQ2hhbGxlbmdlLCBzZXRBY3RpdmVDaGFsbGVuZ2VdID0gdXNlU3RhdGUobnVsbCk7XHJcblxyXG4gICAgY29uc3QgZXhwZXJpZW5jZVRvTmV4dExldmVsID0gTWF0aC5wb3coKGxldmVsKzEpKiA0LCAyKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIE5vdGlmaWNhdGlvbi5yZXF1ZXN0UGVybWlzc2lvbigpO1xyXG4gICAgfSwgW10pXHJcblxyXG4gICAgZnVuY3Rpb24gbGV2ZWxVcCgpe1xyXG4gICAgICAgIHNldExldmVsKGxldmVsKzEpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vY29raWVzXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIENvb2tpZXMuc2V0KCdsZXZlbCcsIFN0cmluZyhsZXZlbCkpO1xyXG4gICAgICAgIENvb2tpZXMuc2V0KCdjdXJyZW50RXhwZXJpZW5jZScsIFN0cmluZyhjdXJyZW50RXhwZXJpZW5jZSkpO1xyXG4gICAgICAgIENvb2tpZXMuc2V0KCdjaGFsbGVuZ2VzQ29tcGxldGVkJywgU3RyaW5nKGNoYWxsZW5nZXNDb21wbGV0ZWQpKTtcclxuICAgIH0sIFtsZXZlbCwgY3VycmVudEV4cGVyaWVuY2UsIGNoYWxsZW5nZXNDb21wbGV0ZWRdKTtcclxuXHJcbiAgICBmdW5jdGlvbiBzdGFydE5ld0NoYWxsZW5nZSgpe1xyXG4gICAgICAgIGNvbnN0ICByYW1kb21DaGFsbGVuZ2VJbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGNoYWxsZW5nZXMubGVuZ3RoKVxyXG4gICAgICAgIGNvbnN0IGNoYWxsZW5nZSA9IGNoYWxsZW5nZXNbcmFtZG9tQ2hhbGxlbmdlSW5kZXhdO1xyXG5cclxuICAgICAgICBzZXRBY3RpdmVDaGFsbGVuZ2UoY2hhbGxlbmdlKVxyXG5cclxuICAgICAgICBuZXcgQXVkaW8oJy9ub3RpZmljYXRpb24ubXAzJykucGxheSgpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmIChOb3RpZmljYXRpb24ucGVybWlzc2lvbiA9PSAnZ3JhbnRlZCcpIHtcclxuICAgICAgICAgICAgbmV3IE5vdGlmaWNhdGlvbignTm92byBkZXNhZmlvIPCfjoknLCB7IFxyXG4gICAgICAgICAgICAgICAgYm9keTogYFZhbGVuZG8gJHtjaGFsbGVuZ2UuYW1vdW50fXhwYFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiByZXNldENoYWxsZW5nZSgpe1xyXG4gICAgICAgIHNldEFjdGl2ZUNoYWxsZW5nZShudWxsKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjb21wbGV0ZUNoYWxsZW5nZSgpe1xyXG4gICAgICAgIGlmICghYWN0aXZlQ2hhbGxlbmdlKSB7IFxyXG4gICAgICAgICAgICByZXR1cm47IFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3Qge2Ftb3VudH0gPSBhY3RpdmVDaGFsbGVuZ2U7XHJcblxyXG4gICAgICAgIGxldCBmaW5hbEV4cGVyaWVuY2UgPSBjdXJyZW50RXhwZXJpZW5jZSArIGFtb3VudDtcclxuXHJcbiAgICAgICAgaWYgKGZpbmFsRXhwZXJpZW5jZSA+PSBleHBlcmllbmNlVG9OZXh0TGV2ZWwpe1xyXG4gICAgICAgICAgICBmaW5hbEV4cGVyaWVuY2UgPSBmaW5hbEV4cGVyaWVuY2UgLWV4cGVyaWVuY2VUb05leHRMZXZlbDtcclxuICAgICAgICAgICAgbGV2ZWxVcCgpO1xyXG4gICAgICAgIH0gIFxyXG4gICAgICAgIFxyXG4gICAgICAgIHNldEN1cnJlbnRFeHBlcmllbmNlKGZpbmFsRXhwZXJpZW5jZSk7XHJcbiAgICAgICAgc2V0QWN0aXZlQ2hhbGxlbmdlKG51bGwpO1xyXG4gICAgICAgIHNldENoYWxsZW5nZXNDb21wbGV0ZWQoY2hhbGxlbmdlc0NvbXBsZXRlZCsxKTtcclxuICAgIH1cclxuXHJcbiAgIHJldHVybiAoXHJcbiAgICA8Q2hhbGxlbmdlc0NvbnRleHQuUHJvdmlkZXIgXHJcbiAgICB2YWx1ZT17e1xyXG4gICAgICAgIGxldmVsLCBcclxuICAgICAgICBjdXJyZW50RXhwZXJpZW5jZSwgXHJcbiAgICAgICAgZXhwZXJpZW5jZVRvTmV4dExldmVsLFxyXG4gICAgICAgIGNoYWxsZW5nZXNDb21wbGV0ZWQsIFxyXG4gICAgICAgIGxldmVsVXAsXHJcbiAgICAgICAgc3RhcnROZXdDaGFsbGVuZ2UsXHJcbiAgICAgICAgYWN0aXZlQ2hhbGxlbmdlLFxyXG4gICAgICAgIHJlc2V0Q2hhbGxlbmdlLFxyXG4gICAgICAgIGNvbXBsZXRlQ2hhbGxlbmdlLFxyXG4gICAgICAgICB9fT5cclxuICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L0NoYWxsZW5nZXNDb250ZXh0LlByb3ZpZGVyPlxyXG4gICApIFxyXG59IFxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==
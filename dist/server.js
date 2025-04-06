/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _routesConfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./routesConfig */ "./src/routesConfig.js");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Header */ "./src/components/Header.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _store_actionCreators_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./store/actionCreators/auth */ "./src/store/actionCreators/auth.js");







// import { getStore } from './store'
// const store = getStore()

// 在 App 中解构 store 属性即可
function App(_ref) {
  var store = _ref.store;
  // console.log('🚀 ~ App ~ store:', store)
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_redux__WEBPACK_IMPORTED_MODULE_4__.Provider, {
    store: store
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Header__WEBPACK_IMPORTED_MODULE_3__["default"], null), (0,react_router_dom__WEBPACK_IMPORTED_MODULE_1__.useRoutes)(_routesConfig__WEBPACK_IMPORTED_MODULE_2__["default"]));
}
App.loadData = function (store) {
  return store.dispatch(_store_actionCreators_auth__WEBPACK_IMPORTED_MODULE_5__["default"].validate());
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);

/***/ }),

/***/ "./src/client/request.js":
/*!*******************************!*\
  !*** ./src/client/request.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

var request = axios__WEBPACK_IMPORTED_MODULE_0___default().create({
  baseURL: '/'
  // baseURL: 'http://localhost:3007/',
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (request);

/***/ }),

/***/ "./src/components/Header.js":
/*!**********************************!*\
  !*** ./src/components/Header.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);


function Header() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: "/"
  }, "Home")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: "/counter"
  }, "Counter")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: "/user/add"
  }, "\u6DFB\u52A0\u7528\u6237")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: "/user/list"
  }, "\u7528\u6237\u5217\u8868")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: "/login"
  }, "login")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: "/logout"
  }, "logout")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: "/profile"
  }, "profile")));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);

/***/ }),

/***/ "./src/routes/Counter.js":
/*!*******************************!*\
  !*** ./src/routes/Counter.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _store_actionCreators_counter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/store/actionCreators/counter */ "./src/store/actionCreators/counter.js");



function Counter() {
  // const [count, setCount] = useState(0)
  var number = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
    return state.counter.number;
  });
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  var increment = function increment() {
    return dispatch(_store_actionCreators_counter__WEBPACK_IMPORTED_MODULE_2__["default"].add());
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "You clicked ", number, " times"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: function onClick() {
      return increment();
    }
  }, "Click me"));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Counter);

/***/ }),

/***/ "./src/routes/Home.js":
/*!****************************!*\
  !*** ./src/routes/Home.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function Home() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "Home"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Home Page"));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);

/***/ }),

/***/ "./src/routes/Login.js":
/*!*****************************!*\
  !*** ./src/routes/Login.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _store_actionCreators_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/store/actionCreators/auth */ "./src/store/actionCreators/auth.js");
// 登录组件



function Login() {
  var nameRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)('');
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    var name = nameRef.current.value;
    var user = {
      name: name
    };
    // 派发
    dispatch(_store_actionCreators_auth__WEBPACK_IMPORTED_MODULE_2__["default"].login(user));
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
    onSubmit: handleSubmit
  }, "\u7528\u6237\u540D", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    ref: nameRef
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "submit"
  }));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Login);

/***/ }),

/***/ "./src/routes/Logout.js":
/*!******************************!*\
  !*** ./src/routes/Logout.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _store_actionCreators_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/store/actionCreators/auth */ "./src/store/actionCreators/auth.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);



function Logout() {
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("button", {
    onClick: function onClick() {
      dispatch(_store_actionCreators_auth__WEBPACK_IMPORTED_MODULE_0__["default"].logout());
    }
  }, "\u9000\u51FA"));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Logout);

/***/ }),

/***/ "./src/routes/Profile.js":
/*!*******************************!*\
  !*** ./src/routes/Profile.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);



function Profile() {
  var user = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
    return state.auth.user;
  });
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_2__.useNavigate)();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (!user) {
      navigate('/login');
    }
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "\u5F53\u524D\u767B\u5F55\u7528\u6237"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "name: ", user && user.name));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Profile);

/***/ }),

/***/ "./src/routes/User.js":
/*!****************************!*\
  !*** ./src/routes/User.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);


function User() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: "/user/add"
  }, "\u6DFB\u52A0\u7528\u6237")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: "/user/list"
  }, "\u7528\u6237\u5217\u8868"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Outlet, null));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (User);

/***/ }),

/***/ "./src/routes/UserAdd.js":
/*!*******************************!*\
  !*** ./src/routes/UserAdd.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _store_action_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/store/action-types */ "./src/store/action-types.js");
/* harmony import */ var _store_actionCreators_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/store/actionCreators/user */ "./src/store/actionCreators/user.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_4__);





function UserAdd() {
  var nameRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_4__.useNavigate)();
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();
  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    var name = nameRef.current.value;
    console.log(name);
    // 添加用户
    dispatch(_store_actionCreators_user__WEBPACK_IMPORTED_MODULE_1__["default"].addUser({
      id: Date.now(),
      name: name
    }));
    // 跳转到用户列表页
    navigate('/user/list');
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("form", null, "\u7528\u6237\u540D\uFF1A", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("input", {
    ref: nameRef
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("button", {
    onClick: handleSubmit
  }, "\u6DFB\u52A0")));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserAdd);

/***/ }),

/***/ "./src/routes/UserList.js":
/*!********************************!*\
  !*** ./src/routes/UserList.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _store_actionCreators_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/store/actionCreators/user */ "./src/store/actionCreators/user.js");



function UserList() {
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  var list = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
    return state.user.list;
  });
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (!list.length) {
      dispatch(_store_actionCreators_user__WEBPACK_IMPORTED_MODULE_2__["default"].getUserList());
    }
  }, [list.length, dispatch]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null, list.map(function (user) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
      key: user.id
    }, user.name);
  }));
}

// 当有路由组件在服务端获取数据的方法
UserList.loadData = function (store) {
  // console.log('🚀 ~ store:', store)
  // 等待异步操作完成, 就可以用仓库的数据进行渲染
  return store.dispatch(_store_actionCreators_user__WEBPACK_IMPORTED_MODULE_2__["default"].getUserList());
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserList);

/***/ }),

/***/ "./src/routesConfig.js":
/*!*****************************!*\
  !*** ./src/routesConfig.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _routes_Home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./routes/Home */ "./src/routes/Home.js");
/* harmony import */ var _routes_Counter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./routes/Counter */ "./src/routes/Counter.js");
/* harmony import */ var _routes_User__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./routes/User */ "./src/routes/User.js");
/* harmony import */ var _routes_UserAdd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./routes/UserAdd */ "./src/routes/UserAdd.js");
/* harmony import */ var _routes_UserList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./routes/UserList */ "./src/routes/UserList.js");
/* harmony import */ var _routes_Login__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./routes/Login */ "./src/routes/Login.js");
/* harmony import */ var _routes_Logout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./routes/Logout */ "./src/routes/Logout.js");
/* harmony import */ var _routes_Profile__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./routes/Profile */ "./src/routes/Profile.js");









/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([{
  path: '/',
  index: true,
  element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_routes_Home__WEBPACK_IMPORTED_MODULE_1__["default"], null)
}, {
  path: '/counter',
  element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_routes_Counter__WEBPACK_IMPORTED_MODULE_2__["default"], null)
}, {
  path: '/user',
  element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_routes_User__WEBPACK_IMPORTED_MODULE_3__["default"], null),
  children: [{
    path: '/user/add',
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_routes_UserAdd__WEBPACK_IMPORTED_MODULE_4__["default"], null)
  }, {
    path: '/user/list',
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_routes_UserList__WEBPACK_IMPORTED_MODULE_5__["default"], null)
  }]
}, {
  path: '/login',
  element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_routes_Login__WEBPACK_IMPORTED_MODULE_6__["default"], null)
}, {
  path: '/logout',
  element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_routes_Logout__WEBPACK_IMPORTED_MODULE_7__["default"], null)
}, {
  path: '/profile',
  element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_routes_Profile__WEBPACK_IMPORTED_MODULE_8__["default"], null)
}]);

/***/ }),

/***/ "./src/server/request.js":
/*!*******************************!*\
  !*** ./src/server/request.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

var request = function request(req) {
  var cookie = req.get('cookie') || '';
  return axios__WEBPACK_IMPORTED_MODULE_0___default().create({
    baseURL: 'http://localhost:3007',
    headers: {
      cookie: cookie
    }
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (request);

/***/ }),

/***/ "./src/store/action-types.js":
/*!***********************************!*\
  !*** ./src/store/action-types.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ADD: () => (/* binding */ ADD),
/* harmony export */   ADD_USER: () => (/* binding */ ADD_USER),
/* harmony export */   LOGIN_ERROR: () => (/* binding */ LOGIN_ERROR),
/* harmony export */   LOGIN_SUCCESS: () => (/* binding */ LOGIN_SUCCESS),
/* harmony export */   LOGOUT_SUCCESS: () => (/* binding */ LOGOUT_SUCCESS),
/* harmony export */   SET_USER_LIST: () => (/* binding */ SET_USER_LIST)
/* harmony export */ });
var ADD = 'ADD';

// 调用接口返回用户列表, 并吧用户列表的数据放置到仓库中
var SET_USER_LIST = 'SET_USER_LIST';
var ADD_USER = 'ADD_USER';

// 登录相关
var LOGIN_SUCCESS = 'LOGIN_SUCCESS';
var LOGIN_ERROR = 'LOGIN_ERROR';
var LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';

/***/ }),

/***/ "./src/store/actionCreators/auth.js":
/*!******************************************!*\
  !*** ./src/store/actionCreators/auth.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var redux_first_history__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-first-history */ "redux-first-history");
/* harmony import */ var redux_first_history__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_first_history__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _action_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../action-types */ "./src/store/action-types.js");


var actionCreators = {
  login: function login(user) {
    return function (dispatch, getState, request) {
      return request.post('/api/login', user).then(function (res) {
        var _res$data = res.data,
          data = _res$data.data,
          success = _res$data.success,
          error = _res$data.error;
        if (success) {
          dispatch({
            type: _action_types__WEBPACK_IMPORTED_MODULE_1__.LOGIN_SUCCESS,
            payload: data // 用户列表的数组
          });
          dispatch((0,redux_first_history__WEBPACK_IMPORTED_MODULE_0__.push)('/profile'));
        } else {
          dispatch({
            type: _action_types__WEBPACK_IMPORTED_MODULE_1__.LOGIN_ERROR,
            payload: error // 失败原因
          });
        }
      });
    };
  },
  logout: function logout() {
    return function (dispatch, getState, request) {
      return request.post('/api/logout').then(function (res) {
        var _res$data2 = res.data,
          data = _res$data2.data,
          success = _res$data2.success,
          error = _res$data2.error;
        console.log('🚀 ~ returnrequest.post ~ res.data:', res.data);
        if (success) {
          dispatch({
            type: _action_types__WEBPACK_IMPORTED_MODULE_1__.LOGOUT_SUCCESS,
            payload: data // 用户列表的数组
          });
          dispatch((0,redux_first_history__WEBPACK_IMPORTED_MODULE_0__.push)('/login'));
        }
      });
    };
  },
  validate: function validate() {
    return function (dispatch, getState, request) {
      return request.post('/api/validate').then(function (res) {
        var _res$data3 = res.data,
          data = _res$data3.data,
          success = _res$data3.success;
        if (success) {
          dispatch({
            type: _action_types__WEBPACK_IMPORTED_MODULE_1__.LOGIN_SUCCESS,
            payload: data // 用户列表的数组
          });
        }
      });
    };
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (actionCreators);

/***/ }),

/***/ "./src/store/actionCreators/counter.js":
/*!*********************************************!*\
  !*** ./src/store/actionCreators/counter.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _action_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../action-types */ "./src/store/action-types.js");

var actionCreators = {
  add: function add() {
    return {
      type: _action_types__WEBPACK_IMPORTED_MODULE_0__.ADD
    };
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (actionCreators);

/***/ }),

/***/ "./src/store/actionCreators/user.js":
/*!******************************************!*\
  !*** ./src/store/actionCreators/user.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _action_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../action-types */ "./src/store/action-types.js");
// import axios from 'axios'

var actionCreators = {
  getUserList: function getUserList() {
    return function (dispatch, getState, request) {
      return request.get('/api/users').then(function (res) {
        var data = res.data;
        console.log('🚀 ~ returnaxios.get ~ data:', data);
        dispatch({
          type: _action_types__WEBPACK_IMPORTED_MODULE_0__.SET_USER_LIST,
          payload: data // 用户列表的数组
        });
      })["catch"](function (err) {
        console.log('🚀 ~ returnaxios.get ~ err:', err);
      });
    };
  },
  addUser: function addUser(user) {
    console.log('🚀 ~ addUser ~ user:', user);
    return {
      type: _action_types__WEBPACK_IMPORTED_MODULE_0__.ADD_USER,
      payload: user // 新增的用户对象
    };
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (actionCreators);

/***/ }),

/***/ "./src/store/index.js":
/*!****************************!*\
  !*** ./src/store/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getClientStore: () => (/* binding */ getClientStore),
/* harmony export */   getServerStore: () => (/* binding */ getServerStore)
/* harmony export */ });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-thunk */ "redux-thunk");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_promise__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-promise */ "redux-promise");
/* harmony import */ var redux_promise__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_promise__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-logger */ "redux-logger");
/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_logger__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _client_request__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/client/request */ "./src/client/request.js");
/* harmony import */ var _server_request__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/server/request */ "./src/server/request.js");
/* harmony import */ var history__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! history */ "history");
/* harmony import */ var history__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(history__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var redux_first_history__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! redux-first-history */ "redux-first-history");
/* harmony import */ var redux_first_history__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(redux_first_history__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _reducers_counter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./reducers/counter */ "./src/store/reducers/counter.js");
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./reducers/user */ "./src/store/reducers/user.js");
/* harmony import */ var _reducers_auth__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./reducers/auth */ "./src/store/reducers/auth.js");









// import { createReduxHistory, routerMiddleware, routerReducer } from '@/history'





// const reducers = {
//   counter,
//   user,
//   auth,
//   router: routerReducer,
// }
// const combineReducer = combineReducers(reducers)
// const logger = createLogger()

function getClientStore() {
  // const store = applyMiddleware(
  //   thunk.withExtraArgument(clientRequest),
  //   promise,
  //   logger,
  // )(createStore)(combineReducer)

  // 改用服务端的初始值, 将值挂载到 window 全局
  var initialState = window.context.state;

  // history
  var _createReduxHistoryCo = (0,redux_first_history__WEBPACK_IMPORTED_MODULE_7__.createReduxHistoryContext)({
      history: (0,history__WEBPACK_IMPORTED_MODULE_6__.createBrowserHistory)()
    }),
    createReduxHistory = _createReduxHistoryCo.createReduxHistory,
    routerMiddleware = _createReduxHistoryCo.routerMiddleware,
    routerReducer = _createReduxHistoryCo.routerReducer;
  var reducers = {
    counter: _reducers_counter__WEBPACK_IMPORTED_MODULE_8__["default"],
    user: _reducers_user__WEBPACK_IMPORTED_MODULE_9__["default"],
    auth: _reducers_auth__WEBPACK_IMPORTED_MODULE_10__["default"],
    router: routerReducer
  };
  var combineReducer = (0,redux__WEBPACK_IMPORTED_MODULE_0__.combineReducers)(reducers);
  var logger = (0,redux_logger__WEBPACK_IMPORTED_MODULE_3__.createLogger)();
  var store = (0,redux__WEBPACK_IMPORTED_MODULE_0__.applyMiddleware)(redux_thunk__WEBPACK_IMPORTED_MODULE_1___default().withExtraArgument(_client_request__WEBPACK_IMPORTED_MODULE_4__["default"]), (redux_promise__WEBPACK_IMPORTED_MODULE_2___default()), routerMiddleware, logger)(redux__WEBPACK_IMPORTED_MODULE_0__.createStore)(combineReducer, initialState);
  var history = createReduxHistory(store);
  return {
    store: store,
    history: history
  };
}
function getServerStore(req) {
  var _createReduxHistoryCo2 = (0,redux_first_history__WEBPACK_IMPORTED_MODULE_7__.createReduxHistoryContext)({
      history: (0,history__WEBPACK_IMPORTED_MODULE_6__.createMemoryHistory)()
    }),
    createReduxHistory = _createReduxHistoryCo2.createReduxHistory,
    routerMiddleware = _createReduxHistoryCo2.routerMiddleware,
    routerReducer = _createReduxHistoryCo2.routerReducer;
  var reducers = {
    counter: _reducers_counter__WEBPACK_IMPORTED_MODULE_8__["default"],
    user: _reducers_user__WEBPACK_IMPORTED_MODULE_9__["default"],
    auth: _reducers_auth__WEBPACK_IMPORTED_MODULE_10__["default"],
    router: routerReducer
  };
  var combineReducer = (0,redux__WEBPACK_IMPORTED_MODULE_0__.combineReducers)(reducers);
  var logger = (0,redux_logger__WEBPACK_IMPORTED_MODULE_3__.createLogger)();
  var store = (0,redux__WEBPACK_IMPORTED_MODULE_0__.applyMiddleware)(redux_thunk__WEBPACK_IMPORTED_MODULE_1___default().withExtraArgument((0,_server_request__WEBPACK_IMPORTED_MODULE_5__["default"])(req)), (redux_promise__WEBPACK_IMPORTED_MODULE_2___default()), routerMiddleware, logger)(redux__WEBPACK_IMPORTED_MODULE_0__.createStore)(combineReducer);
  var history = createReduxHistory(store);
  return {
    store: store,
    history: history
  };
}

/***/ }),

/***/ "./src/store/reducers/auth.js":
/*!************************************!*\
  !*** ./src/store/reducers/auth.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _action_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../action-types */ "./src/store/action-types.js");

var initiateState = {
  user: null,
  error: null
};
function auth() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initiateState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  switch (action.type) {
    case _action_types__WEBPACK_IMPORTED_MODULE_0__.LOGIN_SUCCESS:
      return {
        user: action.payload,
        error: null
      };
    case _action_types__WEBPACK_IMPORTED_MODULE_0__.LOGIN_ERROR:
      return {
        user: null,
        error: action.payload
      };
    case _action_types__WEBPACK_IMPORTED_MODULE_0__.LOGOUT_SUCCESS:
      return {
        user: null,
        error: null
      };
    default:
      return state;
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (auth);

/***/ }),

/***/ "./src/store/reducers/counter.js":
/*!***************************************!*\
  !*** ./src/store/reducers/counter.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _action_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../action-types */ "./src/store/action-types.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

var initiateState = {
  number: 0
};
function counter() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initiateState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  switch (action.type) {
    case _action_types__WEBPACK_IMPORTED_MODULE_0__.ADD:
      return _objectSpread(_objectSpread({}, state), {}, {
        number: state.number + 1
      });
    default:
      return state;
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (counter);

/***/ }),

/***/ "./src/store/reducers/user.js":
/*!************************************!*\
  !*** ./src/store/reducers/user.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _action_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../action-types */ "./src/store/action-types.js");
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }

var initiateState = {
  list: []
};
function user() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initiateState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  // console.log('🚀 ~ user ~ state:', state)
  switch (action.type) {
    case _action_types__WEBPACK_IMPORTED_MODULE_0__.SET_USER_LIST:
      return {
        list: action.payload
      };
    case _action_types__WEBPACK_IMPORTED_MODULE_0__.ADD_USER:
      return {
        list: [].concat(_toConsumableArray(state.list), [action.payload])
      };
    default:
      return state;
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (user);

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");

/***/ }),

/***/ "express-http-proxy":
/*!*************************************!*\
  !*** external "express-http-proxy" ***!
  \*************************************/
/***/ ((module) => {

module.exports = require("express-http-proxy");

/***/ }),

/***/ "history":
/*!**************************!*\
  !*** external "history" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("history");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("react-dom/server");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("react-router-dom");

/***/ }),

/***/ "react-router-dom/server":
/*!******************************************!*\
  !*** external "react-router-dom/server" ***!
  \******************************************/
/***/ ((module) => {

module.exports = require("react-router-dom/server");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/***/ ((module) => {

module.exports = require("redux");

/***/ }),

/***/ "redux-first-history":
/*!**************************************!*\
  !*** external "redux-first-history" ***!
  \**************************************/
/***/ ((module) => {

module.exports = require("redux-first-history");

/***/ }),

/***/ "redux-logger":
/*!*******************************!*\
  !*** external "redux-logger" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("redux-logger");

/***/ }),

/***/ "redux-promise":
/*!********************************!*\
  !*** external "redux-promise" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("redux-promise");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("redux-thunk");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!*****************************!*\
  !*** ./src/server/index.js ***!
  \*****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/server */ "react-dom/server");
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/App */ "./src/App.js");
/* harmony import */ var react_router_dom_server__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom/server */ "react-router-dom/server");
/* harmony import */ var react_router_dom_server__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router_dom_server__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _routesConfig__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../routesConfig */ "./src/routesConfig.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../store */ "./src/store/index.js");






var express = __webpack_require__(/*! express */ "express");
var path = __webpack_require__(/*! path */ "path");
var proxy = __webpack_require__(/*! express-http-proxy */ "express-http-proxy");
var app = express();
app.use('/api', proxy('http://localhost:3007', {
  proxyReqPathResolver: function proxyReqPathResolver(req) {
    console.log('🚀 代理路径:', req.url);
    console.log('🚀 请求路径:', req.originalUrl);
    return req.originalUrl; // 或者 return req.url.replace(/^\/api/, '')
  },
  onError: function onError(err, req, res) {
    console.error('Proxy Error:', err);
    res.status(500).send('Proxy Error');
  }
}));

// 处理静态资源
app.use(express["static"](path.resolve(__dirname, '../public')));

// 处理 store

app.get('*', function (req, res) {
  var _getServerStore = (0,_store__WEBPACK_IMPORTED_MODULE_6__.getServerStore)(req),
    store = _getServerStore.store;
  console.log('🚀 ~ app.get ~ store:', store);
  var routeMatches = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_5__.matchRoutes)(_routesConfig__WEBPACK_IMPORTED_MODULE_4__["default"], {
    pathname: req.url
  });
  if (routeMatches) {
    // console.log('🚀 ~ app.get ~ routeMatches:', routeMatches)
    var loadDataPromises = routeMatches.map(function (match) {
      var _match$route$element$;
      var loadData = (_match$route$element$ = match.route.element.type) === null || _match$route$element$ === void 0 ? void 0 : _match$route$element$.loadData;
      if (typeof loadData !== 'function') return Promise.resolve();
      // console.log('🚀 ~ loadDataPromises ~ loadData:', loadData)

      return loadData(store).then(function (data) {
        return data;
      }, function (error) {
        return error;
      });
    }).concat(_App__WEBPACK_IMPORTED_MODULE_2__["default"].loadData && _App__WEBPACK_IMPORTED_MODULE_2__["default"].loadData(store)).filter(Boolean); // 过滤掉 undefined 的 Promise

    Promise.all(loadDataPromises).then(function (data) {
      var store222 = store.getState();
      console.log('🚀 ~ app.get ~ store222 ______--:', store222);
      var html = (0,react_dom_server__WEBPACK_IMPORTED_MODULE_1__.renderToString)(/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom_server__WEBPACK_IMPORTED_MODULE_3__.StaticRouter, {
        location: req.url
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_App__WEBPACK_IMPORTED_MODULE_2__["default"], {
        store: store
      })));
      res.send("\n          <!DOCTYPE html>\n          <html lang=\"en\">\n            <head>\n              <meta charset=\"UTF-8\" />\n              <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n              <title>SSR</title>\n            </head>\n            <body>\n              <div id=\"root\">".concat(html, "</div>\n              <script>\n                // \u5BA2\u6237\u7AEF\u5168\u5C40\u6302\u8F7D\u670D\u52A1\u7AEF\u7684 store\n                var context = {\n                  store: ").concat(JSON.stringify(store.getState()), "\n                }\n              </script>\n              <script src=\"/client.js\"></script>\n            </body>\n          </html>\n        "));
    }, function (error) {
      console.log('失败,', error);
    });
  }
});
app.listen(3000, function () {
  console.log('server is running at http://localhost:3000');
});
})();

/******/ })()
;
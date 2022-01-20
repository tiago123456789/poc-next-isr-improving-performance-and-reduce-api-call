"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 973:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Component),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

;// CONCATENATED MODULE: external "react/jsx-runtime"
const jsx_runtime_namespaceObject = require("react/jsx-runtime");
;// CONCATENATED MODULE: external "axios"
const external_axios_namespaceObject = require("axios");
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_namespaceObject);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
;// CONCATENATED MODULE: ./pages/index.js




function Component(props) {
    const { 0: products , 1: setProducts  } = (0,external_react_.useState)(props.products);
    return(/*#__PURE__*/ jsx_runtime_namespaceObject.jsx("div", {
        className: "container",
        children: products.map((product)=>{
            return(/*#__PURE__*/ (0,jsx_runtime_namespaceObject.jsxs)("div", {
                className: "card card-default p-2 mb-1",
                children: [
                    /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("h3", {
                        children: product.title
                    }),
                    /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("p", {
                        children: product.description
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_namespaceObject.jsxs)("button", {
                        className: "btn btn-primary",
                        children: [
                            "R$ ",
                            product.price
                        ]
                    })
                ]
            }));
        })
    }));
};
async function getStaticProps() {
    const response = await external_axios_default().get("http://localhost:5000/products");
    return {
        props: {
            products: response.data
        },
        revalidate: 120
    };
}


/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(973));
module.exports = __webpack_exports__;

})();
"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 837:
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
;// CONCATENATED MODULE: ./components/NotFound.js


/* harmony default export */ const NotFound = (({ isNotFound  })=>{
    if (!isNotFound) return false;
    return(/*#__PURE__*/ jsx_runtime_namespaceObject.jsx(jsx_runtime_namespaceObject.Fragment, {
        children: "Event don't available!!!!"
    }));
});

;// CONCATENATED MODULE: ./components/Preloader.js


/* harmony default export */ const Preloader = (({ isShow  })=>{
    if (!isShow) return false;
    return(/*#__PURE__*/ jsx_runtime_namespaceObject.jsx(jsx_runtime_namespaceObject.Fragment, {
        children: "Loading...."
    }));
});

;// CONCATENATED MODULE: ./components/Button.js


/* harmony default export */ const Button = (({ button  })=>{
    return(/*#__PURE__*/ jsx_runtime_namespaceObject.jsx("button", {
        style: {
            padding: "10px",
            marginLeft: "5px",
            marginTop: "10px"
        },
        children: button
    }));
});

;// CONCATENATED MODULE: ./components/Section.js



/* harmony default export */ const Section = (({ section  })=>{
    if (!section) return false;
    return(/*#__PURE__*/ (0,jsx_runtime_namespaceObject.jsxs)("div", {
        style: {
            "background": section.background,
            width: "100%",
            height: "200px",
            textAlign: "center",
            paddingTop: "15px"
        },
        children: [
            section.text,
            /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("br", {
            }),
            section.buttons.length > 0 && section.buttons.map((button)=>/*#__PURE__*/ jsx_runtime_namespaceObject.jsx(Button, {
                    button: button
                })
            )
        ]
    }));
});

;// CONCATENATED MODULE: ./pages/index.js






function Component(props) {
    const { 0: event , 1: setEvent  } = (0,external_react_.useState)(null);
    const { 0: isNotFound , 1: setIsNotFound  } = (0,external_react_.useState)(false);
    (0,external_react_.useEffect)(()=>{
        const site = location.origin.replace(/(https:\/\/|http:\/\/)/g, "").split(":")[0];
        if (props.events[site]) {
            setEvent(props.events[site]);
        } else {
            setIsNotFound(true);
        }
    }, []);
    return(/*#__PURE__*/ (0,jsx_runtime_namespaceObject.jsxs)(jsx_runtime_namespaceObject.Fragment, {
        children: [
            event && !isNotFound && /*#__PURE__*/ (0,jsx_runtime_namespaceObject.jsxs)(jsx_runtime_namespaceObject.Fragment, {
                children: [
                    /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("img", {
                        src: event.logo,
                        style: {
                            width: "100%",
                            height: "300px"
                        }
                    }),
                    /*#__PURE__*/ jsx_runtime_namespaceObject.jsx(Section, {
                        section: event.section1
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_namespaceObject.jsx(Preloader, {
                isShow: !event && !isNotFound
            }),
            /*#__PURE__*/ jsx_runtime_namespaceObject.jsx(NotFound, {
                isNotFound: isNotFound
            })
        ]
    }));
};
async function getStaticProps() {
    const events = await external_axios_default().get("http://localhost:5000/events");
    return {
        props: {
            events: events.data
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
var __webpack_exports__ = (__webpack_exec__(837));
module.exports = __webpack_exports__;

})();
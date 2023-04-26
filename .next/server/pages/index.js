(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 851:
/***/ ((module) => {

// Exports
module.exports = {
	"skill": "SkillProfile_skill__sMeY3",
	"influence": "SkillProfile_influence__ncFEw",
	"bike": "SkillProfile_bike__jDDcf"
};


/***/ }),

/***/ 498:
/***/ ((module) => {

// Exports
module.exports = {
	"master": "styles_master__eAlhv",
	"button": "styles_button__BZg0Z"
};


/***/ }),

/***/ 937:
/***/ ((module) => {

// Exports
module.exports = {
	"main": "navbar_main__Cx8Do",
	"navbar": "navbar_navbar__8tj4O",
	"menu": "navbar_menu__Tnmyf",
	"header": "navbar_header__Z7TZq",
	"other": "navbar_other__ir4II",
	"input": "navbar_input__5vYwk",
	"btn": "navbar_btn__W8gTb",
	"imSearch": "navbar_imSearch__Hdnjo",
	"info": "navbar_info__A36uz"
};


/***/ }),

/***/ 782:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "userprofile_container__xOgjX",
	"hexagon": "userprofile_hexagon__bzywW",
	"img": "userprofile_img__Iji9d",
	"name": "userprofile_name__ASUhn"
};


/***/ }),

/***/ 681:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_NavBar)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
// EXTERNAL MODULE: ./src/styles/navbar.module.css
var navbar_module = __webpack_require__(937);
var navbar_module_default = /*#__PURE__*/__webpack_require__.n(navbar_module);
;// CONCATENATED MODULE: external "react-icons/im"
const im_namespaceObject = require("react-icons/im");
// EXTERNAL MODULE: external "react-icons/Fi"
var Fi_ = __webpack_require__(253);
;// CONCATENATED MODULE: external "next/router"
const router_namespaceObject = require("next/router");
;// CONCATENATED MODULE: ./src/components/NavBar.tsx







const NavBar = ({ name , onSearch  })=>{
    const [inputField, inputFieldHandler] = (0,external_react_.useState)("");
    const router = (0,router_namespaceObject.useRouter)();
    const searchHandler = (e)=>{
        inputFieldHandler(e.target.value);
    };
    const buttonHandler = (e)=>{
        e.preventDefault();
        router.push(`/?input=${encodeURIComponent(inputField)}`);
        onSearch(inputField);
        inputFieldHandler;
    };
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/ jsx_runtime_.jsx("main", {
            className: (navbar_module_default()).main,
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (navbar_module_default()).navbar,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(Fi_.FiMenu, {
                            className: (navbar_module_default()).menu
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h1", {
                            className: (navbar_module_default()).header,
                            children: [
                                "torre",
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: (navbar_module_default()).other,
                                    children: ".co"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                type: "text",
                                name: "search",
                                value: inputField,
                                onChange: searchHandler,
                                id: (navbar_module_default()).input,
                                title: "input your search"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                onClick: buttonHandler,
                                className: (navbar_module_default()).btn,
                                children: /*#__PURE__*/ jsx_runtime_.jsx(im_namespaceObject.ImSearch, {
                                    className: (navbar_module_default()).imSearch
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                            id: (navbar_module_default()).info,
                            children: "SIGN IN"
                        })
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const components_NavBar = (NavBar);


/***/ }),

/***/ 329:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_SkillProfile)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
// EXTERNAL MODULE: ./src/styles/SkillProfile.module.css
var SkillProfile_module = __webpack_require__(851);
var SkillProfile_module_default = /*#__PURE__*/__webpack_require__.n(SkillProfile_module);
;// CONCATENATED MODULE: external "react-icons/bi"
const bi_namespaceObject = require("react-icons/bi");
;// CONCATENATED MODULE: ./src/components/SkillProfile.tsx




const SkillProfile = ({ name , header  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("main", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                    className: (SkillProfile_module_default()).skill,
                    children: header
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (SkillProfile_module_default()).influence,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h3", {
                    id: (SkillProfile_module_default()).influence,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(bi_namespaceObject.BiCycling, {
                            id: (SkillProfile_module_default()).bike
                        }),
                        " ",
                        name,
                        ":"
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const components_SkillProfile = (SkillProfile);


/***/ }),

/***/ 203:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_userprofile_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(782);
/* harmony import */ var _styles_userprofile_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_userprofile_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_icons_Fi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(253);
/* harmony import */ var react_icons_Fi__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_Fi__WEBPACK_IMPORTED_MODULE_2__);




const UserProfile = ({ data , image  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("main", {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: (_styles_userprofile_module_css__WEBPACK_IMPORTED_MODULE_3___default().container),
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_Fi__WEBPACK_IMPORTED_MODULE_2__.FiHexagon, {
                    className: (_styles_userprofile_module_css__WEBPACK_IMPORTED_MODULE_3___default().hexagon)
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                    src: image !== undefined ? image : "User doesn't exist",
                    alt: "profile-pic",
                    width: 80,
                    height: 80,
                    id: (_styles_userprofile_module_css__WEBPACK_IMPORTED_MODULE_3___default().img)
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("center", {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                            className: (_styles_userprofile_module_css__WEBPACK_IMPORTED_MODULE_3___default().name),
                            children: data
                        })
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserProfile);


/***/ }),

/***/ 85:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_NavBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(681);
/* harmony import */ var _components_UserProfile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(203);
/* harmony import */ var _components_SkillProfile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(329);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(648);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _styles_index_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(498);
/* harmony import */ var _styles_index_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_index_module_css__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_4__]);
axios__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







const Home = ({ proficiency , master , personName , personPicture , valueTwo  })=>{
    const [value, getValue] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)("");
    const searchFunction = (inputValue)=>{
        getValue(inputValue);
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_NavBar__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                    name: "data",
                    onSearch: searchFunction
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_UserProfile__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                    data: personName,
                    image: personPicture
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_SkillProfile__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                    name: "Master/Influencer",
                    header: "Skills and Interest:"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    children: valueTwo
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_styles_index_module_css__WEBPACK_IMPORTED_MODULE_6___default().master),
                        children: master.map((element)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    className: (_styles_index_module_css__WEBPACK_IMPORTED_MODULE_6___default().button),
                                    children: element.name !== undefined ? element.name : "Username doesn't exist"
                                })
                            }, element.id))
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_SkillProfile__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                    name: "Proficiency",
                    header: ""
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_styles_index_module_css__WEBPACK_IMPORTED_MODULE_6___default().master),
                        children: proficiency.map((element)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    className: (_styles_index_module_css__WEBPACK_IMPORTED_MODULE_6___default().button),
                                    children: element.name !== undefined ? element.name : "Username doesn't exist"
                                })
                            }, element.id))
                    })
                })
            ]
        })
    });
};
async function getServerSideProps(context) {
    const inputValue = context.query.input || "";
    console.log(inputValue);
    let person;
    let proficiency;
    let master;
    let personData;
    let personName;
    let personPicture;
    let valueTwo = "";
    try {
        if (inputValue === undefined) {
            return;
        } else {
            const response = await axios__WEBPACK_IMPORTED_MODULE_4__["default"].get(`https://torre.bio/api/bios/${inputValue}`);
            if (response === undefined) {
                const data = {
                    message: "No value gotten",
                    message1: "Username Error",
                    message3: "Username does not exist"
                };
                person = Object.values(data);
            } else {
                const data = await response.data;
                person = Object.values(data)[2];
                personData = Object.values(data)[0];
                proficiency = person.filter((element)=>{
                    return element.proficiency === "proficient";
                });
                master = person.filter((element)=>{
                    return element.proficiency === "expert";
                });
                personName = personData.name;
                personPicture = personData.picture;
                console.log(proficiency);
            }
        }
    } catch (err) {
        if (err) {
            return valueTwo = "Username doesn't exist, try again";
        }
    }
    return {
        props: {
            proficiency,
            master,
            personName,
            personPicture,
            valueTwo
        }
    };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 253:
/***/ ((module) => {

"use strict";
module.exports = require("react-icons/Fi");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 648:
/***/ ((module) => {

"use strict";
module.exports = import("axios");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(85));
module.exports = __webpack_exports__;

})();
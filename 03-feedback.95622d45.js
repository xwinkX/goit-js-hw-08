!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},o={},n=t.parcelRequired7c6;null==n&&((n=function(e){if(e in r)return r[e].exports;if(e in o){var t=o[e];delete o[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){o[e]=t},t.parcelRequired7c6=n);var a,l=n("dCfNN"),u="local-value",i={},d=document.querySelector(".feedback-form"),f=document.querySelector(".feedback-form textarea"),c=document.querySelector(".feedback-form input");d.addEventListener("submit",(function(e){e.preventDefault(),e.currentTarget.reset(),console.log(localStorage.getItem(u)),localStorage.removeItem(u)})),d.addEventListener("input",e(l)((function(e){i[e.target.name]=e.target.value,localStorage.setItem(u,JSON.stringify(i))}),500)),(a=JSON.parse(localStorage.getItem(u)))&&(c.value=a.email,f.value=a.message)}();
//# sourceMappingURL=03-feedback.95622d45.js.map
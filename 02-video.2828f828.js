!function(){var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function e(t,e,n,r){Object.defineProperty(t,e,{get:n,set:r,enumerable:!0,configurable:!0})}var n={},r={},i=t.parcelRequired7c6;null==i&&((i=function(t){if(t in n)return n[t].exports;if(t in r){var e=r[t];delete r[t];var i={id:t,exports:{}};return n[t]=i,e.call(i.exports,i,i.exports),i.exports}var o=new Error("Cannot find module '"+t+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(t,e){r[t]=e},t.parcelRequired7c6=i),i.register("dCfNN",(function(e,n){i("8TSCy");var r=i("kswSi"),o="Expected a function",u=/^\s+|\s+$/g,f=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,c=/^0o[0-7]+$/i,l=parseInt,d="object"==typeof t&&t&&t.Object===Object&&t,s="object"==typeof self&&self&&self.Object===Object&&self,p=d||s||Function("return this")(),v=Object.prototype.toString,y=Math.max,b=Math.min,g=function(){return p.Date.now()};function m(t,e,n){var r,i,u,f,a,c,l=0,d=!1,s=!1,p=!0;if("function"!=typeof t)throw new TypeError(o);function v(e){var n=r,o=i;return r=i=void 0,l=e,f=t.apply(o,n)}function m(t){return l=t,a=setTimeout(T,e),d?v(t):f}function O(t){var n=t-c;return void 0===c||n>=e||n<0||s&&t-l>=u}function T(){var t=g();if(O(t))return j(t);a=setTimeout(T,function(t){var n=e-(t-c);return s?b(n,u-(t-l)):n}(t))}function j(t){return a=void 0,p&&r?v(t):(r=i=void 0,f)}function h(){var t=g(),n=O(t);if(r=arguments,i=this,c=t,n){if(void 0===a)return m(c);if(s)return a=setTimeout(T,e),v(c)}return void 0===a&&(a=setTimeout(T,e)),f}return e=x(e)||0,w(n)&&(d=!!n.leading,u=(s="maxWait"in n)?y(x(n.maxWait)||0,e):u,p="trailing"in n?!!n.trailing:p),h.cancel=function(){void 0!==a&&clearTimeout(a),l=0,r=c=i=a=void 0},h.flush=function(){return void 0===a?f:j(g())},h}function w(t){var e=void 0===t?"undefined":r.default(t);return!!t&&("object"==e||"function"==e)}function x(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":r.default(t))||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==v.call(t)}(t))return NaN;if(w(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=w(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(u,"");var n=a.test(t);return n||c.test(t)?l(t.slice(2),n?2:8):f.test(t)?NaN:+t}e.exports=function(t,e,n){var r=!0,i=!0;if("function"!=typeof t)throw new TypeError(o);return w(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),m(t,e,{leading:r,maxWait:e,trailing:i})}})),i.register("8TSCy",(function(t,n){e(t.exports,"typeOf",(function(){return i("kswSi").default}));i("kswSi")})),i.register("kswSi",(function(t,n){function r(t){return t&&t.constructor===Symbol?"symbol":typeof t}e(t.exports,"default",(function(){return r}))}))}();
//# sourceMappingURL=02-video.2828f828.js.map

function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,u=/^0o[0-7]+$/i,a=parseInt,f="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=f||c||Function("return this")(),d=Object.prototype.toString,s=Math.max,v=Math.min,p=function(){return l.Date.now()};function m(e,t,n){var o,r,i,u,a,f,c=0,l=!1,d=!1,m=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(t){var n=o,i=r;return o=r=void 0,c=t,u=e.apply(i,n)}function j(e){return c=e,a=setTimeout(T,t),l?b(e):u}function S(e){var n=e-f;return void 0===f||n>=t||n<0||d&&e-c>=i}function T(){var e=p();if(S(e))return h(e);a=setTimeout(T,function(e){var n=t-(e-f);return d?v(n,i-(e-c)):n}(e))}function h(e){return a=void 0,m&&o?b(e):(o=r=void 0,u)}function w(){var e=p(),n=S(e);if(o=arguments,r=this,f=e,n){if(void 0===a)return j(f);if(d)return a=setTimeout(T,t),b(f)}return void 0===a&&(a=setTimeout(T,t)),u}return t=y(t)||0,g(n)&&(l=!!n.leading,i=(d="maxWait"in n)?s(y(n.maxWait)||0,t):i,m="trailing"in n?!!n.trailing:m),w.cancel=function(){void 0!==a&&clearTimeout(a),c=0,o=f=r=a=void 0},w.flush=function(){return void 0===a?u:h(p())},w}function g(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function y(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==d.call(e)}(e))return NaN;if(g(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=g(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var n=i.test(e);return n||u.test(e)?a(e.slice(2),n?2:8):r.test(e)?NaN:+e}t=function(e,t,n){var o=!0,r=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return g(n)&&(o="leading"in n?!!n.leading:o,r="trailing"in n?!!n.trailing:r),m(e,t,{leading:o,maxWait:t,trailing:r})};const b={},j=document.querySelector(".feedback-form"),S=document.querySelector(".feedback-form textarea"),T=document.querySelector(".feedback-form input");j.addEventListener("submit",(function(e){e.preventDefault(),e.currentTarget.reset(),localStorage.removeItem("local-value"),console.log(b)})),j.addEventListener("input",e(t)((function(e){b[e.target.name]=e.target.value,localStorage.setItem("local-value",JSON.stringify(b))}),500)),function(){const e=JSON.parse(localStorage.getItem("local-value"));e&&(T.value=e.email,S.value=e.message)}();
//# sourceMappingURL=03-feedback.416b4849.js.map

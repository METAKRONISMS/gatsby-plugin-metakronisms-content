!function(e,r){"object"==typeof exports&&"object"==typeof module?module.exports=r():"function"==typeof define&&define.amd?define("Button",[],r):"object"==typeof exports?exports.Button=r():e.Button=r()}(this,(function(){return function(e){var r={};function t(o){if(r[o])return r[o].exports;var n=r[o]={i:o,l:!1,exports:{}};return e[o].call(n.exports,n,n.exports,t),n.l=!0,n.exports}return t.m=e,t.c=r,t.d=function(e,r,o){t.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:o})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,r){if(1&r&&(e=t(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var n in e)t.d(o,n,function(r){return e[r]}.bind(null,n));return o},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},t.p="/",t(t.s=33)}([function(e,r){e.exports=require("react")},function(e,r){e.exports=require("react-jss")},function(e,r){e.exports=require("core-js/modules/es.symbol")},function(e,r){e.exports=require("core-js/modules/es.array.filter")},function(e,r){e.exports=require("core-js/modules/es.array.join")},,,,,,,,,,,function(e,r){e.exports=require("core-js/modules/es.array.for-each")},function(e,r){e.exports=require("core-js/modules/es.object.keys")},function(e,r){e.exports=require("core-js/modules/web.dom-collections.for-each")},function(e,r){e.exports=require("core-js/modules/es.object.get-own-property-descriptor")},function(e,r){e.exports=require("core-js/modules/es.object.get-own-property-descriptors")},,,,,function(e,r,t){"use strict";t.r(r),t.d(r,"default",(function(){return p}));t(2),t(3),t(15),t(25),t(4),t(18),t(19),t(16),t(17);var o=t(0),n=t.n(o),u=t(1);function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){s(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function f(e,r){if(null==e)return{};var t,o,n=function(e,r){if(null==e)return{};var t,o,n={},u=Object.keys(e);for(o=0;o<u.length;o++)t=u[o],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(o=0;o<u.length;o++)t=u[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var l=Object(u.createUseStyles)((function(e){return{}})),a=function(e){var r=e.children,t=e.className,o=e.hide,c=f(e,["children","className","hide"]),s=Object(u.useTheme)(),a=l(i(i({},c),{},{theme:s}));return n.a.createElement("button",i(i({type:"button"},c),{},{className:[a.root,t,o&&a.hide].filter(Boolean).join(" ")}),r)};a.defaultProps={children:null,className:null,hide:!1};var p=a},function(e,r){e.exports=require("core-js/modules/es.array.index-of")},,,,,,,,function(e,r,t){e.exports=t(24)}])}));
//# sourceMappingURL=Button.js.map
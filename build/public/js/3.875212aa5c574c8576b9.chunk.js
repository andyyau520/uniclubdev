webpackJsonp([3],{640:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var c=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),f=n(1),l=o(f),a=n(15),p=n(48),s=n(24),d=o(s),b=n(163),h=function(e){function t(){return r(this,t),u(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),c(t,[{key:"componentWillMount",value:function(){var e=this.props,t=e.dispatch,n=e.apiEngine;(0,d.default)(n).logout().catch(function(e){throw alert("Logout user fail"),e}).then(function(e){return t((0,b.logoutUser)())}).then(function(){return t((0,p.push)("/"))})}},{key:"render",value:function(){return null}}]),t}(l.default.Component);t.default=(0,a.connect)(function(e){return{apiEngine:e.apiEngine}})(h)},663:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return{path:"user",getIndexRoute:function(e,t){n.e(4,function(e){t(null,{component:n(276).default})})}}}},664:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return{path:"form-element",getComponent:function(e,t){n.e(2,function(e){t(null,n(635).default)})}}}}});
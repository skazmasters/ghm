!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=7)}([,,,,,,,function(e,t,n){"use strict";n.r(t);n(8),n(9),n(10),n(11),n(12),n(13),n(14),n(15),n(16),n(17),n(18),n(19),n(20),n(21),n(22),n(23)},function(e,t){function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var r=function(){function e(t,o){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;n(this,e),this.$node=t,this.$node&&(this.selector=o?"."===o.substr(0,1)?o.substr(1):o:null,this.breakpoint=r,this.breakpointStatus=null)}var t,r,i;return t=e,(r=[{key:"init",value:function(){this.breakpoint?(onResize(this.updateBreakpointCache.bind(this)),this.updateBreakpointCache()):this.build()}},{key:"updateBreakpointCache",value:function(){var e=this.checkBreakpoint;!1!==this.breakpointStatus&&null!==this.breakpointStatus||!e?this.breakpointStatus&&!e&&(this.breakpointStatus=!1,"function"==typeof this.destroy&&this.destroy()):(this.breakpointStatus=!0,"function"==typeof this.build&&this.build())}},{key:"build",value:function(){}},{key:"destroy",value:function(){}},{key:"queryElement",value:function(e){var t=null;if(e&&("."===e[0]&&(t=this.$node.querySelector("."+this.selector+"__"+e.substr(1)))||(t=this.$node.querySelector(e))),!t)throw new Error('Widget "'.concat(this.selector,'" Error: Child element (selector "').concat(e,'") not found'));return t}},{key:"queryElements",value:function(e){var t=null;return e&&("."===e[0]&&(t=this.$node.querySelectorAll("."+this.selector+"__"+e.substr(1)))||(t=this.$node.querySelectorAll(e))),t}},{key:"checkBreakpoint",get:function(){switch(this.breakpoint){case null:return!0;case"mobile":return isMobileLayout();case"mobile up":return!isMobileLayout();case"tablet":return isTabletLayout();case"tablet up":return!isTabletLayout();case"tablet-mobile":return isMobileLayout()||isTabletLayout();case"laptop":return isLaptopLayout();case"desktop":return isDesktopLayout();case"bigTablet-desktop":return isDesktopLayout()||isBigTabletLayout();default:return!0}}}])&&o(t.prototype,r),i&&o(t,i),e}();window.Widget=r},function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var o=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.listeners=[]}var t,o,r;return t=e,(o=[{key:"subscribe",value:function(e){this.listeners.push(e)}},{key:"unsubscribe",value:function(e){this.listeners=this.listeners.filter((function(t){return t!==e}))}}])&&n(t.prototype,o),r&&n(t,r),e}();window.Observer=o},function(e,t){window.isLocalhost=function(){return-1!==document.location.href.indexOf("localhost")||-1!==document.location.href.indexOf("192.168")},window.buildThresholdList=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10,t=[],n=1;n<=e;n++){var o=n/e;t.push(o)}return t.push(0),t}},function(e,t){function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function r(e,t){return(r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function i(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=c(e);if(t){var r=c(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return u(this,n)}}function u(e,t){return!t||"object"!==n(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var l=new(function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}(l,Observer);var t,n,u,c=i(l);function l(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,l),(e=c.call(this)).ticking=!1,e.observeScroll(),e}return t=l,(n=[{key:"observeScroll",value:function(){var e=this;document.addEventListener("scroll",(function(){if(e.ticking)return null;e.ticking=!0,raf((function(){e.listeners.forEach((function(e){return e()})),e.ticking=!1}))}),passiveIfSupported)}}])&&o(t.prototype,n),u&&o(t,u),l}());window.onScroll=function(e){return l.subscribe(e)},window.offScroll=function(e){return l.unsubscribe(e)}},function(e,t){function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function r(e,t){return(r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function i(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=c(e);if(t){var r=c(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return u(this,n)}}function u(e,t){return!t||"object"!==n(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var l=new(function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}(l,Observer);var t,n,u,c=i(l);function l(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,l),(e=c.call(this)).observeResize(),e}return t=l,(n=[{key:"observeResize",value:function(){var e=this;window.addEventListener("resize",(function(){if(!e.listeners.length)return!1;e.listeners.forEach((function(e){return e()}))}))}}])&&o(t.prototype,n),u&&o(t,u),l}());window.onResize=function(e){return l.subscribe(e)},window.offResize=function(e){return l.unsubscribe(e)}},function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var o=new(function(){function e(){var t=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.isFixedScroll=!1,this.lastScrollPos=this._getScrollPos(),onScroll((function(){if(t.isFixedScroll)return!1;t.lastScrollPos=t._getScrollPos()}))}var t,o,r;return t=e,r=[{key:"_calcScrollbarWidth",value:function(){var e=document.createElement("div");e.className="scroll-measure",document.body.appendChild(e);var t=e.offsetWidth,n=e.clientWidth,o="".concat(t-n,"px");return document.body.removeChild(e),o}}],(o=[{key:"_getScrollPos",value:function(){return window.pageYOffset}},{key:"showScrollbar",value:function(){return!!document.body.classList.contains("fixed-scroll")&&(document.body.classList.remove("fixed-scroll"),document.body.style.paddingRight="",isMobileLayout()&&(this.lastScrollPos=parseFloat(getComputedStyle(document.body).top||"0"),document.body.style.top="",window.scrollTo(0,-1*this.lastScrollPos)),this.isFixedScroll=!1,!0)}},{key:"hideScrollbar",value:function(t){if(document.body.classList.contains("fixed-scroll"))return!1;isMobileLayout()&&(document.body.style.top="-".concat(this.lastScrollPos,"px"));var n=e._calcScrollbarWidth();return document.body.classList.add("fixed-scroll"),document.body.style.paddingRight=n,t&&t(n),this.isFixedScroll=!0,!0}},{key:"getScrollbarState",value:function(){return this.isFixedScroll}},{key:"getLastScrollPos",value:function(){return this.lastScrollPos}}])&&n(t.prototype,o),r&&n(t,r),e}());window.showScrollbar=o.showScrollbar.bind(o),window.hideScrollbar=o.hideScrollbar.bind(o),window.getScrollPos=o.getLastScrollPos.bind(o),window.isFixedSCroll=o.getScrollbarState.bind(o)},function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var o={mobile_width:767,tablet_width:1023,laptop_width:1279,listeners:[],documentClickListeners:[],is_mobile:0,is_tablet:0,is_laptop:0},r=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.resizeEvents=this.resizeEvents.bind(this),this.events()}var t,r,i;return t=e,i=[{key:"addListener",value:function(e){o.listeners.push(e)}},{key:"fireChangeMode",value:function(){setTimeout((function(){for(var e=0;e<o.listeners.length;e++)o.listeners[e](o.is_mobile)}),0)}},{key:"addDocumentClickHandler",value:function(e){o.documentClickListeners.push(e)}},{key:"fireDocumentClick",value:function(e){o.documentClickListeners.forEach((function(t){return t(e)}))}},{key:"isTouchDevice",value:function(){return"ontouchstart"in document.documentElement}},{key:"isMobileLayout",value:function(){return window.innerWidth<=o.mobile_width}},{key:"isTabletLayout",value:function(){return window.innerWidth<=o.tablet_width}},{key:"isBigTabletLayout",value:function(){return window.innerWidth>o.tablet_width&&window.innerWidth<=o.laptop_width}},{key:"isLaptopLayout",value:function(){return window.innerWidth<=o.laptop_width}},{key:"isDesktopLayout",value:function(){return!e.isMobileLayout()&&!e.isTabletLayout()&&!e.isLaptopLayout()}},{key:"init",value:function(){return new e}}],(r=[{key:"events",value:function(){o.is_mobile=e.isMobileLayout(),onResize(this.resizeEvents);var t=!1;document.addEventListener("touchstart",(function(){return t=!0})),document.addEventListener("touchmove",(function(){return t=!1})),document.addEventListener("click touchend",(function(n){"click"===n.type&&(t=!0),t&&e.fireDocumentClick(n)}))}},{key:"resizeEvents",value:function(){var t=e.isMobileLayout(),n=e.isTabletLayout(),r=e.isLaptopLayout();t!==o.is_mobile?(o.is_mobile=t,e.fireChangeMode()):n!==o.is_tablet?(o.is_tablet=n,e.fireChangeMode()):r!==o.is_laptop&&(o.is_laptop=r,e.fireChangeMode())}}])&&n(t.prototype,r),i&&n(t,i),e}();r.init(),window.Layout=r,window.isMobileLayout=function(){return r.isMobileLayout()},window.isTabletLayout=function(){return r.isTabletLayout()},window.isBigTabletLayout=function(){return r.isBigTabletLayout()},window.isLaptopLayout=function(){return r.isLaptopLayout()},window.isDesktopLayout=function(){return r.isDesktopLayout()}},function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var o=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,o,r;return t=e,r=[{key:"disablingPreloader",value:function(){var e=document.querySelector(".js-preloader");e.addEventListener(endEvents.animation,(function t(n){if(n.target!==n.currentTarget)return!1;e.removeEventListener(endEvents.animation,t),e.style.display="none",e.classList.remove("hide"),setTimeout((function(){var e=new CustomEvent("pageLoaded");document.dispatchEvent(e)}),1e3)})),e.classList.add("hide"),document.body.classList.add("loaded")}}],(o=null)&&n(t.prototype,o),r&&n(t,r),e}();window.disablingPreloader=o.disablingPreloader},function(e,t){var n;n=function(){var e=.01*window.innerHeight;document.documentElement.style.setProperty("--vh","".concat(e,"px"))},window.onResize(n),n()},function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var o=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,o,r;return t=e,r=[{key:"log",value:function(e){if(!1!==isLocalhost()){var t=document.querySelector(".mobile-debug");t||((t=document.createElement("div")).classList.add("mobile-debug"),document.body.append(t));var n=document.createElement("p");n.innerHTML=e,t.prepend(n)}}}],(o=null)&&n(t.prototype,o),r&&n(t,r),e}();window.MobileDebug=o},function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var o=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,o,r;return t=e,r=[{key:"startAnimation",value:function(t,n){var o=t.getBoundingClientRect().top;if(n)return e.respond(t),scrollTo(0,o);if("scrollBehavior"in document.body.style)return e.respond(t),scrollBy({top:o,behavior:"smooth"});var r=getScrollPos(),i=performance.now();raf((function n(u){var c=u-i,l=e.timingFunction(c,r,o,1200);scrollTo(0,l),c<1200?raf(n):e.respond(t)}))}},{key:"timingFunction",value:function(e,t,n,o){return(e/=o/2)<1?n/2*e*e*e+t:n/2*((e-=2)*e*e+2)+t}},{key:"respond",value:function(e){var t=new CustomEvent("endScroll",{detail:{targetElem:e}});document.dispatchEvent(t)}}],(o=null)&&n(t.prototype,o),r&&n(t,r),e}();window.startScrollTo=o.startAnimation},function(e,t){function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function r(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),e}var i=function(){function e(t){if(n(this,e),this.$node=t,this.targetElement=document.querySelector(this.$node.getAttribute("href")||this.$node.dataset.scrollTarget),!this.targetElement)return null;this.init()}return r(e,[{key:"init",value:function(){var e=this;this.$node.addEventListener("click",(function(t){t.preventDefault(),setTimeout((function(){raf2x((function(){return startScrollTo(e.targetElement)}))}))}))}}]),e}(),u=function(){function e(t){n(this,e),this.nodeElement=t,this.init()}return r(e,[{key:"checkPosition",value:function(){isMobileLayout()&&(window.innerHeight<getScrollPos()?this.nodeElement.classList.add("active"):this.nodeElement.classList.remove("active"))}},{key:"init",value:function(){onScroll(this.checkPosition.bind(this)),onResize(this.checkPosition.bind(this)),this.nodeElement.addEventListener("click",(function(e){e.preventDefault(),setTimeout((function(){raf2x((function(){return startScrollTo(document.documentElement)}))}))}))}}]),e}();document.addEventListener("DOMContentLoaded",(function(){document.querySelectorAll(".js-scroll-to").forEach((function(e){return new i(e)})),document.querySelectorAll(".js-scroll-to-top").forEach((function(e){return new u(e)}))})),window.ScrollToLink=i},function(e,t){function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function r(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),e}var i=function(){function e(t){n(this,e),this.eventHandlers={},this.nodeElement=t,this.id=t.dataset.popupId,this.onCloseClick=this.onCloseClick.bind(this),this.onOverlayClick=this.onOverlayClick.bind(this),this.$popupContent=this.nodeElement.querySelector(".popup__content"),this.init()}return r(e,[{key:"on",value:function(e,t){e in this.eventHandlers||(this.eventHandlers[e]=[]);for(var n=0;n<this.eventHandlers[e];n++)if(this.eventHandlers[e][n]===t)return;this.eventHandlers[e].push(t)}},{key:"trigger",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};e in this.eventHandlers&&this.eventHandlers[e].forEach((function(e){return e(t)}))}},{key:"getId",value:function(){return this.id}},{key:"onCloseClick",value:function(e){e.preventDefault(),this.close()}},{key:"init",value:function(){var e=this;this.nodeElement.querySelectorAll(".js-popup-close").forEach((function(t){return t.addEventListener("click",e.onCloseClick)}))}},{key:"close",value:function(){var e=this;this.nodeElement.querySelector(".popup__inner").classList.remove("opened"),setTimeout((function(){return e.nodeElement.classList.remove("opened")}),300),setTimeout((function(){return e.trigger("closed")}),0),this.nodeElement.querySelectorAll(".js-popup-close").forEach((function(t){return t.removeEventListener("click",e.onCloseClick)})),this.nodeElement.removeEventListener("click",this.onOverlayClick)}},{key:"open",value:function(){var e=this;this.nodeElement.classList.add("opened"),setTimeout((function(){return e.nodeElement.querySelector(".popup__inner").classList.add("opened")})),this.nodeElement.addEventListener("click",this.onOverlayClick)}},{key:"onOverlayClick",value:function(e){var t=e.target;do{if(t===this.$popupContent)return;t=t.parentNode}while(t);this.close()}}]),e}(),u=new(function(){function e(){n(this,e),this.popups={},this.visiblePopup=null}return r(e,[{key:"add",value:function(e){var t=this,n=new i(e);this.popups[n.getId()]=n,document.querySelectorAll(".js-popup-open[data-popup]").forEach((function(e){e.addEventListener("click",(function(e){e.preventDefault();var n=e.target.closest(".js-popup-open[data-popup]");t.open(n.dataset.popup)}),!0)}))}},{key:"open",value:function(e){var t=this;if(!(e in this.popups))throw new Error("popup not found");this.createOverlay();var n=this.popups[e];n.open(),this.visiblePopup=n,n.on("closed",(function(){return t.hideOverlay()}))}},{key:"createOverlay",value:function(){var e=this;this.overlay?this.overlay.classList.remove("not-visible"):(hideScrollbar(),this.overlay=document.createElement("div"),this.overlay.classList.add("popup-overlay"),document.body.appendChild(this.overlay),this.overlay.addEventListener("click",(function(){e.visiblePopup&&e.visiblePopup.close()})))}},{key:"hideOverlay",value:function(){if(this.overlay){var e=this.overlay;this.overlay.classList.add("not-visible"),this.overlay.addEventListener("transitionend",(function(){e.remove(),showScrollbar()})),this.overlay=null}}},{key:"init",value:function(){document.querySelectorAll(".js-popup").forEach((function(e){return u.add(e)}))}}]),e}());u.init(),window.PopupManager=u},function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var o=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),document.querySelectorAll(".js-slider-partners").forEach((function(e){return PartnersSlider.init(e)}))}var t,o,r;return t=e,r=[{key:"init",value:function(){new e}}],(o=null)&&n(t.prototype,o),r&&n(t,r),e}();document.addEventListener("DOMContentLoaded",(function(){return o.init()}))},function(e,t){function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function r(e,t){return(r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function i(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=c(e);if(t){var r=c(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return u(this,n)}}function u(e,t){return!t||"object"!==n(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var l=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}(l,Widget);var t,n,u,c=i(l);function l(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,l),(t=c.call(this,e,"js-slider-partners")).navPrev=t.queryElement(".prev"),t.navNext=t.queryElement(".next"),t.slider=t.queryElement(".slider"),t.swiper=null,t.events(),t}return t=l,u=[{key:"init",value:function(e){e&&new l(e)}}],(n=[{key:"events",value:function(){this.initSwiper(),this.onClick()}},{key:"onClick",value:function(){var e=this;this.navNext.addEventListener("click",(function(){e.swiper.slideNext()})),this.navPrev.addEventListener("click",(function(){e.swiper.slidePrev()}))}},{key:"initSwiper",value:function(){this.swiper=new Swiper(this.slider,{loop:!0,slidesPerView:2,spaceBetween:20,breakpoints:{640:{slidesPerView:4,spaceBetween:20},1200:{slidesPerView:6,spaceBetween:40}}})}}])&&o(t.prototype,n),u&&o(t,u),l}();window.PartnersSlider=l},function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}new(function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.addEvents()}var t,o,r;return t=e,(o=[{key:"addEvents",value:function(){var e=this;document.addEventListener("DOMContentLoaded",(function(t){e.initLibs(),e.initModules()})),document.documentElement.addEventListener("touchstart",(function(e){e.touches.length>1&&e.preventDefault()}))}},{key:"initLibs",value:function(){window.svg4everybody()}},{key:"initModules",value:function(){disablingPreloader()}}])&&n(t.prototype,o),r&&n(t,r),e}())}]);
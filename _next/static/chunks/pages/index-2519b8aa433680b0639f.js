_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[11],{"/EDR":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("QeBL")}])},"1v1i":function(e,t){var n="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIIAAAAGCAQAAAClK464AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAWElEQVR42mOwZLJssrxn+X+YwUuWiQxIwJLPcpHlGyzq7lk2WTIxWDYNCkfTAgYjBcIePOqaGIZhKoDBdfAgkMSr7t5oIPy3vDeaHf5bNjEM04LxIikFIwBf1YC1Qg+D5wAAAABJRU5ErkJggg==";e.exports={src:n,width:130,height:6,format:"png",toString:function(){return n}}},"6DQo":function(e,t,n){"use strict";e.exports=function(){}},"9/5/":function(e,t,n){(function(t){var n=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,a=/^0o[0-7]+$/i,i=parseInt,c="object"==typeof t&&t&&t.Object===Object&&t,l="object"==typeof self&&self&&self.Object===Object&&self,s=c||l||Function("return this")(),u=Object.prototype.toString,f=Math.max,d=Math.min,b=function(){return s.Date.now()};function p(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function h(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==u.call(e)}(e))return NaN;if(p(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=p(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(n,"");var c=o.test(e);return c||a.test(e)?i(e.slice(2),c?2:8):r.test(e)?NaN:+e}e.exports=function(e,t,n){var r,o,a,i,c,l,s=0,u=!1,m=!1,g=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function v(t){var n=r,a=o;return r=o=void 0,s=t,i=e.apply(a,n)}function O(e){return s=e,c=setTimeout(j,t),u?v(e):i}function y(e){var n=e-l;return void 0===l||n>=t||n<0||m&&e-s>=a}function j(){var e=b();if(y(e))return w(e);c=setTimeout(j,function(e){var n=t-(e-l);return m?d(n,a-(e-s)):n}(e))}function w(e){return c=void 0,g&&r?v(e):(r=o=void 0,i)}function x(){var e=b(),n=y(e);if(r=arguments,o=this,l=e,n){if(void 0===c)return O(l);if(m)return c=setTimeout(j,t),v(l)}return void 0===c&&(c=setTimeout(j,t)),i}return t=h(t)||0,p(n)&&(u=!!n.leading,a=(m="maxWait"in n)?f(h(n.maxWait)||0,t):a,g="trailing"in n?!!n.trailing:g),x.cancel=function(){void 0!==c&&clearTimeout(c),s=0,r=l=o=c=void 0},x.flush=function(){return void 0===c?i:w(b())},x}}).call(this,n("yLpj"))},J9Ge:function(e,t){var n="/mcmkb/_next/static/chunks/images/defaultBlogHero-95871dab92a1b992dc2c2c5ad44e867d.png";e.exports={src:n,width:800,height:338,format:"png",toString:function(){return n}}},MNmQ:function(e,t){var n="/mcmkb/_next/static/chunks/images/defaultBlogHero-cf75e4a9b713e55a528abedd836ce812.png";e.exports={src:n,width:1280,height:540,format:"png",toString:function(){return n}}},O9pe:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}n.d(t,"a",(function(){return l}));var c={focusable:"false",preserveAspectRatio:"xMidYMid meet"};function l(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.width,n=e.height,r=e.viewBox,o=void 0===r?"0 0 ".concat(t," ").concat(n):r,l=i(e,["width","height","viewBox"]),s=l.tabindex,u=i(l,["tabindex"]),f=a(a(a({},c),u),{},{width:t,height:n,viewBox:o});return f["aria-label"]||f["aria-labelledby"]||f.title?(f.role="img",void 0!==s&&null!==s&&(f.focusable="true",f.tabindex=s)):f["aria-hidden"]=!0,f}},QeBL:function(e,t,n){"use strict";n.r(t),n.d(t,"__N_SSG",(function(){return Be}));var r={};n.r(r),n.d(r,"Tab",(function(){return O})),n.d(r,"Enter",(function(){return y})),n.d(r,"Escape",(function(){return j})),n.d(r,"Space",(function(){return w})),n.d(r,"PageUp",(function(){return x})),n.d(r,"PageDown",(function(){return N})),n.d(r,"End",(function(){return S})),n.d(r,"Home",(function(){return k})),n.d(r,"ArrowLeft",(function(){return E})),n.d(r,"ArrowUp",(function(){return A})),n.d(r,"ArrowRight",(function(){return P})),n.d(r,"ArrowDown",(function(){return _}));var o=n("nKUr"),a=n("ezAA"),i=n.n(a),c=n("q1tI"),l=n.n(c),s=n("17x9"),u=n.n(s),f=n("TSYQ"),d=n.n(f),b={prefix:"bx",selectorTabbable:"\n    a[href], area[href], input:not([disabled]):not([tabindex='-1']),\n    button:not([disabled]):not([tabindex='-1']),select:not([disabled]):not([tabindex='-1']),\n    textarea:not([disabled]):not([tabindex='-1']),\n    iframe, object, embed, *[tabindex]:not([tabindex='-1']), *[contenteditable=true]\n  ",selectorFocusable:"\n    a[href], area[href], input:not([disabled]),\n    button:not([disabled]),select:not([disabled]),\n    textarea:not([disabled]),\n    iframe, object, embed, *[tabindex], *[contenteditable=true]\n  "},p=n("ldPN"),h=n("9/5/"),m=n.n(h);function g(e,t){for(var n=0;n<t.length;n++)if(v(e,t[n]))return!0;return!1}function v(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.key,r=t.which,o=t.keyCode;return"string"===typeof e?e===n:"number"===typeof e?e===r||e===o:e.key&&Array.isArray(n)?-1!==n.indexOf(e.key):e.key===n||e.which===r||e.keyCode===o}var O={key:"Tab",which:9,keyCode:9},y={key:"Enter",which:13,keyCode:13},j={key:["Escape","Esc"],which:27,keyCode:27},w={key:" ",which:32,keyCode:32},x={key:"PageUp",which:33,keyCode:33},N={key:"PageDown",which:34,keyCode:34},S={key:"End",which:35,keyCode:35},k={key:"Home",which:36,keyCode:36},E={key:"ArrowLeft",which:37,keyCode:37},A={key:"ArrowUp",which:38,keyCode:38},P={key:"ArrowRight",which:39,keyCode:39},_={key:"ArrowDown",which:40,keyCode:40};function T(){return(T=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function C(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var I=b.prefix,B=function(e){var t,n,r,o=e.className,a=e.selected,i=e.children,c=C(e,["className","selected","children"]),s=d()("".concat(I,"--tab-content"),(r=o,(n=o)in(t={})?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r,t));return l.a.createElement("div",T({role:"tabpanel"},c,{className:s,selected:a,hidden:!a}),i)};B.propTypes={children:u.a.node,className:u.a.string,selected:u.a.bool},B.defaultProps={selected:!1};var D=B;function R(e){return(R="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function W(){return(W=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function F(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function L(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function M(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function z(e,t){return(z=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function U(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=V(e);if(t){var o=V(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return H(this,n)}}function H(e,t){return!t||"object"!==R(t)&&"function"!==typeof t?K(e):t}function K(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function V(e){return(V=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function Q(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var q=b.prefix,J=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&z(e,t)}(i,e);var t,n,o,a=U(i);function i(){var e;L(this,i);for(var t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];return Q(K(e=a.call.apply(a,[this].concat(n))),"state",{horizontalOverflow:!1}),Q(K(e),"tablist",l.a.createRef()),Q(K(e),"leftOverflowNavButton",l.a.createRef()),Q(K(e),"rightOverflowNavButton",l.a.createRef()),Q(K(e),"OVERFLOW_BUTTON_OFFSET",40),Q(K(e),"handleScroll",(function(){var t;if(null===(t=e.tablist)||void 0===t?void 0:t.current){var n=e.tablist.current,r=n.clientWidth,o=n.scrollLeft,a=n.scrollWidth;e.setState({tablistClientWidth:r,horizontalOverflow:a>r,tablistScrollWidth:a,tablistScrollLeft:o})}})),Q(K(e),"_debouncedHandleWindowResize",null),Q(K(e),"_handleWindowResize",e.handleScroll),Q(K(e),"getEnabledTabs",(function(){return l.a.Children.toArray(e.props.children).reduce((function(e,t,n){return t.props.disabled?e:e.concat(n)}),[])})),Q(K(e),"getNextIndex",(function(t,n){var r=e.getEnabledTabs(),o=Math.max(r.indexOf(t)+n,-1);return r[o>=0&&o<r.length?o:o-Math.sign(o)*r.length]})),Q(K(e),"getDirection",(function(e){return v(e,r.ArrowLeft)?-1:v(e,r.ArrowRight)?1:0})),Q(K(e),"getTabAt",(function(t,n){return!n&&e["tab".concat(t)]||l.a.Children.toArray(e.props.children)[t]})),Q(K(e),"scrollTabIntoView",(function(t,n){var o=n.index,a=e.getTabAt(o);if(g(t,[r.ArrowLeft,r.ArrowRight])||"click"===t.type){var i,c=e.state.tablistScrollLeft;null===a||void 0===a||null===(i=a.tabAnchor)||void 0===i||i.scrollIntoView({block:"nearest",inline:"nearest"}),e.tablist.current.scrollLeft>c&&(e.tablist.current.scrollLeft+=e.OVERFLOW_BUTTON_OFFSET)}})),Q(K(e),"selectTabAt",(function(t,n){var r=n.index,o=n.onSelectionChange;e.scrollTabIntoView(t,{index:r}),e.state.selected!==r&&(e.setState({selected:r}),"function"===typeof o&&o(r))})),Q(K(e),"handleTabKeyDown",(function(t){return function(n,o){g(o,[r.Enter,r.Space])&&e.selectTabAt(o,{index:n,onSelectionChange:t});var a,i=g(o,[r.ArrowLeft,r.ArrowRight])?e.getNextIndex(n,e.getDirection(o)):v(o,r.Home)?0:v(o,r.End)?e.getEnabledTabs().pop():void 0,c=e.getTabAt(i);g(o,[r.ArrowLeft,r.ArrowRight,r.Home,r.End])&&(o.preventDefault(),"manual"!==e.props.selectionMode?e.selectTabAt(o,{index:i,onSelectionChange:t}):e.scrollTabIntoView(o,{index:i}),null===c||void 0===c||null===(a=c.tabAnchor)||void 0===a||a.focus())}})),Q(K(e),"getTabs",(function(){return l.a.Children.map(e.props.children,(function(e){return e}))})),Q(K(e),"handleTabClick",(function(t){return function(n,r){r.preventDefault(),e.selectTabAt(r,{index:n,onSelectionChange:t})}})),Q(K(e),"setTabAt",(function(t,n){e["tab".concat(t)]=n})),Q(K(e),"overflowNavInterval",null),Q(K(e),"handleOverflowNavClick",(function(t,n){var r,o=n.direction,a=n.multiplier,i=void 0===a?10:a,c=null===(r=e.tablist)||void 0===r?void 0:r.current,l=c.clientWidth,s=c.scrollLeft,u=c.scrollWidth;1!==o||s||(e.tablist.current.scrollLeft+=e.OVERFLOW_BUTTON_OFFSET),e.tablist.current.scrollLeft+=o*i;var f=-1===o&&s<e.OVERFLOW_BUTTON_OFFSET,d=1===o&&s+l>=u-e.OVERFLOW_BUTTON_OFFSET;if(f||d){var b,p,h,m;if(f)null===(b=e.rightOverflowNavButton)||void 0===b||null===(p=b.current)||void 0===p||p.focus();if(d)null===(h=e.leftOverflowNavButton)||void 0===h||null===(m=h.current)||void 0===m||m.focus()}})),Q(K(e),"handleOverflowNavMouseDown",(function(t,n){var r=n.direction;1===t.buttons&&(e.overflowNavInterval=setInterval((function(){var n,o=null===(n=e.tablist)||void 0===n?void 0:n.current,a=o.clientWidth,i=o.scrollLeft,c=o.scrollWidth,l=-1===r&&i<e.OVERFLOW_BUTTON_OFFSET,s=1===r&&i+a>=c-e.OVERFLOW_BUTTON_OFFSET;(l||s)&&clearInterval(e.overflowNavInterval),e.handleOverflowNavClick(t,{direction:r})})))})),Q(K(e),"handleOverflowNavMouseUp",(function(){clearInterval(e.overflowNavInterval)})),e}return t=i,o=[{key:"getDerivedStateFromProps",value:function(e,t){var n=e.selected;return t.prevSelected===n?null:{selected:n,prevSelected:n}}}],(n=[{key:"componentDidMount",value:function(){var e;this._debouncedHandleWindowResize||(this._debouncedHandleWindowResize=m()(this._handleWindowResize,200)),this._handleWindowResize(),window.addEventListener("resize",this._debouncedHandleWindowResize);var t=(null===(e=this.tablist)||void 0===e?void 0:e.current)||{},n=t.clientWidth,r=t.scrollLeft,o=t.scrollWidth,a=this.getTabAt(this.state.selected);if(o>n){var i,c,l,s=(null===a||void 0===a||null===(i=a.tabAnchor)||void 0===i?void 0:i.getBoundingClientRect().right)<(null===a||void 0===a||null===(c=a.tabAnchor)||void 0===c?void 0:c.offsetParent.getBoundingClientRect().right),u=r+n===o;null===a||void 0===a||null===(l=a.tabAnchor)||void 0===l||l.scrollIntoView({block:"nearest",inline:"nearest"}),s||u||(this.tablist.current.scrollLeft+=2*this.OVERFLOW_BUTTON_OFFSET)}}},{key:"componentWillUnmount",value:function(){this._debouncedHandleWindowResize&&this._debouncedHandleWindowResize.cancel(),window.removeEventListener("resize",this._debouncedHandleWindowResize)}},{key:"componentDidUpdate",value:function(e,t){var n,r,o=this.tablist.current,a=o.clientWidth,i=o.scrollLeft,c=o.scrollWidth,l=this.state,s=l.tablistClientWidth,u=l.tablistScrollLeft,f=l.tablistScrollWidth,d=l.selected;a===s&&i===u&&c===f||this.setState({horizontalOverflow:c>a,tablistClientWidth:a,tablistScrollLeft:i,tablistScrollWidth:c}),t.selected!==d&&(null===(n=this.getTabAt(d))||void 0===n||null===(r=n.tabAnchor)||void 0===r||r.scrollIntoView({block:"nearest",inline:"nearest"}))}},{key:"render",value:function(){var e,t,n,r=this,o=this.props,a=o.className,i=o.type,c=o.light,s=o.onSelectionChange,u=(o.selectionMode,o.tabContentClassName),f=F(o,["className","type","light","onSelectionChange","selectionMode","tabContentClassName"]),b=this.getTabs().map((function(e,t){var n=t===r.state.selected?0:-1;return l.a.cloneElement(e,{index:t,selected:t===r.state.selected,handleTabClick:r.handleTabClick(s),tabIndex:n,ref:function(e){r.setTabAt(t,e)},handleTabKeyDown:r.handleTabKeyDown(s)})})),h=l.a.Children.map(b,(function(e){var t=e.props,n=t.id,r=t.children,o=t.selected,a=t.renderContent,i=void 0===a?D:a;return l.a.createElement(i,{id:n&&"".concat(n,"__panel"),className:u,hidden:!o,selected:o,"aria-labelledby":n},r)})),m=!this.state.horizontalOverflow||!this.state.tablistScrollLeft,g=!this.state.horizontalOverflow||this.state.tablistScrollLeft+this.state.tablistClientWidth===this.state.tablistScrollWidth,v={tabs:d()(a,"".concat(q,"--tabs--scrollable"),(e={},Q(e,"".concat(q,"--tabs--scrollable--container"),"container"===i),Q(e,"".concat(q,"--tabs--scrollable--light"),c),e)),tablist:d()("".concat(q,"--tabs--scrollable__nav")),leftOverflowButtonClasses:d()((t={},Q(t,"".concat(q,"--tab--overflow-nav-button"),this.state.horizontalOverflow),Q(t,"".concat(q,"--tab--overflow-nav-button--hidden"),m),t)),rightOverflowButtonClasses:d()((n={},Q(n,"".concat(q,"--tab--overflow-nav-button"),this.state.horizontalOverflow),Q(n,"".concat(q,"--tab--overflow-nav-button--hidden"),g),n))};return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",W({},f,{className:v.tabs,onScroll:this.handleScroll}),l.a.createElement("button",{"aria-hidden":"true",className:v.leftOverflowButtonClasses,onClick:function(e){return r.handleOverflowNavClick(e,{direction:-1})},onMouseDown:function(e){return r.handleOverflowNavMouseDown(e,{direction:-1})},onMouseUp:this.handleOverflowNavMouseUp,ref:this.leftOverflowNavButton,tabIndex:"-1",type:"button"},l.a.createElement(p.a,null)),!m&&l.a.createElement("div",{className:"".concat(q,"--tabs__overflow-indicator--left")}),l.a.createElement("ul",{role:"tablist",tabIndex:-1,className:v.tablist,ref:this.tablist},b),!g&&l.a.createElement("div",{className:"".concat(q,"--tabs__overflow-indicator--right")}),l.a.createElement("button",{"aria-hidden":"true",className:v.rightOverflowButtonClasses,onClick:function(e){return r.handleOverflowNavClick(e,{direction:1})},onMouseDown:function(e){return r.handleOverflowNavMouseDown(e,{direction:1})},onMouseUp:this.handleOverflowNavMouseUp,ref:this.rightOverflowNavButton,tabIndex:"-1",type:"button"},l.a.createElement(p.b,null))),h)}}])&&M(t.prototype,n),o&&M(t,o),i}(l.a.Component);Q(J,"propTypes",{children:u.a.node,className:u.a.string,hidden:u.a.bool,light:u.a.bool,onClick:u.a.func,onKeyDown:u.a.func,onSelectionChange:u.a.func,selected:u.a.number,selectionMode:u.a.oneOf(["automatic","manual"]),tabContentClassName:u.a.string,type:u.a.oneOf(["default","container"])}),Q(J,"defaultProps",{type:"default",selected:0,selectionMode:"automatic"});n("6DQo");function Y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function X(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Y(Object(n),!0).forEach((function(t){G(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Y(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function G(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Z={};function $(e,t){return function(t,n,r){if(void 0!==t[n]){Z[r]&&Z[r][n]||(Z[r]=X(X({},Z[r]),{},G({},n,!0)));for(var o=arguments.length,a=new Array(o>3?o-3:0),i=3;i<o;i++)a[i-3]=arguments[i];return e.apply(void 0,[t,n,r].concat(a))}}}function ee(e){return(ee="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function te(){return(te=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function ne(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function re(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function oe(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function ae(e,t){return(ae=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function ie(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=le(e);if(t){var o=le(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return ce(this,n)}}function ce(e,t){return!t||"object"!==ee(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function le(e){return(le=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function se(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var ue=b.prefix,fe=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&ae(e,t)}(a,e);var t,n,r,o=ie(a);function a(){return re(this,a),o.apply(this,arguments)}return t=a,(n=[{key:"render",value:function(){var e,t,n=this,r=this.props,o=r.id,a=r.className,i=r.handleTabClick,c=r.handleTabKeyDown,s=r.disabled,u=r.href,f=void 0===u?"#":u,b=r.index,p=r.label,h=r.selected,m=r.tabIndex,g=void 0===m?0:m,v=r.onClick,O=r.onKeyDown,y=r.renderAnchor,j=(r.renderContent,ne(r,["id","className","handleTabClick","handleTabKeyDown","disabled","href","index","label","selected","tabIndex","onClick","onKeyDown","renderAnchor","renderContent"])),w=d()(a,"".concat(ue,"--tabs--scrollable__nav-item"),(se(e={},"".concat(ue,"--tabs__nav-item--disabled"),s),se(e,"".concat(ue,"--tabs__nav-item--selected"),h),se(e,"".concat(ue,"--tabs--scrollable__nav-item--disabled"),s),se(e,"".concat(ue,"--tabs--scrollable__nav-item--selected"),h),e)),x=(se(t={},"aria-selected",h),se(t,"aria-disabled",s),se(t,"aria-controls","".concat(o,"__panel")),se(t,"id",o),se(t,"className","".concat(ue,"--tabs--scrollable__nav-link")),se(t,"href",f),se(t,"tabIndex",s?-1:g),se(t,"ref",(function(e){n.tabAnchor=e})),t);return l.a.createElement("li",te({},j,{className:w,onClick:function(e){s||(i&&i(b,e),v(e))},onKeyDown:function(e){s||(c&&c(b,e),O(e))},role:"presentation"}),y?y(x):l.a.createElement("button",te({type:"button",role:"tab"},x),p))}}])&&oe(t.prototype,n),r&&oe(t,r),a}(l.a.Component);se(fe,"propTypes",{className:u.a.string,disabled:u.a.bool,handleTabClick:u.a.func,handleTabKeyDown:u.a.func,href:$(u.a.string),id:u.a.string,index:u.a.number,label:u.a.node,onClick:u.a.func.isRequired,onKeyDown:u.a.func.isRequired,renderAnchor:$(u.a.func),renderContent:u.a.func,role:u.a.string.isRequired,selected:u.a.bool.isRequired,tabIndex:u.a.number}),se(fe,"defaultProps",{role:"presentation",label:"provide a label",selected:!1,onClick:function(){},onKeyDown:function(){}});var de=n("YFqc"),be=n.n(de),pe=n("h8o1"),he=n("tCh+"),me=function(e){var t=e.blogSlug,r=e.heroImageName;return r?Object(o.jsx)(i.a,{src:n("WwE0")("./".concat(t,"/assets/").concat(r)),alt:t,webp:!0,sizes:[400,800],rawSrc:{fallback:{400:{1:n("WwE00")("./".concat(t,"/assets/").concat(r,""))},800:{1:n("WwE00X")("./".concat(t,"/assets/").concat(r,""))}},webp:{400:{1:n("WwE00XZ")("./".concat(t,"/assets/").concat(r,""))},800:{1:n("WwE00XZE")("./".concat(t,"/assets/").concat(r,""))}}}}):Object(o.jsx)(i.a,{src:n("MNmQ"),alt:t,webp:!0,sizes:[400,800],rawSrc:{fallback:{400:{1:n("hIP3")},800:{1:n("J9Ge")}},webp:{400:{1:n("n9yJ")},800:{1:n("garB")}}}})},ge=function(e){var t=e.blogFrontmatter,n=Object(pe.d)(t);return Object(o.jsx)("ul",{className:"my-12",children:n.map((function(e){return Object(o.jsx)(be.a,{href:"/".concat(e.slug),children:Object(o.jsxs)("li",{className:"flex flex-wrap mb-16 lg:flex-nowrap lg:p-2 cursor-pointer hover:bg-gray-50 group",children:[Object(o.jsx)("div",{className:"order-1 flex-grow mb-4 lg:order-2 lg:w-1/4",children:Object(o.jsx)(me,{blogSlug:e.slug,heroImageName:e.heroImageName})}),Object(o.jsxs)("div",{className:"flex flex-col order-2 lg:order-1 lg:w-3/4 lg:mr-12",children:[Object(o.jsx)("a",{className:"mb-6 text-gray-700 font-semibold text-3xl group-hover:underline",children:e.title}),Object(o.jsx)("p",{className:"mb-4",children:e.description}),Object(o.jsx)("p",{className:"mb-4 font-medium text-blue-800",children:Object(pe.b)(e.tags)}),Object(o.jsxs)("p",{className:"",children:["By ",Object(o.jsx)("span",{className:"font-bold",children:e.author})," |"," ",Object(he.a)(e.date)]})]})]},e.title)})}))})},ve=function(e){return Object(o.jsx)("div",{className:"container mx-auto my-16",children:Object(o.jsxs)(J,{children:[Object(o.jsx)(fe,{id:"tab-1",label:"All Categories",children:Object(o.jsx)("div",{className:"some-content",children:Object(o.jsx)(ge,{blogFrontmatter:e.allBlogs})})}),Object(o.jsx)(fe,{id:"tab-2",label:"Customer Stories",children:Object(o.jsx)("div",{className:"some-content",children:Object(o.jsx)(ge,{blogFrontmatter:e.customerStoriesBlogs})})}),Object(o.jsx)(fe,{id:"tab-2",label:"Developer",children:Object(o.jsx)("div",{className:"some-content",children:Object(o.jsx)(ge,{blogFrontmatter:e.developerBlogs})})}),Object(o.jsx)(fe,{id:"tab-2",label:"Thought Leadership",children:Object(o.jsx)("div",{className:"some-content",children:Object(o.jsx)(ge,{blogFrontmatter:e.thoughtleadershipBlogs})})}),Object(o.jsx)(fe,{id:"tab-2",label:"Events",children:Object(o.jsx)("div",{className:"some-content",children:Object(o.jsx)(ge,{blogFrontmatter:e.eventsBlogs})})}),Object(o.jsx)(fe,{id:"tab-2",label:"Product",children:Object(o.jsx)("div",{className:"some-content",children:Object(o.jsx)(ge,{blogFrontmatter:e.productBlogs})})}),Object(o.jsx)(fe,{id:"tab-3",label:"Announcements",children:Object(o.jsx)("div",{className:"some-content",children:Object(o.jsx)(ge,{blogFrontmatter:e.announcementBlogs})})})]})})};function Oe(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function ye(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Oe(Object(n),!0).forEach((function(t){je(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Oe(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function je(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function we(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var xe=b.prefix,Ne=l.a.forwardRef((function(e,t){var n,r=e.children,o=e.as,a=e.className,i=e.disabled,c=e.small,s=e.size,u=e.kind,f=e.href,b=e.tabIndex,p=e.type,h=e.renderIcon,m=e.iconDescription,g=e.hasIconOnly,v=e.tooltipPosition,O=e.tooltipAlignment,y=we(e,["children","as","className","disabled","small","size","kind","href","tabIndex","type","renderIcon","iconDescription","hasIconOnly","tooltipPosition","tooltipAlignment"]),j={tabIndex:b,className:d()(a,(je(n={},"".concat(xe,"--btn"),!0),je(n,"".concat(xe,"--btn--field"),"field"===s),je(n,"".concat(xe,"--btn--sm"),"small"===s||"sm"===s||c),je(n,"".concat(xe,"--btn--lg"),"lg"===s),je(n,"".concat(xe,"--btn--xl"),"xl"===s),je(n,"".concat(xe,"--btn--").concat(u),u),je(n,"".concat(xe,"--btn--disabled"),i),je(n,"".concat(xe,"--btn--icon-only"),g),je(n,"".concat(xe,"--tooltip__trigger"),g),je(n,"".concat(xe,"--tooltip--a11y"),g),je(n,"".concat(xe,"--tooltip--").concat(v),g&&v),je(n,"".concat(xe,"--tooltip--align-").concat(O),g&&O),n)),ref:t},w=h?l.a.createElement(h,{"aria-label":m,className:"".concat(xe,"--btn__icon"),"aria-hidden":"true"}):null,x="button",N={disabled:i,type:p},S={href:f},k=g?l.a.createElement("span",{className:"".concat(xe,"--assistive-text")},m):null;return o?(x=o,N=ye(ye({},N),S)):f&&!i&&(x="a",N=S),l.a.createElement(x,ye(ye(ye({},y),j),N),k,r,w)}));Ne.displayName="Button",Ne.propTypes={as:u.a.oneOfType([u.a.func,u.a.string,u.a.elementType]),children:u.a.node,className:u.a.string,disabled:u.a.bool,hasIconOnly:u.a.bool,href:u.a.string,iconDescription:function(e){if(e.renderIcon&&!e.children&&!e.iconDescription)return new Error("renderIcon property specified without also providing an iconDescription property.")},kind:u.a.oneOf(["primary","secondary","danger","ghost","danger--primary","danger--ghost","danger--tertiary","tertiary"]).isRequired,renderIcon:u.a.oneOfType([u.a.func,u.a.object]),role:u.a.string,size:u.a.oneOf(["default","field","small","sm","lg","xl"]),small:$(u.a.bool),tabIndex:u.a.number,tooltipAlignment:u.a.oneOf(["start","center","end"]),tooltipPosition:u.a.oneOf(["top","right","bottom","left"]),type:u.a.oneOf(["button","reset","submit"])},Ne.defaultProps={tabIndex:0,type:"button",disabled:!1,kind:"primary",size:"default",tooltipAlignment:"center",tooltipPosition:"top"};var Se=Ne,ke=function(e){var t=e.blogFrontmatter;return Object(o.jsxs)("li",{className:"flex flex-wrap mb-16 lg:flex-nowrap lg:px-2",children:[Object(o.jsx)("div",{className:"order-1 flex-grow mb-4 lg:order-2 lg:w-3/6",children:Object(o.jsx)(me,{blogSlug:t.slug,heroImageName:t.heroImageName})}),Object(o.jsxs)("div",{className:"flex-col order-2 lg:order-1 lg:w-3/6 lg:mr-12",children:[Object(o.jsx)(be.a,{href:"/".concat(t.slug),children:Object(o.jsx)("a",{className:"mb-6 text-gray-700 font-semibold text-3xl",children:t.title})}),Object(o.jsx)("p",{className:"my-4",children:t.description}),Object(o.jsx)("p",{className:"mb-4 font-medium text-green-800",children:Object(pe.b)(t.tags)}),Object(o.jsxs)("p",{className:"",children:["By ",Object(o.jsx)("span",{className:"font-bold",children:t.author})," | ",Object(he.a)(t.date)]}),Object(o.jsx)("div",{className:"mt-8",children:Object(o.jsx)(be.a,{href:"/".concat(t.slug),children:Object(o.jsx)(Se,{children:"Read Now"})})})]})]},t.title)},Ee=function(e){var t=e.blogFrontmatter;return Object(o.jsxs)("li",{className:"flex flex-col mb-16 lg:w-2/6 lg:px-2",children:[Object(o.jsx)("div",{className:"flex mb-4 lg:h-52 overflow-hidden",children:Object(o.jsx)(me,{blogSlug:t.slug,heroImageName:t.heroImageName})}),Object(o.jsx)(be.a,{href:"/".concat(t.slug),children:Object(o.jsx)("a",{className:"mb-6 text-gray-700 font-semibold text-3xl",children:t.title})}),Object(o.jsx)("p",{className:"mb-4 flex-grow",children:t.description}),Object(o.jsx)("p",{className:"mb-4 font-medium text-green-800",children:Object(pe.b)(t.tags)}),Object(o.jsxs)("p",{className:"",children:["By ",Object(o.jsx)("span",{className:"font-bold",children:t.author})," | ",Object(he.a)(t.date)]}),Object(o.jsx)("div",{className:"mt-8",children:Object(o.jsx)(be.a,{href:"/".concat(t.slug),children:Object(o.jsx)(Se,{children:"Read Now"})})})]},t.title)},Ae=function(e){var t=e.blogFrontmatter;return Object(o.jsx)("div",{children:Object(o.jsx)("ul",{className:"flex flex-wrap",children:t.map((function(e,t){return Object(o.jsx)(o.Fragment,{children:0===t?Object(o.jsx)(ke,{blogFrontmatter:e}):Object(o.jsx)(Ee,{blogFrontmatter:e})})}))})})},Pe=n("8Kt/"),_e=n.n(Pe),Te=n("b2pr"),Ce=n("gF/r"),Ie=function(e){var t=e.children,n=e.title,r=e.description,a=void 0===r?"":r;return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)(_e.a,{children:[Object(o.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),Object(o.jsx)("meta",{charSet:"utf-8"}),Object(o.jsx)("meta",{name:"Description",content:a}),Object(o.jsx)("title",{children:n})]}),Object(o.jsx)(Ce.a,{}),Object(o.jsx)("div",{children:t}),Object(o.jsx)(Te.a,{})]})},Be=!0;t.default=function(e){var t=e.siteTitle,r=e.siteDescription,a=e.rawBlogsContent,c=Object(pe.c)(a),l=c.allBlogs,s=c.featuredBlogs,u=c.announcementBlogs,f=c.customerStoriesBlogs,d=c.developerBlogs,b=c.eventsBlogs,p=c.productBlogs,h=c.thoughtleadershipBlogs;return Object(o.jsxs)(Ie,{title:t,description:r,children:[Object(o.jsx)("div",{className:"bg-gray-100",children:Object(o.jsx)("div",{className:"container mx-auto",children:Object(o.jsxs)("div",{className:"mx-2 pt-16",children:[Object(o.jsx)("h1",{className:"mb-4 font-extrabold text-gray-800",children:"Blog"}),Object(o.jsx)(i.a,{className:"mb-16",src:n("1v1i"),rawSrc:{fallback:{original:{1:n("1v1i")}}}}),Object(o.jsx)(Ae,{blogFrontmatter:s})]})})}),Object(o.jsx)(ve,{allBlogs:l,featuredBlogs:s,announcementBlogs:u,customerStoriesBlogs:f,developerBlogs:d,eventsBlogs:b,productBlogs:p,thoughtleadershipBlogs:h})]})}},TSYQ:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var a=typeof r;if("string"===a||"number"===a)e.push(r);else if(Array.isArray(r)&&r.length){var i=o.apply(null,r);i&&e.push(i)}else if("object"===a)for(var c in r)n.call(r,c)&&r[c]&&e.push(c)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(r=function(){return o}.apply(t,[]))||(e.exports=r)}()},a9m1:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d})),n.d(t,"c",(function(){return s}));var r=n("O9pe"),o=n("17x9"),a=n.n(o),i=n("q1tI"),c=n.n(i);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var b=c.a.forwardRef((function(e,t){var n=e.className,o=e.children,a=e.tabIndex,i=d(e,["className","children","tabIndex"]),l=Object(r.a)(f(f({},i),{},{tabindex:a})),s=l.tabindex,u=d(l,["tabindex"]);return n&&(u.className=n),void 0!==s&&null!==s&&(u.tabIndex=s),t&&(u.ref=t),c.a.createElement("svg",u,o)}));b.displayName="Icon",b.propTypes={"aria-hidden":a.a.string,"aria-label":a.a.string,"aria-labelledby":a.a.string,children:a.a.node,className:a.a.string,height:a.a.number,preserveAspectRatio:a.a.string,tabIndex:a.a.string,viewBox:a.a.string,width:a.a.number,xmlns:a.a.string},b.defaultProps={xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"xMidYMid meet"}},garB:function(e,t){var n="/mcmkb/_next/static/chunks/images/defaultBlogHero-26281b1bfafa143ac958a85cff099228.webp";e.exports={src:n,width:800,height:338,format:"webp",toString:function(){return n}}},hIP3:function(e,t){var n="/mcmkb/_next/static/chunks/images/defaultBlogHero-635ebc2e833d8cb5f5741fa5f4af8bf5.png";e.exports={src:n,width:400,height:169,format:"png",toString:function(){return n}}},n9yJ:function(e,t){var n="/mcmkb/_next/static/chunks/images/defaultBlogHero-1fe51f057080473fe91f112a783271b7.webp";e.exports={src:n,width:400,height:169,format:"webp",toString:function(){return n}}}},[["/EDR",0,2,4,6,1,3]]]);
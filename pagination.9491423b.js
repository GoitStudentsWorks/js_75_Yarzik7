!function(){function t(t){return t&&t.__esModule?t.default:t}function e(t,e,n,i){Object.defineProperty(t,e,{get:n,set:i,enumerable:!0,configurable:!0})}var n=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequired7c6;n.register("jcFG7",(function(i,s){e(i.exports,"pagination",(function(){return d})),e(i.exports,"sliceOnGroup",(function(){return b}));var o=n("bpxeT"),r=n("2TvXO"),a=n("1VFfL"),c=n("dIxxU"),l=n("j6slc"),u=n("4op18"),p={container:document.querySelector("#pagination"),listEl:document.querySelector(".shopinlist__cards"),titleEl:document.querySelector(".basket__title")},f=u.default.load("books"),h=window.innerWidth<768?4:3,g=window.innerWidth<768?2:3;f.length>h&&p.container.classList.remove("disabled");var _={totalItems:f.length,itemsPerPage:h,visiblePages:g,page:1,centerAlign:!1,usageStatistics:!0,firstItemClassName:"pagination__first-child",lastItemClassName:"pagination__last-child",template:{page:'<a aria-label="Number page {{page}}" href="#" class="pagination__page-btn pagination__number">{{page}}</a>',currentPage:'<strong class="pagination__page-btn pagination__current-page">{{page}}</strong>',moveButton:'<a aria-label="Load {{type}}" href="#" class="pagination__page-btn pagination__{{type}}"><span class="pagination__ico-{{type}}"></span></a>',disabledMoveButton:'<span class="pagination__page-btn pagination__is-disabled pagination__{{type}}"><span class="pagination__ico-{{type}}"></span></span>',moreButton:'<a aria-label="Load more page and move to next page" href="#" class="pagination__page-btn pagination__{{type}}-is-ellip"><span class="pagination__ico-ellip">...</span></a>'}},d=new(t(a))(p.container,_);function v(){return v=t(o)(t(r).mark((function e(n){var i,s,a,f;return t(r).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return m(n.page),i=u.default.load("books"),s=b(i,h),e.next=5,s[n.page-1].map(function(){var e=t(o)(t(r).mark((function e(n){var i;return t(r).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.default.get("https://books-backend.p.goit.global/books/".concat(n));case 2:return i=t.sent,t.next=5,i.data;case 5:return t.abrupt("return",t.sent);case 6:case"end":return t.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 5:return a=e.sent,e.next=8,Promise.allSettled(a);case 8:f=e.sent.map((function(t){return t.value})),p.listEl.innerHTML=(0,l.default)(f),p.titleEl.scrollIntoView({behavior:"smooth"});case 11:case"end":return e.stop()}}),e)}))),v.apply(this,arguments)}function m(t){var e=p.container.querySelector(".pagination__last-child").textContent;t===Number(e)?p.container.classList.add("pagination__reverse"):p.container.classList.remove("pagination__reverse")}function b(t,e){for(var n=[],i=0;i<t.length;i+=e){var s=t.slice(i,i+e);n.push(s)}return n}d.on("afterMove",(function(t){return v.apply(this,arguments)}))})),n.register("1VFfL",(function(t,e){
/*!
 * TOAST UI Pagination
 * @version 3.4.1
 * @author NHN FE Development Team <dl_javascript@nhn.com>
 * @license MIT
 */
var n;window,n=function(){return function(t){var e={};function n(i){if(e[i])return e[i].exports;var s=e[i]={i:i,l:!1,exports:{}};return t[i].call(s.exports,s,s.exports,n),s.l=!0,s.exports}return n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)n.d(i,s,function(e){return t[e]}.bind(null,s));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="dist",n(n.s=10)}([function(t,e,n){"use strict";t.exports=function(t,e){var n,i,s,o,r=Object.prototype.hasOwnProperty;for(s=1,o=arguments.length;s<o;s+=1)for(i in n=arguments[s])r.call(n,i)&&(t[i]=n[i]);return t}},function(t,e,n){"use strict";t.exports=function(t){return void 0===t}},function(t,e,n){"use strict";t.exports=function(t){return t instanceof Array}},function(t,e,n){"use strict";var i=n(2),s=n(17),o=n(6);t.exports=function(t,e,n){i(t)?s(t,e,n):o(t,e,n)}},function(t,e,n){"use strict";t.exports=function(t){return"string"==typeof t||t instanceof String}},function(t,e,n){"use strict";t.exports=function(t){return t instanceof Function}},function(t,e,n){"use strict";t.exports=function(t,e,n){var i;for(i in n=n||null,t)if(t.hasOwnProperty(i)&&!1===e.call(n,t[i],i,t))break}},function(t,e,n){"use strict";var i=n(18),s=n(0);t.exports=function(t,e){var n;return e||(e=t,t=null),n=e.init||function(){},t&&i(n,t),e.hasOwnProperty("static")&&(s(n,e.static),delete e.static),s(n.prototype,e),n}},function(t,e,n){"use strict";var i=n(2);t.exports=function(t,e,n){var s,o;if(n=n||0,!i(e))return-1;if(Array.prototype.indexOf)return Array.prototype.indexOf.call(e,t,n);for(o=e.length,s=n;n>=0&&s<o;s+=1)if(e[s]===t)return s;return-1}},function(t,e,n){"use strict";var i=n(29),s=n(30),o=n(5),r={capitalizeFirstLetter:function(t){return t.substring(0,1).toUpperCase()+t.substring(1,t.length)},isContained:function(t,e){return!!e&&(t===e||e.contains(t))},createElementByTemplate:function(t,e){var n=document.createElement("div"),s=o(t)?t(e):i(t,e);return n.innerHTML=s,n.firstChild},bind:function(t,e){var n,i=Array.prototype.slice;return t.bind?t.bind.apply(t,i.call(arguments,1)):(n=i.call(arguments,2),function(){return t.apply(e,n.length?n.concat(i.call(arguments)):arguments)})},sendHostName:function(){s("pagination","UA-129987462-1")}};t.exports=r},function(t,e,n){"use strict";n(11),t.exports=n(12)},function(t,e,n){},function(t,e,n){"use strict";var i=n(13),s=n(7),o=n(0),r=n(1),a=n(20),c=n(9),l={totalItems:10,itemsPerPage:10,visiblePages:10,page:1,centerAlign:!1,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child",usageStatistics:!0},u=s({init:function(t,e){this._options=o({},l,e),this._currentPage=0,this._view=new a(t,this._options,c.bind(this._onClickHandler,this)),this._paginate(),this._options.usageStatistics&&c.sendHostName()},_setCurrentPage:function(t){this._currentPage=t||this._options.page},_getLastPage:function(){var t=Math.ceil(this._options.totalItems/this._options.itemsPerPage);return t||1},_getPageIndex:function(t){var e;return this._options.centerAlign?(e=t-Math.floor(this._options.visiblePages/2),e=Math.max(e,1),e=Math.min(e,this._getLastPage()-this._options.visiblePages+1)):Math.ceil(t/this._options.visiblePages)},_getRelativePage:function(t){var e="prev"===t,n=this.getCurrentPage();return e?n-1:n+1},_getMorePageIndex:function(t){var e=this._getPageIndex(this.getCurrentPage()),n=this._options.visiblePages,i="prev"===t;return this._options.centerAlign?i?e-1:e+n:i?(e-1)*n:e*n+1},_convertToValidPage:function(t){var e=this._getLastPage();return t=Math.max(t,1),t=Math.min(t,e)},_paginate:function(t){var e=this._makeViewData(t||this._options.page);this._setCurrentPage(t),this._view.update(e)},_makeViewData:function(t){var e={},n=this._getLastPage(),i=this._getPageIndex(t),s=this._getPageIndex(n),o=this._getEdge(t);return e.leftPageNumber=o.left,e.rightPageNumber=o.right,e.prevMore=i>1,e.nextMore=i<s,e.page=t,e.currentPageIndex=t,e.lastPage=n,e.lastPageListIndex=n,e},_getEdge:function(t){var e,n,i,s=this._getLastPage(),o=this._options.visiblePages,r=this._getPageIndex(t);return this._options.centerAlign?(i=Math.floor(o/2),(n=(e=Math.max(t-i,1))+o-1)>s&&(e=Math.max(s-o+1,1),n=s)):(e=(r-1)*o+1,n=r*o,n=Math.min(n,s)),{left:e,right:n}},_onClickHandler:function(t,e){switch(t){case"first":e=1;break;case"prev":e=this._getRelativePage("prev");break;case"next":e=this._getRelativePage("next");break;case"prevMore":e=this._getMorePageIndex("prev");break;case"nextMore":e=this._getMorePageIndex("next");break;case"last":e=this._getLastPage();break;default:if(!e)return}this.movePageTo(e)},reset:function(t){r(t)&&(t=this._options.totalItems),this._options.totalItems=t,this._paginate(1)},movePageTo:function(t){t=this._convertToValidPage(t),this.invoke("beforeMove",{page:t})&&(this._paginate(t),this.fire("afterMove",{page:t}))},setTotalItems:function(t){this._options.totalItems=t},setItemsPerPage:function(t){this._options.itemsPerPage=t},getCurrentPage:function(){return this._currentPage||this._options.page}});i.mixin(u),t.exports=u},function(t,e,n){"use strict";var i=n(0),s=n(14),o=n(4),r=n(16),a=n(2),c=n(5),l=n(3),u=/\s+/g;function p(){this.events=null,this.contexts=null}p.mixin=function(t){i(t.prototype,p.prototype)},p.prototype._getHandlerItem=function(t,e){var n={handler:t};return e&&(n.context=e),n},p.prototype._safeEvent=function(t){var e,n=this.events;return n||(n=this.events={}),t&&((e=n[t])||(e=[],n[t]=e),n=e),n},p.prototype._safeContext=function(){var t=this.contexts;return t||(t=this.contexts=[]),t},p.prototype._indexOfContext=function(t){for(var e=this._safeContext(),n=0;e[n];){if(t===e[n][0])return n;n+=1}return-1},p.prototype._memorizeContext=function(t){var e,n;s(t)&&(e=this._safeContext(),(n=this._indexOfContext(t))>-1?e[n][1]+=1:e.push([t,1]))},p.prototype._forgetContext=function(t){var e,n;s(t)&&(e=this._safeContext(),(n=this._indexOfContext(t))>-1&&(e[n][1]-=1,e[n][1]<=0&&e.splice(n,1)))},p.prototype._bindEvent=function(t,e,n){var i=this._safeEvent(t);this._memorizeContext(n),i.push(this._getHandlerItem(e,n))},p.prototype.on=function(t,e,n){var i=this;o(t)?(t=t.split(u),l(t,(function(t){i._bindEvent(t,e,n)}))):r(t)&&(n=e,l(t,(function(t,e){i.on(e,t,n)})))},p.prototype.once=function(t,e,n){var i=this;if(r(t))return n=e,void l(t,(function(t,e){i.once(e,t,n)}));this.on(t,(function s(){e.apply(n,arguments),i.off(t,s,n)}),n)},p.prototype._spliceMatches=function(t,e){var n,i=0;if(a(t))for(n=t.length;i<n;i+=1)!0===e(t[i])&&(t.splice(i,1),n-=1,i-=1)},p.prototype._matchHandler=function(t){var e=this;return function(n){var i=t===n.handler;return i&&e._forgetContext(n.context),i}},p.prototype._matchContext=function(t){var e=this;return function(n){var i=t===n.context;return i&&e._forgetContext(n.context),i}},p.prototype._matchHandlerAndContext=function(t,e){var n=this;return function(i){var s=t===i.handler,o=e===i.context,r=s&&o;return r&&n._forgetContext(i.context),r}},p.prototype._offByEventName=function(t,e){var n=this,i=c(e),s=n._matchHandler(e);t=t.split(u),l(t,(function(t){var e=n._safeEvent(t);i?n._spliceMatches(e,s):(l(e,(function(t){n._forgetContext(t.context)})),n.events[t]=[])}))},p.prototype._offByHandler=function(t){var e=this,n=this._matchHandler(t);l(this._safeEvent(),(function(t){e._spliceMatches(t,n)}))},p.prototype._offByObject=function(t,e){var n,i=this;this._indexOfContext(t)<0?l(t,(function(t,e){i.off(e,t)})):o(e)?(n=this._matchContext(t),i._spliceMatches(this._safeEvent(e),n)):c(e)?(n=this._matchHandlerAndContext(e,t),l(this._safeEvent(),(function(t){i._spliceMatches(t,n)}))):(n=this._matchContext(t),l(this._safeEvent(),(function(t){i._spliceMatches(t,n)})))},p.prototype.off=function(t,e){o(t)?this._offByEventName(t,e):arguments.length?c(t)?this._offByHandler(t):r(t)&&this._offByObject(t,e):(this.events={},this.contexts=[])},p.prototype.fire=function(t){this.invoke.apply(this,arguments)},p.prototype.invoke=function(t){var e,n,i,s;if(!this.hasListener(t))return!0;for(e=this._safeEvent(t),n=Array.prototype.slice.call(arguments,1),i=0;e[i];){if(!1===(s=e[i]).handler.apply(s.context,n))return!1;i+=1}return!0},p.prototype.hasListener=function(t){return this.getListenerLength(t)>0},p.prototype.getListenerLength=function(t){return this._safeEvent(t).length},t.exports=p},function(t,e,n){"use strict";var i=n(1),s=n(15);t.exports=function(t){return!i(t)&&!s(t)}},function(t,e,n){"use strict";t.exports=function(t){return null===t}},function(t,e,n){"use strict";t.exports=function(t){return t===Object(t)}},function(t,e,n){"use strict";t.exports=function(t,e,n){var i=0,s=t.length;for(n=n||null;i<s&&!1!==e.call(n,t[i],i,t);i+=1);}},function(t,e,n){"use strict";var i=n(19);t.exports=function(t,e){var n=i(e.prototype);n.constructor=t,t.prototype=n}},function(t,e,n){"use strict";t.exports=function(t){function e(){}return e.prototype=t,new e}},function(t,e,n){"use strict";var i=n(3),s=n(7),o=n(21),r=n(22),a=n(24),c=n(25),l=n(0),u=n(4),p=n(28),f=n(9),h={page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'},g=["first","prev","next","last"],_=["prev","next"],d=s({init:function(t,e,n){this._containerElement=null,this._firstItemClassName=e.firstItemClassName,this._lastItemClassName=e.lastItemClassName,this._template=l({},h,e.template),this._buttons={},this._enabledPageElements=[],this._setRootElement(t),this._setMoveButtons(),this._setDisabledMoveButtons(),this._setMoreButtons(),this._attachClickEvent(n)},_setRootElement:function(t){if(u(t)?t=document.getElementById(t)||document.querySelector(t):t.jquery&&(t=t[0]),!p(t))throw new Error("The container element is invalid.");this._containerElement=t},_setMoveButtons:function(){i(g,(function(t){this._buttons[t]=f.createElementByTemplate(this._template.moveButton,{type:t})}),this)},_setDisabledMoveButtons:function(){i(g,(function(t){var e="disabled"+f.capitalizeFirstLetter(t);this._buttons[e]=f.createElementByTemplate(this._template.disabledMoveButton,{type:t})}),this)},_setMoreButtons:function(){i(_,(function(t){var e=t+"More";this._buttons[e]=f.createElementByTemplate(this._template.moreButton,{type:t})}),this)},_getContainerElement:function(){return this._containerElement},_appendFirstButton:function(t){var e;e=t.page>1?this._buttons.first:this._buttons.disabledFirst,this._getContainerElement().appendChild(e)},_appendPrevButton:function(t){var e;e=t.currentPageIndex>1?this._buttons.prev:this._buttons.disabledPrev,this._getContainerElement().appendChild(e)},_appendNextButton:function(t){var e;e=t.currentPageIndex<t.lastPageListIndex?this._buttons.next:this._buttons.disabledNext,this._getContainerElement().appendChild(e)},_appendLastButton:function(t){var e;e=t.page<t.lastPage?this._buttons.last:this._buttons.disabledLast,this._getContainerElement().appendChild(e)},_appendPrevMoreButton:function(t){var e;t.prevMore&&(e=this._buttons.prevMore,c(e,this._firstItemClassName),this._getContainerElement().appendChild(e))},_appendNextMoreButton:function(t){var e;t.nextMore&&(e=this._buttons.nextMore,c(e,this._lastItemClassName),this._getContainerElement().appendChild(e))},_appendPages:function(t){var e,n,i=t.leftPageNumber,s=t.rightPageNumber;for(n=i;n<=s;n+=1)n===t.page?e=f.createElementByTemplate(this._template.currentPage,{page:n}):(e=f.createElementByTemplate(this._template.page,{page:n}),this._enabledPageElements.push(e)),n!==i||t.prevMore||c(e,this._firstItemClassName),n!==s||t.nextMore||c(e,this._lastItemClassName),this._getContainerElement().appendChild(e)},_attachClickEvent:function(t){var e=this._getContainerElement();r(e,"click",(function(e){var n,i,s=o(e);a(e),(i=this._getButtonType(s))||(n=this._getPageNumber(s)),t(i,n)}),this)},_getButtonType:function(t){var e,n=this._buttons;return i(n,(function(n,i){return!f.isContained(t,n)||(e=i,!1)}),this),e},_getPageNumber:function(t){var e,n=this._findPageElement(t);return n&&(e=parseInt(n.innerText,10)),e},_findPageElement:function(t){for(var e,n=0,i=this._enabledPageElements.length;n<i;n+=1)if(e=this._enabledPageElements[n],f.isContained(t,e))return e;return null},_empty:function(){this._enabledPageElements=[],i(this._buttons,(function(t,e){this._buttons[e]=t.cloneNode(!0)}),this),this._getContainerElement().innerHTML=""},update:function(t){this._empty(),this._appendFirstButton(t),this._appendPrevButton(t),this._appendPrevMoreButton(t),this._appendPages(t),this._appendNextMoreButton(t),this._appendNextButton(t),this._appendLastButton(t)}});t.exports=d},function(t,e,n){"use strict";t.exports=function(t){return t.target||t.srcElement}},function(t,e,n){"use strict";var i=n(4),s=n(3),o=n(23);function r(t,e,n,i){function r(e){n.call(i||t,e||window.event)}"addEventListener"in t?t.addEventListener(e,r):"attachEvent"in t&&t.attachEvent("on"+e,r),function(t,e,n,i){var r=o(t,e),a=!1;s(r,(function(t){return t.handler!==n||(a=!0,!1)})),a||r.push({handler:n,wrappedHandler:i})}(t,e,n,r)}t.exports=function(t,e,n,o){i(e)?s(e.split(/\s+/g),(function(e){r(t,e,n,o)})):s(e,(function(e,i){r(t,i,e,n)}))}},function(t,e,n){"use strict";var i="_feEventKey";t.exports=function(t,e){var n,s=t[i];return s||(s=t[i]={}),(n=s[e])||(n=s[e]=[]),n}},function(t,e,n){"use strict";t.exports=function(t){t.preventDefault?t.preventDefault():t.returnValue=!1}},function(t,e,n){"use strict";var i=n(3),s=n(8),o=n(26),r=n(27);t.exports=function(t){var e,n=Array.prototype.slice.call(arguments,1),a=t.classList,c=[];a?i(n,(function(e){t.classList.add(e)})):((e=o(t))&&(n=[].concat(e.split(/\s+/),n)),i(n,(function(t){s(t,c)<0&&c.push(t)})),r(t,c))}},function(t,e,n){"use strict";var i=n(1);t.exports=function(t){return t&&t.className?i(t.className.baseVal)?t.className:t.className.baseVal:""}},function(t,e,n){"use strict";var i=n(2),s=n(1);t.exports=function(t,e){e=(e=i(e)?e.join(" "):e).replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),s(t.className.baseVal)?t.className=e:t.className.baseVal=e}},function(t,e,n){"use strict";t.exports=function(t){return"object"==typeof HTMLElement?t&&(t instanceof HTMLElement||!!t.nodeType):!(!t||!t.nodeType)}},function(t,e,n){"use strict";var i=n(8),s=n(3),o=n(2),r=n(4),a=n(0),c=/{{\s?|\s?}}/g,l=/^[a-zA-Z0-9_@]+\[[a-zA-Z0-9_@"']+\]$/,u=/\[\s?|\s?\]/,p=/^[a-zA-Z_]+\.[a-zA-Z_]+$/,f=/\./,h=/^["']\w+["']$/,g=/"|'/g,_=/^-?\d+\.?\d*$/,d={if:function(t,e,n){var i=function(t,e){var n=[t],i=[],o=0,r=0;return s(e,(function(t,s){0===t.indexOf("if")?o+=1:"/if"===t?o-=1:o||0!==t.indexOf("elseif")&&"else"!==t||(n.push("else"===t?["true"]:t.split(" ").slice(1)),i.push(e.slice(r,s)),r=s+1)})),i.push(e.slice(r)),{exps:n,sourcesInsideIf:i}}(t,e),o=!1,r="";return s(i.exps,(function(t,e){return(o=x(t,n))&&(r=y(i.sourcesInsideIf[e],n)),!o})),r},each:function(t,e,n){var i=x(t,n),r=o(i)?"@index":"@key",c={},l="";return s(i,(function(t,i){c[r]=i,c["@this"]=t,a(n,c),l+=y(e.slice(),n)})),l},with:function(t,e,n){var s=i("as",t),o=t[s+1],r=x(t.slice(0,s),n),c={};return c[o]=r,y(e,a(n,c))||""}},v=3==="a".split(/a/).length?function(t,e){return t.split(e)}:function(t,e){var n,i,s=[],o=0;for(e.global||(e=new RegExp(e,"g")),n=e.exec(t);null!==n;)i=n.index,s.push(t.slice(o,i)),o=i+n[0].length,n=e.exec(t);return s.push(t.slice(o)),s};function m(t,e){var n,i=e[t];return"true"===t?i=!0:"false"===t?i=!1:h.test(t)?i=t.replace(g,""):l.test(t)?i=m((n=t.split(u))[0],e)[m(n[1],e)]:p.test(t)?i=m((n=t.split(f))[0],e)[n[1]]:_.test(t)&&(i=parseFloat(t)),i}function b(t,e,n){for(var i,s,o,a,c=d[t],l=1,u=2,p=e[u];l&&r(p);)0===p.indexOf(t)?l+=1:0===p.indexOf("/"+t)&&(l-=1,i=u),p=e[u+=2];if(l)throw Error(t+" needs {{/"+t+"}} expression.");return e[0]=c(e[0].split(" ").slice(1),(s=0,o=i,(a=e.splice(s+1,o-s)).pop(),a),n),e}function x(t,e){var n=m(t[0],e);return n instanceof Function?function(t,e,n){var i=[];return s(e,(function(t){i.push(m(t,n))})),t.apply(null,i)}(n,t.slice(1),e):n}function y(t,e){for(var n,i,s,o=1,a=t[o];r(a);)i=(n=a.split(" "))[0],d[i]?(s=b(i,t.splice(o,t.length-o),e),t=t.concat(s)):t[o]=x(n,e),a=t[o+=2];return t.join("")}t.exports=function(t,e){return y(v(t,c),e)}},function(t,e,n){"use strict";var i=n(1),s=n(31);t.exports=function(t,e){var n=location.hostname,o="TOAST UI "+t+" for "+n+": Statistics",r=window.localStorage.getItem(o);(i(window.tui)||!1!==window.tui.usageStatistics)&&(r&&!function(t){return(new Date).getTime()-t>6048e5}(r)||(window.localStorage.setItem(o,(new Date).getTime()),setTimeout((function(){"interactive"!==document.readyState&&"complete"!==document.readyState||s("https://www.google-analytics.com/collect",{v:1,t:"event",tid:e,cid:n,dp:n,dh:t,el:t,ec:"use"})}),1e3)))}},function(t,e,n){"use strict";var i=n(6);t.exports=function(t,e){var n=document.createElement("img"),s="";return i(e,(function(t,e){s+="&"+e+"="+t})),s=s.substring(1),n.src=t+"?"+s,n.style.display="none",document.body.appendChild(n),document.body.removeChild(n),n}}])},t.exports=n()})),n.register("j6slc",(function(i,s){e(i.exports,"default",(function(){return g}));var o=n("1t1Wn"),r=n("59UBY"),a=n("96ffj"),c=n("4ZlsZ"),l=n("fsKCL"),u=n("9aZBP"),p=n("2LiSf"),f=n("49m25");function h(t){return window.innerWidth<768&&t.length>20?t.substring(0,20)+"...":t}var g=function(e){return e.map((function(e){var n=e._id,i=e.book_image,s=e.author,g=e.book_image_width,_=e.book_image_height,d=e.title,v=e.list_name,m=e.description,b=t(o)(e.buy_links,5),x=b[0],y=b[1],P=b[4];return'<li class="shopinlist__card" data-id="'.concat(n,'">\n\t\t\t\t\t<div class="shopinlist__block">\n\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t<div class="shopinlist__thumb">\n\t\t\t\t\t\t\t\t<img src="').concat(i,'" alt="').concat(v,'" class="shopinlist__book-img" width="').concat(g,'" height="').concat(_,'" />\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<p class="shopinlist__book-author">').concat(s,'</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class="shopinlist__wrap">\n\t\t\t\t\t\t\t<h2 class="shopinlist__title">').concat(h(d),'</h2>\n\t\t\t\t\t\t\t<p class="shopinlist__category">').concat(h(v),'</p>\n\t\t\t\t\t\t\t<p class="shopinlist__book-description--tablet">').concat(m||"Description",'</p>\n\t\t\t\t\t\t\t<ul class="shopinlist__shops">\n\t\t\t\t\t\t\t\t<li class="shopinlist__shop">\n\t\t\t\t\t\t\t\t\t<a href="').concat(x.url,'" class="shopinlist__shop-link" target="_blank" crossorigin="anonymous" rel="noopener noreferrer" aria-label="Amazon-book site">\n\t\t\t\t\t\t\t\t\t<img srset="').concat(t(a)," 1x, ").concat(t(c),' 2x" src="').concat(t(a),'" alt="').concat(x.name,'" class="shopinlist__shop-img amazon" width="48" height="15" />\n\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t<li class="shopinlist__shop">\n\t\t\t\t\t\t\t\t\t<a href="',"apple.url",'" class="shopinlist__shop-link" target="_blank" crossorigin="anonymous" rel="noopener noreferrer" aria-label="Apple-book site">\n\t\t\t\t\t\t\t\t\t<img srset="').concat(t(l)," 1x, ").concat(t(u),' 2x" src="').concat(t(l),'" alt="').concat(y.name,'" class="shopinlist__shop-img" width="28" height="27" />\n\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t<li class="shopinlist__shop">\n\t\t\t\t\t\t\t\t\t<a href="',"bookshop.url",'" class="shopinlist__shop-link" target="_blank" crossorigin="anonymous" rel="noopener noreferrer" aria-label="Book-shop site">\n\t\t\t\t\t\t\t\t\t<img srset="').concat(t(p)," 1x, ").concat(t(f),' 2x" src="').concat(t(p),'" alt="').concat(P.name,'" class="shopinlist__shop-img" width="32" height="30" />\n\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t<div class="shopinlist__wrap-shops--tablet">\n\t\t\t\t\t\t\t<p class="shopinlist__bookauthor--tablet">').concat(s,'</p>\n\t\t\t\t\t\t\t<ul class="shopinlist__shops--tablet">\n\t\t\t\t\t\t\t\t<li class="shopinlist__shop">\n\t\t\t\t\t\t\t\t\t<a href="').concat(x.url,'" class="shopinlist__shop-link" target="_blank" crossorigin="anonymous" rel="noopener noreferrer" aria-label="Amazon-book site">\n\t\t\t\t\t\t\t\t\t<img srset="').concat(t(a)," 1x, ").concat(t(c),' 2x" src="').concat(t(a),'" alt="').concat(x.name,'" class="shopinlist__shop-img amazon" width="48" height="15" />\n\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t<li class="shopinlist__shop">\n\t\t\t\t\t\t\t\t\t<a href="',"apple.url",'" class="shopinlist__shop-link" target="_blank" crossorigin="anonymous" rel="noopener noreferrer" aria-label="Apple-book site">\n\t\t\t\t\t\t\t\t\t<img srset="').concat(t(l)," 1x, ").concat(t(u),' 2x" src="').concat(t(l),'" alt="').concat(y.name,'" class="shopinlist__shop-img" width="28" height="27" />\n\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t<li class="shopinlist__shop">\n\t\t\t\t\t\t\t\t\t<a href="',"bookshop.url",'" class="shopinlist__shop-link" target="_blank" crossorigin="anonymous" rel="noopener noreferrer" aria-label="Book-shop site">\n\t\t\t\t\t\t\t\t\t<img srset="').concat(t(p)," 1x, ").concat(t(f),' 2x" src="').concat(t(p),'" alt="').concat(P.name,'" class="shopinlist__shop-img" width="32" height="30" />\n\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<button type="button" class="shopinlist__btn" arial-label="Delete the book from shopping list">\n\t\t\t\t\t\t<svg class="shopinlist__btn-icon" width="15" height="15">\n\t\t\t\t\t\t\t<use href="').concat(t(r),'#icon-dump"></use>\n\t\t\t\t\t\t</svg>\n\t\t\t\t\t</button\n\t\t\t</li>')})).join("")}})),n.register("59UBY",(function(t,e){t.exports=n("aNJCr").getBundleURL("7CwvE")+n("iE7OH").resolve("ee16w")})),n.register("96ffj",(function(t,e){t.exports=n("aNJCr").getBundleURL("7CwvE")+n("iE7OH").resolve("85TVO")})),n.register("4ZlsZ",(function(t,e){t.exports=n("aNJCr").getBundleURL("7CwvE")+n("iE7OH").resolve("l4LHY")})),n.register("fsKCL",(function(t,e){t.exports=n("aNJCr").getBundleURL("7CwvE")+n("iE7OH").resolve("1W9xN")})),n.register("9aZBP",(function(t,e){t.exports=n("aNJCr").getBundleURL("7CwvE")+n("iE7OH").resolve("bRKWQ")})),n.register("2LiSf",(function(t,e){t.exports=n("aNJCr").getBundleURL("7CwvE")+n("iE7OH").resolve("3Kvit")})),n.register("49m25",(function(t,e){t.exports=n("aNJCr").getBundleURL("7CwvE")+n("iE7OH").resolve("2bgCQ")})),n.register("4op18",(function(t,n){e(t.exports,"default",(function(){return i}));var i={save:function(t,e){try{var n=JSON.stringify(e);localStorage.setItem(t,n)}catch(t){console.error("Set stutus error:",t.message)}},load:function(t){try{var e=localStorage.getItem(t);return null===e?[]:JSON.parse(e)}catch(t){console.error("Get stutus error:",t.message)}},remove:function(t){try{localStorage.removeItem(t)}catch(t){console.error("Remove stutus error:",t.message)}}}}))}();
//# sourceMappingURL=pagination.9491423b.js.map

!function(){function e(e){return e&&e.__esModule?e.default:e}function t(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}var n=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequired7c6;n.register("hYjmn",(function(r,o){var a;a=r.exports,Object.defineProperty(a,"__esModule",{value:!0,configurable:!0}),t(r.exports,"default",(function(){return v}));var c=n("bpxeT"),u=n("2TvXO"),s=n("jpRhc"),i=n("lljKj"),l=n("7JdID"),p={ul:document.querySelector(".js-all-books"),sectionCategory:document.querySelector(".category > .container")},f="https://books-backend.p.goit.global/books/top-books?",d=!0;function g(){return h.apply(this,arguments)}function h(){return(h=e(c)(e(u).mark((function t(){var n,r,o;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new(0,l.Loader)(p.sectionCategory,"loader-container"),e.prev=1,n.show(),e.next=5,(0,s.getRequest)("".concat(f));case 5:r=e.sent,o=r.map(i.topBooksContainerMarcup).join(""),p.ul.classList.remove("category__list"),p.ul.innerHTML=o,e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),console.log(e.t0);case 14:return e.prev=14,d&&(b.hide(),d=!1),n.hide(),e.finish(14);case 18:case"end":return e.stop()}}),t,null,[[1,11,14,18]])})))).apply(this,arguments)}var b=new(0,l.Loader)(document.querySelector("header"),"preloader-page");b.show(),g();var v=g})),n.register("jpRhc",(function(r,o){t(r.exports,"getRequest",(function(){return s}));var a=n("bpxeT"),c=n("2TvXO"),u=n("dIxxU");function s(e){return i.apply(this,arguments)}function i(){return(i=e(a)(e(c).mark((function t(n){var r,o;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.default.get("".concat(n));case 3:return r=e.sent,e.next=6,r.data;case 6:return o=e.sent,e.abrupt("return",o);case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),t,null,[[0,10]])})))).apply(this,arguments)}}))}();
//# sourceMappingURL=topBooks.a6d81374.js.map

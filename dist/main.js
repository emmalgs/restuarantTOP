(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>o});var a=t(81),r=t.n(a),i=t(645),d=t.n(i)()(r());d.push([e.id,"* {\n    margin: 0;\n}\n\n:root {\n    --mainGridH: 10rem;\n}\n\nbody {\n    box-sizing: border-box;\n}\n\n#content {\n    display: grid;\n    grid-template-columns: repeat(6, 1fr);\n    grid-template-rows: 1fr, 1fr, 80vh, 1fr;\n}\n\n.header {\n    grid-column: 2/ span 5;\n    border-bottom: 4px solid black;\n    font-size: 5rem;\n    text-align: center;\n    margin: 8px;\n    cursor: pointer;\n}\n\n.sidebar {\n    grid-area: 1 / 1 / 5 / 2;\n    /* width: max(10%, 10vh); */\n    border-right: 2px solid black;\n    padding: 8px;\n}\n\n.nav {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-around;\n    gap: 18px;\n    \n    padding: 20px;\n    grid-column : 3 / span 5;\n\n    border-bottom: 2px solid black;\n    font-size: 2rem;\n}\n\n.menu, \n.about, \n.contact {\n    padding: 8px;\n    text-align: center;\n    cursor: pointer;\n    border: 2px solid black;\n}\n\n#main {\n    grid-column: 2 / span 5;\n    grid-row: 3 / 5;\n    padding: 8px;\n    height: 80vh;\n    overflow: hidden;\n\n\n    display: grid;\n    grid-template-columns: repeat(5, var(--mainGridH));\n    grid-template-rows: repeat(5, var(--mainGridH));\n    gap: 4px;\n\n}\n\n.quote {\n    grid-area: 2 / 3 / span 2 / span 4;\n    padding: 20px;\n    font-family: Arial, Helvetica, sans-serif;\n    color: pink;\n    font-size: calc(var(--mainGridH) * .25);\n    animation: slide-left 12s linear infinite;  \n}\n\n.quote-2 {\n    justify-self: center;\n    grid-area: 3 / 3 / span 2 / span 4;\n    font-family: Arial, Helvetica, sans-serif;\n    color: blue;\n    font-size: calc(var(--mainGridH) * .5);\n}\n\n\n.img-1 {\n    height: calc(var(--mainGridH) * 3);\n    width: calc(var(--mainGridH) * 2);\n    object-fit: cover;\n    grid-area: 1 / 1 / span 3 / span 2;\n}\n\n.img-2 {\n    height: calc(var(--mainGridH) * 2);\n    width: calc(var(--mainGridH) * 2);\n    object-fit: cover;\n    grid-area: 4 / 4 / span 2 / span 2;\n}\n\n.img-3 {\n    height: calc(var(--mainGridH) * 1);\n    width: calc(var(--mainGridH) * 4);\n    object-fit: cover;\n    grid-area: 1 / 3 / 1 / span 4;\n}\n\n.img-4 {\n    height: calc(var(--mainGridH) * .8);\n    width: calc(var(--mainGridH) * .8);\n    object-fit: cover;\n    grid-area: 4 / 2 / 5 / 3;\n}\n\n.dinner-header {\n    padding: 8px;\n    text-align: center;\n    border: 2px solid black;\n    font-size: 3rem;\n    grid-area: 1 / 1 / 1 / span 6;\n    align-self: center;\n}\n\n.menu-item {\n    font-size: 1.25rem;\n    font-weight: bold;\n    padding: 18px;\n    grid-area: 2 / 1 / 3 / 3;\n    justify-content: center;\n    align-items: center;\n}\n\n.menu-desc {\n    padding-top: 8px;\n    font-size: 1rem;\n    font-weight: normal;\n}\n\n.price {\n    font-size: 1.5rem;\n    font-weight: bold;\n    grid-area: 2 / 3 / 3 / 4;\n}\n\n@keyframes slide-left {\n    from {\n      -webkit-transform: translateX(100%);\n              transform: translateX(100%);\n    }\n    to {\n      -webkit-transform: translateX(-200%);\n              transform: translateX(-200%);\n    }\n}",""]);const o=d},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",a=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),a&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),a&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,a,r,i){"string"==typeof e&&(e=[[null,e,void 0]]);var d={};if(a)for(var o=0;o<this.length;o++){var c=this[o][0];null!=c&&(d[c]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);a&&d[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),n.push(l))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,a=0;a<n.length;a++)if(n[a].identifier===e){t=a;break}return t}function a(e,a){for(var i={},d=[],o=0;o<e.length;o++){var c=e[o],s=a.base?c[0]+a.base:c[0],l=i[s]||0,m="".concat(s," ").concat(l);i[s]=l+1;var p=t(m),u={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)n[p].references++,n[p].updater(u);else{var f=r(u,a);a.byIndex=o,n.splice(o,0,{identifier:m,updater:f,references:1})}d.push(m)}return d}function r(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,r){var i=a(e=e||[],r=r||{});return function(e){e=e||[];for(var d=0;d<i.length;d++){var o=t(i[d]);n[o].references--}for(var c=a(e,r),s=0;s<i.length;s++){var l=t(i[s]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}i=c}}},569:e=>{var n={};e.exports=function(e,t){var a=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var a="";t.supports&&(a+="@supports (".concat(t.supports,") {")),t.media&&(a+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(a+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),a+=t.css,r&&(a+="}"),t.media&&(a+="}"),t.supports&&(a+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleTagTransform(a,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(a){var r=n[a];if(void 0!==r)return r.exports;var i=n[a]={id:a,exports:{}};return e[a](i,i.exports,t),i.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var a in n)t.o(n,a)&&!t.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:n[a]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.nc=void 0,(()=>{var e=t(379),n=t.n(e),a=t(795),r=t.n(a),i=t(569),d=t.n(i),o=t(565),c=t.n(o),s=t(216),l=t.n(s),m=t(589),p=t.n(m),u=t(426),f={};function v(){const e=document.querySelector("#content");for(;e.children.length>1;)e.children[1].remove()}function g(){const e=document.querySelector(".header"),n=document.querySelector(".menu"),t=document.querySelector(".about"),a=document.querySelector(".contact");e.addEventListener("click",(()=>{v(),h()})),n.addEventListener("click",(()=>{v(),function(){const e=document.querySelector("#content"),n=document.createElement("div"),t=document.createElement("div"),a=document.createElement("div"),r=document.createElement("div"),i=document.createElement("div");document.createElement("img"),n.classList.add("sidebar"),e.append(n),t.classList.add("nav"),e.appendChild(t),a.classList.add("menu"),a.textContent="Menu",t.append(a),r.classList.add("about"),r.textContent="About",t.append(r),i.classList.add("contact"),i.textContent="Contact",t.append(i);const d=document.createElement("div"),o=document.createElement("div");d.setAttribute("id","main"),e.append(d),o.classList.add("dinner-header"),o.textContent="DINNER",d.append(o);const c=document.createElement("div"),s=document.createElement("div"),l=document.createElement("div");c.classList.add("menu-item"),c.textContent="Timothy Western Hay",d.append(c),s.classList.add("menu-desc"),s.textContent="Sun-dried on the plains of Northern California for the freshest grassy chew",c.append(s),l.classList.add("price"),l.textContent="$9.99",d.append(l),g()}()})),t.addEventListener("click",(()=>{v(),function(){const e=document.querySelector("#content"),n=document.createElement("div"),t=document.createElement("div"),a=document.createElement("div"),r=document.createElement("div"),i=document.createElement("div"),d=document.createElement("div");n.classList.add("sidebar"),e.append(n),t.classList.add("nav"),e.appendChild(t),a.classList.add("menu"),a.textContent="Menu",t.append(a),r.classList.add("about"),r.textContent="About",t.append(r),i.classList.add("contact"),i.textContent="Contact",t.append(i),d.setAttribute("id","main"),e.append(d),g()}()})),a.addEventListener("click",(()=>{v(),function(){const e=document.querySelector("#content"),n=document.createElement("div"),t=document.createElement("div"),a=document.createElement("div"),r=document.createElement("div"),i=document.createElement("div"),d=document.createElement("div");document.createElement("div"),document.createElement("img"),n.classList.add("sidebar"),e.append(n),t.classList.add("nav"),e.appendChild(t),a.classList.add("menu"),a.textContent="Menu",t.append(a),r.classList.add("about"),r.textContent="About",t.append(r),i.classList.add("contact"),i.textContent="Contact",t.append(i),d.setAttribute("id","main"),e.append(d),g()}()}))}function h(){const e=document.getElementById("content"),n=document.createElement("div"),t=document.createElement("div"),a=document.createElement("div"),r=document.createElement("div"),i=document.createElement("div"),d=document.createElement("div"),o=document.createElement("div"),c=document.createElement("div"),s=document.createElement("img"),l=document.createElement("img"),m=document.createElement("img"),p=document.createElement("img");n.classList.add("sidebar"),e.append(n),t.classList.add("nav"),e.appendChild(t),a.classList.add("menu"),a.textContent="Menu",t.append(a),r.classList.add("about"),r.textContent="About",t.append(r),i.classList.add("contact"),i.textContent="Contact",t.append(i),d.setAttribute("id","main"),e.append(d),o.classList.add("quote"),o.textContent='"Best hot food this side of I-5"',d.append(o),c.classList.add("quote-2"),c.textContent='"Tasted Fine."',d.append(c),s.src="../src/squash.jpeg",s.classList.add("img-1"),d.appendChild(s),l.src="../src/beans.jpeg",l.classList.add("img-2"),d.appendChild(l),m.src="../src/meatballs.jpeg",m.classList.add("img-3"),d.appendChild(m),p.src="../src/meal.jpeg",p.classList.add("img-4"),d.appendChild(p),g()}f.styleTagTransform=p(),f.setAttributes=c(),f.insert=d().bind(null,"head"),f.domAPI=r(),f.insertStyleElement=l(),n()(u.Z,f),u.Z&&u.Z.locals&&u.Z.locals,function(){const e=document.querySelector("#content"),n=document.createElement("div");n.classList.add("header"),n.textContent="BUCKY'S ONE-STOP",e.appendChild(n)}(),h(),g(),document.querySelector(".quote").textContent="HEWCKIN HECK"})()})();
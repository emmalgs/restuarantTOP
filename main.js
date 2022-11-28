(()=>{"use strict";var n={426:(n,e,t)=>{t.d(e,{Z:()=>c});var r=t(81),a=t.n(r),i=t(645),o=t.n(i)()(a());o.push([n.id,"* {\n    margin: 0;\n}\n\n:root {\n    --mainGridH: 10rem;\n}\n\nbody {\n    box-sizing: border-box;\n}\n\n#content {\n    display: grid;\n    grid-template-columns: repeat(6, 1fr);\n    grid-template-rows: 1fr, 1fr, 80vh, 1fr;\n}\n\n.header {\n    grid-column: 2/ span 5;\n    border-bottom: 4px solid black;\n    font-size: 5rem;\n    text-align: center;\n    margin: 8px;\n    cursor: pointer;\n}\n\n.sidebar {\n    grid-area: 1 / 1 / 5 / 2;\n    border-right: 2px solid black;\n    padding: 30px;\n\n    font-size: 9rem;\n    height: 100vh\n}\n\n.nav {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-around;\n    gap: 18px;\n    \n    padding: 20px;\n    grid-column : 3 / span 5;\n\n    border-bottom: 2px solid black;\n    font-size: 2rem;\n}\n\n.menu, \n.about, \n.contact {\n    padding: 8px;\n    text-align: center;\n    cursor: pointer;\n    border: 2px solid black;\n}\n\n#main {\n    grid-column: 2 / span 5;\n    grid-row: 3 / 5;\n    padding: 8px;\n    height: 80vh;\n    overflow: hidden;\n\n\n    display: grid;\n    grid-template-columns: repeat(5, var(--mainGridH));\n    grid-template-rows: repeat(5, var(--mainGridH));\n    gap: 4px;\n\n}\n\n.quote {\n    grid-area: 2 / 3 / span 2 / span 4;\n    padding: 20px;\n    font-family: Arial, Helvetica, sans-serif;\n    color: pink;\n    font-size: calc(var(--mainGridH) * .25);\n    animation: slide-left 12s linear infinite;  \n}\n\n.quote-2 {\n    justify-self: center;\n    grid-area: 3 / 3 / span 2 / span 4;\n    font-family: Arial, Helvetica, sans-serif;\n    color: blue;\n    font-size: calc(var(--mainGridH) * .5);\n}\n\n\n.img-1 {\n    height: calc(var(--mainGridH) * 3);\n    width: calc(var(--mainGridH) * 2);\n    object-fit: cover;\n    grid-area: 1 / 1 / span 3 / span 2;\n}\n\n.img-2 {\n    height: calc(var(--mainGridH) * 2);\n    width: calc(var(--mainGridH) * 2);\n    object-fit: cover;\n    grid-area: 4 / 4 / span 2 / span 2;\n}\n\n.img-3 {\n    height: calc(var(--mainGridH) * 1);\n    width: calc(var(--mainGridH) * 4);\n    object-fit: cover;\n    grid-area: 1 / 3 / 1 / span 4;\n}\n\n.img-4 {\n    height: calc(var(--mainGridH) * .8);\n    width: calc(var(--mainGridH) * .8);\n    object-fit: cover;\n    grid-area: 4 / 2 / 5 / 3;\n}\n\n.dinner-header {\n    padding: 8px;\n    text-align: center;\n    border: 2px solid black;\n    font-size: 3rem;\n    grid-area: 1 / 1 / 1 / span 6;\n    align-self: center;\n}\n\n.menu-item {\n    font-size: 1.25rem;\n    font-weight: bold;\n    padding: 18px;\n    grid-area: 2 / 1 / 3 / 3;\n    justify-content: center;\n    align-items: center;\n}\n\n.menu-desc {\n    padding-top: 8px;\n    font-size: 1rem;\n    font-weight: normal;\n}\n\n.price {\n    font-size: 1.5rem;\n    font-weight: bold;\n    grid-area: 2 / 3 / 3 / 4;\n}\n\n@keyframes slide-left {\n    from {\n      -webkit-transform: translateX(100%);\n              transform: translateX(100%);\n    }\n    to {\n      -webkit-transform: translateX(-200%);\n              transform: translateX(-200%);\n    }\n}",""]);const c=o},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,a,i){"string"==typeof n&&(n=[[null,n,void 0]]);var o={};if(r)for(var c=0;c<this.length;c++){var d=this[c][0];null!=d&&(o[d]=!0)}for(var s=0;s<n.length;s++){var l=[].concat(n[s]);r&&o[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),a&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=a):l[4]="".concat(a)),e.push(l))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var i={},o=[],c=0;c<n.length;c++){var d=n[c],s=r.base?d[0]+r.base:d[0],l=i[s]||0,u="".concat(s," ").concat(l);i[s]=l+1;var p=t(u),m={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==p)e[p].references++,e[p].updater(m);else{var f=a(m,r);r.byIndex=c,e.splice(c,0,{identifier:u,updater:f,references:1})}o.push(u)}return o}function a(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,a){var i=r(n=n||[],a=a||{});return function(n){n=n||[];for(var o=0;o<i.length;o++){var c=t(i[o]);e[c].references--}for(var d=r(n,a),s=0;s<i.length;s++){var l=t(i[s]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}i=d}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var a=void 0!==t.layer;a&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,a&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(r){var a=e[r];if(void 0!==a)return a.exports;var i=e[r]={id:r,exports:{}};return n[r](i,i.exports,t),i.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.nc=void 0,(()=>{var n=t(379),e=t.n(n),r=t(795),a=t.n(r),i=t(569),o=t.n(i),c=t(565),d=t.n(c),s=t(216),l=t.n(s),u=t(589),p=t.n(u),m=t(426),f={};function v(){const n=document.querySelector("#content");for(;CONENT.children.length>0;)n.children[0].remove()}function g(){const n=document.querySelector(".header"),e=document.querySelector(".menu"),t=document.querySelector(".about"),r=document.querySelector(".contact");n.addEventListener("click",(()=>{v(),n()})),e.addEventListener("click",(()=>{v(),function(){document.querySelector("#content");const n=document.createElement("div"),e=document.createElement("div"),t=document.createElement("div");n.classList.add("menu-item"),n.textContent="Timothy Western Hay",MAIN.append(n),e.classList.add("menu-desc"),e.textContent="Sun-dried on the plains of Northern California for the freshest grassy chew",n.append(e),t.classList.add("price"),t.textContent="$9.99",MAIN.append(t),g()}()})),t.addEventListener("click",(()=>{v(),function(){const n=document.querySelector("#content"),e=document.createElement("div");e.setAttribute("id","main"),n.append(e);const t=document.createElement("div");t.classList.add("info"),t.textContent="This here is a restaurant. We craft food with our little paws.",e.append(t),g()}()})),r.addEventListener("click",(()=>{v(),function(){const n=document.querySelector("#content"),e=document.createElement("div");document.createElement("div"),document.createElement("img"),e.setAttribute("id","main"),n.append(e);const t=document.createElement("div");t.classList.add("contact-info"),t.textContent="Call us at: (555) 123-4567",e.append(t),g()}()}))}f.styleTagTransform=p(),f.setAttributes=d(),f.insert=o().bind(null,"head"),f.domAPI=a(),f.insertStyleElement=l(),e()(m.Z,f),m.Z&&m.Z.locals&&m.Z.locals,function(){const n=document.getElementById("content"),e=document.createElement("div");e.classList.add("header"),e.textContent="BUCKY'S ONE-STOP",n.appendChild(e);const t=document.createElement("div"),r=document.createElement("div"),a=document.createElement("div"),i=document.createElement("div"),o=document.createElement("div");t.classList.add("sidebar"),t.textContent="B\n    U\n    C\n    K\n    Y\n    S",n.append(t),r.classList.add("nav"),n.appendChild(r),a.classList.add("menu"),a.textContent="Menu",r.append(a),i.classList.add("about"),i.textContent="About",r.append(i),o.classList.add("contact"),o.textContent="Contact",r.append(o),g()}(),function(){const n=document.getElementById("content"),e=document.createElement("div"),t=document.createElement("div"),r=document.createElement("div"),a=document.createElement("img"),i=document.createElement("img"),o=document.createElement("img"),c=document.createElement("img");e.setAttribute("id","main"),n.append(e),t.classList.add("quote"),t.textContent='"Best hot food this side of I-5"',e.append(t),r.classList.add("quote-2"),r.textContent='"Tasted Fine."',e.append(r),a.src=squash,a.classList.add("img-1"),e.appendChild(a),i.src=beans,i.classList.add("img-2"),e.appendChild(i),o.src=meatballs,o.classList.add("img-3"),e.appendChild(o),c.src=meal,c.classList.add("img-4"),e.appendChild(c),g()}(),g(),document.querySelector(".quote").textContent="HEWCKIN HECK"})()})();
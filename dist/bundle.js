(()=>{"use strict";var e,n,t,r,o,a,i,c,s,l,d,u,p,f,m={314:(e,n,t)=>{t.d(n,{Z:()=>c});var r=t(81),o=t.n(r),a=t(645),i=t.n(a)()(o());i.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap);"]),i.push([e.id,'* {\n    margin: 0;\n    padding: 0;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box;\n}\n\nbody {\n    background: black;\n    font-family: "Montserrat", sans-serif;\n}\n\n.navMenu {\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    transform: translate(-50%, -50%);\n}\n\n.navMenu a {\n    color: #f6f4e6;\n    text-decoration: none;\n    font-size: 1.5em;\n    text-transform: uppercase;\n    font-weight: 500;\n    display: inline-block;\n    width: 120px;\n    -webkit-transition: all 0.2s ease-in-out;\n    transition: all 0.2s ease-in-out;\n}\n\n.navMenu a:hover {\n    color: darkkhaki;\n}\n\nhr{\n    width: 200px;\n}',""]);const c=i},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var l=0;l<e.length;l++){var d=[].concat(e[l]);r&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),n.push(d))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var a={},i=[],c=0;c<e.length;c++){var s=e[c],l=r.base?s[0]+r.base:s[0],d=a[l]||0,u="".concat(l," ").concat(d);a[l]=d+1;var p=t(u),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)n[p].references++,n[p].updater(f);else{var m=o(f,r);r.byIndex=c,n.splice(c,0,{identifier:u,updater:m,references:1})}i.push(u)}return i}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=t(a[i]);n[c].references--}for(var s=r(e,o),l=0;l<a.length;l++){var d=t(a[l]);0===n[d].references&&(n[d].updater(),n.splice(d,1))}a=s}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},h={};function v(e){var n=h[e];if(void 0!==n)return n.exports;var t=h[e]={id:e,exports:{}};return m[e](t,t.exports,v),t.exports}v.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return v.d(n,{a:n}),n},v.d=(e,n)=>{for(var t in n)v.o(n,t)&&!v.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},v.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),e=v(379),n=v.n(e),t=v(795),r=v.n(t),o=v(569),a=v.n(o),i=v(565),c=v.n(i),s=v(216),l=v.n(s),d=v(589),u=v.n(d),p=v(314),(f={}).styleTagTransform=u(),f.setAttributes=c(),f.insert=a().bind(null,"head"),f.domAPI=r(),f.insertStyleElement=l(),n()(p.Z,f),p.Z&&p.Z.locals&&p.Z.locals,window.onload=function(){!function(e){const n=document.createElement("nav");n.classList.add("navMenu");const t=document.createElement("a");t.href="../me/index.html",t.innerText="15 тэгов обо мне";const r=document.createElement("a");r.href="../gachipiano/index.html",r.innerText="Гачи пианино";const o=document.createElement("a");o.href="../messenger/index.html",o.innerText="Мессенджер";const a=document.createElement("a");a.href="../whackABilly/index.html",a.innerText="Ударь Билли";const i=document.createElement("a");i.href="../brothers/index.html",i.innerText="The Pilots Brothers' refrigerator";const c=document.createElement("a");c.href="../bombCountdown/index.html",c.innerText="Bomb Countdown";const s=document.createElement("a");s.href="../artStation/index.html",s.innerText="Art Station",n.appendChild(t),n.appendChild(r),n.appendChild(o),n.appendChild(a),n.appendChild(i),n.appendChild(c),n.appendChild(s),t.parentNode.insertBefore(document.createElement("hr"),t.nextSibling),r.parentNode.insertBefore(document.createElement("hr"),r.nextSibling),o.parentNode.insertBefore(document.createElement("hr"),o.nextSibling),a.parentNode.insertBefore(document.createElement("hr"),a.nextSibling),i.parentNode.insertBefore(document.createElement("hr"),i.nextSibling),c.parentNode.insertBefore(document.createElement("hr"),c.nextSibling),s.parentNode.insertBefore(document.createElement("hr"),s.nextSibling),e.append(n)}(document.querySelector("body"))}})();
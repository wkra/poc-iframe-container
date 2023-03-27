(function(){"use strict";var e={510:function(e,n,t){var o=t(9242),r=t(3396),u=t(7139),i=t(8541),a=t(4870);const l=["onSubmit"],c=(0,r._)("label",null,"Cookie Input",-1),f=(0,r._)("button",{type:"submt"},"Save",-1),s=["onSubmit"],v=(0,r._)("label",null,"localStore Input",-1),m=(0,r._)("button",{type:"submt"},"Save",-1),p=["onSubmit"],d=(0,r._)("label",null,"sessionStorage Input",-1),b=(0,r._)("button",{type:"submt"},"Save",-1);var _={__name:"StorageForm",setup(e){const{cookies:n}=(0,i.fP)(),t="item",_=(0,a.iH)(""),g=(0,a.iH)(""),h=(0,a.iH)(""),y=(0,a.iH)(""),w=(0,a.iH)(""),S=(0,a.iH)(""),k=()=>{n.set(t,_.value),C()},O=()=>{localStorage.setItem(t,g.value),C()},j=()=>{sessionStorage.setItem(t,S.value),C()},C=()=>{y.value=n.get(t),w.value=localStorage.getItem(t)||"none",S.value=sessionStorage.getItem(t)||"none"};return(0,r.bv)((()=>{C()})),(e,n)=>((0,r.wg)(),(0,r.iD)("div",null,[(0,r._)("div",null,[(0,r._)("form",{onSubmit:(0,o.iM)(k,["prevent"])},[c,(0,r.wy)((0,r._)("input",{"onUpdate:modelValue":n[0]||(n[0]=e=>_.value=e)},null,512),[[o.nr,_.value]]),f],40,l)]),(0,r._)("div",null,[(0,r._)("form",{onSubmit:(0,o.iM)(O,["prevent"])},[v,(0,r.wy)((0,r._)("input",{"onUpdate:modelValue":n[1]||(n[1]=e=>g.value=e)},null,512),[[o.nr,g.value]]),m],40,s)]),(0,r._)("div",null,[(0,r._)("form",{onSubmit:(0,o.iM)(j,["prevent"])},[d,(0,r.wy)((0,r._)("input",{"onUpdate:modelValue":n[2]||(n[2]=e=>h.value=e)},null,512),[[o.nr,h.value]]),b],40,p)]),(0,r._)("div",null,[(0,r._)("div",null,[(0,r._)("div",null,"Cookie item: "+(0,u.zw)(y.value),1),(0,r._)("div",null,"localStore item: "+(0,u.zw)(w.value),1),(0,r._)("div",null,"sessionStore item: "+(0,u.zw)(S.value),1)])])]))}};const g=_;var h=g,y={__name:"App",setup(e){return(e,n)=>{const t=(0,r.up)("router-link"),o=(0,r.up)("router-view");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r._)("nav",null,[(0,r.Wm)(t,{to:"/"},{default:(0,r.w5)((()=>[(0,r.Uk)("Home")])),_:1}),(0,r.Uk)(" | "),(0,r.Wm)(t,{to:"/iframe"},{default:(0,r.w5)((()=>[(0,r.Uk)("IFRAME")])),_:1}),(0,r.Uk)(" | "),(0,r.Wm)(t,{to:"/script"},{default:(0,r.w5)((()=>[(0,r.Uk)("SCRIPT")])),_:1})]),(0,r._)("div",null,[(0,r.Wm)(h)]),(0,r.Wm)(o)],64)}}};const w=y;var S=w,k=t(2483);function O(e,n){return(0,r.wg)(),(0,r.iD)("div",null,"HOME")}var j=t(89);const C={},H=(0,j.Z)(C,[["render",O]]);var I=H;const P=[{path:"/",name:"home",component:I},{path:"/iframe",name:"iframe",component:()=>t.e(571).then(t.bind(t,1571))},{path:"/script",name:"script",component:()=>t.e(493).then(t.bind(t,4493))}],E=(0,k.p7)({history:(0,k.PO)("/"),routes:P});var M=E;(0,o.ri)(S).use(M).mount("#poc-iframe-container")}},n={};function t(o){var r=n[o];if(void 0!==r)return r.exports;var u=n[o]={exports:{}};return e[o](u,u.exports,t),u.exports}t.m=e,function(){var e=[];t.O=function(n,o,r,u){if(!o){var i=1/0;for(f=0;f<e.length;f++){o=e[f][0],r=e[f][1],u=e[f][2];for(var a=!0,l=0;l<o.length;l++)(!1&u||i>=u)&&Object.keys(t.O).every((function(e){return t.O[e](o[l])}))?o.splice(l--,1):(a=!1,u<i&&(i=u));if(a){e.splice(f--,1);var c=r();void 0!==c&&(n=c)}}return n}u=u||0;for(var f=e.length;f>0&&e[f-1][2]>u;f--)e[f]=e[f-1];e[f]=[o,r,u]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})}}(),function(){t.f={},t.e=function(e){return Promise.all(Object.keys(t.f).reduce((function(n,o){return t.f[o](e,n),n}),[]))}}(),function(){t.u=function(e){return"js/"+e+"."+{493:"1facfd07",571:"59c6f1e4"}[e]+".js"}}(),function(){t.miniCssF=function(e){}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={},n="poc-iframe-container:";t.l=function(o,r,u,i){if(e[o])e[o].push(r);else{var a,l;if(void 0!==u)for(var c=document.getElementsByTagName("script"),f=0;f<c.length;f++){var s=c[f];if(s.getAttribute("src")==o||s.getAttribute("data-webpack")==n+u){a=s;break}}a||(l=!0,a=document.createElement("script"),a.charset="utf-8",a.timeout=120,t.nc&&a.setAttribute("nonce",t.nc),a.setAttribute("data-webpack",n+u),a.src=o),e[o]=[r];var v=function(n,t){a.onerror=a.onload=null,clearTimeout(m);var r=e[o];if(delete e[o],a.parentNode&&a.parentNode.removeChild(a),r&&r.forEach((function(e){return e(t)})),n)return n(t)},m=setTimeout(v.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=v.bind(null,a.onerror),a.onload=v.bind(null,a.onload),l&&document.head.appendChild(a)}}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){t.p="/"}(),function(){var e={143:0};t.f.j=function(n,o){var r=t.o(e,n)?e[n]:void 0;if(0!==r)if(r)o.push(r[2]);else{var u=new Promise((function(t,o){r=e[n]=[t,o]}));o.push(r[2]=u);var i=t.p+t.u(n),a=new Error,l=function(o){if(t.o(e,n)&&(r=e[n],0!==r&&(e[n]=void 0),r)){var u=o&&("load"===o.type?"missing":o.type),i=o&&o.target&&o.target.src;a.message="Loading chunk "+n+" failed.\n("+u+": "+i+")",a.name="ChunkLoadError",a.type=u,a.request=i,r[1](a)}};t.l(i,l,"chunk-"+n,n)}},t.O.j=function(n){return 0===e[n]};var n=function(n,o){var r,u,i=o[0],a=o[1],l=o[2],c=0;if(i.some((function(n){return 0!==e[n]}))){for(r in a)t.o(a,r)&&(t.m[r]=a[r]);if(l)var f=l(t)}for(n&&n(o);c<i.length;c++)u=i[c],t.o(e,u)&&e[u]&&e[u][0](),e[u]=0;return t.O(f)},o=self["webpackChunkpoc_iframe_container"]=self["webpackChunkpoc_iframe_container"]||[];o.forEach(n.bind(null,0)),o.push=n.bind(null,o.push.bind(o))}();var o=t.O(void 0,[998],(function(){return t(510)}));o=t.O(o)})();
//# sourceMappingURL=app.398cbe84.js.map
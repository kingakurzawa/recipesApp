(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{32:function(e,t,a){e.exports=a(74)},37:function(e,t,a){},74:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(16),c=a.n(o),l=(a(37),a(29)),i=a(9),s=a(23),m=function(){return r.a.createElement("div",{className:"home__box__header"},r.a.createElement("div",{className:"home__box__header-shadow"}),r.a.createElement("h1",{className:"home__box__header-title"},r.a.createElement("i",{className:"fas fa-carrot"}),"goodfood.com"))},u=a(13),d=a.n(u),f=a(8),p=a(27),h=a.n(p),b={content:{position:"absolute",top:"50%",left:"50%",right:"auto",bottom:"auto",height:"60%",width:"80%",padding:"1rem",transform:"translate(-50%, -50%)"}},_=function(e){var t=Math.floor(e.calories)/5,a=r.a.useState(!1),n=Object(f.a)(a,2),o=n[0],c=n[1];function l(){c(!1)}return r.a.createElement("div",{className:"recipe"},r.a.createElement("img",{className:"recipe-img",src:e.image,alt:e.title}),r.a.createElement("button",{onClick:function(){c(!0)},className:"recipe__buttonOpenModal"},e.title),r.a.createElement(h.a,{isOpen:o,onRequestClose:l,style:b,ariaHideApp:!1,contentLabel:"Example Modal"},r.a.createElement("div",{className:"recipe__modal__details"},r.a.createElement("button",{onClick:l,className:"recipe__modal__details-buttonCloseModal"},"X"),r.a.createElement("p",{className:"recipe__modal__details-calories"},t," kcal"),r.a.createElement("ul",{className:"recipe__modal__details__list"},e.ingredients.map((function(e,t){return r.a.createElement("li",{className:"recipe__modal__details__list-item",key:t},e.text)}))),r.a.createElement("a",{href:e.url,className:"recipe__modal__details-url",rel:"noopener noreferrer",target:"_blank"},"show more"))))},g=function(){var e=Object(n.useState)("none"),t=Object(f.a)(e,2),a=t[0],o=t[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"boxInfo"},r.a.createElement("p",{style:{display:a}},"this page can help you find delicious dishes by ingredients which you have in your kitchen! Just enter the name of the ingredients on the search bar."),r.a.createElement("button",{className:"buttonInfo",onClick:function(){return o("none"===a?"block":"none")},"aria-label":"click"},"click!")))},E=a(28),v=a.n(E),w=function(){var e=Object(n.useState)([]),t=Object(f.a)(e,2),a=t[0],o=t[1],c=Object(n.useState)(""),l=Object(f.a)(c,2),i=l[0],s=l[1],m=Object(n.useState)("oil"),u=Object(f.a)(m,2),p=u[0],h=u[1],b=Object(n.useState)("none"),E=Object(f.a)(b,2),w=E[0],k=E[1];Object(n.useEffect)((function(){N()}),[p]);var N=function(){var e,t;return d.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,d.a.awrap(fetch("https://api.edamam.com/search?q=".concat(p,"&app_id=").concat("42af88ff","&app_key=").concat("7c0c4172dfdd444e9a1822e1f76a2401")));case 2:return e=a.sent,a.next=5,d.a.awrap(e.json());case 5:t=a.sent,o(t.hits),setTimeout((function(){return t.hits.length>=2?k("block"):k("none")}));case 8:case"end":return a.stop()}}))};return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"search",id:"search"},r.a.createElement("form",{className:"search__form",onSubmit:function(e){e.preventDefault(),h(i),s("")}},r.a.createElement("input",{type:"text",placeholder:"type ingredient or click loupe",className:"search__form-bar",value:i,onChange:function(e){s(e.target.value)}}),r.a.createElement("button",{type:"submit",className:"search__form-btn","aria-label":"search",onClick:function(e){return h(""===i?"vegetarian":i)}},r.a.createElement("i",{className:"fas fa-search"}))),r.a.createElement(g,null),r.a.createElement("div",{className:"search__recipes"},a.map((function(e,t){return r.a.createElement(_,{key:t,calories:e.recipe.calories,title:e.recipe.label,image:e.recipe.image,ingredients:e.recipe.ingredients,url:e.recipe.url})})))),r.a.createElement("button",{className:"buttonToUp",style:{display:w},onClick:function(e){e.preventDefault(),window.scroll({top:0,left:0,behavior:"smooth"}),v.a.polyfill()},"aria-label":"back to up"},"back to up"))},k=function(){return r.a.createElement("div",{className:"home__box"},r.a.createElement(m,null),r.a.createElement(w,null))},N=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"error"},r.a.createElement("h1",{className:"error-type"},"Error 404 "),r.a.createElement("h2",{className:"error-text"},"Ooops! Something went wrong. ")))},y=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.a,null,r.a.createElement(i.c,null,r.a.createElement(i.a,{exact:!0,path:"/",component:k}),r.a.createElement(i.a,{component:N}))),r.a.createElement(s.Lines,{color:"#fff ",background:"blur",time:1e3}))},O=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function j(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}c.a.render(r.a.createElement(y,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/goodfood",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/goodfood","/service-worker.js");O?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):j(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):j(t,e)}))}}()}},[[32,1,2]]]);
//# sourceMappingURL=main.ecec8a8f.chunk.js.map
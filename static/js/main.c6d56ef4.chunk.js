(this["webpackJsonpcovid-19-world"]=this["webpackJsonpcovid-19-world"]||[]).push([[0],{19:function(e,a,t){e.exports=t(53)},24:function(e,a,t){},25:function(e,a,t){},27:function(e,a,t){},28:function(e,a,t){},29:function(e,a,t){},47:function(e,a,t){},52:function(e,a,t){},53:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(16),c=t.n(r),o=(t(24),t(25),t(4)),u=t.n(o),s=t(6),i=t(3),m=function(e){var a=e.split("T")[0].split("-"),t=a.splice(0,1)[0];return a.splice(1,0,t),"".concat(a[2],"-").concat(a[0],"-").concat(a[1])},p=function(e){return String(e).replace(/(?<!\..*)(\d)(?=(?:\d{3})+(?:\.|$))/g,"$1,")},f=(t(27),t(28),function(e){var a=e.updateDate;return l.a.createElement("p",{className:"update-date"},l.a.createElement("span",null,"Data actualizarii: "),l.a.createElement("span",null,m(a)))}),E=function(e){var a=e.info,t=e.name,n=e.procent,r=e.option,c=e.updateDate;return l.a.createElement("div",{className:r?"card card-white":"card card-grey"},r?l.a.createElement("h3",null," ",t):l.a.createElement("p",{className:"card-title"},t," "),c?l.a.createElement(f,{updateDate:c}):"",l.a.createElement("p",{className:"card-value"},l.a.createElement("span",null,a," "),l.a.createElement("span",{className:"card-procent"},n,n?"% din total":"")))},d=(t(29),function(e){var a=e.general;return l.a.createElement("div",{className:"info-general"},l.a.createElement(E,{info:a.NewConfirmed.toLocaleString(),name:"Cazuri Noi"}),l.a.createElement(E,{info:a.NewDeaths.toLocaleString(),name:"Nou Decedati"}),l.a.createElement(E,{info:a.NewRecovered.toLocaleString(),name:"Nou Recuperati"}),l.a.createElement(E,{info:a.TotalConfirmed.toLocaleString(),name:"Total Confirmati"}),l.a.createElement(E,{info:a.TotalDeaths.toLocaleString(),name:"Total Decedati"}),l.a.createElement(E,{info:a.TotalRecovered.toLocaleString(),name:"Total Recuperati"}))}),v=t(5),h=t.n(v);t(47);function g(){return(g=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function N(e,a){if(null==e)return{};var t,n,l=function(e,a){if(null==e)return{};var t,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(l[t]=e[t]);return l}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var b=l.a.createElement("g",null,l.a.createElement("g",null,l.a.createElement("g",null,l.a.createElement("path",{d:"M155.293,4.653c-6.241-6.204-16.319-6.204-22.56,0l-112,112l22.56,22.72l84.64-84.8v457.44h32V54.573l84.64,84.64 l22.72-22.56L155.293,4.653z"}),l.a.createElement("path",{d:"M468.573,372.653l-84.64,84.8V0.013h-32v457.44l-84.64-84.64l-22.56,22.56l112,112c6.241,6.204,16.319,6.204,22.56,0 l112-112L468.573,372.653z"})))),w=l.a.createElement("g",null),O=l.a.createElement("g",null),y=l.a.createElement("g",null),j=l.a.createElement("g",null),S=l.a.createElement("g",null),T=l.a.createElement("g",null),k=l.a.createElement("g",null),C=l.a.createElement("g",null),D=l.a.createElement("g",null),R=l.a.createElement("g",null),A=l.a.createElement("g",null),Z=l.a.createElement("g",null),L=l.a.createElement("g",null),x=l.a.createElement("g",null),M=l.a.createElement("g",null),B=function(e){var a=e.svgRef,t=e.title,n=N(e,["svgRef","title"]);return l.a.createElement("svg",g({id:"Capa_1",x:"0px",y:"0px",viewBox:"0 0 512.025 512.025",style:{enableBackground:"new 0 0 512.025 512.025"},xmlSpace:"preserve",ref:a},n),t?l.a.createElement("title",null,t):null,b,w,O,y,j,S,T,k,C,D,R,A,Z,L,x,M)},P=l.a.forwardRef((function(e,a){return l.a.createElement(B,g({svgRef:a},e))})),z=(t.p,t(18)),I=function(e){var a=e.columns,t=e.onSort;return l.a.createElement("ul",{className:"head"},a&&a.map((function(e){return l.a.createElement("li",{key:e.path},l.a.createElement("div",{className:"cell"},l.a.createElement("span",{"data-tip":!0,"data-for":e.label},e.label),l.a.createElement(z.a,{className:"tooltipHead",id:e.label,place:"top",effect:"solid"},e.label),l.a.createElement("span",{className:"sort",onClick:function(){return t(e.path)}},l.a.createElement(P,null))))})))},V=t(17),$=t.n(V),H=[{path:"Date",label:"Data"},{path:"Country",label:"Tara"},{path:"NewConfirmed",label:"Nou Confirmati"},{path:"NewDeaths",label:"Nou Decedati"},{path:"NewRecoverd",label:"Nou Recuperati"},{path:"TotalConfirmed",label:"Total Confirmati"},{path:"TotalDeaths",label:"Total Decedati"},{path:"TotalRecovered",label:"Total Recuperati"}],J=function(e){var a=e.countries,t=e.general,r=Object(n.useState)({path:"TotalConfirmed",order:"desc"}),c=Object(i.a)(r,2),o=c[0],u=c[1],s=$.a.orderBy(a,[o.path],[o.order]);return l.a.createElement("div",{className:"countries"},l.a.createElement("div",{className:"table"},l.a.createElement(I,{columns:H,onSort:function(e){u({path:e,order:"asc"}),o.path===e&&"asc"===o.order?u({path:e,order:"desc"}):(o.path=e,o.order="asc")}}),l.a.createElement("ul",{className:"list"},a&&s.map((function(e){return l.a.createElement("li",{className:"row",key:e.CountryCode},l.a.createElement("span",{className:"value"},m(e.Date)),l.a.createElement("span",{className:"value country desktop"},e.Country),l.a.createElement("span",{className:"value"},p(e.NewConfirmed)),l.a.createElement("span",{className:"value"},p(e.NewDeaths)),l.a.createElement("span",{className:"value"},p(e.NewRecovered)),l.a.createElement("span",{className:"value"},p(e.TotalConfirmed)),l.a.createElement("span",{className:"value"},p(e.TotalDeaths)),l.a.createElement("span",{className:"value"},p(e.TotalRecovered)))}))),l.a.createElement("ul",{className:"total"},l.a.createElement("li",{className:"row"},l.a.createElement("span",{className:"value"},t.NewConfirmed.toLocaleString()),l.a.createElement("span",{className:"value"},t.NewDeaths.toLocaleString()),l.a.createElement("span",{className:"value"},t.NewRecovered.toLocaleString()),l.a.createElement("span",{className:"value"},t.TotalConfirmed.toLocaleString()),l.a.createElement("span",{className:"value"},t.TotalDeaths.toLocaleString()),l.a.createElement("span",{className:"value"},t.TotalRecovered.toLocaleString())))))};function W(){return(W=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function F(e,a){if(null==e)return{};var t,n,l=function(e,a){if(null==e)return{};var t,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(l[t]=e[t]);return l}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var G=l.a.createElement("g",{id:"outline"},l.a.createElement("path",{d:"M480,120a32,32,0,1,0-32,32A32.036,32.036,0,0,0,480,120Zm-32,16a16,16,0,1,1,16-16A16.019,16.019,0,0,1,448,136Z"}),l.a.createElement("path",{d:"M452,408a28,28,0,1,0,28,28A28.032,28.032,0,0,0,452,408Zm0,40a12,12,0,1,1,12-12A12.013,12.013,0,0,1,452,448Z"}),l.a.createElement("path",{d:"M200,496a31.93,31.93,0,0,0,24.309-11.225,39.988,39.988,0,1,0-21.046-52.61A32,32,0,1,0,200,496Zm40-72a24,24,0,1,1-8.643,46.4,31.985,31.985,0,0,0-13.064-32.629A24,24,0,0,1,240,424Zm-40,24a16,16,0,1,1-16,16A16.019,16.019,0,0,1,200,448Z"}),l.a.createElement("path",{d:"M312,88a32,32,0,1,0-32-32A32.036,32.036,0,0,0,312,88Zm0-48a16,16,0,1,1-16,16A16.019,16.019,0,0,1,312,40Z"}),l.a.createElement("path",{d:"M80,16A56,56,0,1,0,96.373,125.557a31.987,31.987,0,1,0,39.469-49.343c.1-1.4.158-2.811.158-4.214A56.063,56.063,0,0,0,80,16Zm8,88a31.949,31.949,0,0,0,.786,7.024A40,40,0,1,1,120,72,32.036,32.036,0,0,0,88,104Zm48,0a16,16,0,1,1-16-16A16.019,16.019,0,0,1,136,104Z"}),l.a.createElement("path",{d:"M464,219.1v-2.185a27.481,27.481,0,0,0-28.6-27.46l-12.1.507a28.207,28.207,0,0,0-43.442-20.728l-45.96,26.9c9.6-9.432,19.3-19.1,27.7-27.749h0A26.374,26.374,0,0,0,325.5,130l-56.046,48.19,2.124-10.623,10.3-17.157a35.913,35.913,0,0,0-9.271-47.323l-.733-.549a22.082,22.082,0,0,0-30.637,4.187L226.242,126.2a29.833,29.833,0,0,0-21.668-9.265h-.67a23.852,23.852,0,0,0-22.988,17.1l-18.188,60.628-90.2-6.014a8,8,0,0,0-8.514,7.45l-8,120a8,8,0,0,0,7.483,8.517l10.374.648,55.383,86.734a8,8,0,0,0,10.961,2.491l53.2-33.02a97.236,97.236,0,0,0,58.047-5.569l68.443,44.22.15.094a25.47,25.47,0,0,0,28.63-42.068L336.24,368.82c25.307,7.45,57.375,16.895,76.516,22.554a25.071,25.071,0,0,0,7.117,1.039,25.021,25.021,0,0,0,24.174-18.978l.1-.42a24.347,24.347,0,0,0-15.6-28.992l-14.915-5.252a24.492,24.492,0,0,0,10.373-20.047c0-.7-.037-1.393-.1-2.084h12.6A27.482,27.482,0,0,0,439.99,261.9l-3.563-.453a24.285,24.285,0,0,0-2.1-14.478l5.064-.533A27.422,27.422,0,0,0,464,219.1ZM230.066,170.518l3.794-17.071a30.007,30.007,0,0,0,.331-11.334l19.717-25.633a6.021,6.021,0,0,1,8.358-1.14l.732.548a19.951,19.951,0,0,1,5.149,26.29L257.14,160.523a8.016,8.016,0,0,0-.985,2.547l-6.412,32.064-15.558,13.377A59.924,59.924,0,0,1,230.066,170.518ZM72.517,309.156l6.933-104,78.935,5.263-13.428,53.71L80.737,309.67Zm266.569,81.8a9.469,9.469,0,0,1,1.014,14.272,9.44,9.44,0,0,1-11.6,1.407l-60.208-38.9,6.212-3.106c3.1-.523,12.056-2.034,24.065-4.058Zm-68.417-41.9a8.022,8.022,0,0,0-2.247.733l-18.5,9.249a81.23,81.23,0,0,1-55.986,6.146,7.993,7.993,0,0,0-6.159.964l-49.289,30.594-47.6-74.552c.039-.062.083-.121.12-.184l65.621-46.536a8,8,0,0,0,3.133-4.585L175.6,207.53a7.966,7.966,0,0,0,1.322-3.9c.014-.209.012-.415.01-.621l19.312-64.373a7.95,7.95,0,0,1,7.662-5.7h.67a14,14,0,0,1,13.667,17.038l-3.794,17.07a75.953,75.953,0,0,0,10.9,58.33,8,8,0,0,0,11.872,1.629l98.711-84.874a10.374,10.374,0,0,1,14.2,15.1h0c-29.459,30.323-75.155,73.455-75.613,73.887a8,8,0,0,0,9.529,12.724l104.088-60.909c.137-.081.271-.164.4-.252a12.2,12.2,0,0,1,13.637,20.228c-34.343,23.542-109.4,66.657-110.149,67.09a8,8,0,0,0,6.4,14.565l110.215-34.9,5.1-.536a8.66,8.66,0,0,1,2.615.951,8.595,8.595,0,0,1,2.82,12.486,8,8,0,0,0-.765.943,8.551,8.551,0,0,1-3.524,2.284c-37.9,12.781-97.142,35.443-97.735,35.671a8,8,0,0,0,3.548,15.441l78.019-6.743a8.567,8.567,0,0,1,2.155,16.984C365.215,333.1,271.61,348.893,270.669,349.051Zm152.57,10.064a8.412,8.412,0,0,1,5.4,10.006l-.107.421a8.983,8.983,0,0,1-4.282,5.681,8.831,8.831,0,0,1-6.953.807c-19.151-5.661-51.235-15.111-76.549-22.563,15.721-2.647,31.721-5.337,44.987-7.562Zm14.73-81.347a11.482,11.482,0,0,1-1.451,22.872H416.1l-.035-.035a24.625,24.625,0,0,0-18.731-6.379l-19.611,1.695c14.478-5.286,29.59-10.686,42.269-14.962a24.3,24.3,0,0,0,7.926-4.472ZM413.7,233.049a24.619,24.619,0,0,0-8.251.868l-26.1,2.748c11.9-7.382,23.1-14.545,31.872-20.557a27.975,27.975,0,0,0,8.948-10l15.9-.667A11.484,11.484,0,0,1,448,216.917V219.1a11.457,11.457,0,0,1-10.28,11.418Z"})),U=function(e){var a=e.svgRef,t=e.title,n=F(e,["svgRef","title"]);return l.a.createElement("svg",W({viewBox:"0 0 512 512",width:512,height:512,ref:a},n),t?l.a.createElement("title",null,t):null,G)},_=l.a.forwardRef((function(e,a){return l.a.createElement(U,W({svgRef:a},e))})),q=(t.p,t(52),function(){var e=Object(n.useState)({}),a=Object(i.a)(e,2),t=a[0],r=a[1],c=Object(n.useState)(!1),o=Object(i.a)(c,2),p=o[0],f=o[1],E="https://api.exchangeratesapi.io/latest";Object(n.useEffect)((function(){var e=h.a.CancelToken.source();return function(){var a=Object(s.a)(u.a.mark((function a(){var t;return u.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,h.a.get(E,{cancelToken:e.token});case 3:t=a.sent,r(t.data),a.next=11;break;case 7:throw a.prev=7,a.t0=a.catch(0),f(!0),a.t0;case 11:case"end":return a.stop()}}),a,null,[[0,7]])})));return function(){return a.apply(this,arguments)}}()(),function(){e.cancel()}}),[E]);var d=Object.values(t);return l.a.createElement("div",{className:"currency-section"},p?"":l.a.createElement("div",{className:"currency"},l.a.createElement("p",{className:"ron"},l.a.createElement("span",null,"Curs Valutar: 1 EUR = "),d[0]&&Object.keys(d[0]).filter((function(e){return"RON"===e})).map((function(e){return l.a.createElement("span",{key:e},d[0][e]," ",e," ")}))),l.a.createElement("p",{className:"update"},l.a.createElement("i",null,"Data actualizarii: ",t.date&&m(t.date)," ")),l.a.createElement("p",{className:"update"},l.a.createElement("i",null,"Curs European Central Bank"))))}),K=function(){var e=function(){var e=+new Date("2020-05-15")-+new Date,a={};return e>0&&(a={zile:Math.floor(e/864e5),ore:Math.floor(e/36e5%24),minute:Math.floor(e/1e3/60%60),secunde:Math.floor(e/1e3%60)}),a},a=Object(n.useState)(e()),t=Object(i.a)(a,2),r=t[0],c=t[1];Object(n.useEffect)((function(){return setTimeout((function(){c(e())}),1e3),function(){clearTimeout(e())}}));var o=[];return Object.keys(r).forEach((function(e){r[e]&&o.push(l.a.createElement("span",{key:e},r[e]," ",e," "))})),l.a.createElement("div",{className:"countdown"},l.a.createElement("p",null,"Timp ramas pana la terminarea starii de urgenta:"),l.a.createElement("p",null,o.length?o:l.a.createElement("span",null," Gata !! ")))},Q=function(){return l.a.createElement("div",{className:"footer"},l.a.createElement("div",{className:"footer-content"},l.a.createElement("div",{className:"footer-message"},l.a.createElement("h2",null,"Spalati-va pe maini!"),l.a.createElement(_,null)),l.a.createElement(K,null),l.a.createElement(q,null)))},X=function(){var e=Object(n.useState)(!1),a=Object(i.a)(e,2),t=a[0],r=a[1],c=Object(n.useState)({}),o=Object(i.a)(c,2),p=o[0],f=o[1],E="https://api.covid19api.com/summary";Object(n.useEffect)((function(){var e=h.a.CancelToken.source();return function(){var a=Object(s.a)(u.a.mark((function a(){var t;return u.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,h.a.get(E,{cancelToken:e.token});case 3:t=a.sent,f(t.data),a.next=11;break;case 7:throw a.prev=7,a.t0=a.catch(0),r(!0),a.t0;case 11:case"end":return a.stop()}}),a,null,[[0,7]])})));return function(){return a.apply(this,arguments)}}()(),function(){e.cancel()}}),[E]),console.log("data",p);var v=Object.values(p),g=v[2],N=v[0],b=v[1];return l.a.createElement(l.a.Fragment,null,t||l.a.createElement("div",{className:"App"},l.a.createElement("div",{className:"container"},g?l.a.createElement("div",null,l.a.createElement("div",{className:"website-title"},l.a.createElement("h1",null,"Situatie Internationala COVID-19"),l.a.createElement("p",null,l.a.createElement("span",null,"Data Publicarii: "),l.a.createElement("span",null,m(g))))):"",N?l.a.createElement(d,{general:N}):"",b?l.a.createElement(J,{countries:b,general:N}):""),N?l.a.createElement(Q,null):""))};var Y=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(X,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(Y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[19,1,2]]]);
//# sourceMappingURL=main.c6d56ef4.chunk.js.map
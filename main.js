!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t){var n=function(e){e.addEventListener("load",(function(){if(e.status>=200&&e.status<300)try{console.log("success"),console.log(e.response)}catch(e){console.error(e)}}))},o=new XMLHttpRequest;o.open("GET","http://localhost:7070/allTickets",!0),o.send(),n(o);var r=new XMLHttpRequest;r.open("GET","http://localhost:7070/allTickets?id=1",!0),r.send(),n(r);var s=new XMLHttpRequest;s.open("POST","http://localhost:7070/setTickets"),s.setRequestHeader("Content-Type","application/json"),s.setRequestHeader("Access-Control-Allow-Credentials",!0);var l={name:"Билет",description:"Music hall",status:!0,created:Date.now()};s.send(JSON.stringify(l)),n(s)}]);
(this.webpackJsonppotato=this.webpackJsonppotato||[]).push([[0],{12:function(e,a,t){},13:function(e,a,t){},14:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),l=t(4),r=t.n(l),o=t(1),s=t.n(o),i=t(5),m=t(2),u=(t(12),t(13),function(){return c.a.createElement("div",{className:"spinner-box"},c.a.createElement("div",{className:"circle-border"},c.a.createElement("div",{className:"circle-core"})))});var p=function(){var e=Object(n.useState)({}),a=Object(m.a)(e,2),t=a[0],l=a[1],r=Object(n.useState)(!0),o=Object(m.a)(r,2),p=o[0],f=o[1];return Object(n.useEffect)((function(){(function(){var e=Object(i.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://node.uttarakhandtraveller.com/places/1",{mode:"cors"}).then((function(e){return e.json()})).then((function(e){l(e.place),f(!1),console.log(e,p),console.log(p)})).catch((function(e){return console.log(e)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[p]),c.a.createElement(c.a.Fragment,null,p?c.a.createElement(u,null):c.a.createElement("div",{className:"place__container"},c.a.createElement("img",{src:t.image,alt:t.name,className:"place__image"}),c.a.createElement("details",{className:"place__details  "},c.a.createElement("summary",null,c.a.createElement("span",{className:"place__location"},"Location:",t.location.slice(2)),c.a.createElement("span",{className:"place__name"},"Name:",t.name)),t.detail),c.a.createElement("a",{href:t.place_url,className:"place__link"},"More details")))};r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(p,null)),document.getElementById("root"))},6:function(e,a,t){e.exports=t(14)}},[[6,1,2]]]);
//# sourceMappingURL=main.fe5f9131.chunk.js.map
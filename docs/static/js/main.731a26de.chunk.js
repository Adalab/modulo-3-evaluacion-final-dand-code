(this["webpackJsonpmy-react-project"]=this["webpackJsonpmy-react-project"]||[]).push([[0],{15:function(e,a,c){},22:function(e,a,c){},32:function(e,a,c){},33:function(e,a,c){"use strict";c.r(a);var t=c(1),n=c(16),s=c.n(n),i=c(7),r=(c(22),c(9)),l=c(2),j=function(e){return fetch(e||"https://rickandmortyapi.com/api/character").then((function(e){return e.json()})).then((function(e){return{results:e.results.map((function(e){return{id:e.id,name:e.name,specie:e.species,image:e.image,episodes:e.episode.length,origin:e.origin.name,status:e.status}})),prevPage:e.info.prev,nextPage:e.info.next}}))},d=c(0),o=function(e){return Object(d.jsxs)(i.b,{to:"/character/".concat(e.character.id),children:[Object(d.jsx)("img",{className:"card__img",src:e.character.image,alt:"Foto personaje"}),Object(d.jsxs)("div",{className:"card__footer",children:[Object(d.jsx)("h4",{className:"card__title",children:e.character.name}),Object(d.jsx)("p",{className:"card__description",children:e.character.specie})]})]})},h=function(e){var a=e.characters.map((function(e){return Object(d.jsx)("li",{className:"card_list",children:Object(d.jsx)(o,{character:e})},e.id)}));return Object(d.jsx)("section",{children:Object(d.jsx)("ul",{className:"display_grid-cards",children:a})})},u=function(e){return Object(d.jsxs)("div",{className:"display_inline",children:[Object(d.jsx)("label",{className:"form__label display-block",htmlFor:"name",children:"\xbfCu\xe1l el nombre de tu personaje?"}),Object(d.jsx)("input",{className:"form__input-text input",type:"text",name:"name",id:"name",onChange:function(a){e.handleFilter({key:"name",value:a.target.value})}})]})},b=function(e){return Object(d.jsxs)("div",{className:"display_inline",children:[Object(d.jsx)("label",{className:"form__label display-block",htmlFor:"specie",children:"Filtra por especie:"}),Object(d.jsxs)("select",{className:"form__input-text",name:"specie",id:"specie",onChange:function(a){e.handleFilter({key:"specie",value:a.target.value})},children:[Object(d.jsx)("option",{value:"all",children:"Todos"}),Object(d.jsx)("option",{value:"Human",children:"Humano"}),Object(d.jsx)("option",{value:"Alien",children:"Alien"})]})]})},p=function(e){return Object(d.jsx)("section",{className:"display_flex-column bg_img",children:Object(d.jsxs)("form",{onChange:function(e){e.preventDefault()},children:[Object(d.jsx)(u,{handleFilter:e.handleFilter}),Object(d.jsx)(b,{handleFilter:e.handleFilter})]})})},m=(c(15),c(32),function(e){return void 0===e.character?Object(d.jsxs)("div",{className:"App-wrap2",children:[Object(d.jsx)(i.b,{to:"/",children:Object(d.jsx)("div",{className:"div-back",children:Object(d.jsx)("i",{className:"fa fa-times back_link","aria-hidden":"true"})})}),Object(d.jsx)("div",{className:"alert",children:Object(d.jsx)("h2",{children:"No encuentro este personaje. Lo siento."})})]}):Object(d.jsxs)("div",{className:"App-wrap2",children:[Object(d.jsx)(i.b,{to:"/",children:Object(d.jsx)("div",{className:"div-back",children:Object(d.jsx)("i",{className:"fa fa-times back_link","aria-hidden":"true"})})}),Object(d.jsxs)("section",{className:"display_grid-detail",children:[Object(d.jsx)("img",{className:"card__img-detail",src:e.character.image,alt:"Foto personaje"}),Object(d.jsxs)("ul",{className:"card__footer detail__content",children:[Object(d.jsx)("li",{className:"card__title",children:e.character.name}),Object(d.jsxs)("li",{className:"card__description",children:["Especie:",e.character.specie]}),Object(d.jsxs)("li",{className:"card__description",children:["Origen:",e.character.origin]}),Object(d.jsxs)("li",{className:"card__description",children:["Epsodios: ",e.character.episodes]}),Object(d.jsxs)("li",{className:"card__description",children:["Status: ",e.character.status]})]})]})]})}),O=function(e){return e.firstPage?Object(d.jsxs)("div",{className:"nav-page",children:[Object(d.jsx)("p",{children:"Page"}),Object(d.jsx)("i",{className:"fa fa-chevron-right nav-page_icon","aria-hidden":"true",onClick:e.nextPage})]}):e.lastPage?Object(d.jsxs)("div",{className:"nav-page",children:[Object(d.jsx)("i",{className:"fa fa-chevron-left nav-page_icon","aria-hidden":"true",onClick:e.prevPage}),Object(d.jsx)("p",{children:"Page"})]}):Object(d.jsxs)("div",{className:"nav-page",children:[Object(d.jsx)("i",{className:"fa fa-chevron-left nav-page_icon","aria-hidden":"true",onClick:e.prevPage}),Object(d.jsx)("p",{children:"Page"}),Object(d.jsx)("i",{className:"fa fa-chevron-right nav-page_icon","aria-hidden":"true",onClick:e.nextPage})]})},x=c.p+"static/media/logo.7ac5306e.png",f=function(){var e=Object(t.useState)([]),a=Object(r.a)(e,2),c=a[0],n=a[1],s=Object(t.useState)(""),i=Object(r.a)(s,2),o=i[0],u=i[1],b=Object(t.useState)("all"),f=Object(r.a)(b,2),g=f[0],v=f[1],_=Object(t.useState)(),N=Object(r.a)(_,2),k=N[0],P=N[1],y=Object(t.useState)(),F=Object(r.a)(y,2),C=F[0],S=F[1],A=Object(t.useState)(2),w=Object(r.a)(A,2);w[0],w[1];Object(t.useEffect)((function(){j().then((function(e){return E(e)}))}),[]);var E=function(e){n(e.results),P(e.prevPage),S(e.nextPage)},L=c.filter((function(e){return e.name.toUpperCase().includes(o.toUpperCase())})).filter((function(e){return"all"===g||e.specie===g}));return Object(d.jsxs)("div",{className:"App-wrap",children:[Object(d.jsx)("header",{className:"header",children:Object(d.jsx)("img",{src:x,alt:"Logo Rick and Morty",className:"logo_img"})}),Object(d.jsx)("main",{children:Object(d.jsxs)(l.c,{children:[Object(d.jsxs)(l.a,{exact:!0,path:"/",children:[Object(d.jsx)(p,{handleFilter:function(e){"name"===e.key?u(e.value):"specie"===e.key&&v(e.value)}}),Object(d.jsx)(O,{nextPage:function(){j(C).then((function(e){return E(e)}))},prevPage:function(){j(k).then((function(e){return E(e)}))},firstPage:null==k,lastPage:null==C}),Object(d.jsx)(h,{characters:L})]}),Object(d.jsx)(l.a,{path:"/character/:id",render:function(e){var a=parseInt(e.match.params.id),t=c.find((function(e){return e.id===a}));return Object(d.jsx)(m,{character:t})}})]})}),Object(d.jsx)("footer",{className:"footer",children:Object(d.jsx)("span",{children:"Evaluaci\xf3n Final - Modulo 3 - Dandara Almeida"})})]})},g=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,34)).then((function(a){var c=a.getCLS,t=a.getFID,n=a.getFCP,s=a.getLCP,i=a.getTTFB;c(e),t(e),n(e),s(e),i(e)}))};s.a.render(Object(d.jsx)(i.a,{children:Object(d.jsx)(f,{})}),document.getElementById("root")),g()}},[[33,1,2]]]);
//# sourceMappingURL=main.731a26de.chunk.js.map
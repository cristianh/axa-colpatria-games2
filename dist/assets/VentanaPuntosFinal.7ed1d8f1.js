import{p as l}from"./index.0ce6332d.js";/* empty css                                                                       */import{_ as r,r as i,o as u,c as d,d as m,e as p,f as _,g as e,t as s,p as v,i as f}from"./index.e25269cb.js";const o=n=>(v("data-v-03ccded0"),n=n(),f(),n),h=o(()=>e("div",{class:"emulate-confetti-1-pantantalla-puntos"},null,-1)),g=o(()=>e("div",{class:"emulate-confetti-2-pantantalla-puntos"},null,-1)),k={class:"ventana-mensaje-puntos center-element flex-center-elements-column gap-2 padding-2 animate__animated animate__fadeIn"},I={class:"contenedor-mensaje flex-center-elements-column gap-1",id:"simulate-click"},b={class:"contenedor-puntos-buenos flex-center-elements-column gap-2"},j={class:"contenedor-mensajes"},S={class:"info-mensaje"},q={class:"mensaje-opcion"},E=o(()=>e("h1",null," Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad repudiandae, quos, dolores pariatur vero accusantium ut doloremque ratione sint soluta, recusandae porro possimus modi distinctio minus placeat? Incidunt, exercitationem cumque? ",-1)),x={class:"auto flex-center-elements-row gap-2",style:{"text-align":"center"}},y=o(()=>e("div",{class:"button"},"Click me!",-1)),B={emits:["continuarTriviaEvent","volverEscenarioEvent"],setup(n,{emit:$}){i(null);const a=i(null);u(()=>{document.querySelector(".button").addEventListener("click",c),a.value=setInterval(()=>{document.querySelector(".button").click()},4500)});const c=t=>{l.sparkles(t.target)};return d(()=>{}),m(()=>{document.querySelector(".button").removeEventListener("click",c),a.value!=null&&clearInterval(a.value)}),(t,L)=>(p(),_("div",null,[h,g,e("div",k,[e("div",I,[e("div",b,[s(t.$slots,"puntos-buenos",{},void 0,!0)]),e("div",j,[e("div",S,[s(t.$slots,"mensaje-respuestas",{},void 0,!0)]),e("div",q,[s(t.$slots,"mensaje-opcion",{},()=>[E],!0)])]),e("div",x,[s(t.$slots,"botones",{},void 0,!0)])])]),y]))}};var A=r(B,[["__scopeId","data-v-03ccded0"]]);export{A as V};

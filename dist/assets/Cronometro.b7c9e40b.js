import{_ as x,r as a,c as R,b as S,B as A,C as D,d as h,e as g,f as n,g as u,m as H,t as M,p as O,h as k}from"./index.65118df6.js";const N=o=>(O("data-v-7a975a88"),o=o(),k(),o),$={id:"cronometro"},F={class:"base-timer"},P={class:"base-timer__svg",viewBox:"0 0 100 100",xmlns:"http://www.w3.org/2000/svg"},U={class:"base-timer__circle"},z=N(()=>n("circle",{class:"base-timer__path-elapsed",cx:"50",cy:"50",r:"45"},null,-1)),G=["stroke-dasharray"],V={id:"base-timer-label",class:"base-timer__label"},W={props:{segundos:{type:Number,default:10},reiniciar:{type:Boolean,default:!1}},emits:["endTime"],setup(o,{emit:b}){const _=o,f=a(283),I=a(10),y=a(5),l=a(null),t=R({info:{color:"green"},warning:{color:"orange",threshold:I},alert:{color:"red",threshold:y}}),r=_.segundos;let c=a(0),s=a(r),m=a(null),T=a(t.info.color),p=a(null);S(()=>{B()}),A(_.reiniciar,(e,d)=>{console.log(`reiniciarTiempo is ${reiniciarTiempo}`)});const w=()=>{clearInterval(m.value),document.getElementById("base-timer-label").style.animation="none",b("endTime")},B=()=>{m.value=setInterval(()=>{c.value=c.value+=1,s.value=r-c.value,document.getElementById("base-timer-label").innerHTML=v(s.value),C(),E(s.value),s.value===0&&w()},1e3)},v=e=>{const d=Math.floor(e/60);let i=e%60;return i<10&&(i=`0${i}`),`${d}:${i}`},E=e=>{e<=t.alert.threshold?(document.getElementById("base-timer-path-remaining").classList.remove(t.warning.color),document.getElementById("base-timer-path-remaining").classList.add(t.alert.color)):e<=t.warning.threshold&&(document.getElementById("base-timer-path-remaining").classList.remove(t.info.color),document.getElementById("base-timer-path-remaining").classList.add(t.warning.color))},L=()=>{const e=s.value/r.value;return e-1/r.value*(1-e)},C=()=>{p.value=`${(L()*f.value).toFixed(0)} 283`};return D(()=>{console.log("limpiamos componente"),clearInterval(m.value),l.value!=null&&(l.value.stopAudio(),l.value=null)}),(e,d)=>(h(),g("div",$,[n("div",F,[(h(),g("svg",P,[n("g",U,[z,n("path",{id:"base-timer-path-remaining","stroke-dasharray":u(p),class:H(["base-timer__path-remaining",u(T)]),d:`\r
          M 50, 50\r
          m -45, 0\r
          a 45,45 0 1,0 90,0\r
          a 45,45 0 1,0 -90,0\r
        `},null,10,G)])])),n("span",V,M(v(u(s))),1)])]))}};var j=x(W,[["__scopeId","data-v-7a975a88"]]);export{j as C};

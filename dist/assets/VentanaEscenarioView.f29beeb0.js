import{_ as E,u as J,r as c,a as j,o as P,b as S,c as b,d as _,e as g,f as r,n as M,g as O,p as B,h as I,i as N}from"./index.65118df6.js";import{g as R}from"./index.a1b928dc.js";import"./anime.es.729cdde2.js";var C="/assets/personaje.dd4bf819.png";const D=t=>(B("data-v-36c95e06"),t=t(),I(),t),k={class:"container-escena"},U=D(()=>r("img",{src:C,alt:""},null,-1)),V=[U],$={setup(t){const n=J(),p=c(null),i=c([]),a=c(["/JuegoPosturas","/JuegoOjos","/JuegoRuleta","/JuegoManos","/JuegoPosturas","/JuegoOjos","/JuegoPosturas","/JuegoRuleta","/JuegoPosturas","/JuegoRuleta"]),s=j(),u=c(null),l=c([{x:234,y:-141},{x:128,y:-242},{x:129,y:-342},{x:232,y:-392},{x:336,y:-488},{x:493,y:-517},{x:593,y:-417},{x:803,y:-417},{x:803,y:-317},{x:1011,y:-367},{x:1017,y:-212},{x:1170,y:-139}]);P(()=>{f()}),S(()=>{s.posicionactualEscenarioJuego>0&&(v.transform=`translate(${l.value[s.posicionactualEscenarioJuego-1].x+"px"}, ${l.value[s.posicionactualEscenarioJuego-1].y+"px"})`)});const f=()=>{let e=document.querySelector(".hospital-escena");e.addEventListener("load",()=>{let h=e.getSVGDocument().querySelectorAll("svg g"),A=Object.values(h).filter(o=>o.id=="niveles");i.value=Object.values(A[0].childNodes).filter((o,F)=>{if((o==null?void 0:o.id)!="undefined")return o.id}),d(),y()})},x=()=>{let e=s.posicionactualEscenarioJuego;console.log(u.value),d(),i.value[e].childNodes[5].style.fill="#EDFF91",e==4||e==8||e==12?(console.log(e),e++,s.setPosicionActualUsuario(e),u.value.pause(),setTimeout(()=>{s.setActividadActual(a.value[e-1]),n.push(a.value[e-1])},1500)):(setTimeout(()=>{e==0?(s.setActividadActual(a.value[e]),n.push(a.value[e])):(s.setActividadActual(a.value[e-1]),n.push(a.value[e-1]))},1500),e++,s.setPosicionActualUsuario(e),u.value.pause()),e>=i.value.length&&(e=0,s.setPosicionActualUsuario(e))},y=()=>{let e=s.posicionactualEscenarioJuego;u.value=R.timeline({timeScale:.1,delay:.2}).to("#personaje",{x:l.value[e].x+"px",y:l.value[e].y+"px",delay:1.2,duration:1,ease:"Linear.easeInOut",onComplete:x},"2")},d=()=>{Object.values(i.value).forEach(e=>{e.childNodes[5].style.fill="#B5D0EE"})},v=b({position:"absolute",left:"8px",bottom:"0vh",transform:"translate(0px, 8px)"});return(e,m)=>(_(),g("div",k,[r("object",{ref_key:"escena",ref:p,type:"image/svg+xml",data:"src/assets/svg/hospitl_escena.svg",class:"hospital-escena",preserveAspectRatio:"none"},null,512),r("div",{id:"personaje",style:M(O(v))},V,4)]))}};var q=E($,[["__scopeId","data-v-36c95e06"]]);const z={setup(t){return(n,p)=>(_(),g("div",null,[N(q)]))}};export{z as default};

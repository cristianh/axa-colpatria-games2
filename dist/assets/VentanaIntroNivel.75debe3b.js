import{_ as p,c as a,o as u,q as s,d as v,e as h,f as n,n as o,g as i,s as c,p as g,h as f,x as I}from"./index.65118df6.js";const y=e=>(g("data-v-81644f4c"),e=e(),f(),e),j={class:"ventana-mensaje-puntos flex-center-elements-column gap-2 padding-2"},x={class:"info-mensaje"},S=y(()=>n("span",null," Nivel ",-1)),N={class:"mensaje-opcion"},k=I(" 1 "),w={props:{urlImagenFondo:{type:String,default:"marco_nivel_1"}},emits:["finAnimacionIntroNivel"],setup(e,{emit:r}){const l=e,d=a({width:"80%",height:"30vh",display:"grid",gridTemplateColumns:"1fr 1fr",gridGap:"10vh",placeContent:"center",alignItems:"center"}),m=a({display:"flex",flexDirection:"column",width:"56vw",height:"49vh",background:`transparent url(src/assets/img/${l.urlImagenFondo}.png) no-repeat center center`,backgroundSize:"100% 100%"});return u(()=>{s(".ventana-mensaje-puntos","jackInTheBox").then(t=>{setTimeout(()=>{s(".ventana-mensaje-puntos","bounceOutRight").then(_=>{r("finAnimacionIntroNivel")})},2400)})}),(t,_)=>(v(),h("div",j,[n("div",{style:o(i(m)),class:"flex-center-elements-column gap-1 animate__animated animate__heartBeat animate__slow animate__delay-2s",id:"simulate-click"},[n("div",{style:o(i(d))},[n("div",x,[c(t.$slots,"mensaje-respuestas",{},()=>[S],!0)]),n("div",N,[c(t.$slots,"mensaje-nivel",{},()=>[k],!0)])],4)],4)]))}};var C=p(w,[["__scopeId","data-v-81644f4c"]]);export{C as V};

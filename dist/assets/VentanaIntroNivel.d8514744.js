import{_ as f,u as h,a as I,r as c,o as y,q as r,b as S,c as l,d as j,e as k,f as e,n as d,g as u,s as v,x,t as N,p as b,h as A}from"./index.adbe3f98.js";var B="/assets/marco_nivel_1.126683c0.png",C="/assets/marco_nivel_2.1378fd7a.png";const w=a=>(b("data-v-fd4d199c"),a=a(),A(),a),V={class:"ventana-mensaje-puntos flex-center-elements-column gap-2 padding-2"},F={class:"info-mensaje"},R=w(()=>e("span",null," Nivel ",-1)),T={class:"mensaje-opcion"},$={props:{urlImagenFondo:{type:String,default:"marco_nivel_1"}},emits:["finAnimacionIntroNivel","configuraActividad"],setup(a,{emit:t}){const p=h(),_=I(),s=c(0),n=c("");y(()=>{r(".ventana-mensaje-puntos","jackInTheBox").then(o=>{setTimeout(()=>{r(".ventana-mensaje-puntos","bounceOutRight").then(g=>{t("finAnimacionIntroNivel")})},2400)})}),S(()=>{_.actividadActual.includes(p.currentRoute.value.path)?(s.value=2,n.value=C,t("configuraActividad",2)):(s.value=1,n.value=B,t("configuraActividad",1)),i.backgroundImage=`url(${n.value})`});const m=l({width:"80%",height:"30vh",display:"grid",gridTemplateColumns:"1fr 1fr",gridGap:"10vh",placeContent:"center",alignItems:"center"}),i=l({display:"flex",flexDirection:"column",width:"56vw",height:"49vh",backgroundImage:`url(${n.value}.png)`,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"100% 100%"});return(o,g)=>(j(),k("div",V,[e("div",{style:d(u(i)),class:"flex-center-elements-column gap-1 animate__animated animate__heartBeat animate__slow animate__delay-2s",id:"simulate-click"},[e("div",{style:d(u(m))},[e("div",F,[v(o.$slots,"mensaje-respuestas",{},()=>[R],!0)]),e("div",T,[v(o.$slots,"mensaje-nivel",{},()=>[x(N(s.value),1)],!0)])],4)],4)]))}};var z=f($,[["__scopeId","data-v-fd4d199c"]]);export{z as V};
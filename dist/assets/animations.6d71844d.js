const c=(t,o,n="animate__")=>new Promise((i,m)=>{const e=`${n}${o}`,a=document.querySelector(t);a.classList.add(`${n}animated`,e);function d(s){s.stopPropagation(),a.classList.remove(`${n}animated`,e),i("Animation ended")}a.addEventListener("animationend",d,{once:!0})});export{c as a};
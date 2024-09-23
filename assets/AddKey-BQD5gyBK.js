import{b as p,a as z,j as l,t as F,h as H}from"./index-CcGEw9Jg.js";import{F as Y,a as _,j as U,$ as W}from"./module-DWQIqOq2.js";import{H as R,a as V}from"./index.esm-CK2VI0Q2.js";import{c as w,l as Z,M as q,a as G,Y as J,T as Q,b as X,N as ee,P as te,d as re,f as ae,D as se,g as oe,h as ie,i as ne,j as le,S as ce,k as de,L as pe,C as me}from"./validationData-ahSocKe3.js";import{c as ue}from"./pages.module-7dfsT6ft.js";let fe={data:""},ye=e=>typeof window=="object"?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||fe,ge=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,he=/\/\*[^]*?\*\/|  +/g,S=/\n+/g,b=(e,r)=>{let t="",s="",o="";for(let a in e){let n=e[a];a[0]=="@"?a[1]=="i"?t=a+" "+n+";":s+=a[1]=="f"?b(n,a):a+"{"+b(n,a[1]=="k"?"":r)+"}":typeof n=="object"?s+=b(n,r?r.replace(/([^,])+/g,i=>a.replace(/(^:.*)|([^,])+/g,c=>/&/.test(c)?c.replace(/&/g,i):i?i+" "+c:c)):a):n!=null&&(a=/^--/.test(a)?a:a.replace(/[A-Z]/g,"-$&").toLowerCase(),o+=b.p?b.p(a,n):a+":"+n+";")}return t+(r&&o?r+"{"+o+"}":o)+s},h={},M=e=>{if(typeof e=="object"){let r="";for(let t in e)r+=t+M(e[t]);return r}return e},xe=(e,r,t,s,o)=>{let a=M(e),n=h[a]||(h[a]=(c=>{let d=0,m=11;for(;d<c.length;)m=101*m+c.charCodeAt(d++)>>>0;return"go"+m})(a));if(!h[n]){let c=a!==e?e:(d=>{let m,y,f=[{}];for(;m=ge.exec(d.replace(he,""));)m[4]?f.shift():m[3]?(y=m[3].replace(S," ").trim(),f.unshift(f[0][y]=f[0][y]||{})):f[0][m[1]]=m[2].replace(S," ").trim();return f[0]})(e);h[n]=b(o?{["@keyframes "+n]:c}:c,t?"":"."+n)}let i=t&&h.g?h.g:null;return t&&(h.g=h[n]),((c,d,m,y)=>{y?d.data=d.data.replace(y,c):d.data.indexOf(c)===-1&&(d.data=m?c+d.data:d.data+c)})(h[n],r,s,i),n},be=(e,r,t)=>e.reduce((s,o,a)=>{let n=r[a];if(n&&n.call){let i=n(t),c=i&&i.props&&i.props.className||/^go/.test(i)&&i;n=c?"."+c:i&&typeof i=="object"?i.props?"":b(i,""):i===!1?"":i}return s+o+(n??"")},"");function N(e){let r=this||{},t=e.call?e(r.p):e;return xe(t.unshift?t.raw?be(t,[].slice.call(arguments,1),r.p):t.reduce((s,o)=>Object.assign(s,o&&o.call?o(r.p):o),{}):t,ye(r.target),r.g,r.o,r.k)}let I,O,T;N.bind({g:1});let x=N.bind({k:1});function ve(e,r,t,s){b.p=r,I=e,O=t,T=s}function v(e,r){let t=this||{};return function(){let s=arguments;function o(a,n){let i=Object.assign({},a),c=i.className||o.className;t.p=Object.assign({theme:O&&O()},i),t.o=/ *go\d+/.test(c),i.className=N.apply(t,s)+(c?" "+c:"");let d=e;return e[0]&&(d=i.as||e,delete i.as),T&&d[0]&&T(i),I(d,i)}return o}}var je=e=>typeof e=="function",L=(e,r)=>je(e)?e(r):e,we=(()=>{let e=0;return()=>(++e).toString()})(),B=(()=>{let e;return()=>{if(e===void 0&&typeof window<"u"){let r=matchMedia("(prefers-reduced-motion: reduce)");e=!r||r.matches}return e}})(),Pe=20,E=new Map,ke=1e3,K=e=>{if(E.has(e))return;let r=setTimeout(()=>{E.delete(e),j({type:4,toastId:e})},ke);E.set(e,r)},Ee=e=>{let r=E.get(e);r&&clearTimeout(r)},C=(e,r)=>{switch(r.type){case 0:return{...e,toasts:[r.toast,...e.toasts].slice(0,Pe)};case 1:return r.toast.id&&Ee(r.toast.id),{...e,toasts:e.toasts.map(a=>a.id===r.toast.id?{...a,...r.toast}:a)};case 2:let{toast:t}=r;return e.toasts.find(a=>a.id===t.id)?C(e,{type:1,toast:t}):C(e,{type:0,toast:t});case 3:let{toastId:s}=r;return s?K(s):e.toasts.forEach(a=>{K(a.id)}),{...e,toasts:e.toasts.map(a=>a.id===s||s===void 0?{...a,visible:!1}:a)};case 4:return r.toastId===void 0?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(a=>a.id!==r.toastId)};case 5:return{...e,pausedAt:r.time};case 6:let o=r.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(a=>({...a,pauseDuration:a.pauseDuration+o}))}}},D=[],$={toasts:[],pausedAt:void 0},j=e=>{$=C($,e),D.forEach(r=>{r($)})},De={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},$e=(e={})=>{let[r,t]=p.useState($);p.useEffect(()=>(D.push(t),()=>{let o=D.indexOf(t);o>-1&&D.splice(o,1)}),[r]);let s=r.toasts.map(o=>{var a,n;return{...e,...e[o.type],...o,duration:o.duration||((a=e[o.type])==null?void 0:a.duration)||(e==null?void 0:e.duration)||De[o.type],style:{...e.style,...(n=e[o.type])==null?void 0:n.style,...o.style}}});return{...r,toasts:s}},Le=(e,r="blank",t)=>({createdAt:Date.now(),visible:!0,type:r,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...t,id:(t==null?void 0:t.id)||we()}),P=e=>(r,t)=>{let s=Le(r,e,t);return j({type:2,toast:s}),s.id},u=(e,r)=>P("blank")(e,r);u.error=P("error");u.success=P("success");u.loading=P("loading");u.custom=P("custom");u.dismiss=e=>{j({type:3,toastId:e})};u.remove=e=>j({type:4,toastId:e});u.promise=(e,r,t)=>{let s=u.loading(r.loading,{...t,...t==null?void 0:t.loading});return e.then(o=>(u.success(L(r.success,o),{id:s,...t,...t==null?void 0:t.success}),o)).catch(o=>{u.error(L(r.error,o),{id:s,...t,...t==null?void 0:t.error})}),e};var Ne=(e,r)=>{j({type:1,toast:{id:e,height:r}})},Ae=()=>{j({type:5,time:Date.now()})},Oe=e=>{let{toasts:r,pausedAt:t}=$e(e);p.useEffect(()=>{if(t)return;let a=Date.now(),n=r.map(i=>{if(i.duration===1/0)return;let c=(i.duration||0)+i.pauseDuration-(a-i.createdAt);if(c<0){i.visible&&u.dismiss(i.id);return}return setTimeout(()=>u.dismiss(i.id),c)});return()=>{n.forEach(i=>i&&clearTimeout(i))}},[r,t]);let s=p.useCallback(()=>{t&&j({type:6,time:Date.now()})},[t]),o=p.useCallback((a,n)=>{let{reverseOrder:i=!1,gutter:c=8,defaultPosition:d}=n||{},m=r.filter(g=>(g.position||d)===(a.position||d)&&g.height),y=m.findIndex(g=>g.id===a.id),f=m.filter((g,A)=>A<y&&g.visible).length;return m.filter(g=>g.visible).slice(...i?[f+1]:[0,f]).reduce((g,A)=>g+(A.height||0)+c,0)},[r]);return{toasts:r,handlers:{updateHeight:Ne,startPause:Ae,endPause:s,calculateOffset:o}}},Te=x`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,Ce=x`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,Se=x`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,Ke=v("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${Te} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${Ce} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${Se} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,Me=x`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,Ie=v("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${Me} 1s linear infinite;
`,Be=x`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,ze=x`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,Fe=v("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${Be} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${ze} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,He=v("div")`
  position: absolute;
`,Ye=v("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,_e=x`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,Ue=v("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${_e} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,We=({toast:e})=>{let{icon:r,type:t,iconTheme:s}=e;return r!==void 0?typeof r=="string"?p.createElement(Ue,null,r):r:t==="blank"?null:p.createElement(Ye,null,p.createElement(Ie,{...s}),t!=="loading"&&p.createElement(He,null,t==="error"?p.createElement(Ke,{...s}):p.createElement(Fe,{...s})))},Re=e=>`
0% {transform: translate3d(0,${e*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,Ve=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${e*-150}%,-1px) scale(.6); opacity:0;}
`,Ze="0%{opacity:0;} 100%{opacity:1;}",qe="0%{opacity:1;} 100%{opacity:0;}",Ge=v("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,Je=v("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,Qe=(e,r)=>{let t=e.includes("top")?1:-1,[s,o]=B()?[Ze,qe]:[Re(t),Ve(t)];return{animation:r?`${x(s)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${x(o)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},Xe=p.memo(({toast:e,position:r,style:t,children:s})=>{let o=e.height?Qe(e.position||r||"top-center",e.visible):{opacity:0},a=p.createElement(We,{toast:e}),n=p.createElement(Je,{...e.ariaProps},L(e.message,e));return p.createElement(Ge,{className:e.className,style:{...o,...t,...e.style}},typeof s=="function"?s({icon:a,message:n}):p.createElement(p.Fragment,null,a,n))});ve(p.createElement);var et=({id:e,className:r,style:t,onHeightUpdate:s,children:o})=>{let a=p.useCallback(n=>{if(n){let i=()=>{let c=n.getBoundingClientRect().height;s(e,c)};i(),new MutationObserver(i).observe(n,{subtree:!0,childList:!0,characterData:!0})}},[e,s]);return p.createElement("div",{ref:a,className:r,style:t},o)},tt=(e,r)=>{let t=e.includes("top"),s=t?{top:0}:{bottom:0},o=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:B()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${r*(t?1:-1)}px)`,...s,...o}},rt=N`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,k=16,at=({reverseOrder:e,position:r="top-center",toastOptions:t,gutter:s,children:o,containerStyle:a,containerClassName:n})=>{let{toasts:i,handlers:c}=Oe(t);return p.createElement("div",{style:{position:"fixed",zIndex:9999,top:k,left:k,right:k,bottom:k,pointerEvents:"none",...a},className:n,onMouseEnter:c.startPause,onMouseLeave:c.endPause},i.map(d=>{let m=d.position||r,y=c.calculateOffset(d,{reverseOrder:e,gutter:s,defaultPosition:r}),f=tt(m,y);return p.createElement(et,{id:d.id,key:d.id,onHeightUpdate:c.updateHeight,className:d.visible?rt:"",style:f},d.type==="custom"?L(d.message,d):o?o(d):p.createElement(Xe,{toast:d,position:m}))}))},st=u;const ot=()=>st.success("New key added!");function it(){const e=z();function r(t){return t.toLowerCase().replace(/\b\w/g,s=>s.toUpperCase()).replace(/\B\w/g,s=>s.toLowerCase())}return l.jsxs("div",{children:[l.jsx(Y,{className:w.formWrap,initialValues:{Maker:"- choose one -",Model:"",YearStart:"",YearEnd:"","Type of Ignition":"- choose one -","Type of Key":"- choose one -","No Buttons":"","Price All Keys Lost":"","Price Add a Key":"","Price Program Only":"","Dealer Price":"","Dealer Program":"","Dealer Emergency Blade":"","Dealer Price Total":"","Dealer Location":"","Secure Locks Parts":"","Part #":"",Link:"",Comments:""},validationSchema:Z,onSubmit:async(t,{resetForm:s})=>{const o={Maker:t.Maker,Model:r(t.Model),Year:`${t.YearStart}-${t.YearEnd}`,"Type of Ignition":t["Type of Ignition"],"Type of Key":t["Type of Key"],"No Buttons":t["No Buttons"],"Price All Keys Lost":t["Price All Keys Lost"],"Price Add a Key":t["Price Add a Key"],"Price Program Only":t["Price Program Only"],"Dealer Price":t["Dealer Price"],"Dealer Program":t["Dealer Program"],"Dealer Emergency Blade":t["Dealer Emergency Blade"],"Dealer Price Total":t["Dealer Price Total"],"Dealer Location":t["Dealer Location"],"Secure Locks Parts":t["Secure Locks Parts"],"Part #":t["Part #"],Link:t.Link,Comments:t.Comments,isActive:t.isActive};e(F(o)),ot(),s()},children:l.jsxs(_,{className:w.formWrap,children:[l.jsxs("div",{className:w.fieldsWrapper,children:[l.jsxs("div",{className:w.fieldsBlock,children:[l.jsx(q,{}),l.jsx(G,{}),l.jsx(J,{}),l.jsx(Q,{}),l.jsx(X,{}),l.jsx(ee,{}),l.jsx(te,{}),l.jsx(re,{}),l.jsx(ae,{})]}),l.jsxs("div",{className:w.fieldsBlock,children:[l.jsx(se,{}),l.jsx(oe,{}),l.jsx(ie,{}),l.jsx(ne,{}),l.jsx(le,{}),l.jsx(ce,{}),l.jsx(de,{}),l.jsx(pe,{}),l.jsx(me,{})]})]}),l.jsx("div",{children:l.jsx("button",{className:w.btn,type:"submit",children:"Submit"})})]})}),l.jsx(at,{position:"top-right",reverseOrder:!1})]})}function mt(){const e=H(U);return l.jsxs(l.Fragment,{children:[l.jsx(R,{children:l.jsx(V,{children:l.jsx("title",{children:"Add new key"})})}),l.jsx("h3",{children:"Here you can add new key"}),l.jsx(it,{}),e&&l.jsx("div",{className:ue.loader,children:l.jsx(W,{visible:!0,height:"80",width:"80",ariaLabel:"dna-loading",wrapperStyle:{},wrapperClass:"dna-wrapper"})})]})}export{mt as default};

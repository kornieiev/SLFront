import{u as c,j as e,p as n,d as l}from"./index-B4Pe0WMw.js";import{F as d,a as m,h as y,$ as P}from"./module-BnTYl3oI.js";import{H as x,a as j}from"./index.esm-BwxZ5dGF.js";import{c as o,l as p,M as g,a as L,Y as f,T as D,b as h,N as k,P as K,d as b,f as S,D as A,g as T,h as w,i as N,j as u,S as B,k as C,L as M,C as $}from"./validationData-D2uO5NuB.js";import{c as E}from"./pages.module-D9TkEEQx.js";function Y(){const s=c();function i(r){return r.toLowerCase().replace(/\b\w/g,a=>a.toUpperCase()).replace(/\B\w/g,a=>a.toLowerCase())}return e.jsx("div",{children:e.jsx(d,{className:o.formWrap,initialValues:{Maker:"",Model:"",YearStart:"",YearEnd:"","Type of Ignition":"","Type of Key":"","No Buttons":"","Price All Keys Lost":"","Price Add a Key":"","Price Program Only":"","Dealer Price":"","Dealer Program":"","Dealer Emergency Blade":"","Dealer Price Total":"","Dealer Location":"","Secure Locks Parts":"","Part #":"",Link:"",Comments:""},validationSchema:p,onSubmit:async(r,{resetForm:a})=>{const t={Maker:r.Maker,Model:i(r.Model),Year:`${r.YearStart}-${r.YearEnd}`,"Type of Ignition":r["Type of Ignition"],"Type of Key":r["Type of Key"],"No Buttons":r["No Buttons"],"Price All Keys Lost":r["Price All Keys Lost"],"Price Add a Key":r["Price Add a Key"],"Price Program Only":r["Price Program Only"],"Dealer Price":r["Dealer Price"],"Dealer Program":r["Dealer Program"],"Dealer Emergency Blade":r["Dealer Emergency Blade"],"Dealer Price Total":r["Dealer Price Total"],"Dealer Location":r["Dealer Location"],"Secure Locks Parts":r["Secure Locks Parts"],"Part #":r["Part #"],Link:r.Link,Comments:r.Comments,isActive:r.isActive};console.log("🚀 ~ onSubmit={ ~ credentials:",t),s(n(t)),a()},children:e.jsxs(m,{className:o.formWrap,children:[e.jsx(g,{}),e.jsx(L,{}),e.jsx(f,{}),e.jsx(D,{}),e.jsx(h,{}),e.jsx(k,{}),e.jsx(K,{}),e.jsx(b,{}),e.jsx(S,{}),e.jsx(A,{}),e.jsx(T,{}),e.jsx(w,{}),e.jsx(N,{}),e.jsx(u,{}),e.jsx(B,{}),e.jsx(C,{}),e.jsx(M,{}),e.jsx($,{}),e.jsx("button",{className:o.btn,type:"submit",children:"Submit"})]})})})}function W(){const s=l(y);return e.jsxs(e.Fragment,{children:[e.jsx(x,{children:e.jsx(j,{children:e.jsx("title",{children:"Add new key"})})}),e.jsx("h3",{children:"Here you can add new key"}),e.jsx(Y,{}),s&&e.jsx("div",{className:E.loader,children:e.jsx(P,{visible:!0,height:"80",width:"80",ariaLabel:"dna-loading",wrapperStyle:{},wrapperClass:"dna-wrapper"})})]})}export{W as default};
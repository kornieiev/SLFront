import{b as m,e as p,a as u,j as s,l as d}from"./index-DZ1NEQC6.js";import{I as b,_ as f}from"./index-BRIJ2s_C.js";import{H as x,a as j}from"./index.esm-BasMKufz.js";const _="_form_sb2va_1",h="_label_sb2va_5",g="_input_sb2va_13",v="_btn_sb2va_28",e={form:_,label:h,input:g,btn:v},w=()=>{const a=m(p),o=()=>f.error("Incorrect login or password"),n=u(),l=r=>{r.preventDefault();const t=r.currentTarget,i=t.elements.email.value.trim().replace(/\s+/g,""),c=t.elements.password.value.trim().replace(/\s+/g,"");a&&o(),n(d({email:i,password:c})),t.reset()};return s.jsxs("form",{className:e.form,onSubmit:l,autoComplete:"off",children:[s.jsxs("label",{className:e.label,children:["Email:",s.jsx("input",{className:e.input,type:"email",name:"email",required:!0})]}),s.jsxs("label",{className:e.label,children:["Password:",s.jsx("input",{className:e.input,type:"password",name:"password"})]}),s.jsx("button",{className:e.btn,type:"submit",children:"Log In"}),s.jsx(b,{position:"top-right",reverseOrder:!1})]})};function L(){return s.jsxs("div",{children:[s.jsx(x,{children:s.jsx(j,{children:s.jsx("title",{children:"Login"})})}),s.jsx(w,{})]})}export{L as default};

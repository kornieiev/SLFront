import{a as r,j as e,r as i}from"./index-DLx0wq19.js";import{H as m,a as o}from"./index.esm-BzmxKkaM.js";const c="_form_sb2va_1",p="_label_sb2va_5",u="_input_sb2va_13",b="_btn_sb2va_28",s={form:c,label:p,input:u,btn:b},d=()=>{const l=r(),n=t=>{t.preventDefault();const a=t.currentTarget;l(i({name:a.elements.name.value,email:a.elements.email.value,password:a.elements.password.value})),a.reset()};return e.jsxs("form",{className:s.form,onSubmit:n,autoComplete:"off",children:[e.jsxs("label",{className:s.label,children:["Username:",e.jsx("input",{className:s.input,type:"text",name:"name"})]}),e.jsxs("label",{className:s.label,children:["Email:",e.jsx("input",{className:s.input,type:"email",name:"email"})]}),e.jsxs("label",{className:s.label,children:["Password:",e.jsx("input",{className:s.input,type:"password",name:"password"})]}),e.jsx("button",{className:s.btn,type:"submit",children:"Register"})]})};function f(){return e.jsxs("div",{children:[e.jsx(m,{children:e.jsx(o,{children:e.jsx("title",{children:"Registration"})})}),e.jsx(d,{})]})}export{f as default};
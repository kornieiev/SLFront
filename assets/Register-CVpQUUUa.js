import{u as n,j as e,r as m}from"./index-CXJ9BvWC.js";import{H as i,a as o}from"./index.esm-DDzU0xgv.js";const c="_form_h6m23_1",u="_label_h6m23_5",a={form:c,label:u},d=()=>{const l=n(),r=t=>{t.preventDefault();const s=t.currentTarget;l(m({name:s.elements.name.value,email:s.elements.email.value,password:s.elements.password.value})),s.reset()};return e.jsxs("form",{className:a.form,onSubmit:r,autoComplete:"off",children:[e.jsxs("label",{className:a.label,children:["Username",e.jsx("input",{type:"text",name:"name"})]}),e.jsxs("label",{className:a.label,children:["Email",e.jsx("input",{type:"email",name:"email"})]}),e.jsxs("label",{className:a.label,children:["Password",e.jsx("input",{type:"password",name:"password"})]}),e.jsx("button",{type:"submit",children:"Register"})]})};function j(){return e.jsxs("div",{children:[e.jsx(i,{children:e.jsx(o,{children:e.jsx("title",{children:"Registration"})})}),e.jsx(d,{})]})}export{j as default};
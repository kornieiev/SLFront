import{a as i,j as e,w as c,h as d,b as m,q as p}from"./index-5KTYDNhi.js";import{F as h,a as x,i as n,I as j,_ as u,j as f,$ as g}from"./module-C09zOWhM.js";import{H as N,a as C}from"./index.esm-CyK2CxCD.js";import{c as t}from"./pages.module-DPXzP77F.js";import{s as b}from"./selectors-K5G-Raiv.js";const y="_mainWrapper_1ocgz_1",_="_formWrapper_1ocgz_11",F="_nameField_1ocgz_20",w="_btn_1ocgz_36",l={mainWrapper:y,formWrapper:_,nameField:F,btn:w};function D(){const r=a=>u.success(`${a.dealerCategory} ${a.dealerName} added as new client`),s=i();return e.jsxs("div",{className:l.mainWrapper,children:[e.jsx(h,{initialValues:{dealerName:"",dealerCategory:""},onSubmit:async(a,{resetForm:o})=>{!a.dealerName.trim()||a.dealerCategory===""||(s(c(a)),r(a),o())},children:e.jsxs(x,{className:l.formWrapper,children:[e.jsx("label",{htmlFor:"dealerName",children:"Client Name:"}),e.jsx(n,{className:l.nameField,id:"dealerName",name:"dealerName",placeholder:"Enter Dealer name"}),e.jsx("label",{htmlFor:"dealerCategory",children:"Client Category:"}),e.jsxs(n,{className:l.nameField,as:"select",id:"dealerCategory",name:"dealerCategory",children:[e.jsx("option",{value:"",children:"- choose one -"}),e.jsx("option",{value:"dealer",children:"Dealer"}),e.jsx("option",{value:"repossesion",children:"Repossesion"}),e.jsx("option",{value:"rental",children:"Rental"})]}),e.jsx("button",{className:l.btn,type:"submit",children:"Add new Client"})]})}),e.jsx(j,{position:"top-right",reverseOrder:!1})]})}function v(){const r=i(),s=d(b);return m.useEffect(()=>{r(p())},[r]),e.jsxs("div",{children:[e.jsx(D,{}),e.jsxs("div",{children:[s.length>0?e.jsx("h3",{children:"Current Clients List:"}):e.jsx("h5",{children:"You do not have any clients yet. Please add one"}),e.jsx("ul",{children:s&&s.map(a=>e.jsx("li",{children:e.jsxs("p",{children:[a.dealerName.toUpperCase()," (",a.dealerCategory,")"]})},a._id))})]})]})}function H(){const r=d(f);return e.jsxs(e.Fragment,{children:[e.jsx(N,{children:e.jsx(C,{children:e.jsx("title",{children:"Add new Dealer"})})}),e.jsx("h3",{className:t.title,children:"Here you can add new Client"}),e.jsx(v,{}),r&&e.jsx("div",{className:t.loader,children:e.jsx(g,{visible:!0,height:"80",width:"80",ariaLabel:"dna-loading",wrapperStyle:{},wrapperClass:"dna-wrapper"})})]})}export{H as default};

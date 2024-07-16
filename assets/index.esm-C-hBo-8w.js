var ee=Object.defineProperty;var te=(e,t,r)=>t in e?ee(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var y=(e,t,r)=>te(e,typeof t!="symbol"?t+"":t,r);import{m as j,b as T,a as L}from"./index-DyTc2xe1.js";var re=typeof Element<"u",ne=typeof Map=="function",se=typeof Set=="function",ie=typeof ArrayBuffer=="function"&&!!ArrayBuffer.isView;function x(e,t){if(e===t)return!0;if(e&&t&&typeof e=="object"&&typeof t=="object"){if(e.constructor!==t.constructor)return!1;var r,n,s;if(Array.isArray(e)){if(r=e.length,r!=t.length)return!1;for(n=r;n--!==0;)if(!x(e[n],t[n]))return!1;return!0}var i;if(ne&&e instanceof Map&&t instanceof Map){if(e.size!==t.size)return!1;for(i=e.entries();!(n=i.next()).done;)if(!t.has(n.value[0]))return!1;for(i=e.entries();!(n=i.next()).done;)if(!x(n.value[1],t.get(n.value[0])))return!1;return!0}if(se&&e instanceof Set&&t instanceof Set){if(e.size!==t.size)return!1;for(i=e.entries();!(n=i.next()).done;)if(!t.has(n.value[0]))return!1;return!0}if(ie&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(t)){if(r=e.length,r!=t.length)return!1;for(n=r;n--!==0;)if(e[n]!==t[n])return!1;return!0}if(e.constructor===RegExp)return e.source===t.source&&e.flags===t.flags;if(e.valueOf!==Object.prototype.valueOf&&typeof e.valueOf=="function"&&typeof t.valueOf=="function")return e.valueOf()===t.valueOf();if(e.toString!==Object.prototype.toString&&typeof e.toString=="function"&&typeof t.toString=="function")return e.toString()===t.toString();if(s=Object.keys(e),r=s.length,r!==Object.keys(t).length)return!1;for(n=r;n--!==0;)if(!Object.prototype.hasOwnProperty.call(t,s[n]))return!1;if(re&&e instanceof Element)return!1;for(n=r;n--!==0;)if(!((s[n]==="_owner"||s[n]==="__v"||s[n]==="__o")&&e.$$typeof)&&!x(e[s[n]],t[s[n]]))return!1;return!0}return e!==e&&t!==t}var ae=function(t,r){try{return x(t,r)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}};const oe=j(ae);var le=function(e,t,r,n,s,i,c,a){if(!e){var l;if(t===void 0)l=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var o=[r,n,s,i,c,a],u=0;l=new Error(t.replace(/%s/g,function(){return o[u++]})),l.name="Invariant Violation"}throw l.framesToPop=1,l}},ce=le;const K=j(ce);var ue=function(t,r,n,s){var i=n?n.call(s,t,r):void 0;if(i!==void 0)return!!i;if(t===r)return!0;if(typeof t!="object"||!t||typeof r!="object"||!r)return!1;var c=Object.keys(t),a=Object.keys(r);if(c.length!==a.length)return!1;for(var l=Object.prototype.hasOwnProperty.bind(r),o=0;o<c.length;o++){var u=c[o];if(!l(u))return!1;var f=t[u],m=r[u];if(i=n?n.call(s,f,m,u):void 0,i===!1||i===void 0&&f!==m)return!1}return!0};const fe=j(ue);var B=(e=>(e.BASE="base",e.BODY="body",e.HEAD="head",e.HTML="html",e.LINK="link",e.META="meta",e.NOSCRIPT="noscript",e.SCRIPT="script",e.STYLE="style",e.TITLE="title",e.FRAGMENT="Symbol(react.fragment)",e))(B||{}),P={link:{rel:["amphtml","canonical","alternate"]},script:{type:["application/ld+json"]},meta:{charset:"",name:["generator","robots","description"],property:["og:type","og:title","og:url","og:image","og:image:alt","og:description","twitter:url","twitter:title","twitter:description","twitter:image","twitter:image:alt","twitter:card","twitter:site"]}},z=Object.values(B),F={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},pe=Object.entries(F).reduce((e,[t,r])=>(e[r]=t,e),{}),h="data-rh",b={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate",PRIORITIZE_SEO_TAGS:"prioritizeSeoTags"},E=(e,t)=>{for(let r=e.length-1;r>=0;r-=1){const n=e[r];if(Object.prototype.hasOwnProperty.call(n,t))return n[t]}return null},de=e=>{let t=E(e,"title");const r=E(e,b.TITLE_TEMPLATE);if(Array.isArray(t)&&(t=t.join("")),r&&t)return r.replace(/%s/g,()=>t);const n=E(e,b.DEFAULT_TITLE);return t||n||void 0},me=e=>E(e,b.ON_CHANGE_CLIENT_STATE)||(()=>{}),I=(e,t)=>t.filter(r=>typeof r[e]<"u").map(r=>r[e]).reduce((r,n)=>({...r,...n}),{}),he=(e,t)=>t.filter(r=>typeof r.base<"u").map(r=>r.base).reverse().reduce((r,n)=>{if(!r.length){const s=Object.keys(n);for(let i=0;i<s.length;i+=1){const a=s[i].toLowerCase();if(e.indexOf(a)!==-1&&n[a])return r.concat(n)}}return r},[]),ye=e=>console&&typeof console.warn=="function"&&console.warn(e),O=(e,t,r)=>{const n={};return r.filter(s=>Array.isArray(s[e])?!0:(typeof s[e]<"u"&&ye(`Helmet: ${e} should be of type "Array". Instead found type "${typeof s[e]}"`),!1)).map(s=>s[e]).reverse().reduce((s,i)=>{const c={};i.filter(l=>{let o;const u=Object.keys(l);for(let m=0;m<u.length;m+=1){const p=u[m],g=p.toLowerCase();t.indexOf(g)!==-1&&!(o==="rel"&&l[o].toLowerCase()==="canonical")&&!(g==="rel"&&l[g].toLowerCase()==="stylesheet")&&(o=g),t.indexOf(p)!==-1&&(p==="innerHTML"||p==="cssText"||p==="itemprop")&&(o=p)}if(!o||!l[o])return!1;const f=l[o].toLowerCase();return n[o]||(n[o]={}),c[o]||(c[o]={}),n[o][f]?!1:(c[o][f]=!0,!0)}).reverse().forEach(l=>s.push(l));const a=Object.keys(c);for(let l=0;l<a.length;l+=1){const o=a[l],u={...n[o],...c[o]};n[o]=u}return s},[]).reverse()},Te=(e,t)=>{if(Array.isArray(e)&&e.length){for(let r=0;r<e.length;r+=1)if(e[r][t])return!0}return!1},ge=e=>({baseTag:he(["href"],e),bodyAttributes:I("bodyAttributes",e),defer:E(e,b.DEFER),encode:E(e,b.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:I("htmlAttributes",e),linkTags:O("link",["rel","href"],e),metaTags:O("meta",["name","charset","http-equiv","property","itemprop"],e),noscriptTags:O("noscript",["innerHTML"],e),onChangeClientState:me(e),scriptTags:O("script",["src","innerHTML"],e),styleTags:O("style",["cssText"],e),title:de(e),titleAttributes:I("titleAttributes",e),prioritizeSeoTags:Te(e,b.PRIORITIZE_SEO_TAGS)}),Z=e=>Array.isArray(e)?e.join(""):e,ve=(e,t)=>{const r=Object.keys(e);for(let n=0;n<r.length;n+=1)if(t[r[n]]&&t[r[n]].includes(e[r[n]]))return!0;return!1},H=(e,t)=>Array.isArray(e)?e.reduce((r,n)=>(ve(n,t)?r.priority.push(n):r.default.push(n),r),{priority:[],default:[]}):{default:e,priority:[]},N=(e,t)=>({...e,[t]:void 0}),Ae=["noscript","script","style"],M=(e,t=!0)=>t===!1?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;"),G=e=>Object.keys(e).reduce((t,r)=>{const n=typeof e[r]<"u"?`${r}="${e[r]}"`:`${r}`;return t?`${t} ${n}`:n},""),be=(e,t,r,n)=>{const s=G(r),i=Z(t);return s?`<${e} ${h}="true" ${s}>${M(i,n)}</${e}>`:`<${e} ${h}="true">${M(i,n)}</${e}>`},Ee=(e,t,r=!0)=>t.reduce((n,s)=>{const i=s,c=Object.keys(i).filter(o=>!(o==="innerHTML"||o==="cssText")).reduce((o,u)=>{const f=typeof i[u]>"u"?u:`${u}="${M(i[u],r)}"`;return o?`${o} ${f}`:f},""),a=i.innerHTML||i.cssText||"",l=Ae.indexOf(e)===-1;return`${n}<${e} ${h}="true" ${c}${l?"/>":`>${a}</${e}>`}`},""),W=(e,t={})=>Object.keys(e).reduce((r,n)=>{const s=F[n];return r[s||n]=e[n],r},t),Oe=(e,t,r)=>{const n={key:t,[h]:!0},s=W(r,n);return[T.createElement("title",s,t)]},$=(e,t)=>t.map((r,n)=>{const s={key:n,[h]:!0};return Object.keys(r).forEach(i=>{const a=F[i]||i;if(a==="innerHTML"||a==="cssText"){const l=r.innerHTML||r.cssText;s.dangerouslySetInnerHTML={__html:l}}else s[a]=r[i]}),T.createElement(e,s)}),d=(e,t,r=!0)=>{switch(e){case"title":return{toComponent:()=>Oe(e,t.title,t.titleAttributes),toString:()=>be(e,t.title,t.titleAttributes,r)};case"bodyAttributes":case"htmlAttributes":return{toComponent:()=>W(t),toString:()=>G(t)};default:return{toComponent:()=>$(e,t),toString:()=>Ee(e,t,r)}}},Ce=({metaTags:e,linkTags:t,scriptTags:r,encode:n})=>{const s=H(e,P.meta),i=H(t,P.link),c=H(r,P.script);return{priorityMethods:{toComponent:()=>[...$("meta",s.priority),...$("link",i.priority),...$("script",c.priority)],toString:()=>`${d("meta",s.priority,n)} ${d("link",i.priority,n)} ${d("script",c.priority,n)}`},metaTags:s.default,linkTags:i.default,scriptTags:c.default}},Se=e=>{const{baseTag:t,bodyAttributes:r,encode:n=!0,htmlAttributes:s,noscriptTags:i,styleTags:c,title:a="",titleAttributes:l,prioritizeSeoTags:o}=e;let{linkTags:u,metaTags:f,scriptTags:m}=e,p={toComponent:()=>{},toString:()=>""};return o&&({priorityMethods:p,linkTags:u,metaTags:f,scriptTags:m}=Ce(e)),{priority:p,base:d("base",t,n),bodyAttributes:d("bodyAttributes",r,n),htmlAttributes:d("htmlAttributes",s,n),link:d("link",u,n),meta:d("meta",f,n),noscript:d("noscript",i,n),script:d("script",m,n),style:d("style",c,n),title:d("title",{title:a,titleAttributes:l},n)}},k=Se,w=[],J=!!(typeof window<"u"&&window.document&&window.document.createElement),_=class{constructor(e,t){y(this,"instances",[]);y(this,"canUseDOM",J);y(this,"context");y(this,"value",{setHelmet:e=>{this.context.helmet=e},helmetInstances:{get:()=>this.canUseDOM?w:this.instances,add:e=>{(this.canUseDOM?w:this.instances).push(e)},remove:e=>{const t=(this.canUseDOM?w:this.instances).indexOf(e);(this.canUseDOM?w:this.instances).splice(t,1)}}});this.context=e,this.canUseDOM=t||!1,t||(e.helmet=k({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}}))}},we={},Q=T.createContext(we),v,xe=(v=class extends L.Component{constructor(r){super(r);y(this,"helmetData");this.helmetData=new _(this.props.context||{},v.canUseDOM)}render(){return T.createElement(Q.Provider,{value:this.helmetData.value},this.props.children)}},y(v,"canUseDOM",J),v),A=(e,t)=>{const r=document.head||document.querySelector("head"),n=r.querySelectorAll(`${e}[${h}]`),s=[].slice.call(n),i=[];let c;return t&&t.length&&t.forEach(a=>{const l=document.createElement(e);for(const o in a)if(Object.prototype.hasOwnProperty.call(a,o))if(o==="innerHTML")l.innerHTML=a.innerHTML;else if(o==="cssText")l.styleSheet?l.styleSheet.cssText=a.cssText:l.appendChild(document.createTextNode(a.cssText));else{const u=o,f=typeof a[u]>"u"?"":a[u];l.setAttribute(o,f)}l.setAttribute(h,"true"),s.some((o,u)=>(c=u,l.isEqualNode(o)))?s.splice(c,1):i.push(l)}),s.forEach(a=>{var l;return(l=a.parentNode)==null?void 0:l.removeChild(a)}),i.forEach(a=>r.appendChild(a)),{oldTags:s,newTags:i}},R=(e,t)=>{const r=document.getElementsByTagName(e)[0];if(!r)return;const n=r.getAttribute(h),s=n?n.split(","):[],i=[...s],c=Object.keys(t);for(const a of c){const l=t[a]||"";r.getAttribute(a)!==l&&r.setAttribute(a,l),s.indexOf(a)===-1&&s.push(a);const o=i.indexOf(a);o!==-1&&i.splice(o,1)}for(let a=i.length-1;a>=0;a-=1)r.removeAttribute(i[a]);s.length===i.length?r.removeAttribute(h):r.getAttribute(h)!==c.join(",")&&r.setAttribute(h,c.join(","))},$e=(e,t)=>{typeof e<"u"&&document.title!==e&&(document.title=Z(e)),R("title",t)},V=(e,t)=>{const{baseTag:r,bodyAttributes:n,htmlAttributes:s,linkTags:i,metaTags:c,noscriptTags:a,onChangeClientState:l,scriptTags:o,styleTags:u,title:f,titleAttributes:m}=e;R("body",n),R("html",s),$e(f,m);const p={baseTag:A("base",r),linkTags:A("link",i),metaTags:A("meta",c),noscriptTags:A("noscript",a),scriptTags:A("script",o),styleTags:A("style",u)},g={},U={};Object.keys(p).forEach(S=>{const{newTags:q,oldTags:X}=p[S];q.length&&(g[S]=q),X.length&&(U[S]=p[S].oldTags)}),t&&t(),l(e,g,U)},C=null,Pe=e=>{C&&cancelAnimationFrame(C),e.defer?C=requestAnimationFrame(()=>{V(e,()=>{C=null})}):(V(e),C=null)},Ie=Pe,Y=class extends L.Component{constructor(){super(...arguments);y(this,"rendered",!1)}shouldComponentUpdate(t){return!fe(t,this.props)}componentDidUpdate(){this.emitChange()}componentWillUnmount(){const{helmetInstances:t}=this.props.context;t.remove(this),this.emitChange()}emitChange(){const{helmetInstances:t,setHelmet:r}=this.props.context;let n=null;const s=ge(t.get().map(i=>{const c={...i.props};return delete c.context,c}));xe.canUseDOM?Ie(s):k&&(n=k(s)),r(n)}init(){if(this.rendered)return;this.rendered=!0;const{helmetInstances:t}=this.props.context;t.add(this),this.emitChange()}render(){return this.init(),null}},D,Me=(D=class extends L.Component{shouldComponentUpdate(e){return!oe(N(this.props,"helmetData"),N(e,"helmetData"))}mapNestedChildrenToProps(e,t){if(!t)return null;switch(e.type){case"script":case"noscript":return{innerHTML:t};case"style":return{cssText:t};default:throw new Error(`<${e.type} /> elements are self-closing and can not contain children. Refer to our API for more information.`)}}flattenArrayTypeChildren(e,t,r,n){return{...t,[e.type]:[...t[e.type]||[],{...r,...this.mapNestedChildrenToProps(e,n)}]}}mapObjectTypeChildren(e,t,r,n){switch(e.type){case"title":return{...t,[e.type]:n,titleAttributes:{...r}};case"body":return{...t,bodyAttributes:{...r}};case"html":return{...t,htmlAttributes:{...r}};default:return{...t,[e.type]:{...r}}}}mapArrayTypeChildrenToProps(e,t){let r={...t};return Object.keys(e).forEach(n=>{r={...r,[n]:e[n]}}),r}warnOnInvalidChildren(e,t){return K(z.some(r=>e.type===r),typeof e.type=="function"?"You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information.":`Only elements types ${z.join(", ")} are allowed. Helmet does not support rendering <${e.type}> elements. Refer to our API for more information.`),K(!t||typeof t=="string"||Array.isArray(t)&&!t.some(r=>typeof r!="string"),`Helmet expects a string as a child of <${e.type}>. Did you forget to wrap your children in braces? ( <${e.type}>{\`\`}</${e.type}> ) Refer to our API for more information.`),!0}mapChildrenToProps(e,t){let r={};return T.Children.forEach(e,n=>{if(!n||!n.props)return;const{children:s,...i}=n.props,c=Object.keys(i).reduce((l,o)=>(l[pe[o]||o]=i[o],l),{});let{type:a}=n;switch(typeof a=="symbol"?a=a.toString():this.warnOnInvalidChildren(n,s),a){case"Symbol(react.fragment)":t=this.mapChildrenToProps(s,t);break;case"link":case"meta":case"noscript":case"script":case"style":r=this.flattenArrayTypeChildren(n,r,c,s);break;default:t=this.mapObjectTypeChildren(n,t,c,s);break}}),this.mapArrayTypeChildrenToProps(r,t)}render(){const{children:e,...t}=this.props;let r={...t},{helmetData:n}=t;if(e&&(r=this.mapChildrenToProps(e,r)),n&&!(n instanceof _)){const s=n;n=new _(s.context,!0),delete r.helmetData}return n?T.createElement(Y,{...r,context:n.value}):T.createElement(Q.Consumer,null,s=>T.createElement(Y,{...r,context:s}))}},y(D,"defaultProps",{defer:!0,encodeSpecialCharacters:!0,prioritizeSeoTags:!1}),D);export{xe as H,Me as a};

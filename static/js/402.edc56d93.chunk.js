"use strict";(self.webpackChunkproduct_finder_spa=self.webpackChunkproduct_finder_spa||[]).push([[402],{8782:(e,r,a)=>{a.d(r,{TN:()=>d,d$:()=>n,kP:()=>o,y9:()=>c});var t=a(7154);const s={NODE_ENV:"production",PUBLIC_URL:"/product-finder-spa",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_BASE_URL;if(!s)throw new Error("REACT_APP_BASE_URL is not defined in environment variables.");const n=async(e,r)=>{try{return(await t.A.get(s,{params:{page:e,per_page:r}})).data.data}catch(a){throw console.error(a),a}},c=async e=>{try{const r=(await t.A.get(s,{params:{id:e}})).data.data;return Array.isArray(r)?r:[r]}catch(r){throw console.error(r),r}},o=async()=>{try{const e=await t.A.get(s,{params:{page:1}}),r=e.data.data.length-1;return e.data.data[r]}catch(e){throw console.error(e),e}},d=async()=>{try{const e=await t.A.get(s,{params:{page:2}}),r=e.data.data.length;return e.data.data.slice(r-2)}catch(e){throw console.error(e),e}}},3572:(e,r,a)=>{a.d(r,{X:()=>i});var t=a(5043);const s="Table_table__YUzYe",n="Table_backdrop__VKMME",c="Table_backdropHidden__W3HXt",o="Table_modal__znsan",d="Table_button__fEgjN";var l=a(579);const i=e=>{let{pageProducts:r}=e;const[a,i]=(0,t.useState)(null),[u,h]=(0,t.useState)(!1),_="".concat(n," ").concat(u?"":c),p=(0,t.useCallback)((()=>{h((e=>!e))}),[h]),g=(0,t.useCallback)((e=>{i(e),setTimeout((()=>{p()}),100)}),[i,p]),j=(0,t.useCallback)((()=>{p(),setTimeout((()=>{i(null)}),300)}),[i,p]);return(0,t.useEffect)((()=>{const e=e=>{u&&"Escape"===e.key&&j()};return document.addEventListener("keydown",e),()=>{document.removeEventListener("keydown",e)}}),[j,u]),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("table",{className:s,children:[(0,l.jsx)("thead",{children:(0,l.jsxs)("tr",{children:[(0,l.jsx)("th",{children:"ID"}),(0,l.jsx)("th",{children:"NAME"}),(0,l.jsx)("th",{children:"YEAR"})]})}),(0,l.jsx)("tbody",{children:r.map((e=>(0,l.jsxs)("tr",{style:{backgroundColor:e.color},onClick:()=>g(e),children:[(0,l.jsx)("td",{children:e.id}),(0,l.jsx)("td",{children:e.name}),(0,l.jsx)("td",{children:e.year})]},e.id)))})]}),a&&(0,l.jsx)("div",{className:_,onClick:e=>{e.currentTarget===e.target&&j()},children:(0,l.jsxs)("div",{className:o,style:{backgroundColor:a.color},children:[(0,l.jsx)("button",{type:"button",className:d,onClick:j,children:"x"}),(0,l.jsx)("h2",{children:"Product Details"}),(0,l.jsxs)("p",{children:["ID: ",a.id]}),(0,l.jsxs)("p",{children:["Name: ",a.name]}),(0,l.jsxs)("p",{children:["Year: ",a.year]}),(0,l.jsxs)("p",{children:["Color: ",a.color]}),(0,l.jsxs)("p",{children:["Pantone value: ",a.pantone_value]})]})})]})}},4402:(e,r,a)=>{a.r(r),a.d(r,{default:()=>i});var t=a(5043),s=a(1802),n=a(611),c=a(8782),o=a(1036),d=a(3572),l=a(579);function i(){const{pageProducts:e,lastProductOnFirstPage:r,setPageProducts:a,setLastProductOnFirstPage:i,setLoading:u}=(0,n.A)();(0,t.useEffect)((()=>{let e=!1;(async()=>{u(!0),await(async()=>{try{const e=await(0,c.kP)();i(e)}catch(r){console.error(r),e=!0,r instanceof Error&&r.message?o.oR.error(r.message):o.oR.error("An error occurred")}})(),await(async()=>{try{const e=(await(0,c.d$)(2,5)).slice(1);a(e)}catch(r){console.error(r),e||(r instanceof Error&&r.message?o.oR.error(r.message):o.oR.error("An error occurred"))}})(),u(!1)})()}),[a,u,i]);const h=r?[r,...e]:e;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(s.mg,{children:(0,l.jsx)("title",{children:"Product Finder - Page Second"})}),(0,l.jsx)(d.X,{pageProducts:h})]})}}}]);
//# sourceMappingURL=402.edc56d93.chunk.js.map
"use strict";(self.webpackChunkproduct_finder_spa=self.webpackChunkproduct_finder_spa||[]).push([[140],{8782:(e,a,r)=>{r.d(a,{TN:()=>d,d$:()=>n,kP:()=>o,y9:()=>c});var t=r(7154);const s="https://reqres.in/api/products";const n=async(e,a)=>{try{return(await t.A.get(s,{params:{page:e,per_page:a}})).data.data}catch(r){throw console.error(r),r}},c=async e=>{try{const a=(await t.A.get(s,{params:{id:e}})).data.data;return Array.isArray(a)?a:[a]}catch(a){throw console.error(a),a}},o=async()=>{try{const e=await t.A.get(s,{params:{page:1}}),a=e.data.data.length-1;return e.data.data[a]}catch(e){throw console.error(e),e}},d=async()=>{try{const e=await t.A.get(s,{params:{page:2}}),a=e.data.data.length;return e.data.data.slice(a-2)}catch(e){throw console.error(e),e}}},3572:(e,a,r)=>{r.d(a,{X:()=>i});var t=r(5043);const s="Table_table__YUzYe",n="Table_backdrop__VKMME",c="Table_backdropHidden__W3HXt",o="Table_modal__znsan",d="Table_button__fEgjN";var l=r(579);const i=e=>{let{pageProducts:a}=e;const[r,i]=(0,t.useState)(null),[h,u]=(0,t.useState)(!1),p="".concat(n," ").concat(h?"":c),g=(0,t.useCallback)((()=>{u((e=>!e))}),[u]),j=(0,t.useCallback)((e=>{i(e),setTimeout((()=>{g()}),100)}),[i,g]),x=(0,t.useCallback)((()=>{g(),setTimeout((()=>{i(null)}),300)}),[i,g]);return(0,t.useEffect)((()=>{const e=e=>{h&&"Escape"===e.key&&x()};return document.addEventListener("keydown",e),()=>{document.removeEventListener("keydown",e)}}),[x,h]),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("table",{className:s,children:[(0,l.jsx)("thead",{children:(0,l.jsxs)("tr",{children:[(0,l.jsx)("th",{children:"ID"}),(0,l.jsx)("th",{children:"NAME"}),(0,l.jsx)("th",{children:"YEAR"})]})}),(0,l.jsx)("tbody",{children:a.map((e=>(0,l.jsxs)("tr",{style:{backgroundColor:e.color},onClick:()=>j(e),children:[(0,l.jsx)("td",{children:e.id}),(0,l.jsx)("td",{children:e.name}),(0,l.jsx)("td",{children:e.year})]},e.id)))})]}),r&&(0,l.jsx)("div",{className:p,onClick:e=>{e.currentTarget===e.target&&x()},children:(0,l.jsxs)("div",{className:o,style:{backgroundColor:r.color},children:[(0,l.jsx)("button",{type:"button",className:d,onClick:x,children:"x"}),(0,l.jsx)("h2",{children:"Product Details"}),(0,l.jsxs)("p",{children:["ID: ",r.id]}),(0,l.jsxs)("p",{children:["Name: ",r.name]}),(0,l.jsxs)("p",{children:["Year: ",r.year]}),(0,l.jsxs)("p",{children:["Color: ",r.color]}),(0,l.jsxs)("p",{children:["Pantone value: ",r.pantone_value]})]})})]})}},9140:(e,a,r)=>{r.r(a),r.d(a,{default:()=>i});var t=r(5043),s=r(1802),n=r(611),c=r(8782),o=r(1036),d=r(3572),l=r(579);function i(){const{lastTwoProductsOnLastPage:e,setLastTwoProductsOnLastPage:a,setLoading:r}=(0,n.A)();return(0,t.useEffect)((()=>{(async()=>{r(!0);try{const e=await(0,c.TN)();a(e)}catch(e){console.error(e),e instanceof Error&&e.message?o.oR.error(e.message):o.oR.error("An error occurred")}finally{r(!1)}})()}),[a,r]),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(s.mg,{children:(0,l.jsx)("title",{children:"Product Finder - Page Third"})}),(0,l.jsx)(d.X,{pageProducts:e})]})}}}]);
//# sourceMappingURL=140.8123c1c3.chunk.js.map
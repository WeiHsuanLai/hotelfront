import{i as f,r as h,af as k,w as s,o as n,b as o,ai as u,c as i,e as y,F as V,n as g,t as c}from"./index-Dul5dqrC.js";import{V as D}from"./VContainer-CEPO03jh.js";import{V as d}from"./VCol-ByzQSib6.js";import{V as w}from"./VDivider-BH6Slor9.js";import{a as S}from"./VDataTable-CUlhISp4.js";import{V as v}from"./VRow-BJl_EXrT.js";import"./VList-DDjP7kj0.js";import"./ssrBoot-CBSZxYJK.js";const b=u("h1",{class:"text-center"},"訂單查詢",-1),O={__name:"orders",setup(x){const{apiAuth:m}=g(),p=f(),l=h([]),_=[{title:"編號",key:"_id"},{title:"下訂日期",key:"createdAt",value:a=>new Date(a.createdAt).toLocaleString()},{title:"商品",key:"cart",sortable:!1},{title:"訂房時間",key:"date",value:a=>a.cart.map(e=>{if(e.date&&e.date.length>0){const t=new Date(e.date[0]).toISOString().split("T")[0],r=new Date(e.date[e.date.length-1]).toISOString().split("T")[0];return`${t} 至 ${r}`}return"無日期"}).join(", ")},{title:"金額",key:"price",value:a=>a.cart.reduce((e,t)=>e+t.quantity*t.p_id.price,0)}];return(async()=>{var a,e;try{const{data:t}=await m.get("/order");l.value.push(...t.result)}catch(t){console.log(t),p({text:((e=(a=t==null?void 0:t.response)==null?void 0:a.data)==null?void 0:e.message)||"發生錯誤",snackbarProps:{color:"red"}})}})(),(a,e)=>(n(),k(D,null,{default:s(()=>[o(v,null,{default:s(()=>[o(d,{cols:"12"},{default:s(()=>[b]),_:1}),o(w),o(d,{cols:"12"},{default:s(()=>[o(S,{items:l.value,headers:_},{"item.cart":s(t=>[u("ul",null,[(n(!0),i(V,null,y(t.item.cart,r=>(n(),i("li",{key:r._id},c(r.p_id.name)+" * "+c(r.quantity),1))),128))])]),_:2},1032,["items"])]),_:1})]),_:1})]),_:1}))}};export{O as default};

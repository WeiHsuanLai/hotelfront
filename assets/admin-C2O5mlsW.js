import{i as A,r as u,u as B,a as v,o as V,c as _,b as t,w as a,d as b,F as w,e as M,f as U,V as L,g as N,h as p,t as R,j as T,k as j,l as x,m as z,n as I}from"./index-Dul5dqrC.js";import{V as k,a as C}from"./VList-DDjP7kj0.js";import{V as P}from"./VDivider-BH6Slor9.js";import{V as E,a as $}from"./VNavigationDrawer-C0038zm6.js";import{V as q}from"./VForm-BvIpyFKb.js";import"./ssrBoot-CBSZxYJK.js";const X={__name:"admin",setup(G){const{apiAuth:y}=I(),m=A(),c=u(null),l=u({open:!1}),D=i=>{l.value.open=!0},f=()=>{l.value.open=!1,c.value.deleteFileRecord()},n=u([]),g=u([]),S=async i=>{var o,r,s;if(!((o=n.value[0])!=null&&o.error)&&!(n.value.length<1))try{const e=new FormData;n.value.length>0&&e.append("image",n.value[0].file);const{data:h}=await y.post("/photo",e);d.image=h.result,m({text:l.value.id===""?"新增成功":"編輯成功",snackbarProps:{color:"green"}}),f()}catch(e){console.log(e),m({text:((s=(r=e==null?void 0:e.response)==null?void 0:r.data)==null?void 0:s.message)||"發生錯誤",snackbarProps:{color:"red"}})}},d=B(),F=[{to:"/admin/products",text:"商品管理",icon:"mdi-shopping"},{to:"/admin/orders",text:"訂單管理",icon:"mdi-list-box"},{to:"/aboutroom",text:"客房介紹",icon:"mdi-seat-individual-suite"},{to:"/",text:"回首頁",icon:"mdi-home"}];return(i,o)=>{const r=v("vue-file-agent"),s=v("router-view");return V(),_(w,null,[t(E,{permanent:""},{default:a(()=>[t(k,null,{default:a(()=>[t(C,{"prepend-avatar":b(d).image,title:b(d).account,onClick:o[0]||(o[0]=e=>D(null))},null,8,["prepend-avatar","title"])]),_:1}),t(P),t(k,null,{default:a(()=>[(V(),_(w,null,M(F,e=>t(C,{key:e.to,to:e.to,title:e.text,"prepend-icon":e.icon},null,8,["to","title","prepend-icon"])),64))]),_:1})]),_:1}),t(z,{modelValue:l.value.open,"onUpdate:modelValue":o[3]||(o[3]=e=>l.value.open=e),persistent:"",width:"500"},{default:a(()=>[t(q,{onSubmit:U(S,["prevent"]),disabled:i.isSubmitting},{default:a(()=>[t(L,null,{default:a(()=>[t(N,null,{default:a(()=>[p(R(l.value.id?"編輯大頭貼":"新增大頭貼"),1)]),_:1}),t(T,null,{default:a(()=>[t(r,{modelValue:n.value,"onUpdate:modelValue":o[1]||(o[1]=e=>n.value=e),"raw-model-value":g.value,"onUpdate:rawModelValue":o[2]||(o[2]=e=>g.value=e),accept:"image/jpeg,image/png",deletable:"","max-size":"1MB","help-text":"選擇檔案或拖曳到這裡","error-text":{type:"檔案格式不支援",size:"檔案大小不能超過 1MB"},ref_key:"fileAgent",ref:c},null,8,["modelValue","raw-model-value"])]),_:1}),t(j,null,{default:a(()=>[t(x,{color:"red",loading:i.isSubmitting,onClick:f},{default:a(()=>[p("取消")]),_:1},8,["loading"]),t(x,{color:"green",type:"submit",loading:i.isSubmitting},{default:a(()=>[p("送出")]),_:1},8,["loading"])]),_:1})]),_:1})]),_:1},8,["disabled"])]),_:1},8,["modelValue"]),t($,null,{default:a(()=>[t(s)]),_:1})],64)}}};export{X as default};

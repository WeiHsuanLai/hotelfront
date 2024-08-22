import{p as H,q as X,s as j,v as U,x as M,b as a,y as oe,z as ne,A as Q,B as Z,C as ee,D as E,E as se,G as re,H as te,I as ie,J as ue,K as L,L as p,M as ce,N as ae,O as Y,P as F,Q as de,r as P,R as ve,S as $,T as me,U as ge,W as fe,X as be,Y as he,Z as ye,_ as q,$ as Ve,a0 as pe,l as D,a1 as xe,a2 as ke,a3 as Se,a4 as _e,a5 as we,a6 as Be,a7 as Te,a8 as Ce,a9 as Ne,aa as Le,ab as Pe,ac as Ie,ad as Ae,ae as He,u as Re,i as De,a as W,o as V,c as I,d as m,af as C,w as g,F as A,e as G,ag as N,ah as Ee,h as R,ai as Ue,f as Me,V as Fe,g as $e,t as O,j as ze,k as qe,m as Ye,n as We}from"./index-D1rVZMnS.js";import{u as Xe}from"./vee-validate.esm-iWLRhtpm.js";import{a as z,V as je}from"./VList-BBrZecQj.js";import{V as Ge,a as Oe}from"./VNavigationDrawer-DNn9kRmI.js";import{V as Je}from"./VContainer-CvW6Gi3O.js";import{u as Ke}from"./ssrBoot-sUAhX7jW.js";import{V as Qe}from"./VForm-BM63iIGO.js";import"./VDivider-ChXDXOIk.js";const Ze=H({text:String,...X(),...j()},"VToolbarTitle"),et=U()({name:"VToolbarTitle",props:Ze(),setup(e,d){let{slots:t}=d;return M(()=>{const f=!!(t.default||t.text||e.text);return a(e.tag,{class:["v-toolbar-title",e.class],style:e.style},{default:()=>{var c;return[f&&a("div",{class:"v-toolbar-title__placeholder"},[t.text?t.text():e.text,(c=t.default)==null?void 0:c.call(t)])]}})}),{}}}),tt=[null,"prominent","default","comfortable","compact"],le=H({absolute:Boolean,collapse:Boolean,color:String,density:{type:String,default:"default",validator:e=>tt.includes(e)},extended:Boolean,extensionHeight:{type:[Number,String],default:48},flat:Boolean,floating:Boolean,height:{type:[Number,String],default:64},image:String,title:String,...oe(),...X(),...ne(),...Q(),...j({tag:"header"}),...Z()},"VToolbar"),J=U()({name:"VToolbar",props:le(),setup(e,d){var x;let{slots:t}=d;const{backgroundColorClasses:f,backgroundColorStyles:c}=ee(E(e,"color")),{borderClasses:n}=se(e),{elevationClasses:b}=re(e),{roundedClasses:i}=te(e),{themeClasses:k}=ie(e),{rtlClasses:B}=ue(),s=L(!!(e.extended||(x=t.extension)!=null&&x.call(t))),v=p(()=>parseInt(Number(e.height)+(e.density==="prominent"?Number(e.height):0)-(e.density==="comfortable"?8:0)-(e.density==="compact"?16:0),10)),h=p(()=>s.value?parseInt(Number(e.extensionHeight)+(e.density==="prominent"?Number(e.extensionHeight):0)-(e.density==="comfortable"?4:0)-(e.density==="compact"?8:0),10):0);return ce({VBtn:{variant:"text"}}),M(()=>{var T;const u=!!(e.title||t.title),y=!!(t.image||e.image),S=(T=t.extension)==null?void 0:T.call(t);return s.value=!!(e.extended||S),a(e.tag,{class:["v-toolbar",{"v-toolbar--absolute":e.absolute,"v-toolbar--collapse":e.collapse,"v-toolbar--flat":e.flat,"v-toolbar--floating":e.floating,[`v-toolbar--density-${e.density}`]:!0},f.value,n.value,b.value,i.value,k.value,B.value,e.class],style:[c.value,e.style]},{default:()=>[y&&a("div",{key:"image",class:"v-toolbar__image"},[t.image?a(Y,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},t.image):a(ae,{key:"image-img",cover:!0,src:e.image},null)]),a(Y,{defaults:{VTabs:{height:F(v.value)}}},{default:()=>{var r,o,_;return[a("div",{class:"v-toolbar__content",style:{height:F(v.value)}},[t.prepend&&a("div",{class:"v-toolbar__prepend"},[(r=t.prepend)==null?void 0:r.call(t)]),u&&a(et,{key:"title",text:e.title},{text:t.title}),(o=t.default)==null?void 0:o.call(t),t.append&&a("div",{class:"v-toolbar__append"},[(_=t.append)==null?void 0:_.call(t)])])]}}),a(Y,{defaults:{VTabs:{height:F(h.value)}}},{default:()=>[a(de,null,{default:()=>[s.value&&a("div",{class:"v-toolbar__extension",style:{height:F(h.value)}},[S])]})]})]})}),{contentHeight:v,extensionHeight:h}}}),at=H({scrollTarget:{type:String},scrollThreshold:{type:[String,Number],default:300}},"scroll");function lt(e){let d=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{canScroll:t}=d;let f=0,c=0;const n=P(null),b=L(0),i=L(0),k=L(0),B=L(!1),s=L(!1),v=p(()=>Number(e.scrollThreshold)),h=p(()=>ve((v.value-b.value)/v.value||0)),x=()=>{const u=n.value;if(!u||t&&!t.value)return;f=b.value,b.value="window"in u?u.pageYOffset:u.scrollTop;const y=u instanceof Window?document.documentElement.scrollHeight:u.scrollHeight;if(c!==y){c=y;return}s.value=b.value<f,k.value=Math.abs(b.value-v.value)};return $(s,()=>{i.value=i.value||b.value}),$(B,()=>{i.value=0}),me(()=>{$(()=>e.scrollTarget,u=>{var S;const y=u?document.querySelector(u):window;y&&y!==n.value&&((S=n.value)==null||S.removeEventListener("scroll",x),n.value=y,n.value.addEventListener("scroll",x,{passive:!0}))},{immediate:!0})}),ge(()=>{var u;(u=n.value)==null||u.removeEventListener("scroll",x)}),t&&$(t,x,{immediate:!0}),{scrollThreshold:v,currentScroll:b,currentThreshold:k,isScrollActive:B,scrollRatio:h,isScrollingUp:s,savedScroll:i}}const ot=H({scrollBehavior:String,modelValue:{type:Boolean,default:!0},location:{type:String,default:"top",validator:e=>["top","bottom"].includes(e)},...le(),...fe(),...at(),height:{type:[Number,String],default:64}},"VAppBar"),nt=U()({name:"VAppBar",props:ot(),emits:{"update:modelValue":e=>!0},setup(e,d){let{slots:t}=d;const f=P(),c=be(e,"modelValue"),n=p(()=>{var _;const o=new Set(((_=e.scrollBehavior)==null?void 0:_.split(" "))??[]);return{hide:o.has("hide"),fullyHide:o.has("fully-hide"),inverted:o.has("inverted"),collapse:o.has("collapse"),elevate:o.has("elevate"),fadeImage:o.has("fade-image")}}),b=p(()=>{const o=n.value;return o.hide||o.fullyHide||o.inverted||o.collapse||o.elevate||o.fadeImage||!c.value}),{currentScroll:i,scrollThreshold:k,isScrollingUp:B,scrollRatio:s}=lt(e,{canScroll:b}),v=p(()=>n.value.hide||n.value.fullyHide),h=p(()=>e.collapse||n.value.collapse&&(n.value.inverted?s.value>0:s.value===0)),x=p(()=>e.flat||n.value.fullyHide&&!c.value||n.value.elevate&&(n.value.inverted?i.value>0:i.value===0)),u=p(()=>n.value.fadeImage?n.value.inverted?1-s.value:s.value:void 0),y=p(()=>{var w,l;const o=Number(((w=f.value)==null?void 0:w.contentHeight)??e.height),_=Number(((l=f.value)==null?void 0:l.extensionHeight)??0);return v.value?i.value<k.value||n.value.fullyHide?o+_:o:o+_});he(p(()=>!!e.scrollBehavior),()=>{Ve(()=>{v.value?n.value.inverted?c.value=i.value>k.value:c.value=B.value||i.value<k.value:c.value=!0})});const{ssrBootStyles:S}=Ke(),{layoutItemStyles:T,layoutIsReady:r}=ye({id:e.name,order:p(()=>parseInt(e.order,10)),position:E(e,"location"),layoutSize:y,elementSize:L(void 0),active:c,absolute:E(e,"absolute")});return M(()=>{const o=J.filterProps(e);return a(J,q({ref:f,class:["v-app-bar",{"v-app-bar--bottom":e.location==="bottom"},e.class],style:[{...T.value,"--v-toolbar-image-opacity":u.value,height:void 0,...S.value},e.style]},o,{collapse:h.value,flat:x.value}),t)}),r}}),st=H({...pe({icon:"$menu",variant:"text"})},"VAppBarNavIcon"),rt=U()({name:"VAppBarNavIcon",props:st(),setup(e,d){let{slots:t}=d;return M(()=>a(D,q(e,{class:["v-app-bar-nav-icon"]}),t)),{}}}),it=H({bordered:Boolean,color:String,content:[Number,String],dot:Boolean,floating:Boolean,icon:xe,inline:Boolean,label:{type:String,default:"$vuetify.badge"},max:[Number,String],modelValue:{type:Boolean,default:!0},offsetX:[Number,String],offsetY:[Number,String],textColor:String,...X(),...ke({location:"top end"}),...Q(),...j(),...Z(),...Se({transition:"scale-rotate-transition"})},"VBadge"),K=U()({name:"VBadge",inheritAttrs:!1,props:it(),setup(e,d){const{backgroundColorClasses:t,backgroundColorStyles:f}=ee(E(e,"color")),{roundedClasses:c}=te(e),{t:n}=_e(),{textColorClasses:b,textColorStyles:i}=we(E(e,"textColor")),{themeClasses:k}=Be(),{locationStyles:B}=Te(e,!0,s=>(e.floating?e.dot?2:4:e.dot?8:12)+(["top","bottom"].includes(s)?+(e.offsetY??0):["left","right"].includes(s)?+(e.offsetX??0):0));return M(()=>{const s=Number(e.content),v=!e.max||isNaN(s)?e.content:s<=+e.max?s:`${e.max}+`,[h,x]=Ce(d.attrs,["aria-atomic","aria-label","aria-live","role","title"]);return a(e.tag,q({class:["v-badge",{"v-badge--bordered":e.bordered,"v-badge--dot":e.dot,"v-badge--floating":e.floating,"v-badge--inline":e.inline},e.class]},x,{style:e.style}),{default:()=>{var u,y;return[a("div",{class:"v-badge__wrapper"},[(y=(u=d.slots).default)==null?void 0:y.call(u),a(Ne,{transition:e.transition},{default:()=>{var S,T;return[Le(a("span",q({class:["v-badge__badge",k.value,t.value,c.value,b.value],style:[f.value,i.value,e.inline?{}:B.value],"aria-atomic":"true","aria-label":n(e.label,s),"aria-live":"polite",role:"status"},h),[e.dot?void 0:d.slots.badge?(T=(S=d.slots).badge)==null?void 0:T.call(S):e.icon?a(Ie,{icon:e.icon},null):v]),[[Pe,e.modelValue]])]}})])]}})}),{}}}),ut=""+new URL("rowlet-DxR-zGsq.png",import.meta.url).href,ct={__name:"default",setup(e){const{mobile:d}=He(),t=Re(),f=De(),c=P(!1),{apiAuth:n}=We(),b=P(null),i=P({open:!1}),k=T=>{i.value.open=!0},{isSubmitting:B,handleSubmit:s}=Xe({initialValues:{quantity:1}}),v=()=>{i.value.open=!1,b.value.deleteFileRecord()},h=P([]),x=P([]),u=s(async T=>{var r,o,_;if(!((r=h.value[0])!=null&&r.error)&&!(h.value.length<1))try{const w=new FormData;h.value.length>0&&w.append("image",h.value[0].file);const{data:l}=await n.post("/photo",w);console.log(w),t.image=l.result,f({text:i.value.id===""?"新增成功":"編輯成功",snackbarProps:{color:"green"}}),v()}catch(w){console.log(w),f({text:((_=(o=w==null?void 0:w.response)==null?void 0:o.data)==null?void 0:_.message)||"發生錯誤",snackbarProps:{color:"red"}})}}),y=p(()=>[{to:"/about",text:"關於我們",icon:"mdi-alpha-a-box-outline",show:!t.isLogin||t.isLogin},{to:"/aboutroom",text:"客房介紹",icon:"mdi-seat-individual-suite",show:!t.isLogin||t.isLogin},{to:"/register",text:"註冊",icon:"mdi-account-plus",show:!t.isLogin},{to:"/login",text:"登入",icon:"mdi-account-arrow-left",show:!t.isLogin},{to:"/cart",text:"購物車",icon:"mdi-cart",show:!t.isLogin||t.isLogin},{to:"/orders",text:"訂單",icon:"mdi-list-box",show:t.isLogin},{to:"/admin",text:"管理",icon:"mdi-cog",show:t.isLogin&&t.isAdmin}]),S=async()=>{await t.logout(),f({text:"登出成功",snackbarProps:{color:"green"}})};return p(()=>`https://api.multiavatar.com/${t.account}.png`),(T,r)=>{const o=W("router-link"),_=W("vue-file-agent"),w=W("router-view");return V(),I(A,null,[m(d)?(V(),C(Ge,{key:0,modelValue:c.value,"onUpdate:modelValue":r[1]||(r[1]=l=>c.value=l)},{default:g(()=>[a(je,{nav:""},{default:g(()=>[a(z,{"prepend-avatar":m(t).image,title:m(t).name,onClick:r[0]||(r[0]=l=>k(null))},null,8,["prepend-avatar","title"]),(V(!0),I(A,null,G(y.value,l=>(V(),I(A,{key:l.to},[l.show?(V(),C(z,{key:0,"prepend-icon":l.icon,to:l.to,title:l.text},{append:g(()=>[l.to==="/cart"&&m(t).cart>0?(V(),C(K,{key:0,color:"error",content:m(t).cart,inline:""},null,8,["content"])):N("",!0)]),_:2},1032,["prepend-icon","to","title"])):N("",!0)],64))),128)),m(t).isLogin?(V(),C(z,{key:0,"prepend-icon":"mdi-account-arrow-right",title:"登出",onClick:S})):N("",!0)]),_:1})]),_:1},8,["modelValue"])):N("",!0),a(nt,null,{default:g(()=>[a(Je,{class:"d-flex align-center",prominent:""},{default:g(()=>[a(o,{to:"/",style:{width:"70px"}},{default:g(()=>[a(ae,{src:ut,class:"logorowelt"})]),_:1}),a(Ee),m(d)?(V(),C(rt,{key:0,onClick:r[2]||(r[2]=l=>c.value=!0)})):(V(),I(A,{key:1},[(V(!0),I(A,null,G(y.value,l=>(V(),I(A,{key:l.to},[l.show?(V(),C(D,{key:0,"prepend-icon":l.icon,to:l.to},{default:g(()=>[R(O(l.text)+" ",1),l.to==="/cart"&&m(t).cart>0?(V(),C(K,{key:0,color:"red",content:m(t).cart,floating:""},null,8,["content"])):N("",!0)]),_:2},1032,["prepend-icon","to"])):N("",!0)],64))),128)),m(t).isLogin?(V(),C(z,{key:0,"prepend-avatar":m(t).image,title:m(t).name[0],onClick:r[3]||(r[3]=l=>k(null))},null,8,["prepend-avatar","title"])):N("",!0),m(t).isLogin?(V(),C(D,{key:1,"prepend-icon":"mdi-account-arrow-right",onClick:S},{default:g(()=>[R("登出")]),_:1})):N("",!0)],64))]),_:1})]),_:1}),Ue("template",null,[a(Ye,{modelValue:i.value.open,"onUpdate:modelValue":r[6]||(r[6]=l=>i.value.open=l),persistent:"",width:"500"},{default:g(()=>[a(Qe,{onSubmit:Me(m(u),["prevent"]),disabled:m(B)},{default:g(()=>[a(Fe,null,{default:g(()=>[a($e,null,{default:g(()=>[R(O(i.value.id?"編輯大頭貼":"新增大頭貼"),1)]),_:1}),a(ze,null,{default:g(()=>[a(_,{modelValue:h.value,"onUpdate:modelValue":r[4]||(r[4]=l=>h.value=l),"raw-model-value":x.value,"onUpdate:rawModelValue":r[5]||(r[5]=l=>x.value=l),accept:"image/jpeg,image/png",deletable:"","max-size":"1MB","help-text":"選擇檔案或拖曳到這裡","error-text":{type:"檔案格式不支援",size:"檔案大小不能超過 1MB"},ref_key:"fileAgent",ref:b},null,8,["modelValue","raw-model-value"])]),_:1}),a(qe,null,{default:g(()=>[a(D,{color:"red",loading:m(B),onClick:v},{default:g(()=>[R("取消")]),_:1},8,["loading"]),a(D,{color:"green",type:"submit",loading:m(B)},{default:g(()=>[R("送出")]),_:1},8,["loading"])]),_:1})]),_:1})]),_:1},8,["onSubmit","disabled"])]),_:1},8,["modelValue"])]),a(Oe,null,{default:g(()=>[a(w)]),_:1})],64)}}},Vt=Ae(ct,[["__scopeId","data-v-1300bb53"]]);export{Vt as default};

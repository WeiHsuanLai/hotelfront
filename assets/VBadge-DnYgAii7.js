import{p as B,ar as V,q as N,aM as P,A as h,s as x,B as R,aN as T,v as _,C as w,D as d,H as A,am as L,aO as $,aP as D,aQ as I,x as M,aR as X,b as t,az as Y,ap as q,ay as z,$ as u,aS as F}from"./index-DU8qBm1Z.js";const H=B({bordered:Boolean,color:String,content:[Number,String],dot:Boolean,floating:Boolean,icon:V,inline:Boolean,label:{type:String,default:"$vuetify.badge"},max:[Number,String],modelValue:{type:Boolean,default:!0},offsetX:[Number,String],offsetY:[Number,String],textColor:String,...N(),...P({location:"top end"}),...h(),...x(),...R(),...T({transition:"scale-rotate-transition"})},"VBadge"),Q=_()({name:"VBadge",inheritAttrs:!1,props:H(),setup(e,o){const{backgroundColorClasses:c,backgroundColorStyles:g}=w(d(e,"color")),{roundedClasses:b}=A(e),{t:m}=L(),{textColorClasses:f,textColorStyles:v}=$(d(e,"textColor")),{themeClasses:C}=D(),{locationStyles:y}=I(e,!0,a=>(e.floating?e.dot?2:4:e.dot?8:12)+(["top","bottom"].includes(a)?+(e.offsetY??0):["left","right"].includes(a)?+(e.offsetX??0):0));return M(()=>{const a=Number(e.content),n=!e.max||isNaN(a)?e.content:a<=+e.max?a:`${e.max}+`,[S,k]=X(o.attrs,["aria-atomic","aria-label","aria-live","role","title"]);return t(e.tag,u({class:["v-badge",{"v-badge--bordered":e.bordered,"v-badge--dot":e.dot,"v-badge--floating":e.floating,"v-badge--inline":e.inline},e.class]},k,{style:e.style}),{default:()=>{var s,l;return[t("div",{class:"v-badge__wrapper"},[(l=(s=o.slots).default)==null?void 0:l.call(s),t(Y,{transition:e.transition},{default:()=>{var i,r;return[q(t("span",u({class:["v-badge__badge",C.value,c.value,b.value,f.value],style:[g.value,v.value,e.inline?{}:y.value],"aria-atomic":"true","aria-label":m(e.label,a),"aria-live":"polite",role:"status"},S),[e.dot?void 0:o.slots.badge?(r=(i=o.slots).badge)==null?void 0:r.call(i):e.icon?t(F,{icon:e.icon},null):n]),[[z,e.modelValue]])]}})])]}})}),{}}});export{Q as V};

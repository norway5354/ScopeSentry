import{Y as e,c8 as a,bm as i,Z as t,a0 as n,a$ as l,a3 as c,a2 as s,a1 as o,bs as v,d,aB as u,aF as r,a6 as f,bb as p,ba as y,a7 as b,r as m,b6 as h,O as k,aC as I,H as g,o as x,c as V,f as S,a as T,n as w,ad as _,i as C,w as B,aI as A,C as P,j as N,t as E,e as $,aP as j,a8 as F,aH as H,ae as K,a9 as z,ai as O,b0 as Y,bu as Z,ag as q}from"./index-KRGk12nW.js";const D=e({modelValue:{type:[Boolean,String,Number],default:!1},disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},size:{type:String,validator:a},width:{type:[String,Number],default:""},inlinePrompt:{type:Boolean,default:!1},inactiveActionIcon:{type:i},activeActionIcon:{type:i},activeIcon:{type:i},inactiveIcon:{type:i},activeText:{type:String,default:""},inactiveText:{type:String,default:""},activeValue:{type:[Boolean,String,Number],default:!0},inactiveValue:{type:[Boolean,String,Number],default:!1},name:{type:String,default:""},validateEvent:{type:Boolean,default:!0},beforeChange:{type:t(Function)},id:String,tabindex:{type:[String,Number]},label:{type:String,default:void 0}}),G={[n]:e=>l(e)||c(e)||s(e),[o]:e=>l(e)||c(e)||s(e),[v]:e=>l(e)||c(e)||s(e)},J=["onClick"],L=["id","aria-checked","aria-disabled","aria-label","name","true-value","false-value","disabled","tabindex","onKeydown"],M=["aria-hidden"],Q=["aria-hidden"],R=["aria-hidden"],U="ElSwitch",W=d({name:U});const X=q(z(d({...W,props:D,emits:G,setup(e,{expose:a,emit:i}){const t=e,{formItem:c}=u(),s=r(),d=f("switch"),{inputId:z}=p(t,{formItemContext:c}),q=y(b((()=>t.loading))),D=m(!1!==t.modelValue),G=m(),W=m(),X=b((()=>[d.b(),d.m(s.value),d.is("disabled",q.value),d.is("checked",ne.value)])),ee=b((()=>[d.e("label"),d.em("label","left"),d.is("active",!ne.value)])),ae=b((()=>[d.e("label"),d.em("label","right"),d.is("active",ne.value)])),ie=b((()=>({width:h(t.width)})));k((()=>t.modelValue),(()=>{D.value=!0}));const te=b((()=>!!D.value&&t.modelValue)),ne=b((()=>te.value===t.activeValue));[t.activeValue,t.inactiveValue].includes(te.value)||(i(n,t.inactiveValue),i(o,t.inactiveValue),i(v,t.inactiveValue)),k(ne,(e=>{var a;G.value.checked=e,t.validateEvent&&(null==(a=null==c?void 0:c.validate)||a.call(c,"change").catch((e=>I())))}));const le=()=>{const e=ne.value?t.inactiveValue:t.activeValue;i(n,e),i(o,e),i(v,e),O((()=>{G.value.checked=ne.value}))},ce=()=>{if(q.value)return;const{beforeChange:e}=t;if(!e)return void le();const a=e();[Y(a),l(a)].includes(!0)||Z(U,"beforeChange must return type `Promise<boolean>` or `boolean`"),Y(a)?a.then((e=>{e&&le()})).catch((e=>{})):a&&le()};return g((()=>{G.value.checked=ne.value})),a({focus:()=>{var e,a;null==(a=null==(e=G.value)?void 0:e.focus)||a.call(e)},checked:ne}),(e,a)=>(x(),V("div",{class:w(T(X)),onClick:K(ce,["prevent"])},[S("input",{id:T(z),ref_key:"input",ref:G,class:w(T(d).e("input")),type:"checkbox",role:"switch","aria-checked":T(ne),"aria-disabled":T(q),"aria-label":e.label,name:e.name,"true-value":e.activeValue,"false-value":e.inactiveValue,disabled:T(q),tabindex:e.tabindex,onChange:le,onKeydown:_(ce,["enter"])},null,42,L),e.inlinePrompt||!e.inactiveIcon&&!e.inactiveText?N("v-if",!0):(x(),V("span",{key:0,class:w(T(ee))},[e.inactiveIcon?(x(),C(T(P),{key:0},{default:B((()=>[(x(),C(A(e.inactiveIcon)))])),_:1})):N("v-if",!0),!e.inactiveIcon&&e.inactiveText?(x(),V("span",{key:1,"aria-hidden":T(ne)},E(e.inactiveText),9,M)):N("v-if",!0)],2)),S("span",{ref_key:"core",ref:W,class:w(T(d).e("core")),style:H(T(ie))},[e.inlinePrompt?(x(),V("div",{key:0,class:w(T(d).e("inner"))},[e.activeIcon||e.inactiveIcon?(x(),C(T(P),{key:0,class:w(T(d).is("icon"))},{default:B((()=>[(x(),C(A(T(ne)?e.activeIcon:e.inactiveIcon)))])),_:1},8,["class"])):e.activeText||e.inactiveText?(x(),V("span",{key:1,class:w(T(d).is("text")),"aria-hidden":!T(ne)},E(T(ne)?e.activeText:e.inactiveText),11,Q)):N("v-if",!0)],2)):N("v-if",!0),S("div",{class:w(T(d).e("action"))},[e.loading?(x(),C(T(P),{key:0,class:w(T(d).is("loading"))},{default:B((()=>[$(T(j))])),_:1},8,["class"])):T(ne)?F(e.$slots,"active-action",{key:1},(()=>[e.activeActionIcon?(x(),C(T(P),{key:0},{default:B((()=>[(x(),C(A(e.activeActionIcon)))])),_:1})):N("v-if",!0)])):T(ne)?N("v-if",!0):F(e.$slots,"inactive-action",{key:2},(()=>[e.inactiveActionIcon?(x(),C(T(P),{key:0},{default:B((()=>[(x(),C(A(e.inactiveActionIcon)))])),_:1})):N("v-if",!0)]))],2)],6),e.inlinePrompt||!e.activeIcon&&!e.activeText?N("v-if",!0):(x(),V("span",{key:1,class:w(T(ae))},[e.activeIcon?(x(),C(T(P),{key:0},{default:B((()=>[(x(),C(A(e.activeIcon)))])),_:1})):N("v-if",!0),!e.activeIcon&&e.activeText?(x(),V("span",{key:1,"aria-hidden":!T(ne)},E(e.activeText),9,R)):N("v-if",!0)],2))],10,J))}}),[["__file","switch.vue"]]));export{X as E};
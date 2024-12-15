import{s as e,x as o,d as l,z as a,aj as s,bT as t,B as n,da as r,o as i,c,f as d,J as u,n as f,a as p,t as v,e as y,w as g,i as m,G as b,D as h,j as C,F as x,L as k,db as w,ab as $,ad as A,b3 as B,aU as F,c1 as I,aV as R,r as D,dc as _,C as S,dd as L,a2 as H,aq as M,W as T,de as E,df as O,a$ as j,bj as z,bN as N,A as P,ai as q,a4 as V,dg as K,c2 as U,K as G,bS as J,ao as Q,h as W,c3 as Z,dh as X,M as Y,ay as ee,cC as oe,Q as le,aH as ae,H as se,E as te}from"./index-M10etHi6.js";import{c as ne}from"./refs-DEjEOHCT.js";import{i as re}from"./el-popper-D4B4f19J.js";const ie=Symbol("dialogInjectionKey"),ce=e({center:Boolean,alignCenter:Boolean,closeIcon:{type:o},draggable:Boolean,overflow:Boolean,fullscreen:Boolean,showClose:{type:Boolean,default:!0},title:{type:String,default:""},ariaLevel:{type:String,default:"2"}}),de=["aria-level"],ue=["aria-label"],fe=["id"],pe=l({name:"ElDialogContent"});var ve=k(l({...pe,props:ce,emits:{close:()=>!0},setup(e){const o=e,{t:l}=a(),{Close:k}=w,{dialogRef:$,headerRef:A,bodyId:B,ns:F,style:I}=s(ie),{focusTrapRef:R}=s(t),D=n((()=>[F.b(),F.is("fullscreen",o.fullscreen),F.is("draggable",o.draggable),F.is("align-center",o.alignCenter),{[F.m("center")]:o.center}])),_=ne(R,$),S=n((()=>o.draggable)),L=n((()=>o.overflow));return r($,A,S,L),(e,o)=>(i(),c("div",{ref:p(_),class:f(p(D)),style:x(p(I)),tabindex:"-1"},[d("header",{ref_key:"headerRef",ref:A,class:f([p(F).e("header"),{"show-close":e.showClose}])},[u(e.$slots,"header",{},(()=>[d("span",{role:"heading","aria-level":e.ariaLevel,class:f(p(F).e("title"))},v(e.title),11,de)])),e.showClose?(i(),c("button",{key:0,"aria-label":p(l)("el.dialog.close"),class:f(p(F).e("headerbtn")),type:"button",onClick:o[0]||(o[0]=o=>e.$emit("close"))},[y(p(h),{class:f(p(F).e("close"))},{default:g((()=>[(i(),m(b(e.closeIcon||p(k))))])),_:1},8,["class"])],10,ue)):C("v-if",!0)],2),d("div",{id:p(B),class:f(p(F).e("body"))},[u(e.$slots,"default")],10,fe),e.$slots.footer?(i(),c("footer",{key:0,class:f(p(F).e("footer"))},[u(e.$slots,"footer")],2)):C("v-if",!0)],6))}}),[["__file","dialog-content.vue"]]);const ye=e({...ce,appendToBody:Boolean,appendTo:{type:$(String),default:"body"},beforeClose:{type:$(Function)},destroyOnClose:Boolean,closeOnClickModal:{type:Boolean,default:!0},closeOnPressEscape:{type:Boolean,default:!0},lockScroll:{type:Boolean,default:!0},modal:{type:Boolean,default:!0},openDelay:{type:Number,default:0},closeDelay:{type:Number,default:0},top:{type:String},modelValue:Boolean,modalClass:String,width:{type:[String,Number]},zIndex:{type:Number},trapFocus:{type:Boolean,default:!1},headerAriaLevel:{type:String,default:"2"}}),ge={open:()=>!0,opened:()=>!0,close:()=>!0,closed:()=>!0,[A]:e=>B(e),openAutoFocus:()=>!0,closeAutoFocus:()=>!0},me=(e,o)=>{var l;const a=F().emit,{nextZIndex:s}=I();let t="";const r=R(),i=R(),c=D(!1),d=D(!1),u=D(!1),f=D(null!=(l=e.zIndex)?l:s());let p,v;const y=_("namespace",E),g=n((()=>{const o={},l=`--${y.value}-dialog`;return e.fullscreen||(e.top&&(o[`${l}-margin-top`]=e.top),e.width&&(o[`${l}-width`]=S(e.width))),o})),m=n((()=>e.alignCenter?{display:"flex"}:{}));function b(){null==v||v(),null==p||p(),e.openDelay&&e.openDelay>0?({stop:p}=O((()=>x()),e.openDelay)):x()}function h(){null==p||p(),null==v||v(),e.closeDelay&&e.closeDelay>0?({stop:v}=O((()=>k()),e.closeDelay)):k()}function C(){e.beforeClose?e.beforeClose((function(e){e||(d.value=!0,c.value=!1)})):h()}function x(){j&&(c.value=!0)}function k(){c.value=!1}return e.lockScroll&&L(c),H((()=>e.modelValue),(l=>{l?(d.value=!1,b(),u.value=!0,f.value=re(e.zIndex)?s():f.value++,M((()=>{a("open"),o.value&&(o.value.scrollTop=0)}))):c.value&&h()})),H((()=>e.fullscreen),(e=>{o.value&&(e?(t=o.value.style.transform,o.value.style.transform=""):o.value.style.transform=t)})),T((()=>{e.modelValue&&(c.value=!0,u.value=!0,b())})),{afterEnter:function(){a("opened")},afterLeave:function(){a("closed"),a(A,!1),e.destroyOnClose&&(u.value=!1)},beforeLeave:function(){a("close")},handleClose:C,onModalClick:function(){e.closeOnClickModal&&C()},close:h,doClose:k,onOpenAutoFocus:function(){a("openAutoFocus")},onCloseAutoFocus:function(){a("closeAutoFocus")},onCloseRequested:function(){e.closeOnPressEscape&&C()},onFocusoutPrevented:function(e){var o;"pointer"===(null==(o=e.detail)?void 0:o.focusReason)&&e.preventDefault()},titleId:r,bodyId:i,closed:d,style:g,overlayDialogStyle:m,rendered:u,visible:c,zIndex:f}},be=["aria-label","aria-labelledby","aria-describedby"],he=l({name:"ElDialog",inheritAttrs:!1});const Ce=Y(k(l({...he,props:ye,emits:ge,setup(e,{expose:o}){const l=e,a=z();N({scope:"el-dialog",from:"the title slot",replacement:"the header slot",version:"3.0.0",ref:"https://element-plus.org/en-US/component/dialog.html#slots"},n((()=>!!a.title)));const s=P("dialog"),t=D(),r=D(),c=D(),{visible:v,titleId:b,bodyId:h,style:k,overlayDialogStyle:w,rendered:$,zIndex:A,afterEnter:B,afterLeave:F,beforeLeave:I,handleClose:R,onModalClick:_,onOpenAutoFocus:S,onCloseAutoFocus:L,onCloseRequested:H,onFocusoutPrevented:M}=me(l,t);q(ie,{dialogRef:t,headerRef:r,bodyId:h,ns:s,rendered:$,style:k});const T=X(_),E=n((()=>l.draggable&&!l.fullscreen));return o({visible:v,dialogContentRef:c}),(e,o)=>(i(),m(Z,{to:e.appendTo,disabled:"body"===e.appendTo&&!e.appendToBody},[y(W,{name:"dialog-fade",onAfterEnter:p(B),onAfterLeave:p(F),onBeforeLeave:p(I),persisted:""},{default:g((()=>[V(y(p(K),{"custom-mask-event":"",mask:e.modal,"overlay-class":e.modalClass,"z-index":p(A)},{default:g((()=>[d("div",{role:"dialog","aria-modal":"true","aria-label":e.title||void 0,"aria-labelledby":e.title?void 0:p(b),"aria-describedby":p(h),class:f(`${p(s).namespace.value}-overlay-dialog`),style:x(p(w)),onClick:o[0]||(o[0]=(...e)=>p(T).onClick&&p(T).onClick(...e)),onMousedown:o[1]||(o[1]=(...e)=>p(T).onMousedown&&p(T).onMousedown(...e)),onMouseup:o[2]||(o[2]=(...e)=>p(T).onMouseup&&p(T).onMouseup(...e))},[y(p(U),{loop:"",trapped:p(v),"focus-start-el":"container",onFocusAfterTrapped:p(S),onFocusAfterReleased:p(L),onFocusoutPrevented:p(M),onReleaseRequested:p(H)},{default:g((()=>[p($)?(i(),m(ve,G({key:0,ref_key:"dialogContentRef",ref:c},e.$attrs,{center:e.center,"align-center":e.alignCenter,"close-icon":e.closeIcon,draggable:p(E),overflow:e.overflow,fullscreen:e.fullscreen,"show-close":e.showClose,title:e.title,"aria-level":e.headerAriaLevel,onClose:p(R)}),J({header:g((()=>[e.$slots.title?u(e.$slots,"title",{key:1}):u(e.$slots,"header",{key:0,close:p(R),titleId:p(b),titleClass:p(s).e("title")})])),default:g((()=>[u(e.$slots,"default")])),_:2},[e.$slots.footer?{name:"footer",fn:g((()=>[u(e.$slots,"footer")]))}:void 0]),1040,["center","align-center","close-icon","draggable","overflow","fullscreen","show-close","title","aria-level","onClose"])):C("v-if",!0)])),_:3},8,["trapped","onFocusAfterTrapped","onFocusAfterReleased","onFocusoutPrevented","onReleaseRequested"])],46,be)])),_:3},8,["mask","overlay-class","z-index"]),[[Q,p(v)]])])),_:3},8,["onAfterEnter","onAfterLeave","onBeforeLeave"])],8,["to","disabled"]))}}),[["__file","dialog.vue"]])),xe={class:"flex justify-between items-center h-54px pl-15px pr-15px relative"},ke={class:"h-54px flex justify-between items-center absolute top-[50%] right-15px translate-y-[-50%]"},we=l({__name:"Dialog",props:{modelValue:ee.bool.def(!1),title:ee.string.def("Dialog"),fullscreen:ee.bool.def(!1),maxHeight:ee.oneOfType([String,Number]).def("600px")},setup(e){const o=z(),l=e,a=n((()=>{const e=["fullscreen","title","maxHeight"],o={...ae(),...l};for(const l in o)-1!==e.indexOf(l)&&delete o[l];return o})),s=D(!1),t=()=>{s.value=!p(s)},r=D(oe(l.maxHeight)?`${l.maxHeight}px`:l.maxHeight);H((()=>s.value),(async e=>{if(await M(),e){const e=document.documentElement.offsetHeight;r.value=e-55-60-(o.footer?63:0)+"px"}else r.value=oe(l.maxHeight)?`${l.maxHeight}px`:l.maxHeight}),{immediate:!0});const c=n((()=>({height:p(r)})));return(l,n)=>{const r=le("Icon");return i(),m(p(Ce),G(a.value,{fullscreen:s.value,"destroy-on-close":"","lock-scroll":"",draggable:"",top:"0","close-on-click-modal":!1,"show-close":!1}),J({header:g((({close:o})=>[d("div",xe,[u(l.$slots,"title",{},(()=>[se(v(e.title),1)])),d("div",ke,[e.fullscreen?(i(),m(r,{key:0,class:"cursor-pointer is-hover !h-54px mr-10px",icon:s.value?"radix-icons:exit-full-screen":"radix-icons:enter-full-screen",color:"var(--el-color-info)","hover-color":"var(--el-color-primary)",onClick:t},null,8,["icon"])):C("",!0),y(r,{class:"cursor-pointer is-hover !h-54px",icon:"ep:close","hover-color":"var(--el-color-primary)",color:"var(--el-color-info)",onClick:o},null,8,["onClick"])])])])),default:g((()=>[y(p(te),{style:x(c.value)},{default:g((()=>[u(l.$slots,"default")])),_:3},8,["style"])])),_:2},[p(o).footer?{name:"footer",fn:g((()=>[u(l.$slots,"footer")])),key:"0"}:void 0]),1040,["fullscreen"])}}});export{we as _,ge as a,ye as d,me as u};

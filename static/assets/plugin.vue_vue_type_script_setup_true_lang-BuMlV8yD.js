import{d as e,s as a,e as t,C as l,F as o,o as i,i as s,a as n,I as r,l as c}from"./index-2xLKjzYq.js";import{_ as p}from"./Table.vue_vue_type_script_lang-DTytrb6y.js";import{u as m}from"./useTable-wZ3B5q-k.js";import{c as d}from"./index-C-mw8LVr.js";import{u}from"./useIcon-TUsmCVod.js";import{u as f,r as b,a as h}from"./index-C0pTrzaV.js";function g(e){return"function"==typeof e||"[object Object]"===Object.prototype.toString.call(e)&&!r(e)}const y=e({__name:"plugin",props:{closeDialog:{type:Function},name:{}},setup(e){const{t:r}=c(),y=e,k=u({icon:"icon-park:check-one"}),j=u({icon:"line-md:close-circle",color:"#e01f1f"}),C=a([{field:"index",label:r("tableDemo.index"),type:"index",minWidth:"15"},{field:"name",label:r("plugin.name")},{field:"install",label:"Install",formatter:(e,a,t)=>"1"==t?k:j},{field:"check",label:"Check",formatter:(e,a,t)=>"1"==t?k:j},{field:"action",label:r("tableDemo.action"),minWidth:200,formatter:(e,a,i)=>{let s,n,c;return t(o,null,[t(l,{type:"warning",onClick:()=>I("reinstall",e)},g(s=r("plugin.reInstall"))?s:{default:()=>[s]}),t(l,{type:"success",onClick:()=>I("recheck",e)},g(n=r("plugin.reCheck"))?n:{default:()=>[n]}),t(l,{type:"danger",onClick:()=>I("uninstall",e)},g(c=r("plugin.uninstall"))?c:{default:()=>[c]})])}}]),{tableRegister:_,tableState:x}=m({fetchDataApi:async()=>({list:(await d(y.name)).data.list}),immediate:!0}),{loading:S,dataList:w}=x,I=(e,a)=>{switch(e){case"reinstall":h("all",a.hash,a.module);break;case"recheck":b("all",a.hash,a.module);break;case"uninstall":f("all",a.hash,a.module)}};return(e,a)=>(i(),s(n(p),{onRegister:n(_),columns:C,data:n(w),rowKey:"_id",loading:n(S),resizable:!0,"max-height":"600","tooltip-options":{offset:1,showArrow:!1,effect:"dark",enterable:!0,showAfter:0,popperOptions:{},popperClass:"test",placement:"top",hideAfter:0,disabled:!1},style:{fontFamily:"-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji"}},null,8,["onRegister","columns","data","loading"]))}});export{y as _};
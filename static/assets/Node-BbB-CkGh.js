import{_ as e}from"./ContentWrap.vue_vue_type_script_setup_true_lang-CB-TQz9X.js";import{d as t,s as a,v as o,e as l,C as i,F as n,r as s,O as r,D as m,o as u,c as d,w as p,a as c,f,y as g,t as v,H as y,E as j,j as _,I as x,l as b}from"./index-9Ou_V48r.js";import{a as h,E as w}from"./el-col-DTRu5f8N.js";import{E as C}from"./el-tag-BvR59dgz.js";import{_ as S}from"./Table.vue_vue_type_script_lang-Cwlj3iLd.js";import{u as k}from"./useTable-IziOfB1x.js";import{_ as N}from"./Dialog.vue_vue_type_style_index_0_lang-CrCAQL3c.js";import{_ as E}from"./Configuration.vue_vue_type_script_setup_true_lang-be6rSjxA.js";import{_ as F}from"./plugin.vue_vue_type_script_setup_true_lang-CFPeBX7G.js";import{b as H,g as W,d as T}from"./index-BoGybVa9.js";import"./el-card-YY6zirM4.js";import"./el-tooltip-l0sNRNKZ.js";import"./el-popper-DCJ36pso.js";import"./el-table-column-D6fMLqQo.js";import"./index-mNqo3h2g.js";import"./debounce-DhqxYZW3.js";import"./el-checkbox-CRVWojfo.js";import"./isArrayLikeObject-Gx6G_BCT.js";import"./raf-CyRAUvGw.js";import"./el-pagination-DDs0Udfg.js";import"./el-select-DEYc_w9t.js";import"./strings-KNygN08W.js";import"./useInput-cn_IIzbQ.js";import"./el-image-viewer-DhxCS-kf.js";import"./el-empty-DFcPIFRn.js";import"./tsxHelper-7iLDt5nK.js";import"./el-dropdown-item-Bo5_qCi_.js";import"./castArray-BOf1uH-9.js";import"./refs-Dbjm65cU.js";import"./index-CJgAKiO4.js";import"./el-form-CpqxNcKg.js";import"./el-switch-CqSUaakd.js";import"./el-divider-CUXqkck9.js";import"./el-text-CJcSKmBh.js";import"./index-DAqW2OGa.js";import"./useIcon-C7sZcQJ7.js";import"./index-Dl0NzGb_.js";import"./index-CEets4Oe.js";const z={class:"mb-10px"},U={style:{position:"relative",top:"12px"}},V={key:0};function A(e){return"function"==typeof e||"[object Object]"===Object.prototype.toString.call(e)&&!x(e)}const D=t({__name:"Node",setup(t){const{t:x}=b(),D=a([{field:"selection",type:"selection",width:"55"},{field:"name",label:x("node.nodeName"),minWidth:20},{field:"maxTaskNum",label:x("configuration.maxTaskNum"),minWidth:10,formatter:(e,t,a)=>o(C,{type:"info"},(()=>a))},{field:"running",label:x("node.taskCount"),minWidth:10,formatter:(e,t,a)=>o(C,{round:!0,effect:"plain",hit:!0},(()=>a))},{field:"finished",label:x("node.finished"),minWidth:10,formatter:(e,t,a)=>o(C,{round:!0,effect:"plain",hit:!0},(()=>a))},{field:"cpuNum",label:x("node.nodeUsageCpu"),minWidth:20,formatter:(e,t,a)=>{let l=parseFloat(a);return l=parseFloat(l.toFixed(2)),o(C,{round:!0,effect:"plain",hit:!0,type:l<50?"":l<80?"warning":"danger"},(()=>l+"%"))}},{field:"memNum",label:x("node.nodeUsageMemory"),minWidth:20,formatter:(e,t,a)=>{let l=parseFloat(a);return l=parseFloat(l.toFixed(2)),o(C,{round:!0,effect:"plain",hit:!0,type:l<50?"":l<80?"warning":"danger"},(()=>l+"%"))}},{field:"state",label:x("node.nodeStatus"),minWidth:20,formatter:(e,t,a)=>o(C,{type:"1"===a?"success":"2"===a?"warning":"danger",effect:"light",hit:!0},(()=>x("1"===a?"node.statusRun":"2"===a?"node.statusStop":"node.statusError")))},{field:"updateTime",label:x("node.updateTime"),minWidth:20},{field:"action",label:x("tableDemo.action"),minWidth:30,formatter:(e,t,a)=>{let o,s,r;return l(n,null,[l(i,{type:"warning",size:"small",onClick:()=>ue(e.name)},A(o=x("node.plugin"))?o:{default:()=>[o]}),l(i,{type:"success",size:"small",onClick:()=>ie(e)},A(s=x("node.log"))?s:{default:()=>[s]}),l(i,{type:"primary",size:"small",onClick:()=>G(e)},A(r=x("common.config"))?r:{default:()=>[r]})])}}]),{tableRegister:I,tableState:R,tableMethods:L}=k({fetchDataApi:async()=>({list:(await W()).data.list})}),{loading:M,dataList:O,currentPage:P,pageSize:J}=R,{getList:$,getElTableExpose:q}=L;function B(){return{background:"var(--el-fill-color-light)"}}const K=s(!1),X=()=>{K.value=!1},Z=a({name:"",maxTaskNum:"",state:"",ModulesConfig:""}),G=async e=>{Z.name=e.name,Z.maxTaskNum=e.maxTaskNum,Z.ModulesConfig=e.modulesConfig,Z.state=e.state,K.value=!0},Q=s(!1),Y=s([]),ee=async()=>{window.confirm("Are you sure you want to delete the selected data?")&&await(async()=>{const e=await q(),t=(null==e?void 0:e.getSelectionRows())||[];Y.value=t.map((e=>e.name)),Q.value=!0;try{await T(Y.value),Q.value=!1,$()}catch(a){Q.value=!1,$()}})()},te=s(!1),ae=()=>{te.value=!1},oe=s(""),le=s(),ie=async e=>{const t=await H(e.name);oe.value=t.logs,te.value=!0;const a="https:"===window.location.protocol?"wss://":"ws://",o=window.location.host,l=new WebSocket(a+o);l.onopen=()=>{setInterval((()=>{const t={node_name:e.name};l.send(JSON.stringify(t))}),3e3)},l.onmessage=e=>{oe.value+=e.data,le.value.setScrollTop(5e3)};const i=r(te,(e=>{e||(l.close(),i())}))};m((()=>{se(),window.addEventListener("resize",se)}));const ne=s(0),se=()=>{const e=window.innerHeight||document.documentElement.clientHeight;ne.value=.7*e},re=s(""),me=s(!1),ue=async e=>{re.value=e,me.value=!0},de=()=>{me.value=!1};return(t,a)=>(u(),d(n,null,[l(c(e),null,{default:p((()=>[l(c(h),null,{default:p((()=>[l(c(w),{style:{position:"relative",top:"16px"}},{default:p((()=>[f("div",z,[l(c(i),{type:"danger",loading:Q.value,onClick:ee},{default:p((()=>[g(v(c(x)("common.delete")),1)])),_:1},8,["loading"])])])),_:1})])),_:1}),f("div",U,[l(c(S),{pageSize:c(J),"onUpdate:pageSize":a[0]||(a[0]=e=>y(J)?J.value=e:null),currentPage:c(P),"onUpdate:currentPage":a[1]||(a[1]=e=>y(P)?P.value=e:null),columns:D,data:c(O),stripe:"",border:!0,loading:c(M),resizable:!0,onRegister:c(I),headerCellStyle:B,style:{fontFamily:"-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji"}},null,8,["pageSize","currentPage","columns","data","loading","onRegister"])])])),_:1}),l(c(N),{modelValue:K.value,"onUpdate:modelValue":a[2]||(a[2]=e=>K.value=e),title:t.$t("common.config"),center:"",style:{"border-radius":"15px","box-shadow":"5px 5px 10px rgba(0, 0, 0, 0.3)"},maxHeight:ne.value},{default:p((()=>[l(E,{closeDialog:X,nodeConfForm:Z,getList:c($)},null,8,["nodeConfForm","getList"])])),_:1},8,["modelValue","title","maxHeight"]),l(c(N),{modelValue:te.value,"onUpdate:modelValue":a[3]||(a[3]=e=>te.value=e),title:c(x)("node.log"),center:"",style:{"border-radius":"15px","box-shadow":"5px 5px 10px rgba(0, 0, 0, 0.3)"},maxHeight:ne.value},{footer:p((()=>[l(c(i),{onClick:ae},{default:p((()=>[g(v(c(x)("common.off")),1)])),_:1})])),default:p((()=>[l(c(j),{ref_key:"scrollbarRef",ref:le},{default:p((()=>[oe.value?(u(),d("pre",V,v(oe.value),1)):_("",!0)])),_:1},512)])),_:1},8,["modelValue","title","maxHeight"]),l(c(N),{modelValue:me.value,"onUpdate:modelValue":a[4]||(a[4]=e=>me.value=e),title:c(x)("node.plugin"),center:"",style:{"border-radius":"15px","box-shadow":"5px 5px 10px rgba(0, 0, 0, 0.3)"},maxHeight:ne.value},{default:p((()=>[l(F,{closeDialog:de,name:re.value},null,8,["name"])])),_:1},8,["modelValue","title","maxHeight"])],64))}});export{D as default};

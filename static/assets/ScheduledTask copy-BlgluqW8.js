import{_ as e}from"./ContentWrap.vue_vue_type_script_setup_true_lang-CTGngVvL.js";import{d as t,l as a,r as l,s as o,e as s,K as i,C as n,F as r,D as d,o as u,i as p,w as m,a as c,y as f,t as g,G as v,z as y,f as _,H as h,I as b,L as j}from"./index-CLgjJy2L.js";import{E as x,a as w}from"./el-col-CeS9FF_9.js";import{E as k}from"./el-text-CilU8fZt.js";import{a as V,E as S}from"./el-tab-pane-Cs08tY8r.js";import{E,a as N}from"./el-form-CyQCNofw.js";import{E as C}from"./el-input-number-bNga3ayF.js";import"./el-tag-D6hIb9V5.js";import{E as T}from"./el-popper-CaFR7Cjt.js";import"./el-virtual-list-XFotSinp.js";import{E as A}from"./el-select-v2-CJGYZwhh.js";import{E as U}from"./el-checkbox-DbDCqMQu.js";import"./el-tooltip-l0sNRNKZ.js";import{E as z}from"./el-switch-CUkbzPfV.js";import{_ as W}from"./Table.vue_vue_type_script_lang-DJc-YjoG.js";import{u as I}from"./useTable-BBFhiX-d.js";import{u as D}from"./useIcon-_gcsYpvG.js";import{c as H,b as L,u as P}from"./index-C6m2y7m6.js";import{_ as R}from"./Dialog.vue_vue_type_style_index_0_lang-DjrQx5cp.js";import{_ as F}from"./AddTask.vue_vue_type_script_setup_true_lang-DV9eSHIh.js";import{_ as M}from"./PageMonit.vue_vue_type_script_setup_true_lang-CuccNWkS.js";import{a as O}from"./index-BxiWd_CK.js";import"./el-card-CdvbZBex.js";import"./strings-BAPUa2fl.js";import"./castArray-CcAiHetO.js";import"./raf-BLHXPmBe.js";import"./useInput-DX4to9HK.js";import"./index-Cu272xPu.js";import"./debounce-CIcVECfT.js";import"./el-table-column-DrBbA1UV.js";import"./isArrayLikeObject-CRQFYJ_t.js";import"./el-pagination-uR_gQTrf.js";import"./el-select-CFiSjX0y.js";import"./el-image-viewer-BF14MS9t.js";import"./el-empty-D1z8uu7s.js";import"./tsxHelper-Cn3mpvqc.js";import"./el-dropdown-item-Dcg5gyE9.js";import"./refs-Dw-H7609.js";import"./index-D38LGGz3.js";import"./index-1Oi9uy0T.js";import"./el-divider-B2v5rJA4.js";import"./el-radio-group-BjW4huAo.js";import"./DetailTemplate-CLP4YyZN.js";import"./index-DLmB_ne5.js";import"./index-BhsrsJTT.js";const B={class:"mb-10px"},G={style:{position:"relative",top:"12px"}};function K(e){return"function"==typeof e||"[object Object]"===Object.prototype.toString.call(e)&&!b(e)}const J=t({__name:"ScheduledTask copy",setup(t){const b=D({icon:"iconoir:search"}),{t:J}=a(),X=l(""),Z=()=>{se()},$=o([{field:"selection",type:"selection",width:"55"},{field:"name",label:J("task.taskName"),minWidth:30},{field:"cycle",label:J("task.taskCycle")+"(h)",minWidth:20},{field:"type",label:J("task.typeTask"),minWidth:20},{field:"lastTime",label:J("task.lastTime"),minWidth:40,formatter:(e,t,a)=>""==a?"-":a},{field:"nextTime",label:J("task.nextTime"),minWidth:40,formatter:(e,t,a)=>""==a||0==e.state?"-":a},{field:"state",label:J("common.state"),minWidth:20,formatter:(e,t,a)=>{if(null==a)return s("div",null,null);let l="",o="";return 1==a?(l="#2eb98a",o=J("common.on")):(l="red",o=J("common.statusStop")),s(w,{gutter:20},{default:()=>[s(x,{span:1},{default:()=>[s(i,{icon:"clarity:circle-solid",color:l},null)]}),s(x,{span:5},{default:()=>[s(k,{type:"info"},K(o)?o:{default:()=>[o]})]})]})}},{field:"action",label:J("tableDemo.action"),minWidth:40,formatter:(e,t,a)=>{let l,o,i;return e.type,s(r,null,["page_monitoring"===e.id?s(n,{type:"success",onClick:()=>Se(e)},K(l=J("common.edit"))?l:{default:()=>[l]}):s(r,null,[s(n,{type:"success",onClick:()=>ce(e)},K(o=J("common.edit"))?o:{default:()=>[o]}),s(n,{type:"danger",onClick:()=>ge(e)},K(i=J("common.delete"))?i:{default:()=>[i]})])])}}]),{tableRegister:q,tableState:Q,tableMethods:Y}=I({fetchDataApi:async()=>{const{currentPage:e,pageSize:t}=Q,a=await H(X.value,e.value,t.value);return{list:a.data.list,total:a.data.total}},immediate:!0}),{loading:ee,dataList:te,total:ae,currentPage:le,pageSize:oe}=Q;oe.value=20;const{getList:se,getElTableExpose:ie}=Y;function ne(){return{background:"var(--el-fill-color-light)"}}const re=l(!1);let de=J("task.addTask");const ue=()=>{re.value=!1};let pe="",me=l(!0);const ce=async e=>{"Scan"==e.type?pe=e.id:xe.value=!0,de=J("common.edit")},fe=async()=>{window.confirm("Are you sure you want to delete the selected data?")&&await he()},ge=async e=>{window.confirm("Are you sure you want to delete the selected data?")&&await ye(e)},ve=l(!1),ye=async e=>{ve.value=!0;try{await L([e.id]);ve.value=!1,se()}catch(t){ve.value=!1,se()}},_e=l([]),he=async()=>{const e=await ie(),t=(null==e?void 0:e.getSelectionRows())||[];_e.value=t.map((e=>e.id)),ve.value=!0;try{await L(_e.value);ve.value=!1,se()}catch(a){ve.value=!1,se()}};d((()=>{je(),window.addEventListener("resize",je)}));const be=l(0),je=()=>{const e=window.innerHeight||document.documentElement.clientHeight;be.value=.75*e},xe=l(!1),we=l(!1),ke=l(!1),Ve=o({hour:24,allNode:!0,node:[],state:!0}),Se=async e=>{Ve.hour=e.cycle,Ve.allNode=e.allNode,Ve.node=e.node,Ve.state=e.state,we.value=!0},Ee=o([]),Ne=l(!1),Ce=l(!1),Te=e=>{Ne.value=!1,e?(Ve.allNode=!0,Ve.node=[],Ee.forEach((e=>Ve.node.push(e.value)))):(Ve.allNode=!1,Ve.node=[])};return(async()=>{const e=await O();e.data.list.length>0?(Ce.value=!1,e.data.list.forEach((e=>{Ee.push({value:e,label:e})}))):(Ce.value=!0,j.warning(J("node.onlineNodeMsg")))})(),(t,a)=>(u(),p(c(e),null,{default:m((()=>[s(c(w),null,{default:m((()=>[s(c(x),{span:1},{default:m((()=>[s(c(k),{class:"mx-1",style:{position:"relative",top:"8px"}},{default:m((()=>[f(g(c(J)("task.taskName"))+":",1)])),_:1})])),_:1}),s(c(x),{span:5},{default:m((()=>[s(c(v),{modelValue:X.value,"onUpdate:modelValue":a[0]||(a[0]=e=>X.value=e),placeholder:c(J)("common.inputText"),style:{height:"38px"}},null,8,["modelValue","placeholder"])])),_:1}),s(c(x),{span:5,style:{position:"relative",left:"16px"}},{default:m((()=>[s(c(y),{type:"primary",icon:c(b),style:{height:"100%"},onClick:Z},{default:m((()=>[f("Search")])),_:1},8,["icon"])])),_:1})])),_:1}),s(c(w),null,{default:m((()=>[s(c(x),{style:{position:"relative",top:"16px"}},{default:m((()=>[_("div",B,[s(c(n),{type:"danger",loading:ve.value,onClick:fe},{default:m((()=>[f(g(c(J)("task.delTask")),1)])),_:1},8,["loading"])])])),_:1})])),_:1}),_("div",G,[s(c(W),{"tooltip-options":{offset:1,showArrow:!1,effect:"dark",enterable:!1,showAfter:0,popperOptions:{},popperClass:"test",placement:"bottom",hideAfter:0,disabled:!0},pageSize:c(oe),"onUpdate:pageSize":a[1]||(a[1]=e=>h(oe)?oe.value=e:null),currentPage:c(le),"onUpdate:currentPage":a[2]||(a[2]=e=>h(le)?le.value=e:null),columns:$,data:c(te),stripe:"",border:!0,loading:c(ee),"max-height":be.value,resizable:!0,pagination:{total:c(ae),pageSizes:[20,30,50,100,200,500,1e3]},onRegister:c(q),headerCellStyle:ne,style:{fontFamily:"-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji"}},null,8,["pageSize","currentPage","columns","data","loading","max-height","pagination","onRegister"])]),s(c(R),{modelValue:re.value,"onUpdate:modelValue":a[3]||(a[3]=e=>re.value=e),title:c(de),center:"",style:{"border-radius":"15px","box-shadow":"5px 5px 10px rgba(0, 0, 0, 0.3)"}},{default:m((()=>[s(F,{closeDialog:ue,getList:c(se),create:c(me),taskid:c(pe),schedule:!0},null,8,["getList","create","taskid"])])),_:1},8,["modelValue","title"]),s(c(R),{modelValue:we.value,"onUpdate:modelValue":a[9]||(a[9]=e=>we.value=e),title:c(J)("common.edit"),center:"",style:{"border-radius":"15px","box-shadow":"5px 5px 10px rgba(0, 0, 0, 0.3)"}},{default:m((()=>[s(c(V),{type:"card"},{default:m((()=>[s(c(S),{label:c(J)("router.configuration")},{default:m((()=>[s(c(E),{model:Ve,"label-width":"100px","status-icon":"",ref:"ruleFormRef"},{default:m((()=>[s(c(T),{content:c(J)("task.selectNodeMsg"),placement:"top"},{default:m((()=>[s(c(N),{label:c(J)("task.nodeSelect"),prop:"node"},{default:m((()=>[s(c(A),{modelValue:Ve.node,"onUpdate:modelValue":a[5]||(a[5]=e=>Ve.node=e),filterable:"",options:Ee,placeholder:"Please select node",style:{width:"80%"},multiple:"","tag-type":"success","collapse-tags":"","collapse-tags-tooltip":"","max-collapse-tags":7},{header:m((()=>[s(c(U),{modelValue:Ve.allNode,"onUpdate:modelValue":a[4]||(a[4]=e=>Ve.allNode=e),disabled:Ce.value,indeterminate:Ne.value,onChange:Te},{default:m((()=>[f(" All ")])),_:1},8,["modelValue","disabled","indeterminate"])])),_:1},8,["modelValue","options"])])),_:1},8,["label"])])),_:1},8,["content"]),s(c(N),{label:c(J)("project.cycle"),prop:"type"},{default:m((()=>[s(c(C),{modelValue:Ve.hour,"onUpdate:modelValue":a[6]||(a[6]=e=>Ve.hour=e),min:1,"controls-position":"right",size:"small"},null,8,["modelValue"]),s(c(k),{style:{position:"relative",left:"16px"}},{default:m((()=>[f("Hour")])),_:1})])),_:1},8,["label"]),s(c(N),{label:c(J)("common.state")},{default:m((()=>[s(c(z),{modelValue:Ve.state,"onUpdate:modelValue":a[7]||(a[7]=e=>Ve.state=e),"inline-prompt":"","active-text":c(J)("common.switchAction"),"inactive-text":c(J)("common.switchInactive")},null,8,["modelValue","active-text","inactive-text"])])),_:1},8,["label"]),s(c(w),null,{default:m((()=>[s(c(x),{span:2,offset:8},{default:m((()=>[s(c(N),null,{default:m((()=>[s(c(y),{type:"primary",onClick:a[8]||(a[8]=e=>(async()=>{ke.value=!0,await P(Ve.hour,Ve.node,Ve.allNode,Ve.state),ke.value=!1,se()})()),loading:ke.value},{default:m((()=>[f(g(c(J)("task.save")),1)])),_:1},8,["loading"])])),_:1})])),_:1})])),_:1})])),_:1},8,["model"])])),_:1},8,["label"]),s(c(S),{label:c(J)("task.data")},{default:m((()=>[s(M)])),_:1},8,["label"])])),_:1})])),_:1},8,["modelValue","title"])])),_:1}))}});export{J as default};
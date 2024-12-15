import{_ as e}from"./ContentWrap.vue_vue_type_script_setup_true_lang-myE6dPy2.js";import{d as t,r as a,N as l,e as o,$ as s,V as i,S as n,W as r,o as d,i as u,w as p,a as m,H as c,t as f,R as g,I as v,f as _,X as y,Y as j,l as h,a0 as b}from"./index-M10etHi6.js";import{E as x,a as w}from"./el-col-CNNqU05O.js";import{E as k}from"./el-text-Bjb0AW85.js";import{a as V,E as S}from"./el-tab-pane-8bwOwYDC.js";import{E,a as N}from"./el-form-A-pj7LuS.js";import{E as A}from"./el-input-number-C8zuaUtp.js";import"./el-tag-DC4eDhDo.js";import{E as C}from"./el-popper-D4B4f19J.js";import"./el-virtual-list-D-52HN6k.js";import{E as T}from"./el-select-v2-C0bSj804.js";import{E as U}from"./el-checkbox-C3AB5jlc.js";import"./el-tooltip-l0sNRNKZ.js";import{E as z}from"./el-switch-CoMa2y0Z.js";import{_ as P}from"./Table.vue_vue_type_script_lang-9x4PpCFP.js";import{u as W}from"./useTable-D1SpGQrv.js";import{u as D}from"./useIcon-DPW7aAst.js";import{b as I,c as H,u as R}from"./index-CFqx989n.js";import{_ as L}from"./Dialog.vue_vue_type_style_index_0_lang-Cx7rWX1S.js";import{_ as M}from"./AddTask.vue_vue_type_script_setup_true_lang-E_WioyHs.js";import{_ as O}from"./AddProject.vue_vue_type_script_setup_true_lang-CjWYJL7O.js";import{_ as F}from"./PageMonit.vue_vue_type_script_setup_true_lang-BhkZHuqE.js";import{a as B}from"./index-CYT5Tfx5.js";import"./el-card-t9G4RzyN.js";import"./strings-DKCbZfke.js";import"./castArray-D86glhSN.js";import"./raf-ChTn_6oX.js";import"./useInput-DFHJnJFD.js";import"./index-BEjIPMze.js";import"./debounce-DMlGG38r.js";import"./el-table-column-Ct9f4goZ.js";import"./isArrayLikeObject-CmTAjD1K.js";import"./el-pagination-DKV_XtBQ.js";import"./el-select-CQG17R-n.js";import"./el-image-viewer-CAmikf02.js";import"./el-empty-DtGCvYos.js";import"./tsxHelper-Cy1d83nC.js";import"./el-dropdown-item-6vek0JLM.js";import"./refs-DEjEOHCT.js";import"./index-D4oHVQnn.js";import"./index-MoA9wocQ.js";import"./el-divider-DaZuXLuF.js";import"./el-radio-group-B0psiKnF.js";import"./DetailTemplate-8zK1epuV.js";/* empty css                */import"./index-CE6JPvTK.js";import"./index-CecUnJ7w.js";import"./index-DiRzpUJS.js";const X={class:"mb-10px"},Y={style:{position:"relative",top:"12px"}};function $(e){return"function"==typeof e||"[object Object]"===Object.prototype.toString.call(e)&&!j(e)}const G=t({__name:"ScheduledTask",setup(t){const j=D({icon:"iconoir:search"}),{t:G}=h(),J=a(""),K=()=>{ie()},Z=l([{field:"selection",type:"selection",width:"55"},{field:"name",label:G("task.taskName"),minWidth:30},{field:"cycle",label:G("task.taskCycle")+"(h)",minWidth:20},{field:"type",label:G("task.typeTask"),minWidth:20},{field:"lastTime",label:G("task.lastTime"),minWidth:40,formatter:(e,t,a)=>""==a?"-":a},{field:"nextTime",label:G("task.nextTime"),minWidth:40,formatter:(e,t,a)=>""==a||0==e.state?"-":a},{field:"state",label:G("common.state"),minWidth:20,formatter:(e,t,a)=>{if(null==a)return o("div",null,null);let l="",i="";return 1==a?(l="#2eb98a",i=G("common.on")):(l="red",i=G("common.statusStop")),o(w,{gutter:20},{default:()=>[o(x,{span:1},{default:()=>[o(s,{icon:"clarity:circle-solid",color:l},null)]}),o(x,{span:5},{default:()=>[o(k,{type:"info"},$(i)?i:{default:()=>[i]})]})]})}},{field:"action",label:G("tableDemo.action"),minWidth:40,formatter:(e,t,a)=>{let l,s,r;return o(n,null,["page_monitoring"===e.id?o(i,{type:"success",onClick:()=>Ne(e)},$(l=G("common.edit"))?l:{default:()=>[l]}):o(n,null,[o(i,{type:"success",onClick:()=>fe(e)},$(s=G("common.edit"))?s:{default:()=>[s]}),o(i,{type:"danger",onClick:()=>ve(e)},$(r=G("common.delete"))?r:{default:()=>[r]})])])}}]),{tableRegister:q,tableState:Q,tableMethods:ee}=W({fetchDataApi:async()=>{const{currentPage:e,pageSize:t}=Q,a=await H(J.value,e.value,t.value);return{list:a.data.list,total:a.data.total}},immediate:!0}),{loading:te,dataList:ae,total:le,currentPage:oe,pageSize:se}=Q;se.value=20;const{getList:ie,getElTableExpose:ne}=ee;function re(){return{background:"var(--el-fill-color-light)"}}const de=a(!1);let ue=G("task.addTask");const pe=()=>{de.value=!1};let me=a(""),ce=a(!0);const fe=async e=>{me.value=e.id,ue=G("common.edit"),de.value=!0},ge=async()=>{window.confirm("Are you sure you want to delete the selected data?")&&await he()},ve=async e=>{window.confirm("Are you sure you want to delete the selected data?")&&await ye(e)},_e=a(!1),ye=async e=>{_e.value=!0;try{await I([e.id]);_e.value=!1,ie()}catch(t){_e.value=!1,ie()}},je=a([]),he=async()=>{const e=await ne(),t=(null==e?void 0:e.getSelectionRows())||[];je.value=t.map((e=>e.id)),_e.value=!0;try{await I(je.value);_e.value=!1,ie()}catch(a){_e.value=!1,ie()}};r((()=>{xe(),window.addEventListener("resize",xe)}));const be=a(0),xe=()=>{const e=window.innerHeight||document.documentElement.clientHeight;be.value=.75*e},we=a(!1),ke=()=>{we.value=!1},Ve=a(!1),Se=a(!1),Ee=l({hour:24,allNode:!0,node:[],state:!0}),Ne=async e=>{Ee.hour=e.cycle,Ee.allNode=e.allNode,Ee.node=e.node,Ee.state=e.state,Ve.value=!0},Ae=l([]),Ce=a(!1),Te=a(!1),Ue=e=>{Ce.value=!1,e?(Ee.allNode=!0,Ee.node=[],Ae.forEach((e=>Ee.node.push(e.value)))):(Ee.allNode=!1,Ee.node=[])};return(async()=>{const e=await B();e.data.list.length>0?(Te.value=!1,e.data.list.forEach((e=>{Ae.push({value:e,label:e})}))):(Te.value=!0,b.warning(G("node.onlineNodeMsg")))})(),(t,a)=>(d(),u(m(e),null,{default:p((()=>[o(m(w),null,{default:p((()=>[o(m(x),{span:1},{default:p((()=>[o(m(k),{class:"mx-1",style:{position:"relative",top:"8px"}},{default:p((()=>[c(f(m(G)("task.taskName"))+":",1)])),_:1})])),_:1}),o(m(x),{span:5},{default:p((()=>[o(m(g),{modelValue:J.value,"onUpdate:modelValue":a[0]||(a[0]=e=>J.value=e),placeholder:m(G)("common.inputText"),style:{height:"38px"}},null,8,["modelValue","placeholder"])])),_:1}),o(m(x),{span:5,style:{position:"relative",left:"16px"}},{default:p((()=>[o(m(v),{type:"primary",icon:m(j),style:{height:"100%"},onClick:K},{default:p((()=>[c("Search")])),_:1},8,["icon"])])),_:1})])),_:1}),o(m(w),null,{default:p((()=>[o(m(x),{style:{position:"relative",top:"16px"}},{default:p((()=>[_("div",X,[o(m(i),{type:"danger",loading:_e.value,onClick:ge},{default:p((()=>[c(f(m(G)("task.delTask")),1)])),_:1},8,["loading"])])])),_:1})])),_:1}),_("div",Y,[o(m(P),{"tooltip-options":{offset:1,showArrow:!1,effect:"dark",enterable:!1,showAfter:0,popperOptions:{},popperClass:"test",placement:"bottom",hideAfter:0,disabled:!0},pageSize:m(se),"onUpdate:pageSize":a[1]||(a[1]=e=>y(se)?se.value=e:null),currentPage:m(oe),"onUpdate:currentPage":a[2]||(a[2]=e=>y(oe)?oe.value=e:null),columns:Z,data:m(ae),stripe:"",border:!0,loading:m(te),"max-height":be.value,resizable:!0,pagination:{total:m(le),pageSizes:[20,30,50,100,200,500,1e3]},onRegister:m(q),headerCellStyle:re,style:{fontFamily:"-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji"}},null,8,["pageSize","currentPage","columns","data","loading","max-height","pagination","onRegister"])]),o(m(L),{modelValue:de.value,"onUpdate:modelValue":a[3]||(a[3]=e=>de.value=e),title:m(ue),center:"",style:{"border-radius":"15px","box-shadow":"5px 5px 10px rgba(0, 0, 0, 0.3)"}},{default:p((()=>[o(M,{closeDialog:pe,getList:m(ie),create:m(ce),taskid:m(me),schedule:!0},null,8,["getList","create","taskid"])])),_:1},8,["modelValue","title"]),o(m(L),{modelValue:we.value,"onUpdate:modelValue":a[4]||(a[4]=e=>we.value=e),title:m(G)("common.edit"),center:"",style:{"border-radius":"15px","box-shadow":"5px 5px 10px rgba(0, 0, 0, 0.3)"}},{default:p((()=>[o(O,{closeDialog:ke,projectid:m(""),getProjectData:m(ie),schedule:!1},null,8,["projectid","getProjectData"])])),_:1},8,["modelValue","title"]),o(m(L),{modelValue:Ve.value,"onUpdate:modelValue":a[10]||(a[10]=e=>Ve.value=e),title:m(G)("common.edit"),center:"",style:{"border-radius":"15px","box-shadow":"5px 5px 10px rgba(0, 0, 0, 0.3)"}},{default:p((()=>[o(m(V),{type:"card"},{default:p((()=>[o(m(S),{label:m(G)("router.configuration")},{default:p((()=>[o(m(E),{model:Ee,"label-width":"100px","status-icon":"",ref:"ruleFormRef"},{default:p((()=>[o(m(C),{content:m(G)("task.selectNodeMsg"),placement:"top"},{default:p((()=>[o(m(N),{label:m(G)("task.nodeSelect"),prop:"node"},{default:p((()=>[o(m(T),{modelValue:Ee.node,"onUpdate:modelValue":a[6]||(a[6]=e=>Ee.node=e),filterable:"",options:Ae,placeholder:"Please select node",style:{width:"80%"},multiple:"","tag-type":"success","collapse-tags":"","collapse-tags-tooltip":"","max-collapse-tags":7},{header:p((()=>[o(m(U),{modelValue:Ee.allNode,"onUpdate:modelValue":a[5]||(a[5]=e=>Ee.allNode=e),disabled:Te.value,indeterminate:Ce.value,onChange:Ue},{default:p((()=>[c(" All ")])),_:1},8,["modelValue","disabled","indeterminate"])])),_:1},8,["modelValue","options"])])),_:1},8,["label"])])),_:1},8,["content"]),o(m(N),{label:m(G)("project.cycle"),prop:"type"},{default:p((()=>[o(m(A),{modelValue:Ee.hour,"onUpdate:modelValue":a[7]||(a[7]=e=>Ee.hour=e),min:1,"controls-position":"right",size:"small"},null,8,["modelValue"]),o(m(k),{style:{position:"relative",left:"16px"}},{default:p((()=>[c("Hour")])),_:1})])),_:1},8,["label"]),o(m(N),{label:m(G)("common.state")},{default:p((()=>[o(m(z),{modelValue:Ee.state,"onUpdate:modelValue":a[8]||(a[8]=e=>Ee.state=e),"inline-prompt":"","active-text":m(G)("common.switchAction"),"inactive-text":m(G)("common.switchInactive")},null,8,["modelValue","active-text","inactive-text"])])),_:1},8,["label"]),o(m(w),null,{default:p((()=>[o(m(x),{span:2,offset:8},{default:p((()=>[o(m(N),null,{default:p((()=>[o(m(v),{type:"primary",onClick:a[9]||(a[9]=e=>(async()=>{Se.value=!0,await R(Ee.hour,Ee.node,Ee.allNode,Ee.state),Se.value=!1,ie()})()),loading:Se.value},{default:p((()=>[c(f(m(G)("task.save")),1)])),_:1},8,["loading"])])),_:1})])),_:1})])),_:1})])),_:1},8,["model"])])),_:1},8,["label"]),o(m(S),{label:m(G)("task.data")},{default:p((()=>[o(F)])),_:1},8,["label"])])),_:1})])),_:1},8,["modelValue","title"])])),_:1}))}});export{G as default};

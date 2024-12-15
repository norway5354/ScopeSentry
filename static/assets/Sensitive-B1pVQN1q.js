import{_ as e}from"./ContentWrap.vue_vue_type_script_setup_true_lang-myE6dPy2.js";import{d as t,r as a,N as l,e as o,a6 as i,V as s,S as n,o as r,c as u,w as m,a as p,H as d,t as c,R as f,I as g,f as v,X as y,Y as _,l as j}from"./index-M10etHi6.js";import{E as b,a as h}from"./el-col-CNNqU05O.js";import{E as x}from"./el-text-Bjb0AW85.js";import{_ as w}from"./Table.vue_vue_type_script_lang-9x4PpCFP.js";import{_ as S}from"./Dialog.vue_vue_type_style_index_0_lang-Cx7rWX1S.js";import{u as C}from"./useTable-D1SpGQrv.js";import{u as k}from"./useIcon-DPW7aAst.js";import{d as I,_ as z,g as E,u as R}from"./Detail.vue_vue_type_script_setup_true_lang-DsvRzcuD.js";import"./el-card-t9G4RzyN.js";import"./el-tooltip-l0sNRNKZ.js";import"./el-popper-D4B4f19J.js";import"./el-table-column-Ct9f4goZ.js";import"./index-BEjIPMze.js";import"./debounce-DMlGG38r.js";import"./el-checkbox-C3AB5jlc.js";import"./isArrayLikeObject-CmTAjD1K.js";import"./raf-ChTn_6oX.js";import"./el-tag-DC4eDhDo.js";import"./el-pagination-DKV_XtBQ.js";import"./el-select-CQG17R-n.js";import"./strings-DKCbZfke.js";import"./useInput-DFHJnJFD.js";import"./el-image-viewer-CAmikf02.js";import"./el-empty-DtGCvYos.js";import"./tsxHelper-Cy1d83nC.js";import"./el-dropdown-item-6vek0JLM.js";import"./castArray-D86glhSN.js";import"./refs-DEjEOHCT.js";import"./index-D4oHVQnn.js";import"./el-form-A-pj7LuS.js";import"./el-divider-DaZuXLuF.js";import"./el-virtual-list-D-52HN6k.js";import"./el-select-v2-C0bSj804.js";import"./el-switch-CoMa2y0Z.js";import"./index-MoA9wocQ.js";const A={class:"mb-10px"},N={class:"mb-10px"},U={class:"mb-10px"},V={class:"mb-10px"};function D(e){return"function"==typeof e||"[object Object]"===Object.prototype.toString.call(e)&&!_(e)}const H=t({__name:"Sensitive",setup(t){const _=k({icon:"iconoir:search"}),{t:H}=j(),W=a(""),F=()=>{G()},L=l([{field:"selection",type:"selection",width:"55"},{field:"id",hidden:!0},{field:"name",label:H("sensitiveInformation.sensitiveName"),minWidth:40},{field:"regular",label:H("sensitiveInformation.sensitiveRegular"),minWidth:100},{field:"color",label:H("sensitiveInformation.sensitiveColor"),minWidth:20},{field:"state",label:H("common.state"),minWidth:40,formatter:(e,t,a)=>{if(null==a)return o("div",null,null);let l="",s="";return 1==a?(l="#2eb98a",s=H("common.on")):(l="red",s=H("common.off")),o(h,{gutter:20},{default:()=>[o(b,{span:1},{default:()=>[o(i,{icon:"clarity:circle-solid",color:l,size:10},null)]}),o(b,{span:5},{default:()=>[o(x,{type:"info"},D(s)?s:{default:()=>[s]})]})]})}},{field:"action",label:H("tableDemo.action"),minWidth:40,formatter:(e,t,a)=>{let l,i;return o(n,null,[o(s,{type:"primary",onClick:()=>te(e)},D(l=H("common.edit"))?l:{default:()=>[l]}),o(s,{type:"danger",onClick:()=>le(e)},D(i=H("common.delete"))?i:{default:()=>[i]})])}}]),{tableRegister:P,tableState:T,tableMethods:O}=C({fetchDataApi:async()=>{const{currentPage:e,pageSize:t}=T,a=await E(W.value,e.value,t.value);return{list:a.data.list,total:a.data.total}}}),{loading:$,dataList:M,total:X,currentPage:Y,pageSize:B}=T,{getList:G,getElTableExpose:J}=O;function K(){return{background:"var(--el-fill-color-light)"}}const Z=a(!1),q=async()=>{ee.id="",ee.color="null",ee.regular="",ee.name="",ee.state=!0,Z.value=!0},Q=()=>{Z.value=!1};let ee=l({id:"",name:"",regular:"",color:"null",state:!0});const te=e=>{ee.id=e.id,ee.color=e.color,ee.regular=e.regular,ee.name=e.name,ee.state=e.state,Z.value=!0},ae=a(!1),le=async e=>{ae.value=!0;try{await I([e.id]);ae.value=!1,G()}catch(t){ae.value=!1,G()}},oe=a([]),ie=async()=>{window.confirm("Are you sure you want to delete the selected data?")&&await(async()=>{oe.value=[];const e=await J(),t=(null==e?void 0:e.getSelectionRows())||[];oe.value=t.map((e=>e.id)),ae.value=!0;try{await I(oe.value),ae.value=!1,G()}catch(a){ae.value=!1,G()}})()},se=async e=>{if(window.confirm("Are you sure you want to update the selected data?")){oe.value=[];const t=await J(),a=(null==t?void 0:t.getSelectionRows())||[];oe.value=a.map((e=>e.id)),await R(oe.value,e),G()}};return(t,a)=>(r(),u(n,null,[o(p(e),null,{default:m((()=>[o(p(h),{gutter:20,style:{"margin-bottom":"15px"}},{default:m((()=>[o(p(b),{span:1},{default:m((()=>[o(p(x),{class:"mx-1",style:{position:"relative",top:"8px",left:"30%"}},{default:m((()=>[d(c(p(H)("sensitiveInformation.sensitiveName"))+" :",1)])),_:1})])),_:1}),o(p(b),{span:5},{default:m((()=>[o(p(f),{modelValue:W.value,"onUpdate:modelValue":a[0]||(a[0]=e=>W.value=e),placeholder:p(H)("common.inputText"),style:{height:"38px"}},null,8,["modelValue","placeholder"])])),_:1}),o(p(b),{span:5},{default:m((()=>[o(p(g),{type:"primary",icon:p(_),style:{height:"38px"},onClick:F},{default:m((()=>[d("Search")])),_:1},8,["icon"])])),_:1})])),_:1}),o(p(h),{gutter:60},{default:m((()=>[o(p(b),{span:1},{default:m((()=>[v("div",A,[o(p(g),{type:"primary",onClick:q},{default:m((()=>[d(c(p(H)("common.new")),1)])),_:1})])])),_:1}),o(p(b),{span:1},{default:m((()=>[v("div",N,[o(p(g),{type:"success",onClick:a[1]||(a[1]=e=>se(!0))},{default:m((()=>[d(c(p(H)("common.on")),1)])),_:1})])])),_:1}),o(p(b),{span:1},{default:m((()=>[v("div",U,[o(p(g),{type:"danger",onClick:a[2]||(a[2]=e=>se(!1))},{default:m((()=>[d(c(p(H)("common.off")),1)])),_:1})])])),_:1}),o(p(b),{span:1},{default:m((()=>[v("div",V,[o(p(s),{type:"danger",loading:ae.value,onClick:ie},{default:m((()=>[d(c(p(H)("common.delete")),1)])),_:1},8,["loading"])])])),_:1})])),_:1}),o(p(w),{pageSize:p(B),"onUpdate:pageSize":a[3]||(a[3]=e=>y(B)?B.value=e:null),currentPage:p(Y),"onUpdate:currentPage":a[4]||(a[4]=e=>y(Y)?Y.value=e:null),columns:L,data:p(M),stripe:"",border:!0,loading:p($),resizable:!0,pagination:{total:p(X),pageSizes:[10,20,50,100,200,500,1e3]},onRegister:p(P),headerCellStyle:K,style:{fontFamily:"-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji"}},null,8,["pageSize","currentPage","columns","data","loading","pagination","onRegister"])])),_:1}),o(p(S),{modelValue:Z.value,"onUpdate:modelValue":a[5]||(a[5]=e=>Z.value=e),title:p(ee).id?t.$t("common.edit"):t.$t("common.new"),center:"",style:{"border-radius":"15px","box-shadow":"5px 5px 10px rgba(0, 0, 0, 0.3)"},maxHeight:300},{default:m((()=>[o(z,{closeDialog:Q,sensitiveForm:p(ee),getList:p(G)},null,8,["sensitiveForm","getList"])])),_:1},8,["modelValue","title"])],64))}});export{H as default};

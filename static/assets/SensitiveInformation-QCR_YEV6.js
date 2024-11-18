import{d as e,r as t,s as a,e as l,K as i,E as o,v as s,G as n,z as r,C as u,F as d,D as p,o as m,c,a as f,w as v,H as g,f as h,t as y,y as b,I as x,l as j,ai as _,_ as w}from"./index-9Ou_V48r.js";import{u as S}from"./useTable-IziOfB1x.js";import{E as k}from"./el-card-YY6zirM4.js";import{E}from"./el-pagination-DDs0Udfg.js";import{E as V}from"./el-tag-BvR59dgz.js";import{E as C,a as z}from"./el-select-DEYc_w9t.js";import"./el-popper-DCJ36pso.js";import{E as A,a as H}from"./el-col-DTRu5f8N.js";import{E as I}from"./el-drawer-Covncn9X.js";import{E as L,a as U}from"./el-table-column-D6fMLqQo.js";import"./el-checkbox-CRVWojfo.js";import"./el-tooltip-l0sNRNKZ.js";import{_ as W}from"./Dialog.vue_vue_type_style_index_0_lang-CrCAQL3c.js";import{_ as R}from"./Table.vue_vue_type_script_lang-Cwlj3iLd.js";import{u as N}from"./useCrudSchemas-5sdFiKG7.js";import{u as O,l as P,a as T,d as D,m as K,n as F}from"./index-3erKtnUq.js";import $ from"./Csearch-D79IxrJJ.js";import"./index-mNqo3h2g.js";import"./strings-KNygN08W.js";import"./useInput-cn_IIzbQ.js";import"./debounce-DhqxYZW3.js";import"./isArrayLikeObject-Gx6G_BCT.js";import"./raf-CyRAUvGw.js";import"./refs-Dbjm65cU.js";import"./el-image-viewer-DhxCS-kf.js";import"./el-empty-DFcPIFRn.js";import"./tsxHelper-7iLDt5nK.js";import"./el-dropdown-item-Bo5_qCi_.js";import"./castArray-BOf1uH-9.js";import"./index-CJgAKiO4.js";import"./tree-BfZhwLPs.js";import"./index-CEets4Oe.js";import"./ContentWrap.vue_vue_type_script_setup_true_lang-CB-TQz9X.js";import"./el-text-CJcSKmBh.js";import"./el-divider-CUXqkck9.js";import"./el-tree-select-CcG2ddZF.js";import"./index-DFRlv6BN.js";import"./el-switch-CqSUaakd.js";import"./useIcon-C7sZcQJ7.js";import"./exportData.vue_vue_type_script_setup_true_lang-BEZ8sK28.js";import"./el-tab-pane-DPFAEIkF.js";import"./el-form-CpqxNcKg.js";import"./el-radio-group-0IxFiqwT.js";import"./el-space-L08b7-yh.js";const G={style:{whiteSpace:"pre-line"}},M=["onClick"];function J(e){return"function"==typeof e||"[object Object]"===Object.prototype.toString.call(e)&&!x(e)}const B=w(e({__name:"SensitiveInformation",props:{projectList:{}},setup(e){const{t:x}=j(),w=[{keyword:"url",example:'url="http://example.com"',explain:x("searchHelp.url")},{keyword:"sname",example:'sname="twilio_account_sid"',explain:x("searchHelp.sname")},{keyword:"info",example:'info="api-key-example"',explain:x("searchHelp.sinfo")},{keyword:"project",example:'project="Hackerone"',explain:x("searchHelp.project")},{keyword:"md5",example:'md5=="1d49e5e190f7a38ab498e28e6578f64f"',explain:x("searchHelp.sensMd5")},{keyword:"level",example:'level=="rad"',explain:x("searchHelp.sensLevel")}],B=t(""),Y=e=>{B.value=e,ke()},q=a({}),X=a([{field:"selection",type:"selection",minWidth:"55"},{field:"index",label:x("tableDemo.index"),type:"index",minWidth:55},{field:"url",label:"URL",minWidth:200},{field:"name",label:x("sensitiveInformation.sensitiveName"),minWidth:150},{field:"color",label:"Level",minWidth:50,columnKey:"color",formatter:(e,t,a)=>{if(a)return l(i,{icon:"clarity:circle-solid",color:a,style:"transform: translateY(-35%)"},null)},filters:[{text:"Red",value:"red"},{text:"Green",value:"green"},{text:"Cyan",value:"cyan"},{text:"Yellow",value:"yellow"},{text:"Orange",value:"orange"},{text:"Gray",value:"gray"},{text:"Pink",value:"pink"},{text:"Null",value:"null"}]},{field:"match",label:"Info",minWidth:150,formatter:(e,t,a)=>{if(!a)return;const i=a.map(((e,t)=>l("div",{key:t},[e])));return l(o,{height:"100px"},{default:()=>[l("div",{class:"scrollbar-demo-item"},[i])]})}},{field:"status",label:x("common.state"),minWidth:100,columnKey:"status",formatter:(e,t,a)=>{let i;if(e.id.includes("//"))return;null==e.status&&(e.status=1);const o=[{value:1,label:x("common.unprocessed")},{value:2,label:x("common.processing")},{value:3,label:x("common.ignored")},{value:4,label:x("common.suspected")},{value:5,label:x("common.confirmed")}];return l(z,{modelValue:e.status,"onUpdate:modelValue":async t=>{try{e.status=t,O(e.id,"SensitiveResult",t)}catch(a){}}},J(i=o.map((e=>l(C,{key:e.value,label:e.label,value:e.value},null))))?i:{default:()=>[i]})},filters:[{text:x("common.unprocessed"),value:1},{text:x("common.processing"),value:2},{text:x("common.ignored"),value:3},{text:x("common.suspected"),value:4},{text:x("common.confirmed"),value:5}]},{field:"tags",label:"TAG",fit:"true",formatter:(e,a,l)=>{if(e.id.includes("//"))return;null==l&&(l=[]),q[e.id]||(q[e.id]={inputVisible:!1,inputValue:"",inputRef:t(null)});const i=q[e.id],o=async()=>{i.inputValue&&(l.push(i.inputValue),T(e.id,Z,i.inputValue)),i.inputVisible=!1,i.inputValue=""};return s(H,{},(()=>[...l.map((t=>s(A,{span:24,key:t},(()=>[s("div",{onClick:e=>((e,t)=>{e.target.classList.contains("el-tag__close")||Ve("tags",t)})(e,t)},[s(V,{closable:!0,onClose:()=>(async t=>{const a=l.indexOf(t);a>-1&&l.splice(a,1),D(e.id,Z,t)})(t)},(()=>t))])])))),s(A,{span:24},i.inputVisible?()=>s(n,{ref:i.inputRef,modelValue:i.inputValue,"onUpdate:modelValue":e=>i.inputValue=e,class:"w-20",size:"small",onKeyup:e=>{"Enter"===e.key&&o()},onBlur:o}):()=>s(r,{class:"button-new-tag",size:"small",onClick:()=>(i.inputVisible=!0,void _((()=>{})))},(()=>"+ New Tag")))]))},minWidth:"130"},{field:"time",label:x("asset.time"),minWidth:200},{field:"action",label:x("tableDemo.action"),formatter:(e,t,a)=>{if(e.body_id){let t;return l(d,null,[l(u,{type:"primary",onClick:()=>ye(e.body_id)},J(t=x("asset.detail"))?t:{default:()=>[t]})])}},minWidth:100}]);let Z="SensitiveResult";X.forEach((e=>{e.hidden=e.hidden??!1}));let Q=t(!1);const ee=({field:e,hidden:t})=>{const a=X.findIndex((t=>t.field===e));-1!==a&&(X[a].hidden=t),(()=>{const e=X.reduce(((e,t)=>(e[t.field]=t.hidden,e)),{});e.statisticsHidden=Q.value,localStorage.setItem(`columnConfig_${Z}`,JSON.stringify(e))})()};(()=>{const e=JSON.parse(localStorage.getItem(`columnConfig_${Z}`)||"{}");X.forEach((t=>{void 0!==e[t.field]&&"select"!=t.field&&(t.hidden=e[t.field])})),Q.value=e.statisticsHidden})();const te=a({}),{allSchemas:ae}=N(X),{tableRegister:le,tableState:ie,tableMethods:oe}=S({fetchDataApi:async()=>{const{currentPage:e,pageSize:t}=ie,a=await K(B.value,e.value,t.value,te);return{list:a.data.list,total:a.data.total}},immediate:!1}),{loading:se,dataList:ne,total:re,currentPage:ue,pageSize:de}=ie,{getList:pe,getElTableExpose:me}=oe;function ce(){return{background:"var(--el-fill-color-light)"}}pe(),p((()=>{ve(),window.addEventListener("resize",ve)}));const fe=t(0),ve=()=>{const e=window.innerHeight||document.documentElement.clientHeight;fe.value=.7*e},ge=t(!1),he=t(""),ye=async e=>{e.replace("md5==","");const t=await P(e);he.value=t.data.body,ge.value=!0},be=async e=>{Object.assign(te,e),ke()},xe=(e,t)=>{Object.assign(te,t),B.value=e,ke()},je=t(!1),_e=()=>{je.value=!0},we=t([]),Se=async()=>{try{const e=await F(B.value,te);e&&e.data&&Array.isArray(e.data.list)&&(we.value=e.data.list.map((e=>({name:e.name,color:e.color,count:e.count}))))}catch(e){}};Se();const ke=async()=>{try{await Promise.all([pe(),Se()])}catch(e){}},Ee=t([]),Ve=(e,t)=>{const a=`${e}=${t}`;Ee.value=[...Ee.value,a]},Ce=e=>{if(Ee.value){const[t,a]=e.split("=");t in te&&Array.isArray(te[t])&&(te[t]=te[t].filter((e=>e!==a)),0===te[t].length&&delete te[t]),Ee.value=Ee.value.filter((t=>t!==e))}};return(e,t)=>(m(),c(d,null,[l($,{getList:f(pe),handleSearch:Y,searchKeywordsData:w,index:"SensitiveResult",getElTableExpose:f(me),handleFilterSearch:xe,projectList:e.$props.projectList,openAggregation:_e,dynamicTags:Ee.value,handleClose:Ce,crudSchemas:X,onUpdateColumnVisibility:ee},null,8,["getList","getElTableExpose","projectList","dynamicTags","crudSchemas"]),l(f(H),null,{default:v((()=>[l(f(A),null,{default:v((()=>[l(f(k),null,{default:v((()=>[l(f(R),{pageSize:f(de),"onUpdate:pageSize":t[0]||(t[0]=e=>g(de)?de.value=e:null),currentPage:f(ue),"onUpdate:currentPage":t[1]||(t[1]=e=>g(ue)?ue.value=e:null),columns:f(ae).tableColumns,data:f(ne),stripe:"",rowKey:"id",border:!0,"max-height":fe.value,loading:f(se),resizable:!0,onRegister:f(le),onFilterChange:be,headerCellStyle:ce,"tooltip-options":{offset:1,showArrow:!1,effect:"dark",enterable:!0,showAfter:0,popperOptions:{},popperClass:"test",placement:"top",hideAfter:0,disabled:!1},style:{fontFamily:"-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji"}},null,8,["pageSize","currentPage","columns","data","max-height","loading","onRegister"])])),_:1})])),_:1}),l(f(A),{":span":24},{default:v((()=>[l(f(k),null,{default:v((()=>[l(f(E),{pageSize:f(de),"onUpdate:pageSize":t[2]||(t[2]=e=>g(de)?de.value=e:null),currentPage:f(ue),"onUpdate:currentPage":t[3]||(t[3]=e=>g(ue)?ue.value=e:null),"page-sizes":[10,20,50,100,200,500,1e3],layout:"total, sizes, prev, pager, next, jumper",total:f(re)},null,8,["pageSize","currentPage","total"])])),_:1})])),_:1})])),_:1}),l(f(W),{modelValue:ge.value,"onUpdate:modelValue":t[4]||(t[4]=e=>ge.value=e),title:f(x)("asset.detail"),center:"",style:{"border-radius":"15px","box-shadow":"5px 5px 10px rgba(0, 0, 0, 0.3)"},width:"70%","max-height":fe.value},{default:v((()=>[l(f(o),{"max-height":fe.value},{default:v((()=>[h("div",G,y(he.value),1)])),_:1},8,["max-height"])])),_:1},8,["modelValue","title","max-height"]),l(f(I),{modelValue:je.value,"onUpdate:modelValue":t[5]||(t[5]=e=>je.value=e),title:f(x)("sensitiveInformation.sensAggre"),direction:"rtl",size:"30%"},{default:v((()=>[l(f(L),{data:we.value},{default:v((()=>[l(f(U),{prop:"name",label:f(x)("sensitiveInformation.sensitiveName"),width:"180"},{default:v((e=>[h("div",{style:{display:"flex","align-items":"center"},onClick:t=>Ve("sname",e.row.name)},[l(f(V),null,{default:v((()=>[b(y(e.row.name),1)])),_:2},1024)],8,M)])),_:1},8,["label"]),l(f(U),{prop:"color",label:"color",width:"180"},{default:v((e=>[l(f(V),{color:e.row.color,round:"",effect:"plain",size:"small",style:{width:"20px"}},null,8,["color"])])),_:1}),l(f(U),{prop:"count",label:f(x)("common.quantity"),width:"180"},null,8,["label"])])),_:1},8,["data"])])),_:1},8,["modelValue","title"])],64))}}),[["__scopeId","data-v-2df5e743"]]);export{B as default};

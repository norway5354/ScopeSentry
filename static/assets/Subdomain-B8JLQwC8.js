import{d as e,dC as t,D as l,r as a,s as o,e as i,y as s,F as n,G as r,o as m,i as u,w as d,a as p,z as c,j as h,I as f,l as b,J as j,L as g,_ as v}from"./index-9Ou_V48r.js";import{u as y}from"./useTable-IziOfB1x.js";import{E as x}from"./el-card-YY6zirM4.js";import{E as S,a as _}from"./el-col-DTRu5f8N.js";import{E as w}from"./el-text-CJcSKmBh.js";import{_ as C}from"./Table.vue_vue_type_script_lang-Cwlj3iLd.js";import{u as E}from"./useCrudSchemas-5sdFiKG7.js";import{d as T}from"./index-BmG5qW2f.js";import{r as W}from"./index-3erKtnUq.js";import"./el-table-column-D6fMLqQo.js";import"./el-popper-DCJ36pso.js";import"./index-mNqo3h2g.js";import"./debounce-DhqxYZW3.js";import"./el-checkbox-CRVWojfo.js";import"./isArrayLikeObject-Gx6G_BCT.js";import"./raf-CyRAUvGw.js";import"./el-tooltip-l0sNRNKZ.js";import"./el-tag-BvR59dgz.js";import"./el-pagination-DDs0Udfg.js";import"./el-select-DEYc_w9t.js";import"./strings-KNygN08W.js";import"./useInput-cn_IIzbQ.js";import"./el-image-viewer-DhxCS-kf.js";import"./el-empty-DFcPIFRn.js";import"./tsxHelper-7iLDt5nK.js";import"./el-dropdown-item-Bo5_qCi_.js";import"./castArray-BOf1uH-9.js";import"./refs-Dbjm65cU.js";import"./index-CJgAKiO4.js";import"./tree-BfZhwLPs.js";import"./index-CEets4Oe.js";function A(e){return"function"==typeof e||"[object Object]"===Object.prototype.toString.call(e)&&!f(e)}const N=v(e({__name:"Subdomain",setup(e){const{t:f}=b(),{query:v}=t();l((()=>{V(),window.addEventListener("resize",V)}));const N=a(0),V=()=>{const e=window.innerHeight||document.documentElement.clientHeight;N.value=.8*e};a("");const I=o({});I.project=[v.id];const R=async e=>{Object.assign(I,e),O()},k=o([{field:"selection",type:"selection",minWidth:"55"},{field:"index",label:f("tableDemo.index"),type:"index",minWidth:"30"},{field:"host",label:f("subdomain.subdomainName"),minWidth:"200",formatter:(e,t,l)=>e.count?i(n,null,[i(w,null,A(l)?l:{default:()=>[l]}),i(w,{type:"info"},{default:()=>[s("("),e.count,s(")")]})]):i(w,null,A(l)?l:{default:()=>[l]}),slots:{header:()=>i("div",null,[i("span",null,[f("subdomain.subdomainName")]),i(r,{modelValue:B.value,"onUpdate:modelValue":e=>B.value=e,placeholder:"Search",style:"width: 200px; margin-left: 10px;",size:"small",onChange:()=>$("sub_host")},null)])}},{field:"type",label:f("subdomain.recordType"),minWidth:"200",columnKey:"type",filters:[{text:"A",value:"A"},{text:"NS",value:"NS"},{text:"CNAME",value:"CNAME"},{text:"PTR",value:"PTR"},{text:"TXT",value:"TXT"}]},{field:"value",label:f("subdomain.recordValue"),minWidth:"250",formatter:(e,t,l)=>{let a="";return l.forEach(((e,t)=>{a+=`${e}\r\n`})),a},slots:{header:()=>i("div",null,[i("span",null,[f("subdomain.recordValue")]),i(r,{modelValue:K.value,"onUpdate:modelValue":e=>K.value=e,placeholder:"Search",style:"width: 200px; margin-left: 10px;",size:"small",onChange:()=>$("sub_value")},null)])}},{field:"ip",label:"IP",minWidth:"150",formatter:(e,t,l)=>{let a="";return l.forEach(((e,t)=>{a+=`${e}\r\n`})),a},slots:{header:()=>i("div",null,[i("span",null,[s("IP")]),i(r,{modelValue:X.value,"onUpdate:modelValue":e=>X.value=e,placeholder:"Search",style:"width: 180px; margin-left: 10px;",size:"small",onChange:()=>$("sub_ip")},null)])}},{field:"time",label:f("asset.time"),minWidth:"200"}]),{allSchemas:z}=E(k),{tableRegister:D,tableState:U,tableMethods:F}=y({fetchDataApi:async()=>({list:(await T("",I,J)).data.list}),immediate:!0}),{loading:H,dataList:L}=U,{getList:O,getElTableExpose:M}=F;function P(){return{background:"var(--el-fill-color-light)"}}const B=a(""),K=a(""),X=a(""),J=o({}),$=async e=>{let t="";"sub_host"==e&&(t=B.value),"sub_value"==e&&(t=K.value),"sub_ip"==e&&(t=X.value),J[e]=t,O()},q=a([]),G=async()=>{j.confirm("Whether to delete?","Warning",{confirmButtonText:"OK",cancelButtonText:"Cancel",type:"warning"}).then((async()=>{const e=await M(),t=(null==e?void 0:e.getSelectionRows())||[];q.value=t.map((e=>e.id)),await W(q.value,"subdomain"),O()})).catch((()=>{g({type:"info",message:"Delete canceled"})}))};let Z=a(!1);const Q=async()=>{const e=await M(),t=(null==e?void 0:e.getSelectionRows())||[];q.value=t.map((e=>e.id)),0!=q.value.length?Z.value=!0:Z.value=!1};return(e,t)=>(m(),u(p(_),null,{default:d((()=>[i(p(S),null,{default:d((()=>[i(p(x),{style:{height:"min-content"}},{default:d((()=>[p(Z)?(m(),u(p(c),{key:0,onClick:G,type:"danger",size:"small"},{default:d((()=>[s("Dlete")])),_:1})):h("",!0),i(p(C),{columns:p(z).tableColumns,data:p(L),stripe:"","max-height":N.value,border:!0,loading:p(H),onSelectionChange:Q,rowKey:"id",resizable:!0,onRegister:p(D),onFilterChange:R,headerCellStyle:P,style:{fontFamily:"-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji"}},null,8,["columns","data","max-height","loading","onRegister"])])),_:1})])),_:1})])),_:1}))}}),[["__scopeId","data-v-74d55aa1"]]);export{N as default};

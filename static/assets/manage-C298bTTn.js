import{_ as e}from"./ContentWrap.vue_vue_type_script_setup_true_lang-CB-TQz9X.js";import{d as a,M as t,s as o,e as l,v as s,L as r,z as i,C as n,F as d,r as m,o as c,c as u,w as p,a as f,f as y,y as g,t as b,G as v,A as j,U as _,I as w,l as h,_ as x}from"./index-9Ou_V48r.js";import{a as E,E as U}from"./el-col-DTRu5f8N.js";import{E as C}from"./el-upload-SDrf8Wx1.js";import"./el-progress-D60Gjj0F.js";import{E as k,a as S}from"./el-form-CpqxNcKg.js";import{E as A}from"./el-tag-BvR59dgz.js";import{_ as V}from"./Table.vue_vue_type_script_lang-Cwlj3iLd.js";import{_ as R}from"./Dialog.vue_vue_type_style_index_0_lang-CrCAQL3c.js";import{u as z}from"./useTable-IziOfB1x.js";import{d as I,a as L,g as D,c as F}from"./index-cYrod-uY.js";import"./el-card-YY6zirM4.js";import"./el-tooltip-l0sNRNKZ.js";import"./el-popper-DCJ36pso.js";import"./index-mNqo3h2g.js";import"./castArray-BOf1uH-9.js";import"./el-table-column-D6fMLqQo.js";import"./debounce-DhqxYZW3.js";import"./el-checkbox-CRVWojfo.js";import"./isArrayLikeObject-Gx6G_BCT.js";import"./raf-CyRAUvGw.js";import"./el-pagination-DDs0Udfg.js";import"./el-select-DEYc_w9t.js";import"./strings-KNygN08W.js";import"./useInput-cn_IIzbQ.js";import"./el-image-viewer-DhxCS-kf.js";import"./el-empty-DFcPIFRn.js";import"./tsxHelper-7iLDt5nK.js";import"./el-dropdown-item-Bo5_qCi_.js";import"./refs-Dbjm65cU.js";import"./index-CJgAKiO4.js";import"./index-CEets4Oe.js";const O={class:"mb-10px"},W={class:"mb-10px"};function H(e){return"function"==typeof e||"[object Object]"===Object.prototype.toString.call(e)&&!w(e)}const M=x(a({__name:"manage",setup(a){const{t:w}=h(),x={Authorization:`${t().getToken}`},M=o([{field:"selection",type:"selection",width:"55"},{field:"id",hidden:!0},{field:"name",label:w("common.name"),minWidth:40},{field:"category",label:w("common.category"),minWidth:40,formatter:(e,a,t)=>l(A,{type:"success",effect:"light",size:"large"},H(t)?t:{default:()=>[t]})},{field:"size",label:w("common.filesize"),formatter:(e,a,t)=>t+"MB"},{field:"upload",label:w("common.upload"),formatter:(e,a,t)=>{const o=`/api/dictionary/manage/save?id=${e.id}`;return s("div",[s(C,{class:"upload-demo",action:o,headers:x,onSuccess:e=>{200===e.code?r.success("Upload succes"):r.error("Upload failed"),q()},onError:e=>{r.error(`Upload failed: ${e}`)}},(()=>s(i,{type:"warning"},w("common.cover"))))])}},{field:"download",label:w("common.download"),formatter:(e,a,t)=>{let o;return l(d,null,[l(n,{type:"primary",onClick:()=>se(e.id,e.name)},H(o=w("common.download"))?o:{default:()=>[o]})])}},{field:"action",label:w("tableDemo.action"),minWidth:40,formatter:(e,a,t)=>{let o;return l(d,null,[l(n,{type:"danger",onClick:()=>Q(e)},H(o=w("common.delete"))?o:{default:()=>[o]})])}}]),{tableRegister:T,tableState:$,tableMethods:B}=z({fetchDataApi:async()=>({list:(await D()).data.list})}),{loading:N,dataList:G}=$,{getList:q,getElTableExpose:J}=B;function P(){return{background:"var(--el-fill-color-light)"}}const X=m(!1),Z=m({name:"",category:""}),K=m(!1),Q=async e=>{if(window.confirm("Are you sure you want to delete this data?")){K.value=!0;try{await I([e.id]);K.value=!1,q()}catch(a){K.value=!1,q()}}},Y=m([]),ee=async()=>{window.confirm("Are you sure you want to delete the selected data?")&&await(async()=>{const e=await J(),a=(null==e?void 0:e.getSelectionRows())||[];Y.value=a.map((e=>e.id)),K.value=!0;try{await I(Y.value),K.value=!1,q()}catch(t){K.value=!1,q()}})()},ae=m();async function te(e){try{const a=e.file,t=new FormData;t.append("file",a),t.append("name",Z.value.name),t.append("category",Z.value.category),await F(t),q(),X.value=!1,r.success("Upload success")}catch(a){r.error(`Upload failed: ${a}`)}}async function oe(){ae.value.submit()}const le=async()=>{Z.value.name="",X.value=!0},se=async(e,a)=>{const t=await L(e),o=window.URL.createObjectURL(new Blob([t.data])),l=document.createElement("a");l.href=o,l.setAttribute("download",a),document.body.appendChild(l),l.click(),document.body.removeChild(l)};return(a,t)=>(c(),u(d,null,[l(f(e),null,{default:p((()=>[l(f(E),{gutter:60},{default:p((()=>[l(f(U),{span:1},{default:p((()=>[y("div",O,[l(f(i),{type:"primary",onClick:le},{default:p((()=>[g(b(f(w)("common.new")),1)])),_:1})])])),_:1}),l(f(U),{span:1},{default:p((()=>[y("div",W,[l(f(n),{type:"danger",loading:K.value,onClick:ee},{default:p((()=>[g(b(f(w)("common.delete")),1)])),_:1},8,["loading"])])])),_:1})])),_:1}),l(f(V),{columns:M,data:f(G),stripe:"",border:!0,loading:f(N),resizable:!0,onRegister:f(T),headerCellStyle:P,style:{fontFamily:"-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji"}},null,8,["columns","data","loading","onRegister"])])),_:1}),l(f(R),{modelValue:X.value,"onUpdate:modelValue":t[2]||(t[2]=e=>X.value=e),title:f(w)("common.new"),center:"",style:{"border-radius":"15px","box-shadow":"5px 5px 10px rgba(0, 0, 0, 0.3)"},maxHeight:430},{default:p((()=>[l(f(k),{model:Z.value,"label-width":"120px",class:"upload-form"},{default:p((()=>[l(f(S),{label:f(w)("common.name")},{default:p((()=>[l(f(v),{modelValue:Z.value.name,"onUpdate:modelValue":t[0]||(t[0]=e=>Z.value.name=e),placeholder:"Enter name"},null,8,["modelValue"])])),_:1},8,["label"]),l(f(S),{label:f(w)("common.category")},{default:p((()=>[l(f(v),{modelValue:Z.value.category,"onUpdate:modelValue":t[1]||(t[1]=e=>Z.value.category=e),placeholder:"Enter category"},null,8,["modelValue"])])),_:1},8,["label"]),l(f(S),{label:""},{default:p((()=>[l(f(C),{class:"upload-demo",drag:"",ref_key:"upload",ref:ae,"auto-upload":!1,limit:1,httpRequest:te},{default:p((()=>[l(f(j),{class:"avatar-uploader-icon"},{default:p((()=>[l(f(_))])),_:1})])),_:1},512)])),_:1}),l(f(S),null,{default:p((()=>[l(f(i),{type:"primary",onClick:oe},{default:p((()=>[g("Submit")])),_:1})])),_:1})])),_:1},8,["model"])])),_:1},8,["modelValue","title"])],64))}}),[["__scopeId","data-v-f321ff88"]]);export{M as default};

import{d as e,r as t,s as a,e as l,y as r,I as i,K as s,o,c as n,a as p,w as u,N as m,F as c,O as d,l as j,_ as g}from"./index-vMt5tOuI.js";import{u as x}from"./useTable-DO6t6Zuf.js";import{E as f}from"./el-card-CiG9T01-.js";import{E as v}from"./el-select-oq3jOrDj.js";import"./el-tag-C3mt1pWb.js";import"./el-popper-CJZHtU_A.js";import{E as h,a as b}from"./el-col-CK66atlO.js";import{E as y}from"./el-text-JTnFT2W3.js";import{_}from"./Table.vue_vue_type_script_lang-kKqRQLK4.js";import{u as S}from"./useCrudSchemas-gxupr6De.js";import{q as E}from"./index-DO8QlVWZ.js";import L from"./Csearch-DF880vSD.js";import"./useInput-CPyPMgc8.js";import"./index-DMmJY3Ph.js";import"./isEqual-D2Iw95Gj.js";import"./debounce-heHWUU1E.js";import"./el-table-column-Ty7HKRWd.js";import"./el-checkbox-DZAdOJwr.js";import"./isArrayLikeObject-4WqnSTxS.js";import"./raf-RUFdlNuH.js";import"./el-tooltip-l0sNRNKZ.js";import"./el-image-viewer-CkZtWhln.js";import"./tsxHelper-C3yG_Ynk.js";import"./el-dropdown-item-C2usTBce.js";import"./castArray-DsRHGUHq.js";import"./refs-B-F76yq7.js";import"./index-BjDunm1X.js";import"./tree-BfZhwLPs.js";import"./index-znw49gEj.js";import"./ContentWrap.vue_vue_type_script_setup_true_lang-DYamwFJW.js";import"./el-divider-RjUq80nQ.js";import"./el-tree-select-eURulGpf.js";import"./index-eyqQYDWr.js";import"./Dialog.vue_vue_type_style_index_0_lang-BoLcmuNj.js";import"./useIcon-D1gqy2ud.js";import"./exportData.vue_vue_type_script_setup_true_lang-ncKTqQw8.js";import"./el-tab-pane-zqlH3GjE.js";import"./el-form-CrZErb9v.js";import"./el-radio-group-PFBUXVzP.js";import"./el-space-CvMwlCn7.js";const w=g(e({__name:"URL",props:{projectList:{}},setup(e){const{t:g}=j(),w=[{keyword:"url",example:'url="http://example.com"',explain:g("searchHelp.url")},{keyword:"input",example:'input="example.com"',explain:g("searchHelp.inpur")},{keyword:"source",example:'source="exapmle.com/example.js"',explain:g("searchHelp.source")},{keyword:"type",example:'type="linkfinder"',explain:g("searchHelp.urlType")},{keyword:"project",example:'project="Hackerone"',explain:g("searchHelp.project")}],z=t(""),U=e=>{z.value=e,O()},k=a([{field:"selection",type:"selection",minWidth:"55"},{field:"index",label:g("tableDemo.index"),type:"index",minWidth:55},{field:"url",label:"URL",minWidth:250},{field:"status",label:g("dirScan.status"),columnKey:"status",minWidth:120,formatter:(e,t,a)=>{if(null==a)return l("div",null,[r("-")]);let s="";return s=a<300?"#2eb98a":"#ff5252",l(b,{gutter:20},{default:()=>[l(h,{span:1},{default:()=>[l(i,{icon:"clarity:circle-solid",color:s,size:10,style:"transform: translateY(8%)"},null)]}),l(h,{span:2},{default:()=>{return[l(y,null,(e=a,"function"==typeof e||"[object Object]"===Object.prototype.toString.call(e)&&!d(e)?a:{default:()=>[a]}))];var e}})]})},filters:[{text:"200",value:200},{text:"201",value:201},{text:"204",value:204},{text:"301",value:301},{text:"302",value:302},{text:"304",value:304},{text:"400",value:400},{text:"401",value:401},{text:"403",value:403},{text:"404",value:404},{text:"500",value:500},{text:"502",value:502},{text:"503",value:503},{text:"504",value:504}]},{field:"length",label:"Length",minWidth:120,sortable:"custom"},{field:"source",label:g("URL.source"),minWidth:100},{field:"type",label:g("URL.type"),minWidth:100},{field:"input",label:g("URL.input"),minWidth:200},{field:"time",label:g("asset.time"),minWidth:200}]),{allSchemas:W}=S(k),{tableRegister:C,tableState:H,tableMethods:R}=x({fetchDataApi:async()=>{const{currentPage:e,pageSize:t}=H,a=await E(z.value,e.value,t.value,V,q);return{list:a.data.list,total:a.data.total}},immediate:!1}),{loading:P,dataList:I,total:T,currentPage:A,pageSize:D}=H,{getList:O,getElTableExpose:F}=R;function N(){return{background:"var(--el-fill-color-light)"}}D.value=20,s((()=>{B(),window.addEventListener("resize",B)}));const q=a({}),K=async e=>{const t=e.prop,a=e.order;q[t]=a,O()},M=t(0),B=()=>{const e=window.innerHeight||document.documentElement.clientHeight;M.value=.7*e},V=a({}),X=(e,t)=>{Object.assign(V,t),z.value=e,O()},Y=async e=>{Object.assign(V,e),O()};return(e,t)=>(o(),n(c,null,[l(L,{getList:p(O),handleSearch:U,searchKeywordsData:w,index:"UrlScan",getElTableExpose:p(F),projectList:e.$props.projectList,handleFilterSearch:X},null,8,["getList","getElTableExpose","projectList"]),l(p(b),null,{default:u((()=>[l(p(h),null,{default:u((()=>[l(p(f),null,{default:u((()=>[l(p(_),{pageSize:p(D),"onUpdate:pageSize":t[0]||(t[0]=e=>m(D)?D.value=e:null),currentPage:p(A),"onUpdate:currentPage":t[1]||(t[1]=e=>m(A)?A.value=e:null),columns:p(W).tableColumns,data:p(I),"max-height":M.value,stripe:"",border:!0,loading:p(P),resizable:!0,onSortChange:K,onRegister:p(C),onFilterChange:Y,headerCellStyle:N,style:{fontFamily:"-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji"}},null,8,["pageSize","currentPage","columns","data","max-height","loading","onRegister"])])),_:1})])),_:1}),l(p(h),{":span":24},{default:u((()=>[l(p(f),null,{default:u((()=>[l(p(v),{pageSize:p(D),"onUpdate:pageSize":t[2]||(t[2]=e=>m(D)?D.value=e:null),currentPage:p(A),"onUpdate:currentPage":t[3]||(t[3]=e=>m(A)?A.value=e:null),"page-sizes":[20,50,100,200,500,1e3],layout:"total, sizes, prev, pager, next, jumper",total:p(T)},null,8,["pageSize","currentPage","total"])])),_:1})])),_:1})])),_:1})],64))}}),[["__scopeId","data-v-f1c55761"]]);export{w as default};
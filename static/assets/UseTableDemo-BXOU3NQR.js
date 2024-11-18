import{_ as e}from"./ContentWrap.vue_vue_type_script_setup_true_lang-CB-TQz9X.js";import{d as t,a,l,s as o,e as i,y as n,C as s,r,o as d,c as m,w as p,t as u,H as c,F as b,I as f,_ as g}from"./index-9Ou_V48r.js";import{_ as D}from"./Table.vue_vue_type_script_lang-Cwlj3iLd.js";import{a as _}from"./index-DhB7vGRQ.js";import{E as j}from"./el-tag-BvR59dgz.js";import{u as h}from"./useTable-IziOfB1x.js";import"./el-card-YY6zirM4.js";import"./el-tooltip-l0sNRNKZ.js";import"./el-popper-DCJ36pso.js";import"./el-table-column-D6fMLqQo.js";import"./index-mNqo3h2g.js";import"./debounce-DhqxYZW3.js";import"./el-checkbox-CRVWojfo.js";import"./isArrayLikeObject-Gx6G_BCT.js";import"./raf-CyRAUvGw.js";import"./el-pagination-DDs0Udfg.js";import"./el-select-DEYc_w9t.js";import"./strings-KNygN08W.js";import"./useInput-cn_IIzbQ.js";import"./el-image-viewer-DhxCS-kf.js";import"./el-empty-DFcPIFRn.js";import"./tsxHelper-7iLDt5nK.js";import"./el-dropdown-item-Bo5_qCi_.js";import"./castArray-BOf1uH-9.js";import"./refs-Dbjm65cU.js";import"./index-CJgAKiO4.js";import"./index-CEets4Oe.js";function v(e){return"function"==typeof e||"[object Object]"===Object.prototype.toString.call(e)&&!f(e)}const x=g(t({__name:"UseTableDemo",setup(t){const{tableRegister:f,tableMethods:g,tableState:x}=h({fetchDataApi:async()=>{const{currentPage:e,pageSize:t}=x,l=await _({pageIndex:a(e),pageSize:a(t)});return{list:l.data.list,total:l.data.total}}}),{loading:y,dataList:C,total:w,currentPage:k,pageSize:S}=x,{setProps:A,setColumn:T,getElTableExpose:R,addColumn:I,delColumn:z,refresh:E}=g,{t:O}=l(),P=o([{field:"expand",type:"expand",slots:{default:e=>{const{row:t}=e;return i("div",{class:"ml-30px"},[i("div",null,[O("tableDemo.title"),n("："),t.title]),i("div",null,[O("tableDemo.author"),n("："),t.author]),i("div",null,[O("tableDemo.displayTime"),n("："),t.display_time])])}}},{field:"selection",type:"selection"},{field:"index",label:O("tableDemo.index"),type:"index"},{field:"content",label:O("tableDemo.header"),children:[{field:"title",label:O("tableDemo.title")},{field:"author",label:O("tableDemo.author")},{field:"display_time",label:O("tableDemo.displayTime")},{field:"importance",label:O("tableDemo.importance"),formatter:(e,t,a)=>i(j,{type:1===a?"success":2===a?"warning":"danger"},{default:()=>[O(1===a?"tableDemo.important":2===a?"tableDemo.good":"tableDemo.commonly")]})},{field:"pageviews",label:O("tableDemo.pageviews")}]},{field:"action",label:O("tableDemo.action"),slots:{default:e=>{let t;return i(s,{type:"primary",onClick:()=>H(e)},v(t=O("tableDemo.action"))?t:{default:()=>[t]})}}}]),H=e=>{},U=r(!0),$=e=>{U.value=e},F=e=>{A({reserveIndex:e})},L=e=>{T([{field:"selection",path:"hidden",value:!e}])},W=r(1),J=()=>{T([{field:"title",path:"label",value:`${O("tableDemo.title")}${a(W)}`}]),W.value++},M=e=>{T([{field:"expand",path:"hidden",value:!e}])},N=async()=>{const e=await R();null==e||e.toggleAllSelection()},V=r(!0),X=()=>{a(V)?(z("action"),V.value=!1):(I({field:"action",label:O("tableDemo.action"),slots:{default:e=>{let t;return i(s,{type:"primary",onClick:()=>H(e)},v(t=O("tableDemo.action"))?t:{default:()=>[t]})}}}),V.value=!0)},Z=r(!1),q=()=>{A({stripe:!a(Z)}),Z.value=!a(Z)},B=r("auto"),G=()=>{"auto"===a(B)?(A({height:300}),B.value=300):(A({height:"auto"}),B.value="auto")},K=async()=>{const e=await R();null==e||e.getSelectionRows()};return(t,l)=>(d(),m(b,null,[i(a(e),{title:`UseTable ${a(O)("tableDemo.operate")}`,style:{"margin-bottom":"20px"}},{default:p((()=>[i(a(s),{onClick:l[0]||(l[0]=e=>$(!0))},{default:p((()=>[n(u(a(O)("tableDemo.show"))+" "+u(a(O)("tableDemo.pagination")),1)])),_:1}),i(a(s),{onClick:l[1]||(l[1]=e=>$(!1))},{default:p((()=>[n(u(a(O)("tableDemo.hidden"))+" "+u(a(O)("tableDemo.pagination")),1)])),_:1}),i(a(s),{onClick:l[2]||(l[2]=e=>F(!0))},{default:p((()=>[n(u(a(O)("tableDemo.reserveIndex")),1)])),_:1}),i(a(s),{onClick:l[3]||(l[3]=e=>F(!1))},{default:p((()=>[n(u(a(O)("tableDemo.restoreIndex")),1)])),_:1}),i(a(s),{onClick:l[4]||(l[4]=e=>L(!0))},{default:p((()=>[n(u(a(O)("tableDemo.showSelections")),1)])),_:1}),i(a(s),{onClick:l[5]||(l[5]=e=>L(!1))},{default:p((()=>[n(u(a(O)("tableDemo.hiddenSelections")),1)])),_:1}),i(a(s),{onClick:J},{default:p((()=>[n(u(a(O)("tableDemo.changeTitle")),1)])),_:1}),i(a(s),{onClick:l[6]||(l[6]=e=>M(!0))},{default:p((()=>[n(u(a(O)("tableDemo.showExpandedRows")),1)])),_:1}),i(a(s),{onClick:l[7]||(l[7]=e=>M(!1))},{default:p((()=>[n(u(a(O)("tableDemo.hiddenExpandedRows")),1)])),_:1}),i(a(s),{onClick:N},{default:p((()=>[n(u(a(O)("tableDemo.selectAllNone")),1)])),_:1}),i(a(s),{onClick:X},{default:p((()=>[n(u(a(O)("tableDemo.delOrAddAction")),1)])),_:1}),i(a(s),{onClick:q},{default:p((()=>[n(u(a(O)("tableDemo.showOrHiddenStripe")),1)])),_:1}),i(a(s),{onClick:G},{default:p((()=>[n(u(a(O)("tableDemo.fixedHeaderOrAuto")),1)])),_:1}),i(a(s),{onClick:K},{default:p((()=>[n(u(a(O)("tableDemo.getSelections")),1)])),_:1})])),_:1},8,["title"]),i(a(e),{title:`UseTable ${a(O)("tableDemo.example")}`},{default:p((()=>[i(a(D),{pageSize:a(S),"onUpdate:pageSize":l[8]||(l[8]=e=>c(S)?S.value=e:null),currentPage:a(k),"onUpdate:currentPage":l[9]||(l[9]=e=>c(k)?k.value=e:null),showAction:"",columns:P,data:a(C),loading:a(y),pagination:U.value?{total:a(w)}:void 0,onRegister:a(f),onRefresh:a(E)},null,8,["pageSize","currentPage","columns","data","loading","pagination","onRegister","onRefresh"])])),_:1},8,["title"])],64))}}),[["__scopeId","data-v-daa5600d"]]);export{x as default};

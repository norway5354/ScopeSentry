import{_ as e}from"./ContentWrap.vue_vue_type_script_setup_true_lang-myE6dPy2.js";import{d as t,l as s,r as i,o as r,i as a,w as o,e as l,a as p,f as n,t as m,H as c}from"./index-M10etHi6.js";import{_ as d}from"./Table.vue_vue_type_script_lang-9x4PpCFP.js";import{g as j}from"./index-C3X1X0oT.js";import{E as u}from"./el-link-Cph_oFdR.js";import{E as x}from"./el-divider-DaZuXLuF.js";import"./el-card-t9G4RzyN.js";import"./el-tooltip-l0sNRNKZ.js";import"./el-popper-D4B4f19J.js";import"./el-table-column-Ct9f4goZ.js";import"./index-BEjIPMze.js";import"./debounce-DMlGG38r.js";import"./el-checkbox-C3AB5jlc.js";import"./isArrayLikeObject-CmTAjD1K.js";import"./raf-ChTn_6oX.js";import"./el-tag-DC4eDhDo.js";import"./el-pagination-DKV_XtBQ.js";import"./el-select-CQG17R-n.js";import"./strings-DKCbZfke.js";import"./useInput-DFHJnJFD.js";import"./el-image-viewer-CAmikf02.js";import"./el-empty-DtGCvYos.js";import"./tsxHelper-Cy1d83nC.js";import"./el-dropdown-item-6vek0JLM.js";import"./castArray-D86glhSN.js";import"./refs-DEjEOHCT.js";import"./index-D4oHVQnn.js";import"./index-MoA9wocQ.js";const f={class:"flex cursor-pointer"},v={class:"pr-16px"},_=["src"],g={class:"mb-12px font-700 font-size-16px"},y={class:"line-clamp-3 font-size-12px"},b={class:"flex justify-center items-center"},k=["onClick"],w=["onClick"],C=t({__name:"CardTable",setup(t){const{t:C}=s(),h=i(!0);let z=i([]);(async e=>{const t=await j(e||{pageIndex:1,pageSize:10}).catch((()=>{})).finally((()=>{h.value=!1}));t&&(z.value=t.data.list)})();return(t,s)=>(r(),a(p(e),{title:p(C)("tableDemo.cardTable")},{default:o((()=>[l(p(d),{columns:[],data:p(z),loading:h.value,"custom-content":"","card-wrap-style":{width:"200px",marginBottom:"20px",marginRight:"20px"}},{content:o((e=>[n("div",f,[n("div",v,[n("img",{src:e.logo,class:"w-48px h-48px rounded-[50%]",alt:""},null,8,_)]),n("div",null,[n("div",g,m(e.name),1),n("div",y,m(e.desc),1)])])])),"content-footer":o((e=>[n("div",b,[n("div",{class:"flex-1 text-center",onClick:()=>{}},[l(p(u),{underline:!1},{default:o((()=>[c("操作一")])),_:1})],8,k),l(p(x),{direction:"vertical"}),n("div",{class:"flex-1 text-center",onClick:()=>{}},[l(p(u),{underline:!1},{default:o((()=>[c("操作二")])),_:1})],8,w)])])),_:1},8,["data","loading"])])),_:1},8,["title"]))}});export{C as default};

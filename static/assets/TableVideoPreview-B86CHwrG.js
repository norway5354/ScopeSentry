import{_ as e}from"./ContentWrap.vue_vue_type_script_setup_true_lang-myE6dPy2.js";import{d as t,l as i,r as a,o as r,i as l,w as o,e as s,a as p}from"./index-M10etHi6.js";import{_ as m}from"./Table.vue_vue_type_script_lang-9x4PpCFP.js";import{a as d}from"./index-C3X1X0oT.js";import"./el-card-t9G4RzyN.js";import"./el-tooltip-l0sNRNKZ.js";import"./el-popper-D4B4f19J.js";import"./el-table-column-Ct9f4goZ.js";import"./index-BEjIPMze.js";import"./debounce-DMlGG38r.js";import"./el-checkbox-C3AB5jlc.js";import"./isArrayLikeObject-CmTAjD1K.js";import"./raf-ChTn_6oX.js";import"./el-tag-DC4eDhDo.js";import"./el-pagination-DKV_XtBQ.js";import"./el-select-CQG17R-n.js";import"./strings-DKCbZfke.js";import"./useInput-DFHJnJFD.js";import"./el-image-viewer-CAmikf02.js";import"./el-empty-DtGCvYos.js";import"./tsxHelper-Cy1d83nC.js";import"./el-dropdown-item-6vek0JLM.js";import"./castArray-D86glhSN.js";import"./refs-DEjEOHCT.js";import"./index-D4oHVQnn.js";import"./index-MoA9wocQ.js";const n=t({__name:"TableVideoPreview",setup(t){const{t:n}=i(),j=[{field:"title",label:n("tableDemo.title")},{field:"video_uri",label:n("tableDemo.videoPreview")},{field:"author",label:n("tableDemo.author")},{field:"display_time",label:n("tableDemo.displayTime")},{field:"pageviews",label:n("tableDemo.pageviews")}],u=a(!0);let _=a([]);return(async e=>{const t=await d(e||{pageIndex:1,pageSize:10}).catch((()=>{})).finally((()=>{u.value=!1}));t&&(_.value=t.data.list)})(),(t,i)=>(r(),l(p(e),{title:p(n)("router.PicturePreview")},{default:o((()=>[s(p(m),{columns:j,data:p(_),loading:u.value,preview:["image_uri","video_uri"]},null,8,["data","loading"])])),_:1},8,["title"]))}});export{n as default};

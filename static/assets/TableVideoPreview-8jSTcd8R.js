import{_ as e}from"./ContentWrap.vue_vue_type_script_setup_true_lang-eEWBoMS4.js";import{d as t,l as i,r as a,o as l,i as r,w as o,e as s,a as p}from"./index-DDHcjopZ.js";import{_ as m}from"./Table.vue_vue_type_script_lang-DQcq6jzp.js";import{a as d}from"./index-RsDtb9hi.js";import"./el-card-CuVKwz2M.js";import"./el-tooltip-l0sNRNKZ.js";import"./el-popper-CKFwqsZp.js";import"./el-checkbox-BJlhBIiO.js";import"./useInput-B8ihujou.js";import"./debounce-mfTra9hX.js";import"./el-tag-CAhOIzri.js";import"./el-select-C2ZuyQeW.js";import"./el-image-viewer-ELp78_NH.js";import"./tsxHelper-Cq5JD9lB.js";import"./el-dropdown-item-BKXq8FsE.js";import"./castArray-BkLeP3z1.js";import"./refs-JNELT3Rn.js";import"./index-CG0kw4Dk.js";import"./raf-efFBxEsV.js";import"./index-DXl3uH5Z.js";const u=t({__name:"TableVideoPreview",setup(t){const{t:u}=i(),n=[{field:"title",label:u("tableDemo.title")},{field:"video_uri",label:u("tableDemo.videoPreview")},{field:"author",label:u("tableDemo.author")},{field:"display_time",label:u("tableDemo.displayTime")},{field:"pageviews",label:u("tableDemo.pageviews")}],j=a(!0);let _=a([]);return(async e=>{const t=await d(e||{pageIndex:1,pageSize:10}).catch((()=>{})).finally((()=>{j.value=!1}));t&&(_.value=t.data.list)})(),(t,i)=>(l(),r(p(e),{title:p(u)("router.PicturePreview")},{default:o((()=>[s(p(m),{columns:n,data:p(_),loading:j.value,preview:["image_uri","video_uri"]},null,8,["data","loading"])])),_:1},8,["title"]))}});export{u as default};

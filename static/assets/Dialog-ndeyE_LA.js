import{_ as e}from"./ContentWrap.vue_vue_type_script_setup_true_lang-iVEUw-M_.js";import{_ as o}from"./Dialog.vue_vue_type_style_index_0_lang-t63tDEPk.js";import{d as t,l,r as i,s as a,N as s,o as r,i as m,w as p,e as n,y as u,t as d,a as c,c as f,F as j,R as _,f as g}from"./index-lnK3vi2u.js";import{u as v,F as y}from"./useForm-nwok1LYP.js";import{u as b}from"./useValidator-BOpgtXsF.js";import{g as D}from"./index-pUxRBWlS.js";import"./el-card-Bnv5_xAI.js";import"./el-tooltip-l0sNRNKZ.js";import"./el-popper-u58bCfVz.js";import"./refs-CYfXX6dK.js";import"./el-form-BQdiY2FK.js";import"./castArray-Vw7lTMUi.js";import"./el-col-BaaUI79S.js";import"./el-tag-BuYucu0j.js";import"./el-checkbox-DZ6O993m.js";import"./index-W8_TjnTK.js";import"./el-radio-group-D9C0bcyd.js";/* empty css                          */import"./el-input-number-aqx0vtLY.js";import"./el-select-S7B-i-tn.js";import"./strings-D_ONF1MI.js";import"./useInput-C2svBfmf.js";import"./debounce-D1p90kO3.js";import"./el-virtual-list-CdgO8bCm.js";import"./raf-BAxP01Hz.js";import"./el-select-v2-D41hMSoB.js";import"./el-switch-CNhl8tfg.js";import"./el-tree-select-DWBLoOYU.js";import"./index-CKqeiIRX.js";import"./el-divider-DFBHi6tM.js";import"./el-upload-BSywfi-i.js";import"./el-progress-DqL15mAd.js";import"./InputPassword-5Z6WgmxZ.js";import"./style.css_vue_type_style_index_0_src_true_lang-BNyTRp2A.js";import"./JsonEditor.vue_vue_type_script_setup_true_lang-DXVlo_SB.js";import"./IconPicker-xNUGzups.js";import"./el-tab-pane-Ck8OoNHB.js";import"./el-pagination-B5C7bQ26.js";import"./isArrayLikeObject-CXclMpK0.js";import"./tsxHelper-Dd9KbMFH.js";import"./index-BlMFUDDZ.js";const x=t({__name:"Dialog",setup(t){const{required:x}=b(),{t:k}=l(),h=i(!1),P=i(!1),{formRegister:C,formMethods:V}=v(),{getElFormExpose:w}=V,F=a([{field:"field1",label:k("formDemo.input"),component:"Input",formItemProps:{rules:[x()]}},{field:"field2",label:k("formDemo.select"),component:"Select",optionApi:async()=>(await D()).data},{field:"field3",label:k("formDemo.radio"),component:"RadioGroup",componentProps:{options:[{label:"option-1",value:"1"},{label:"option-2",value:"2"}]}},{field:"field4",label:k("formDemo.checkbox"),component:"CheckboxGroup",value:[],componentProps:{options:[{label:"option-1",value:"1"},{label:"option-2",value:"2"}]}},{field:"field5",component:"DatePicker",label:k("formDemo.datePicker"),componentProps:{type:"date"}},{field:"field6",component:"TimeSelect",label:k("formDemo.timeSelect")}]),I=async()=>{const e=await w();null==e||e.validate((e=>{}))};return(t,l)=>{const i=s("BaseButton");return r(),m(c(e),{title:c(k)("dialogDemo.dialog"),message:c(k)("dialogDemo.dialogDes")},{default:p((()=>[n(i,{type:"primary",onClick:l[0]||(l[0]=e=>h.value=!h.value)},{default:p((()=>[u(d(c(k)("dialogDemo.open")),1)])),_:1}),n(i,{type:"primary",onClick:l[1]||(l[1]=e=>P.value=!P.value)},{default:p((()=>[u(d(c(k)("dialogDemo.combineWithForm")),1)])),_:1}),n(c(o),{modelValue:h.value,"onUpdate:modelValue":l[3]||(l[3]=e=>h.value=e),title:c(k)("dialogDemo.dialog")},{footer:p((()=>[n(i,{onClick:l[2]||(l[2]=e=>h.value=!1)},{default:p((()=>[u(d(c(k)("dialogDemo.close")),1)])),_:1})])),default:p((()=>[(r(),f(j,null,_(1e4,(e=>g("div",{key:e},d(e),1))),64))])),_:1},8,["modelValue","title"]),n(c(o),{modelValue:P.value,"onUpdate:modelValue":l[5]||(l[5]=e=>P.value=e),title:c(k)("dialogDemo.dialog")},{footer:p((()=>[n(i,{type:"primary",onClick:I},{default:p((()=>[u(d(c(k)("dialogDemo.submit")),1)])),_:1}),n(i,{onClick:l[4]||(l[4]=e=>P.value=!1)},{default:p((()=>[u(d(c(k)("dialogDemo.close")),1)])),_:1})])),default:p((()=>[n(c(y),{schema:F,onRegister:c(C)},null,8,["schema","onRegister"])])),_:1},8,["modelValue","title"])])),_:1},8,["title","message"])}}});export{x as default};
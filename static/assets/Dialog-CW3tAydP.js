import{_ as e}from"./ContentWrap.vue_vue_type_script_setup_true_lang-myE6dPy2.js";import{_ as o}from"./Dialog.vue_vue_type_style_index_0_lang-Cx7rWX1S.js";import{d as t,l,r as i,N as a,Q as s,o as r,i as m,w as p,e as n,H as u,t as d,a as c,c as j,S as f,a5 as _,f as g}from"./index-M10etHi6.js";import{u as v,F as b}from"./useForm-DrbyqcNU.js";import{u as y}from"./useValidator-Doxbt1S_.js";import{g as D}from"./index-0ismAy6g.js";import"./el-card-t9G4RzyN.js";import"./el-tooltip-l0sNRNKZ.js";import"./el-popper-D4B4f19J.js";import"./refs-DEjEOHCT.js";import"./el-form-A-pj7LuS.js";import"./castArray-D86glhSN.js";import"./el-col-CNNqU05O.js";import"./el-tag-DC4eDhDo.js";import"./el-checkbox-C3AB5jlc.js";import"./index-BEjIPMze.js";import"./el-radio-group-B0psiKnF.js";/* empty css                          */import"./el-input-number-C8zuaUtp.js";import"./el-select-CQG17R-n.js";import"./strings-DKCbZfke.js";import"./useInput-DFHJnJFD.js";import"./debounce-DMlGG38r.js";import"./el-virtual-list-D-52HN6k.js";import"./raf-ChTn_6oX.js";import"./el-select-v2-C0bSj804.js";import"./el-switch-CoMa2y0Z.js";import"./el-tree-select-kViTL7JI.js";import"./index-BS5tVDa_.js";import"./el-divider-DaZuXLuF.js";/* empty css                */import"./el-upload-Dq8-W5Dh.js";import"./el-progress-BNI1IzWh.js";import"./InputPassword--G6Fta0K.js";import"./style.css_vue_type_style_index_0_src_true_lang-Cm3FNXWd.js";import"./JsonEditor.vue_vue_type_script_setup_true_lang-BH-9VFFZ.js";import"./IconPicker-DNw0okj4.js";/* empty css                   */import"./el-tab-pane-8bwOwYDC.js";import"./el-pagination-DKV_XtBQ.js";import"./isArrayLikeObject-CmTAjD1K.js";import"./tsxHelper-Cy1d83nC.js";import"./index-MoA9wocQ.js";const x=t({__name:"Dialog",setup(t){const{required:x}=y(),{t:k}=l(),h=i(!1),P=i(!1),{formRegister:C,formMethods:V}=v(),{getElFormExpose:w}=V,I=a([{field:"field1",label:k("formDemo.input"),component:"Input",formItemProps:{rules:[x()]}},{field:"field2",label:k("formDemo.select"),component:"Select",optionApi:async()=>(await D()).data},{field:"field3",label:k("formDemo.radio"),component:"RadioGroup",componentProps:{options:[{label:"option-1",value:"1"},{label:"option-2",value:"2"}]}},{field:"field4",label:k("formDemo.checkbox"),component:"CheckboxGroup",value:[],componentProps:{options:[{label:"option-1",value:"1"},{label:"option-2",value:"2"}]}},{field:"field5",component:"DatePicker",label:k("formDemo.datePicker"),componentProps:{type:"date"}},{field:"field6",component:"TimeSelect",label:k("formDemo.timeSelect")}]),F=async()=>{const e=await w();null==e||e.validate((e=>{}))};return(t,l)=>{const i=s("BaseButton");return r(),m(c(e),{title:c(k)("dialogDemo.dialog"),message:c(k)("dialogDemo.dialogDes")},{default:p((()=>[n(i,{type:"primary",onClick:l[0]||(l[0]=e=>h.value=!h.value)},{default:p((()=>[u(d(c(k)("dialogDemo.open")),1)])),_:1}),n(i,{type:"primary",onClick:l[1]||(l[1]=e=>P.value=!P.value)},{default:p((()=>[u(d(c(k)("dialogDemo.combineWithForm")),1)])),_:1}),n(c(o),{modelValue:h.value,"onUpdate:modelValue":l[3]||(l[3]=e=>h.value=e),title:c(k)("dialogDemo.dialog")},{footer:p((()=>[n(i,{onClick:l[2]||(l[2]=e=>h.value=!1)},{default:p((()=>[u(d(c(k)("dialogDemo.close")),1)])),_:1})])),default:p((()=>[(r(),j(f,null,_(1e4,(e=>g("div",{key:e},d(e),1))),64))])),_:1},8,["modelValue","title"]),n(c(o),{modelValue:P.value,"onUpdate:modelValue":l[5]||(l[5]=e=>P.value=e),title:c(k)("dialogDemo.dialog")},{footer:p((()=>[n(i,{type:"primary",onClick:F},{default:p((()=>[u(d(c(k)("dialogDemo.submit")),1)])),_:1}),n(i,{onClick:l[4]||(l[4]=e=>P.value=!1)},{default:p((()=>[u(d(c(k)("dialogDemo.close")),1)])),_:1})])),default:p((()=>[n(c(b),{schema:I,onRegister:c(C)},null,8,["schema","onRegister"])])),_:1},8,["modelValue","title"])])),_:1},8,["title","message"])}}});export{x as default};

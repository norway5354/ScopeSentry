import{d as e,s as a,a7 as l,r as t,D as o,o as s,c as d,e as u,w as n,a as r,G as i,y as p,t as c,i as m,j as g,z as f,ae as v,F as h,R as _,l as b,L as j,f as k}from"./index-9Ou_V48r.js";import{E as x}from"./el-checkbox-CRVWojfo.js";import{E as V}from"./el-divider-CUXqkck9.js";import{a as y,E as w}from"./el-form-CpqxNcKg.js";import{a as T,E as N}from"./el-col-DTRu5f8N.js";import{E}from"./el-switch-CqSUaakd.js";import"./el-tooltip-l0sNRNKZ.js";import{E as U}from"./el-popper-DCJ36pso.js";import{a as P,E as D}from"./el-radio-group-0IxFiqwT.js";import"./el-tag-BvR59dgz.js";import"./el-virtual-list-BLUsYU7h.js";import{E as q}from"./el-select-v2-B8WUp38X.js";import{E as z}from"./el-input-number-DiyL5lBY.js";import{E as A}from"./el-text-CJcSKmBh.js";import{a as C,E as M}from"./el-select-DEYc_w9t.js";import{b as S,u as F,c as I}from"./index-Oe0a4Tox.js";import{a as R}from"./index-BoGybVa9.js";import{_ as G}from"./Dialog.vue_vue_type_style_index_0_lang-CrCAQL3c.js";import{f as L}from"./index-DxJQ4srn.js";import B from"./DetailTemplate-DMYaHlNB.js";const H={key:0},J={style:{float:"left"}},K=e({__name:"AddProject",props:{closeDialog:{type:Function},projectid:{},getProjectData:{type:Function},schedule:{type:Boolean}},setup(e){const{t:K}=b();let O=a({name:"",tag:"",logo:"",target:"",ignore:"",scheduledTasks:!1,hour:24,node:[],allNode:!1,duplicates:"None",template:""});const Q=e,W=l((()=>{const e={name:[{required:!0,message:K("project.msgProject"),trigger:"blur"}],tag:[{required:!0,message:K("project.msgProjectTag"),trigger:"blur"}],target:[{required:!0,message:K("project.msgProjectScope"),trigger:"blur"}],node:[{required:!1,message:K("task.nodeMsg"),trigger:"blur"}],template:[{required:!0,message:"Please select template",trigger:"blur"}]};return O.scheduledTasks&&(e.node=[{required:!0,message:K("task.nodeMsg"),trigger:"blur"}]),e})),X=t(!1),Y=t(),Z=t(!1),$=t(!1),ee=t(!1),ae=t(!1),le=a([]),te=e=>{ee.value=!1,e?(O.node=[],le.forEach((e=>O.node.push(e.value)))):O.node=[]},oe=a([]),se=async()=>{oe.length=0;const e=await L("",1,1e3);e.data.list.length>0&&e.data.list.forEach((e=>{oe.push({value:e.id,label:e.name})}))};o((()=>{(async()=>{if(""!=Q.projectid){$.value=!0;const e=await I(Q.projectid);O.name=e.data.name,O.tag=e.data.tag,O.target=e.data.target,O.logo=e.data.logo,O.scheduledTasks=e.data.scheduledTasks,O.hour=e.data.hour,O.allNode=e.data.allNode,O.node=e.data.node,O.duplicates=e.data.duplicates,O.ignore=e.data.ignore,O.template=e.data.template,$.value=!1}})(),(async()=>{const e=await R();e.data.list.length>0?(ae.value=!1,e.data.list.forEach((e=>{le.push({value:e,label:e})}))):(ae.value=!0,j.warning(K("node.onlineNodeMsg")))})(),se()}));const de=t("");let ue="";const ne=t(!1),re=async e=>{de.value=e,""!=e&&(ue=K("task.editTemplate")),ne.value=!0},ie=()=>{ne.value=!1};return(e,a)=>(s(),d(h,null,[u(r(w),{model:r(O),"label-width":"auto",rules:W.value,"status-icon":"",ref_key:"ruleFormRef",ref:Y,loading:$.value},{default:n((()=>[u(r(y),{label:r(K)("project.projectName"),prop:"name"},{default:n((()=>[u(r(i),{modelValue:r(O).name,"onUpdate:modelValue":a[0]||(a[0]=e=>r(O).name=e),placeholder:r(K)("project.msgProject")},null,8,["modelValue","placeholder"])])),_:1},8,["label"]),u(r(y),{label:"TAG",prop:"tag"},{default:n((()=>[u(r(i),{modelValue:r(O).tag,"onUpdate:modelValue":a[1]||(a[1]=e=>r(O).tag=e),placeholder:r(K)("project.msgProjectTag")},null,8,["modelValue","placeholder"])])),_:1}),u(r(y),{label:r(K)("project.projectScope"),prop:"target"},{default:n((()=>[u(r(i),{modelValue:r(O).target,"onUpdate:modelValue":a[2]||(a[2]=e=>r(O).target=e),placeholder:r(K)("task.msgTarget"),type:"textarea",autosize:{minRows:6,maxRows:15}},null,8,["modelValue","placeholder"])])),_:1},8,["label"]),u(r(y),{label:r(K)("task.ignore"),prop:"ignore"},{default:n((()=>[u(r(i),{modelValue:r(O).ignore,"onUpdate:modelValue":a[3]||(a[3]=e=>r(O).ignore=e),placeholder:r(K)("task.ignoreMsg"),type:"textarea",rows:"10"},null,8,["modelValue","placeholder"])])),_:1},8,["label"]),u(r(y),{label:"Logo",prop:"logo"},{default:n((()=>[u(r(i),{modelValue:r(O).logo,"onUpdate:modelValue":a[4]||(a[4]=e=>r(O).logo=e),placeholder:"http(s)://xxxxx.xx"},null,8,["modelValue"])])),_:1}),u(r(V),{"content-position":"center",style:{}},{default:n((()=>[p(c(r(K)("project.scheduledTasks")),1)])),_:1}),u(r(T),null,{default:n((()=>[u(r(N),{span:6},{default:n((()=>[u(r(y),{label:r(K)("project.scheduledTasks")},{default:n((()=>[u(r(U),{effect:"dark",content:r(K)("project.msgScheduledTasks"),placement:"top"},{default:n((()=>[u(r(E),{modelValue:r(O).scheduledTasks,"onUpdate:modelValue":a[5]||(a[5]=e=>r(O).scheduledTasks=e),"inline-prompt":"","active-text":r(K)("common.switchAction"),"inactive-text":r(K)("common.switchInactive")},null,8,["modelValue","active-text","inactive-text"])])),_:1},8,["content"])])),_:1},8,["label"])])),_:1}),r(O).scheduledTasks?(s(),m(r(N),{key:0,span:12},{default:n((()=>[u(r(y),{label:r(K)("project.cycle"),prop:"type"},{default:n((()=>[u(r(z),{modelValue:r(O).hour,"onUpdate:modelValue":a[6]||(a[6]=e=>r(O).hour=e),min:1,"controls-position":"right",size:"small"},null,8,["modelValue"]),u(r(A),{style:{position:"relative",left:"16px"}},{default:n((()=>[p("Hour")])),_:1})])),_:1},8,["label"])])),_:1})):g("",!0)])),_:1}),u(r(T),null,{default:n((()=>[u(r(N),null,{default:n((()=>[u(r(y),{label:r(K)("configuration.runNowOne")},{default:n((()=>[u(r(E),{modelValue:Z.value,"onUpdate:modelValue":a[7]||(a[7]=e=>Z.value=e),"inline-prompt":"","active-text":r(K)("common.switchAction"),"inactive-text":r(K)("common.switchInactive")},null,8,["modelValue","active-text","inactive-text"])])),_:1},8,["label"])])),_:1})])),_:1}),r(O).scheduledTasks||Z.value?(s(),d("div",H,[u(r(T),null,{default:n((()=>[u(r(N),{span:12},{default:n((()=>[u(r(y),{label:r(K)("task.nodeSelect"),prop:"node"},{default:n((()=>[u(r(q),{modelValue:r(O).node,"onUpdate:modelValue":a[8]||(a[8]=e=>r(O).node=e),filterable:"",options:le,placeholder:"Please select node",style:{width:"80%"},multiple:"","tag-type":"success","collapse-tags":"","collapse-tags-tooltip":"","max-collapse-tags":7},{header:n((()=>[u(r(x),{disabled:ae.value,indeterminate:ee.value,onChange:te},{default:n((()=>[p(" All ")])),_:1},8,["disabled","indeterminate"])])),_:1},8,["modelValue","options"])])),_:1},8,["label"])])),_:1}),u(r(N),{span:12},{default:n((()=>[u(r(y),{label:r(K)("task.autoNode")},{default:n((()=>[u(r(U),{effect:"dark",content:r(K)("task.selectNodeMsg"),placement:"top"},{default:n((()=>[u(r(E),{modelValue:r(O).allNode,"onUpdate:modelValue":a[9]||(a[9]=e=>r(O).allNode=e),"inline-prompt":"","active-text":r(K)("common.switchAction"),"inactive-text":r(K)("common.switchInactive")},null,8,["modelValue","active-text","inactive-text"])])),_:1},8,["content"])])),_:1},8,["label"])])),_:1})])),_:1}),u(r(V),{"content-position":"center",style:{width:"60%",left:"20%"}},{default:n((()=>[p(c(r(K)("task.duplicates")),1)])),_:1}),u(r(T),null,{default:n((()=>[u(r(N),{span:24},{default:n((()=>[u(r(y),{label:r(K)("task.duplicates"),prop:"type"},{default:n((()=>[u(r(P),{modelValue:r(O).duplicates,"onUpdate:modelValue":a[10]||(a[10]=e=>r(O).duplicates=e)},{default:n((()=>[u(r(D),{label:"None",name:"duplicates",checked:!0,value:"None"}),u(r(U),{effect:"dark",content:r(K)("task.duplicatesMsg"),placement:"top"},{default:n((()=>[u(r(D),{label:r(K)("task.duplicatesSubdomain"),name:"duplicates",value:"subdomain"},null,8,["label"])])),_:1},8,["content"])])),_:1},8,["modelValue"])])),_:1},8,["label"])])),_:1})])),_:1}),u(r(V),{"content-position":"center",style:{width:"60%",left:"20%"}},{default:n((()=>[p(c(r(K)("router.scanTemplate")),1)])),_:1}),u(r(y),{label:r(K)("router.scanTemplate"),prop:"template"},{default:n((()=>[u(r(C),{modelValue:r(O).template,"onUpdate:modelValue":a[12]||(a[12]=e=>r(O).template=e),placeholder:"Please select template",style:{width:"30%"}},{footer:n((()=>[u(r(f),{type:"success",size:"small",plain:"",style:{"margin-left":"15px"},onClick:a[11]||(a[11]=v((e=>re("")),["stop"]))},{default:n((()=>[p(c(r(K)("common.new")),1)])),_:1})])),default:n((()=>[(s(!0),d(h,null,_(oe,(e=>(s(),m(r(M),{key:e.value,label:e.label,value:e.value},{default:n((()=>[u(r(T),null,{default:n((()=>[u(r(N),{span:16},{default:n((()=>[k("span",J,c(e.label),1)])),_:2},1024),u(r(N),{span:8},{default:n((()=>[u(r(f),{type:"primary",size:"small",style:{"margin-left":"15px"},onClick:v((a=>re(e.value)),["stop"])},{default:n((()=>[p(c(r(K)("common.edit")),1)])),_:2},1032,["onClick"])])),_:2},1024)])),_:2},1024)])),_:2},1032,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1},8,["label"])])):g("",!0),u(r(V)),u(r(T),null,{default:n((()=>[u(r(N),{span:2,offset:12},{default:n((()=>[u(r(y),null,{default:n((()=>[u(r(f),{type:"primary",onClick:a[13]||(a[13]=e=>(async e=>{X.value=!0,e&&(await e.validate((async(e,a)=>{e?""==Q.projectid?(200===(await S(Z.value,O.name,O.tag,O.target,O.logo,O.scheduledTasks,O.hour,O.allNode,O.node,O.duplicates,O.ignore,O.template)).code&&Q.closeDialog(),X.value=!1):(200===(await F(Z.value,Q.projectid,O.name,O.tag,O.target,O.logo,O.scheduledTasks,O.hour,O.allNode,O.node,O.duplicates,O.ignore,O.template)).code&&Q.closeDialog(),X.value=!1):X.value=!1})),Q.getProjectData(1,50))})(Y.value)),loading:X.value},{default:n((()=>[p(c(r(K)("task.save")),1)])),_:1},8,["loading"])])),_:1})])),_:1})])),_:1})])),_:1},8,["model","rules","loading"]),u(r(G),{modelValue:ne.value,"onUpdate:modelValue":a[14]||(a[14]=e=>ne.value=e),title:r(ue),center:"",fullscreen:"",style:{"border-radius":"15px","box-shadow":"5px 5px 10px rgba(0, 0, 0, 0.3)"}},{default:n((()=>[u(B,{closeDialog:ie,getList:se,id:de.value},null,8,["id"])])),_:1},8,["modelValue","title"])],64))}});export{K as _};

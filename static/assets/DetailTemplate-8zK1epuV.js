import{s as e,ab as a,ac as t,x as l,r as n,aU as o,a2 as d,aq as s,B as i,aW as c,b9 as r,bs as u,d as h,aj as p,A as f,O as v,ct as y,o as k,c as m,f as g,a as b,i as C,w as x,G as N,n as E,an as K,D as S,j as w,e as F,F as _,L as j,bj as B,ai as D,br as L,z as A,t as H,M,N as P,R as V,S as I,a5 as T,I as O,H as U,l as z,a0 as R,_ as W}from"./index-M10etHi6.js";import"./el-tooltip-l0sNRNKZ.js";import{E as $}from"./el-popper-D4B4f19J.js";import{E as q}from"./el-tag-DC4eDhDo.js";import{E as G}from"./el-card-t9G4RzyN.js";import{E as Y}from"./el-switch-CoMa2y0Z.js";import{a as J,E as Q}from"./el-form-A-pj7LuS.js";import{a as X,E as Z}from"./el-col-CNNqU05O.js";import"./el-virtual-list-D-52HN6k.js";import{F as ee,E as ae}from"./el-select-v2-C0bSj804.js";/* empty css                */import{E as te}from"./el-checkbox-C3AB5jlc.js";import{_ as le}from"./Dialog.vue_vue_type_style_index_0_lang-Cx7rWX1S.js";import{f as ne}from"./index-CE6JPvTK.js";import{e as oe}from"./index-CecUnJ7w.js";import{m as de,n as se}from"./index-CFqx989n.js";import"./castArray-D86glhSN.js";import"./raf-ChTn_6oX.js";import"./useInput-DFHJnJFD.js";import"./index-BEjIPMze.js";import"./debounce-DMlGG38r.js";import"./strings-DKCbZfke.js";import"./refs-DEjEOHCT.js";import"./index-MoA9wocQ.js";const ie=Symbol(),ce={key:-1,level:-1,data:{}};var re=(e=>(e.KEY="id",e.LABEL="label",e.CHILDREN="children",e.DISABLED="disabled",e))(re||{}),ue=(e=>(e.ADD="add",e.DELETE="delete",e))(ue||{});const he={type:Number,default:26},pe=e({data:{type:a(Array),default:()=>t([])},emptyText:{type:String},height:{type:Number,default:200},props:{type:a(Object),default:()=>t({children:"children",label:"label",disabled:"disabled",value:"id"})},highlightCurrent:{type:Boolean,default:!1},showCheckbox:{type:Boolean,default:!1},defaultCheckedKeys:{type:a(Array),default:()=>t([])},checkStrictly:{type:Boolean,default:!1},defaultExpandedKeys:{type:a(Array),default:()=>t([])},indent:{type:Number,default:16},itemSize:he,icon:{type:l},expandOnClickNode:{type:Boolean,default:!0},checkOnClickNode:{type:Boolean,default:!1},currentNodeKey:{type:a([String,Number])},accordion:{type:Boolean,default:!1},filterMethod:{type:a(Function)},perfMode:{type:Boolean,default:!0}}),fe=e({node:{type:a(Object),default:()=>t(ce)},expanded:{type:Boolean,default:!1},checked:{type:Boolean,default:!1},indeterminate:{type:Boolean,default:!1},showCheckbox:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},current:{type:Boolean,default:!1},hiddenExpandIcon:{type:Boolean,default:!1},itemSize:he}),ve=e({node:{type:a(Object),required:!0}}),ye="node-click",ke="node-expand",me="node-collapse",ge="current-change",be="check",Ce="check-change",xe="node-contextmenu",Ne={[ye]:(e,a,t)=>e&&a&&t,[ke]:(e,a)=>e&&a,[me]:(e,a)=>e&&a,[ge]:(e,a)=>e&&a,[be]:(e,a)=>e&&a,[Ce]:(e,a)=>e&&"boolean"==typeof a,[xe]:(e,a,t)=>e&&a&&t};function Ee(e,a){const t=n(new Set(e.defaultExpandedKeys)),l=n(),h=r();d((()=>e.currentNodeKey),(e=>{l.value=e}),{immediate:!0}),d((()=>e.data),(e=>{I(e)}),{immediate:!0});const{isIndeterminate:p,isChecked:f,toggleCheckbox:v,getCheckedKeys:y,getCheckedNodes:k,getHalfCheckedKeys:m,getHalfCheckedNodes:g,setChecked:b,setCheckedKeys:C}=function(e,a){const t=n(new Set),l=n(new Set),{emit:i}=o();d([()=>a.value,()=>e.defaultCheckedKeys],(()=>s((()=>{v(e.defaultCheckedKeys)}))),{immediate:!0});const c=()=>{if(!a.value||!e.showCheckbox||e.checkStrictly)return;const{levelTreeNodeMap:n,maxLevel:o}=a.value,d=t.value,s=new Set;for(let e=o-1;e>=1;--e){const a=n.get(e);a&&a.forEach((e=>{const a=e.children;if(a){let t=!0,l=!1;for(const e of a){const a=e.key;if(d.has(a))l=!0;else{if(s.has(a)){t=!1,l=!0;break}t=!1}}t?d.add(e.key):l?(s.add(e.key),d.delete(e.key)):(d.delete(e.key),s.delete(e.key))}}))}l.value=s},r=e=>t.value.has(e.key),u=(a,l,n=!0)=>{const o=t.value,d=(a,t)=>{o[t?ue.ADD:ue.DELETE](a.key);const l=a.children;!e.checkStrictly&&l&&l.forEach((e=>{e.disabled||d(e,t)}))};d(a,l),c(),n&&h(a,l)},h=(e,a)=>{const{checkedNodes:t,checkedKeys:l}=p(),{halfCheckedNodes:n,halfCheckedKeys:o}=f();i(be,e.data,{checkedKeys:l,checkedNodes:t,halfCheckedKeys:o,halfCheckedNodes:n}),i(Ce,e.data,a)};function p(l=!1){const n=[],o=[];if((null==a?void 0:a.value)&&e.showCheckbox){const{treeNodeMap:e}=a.value;t.value.forEach((a=>{const t=e.get(a);t&&(!l||l&&t.isLeaf)&&(o.push(a),n.push(t.data))}))}return{checkedKeys:o,checkedNodes:n}}function f(){const t=[],n=[];if((null==a?void 0:a.value)&&e.showCheckbox){const{treeNodeMap:e}=a.value;l.value.forEach((a=>{const l=e.get(a);l&&(n.push(a),t.push(l.data))}))}return{halfCheckedNodes:t,halfCheckedKeys:n}}function v(t){if(null==a?void 0:a.value){const{treeNodeMap:l}=a.value;if(e.showCheckbox&&l&&t)for(const e of t){const a=l.get(e);a&&!r(a)&&u(a,!0,!1)}}}return{updateCheckedKeys:c,toggleCheckbox:u,isChecked:r,isIndeterminate:e=>l.value.has(e.key),getCheckedKeys:function(e=!1){return p(e).checkedKeys},getCheckedNodes:function(e=!1){return p(e).checkedNodes},getHalfCheckedKeys:function(){return f().halfCheckedKeys},getHalfCheckedNodes:function(){return f().halfCheckedNodes},setChecked:function(t,l){if((null==a?void 0:a.value)&&e.showCheckbox){const e=a.value.treeNodeMap.get(t);e&&u(e,l,!1)}},setCheckedKeys:function(e){t.value.clear(),l.value.clear(),s((()=>{v(e)}))}}}(e,h),{doFilter:x,hiddenNodeKeySet:N,isForceHiddenExpandIcon:E}=function(e,a){const t=n(new Set([])),l=n(new Set([])),o=i((()=>c(e.filterMethod)));return{hiddenExpandIconKeySet:l,hiddenNodeKeySet:t,doFilter:function(n){var d;if(!o.value)return;const s=new Set,i=l.value,c=t.value,r=[],u=(null==(d=a.value)?void 0:d.treeNodes)||[],h=e.filterMethod;return c.clear(),function e(a){a.forEach((a=>{r.push(a),(null==h?void 0:h(n,a.data))?r.forEach((e=>{s.add(e.key)})):a.isLeaf&&c.add(a.key);const t=a.children;if(t&&e(t),!a.isLeaf)if(s.has(a.key)){if(t){let e=!0;for(const a of t)if(!c.has(a.key)){e=!1;break}e?i.add(a.key):i.delete(a.key)}}else c.add(a.key);r.pop()}))}(u),s},isForceHiddenExpandIcon:function(e){return l.value.has(e.key)}}}(e,h),K=i((()=>{var a;return(null==(a=e.props)?void 0:a.value)||re.KEY})),S=i((()=>{var a;return(null==(a=e.props)?void 0:a.children)||re.CHILDREN})),w=i((()=>{var a;return(null==(a=e.props)?void 0:a.disabled)||re.DISABLED})),F=i((()=>{var a;return(null==(a=e.props)?void 0:a.label)||re.LABEL})),_=i((()=>{const e=t.value,a=N.value,l=[],n=h.value&&h.value.treeNodes||[];return function(){const t=[];for(let e=n.length-1;e>=0;--e)t.push(n[e]);for(;t.length;){const n=t.pop();if(n&&(a.has(n.key)||l.push(n),e.has(n.key))){const e=n.children;if(e){for(let a=e.length-1;a>=0;--a)t.push(e[a])}}}}(),l})),j=i((()=>_.value.length>0));function B(e){return e[S.value]}function D(e){return e?e[K.value]:""}function L(e){return e[w.value]}function A(e){return e[F.value]}function H(e){t.value.has(e.key)?P(e):M(e)}function M(l){const n=t.value;if(h.value&&e.accordion){const{treeNodeMap:e}=h.value;n.forEach((a=>{const t=e.get(a);l&&l.level===(null==t?void 0:t.level)&&n.delete(a)}))}n.add(l.key),a(ke,l.data,l)}function P(e){t.value.delete(e.key),a(me,e.data,e)}function V(e){const a=l.value;return void 0!==a&&a===e.key}function I(e){s((()=>h.value=function(e){const a=new Map,t=new Map;let l=1;const n=function e(n,o=1,d){var s;const i=[];for(const l of n){const n=D(l),c={level:o,key:n,data:l};c.label=A(l),c.parent=d;const r=B(l);c.disabled=L(l),c.isLeaf=!r||0===r.length,r&&r.length&&(c.children=e(r,o+1,c)),i.push(c),a.set(n,c),t.has(o)||t.set(o,[]),null==(s=t.get(o))||s.push(c)}return o>l&&(l=o),i}(e);return{treeNodeMap:a,levelTreeNodeMap:t,maxLevel:l,treeNodes:n}}(e)))}return{tree:h,flattenTree:_,isNotEmpty:j,getKey:D,getChildren:B,toggleExpand:H,toggleCheckbox:v,isExpanded:function(e){return t.value.has(e.key)},isChecked:f,isIndeterminate:p,isDisabled:function(e){return!!e.disabled},isCurrent:V,isForceHiddenExpandIcon:E,handleNodeClick:function(t,n){a(ye,t.data,t,n),function(e){V(e)||(l.value=e.key,a(ge,e.data,e))}(t),e.expandOnClickNode&&H(t),e.showCheckbox&&e.checkOnClickNode&&!t.disabled&&v(t,!f(t),!0)},handleNodeCheck:function(e,a){v(e,a)},getCurrentNode:function(){var e,a;if(l.value)return null==(a=null==(e=h.value)?void 0:e.treeNodeMap.get(l.value))?void 0:a.data},getCurrentKey:function(){return l.value},setCurrentKey:function(e){l.value=e},getCheckedKeys:y,getCheckedNodes:k,getHalfCheckedKeys:m,getHalfCheckedNodes:g,setChecked:b,setCheckedKeys:C,filter:function(e){const a=x(e);a&&(t.value=a)},setData:I,getNode:function(e){var a;const t=u(e)?D(e):e;return null==(a=h.value)?void 0:a.treeNodeMap.get(t)},expandNode:M,collapseNode:P,setExpandedKeys:function(e){t.value=new Set(e)}}}var Ke=h({name:"ElTreeNodeContent",props:ve,setup(e){const a=p(ie),t=f("tree");return()=>{const l=e.node,{data:n}=l;return(null==a?void 0:a.ctx.slots.default)?a.ctx.slots.default({node:l,data:n}):v("span",{class:t.be("node","label")},[null==l?void 0:l.label])}}});const Se=["aria-expanded","aria-disabled","aria-checked","data-key","onClick"],we=h({name:"ElTreeNode"});var Fe=j(h({...we,props:fe,emits:{click:(e,a)=>!(!e||!a),toggle:e=>!!e,check:(e,a)=>e&&"boolean"==typeof a},setup(e,{emit:a}){const t=e,l=p(ie),n=f("tree"),o=i((()=>{var e;return null!=(e=null==l?void 0:l.props.indent)?e:16})),d=i((()=>{var e;return null!=(e=null==l?void 0:l.props.icon)?e:y})),s=e=>{a("click",t.node,e)},c=()=>{a("toggle",t.node)},r=e=>{a("check",t.node,e)},u=e=>{var a,n,o,d;(null==(o=null==(n=null==(a=null==l?void 0:l.instance)?void 0:a.vnode)?void 0:n.props)?void 0:o.onNodeContextmenu)&&(e.stopPropagation(),e.preventDefault()),null==l||l.ctx.emit(xe,e,null==(d=t.node)?void 0:d.data,t.node)};return(e,a)=>{var t,l,i;return k(),m("div",{ref:"node$",class:E([b(n).b("node"),b(n).is("expanded",e.expanded),b(n).is("current",e.current),b(n).is("focusable",!e.disabled),b(n).is("checked",!e.disabled&&e.checked)]),role:"treeitem",tabindex:"-1","aria-expanded":e.expanded,"aria-disabled":e.disabled,"aria-checked":e.checked,"data-key":null==(t=e.node)?void 0:t.key,onClick:K(s,["stop"]),onContextmenu:u},[g("div",{class:E(b(n).be("node","content")),style:_({paddingLeft:(e.node.level-1)*b(o)+"px",height:e.itemSize+"px"})},[b(d)?(k(),C(b(S),{key:0,class:E([b(n).is("leaf",!!(null==(l=e.node)?void 0:l.isLeaf)),b(n).is("hidden",e.hiddenExpandIcon),{expanded:!(null==(i=e.node)?void 0:i.isLeaf)&&e.expanded},b(n).be("node","expand-icon")]),onClick:K(c,["stop"])},{default:x((()=>[(k(),C(N(b(d))))])),_:1},8,["class","onClick"])):w("v-if",!0),e.showCheckbox?(k(),C(b(te),{key:1,"model-value":e.checked,indeterminate:e.indeterminate,disabled:e.disabled,onChange:r,onClick:a[0]||(a[0]=K((()=>{}),["stop"]))},null,8,["model-value","indeterminate","disabled"])):w("v-if",!0),F(b(Ke),{node:e.node},null,8,["node"])],6)],42,Se)}}}),[["__file","tree-node.vue"]]);const _e=h({name:"ElTreeV2"});const je=M(j(h({..._e,props:pe,emits:Ne,setup(e,{expose:a,emit:t}){const l=e,n=B(),d=i((()=>l.itemSize));D(ie,{ctx:{emit:t,slots:n},props:l,instance:o()}),D(L,void 0);const{t:s}=A(),c=f("tree"),{flattenTree:r,isNotEmpty:u,toggleExpand:h,isExpanded:p,isIndeterminate:v,isChecked:y,isDisabled:N,isCurrent:K,isForceHiddenExpandIcon:S,handleNodeClick:w,handleNodeCheck:F,toggleCheckbox:j,getCurrentNode:M,getCurrentKey:P,setCurrentKey:V,getCheckedKeys:I,getCheckedNodes:T,getHalfCheckedKeys:O,getHalfCheckedNodes:U,setChecked:z,setCheckedKeys:R,filter:W,setData:$,getNode:q,expandNode:G,collapseNode:Y,setExpandedKeys:J}=Ee(l,t);return a({toggleCheckbox:j,getCurrentNode:M,getCurrentKey:P,setCurrentKey:V,getCheckedKeys:I,getCheckedNodes:T,getHalfCheckedKeys:O,getHalfCheckedNodes:U,setChecked:z,setCheckedKeys:R,filter:W,setData:$,getNode:q,expandNode:G,collapseNode:Y,setExpandedKeys:J}),(e,a)=>{var t;return k(),m("div",{class:E([b(c).b(),{[b(c).m("highlight-current")]:e.highlightCurrent}]),role:"tree"},[b(u)?(k(),C(b(ee),{key:0,"class-name":b(c).b("virtual-list"),data:b(r),total:b(r).length,height:e.height,"item-size":b(d),"perf-mode":e.perfMode},{default:x((({data:a,index:t,style:l})=>[(k(),C(Fe,{key:a[t].key,style:_(l),node:a[t],expanded:b(p)(a[t]),"show-checkbox":e.showCheckbox,checked:b(y)(a[t]),indeterminate:b(v)(a[t]),"item-size":b(d),disabled:b(N)(a[t]),current:b(K)(a[t]),"hidden-expand-icon":b(S)(a[t]),onClick:b(w),onToggle:b(h),onCheck:b(F)},null,8,["style","node","expanded","show-checkbox","checked","indeterminate","item-size","disabled","current","hidden-expand-icon","onClick","onToggle","onCheck"]))])),_:1},8,["class-name","data","total","height","item-size","perf-mode"])):(k(),m("div",{key:1,class:E(b(c).e("empty-block"))},[g("span",{class:E(b(c).e("empty-text"))},H(null!=(t=e.emptyText)?t:b(s)("el.tree.emptyText")),3)],2))],2)}}}),[["__file","tree.vue"]])),Be={style:{display:"flex","justify-content":"space-between","align-items":"center"}},De=W(h({__name:"DetailTemplate",props:{closeDialog:{type:Function},getList:{type:Function},id:{}},setup(e){const{t:a}=z(),t=e,l=["TargetHandler","SubdomainScan","SubdomainSecurity","PortScanPreparation","PortScan","PortFingerprint","AssetMapping","AssetHandle","URLScan","WebCrawler","URLSecurity","DirScan","VulnerabilityScan"],o=P({}),i=P({}),c=P({}),r=n([]);d((()=>t.id),(async e=>{e?await(async e=>{var a;const t=await se(e);f.value=t.data.name,r.value=t.data.vullist;for(const n of l){i[n]={};const e=(null==(a=t.data)?void 0:a[n])||[],l=await ne(n);o[n]=l.data.list.map((a=>({...a,enabled:e.includes(a.hash)||!1}))),i[n]=t.data.Parameters[n]||{}}})(e):await(async()=>{for(const e of l){const a=await ne(e);i[e]={},c[e]=[],o[e]=a.data.list.map((a=>(i[e][a.hash]=a.parameter||"",{...a,enabled:!1})))}})()}),{immediate:!0});const u=n(!1),h=async()=>{u.value=!0;const e={};if(""==f.value)return R.error("name 不能为空"),void(u.value=!1);for(const a of l){const t=o[a].filter((e=>e.enabled));e[a]=t.map((e=>e.hash)),e.Parameters=e.Parameters||{},e.Parameters[a]={};for(const l of o[a])i[a][l.hash]&&(e.Parameters[a][l.hash]=i[a][l.hash])}e.name=f.value,e.vullist=r.value,await de(e,t.id),R.success("提交成功"),u.value=!1,t.closeDialog(),t.getList()},p={TargetHandler:"#2243dda6",SubdomainScan:"#FF9B85",SubdomainSecurity:"#FFFFBA",PortScanPreparation:"#BAFFB3",PortScan:"#BAE1FF",AssetMapping:"#e3ffba",URLScan:"#D1BAFF",WebCrawler:"#FFABAB",DirScan:"#3ccde6",VulnerabilityScan:"#FF677D",AssetHandle:"#B2E1FF",PortFingerprint:"#ffb5e4",URLSecurity:"#FFE4BA"},f=n(""),v=P([]),y=P([]);(async()=>{const e=await oe();e.data.list.length>0&&(y.push({value:"All Poc",label:"All Poc"}),e.data.list.forEach((e=>{y.push({value:e.id,label:e.name})}))),v.push({value:"All Poc",label:"All Poc",children:[]});const a=(e=>{const a=[];return e.forEach((e=>{let t=a;e.tags.forEach((e=>{const a=t.find((a=>a.label===e));if(a)t=a.children;else{const a={value:Math.random().toString(36).substring(2,8),label:e,children:[]};t.push(a),t=a.children}})),t.push({value:e.id,label:e.name,children:[]})})),a})(e.data.list);v.push(...a)})();const N=n(!1),E=async()=>{N.value=!0};d(N,(e=>{e&&s((()=>{S.value&&j(r.value)}))}));const S=n(null),j=e=>{s((()=>{const a=S.value;a&&a.setCheckedKeys(e)}))},B={value:"value",label:"label",children:"children"},D=(e,a)=>{const t=e.value;if(!e.children||0===e.children.length){if(a&&!r.value.includes(t))r.value.push(t);else if(!a){const e=r.value.indexOf(t);e>-1&&r.value.splice(e,1)}}else{const t=e=>{e.children&&e.children.length>0&&e.children.forEach((e=>{if(!e.children||0===e.children.length){if(a&&!r.value.includes(e.value))r.value.push(e.value);else if(!a){const a=r.value.indexOf(e.value);a>-1&&r.value.splice(a,1)}}else t(e)}))};t(e)}};return(e,t)=>(k(),m(I,null,[F(b(Q),{onSubmit:K(h,["prevent"]),"label-width":"auto"},{default:x((()=>[F(b(J),{label:b(a)("task.templateName")},{default:x((()=>[F(b(V),{modelValue:f.value,"onUpdate:modelValue":t[0]||(t[0]=e=>f.value=e)},null,8,["modelValue"])])),_:1},8,["label"]),(k(),m(I,null,T(l,(e=>g("div",{key:e},[F(b(G),{class:"module-card","body-style":{padding:"20px"},shadow:"always"},{default:x((()=>[g("div",Be,[F(b(q),{style:_({backgroundColor:p[e],color:"#000"})},{default:x((()=>[U(H(b(a)(`scanTemplate.${e}`)),1)])),_:2},1032,["style"])]),(k(!0),m(I,null,T(o[e],(l=>(k(),m("div",{key:l.hash},[F(b(J),{label:l.name},{default:x((()=>[F(b($),{placement:"top",effect:"light",content:l.introduction},{default:x((()=>[F(b(Y),{modelValue:l.enabled,"onUpdate:modelValue":e=>l.enabled=e},null,8,["modelValue","onUpdate:modelValue"])])),_:2},1032,["content"])])),_:2},1032,["label"]),l.enabled&&"ed93b8af6b72fe54a60efdb932cf6fbc"===l.hash?(k(),C(b(J),{key:0,label:b(a)("task.vulList"),prop:"type"},{default:x((()=>[F(b(ae),{modelValue:r.value,"onUpdate:modelValue":t[1]||(t[1]=e=>r.value=e),filterable:"",options:v,placeholder:"Please select vul",style:{width:"80%","margin-right":"10px"},multiple:"","collapse-tags":"","collapse-tags-tooltip":"","tag-type":"info","max-collapse-tags":3},null,8,["modelValue","options"]),F(b(O),{type:"primary",onClick:E,loading:u.value},{default:x((()=>[U(H(b(a)("common.selectCategory")),1)])),_:1},8,["loading"])])),_:1},8,["label"])):w("",!0),l.enabled?(k(),C(b(J),{key:1,label:b(a)("plugin.parameter")},{default:x((()=>[F(b($),{placement:"top",effect:"light",content:l.help,"trigger-keys":[]},{default:x((()=>[F(b(V),{modelValue:i[e][l.hash],"onUpdate:modelValue":a=>i[e][l.hash]=a},null,8,["modelValue","onUpdate:modelValue"])])),_:2},1032,["content"])])),_:2},1032,["label"])):w("",!0)])))),128))])),_:2},1024)]))),64)),F(b(X),null,{default:x((()=>[F(b(Z),{span:12,style:{"text-align":"right"}},{default:x((()=>[F(b(O),{type:"primary",onClick:h,loading:u.value},{default:x((()=>[U(" 保存 ")])),_:1},8,["loading"])])),_:1})])),_:1})])),_:1}),F(b(le),{modelValue:N.value,"onUpdate:modelValue":t[2]||(t[2]=e=>N.value=e),title:"POC",center:"",fullscreen:"",style:{"border-radius":"15px","box-shadow":"5px 5px 10px rgba(0, 0, 0, 0.3)"}},{default:x((()=>[F(b(je),{ref_key:"treeRef",ref:S,style:{"max-width":"100%"},data:v,props:B,"show-checkbox":"",height:600,onCheckChange:D},null,8,["data"])])),_:1},8,["modelValue"])],64))}}),[["__scopeId","data-v-d09e345b"]]);export{De as default};

import{c9 as e,Y as r,ca as t,Z as n,a4 as a,a3 as i,a$ as s,r as l,a7 as u,d as o,aF as f,a6 as d,O as c,aC as p,a5 as v,s as g,bv as h,bo as y,o as m,c as b,a8 as w,n as q,a as F,a9 as O,aS as x,aa as j,bp as A,bu as E,D as P,x as S,cb as k,b1 as R,e as $,F as _,ai as I,bg as W,aR as B,cc as M,b6 as V,cd as z,w as C,i as D,aI as N,aH as T,y as L,t as Z,j as J,f as Y,T as G,ag as H,ah as U}from"./index-9Ou_V48r.js";import{c as K}from"./castArray-BOf1uH-9.js";function Q(r){return e(r,4)}const X=r({size:{type:String,values:t},disabled:Boolean}),ee=r({...X,model:Object,rules:{type:n(Object)},labelPosition:{type:String,values:["left","right","top"],default:"right"},requireAsteriskPosition:{type:String,values:["left","right"],default:"left"},labelWidth:{type:[String,Number],default:""},labelSuffix:{type:String,default:""},inline:Boolean,inlineMessage:Boolean,statusIcon:Boolean,showMessage:{type:Boolean,default:!0},validateOnRuleChange:{type:Boolean,default:!0},hideRequiredAsterisk:Boolean,scrollToError:Boolean,scrollIntoViewOptions:{type:[Object,Boolean]}}),re={validate:(e,r,t)=>(a(e)||i(e))&&s(r)&&i(t)};function te(){const e=l([]),r=u((()=>{if(!e.value.length)return"0";const r=Math.max(...e.value);return r?`${r}px`:""}));function t(t){const n=e.value.indexOf(t);return-1===n&&r.value,n}return{autoLabelWidth:r,registerLabelWidth:function(r,n){if(r&&n){const a=t(n);e.value.splice(a,1,r)}else r&&e.value.push(r)},deregisterLabelWidth:function(r){const n=t(r);n>-1&&e.value.splice(n,1)}}}const ne=(e,r)=>{const t=K(r);return t.length>0?e.filter((e=>e.prop&&t.includes(e.prop))):e},ae=o({name:"ElForm"});var ie=O(o({...ae,props:ee,emits:re,setup(e,{expose:r,emit:t}){const n=e,a=[],i=f(),s=d("form"),l=u((()=>{const{labelPosition:e,inline:r}=n;return[s.b(),s.m(i.value||"default"),{[s.m(`label-${e}`)]:e,[s.m("inline")]:r}]})),o=(e=[])=>{n.model&&ne(a,e).forEach((e=>e.resetField()))},O=(e=[])=>{ne(a,e).forEach((e=>e.clearValidate()))},j=u((()=>!!n.model)),A=async e=>P(void 0,e),E=async(e=[])=>{if(!j.value)return!1;const r=(e=>{if(0===a.length)return[];const r=ne(a,e);return r.length?r:[]})(e);if(0===r.length)return!0;let t={};for(const a of r)try{await a.validate("")}catch(n){t={...t,...n}}return 0===Object.keys(t).length||Promise.reject(t)},P=async(e=[],r)=>{const t=!x(r);try{const t=await E(e);return!0===t&&(null==r||r(t)),t}catch(a){if(a instanceof Error)throw a;const e=a;return n.scrollToError&&S(Object.keys(e)[0]),null==r||r(!1,e),t&&Promise.reject(e)}},S=e=>{var r;const t=ne(a,e)[0];t&&(null==(r=t.$el)||r.scrollIntoView(n.scrollIntoViewOptions))};return c((()=>n.rules),(()=>{n.validateOnRuleChange&&A().catch((e=>p()))}),{deep:!0}),v(y,g({...h(n),emit:t,resetFields:o,clearValidate:O,validateField:P,getField:e=>a.find((r=>r.prop===e)),addField:e=>{a.push(e)},removeField:e=>{e.prop&&a.splice(a.indexOf(e),1)},...te()})),r({validate:A,validateField:P,resetFields:o,clearValidate:O,scrollToField:S}),(e,r)=>(m(),b("form",{class:q(F(l))},[w(e.$slots,"default")],2))}}),[["__file","form.vue"]]);function se(){return se=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},se.apply(this,arguments)}function le(e){return(le=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function ue(e,r){return(ue=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,r){return e.__proto__=r,e})(e,r)}function oe(e,r,t){return(oe=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}()?Reflect.construct.bind():function(e,r,t){var n=[null];n.push.apply(n,r);var a=new(Function.bind.apply(e,n));return t&&ue(a,t.prototype),a}).apply(null,arguments)}function fe(e){var r="function"==typeof Map?new Map:void 0;return fe=function(e){if(null===e||(t=e,-1===Function.toString.call(t).indexOf("[native code]")))return e;var t;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==r){if(r.has(e))return r.get(e);r.set(e,n)}function n(){return oe(e,arguments,le(this).constructor)}return n.prototype=Object.create(e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),ue(n,e)},fe(e)}var de=/%[sdj%]/g,ce=function(){};function pe(e){if(!e||!e.length)return null;var r={};return e.forEach((function(e){var t=e.field;r[t]=r[t]||[],r[t].push(e)})),r}function ve(e){for(var r=arguments.length,t=new Array(r>1?r-1:0),n=1;n<r;n++)t[n-1]=arguments[n];var a=0,i=t.length;return"function"==typeof e?e.apply(null,t):"string"==typeof e?e.replace(de,(function(e){if("%%"===e)return"%";if(a>=i)return e;switch(e){case"%s":return String(t[a++]);case"%d":return Number(t[a++]);case"%j":try{return JSON.stringify(t[a++])}catch(r){return"[Circular]"}break;default:return e}})):e}function ge(e,r){return null==e||(!("array"!==r||!Array.isArray(e)||e.length)||!(!function(e){return"string"===e||"url"===e||"hex"===e||"email"===e||"date"===e||"pattern"===e}(r)||"string"!=typeof e||e))}function he(e,r,t){var n=0,a=e.length;!function i(s){if(s&&s.length)t(s);else{var l=n;n+=1,l<a?r(e[l],i):t([])}}([])}var ye=function(e){var r,t;function n(r,t){var n;return(n=e.call(this,"Async Validation Error")||this).errors=r,n.fields=t,n}return t=e,(r=n).prototype=Object.create(t.prototype),r.prototype.constructor=r,ue(r,t),n}(fe(Error));function me(e,r,t,n,a){if(r.first){var i=new Promise((function(r,i){var s=function(e){var r=[];return Object.keys(e).forEach((function(t){r.push.apply(r,e[t]||[])})),r}(e);he(s,t,(function(e){return n(e),e.length?i(new ye(e,pe(e))):r(a)}))}));return i.catch((function(e){return e})),i}var s=!0===r.firstFields?Object.keys(e):r.firstFields||[],l=Object.keys(e),u=l.length,o=0,f=[],d=new Promise((function(r,i){var d=function(e){if(f.push.apply(f,e),++o===u)return n(f),f.length?i(new ye(f,pe(f))):r(a)};l.length||(n(f),r(a)),l.forEach((function(r){var n=e[r];-1!==s.indexOf(r)?he(n,t,d):function(e,r,t){var n=[],a=0,i=e.length;function s(e){n.push.apply(n,e||[]),++a===i&&t(n)}e.forEach((function(e){r(e,s)}))}(n,t,d)}))}));return d.catch((function(e){return e})),d}function be(e,r){return function(t){var n,a;return n=e.fullFields?function(e,r){for(var t=e,n=0;n<r.length;n++){if(null==t)return t;t=t[r[n]]}return t}(r,e.fullFields):r[t.field||e.fullField],(a=t)&&void 0!==a.message?(t.field=t.field||e.fullField,t.fieldValue=n,t):{message:"function"==typeof t?t():t,fieldValue:n,field:t.field||e.fullField}}}function we(e,r){if(r)for(var t in r)if(r.hasOwnProperty(t)){var n=r[t];"object"==typeof n&&"object"==typeof e[t]?e[t]=se({},e[t],n):e[t]=n}return e}var qe,Fe=function(e,r,t,n,a,i){!e.required||t.hasOwnProperty(e.field)&&!ge(r,i||e.type)||n.push(ve(a.messages.required,e.fullField))},Oe=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+\.)+[a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}))$/,xe=/^#?([a-f0-9]{6}|[a-f0-9]{3})$/i,je={integer:function(e){return je.number(e)&&parseInt(e,10)===e},float:function(e){return je.number(e)&&!je.integer(e)},array:function(e){return Array.isArray(e)},regexp:function(e){if(e instanceof RegExp)return!0;try{return!!new RegExp(e)}catch(r){return!1}},date:function(e){return"function"==typeof e.getTime&&"function"==typeof e.getMonth&&"function"==typeof e.getYear&&!isNaN(e.getTime())},number:function(e){return!isNaN(e)&&"number"==typeof e},object:function(e){return"object"==typeof e&&!je.array(e)},method:function(e){return"function"==typeof e},email:function(e){return"string"==typeof e&&e.length<=320&&!!e.match(Oe)},url:function(e){return"string"==typeof e&&e.length<=2048&&!!e.match(function(){if(qe)return qe;var e="[a-fA-F\\d:]",r=function(r){return r&&r.includeBoundaries?"(?:(?<=\\s|^)(?="+e+")|(?<="+e+")(?=\\s|$))":""},t="(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}",n="[a-fA-F\\d]{1,4}",a=("\n(?:\n(?:"+n+":){7}(?:"+n+"|:)|                                    // 1:2:3:4:5:6:7::  1:2:3:4:5:6:7:8\n(?:"+n+":){6}(?:"+t+"|:"+n+"|:)|                             // 1:2:3:4:5:6::    1:2:3:4:5:6::8   1:2:3:4:5:6::8  1:2:3:4:5:6::1.2.3.4\n(?:"+n+":){5}(?::"+t+"|(?::"+n+"){1,2}|:)|                   // 1:2:3:4:5::      1:2:3:4:5::7:8   1:2:3:4:5::8    1:2:3:4:5::7:1.2.3.4\n(?:"+n+":){4}(?:(?::"+n+"){0,1}:"+t+"|(?::"+n+"){1,3}|:)| // 1:2:3:4::        1:2:3:4::6:7:8   1:2:3:4::8      1:2:3:4::6:7:1.2.3.4\n(?:"+n+":){3}(?:(?::"+n+"){0,2}:"+t+"|(?::"+n+"){1,4}|:)| // 1:2:3::          1:2:3::5:6:7:8   1:2:3::8        1:2:3::5:6:7:1.2.3.4\n(?:"+n+":){2}(?:(?::"+n+"){0,3}:"+t+"|(?::"+n+"){1,5}|:)| // 1:2::            1:2::4:5:6:7:8   1:2::8          1:2::4:5:6:7:1.2.3.4\n(?:"+n+":){1}(?:(?::"+n+"){0,4}:"+t+"|(?::"+n+"){1,6}|:)| // 1::              1::3:4:5:6:7:8   1::8            1::3:4:5:6:7:1.2.3.4\n(?::(?:(?::"+n+"){0,5}:"+t+"|(?::"+n+"){1,7}|:))             // ::2:3:4:5:6:7:8  ::2:3:4:5:6:7:8  ::8             ::1.2.3.4\n)(?:%[0-9a-zA-Z]{1,})?                                             // %eth0            %1\n").replace(/\s*\/\/.*$/gm,"").replace(/\n/g,"").trim(),i=new RegExp("(?:^"+t+"$)|(?:^"+a+"$)"),s=new RegExp("^"+t+"$"),l=new RegExp("^"+a+"$"),u=function(e){return e&&e.exact?i:new RegExp("(?:"+r(e)+t+r(e)+")|(?:"+r(e)+a+r(e)+")","g")};u.v4=function(e){return e&&e.exact?s:new RegExp(""+r(e)+t+r(e),"g")},u.v6=function(e){return e&&e.exact?l:new RegExp(""+r(e)+a+r(e),"g")};var o=u.v4().source,f=u.v6().source;return qe=new RegExp("(?:^(?:(?:(?:[a-z]+:)?//)|www\\.)(?:\\S+(?::\\S*)?@)?(?:localhost|"+o+"|"+f+'|(?:(?:[a-z\\u00a1-\\uffff0-9][-_]*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))(?::\\d{2,5})?(?:[/?#][^\\s"]*)?$)',"i")}())},hex:function(e){return"string"==typeof e&&!!e.match(xe)}},Ae="enum",Ee={required:Fe,whitespace:function(e,r,t,n,a){(/^\s+$/.test(r)||""===r)&&n.push(ve(a.messages.whitespace,e.fullField))},type:function(e,r,t,n,a){if(e.required&&void 0===r)Fe(e,r,t,n,a);else{var i=e.type;["integer","float","array","regexp","object","method","email","number","date","url","hex"].indexOf(i)>-1?je[i](r)||n.push(ve(a.messages.types[i],e.fullField,e.type)):i&&typeof r!==e.type&&n.push(ve(a.messages.types[i],e.fullField,e.type))}},range:function(e,r,t,n,a){var i="number"==typeof e.len,s="number"==typeof e.min,l="number"==typeof e.max,u=r,o=null,f="number"==typeof r,d="string"==typeof r,c=Array.isArray(r);if(f?o="number":d?o="string":c&&(o="array"),!o)return!1;c&&(u=r.length),d&&(u=r.replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,"_").length),i?u!==e.len&&n.push(ve(a.messages[o].len,e.fullField,e.len)):s&&!l&&u<e.min?n.push(ve(a.messages[o].min,e.fullField,e.min)):l&&!s&&u>e.max?n.push(ve(a.messages[o].max,e.fullField,e.max)):s&&l&&(u<e.min||u>e.max)&&n.push(ve(a.messages[o].range,e.fullField,e.min,e.max))},enum:function(e,r,t,n,a){e[Ae]=Array.isArray(e[Ae])?e[Ae]:[],-1===e[Ae].indexOf(r)&&n.push(ve(a.messages[Ae],e.fullField,e[Ae].join(", ")))},pattern:function(e,r,t,n,a){if(e.pattern)if(e.pattern instanceof RegExp)e.pattern.lastIndex=0,e.pattern.test(r)||n.push(ve(a.messages.pattern.mismatch,e.fullField,r,e.pattern));else if("string"==typeof e.pattern){new RegExp(e.pattern).test(r)||n.push(ve(a.messages.pattern.mismatch,e.fullField,r,e.pattern))}}},Pe=function(e,r,t,n,a){var i=e.type,s=[];if(e.required||!e.required&&n.hasOwnProperty(e.field)){if(ge(r,i)&&!e.required)return t();Ee.required(e,r,n,s,a,i),ge(r,i)||Ee.type(e,r,n,s,a)}t(s)},Se={string:function(e,r,t,n,a){var i=[];if(e.required||!e.required&&n.hasOwnProperty(e.field)){if(ge(r,"string")&&!e.required)return t();Ee.required(e,r,n,i,a,"string"),ge(r,"string")||(Ee.type(e,r,n,i,a),Ee.range(e,r,n,i,a),Ee.pattern(e,r,n,i,a),!0===e.whitespace&&Ee.whitespace(e,r,n,i,a))}t(i)},method:function(e,r,t,n,a){var i=[];if(e.required||!e.required&&n.hasOwnProperty(e.field)){if(ge(r)&&!e.required)return t();Ee.required(e,r,n,i,a),void 0!==r&&Ee.type(e,r,n,i,a)}t(i)},number:function(e,r,t,n,a){var i=[];if(e.required||!e.required&&n.hasOwnProperty(e.field)){if(""===r&&(r=void 0),ge(r)&&!e.required)return t();Ee.required(e,r,n,i,a),void 0!==r&&(Ee.type(e,r,n,i,a),Ee.range(e,r,n,i,a))}t(i)},boolean:function(e,r,t,n,a){var i=[];if(e.required||!e.required&&n.hasOwnProperty(e.field)){if(ge(r)&&!e.required)return t();Ee.required(e,r,n,i,a),void 0!==r&&Ee.type(e,r,n,i,a)}t(i)},regexp:function(e,r,t,n,a){var i=[];if(e.required||!e.required&&n.hasOwnProperty(e.field)){if(ge(r)&&!e.required)return t();Ee.required(e,r,n,i,a),ge(r)||Ee.type(e,r,n,i,a)}t(i)},integer:function(e,r,t,n,a){var i=[];if(e.required||!e.required&&n.hasOwnProperty(e.field)){if(ge(r)&&!e.required)return t();Ee.required(e,r,n,i,a),void 0!==r&&(Ee.type(e,r,n,i,a),Ee.range(e,r,n,i,a))}t(i)},float:function(e,r,t,n,a){var i=[];if(e.required||!e.required&&n.hasOwnProperty(e.field)){if(ge(r)&&!e.required)return t();Ee.required(e,r,n,i,a),void 0!==r&&(Ee.type(e,r,n,i,a),Ee.range(e,r,n,i,a))}t(i)},array:function(e,r,t,n,a){var i=[];if(e.required||!e.required&&n.hasOwnProperty(e.field)){if(null==r&&!e.required)return t();Ee.required(e,r,n,i,a,"array"),null!=r&&(Ee.type(e,r,n,i,a),Ee.range(e,r,n,i,a))}t(i)},object:function(e,r,t,n,a){var i=[];if(e.required||!e.required&&n.hasOwnProperty(e.field)){if(ge(r)&&!e.required)return t();Ee.required(e,r,n,i,a),void 0!==r&&Ee.type(e,r,n,i,a)}t(i)},enum:function(e,r,t,n,a){var i=[];if(e.required||!e.required&&n.hasOwnProperty(e.field)){if(ge(r)&&!e.required)return t();Ee.required(e,r,n,i,a),void 0!==r&&Ee.enum(e,r,n,i,a)}t(i)},pattern:function(e,r,t,n,a){var i=[];if(e.required||!e.required&&n.hasOwnProperty(e.field)){if(ge(r,"string")&&!e.required)return t();Ee.required(e,r,n,i,a),ge(r,"string")||Ee.pattern(e,r,n,i,a)}t(i)},date:function(e,r,t,n,a){var i=[];if(e.required||!e.required&&n.hasOwnProperty(e.field)){if(ge(r,"date")&&!e.required)return t();var s;if(Ee.required(e,r,n,i,a),!ge(r,"date"))s=r instanceof Date?r:new Date(r),Ee.type(e,s,n,i,a),s&&Ee.range(e,s.getTime(),n,i,a)}t(i)},url:Pe,hex:Pe,email:Pe,required:function(e,r,t,n,a){var i=[],s=Array.isArray(r)?"array":typeof r;Ee.required(e,r,n,i,a,s),t(i)},any:function(e,r,t,n,a){var i=[];if(e.required||!e.required&&n.hasOwnProperty(e.field)){if(ge(r)&&!e.required)return t();Ee.required(e,r,n,i,a)}t(i)}};function ke(){return{default:"Validation error on field %s",required:"%s is required",enum:"%s must be one of %s",whitespace:"%s cannot be empty",date:{format:"%s date %s is invalid for format %s",parse:"%s date could not be parsed, %s is invalid ",invalid:"%s date %s is invalid"},types:{string:"%s is not a %s",method:"%s is not a %s (function)",array:"%s is not an %s",object:"%s is not an %s",number:"%s is not a %s",date:"%s is not a %s",boolean:"%s is not a %s",integer:"%s is not an %s",float:"%s is not a %s",regexp:"%s is not a valid %s",email:"%s is not a valid %s",url:"%s is not a valid %s",hex:"%s is not a valid %s"},string:{len:"%s must be exactly %s characters",min:"%s must be at least %s characters",max:"%s cannot be longer than %s characters",range:"%s must be between %s and %s characters"},number:{len:"%s must equal %s",min:"%s cannot be less than %s",max:"%s cannot be greater than %s",range:"%s must be between %s and %s"},array:{len:"%s must be exactly %s in length",min:"%s cannot be less than %s in length",max:"%s cannot be greater than %s in length",range:"%s must be between %s and %s in length"},pattern:{mismatch:"%s value %s does not match pattern %s"},clone:function(){var e=JSON.parse(JSON.stringify(this));return e.clone=this.clone,e}}}var Re=ke(),$e=function(){function e(e){this.rules=null,this._messages=Re,this.define(e)}var r=e.prototype;return r.define=function(e){var r=this;if(!e)throw new Error("Cannot configure a schema with no rules");if("object"!=typeof e||Array.isArray(e))throw new Error("Rules must be an object");this.rules={},Object.keys(e).forEach((function(t){var n=e[t];r.rules[t]=Array.isArray(n)?n:[n]}))},r.messages=function(e){return e&&(this._messages=we(ke(),e)),this._messages},r.validate=function(r,t,n){var a=this;void 0===t&&(t={}),void 0===n&&(n=function(){});var i=r,s=t,l=n;if("function"==typeof s&&(l=s,s={}),!this.rules||0===Object.keys(this.rules).length)return l&&l(null,i),Promise.resolve(i);if(s.messages){var u=this.messages();u===Re&&(u=ke()),we(u,s.messages),s.messages=u}else s.messages=this.messages();var o={};(s.keys||Object.keys(this.rules)).forEach((function(e){var t=a.rules[e],n=i[e];t.forEach((function(t){var s=t;"function"==typeof s.transform&&(i===r&&(i=se({},i)),n=i[e]=s.transform(n)),(s="function"==typeof s?{validator:s}:se({},s)).validator=a.getValidationMethod(s),s.validator&&(s.field=e,s.fullField=s.fullField||e,s.type=a.getType(s),o[e]=o[e]||[],o[e].push({rule:s,value:n,source:i,field:e}))}))}));var f={};return me(o,s,(function(r,t){var n,a=r.rule,l=!("object"!==a.type&&"array"!==a.type||"object"!=typeof a.fields&&"object"!=typeof a.defaultField);function u(e,r){return se({},r,{fullField:a.fullField+"."+e,fullFields:a.fullFields?[].concat(a.fullFields,[e]):[e]})}function o(n){void 0===n&&(n=[]);var o=Array.isArray(n)?n:[n];!s.suppressWarning&&o.length&&e.warning("async-validator:",o),o.length&&void 0!==a.message&&(o=[].concat(a.message));var d=o.map(be(a,i));if(s.first&&d.length)return f[a.field]=1,t(d);if(l){if(a.required&&!r.value)return void 0!==a.message?d=[].concat(a.message).map(be(a,i)):s.error&&(d=[s.error(a,ve(s.messages.required,a.field))]),t(d);var c={};a.defaultField&&Object.keys(r.value).map((function(e){c[e]=a.defaultField})),c=se({},c,r.rule.fields);var p={};Object.keys(c).forEach((function(e){var r=c[e],t=Array.isArray(r)?r:[r];p[e]=t.map(u.bind(null,e))}));var v=new e(p);v.messages(s.messages),r.rule.options&&(r.rule.options.messages=s.messages,r.rule.options.error=s.error),v.validate(r.value,r.rule.options||s,(function(e){var r=[];d&&d.length&&r.push.apply(r,d),e&&e.length&&r.push.apply(r,e),t(r.length?r:null)}))}else t(d)}if(l=l&&(a.required||!a.required&&r.value),a.field=r.field,a.asyncValidator)n=a.asyncValidator(a,r.value,o,r.source,s);else if(a.validator){try{n=a.validator(a,r.value,o,r.source,s)}catch(d){console.error,s.suppressValidatorError||setTimeout((function(){throw d}),0),o(d.message)}!0===n?o():!1===n?o("function"==typeof a.message?a.message(a.fullField||a.field):a.message||(a.fullField||a.field)+" fails"):n instanceof Array?o(n):n instanceof Error&&o(n.message)}n&&n.then&&n.then((function(){return o()}),(function(e){return o(e)}))}),(function(e){!function(e){for(var r,t,n=[],a={},s=0;s<e.length;s++)r=e[s],t=void 0,Array.isArray(r)?n=(t=n).concat.apply(t,r):n.push(r);n.length?(a=pe(n),l(n,a)):l(null,i)}(e)}),i)},r.getType=function(e){if(void 0===e.type&&e.pattern instanceof RegExp&&(e.type="pattern"),"function"!=typeof e.validator&&e.type&&!Se.hasOwnProperty(e.type))throw new Error(ve("Unknown rule type %s",e.type));return e.type||"string"},r.getValidationMethod=function(e){if("function"==typeof e.validator)return e.validator;var r=Object.keys(e),t=r.indexOf("message");return-1!==t&&r.splice(t,1),1===r.length&&"required"===r[0]?Se.required:Se[this.getType(e)]||void 0},e}();$e.register=function(e,r){if("function"!=typeof r)throw new Error("Cannot register a validator by type, validator is not a function");Se[e]=r},$e.warning=ce,$e.messages=Re,$e.validators=Se;const _e=r({label:String,labelWidth:{type:[String,Number],default:""},prop:{type:n([String,Array])},required:{type:Boolean,default:void 0},rules:{type:n([Object,Array])},error:String,validateStatus:{type:String,values:["","error","validating","success"]},for:String,inlineMessage:{type:[String,Boolean],default:""},showMessage:{type:Boolean,default:!0},size:{type:String,values:t}}),Ie="ElLabelWrap";var We=o({name:Ie,props:{isAutoWidth:Boolean,updateAll:Boolean},setup(e,{slots:r}){const t=j(y,void 0),n=j(A);n||E(Ie,"usage: <el-form-item><label-wrap /></el-form-item>");const a=d("form"),i=l(),s=l(0),o=(n="update")=>{I((()=>{r.default&&e.isAutoWidth&&("update"===n?s.value=(()=>{var e;if(null==(e=i.value)?void 0:e.firstElementChild){const e=window.getComputedStyle(i.value.firstElementChild).width;return Math.ceil(Number.parseFloat(e))}return 0})():"remove"===n&&(null==t||t.deregisterLabelWidth(s.value)))}))},f=()=>o("update");return P((()=>{f()})),S((()=>{o("remove")})),k((()=>f())),c(s,((r,n)=>{e.updateAll&&(null==t||t.registerLabelWidth(r,n))})),R(u((()=>{var e,r;return null!=(r=null==(e=i.value)?void 0:e.firstElementChild)?r:null})),f),()=>{var l,u;if(!r)return null;const{isAutoWidth:o}=e;if(o){const e=null==t?void 0:t.autoLabelWidth,u={};if((null==n?void 0:n.hasLabel)&&e&&"auto"!==e){const r=Math.max(0,Number.parseInt(e,10)-s.value),n="left"===t.labelPosition?"marginRight":"marginLeft";r&&(u[n]=`${r}px`)}return $("div",{ref:i,class:[a.be("item","label-wrap")],style:u},[null==(l=r.default)?void 0:l.call(r)])}return $(_,{ref:i},[null==(u=r.default)?void 0:u.call(r)])}}});const Be=["role","aria-labelledby"],Me=o({name:"ElFormItem"});var Ve=O(o({...Me,props:_e,setup(e,{expose:r}){const t=e,n=W(),a=j(y,void 0),o=j(A,void 0),p=f(void 0,{formItem:!1}),O=d("form-item"),E=B().value,k=l([]),R=l(""),_=M(R,100),H=l(""),U=l();let X,ee=!1;const re=u((()=>{if("top"===(null==a?void 0:a.labelPosition))return{};const e=V(t.labelWidth||(null==a?void 0:a.labelWidth)||"");return e?{width:e}:{}})),te=u((()=>{if("top"===(null==a?void 0:a.labelPosition)||(null==a?void 0:a.inline))return{};if(!t.label&&!t.labelWidth&&fe)return{};const e=V(t.labelWidth||(null==a?void 0:a.labelWidth)||"");return t.label||n.label?{}:{marginLeft:e}})),ne=u((()=>[O.b(),O.m(p.value),O.is("error","error"===R.value),O.is("validating","validating"===R.value),O.is("success","success"===R.value),O.is("required",ve.value||t.required),O.is("no-asterisk",null==a?void 0:a.hideRequiredAsterisk),"right"===(null==a?void 0:a.requireAsteriskPosition)?"asterisk-right":"asterisk-left",{[O.m("feedback")]:null==a?void 0:a.statusIcon}])),ae=u((()=>s(t.inlineMessage)?t.inlineMessage:(null==a?void 0:a.inlineMessage)||!1)),ie=u((()=>[O.e("error"),{[O.em("error","inline")]:ae.value}])),se=u((()=>t.prop?i(t.prop)?t.prop:t.prop.join("."):"")),le=u((()=>!(!t.label&&!n.label))),ue=u((()=>t.for||(1===k.value.length?k.value[0]:void 0))),oe=u((()=>!ue.value&&le.value)),fe=!!o,de=u((()=>{const e=null==a?void 0:a.model;if(e&&t.prop)return z(e,t.prop).value})),ce=u((()=>{const{required:e}=t,r=[];t.rules&&r.push(...K(t.rules));const n=null==a?void 0:a.rules;if(n&&t.prop){const e=z(n,t.prop).value;e&&r.push(...K(e))}if(void 0!==e){const t=r.map(((e,r)=>[e,r])).filter((([e])=>Object.keys(e).includes("required")));if(t.length>0)for(const[n,a]of t)n.required!==e&&(r[a]={...n,required:e});else r.push({required:e})}return r})),pe=u((()=>ce.value.length>0)),ve=u((()=>ce.value.some((e=>e.required)))),ge=u((()=>{var e;return"error"===_.value&&t.showMessage&&(null==(e=null==a?void 0:a.showMessage)||e)})),he=u((()=>`${t.label||""}${(null==a?void 0:a.labelSuffix)||""}`)),ye=e=>{R.value=e},me=async e=>{const r=se.value;return new $e({[r]:e}).validate({[r]:de.value},{firstFields:!0}).then((()=>(ye("success"),null==a||a.emit("validate",t.prop,!0,""),!0))).catch((e=>((e=>{var r,n;const{errors:i,fields:s}=e;ye("error"),H.value=i?null!=(n=null==(r=null==i?void 0:i[0])?void 0:r.message)?n:`${t.prop} is required`:"",null==a||a.emit("validate",t.prop,!1,H.value)})(e),Promise.reject(e))))},be=async(e,r)=>{if(ee||!t.prop)return!1;const n=x(r);if(!pe.value)return null==r||r(!1),!1;const a=(e=>ce.value.filter((r=>!r.trigger||!e||(Array.isArray(r.trigger)?r.trigger.includes(e):r.trigger===e))).map((({trigger:e,...r})=>r)))(e);return 0===a.length?(null==r||r(!0),!0):(ye("validating"),me(a).then((()=>(null==r||r(!0),!0))).catch((e=>{const{fields:t}=e;return null==r||r(!1,t),!n&&Promise.reject(t)})))},we=()=>{ye(""),H.value="",ee=!1},qe=async()=>{const e=null==a?void 0:a.model;if(!e||!t.prop)return;const r=z(e,t.prop);ee=!0,r.value=Q(X),await I(),we(),ee=!1};c((()=>t.error),(e=>{H.value=e||"",ye(e?"error":"")}),{immediate:!0}),c((()=>t.validateStatus),(e=>ye(e||"")));const Fe=g({...h(t),$el:U,size:p,validateState:R,labelId:E,inputIds:k,isGroup:oe,hasLabel:le,fieldValue:de,addInputId:e=>{k.value.includes(e)||k.value.push(e)},removeInputId:e=>{k.value=k.value.filter((r=>r!==e))},resetField:qe,clearValidate:we,validate:be});return v(A,Fe),P((()=>{t.prop&&(null==a||a.addField(Fe),X=Q(de.value))})),S((()=>{null==a||a.removeField(Fe)})),r({size:p,validateMessage:H,validateState:R,validate:be,clearValidate:we,resetField:qe}),(e,r)=>{var t;return m(),b("div",{ref_key:"formItemRef",ref:U,class:q(F(ne)),role:F(oe)?"group":void 0,"aria-labelledby":F(oe)?F(E):void 0},[$(F(We),{"is-auto-width":"auto"===F(re).width,"update-all":"auto"===(null==(t=F(a))?void 0:t.labelWidth)},{default:C((()=>[F(le)?(m(),D(N(F(ue)?"label":"div"),{key:0,id:F(E),for:F(ue),class:q(F(O).e("label")),style:T(F(re))},{default:C((()=>[w(e.$slots,"label",{label:F(he)},(()=>[L(Z(F(he)),1)]))])),_:3},8,["id","for","class","style"])):J("v-if",!0)])),_:3},8,["is-auto-width","update-all"]),Y("div",{class:q(F(O).e("content")),style:T(F(te))},[w(e.$slots,"default"),$(G,{name:`${F(O).namespace.value}-zoom-in-top`},{default:C((()=>[F(ge)?w(e.$slots,"error",{key:0,error:H.value},(()=>[Y("div",{class:q(F(ie))},Z(H.value),3)])):J("v-if",!0)])),_:3},8,["name"])],6)],10,Be)}}}),[["__file","form-item.vue"]]);const ze=H(ie,{FormItem:Ve}),Ce=U(Ve);export{ze as E,Ce as a};

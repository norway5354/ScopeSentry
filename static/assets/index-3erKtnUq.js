import{r as a}from"./index-CEets4Oe.js";const t=(t,s,e,i)=>a.post({url:"/api/asset/data",data:{search:t,pageIndex:s,pageSize:e,filter:i}}),s=(t,s)=>a.post({url:"/api/asset/statistics/port",data:{search:t,filter:s}}),e=(t,s)=>a.post({url:"/api/asset/statistics/type",data:{search:t,filter:s}}),i=(t,s)=>a.post({url:"/api/asset/statistics/icon",data:{search:t,filter:s}}),p=(t,s)=>a.post({url:"/api/asset/statistics/app",data:{search:t,filter:s}}),r=(t,s)=>a.post({url:"/api/asset/statistics/title",data:{search:t,filter:s}}),d=t=>a.post({url:"/api/asset/detail",data:{id:t}}),l=t=>a.post({url:"/api/asset/changelog",data:{id:t}}),o=(t,s,e)=>a.post({url:"/api/data/update/status",data:{id:t,tp:s,status:e}}),u=(t,s,e,i)=>a.post({url:"/api/subdomain/data",data:{search:t,pageIndex:s,pageSize:e,filter:i}}),g=(t,s,e,i,p)=>a.post({url:"/api/url/data",data:{search:t,pageIndex:s,pageSize:e,filter:i,sort:p}}),c=(t,s,e,i)=>a.post({url:"/api/crawler/data",data:{search:t,pageIndex:s,pageSize:e,filter:i}}),n=(t,s,e,i)=>a.post({url:"/api/sensitive/result/data2",data:{search:t,pageIndex:s,pageSize:e,filter:i}}),f=t=>a.post({url:"/api/sensitive/result/body",data:{id:t}}),h=(t,s)=>a.post({url:"/api/sensitive/result/names",data:{search:t,filter:s}}),x=(t,s,e,i,p)=>a.post({url:"/api/dirscan/result/data",data:{search:t,pageIndex:s,pageSize:e,filter:i,sort:p}}),m=(t,s,e,i)=>a.post({url:"/api/page/monitoring/result",data:{search:t,pageIndex:s,pageSize:e,filter:i}}),z=t=>a.post({url:"/api/page/monitoring/diff",data:{id:t}}),I=(t,s,e,i)=>a.post({url:"/api/subdomaintaker/data",data:{search:t,pageIndex:s,pageSize:e,filter:i}}),S=(t,s)=>a.post({url:"/api/data/delete",data:{ids:t,index:s}}),b=(t,s,e)=>a.post({url:"/api/data/add/tag",data:{id:t,tp:s,tag:e}}),v=(t,s,e)=>a.post({url:"/api/data/delete/tag",data:{id:t,tp:s,tag:e}});export{b as a,s as b,e as c,v as d,p as e,i as f,t as g,c as h,x as i,z as j,m as k,f as l,n as m,h as n,u as o,I as p,g as q,S as r,d as s,l as t,o as u,r as v};

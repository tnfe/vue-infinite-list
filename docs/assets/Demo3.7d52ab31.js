import{I as v,C as h,a as b}from"./CtrlBar.a9284327.js";import{_ as D}from"./main.8b6bdefc.js";import{d as B,j as s,m as C,n as I,r,A as S,o as l,c as d,e as m,B as w,w as z,F as V,b as k,t as u}from"./vendor.eefaf204.js";const y=B({name:"Demo3",components:{InfiniteList:v,CtrlBar:h},setup(){const e=s(!0),t=s(!0),o=s(null);let a=0;return C(()=>{a=setTimeout(()=>{t.value=!1,o.value=b.generateData(1e5)},2100)}),I(()=>clearTimeout(a)),{debug:e,data:o,loading:t,getItemSize:i=>{switch(i%4){case 1:return 80;case 2:return 50;case 3:return 100;default:return 200}}}}}),L={"element-loading-text":"Simulate Data Loading...",class:"vl-con",style:{height:"520px"}},$={class:"li-con"};function F(e,t,o,a,c,i){const p=r("CtrlBar"),_=r("InfiniteList"),g=S("loading");return l(),d(V,null,[m(p,{modelValue:e.debug,"onUpdate:modelValue":t[0]||(t[0]=n=>e.debug=n),link:"https://github.com/tnfe/vue-infinite-list/blob/master/demo/components/demo/Demo3.vue"},null,8,["modelValue","link"]),w((l(),d("div",L,[m(_,{data:e.data,width:"100%",height:520,itemSize:e.getItemSize,debug:e.debug},{default:z(({item:n,index:f})=>[k("div",$,"item "+u(f)+" : "+u(n),1)]),_:1},8,["data","itemSize","debug"])])),[[g,e.loading]])],64)}var j=D(y,[["render",F],["__scopeId","data-v-815a0674"]]);export{j as default};
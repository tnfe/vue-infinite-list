import{C as u,I as p,a as f}from"./CtrlBar.a9284327.js";import{_ as h}from"./main.8b6bdefc.js";import{d as x,j as b,r as s,o as v,c as g,e as a,b as t,w as r,F as C,z as n,t as I,p as y,a as D}from"./vendor.eefaf204.js";const B=x({name:"Demo2",components:{CtrlBar:u,InfiniteList:p},setup(){const e=b(!1),o=f.generateData(2e5);return{debug:e,data:o}}}),i=e=>(y("data-v-259a7f38"),e=e(),D(),e),S={class:"vl-con",style:{width:"900px"}},V={class:"li-con li-con-r"},w=i(()=>t("br",null,null,-1)),k=n(" xxxxxxx "),$=i(()=>t("br",null,null,-1)),z=n(" xxxxxxx "),L=i(()=>t("br",null,null,-1)),N=n("Primary");function F(e,o,j,E,P,T){const d=s("CtrlBar"),c=s("el-button"),_=s("InfiniteList");return v(),g(C,null,[a(d,{modelValue:e.debug,"onUpdate:modelValue":o[0]||(o[0]=l=>e.debug=l),link:"https://github.com/tnfe/vue-infinite-list/blob/master/demo/components/demo/Demo2.vue"},null,8,["modelValue","link"]),t("div",S,[a(_,{data:e.data,width:900,height:220,itemSize:115,scrollDirection:"horizontal",debug:e.debug},{default:r(({item:l,index:m})=>[t("div",V,[n(" item"+I(m)+" ",1),w,k,$,z,L,a(c,{type:"primary",round:""},{default:r(()=>[N]),_:1})])]),_:1},8,["data","debug"])])],64)}var G=h(B,[["render",F],["__scopeId","data-v-259a7f38"]]);export{G as default};
(function(){"use strict";var e={740:function(e,t,o){var n=o(7764),l=o(4108);function a(e,t,o,n,a,r){const s=(0,l.E1)("TheHeader"),i=(0,l.E1)("HeroSection"),d=(0,l.E1)("CalcTime");return(0,l.Wz)(),(0,l.An)(l.ae,null,[(0,l.K2)(s),(0,l.K2)(i),(0,l.K2)(d)],64)}var r=o.p+"img/runningstatus.18d1606c.png";const s={class:"py-3.5 flex justify-center m-auto bg-sky-100"},i=(0,l.QD)("img",{alt:"Running logo",class:"w-20",src:r},null,-1),d=[i];function u(e,t,o,n,a,r){return(0,l.Wz)(),(0,l.An)("header",s,d)}var c={name:"TheHeader",props:{msg:String}},p=o(4100);const m=(0,p.c)(c,[["render",u]]);var b=m,f=o.p+"img/illustration-running.8d5a338f.jpg";const v={class:"p-10 md:p-20"},h=(0,l.IL)('<div class="container mx-auto grid grid-cols-1 md:grid-cols-2 md:gap-8"><section class="w-12/12 md:w-11/12 flex-inline flex-col"><h1 class="font-sans mb-6 text-2xl font-black tracking-tighter text-black md:text-5xl text-sky-500">Calculadora de treino de corrida</h1><p class="font-sans text-base leading-relaxed text-left text-sky-950 mb-5">Esta página é para você que pratica corrida de rua, em muitos casos com acompanhamento de planilhas de treino e assessorias de corrida, em outros apenas no amor e na raça.</p><p class="font-sans text-base leading-relaxed text-left text-sky-950 mb-5">Os aplicativos que monitoram corridas geralmente fornecem apenas os dados de Pace e Km/h. Com a calculadora, você poderá verificar a média de tempo dos treinos, como os intervalados e os de tiro, por exemplo, e comparar com sua VAM atual.</p><p class="font-sans text-base leading-relaxed text-left text-sky-950">Aproveite e compartilhe com seus colegas corredores e corredoras!</p></section><section class="flex justify-center mt-10 md:mt-0"><img alt="Running" class="w-12/12 object-contain" src="'+f+'"></section></div>',1),g=[h];function D(e,t,o,n,a,r){return(0,l.Wz)(),(0,l.An)("div",v,g)}var Q={name:"HeroSection"};const x=(0,p.c)(Q,[["render",D]]);var k=x,y=o(9096);const w={class:"p-10 md:p-20 bg-zinc-50"},O={class:"container mx-auto grid grid-cols-1 md:grid-cols-2 md:gap-14"},S=(0,l.QD)("header",{class:"text-left mb-4"},[(0,l.QD)("h2",{class:"font-sans px-2 py-1 bg-sky-500 text-base font-semibold tracking-widest text-black uppercase inline-block text-white"},"Calcule o seu treino")],-1),A=(0,l.QD)("label",{class:"font-sans font-semibold block",for:"laps"},"Quantidade de voltas:",-1),C={key:0,class:"block font-sans font-semibold text-red-600"},M={class:"input-section grid grid-cols-4 md:grid-cols-5 gap-2 mt-4"},T=(0,l.QD)("div",null,[(0,l.QD)("label",{class:"font-sans font-semibold block",for:"hour"},"Hs:")],-1),W=(0,l.QD)("div",null,[(0,l.QD)("label",{class:"font-sans font-semibold block",for:"minute"},"Min:")],-1),V=(0,l.QD)("div",null,[(0,l.QD)("label",{class:"font-sans font-semibold block",for:"second"},"Seg:")],-1),U=[T,W,V],I=["onUpdate:modelValue"],j=["onUpdate:modelValue"],z=["onUpdate:modelValue"],E=["onClick"],H=(0,l.QD)("svg",{title:"Remover",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",class:"w-5 h-6 text-white"},[(0,l.QD)("path",{"fill-rule":"evenodd",d:"M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z","clip-rule":"evenodd"})],-1),L=[H],R={class:"operation-section mt-4"},$={class:"field mb-4"},q=(0,l.QD)("label",{for:"operation",class:"font-sans font-semibold block mb-1"},"Operação:",-1),K=(0,l.QD)("option",{value:"add"},"Somar",-1),Z=(0,l.QD)("option",{value:"multiply"},"Multiplicar",-1),N=(0,l.QD)("option",{value:"divide"},"Dividir",-1),P=[K,Z,N],_={key:0,class:"flex mb-4"},B={class:"field mr-2"},F=(0,l.QD)("label",{class:"font-sans font-semibold block",for:"subtotal"},"Subtotal:",-1),G=["value"],J=(0,l.QD)("label",{class:"font-sans font-semibold block",for:"divider"},"Divisor:",-1),X={key:1,class:"flex multiplier-section mb-4"},Y={class:"field mr-2"},ee=(0,l.QD)("label",{class:"font-sans font-semibold",for:"subtotal"},"Subtotal:",-1),te=["value"],oe=(0,l.QD)("label",{class:"font-sans font-semibold block",for:"multiplier"},"Multiplicador:",-1),ne={class:"operation-section grid grid-cols-4 md:grid-cols-5 gap-2"},le={class:"field col-start-4"},ae={class:"md:w-12/12 md:w-10/12 flex-inline flex-col mt-2 md:mt-0"},re={class:"mb-6"},se=(0,l.QD)("p",{class:"text-sky-500 font-sans font-semibold tracking-widest text-black uppercase mb-2"},"Resultado:",-1),ie={class:"font-sans font-semibold"},de={class:"vam-section mb-4"},ue=(0,l.QD)("label",{class:"font-sans font-semibold",for:"vam"},"Inserir minha VAM:",-1),ce={class:"share-section"},pe=(0,l.QD)("p",{class:"font-sans font-semibold"},"Texto para compartilhar o seu treino:",-1),me=(0,l.QD)("p",{class:"font-sans font-semibold text-sky-500"},[(0,l.QD)("small",null,"Clicando no bloco, você consegue editar o texto.")],-1),be={class:"template-share p-2 rounded border border-solid border-sky-500 mb-2",contenteditable:"true"},fe=(0,l.QD)("p",null,"Treino:",-1);function ve(e,t,o,a,r,s){return(0,l.Wz)(),(0,l.An)("div",w,[(0,l.QD)("div",O,[(0,l.QD)("div",null,[S,(0,l.QD)("div",null,[A,(0,l.wt)((0,l.QD)("input",{class:"w-full md:w-2/12 p-2 rounded border border-solid border-sky-500 leading-none",type:"number","onUpdate:modelValue":t[0]||(t[0]=e=>r.number=e),onBlur:t[1]||(t[1]=(...e)=>s.validateNumberLaps&&s.validateNumberLaps(...e)),id:"laps",min:"0",max:"50"},null,544),[[n.Og,r.number]]),r.showErrorMessage?((0,l.Wz)(),(0,l.An)("span",C,"O valor deve estar entre 0 e 50.")):(0,l.g1)("",!0)]),(0,l.wt)((0,l.QD)("div",M,U,512),[[n.Ub,void 0===r.number||r.number>0]]),((0,l.Wz)(!0),(0,l.An)(l.ae,null,(0,l.mi)(r.inputs,((e,o)=>((0,l.Wz)(),(0,l.An)("div",{key:o,class:"input-section grid grid-cols-4 md:grid-cols-5 gap-1 mb-4"},[(0,l.QD)("div",null,[(0,l.wt)((0,l.QD)("input",{class:"w-full p-2 rounded border border-solid border-sky-500 leading-none",type:"number","onUpdate:modelValue":t=>e.hour=t,onInput:t[2]||(t[2]=(...e)=>s.updateSubtotal&&s.updateSubtotal(...e))},null,40,I),[[n.Og,e.hour]])]),(0,l.QD)("div",null,[(0,l.wt)((0,l.QD)("input",{class:"w-full p-2 rounded border border-solid border-sky-500 leading-none",type:"number","onUpdate:modelValue":t=>e.minute=t,onInput:t[3]||(t[3]=(...e)=>s.updateSubtotal&&s.updateSubtotal(...e))},null,40,j),[[n.Og,e.minute]])]),(0,l.QD)("div",null,[(0,l.wt)((0,l.QD)("input",{class:"w-full p-2 rounded border border-solid border-sky-500 leading-none",type:"number","onUpdate:modelValue":t=>e.second=t,onInput:t[4]||(t[4]=(...e)=>s.updateSubtotal&&s.updateSubtotal(...e))},null,40,z),[[n.Og,e.second]])]),(0,l.QD)("div",null,[(0,l.QD)("button",{title:"Remover",onClick:e=>s.removeInput(o),class:"border-0 font-sans font-semibold bg-red-600 rounded cursor-pointer py-2 px-2.5"},L,8,E)])])))),128)),(0,l.QD)("div",R,[(0,l.QD)("div",$,[q,(0,l.wt)((0,l.QD)("select",{class:"p-2 rounded border border-solid border-sky-500 leading-none","onUpdate:modelValue":t[5]||(t[5]=e=>r.operation=e),id:"operation"},P,512),[[n.Ip,r.operation]])])]),"divide"===r.operation?((0,l.Wz)(),(0,l.An)("div",_,[(0,l.QD)("div",B,[F,(0,l.QD)("input",{class:"w-full p-2 rounded border border-solid border-sky-500 leading-none",type:"text",value:s.formatTime(r.subtotal),id:"subtotal",disabled:""},null,8,G)]),(0,l.QD)("div",null,[J,(0,l.wt)((0,l.QD)("input",{class:"w-full p-2 rounded border border-solid border-sky-500 leading-none",type:"number","onUpdate:modelValue":t[6]||(t[6]=e=>r.number=e),id:"divider"},null,512),[[n.Og,r.number]])])])):(0,l.g1)("",!0),"multiply"===r.operation?((0,l.Wz)(),(0,l.An)("div",X,[(0,l.QD)("div",Y,[ee,(0,l.QD)("input",{class:"w-full p-2 rounded border border-solid border-sky-500 leading-none",type:"text",value:s.formatTime(r.subtotal),id:"subtotal",disabled:""},null,8,te)]),(0,l.QD)("div",null,[oe,(0,l.wt)((0,l.QD)("input",{class:"w-full p-2 rounded border border-solid border-sky-500 leading-none",type:"number","onUpdate:modelValue":t[7]||(t[7]=e=>r.multiplier=e),id:"multiplier"},null,512),[[n.Og,r.multiplier]])])])):(0,l.g1)("",!0),(0,l.QD)("div",ne,[(0,l.QD)("div",le,[(0,l.QD)("button",{onClick:t[8]||(t[8]=(...e)=>s.calculate&&s.calculate(...e)),class:"border-0 bg-sky-500 font-sans font-semibold text-white rounded cursor-pointer py-2 px-2.5"},"Calcular")])])]),(0,l.QD)("div",ae,[(0,l.QD)("div",re,[se,(0,l.QD)("p",ie,(0,y.WA)(s.formatTemplateTime(r.result)),1)]),(0,l.QD)("div",de,[ue,(0,l.wt)((0,l.QD)("input",{class:"w-full p-2 rounded border border-solid border-sky-500 leading-none",type:"text","onUpdate:modelValue":t[9]||(t[9]=e=>r.vam=e),id:"vam"},null,512),[[n.Og,r.vam]])]),(0,l.QD)("div",ce,[pe,me,(0,l.QD)("div",be,[fe,(0,l.QD)("p",null,"VAM abaixo de "+(0,y.WA)(r.vam),1),(0,l.QD)("p",null,"Feito: "+(0,y.WA)(s.formatTemplateTime(r.result)),1)]),(0,l.QD)("button",{class:"border-0 bg-sky-500 font-sans font-semibold text-white rounded cursor-pointer py-2 px-2.5 float-end",onClick:t[10]||(t[10]=(...e)=>s.shareOnWhatsApp&&s.shareOnWhatsApp(...e))},"Compartilhar")])])])])}o(3248);var he={name:"CalcTime",data(){return{inputs:[{hour:0,minute:0,second:0}],operation:"add",subtotal:0,divider:1,multiplier:1,result:0,vam:null,number:null,showErrorMessage:!1}},computed:{calculateSubtotal(){return this.inputs.reduce(((e,t)=>e+3600*t.hour+60*t.minute+t.second),0)}},methods:{addInput(){this.inputs.push({hour:0,minute:0,second:0})},removeInput(e){this.inputs.splice(e,1)},updateSubtotal(){this.subtotal=this.calculateSubtotal},formatTime(e){let t=Math.floor(e/3600),o=Math.floor(e%3600/60),n=e%60;return t=("0"+t).slice(-2),o=("0"+o).slice(-2),n=("0"+n).slice(-2),`${t}:${o}:${n}`},formatTemplateTime(e){const t=Math.floor(e/60),o=e%60;return`${t}'${o.toString().padStart(2,"0")}"`},validateNumberLaps(){this.number<0||this.number>50?this.showErrorMessage=!0:(this.showErrorMessage=!1,this.numberLaps())},numberLaps(){const e=this.inputs.length,t=parseInt(this.number);if(e<t){const o=t-e;for(let e=0;e<o;e++)this.addInput()}else if(e>t){const o=e-t;this.inputs.splice(t,o)}},calculate(){let e=0;switch(this.operation){case"add":e=this.inputs.reduce(((e,t)=>e+3600*t.hour+60*t.minute+t.second),0);break;case"subtract":e=this.subtotal-this.calculateSubtotal;break;case"multiply":e=this.calculateSubtotal*this.multiplier;break;case"divide":e=this.calculateSubtotal/this.number;break;default:e=0;break}let t=Math.floor(e/3600),o=Math.floor(e%3600/60),n=Math.floor(e%60);n>=60&&(o+=Math.floor(n/60),n%=60),o>=60&&(t+=Math.floor(o/60),o%=60),this.result=3600*t+60*o+n},shareOnWhatsApp(){const e=document.querySelector(".template-share"),t=Array.from(e.querySelectorAll("p")).map((e=>e.textContent.trim())).join("\n");try{if(navigator.share)navigator.share({text:t+"\nCalcule seu treino: http://ritmorun.com"});else{const e="https://wa.me/?text="+encodeURIComponent(t+"\nCalcule seu treino: http://ritmorun.com");window.open(e,"_blank")}}catch(o){console.error("Erro ao compartilhar:",o)}}}};const ge=(0,p.c)(he,[["render",ve]]);var De=ge,Qe={name:"App",components:{TheHeader:b,HeroSection:k,CalcTime:De}};const xe=(0,p.c)(Qe,[["render",a]]);var ke=xe;(0,n.W0)(ke).mount("#app")}},t={};function o(n){var l=t[n];if(void 0!==l)return l.exports;var a=t[n]={exports:{}};return e[n].call(a.exports,a,a.exports,o),a.exports}o.m=e,function(){var e=[];o.O=function(t,n,l,a){if(!n){var r=1/0;for(u=0;u<e.length;u++){n=e[u][0],l=e[u][1],a=e[u][2];for(var s=!0,i=0;i<n.length;i++)(!1&a||r>=a)&&Object.keys(o.O).every((function(e){return o.O[e](n[i])}))?n.splice(i--,1):(s=!1,a<r&&(r=a));if(s){e.splice(u--,1);var d=l();void 0!==d&&(t=d)}}return t}a=a||0;for(var u=e.length;u>0&&e[u-1][2]>a;u--)e[u]=e[u-1];e[u]=[n,l,a]}}(),function(){o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,{a:t}),t}}(),function(){o.d=function(e,t){for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){o.p="/"}(),function(){var e={524:0};o.O.j=function(t){return 0===e[t]};var t=function(t,n){var l,a,r=n[0],s=n[1],i=n[2],d=0;if(r.some((function(t){return 0!==e[t]}))){for(l in s)o.o(s,l)&&(o.m[l]=s[l]);if(i)var u=i(o)}for(t&&t(n);d<r.length;d++)a=r[d],o.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return o.O(u)},n=self["webpackChunkritmorun"]=self["webpackChunkritmorun"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=o.O(void 0,[999],(function(){return o(740)}));n=o.O(n)})();
//# sourceMappingURL=app.0528ad97.js.map
(function(t){function a(a){for(var r,i,o=a[0],l=a[1],c=a[2],u=0,d=[];u<o.length;u++)i=o[u],Object.prototype.hasOwnProperty.call(s,i)&&s[i]&&d.push(s[i][0]),s[i]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);f&&f(a);while(d.length)d.shift()();return n.push.apply(n,c||[]),e()}function e(){for(var t,a=0;a<n.length;a++){for(var e=n[a],r=!0,o=1;o<e.length;o++){var l=e[o];0!==s[l]&&(r=!1)}r&&(n.splice(a--,1),t=i(i.s=e[0]))}return t}var r={},s={index:0},n=[];function i(a){if(r[a])return r[a].exports;var e=r[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,i),e.l=!0,e.exports}i.m=t,i.c=r,i.d=function(t,a,e){i.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,a){if(1&a&&(t=i(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(i.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var r in t)i.d(e,r,function(a){return t[a]}.bind(null,r));return e},i.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(a,"a",a),a},i.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=a,o=o.slice();for(var c=0;c<o.length;c++)a(o[c]);var f=l;n.push([0,"chunk-vendors"]),e()})({0:function(t,a,e){t.exports=e("56d7")},"034f":function(t,a,e){"use strict";e("85ec")},"0fad":function(t,a,e){},"54d8":function(t,a,e){"use strict";e("9b48")},"56d7":function(t,a,e){"use strict";e.r(a);e("e260"),e("e6cf"),e("cca6"),e("a79d");var r=e("2b0e"),s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"app"}},[e("navbar"),e("jumbotron"),e("div",[e("skill",{attrs:{id:"skill"},on:{click:t.scrollIntoView}}),e("project",{attrs:{id:"PROJECT"},on:{click:t.scrollIntoView}}),e("document",{attrs:{id:"DOCUMENT"},on:{click:t.scrollIntoView}})],1),e("b-card-footer",{staticClass:"py-5 text-white",attrs:{"footer-bg-variant":"info"}},[e("div",{staticClass:"col-lg-12 mb-5 mb-lg-0"},[e("h4",{staticClass:"text-uppercase mb-4"},[t._v("Social Media")]),e("a",{staticClass:"btn btn-outline-light btn-social mx-1",attrs:{href:"#!"}},[e("i",{staticClass:"fab fa-fw fa-facebook-f"})]),e("a",{staticClass:"btn btn-outline-light btn-social mx-1",attrs:{href:"#!"}},[e("i",{staticClass:"fab fa-instagram"})]),e("a",{staticClass:"btn btn-outline-light btn-social mx-1",attrs:{href:"#!"}},[e("i",{staticClass:"fab fa-fw fa-twitter"})]),e("a",{staticClass:"btn btn-outline-light btn-social mx-1",attrs:{href:"#!"}},[e("i",{staticClass:"fab fa-fw fa-linkedin-in"})]),e("a",{staticClass:"btn btn-outline-light btn-social mx-1",attrs:{target:"_blank",href:"https://github.com/RamlanRamdani27/"}},[e("i",{staticClass:"fab fa-github"})])]),e("hr",{staticClass:"bg-white"}),e("div",{staticClass:"text-center"},[e("div",{staticClass:"container"},[e("small",[t._v("Copyright © BootstrapVue "+t._s((new Date).getFullYear()))])])])])],1)},n=[],i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("b-navbar",{staticClass:"py-4",attrs:{toggleable:"lg",type:"dark",variant:"info",fixed:"top"}},[e("b-navbar-brand",{staticClass:"text-uppercase font-weight-bold rounded",attrs:{href:"#"}},[t._v("Portfolio")]),e("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),e("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[e("b-navbar-nav",{staticClass:"ml-auto text-uppercase"},[e("b-nav-item",{staticClass:"mx-0 mx-lg-4",attrs:{href:"#skill"}},[t._v("skill")]),e("b-nav-item",{staticClass:"mx-0 mx-lg-4",attrs:{href:"#PROJECT"}},[t._v("project")]),e("b-nav-item",{staticClass:"mx-0 mx-lg-4",attrs:{href:"#DOCUMENT"}},[t._v("document")])],1)],1)],1)],1)},o=[],l={},c=l,f=e("2877"),u=Object(f["a"])(c,i,o,!1,null,null,null),d=u.exports,m=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("b-jumbotron",{staticClass:"bg-image text-white",scopedSlots:t._u([{key:"header",fn:function(){return[e("b-avatar",{attrs:{src:"/img/PP.jpg",size:"14rem"}})]},proxy:!0},{key:"lead",fn:function(){return[e("p",{staticClass:"text-uppercase"},[t._v(t._s(t.data.nama))]),e("p",{staticClass:"text-capitalize "},[t._v(t._s(t.data.keahlian))])]},proxy:!0}])},[e("hr",{staticClass:"my-4 bg-white"}),e("p",[e("i",{staticClass:"fa-solid fa-envelope"}),t._v(" "+t._s(t.data.email))])])],1)},b=[],g={data:function(){return{data:{nama:"muhamad ramlan ramdani",keahlian:"programmer - engineer server oracle",email:"ramlanramdani2@gmail.com"}}}},p=g,v=(e("dd16"),Object(f["a"])(p,m,b,!1,null,null,null)),h=v.exports,k=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("b-container",{staticClass:"bv-example-row",attrs:{fluid:""}},[e("b-row",[e("b-col",[e("div",{staticClass:"mb-4"},[e("hr",{staticClass:"hr-text",attrs:{"data-content":"SKILL"}})])])],1),e("b-row",{staticClass:"mt-3"},[e("b-col",[e("h3",{staticClass:"page-section-heading text-center text-capitalize text-secondary mb-1"},[t._v(t._s(t.judul[0]))]),e("div",[e("b-list-group",t._l(t.pemrogramans,(function(a,r){return e("b-list-group-item",{key:r,staticClass:"flex-column align-items-start",attrs:{href:"#"}},[e("div",{staticClass:"d-flex w-100 justify-content-between"},[e("h5",{staticClass:"mb-1"},[t._v(t._s(a.title))]),e("i",{class:a.icon,attrs:{color:a.color}})])])})),1)],1)]),e("b-col",[e("h3",{staticClass:"page-section-heading text-center text-capitalize text-secondary mb-1"},[t._v(t._s(t.judul[1]))]),e("b-list-group",t._l(t.servers,(function(a,r){return e("b-list-group-item",{key:r,staticClass:"flex-column align-items-start",attrs:{href:"#"}},[e("div",{staticClass:"d-flex w-100 justify-content-between"},[e("h5",{staticClass:"mb-1"},[t._v(t._s(a.title))]),e("i",{class:a.icon,attrs:{color:a.color}})])])})),1)],1),e("b-col",[e("h3",{staticClass:"page-section-heading text-center text-capitalize text-secondary mb-1"},[t._v(t._s(t.judul[2]))]),e("b-list-group",t._l(t.databases,(function(a,r){return e("b-list-group-item",{key:r,staticClass:"flex-column align-items-start",attrs:{href:"#"}},[e("div",{staticClass:"d-flex w-100 justify-content-between"},[e("h5",{staticClass:"mb-1"},[t._v(t._s(a.title))]),e("i",{class:a.icon,attrs:{color:a.color}})])])})),1)],1)],1)],1)},x=[],w={data:function(){return{judul:["programming","server","database"],pemrogramans:[{color:"blue",icon:"fa-brands fa-php fa-lg",title:"PHP"},{color:"red",icon:"fa-brands fa-free-code-camp fa-lg",title:"Codeigniter 3"},{color:"red",icon:"fa-brands fa-laravel fa-lg",title:"Laravel"},{color:"green",icon:"fa-brands fa-node-js fa-lg",title:"HapiJS"},{color:"green",icon:"fa-brands fa-vuejs fa-lg",title:"VueJs 2"},{color:"green",icon:"fa-solid fa-power-off fa-lg",title:"Springboot"},{color:"red",icon:"fa-brands fa-laravel fa-lg",title:"Lumen"}],servers:[{color:"blue",icon:"fa-brands fa-linux",title:"Linux"},{color:"red",icon:"fa-solid fa-server",title:"Solaris"},{color:"red",icon:"fa-solid fa-server",title:"Engineer Server Oracle"}],databases:[{color:"blue",icon:"fa-solid fa-database",title:"MySQL"},{color:"blue",icon:"fa-solid fa-database",title:"PostgreSQL"},{color:"red",icon:"fa-solid fa-database",title:"Firebase"},{color:"green",icon:"fa-solid fa-leaf",title:"MongoDB"}]}}},C=w,_=(e("c03d"),Object(f["a"])(C,k,x,!1,null,null,null)),j=_.exports,R=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("b-container",{staticClass:"bv-example-row mt-5",attrs:{fluid:""}},[e("b-row",[e("b-col",[e("div",{staticClass:"mb-5"},[e("hr",{staticClass:"hr-text",attrs:{"data-content":"PROJECT"}})])])],1),e("b-row",[e("b-col",[e("b-card-group",{attrs:{columns:""}},t._l(t.projects,(function(a,r){return e("b-card",{key:r,attrs:{"img-src":a.src,"img-alt":"Image","img-top":""},scopedSlots:t._u([{key:"footer",fn:function(){return[e("b-row",[e("b-col",[e("i",{class:a.icon,attrs:{color:a.color}}),t._v(" "+t._s(a.framework)+" ")]),e("b-col",[e("b-button",{attrs:{squared:"",variant:"info",size:"sm",target:"_blank",href:a.link}},[e("i",{staticClass:"fab fa-github"}),t._v(" Repositoy ")])],1)],1)]},proxy:!0}],null,!0)},[e("b-card-text",[t._v(" "+t._s(a.title)+" ")])],1)})),1)],1)],1)],1)},y=[],S={data:function(){return{projects:[{title:"Admin Larashop",link:"https://github.com/RamlanRamdani27/larashop",color:"red",src:"/img/svg/store.svg",framework:"Laravel",icon:"fa-brands fa-laravel fa-2x"},{title:"Api Larashop",link:"https://github.com/RamlanRamdani27/larashop-api",color:"red",src:"/img/svg/store.svg",framework:"Laravel",icon:"fa-brands fa-laravel"},{title:"Siswaku (Laravel versi 5.8)",link:"https://github.com/RamlanRamdani27/siswaku",color:"red",src:"/img/svg/school-svgrepo-com.svg",framework:"Laravel",icon:"fa-brands fa-laravel fa-2x"},{title:"POS Livewire Sederhana",link:"https://github.com/RamlanRamdani27/Livewire-Laravel-POS-sederhana",color:"red",src:"/img/svg/store-svgrepo-com.svg",framework:"Laravel",icon:"fa-brands fa-laravel fa-2x"},{title:"Iventori Lab",link:"https://github.com/RamlanRamdani27/iventori-lab",color:"red",src:"/img/svg/stock-svgrepo-com.svg",framework:"Codeigniter 3",icon:"fa-brands fa-free-code-camp fa-2x"},{title:"Pengajuan surat dan Pemetaan Prakerin",link:"https://github.com/RamlanRamdani27/prakerin-ci3",color:"red",src:"/img/svg/university-svgrepo-com.svg",framework:"Codeigniter 3",icon:"fa-brands fa-free-code-camp fa-2x"},{title:"OpenMusic API Backend",link:"https://github.com/RamlanRamdani27/Open-MUsic-API",color:"green",src:"/img/svg/music-svgrepo-com.svg ",framework:"HapiJS",icon:"fa-brands fa-node-js fa-2x"},{title:"OpenMusic API consumer(mail)",link:"https://github.com/RamlanRamdani27/OpenMusic-API-consumer",color:"green",src:"/img/svg/music-svgrepo-com.svg",framework:"HapiJS",icon:"fa-brands fa-node-js fa-2x"},{title:"notes-app-back-end",link:"https://github.com/RamlanRamdani27/notes-app-back-end",color:"green",src:"/img/svg/book-svgrepo-com.svg",framework:"HapiJS",icon:"fa-brands fa-node-js fa-2x"},{title:"notes-app-queue-consumer",link:"https://github.com/RamlanRamdani27/notes-app-queue-consumer",color:"green",src:"/img/svg/book-svgrepo-com.svg",framework:"HapiJS",icon:"fa-brands fa-node-js fa-2x"},{title:"MERN Blog Sederhana Backend",link:"https://github.com/RamlanRamdani27/mern-api",color:"green",src:"/img/svg/nodejs-icon-logo-svgrepo-com.svg",framework:"Express JS",icon:"fa-brands fa-node-js fa-2x"},{title:"MERN Blog Sederhana Frontend",link:"https://github.com/RamlanRamdani27/mern-blog",color:"green",src:"/img/svg/reactjs-svgrepo-com.svg",framework:"ReactJS",icon:"fa-brands fa-node-js fa-2x"},{title:"App Restoran Sederhana Backend ",link:"https://github.com/RamlanRamdani27/backend_lumen_restoran",color:"red",src:"/img/svg/lumen-svgrepo-com.svg",framework:"Lumen",icon:"fa-brands fa-laravel fa-2x"},{title:"App Restoran Sederhana Frontend",link:"https://github.com/RamlanRamdani27/frontend_react_restoran",color:"green",src:"/img/svg/reactjs-svgrepo-com.svg",framework:"ReactJS",icon:"fa-brands fa-node-js fa-2x"},{title:"VUESHOP Frontend Dari Larashop",link:"https://github.com/RamlanRamdani27/vueshop",color:"green",src:"/img/svg/store-svgrepo-com.svg",framework:"VUEJS",icon:"fa-brands fa-node-js fa-2x"}]}},computed:{}},P=S,O=(e("54d8"),Object(f["a"])(P,R,y,!1,null,null,null)),E=O.exports,M=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("b-container",{staticClass:"bv-example-row mt-5",attrs:{fluid:""}},[e("b-row",[e("b-col",[e("div",{staticClass:"mb-4"},[e("hr",{staticClass:"hr-text",attrs:{"data-content":"DOCUMENT"}})])])],1),e("b-row",{staticClass:"mt-3 mb-4"},[e("b-col",[e("div",[e("b-list-group",t._l(t.items,(function(a,r){return e("b-list-group-item",{key:r,staticClass:"flex-column align-items-start",attrs:{href:"#"}},[e("div",{staticClass:"d-flex w-100 justify-content"},[e("i",{class:a.action,attrs:{color:a.color}}),t._v(" "),e("h5",{staticClass:"mb-1"},[t._v(t._s(a.title))]),e("b-button",{staticClass:"ml-auto",attrs:{squared:"",variant:"info",size:"sm",target:"_blank",href:a.link}},[e("i",{staticClass:"fa-solid fa-link"}),t._v(" Klik ")])],1)])})),1)],1)])],1)],1)},L=[],A={data:function(){return{items:[{action:"fa-brands fa-redhat fa-2x",title:"RED HAT LINUX ESSENTIAL (RH033)",color:"red",link:"https://drive.google.com/file/d/18Oj3DvGzNX_S88NiHv7rpv0uCRnfuCTa/view?usp=sharing"},{action:"fa-brands fa-amazon fa-2x",title:"Architecting on AWS (Membangun Arsitektur Cloud di AWS)",color:"orange",link:"https://www.dicoding.com/certificates/ERZR5O802PYV"},{action:"fa-brands fa-amazon fa-2x",title:"Cloud Practitioner Essentials (Belajar Dasar AWS Cloud AWS Cloud)",color:"orange",link:"https://www.dicoding.com/certificates/6RPNK9EE5P2M"},{action:"fa-brands fa-js fa-2x",title:"Belajar Dasar Pemrograman JavaScript",color:"green",link:"https://www.dicoding.com/certificates/81P2162KOZOY"},{action:"fa-brands fa-js fa-2x",title:"Belajar Membuat Aplikasi Back-End untuk Pemula",color:"green",link:"https://www.dicoding.com/certificates/JMZVM879QZN9"},{action:"fa-brands fa-js fa-2x",title:"Belajar Fundamental Aplikasi Back-End",color:"green",link:"https://www.dicoding.com/certificates/MRZMKDYMKPYQ"},{action:"fa-solid fa-file-lines fa-2x",title:"CV",color:"blue",link:"https://drive.google.com/file/d/1ux4FZPZ-TyDHHmKVUhdJByuGPu9q9mue/view?usp=sharing"}]}}},J=A,B=Object(f["a"])(J,M,L,!1,null,null,null),D=B.exports,I={name:"App",components:{Navbar:d,Jumbotron:h,Skill:j,Project:E,Document:D},methods:{scrollIntoView:function(t){t.preventDefault()}}},T=I,H=(e("034f"),Object(f["a"])(T,s,n,!1,null,null,null)),N=H.exports,V=e("5f5b"),z=e("b1e0");e("f9e3"),e("2dd8"),e("15f5"),e("7051");r["default"].use(V["a"]),r["default"].use(z["a"]),r["default"].config.productionTip=!1,new r["default"]({render:function(t){return t(N)}}).$mount("#app")},6265:function(t,a,e){},"85ec":function(t,a,e){},"9b48":function(t,a,e){},c03d:function(t,a,e){"use strict";e("6265")},dd16:function(t,a,e){"use strict";e("0fad")}});
//# sourceMappingURL=index.d3b02ece.js.map
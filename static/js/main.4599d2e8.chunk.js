(this.webpackJsonpreddit=this.webpackJsonpreddit||[]).push([[0],{187:function(e,t,c){},188:function(e,t,c){},207:function(e,t,c){},208:function(e,t,c){},230:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c(24),a=c.n(r),i=c(15),s=c.n(i),o=c(49),l=c(31),d=c(11),u=c(87),j=c(7),h=(c(98),c(6)),b=(c(99),c(50)),f=c.n(b),O=(c(100),c(0));var p=function(e){var t=e.updateData,c=e.setSearch,r=e.minimize,a=e.setMinimize,i=(e.search,e.showResults),s=e.showFava,o=e.changeQuerySize,d=e.toggleInput,u=e.setApi,b=e.apis,p=(e.syncingData,Object(n.useRef)()),x=Object(n.useRef)(),g=Object(n.useRef)(),m=Object(n.useRef)(),v=function(e){var t,c=new URLSearchParams(e),n={},r=Object(l.a)(c.keys());try{for(r.s();!(t=r.n()).done;){var a=t.value;c.getAll(a).length>1?n[a]=c.getAll(a):n[a]=c.get(a)}}catch(i){r.e(i)}finally{r.f()}return n}(window.location.search),w=Object(n.useState)({author:v.author?v.author.replace(/ /g,""):"",subreddit:v.subreddit?v.subreddit:"",type:v.type?v.type:"",size:parseInt(v.size)?parseInt(v.size):100,score:v.score?v.score:"",before:v.before?Math.floor(new Date(v.before).getTime()/1e3*1e3):"",after:v.after?Math.floor(new Date(v.after).getTime()/1e3*1e3):"",q:v.q?v.q:"",over_18:v.over_18?v.over_18:"",stickied:v.stickied?v.stickied:"",is_self:v.is_self?v.is_self:"",locked:v.locked?v.locked:"",distinguished:v.distinguished?v.distinguished:"",id:v.id?v.id:"",link_id:v.link_id?v.link_id:""}),y=Object(j.a)(w,2),k=y[0],S=y[1],_=Object(n.useState)(!1),N=Object(j.a)(_,2),z=N[0],C=N[1];return Object(n.useEffect)((function(){var e=!1;window.location.search&&!e&&(e=!0,t(k),c(!1),a(!0),s.current.style.display="flex",i.current.style.display="block")}),[]),Object(n.useEffect)((function(){"checked"===localStorage.getItem("setting1")&&(p.current.style.display="flex",x.current.style.display="block"),"checked"===localStorage.getItem("setting2")&&(g.current.style.display="flex")})),Object(n.useEffect)((function(){"Miser"!==b||k.author?(m.current.required=!1,C(!1)):(m.current.required=!0,C(!0))}),[b,k.author]),Object(O.jsxs)("div",{id:"".concat(r?"search-query-minimized":"search-query-maximized"),children:[" ",Object(O.jsx)("div",{className:"panel-header",children:Object(O.jsxs)("h2",{id:"search-min",onClick:o,className:d?"light-search-tag":"",children:["Search Query"," ",Object(O.jsx)("i",{onClick:o,class:"fa fa-".concat(r?"plus":"minus","-square"),"aria-hidden":"true"})]})}),Object(O.jsx)("div",{id:"form-".concat(r?"hover":"parent"),onClick:r?o:"",className:d?"light-form":"",children:Object(O.jsx)("div",{id:d?"form-light":"form",children:Object(O.jsxs)("form",{onSubmit:function(e){t(k),e.preventDefault(),c(!1),a(!0),s.current.style.display="flex",i.current.style.display="block";var n="";for(var r in k)""!=n&&(n+="&"),n=(n+=r+"="+encodeURIComponent(k[r])).replace(/[^=&]+=(&|$)/g,"").replace(/&$/,""),window.location.search=n},class:"form-".concat(r?"minimize":"maximize"),children:[Object(O.jsxs)("div",{id:"row-1",children:[Object(O.jsxs)("div",{className:"row-wrapper",children:[Object(O.jsx)("label",{children:"username"}),Object(O.jsx)("input",{value:k.author,placeholder:"Username",type:"text",onChange:function(e){S(Object(h.a)(Object(h.a)({},k),{},{author:e.target.value.replace(/ /g,"")}))},ref:m,id:"author-".concat(z?"required":"input")})," "]}),Object(O.jsxs)("div",{className:"row-wrapper",children:[Object(O.jsx)("label",{children:"subreddit"}),Object(O.jsx)("input",{value:k.subreddit,placeholder:"Subreddit",type:"text",onChange:function(e){S(Object(h.a)(Object(h.a)({},k),{},{subreddit:e.target.value.replace(/ /g,"")}))},id:"subreddit-input"})," "]}),Object(O.jsxs)("div",{className:"row-wrapper",children:[Object(O.jsx)("label",{id:"search-for-input",children:"search for"}),Object(O.jsxs)("select",{onChange:function(e){S(Object(h.a)(Object(h.a)({},k),{},{type:e.target.value}))},value:k.type,children:[" ",Object(O.jsx)("option",{children:"Any"}),Object(O.jsx)("option",{children:"Comments"}),Object(O.jsx)("option",{children:"Submissions"})]})," "]})," "]}),Object(O.jsxs)("div",{id:"row-2",children:[Object(O.jsx)("div",{id:"num-input",children:Object(O.jsxs)("div",{id:"score-input",children:[Object(O.jsxs)("div",{className:"row-wrapper",children:[Object(O.jsx)("label",{children:"score"}),Object(O.jsx)("input",{placeholder:"Score",type:"number",id:"score-input-box",min:"25",step:"25",value:k.score,onChange:function(e){S(Object(h.a)(Object(h.a)({},k),{},{score:e.target.value}))}})," "]})," "]})}),Object(O.jsxs)("div",{className:"row-wrapper",children:[Object(O.jsxs)("div",{id:"before-input",children:[Object(O.jsx)("label",{children:"before"}),Object(O.jsx)(f.a,{popperProps:{positionFixed:!0},value:new Date(1e3*k.before),selected:k.before,onChange:function(e){S(Object(h.a)(Object(h.a)({},k),{},{before:e}))}})," ",Object(O.jsx)("span",{class:"fa fa-calendar-o"})]})," "]}),Object(O.jsx)("div",{className:"row-wrapper",children:Object(O.jsxs)("div",{id:"after-input",children:[Object(O.jsx)("label",{children:"after"}),Object(O.jsx)(f.a,{popperProps:{positionFixed:!0},type:"text",selected:k.after,onChange:function(e){return S(Object(h.a)(Object(h.a)({},k),{},{after:e}))}})," ",Object(O.jsx)("span",{class:"fa fa-calendar-o"})]})})," "]})," ",Object(O.jsxs)("div",{id:"advanced-row",ref:p,children:[Object(O.jsxs)("div",{className:"row-wrapper",children:[Object(O.jsx)("label",{children:"NSFW"}),Object(O.jsxs)("select",{className:"advanced-input",onChange:function(e){S(Object(h.a)(Object(h.a)({},k),{},{over_18:e.target.value}))},children:[Object(O.jsx)("option",{children:"Any"}),Object(O.jsx)("option",{children:"True"}),Object(O.jsx)("option",{children:"False"})]})," "]})," ",Object(O.jsxs)("div",{className:"row-wrapper",children:[Object(O.jsx)("label",{children:"Stickied"}),Object(O.jsxs)("select",{className:"advanced-input",onChange:function(e){S(Object(h.a)(Object(h.a)({},k),{},{stickied:e.target.value}))},children:[Object(O.jsx)("option",{children:"Any"}),Object(O.jsx)("option",{children:"True"}),Object(O.jsx)("option",{children:"False"})]})," "]})," ",Object(O.jsxs)("div",{className:"row-wrapper",children:[Object(O.jsx)("label",{children:"Is Self"}),Object(O.jsxs)("select",{className:"advanced-input",onChange:function(e){S(Object(h.a)(Object(h.a)({},k),{},{is_self:e.target.value}))},children:[Object(O.jsx)("option",{children:"Any"}),Object(O.jsx)("option",{children:"True"}),Object(O.jsx)("option",{children:"False"})]})," "]}),Object(O.jsxs)("div",{className:"row-wrapper",children:[Object(O.jsx)("label",{children:"Locked"}),Object(O.jsxs)("select",{className:"advanced-input",onChange:function(e){S(Object(h.a)(Object(h.a)({},k),{},{locked:e.target.value}))},children:[Object(O.jsx)("option",{children:"Any"}),Object(O.jsx)("option",{children:"True"}),Object(O.jsx)("option",{children:"False"})]})," "]})," ",Object(O.jsxs)("div",{className:"row-wrapper",children:[Object(O.jsx)("label",{children:"Distinguished"}),Object(O.jsxs)("select",{className:"advanced-input",onChange:function(e){S(Object(h.a)(Object(h.a)({},k),{},{distinguished:e.target.value}))},children:[Object(O.jsx)("option",{children:"Any"}),Object(O.jsx)("option",{children:"Admin"}),Object(O.jsx)("option",{children:"Moderator"})]})," "]})]}),Object(O.jsxs)("div",{id:"row-3",children:[Object(O.jsx)("div",{id:"search-term-input",children:Object(O.jsxs)("div",{className:"row-wrapper",children:[Object(O.jsx)("label",{children:"Search Terms"}),Object(O.jsx)("input",{value:k.q,placeholder:"Search Terms",type:"text",onChange:function(e){S(Object(h.a)(Object(h.a)({},k),{},{q:e.target.value}))}})," "]})}),Object(O.jsxs)("div",{className:"row-wrapper",children:[Object(O.jsx)("label",{children:"amount returned"}),Object(O.jsx)("input",{placeholder:"Size",onChange:function(e){S(Object(h.a)(Object(h.a)({},k),{},{size:parseInt(e.target.value)}))},value:k.size,type:"number",min:"25",step:"25",id:"amnt-ret"})," "]})," ",Object(O.jsxs)("div",{className:"row-wrapper",id:"api-wrapper",ref:x,children:[Object(O.jsx)("label",{children:"API"}),Object(O.jsxs)("select",{id:"advanced-api-search",onChange:function(e){u(e.target.value)},value:b,children:[Object(O.jsx)("option",{children:"Pushshift"}),Object(O.jsx)("option",{children:"Reddit"}),Object(O.jsx)("option",{children:"Miser"})]})," "]})]}),Object(O.jsxs)("div",{id:"developer-row",ref:g,children:[Object(O.jsxs)("div",{className:"row-wrapper",children:[Object(O.jsx)("label",{children:"ID"}),Object(O.jsx)("input",{placeholder:"ID",type:"text",onChange:function(e){S(Object(h.a)(Object(h.a)({},k),{},{id:e.target.value}))}})," "]})," ",Object(O.jsxs)("div",{className:"row-wrapper",children:[Object(O.jsx)("label",{children:"Link ID"}),Object(O.jsx)("input",{placeholder:"Link ID",type:"text",onChange:function(e){S(Object(h.a)(Object(h.a)({},k),{},{link_id:e.target.value.replace(/ /g,"")}))}})," "]})," "]}),Object(O.jsx)("div",{id:"row-4",children:Object(O.jsx)("div",{id:"seach-btn",children:Object(O.jsxs)("div",{className:"row-wrapper",children:[Object(O.jsx)("input",{id:"search-btn",value:"Search",type:"submit"})," "]})})})]})})})]})};c(187),c(188);var x=function(){return Object(O.jsxs)("div",{id:"loader-parent",children:[" ",Object(O.jsx)("i",{className:"fa fa-cog fa-spin",style:{color:"white",fontSize:"2em",position:"relative",display:"flex",alignContent:"center",top:"2px",fontSmooth:"auto"}})]})},g=c(53),m=c.n(g),v=c(90);var w=function(e){e.api,e.errorMessage,e.error,e.data,e.setMore;var t=e.minimizeR,c=(e.showResults,e.size,e.loadingMessage,e.searchTerm),r=(e.changeResultsSize,e.resultAmt,e.toggleInput,e.syncingData,e.loading,e.requests,e.itemCount,e.e),a=e.i,i=e.permalink,s=e.text,o=e.timeSince,l=e.postDate,d=Object(n.useRef)(!1),u=Object(n.useRef)(!1),h=Object(n.useRef)(!1),b=function(e){var t=Object(n.useState)(!1),c=Object(j.a)(t,2),r=c[0],a=c[1],i=new IntersectionObserver((function(e){var t=Object(j.a)(e,1)[0];return a(t.isIntersecting)}));return Object(n.useEffect)((function(){return i.observe(e.current),function(){i.disconnect()}}),[]),r}(h);return Object(n.useRef)(),Object(O.jsx)("div",{className:"parent",id:"results-".concat(t?"minimize":"maximize"),ref:h,children:Object(O.jsxs)("div",{className:"details",children:[" ",Object(O.jsxs)("div",{className:"image-parent",children:[r.domain?Object(O.jsxs)("div",{id:"image-child",children:["self"!==r.thumbnail&&"default"!==r.thumbnail&&"nsfw"!==r.thumbnail&&"image"!==r.thumbnail&&"spoiler"!==r.thumbnail?Object(O.jsx)("div",{id:"image",style:{backgroundImage:"url(".concat("bmp"===r.url.substring(r.url.length-3)||"jpg"===r.url.substring(r.url.length-3)||"png"===r.url.substring(r.url.length-3)||"gif"===r.url.substring(r.url.length-3)?r.url:r.thumbnail,")")}}):"","default"===r.thumbnail&&"self"===r.domain.slice(0,4)||"self"===r.thumbnail?Object(O.jsx)("div",{id:"self-post",children:Object(O.jsx)("i",{className:"fa fa-file-text-o","aria-hidden":"true"})}):"","nsfw"===r.thumbnail||"spoiler"===r.thumbnail?Object(O.jsx)("div",{id:"nsfw",children:Object(O.jsx)("i",{className:"fa fa-user-secret","aria-hidden":"true"})}):"","self"!==r.domain.slice(0,4)&&"default"===r.thumbnail||"nsfw"!==r.thumbnail&&"image"===r.thumbnail?Object(O.jsx)("div",{id:"link-post",children:Object(O.jsx)("i",{class:"fa fa-link","aria-hidden":"true"})}):""]}):"",b?Object(O.jsx)("div",{id:"align-vertically",children:Object(O.jsxs)("div",{id:"details-child",children:[Object(O.jsx)(m.a,{mark:c,children:r.title?Object(O.jsx)("div",{id:"title",ref:u,children:Object(O.jsx)("a",{id:"title-anchor",children:Object(O.jsxs)("p",{children:[Object(O.jsxs)("a",{id:"title-anchor-child",href:r.full_link||"https://reddit.com".concat(i),children:[" ",r.title]})," ",Object(O.jsxs)("a",{id:"domain",href:r.url,children:["(",r.domain,")"]})]})})}):""}),Object(O.jsxs)("a",{children:["t3"===r.kind?"submitted":"commented"," by "]}),Object(O.jsxs)("a",{className:"author",children:["u/",r.author]}),Object(O.jsxs)("a",{title:new Date(l),children:[" ",o(new Date(l))," ago in"," "]}),Object(O.jsxs)("a",{className:"subreddit",children:["r/",r.subreddit," ",r.is_deleted]}),Object(O.jsxs)("div",{id:"tags",children:[Object(O.jsx)("div",{id:"upvote",children:Object(O.jsxs)("i",{class:"fa fa-arrow-up","aria-hidden":"true",children:[" ",Object(O.jsx)("span",{id:"score",children:r.score})]})}),"t3"===r.kind?Object(O.jsx)("div",{id:"upvote-percentage",children:Object(O.jsxs)("i",{class:"fa fa-line-chart","aria-hidden":"true",children:[" ",Object(O.jsxs)("span",{id:"score",children:[r.upvote_ratio?Math.trunc(100*r.upvote_ratio):100,"%"]})]})}):""]})]})}):""]}),!(!r.body&&!r.selftext)&&Object(O.jsx)("div",{id:"body-parent",children:Object(O.jsx)(m.a,{mark:c,children:Object(O.jsx)("div",{id:"body",ref:d,children:Object(v.a)(s)})})}),b?Object(O.jsxs)("div",{className:"footer",children:[Object(O.jsx)("div",{id:"view-on-reddit",children:Object(O.jsx)("a",{href:r.full_link||"https://reddit.com".concat(i),target:"_blank",rel:"noreferrer",children:"view on reddit"})}),Object(O.jsx)("div",{id:"view-on-reddit",children:Object(O.jsx)("a",{href:"https://www.removeddit.com".concat(i),target:"_blank",rel:"noreferrer",children:"view on removeddit"})})]}):""]})},a)};c(207);var y=function(){return Object(O.jsx)("div",{children:Object(O.jsx)("h1",{id:"temp",children:"Work In Progress"})})};c(208);var k=function(){var e=Object(n.useRef)(!1),t=Object(n.useRef)(!1),c=Object(n.useRef)(!1);return Object(n.useEffect)((function(){"checked"===localStorage.getItem("setting1")&&(t.current.checked=!0),"checked"===localStorage.getItem("setting2")&&(c.current.checked=!0),"checked"===localStorage.getItem("setting3")&&(e.current.checked=!0)})),Object(O.jsxs)("div",{id:"settings-parent",children:[Object(O.jsx)("div",{className:"settings-header",children:Object(O.jsx)("h2",{id:"settings-tag",children:"Settings "})}),Object(O.jsxs)("div",{id:"settings-child",children:[Object(O.jsxs)("div",{children:[Object(O.jsx)("input",{type:"checkbox",id:"advanced-options",ref:t,onChange:function(e){var t="";e.target.checked&&(t="checked"),localStorage.setItem("setting1",t)}})," ",Object(O.jsx)("label",{for:"advanced-options",children:"Show Advanced Options"})]}),Object(O.jsxs)("div",{children:[Object(O.jsx)("input",{type:"checkbox",id:"developer-options",ref:c,onChange:function(e){var t="";e.target.checked&&(t="checked"),localStorage.setItem("setting2",t)}})," ",Object(O.jsx)("label",{for:"developer-options",children:" Show Developer Options"})]})," ",Object(O.jsxs)("div",{children:[Object(O.jsx)("input",{type:"checkbox",id:"NSFW",ref:e,onChange:function(e){var t="";e.target.checked&&(t="checked"),localStorage.setItem("setting3",t)}})," ",Object(O.jsx)("label",{for:"NSFW",children:" Hide NSFW Content"})]})]})]})},S=c(21),_=c(9),N=c(91),z=c.n(N);var C=function(){var e=c(209),t=Object(n.useState)({author:!1,subreddit:!1,type:"any",size:100,score:!1,before:!1,after:!1,q:!1,is_self:!1,id:!1,link_id:!1}),r=Object(j.a)(t,2),a=r[0],i=r[1],h=Object(n.useState)([]),b=Object(j.a)(h,2),f=b[0],g=b[1],m=Object(n.useState)(!0),v=Object(j.a)(m,2),N=v[0],C=v[1],D=Object(n.useState)(!1),I=Object(j.a)(D,2),R=I[0],M=I[1],A=Object(n.useState)(!1),P=Object(j.a)(A,2),F=P[0],T=P[1],q=Object(n.useState)(!1),E=Object(j.a)(q,2),L=E[0],K=E[1],U=Object(n.useState)(!1),J=Object(j.a)(U,2),W=J[0],X=J[1],Q=Object(n.useState)(!1),B=Object(j.a)(Q,2),H=(B[0],B[1],Object(n.useState)()),Y=Object(j.a)(H,2),$=Y[0],G=Y[1],V=Object(n.useState)(),Z=Object(j.a)(V,2),ee=(Z[0],Z[1],Object(n.useState)(0)),te=Object(j.a)(ee,2),ce=te[0],ne=te[1],re=Object(n.useState)(0),ae=Object(j.a)(re,2),ie=ae[0],se=ae[1],oe=Object(n.useState)(),le=Object(j.a)(oe,2),de=le[0],ue=le[1],je=Object(n.useState)(!1),he=Object(j.a)(je,2),be=(he[0],he[1],Object(n.useState)(!1)),fe=Object(j.a)(be,2),Oe=(fe[0],fe[1],Object(n.useState)(!1)),pe=Object(j.a)(Oe,2),xe=(pe[0],pe[1],Object(n.useState)()),ge=Object(j.a)(xe,2),me=ge[0],ve=ge[1],we=Object(n.useState)(),ye=Object(j.a)(we,2),ke=ye[0],Se=ye[1],_e=Object(n.useState)(),Ne=Object(j.a)(_e,2),ze=Ne[0],Ce=Ne[1],De=Object(n.useRef)(!1),Ie=Object(n.useRef)(!1),Re=Object(n.useRef)(!1),Me=z()(),Ae=Object(n.useState)([]),Pe=Object(j.a)(Ae,2),Fe=Pe[0],Te=Pe[1],qe=Object(n.useRef)(),Ee=Object(n.useRef)(!1),Le=c(227);Object(n.useEffect)((function(){return Me.listen((function(e){"PUSH"===Me.action&&Te([e.key]),"POP"===Me.action&&(Fe[1]===e.key?(Te((function(e){var t=Object(u.a)(e);t[0];return t.slice(1)})),window.location.reload()):(Te((function(t){return[e.key].concat(Object(d.a)(t))})),window.location.reload()))}))}),[Fe]),Object(n.useEffect)((function(){var e=window.localStorage.getItem("API");e&&G(e)}),[]),Object(n.useEffect)((function(){window.localStorage.setItem("API",$)}));var Ke=Object(n.useRef)(null),Ue=function(e){var t,c=new URLSearchParams(e),n={},r=Object(l.a)(c.keys());try{for(r.s();!(t=r.n()).done;){var a=t.value;c.getAll(a).length>1?n[a]=c.getAll(a):n[a]=c.get(a)}}catch(i){r.e(i)}finally{r.f()}return n}(window.location.search);Ue.before&&!/^\d+$/.test(Ue.before)&&(Ue.before=Math.floor(new Date(Ue.before).getTime()/1e3));var Je,We=encodeURIComponent,Xe=Object.keys(Ue).map((function(e){return We(e)+"="+We(Ue[e])})).join("&");function Qe(e){return Xe.replace(/^[^?]+\?/,""),"https://archivesort.org/discuss/reddit/miser?type=".concat(e,"&").concat(Xe)}function Be(e,t){return Xe.replace(/^[^?]+\?/,""),"https://api.pushshift.io/reddit/search/".concat(e,"/?").concat(Xe).concat(t?"&before=".concat(t):"","&html_decode=true")}Je="any"!=Ue.type&&"Any"!=Ue.type&&Ue.type?Ue.type?Ue.type.toLowerCase().slice(0,-1).split(" "):"":["submission","comment"];var He=function(e){return new Promise((function(t){return setTimeout(t,e)}))};function Ye(){return(Ye=Object(o.a)(s.a.mark((function t(){var c,n,r,i,o,l,d,u;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,c=[],n=[],r=a.size/100,i=r.toString().split(".")[0],o=parseInt(i,10),l=0,1!==Je.length){t.next=19;break}console.log(l,o,a.size),d=s.a.mark((function e(){var t,r,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=c.slice(-1)[0],console.info("fetching pushshift > 100"),ne((function(e){return e+1})),e.next=5,fetch(Be(Je[0],t||""));case 5:return r=e.sent,console.info(r.url),e.next=9,r.json();case 9:if(0!==(a=e.sent).data.length){e.next=19;break}if(0!==n.length){e.next=18;break}return console.info("break"),ve("No Results"),Ke.current.style.display="block",e.abrupt("return","break");case 18:return e.abrupt("return","break");case 19:return a.data.length>0&&se((function(e){return e+a.data.length})),c.push(a.data.slice(-1)[0].created_utc),n.push(a.data),l+=1,console.info("cooldown between request"),e.next=26,He(1500);case 26:case"end":return e.stop()}}),e)}));case 10:if(l===o){t.next=17;break}return t.delegateYield(d(),"t0",12);case 12:if("break"!==t.t0){t.next=15;break}return t.abrupt("break",17);case 15:t.next=10;break;case 17:t.next=29;break;case 19:if(!(Je.length>1)){t.next=29;break}console.log(l,o,a.size),u=s.a.mark((function t(){var r,a,i,o,d,u,j;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=c.slice(-1)[0],console.info("fetching pushshift > 100"),ne((function(e){return e+1})),t.next=5,fetch(Be("submission",r||""));case 5:return a=t.sent,t.next=8,fetch(Be("comment",r||""));case 8:if(404!==(i=t.sent).status){t.next=11;break}throw new e.AbortError(i.statusText);case 11:return console.info(i.url),console.info(a.url),t.next=15,i.json();case 15:return o=t.sent,t.next=18,a.json();case 18:if(d=t.sent,u=d?d.data.concat(o.data):"",j=u?u.sort((function(e,t){return t.created_utc-e.created_utc})):"",0!==o.data.length||0!==d.data.length){t.next=30;break}if(0!==n.length){t.next=29;break}return console.info("break"),ve("No Results"),Ke.current.style.display="block",t.abrupt("return","break");case 29:return t.abrupt("return","break");case 30:return j&&(n.push(j),c.push(j.slice(-1)[0].created_utc),se((function(e){return e+j.length}))),l+=1,console.info("cooldown between request"),t.next=35,He(1500);case 35:case"end":return t.stop()}}),t)}));case 22:if(l===o){t.next=29;break}return t.delegateYield(u(),"t1",24);case 24:if("break"!==t.t1){t.next=27;break}return t.abrupt("break",29);case 27:t.next=22;break;case 29:ue(n.concat.apply([],n)),c.length=0,n.length=0,t.next=37;break;case 34:t.prev=34,t.t2=t.catch(0),console.error(t.t2);case 37:case"end":return t.stop()}}),t,null,[[0,34]])})))).apply(this,arguments)}var $e=function(){try{g([!1]),a.size<=100?Promise.all(Je.map((function(e){return fetch(Be(e)).then((function(e){return console.info(e.url),console.info("fetching <= 100"),ne(ce+1),e.json()}))}))).then((function(e){1==Je.length?(ue(e[0].data),0===e[0].data.length?(ve("No Results"),Ke.current.style.display="block"):Ke.current.style.display="none",se((function(t){return t+e[0].data.length}))):Promise.all([].concat(Object(d.a)(e[0].data),Object(d.a)(e[1].data))).then((function(e){e.sort((function(e,t){return new Date(t.created_utc)-new Date(e.created_utc)})),0===e.length?(ve("No Results"),Ke.current.style.display="block"):Ke.current.style.display="none",se((function(t){return t+e.length})),ue(e)}))})):a.size>100&&function(){Ye.apply(this,arguments)}()}catch(e){console.log(e)}},Ge=function(){try{Promise.all(Je.map((function(e){return fetch(Be(e)).then((function(e){return console.log(e.url),e.json()}))}))).then((function(e){1==Je.length?g((function(t){return[].concat(Object(d.a)(t),Object(d.a)(e[0].data))})):Promise.all([].concat(Object(d.a)(e[0].data),Object(d.a)(e[1].data))).then((function(e){e.sort((function(e,t){return new Date(t.created_utc)-new Date(e.created_utc)})),g((function(t){return[].concat(Object(d.a)(t),Object(d.a)(e))})),Se(!1)}))}))}catch(e){console.log(e)}},Ve=function(){try{var e;g([!1]);for(var t=[],c=0;c<Je.length;c++)e=Je[c]+="s",t.push(e);Promise.all(t.map((function(e){return fetch(Qe(e)).then((function(e){return console.info(e.url),e.json()}))}))).then((function(e){1==t.length?g(e[0].data):Promise.all([].concat(Object(d.a)(e[0].data),Object(d.a)(e[1].data))).then((function(e){e.sort((function(e,t){return new Date(t.created_utc)-new Date(e.created_utc)})),0===e.length?(ve("No Results"),Ke.current.style.display="block"):Ke.current.style.display="none",console.info(e,"ITWOR"),g(e)}))}))}catch(n){console.log(n)}},Ze=function(){try{for(var e,t=[],c=0;c<Je.length;c++)e=Je[c]+="s",t.push(e);Promise.all(Je.map((function(e){return fetch(Qe(e)).then((function(e){return console.log(e.url),e.json()}))}))).then((function(e){1==t.length?g((function(t){return[].concat(Object(d.a)(t),Object(d.a)(e[0].data))})):Promise.all([].concat(Object(d.a)(e[0].data),Object(d.a)(e[1].data))).then((function(e){e.sort((function(e,t){return new Date(t.created_utc)-new Date(e.created_utc)})),g((function(t){return[].concat(Object(d.a)(t),Object(d.a)(e))})),Se(!1)}))}))}catch(n){console.log(n)}};function et(e,t){var c=(e.getTime()-t.getTime())/1e3;return c/=3600,Math.abs(Math.round(c))}var tt={tokenAuth:function(){var e=Object(o.a)(s.a.mark((function e(){var t,c,n,r,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("hiXFGUDKexlKL2LKEoyK6g","PiXF-PgFhhX1dRk57ha_-dvDdQwYwg",t=!!window.sessionStorage.getItem("reddit_access_token")&&JSON.parse(window.sessionStorage.getItem("reddit_access_token")),c=new Date,t&&!(et(new Date(t.retrieved_at),new Date(c))>=1)){e.next=16;break}return console.info("fetching a reddit access token > valid for 3600"),e.next=8,fetch("https://www.reddit.com/api/v1/access_token",{method:"post",headers:{Authorization:"Basic "+btoa("".concat("hiXFGUDKexlKL2LKEoyK6g",":").concat("PiXF-PgFhhX1dRk57ha_-dvDdQwYwg")),"Content-Type":"application/x-www-form-urlencoded"},body:"grant_type=https://oauth.reddit.com/grants/installed_client&device_id=DO_NOT_TRACK_THIS_DEVICE"});case 8:return n=e.sent,console.info(n.url),e.next=12,n.json();case 12:(r=e.sent).access_token?(a=new Date,r.retrieved_at=a,window.sessionStorage.setItem("reddit_access_token",JSON.stringify(r)),console.log(r.access_token,"TOKEN")):console.error("4xx error access token not recieved"),e.next=17;break;case 16:console.info("Using access token from sessionStorage");case 17:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),syncData:function(){var e=[];for(var t in de)de[t].domain?e.push("t3_".concat(de[t].id)):e.push("t1_".concat(de[t].id));e.join(",");for(var c=[],n=0;n<e.length;n+=100){var r=e.slice(n,n+100);c.push(r)}try{if(JSON.parse(window.sessionStorage.getItem("reddit_access_token"))&&de){var a=JSON.parse(window.sessionStorage.getItem("reddit_access_token")).access_token;Promise.all(c.map((function(e){return fetch("https://oauth.reddit.com/api/info?id=".concat(e.join(",")),{headers:{Authorization:"Bearer "+a}}).then((function(e){return e.json()}))}))).then((function(t){if(de){for(var c=0;c<t.length;c++){var n=t[c].data.children;for(var r in de)for(var a in n)de[r].id===n[a].data.id&&(de[r].upvote_ratio=n[a].data.upvote_ratio,de[r].kind=n[a].kind,"[deleted]"===n[a].data.author&&"[deleted]"===n[a].data.body||"[deleted]"===n[a].data.author&&"[deleted]"===n[a].data.selftext?de[r].is_deleted="deleted":"[removed]"!==n[a].data.body&&"[removed]"!==n[a].data.selftext||(de[r].is_deleted="removed"));console.info("synced with reddit"),X(!0),e.length=0}g(de.concat.apply([],de))}})),0===de.length&&X(!0)}}catch(i){console.log(i)}}};N||"Miser"===$||($e(),tt.tokenAuth(),C(!0),Ke.current.style.display="none"),Object(n.useEffect)((function(){var e=!1;de&&!e&&(tt.syncData(),e=!0)}),[de]),N||"Miser"!==$||(Ve(),C(!0),Ke.current.style.display="none"),Object(n.useEffect)((function(){if(R&&"Miser"!==$)if(a.size<f.length)a.size+=25,M(!1),Se(!1);else if(a.size===f.length){var e=f.slice(-1)[0].created_utc;Ue.before?Ue.before=e:Xe+="&before="+e,console.log(Xe),Ge(),Se(!0)}if(R&&"Miser"===$)if(a.size<f.length)a.size+=25,M(!1),Se(!1);else if(a.size===f.length){var t=f.slice(-1)[0].created_utc;Ue.before?Ue.before=t:Xe+="&before="+t,console.log(Xe),Ze(),Se(!0)}}));var ct=0;function nt(){K(!0),L&&K(!1)}return ct=1!==f.length||f[0]?f.length<a.size?f.length:a.size:0,Object(n.useEffect)((function(){"light"===localStorage.getItem("theme")?(Ie.current.checked=!0,Ce(!0)):(Ie.current.checked=!1,Ce(!1))})),Object(n.useEffect)((function(){ze?document.body.classList.add("light-mode"):document.body.classList.remove("light-mode")}),[ze]),Object(O.jsxs)(S.a,{basename:"",forceRefresh:!0,children:[Object(O.jsxs)("div",{className:"App",children:[Object(O.jsxs)("div",{id:"logo-parent",children:[Object(O.jsxs)("div",{id:"logo",children:[Object(O.jsxs)(S.b,{to:"/",activeClassName:"none",exact:!0,children:[Object(O.jsxs)("h1",{id:"logo-text",children:[Object(O.jsx)("i",{className:"fa fa-reddit-alien",id:"icon","aria-hidden":"true"})," ","Reddit Search Tool ",Object(O.jsx)("br",{})," "]})," "]}),Object(O.jsxs)("h2",{id:"pushift-descript",children:[Object(O.jsx)("a",{className:ze?"light-pushift":"",href:"https://pushshift.io/",target:"_blank",children:"Utilizing Pushift.io"})," "]})," "]})," "]})," ",Object(O.jsxs)("header",{children:[" ",Object(O.jsxs)("nav",{children:[" ",Object(O.jsxs)("div",{className:"container",children:[Object(O.jsxs)("ul",{children:[" ",Object(O.jsx)("li",{children:Object(O.jsx)(S.b,{to:"/",activeClassName:"active",className:"non-active",exact:!0,children:"Home"})}),Object(O.jsx)("li",{children:Object(O.jsx)(S.b,{to:"/about",activeClassName:"active",className:"non-active",children:"About"})}),Object(O.jsx)("li",{children:Object(O.jsx)(S.b,{to:"/settings",activeClassName:"active",className:"non-active",children:"Settings"})})]})," ",Object(O.jsx)("div",{id:"container-parent",children:Object(O.jsxs)("label",{id:"switch",className:"switch",children:[Object(O.jsx)("input",{type:"checkbox",id:"slider",onChange:function(e){var t="";e.target.checked?(t="light",Ce(!0)):(t="dark",Ce(!1)),localStorage.setItem("theme",t)},ref:Ie}),Object(O.jsx)("span",{className:"slider round"})]})})]})]})]}),Object(O.jsxs)(_.c,{children:[" ",Object(O.jsxs)(_.a,{path:"/",exact:!0,render:!0,children:[Object(O.jsx)("div",{id:"search-form",children:Object(O.jsx)("div",{id:"form-wrapper",children:Object(O.jsx)(p,{minimize:F,setSearch:C,search:N,updateData:i,setMinimize:T,showResults:De,showFava:Re,changeQuerySize:function(){T(!0),F&&T(!1)},toggleInput:ze,setApi:G,apis:$,syncingData:W})})}),Object(O.jsx)("div",{id:"items-parent",ref:Re,children:Object(O.jsx)("div",{children:Object(O.jsxs)("div",{id:"".concat(L?"results-minimized":""),onClick:L?nt:"",children:[Object(O.jsx)("div",{id:"results-header",children:Object(O.jsxs)("h2",{id:"results-min",onClick:nt,className:ze?"light-results-tag":"",children:["Results - ",ct," ",Object(O.jsx)("i",{onClick:nt,className:"fa fa-".concat(L?"plus":"minus","-square"),"aria-hidden":"true"})]})}),Object(O.jsxs)("div",{id:"item-".concat(L?"hover":"parent"),ref:De,className:ze?"light-results":"",children:[Object(O.jsxs)("div",{ref:Ke,id:"error",children:[" ",me]}),!W&&"No Results"!==me&&Object(O.jsxs)("div",{id:"loader-wrapper",children:[Object(O.jsx)(x,{})," ",Object(O.jsxs)("div",{id:"loading-text",children:["Loading \u2022"," ","Fetching ".concat(ie,"/").concat(a.size," items in ").concat(ce," requests")," "]})," "]}),W&&f.slice(0,a.size).map((function(e,t){var c=new Date(1e3*e.created_utc).toString();var n,r={Jan:"1",Feb:"2",Mar:"3",Apr:"4",May:"5",Jun:"6",Jul:"7",Aug:"8",Sep:"9",Oct:"10",Nov:"11",Dec:"12"}[c.slice(4,7)];if(!e)return qe.current.style.display="none",Object(O.jsxs)("div",{id:"loader-wrapper",children:[Object(O.jsx)(x,{},t)," ",Object(O.jsxs)("div",{id:"loading-text",children:["Loading \u2022 Results"," "]})," "]});e.permalink?n=e.permalink:e.link_id&&(n="/comments/".concat(e.link_id.split("_")[1],"/_/").concat(e.id));c.slice(8,10),c.slice(11,15);if(f.length>0&&Ee){qe.current.style.display="block",L&&(qe.current.style.display="none"),a.size>f.length&&(qe.current.style.display="none"),0===f.length?Ke.current.style.display="block":Ke.current.style.display="none";var s=Le.getParser().render(e.body?e.body:e.selftext?e.selftext:"");return Object(O.jsx)(w,{api:f,query:a.query,minimizeR:L,errorMessage:me,error:Ke,data:i,setMore:M,showResults:De,size:a.size,loadingMessage:ke,searchTerm:a.q,changeResultsSize:nt,resultAmt:ct,toggleInput:ze,syncingData:W,requests:ce,itemCount:ie,e:e,i:t,permalink:n,postDate:c,text:s,timeSince:function(e){var t=Math.floor((new Date-e)/1e3),c=t/31536e3;return c>1?Math.floor(c)+" years":(c=t/2592e3)>1?Math.floor(c)+" months":(c=t/86400)>1?Math.floor(c)+" days":(c=t/3600)>1?Math.floor(c)+" hours":(c=t/60)>1?Math.floor(c)+" minutes":Math.floor(t)+" seconds"}})}qe.current.style.display="none"}))," ",Object(O.jsx)("button",{id:"load-more",onClick:R,ref:qe,children:ke?"Loading...":"Load More"})]})," "]})})})]})," ",Object(O.jsx)(_.a,{path:"/about",children:Object(O.jsx)("div",{children:Object(O.jsx)(y,{})})}),Object(O.jsxs)(_.a,{path:"/settings",children:[" ",Object(O.jsx)("div",{children:Object(O.jsx)(k,{})})]})]})]})," "]})},D=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,232)).then((function(t){var c=t.getCLS,n=t.getFID,r=t.getFCP,a=t.getLCP,i=t.getTTFB;c(e),n(e),r(e),a(e),i(e)}))};a.a.render(Object(O.jsx)(C,{}),document.getElementById("root")),D()},98:function(e,t,c){},99:function(e,t,c){}},[[230,1,2]]]);
//# sourceMappingURL=main.4599d2e8.chunk.js.map
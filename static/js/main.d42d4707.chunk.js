(this.webpackJsonpreddit=this.webpackJsonpreddit||[]).push([[0],{171:function(e,t,r){},172:function(e,t,r){},173:function(e,t,r){},179:function(e,t,r){"use strict";r.r(t);var c=r(1),i=r(21),s=r.n(i),a=r(40),n=r.n(a),d=r(71),l=r(12),o=(r(82),r(9)),j=r(72),b=(r(83),r(41)),u=r.n(b),h=(r(84),r(0));var O=function(e){var t=e.updateData,r=e.setSearch,i=e.minimize,s=e.setMinimize,a=(e.search,e.showResults),n=e.showFava,d=function(e){var t,r=new URLSearchParams(e),c={},i=Object(j.a)(r.keys());try{for(i.s();!(t=i.n()).done;){var s=t.value;r.getAll(s).length>1?c[s]=r.getAll(s):c[s]=r.get(s)}}catch(a){i.e(a)}finally{i.f()}return c}(window.location.search),b=Object(c.useState)({username:d.username?d.username:"",subreddit:d.subreddit?d.subreddit:"",query:d.query?d.query:"",numReturned:d.numReturned?d.numReturned:100,score:d.score?d.score:"",before:d.before?Math.floor(new Date(d.before).getTime()/1e3*1e3):"",after:d.after?Math.floor(new Date(d.after).getTime()/1e3*1e3):"",searchTerm:d.searchTerm?d.searchTerm:""}),O=Object(l.a)(b,2),f=O[0],m=O[1];function x(e,t,r){var c="",i=e.split("?"),s=i[0],a=i[1],n="";if(a){i=a.split("&");for(var d=0;d<i.length;d++)i[d].split("=")[0]!==t&&(c+=n+i[d],n="&")}return s+"?"+c+(n+""+t+"="+r)}var p=x(window.location.href,"locId","newLoc");p=x(p,"resId","newResId"),Object(c.useEffect)((function(){var e=!1;window.location.search&&!e&&(e=!0,t(f),r(!1),s(!0),n.current.style.display="flex",a.current.style.display="block")}),[]);var v=Object(c.useRef)();return Object(h.jsx)("div",{id:"form-".concat(i?"hover":"parent"),children:Object(h.jsx)("div",{id:"form",children:Object(h.jsxs)("form",{onSubmit:function(e){t(f),e.preventDefault(),r(!1),s(!0),n.current.style.display="flex",a.current.style.display="block";var c=[];for(var i in f)for(var d in f){f.hasOwnProperty(d)&&"function"!==typeof f[d]&&c.push(d);var l=f[i];l&&window.history.replaceState("","",x(window.location.href,i,l))}},class:"form-".concat(i?"minimize":"maximize"),ref:v,children:[Object(h.jsxs)("div",{id:"row-1",children:[Object(h.jsxs)("div",{className:"row-wrapper",children:[Object(h.jsx)("label",{children:"username"}),Object(h.jsx)("input",{value:f.username,placeholder:"Username",type:"text",onChange:function(e){m(Object(o.a)(Object(o.a)({},f),{},{username:e.target.value}))},id:"username-input"})," "]}),Object(h.jsxs)("div",{className:"row-wrapper",children:[Object(h.jsx)("label",{children:"subreddit"}),Object(h.jsx)("input",{value:f.subreddit,placeholder:"Subreddit",type:"text",onChange:function(e){m(Object(o.a)(Object(o.a)({},f),{},{subreddit:e.target.value}))},id:"subreddit-input"})," "]}),Object(h.jsxs)("div",{className:"row-wrapper",children:[Object(h.jsx)("label",{id:"search-for-input",children:"search for"}),Object(h.jsxs)("select",{onChange:function(e){m(Object(o.a)(Object(o.a)({},f),{},{query:e.target.value}))},children:[" ",Object(h.jsx)("option",{children:"Any"}),Object(h.jsx)("option",{children:"Comments"}),Object(h.jsx)("option",{children:"Submissions"})]})," "]})]}),Object(h.jsxs)("div",{id:"row-2",children:[Object(h.jsx)("div",{id:"num-input",children:Object(h.jsxs)("div",{id:"score-input",children:[Object(h.jsxs)("div",{className:"row-wrapper",children:[Object(h.jsx)("label",{children:"score"}),Object(h.jsx)("input",{placeholder:"Score",type:"number",id:"score-input-box",min:"25",step:"25",value:f.score,onChange:function(e){m(Object(o.a)(Object(o.a)({},f),{},{score:e.target.value}))}})," "]})," "]})}),Object(h.jsxs)("div",{className:"row-wrapper",children:[Object(h.jsxs)("div",{id:"before-input",children:[Object(h.jsx)("label",{children:"before"}),Object(h.jsx)(u.a,{popperProps:{positionFixed:!0},value:f.before,selected:f.before,onChange:function(e){m(Object(o.a)(Object(o.a)({},f),{},{before:e}))}})," ",Object(h.jsx)("span",{class:"fa fa-calendar-o"})]})," "]}),Object(h.jsx)("div",{className:"row-wrapper",children:Object(h.jsxs)("div",{id:"after-input",children:[Object(h.jsx)("label",{children:"after"}),Object(h.jsx)(u.a,{popperProps:{positionFixed:!0},type:"text",selected:f.after,onChange:function(e){return m(Object(o.a)(Object(o.a)({},f),{},{after:e}))}})," ",Object(h.jsx)("span",{class:"fa fa-calendar-o"})]})})]})," ",Object(h.jsxs)("div",{id:"row-3",children:[Object(h.jsx)("div",{id:"search-term-input",children:Object(h.jsxs)("div",{className:"row-wrapper",children:[Object(h.jsx)("label",{children:"keywords"}),Object(h.jsx)("input",{value:f.searchTerm,placeholder:"Keywords",type:"text",onChange:function(e){m(Object(o.a)(Object(o.a)({},f),{},{searchTerm:e.target.value}))}})," "]})}),Object(h.jsxs)("div",{className:"row-wrapper",children:[Object(h.jsx)("label",{children:"amount returned"}),Object(h.jsx)("input",{placeholder:"Size",onChange:function(e){m(Object(o.a)(Object(o.a)({},f),{},{numReturned:e.target.value}))},value:f.numReturned,type:"number",min:"25",step:"25",max:"100",id:"amnt-ret"})," "]})]}),Object(h.jsx)("div",{id:"row-4",children:Object(h.jsx)("div",{id:"seach-btn",children:Object(h.jsxs)("div",{className:"row-wrapper",children:[Object(h.jsx)("input",{id:"search-btn",value:"Search",type:"submit"})," "]})})})]})})})};r(171),r(172);var f=function(){return Object(h.jsx)("div",{id:"loader-parent",children:Object(h.jsx)("div",{id:"loading"})})};var m=function(e){var t=e.api,r=(e.query,e.errorMessage),i=e.error,s=(e.data,e.setMore,e.minimizeR),a=e.showResults,n=Object(c.useRef)(!1);return Object(c.useRef)(),Object(c.useRef)(),console.log(t),Object(h.jsxs)("div",{id:"item-".concat(s?"hover":"parent"),ref:a,children:[Object(h.jsxs)("h1",{ref:i,children:[" ",r," \ud83d\ude22 "]}),t.map((function(e,r){var c=new Date(1e3*e.created_utc).toString();var i,a={Jan:"1",Feb:"2",Mar:"3",Apr:"4",May:"5",Jun:"6",Jul:"7",Aug:"8",Sep:"9",Oct:"10",Nov:"11",Dec:"12"}[c.slice(4,7)];if(!e)return Object(h.jsxs)("div",{id:"loader-wrapper",children:[Object(h.jsx)(f,{},r)," ",Object(h.jsx)("div",{id:"loading-text",children:"Loading \u2022 Results "})," "]});i=e.permalink?e.permalink:"/comments/".concat(e.link_id.split("_")[1],"/_/").concat(e.id);c.slice(8,10),c.slice(11,15);return t.length>0&&n?Object(h.jsx)("div",{className:"parent",id:"results-".concat(s?"minimize":"maximize"),children:Object(h.jsxs)("div",{className:"details",children:[" ",Object(h.jsxs)("div",{className:"image-parent",children:[e.domain?Object(h.jsxs)("div",{id:"image-child",children:["self"!==e.thumbnail&&"default"!==e.thumbnail&&"nsfw"!==e.thumbnail&&"image"!==e.thumbnail&&"spoiler"!==e.thumbnail?Object(h.jsx)("div",{id:"image",style:{backgroundImage:"url(".concat(e.thumbnail,")")}}):"","default"===e.thumbnail&&"self"===e.domain.slice(0,4)||"self"===e.thumbnail?Object(h.jsx)("div",{id:"self-post",children:Object(h.jsx)("i",{className:"fa fa-file-text-o","aria-hidden":"true"})}):"","nsfw"===e.thumbnail||"spoiler"===e.thumbnail?Object(h.jsx)("div",{id:"nsfw",children:Object(h.jsx)("i",{className:"fa fa-user-secret","aria-hidden":"true"})}):"","self"!==e.domain.slice(0,4)&&"default"===e.thumbnail||"nsfw"!==e.thumbnail&&"image"===e.thumbnail?Object(h.jsx)("div",{id:"link-post",children:Object(h.jsx)("i",{class:"fa fa-link","aria-hidden":"true"})}):""]}):"",Object(h.jsx)("div",{id:"align-vertically",children:Object(h.jsxs)("div",{id:"details-child",children:[e.title?Object(h.jsxs)("h3",{id:"title",children:[e.title," ",Object(h.jsxs)("a",{id:"domain",children:["(",e.domain,")"]})]}):"",Object(h.jsxs)("a",{children:[e.domain?"submitted":"commented"," by "]}),Object(h.jsxs)("a",{className:"author",children:["u/",e.author]}),Object(h.jsxs)("a",{title:new Date(c),children:[" ",function(e){var t=Math.floor((new Date-e)/1e3),r=t/31536e3;return r>1?Math.floor(r)+" years":(r=t/2592e3)>1?Math.floor(r)+" months":(r=t/86400)>1?Math.floor(r)+" days":(r=t/3600)>1?Math.floor(r)+" hours":(r=t/60)>1?Math.floor(r)+" minutes":Math.floor(t)+" seconds"}(new Date(c))," ago in"," "]}),Object(h.jsxs)("a",{className:"subreddit",children:["r/",e.subreddit]}),Object(h.jsx)("div",{id:"upvote",children:Object(h.jsxs)("i",{class:"fa fa-arrow-up","aria-hidden":"true",children:[" ",Object(h.jsx)("span",{id:"score",children:e.score})]})})]})})]}),!(!e.body&&!e.selftext)&&Object(h.jsx)("div",{id:"body-parent",children:Object(h.jsxs)("p",{id:"body",children:[e.body,e.selftext]})}),Object(h.jsxs)("div",{className:"footer",children:[Object(h.jsx)("div",{id:"view-on-reddit",children:Object(h.jsx)("a",{href:e.full_link||"https://reddit.com".concat(i),target:"_blank",rel:"noreferrer",children:"view on reddit"})}),Object(h.jsx)("div",{id:"view-on-reddit",children:Object(h.jsx)("a",{href:"https://www.removeddit.com".concat(i),target:"_blank",rel:"noreferrer",children:"view on removeddit"})})]})]})},r):void 0}))]})};r(173);var x=function(){return Object(h.jsx)("div",{children:Object(h.jsx)("h1",{id:"temp",children:"Work In Progress"})})};var p=function(){return Object(h.jsx)("div",{children:Object(h.jsx)("h1",{id:"temp",children:"Work In Progress"})})},v=r(18),w=r(7),g=r(75);r.n(g)()();var y=function(){var e=Object(c.useState)({username:!1,subreddit:!1,query:!1,numReturned:100,score:!1,before:!1,after:!1,searchTerm:!1}),t=Object(l.a)(e,2),r=t[0],i=t[1],s=Object(c.useState)([]),a=Object(l.a)(s,2),o=a[0],j=a[1],b=Object(c.useState)(!0),u=Object(l.a)(b,2),f=u[0],g=u[1],y=Object(c.useState)(!1),N=Object(l.a)(y,2),R=N[0],S=N[1],k=Object(c.useState)(!1),C=Object(l.a)(k,2),M=C[0],T=C[1],q=Object(c.useState)(!1),z=Object(l.a)(q,2),D=z[0],F=z[1],P=Object(c.useState)(!1),_=Object(l.a)(P,2),I=(_[0],_[1],Object(c.useState)(!1)),A=Object(l.a)(I,2),L=(A[0],A[1],Object(c.useState)(!1)),J=Object(l.a)(L,2),U=(J[0],J[1],Object(c.useState)()),B=Object(l.a)(U,2),E=B[0],W=B[1],H=Object(c.useRef)(!1),K=Object(c.useRef)(!1),Q=Object(c.useRef)(null),G="",V="comment",X="",Y="",Z="";function $(){return ee.apply(this,arguments)}function ee(){return(ee=Object(d.a)(n.a.mark((function e(){var t,r;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,j([!1]),e.next=4,fetch("https://api.pushshift.io/reddit/search/".concat(V,"/?").concat(G).concat(Z).concat(Y).concat(X));case 4:return t=e.sent,console.log(t),e.next=8,t.json();case 8:0===(r=e.sent).data.length?(W("No data!"),Q.current.style.display="block"):Q.current.style.display="none",j(r.data),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),console.log(e.t0);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})))).apply(this,arguments)}if(r.username&&(G+="author="+r.username.replace(/\s/g,"")+"&"),r.subreddit&&(G+="subreddit="+r.subreddit.replace(/\s/g,"")+"&"),r.searchTerm&&(G+="q="+r.searchTerm.replace(/\s/g,"")+"&"),r.numReturned&&(G+="size="+r.numReturned+"&"),r.query.length>0&&(V=r.query.toLowerCase().slice(0,-1)),r.before&&(Y+="before="+Math.floor(new Date(r.before).getTime()/1e3)+"&",X=""),r.after&&(Z+="after="+Math.floor(new Date(r.after).getTime()/1e3)+"&"),r.score&&(G+="score=>"+r.score+"&"),f||($(),Q.current.style.display="none",g(!0)),R){var te=o.slice(-1)[0].created_utc;X+="before="+te+"&",Y="",Z="",$(),S(!1)}function re(){T(!0),M&&T(!1)}function ce(){F(!0),D&&F(!1)}return Object(h.jsxs)(v.a,{basename:"/reddit-search-tool",forceRefresh:!0,children:[Object(h.jsxs)("div",{className:"App",children:[Object(h.jsxs)("div",{id:"logo-parent",children:[Object(h.jsxs)("div",{id:"logo",children:[Object(h.jsxs)(v.b,{to:"/",activeClassName:"none",exact:!0,children:[Object(h.jsxs)("h1",{id:"logo-text",children:[Object(h.jsx)("i",{class:"fa fa-reddit-alien",id:"icon","aria-hidden":"true"})," ","Reddit Search Tool ",Object(h.jsx)("br",{})," "]})," "]}),Object(h.jsx)("h2",{id:"pushift-descript",children:Object(h.jsx)("a",{href:"https://pushshift.io/",target:"_blank",children:"Utilizing Pushift.io"})})]})," "]})," ",Object(h.jsx)("header",{children:Object(h.jsx)("nav",{children:Object(h.jsxs)("ul",{children:[Object(h.jsx)("li",{children:Object(h.jsx)(v.b,{to:"/",activeClassName:"active",className:"non-active",exact:!0,children:"Home"})}),Object(h.jsx)("li",{children:Object(h.jsx)(v.b,{to:"/about",activeClassName:"active",className:"non-active",exact:!0,children:"About"})}),Object(h.jsx)("li",{children:Object(h.jsx)(v.b,{to:"/settings",activeClassName:"active",className:"non-active",exact:!0,children:"Settings"})})]})})}),Object(h.jsxs)(w.c,{children:[" ",Object(h.jsxs)(w.a,{path:"/",exact:!0,render:!0,children:[Object(h.jsx)("div",{id:"search-form",children:Object(h.jsxs)("div",{id:"form-wrapper",children:[Object(h.jsx)("div",{className:"panel-header",children:Object(h.jsxs)("h2",{id:"search-min",onClick:re,children:["Search Query"," ",Object(h.jsx)("i",{onClick:re,class:"fa fa-".concat(M?"plus":"minus","-square"),"aria-hidden":"true"})]})}),Object(h.jsx)(O,{minimize:M,setSearch:g,search:f,updateData:i,setMinimize:T,showResults:H,showFava:K})]})}),Object(h.jsx)("div",{id:"items-parent",ref:K,children:Object(h.jsxs)("div",{children:[Object(h.jsx)("div",{id:"results-header",children:Object(h.jsxs)("h2",{id:"results-min",onClick:ce,children:["Results - ",o?o.length:0," ",Object(h.jsx)("i",{onClick:ce,class:"fa fa-".concat(D?"plus":"minus","-square"),"aria-hidden":"true"})]})}),Object(h.jsx)(m,{api:o,query:r.query,minimizeR:D,errorMessage:E,error:Q,data:i,setMore:S,showResults:H})]})})]})," ",Object(h.jsx)(w.a,{path:"/about",children:Object(h.jsx)(x,{})}),Object(h.jsx)(w.a,{path:"/settings",children:Object(h.jsx)(p,{})})]})]})," "]})},N=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,181)).then((function(t){var r=t.getCLS,c=t.getFID,i=t.getFCP,s=t.getLCP,a=t.getTTFB;r(e),c(e),i(e),s(e),a(e)}))};s.a.render(Object(h.jsx)(y,{}),document.getElementById("root")),N()},82:function(e,t,r){},83:function(e,t,r){}},[[179,1,2]]]);
//# sourceMappingURL=main.d42d4707.chunk.js.map
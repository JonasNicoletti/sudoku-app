(this["webpackJsonpsudoku-app"]=this["webpackJsonpsudoku-app"]||[]).push([[0],{20:function(r,n,e){},34:function(r,n,e){"use strict";e.r(n);var t,i=e(1),a=e.n(i),c=e(4),o=e.n(c),s=(e(20),e(3)),u=e(13),l=e.n(u);e(21);!function(r){r[r.small=4]="small",r[r.normal=9]="normal"}(t||(t={}));var f=e(2),d=0;function v(r){var n=new Array(r).fill(0).map((function(){return new Array(r).fill(0)}));j(r,n);for(var e=y(n),t=0;t<5;){for(var i=p(Array.from(Array(r).keys())),a=p(Array.from(Array(r).keys()));0===n[i][a];)i=p(Array.from(Array(r).keys())),a=p(Array.from(Array(r).keys()));var c=n[i][a];n[i][a]=0;var o=y(n);d=0,m(r,o),1!==d&&(n[i][a]=c,t+=1)}return{solvedGrid:e,grid:n.map((function(r){return r.map((function(r){return{value:r,isCorrect:0!==r,isDeletable:0===r}}))}))}}function j(r,n){for(var e=Array.from({length:r},(function(r,n){return n+1})),t=Math.sqrt(r),i=Array.from({length:t},(function(r,n){return{from:n*t,to:(n+1)*t}})),a=0,c=0,o=0;o<r*r;o++)if(a=Math.floor(o/r),c=o%r,0===n[a][c]){e=O(e);var s,u=Object(f.a)(e);try{for(u.s();!(s=u.n()).done;){var l=s.value;if(!n[a].includes(l)){var d=n.map((function(r){return r[c]}));if(!d.includes(l)){var v,m=[],h=Object(f.a)(i);try{for(h.s();!(v=h.n()).done;){var p=v.value;if(a>=p.from&&a<p.to){var y,g=Object(f.a)(i);try{for(g.s();!(y=g.n()).done;){var x=y.value;if(c>=x.from&&c<x.to)for(var N=p.from;N<p.to;N++)for(var k=x.from;k<x.to;k++)m.push(n[N][k])}}catch(A){g.e(A)}finally{g.f()}}}}catch(A){h.e(A)}finally{h.f()}if(!m.includes(l)){if(n[a][c]=l,b(n))return!0;if(j(r,n))return!0}}}}}catch(A){u.e(A)}finally{u.f()}break}n[a][c]=0}function m(r,n){for(var e=Array.from({length:r},(function(r,n){return n+1})),t=Math.sqrt(r),i=Array.from({length:t},(function(r,n){return{from:n*t,to:(n+1)*t}})),a=0,c=0,o=0;o<r*r;o++)if(a=Math.floor(o/r),c=o%r,0===n[a][c]){var s,u=Object(f.a)(e);try{for(u.s();!(s=u.n()).done;){var l=s.value;if(!n[a].includes(l)){var v=n.map((function(r){return r[c]}));if(!v.includes(l)){var j,h=[],O=Object(f.a)(i);try{for(O.s();!(j=O.n()).done;){var p=j.value;if(a>=p.from&&a<p.to){var y,g=Object(f.a)(i);try{for(g.s();!(y=g.n()).done;){var x=y.value;if(c>=x.from&&c<x.to)for(var N=p.from;N<p.to;N++)for(var k=x.from;k<x.to;k++)h.push(n[N][k])}}catch(A){g.e(A)}finally{g.f()}}}}catch(A){O.e(A)}finally{O.f()}if(!h.includes(l)){if(n[a][c]=l,b(n)){d+=1;break}if(m(r,n))return!0}}}}}catch(A){u.e(A)}finally{u.f()}break}n[a][c]=0}function b(r){for(var n=0;n<r.length;n++)for(var e=0;e<r[n].length;e++)if(0===r[n][e])return!1;return!0}function h(r){var n,e=Object(f.a)(r);try{for(e.s();!(n=e.n()).done;){var t,i=n.value,a=Object(f.a)(i);try{for(a.s();!(t=a.n()).done;){var c=t.value;if(!c.isCorrect||0===c.value)return!1}}catch(o){a.e(o)}finally{a.f()}}}catch(o){e.e(o)}finally{e.f()}return!0}function O(r){for(var n=r.length-1;n>0;n--){var e=Math.floor(Math.random()*(n+1)),t=[r[e],r[n]];r[n]=t[0],r[e]=t[1]}return r}function p(r){return r[Math.floor(Math.random()*r.length)]}var y=function r(n){if(null===n)return n;if(n instanceof Array){var e=[];return n.forEach((function(r){e.push(r)})),e.map((function(n){return r(n)}))}if("object"===typeof n&&n!=={}){var t=Object(s.a)({},n);return Object.keys(t).forEach((function(n){t[n]=r(t[n])})),t}return n},g=t.normal,x=v(g),N=x.solvedGrid,k=x.grid,A=function(r,n){return{solvedGrid:N,grid:k,setGrid:function(n){var e=v(n),t=e.solvedGrid,i=e.grid;r((function(){return{solvedGrid:t,grid:i}}))},getCell:function(r,e){return n().grid[r][e]},setCell:function(e,t,i){var a=n().grid,c=n().size,o=a.map((function(r){return r.map((function(r){return r.value}))}));a[e][t].isCorrect=function(r,n,e,t,i){var a=Math.sqrt(i),c=Array.from({length:a},(function(r,n){return{from:n*a,to:(n+1)*a}}));if(!r[n].includes(t)){var o=r.map((function(r){return r[e]}));if(!o.includes(t)){var s,u=[],l=Object(f.a)(c);try{for(l.s();!(s=l.n()).done;){var d=s.value;if(n>=d.from&&n<d.to){var v,j=Object(f.a)(c);try{for(j.s();!(v=j.n()).done;){var m=v.value;if(e>=m.from&&e<m.to)for(var b=d.from;b<d.to;b++)for(var h=m.from;h<m.to;h++)u.push(r[b][h])}}catch(O){j.e(O)}finally{j.f()}}}}catch(O){l.e(O)}finally{l.f()}if(!u.includes(t))return!0}}return!1}(o,e,t,i,c),a[e][t].value=i;var s=h(a);return r({grid:a,isRunning:!s,isOver:s}),!0}}};var C=l()((function(r,n){return Object(s.a)(Object(s.a)(Object(s.a)({},function(r,n){return{size:g,setSize:function(n){var e=v(n),t=e.solvedGrid,i=e.grid;r({solvedGrid:t,grid:i,size:n})}}}(r)),A(r,n)),function(r,n){return{isOver:!1,isRunning:!1,setIsRunning:function(n){return r({isRunning:n})},isNew:!0,setIsNew:function(e){if(e){var t=v(n().size),i=t.solvedGrid,a=t.grid;r({solvedGrid:i,grid:a})}r({isNew:e})},hint:function(){var e=n(),t=e.solvedGrid,i=e.grid;r:for(var a=0;a<i.length;a++)for(var c=i[a],o=0;o<c.length;o++){var s=c[o];if(0===s.value){s.value=t[a][o],s.isCorrect=!0;break r}}var u=h(i);r({grid:i,isOver:u,isRunning:!u})}}}(r,n))})),w=e(0);var M=function(r){var n=r.displayName,e=r.onClick,t=r.isActive,i=r.disabled;return Object(w.jsx)("input",{type:"button",className:"button-controller-button ".concat(t?"border":""),value:n,onClick:function(){return e()},disabled:i})};var z=function(){var r=C(),n=r.isRunning,e=r.setIsRunning,t=r.isNew,i=r.setIsNew,a=r.hint;return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(M,{displayName:"Start",onClick:function(){e(!0),i(!1)},isActive:!1,disabled:n}),Object(w.jsx)(M,{displayName:"New",onClick:function(){e(!1),i(!0)},isActive:!1,disabled:t}),Object(w.jsx)(M,{displayName:"Hint",onClick:function(){return a()},isActive:!1})]})};var G=function(){var r=C(),n=r.size,e=r.setSize,i=r.isRunning;return Object(w.jsxs)("div",{className:"size-controller",children:[Object(w.jsx)(M,{displayName:t[t.small],onClick:function(){return e(t.small)},isActive:n===t.small,disabled:i}),Object(w.jsx)(M,{displayName:t[t.normal],onClick:function(){return e(t.normal)},isActive:n===t.normal,disabled:i})]})},R=e(14);var S=function(){var r=C().isRunning,n=Object(R.useStopwatch)({autoStart:!1}),e=n.seconds,t=n.minutes,a=n.pause,c=n.reset;return Object(i.useEffect)((function(){r?c():a()}),[r]),Object(w.jsxs)("div",{className:"clock",children:[Object(w.jsxs)("div",{className:"minutes",children:[Object(w.jsx)("div",{className:"first",children:Object(w.jsx)("div",{className:"number",children:Math.floor(t/10)})}),Object(w.jsx)("div",{className:"second",children:Object(w.jsx)("div",{className:"number",children:t%10})})]}),Object(w.jsx)("div",{className:"tick",children:":"}),Object(w.jsxs)("div",{className:"seconds",children:[Object(w.jsx)("div",{className:"first",children:Object(w.jsx)("div",{className:"number",children:Math.floor(e/10)})}),Object(w.jsx)("div",{className:"second infinite",children:Object(w.jsx)("div",{className:"number",children:e%10})})]})]})};var I=function(){return Object(w.jsxs)("div",{className:"control-panel",children:[Object(w.jsxs)("div",{className:"control-panel-header",children:[Object(w.jsx)("h2",{children:"Control Panel"}),Object(w.jsx)(S,{})]}),Object(w.jsx)(z,{}),Object(w.jsx)(G,{})]})},E=e(15),F=e(8),q=e.n(F),B={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",display:"flex",justifyContent:"space-around",flexWrap:"wrap"}},D=function(r){return 0===r?"":r};var P=function(r){var n=r.row,e=r.column,t=r.hasBorder;q.a.setAppElement("#root");for(var a=C((function(r){return r})),c=a.getCell,o=a.setCell,s=a.size,u=a.isNew,l=Object(i.useState)(!1),f=Object(E.a)(l,2),d=f[0],v=f[1],j=c(n,e),m=j.value,b=j.isDeletable,h=[],O=function(r){h.push(Object(w.jsx)("div",{className:"value-input",onClick:function(){o(n,e,r)},children:0===r?"-":r},r))},p=0;p<s+1;p++)O(p);return Object(w.jsxs)("div",{className:"cell ".concat(t?"border":""," ").concat(d?"active":""," ").concat(b?"":"fix"),onClick:function(){return v(b&&!d)},children:[Object(w.jsx)("span",{className:u?"blur":"",children:D(m)}),Object(w.jsx)(q.a,{isOpen:d,onAfterClose:function(){return v(!1)},style:B,children:h.map((function(r){return r}))})]})};function J(r,n){return(r+1)%Math.sqrt(n)===0}var L=function(r){for(var n=r.index,e=r.size,t=[],i=0;i<e;i++){var a=Object(w.jsx)(P,{hasBorder:J(i,e),row:n,column:i},i);t.push(a)}return Object(w.jsx)("div",{className:J(n,e)?"row border":"row",children:t.map((function(r){return r}))})};var T=function(){for(var r=C((function(r){return r.size})),n=[],e=0;e<r;e++)n.push(Object(w.jsx)(L,{index:e,size:r},e));return Object(w.jsx)("div",{className:"grid",children:n.map((function(r){return r}))})};var H=function(){return Object(w.jsxs)("div",{className:"app",children:[Object(w.jsx)(T,{}),Object(w.jsx)(I,{})]})},W=function(r){r&&r instanceof Function&&e.e(3).then(e.bind(null,35)).then((function(n){var e=n.getCLS,t=n.getFID,i=n.getFCP,a=n.getLCP,c=n.getTTFB;e(r),t(r),i(r),a(r),c(r)}))};o.a.render(Object(w.jsx)(a.a.StrictMode,{children:Object(w.jsx)(H,{})}),document.getElementById("root")),W()}},[[34,1,2]]]);
//# sourceMappingURL=main.31211309.chunk.js.map
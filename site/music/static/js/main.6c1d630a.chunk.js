(this.webpackJsonpmusic=this.webpackJsonpmusic||[]).push([[0],{101:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(28),l=a.n(r),s=(a(92),a(8)),i=(a(93),a(153)),o=a(149),b=a(160),u=a(154),d=a(155),j=a(150),h=a(152),f=a(71),m=a(157),O=a(148),x=a(15),p=["C","D","E","F","G","A","B"],v=[2,2,1,2,2,2,1],g=["","m","m","","","m","dim"],C={ionian:0,dorian:1,mixolydian:4},S=Array.from(Object.keys(C));function y(e,t){var a=e.slice(),n=a.splice(0,t);return a.push.apply(a,Object(x.a)(n)),a}function k(e,t){return e.slice(t).reduce((function(e,t){return e+t}),0)}var D=["C","C#","Db","D","D#","Eb","E","F","F#","Gb","G","G#","Ab","A","A#","Bb","B"],F=a(68),M=a.n(F),A=a(2),B={angle:20,spread:360,startVelocity:40,elementCount:70,dragFriction:.12,duration:3e3,stagger:3,width:"10px",height:"10px",perspective:"500px",colors:["#a864fd","#29cdff","#78ff44","#ff718d","#fdff6a"]},E=Object(f.a)({palette:{text:{primary:"#DC79D6",secondary:"#DC79D6"},background:{paper:"#141313"}}});var w=function(){var e=n.useState(D[0]),t=Object(s.a)(e,2),a=t[0],c=t[1],r=n.useState(S[0]),l=Object(s.a)(r,2),f=l[0],x=l[1],F=n.useState(1),w=Object(s.a)(F,2),G=w[0],I=w[1],N=n.useState(null),P=Object(s.a)(N,2),z=P[0],T=P[1],J=n.useState("random"),K=Object(s.a)(J,2),L=K[0],U=K[1],V=n.useState("random"),W=Object(s.a)(V,2),q=W[0],H=W[1],Q=n.useState(7),R=Object(s.a)(Q,2),X=R[0],Y=R[1],Z=n.useState(!1),$=Object(s.a)(Z,2),_=$[0],ee=$[1],te=n.useCallback((function(){var e="random"===L?D[Math.floor(Math.random()*D.length)]:L,t="random"===q?S[Math.floor(Math.random()*S.length)]:q,a=Math.floor(Math.random()*X)+1;T(function(e,t,a){var n=0,c=e.split(""),r=Object(s.a)(c,2),l=r[0],i=r[1];"b"===i&&(n=-1),"#"===i&&(n=1);var o=p.indexOf(l),b=t-1,u=y(p,o),d=y(v,o),j=y(v,C[a]),h=y(g,C[a]),f=u[b],m=h[b],O=k(j,b)-k(d,b)-n,x="";return-1===O&&(x="#"),1===O&&(x="b"),f+x+m}(e,a,t)),c(e),I(a),x(t)}),[L,q,X]),ae=n.useCallback((function(e){e.preventDefault(),e.target[0].value===z&&(ee(!0),te(),setTimeout((function(){return ee(!1)}),5),e.target[0].value="")}),[te,z]),ne=n.useCallback((function(e){U(e.target.value)}),[]),ce=n.useCallback((function(e){H(e.target.value)}),[]),re=n.useCallback((function(e){Y(e.target.value)}),[]);return n.useEffect(te,[te]),Object(A.jsx)(m.a,{theme:E,children:Object(A.jsx)("div",{className:"App",children:Object(A.jsxs)("header",{className:"App-header",children:[Object(A.jsx)("h1",{children:f[0].toUpperCase()+f.slice(1)}),Object(A.jsxs)("p",{children:["What is chord number ",G," in the key of ",a]}),Object(A.jsx)("form",{onSubmit:ae,children:Object(A.jsxs)("span",{children:[Object(A.jsx)(M.a,{active:_,config:B}),Object(A.jsx)(i.a,{id:"answer",variant:"filled",size:"normal",autoComplete:"off",inputProps:{style:{fontSize:40}},autoFocus:!0}),Object(A.jsx)(o.a,{title:"Press enter to check. Example answer formats: Gbm, A#, B",children:Object(A.jsx)(b.a,{children:Object(A.jsx)(O.a,{fontSize:"large"})})})]})}),Object(A.jsx)("br",{}),Object(A.jsxs)(u.a,{children:[Object(A.jsx)(d.a,{id:"key-label",children:"Key"}),Object(A.jsx)(j.a,{labelId:"key-label",id:"keySelect",value:L,label:"Key",onChange:ne,children:["random"].concat(D).map((function(e){return Object(A.jsx)(h.a,{value:e,children:e},e)}))})]}),Object(A.jsx)("br",{}),Object(A.jsxs)(u.a,{children:[Object(A.jsx)(d.a,{id:"mode-label",children:"Mode"}),Object(A.jsx)(j.a,{labelId:"mode-label",id:"modeSelect",value:q,label:"Mode",onChange:ce,children:["random"].concat(S).map((function(e){return Object(A.jsx)(h.a,{value:e,children:e},e)}))})]}),Object(A.jsx)("br",{}),Object(A.jsxs)(u.a,{children:[Object(A.jsx)(d.a,{id:"num-label",children:"Numbers"}),Object(A.jsxs)(j.a,{labelId:"num-label",id:"numSelect",value:X,label:"Numbers",onChange:re,children:[Object(A.jsx)(h.a,{value:7,children:"1-7"}),Object(A.jsx)(h.a,{value:13,children:"1-13"})]})]})]})})})},G=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,161)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,l=t.getTTFB;a(e),n(e),c(e),r(e),l(e)}))};l.a.render(Object(A.jsx)(c.a.StrictMode,{children:Object(A.jsx)(w,{})}),document.getElementById("root")),G()},92:function(e,t,a){},93:function(e,t,a){}},[[101,1,2]]]);
//# sourceMappingURL=main.6c1d630a.chunk.js.map
(this["webpackJsonptypeof-sjsonc-web"]=this["webpackJsonptypeof-sjsonc-web"]||[]).push([[0],{146:function(e,n,t){},147:function(e,n,t){"use strict";t.r(n);var r=t(0),o=t.n(r),c=t(12),a=t.n(c),i=t(36),l=t(19),s=t(37),u=t(193),f=t(194),b=t(195),d=t(196),p=t(197),j=t(223),h=t(198),m=t(224),v=t(228),g=t(199),O=t(200),x=t(117),y=t(225),C=t(97);function w(e){return(w="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function k(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==t)return;var r,o,c=[],a=!0,i=!1;try{for(t=t.call(e);!(a=(r=t.next()).done)&&(c.push(r.value),!n||c.length!==n);a=!0);}catch(l){i=!0,o=l}finally{try{a||null==t.return||t.return()}finally{if(i)throw o}}return c}(e,n)||S(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function I(e){return function(e){if(Array.isArray(e))return M(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||S(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function S(e,n){if(e){if("string"===typeof e)return M(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?M(e,n):void 0}}function M(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}var A=function(e,n){return e.line<n.line||e.line===n.line&&e.column<n.column},T=function(e,n){return e.line>n.line||e.line===n.line&&e.column>n.column},N=function(e,n){return e.line===n.line},E=function(e){return function(n){return A(e.end,n.start)}},L=function(e,n){return function(t){return N(e.end,t.start)&&N(t.start,t.end)&&A(e.end,t.start)&&void 0!==n&&T(n.start,t.end)}},R=function(e){return function(n){return Object(u.a)(A(e.start,n.start),T(e.end,n.end))}},z=function(e){return void 0===e};function B(e){var n=e.slice(0);return function(e,t,r,o){if(Object(j.a)(n))return[];for(var c=function(e,n,t,r){return function(o){return Object(f.a)([(c=e,function(e){return T(c.start,e.end)}),Object(b.a)([Object(d.a)(Object(p.a)(n)),Object(d.a)(z(r)),R(t)]),Object(b.a)([Object(d.a)(n),Object(d.a)(z(r)),E(t),R(t)]),Object(b.a)([R(t),L(e,r)])])(o);var c}}(e,t,r,o),a=n.length,i=[];a--;)c(n[a].loc)&&i.unshift.apply(i,I(n.splice(a,1)));return i}}var P=function(e){return Object(h.a)("type","ObjectPattern",e)},D=function(e){return Object(h.a)("type","ArrayPattern",e)},F=function(e){return Object(h.a)("type","ObjectProperty",e)},W=function(e){return function(n){Object(m.a)(n,e)||e.push(n)}},q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];return{kind:"Object",comments:t,markCount:1,name:e,children:n}},H=function(e){return Object(h.a)("kind","Object",e)},J=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];return{kind:"Array",comments:t,markCount:1,name:e,children:n}},U=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];return{kind:"Element",comments:t,markCount:1,name:e,types:n}},$=function(e){return Object(h.a)("kind","Element",e)},V=Object(f.a)([function(e){return Object(h.a)("kind","Array",e)},H]);function G(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"root";n=Array.isArray(n)?n:[n];var t=C.a(e),r=B(t.comments),o=new Map;function c(e,n,t,c,a,i){var l,s,u;(o.has(t)?(l=o.get(t)).markCount+=1:(l=c(n),o.set(t,l)),P(e)||D(e))?(s=l.comments).push.apply(s,I(r(e.loc,!0,a.loc,null===i||void 0===i?void 0:i.loc))):(u=l.comments).push.apply(u,I(r(e.loc,!1,a.loc,null===i||void 0===i?void 0:i.loc)));return l}function a(e,n,t,r,o){var i=P(e)?c(e,n,t,q,r,o):c(e,n,t,J,r,o),l=W(i.children);return e.children.forEach((function(r,o){var i=n,s=r,u=t,f=e.children[o+1];if(F(r)){var b=r.key;s=r.value,i=b.value,u="".concat(t,"_").concat(i)}if(P(s))l(a(s,i,u+"{}",e,f));else if(D(s))l(a(s,i,u+"[]",e,f));else{var d=c(s,i,u+"$",U,e,f),p=w(s.value);W(d.types)(null===s.value?"null":p),l(d)}})),i}return t.body.map((function(e,r,o){var c=n[r]||n[0]+r;return a(e,c,c,t,o[r+1])}))}var _=Object(v.a)({disallowComments:!1,separate:!1,prefix:""});function X(e){return e.substr(0,1).toLocaleUpperCase()+e.slice(1).replace(/-(\w)/g,(function(e,n){return n.toUpperCase()}))}function Y(e){for(var n="";e--;)n+="\t";return n}var K=function(e){return function(n,t){if(e)return"";var r=(n=Object(g.a)([Object(O.a)(Object(x.a)(["loc","start","line"])),Object(O.a)(Object(x.a)(["loc","start","column"]))],n)).reduce((function(e,n){var t;return t=n,Object(h.a)("type","BlockComment",t)?e.push.apply(e,I(n.value)):e.push(n.value),e}),[]);if(0===r.length)return"";if(1===r.length)return"".concat(Y(t),"/** ").concat(r[0]," */\n");var o="".concat(Y(t),"/**\n");return r.forEach((function(e){o+="".concat(Y(t)," * ").concat(e,"\n")})),o+="".concat(Y(t)," */\n")}},Q=function(e){return function(n){return X(e)+X(n)}};function Z(e,n){var t=_(n),r=t.disallowComments,o=t.prefix,c=Q(o),a=K(r);function i(e,n){var t=!1,r=e.children.reduce((function(e,r){return $(r)?e.push.apply(e,I(r.types)):(t=!0,H(r)?e.push(l(r,n)):e.push(i(r,n))),e}),[]);return 0===r.length?"any[]":1===r.length?t?"Array<".concat(r[0],">"):"".concat(r[0],"[]"):"Array<".concat(r.join("|"),">")}function l(e,n){var t={};e.children.forEach((function(e){var n=t[e.name];n?n.push(e):t[e.name]=[e]}));var r="{\n";return Object.entries(t).forEach((function(t){var o=k(t,2),c=o[0],s=o[1],u=0,f=[],b=s.map((function(e){return u+=e.markCount,f.push.apply(f,I(e.comments)),$(e)?function(e){var n=e.types.length,t=I(e.types);return 0===n?"any":1===n?t[0]:t.join("|")}(e):H(e)?l(e,n+1):i(e,n+1)})),d="any";1===b.length?d=b[0]:b.length>1&&(d=b.join("|"));var p=e.markCount>u?"".concat(c,"?: ").concat(d):"".concat(c,": ").concat(d);f.length>0&&(r+=a(f,n+1)),r+="".concat(Y(n+1)).concat(p,";\n")})),r+="".concat(Y(n),"}")}return e.map((function(e){return H(e)?"".concat(a(e.comments,0),"export interface ").concat(c(e.name)," ").concat(l(e,0)):"".concat(a(e.comments,0),"export type ").concat(c(e.name)," = ").concat(i(e,0))})).join("\n\n")}function ee(){var e=new Set;return function n(t){return e.has(t)?n(function(e){return/\d+$/.test(e)?e.replace(/\d+$/,(function(e){return"".concat(Number.parseInt(e,10)+1)})):e+1}(t)):(e.add(t),t)}}function ne(e,n,t){return{node:e,replace:function(r){r.markCount=e.markCount,t.splice(n,1,r)}}}function te(e){for(var n,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=Q(null!==(n=t.prefix)&&void 0!==n?n:""),o=[],c=e.length,a=ee(),i=Object(y.a)(e).map(ne);i.length;){var l=i.shift(),s=l.node,u=l.replace;if(V(s)){var f=H(s);if(c>o.length||f){var b=a(s.name);o.push(Object(v.a)(s,{name:b})),f&&u(U(s.name,[r(b)]))}i.push.apply(i,I(s.children.map(ne)))}}return o}var re,oe,ce,ae=t(98),ie=t.n(ae),le=t(99),se=t.n(le),ue=t(11),fe=t(90),be=t(107),de=t.n(be),pe=t(111),je=t.n(pe),he=t(108),me=t.n(he),ve=t(226),ge=(t(142),t(143),t(149)),Oe=t(227),xe=t(109),ye=new(t.n(xe).a)({id:"kXD2YxMe7J2oAzeWb1",reportApiSpeed:!0,reportAssetSpeed:!0,spa:!0}),Ce=t(3),we=ue.b.div(re||(re=Object(l.a)(["\n    position: relative;\n    height: 100%;\n    width: 100%;\n"]))),ke=ue.b.div(oe||(oe=Object(l.a)(["\n  right: 10px;\n  top: 10px;\n  position: absolute;\n  z-index: 10;\n  cursor: pointer;\n  user-select: none;\n"])));function Ie(e){var n,t=Object(r.useRef)(null),o=Object(s.a)({value:null!==(n=e.value)&&void 0!==n?n:"",editor:void 0,showMsg:!1}),c=Object(i.a)(o,2),a=c[0],l=c[1];Object(r.useLayoutEffect)((function(){if(t.current){var n,r,o=de()(t.current,{value:null!==(n=e.value)&&void 0!==n?n:"",mode:"default",theme:"darcula",readOnly:null!==(r=e.disabled)&&void 0!==r&&r,lineNumbers:!0,lineWrapping:!0});l((function(e){e.editor=o})),o.on("change",(function(n){var t,r=n.getValue();l((function(e){e.value=r})),null===(t=e.onChange)||void 0===t||t.call(e,r)}))}}),[]),Object(r.useEffect)((function(){var n=a.editor,t=a.value;n&&e.value!==t&&"string"===typeof e.value&&n.setValue(e.value)}),[e.value]);var u=Object(r.useMemo)((function(){return e.copyable?Object(Ce.jsxs)(Ce.Fragment,{children:[Object(Ce.jsx)(ke,{children:Object(Ce.jsx)(Oe.a,{title:"Copy",placement:"left",children:Object(Ce.jsx)(me.a,{text:a.value,onCopy:function(){ye.report("copy"),l((function(e){e.showMsg=!0}))},children:Object(Ce.jsx)(ge.a,{children:Object(Ce.jsx)(je.a,{style:{color:"#fff"}})})})})}),Object(Ce.jsx)(ve.a,{anchorOrigin:{vertical:"top",horizontal:"right"},open:a.showMsg,autoHideDuration:1500,onClose:function(){return l((function(e){e.showMsg=!1}))},message:"\u590d\u5236\u6210\u529f"})]}):null}),[a.showMsg,e.copyable]);return Object(Ce.jsxs)(we,{children:[Object(Ce.jsx)(we,{ref:t}),u]})}var Se=ue.b.a(ce||(ce=Object(l.a)(["\n    display: inline-block;\n    user-select: none;\n    cursor: pointer;\n"])));function Me(){return Object(Ce.jsx)(Se,{href:"https://github.com/wulunyi/typeof-sjsonc-web",children:Object(Ce.jsx)("svg",{height:"24",viewBox:"0 0 16 16",version:"1.1",width:"24","aria-hidden":"true",fill:"rgb(102, 178, 255)",children:Object(Ce.jsx)("path",{fillRule:"evenodd",d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"})})})}var Ae=t(150),Te=t(210),Ne=t(212),Ee=t(229),Le=t(112),Re=t.n(Le),ze=t(207),Be=t(83),Pe=t(231),De=Object(ze.a)({root:{"&":{marginLeft:"-2px",marginTop:"10px"},"& .MuiFormLabel-root":{color:"#fff",fontSize:"1rem",transform:"translate(0, -10px) scale(1)",fontWeight:"400",lineHeight:"1.5"},"& .MuiInputBase-root":{backgroundColor:"#fff",paddingLeft:"6px",paddingRight:"6px",borderRadius:"4px",boxsizing:"border-box",overflow:"hidden"},"& .MuiInputBase-input":{height:"1.3em"}}});function Fe(e){var n=De();return Object(Ce.jsx)(Pe.a,Object(Be.a)({className:n.root,fullWidth:!0,margin:"dense"},e))}var We=t(4),qe=t(222),He=Object(ze.a)({root:{"&:hover":{backgroundColor:"transparent"}},icon:{borderRadius:3,width:16,height:16,boxShadow:"inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)",backgroundColor:"#f5f8fa",backgroundImage:"linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))","$root.Mui-focusVisible &":{outline:"2px auto rgba(19,124,189,.6)",outlineOffset:2},"input:hover ~ &":{backgroundColor:"#ebf1f5"},"input:disabled ~ &":{boxShadow:"none",background:"rgba(206,217,224,.5)"}},checkedIcon:{backgroundColor:"#137cbd",backgroundImage:"linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))","&:before":{display:"block",width:16,height:16,backgroundImage:"url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23fff'/%3E%3C/svg%3E\")",content:'""'},"input:hover ~ &":{backgroundColor:"#106ba3"}}});function Je(e){var n=He();return Object(Ce.jsx)(qe.a,Object(Be.a)({className:n.root,disableRipple:!0,color:"default",checkedIcon:Object(Ce.jsx)("span",{className:Object(We.a)(n.icon,n.checkedIcon)}),icon:Object(Ce.jsx)("span",{className:n.icon}),inputProps:{"aria-label":"decorative checkbox"}},e))}var Ue,$e=t(213),Ve=t(113),Ge=t.n(Ve),_e=t(78),Xe=ue.b.div(Ue||(Ue=Object(l.a)(["\n    display: flex; \n    align-items: center; \n    justify-content: space-between;\n    margin: 10px 0;\n"]))),Ye=Object(ze.a)({root:{"& .MuiFormLabel-root":{color:"#fff",display:"flex",alignItems:"center"}},body:{paddingLeft:"12px"}}),Ke={name:"root",useTableInput:!1,options:{disallowComments:!1,separate:!0,prefix:""}};function Qe(e){var n,t=Ye(),o=Object(s.a)(null!==(n=e.value)&&void 0!==n?n:Ke),c=Object(i.a)(o,2),a=c[0],l=c[1];return Object(r.useEffect)((function(){e.value!==a&&l((function(n){var t;t=e.value}))}),[e.value]),Object(r.useEffect)((function(){var n;null===(n=e.onChange)||void 0===n||n.call(e,a)}),[a]),Object(r.useEffect)((function(){Object(_e.a)("ctrl+`",(function(){l((function(e){e.useTableInput=!e.useTableInput}))}))}),[]),Object(Ce.jsxs)(Te.a,{component:"fieldset",fullWidth:!0,className:t.root,children:[Object(Ce.jsx)(Xe,{children:Object(Ce.jsxs)(Ae.a,{focused:!1,component:"legend",children:[Object(Ce.jsx)(Re.a,{}),"\xa0\xa0Render Settings"]})}),Object(Ce.jsxs)(Ne.a,{className:t.body,children:[Object(Ce.jsx)(Fe,{label:"Interface Name",value:a.name,placeholder:"root",onChange:function(e){ye.report("settings.name"),l((function(n){n.name=e.target.value}))}}),Object(Ce.jsx)(Fe,{label:"Prefix",value:a.options.prefix,placeholder:"\u524d\u7f00",onChange:function(e){ye.report("settings.prefix"),l((function(n){n.options.prefix=e.target.value}))}}),Object(Ce.jsx)(Ee.a,{control:Object(Ce.jsx)(Je,{name:"disallowComments",checked:a.options.disallowComments,onChange:function(e,n){ye.report("settings.disallowComments"),l((function(e){e.options.disallowComments=n}))}}),label:"Disable Comments"}),Object(Ce.jsx)(Ee.a,{control:Object(Ce.jsx)(Je,{name:"separate",checked:a.options.separate,onChange:function(e,n){ye.report("settings.separate"),l((function(e){e.options.separate=n}))}}),label:"Separate Mode"})]}),Object(Ce.jsxs)(Xe,{children:[Object(Ce.jsxs)(Ae.a,{focused:!1,component:"legend",children:[Object(Ce.jsx)(Ge.a,{}),"\xa0\xa0From Table"]}),Object(Ce.jsx)($e.a,{checked:a.useTableInput,onChange:function(e,n){ye.report("settings.useTableInput"),l((function(e){e.useTableInput=n}))},color:"primary"})]}),Object(Ce.jsxs)("div",{style:{display:"flex",alignItems:"center",marginTop:"10px"},children:[Object(Ce.jsx)("img",{style:{width:"100px"},src:"https://vsassetscdn.azure.cn/v/M193_20210922.8/_content/Header/vs-logo.png",alt:"icon"}),Object(Ce.jsx)("a",{style:{marginLeft:"10px",color:"#fff"},href:"https://marketplace.visualstudio.com/items?itemName=wulunyi.vsce-typeof-sjsonc",children:"vscode \u63d2\u4ef6"})]})]})}var Ze=t(216),en=t(220),nn=t(219),tn=t(215),rn=t(217),on=t(218),cn=t(206),an=t(115),ln=t.n(an),sn=t(116),un=t.n(sn),fn=t(114),bn=t(67);function dn(e){return e.innerText}function pn(e){var n=e.querySelector("thead"),t=function(e){var n=e.querySelectorAll("tr");return Object(bn.a)(n).map((function(e){return[].concat(Object(bn.a)(e.querySelectorAll("th")),Object(bn.a)(e.querySelectorAll("td"))).map(dn)})).filter((function(e){return e.length>0}))}(e.querySelector("tbody")||e),r=function(e){return Object(bn.a)(e.querySelectorAll("th")).map(dn)}(n||e);return t.length>0&&0===r.length&&(r=t.shift()),{body:t,head:r}}var jn,hn,mn,vn,gn=t(211),On=t(221),xn=t(230),yn=t(214),Cn=ue.b.div(jn||(jn=Object(l.a)(["\n    padding: 10px 10px 0 10px;\n    height: 100%;\n    width: 100%;\n    background: #2B2B2B;\n    box-sizing: border-box;\n    overflow: hidden;\n    display: flex;\n    flex-direction: column;\n"]))),wn=ue.b.div(hn||(hn=Object(l.a)(["\n    height: 50px;\n    flex-shrink: 0;\n"]))),kn=ue.b.div(mn||(mn=Object(l.a)(["\n    flex: 1;\n    overflow: scroll;\n"]))),In=ue.b.div(vn||(vn=Object(l.a)(["\n    border: 1px dashed grey;\n    box-sizing: border-box;\n    color: #fff;\n    height: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    opacity: 0.2;\n"]))),Sn=Object(ze.a)({table:{minWidth:650},select:{"&":{minWidth:"120px",maxWidth:"300px"},"& .MuiSelect-root, & .MuiFormLabel-root, & .MuiSvgIcon-root":{color:"#fff",fontSize:"14px"},"& .MuiFormLabel-root.MuiInputLabel-shrink":{transform:"translate(0, 1.5px) scale(1)"},"& .MuiInput-underline:before":{border:"none"}},buttonPanel:{"&":{height:"50px"},"& .MuiIconButton-root":{padding:"0"}}});function Mn(e){var n=Sn(),t=Object(s.a)({table:{head:[],body:[]},settings:{name:0,type:1,comments:2},showMsg:!1}),o=Object(i.a)(t,2),c=o[0],a=o[1],l=Object(r.useCallback)((function(){return function(e,n){var t=n.name,r=n.type,o=n.comments,c="{\n";return e.forEach((function(e){var n=e[r];if(Number.isNaN(Number(n))){var a=n.toLocaleUpperCase();switch(n='"'.concat(n,'"'),a){case"DATE":case"TIMESTAMP":n=Date.now();break;case"LONG":case"INT":case"BIGINT":case"TINYINT":n=0;break;case"VARCHAR":case"STRING":case"TEXT":case"CHAR":case"STR":n='"mock text"';break;case"BOOLEAN":case"BOOL":n=!0}}var i=e[t].split(/\s+/);if(0!==i.length){var l=Object(fn.a)(i),s=l[0],u=l.slice(1),f=1===i.length?s:"".concat(s).concat(u.map((function(e){return"".concat(e.slice(0,1).toLocaleUpperCase()).concat(e.slice(1))})));c+='\t"'.concat(f,'": ').concat(n,", // ").concat(e[o]," \n")}})),c+="}"}(c.table.body,c.settings)}),[c.table,c.settings]);return Object(r.useEffect)((function(){var n;null===(n=e.onChange)||void 0===n||n.call(e,l())}),[l]),Object(Ce.jsxs)(Cn,{children:[Object(Ce.jsx)(wn,{children:Object(Ce.jsxs)(yn.a,{container:!0,children:[Object(Ce.jsx)(yn.a,{item:!0,xs:8,children:!!c.table.head.length&&["name","type","comments"].map((function(e){return Object(Ce.jsxs)(Te.a,{size:"small",className:n.select,children:[Object(Ce.jsxs)(gn.a,{id:"demo-simple-select-label",children:[e," column"]}),Object(Ce.jsx)(On.a,{value:c.settings[e],label:"name",onChange:function(n){a((function(t){t.settings[e]=n.target.value}))},children:c.table.head.map((function(e,n){return Object(Ce.jsx)(xn.a,{value:n,children:e},n)}))})]},e)}))}),Object(Ce.jsxs)(yn.a,{item:!0,xs:4,container:!0,justifyContent:"flex-end",alignItems:"center",className:n.buttonPanel,children:[Object(Ce.jsx)(Oe.a,{title:"Delete Table",children:Object(Ce.jsx)(ge.a,{children:Object(Ce.jsx)(ln.a,{style:{color:"#fff",cursor:"pointer"},onClick:function(){a((function(e){e.table={head:[],body:[]}}))}})})}),Object(Ce.jsx)(Oe.a,{title:"Reset",children:Object(Ce.jsx)(ge.a,{children:Object(Ce.jsx)(un.a,{style:{color:"#fff",cursor:"pointer"},onClick:function(){var n;null===(n=e.onChange)||void 0===n||n.call(e,l())}})})})]})]})}),Object(Ce.jsxs)(kn,{onPaste:function(e){var n=function(e){return e.querySelector("table")}(function(e){var n=document.createElement("div");return n.innerHTML=e,n}(function(e){return e.clipboardData.getData("text/html")}(e)));if(ye.report("pasteTable"),function(e){return null!==e}(n)){var t=pn(n);a((function(e){e.table=t}))}else a((function(e){e.showMsg=!0}))},children:[Object(Ce.jsx)(ve.a,{anchorOrigin:{vertical:"bottom",horizontal:"right"},open:c.showMsg,autoHideDuration:1500,onClose:function(){return a((function(e){e.showMsg=!1}))},message:"\u7c98\u8d34\u5185\u5bb9\u65e0\u6cd5\u89e3\u6790\uff0c\u8bf7\u68c0\u67e5\u7c98\u8d34\u5185\u5bb9\u662f\u5426\u4e3a\u8868\u683c"}),0===c.table.head.length&&0===c.table.body.length&&Object(Ce.jsx)(In,{children:"\u590d\u5236\u8868\u683c\u5728\u6b64\u533a\u57df\u7c98\u8d34"}),Object(Ce.jsx)(tn.a,{component:cn.a,children:Object(Ce.jsxs)(Ze.a,{className:n.table,"aria-label":"simple table",children:[Object(Ce.jsx)(rn.a,{children:Object(Ce.jsx)(on.a,{children:c.table.head.map((function(e,n){return Object(Ce.jsx)(nn.a,{children:e},n)}))})}),Object(Ce.jsx)(en.a,{children:c.table.body.map((function(e,n){return Object(Ce.jsx)(on.a,{children:e.map((function(e,n){return Object(Ce.jsx)(nn.a,{children:e},n)}))},n)}))})]})})]})]})}var An,Tn,Nn,En,Ln,Rn=function(e,n){return localStorage.setItem(e,JSON.stringify(n))},zn=function(e){var n=localStorage.getItem(e);try{return n?JSON.parse(n):null}catch(t){return null}},Bn="render-settings",Pn=ue.b.div(An||(An=Object(l.a)(["\n  position: relative;\n  height: 100%;\n  width: 100%;\n  min-width: 500px;\n  min-height: 400px;\n"]))),Dn=ue.b.div(Tn||(Tn=Object(l.a)(["\n  height: 100%;\n  width: 100%;\n  display: flex;\n"]))),Fn=ue.b.div(Nn||(Nn=Object(l.a)(["\n  width: 258px;\n  background-color: rgb(44, 49, 56);\n  flex-shrink: 0;\n  padding: 10px;\n  box-sizing: border-box;\n  color: #fff;\n  user-select: none;\n"]))),Wn=ue.b.div(En||(En=Object(l.a)(["\n\tposition: fixed;\n\ttop: 50px;\n\tright: 10px;\n\tz-index: 999;\n"]))),qn={sjsonc:"{\n    // \u5c5e\u6027\u5e26\u53cc\u5f15\u53f7\n    \"code\": 0,\n    // \u5c5e\u6027\u5e26\u5355\u5f15\u53f7\n    'data': { \n        /** \n         * \u591a\u884c\u6ce8\u91ca \n         * \u591a\u884c\u6ce8\u91ca\n         */\n        list: [{\n            name: 'hello', // \u5c5e\u6027\u4e0d\u5e26\u5f15\u53f7\n            age: 18\n        }, {\n            name: \"world\",\n            age: 16,\n            nickName: 'lucky' // \u5c3e\u90e8\u5355\u884c\u6ce8\u91ca\n        }]\n    }\n}",typeofResult:"",settings:null!==(Ln=zn(Bn))&&void 0!==Ln?Ln:Ke};function Hn(){var e=Object(s.a)(qn),n=Object(i.a)(e,2),t=n[0],o=n[1],c=Object(r.useCallback)((function(e){var n=t.settings;try{o((function(n){n.sjsonc=e}));var r=function(e){var n=arguments.length>2?arguments[2]:void 0,t=G(e,arguments.length>1&&void 0!==arguments[1]?arguments[1]:"root");return Z(null!==n&&void 0!==n&&n.separate?te(t,n):t,n)}(e,""===se()(n.name)?Ke.name:ie()(n.name),n.options);o((function(e){e.typeofResult=r}))}catch(c){o((function(e){e.typeofResult=c.message}))}}),[t.settings]);Object(r.useEffect)((function(){c(t.sjsonc)}),[c]),Object(r.useEffect)((function(){Object(_e.a)("ctrl+c,command+c",(function(e){ye.report("event.copy")}))}),[]);var a=Object(r.useMemo)((function(){var e=Object(Ce.jsx)(Pn,{children:Object(Ce.jsxs)(fe.a,{split:"vertical",children:[Object(Ce.jsx)(Pn,{children:Object(Ce.jsx)(Ie,{value:t.sjsonc,onChange:c})}),Object(Ce.jsx)(Pn,{children:Object(Ce.jsx)(Ie,{value:t.typeofResult,disabled:!0,copyable:!0})})]})});return t.settings.useTableInput?Object(Ce.jsxs)(fe.a,{split:"horizontal",children:[Object(Ce.jsx)(Pn,{children:e}),Object(Ce.jsx)(Pn,{children:Object(Ce.jsx)(Mn,{onChange:c})})]}):e}),[t.settings.useTableInput,t.sjsonc,t.typeofResult]);return Object(Ce.jsxs)(Pn,{children:[Object(Ce.jsx)(Wn,{children:Object(Ce.jsx)(Oe.a,{title:"Star And Issues",placement:"left",children:Object(Ce.jsx)(ge.a,{children:Object(Ce.jsx)(Me,{})})})}),Object(Ce.jsxs)(Dn,{children:[Object(Ce.jsx)(Fn,{children:Object(Ce.jsx)(Qe,{value:t.settings,onChange:function(e){o((function(n){n.settings=e})),Rn(Bn,e)}})}),Object(Ce.jsx)(Pn,{children:a})]})]})}var Jn=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,233)).then((function(n){var t=n.getCLS,r=n.getFID,o=n.getFCP,c=n.getLCP,a=n.getTTFB;t(e),r(e),o(e),c(e),a(e)}))};t(146);ye.reportPv(124941),a.a.render(Object(Ce.jsx)(o.a.StrictMode,{children:Object(Ce.jsx)(Hn,{})}),document.getElementById("root")),Jn()}},[[147,1,2]]]);
//# sourceMappingURL=main.2e159ef2.chunk.js.map
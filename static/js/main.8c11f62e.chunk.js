(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{105:function(e,t,a){e.exports={thirtyBlock:"thirdBlock_thirtyBlock__3V-IV",zeroId:"thirdBlock_zeroId__2y0z7",contactId:"thirdBlock_contactId__2cat7"}},108:function(e,t,a){e.exports={chat:"chat_chat__1aYIB"}},116:function(e,t,a){e.exports={desktop:"main_desktop__1r1QW"}},118:function(e,t,a){e.exports={mobileSecondBlock:"mobileSecondBlock_mobileSecondBlock__9jwDt"}},119:function(e,t,a){e.exports={mobileThirdBlock:"mobileThirdBlock_mobileThirdBlock__1Huzk"}},136:function(e,t,a){},142:function(e,t,a){},144:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(8),i=a(15),o=a(185),l=a(91),s=a.n(l),m=a(92),u=a.n(m),f=a(60),d=a.n(f),g=a(61),p=a.n(g),E=a(192),_=a(186),b=a(187),h={avatarSize:{width:66,height:66},iconSize:{width:36,height:36}},j=a(28),v=a.n(j),k=a(190),O=a(193),w=a(65),x=a.n(w),y=a(59),N=a.n(y),C=function(e){var t=e.setOpen,a=localStorage.getItem("avatar");return c.a.createElement(k.a,{className:x.a.changeAvatarCard},c.a.createElement(E.a,{onClick:function(){return t(!1)}},c.a.createElement(N.a,null)),c.a.createElement(O.a,{className:x.a.changeAvatarContent},c.a.createElement("label",{htmlFor:"avatar-file"},c.a.createElement("input",{onChange:function(e){e.target.files.length&&Array.from(e.target.files).forEach(function(e){if(!e.type.match("image"))return null;var a=new FileReader;a.onload=function(e){localStorage.setItem("avatar",e.target.result)},a.readAsDataURL(e),t(!1)})},id:"avatar-file",type:"file",accept:"jpeg,png"}),c.a.createElement(_.a,{className:x.a.avatar,src:a}))))},I=function(){var e=localStorage.getItem("avatar"),t=Object(n.useState)(!1),a=Object(r.a)(t,2),i=a[0],l=a[1],m=function(){l(!i)};return c.a.createElement(o.a,{className:v.a.firstBlock,item:!0,xs:1},c.a.createElement("div",{className:v.a.container},c.a.createElement(o.a,{container:!0,direction:"column",justifyContent:"flex-start",alignItems:"center"},c.a.createElement(o.a,{className:v.a.box,item:!0},c.a.createElement(E.a,{onClick:m},c.a.createElement(_.a,{src:e,sx:h.avatarSize}))),c.a.createElement(o.a,{className:v.a.box,item:!0},c.a.createElement(E.a,{className:v.a.icon},c.a.createElement(s.a,{sx:h.iconSize}))),c.a.createElement(o.a,{className:v.a.box,item:!0},c.a.createElement(E.a,{className:v.a.icon},c.a.createElement(u.a,{sx:h.iconSize}))),c.a.createElement(o.a,{className:v.a.box,item:!0},c.a.createElement(E.a,{className:v.a.icon},c.a.createElement(d.a,{sx:h.iconSize})))),c.a.createElement(o.a,{container:!0,direction:"column",justifyContent:"flex-end",alignItems:"center"},c.a.createElement(o.a,{item:!0,className:v.a.box},c.a.createElement(E.a,{className:v.a.icon,onClick:m},c.a.createElement(p.a,{sx:h.iconSize})),c.a.createElement(b.a,{sx:{color:"#fff",zIndex:function(e){return e.zIndex.drawer+1}},open:i},c.a.createElement(C,{setOpen:l}))))))},B=a(182),S=a(194),z=a(196),W=a(93),F=a.n(W),A=a(38),L=a.n(A),R=a(13),H=a(35),D=Object(H.b)({name:"peoples",initialState:{id:0,contacts:[],data:!1,isReady:!1,search:"",writing:!1},reducers:{getId:function(e,t){e.id=t.payload},getContacts:function(e,t){e.contacts=t.payload},checkData:function(e,t){e.data=t.payload},switchData:function(e){e.data=!e.data},ready:function(e){e.isReady=!e.isReady},findContact:function(e,t){e.search=t.payload},isWriting:function(e,t){e.writing=t.payload}}}),T=D.actions,K=T.getId,V=T.getContacts,M=T.checkData,Q=T.switchData,Z=T.ready,P=T.findContact,X=T.isWriting,J=D.reducer,Y=function(e){var t,a=e.props,n=Object(R.b)(),r=Object(R.c)(function(e){return e.peoples.writing}),i=Object(R.c)(function(e){return e.message.chat});return i[i.length-1]&&(t=i[i.length-1].id),c.a.createElement("div",{className:L.a.peoples,onClick:function(){n(M(!1)),n(K(a.id))}},c.a.createElement(_.a,{className:L.a.avatar,src:a.avatar}),c.a.createElement("div",{className:L.a.container},c.a.createElement("div",{className:L.a.block},c.a.createElement(S.a,{variant:"h6",mb:0,component:"div"},a.name),c.a.createElement(F.a,{className:L.a.checkIcon})),c.a.createElement("div",{className:L.a.block},r&&a.id===t?c.a.createElement(S.a,{variant:"h6",className:L.a.writing},"..."):c.a.createElement(S.a,{variant:"caption",component:"div"},a.username),c.a.createElement(S.a,{variant:"caption",display:"block"},"9:30"))))},q=a(90),U=a.n(q),G=function(){var e=Object(R.b)(),t=Object(R.c)(function(e){return e.peoples.contacts}),a=Object(R.c)(function(e){return e.peoples.search}),n=Object(R.c)(function(e){return e.peoples.isReady}),r=t.filter(function(e){return e.name.toLowerCase().includes(a.toLocaleLowerCase())}).map(function(e){return c.a.createElement(Y,{props:e,key:e.id})});return c.a.createElement(o.a,{className:U.a.secondBlock,item:!0,xs:2},c.a.createElement(o.a,{className:U.a.find,justifyContent:"center",alignItems:"center"},c.a.createElement(B.a,{value:a,onChange:function(t){return e(P(t.target.value))},placeholder:"Search",fullWidth:!0})),c.a.createElement(o.a,{item:!0,xs:!0,className:U.a.contacts},n?0!==r.length?r:c.a.createElement(S.a,{variant:"h6",className:U.a.notFound},"\u041a\u043e\u043d\u0442\u0430\u043a\u0442 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d"):c.a.createElement("div",{className:U.a.progress},c.a.createElement(z.a,null))))},$=a(189),ee=a(107),te=a.n(ee),ae=a(89),ne=a.n(ae),ce=a(62),re=a.n(ce),ie=function(){var e=Object(R.b)(),t=Object(R.c)(function(e){return e.peoples.id}),a=Object(R.c)(function(e){return e.peoples.contacts}),i=Object(R.c)(function(e){return e.peoples.writing}),l=a.find(function(e){return e.id===t}),s=Object(n.useState)(1),m=Object(r.a)(s,2),u=m[0],f=m[1],d=Object(n.useState)("medium"),g=Object(r.a)(d,2),p=g[0],b=g[1],h=Object(n.useState)(27.34),j=Object(r.a)(h,2),v=j[0],k=j[1];Object(n.useEffect)(function(){window.innerWidth<=1030&&(f(12),b("small"),k(22.38))},[window.innerWidth]);return c.a.createElement(o.a,{item:!0,xs:u,container:!0,className:ne.a.contactInfo,direction:"row",justifyContent:"flex-start",alignItems:"center"},window.innerWidth<=1030?c.a.createElement(o.a,{item:!0,xs:1,container:!0,justifyContent:"center",alignItems:"center"},c.a.createElement(E.a,{onClick:function(){return e(K(0))}},c.a.createElement(re.a,{fontSize:p}))):null,c.a.createElement($.a,{className:ne.a.parentButton,onClick:function(){return e(Q())},color:"inherit"},c.a.createElement(o.a,{item:!0,xs:!0,container:!0,className:ne.a.contactInfoLeft,direction:"row",justifyContent:"flex-start",alignItems:"center"},c.a.createElement(_.a,{className:ne.a.contactAvatar,src:l.avatar}),c.a.createElement(o.a,{item:!0,xs:!0,className:ne.a.contactInfoRight},c.a.createElement(S.a,{fontSize:p,variant:"h6",gutterBottom:!0},l.name),c.a.createElement("span",{className:ne.a.contactStatus},i&&11===t?c.a.createElement(S.a,{className:ne.a.writingText,height:v,variant:"h6",fontSize:"small"},"\u041f\u0435\u0447\u0430\u0442\u0430\u0435\u0442",c.a.createElement("span",{className:ne.a.writing},"...")):c.a.createElement(c.a.Fragment,null,c.a.createElement(te.a,{fontSize:p,color:"success"}),c.a.createElement(S.a,{fontSize:p,mt:.1,mb:0,ml:1,variant:"caption",display:"block",gutterBottom:!0},"Online")))))))},oe=a(55),le=a.n(oe),se=function(e){var t=e.align,a=e.img,i=e.message,l=Object(n.useState)(!1),s=Object(r.a)(l,2),m=s[0],u=s[1];return c.a.createElement(o.a,{container:!0,justifyContent:t,className:le.a.message},a?c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{onClick:function(){return u(!m)},className:le.a.imageBlock},c.a.createElement("img",{src:i,alt:"img"})),c.a.createElement(b.a,{sx:{color:"#fff",zIndex:function(e){return e.zIndex.drawer+1},padding:5},open:m,onClick:function(){u(!1)}},c.a.createElement("img",{src:i,className:le.a.backdropImg,alt:"img"}))):c.a.createElement(S.a,{className:le.a.text},i))},me=a(108),ue=a.n(me);function fe(){var e=Object(n.useState)("inherit"),t=Object(r.a)(e,2),a=t[0],i=t[1],l=Object(R.c)(function(e){return e.peoples.id}),s=Object(R.c)(function(e){return e.message.chat}),m=s.filter(function(e){return e.id===l&&e.message}),u=Object(n.useRef)(null);return Object(n.useEffect)(function(){window.innerWidth<=1030&&i(window.innerHeight-134.72)},[window.innerWidth,window.innerHeight]),Object(n.useEffect)(function(){u.current.scrollIntoView()},[s]),c.a.createElement(o.a,{item:!0,xs:!0,justifyContent:"flex-start",alignItems:"stretch",className:ue.a.chat,style:{height:a}},m.map(function(e,t){return c.a.createElement(se,{align:e.align,img:e.img,message:e.message,key:t})}),c.a.createElement("div",{ref:u}))}var de=a(36),ge=a(110),pe=a.n(ge),Ee=a(109),_e=a.n(Ee),be=Object(H.b)({name:"message",initialState:{chat:[],message:""},reducers:{getChat:function(e,t){e.chat.push(t.payload)},writeMessage:function(e,t){e.message=t.payload}}}),he=be.actions,je=he.getChat,ve=he.writeMessage,ke=be.reducer,Oe=a(43),we=a.n(Oe),xe=function(e,t,a){return new Promise(function(n){n("text"===t?{id:e,align:"left",message:a}:{id:e,align:"left",img:!0,message:a})})},ye=function(){var e=Object(R.b)(),t=Object(R.c)(function(e){return e.peoples.id}),a=Object(R.c)(function(e){return e.message.message}),r=Object(R.c)(function(e){return e.message.chat}),i=function(){var n={id:t,align:"right",message:a.trim()};e(je(n)),e(ve("")),11===t&&(0!==a.trim().length&&e(X(!0)),xe(t,"text",a.trim()).then(function(t){setTimeout(function(){e(je(t)),e(X(!1))},1500)}))},l={id:11,align:"left",message:"\u041f\u0440\u0438\u0432\u0435\u0442, \u044f CopyCat \u0438 \u044f \u0431\u0443\u0434\u0443 \u043a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0442\u0432\u043e\u0438 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0442\u044b \u043c\u043d\u0435 \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u044f\u0435\u0448\u044c"};return Object(n.useEffect)(function(){0===r.length&&e(je(l))},[r]),c.a.createElement(o.a,{item:!0,container:!0,className:we.a.send,direction:"row",justifyContent:"space-between",alignItems:"center"},c.a.createElement(o.a,{item:!0,xs:!0,className:we.a.sendImage},c.a.createElement("label",{htmlFor:"send-image-file"},c.a.createElement("input",{onChange:function(a){a.target.files.length&&Array.from(a.target.files).forEach(function(a){if(a.type.match("image")){var n=new FileReader;n.onload=function(a){var n={id:t,align:"right",img:!0,message:a.target.result};e(je(n)),11===t&&(e(X(!0)),xe(t,"",a.target.result).then(function(t){setTimeout(function(){e(je(t)),e(X(!1))},1500)}))},n.readAsDataURL(a)}})},id:"send-image-file",type:"file",accept:"image/jpeg,image/png,image/gif,image/webp",multiple:!0}),c.a.createElement(E.a,{"aria-label":"upload picture",component:"span"},c.a.createElement(_e.a,{fontSize:"large",className:we.a.contactButton})))),c.a.createElement(o.a,{item:!0,xs:12},c.a.createElement(de.c,{value:a,onChange:function(t){return e(ve(t.target.value))},onKeyDown:function(e){"Enter"===e.key&&i()},fullWidth:!0,placeholder:"Write Message...",className:we.a.sendInput})),c.a.createElement(o.a,{item:!0},c.a.createElement(E.a,{className:we.a.sendButton,onClick:i},c.a.createElement(pe.a,{className:we.a.sendIcon,fontSize:"large"}))))},Ne=a(105),Ce=a.n(Ne),Ie=function(){var e=Object(R.c)(function(e){return e.peoples.id}),t=Object(R.c)(function(e){return e.peoples.data}),a=Object(n.useState)("flex"),i=Object(r.a)(a,2),l=i[0],s=i[1];return Object(n.useEffect)(function(){window.innerWidth<=1252&&s(t?"none":"flex")},[t]),c.a.createElement(o.a,{className:Ce.a.thirtyBlock,item:!0,xs:!0,container:!0,direction:"column",justifyContent:"space-between",alignItems:"stretch",style:{display:l}},0===e?c.a.createElement(o.a,{className:Ce.a.zeroId,item:!0,xs:!0,container:!0,justifyContent:"center",alignItems:"center"},c.a.createElement(S.a,{variant:"h6",gutterBottom:!0,component:"div"},"\u041d\u0430\u0436\u043c\u0438\u0442\u0435 \u043d\u0430 \u043a\u043e\u043d\u0442\u0430\u043a\u0442 \u0447\u0442\u043e\u0431\u044b \u043d\u0430\u0447\u0430\u0442\u044c \u043f\u0435\u0440\u0435\u043f\u0438\u0441\u043a\u0443")):c.a.createElement(o.a,{className:Ce.a.contactId,item:!0,xs:!0,container:!0,direction:"column",justifyContent:"space-between",alignItems:"stretch"},c.a.createElement(ie,null),c.a.createElement(fe,null),c.a.createElement(ye,null)))},Be={iconPhone:{color:"#0093E9"},iconVideo:{color:"#0093E9"},iconHeart:{color:"#ff0000"}},Se=(a(136),a(111)),ze=a.n(Se),We=a(112),Fe=a.n(We),Ae=a(113),Le=a.n(Ae),Re=a(114),He=a.n(Re),De=a(115),Te=a.n(De),Ke=function(e){var t=e.i,a=Object(n.useState)(0),i=Object(r.a)(a,2),o=i[0],l=i[1];return c.a.createElement(E.a,{onMouseOver:function(){return l(t.id)},onMouseLeave:function(){return l(0)}},t.id===o?t.icon:t.iconHover)},Ve=function(){var e=Object(R.b)(),t=Object(R.c)(function(e){return e.peoples.id}),a=Object(R.c)(function(e){return e.peoples.data}),i=Object(R.c)(function(e){return e.peoples.contacts}).find(function(e){return e.id===t}),l=Object(n.useState)(3),s=Object(r.a)(l,2),m=s[0],u=s[1];Object(n.useEffect)(function(){window.innerWidth<=1252?u(!1):u(3)},[window.innerWidth,m]);var f=[{id:1,icon:c.a.createElement(ze.a,{style:Be.iconPhone}),iconHover:c.a.createElement(Fe.a,{style:Be.iconPhone})},{id:2,icon:c.a.createElement(Le.a,{style:Be.iconVideo}),iconHover:c.a.createElement(He.a,{style:Be.iconVideo})},{id:3,icon:c.a.createElement(d.a,{style:Be.iconHeart}),iconHover:c.a.createElement(Te.a,{style:Be.iconHeart})}];if(a)return c.a.createElement(o.a,{item:!0,xs:m,container:!0,className:"fourth-block",direction:"column"},c.a.createElement(o.a,{item:!0,container:!0,className:"close-block",direction:"row",justifyContent:"flex-start",alignItems:"center"},c.a.createElement(E.a,{onClick:function(){return e(M(!1))}},c.a.createElement(N.a,null)),c.a.createElement(S.a,{variant:"h5"},"\u0414\u0430\u043d\u043d\u044b\u0435 \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u0430")),c.a.createElement(o.a,{item:!0,xs:!0,container:!0,justifyContent:"center",alignItems:"center",className:"info"},c.a.createElement("div",{className:"contact"},c.a.createElement(_.a,{className:"avatar",src:i.avatar}),c.a.createElement(S.a,{className:"name",variant:"h4",gutterBottom:!0},i.name),c.a.createElement("div",{className:"connection"},f.map(function(e,t){return c.a.createElement(Ke,{i:e,key:t})})))))},Me=a(116),Qe=a.n(Me),Ze=a(195),Pe=a(188),Xe=a(39),Je=a.n(Xe),Ye=a(117),qe=a.n(Ye),Ue=function(){var e=Object(R.b)(),t=Object(n.useState)(!1),a=Object(r.a)(t,2),i=a[0],l=a[1],s=Object(R.c)(function(e){return e.peoples.id}),m=Object(R.c)(function(e){return e.peoples.search}),u=Object(n.useState)(!1),f=Object(r.a)(u,2),d=f[0],g=f[1];if(0===s)return c.a.createElement(o.a,{className:Je.a.mobileFirstBlock,item:!0,xs:!0,container:!0,direction:"row",justifyContent:"space-between",alignItems:"center"},c.a.createElement(c.a.Fragment,null,i?c.a.createElement(o.a,{item:!0,xs:!0},c.a.createElement(Ze.a,{className:Je.a.searching,variant:"filled",fullWidth:!0},c.a.createElement(Pe.a,{startAdornment:c.a.createElement(E.a,{onClick:function(){return l(!1)},position:"start"},c.a.createElement(re.a,null)),value:m,onChange:function(t){return e(P(t.target.value))}}))):c.a.createElement(c.a.Fragment,null,c.a.createElement(o.a,{item:!0,xs:1,container:!0,justifyContent:"flex-start"},c.a.createElement(S.a,{fontSize:20,variant:"h4",fontWeight:"600",color:"white"},"Test_Chat")),c.a.createElement(o.a,{item:!0,xs:!0,container:!0,justifyContent:"flex-end"},c.a.createElement(E.a,{className:Je.a.iconButton,onClick:function(){return l(!0)}},c.a.createElement(qe.a,{className:Je.a.icon}))))),c.a.createElement(o.a,{className:Je.a.settings,item:!0,xs:1,container:!0,justifyContent:"center"},c.a.createElement(E.a,{className:Je.a.iconButton,onClick:function(){g(!d)}},c.a.createElement(p.a,{className:Je.a.icon})),c.a.createElement(b.a,{sx:{color:"#fff",zIndex:function(e){return e.zIndex.drawer+1}},open:d},c.a.createElement(C,{setOpen:g}))))},Ge=a(118),$e=a.n(Ge),et=function(){var e=Object(R.c)(function(e){return e.peoples.id}),t=Object(R.c)(function(e){return e.peoples.contacts}),a=Object(R.c)(function(e){return e.peoples.search}),n=t.filter(function(e){return e.name.toLowerCase().includes(a.toLocaleLowerCase())}).map(function(e){return c.a.createElement(Y,{props:e,key:e.id})});if(0===e)return c.a.createElement(o.a,{item:!0,xs:!0,className:$e.a.mobileSecondBlock},n)},tt=a(119),at=a.n(tt),nt=function(){var e=Object(R.c)(function(e){return e.peoples.id}),t=Object(R.c)(function(e){return e.peoples.data}),a=Object(n.useState)("inline"),i=Object(r.a)(a,2),l=i[0],s=i[1];if(Object(n.useEffect)(function(){window.innerWidth<=1252&&s(t?"none":"inline")},[t]),0!==e)return c.a.createElement(o.a,{item:!0,xs:!0,className:at.a.mobileThirdBlock,style:{display:l}},c.a.createElement(ie,null),c.a.createElement(fe,null),c.a.createElement(ye,null))},ct=function(){var e=Object(R.b)(),t={id:11,avatar:"https://assets.mycast.io/characters/sylvester-the-cat-911431-normal.jpg?1597174259",name:"CopyCat",username:"bot"};Object(n.useEffect)(function(){new Promise(function(e){fetch("https://jsonplaceholder.typicode.com/users").then(function(e){return e.json()}).then(function(t){return e(t)})}).then(function(a){e(V([t].concat(Object(i.a)(a)))),e(Z())})},[]);var a=c.a.createElement(o.a,{className:Qe.a.desktop,direction:"row",justifyContent:"center",alignItems:"stretch",container:!0},c.a.createElement(I,null),c.a.createElement(G,null),c.a.createElement(Ie,null),c.a.createElement(Ve,null)),l=c.a.createElement(o.a,{container:!0,direction:"column",justifyContent:"center",alignItems:"center"},c.a.createElement(Ue,null),c.a.createElement(et,null),c.a.createElement(nt,null),c.a.createElement(Ve,null)),s=Object(n.useState)(),m=Object(r.a)(s,2),u=m[0],f=m[1];return Object(n.useEffect)(function(){window.innerWidth<=1030?f(l):f(a)},[u,window.innerWidth]),u};var rt=function(){return c.a.createElement(ct,null)},it=Object(H.b)({name:"adaptive",initialState:{size:"medium"},reducers:{setSize:function(e){window.innerWidth<=1030?e.size="small":e.size="medium"}}}),ot=(it.actions.setSize,it.reducer),lt=Object(H.a)({reducer:{peoples:J,message:ke,adaptive:ot}}),st=a(120),mt=(a(142),document.getElementById("root"));Object(st.createRoot)(mt).render(c.a.createElement(R.a,{store:lt},c.a.createElement(rt,null)))},28:function(e,t,a){e.exports={firstBlock:"firstBlock_firstBlock__33Zyq",container:"firstBlock_container__ppQMr",box:"firstBlock_box__-xXz7",icon:"firstBlock_icon__2V4ir"}},38:function(e,t,a){e.exports={peoples:"peoples_peoples__2LS3C",container:"peoples_container__3Jj7N",block:"peoples_block__1YK0Q",avatar:"peoples_avatar__1wmFY",checkIcon:"peoples_checkIcon__3OZih",writing:"peoples_writing__3Ob0Z",typing:"peoples_typing__kQfhr"}},39:function(e,t,a){e.exports={mobileFirstBlock:"mobileFirstBlock_mobileFirstBlock__1X4-h",searching:"mobileFirstBlock_searching__jSqO5",settings:"mobileFirstBlock_settings__kKBzY",iconButton:"mobileFirstBlock_iconButton__rQj3W",icon:"mobileFirstBlock_icon__3nKzf"}},43:function(e,t,a){e.exports={send:"send_send__3DAKa",sendInput:"send_sendInput__MX7tZ",sendButton:"send_sendButton__OxKXS",sendIcon:"send_sendIcon__W5fD_",sendImage:"send_sendImage__2iAjH",contactButton:"send_contactButton__fDksX"}},55:function(e,t,a){e.exports={message:"message_message__3tb7g",text:"message_text__3UIXb",imageBlock:"message_imageBlock__btbqe",backdropImg:"message_backdropImg__1ZQfE"}},65:function(e,t,a){e.exports={changeAvatarCard:"changeAvatar_changeAvatarCard__1wN6_",changeAvatarContent:"changeAvatar_changeAvatarContent__33t2t",avatar:"changeAvatar_avatar__3nCxL"}},77:function(e,t,a){e.exports=a(144)},89:function(e,t,a){e.exports={contactInfo:"contact-info_contactInfo__1aId5",contactInfoLeft:"contact-info_contactInfoLeft__3c7QC",contactAvatar:"contact-info_contactAvatar__2ri84",contactInfoRight:"contact-info_contactInfoRight___Vcal",contactStatus:"contact-info_contactStatus__13JZ1",writingText:"contact-info_writingText__266F8",writing:"contact-info_writing__2KNSC",typing:"contact-info_typing__38xRZ",parentButton:"contact-info_parentButton__oN6_e"}},90:function(e,t,a){e.exports={secondBlock:"secondBlock_secondBlock__KOp5A",contacts:"secondBlock_contacts__1Ib13",find:"secondBlock_find__2261y",notFound:"secondBlock_notFound__1HNkC",progress:"secondBlock_progress__2TGPv"}}},[[77,2,1]]]);
//# sourceMappingURL=main.8c11f62e.chunk.js.map
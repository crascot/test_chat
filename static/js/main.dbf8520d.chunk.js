(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{100:function(e,t,a){e.exports={contactInfo:"contact-info_contactInfo__1aId5",contactInfoLeft:"contact-info_contactInfoLeft__3c7QC",contactAvatar:"contact-info_contactAvatar__2ri84",contactInfoRight:"contact-info_contactInfoRight___Vcal",contactStatus:"contact-info_contactStatus__13JZ1",writingText:"contact-info_writingText__266F8",writing:"contact-info_writing__2KNSC",typing:"contact-info_typing__38xRZ",parentButton:"contact-info_parentButton__oN6_e"}},101:function(e,t,a){e.exports={secondBlock:"secondBlock_secondBlock__KOp5A",contacts:"secondBlock_contacts__1Ib13",find:"secondBlock_find__2261y",notFound:"secondBlock_notFound__1HNkC",progress:"secondBlock_progress__2TGPv"}},116:function(e,t,a){e.exports={thirtyBlock:"thirdBlock_thirtyBlock__3V-IV",zeroId:"thirdBlock_zeroId__2y0z7",contactId:"thirdBlock_contactId__2cat7"}},119:function(e,t,a){e.exports={chat:"chat_chat__1aYIB"}},127:function(e,t,a){e.exports={desktop:"main_desktop__1r1QW"}},128:function(e,t,a){e.exports={mobileSecondBlock:"mobileSecondBlock_mobileSecondBlock__9jwDt"}},129:function(e,t,a){e.exports={mobileThirdBlock:"mobileThirdBlock_mobileThirdBlock__1Huzk"}},136:function(e,t,a){},138:function(e,t,a){},144:function(e,t,a){},146:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(8),i=a(15),o=a(187),l=a(102),s=a.n(l),m=a(103),u=a.n(m),f=a(60),d=a.n(f),g=a(61),p=a.n(g),E=a(194),_=a(188),b=a(189),h={avatarSize:{width:66,height:66},iconSize:{width:36,height:36}},j=a(28),v=a.n(j),w=a(192),O=a(195),k=a(66),x=a.n(k),y=a(59),N=a.n(y),C=function(e){var t=e.setOpen,a=localStorage.getItem("avatar");return c.a.createElement(w.a,{className:x.a.changeAvatarCard},c.a.createElement(E.a,{onClick:function(){return t(!1)}},c.a.createElement(N.a,null)),c.a.createElement(O.a,{className:x.a.changeAvatarContent},c.a.createElement("label",{htmlFor:"avatar-file"},c.a.createElement("input",{onChange:function(e){e.target.files.length&&Array.from(e.target.files).forEach(function(e){if(!e.type.match("image"))return null;var a=new FileReader;a.onload=function(e){localStorage.setItem("avatar",e.target.result)},a.readAsDataURL(e),t(!1)})},id:"avatar-file",type:"file",accept:"jpeg,png"}),c.a.createElement(_.a,{className:x.a.avatar,src:a}))))},I=function(){var e=localStorage.getItem("avatar"),t=Object(n.useState)(!1),a=Object(r.a)(t,2),i=a[0],l=a[1],m=function(){l(!i)};return c.a.createElement(o.a,{className:v.a.firstBlock,item:!0,xs:1},c.a.createElement("div",{className:v.a.container},c.a.createElement(o.a,{container:!0,direction:"column",justifyContent:"flex-start",alignItems:"center"},c.a.createElement(o.a,{className:v.a.box,item:!0},c.a.createElement(E.a,{onClick:m},c.a.createElement(_.a,{src:e,sx:h.avatarSize}))),c.a.createElement(o.a,{className:v.a.box,item:!0},c.a.createElement(E.a,{className:v.a.icon},c.a.createElement(s.a,{sx:h.iconSize}))),c.a.createElement(o.a,{className:v.a.box,item:!0},c.a.createElement(E.a,{className:v.a.icon},c.a.createElement(u.a,{sx:h.iconSize}))),c.a.createElement(o.a,{className:v.a.box,item:!0},c.a.createElement(E.a,{className:v.a.icon},c.a.createElement(d.a,{sx:h.iconSize})))),c.a.createElement(o.a,{container:!0,direction:"column",justifyContent:"flex-end",alignItems:"center"},c.a.createElement(o.a,{item:!0,className:v.a.box},c.a.createElement(E.a,{className:v.a.icon,onClick:m},c.a.createElement(p.a,{sx:h.iconSize})),c.a.createElement(b.a,{sx:{color:"#fff",zIndex:function(e){return e.zIndex.drawer+1}},open:i},c.a.createElement(C,{setOpen:l}))))))},B=a(184),S=a(196),z=a(198),W=a(104),F=a.n(W),A=a(38),D=a.n(A),H=a(11),L=a(35),R=Object(L.b)({name:"peoples",initialState:{id:0,contacts:[],data:null,isReady:!1,search:"",writing:!1},reducers:{getId:function(e,t){e.id=t.payload},getContacts:function(e,t){e.contacts=t.payload},checkData:function(e,t){e.data=t.payload},ready:function(e){e.isReady=!e.isReady},findContact:function(e,t){e.search=t.payload},isWriting:function(e,t){e.writing=t.payload}}}),M=R.actions,T=M.getId,K=M.getContacts,V=M.checkData,Q=M.ready,Z=M.findContact,P=M.isWriting,X=R.reducer,J=function(e){var t,a=e.props,n=Object(H.b)(),r=Object(H.c)(function(e){return e.peoples.writing}),i=Object(H.c)(function(e){return e.message.chat});return i[i.length-1]&&(t=i[i.length-1].id),c.a.createElement("div",{className:D.a.peoples,onClick:function(){n(V(!1)),n(T(a.id))}},c.a.createElement(_.a,{className:D.a.avatar,src:a.avatar}),c.a.createElement("div",{className:D.a.container},c.a.createElement("div",{className:D.a.block},c.a.createElement(S.a,{variant:"h6",mb:0,component:"div"},a.name),c.a.createElement(F.a,{className:D.a.checkIcon})),c.a.createElement("div",{className:D.a.block},r&&a.id===t?c.a.createElement(S.a,{variant:"h6",className:D.a.writing},"..."):c.a.createElement(S.a,{variant:"caption",component:"div"},a.username),c.a.createElement(S.a,{variant:"caption",display:"block"},"9:30"))))},Y=a(101),q=a.n(Y),U=function(){var e=Object(H.b)(),t=Object(H.c)(function(e){return e.peoples.contacts}),a=Object(H.c)(function(e){return e.peoples.search}),n=Object(H.c)(function(e){return e.peoples.isReady}),r=t.filter(function(e){return e.name.toLowerCase().includes(a.toLocaleLowerCase())}).map(function(e){return c.a.createElement(J,{props:e,key:e.id})});return c.a.createElement(o.a,{className:q.a.secondBlock,item:!0,xs:2},c.a.createElement(o.a,{className:q.a.find,justifyContent:"center",alignItems:"center"},c.a.createElement(B.a,{value:a,onChange:function(t){return e(Z(t.target.value))},placeholder:"Search",fullWidth:!0})),c.a.createElement(o.a,{item:!0,xs:!0,className:q.a.contacts},n?0!==r.length?r:c.a.createElement(S.a,{variant:"h6",className:q.a.notFound},"\u041a\u043e\u043d\u0442\u0430\u043a\u0442 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d"):c.a.createElement("div",{className:q.a.progress},c.a.createElement(z.a,null))))},G=a(191),$=a(118),ee=a.n($),te=a(100),ae=a.n(te),ne=a(63),ce=a.n(ne),re=a(62),ie=a.n(re),oe=function(){var e=Object(H.b)();return c.a.createElement(E.a,{onClick:function(){return e(V("find"))}},c.a.createElement(ie.a,{fontSize:"large"}))},le=function(){var e=Object(H.b)(),t=Object(H.c)(function(e){return e.peoples.id}),a=Object(H.c)(function(e){return e.peoples.contacts}),i=Object(H.c)(function(e){return e.peoples.writing}),l=a.find(function(e){return e.id===t}),s=Object(n.useState)(1),m=Object(r.a)(s,2),u=m[0],f=m[1],d=Object(n.useState)("medium"),g=Object(r.a)(d,2),p=g[0],b=g[1],h=Object(n.useState)(27.34),j=Object(r.a)(h,2),v=j[0],w=j[1];Object(n.useEffect)(function(){window.innerWidth<=1030&&(f(12),b("small"),w(22.38))},[window.innerWidth]);return c.a.createElement(o.a,{item:!0,xs:u,container:!0,className:ae.a.contactInfo,direction:"row",justifyContent:"space-between",alignItems:"center"},c.a.createElement(o.a,{item:!0,container:!0,alignItems:"center"},window.innerWidth<=1030?c.a.createElement(o.a,{item:!0,xs:1,container:!0,justifyContent:"center",alignItems:"center"},c.a.createElement(E.a,{onClick:function(){return e(T(0))}},c.a.createElement(ce.a,{fontSize:p}))):null,c.a.createElement(G.a,{className:ae.a.parentButton,onClick:function(){return e(V("user"))},color:"inherit"},c.a.createElement(o.a,{item:!0,xs:!0,container:!0,className:ae.a.contactInfoLeft,direction:"row",justifyContent:"flex-start",alignItems:"center"},c.a.createElement(_.a,{className:ae.a.contactAvatar,src:l.avatar}),c.a.createElement(o.a,{item:!0,xs:!0,className:ae.a.contactInfoRight},c.a.createElement(S.a,{fontSize:p,variant:"h6",gutterBottom:!0},l.name),c.a.createElement("span",{className:ae.a.contactStatus},i&&11===t?c.a.createElement(S.a,{className:ae.a.writingText,height:v,variant:"h6",fontSize:"small"},"\u041f\u0435\u0447\u0430\u0442\u0430\u0435\u0442",c.a.createElement("span",{className:ae.a.writing},"...")):c.a.createElement(c.a.Fragment,null,c.a.createElement(ee.a,{fontSize:p,color:"success"}),c.a.createElement(S.a,{fontSize:p,mt:.1,mb:0,ml:1,variant:"caption",display:"block",gutterBottom:!0},"Online"))))))),c.a.createElement(o.a,{item:!0},c.a.createElement(oe,null)))},se=a(55),me=a.n(se),ue=function(e){var t=e.align,a=e.img,i=e.message,l=Object(n.useState)(!1),s=Object(r.a)(l,2),m=s[0],u=s[1];return c.a.createElement(o.a,{container:!0,justifyContent:t,className:me.a.message},a?c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{onClick:function(){return u(!m)},className:me.a.imageBlock},c.a.createElement("img",{src:i,alt:"img"})),c.a.createElement(b.a,{sx:{color:"#fff",zIndex:function(e){return e.zIndex.drawer+1},padding:5},open:m,onClick:function(){u(!1)}},c.a.createElement("img",{src:i,className:me.a.backdropImg,alt:"img"}))):c.a.createElement(S.a,{className:me.a.text},i))},fe=a(119),de=a.n(fe);function ge(){var e=Object(n.useState)("inherit"),t=Object(r.a)(e,2),a=t[0],i=t[1],l=Object(H.c)(function(e){return e.peoples.id}),s=Object(H.c)(function(e){return e.message.chat}),m=s.filter(function(e){return e.id===l&&e.message}),u=Object(n.useRef)(null);return Object(n.useEffect)(function(){window.innerWidth<=1030&&i(window.innerHeight-134.72)},[window.innerWidth,window.innerHeight]),Object(n.useEffect)(function(){u.current.scrollIntoView()},[s]),c.a.createElement(o.a,{item:!0,xs:!0,justifyContent:"flex-start",alignItems:"stretch",className:de.a.chat,style:{height:a}},m.map(function(e,t){return c.a.createElement(ue,{align:e.align,img:e.img,message:e.message,key:t})}),c.a.createElement("div",{ref:u}))}var pe=a(36),Ee=a(121),_e=a.n(Ee),be=a(120),he=a.n(be),je=Object(L.b)({name:"message",initialState:{chat:[],message:""},reducers:{getChat:function(e,t){e.chat.push(t.payload)},writeMessage:function(e,t){e.message=t.payload}}}),ve=je.actions,we=ve.getChat,Oe=ve.writeMessage,ke=je.reducer,xe=a(43),ye=a.n(xe),Ne=function(e,t,a){return new Promise(function(n){n("text"===t?{id:e,align:"left",message:a,date:"".concat((new Date).getHours(),":").concat((new Date).getMinutes())}:{id:e,align:"left",img:!0,message:a,date:"".concat((new Date).getHours(),":").concat((new Date).getMinutes())})})},Ce=function(){var e=Object(H.b)(),t=Object(H.c)(function(e){return e.peoples.id}),a=Object(H.c)(function(e){return e.message.message}),r=Object(H.c)(function(e){return e.message.chat}),i=function(){var n={id:t,align:"right",message:a.trim(),date:"".concat((new Date).getHours(),":").concat((new Date).getMinutes())};e(we(n)),e(Oe("")),11===t&&(0!==a.trim().length&&e(P(!0)),Ne(t,"text",a.trim()).then(function(t){setTimeout(function(){e(we(t)),e(P(!1))},1500)}))},l={id:11,align:"left",message:"\u041f\u0440\u0438\u0432\u0435\u0442, \u044f CopyCat \u0438 \u044f \u0431\u0443\u0434\u0443 \u043a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0442\u0432\u043e\u0438 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0442\u044b \u043c\u043d\u0435 \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u044f\u0435\u0448\u044c",date:"".concat((new Date).getHours(),":").concat((new Date).getMinutes())};return Object(n.useEffect)(function(){0===r.length&&e(we(l))},[r]),c.a.createElement(o.a,{item:!0,container:!0,className:ye.a.send,direction:"row",justifyContent:"space-between",alignItems:"center"},c.a.createElement(o.a,{item:!0,xs:!0,className:ye.a.sendImage},c.a.createElement("label",{htmlFor:"send-image-file"},c.a.createElement("input",{onChange:function(a){a.target.files.length&&Array.from(a.target.files).forEach(function(a){if(a.type.match("image")){var n=new FileReader;n.onload=function(a){var n={id:t,align:"right",img:!0,message:a.target.result,date:"".concat((new Date).getHours(),":").concat((new Date).getMinutes())};e(we(n)),11===t&&(e(P(!0)),Ne(t,"",a.target.result).then(function(t){setTimeout(function(){e(we(t)),e(P(!1))},1500)}))},n.readAsDataURL(a)}})},id:"send-image-file",type:"file",accept:"image/jpeg,image/png,image/gif,image/webp",multiple:!0}),c.a.createElement(E.a,{"aria-label":"upload picture",component:"span"},c.a.createElement(he.a,{fontSize:"large",className:ye.a.contactButton})))),c.a.createElement(o.a,{item:!0,xs:12},c.a.createElement(pe.c,{value:a,onChange:function(t){return e(Oe(t.target.value))},onKeyDown:function(e){"Enter"===e.key&&i()},fullWidth:!0,placeholder:"Write Message...",className:ye.a.sendInput})),c.a.createElement(o.a,{item:!0},c.a.createElement(E.a,{className:ye.a.sendButton,onClick:i},c.a.createElement(_e.a,{className:ye.a.sendIcon,fontSize:"large"}))))},Ie=a(116),Be=a.n(Ie),Se=function(){var e=Object(H.c)(function(e){return e.peoples.id}),t=Object(H.c)(function(e){return e.peoples.data}),a=Object(n.useState)("flex"),i=Object(r.a)(a,2),l=i[0],s=i[1];return Object(n.useEffect)(function(){window.innerWidth<=1252&&s(t?"none":"flex")},[window.innerWidth,t]),c.a.createElement(o.a,{className:Be.a.thirtyBlock,item:!0,xs:!0,container:!0,direction:"column",justifyContent:"space-between",alignItems:"stretch",style:{display:l}},0===e?c.a.createElement(o.a,{className:Be.a.zeroId,item:!0,xs:!0,container:!0,justifyContent:"center",alignItems:"center"},c.a.createElement(S.a,{variant:"h6",gutterBottom:!0,component:"div"},"\u041d\u0430\u0436\u043c\u0438\u0442\u0435 \u043d\u0430 \u043a\u043e\u043d\u0442\u0430\u043a\u0442 \u0447\u0442\u043e\u0431\u044b \u043d\u0430\u0447\u0430\u0442\u044c \u043f\u0435\u0440\u0435\u043f\u0438\u0441\u043a\u0443")):c.a.createElement(o.a,{className:Be.a.contactId,item:!0,xs:!0,container:!0,direction:"column",justifyContent:"space-between",alignItems:"stretch"},c.a.createElement(le,null),c.a.createElement(ge,null),c.a.createElement(Ce,null)))},ze={iconPhone:{color:"#0093E9"},iconVideo:{color:"#0093E9"},iconHeart:{color:"#ff0000"}},We=(a(136),a(122)),Fe=a.n(We),Ae=a(123),De=a.n(Ae),He=a(124),Le=a.n(He),Re=a(125),Me=a.n(Re),Te=a(126),Ke=a.n(Te),Ve=function(e){var t=e.i,a=Object(n.useState)(0),i=Object(r.a)(a,2),o=i[0],l=i[1];return c.a.createElement(E.a,{onMouseOver:function(){return l(t.id)},onMouseLeave:function(){return l(0)}},t.id===o?t.icon:t.iconHover)},Qe=(a(138),function(e){var t=e.mess,a=Object(H.c)(function(e){return e.peoples.id}),i=Object(H.c)(function(e){return e.peoples.contacts}).find(function(e){return e.id===a}),l=Object(n.useState)(""),s=Object(r.a)(l,2),m=s[0],u=s[1];return Object(n.useEffect)(function(){"left"===t.align?u("".concat(i.name,":")):u("\u0412\u044b:")},[m,a]),c.a.createElement(o.a,{item:!0,className:"search-message"},c.a.createElement(S.a,{variant:"body2",component:"h1"},t.date),c.a.createElement(S.a,{variant:"body2",component:"p"},c.a.createElement(S.a,{fontWeight:"bold",component:"span"},m)," ",t.message))}),Ze=function(){var e=Object(H.b)(),t=Object(H.c)(function(e){return e.peoples.id}),a=Object(H.c)(function(e){return e.peoples.data}),i=Object(H.c)(function(e){return e.message.chat}),l=Object(H.c)(function(e){return e.peoples.contacts}).find(function(e){return e.id===t}),s=Object(n.useState)(3),m=Object(r.a)(s,2),u=m[0],f=m[1];Object(n.useEffect)(function(){window.innerWidth<=1252?f(!1):f(3)},[window.innerWidth,u]);var g=[{id:1,icon:c.a.createElement(Fe.a,{style:ze.iconPhone}),iconHover:c.a.createElement(De.a,{style:ze.iconPhone})},{id:2,icon:c.a.createElement(Le.a,{style:ze.iconVideo}),iconHover:c.a.createElement(Me.a,{style:ze.iconVideo})},{id:3,icon:c.a.createElement(d.a,{style:ze.iconHeart}),iconHover:c.a.createElement(Ke.a,{style:ze.iconHeart})}],p=Object(n.useState)(""),b=Object(r.a)(p,2),h=b[0],j=b[1],v=i.filter(function(e){return e.message.toLowerCase().includes(h.toLocaleLowerCase())&&e.id===t&&!e.img}).map(function(e,t){return c.a.createElement(Qe,{mess:e,key:t})});if(a)return c.a.createElement(o.a,{item:!0,xs:u,container:!0,className:"fourth-block",direction:"column"},c.a.createElement(o.a,{item:!0,container:!0,className:"close-block",direction:"row",justifyContent:"flex-start",alignItems:"center"},c.a.createElement(E.a,{onClick:function(){j(""),e(V(!1))}},c.a.createElement(N.a,null)),c.a.createElement(S.a,{variant:"h5"},"user"===a?"\u0414\u0430\u043d\u043d\u044b\u0435 \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u0430":"\u041f\u043e\u0438\u0441\u043a \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f")),"user"===a?c.a.createElement(o.a,{item:!0,xs:!0,container:!0,justifyContent:"center",alignItems:"center",className:"info"},c.a.createElement("div",{className:"contact"},c.a.createElement(_.a,{className:"avatar",src:l.avatar}),c.a.createElement(S.a,{className:"name",variant:"h4",gutterBottom:!0},l.name),c.a.createElement("div",{className:"connection"},g.map(function(e,t){return c.a.createElement(Ve,{i:e,key:t})})))):c.a.createElement(o.a,{item:!0,xs:!0,className:"container-search-message"},c.a.createElement("div",{className:"container-input"},c.a.createElement(B.a,{value:h,onChange:function(e){return j(e.target.value)},variant:"outlined",fullWidth:!0})),c.a.createElement("div",null,v.length&&h.length>0?v:null)))},Pe=a(127),Xe=a.n(Pe),Je=a(197),Ye=a(190),qe=a(39),Ue=a.n(qe),Ge=function(){var e=Object(H.b)(),t=Object(n.useState)(!1),a=Object(r.a)(t,2),i=a[0],l=a[1],s=Object(H.c)(function(e){return e.peoples.id}),m=Object(H.c)(function(e){return e.peoples.search}),u=Object(n.useState)(!1),f=Object(r.a)(u,2),d=f[0],g=f[1];if(0===s)return c.a.createElement(o.a,{className:Ue.a.mobileFirstBlock,item:!0,xs:!0,container:!0,direction:"row",justifyContent:"space-between",alignItems:"center"},c.a.createElement(c.a.Fragment,null,i?c.a.createElement(o.a,{item:!0,xs:!0},c.a.createElement(Je.a,{className:Ue.a.searching,variant:"filled",fullWidth:!0},c.a.createElement(Ye.a,{startAdornment:c.a.createElement(E.a,{onClick:function(){return l(!1)},position:"start"},c.a.createElement(ce.a,null)),value:m,onChange:function(t){return e(Z(t.target.value))}}))):c.a.createElement(c.a.Fragment,null,c.a.createElement(o.a,{item:!0,xs:1,container:!0,justifyContent:"flex-start"},c.a.createElement(S.a,{fontSize:20,variant:"h4",fontWeight:"600",color:"white"},"Test_Chat")),c.a.createElement(o.a,{item:!0,xs:!0,container:!0,justifyContent:"flex-end"},c.a.createElement(E.a,{className:Ue.a.iconButton,onClick:function(){return l(!0)}},c.a.createElement(ie.a,{className:Ue.a.icon}))))),c.a.createElement(o.a,{className:Ue.a.settings,item:!0,xs:1,container:!0,justifyContent:"center"},c.a.createElement(E.a,{className:Ue.a.iconButton,onClick:function(){g(!d)}},c.a.createElement(p.a,{className:Ue.a.icon})),c.a.createElement(b.a,{sx:{color:"#fff",zIndex:function(e){return e.zIndex.drawer+1}},open:d},c.a.createElement(C,{setOpen:g}))))},$e=a(128),et=a.n($e),tt=function(){var e=Object(H.c)(function(e){return e.peoples.id}),t=Object(H.c)(function(e){return e.peoples.contacts}),a=Object(H.c)(function(e){return e.peoples.search}),n=t.filter(function(e){return e.name.toLowerCase().includes(a.toLocaleLowerCase())}).map(function(e){return c.a.createElement(J,{props:e,key:e.id})});if(0===e)return c.a.createElement(o.a,{item:!0,xs:!0,className:et.a.mobileSecondBlock},n)},at=a(129),nt=a.n(at),ct=function(){var e=Object(H.c)(function(e){return e.peoples.id}),t=Object(H.c)(function(e){return e.peoples.data}),a=Object(n.useState)("inline"),i=Object(r.a)(a,2),l=i[0],s=i[1];if(Object(n.useEffect)(function(){window.innerWidth<=1252&&s(t?"none":"inline")},[window.innerWidth,t]),0!==e)return c.a.createElement(o.a,{item:!0,xs:!0,className:nt.a.mobileThirdBlock,style:{display:l}},c.a.createElement(le,null),c.a.createElement(ge,null),c.a.createElement(Ce,null))},rt=function(){var e=Object(H.b)(),t={id:11,avatar:"https://assets.mycast.io/characters/sylvester-the-cat-911431-normal.jpg?1597174259",name:"CopyCat",username:"bot"};Object(n.useEffect)(function(){new Promise(function(e){fetch("https://jsonplaceholder.typicode.com/users").then(function(e){return e.json()}).then(function(t){return e(t)})}).then(function(a){e(K([t].concat(Object(i.a)(a)))),e(Q())})},[]);var a=c.a.createElement(o.a,{className:Xe.a.desktop,direction:"row",justifyContent:"center",alignItems:"stretch",container:!0},c.a.createElement(I,null),c.a.createElement(U,null),c.a.createElement(Se,null),c.a.createElement(Ze,null)),l=c.a.createElement(o.a,{container:!0,direction:"column",justifyContent:"center",alignItems:"center"},c.a.createElement(Ge,null),c.a.createElement(tt,null),c.a.createElement(ct,null),c.a.createElement(Ze,null)),s=Object(n.useState)(),m=Object(r.a)(s,2),u=m[0],f=m[1];return Object(n.useEffect)(function(){window.innerWidth<=1030?f(l):f(a)},[u,window.innerWidth]),u};var it=function(){return c.a.createElement(rt,null)},ot=Object(L.b)({name:"adaptive",initialState:{size:"medium"},reducers:{setSize:function(e){window.innerWidth<=1030?e.size="small":e.size="medium"}}}),lt=(ot.actions.setSize,ot.reducer),st=Object(L.a)({reducer:{peoples:X,message:ke,adaptive:lt}}),mt=a(130),ut=(a(144),document.getElementById("root"));Object(mt.createRoot)(ut).render(c.a.createElement(H.a,{store:st},c.a.createElement(it,null)))},28:function(e,t,a){e.exports={firstBlock:"firstBlock_firstBlock__33Zyq",container:"firstBlock_container__ppQMr",box:"firstBlock_box__-xXz7",icon:"firstBlock_icon__2V4ir"}},38:function(e,t,a){e.exports={peoples:"peoples_peoples__2LS3C",container:"peoples_container__3Jj7N",block:"peoples_block__1YK0Q",avatar:"peoples_avatar__1wmFY",checkIcon:"peoples_checkIcon__3OZih",writing:"peoples_writing__3Ob0Z",typing:"peoples_typing__kQfhr"}},39:function(e,t,a){e.exports={mobileFirstBlock:"mobileFirstBlock_mobileFirstBlock__1X4-h",searching:"mobileFirstBlock_searching__jSqO5",settings:"mobileFirstBlock_settings__kKBzY",iconButton:"mobileFirstBlock_iconButton__rQj3W",icon:"mobileFirstBlock_icon__3nKzf"}},43:function(e,t,a){e.exports={send:"send_send__3DAKa",sendInput:"send_sendInput__MX7tZ",sendButton:"send_sendButton__OxKXS",sendIcon:"send_sendIcon__W5fD_",sendImage:"send_sendImage__2iAjH",contactButton:"send_contactButton__fDksX"}},55:function(e,t,a){e.exports={message:"message_message__3tb7g",text:"message_text__3UIXb",imageBlock:"message_imageBlock__btbqe",backdropImg:"message_backdropImg__1ZQfE"}},66:function(e,t,a){e.exports={changeAvatarCard:"changeAvatar_changeAvatarCard__1wN6_",changeAvatarContent:"changeAvatar_changeAvatarContent__33t2t",avatar:"changeAvatar_avatar__3nCxL"}},88:function(e,t,a){e.exports=a(146)}},[[88,2,1]]]);
//# sourceMappingURL=main.dbf8520d.chunk.js.map
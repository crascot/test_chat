(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{102:function(e,t,a){e.exports={chat:"chat_chat__3ZiYO"}},111:function(e,t,a){e.exports={main:"main_main__1Y-MW"}},129:function(e,t,a){},132:function(e,t,a){},134:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),o=a(175),r=a(71),i=a.n(r),s=a(80),l=a.n(s),m=a(52),u=a.n(m),d=a(81),f=a.n(d),p=a(176),_=a(179),E={avatarSize:{width:66,height:66},iconSize:{width:36,height:36}},g=a(27),h=a.n(g),b=function(){return c.a.createElement(o.a,{className:h.a.firstBlock,item:!0,xs:1},c.a.createElement("div",{className:h.a.container},c.a.createElement(o.a,{container:!0,direction:"column",justifyContent:"flex-start",alignItems:"center"},c.a.createElement(o.a,{className:h.a.box,item:!0},c.a.createElement(p.a,{sx:E.avatarSize})),c.a.createElement(o.a,{className:h.a.box,item:!0},c.a.createElement(_.a,{className:h.a.icon},c.a.createElement(i.a,{sx:E.iconSize}))),c.a.createElement(o.a,{className:h.a.box,item:!0},c.a.createElement(_.a,{className:h.a.icon},c.a.createElement(l.a,{sx:E.iconSize}))),c.a.createElement(o.a,{className:h.a.box,item:!0},c.a.createElement(_.a,{className:h.a.icon},c.a.createElement(u.a,{sx:E.iconSize})))),c.a.createElement(o.a,{container:!0,direction:"column",justifyContent:"flex-end",alignItems:"center"},c.a.createElement(o.a,{item:!0,className:h.a.box},c.a.createElement(_.a,{className:h.a.icon},c.a.createElement(f.a,{sx:E.iconSize}))))))},v=a(12),k=a(172),j=a(180),x=a(181),y=a(82),N=a.n(y),I=a(39),B=a.n(I),O=a(19),w=a(77),C=Object(w.b)({name:"peoples",initialState:{id:0,contacts:[],data:!1,isReady:!1},reducers:{getId:function(e,t){e.id=t.payload},getContacts:function(e,t){e.contacts=t.payload},checkData:function(e,t){e.data=t.payload},switchData:function(e){e.data=!e.data},ready:function(e){e.isReady=!e.isReady}}}),S=C.actions,z=S.getId,R=S.getContacts,W=S.checkData,L=S.switchData,H=S.ready,P=C.reducer,D=function(e){var t=e.props,a=Object(O.b)();return c.a.createElement("div",{className:B.a.peoples,onClick:function(){a(W(!1)),a(z(t.id))}},c.a.createElement(p.a,{className:B.a.avatar,src:t.avatar}),c.a.createElement("div",{className:B.a.container},c.a.createElement("div",{className:B.a.block},c.a.createElement(j.a,{variant:"h6",mb:0,component:"div"},t.name),c.a.createElement(N.a,{className:B.a.checkIcon})),c.a.createElement("div",{className:B.a.block},c.a.createElement(j.a,{variant:"caption",component:"div"},t.username),c.a.createElement(j.a,{variant:"caption",display:"block"},"9:30"))))},M=a(73),A=a.n(M),F=function(){var e=Object(O.b)(),t=Object(n.useState)(""),a=Object(v.a)(t,2),r=a[0],i=a[1],s=Object(O.c)(function(e){return e.peoples.contacts}),l=Object(O.c)(function(e){return e.peoples.isReady}),m=s.filter(function(e){return e.name.toLowerCase().includes(r.toLocaleLowerCase())}).map(function(e){return c.a.createElement(D,{props:e,key:e.id})});return Object(n.useEffect)(function(){new Promise(function(e){fetch("https://jsonplaceholder.typicode.com/users").then(function(e){return e.json()}).then(function(t){return e(t)})}).then(function(t){e(R(t)),e(H())})},[]),c.a.createElement(o.a,{className:A.a.secondBlock,item:!0,xs:2},c.a.createElement(o.a,{className:A.a.grid,justifyContent:"flex-start",alignItems:"flex-start"},c.a.createElement(k.a,{value:r,onChange:function(e){return i(e.target.value)},placeholder:"Search",fullWidth:!0}),c.a.createElement(j.a,{className:A.a.chat,color:"gray",variant:"caption",display:"block",gutterBottom:!0},"Chats")),c.a.createElement(o.a,{item:!0,xs:!0,className:A.a.contacts},l?0!==m.length?m:c.a.createElement(j.a,{variant:"h6",className:A.a.notFound},"\u041a\u043e\u043d\u0442\u0430\u043a\u0442 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d"):c.a.createElement("div",{className:A.a.progress},c.a.createElement(x.a,null))))},J=a(178),V=a(83),Y=a.n(V),K=a(79),Q=a.n(K),T=function(){var e=Object(O.b)(),t=Object(O.c)(function(e){return e.peoples.id}),a=Object(O.c)(function(e){return e.peoples.contacts}).find(function(e){return e.id===t});return c.a.createElement(o.a,{item:!0,xs:1,container:!0,className:Q.a.contactInfo,direction:"row",justifyContent:"flex-start",alignItems:"center"},c.a.createElement(J.a,{onClick:function(){return e(L())},color:"inherit"},c.a.createElement(o.a,{item:!0,xs:!0,container:!0,className:Q.a.contactInfoLeft,direction:"row",justifyContent:"flex-start",alignItems:"center"},c.a.createElement(p.a,{className:Q.a.contactAvatar,src:a.avatar}),c.a.createElement(o.a,{item:!0,xs:!0,className:Q.a.contactInfoRight},c.a.createElement(j.a,{variant:"h6",gutterBottom:!0},a.name),c.a.createElement("span",{className:Q.a.contactStatus},c.a.createElement(Y.a,{color:"success"}),c.a.createElement(j.a,{mt:.1,mb:0,ml:1,variant:"caption",display:"block",gutterBottom:!0},"Online"))))))},Z=a(177),U=a(95),G=a.n(U),X=function(e){var t=e.align,a=e.img,r=e.message,i=Object(n.useState)(!1),s=Object(v.a)(i,2),l=s[0],m=s[1];return c.a.createElement(o.a,{container:!0,justifyContent:t,className:G.a.message},a?c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{onClick:function(){return m(!l)},className:G.a.imageBlock},c.a.createElement("img",{src:r,alt:"img"})),c.a.createElement(Z.a,{sx:{color:"#fff",zIndex:function(e){return e.zIndex.drawer+1},padding:30},open:l,onClick:function(){m(!1)}},c.a.createElement("img",{src:r,className:G.a.backdropImg,alt:"img"}))):c.a.createElement(j.a,{className:G.a.text},r))},q=a(102),$=a.n(q);function ee(){var e=Object(O.c)(function(e){return e.peoples.id}),t=Object(O.c)(function(e){return e.message.chat}).filter(function(t){return t.id===e&&t.message});return c.a.createElement(o.a,{item:!0,xs:!0,justifyContent:"flex-start",alignItems:"stretch",className:$.a.chat},t.map(function(e,t){return c.a.createElement(X,{align:e.align,img:e.img,message:e.message,key:t})}))}var te=a(78),ae=a(104),ne=a.n(ae),ce=a(103),oe=a.n(ce),re=Object(w.b)({name:"message",initialState:{chat:[],message:""},reducers:{getChat:function(e,t){e.chat.push(t.payload)},writeMessage:function(e,t){e.message=t.payload}}}),ie=re.actions,se=ie.getChat,le=ie.writeMessage,me=re.reducer,ue=a(74),de=a.n(ue),fe=function(){var e=Object(O.b)(),t=Object(O.c)(function(e){return e.peoples.id}),a=Object(O.c)(function(e){return e.message.message}),n=function(){var n={id:t,align:"right",message:a.trim()};e(se(n)),e(le(""))};return c.a.createElement(o.a,{item:!0,container:!0,className:de.a.send,direction:"row",justifyContent:"space-between",alignItems:"center"},c.a.createElement(o.a,{item:!0,xs:!0,className:de.a.sendImage},c.a.createElement("label",{htmlFor:"icon-button-file"},c.a.createElement("input",{onChange:function(a){var n=a.target;if(n.files.length){var c=new FileReader;c.onload=function(){var a={id:t,align:"right",img:!0,message:c.result};e(se(a))},c.readAsDataURL(n.files[0])}},id:"icon-button-file",type:"file",accept:"image/jpeg,image/png,image/gif"}),c.a.createElement(_.a,{"aria-label":"upload picture",component:"span"},c.a.createElement(oe.a,{className:de.a.contactButton})))),c.a.createElement(o.a,{item:!0,xs:12},c.a.createElement(te.c,{value:a,onChange:function(t){return e(le(t.target.value))},onKeyDown:function(e){"Enter"===e.key&&n()},fullWidth:!0,placeholder:"Write Message...",className:de.a.sendInput})),c.a.createElement(o.a,{item:!0},c.a.createElement(_.a,{className:de.a.sendButton,onClick:n},c.a.createElement(ne.a,{className:de.a.sendIcon}))))},pe=a(97),_e=a.n(pe),Ee=function(){var e=Object(O.c)(function(e){return e.peoples.id}),t=Object(O.c)(function(e){return e.peoples.data}),a=Object(n.useState)("flex"),r=Object(v.a)(a,2),i=r[0],s=r[1];return Object(n.useEffect)(function(){window.innerWidth<=1252&&s(t?"none":"flex")},[t]),c.a.createElement(o.a,{className:_e.a.thirtyBlock,item:!0,xs:!0,container:!0,direction:"column",justifyContent:"space-between",alignItems:"stretch",style:{display:i}},0===e?c.a.createElement(o.a,{className:_e.a.zeroId,item:!0,xs:!0,container:!0,justifyContent:"center",alignItems:"center"},c.a.createElement(j.a,{variant:"h6",gutterBottom:!0,component:"div"},"\u041d\u0430\u0436\u043c\u0438\u0442\u0435 \u043d\u0430 \u043a\u043e\u043d\u0442\u0430\u043a\u0442 \u0447\u0442\u043e\u0431\u044b \u043d\u0430\u0447\u0430\u0442\u044c \u043f\u0435\u0440\u0435\u043f\u0438\u0441\u043a\u0443")):c.a.createElement(o.a,{className:_e.a.contactId,item:!0,xs:!0,container:!0,direction:"column",justifyContent:"space-between",alignItems:"stretch"},c.a.createElement(T,null),c.a.createElement(ee,null),c.a.createElement(fe,null)))},ge={iconPhone:{color:"#0093E9"},iconVideo:{color:"#0093E9"},iconHeart:{color:"#ff0000"}},he=(a(129),a(105)),be=a.n(he),ve=a(106),ke=a.n(ve),je=a(107),xe=a.n(je),ye=a(108),Ne=a.n(ye),Ie=a(109),Be=a.n(Ie),Oe=a(110),we=a.n(Oe),Ce=function(e){var t=e.i,a=Object(n.useState)(0),o=Object(v.a)(a,2),r=o[0],i=o[1];return c.a.createElement(_.a,{onMouseOver:function(){return i(t.id)},onMouseLeave:function(){return i(0)}},t.id===r?t.icon:t.iconHover)},Se=function(){var e=Object(O.b)(),t=Object(O.c)(function(e){return e.peoples.id}),a=Object(O.c)(function(e){return e.peoples.data}),r=Object(O.c)(function(e){return e.peoples.contacts}).find(function(e){return e.id===t}),i=Object(n.useState)(3),s=Object(v.a)(i,2),l=s[0],m=s[1];Object(n.useEffect)(function(){window.innerWidth<=1252?m(!1):m(3)},[window.innerWidth,l]);var d=[{id:1,icon:c.a.createElement(be.a,{style:ge.iconPhone}),iconHover:c.a.createElement(ke.a,{style:ge.iconPhone})},{id:2,icon:c.a.createElement(xe.a,{style:ge.iconVideo}),iconHover:c.a.createElement(Ne.a,{style:ge.iconVideo})},{id:3,icon:c.a.createElement(u.a,{style:ge.iconHeart}),iconHover:c.a.createElement(Be.a,{style:ge.iconHeart})}];if(a)return c.a.createElement(o.a,{item:!0,xs:l,container:!0,className:"fourth-block",direction:"column"},c.a.createElement(o.a,{item:!0,container:!0,className:"close-block",direction:"row",justifyContent:"flex-start",alignItems:"center"},c.a.createElement(_.a,{onClick:function(){return e(W(!1))}},c.a.createElement(we.a,null)),c.a.createElement(j.a,{variant:"h5"},"\u0414\u0430\u043d\u043d\u044b\u0435 \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u0430")),c.a.createElement(o.a,{item:!0,xs:!0,container:!0,justifyContent:"center",alignItems:"center"},c.a.createElement("div",{className:"contact"},c.a.createElement(p.a,{className:"avatar",src:r.avatar}),c.a.createElement(j.a,{className:"name",variant:"h4",gutterBottom:!0},r.name),c.a.createElement("div",{className:"connection"},d.map(function(e,t){return c.a.createElement(Ce,{i:e,key:t})})))))},ze=a(111),Re=a.n(ze),We=function(){return c.a.createElement(o.a,{className:Re.a.main,direction:"row",justifyContent:"center",alignItems:"stretch",container:!0},c.a.createElement(b,null),c.a.createElement(F,null),c.a.createElement(Ee,null),c.a.createElement(Se,null))};var Le=function(){return c.a.createElement(We,null)},He=Object(w.a)({reducer:{peoples:P,message:me}}),Pe=a(112),De=(a(132),document.getElementById("root"));Object(Pe.createRoot)(De).render(c.a.createElement(O.a,{store:He},c.a.createElement(Le,null)))},27:function(e,t,a){e.exports={firstBlock:"firstBlock_firstBlock__uG8yF",container:"firstBlock_container__3W-3B",box:"firstBlock_box__2ydJP",icon:"firstBlock_icon__2Pc4Y"}},39:function(e,t,a){e.exports={peoples:"peoples_peoples__2AYlR",container:"peoples_container__Selfa",block:"peoples_block__2zhHJ",avatar:"peoples_avatar__3xg-W",checkIcon:"peoples_checkIcon__1jiTV"}},61:function(e,t,a){e.exports=a(134)},73:function(e,t,a){e.exports={secondBlock:"secondBlock_secondBlock__2PwsV",contacts:"secondBlock_contacts__36HCv",grid:"secondBlock_grid__3KuDf",chat:"secondBlock_chat__Ma1dK",notFound:"secondBlock_notFound__3-zb9",progress:"secondBlock_progress__2Q9Q1"}},74:function(e,t,a){e.exports={send:"send_send__rKDJB",sendInput:"send_sendInput__1J5Zp",sendButton:"send_sendButton__3Sf3r",sendIcon:"send_sendIcon__u0R9n",sendImage:"send_sendImage__QCANz",contactButton:"send_contactButton__2uLzz"}},79:function(e,t,a){e.exports={contactInfo:"contact-info_contactInfo__V7g2h",contactInfoLeft:"contact-info_contactInfoLeft__2wf6w",contactAvatar:"contact-info_contactAvatar__3tYmr",contactInfoRight:"contact-info_contactInfoRight__2_6zz",contactStatus:"contact-info_contactStatus__1WQO0"}},95:function(e,t,a){e.exports={message:"message_message__3TnWB",text:"message_text__1yUih",imageBlock:"message_imageBlock__1fXYR",backdropImg:"message_backdropImg__7MTfA"}},97:function(e,t,a){e.exports={thirtyBlock:"thirdBlock_thirtyBlock__21tZn",zeroId:"thirdBlock_zeroId__LykdP",contactId:"thirdBlock_contactId__2mtP3"}}},[[61,2,1]]]);
//# sourceMappingURL=main.f146b1f8.chunk.js.map
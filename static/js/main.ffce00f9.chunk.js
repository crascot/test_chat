(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{112:function(e,t,a){},114:function(e,t,a){},116:function(e,t,a){},118:function(e,t,a){},120:function(e,t,a){},122:function(e,t,a){},124:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(166),i=a(82),o=a.n(i),l=a(84),s=a.n(l),m=a(51),u=a.n(m),f=a(85),d=a.n(f),g=a(167),E=a(164),p={avatarSize:{width:66,height:66},iconSize:{width:36,height:36}},b=(a(73),function(){return c.a.createElement(r.a,{className:"firstBlock",item:!0,xs:1},c.a.createElement("div",{className:"container"},c.a.createElement(r.a,{container:!0,direction:"column",justifyContent:"flex-start",alignItems:"center"},c.a.createElement(r.a,{item:!0,className:"box"},c.a.createElement(g.a,{sx:p.avatarSize})),c.a.createElement(r.a,{className:"box",item:!0},c.a.createElement(E.a,{className:"icon"},c.a.createElement(o.a,{sx:p.iconSize}))),c.a.createElement(r.a,{className:"box",item:!0},c.a.createElement(E.a,{className:"icon"},c.a.createElement(s.a,{sx:p.iconSize}))),c.a.createElement(r.a,{className:"box",item:!0},c.a.createElement(E.a,{className:"icon"},c.a.createElement(u.a,{sx:p.iconSize})))),c.a.createElement(r.a,{container:!0,direction:"column",justifyContent:"flex-end",alignItems:"center"},c.a.createElement(r.a,{item:!0,className:"box"},c.a.createElement(E.a,{className:"icon"},c.a.createElement(d.a,{sx:p.iconSize}))))))}),h=a(11),v=a(163),y=a(168),j=a(86),x=a.n(j),C=(a(89),a(19)),N=a(39),w=Object(N.b)({name:"peoples",initialState:{id:0,contacts:[],currentContact:{}},reducers:{getId:function(e,t){e.id=t.payload},getContacts:function(e,t){e.contacts=t.payload},getCurrentContact:function(e,t){e.currentContact=t.payload}}}),O=w.actions,I=O.getId,k=O.getContacts,B=O.getCurrentContact,S=w.reducer,z={container:{width:"100%"},block:{display:"flex",justifyContent:"space-between",alignItems:"center"},checkIcon:{marginBottom:7,marginLeft:7},avatar:{marginRight:15,width:50,height:50}},H=function(e){var t=e.props,a=Object(C.b)();return c.a.createElement("div",{className:"peoples",onClick:function(){return a(I(t.id))}},c.a.createElement(g.a,{style:z.avatar,src:t.avatar}),c.a.createElement("div",{style:z.container},c.a.createElement("div",{style:z.block},c.a.createElement(y.a,{variant:"h6",mb:0,gutterBottom:!0,component:"div"},t.name),c.a.createElement(x.a,{style:z.checkIcon})),c.a.createElement("div",{style:z.block},c.a.createElement(y.a,{variant:"caption",display:"block",gutterBottom:!0},t.username),c.a.createElement(y.a,{variant:"caption",display:"block",gutterBottom:!0},"9:30"))))},L=(a(98),{grid:{padding:15},chat:{margin:"15px 0 -15px 0"}}),M=function(){var e=Object(C.b)(),t=Object(n.useState)(""),a=Object(h.a)(t,2),i=a[0],o=a[1],l=Object(C.c)(function(e){return e.peoples.id}),s=Object(C.c)(function(e){return e.peoples.contacts}),m=s.filter(function(e){return e.name.toLowerCase().includes(i.toLocaleLowerCase())}).map(function(e){return c.a.createElement(H,{props:e,key:e.id})});return Object(n.useEffect)(function(){new Promise(function(e){fetch("https://jsonplaceholder.typicode.com/users").then(function(e){return e.json()}).then(function(t){return e(t)})}).then(function(t){e(k(t))})},[]),e(B(s.find(function(e){return e.id===l}))),c.a.createElement(r.a,{className:"secondBlock",item:!0,xs:2},c.a.createElement(r.a,{style:L.grid,justifyContent:"flex-start",alignItems:"flex-start"},c.a.createElement(v.a,{value:i,onChange:function(e){return o(e.target.value)},placeholder:"Search",fullWidth:!0}),c.a.createElement(y.a,{style:L.chat,color:"gray",variant:"caption",display:"block",gutterBottom:!0},"Chats")),c.a.createElement(r.a,{item:!0,xs:!0,className:"contacts"},m))},P=a(87),R=a.n(P),V=a(88),W=a.n(V),F=(a(112),Object(N.b)({name:"message",initialState:{chat:[],message:""},reducers:{getChat:function(e,t){e.chat.push(t.payload)},writeMessage:function(e,t){e.message=t.payload}}})),J=F.actions,A=J.getChat,D=J.writeMessage,U=F.reducer,q=function(){var e=Object(C.b)(),t=Object(C.c)(function(e){return e.peoples.id}),a=Object(C.c)(function(e){return e.peoples.currentContact});return c.a.createElement(r.a,{item:!0,xs:1,container:!0,className:"contact-info",direction:"row",justifyContent:"space-between",alignItems:"center"},c.a.createElement(r.a,{item:!0,xs:11,container:!0,className:"contact-info-left",direction:"row",justifyContent:"flex-start",alignItems:"center"},c.a.createElement(g.a,{className:"contact-avatar",src:a.avatar}),c.a.createElement(r.a,{direction:"column",justifyContent:"space-between",alignItems:"center"},c.a.createElement(y.a,{variant:"h6",gutterBottom:!0,component:"div"},a.name),c.a.createElement("span",{className:"contact-status"},c.a.createElement(R.a,{color:"success"}),c.a.createElement(y.a,{mt:.1,mb:0,ml:1,variant:"caption",display:"block",gutterBottom:!0},"Online")))),c.a.createElement(r.a,{item:!0,xs:1,className:"send-image"},c.a.createElement("label",{htmlFor:"icon-button-file"},c.a.createElement("input",{onChange:function(a){var n=a.target;if(n.files.length){var c=new FileReader;c.onload=function(){var a={id:t,align:"right",img:!0,message:c.result};e(A(a))},c.readAsDataURL(n.files[0])}},id:"icon-button-file",type:"file",accept:"image/jpeg,image/png,image/gif"}),c.a.createElement(E.a,{"aria-label":"upload picture",component:"span"},c.a.createElement(W.a,{className:"contact-button"})))))},G=(a(114),function(e){var t=e.align,a=e.img,n=e.message;return c.a.createElement(r.a,{container:!0,justifyContent:t,className:"message"},a?c.a.createElement("img",{src:n,className:"image",alt:"img"}):c.a.createElement(y.a,{className:"text"},n))});function K(){var e=Object(C.c)(function(e){return e.peoples.id}),t=Object(C.c)(function(e){return e.message.chat}).filter(function(t){return t.id===e&&t.message});return c.a.createElement(r.a,{item:!0,xs:9,justifyContent:"flex-start",alignItems:"stretch",className:"chat"},t.map(function(e){return c.a.createElement(G,{align:e.align,img:e.img,message:e.message,key:Math.random()})}))}var Q=a(40),T=a(102),X=a.n(T),Y=function(){var e=Object(C.b)(),t=Object(C.c)(function(e){return e.peoples.id}),a=Object(C.c)(function(e){return e.message.message});return c.a.createElement(r.a,{item:!0,container:!0,className:"send",direction:"row",justifyContent:"center",alignItems:"center"},c.a.createElement(r.a,{item:!0,xs:12},c.a.createElement(Q.c,{value:a,onChange:function(t){return e(D(t.target.value))},fullWidth:!0,placeholder:"Write Message...",className:"send-input"})),c.a.createElement(r.a,{item:!0},c.a.createElement(E.a,{className:"send-button",onClick:function(){e(A({id:t,align:"right",message:a})),e(D(""))}},c.a.createElement(X.a,{className:"send-icon"}))))},Z=(a(116),function(){var e=Object(C.c)(function(e){return e.peoples.id});return c.a.createElement(r.a,{className:"thirty-block",item:!0,xs:!0,container:!0,direction:"column",justifyContent:"space-between",alignItems:"stretch"},0===e?c.a.createElement(r.a,{className:"zero-id",item:!0,xs:!0,container:!0,justifyContent:"center",alignItems:"center"},c.a.createElement(y.a,{variant:"h6",gutterBottom:!0,component:"div"},"\u041d\u0430\u0436\u043c\u0438\u0442\u0435 \u043d\u0430 \u043a\u043e\u043d\u0442\u0430\u043a\u0442 \u0447\u0442\u043e\u0431\u044b \u043d\u0430\u0447\u0430\u0442\u044c \u043f\u0435\u0440\u0435\u043f\u0438\u0441\u043a\u0443")):c.a.createElement(r.a,{className:"contact-id",item:!0,xs:!0,container:!0,direction:"column",justifyContent:"space-between",alignItems:"stretch"},c.a.createElement(q,null),c.a.createElement(K,null),c.a.createElement(Y,null)))}),$={iconPhone:{color:"#0093E9"},iconVideo:{color:"#0093E9"},iconHeart:{color:"#ff0000"}},_=(a(118),a(103)),ee=a.n(_),te=a(104),ae=a.n(te),ne=a(105),ce=a.n(ne),re=a(106),ie=a.n(re),oe=a(107),le=a.n(oe),se=function(e){var t=e.i,a=Object(n.useState)(0),r=Object(h.a)(a,2),i=r[0],o=r[1];return c.a.createElement(E.a,{onMouseOver:function(){return o(t.id)},onMouseLeave:function(){return o(0)}},t.id===i?t.icon:t.iconHover)},me=function(){var e=Object(C.c)(function(e){return e.peoples.id}),t=Object(C.c)(function(e){return e.peoples.currentContact}),a=[{id:1,icon:c.a.createElement(ee.a,{style:$.iconPhone}),iconHover:c.a.createElement(ae.a,{style:$.iconPhone})},{id:2,icon:c.a.createElement(ce.a,{style:$.iconVideo}),iconHover:c.a.createElement(ie.a,{style:$.iconVideo})},{id:3,icon:c.a.createElement(u.a,{style:$.iconHeart}),iconHover:c.a.createElement(le.a,{style:$.iconHeart})}];if(0!==e)return c.a.createElement(r.a,{item:!0,xs:3,container:!0,className:"fourth-block",direction:"column",justifyContent:"center",alignItems:"stretch"},c.a.createElement(r.a,{item:!0,xs:6,justifyContent:"center",alignItems:"flex-end",container:!0},c.a.createElement("div",{className:"contact"},c.a.createElement(g.a,{className:"avatar",src:t.avatar}),c.a.createElement(y.a,{className:"name",variant:"h4",gutterBottom:!0,component:"div"},t.name))),c.a.createElement(r.a,{item:!0,xs:1,className:"connection",direction:"row",justifyContent:"space-between",alignItems:"flex-start",container:!0},a.map(function(e){return c.a.createElement(se,{i:e})})))},ue=(a(120),function(){return c.a.createElement(r.a,{className:"main",direction:"row",justifyContent:"center",alignItems:"stretch",container:!0},c.a.createElement(b,null),c.a.createElement(M,null),c.a.createElement(Z,null),c.a.createElement(me,null))});var fe=function(){return c.a.createElement(ue,null)},de=Object(N.a)({reducer:{peoples:S,message:U}}),ge=a(108),Ee=(a(122),document.getElementById("root"));Object(ge.createRoot)(Ee).render(c.a.createElement(C.a,{store:de},c.a.createElement(fe,null)))},71:function(e,t,a){e.exports=a(124)},73:function(e,t,a){},89:function(e,t,a){},98:function(e,t,a){}},[[71,2,1]]]);
//# sourceMappingURL=main.ffce00f9.chunk.js.map
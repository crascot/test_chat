(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{109:function(e,t,a){},111:function(e,t,a){},113:function(e,t,a){},115:function(e,t,a){},117:function(e,t,a){},119:function(e,t,a){},121:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(163),i=a(82),o=a.n(i),l=a(84),s=a.n(l),m=a(51),u=a.n(m),f=a(85),g=a.n(f),d=a(164),E=a(161),p={avatarSize:{width:66,height:66},iconSize:{width:36,height:36}},h=(a(73),function(){return c.a.createElement(r.a,{className:"firstBlock",item:!0,xs:1},c.a.createElement("div",{className:"container"},c.a.createElement(r.a,{container:!0,direction:"column",justifyContent:"flex-start",alignItems:"center"},c.a.createElement(r.a,{item:!0,className:"box"},c.a.createElement(d.a,{sx:p.avatarSize})),c.a.createElement(r.a,{className:"box",item:!0},c.a.createElement(E.a,{className:"icon"},c.a.createElement(o.a,{sx:p.iconSize}))),c.a.createElement(r.a,{className:"box",item:!0},c.a.createElement(E.a,{className:"icon"},c.a.createElement(s.a,{sx:p.iconSize}))),c.a.createElement(r.a,{className:"box",item:!0},c.a.createElement(E.a,{className:"icon"},c.a.createElement(u.a,{sx:p.iconSize})))),c.a.createElement(r.a,{container:!0,direction:"column",justifyContent:"flex-end",alignItems:"center"},c.a.createElement(r.a,{item:!0,className:"box"},c.a.createElement(E.a,{className:"icon"},c.a.createElement(g.a,{sx:p.iconSize}))))))}),b=a(12),v=a(160),y=a(165),j=a(86),C=a.n(j),x=(a(89),a(19)),w=a(39),N=Object(w.b)({name:"peoples",initialState:{id:0,contacts:[],currentContact:{}},reducers:{getId:function(e,t){e.id=t.payload},getContacts:function(e,t){e.contacts=t.payload},getCurrentContact:function(e,t){e.currentContact=t.payload}}}),O=N.actions,I=O.getId,k=O.getContacts,B=O.getCurrentContact,S=N.reducer,z={container:{width:"100%"},block:{display:"flex",justifyContent:"space-between",alignItems:"center"},checkIcon:{marginBottom:7,marginLeft:7},avatar:{marginRight:15,width:50,height:50}},L=function(e){var t=e.props,a=Object(x.b)();return c.a.createElement("div",{className:"peoples",onClick:function(){return a(I(t.id))}},c.a.createElement(d.a,{style:z.avatar,src:t.avatar}),c.a.createElement("div",{style:z.container},c.a.createElement("div",{style:z.block},c.a.createElement(y.a,{variant:"h6",mb:0,gutterBottom:!0,component:"div"},t.name),c.a.createElement(C.a,{style:z.checkIcon})),c.a.createElement("div",{style:z.block},c.a.createElement(y.a,{variant:"caption",display:"block",gutterBottom:!0},t.username),c.a.createElement(y.a,{variant:"caption",display:"block",gutterBottom:!0},"9:30"))))},M=(a(98),{grid:{padding:15},chat:{margin:"15px 0 -15px 0"}}),R=function(){var e=Object(x.b)(),t=Object(n.useState)(""),a=Object(b.a)(t,2),i=a[0],o=a[1],l=Object(x.c)(function(e){return e.peoples.id}),s=Object(x.c)(function(e){return e.peoples.contacts}),m=s.filter(function(e){return e.name.toLowerCase().includes(i.toLocaleLowerCase())}).map(function(e){return c.a.createElement(L,{props:e,key:e.id})});return Object(n.useEffect)(function(){new Promise(function(e){fetch("https://jsonplaceholder.typicode.com/users").then(function(e){return e.json()}).then(function(t){return e(t)})}).then(function(t){e(k(t))})},[]),e(B(s.find(function(e){return e.id===l}))),c.a.createElement(r.a,{className:"secondBlock",item:!0,xs:2},c.a.createElement(r.a,{style:M.grid,justifyContent:"flex-start",alignItems:"flex-start"},c.a.createElement(v.a,{value:i,onChange:function(e){return o(e.target.value)},placeholder:"Search",fullWidth:!0}),c.a.createElement(y.a,{style:M.chat,color:"gray",variant:"caption",display:"block",gutterBottom:!0},"Chats")),c.a.createElement(r.a,{item:!0,xs:!0,className:"contacts"},m))},D=a(87),P=a.n(D),W=a(88),A=a.n(W),F=(a(109),Object(w.b)({name:"message",initialState:{chat:[],message:""},reducers:{getChat:function(e,t){e.chat.push(t.payload)},writeMessage:function(e,t){e.message=t.payload}}})),H=F.actions,J=H.getChat,V=H.writeMessage,T=F.reducer,U=function(){var e=Object(x.b)(),t=Object(x.c)(function(e){return e.peoples.id}),a=Object(x.c)(function(e){return e.peoples.currentContact});return c.a.createElement(r.a,{item:!0,xs:1,container:!0,className:"contact-info",direction:"row",justifyContent:"space-between",alignItems:"center"},c.a.createElement(r.a,{item:!0,xs:11,container:!0,className:"contact-info-left",direction:"row",justifyContent:"flex-start",alignItems:"center"},c.a.createElement(d.a,{className:"contact-avatar",src:a.avatar}),c.a.createElement(r.a,{direction:"column",justifyContent:"space-between",alignItems:"center"},c.a.createElement(y.a,{variant:"h6",gutterBottom:!0,component:"div"},a.name),c.a.createElement("span",{className:"contact-status"},c.a.createElement(P.a,{color:"success"}),c.a.createElement(y.a,{mt:.1,mb:0,ml:1,variant:"caption",display:"block",gutterBottom:!0},"Online")))),c.a.createElement(r.a,{item:!0,xs:1,className:"send-image"},c.a.createElement("label",{htmlFor:"icon-button-file"},c.a.createElement("input",{onChange:function(a){var n=a.target;if(n.files.length){var c=new FileReader;c.onload=function(){var a={id:t,align:"right",img:!0,message:c.result};e(J(a))},c.readAsDataURL(n.files[0])}},id:"icon-button-file",type:"file",accept:"image/jpeg,image/png,image/gif"}),c.a.createElement(E.a,{"aria-label":"upload picture",component:"span"},c.a.createElement(A.a,{className:"contact-button"})))))},q=(a(111),function(e){var t=e.align,a=e.img,n=e.message;return c.a.createElement(r.a,{container:!0,justifyContent:t,className:"message"},a?c.a.createElement("img",{src:n,className:"image",alt:"img"}):c.a.createElement(y.a,{className:"text"},n))});function G(){var e=Object(x.c)(function(e){return e.peoples.id}),t=Object(x.c)(function(e){return e.message.chat}).filter(function(t){return t.id===e&&t.message});return c.a.createElement(r.a,{item:!0,xs:9,justifyContent:"flex-start",alignItems:"stretch",className:"chat"},t.map(function(e){return c.a.createElement(q,{align:e.align,img:e.img,message:e.message,key:Math.random()})}))}var K=a(40),Q=a(102),X=a.n(Q),Y=function(){var e=Object(x.b)(),t=Object(x.c)(function(e){return e.peoples.id}),a=Object(x.c)(function(e){return e.message.message});return c.a.createElement(r.a,{item:!0,container:!0,className:"send",direction:"row",justifyContent:"center",alignItems:"center"},c.a.createElement(r.a,{item:!0,xs:12},c.a.createElement(K.c,{value:a,onChange:function(t){return e(V(t.target.value))},fullWidth:!0,placeholder:"Write Message...",className:"send-input"})),c.a.createElement(r.a,{item:!0},c.a.createElement(E.a,{className:"send-button",onClick:function(){e(J({id:t,align:"right",message:a})),e(V(""))}},c.a.createElement(X.a,{className:"send-icon"}))))},Z=(a(113),function(){var e=Object(x.c)(function(e){return e.peoples.id});return c.a.createElement(r.a,{className:"thirty-block",item:!0,xs:!0,container:!0,direction:"column",justifyContent:"space-between",alignItems:"stretch"},0===e?c.a.createElement(r.a,{className:"zero-id",item:!0,xs:!0,container:!0,justifyContent:"center",alignItems:"center"},c.a.createElement(y.a,{variant:"h6",gutterBottom:!0,component:"div"},"\u041d\u0430\u0436\u043c\u0438\u0442\u0435 \u043d\u0430 \u043a\u043e\u043d\u0442\u0430\u043a\u0442 \u0447\u0442\u043e\u0431\u044b \u043d\u0430\u0447\u0430\u0442\u044c \u043f\u0435\u0440\u0435\u043f\u0438\u0441\u043a\u0443")):c.a.createElement(r.a,{className:"contact-id",item:!0,xs:!0,container:!0,direction:"column",justifyContent:"space-between",alignItems:"stretch"},c.a.createElement(U,null),c.a.createElement(G,null),c.a.createElement(Y,null)))}),$={main:{backgroundColor:"white"},avatar:{width:"15vw",height:"15vw",margin:"0 auto"},contactData:{width:"100%"},name:{textAlign:"center",marginTop:25,fontSize:"2.5vw"},iconPhone:{color:"#0093E9"},iconVideo:{color:"#0093E9"},iconHeart:{color:"#ff0000"}},_=(a(115),a(103)),ee=a.n(_),te=a(104),ae=a.n(te),ne=function(){var e=Object(x.c)(function(e){return e.peoples.id}),t=Object(x.c)(function(e){return e.peoples.currentContact});if(0!==e)return c.a.createElement(r.a,{item:!0,xs:3,style:$.main,container:!0,direction:"column",justifyContent:"center",alignItems:"stretch"},c.a.createElement(r.a,{item:!0,xs:6,justifyContent:"center",alignItems:"center",container:!0},c.a.createElement("div",{style:$.contactData},c.a.createElement(d.a,{style:$.avatar,src:t.avatar}),c.a.createElement(y.a,{style:$.name,variant:"h4",gutterBottom:!0,component:"div"},t.name))),c.a.createElement(r.a,{item:!0,xs:1,className:"connection",direction:"row",justifyContent:"space-between",alignItems:"center",container:!0},c.a.createElement(E.a,{style:$.iconPhone},c.a.createElement(ee.a,null)),c.a.createElement(E.a,{style:$.iconVideo},c.a.createElement(ae.a,null)),c.a.createElement(E.a,{style:$.iconHeart},c.a.createElement(u.a,null))))},ce=(a(117),function(){return c.a.createElement(r.a,{className:"main",direction:"row",justifyContent:"center",alignItems:"stretch",container:!0},c.a.createElement(h,null),c.a.createElement(R,null),c.a.createElement(Z,null),c.a.createElement(ne,null))});var re=function(){return c.a.createElement(ce,null)},ie=Object(w.a)({reducer:{peoples:S,message:T}}),oe=a(105),le=(a(119),document.getElementById("root"));Object(oe.createRoot)(le).render(c.a.createElement(x.a,{store:ie},c.a.createElement(re,null)))},71:function(e,t,a){e.exports=a(121)},73:function(e,t,a){},89:function(e,t,a){},98:function(e,t,a){}},[[71,2,1]]]);
//# sourceMappingURL=main.ead47663.chunk.js.map
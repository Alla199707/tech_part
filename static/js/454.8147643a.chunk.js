"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[454],{454:function(n,e,t){t.r(e),t.d(e,{default:function(){return T}});var r=t(413),o=t(439),i=t(433),s=t(791);var a=t.p+"static/media/logo.e917114d7945c04c85a8946a331d28b6.svg";var l,p,c,x,u,d,g,f,h,b,w=t.p+"static/media/card.23dcbc3cc8ccc9682f24b4acffb5efb2.svg",m=t(168),Z=t(444),j=Z.ZP.li(l||(l=(0,m.Z)(["\n  position: relative;\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  height: 480px;\n  width: 380px;\n  font-weight: 500;\n  font-size: 20px;\n  line-height: 1.2;\n  text-transform: uppercase;\n  color: rgb(235, 216, 255);\n  background-image: linear-gradient(\n    114.99deg,\n    rgb(71, 28, 169) -0.99%,\n    rgb(87, 54, 163) 54.28%,\n    rgb(75, 42, 153) 78.99%\n  );\n  border-radius: 20px;\n  box-shadow: rgb(0 0 0 / 23%) -2.5777px 6.87386px 20.6216px;\n"]))),k=Z.ZP.button(p||(p=(0,m.Z)(["\n  width: 180px;\n  height: 50px;\n  border-radius: 10px;\n  font-weight: 600;\n  font-size: 18px;\n  line-height: 1.2;\n  border: aliceblue;\n  background-color: #ebd8ff;\n  color: black;\n  margin-bottom: 10px;\n  text-transform: uppercase;\n  box-shadow: rgb(0 0 0 / 25%) 0px 3.43693px 3.43693px;\n  transition: all 0.3s ease-in-out 0s;\n  cursor: pointer;\n"]))),v=Z.ZP.div(c||(c=(0,m.Z)(["\n  position: absolute;\n  top: 214px;\n  left: 0px;\n  height: 8px;\n  width: 380px;\n  background: rgb(235, 216, 255);\n  box-shadow: rgb(0 0 0 / 6%) 0px 3.43693px 3.43693px,\n    rgb(174 123 227) 0px -1.71846px 3.43693px inset,\n    rgb(251 248 255) 0px 3.43693px 2.5777px inset;\n"]))),S=Z.ZP.div(x||(x=(0,m.Z)(["\n  position: absolute;\n  top: 178px;\n  left: 150px;\n  height: 80px;\n  width: 80px;\n  background: rgb(235, 216, 255);\n  border-radius: 50px;\n  box-shadow: rgb(0 0 0 / 6%) 0px 4.39163px 4.39163px,\n    rgb(174 123 227) 0px -2.19582px 4.39163px inset,\n    rgb(251 248 255) 0px 4.39163px 3.29372px inset;\n"]))),y=Z.ZP.img(u||(u=(0,m.Z)(["\n  position: absolute;\n  top: 187px;\n  left: 159px;\n  height: 62px;\n  width: 62px;\n  background-size: cover;\n  border-radius: 50px;\n"]))),P=Z.ZP.h3(d||(d=(0,m.Z)(["\n  margin: 5px 0 35px;\n"]))),C=Z.ZP.h3(g||(g=(0,m.Z)(["\n  margin-top: 65px;\n"]))),F=Z.ZP.img(f||(f=(0,m.Z)(["\n  align-self: flex-start;\n  margin-top: 25px;\n  margin-left: 25px;\n"]))),I=t(184),O=function(n){var e=n.user,t=n.setUsers,o=JSON.parse(localStorage.getItem("users")),i=e.twets,s=e.followers,l=e.avatar,p=e.id,c=e.follow;return(0,I.jsxs)(j,{children:[(0,I.jsx)(F,{src:a,alt:"GO-IT-logo",width:"70px",height:"20px"}),(0,I.jsx)("img",{src:w,alt:"GO-IT-card"}),(0,I.jsx)(v,{}),(0,I.jsx)(S,{}),(0,I.jsx)(y,{src:l,alt:"".concat(e," avatar"),width:"100px",height:"100px"}),(0,I.jsxs)(C,{children:[i," Tweets"]}),(0,I.jsxs)(P,{children:[s.toLocaleString("en-US")," Followers"]}),c?(0,I.jsx)(k,{onClick:function(){return function(n){var e=o.map((function(e){return e.id===n?(0,r.Z)((0,r.Z)({},e),{},{follow:!e.follow,followers:e.followers-1}):e}));localStorage.setItem("users",JSON.stringify(e)),t(e)}(p)},type:"button",style:{backgroundColor:c?"#5CD3A8":"#EBD8FF"},id:p,children:(0,I.jsx)("span",{children:"Following"})}):(0,I.jsx)(k,{onClick:function(){return function(n){var e=o.map((function(e){return e.id===n?(0,r.Z)((0,r.Z)({},e),{},{follow:!e.follow,followers:e.followers+1}):e}));localStorage.setItem("users",JSON.stringify(e)),t(e)}(p)},type:"button",style:{backgroundColor:c?"#5CD3A8":"#EBD8FF"},id:p,children:c?(0,I.jsx)("span",{children:"Following"}):(0,I.jsx)("span",{children:"Follow"})})]},p)},E=Z.ZP.ul(h||(h=(0,m.Z)(["\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  column-gap: 20px;\n  row-gap: 20px;\n"]))),J=Z.ZP.button(b||(b=(0,m.Z)(["\n  font-weight: 600;\n  font-size: 18px;\n  line-height: 1.2;\n  color: white;\n  display: flex;\n  justify-content: center;\n  min-width: 196px;\n  margin: 40px auto 0;\n  padding: 14px 39px;\n\n  border-radius: 10px;\n  border: none;\n  cursor: pointer;\n\n  background-image: linear-gradient(\n    114.99deg,\n    rgb(71, 28, 169) -0.99%,\n    rgb(87, 54, 163) 54.28%,\n    rgb(75, 42, 153) 78.99%\n  );\n"]))),N=function(n){var e=n.users,t=n.setUsers,r=(0,s.useState)(e.slice(1,3)),a=(0,o.Z)(r,2),l=a[0],p=a[1],c=(0,s.useState)(3),x=(0,o.Z)(c,2),u=x[0],d=x[1];return(0,s.useEffect)((function(){var n=(0,i.Z)(e).slice(0,u);p(n)}),[u,e]),(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(E,{children:l.map((function(n){return(0,I.jsx)(O,{user:n,setUsers:t},n.key)}))}),u<30?(0,I.jsx)(J,{onClick:function(){d(u+3)},children:"Load more"}):(0,I.jsx)("h2",{children:"That's all"})]})};var T=function(){var n=(0,s.useState)([]),e=(0,o.Z)(n,2),t=e[0],i=e[1],a=JSON.parse(localStorage.getItem("users"));return(0,s.useEffect)((function(){fetch("https://645399b1c18adbbdfea1e9f0.mockapi.io/users",{method:"GET",headers:{"content-type":"application/json"}}).then((function(n){if(n.ok)return n.json()})).then((function(n){var e=n.map((function(n){return(0,r.Z)((0,r.Z)({},n),{},{follow:!1})}));i(e),null===a&&localStorage.setItem("users",JSON.stringify(e))})).catch((function(n){return console.log(n)}))})),(0,I.jsx)(N,{users:null!==a&&void 0!==a?a:t,setUsers:i})}}}]);
//# sourceMappingURL=454.8147643a.chunk.js.map
(this["webpackJsonplogin-page"]=this["webpackJsonplogin-page"]||[]).push([[0],{141:function(e,n,t){e.exports=t(299)},146:function(e,n,t){},299:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(24),l=t.n(o),i=(t(146),t(82)),c=t(19),u=t(15),s=t(133),m=function e(){Object(s.a)(this,e)};m.setAccessToken=function(e){localStorage.setItem("access_token",e)},m.getAccessToken=function(){return localStorage.getItem("access_token")},m.isLoggedIn=function(){return!!m.getAccessToken()},m.logout=function(){m.setAccessToken("")};var d=m,p=t(2),f=t(3);function g(){var e=Object(p.a)(["\n  flex: 1;\n  color: #333;\n  display: flex;\n  align-items: center;\n"]);return g=function(){return e},e}function b(){var e=Object(p.a)(["\n  flex: 30%;\n  background-color: #fff;\n  padding: 60px;\n  font-size: 14px;\n  display: flex;\n  flex-direction: column;\n"]);return b=function(){return e},e}function E(){var e=Object(p.a)(["\n  flex: 70%;\n  background-image: ",";\n  background-color: #f5f5f5;\n  background-repeat: no-repeat;\n  background-size: cover;\n"]);return E=function(){return e},e}function v(){var e=Object(p.a)(["\n  display: flex;\n  margin: 0 auto;\n  height: 100vh;\n  \n  a, .forget-pwd {\n    color: #009af9;\n  }\n  \n  a {\n    text-decoration: none;\n  }\n"]);return v=function(){return e},e}function h(){var e=Object(p.a)(["\n  flex: 1;\n  padding: 20px;\n  background-color: #fafbfd;\n"]);return h=function(){return e},e}function x(){var e=Object(p.a)(["\n  min-width: 250px;\n  border-right: 1px solid #f2f2f2;\n  padding: 20px;\n  height: calc(100vh - 100px);\n  \n  ul {\n    list-style: none;\n    padding: 0;\n    margin: 0;\n    \n    li {\n      margin: 10px 0;\n      div {\n        padding: 10px 0;\n        a {\n          display: flex;\n          align-items: center;\n          text-decoration: none;\n          color: #666;\n          img {\n            margin-right: 10px;\n          }\n        }\n        &.active {\n          a {\n            color: #009af9;\n          }\n        }\n      }\n    }\n  }\n"]);return x=function(){return e},e}function w(){var e=Object(p.a)(["\n  display: flex;\n  height: calc(100vh - 56px);\n"]);return w=function(){return e},e}function k(){var e=Object(p.a)(["\n  display: flex;\n  justify-content: space-between;\n  padding: 15px;\n  border-bottom: 1px solid #f2f2f2;\n  \n  .logo {\n    cursor: pointer;\n  }\n\n  .logout-block {\n    display: flex;\n    align-items: center;\n    cursor: pointer;\n\n    span {\n      margin-left: 5px;\n    }\n  }\n"]);return k=function(){return e},e}function y(){var e=Object(p.a)(["\n  display: flex;\n  flex-direction: column;\n  background-color: #fff;\n  color: #666;\n"]);return y=function(){return e},e}var j=f.a.div(y()),O=f.a.div(k()),N=f.a.div(w()),S=f.a.div(x()),q=f.a.div(h()),F=f.a.div(v()),L=f.a.div(E(),(function(e){return e.isRegisterPage?"url(./img/register-bg.jpg)":"url(./img/login-bg.jpg)"})),P=f.a.div(b()),R=f.a.div(g()),A=[{url:"/dashboard",icon:"dashboard@2x.png",label:"Dashboard"},{url:"/incoming-enq",icon:"incoming-enq@2x.png",label:"Incoming Enquiries"},{url:"/incoming-qout",icon:"incoming-qout@2x.png",label:"Incoming Quotations"},{url:"/product",icon:"product@2x.png",label:"Products"},{url:"/my-request",icon:"my-request@2x.png",label:"My Request"},{url:"/order",icon:"order@2x.png",label:"Order History"},{url:"/profile",icon:"profile@2x.png",label:"Profile"},{url:"/setting",icon:"setting@2x.png",label:"Settings"}],I=function(e){var n=e.to,t=e.icon,a=e.label,o=e.activeOnlyWhenExact,l=Object(c.g)({path:n,exact:o}),i="./icons/"+(l?"active/":"")+t;return r.a.createElement("div",{className:l?"active":""},r.a.createElement(u.b,{to:n},r.a.createElement("img",{src:i,alt:a,width:20}),a))},z=function(){return r.a.createElement(S,null,r.a.createElement("ul",null,A.map((function(e,n){var t=e.url,a=e.icon,o=e.label;return r.a.createElement("li",{key:n},r.a.createElement(I,{to:t,label:o,icon:a,activeOnlyWhenExact:!0}))}))))},_=Object(c.h)((function(e){return r.a.createElement(O,null,r.a.createElement("img",{src:"./img/logo@2x.jpg",alt:"logo",width:150,onClick:function(){e.history.push("/")},className:"logo"}),r.a.createElement("div",{className:"logout-block",onClick:function(){d.logout(),e.history.push("/login")}},r.a.createElement("img",{src:"./icons/active/logout@2x.png",alt:"logo",width:20}),r.a.createElement("span",null,"Logout")))}));function T(){var e=Object(p.a)(["\n  margin-bottom: 15px;\n  font-size: 13px;\n"]);return T=function(){return e},e}function B(){var e=Object(p.a)(["\n  color: #333;\n  font-size: 15px;\n"]);return B=function(){return e},e}function U(){var e=Object(p.a)(["\n"]);return U=function(){return e},e}function W(){var e=Object(p.a)(["\n  position: absolute;\n  left: calc(50% - 50px);\n  top: -50px;\n  img {\n    width: 100px;\n    height: 100px;\n    border-radius: 50%;\n  }\n"]);return W=function(){return e},e}function C(){var e=Object(p.a)(["\n  position: relative;\n  background-color: #f2f5fa;\n  border-radius: 5px;\n  width: 350px;\n  min-height: 400px;\n  padding: 100px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]);return C=function(){return e},e}function M(){var e=Object(p.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: #fff;\n  border: 1px solid #f2f2f2;\n  border-radius: 5px;\n  height: 100%;\n"]);return M=function(){return e},e}var V=f.a.div(M()),D=f.a.div(C()),G=f.a.div(W()),H=f.a.div(U()),J=f.a.div(B()),Q=f.a.div(T()),$=function(e){var n=e.children;return r.a.createElement(j,null,r.a.createElement(_,null),r.a.createElement(N,null,r.a.createElement(z,null),r.a.createElement(q,null,r.a.createElement(V,null,n))))},K=function(e){var n=e.isRegisterPage;return r.a.createElement(F,null,r.a.createElement(L,{isRegisterPage:n}),r.a.createElement(P,null,r.a.createElement("img",{src:"./img/logo@2x.jpg",alt:"logo",width:200}),r.a.createElement(R,null,e.children)))},X=t(34),Y=t.n(X),Z=t(54),ee=t(26),ne=t(6),te=t(11);function ae(){var e=Object(p.a)(["\n  display: flex;\n  flex-direction: column;\n  margin: 5px 0 10px 0;\n  \n  label {\n    font-size: 13px;\n  }\n  \n  input {\n    padding: 10px 0px;\n    border: none;\n    border-bottom: 2px solid #eee;\n    font-size: 13px;\n    margin: 5px 0;\n    color: #333;\n    outline: none;\n  }\n  \n  .custom-select-container{\n    .react-select {\n      &__control {\n        border: none;\n        border-bottom: 2px solid #eee;\n        border-radius: 0;\n        box-shadow: none;\n        font-size: 13px;\n        &:hover, &--is-focused {\n          box-shadow: none;\n        }\n      }\n      &__value-container {\n        padding-left: 0px;\n      }\n      &__indicator {\n        padding-right: 0px;\n        &-separator {\n          display: none;\n        }\n      }\n    }\n  }\n"]);return ae=function(){return e},e}function re(){var e=Object(p.a)(["\n  color: #fff;\n  background-color: #009af9;\n  padding: 10px 15px\n  text-transform: uppercase;\n  border: 1px solid #009af9;\n  border-radius: 4px;\n  min-width: 200px;\n  cursor: pointer;\n  margin-top: 10px;\n"]);return re=function(){return e},e}function oe(){var e=Object(p.a)(["\n  font-size: 26px;\n  font-weight: 500;\n"]);return oe=function(){return e},e}function le(){var e=Object(p.a)(["\n  flex: 1;\n  .forget-pwd {\n    display: block;\n    font-size: 11px;\n    cursor: pointer;\n    margin-bottom: 20px;\n  }\n    \n  .error {\n    color: #d92026;\n    font-size: 12px;\n  }\n"]);return le=function(){return e},e}var ie=f.a.div(le()),ce=f.a.h2(oe()),ue=f.a.button(re()),se=f.a.div(ae()),me=t(58),de=t.n(me),pe="https://radiant-dusk-57430.herokuapp.com/api/",fe={login:function(e){var n=e.email,t=e.password;return de.a.post("/auth/login",{email:n,password:t},{baseURL:pe})},register:function(e){return de.a.post("/auth/register",e,{baseURL:pe})},getInfo:function(){return de.a.get("/auth/me",{baseURL:pe,headers:{"x-access-token":d.getAccessToken()}})}},ge=te.object().shape({email:te.string().email("Enter an email").required("Enter an email"),password:te.string().required("Enter a password")}),be=Object(c.h)((function(e){var n=Object(a.useState)(""),t=Object(ee.a)(n,2),o=t[0],l=t[1],i=function(){var n=Object(Z.a)(Y.a.mark((function n(t,a){var r,o;return Y.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fe.login(t);case 3:r=n.sent,(o=r.data)&&o.auth&&o.token&&(d.setAccessToken(o.token),e.history.push("/profile")),a.setSubmitting(!1),n.next=13;break;case 9:n.prev=9,n.t0=n.catch(0),l("Login failed"),a.setSubmitting(!1);case 13:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(e,t){return n.apply(this,arguments)}}();return r.a.createElement(ie,null,r.a.createElement(ce,null,"Login"),r.a.createElement("p",null,"Don't have an account yet? ",r.a.createElement(u.b,{to:"/register"},"Sign Up")),r.a.createElement(ne.d,{initialValues:{email:"",password:""},onSubmit:i,validationSchema:ge},(function(e){var n=e.touched,t=e.errors,a=e.isSubmitting;return r.a.createElement(ne.c,null,r.a.createElement(se,null,r.a.createElement("label",{htmlFor:"email"},"Email"),r.a.createElement(ne.b,{id:"email",type:"email",name:"email",placeholder:"Enter your email address",className:"form-control ".concat(n.email&&t.email?"is-invalid":"")}),r.a.createElement(ne.a,{component:"div",name:"email",className:"error"})),r.a.createElement(se,null,r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement(ne.b,{id:"password",type:"password",name:"password",placeholder:"Enter your password",className:"form-control ".concat(n.password&&t.password?"is-invalid":"")}),r.a.createElement(ne.a,{component:"div",name:"password",className:"error"})),r.a.createElement("span",{className:"forget-pwd"},"Forget Password"),o&&r.a.createElement("div",{className:"error"},o),r.a.createElement(ue,{type:"submit",disabled:a},a?"Please wait...":"Login"))})))})),Ee=function(){return r.a.createElement(be,null)};function ve(){var e=Object(p.a)([""]);return ve=function(){return e},e}var he=Object(f.a)(ie)(ve()),xe=t(139),we=function(e){var n=e.options,t=e.field,a=e.form,o=e.placeholder;return r.a.createElement(xe.a,{options:n,name:t.name,value:n?n.find((function(e){return e.value===t.value})):"",onChange:function(e){return a.setFieldValue(t.name,e.value)},onBlur:t.onBlur,placeholder:o,className:"custom-select-container",classNamePrefix:"react-select"})},ke=[{value:0,label:"Male"},{value:1,label:"Female"}],ye=te.object().shape({name:te.string().required("Enter a full name"),email:te.string().email("Enter an email").required("Enter an email"),password:te.string().required("Enter a password"),gender:te.string().required("Select a gender"),age:te.number().min(18,"Enter an age between 18 and 60").max(60,"Enter an age between 18 and 60").required("Enter an age")}),je=Object(c.h)((function(e){var n=Object(a.useState)(""),t=Object(ee.a)(n,2),o=t[0],l=t[1],i=function(){var n=Object(Z.a)(Y.a.mark((function n(t,a){var r,o;return Y.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fe.register(t);case 3:r=n.sent,(o=r.data)&&o.auth&&o.token&&(d.setAccessToken(o.token),e.history.push("/profile")),a.setSubmitting(!1),n.next=13;break;case 9:n.prev=9,n.t0=n.catch(0),l("Login failed"),a.setSubmitting(!1);case 13:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(e,t){return n.apply(this,arguments)}}();return r.a.createElement(he,null,r.a.createElement(ce,null,"Register"),r.a.createElement("p",null,"Already have an account? ",r.a.createElement(u.b,{to:"/login"},"LogIn")),r.a.createElement(ne.d,{initialValues:{name:"",email:"",password:"",gender:"",age:""},onSubmit:i,validationSchema:ye},(function(e){var n=e.touched,t=e.errors,a=e.isSubmitting;return r.a.createElement(ne.c,null,r.a.createElement(se,null,r.a.createElement("label",{htmlFor:"name"},"Full Name"),r.a.createElement(ne.b,{id:"name",type:"text",name:"name",placeholder:"First and last name",className:"form-control ".concat(n.name&&t.name?"is-invalid":"")}),r.a.createElement(ne.a,{component:"div",name:"name",className:"error"})),r.a.createElement(se,null,r.a.createElement("label",{htmlFor:"email"},"Email address"),r.a.createElement(ne.b,{id:"email",type:"email",name:"email",placeholder:"Email address",className:"form-control ".concat(n.email&&t.email?"is-invalid":"")}),r.a.createElement(ne.a,{component:"div",name:"email",className:"error"})),r.a.createElement(se,null,r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement(ne.b,{id:"password",type:"password",name:"password",placeholder:"Enter your password",className:"form-control ".concat(n.password&&t.password?"is-invalid":"")}),r.a.createElement(ne.a,{component:"div",name:"password",className:"error"})),r.a.createElement(se,null,r.a.createElement("label",{htmlFor:"gender"},"Gender"),r.a.createElement(ne.b,{name:"gender",component:we,placeholder:"Select gender",options:ke}),r.a.createElement(ne.a,{component:"div",name:"gender",className:"error"})),r.a.createElement(se,null,r.a.createElement("label",{htmlFor:"age"},"Age"),r.a.createElement(ne.b,{id:"age",type:"number",name:"age",placeholder:"Age in number",className:"form-control ".concat(n.age&&t.age?"is-invalid":"")}),r.a.createElement(ne.a,{component:"div",name:"age",className:"error"})),o&&r.a.createElement("div",{className:"error"},o),r.a.createElement(ue,{type:"submit",disabled:a},a?"Please wait...":"Register"))})))})),Oe=function(e){return r.a.createElement("div",null,e.name)};function Ne(){var e=Object(p.a)(["\n  width: 40px;\n  height: 40px;\n\n  position: relative;\n  margin: 100px auto;\n\n  .double-bounce1, .double-bounce2 {\n    width: 100%;\n    height: 100%;\n    border-radius: 50%;\n    background-color: #333;\n    opacity: 0.6;\n    position: absolute;\n    top: 0;\n    left: 0;\n    \n    -webkit-animation: sk-bounce 2.0s infinite ease-in-out;\n    animation: sk-bounce 2.0s infinite ease-in-out;\n  }\n\n  .double-bounce2 {\n    -webkit-animation-delay: -1.0s;\n    animation-delay: -1.0s;\n  }\n\n  @-webkit-keyframes sk-bounce {\n    0%, 100% { -webkit-transform: scale(0.0) }\n    50% { -webkit-transform: scale(1.0) }\n  }\n\n  @keyframes sk-bounce {\n    0%, 100% { \n      transform: scale(0.0);\n      -webkit-transform: scale(0.0);\n    } 50% { \n      transform: scale(1.0);\n      -webkit-transform: scale(1.0);\n    }\n  }\n"]);return Ne=function(){return e},e}var Se=f.a.div(Ne()),qe=function(){return r.a.createElement(Se,null,r.a.createElement("div",{className:"double-bounce1"}),r.a.createElement("div",{className:"double-bounce2"}))},Fe=function(){var e=Object(a.useState)(null),n=Object(ee.a)(e,2),t=n[0],o=n[1],l=Object(a.useState)(!1),i=Object(ee.a)(l,2),c=i[0],u=i[1];return Object(a.useEffect)((function(){u(!0),fe.getInfo().then((function(e){var n=e.data;o(n),u(!1)})).catch((function(e){u(!1)}))}),[]),r.a.createElement(D,null,c?r.a.createElement(qe,null):r.a.createElement(r.a.Fragment,null,r.a.createElement(G,null,r.a.createElement("img",{src:"./img/dp@2x.jpg",alt:"avatar"})),r.a.createElement(H,null,r.a.createElement(J,null," Full Name"),r.a.createElement(Q,null,t&&t.name),r.a.createElement(J,null,"Email address"),r.a.createElement(Q,null,t&&t.email),r.a.createElement(J,null,"Gender"),r.a.createElement(Q,null,t&&0===t.gender?"Male":"Female"),r.a.createElement(J,null,"Age"),r.a.createElement(Q,null,t&&t.age," years"))))},Le=function(e){switch(e.path){case"/profile":return r.a.createElement(Fe,null);default:return r.a.createElement(Oe,e)}},Pe=function(e){var n=e.component,t=Object(i.a)(e,["component"]),a="Register"===e.name;return d.isLoggedIn()?r.a.createElement(c.a,{to:"/"}):r.a.createElement(K,{isRegisterPage:a},r.a.createElement(n,t))},Re=function(e){var n=e.component,t=Object(i.a)(e,["component"]);return d.isLoggedIn()?r.a.createElement($,null,r.a.createElement(n,t)):r.a.createElement(c.a,{to:"/login"})},Ae=function(){return r.a.createElement(c.a,{to:"/dashboard"})},Ie=function(){return r.a.createElement(u.a,null,r.a.createElement(c.d,null,r.a.createElement(Pe,{path:"/login",name:"Login",component:Ee}),r.a.createElement(Pe,{path:"/register",name:"Register",component:je}),A.map((function(e,n){return r.a.createElement(Re,{path:e.url,name:e.label,component:Le,key:n})})),r.a.createElement(Re,{exact:!0,path:"/",name:"Home",component:Le}),r.a.createElement(c.b,{component:Ae})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(Ie,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[141,1,2]]]);
//# sourceMappingURL=main.38fea470.chunk.js.map
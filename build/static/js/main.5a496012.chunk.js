(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{29:function(e,n,t){e.exports=t(43)},43:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),o=t(24),c=t.n(o),u=t(2),i=t(3),l=t(15),d=t.n(l),s=function(e){return a.a.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"#000000",viewBox:"0 0 24 24",height:"24",width:"24"},e),a.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),a.a.createElement("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}))},f=function(e){return a.a.createElement("svg",Object.assign({fill:"#000000",viewBox:"0 0 24 24",height:"24",width:"24",xmlns:"http://www.w3.org/2000/svg"},e),a.a.createElement("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),a.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}))},p=t(44),m=t(45);function h(){var e=Object(u.a)(["\n  font-size: 18px;\n  line-height: 24px;\n  margin-left: 10px;\n  max-width: calc(100% - 24px - 10px);\n"]);return h=function(){return e},e}function g(){var e=Object(u.a)(["\n  display: flex;\n  align-items: top;\n  padding: 10px !important;\n"]);return g=function(){return e},e}function v(){var e=Object(u.a)(["\n  margin: 4px auto;\n  :first-of-type {\n    margin-top: 0px;\n  }\n"]);return v=function(){return e},e}function b(e){var n=e.item,t=e.toggleStatus,r=n.checked?s:f;return a.a.createElement(x,{onClick:t},a.a.createElement(O,null,a.a.createElement(r,null),a.a.createElement(j,null,n.task)))}var x=Object(i.a)(p.a)(v()),O=Object(i.a)(m.a)(g()),j=i.a.span(h());function w(){var e=Object(u.a)(["\n  padding: 0;\n  margin-top: 10px;\n  width: 450px;\n"]);return w=function(){return e},e}function E(){var e=Object(u.a)(["\n    text-align: center;\n    font-size: 2em;\n    padding-top: 60px;\n    padding-bottom: 60px;\n  "]);return E=function(){return e},e}function y(e){var n=e.myplan,t=e.hasHadTodos,r=e.actions;return a.a.createElement(d.a,null,a.a.createElement(T,null,0===n.length&&a.a.createElement(k,{hasHadTodos:t}),n.map(function(e){return a.a.createElement(b,{key:e._id.toString(),item:e,toggleStatus:function(){return r.toggleTodoStatus(e._id)}})})))}var k=function(e){var n=i.a.div(E());return a.a.createElement(n,null,e.hasHadTodos?a.a.createElement("span",null,a.a.createElement("span",{role:"img","aria-label":"celebrate"}," ","\ud83c\udf89"," "),"All done! Enjoy your day!"):a.a.createElement("span",null,"Enter some text and click ",a.a.createElement("strong",null,"Add")," to save your first to-do task"))},T=i.a.ul(w()),L=t(16),C=t(48),I=t(28),S=t(46),A=t(47),H=t(50);function U(){var e=Object(u.a)(["\n  background-color: #5e9668 !important;\n"]);return U=function(){return e},e}function _(){var e=Object(u.a)(["\n    margin-right: 8px;\n    margin-left: 8px;\n  "]);return _=function(){return e},e}function z(){var e=Object(u.a)(["\n  height: 70px !important;\n  background-color: white;\n  box-sizing: border-box;\n  padding-left: 20px;\n  padding-right: 20px;\n  line-height: 40px;\n"]);return z=function(){return e},e}function M(){var e=Object(u.a)(["\n  width: 100%;\n"]);return M=function(){return e},e}function D(e){e.addTodo;var n=Object(I.a)(e,["addTodo"]);return a.a.createElement(R,null,a.a.createElement(B,Object.assign({},n,{type:"text",placeholder:"What Do You Need To Do?"})),a.a.createElement(W,{action:e.addTodo},"Add To-Do"))}var R=Object(i.a)(S.a)(M()),B=Object(i.a)(A.a)(z()),W=function(e){var n=i.a.div(_());return a.a.createElement(H.a,{addonType:"append"},a.a.createElement(V,{color:"info",onClick:e.action,disabled:e.disabled},a.a.createElement(n,null,e.children)))},V=Object(i.a)(C.a)(U());function $(){var e=Object(u.a)(["\n    color: black;\n    border: 0.5px solid rgba(0, 0, 0, 0.6) !important;\n    margin-right: 8px;\n  "]);return $=function(){return e},e}function G(){var e=Object(u.a)(["\n  background-color: #f83d0e !important;\n"]);return G=function(){return e},e}function J(){var e=Object(u.a)(["\n  width: 100%;\n  margin-top: 10px;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n"]);return J=function(){return e},e}function N(){var e=Object(u.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 450px;\n"]);return N=function(){return e},e}function P(e){var n=e.myplan,t=e.actions,o=Object(r.useState)(""),c=Object(L.a)(o,2),u=c[0],i=c[1],l=n&&n.filter(function(e){return e.checked}).length>0,d=function(){u&&(t.addTodo(u),i(""))},s=n.every(function(e){return!0===e.checked}),f=n.every(function(e){return!0===e.checked});return a.a.createElement(Y,null,a.a.createElement(D,{value:u,addTodo:d,onChange:function(e){return i(e.target.value)},onKeyDown:function(e){"Enter"===e.key&&d()}}),a.a.createElement(K,null,n.length>0&&!s&&a.a.createElement(F,{selected:f,onClick:t.completeAllTodos}),l&&a.a.createElement(q,{onClick:t.clearCompletedTodos},"Clear Completed")))}var Y=i.a.div(N()),K=i.a.div(J()),q=Object(i.a)(C.a)(G()),F=function(e){var n=Object(i.a)(C.a)($());return a.a.createElement(n,{color:"inverted",onClick:e.onClick},e.selected?a.a.createElement("span",null,a.a.createElement(s,null)):a.a.createElement("span",null,a.a.createElement(f,null)," Complete All"))},Q=t(5),X=t.n(Q),Z=t(11),ee=t(7),ne=t(13),te=ne.d.hasAppClient("b90x-brcud")?ne.d.getAppClient("b90x-brcud"):ne.d.initializeAppClient("b90x-brcud");function re(){var e=new ne.a;return te.auth.loginWithCredential(e)}function ae(){return oe.apply(this,arguments)}function oe(){return(oe=Object(Z.a)(X.a.mark(function e(){return X.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,te.auth.loginWithRedirect(new ne.b);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)}))).apply(this,arguments)}function ce(){return te.auth.isLoggedIn?te.auth.user:null}function ue(){var e=ce();return te.auth.logoutUserWithId(e.id)}var ie=a.a.createContext();function le(){var e=a.a.useContext(ie);if(!e)throw new Error("useStitchAuth must be used within a StitchAuthProvider");return e}function de(e){var n=a.a.useState({isLoggedIn:te.auth.isLoggedIn,currentUser:ce()}),t=Object(L.a)(n,2),o=t[0],c=t[1];Object(r.useEffect)(function(){var e,n={onUserLoggedIn:function(e,n){n&&c(function(e){return Object(ee.a)({},e,{isLoggedIn:!0,currentUser:n})})},onUserLoggedOut:function(e,n){c(function(e){return Object(ee.a)({},e,{isLoggedIn:!1,currentUser:null})})}};return e=n,te.auth.addAuthListener(e),function(){if(te.auth.hasRedirectResult())te.auth.handleRedirectResult()}(),c(function(e){return Object(ee.a)({},e)}),function(){var e;e=n,te.auth.removeAuthListener(e)}},[]);var u=function(){var e=Object(Z.a)(X.a.mark(function e(n){return X.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(o.isLoggedIn){e.next=6;break}e.t0=n,e.next="anonymous"===e.t0?4:"google"===e.t0?5:6;break;case 4:return e.abrupt("return",re());case 5:return e.abrupt("return",ae());case 6:case"end":return e.stop()}},e)}));return function(n){return e.apply(this,arguments)}}(),i=function(){var e=Object(Z.a)(X.a.mark(function e(){return X.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!o.isLoggedIn){e.next=4;break}return e.next=3,ue();case 3:c(Object(ee.a)({},o,{isLoggedIn:!1,currentUser:null}));case 4:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),l=a.a.useMemo(function(){return{isLoggedIn:o.isLoggedIn,currentUser:o.currentUser,actions:{handleLogin:u,handleLogout:i}}},[o]);return a.a.createElement(ie.Provider,{value:l},e.children)}var se=t(27),fe=te.getServiceClient(ne.c.factory,"mongodb-atlas").db("b90x").collection("myplan"),pe=function(e,n){var t=n.type,r=n.payload;switch(t){case"setTodos":return Object(ee.a)({},e,{hasHadTodos:r.todos.length>0,todos:r.todos||[]});case"addTodo":var a=Object(ee.a)({},r,{checked:"boolean"===typeof r.checked&&r.checked});return Object(ee.a)({},e,{hasHadTodos:!0,todos:[].concat(Object(se.a)(e.todos),[a])});case"removeTodo":return Object(ee.a)({},e,{todos:e.todos.filter(function(e){return e.id!==r.id})});case"clearCompletedTodos":return Object(ee.a)({},e,{todos:e.todos.filter(function(e){return!0!==e.checked})});case"clearTodos":return Object(ee.a)({},e,{todos:[]});case"setTodoStatus":return Object(ee.a)({},e,{todos:e.todos.map(function(e){return e._id===r.id?Object(ee.a)({},e,{status:r.status}):e})});case"completeAllTodos":return Object(ee.a)({},e,{todos:e.todos.map(function(e){return Object(ee.a)({},e,{checked:!0})})});case"toggleTodoStatus":return Object(ee.a)({},e,{todos:e.todos.map(function(e){return e._id===r.id?Object(ee.a)({},e,{checked:!e.checked}):e})});default:console.error("Received invalid todo action type: ".concat(t))}};var me=t(49);function he(){var e=Object(u.a)(["\n  margin: 0;\n  h1 {\n    padding: 20px;\n    margin: 0;\n  }\n"]);return he=function(){return e},e}function ge(){var e=Object(u.a)(["\n  max-width: 600px;\n  align-items: center;\n  width: 100%;\n"]);return ge=function(){return e},e}function ve(){var e=Object(u.a)(["\n  background: #eeeeee;\n  padding: 20px;\n  height: 100%;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]);return ve=function(){return e},e}function be(){var e=function(e){var n=a.a.useReducer(pe,{todos:[]}),t=Object(L.a)(n,2),r=t[0],o=t[1],c=function(){var e=Object(Z.a)(X.a.mark(function e(){var n;return X.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fe.find({},{limit:1e3}).asArray();case 2:n=e.sent,o({type:"setTodos",payload:{todos:n}});case 4:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),u=function(){var n=Object(Z.a)(X.a.mark(function n(t){var r,a;return X.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return r={task:t,owner_id:e},n.next=3,fe.insertOne(r);case 3:a=n.sent,o({type:"addTodo",payload:Object(ee.a)({},r,{_id:a.insertedId})});case 5:case"end":return n.stop()}},n)}));return function(e){return n.apply(this,arguments)}}(),i=function(){var e=Object(Z.a)(X.a.mark(function e(n){return X.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fe.deleteOne({_id:n});case 2:o({type:"removeTodo",payload:{id:n}});case 3:case"end":return e.stop()}},e)}));return function(n){return e.apply(this,arguments)}}(),l=function(){var e=Object(Z.a)(X.a.mark(function e(){return X.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fe.deleteMany({});case 2:o({type:"clearTodos"});case 3:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),d=function(){var e=Object(Z.a)(X.a.mark(function e(){return X.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fe.deleteMany({checked:!0});case 2:o({type:"clearCompletedTodos"});case 3:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),s=function(){var e=Object(Z.a)(X.a.mark(function e(n,t){return X.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fe.updateOne({_id:n},{$set:{checked:t}},{returnNewDocument:!0});case 2:o({type:"setTodoStatus",payload:{todoId:n,status:t}});case 3:case"end":return e.stop()}},e)}));return function(n,t){return e.apply(this,arguments)}}(),f=function(){var n=Object(Z.a)(X.a.mark(function n(){return X.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fe.updateMany({owner_id:e},{$set:{checked:!0}});case 2:o({type:"completeAllTodos"});case 3:case"end":return n.stop()}},n)}));return function(){return n.apply(this,arguments)}}(),p=function(){var e=Object(Z.a)(X.a.mark(function e(n){var t;return X.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.todos.find(function(e){return e._id===n}),e.next=3,fe.updateOne({_id:n},{$set:{checked:!t.currentStatus}});case 3:o({type:"toggleTodoStatus",payload:{id:n}});case 4:case"end":return e.stop()}},e)}));return function(n){return e.apply(this,arguments)}}();return a.a.useEffect(function(){c()},[]),{myplan:r.todos,hasHadTodos:r.hasHadTodos,actions:{addTodo:u,removeTodo:i,setTodoCompletionStatus:s,clearTodos:l,clearCompletedTodos:d,completeAllTodos:f,toggleTodoStatus:p}}}(le().currentUser.id);return a.a.createElement(d.a,null,a.a.createElement(xe,null,a.a.createElement(Oe,null,a.a.createElement(je,null,a.a.createElement("h1",null,"Your To-Do List")),a.a.createElement(P,e),a.a.createElement(y,e))))}var xe=i.a.div(ve()),Oe=Object(i.a)(p.a)(ge()),je=Object(i.a)(me.a)(he());function we(){var e=Object(u.a)(["\n  display: flex;\n  flex-direction: column;\n"]);return we=function(){return e},e}function Ee(){var e=Object(u.a)(["\n  margin-top: 10px;\n  :first-of-type {\n    margin-top: 0px;\n  }\n"]);return Ee=function(){return e},e}function ye(){var e=Object(u.a)(["\n  margin-left: auto;\n  margin-right: auto;\n  max-width: 450px;\n"]);return ye=function(){return e},e}function ke(){var e=Object(u.a)(["\n  background: #eeeeee;\n  height: 100%;\n  padding: 20px;\n"]);return ke=function(){return e},e}function Te(){var e=le().actions;return a.a.createElement(d.a,null,a.a.createElement(Le,null,a.a.createElement(Ce,null,a.a.createElement(m.a,null,a.a.createElement(Se,null,a.a.createElement(Ie,{provider:"anonymous",onClick:function(){return e.handleLogin("anonymous")}},"Log In as a Guest User"),a.a.createElement(Ie,{provider:"google",onClick:function(){return e.handleLogin("google")}},"Log In with Google"))))))}var Le=i.a.div(ke()),Ce=Object(i.a)(p.a)(ye()),Ie=Object(i.a)(C.a)(Ee()),Se=i.a.div(we());function Ae(){var e=Object(u.a)(["\n  margin-right: auto;\n"]);return Ae=function(){return e},e}function He(){var e=Object(u.a)(["\n  display: flex;\n  flex-direction: row-reverse;\n  align-items: center;\n  width: 100%;\n  height: 62px;\n  padding: 10px;\n  background: #5e9668;\n"]);return He=function(){return e},e}function Ue(){var e=Object(u.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 100vw;\n  height: 100vh;\n  * {\n    font-family: sans-serif;\n  }\n"]);return Ue=function(){return e},e}function _e(){var e=le(),n=e.isLoggedIn,t=e.actions.handleLogout;return a.a.createElement(ze,null,a.a.createElement(Me,null,n&&a.a.createElement(C.a,{onClick:t},"Logout"),a.a.createElement(De,null,"MongoDB Stitch To-Do Tutorial")),n?a.a.createElement(be,null):a.a.createElement(Te,null))}var ze=i.a.div(Ue()),Me=i.a.div(He()),De=i.a.h1(Ae()),Re=(t(42),document.getElementById("root"));c.a.render(a.a.createElement(function(){return a.a.createElement(de,null,a.a.createElement(_e,null))},null),Re)}},[[29,1,2]]]);
//# sourceMappingURL=main.5a496012.chunk.js.map
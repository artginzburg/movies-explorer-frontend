(this["webpackJsonpmovies-explorer-frontend"]=this["webpackJsonpmovies-explorer-frontend"]||[]).push([[0],[,,,,,,,,,,,,,,,,function(e){e.exports=JSON.parse('{"a":{"name":"Art Ginzburg","email":"art.ginzburg@ya.ru","url":"https://github.com/artginzburg"},"c":"https://github.com/artginzburg-learning/movies-explorer-frontend","b":"https://deeplomka.nomoredomains.club"}')},,,,,,,,,,,,,,,,function(e,t,n){},,,function(e,t,n){},function(e,t,n){},,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(17),s=n.n(r),i=(n(32),n(4)),o=n(9),l=n.n(o),u=n(25),j=n(11),d=n(3),b=n(5),h="api.nomoreparties.co",m="/",O="/movies",f="/saved-movies",_="/signin",v="/signup",p="/profile",g={title:"Movies Explorer"},x={title:"\u0424\u0438\u043b\u044c\u043c\u044b"},N={title:"\u0421\u043e\u0445\u0440\u0430\u043d\u0451\u043d\u043d\u044b\u0435 \u0444\u0438\u043b\u044c\u043c\u044b"},k={title:"\u0412\u0445\u043e\u0434",action:"\u0412\u043e\u0439\u0442\u0438"},y={title:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f",action:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"},C={title:"\u0410\u043a\u043a\u0430\u0443\u043d\u0442"},w=40,S="add",E="form__input",I="form__button";var F=n(12),T=n(13),D=n(20),R=n(19),L=n(16),U=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};Object(F.a)(this,e),this._handleFetch=function(){var e=Object(j.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.json();case 2:return n=e.sent,e.abrupt("return",t.ok?n:Promise.reject(null!==n&&void 0!==n?n:t.statusText));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this._handleData=function(e){var t;return null!==(t=e.data)&&void 0!==t?t:e},this._baseUrl=t.baseUrl,this._headers=t.headers,this._credentials=t.credentials}return Object(T.a)(e,[{key:"_customFetch",value:function(e,t,n){var a,c={headers:null!==(a=this._headers)&&void 0!==a?a:{},credentials:this._credentials};return t&&"GET"!==t&&(c.method=t,"DELETE"!==t&&(c.headers["Content-Type"]="application/json")),n&&(c.body=JSON.stringify(n)),fetch("".concat(this._baseUrl).concat(e),c).then(this._handleFetch).then(this._handleData)}}]),e}(),M=new URL(L.b);M.hostname="api.".concat(M.hostname);var P={host:M,endpoints:{register:"signup",login:"signin",logout:"signout",user:"users/me",movies:"movies"}},z=new(function(e){Object(D.a)(n,e);var t=Object(R.a)(n);function n(){var e;Object(F.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).saveMovie=function(t){return e._customFetch(P.endpoints.movies,"POST",t)},e.deleteMovie=function(t){return e._customFetch("".concat(P.endpoints.movies,"/").concat(t),"DELETE")},e}return Object(T.a)(n,[{key:"register",value:function(e,t,n){return this._customFetch(P.endpoints.register,"POST",{name:n,password:t,email:e})}},{key:"login",value:function(e,t){return this._customFetch(P.endpoints.login,"POST",{password:t,email:e})}},{key:"logout",value:function(){return this._customFetch(P.endpoints.logout,"DELETE")}},{key:"getUserInfo",value:function(){return this._customFetch(P.endpoints.user)}},{key:"updateUserInfo",value:function(e){var t=e.name,n=e.email;return this._customFetch(P.endpoints.user,"PATCH",{name:t,email:n})}},{key:"getMovies",value:function(){return this._customFetch(P.endpoints.movies)}}]),n}(U))({baseUrl:P.host,credentials:"include"});function J(e,t){var n=Object(a.useState)((function(){try{var n=localStorage[e];return n?JSON.parse(n):t}catch(a){return console.log(a),t}})),c=Object(d.a)(n,2),r=c[0],s=c[1],i=Object(a.useCallback)((function(t){localStorage[e]=JSON.stringify(t),s(t)}),[e]);return function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:window,c=Object(a.useRef)();Object(a.useEffect)((function(){c.current=t}),[t]),Object(a.useEffect)((function(){if(n&&n.addEventListener){var t=function(e){return c.current(e)};return n.addEventListener(e,t),function(){n.removeEventListener(e,t)}}}),[e,n])}("storage",Object(a.useCallback)((function(n){n.key===e&&s(n.newValue?JSON.parse(n.newValue):t)}),[e,t])),[r,i]}var A=n(2),q=n(0),B={name:"\u041f\u043e\u0442\u0435\u0440\u044f\u043d\u043e \u0441\u043e\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u0435"},G=c.a.createContext(),H=c.a.createContext();function V(e){var t=e.state,n=e.dispatch,a=e.children;return Object(q.jsx)(G.Provider,{value:t,children:Object(q.jsx)(H.Provider,{value:n,children:a})})}function Y(){var e=c.a.useContext(G);if(void 0===e)throw new Error("useCurrentUser must be used within a CurrentUserProvider");return e}function K(e,t){return JSON.stringify(e)===JSON.stringify(t)}function W(e,t,n,a){return Z.apply(this,arguments)}function Z(){return(Z=Object(j.a)(l.a.mark((function e(t,n,a,c){var r,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=Object(A.a)(Object(A.a)({},n),a),t(r),e.prev=2,e.next=5,z[c](a);case 5:return s=e.sent,K(r,s)||t(s),e.abrupt("return",s);case 10:throw e.prev=10,e.t0=e.catch(2),t(n),console.log("Couldnt update user information on the server",e.t0),e.t0;case 15:case"end":return e.stop()}}),e,null,[[2,10]])})))).apply(this,arguments)}var Q=n(10),X={},$=!0;function ee(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(a.useState)(e),n=Object(d.a)(t,2),c=n[0],r=n[1],s=Object(a.useState)(X),i=Object(d.a)(s,2),o=i[0],l=i[1],u=Object(a.useState)($),j=Object(d.a)(u,2),b=j[0],h=j[1];function m(t,n){r((function(a){var c=Object(A.a)(Object(A.a)({},a),{},Object(Q.a)({},t,n));return JSON.stringify(Object(A.a)(Object(A.a)({},e),c))===JSON.stringify(e)&&h(!0),c}))}function O(e,t){l((function(n){return Object(A.a)(Object(A.a)({},n),{},Object(Q.a)({},e,t))}))}var f=Object(a.useCallback)((function(t,n){r(null!==n&&void 0!==n?n:e),l(X),h($)}),[e]);return{registerForm:function(){return{isSubmitDisabled:b,onReset:f}},register:function(e){var t;return{value:null!==(t=c[e])&&void 0!==t?t:"",onChange:function(t){var n=t.currentTarget,a=n.value,c=n.validationMessage;m(e,a),O(e,a.length?c:"");var r=n.closest("form").checkValidity();h(!r)},validationMessage:o[e],name:e}},reset:f,getData:function(){return c},isInvalid:b}}var te=g.title,ne=function(e){Object(a.useEffect)((function(){document.title=e?"".concat(e," \xb7 ").concat(te):te}),[e])},ae=n(6),ce=n.p+"static/media/logo.1edc39b5.svg",re=function(e){return e.filter(Boolean).join(" ")},se=function(e){return{className:re(e)}},ie=(n(35),["onSubmit"]),oe=Object(a.memo)((function(e){var t=e.onSubmit,n=Object(ae.a)(e,ie),c=Object(a.useCallback)((function(e){t&&(e.preventDefault(),t(e))}),[t]);return Object(q.jsx)("form",Object(A.a)(Object(A.a)({action:"#",onSubmit:c,className:"form"},n),{},{children:n.children}))})),le=(n(36),["isFocused","validationMessage","labelTitle"]),ue="text",je=!0,de=2,be=Object(a.forwardRef)((function(e,t){var n,c,r,s=e.isFocused,i=e.validationMessage,o=(e.labelTitle,Object(ae.a)(e,le)),l=null!==t&&void 0!==t?t:Object(a.createRef)(),u=null!==(n=o.type)&&void 0!==n?n:ue,j=null!==(c=o.required)&&void 0!==c?c:je,d=u===ue?de:null,b={type:u,minLength:null!==(r=o.minLength)&&void 0!==r?r:d,required:j,ref:l};return Object(a.useEffect)((function(){s&&l&&l.current&&l.current.parentElement!==document.activeElement.parentElement&&setTimeout((function(){l&&l.current&&l.current.focus()}),50)}),[s,l]),Object(q.jsxs)(q.Fragment,{children:[Object(q.jsx)("input",Object(A.a)(Object(A.a)(Object(A.a)({},o),se([E,i&&"".concat(E,"_type_error"),o.className])),b)),Object(q.jsx)("p",Object(A.a)(Object(A.a)({},se(["".concat(E,"-error"),"".concat(o.className,"-error"),i&&"".concat(E,"-error_visible")])),{},{id:"".concat(o.id,"-error"),children:i}))]})})),he=["form","additionalInput"],me={autoCorrect:"off",spellCheck:!1,className:"".concat(E,"_theme_dark")},Oe="email",fe="password",_e=Object(a.memo)((function(e){var t=e.form,n=e.additionalInput,c=Object(ae.a)(e,he),r=Object(a.useState)(!1),s=Object(d.a)(r,2),o=s[0],l=s[1],u=Object(a.useState)(""),j=Object(d.a)(u,2),b=j[0],h=j[1],O=o?"".concat(c.buttonSavingTitle,"..."):c.buttonTitle;return Object(q.jsxs)("div",{className:"auth",children:[Object(q.jsx)(i.b,{to:m,className:"logo auth__logo",children:Object(q.jsx)("img",{className:"logo__img",alt:g.title,src:ce})}),Object(q.jsx)("h2",{className:"auth__title",children:c.title}),Object(q.jsxs)(oe,{onSubmit:function(e){l(!0);var n=t.getData(),a=n.name,r=n.email,s=n.password;c.handleSubmit(e,r,s,a).catch((function(e){t.isInvalid=!0,h(""),setTimeout((function(){e.message?h(e.message):console.log(e)}))})).finally((function(){l(!1)}))},onReset:t.reset,children:[Object(q.jsxs)("div",{className:"form__container",children:[n&&Object(q.jsxs)("label",{children:[Object(q.jsx)("p",{className:"auth__label",children:n.title}),Object(q.jsx)(be,Object(A.a)(Object(A.a)(Object(A.a)(Object(A.a)({},me),{},{autoFocus:!0},t.register(n.name)),{},{id:n.name,type:n.name,autoComplete:n.name},n.props),{},{disabled:o}))]}),Object(q.jsxs)("label",{children:[Object(q.jsx)("p",{className:"auth__label",children:"E-mail"}),Object(q.jsx)(be,Object(A.a)(Object(A.a)(Object(A.a)({},me),{},{autoFocus:!n},t.register(Oe)),{},{id:Oe,type:Oe,autoComplete:Oe,placeholder:"mail@example.com",disabled:o}))]}),Object(q.jsxs)("label",{children:[Object(q.jsx)("p",{className:"auth__label",children:"\u041f\u0430\u0440\u043e\u043b\u044c"}),Object(q.jsx)(be,Object(A.a)(Object(A.a)(Object(A.a)({},me),t.register(fe)),{},{type:fe,id:c.passwordAutocomplete,autoComplete:c.passwordAutocomplete,placeholder:"n4Gorshke7idelKING",disabled:o}))]})]}),Object(q.jsx)("p",Object(A.a)(Object(A.a)({},se(["auth__status",b&&"auth__status_visible"])),{},{children:b})),Object(q.jsx)("button",{type:"submit",disabled:t.isInvalid||o,className:"auth__button ".concat(I," ").concat(I,"_theme_dark"),children:O})]}),Object(q.jsxs)("p",{className:"auth__signin",children:["".concat(c.otherOption.tagline," "),Object(q.jsx)(i.b,{to:c.otherOption.path,className:"auth__signin-link",children:c.otherOption.title})]})]})})),ve={passwordAutocomplete:"current-password",title:"\u0420\u0430\u0434\u044b \u0432\u0438\u0434\u0435\u0442\u044c!",buttonTitle:k.action,buttonSavingTitle:k.title,otherOption:{tagline:"\u0415\u0449\u0451 \u043d\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u044b?",path:v,title:y.title}},pe=Object(a.memo)((function(e){return ne(k.title),Object(q.jsx)(_e,Object(A.a)(Object(A.a)({},e),ve))})),ge={passwordAutocomplete:"new-password",title:"\u0414\u043e\u0431\u0440\u043e \u043f\u043e\u0436\u0430\u043b\u043e\u0432\u0430\u0442\u044c!",buttonTitle:y.action,buttonSavingTitle:y.title,otherOption:{tagline:"\u0423\u0436\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u044b?",path:_,title:k.action}},xe=Object(a.memo)((function(e){return ne(y.title),Object(q.jsx)(_e,Object(A.a)(Object(A.a)(Object(A.a)({},e),ge),{},{additionalInput:{title:"\u0418\u043c\u044f",name:"name",props:{placeholder:"\u0410\u0440\u0442",pattern:"[A-Za-z\u0410-\u042f\u0401\u0430-\u044f\u0451 -]+"}}}))})),Ne=(n(45),Object(a.memo)((function(e){var t,n,a=ee({email:null!==(n="email",t=localStorage[n]&&atob(JSON.parse(localStorage[n])))&&void 0!==t?t:"",password:""});return e.loggedIn?Object(q.jsx)(b.a,{to:m}):Object(q.jsxs)(q.Fragment,{children:[Object(q.jsx)(b.b,{path:_,children:Object(q.jsx)(pe,{handleSubmit:e.handleLogin,form:a})}),Object(q.jsx)(b.b,{path:v,children:Object(q.jsx)(xe,{handleSubmit:e.handleRegister,form:a})})]})}))),ke=(n(46),(new Date).getFullYear());var ye=function(){return Object(q.jsxs)("footer",{className:"footer",children:[Object(q.jsx)("h2",{className:"footer__title",children:"\u0423\u0447\u0435\u0431\u043d\u044b\u0439 \u043f\u0440\u043e\u0435\u043a\u0442 \u042f\u043d\u0434\u0435\u043a\u0441.\u041f\u0440\u0430\u043a\u0442\u0438\u043a\u0443\u043c \u0445 BeatFilm."}),Object(q.jsxs)("div",{className:"footer__copyright",children:[Object(q.jsxs)("div",{className:"footer__links",children:[Object(q.jsx)("a",{className:"footer__link",href:"https://practicum.yandex.ru",target:"_blank",rel:"noreferrer",children:"\u042f\u043d\u0434\u0435\u043a\u0441.\u041f\u0440\u0430\u043a\u0442\u0438\u043a\u0443\u043c"}),Object(q.jsx)("a",{className:"footer__link",href:L.c,target:"_blank",rel:"noreferrer",children:"GitHub"}),Object(q.jsx)("a",{className:"footer__link",href:"https://t.me/artginzburg",target:"_blank",rel:"noreferrer",children:"Telegram"})]}),Object(q.jsxs)("a",{className:"footer__link footer__link-copyright",href:L.a.url,target:"_blank",rel:"noreferrer",children:["\xa9 ",ke]})]})]})},Ce=(n(47),document.getElementById("modal-root"));function we(e){function t(t){t.target.className.includes("active")||e.onClose()}return Object(r.createPortal)(Object(q.jsx)("section",{onClick:e.onClose,className:"navigation",children:Object(q.jsxs)("nav",{className:"navigation__container",children:[Object(q.jsx)("button",{onClick:e.onClose,type:"button",className:"navigation__close-button"}),Object(q.jsxs)("ul",{className:"navigation__list",children:[Object(q.jsx)("li",{className:"navigation__list-item",children:Object(q.jsx)(i.c,{exact:!0,to:m,className:"navigation__link",activeClassName:"navigation__link_active",children:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"})}),Object(q.jsx)("li",{className:"navigation__list-item",children:Object(q.jsx)(i.c,{to:O,className:"navigation__link",activeClassName:"navigation__link_active",onClick:t,children:x.title})}),Object(q.jsx)("li",{className:"navigation__list-item",children:Object(q.jsx)(i.c,{to:f,className:"navigation__link",activeClassName:"navigation__link_active",onClick:t,children:N.title})})]}),Object(q.jsx)(i.b,{to:p,className:"profile-button navigation__profile-button",children:C.title})]})}),Ce)}n(48);var Se=function(e){var t=e.loggedIn,n=Object(a.useState)(!1),c=Object(d.a)(n,2),r=c[0],s=c[1],o=Object(a.useCallback)((function(){s(!0)}),[]),l=Object(a.useCallback)((function(e){e&&e.target!==e.currentTarget||s(!1)}),[]);return Object(q.jsxs)("header",{className:"header",children:[Object(q.jsxs)("nav",{className:"header__links",children:[Object(q.jsx)(i.b,{to:m,className:"logo header__logo",children:Object(q.jsx)("img",{className:"logo__img",alt:g.title,src:ce})}),t&&Object(q.jsxs)("div",{className:"header__navigation",children:[Object(q.jsx)(i.c,{activeClassName:"header__navigation-link_active",to:O,className:"header__navigation-link",children:x.title}),Object(q.jsx)(i.c,{activeClassName:"header__navigation-link_active",to:f,className:"header__navigation-link",children:N.title})]})]}),Object(q.jsx)("div",{className:"header__profile",children:t?Object(q.jsxs)(q.Fragment,{children:[Object(q.jsx)(i.b,{to:p,className:"profile-button header__profile-button",children:C.title}),Object(q.jsx)("button",{type:"button",onClick:o,className:"header__burger"}),r&&Object(q.jsx)(we,{onClose:l})]}):Object(q.jsxs)(q.Fragment,{children:[Object(q.jsx)(i.b,{to:v,className:"header__profile-link",children:y.title}),Object(q.jsx)(i.b,{to:_,className:"header__profile-link",children:k.action})]})})]})},Ee=n.p+"static/media/student.22e6909b.jpg";n(49);var Ie=function(e){var t=new Date,n=t.getFullYear()-e.getFullYear(),a=t.getMonth()-e.getMonth();return(a<0||0===a&&t.getDate()<e.getDate())&&n--,n}(new Date(2002,3,25));var Fe=function(){return Object(q.jsx)("section",{className:"aboutme",id:"student",children:Object(q.jsxs)("article",{children:[Object(q.jsx)("h2",{className:"aboutme__title",children:"\u0421\u0442\u0443\u0434\u0435\u043d\u0442"}),Object(q.jsxs)("div",{className:"aboutme__content",children:[Object(q.jsx)("img",{className:"aboutme__image",src:Ee,alt:"\u0410\u0440\u0442 \u0413\u0438\u043d\u0437\u0431\u0443\u0440\u0433"}),Object(q.jsxs)("div",{className:"aboutme__student",children:[Object(q.jsxs)("div",{className:"aboutme__student-article",children:[Object(q.jsx)("h3",{className:"aboutme__heading",children:"\u0410\u0440\u0442\u0443\u0440"}),Object(q.jsxs)("p",{className:"aboutme__subheading",children:["\u0424\u0440\u043e\u043d\u0442\u0435\u043d\u0434-\u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a, ",Ie," \u043b\u0435\u0442"]}),Object(q.jsx)("p",{className:"aboutme__text",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam accumsan volutpat sollicitudin. Nullam eget mauris ante. Nullam id mattis sapien. Praesent mollis, diam eget dictum semper, velit diam ultrices ante, vitae condimentum lorem eros vitae tortor. Etiam elit leo, hendrerit et nisi a, aliquam suscipit tellus. Suspendisse pretium tellus ac erat ultrices viverra. Donec placerat dui nibh, vel aliquet tellus ultricies et."})]}),Object(q.jsxs)("div",{className:"aboutme__links",children:[Object(q.jsx)("a",{className:"aboutme__link",href:"https://t.me/ginzart",target:"_blank",rel:"noreferrer",children:"Telegram"}),Object(q.jsx)("a",{className:"aboutme__link",href:"https://github.com/artginzburg",target:"_blank",rel:"noreferrer",children:"GitHub"})]})]})]})]})})};n(50);function Te(e){var t=e.heading,n=e.children;return Object(q.jsxs)("li",{className:"aboutproject__column",children:[Object(q.jsx)("h3",{className:"aboutproject__heading",children:t}),Object(q.jsx)("p",{className:"aboutproject__text",children:n})]})}var De=function(){return Object(q.jsx)("section",{className:"aboutproject",id:"about",children:Object(q.jsxs)("article",{children:[Object(q.jsx)("h2",{className:"aboutproject__title",children:"\u041e \u043f\u0440\u043e\u0435\u043a\u0442\u0435"}),Object(q.jsxs)("ul",{className:"aboutproject__columns",children:[Object(q.jsx)(Te,{heading:"\u0414\u0438\u043f\u043b\u043e\u043c\u043d\u044b\u0439 \u043f\u0440\u043e\u0435\u043a\u0442 \u0432\u043a\u043b\u044e\u0447\u0430\u043b 5 \u044d\u0442\u0430\u043f\u043e\u0432",children:"\u0421\u043e\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u043f\u043b\u0430\u043d\u0430, \u0440\u0430\u0431\u043e\u0442\u0443 \u043d\u0430\u0434 \u0431\u044d\u043a\u0435\u043d\u0434\u043e\u043c, \u0432\u0451\u0440\u0441\u0442\u043a\u0443, \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u0438 \u0438 \u0444\u0438\u043d\u0430\u043b\u044c\u043d\u044b\u0435 \u0434\u043e\u0440\u0430\u0431\u043e\u0442\u043a\u0438."}),Object(q.jsx)(Te,{heading:"\u041d\u0430 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0435 \u0434\u0438\u043f\u043b\u043e\u043c\u0430 \u0443\u0448\u043b\u043e < 5 \u043d\u0435\u0434\u0435\u043b\u044c",children:"\u0423 \u043a\u0430\u0436\u0434\u043e\u0433\u043e \u044d\u0442\u0430\u043f\u0430 \u0431\u044b\u043b \u043c\u044f\u0433\u043a\u0438\u0439 \u0438 \u0436\u0451\u0441\u0442\u043a\u0438\u0439 \u0434\u0435\u0434\u043b\u0430\u0439\u043d, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043d\u0443\u0436\u043d\u043e \u0431\u044b\u043b\u043e \u0441\u043e\u0431\u043b\u044e\u0434\u0430\u0442\u044c, \u0447\u0442\u043e\u0431\u044b \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0437\u0430\u0449\u0438\u0442\u0438\u0442\u044c\u0441\u044f."})]}),Object(q.jsxs)("ul",{className:"aboutproject__plan",children:[Object(q.jsxs)("li",{className:"aboutproject__plan-segment",children:[Object(q.jsx)("p",{className:"aboutproject__plan-heading",children:"3 \u0434\u043d\u044f"}),Object(q.jsx)("p",{className:"aboutproject__plan-text",children:"Back-end"})]}),Object(q.jsxs)("li",{className:"aboutproject__plan-segment",children:[Object(q.jsx)("p",{className:"aboutproject__plan-heading",children:"4 \u043d\u0435\u0434\u0435\u043b\u0438"}),Object(q.jsx)("p",{className:"aboutproject__plan-text",children:"Front-end"})]})]})]})})};n(51);var Re=function(){return Object(q.jsx)("nav",{className:"navtab",children:Object(q.jsxs)("ul",{className:"navtab__links",children:[Object(q.jsx)("li",{className:"navtab__link-container",children:Object(q.jsx)("a",{className:"navtab__link",href:"#about",children:"\u041e \u043f\u0440\u043e\u0435\u043a\u0442\u0435"})}),Object(q.jsx)("li",{className:"navtab__link-container",children:Object(q.jsx)("a",{className:"navtab__link",href:"#techs",children:"\u0422\u0435\u0445\u043d\u043e\u043b\u043e\u0433\u0438\u0438"})}),Object(q.jsx)("li",{className:"navtab__link-container",children:Object(q.jsx)("a",{className:"navtab__link",href:"#student",children:"\u0421\u0442\u0443\u0434\u0435\u043d\u0442"})})]})})};n(52);var Le=function(){return Object(q.jsxs)("section",{className:"portfolio",id:"portfolio",children:[Object(q.jsx)("h2",{className:"portfolio__title",children:"\u041f\u043e\u0440\u0442\u0444\u043e\u043b\u0438\u043e"}),Object(q.jsxs)("ul",{className:"portfolio__links",children:[Object(q.jsx)("li",{className:"portfolio__links-item",children:Object(q.jsx)("a",{className:"portfolio__link",href:"https://artginzburg.github.io/how-to-learn/",target:"_blank",rel:"noreferrer",children:"\u0421\u0442\u0430\u0442\u0438\u0447\u043d\u044b\u0439 \u0441\u0430\u0439\u0442"})}),Object(q.jsx)("li",{className:"portfolio__links-item",children:Object(q.jsx)("a",{className:"portfolio__link",href:"https://artginzburg.github.io/russian-travel/",target:"_blank",rel:"noreferrer",children:"\u0410\u0434\u0430\u043f\u0442\u0438\u0432\u043d\u044b\u0439 \u0441\u0430\u0439\u0442"})}),Object(q.jsx)("li",{className:"portfolio__links-item",children:Object(q.jsx)("a",{className:"portfolio__link",href:"https://artginzburg.github.io/react-mesto-auth/",target:"_blank",rel:"noreferrer",children:"\u041e\u0434\u043d\u043e\u0441\u0442\u0440\u0430\u043d\u0438\u0447\u043d\u043e\u0435 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435"})})]})]})};n(53);var Ue=function(){return Object(q.jsx)("section",{className:"promo",children:Object(q.jsx)("h1",{className:"promo__title",children:"\u0423\u0447\u0435\u0431\u043d\u044b\u0439 \u043f\u0440\u043e\u0435\u043a\u0442 \u0441\u0442\u0443\u0434\u0435\u043d\u0442\u0430 \u0444\u0430\u043a\u0443\u043b\u044c\u0442\u0435\u0442\u0430 \u0412\u0435\u0431-\u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0438."})})},Me=(n(54),[["HTML"],["CSS"],["JS","javascript"],["React"],["Git"],["Express.js","express"],["mongoDB"]]);var Pe=function(){return Object(q.jsxs)("section",{className:"techs",id:"techs",children:[Object(q.jsx)("h2",{className:"techs__title",children:"\u0422\u0435\u0445\u043d\u043e\u043b\u043e\u0433\u0438\u0438"}),Object(q.jsxs)("article",{className:"techs__content",children:[Object(q.jsx)("h3",{className:"techs__heading",children:"7 \u0442\u0435\u0445\u043d\u043e\u043b\u043e\u0433\u0438\u0439"}),Object(q.jsx)("p",{className:"techs__text",children:"\u041d\u0430 \u043a\u0443\u0440\u0441\u0435 \u0432\u0435\u0431-\u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0438 \u043c\u044b \u043e\u0441\u0432\u043e\u0438\u043b\u0438 \u0442\u0435\u0445\u043d\u043e\u043b\u043e\u0433\u0438\u0438, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043f\u0440\u0438\u043c\u0435\u043d\u0438\u043b\u0438 \u0432 \u0434\u0438\u043f\u043b\u043e\u043c\u043d\u043e\u043c \u043f\u0440\u043e\u0435\u043a\u0442\u0435."}),Object(q.jsx)("ul",{className:"techs__list",children:Me.map((function(e,t){var n;return Object(q.jsx)("li",{className:"techs__list-item",children:Object(q.jsx)("a",{className:"techs__list-link",href:"https://github.com/topics/".concat((null!==(n=e[1])&&void 0!==n?n:e[0]).toLowerCase()),target:"_blank",rel:"noreferrer",children:e[0]})},t)}))})]})]})};var ze=function(e){var t=e.loggedIn;return ne("\u041e \u043f\u0440\u043e\u0435\u043a\u0442\u0435"),Object(q.jsxs)(q.Fragment,{children:[Object(q.jsx)(Se,{loggedIn:t}),Object(q.jsxs)("main",{children:[Object(q.jsx)(Ue,{}),Object(q.jsx)(Re,{}),Object(q.jsx)(De,{}),Object(q.jsx)(Pe,{}),Object(q.jsx)(Fe,{}),Object(q.jsx)(Le,{})]}),Object(q.jsx)(ye,{})]})},Je=new(function(e){Object(D.a)(n,e);var t=Object(R.a)(n);function n(){return Object(F.a)(this,n),t.apply(this,arguments)}return Object(T.a)(n,[{key:"getAllMovies",value:function(){return this._customFetch("")}}]),n}(U))({baseUrl:"https://".concat(h,"/beatfilm-movies")});n(55);var Ae=["card","isSaved","type"];function qe(e){return"".concat(e," ").concat(["\u043c\u0438\u043d\u0443\u0442\u0430","\u043c\u0438\u043d\u0443\u0442\u044b","\u043c\u0438\u043d\u0443\u0442"][(t=e)%100>4&&t%100<20?2:[2,0,1,1,1,2][t%10<5?Math.abs(t)%10:5]]);var t}function Be(e){var t=e.card,n=e.isSaved,a=e.type,c=Object(ae.a)(e,Ae),r=a===S,s=["moviescard__button","moviescard__button_type_".concat(a)],i=t.nameRU||t.nameEN;return Object(q.jsxs)("li",{className:"moviescard",children:[Object(q.jsx)("a",{className:"moviescard__link",href:t.trailerLink,target:"_blank",rel:"noreferrer",children:Object(q.jsxs)("figure",{className:"moviescard__figure",children:[Object(q.jsxs)("div",{className:"moviescard__text-container",children:[Object(q.jsx)("figcaption",{className:"moviescard__title",children:i}),Object(q.jsx)("p",{className:"moviescard__duration",children:qe(t.duration)})]}),Object(q.jsx)("img",{className:"moviescard__image",src:r?"https://".concat(h).concat(t.image.url):t.image,alt:i})]})}),Object(q.jsx)("input",Object(A.a)({type:"checkbox",checked:r?n:!n,onChange:function(){n?c.onCardDelete(t):c.onCardSave(t)}},se(s)))]})}n(56);var Ge,He=["cards","savedCards","type"],Ve=480,Ye=768,Ke=1280,We=(Ge={},Object(Q.a)(Ge,Ke,{cardsPerRow:3,initialRows:4,addRowsOnDemand:1}),Object(Q.a)(Ge,Ye,{cardsPerRow:2,initialRows:4,addRowsOnDemand:1}),Object(Q.a)(Ge,Ve,{cardsPerRow:1,initialRows:5,addRowsOnDemand:2}),Ge);function Ze(e){var t=e.cards,n=e.savedCards,c=e.type,r=Object(ae.a)(e,He),s=c===S,i=s?t:n,o=Object(a.useState)([]),l=Object(d.a)(o,2),u=l[0],j=l[1],b=Object(a.useState)(0),h=Object(d.a)(b,2),m=h[0],O=h[1],f=function(){var e=Object(a.useState)([0,0]),t=Object(d.a)(e,2),n=t[0],c=t[1];function r(){c([window.innerWidth,window.innerHeight])}return Object(a.useLayoutEffect)((function(){return window.addEventListener("resize",r),r(),function(){window.removeEventListener("resize",r)}}),[]),n}(),_=Object(d.a)(f,1)[0];return function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:200,n=Object(a.useRef)();Object(a.useEffect)((function(){clearTimeout(n.current),n.current=setTimeout(e,t)}),[e,t])}(Object(a.useCallback)((function(){var e,t=(e=_)>=Ke?We[Ke]:e>=Ye?We[Ye]:We[Ve],n=t.cardsPerRow*t.initialRows;if(O(t.addRowsOnDemand*t.cardsPerRow),!u.length)return j(i.slice(0,n));j(i.slice(0,u.length))}),[u.length,i,_])),Object(q.jsxs)("section",{className:"moviescards",children:[Object(q.jsx)("ul",{className:"moviescards__list",children:u.map((function(e){var t;return Object(a.createElement)(Be,Object(A.a)(Object(A.a)({},r),{},{card:e,isSaved:!s||n.some((function(t){return t.movieId===String(e.id)})),type:c,key:null!==(t=s?e.id:e.movieId)&&void 0!==t?t:Math.random()}))}))}),u.length<i.length&&Object(q.jsx)("div",{className:"moviescards__more",children:Object(q.jsx)("button",{className:"moviescards__more-button",type:"button",onClick:function(){j(i.slice(0,u.length+m))},children:"\u0415\u0449\u0451"})})]})}n(57);var Qe=function(){return Object(q.jsx)("div",{className:"preloader",children:Object(q.jsx)("div",{className:"preloader__container",children:Object(q.jsx)("span",{className:"preloader__round"})})})};n(58);function Xe(e){var t=e.filterShortState,n=e.queryState,a=Object(d.a)(t,2),c=a[0],r=a[1],s=n[1];function i(e){var t;e.preventDefault(),s(null!==(t=e.target.value)&&void 0!==t?t:e.target.search.value)}return Object(q.jsx)("section",{className:"searchform",children:Object(q.jsxs)("form",{onSubmit:i,className:"searchform__form",children:[Object(q.jsx)("fieldset",{className:"searchform__fieldset",children:Object(q.jsxs)("label",{className:"searchform__fieldset-container",children:[Object(q.jsx)("input",{onBlur:i,name:"search",required:!0,className:"searchform__input",type:"search",placeholder:"\u0424\u0438\u043b\u044c\u043c"}),Object(q.jsx)("button",{className:"searchform__submit",type:"submit"})]})}),Object(q.jsxs)("label",{title:"\u0414\u043b\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044c <= ".concat(w),className:"searchform__label",children:[Object(q.jsx)("input",{checked:c,onChange:function(){r(!c)},className:"searchform__switch",type:"checkbox"}),"\u041a\u043e\u0440\u043e\u0442\u043a\u043e\u043c\u0435\u0442\u0440\u0430\u0436\u043a\u0438"]})]})})}n(59);var $e=["savedCards","type","loggedIn"];function et(e){var t=e.savedCards,n=void 0===t?[]:t,c=e.type,r=void 0===c?S:c,s=e.loggedIn,i=Object(ae.a)(e,$e),o=r===S;ne(o?x.title:N.title);var l=Y(),u=Object(a.useState)(!1),j=Object(a.useState)(""),b=j[0],h=u[0],m=J("cards",[]),O=Object(d.a)(m,2),f=O[0],_=O[1],v=J("lastCardsFetch",0),p=Object(d.a)(v,2),g=p[0],k=p[1],y=Object(a.useState)(""),C=Object(d.a)(y,2),E=C[0],I=C[1],F=(Date.now()-g)/864e5>=1;Object(a.useEffect)((function(){!b||!F&&f.length||Je.getAllMovies().then((function(e){_(e),k(Date.now()),I("")})).catch((function(e){I(f.length?"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0441\u043f\u0438\u0441\u043e\u043a \u0444\u0438\u043b\u044c\u043c\u043e\u0432 \u043d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c, \u043d\u043e \u043f\u043e\u0438\u0441\u043a \u043f\u043e \u0441\u043e\u0445\u0440\u0430\u043d\u0451\u043d\u043d\u043e\u043c\u0443 \u0441\u043f\u0438\u0441\u043a\u0443 \u0432\u043e\u0437\u043c\u043e\u0436\u0435\u043d.":"\u0412\u043e \u0432\u0440\u0435\u043c\u044f \u0437\u0430\u043f\u0440\u043e\u0441\u0430 \u043f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430. \u0412\u043e\u0437\u043c\u043e\u0436\u043d\u043e, \u043f\u0440\u043e\u0431\u043b\u0435\u043c\u0430 \u0441 \u0441\u043e\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u0435\u043c \u0438\u043b\u0438 \u0441\u0435\u0440\u0432\u0435\u0440 \u043d\u0435\u0434\u043e\u0441\u0442\u0443\u043f\u0435\u043d. \u041f\u043e\u0434\u043e\u0436\u0434\u0438\u0442\u0435 \u043d\u0435\u043c\u043d\u043e\u0433\u043e \u0438 \u043f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0451 \u0440\u0430\u0437"),console.log("Couldnt get initial cards from the server",e)}))}),[_,b,g,k,F,f]);var T=n.filter((function(e){var t;return!e.owner||(null!==(t=e.owner._id)&&void 0!==t?t:e.owner)===l._id})),D=function(e){return!h||e.duration<=w},R=function(e){var t,n;return!b||(null===(t=e.nameRU)||void 0===t?void 0:t.toLowerCase().includes(b.toLowerCase()))||(null===(n=e.nameEN)||void 0===n?void 0:n.toLowerCase().includes(b.toLowerCase()))},L=f.filter(D).filter(R),U=T.filter(D).filter(R),M=o?!L.length:!U.length;return Object(q.jsxs)(q.Fragment,{children:[Object(q.jsx)(Se,{loggedIn:s}),Object(q.jsxs)("main",{children:[Object(q.jsx)(Xe,{filterShortState:u,queryState:j}),f.length&&M?Object(q.jsx)("p",{className:"movies__status",children:"\u041d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e"}):!b&&o?null:f.length?Object(q.jsx)(Ze,Object(A.a)(Object(A.a)({},i),{},{query:b,type:r,cards:L,savedCards:U})):Object(q.jsx)(Qe,{}),E&&Object(q.jsx)("p",{className:"movies__status movies__status_type_error",children:E})]}),Object(q.jsx)(ye,{})]})}n(60);function tt(){return Object(q.jsxs)("main",{className:"notfound",children:[Object(q.jsx)("h1",{className:"notfound__title",children:"404"}),Object(q.jsx)("h2",{className:"notfound__subtitle",children:"\u0421\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u0430"}),Object(q.jsx)("nav",{className:"notfound__navigation",children:Object(q.jsx)(i.b,{to:m,className:"notfound__link",children:"\u041d\u0430\u0437\u0430\u0434"})})]})}n(61);var nt=["loggedIn"],at=["reset"],ct={autoCorrect:"off",spellCheck:!1,className:"".concat(E,"_theme_dark profile__details-text")};function rt(e){var t=e.loggedIn,n=Object(ae.a)(e,nt);ne("\u041f\u0440\u043e\u0444\u0438\u043b\u044c");var r=Object(a.useState)(""),s=Object(d.a)(r,2),i=s[0],o=s[1],u=Y(),b=function(){var e=c.a.useContext(H);if(void 0===e)throw new Error("useCurrentUserDispatcher must be used within a CurrentUserProvider");return e}(),h=ee(u),m=(h.reset,Object(ae.a)(h,at)),O=Object(a.useState)(!1),f=Object(d.a)(O,2),_=f[0],v=f[1],p=_?"\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435...":"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c";function g(){return(g=Object(j.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return v(!0),e.next=3,W(b,u,m.getData(),"updateUserInfo").then((function(){o(""),setTimeout((function(){o("\u0418\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u0441\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u044b.")}))})).catch((function(e){m.isInvalid=!0,o(""),setTimeout((function(){var t,n;e.message?o(e.message+((null===(t=e.validation)||void 0===t||null===(n=t.body)||void 0===n?void 0:n.message)?" \u2014 ".concat(e.validation.body.message):"")):console.log(e)}))})).finally((function(){v(!1)}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(q.jsxs)(q.Fragment,{children:[Object(q.jsx)(Se,{loggedIn:t}),Object(q.jsx)("main",{children:Object(q.jsxs)(oe,{className:"profile",onSubmit:function(){return g.apply(this,arguments)},onReset:m.reset,children:[Object(q.jsxs)("h2",{className:"profile__title",children:["\u041f\u0440\u0438\u0432\u0435\u0442, ",u.name,"!"]}),Object(q.jsxs)("div",{className:"profile__details",children:[Object(q.jsxs)("label",{className:"profile__details-item",children:[Object(q.jsx)("p",{className:"profile__details-heading",children:"\u0418\u043c\u044f"}),Object(q.jsx)("div",{className:"profile__input-container",children:Object(q.jsx)(be,Object(A.a)(Object(A.a)(Object(A.a)({},ct),{},{autoComplete:"name"},m.register("name")),{},{placeholder:"\u0410\u0440\u0442 \u0413\u0438\u043d\u0437\u0431\u0443\u0440\u0433",disabled:_}))})]}),Object(q.jsxs)("label",{className:"profile__details-item",children:[Object(q.jsx)("p",{className:"profile__details-heading",children:"E-mail"}),Object(q.jsx)("div",{className:"profile__input-container",children:Object(q.jsx)(be,Object(A.a)(Object(A.a)(Object(A.a)({},ct),{},{type:"email",autoComplete:"email"},m.register("email")),{},{placeholder:"art.ginzburg@ya.ru",disabled:_}))})]})]}),Object(q.jsx)("p",Object(A.a)(Object(A.a)({},se(["profile__status",i&&"profile__status_visible"])),{},{children:i})),Object(q.jsxs)("div",{className:"profile__buttons",children:[Object(q.jsx)("button",{type:"submit",disabled:m.isInvalid||_,className:"profile__button",children:p}),Object(q.jsx)("button",{onClick:n.handleSignOut,type:"button",className:"profile__button profile__button_type_dangerous",children:"\u0412\u044b\u0439\u0442\u0438 \u0438\u0437 \u0430\u043a\u043a\u0430\u0443\u043d\u0442\u0430"})]})]})})]})}var st=function(e){return Object(q.jsx)(b.b,{path:e.path,children:e.loggedIn?e.children:Object(q.jsx)(b.a,{to:m})})};var it=function(){var e=Object(b.g)(),t=J("currentUser",B),n=Object(d.a)(t,2),c=n[0],r=n[1],s=J("loggedIn",!1),i=Object(d.a)(s,2),o=i[0],g=i[1],x=function(e,t){var n=J(e,t),c=Object(d.a)(n,2),r=c[0],s=c[1],i=Object(a.useCallback)((function(e){s(btoa(e))}),[s]),o=Object(a.useRef)(atob(r));return Object(a.useEffect)((function(){o.current=atob(r)})),[o.current,i]}("email","")[1],N=J("savedCards",[]),k=Object(d.a)(N,2),y=k[0],C=k[1];Object(a.useEffect)((function(){o&&(z.getUserInfo().then(r).catch((function(e){return console.log("Couldnt get user info from the server",e)})),z.getMovies().then(C).catch((function(e){return console.log("Couldnt get saved cards from the server",e)})))}),[o,r,C]);var w=Object(a.useCallback)((function(e){var t=y,n=e.id?y.find((function(t){return t.movieId===String(e.id)})):e;return C(y.filter((function(t){return e.id?t.movieId!==String(e.id):t._id!==e._id}))),z.deleteMovie(n._id).catch((function(e){C(t),console.log("Couldnt delete card on the server",e)}))}),[y,C]);function S(e){return E.apply(this,arguments)}function E(){return(E=Object(j.a)(l.a.mark((function e(t){var n,a,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=y,a={country:t.country,director:t.director,duration:t.duration,year:t.year,description:t.description,image:"https://".concat(h).concat(t.image.url),trailer:t.trailerLink,thumbnail:"https://".concat(h).concat(t.image.formats.thumbnail.url),movieId:String(t.id),nameRU:t.nameRU,nameEN:t.nameEN},C([a].concat(Object(u.a)(y))),e.prev=3,e.next=6,z.saveMovie(a);case 6:return c=e.sent,C([c].concat(Object(u.a)(y))),e.abrupt("return",c);case 11:e.prev=11,e.t0=e.catch(3),C(n),console.error(e.t0);case 15:case"end":return e.stop()}}),e,null,[[3,11]])})))).apply(this,arguments)}var I=Object(a.useCallback)((function(e){x(e),g(!0)}),[x,g]),F=Object(a.useCallback)((function(){z.getUserInfo().then((function(e){e&&I(e.email)})).catch((function(e){g(!1),console.log(e)}))}),[I,g]);function T(t,n,a){if(n&&a)return z.login(n,a).then((function(a){a&&(t.target.reset(),I(n),e.push(O))}))}return Object(a.useEffect)((function(){F()}),[F]),Object(q.jsx)(V,{state:c,dispatch:r,children:Object(q.jsxs)(b.d,{children:[Object(q.jsx)(b.b,{exact:!0,path:m,children:Object(q.jsx)(ze,{loggedIn:o})}),Object(q.jsx)(b.b,{path:[v,_],children:Object(q.jsx)(Ne,{loggedIn:o,handleLogin:T,handleRegister:function(e,t,n,a){return z.register(t,n,a).then((function(){T(e,t,n)}))}})}),Object(q.jsx)(st,{path:O,loggedIn:o,children:Object(q.jsx)(et,{onCardSave:S,onCardDelete:w,savedCards:y,loggedIn:o})}),Object(q.jsx)(st,{path:f,loggedIn:o,children:Object(q.jsx)(et,{onCardSave:S,onCardDelete:w,savedCards:y,type:"remove",loggedIn:o})}),Object(q.jsx)(st,{path:p,loggedIn:o,children:Object(q.jsx)(rt,{handleSignOut:function(){z.logout().then((function(){g(!1),e.replace(m),window.scrollTo(0,0)})).catch((function(e){console.log(e)}))},loggedIn:o})}),Object(q.jsx)(b.b,{component:tt})]})})},ot=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,63)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),r(e),s(e)}))};s.a.render(Object(q.jsx)(c.a.StrictMode,{children:Object(q.jsx)(i.a,{basename:"",children:Object(q.jsx)(it,{})})}),document.getElementById("root")),ot()}],[[62,1,2]]]);
//# sourceMappingURL=main.9ac2e639.chunk.js.map
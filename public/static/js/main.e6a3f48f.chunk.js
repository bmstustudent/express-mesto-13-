(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],{19:function(e,t,a){},21:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a(1),c=a.n(s),o=a(9),i=a.n(o),r=(a(19),a(13)),p=a(8),u=a.n(p),l=a(10),_=a(2),d=a.p+"static/media/logo.ff16f24b.svg";var b=function(){return Object(n.jsxs)("header",{className:"header page__header",children:[Object(n.jsx)("a",{className:"logo header__logo opacity",href:"../../public/index.html",children:Object(n.jsx)("img",{className:"logo__image",src:d,alt:"\u041b\u043e\u0433\u043e\u0442\u0438\u043f"})})," "]})},m=c.a.createContext(),j=function(e){var t=e.card,a=e.onCardClick,s=e.onCardLike,o=e.onCardDelete,i=c.a.useContext(m),r=t.owner._id===i._id,p=t.likes.some((function(e){return e._id===i._id})),u="".concat(p?"button pictures__like pictures__like_active opacity":"button pictures__like opacity");return Object(n.jsxs)("li",{className:"pictures__item",children:[Object(n.jsx)("button",{className:"".concat(r?"button pictures__delete pictures__delete_show opacity":"button pictures__delete opacity"),type:"button",onClick:function(){o(t)}}),Object(n.jsx)("img",{className:"pictures__image",src:t.link,alt:t.name,onClick:function(){a(t)}}),Object(n.jsxs)("div",{className:"pictures__cover",children:[Object(n.jsx)("p",{className:"pictures__title",children:t.name}),Object(n.jsxs)("div",{className:"pictures__like-cover",children:[Object(n.jsx)("button",{className:u,type:"button",onClick:function(){s(t)}}),Object(n.jsx)("span",{className:"pictures__like-counter",children:t.likes.length})]})]})]})},h=function(e){var t=e.onEditAvatar,a=e.onEditProfile,s=e.onAddPlace,o=e.onCardClick,i=e.onCardLike,r=e.onCardDelete,p=e.cards,u=c.a.useContext(m);return Object(n.jsxs)("main",{className:"content page__content",children:[Object(n.jsxs)("section",{className:"profile",children:[Object(n.jsxs)("div",{className:"profile__cover",children:[Object(n.jsx)("div",{className:"avatar profile__avatar",onClick:t,style:{backgroundImage:"url(".concat(u.avatar,")")}}),Object(n.jsxs)("div",{className:"profile__info",children:[Object(n.jsxs)("div",{className:"profile__position",children:[Object(n.jsx)("h1",{className:"profile__title",children:u.name}),Object(n.jsx)("button",{className:"button button_edit profile__button opacity",type:"button",onClick:a})]}),Object(n.jsx)("p",{className:"profile__subtitle",children:u.about})]})]}),Object(n.jsx)("button",{className:"button button_add opacity",type:"button",onClick:s})]}),Object(n.jsx)("section",{className:"pictures",children:Object(n.jsx)("ul",{className:"pictures__list",children:p.map((function(e){return Object(n.jsx)(j,{onCardClick:o,card:e,onCardLike:i,onCardDelete:r},e._id)}))})})]})};var f=function(){return Object(n.jsxs)("footer",{className:"footer page__footer",children:[Object(n.jsx)("p",{className:"footer__copyright",children:"\xa9 2020 Mesto Russia"})," "]})},O=function(e){var t=e.name,a=e.isOpen,s=e.onClose,o=e.children,i=function(e){"Escape"===e.key&&s()};c.a.useEffect((function(){return document.addEventListener("keydown",i,!1),function(){document.removeEventListener("keydown",i,!1)}}),[a]);return Object(n.jsx)("section",{className:"".concat(a?"popup popup_type_".concat(t," popup_opened"):"popup popup_type_".concat(t)),onMouseUp:function(e){e.target===e.currentTarget&&a&&s()},children:Object(n.jsxs)("div",{className:"".concat("picture"===t?"popup__container popup__container_type_picture":"popup__container"),children:[Object(n.jsx)("button",{className:"button popup__close opacity",type:"button",onClick:s}),o]})})},v=a(4),x=a(3),g=function(e){var t=function(t){return e.reduce((function(e,a){return e[a]=t,e}),{})},a=c.a.useState(t(!1)),n=Object(_.a)(a,2),s=n[0],o=n[1],i=c.a.useState(t("")),r=Object(_.a)(i,2),p=r[0],u=r[1],l=c.a.useState(t("")),d=Object(_.a)(l,2),b=d[0],m=d[1];return{isValid:s,setIsValid:o,inputValue:p,setInputValue:u,validationMessage:b,setValidationMessage:m,handleInputChange:function(e){var t=e.target,a=t.name,n=t.value;u(Object(x.a)(Object(x.a)({},p),{},Object(v.a)({},a,n))),o(Object(x.a)(Object(x.a)({},s),{},Object(v.a)({},a,e.target.validity.valid))),m(Object(x.a)(Object(x.a)({},b),{},Object(v.a)({},a,e.target.validationMessage)))},fieldsEnumeration:t}},y=function(e){var t=e.isOpen,a=e.onClose,s=e.onUpdateUser,o=e.isLoading,i=g(["name","about"]),r=i.isValid,p=i.setIsValid,u=i.inputValue,l=i.setInputValue,_=i.validationMessage,d=i.setValidationMessage,b=i.handleInputChange,j=i.fieldsEnumeration,h=c.a.useContext(m);return c.a.useEffect((function(){l({name:h.name||"",about:h.about||""}),p(j(!0)),d(j(""))}),[h,t,l,p,d]),Object(n.jsxs)(O,{name:"edit",isOpen:t,onClose:a,children:[Object(n.jsx)("h2",{className:"popup__title",children:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c"}),Object(n.jsxs)("form",{className:"popup__form form_type_edit",action:"#",name:"edit",onSubmit:function(e){e.preventDefault(),s({name:u.name,about:u.about})},noValidate:!0,children:[Object(n.jsxs)("div",{className:"popup__cover",children:[Object(n.jsxs)("label",{className:"popup__control",children:[Object(n.jsx)("input",{className:"".concat(_.name?"popup__input popup__input_type_name popup__input_type_error":"popup__input popup__input_type_name"),type:"text",name:"name",value:u.name,onChange:b,placeholder:"\u0418\u043c\u044f",minLength:"2",maxLength:"20",pattern:"^[0-9A-Za-z\u0410-\u042f\u0430-\u044f\u0401\u0451\\D][A-Za-z\u0410-\u042f\u0430-\u044f\u0401\u0451\\s\\D]*[A-Za-z\u0410-\u042f\u0430-\u044f\u0401\u0451\\D]$",required:!0}),Object(n.jsx)("span",{className:"".concat(r.name?"popup__error":"popup__error popup__error_type_active"),children:_.name})]}),Object(n.jsxs)("label",{className:"popup__control",children:[Object(n.jsx)("input",{className:"".concat(_.about?"popup__input popup__input_type_about popup__input_type_error":"popup__input popup__input_type_about"),type:"text",name:"about",value:u.about,onChange:b,placeholder:"\u0417\u0430\u043d\u044f\u0442\u0438\u0435",minLength:"2",maxLength:"200",required:!0}),Object(n.jsx)("span",{className:"".concat(r.about?"popup__error":"popup__error popup__error_type_active"),children:_.about})]})]}),Object(n.jsx)("input",{className:"".concat(r.name&&r.about?"button popup__submit":"button popup__submit popup__submit_type_disabled"),type:"submit",value:"".concat(o?"\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435...":"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"),name:"submit"})]})]})},C=function(e){var t=e.isOpen,a=e.onClose,s=e.onUpdateAvatar,o=e.isLoading,i=g(["avatar"]),r=i.isValid,p=i.setIsValid,u=i.inputValue,l=i.setInputValue,_=i.validationMessage,d=i.setValidationMessage,b=i.handleInputChange,m=i.fieldsEnumeration,j=c.a.useRef(null);return c.a.useEffect((function(){l(m("")),p(m(!1)),d(m(""))}),[t,l,p,d]),Object(n.jsxs)(O,{name:"avatar",isOpen:t,onClose:a,children:[Object(n.jsx)("h2",{className:"popup__title",children:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440"}),Object(n.jsxs)("form",{className:"popup__form form_type_avatar",action:"#",name:"avatar",onSubmit:function(e){e.preventDefault(),s({avatar:j.current.value})},noValidate:!0,children:[Object(n.jsx)("div",{className:"popup__cover popup__cover_type_avatar",children:Object(n.jsxs)("label",{className:"popup__control",children:[Object(n.jsx)("input",{ref:j,className:"".concat(_.avatar?"popup__input popup__input_type_avatar popup__input_type_error":"popup__input popup__input_type_avatar"),type:"url",name:"avatar",value:u.avatar,placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",onChange:b,required:!0}),Object(n.jsx)("span",{className:"".concat(r.avatar?"popup__error":"popup__error popup__error_type_active"),children:_.avatar})]})}),Object(n.jsx)("input",{className:"".concat(r.avatar?"button popup__submit":"button popup__submit popup__submit_type_disabled"),type:"submit",value:"".concat(o?"\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435...":"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"),name:"submit"})]})]})},N=function(e){var t=e.isOpen,a=e.onClose,s=e.onAddPlace,o=e.isLoading,i=g(["name","link"]),r=i.isValid,p=i.setIsValid,u=i.inputValue,l=i.setInputValue,_=i.validationMessage,d=i.setValidationMessage,b=i.handleInputChange,m=i.fieldsEnumeration;return c.a.useEffect((function(){l(m("")),p(m(!1)),d(m(""))}),[t,l,p,d]),Object(n.jsxs)(O,{name:"add",isOpen:t,onClose:a,children:[Object(n.jsx)("h2",{className:"popup__title",children:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e"}),Object(n.jsxs)("form",{className:"popup__form form_type_add",action:"#",name:"add",onSubmit:function(e){e.preventDefault(),s({name:u.name,link:u.link})},noValidate:!0,children:[Object(n.jsxs)("div",{className:"popup__cover",children:[Object(n.jsxs)("label",{className:"popup__control",children:[Object(n.jsx)("input",{className:"".concat(_.name?"popup__input popup__input_type_title popup__input_type_error":"popup__input popup__input_type_title"),type:"text",name:"name",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",minLength:"1",maxLength:"30",pattern:"^[A-Za-z\u0410-\u042f\u0430-\u044f\u0401\u0451\\D][A-Za-z\u0410-\u042f\u0430-\u044f\u0401\u0451\\s\\D]*[A-Za-z\u0410-\u042f\u0430-\u044f\u0401\u0451\\D]$",required:!0,value:u.name,onChange:b}),Object(n.jsx)("span",{className:"".concat(r.name?"popup__error":"popup__error popup__error_type_active"),children:_.name})]}),Object(n.jsxs)("label",{className:"popup__control",children:[Object(n.jsx)("input",{className:"".concat(_.link?"popup__input popup__input_type_link popup__input_type_error":"popup__input popup__input_type_link"),type:"url",name:"link",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",required:!0,value:u.link,onChange:b}),Object(n.jsx)("span",{className:"".concat(r.link?"popup__error":"popup__error popup__error_type_active"),children:_.link})]})]}),Object(n.jsx)("input",{className:"".concat(r.link&&r.name?"button popup__submit":"button popup__submit popup__submit_type_disabled"),type:"submit",value:"".concat(o?"\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435...":"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"),name:"submit"})]})]})},k=function(e){var t=e.card,a=e.onClose,s=e.isOpen,c=e.onCardDelete,o=e.isLoading;return Object(n.jsxs)(O,{name:"prevent",isOpen:s,onClose:a,children:[Object(n.jsx)("h2",{className:"popup__title",children:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?"}),Object(n.jsx)("form",{className:"popup__form form_type_prevent",action:"#",name:"prevent",onSubmit:function(e){e.preventDefault(),c(t)},noValidate:!0,children:Object(n.jsx)("input",{className:"button popup__submit",type:"submit",name:"submit",value:"".concat(o?"\u0423\u0434\u0430\u043b\u0435\u043d\u0438\u0435...":"\u0414\u0430")})})]})},D=function(e){var t=e.card,a=e.isOpen,s=e.onClose;return Object(n.jsx)(O,{name:"picture",isOpen:a,onClose:s,children:Object(n.jsxs)("figure",{className:"popup__figure",children:[Object(n.jsx)("img",{className:"popup__image",src:t.link,alt:t.name}),Object(n.jsx)("figcaption",{className:"popup__caption",children:t.name})]})})},V=a(11),E=a(12),U=new(function(){function e(t){var a=t.baseUrl,n=t.headers;Object(V.a)(this,e),this.baseUrl=a,this.headers=n}return Object(E.a)(e,[{key:"getUserInfo",value:function(){return fetch("".concat(this.baseUrl,"users/me"),{headers:this.headers}).then(this._getResponseData)}},{key:"getCards",value:function(){return fetch("".concat(this.baseUrl,"cards"),{headers:this.headers}).then(this._getResponseData)}},{key:"setUserInfo",value:function(e){return fetch("".concat(this.baseUrl,"users/me"),{method:"PATCH",headers:this.headers,body:JSON.stringify({name:e.name,about:e.about})}).then(this._getResponseData)}},{key:"createCard",value:function(e){return fetch("".concat(this.baseUrl,"cards"),{method:"POST",headers:this.headers,body:JSON.stringify({name:e.name,link:e.link})}).then(this._getResponseData)}},{key:"deleteCard",value:function(e){return fetch("".concat(this.baseUrl,"cards/").concat(e),{method:"DELETE",headers:this.headers}).then(this._getResponseData)}},{key:"likeCard",value:function(e){return fetch("".concat(this.baseUrl,"cards/likes/").concat(e),{method:"PUT",headers:this.headers}).then(this._getResponseData)}},{key:"dislikeCard",value:function(e){return fetch("".concat(this.baseUrl,"cards/likes/").concat(e),{method:"DELETE",headers:this.headers}).then(this._getResponseData)}},{key:"setAvatar",value:function(e){return fetch("".concat(this.baseUrl,"users/me/avatar"),{method:"PATCH",headers:this.headers,body:JSON.stringify(e)}).then(this._getResponseData)}},{key:"_getResponseData",value:function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}}]),e}())({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-16/",headers:{authorization:"b9208915-d1f7-4b9c-af49-26bdde24640d","Content-Type":"application/json"}});var L=function(){var e=c.a.useState(!1),t=Object(_.a)(e,2),a=t[0],s=t[1],o=c.a.useState(!1),i=Object(_.a)(o,2),p=i[0],d=i[1],j=c.a.useState(!1),O=Object(_.a)(j,2),v=O[0],x=O[1],g=c.a.useState(!1),V=Object(_.a)(g,2),E=V[0],L=V[1],S=c.a.useState(!1),A=Object(_.a)(S,2),I=A[0],P=A[1],M=c.a.useState(!1),R=Object(_.a)(M,2),w=R[0],T=R[1],z=c.a.useState([]),Z=Object(_.a)(z,2),q=Z[0],J=Z[1],H=c.a.useState([]),$=Object(_.a)(H,2),B=$[0],F=$[1],G=c.a.useState(!1),K=Object(_.a)(G,2),Q=K[0],W=K[1],X=function(){var e=Object(l.a)(u.a.mark((function e(){var t,a,n,s;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Promise.all([U.getUserInfo(),U.getCards()]);case 3:t=e.sent,a=Object(_.a)(t,2),n=a[0],s=a[1],F(s),J(n),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log("".concat(e.t0));case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}();c.a.useEffect((function(){X()}),[]);var Y=function(){s(!1),d(!1),x(!1),L(!1),T(!1),P(!1)};return Object(n.jsx)("div",{className:"page",children:Object(n.jsx)("div",{className:"page__cover",children:Object(n.jsxs)(m.Provider,{value:q,children:[Object(n.jsx)(b,{}),Object(n.jsx)(h,{onEditAvatar:function(){s(!0)},onEditProfile:function(){d(!0)},onAddPlace:function(){x(!0)},onCardClick:function(e){P(!0),T(e)},onCardLike:function(e){(e.likes.some((function(e){return e._id===q._id}))?U.dislikeCard(e._id):U.likeCard(e._id)).then((function(t){var a=B.map((function(a){return a._id===e._id?t:a}));F(a)})).catch((function(e){console.log("".concat(e))}))},onCardDelete:function(e){L(!0),T(e)},cards:B}),Object(n.jsx)(f,{}),Object(n.jsx)(y,{isOpen:p,onClose:Y,onUpdateUser:function(e){W(!0),U.setUserInfo(e).then((function(e){J(e),Y()})).catch((function(e){console.log("".concat(e))})).finally((function(){W(!1)}))},isLoading:Q}),Object(n.jsx)(N,{isOpen:v,onClose:Y,onAddPlace:function(e){W(!0),U.createCard(e).then((function(e){F([e].concat(Object(r.a)(B))),Y()})).catch((function(e){console.log("".concat(e))})).finally((function(){W(!1)}))},isLoading:Q}),Object(n.jsx)(C,{isOpen:a,onClose:Y,onUpdateAvatar:function(e){W(!0),U.setAvatar(e).then((function(e){J(e),Y()})).catch((function(e){console.log("".concat(e))})).finally((function(){W(!1)}))},isLoading:Q}),Object(n.jsx)(k,{isOpen:E,onClose:Y,card:w,onCardDelete:function(e){W(!0),U.deleteCard(e._id).then((function(){var t=B.filter((function(t){return t._id!==e._id}));F(t),Y()})).catch((function(e){console.log("".concat(e))})).finally((function(){W(!1)}))},isLoading:Q}),Object(n.jsx)(D,{isOpen:I,onClose:Y,card:w})]})})})};i.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(L,{})}),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.e6a3f48f.chunk.js.map
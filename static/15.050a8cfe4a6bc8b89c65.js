webpackJsonp([15],{JRSo:function(a,e){},JWkN:function(a,e){},Mjx9:function(a,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=t("odpU"),_=t.n(r),s=t("wW6b");var o=function(a){t("JRSo")},d=t("VU/8")(_.a,s.a,o,"data-v-30ad51e0",null);e.default=d.exports},c4J9:function(a,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{visible:{type:Boolean,default:!1},showMask:{type:Boolean,default:!1}},data:function(){return{}}}},kwYj:function(a,e,t){"use strict";var r={render:function(){var a=this.$createElement,e=this._self._c||a;return e("svg",{staticStyle:{"enable-background":"new 0 0 50 50"},attrs:{version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",width:"20px",height:"20px",viewBox:"0 0 50 50","xml:space":"preserve"}},[e("path",{attrs:{fill:"#fff",d:"M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z"}},[e("animateTransform",{attrs:{attributeType:"xml",attributeName:"transform",type:"rotate",from:"0 25 25",to:"360 25 25",dur:"0.6s",repeatCount:"indefinite"}})],1)])},staticRenderFns:[]};e.a=r},odpU:function(a,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=i(t("Xxa5")),_=i(t("exGp")),s=i(t("b/4S")),o=i(t("Au9k")),d=i(t("vNgy"));function i(a){return a&&a.__esModule?a:{default:a}}e.default={data:function(){return{data__isWorking:!1,data__model:{userName:"",email:"",password:"",confirmedPassword:""},data__error:{userName:"",email:"",password:"",confirmedPassword:""}}},components:{ModLoading:d.default},methods:{async__method__signup:function(){var a=this;return(0,_.default)(r.default.mark(function e(){var t;return r.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!a.data__isWorking){e.next=2;break}return e.abrupt("return");case 2:if(a.data__isWorking=!0,a.method__checkUserName(),a.method__checkEmail(),a.method__checkPassword(),a.method__checkConfirmedPassword(),!(a.data__error.userName||a.data__error.email||a.data__error.password||a.data__error.confirmedPassword)){e.next=10;break}return a.data__isWorking=!1,e.abrupt("return");case 10:return e.next=12,a.$ajax({url:"/api/account/createUser",method:"post",needLogin:!1,data:{userName:a.data__model.userName,email:a.data__model.email,password:o.default.encrypt(a.data__model.password)}});case 12:(t=e.sent).success?(s.default.method__localstorage__setOne(s.default.signTokenName,t.data.token),setTimeout(function(){window.location.href=s.default.method__getPageUrl("note")},500)):a.$toast({message:t.message}),a.data__isWorking=!1;case 15:case"end":return e.stop()}},e,a)}))()},method__checkUserName:function(){this.data__model.userName?this.data__error.userName="":this.data__error.userName="account__userNameBlankError"},method__checkPassword:function(){this.data__model.password?this.data__error.password="":this.data__error.password="account__passwordBlankError"},method__checkConfirmedPassword:function(){var a=this.data__model.confirmedPassword;a?a===this.data__model.password?this.data__error.confirmedPassword="":this.data__error.confirmedPassword="account__passwordNotEqual":this.data__error.confirmedPassword="account__confirmedPasswordError"},method__checkEmail:function(){var a=this.data__model.email;a?/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/.test(a)?this.data__error.email="":this.data__error.email="account__emailFormatError":this.data__error.email="account__emailBlankError"}}}},vNgy:function(a,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=t("c4J9"),_=t.n(r),s=t("kwYj");var o=function(a){t("JWkN")},d=t("VU/8")(_.a,s.a,o,null,null);e.default=d.exports},wW6b:function(a,e,t){"use strict";var r={render:function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{staticClass:"mod__signup g__area"},[t("div",{staticClass:"g__input__box"},[t("input",{directives:[{name:"model",rawName:"v-model",value:a.data__model.userName,expression:"data__model.userName"}],staticClass:"g__input__box__input",attrs:{type:"text",name:"",id:"",placeholder:a.$t("account__pleaseSetUserName")},domProps:{value:a.data__model.userName},on:{input:function(e){e.target.composing||(a.data__model.userName=e.target.value)}}}),a._v(" "),a.data__error.userName?t("div",{staticClass:"g__input__box__error"},[a._v(a._s(a.$t(a.data__error.userName)))]):a._e()]),a._v(" "),t("div",{staticClass:"g__input__box"},[t("input",{directives:[{name:"model",rawName:"v-model",value:a.data__model.email,expression:"data__model.email"}],staticClass:"g__input__box__input",attrs:{type:"text",name:"",id:"",placeholder:a.$t("account__pleaseSetEmail")},domProps:{value:a.data__model.email},on:{blur:a.method__checkEmail,input:function(e){e.target.composing||(a.data__model.email=e.target.value)}}}),a._v(" "),a.data__error.email?t("div",{staticClass:"g__input__box__error"},[a._v(a._s(a.$t(a.data__error.email)))]):a._e()]),a._v(" "),t("div",{staticClass:"g__input__box"},[t("input",{directives:[{name:"model",rawName:"v-model",value:a.data__model.password,expression:"data__model.password"}],staticClass:"g__input__box__input",attrs:{type:"password",name:"",id:"",placeholder:a.$t("account__pleaseSetPassword")},domProps:{value:a.data__model.password},on:{input:function(e){e.target.composing||(a.data__model.password=e.target.value)}}}),a._v(" "),a.data__error.password?t("div",{staticClass:"g__input__box__error"},[a._v(a._s(a.$t(a.data__error.password)))]):a._e()]),a._v(" "),t("div",{staticClass:"g__input__box"},[t("input",{directives:[{name:"model",rawName:"v-model",value:a.data__model.confirmedPassword,expression:"data__model.confirmedPassword"}],staticClass:"g__input__box__input",attrs:{type:"password",name:"",id:"",placeholder:a.$t("account__pleaseSetConfirmedPassword")},domProps:{value:a.data__model.confirmedPassword},on:{input:function(e){e.target.composing||(a.data__model.confirmedPassword=e.target.value)}}}),a._v(" "),a.data__error.confirmedPassword?t("div",{staticClass:"g__input__box__error"},[a._v(a._s(a.$t(a.data__error.confirmedPassword)))]):a._e()]),a._v(" "),t("div",{staticClass:"g__button",on:{click:a.async__method__signup}},[t("span",{staticClass:"g__button__text"},[a._v(a._s(a.$t("account__signupNow")))]),a._v(" "),a.data__isWorking?t("ModLoading"):a._e()],1),a._v(" "),t("div",{staticClass:"g__tips g__tips--spacebetween"},[t("div",{staticClass:"g__tips__left g__tips__left--unavailable"},[a._v(a._s(a.$t("remindForgetPasswordUnavailable")))]),a._v(" "),t("div",{staticClass:"g__tips__right"},[a._v(a._s(a.$t("account__allreadyAMember"))),t("a",{staticClass:"g__tips__highlight",attrs:{href:"./signin.html"}},[a._v(a._s(a.$t("account__goSignin")))])])])])},staticRenderFns:[]};e.a=r}});
webpackJsonp([18],{"+ytw":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var _=a("Z0LJ"),o=a.n(_),r=a("XAuN");var n=function(t){a("C00U")},s=a("VU/8")(o.a,r.a,n,"data-v-7aa1909a",null);e.default=s.exports},"0eBe":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var _=a("tXuP"),o=a.n(_),r=a("fDI4");var n=function(t){a("JObx")},s=a("VU/8")(o.a,r.a,n,"data-v-a19cf27e",null);e.default=s.exports},C00U:function(t,e){},JObx:function(t,e){},OntA:function(t,e,a){"use strict";var _={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ModModal",{staticClass:"modal",class:["modal--theme-"+t.$store.state.theme],on:{bgClick:t.method__onCancel}},["github"===t.prop__chosenFormType?a("ModGithubFilesForm",{on:{cancel:t.method__onCancel,confirm:t.method__onConfirm}}):t._e(),t._v(" "),"notely"===t.prop__chosenFormType?a("ModSioForm",{attrs:{prop__openTargetSaveModeModalAfterLogined:t.prop__options?t.prop__options.openTargetSaveModeModalAfterLogined:""},on:{cancel:t.method__onCancel,confirm:t.method__onConfirm}}):t._e()],1)},staticRenderFns:[]};e.a=_},XAuN:function(t,e,a){"use strict";var _={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mod__signin"},[a("div",{staticClass:"mod__signin__title"},[t._v("Notely login")]),t._v(" "),a("div",{staticClass:"g__input__box"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.data__model.email,expression:"data__model.email"}],staticClass:"g__input__box__input",attrs:{type:"text",name:"",id:"",placeholder:t.$t("account__pleaseSetEmail")},domProps:{value:t.data__model.email},on:{input:function(e){e.target.composing||(t.data__model.email=e.target.value)}}}),t._v(" "),t.data__error.email?a("div",{staticClass:"g__input__box__error"},[t._v(t._s(t.$t(t.data__error.email)))]):t._e()]),t._v(" "),a("div",{staticClass:"g__input__box"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.data__model.password,expression:"data__model.password"}],staticClass:"g__input__box__input",attrs:{type:"password",name:"",id:"",placeholder:t.$t("account__pleaseSetPassword")},domProps:{value:t.data__model.password},on:{input:function(e){e.target.composing||(t.data__model.password=e.target.value)}}}),t._v(" "),t.data__error.password?a("div",{staticClass:"g__input__box__error"},[t._v(t._s(t.$t(t.data__error.password)))]):t._e()]),t._v(" "),a("div",{staticClass:"tips tips--spacebetween"},[a("div",{staticClass:"tips__left tips__left--unavailable"},[t._v(t._s(t.$t("remindForgetPasswordUnavailable")))]),t._v(" "),a("div",{staticClass:"tips__right"},[t._v(t._s(t.$t("account__noAccount"))),a("a",{staticClass:"tips__highlight",attrs:{href:"./signup.html"}},[t._v(t._s(t.$t("account__goSignup")))])])]),t._v(" "),a("div",{staticClass:"g__form__buttons"},[a("div",{staticClass:"g__form__buttons__item g__form__buttons__item--cancel",on:{click:t.method__onCancel}},[t._v(t._s(t.$t("modal__cancel")))]),t._v(" "),a("div",{staticClass:"g__form__buttons__item g__form__buttons__item--confirm",on:{click:t.async__method__signin}},[t._v(t._s(t.$t("modal__confirm")))])])])},staticRenderFns:[]};e.a=_},Z0LJ:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var _=i(a("Xxa5")),o=i(a("mvHQ")),r=i(a("exGp")),n=i(a("b/4S")),s=i(a("Au9k"));function i(t){return t&&t.__esModule?t:{default:t}}e.default={data:function(){return{data__isWorking:!1,data__model:{email:"",password:""},data__error:{email:"",password:""}}},props:["prop__openTargetSaveModeModalAfterLogined"],components:{},methods:{method__onCancel:function(){this.$emit("cancel"),this.$emit("input",!1)},async__method__signin:function(){var t=this;return(0,r.default)(_.default.mark(function e(){var a;return _.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.data__isWorking){e.next=2;break}return e.abrupt("return");case 2:if(t.data__isWorking=!0,t.method__checkEmail(),t.method__checkPassword(),!t.data__error.email&&!t.data__error.password){e.next=8;break}return t.data__isWorking=!1,e.abrupt("return");case 8:return e.next=10,t.$ajax({url:"/api/account/login",method:"post",needLogin:!1,data:{email:t.data__model.email,password:s.default.encrypt(t.data__model.password)}});case 10:if(!(a=e.sent).success){e.next=18;break}n.default.method__localstorage__setOne(n.default.signTokenName,a.data.token),n.default.method__setSaveModeAndThirdStorageData(n.default.saveMode.offline),t.prop__openTargetSaveModeModalAfterLogined&&t.prop__openTargetSaveModeModalAfterLogined!==n.default.saveMode.notely&&n.default.method__localstorage__setOne(n.default.localStorage__key__openTargetSaveModeModal,(0,o.default)({saveMode:t.prop__openTargetSaveModeModalAfterLogined,expireTime:Date.now()+2e4})),setTimeout(function(){window.location.href=n.default.method__getPageUrl("index")},500),e.next=25;break;case 18:e.t0=a.message,e.next="userNotExists"===e.t0?21:23;break;case 21:return t.$toast({message:n.default.method__getI18nText("login__userNotExists")}),e.abrupt("break",25);case 23:return t.$toast({message:"login__error"}),e.abrupt("break",25);case 25:t.data__isWorking=!1;case 26:case"end":return e.stop()}},e,t)}))()},method__checkPassword:function(){this.data__model.password?this.data__error.password="":this.data__error.password="account__passwordBlankError"},method__checkEmail:function(){var t=this.data__model.email;t?/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/.test(t)?this.data__error.email="":this.data__error.email="account__emailFormatError":this.data__error.email="account__emailBlankError"}}}},bu8n:function(t,e){},fDI4:function(t,e,a){"use strict";var _={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mod__signin"},[a("div",{staticClass:"mod__signin__title"},[t._v("存储到 Github")]),t._v(" "),a("div",{staticClass:"g__input__box"},[t._m(0),t._v(" "),t._m(1),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.data__model.token,expression:"data__model.token"}],staticClass:"g__input__box__input",attrs:{type:"text",name:"",id:"",placeholder:"请输入一个有效的 token 值"},domProps:{value:t.data__model.token},on:{input:function(e){e.target.composing||(t.data__model.token=e.target.value)}}}),t._v(" "),t.data__error.token?a("div",{staticClass:"g__input__box__error"},[t._v("请输入一个有效的 token 值")]):t._e()]),t._v(" "),a("div",{staticClass:"g__input__box"},[a("div",{staticClass:"g__input__box__title"},[t._v("Github 仓库名称列表")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.data__model.repos,expression:"data__model.repos"}],staticClass:"g__input__box__input",attrs:{type:"text",name:"",id:"",placeholder:"仓库名称"},domProps:{value:t.data__model.repos},on:{input:function(e){e.target.composing||(t.data__model.repos=e.target.value)}}}),t._v(" "),t.data__error.repos?a("div",{staticClass:"g__input__box__error"},[t._v("仓库名称，多个仓库用英文逗号区分")]):t._e()]),t._v(" "),a("div",{staticClass:"g__input__box"},[a("div",{staticClass:"g__input__box__title"},[t._v("分支名称（暂时只支持 master 分支）: master")]),t._v(" "),t.data__error.branch?a("div",{staticClass:"g__input__box__error"},[t._v("分支名称")]):t._e()]),t._v(" "),t.prop__showCancel||t.prop__showConfirm?a("div",{staticClass:"g__form__buttons"},[t.prop__showCancel?a("div",{staticClass:"g__form__buttons__item g__form__buttons__item--cancel",on:{click:t.method__onCancel}},[t._v(t._s(t.$t("modal__cancel")))]):t._e(),t._v(" "),t.prop__showConfirm?a("div",{staticClass:"g__form__buttons__item g__form__buttons__item--confirm",on:{click:t.method__onConfirm}},[t._v(t._s(t.$t("modal__confirm")))]):t._e()]):t._e()])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"g__input__box__title"},[this._v("请输入一个有效的 token 值"),e("a",{staticClass:"g__input__box__title__desc",attrs:{href:"https://github.com/settings/tokens/new",target:"_blank"}},[this._v("申请 token")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"g__input__box__desclist"},[e("div",{staticClass:"g__input__box__desclist__item"},[this._v('1. 请至少勾选一级选项 "repo"')]),this._v(" "),e("div",{staticClass:"g__input__box__desclist__item"},[this._v("2. 请确保仓库和分支已创建")])])}]};e.a=_},o0SS:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var _=a("wgjC"),o=a.n(_),r=a("OntA");var n=function(t){a("bu8n")},s=a("VU/8")(o.a,r.a,n,"data-v-3f1d8872",null);e.default=s.exports},tXuP:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var _=s(a("Xxa5")),o=s(a("exGp")),r=s(a("b/4S")),n=(s(a("Au9k")),s(a("vNgy")));function s(t){return t&&t.__esModule?t:{default:t}}e.default={props:{prop__showCancel:{type:Boolean,default:!0},prop__showConfirm:{type:Boolean,default:!0}},data:function(){return{data__isWorking:!1,data__model:{token:"",repos:"",branch:"master"},data__error:{token:"",repos:"",branch:""}}},components:{ModLoading:n.default},mounted:function(){var t=this;return(0,o.default)(_.default.mark(function e(){return _.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.initInputs();case 2:case"end":return e.stop()}},e,t)}))()},methods:{initInputs:function(){var t=this;return(0,o.default)(_.default.mark(function e(){var a,o,n;return _.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.default.method__getGithubDataFromLoginData(t);case 2:if(a=e.sent){o=a.token,n=a.repoList;try{t.data__model.token=o,t.data__model.repos=n.map(function(t){var e=t.repo;t.branch;return e}).join("; "),t.data__model.branch="master"}catch(t){}}case 4:case"end":return e.stop()}},e,t)}))()},method__checkRepo:function(){this.data__model.repos?this.data__error.repos="":this.data__error.repos="account__githubRepoBlankError"},method__checkToken:function(){this.data__model.token?this.data__error.token="":this.data__error.token="account__githubTokenBlankError"},method__checkBranch:function(){this.data__model.branch?this.data__error.branch="":this.data__error.branch="account__githubBranchBlankError"},method__onCancel:function(){this.$emit("cancel"),this.$emit("input",!1)},method__formatReposToArr:function(t){return(t=t.replace(/(\,)|(\，)|(\；)/g,";")).split(";").map(function(t){return t=t.trim().replace(/\.git$/,"").split("/").pop()}).filter(function(t){return!!t})},method__onConfirm:function(){var t=this;return(0,o.default)(_.default.mark(function e(){var a;return _.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t.method__checkToken(),t.method__checkRepo(),t.method__checkBranch(),!(t.data__error.token||t.data__error.repos||t.data__error.branch)){e.next=5;break}return e.abrupt("return");case 5:return t.$loading.open({desc:"checking..."}),e.next=8,t.$ajax({url:r.default.method__getGithubApi({type:"user"}),method:"GET",forcedParams:{token:t.data__model.token}});case 8:a=e.sent,t.$loading.close(),a.success?(r.default.method__setSaveModeAndThirdStorageData("github",{token:t.data__model.token,repos:t.method__formatReposToArr(t.data__model.repos).map(function(e){return{repo:e,branch:t.data__model.branch}})}),setTimeout(function(){window.location.href=r.default.method__getPageUrl("index")},500)):t.$toast({message:"校验失败，请检查 token 是否存在，或项目及分支是否被创建"});case 11:case"end":return e.stop()}},e,t)}))()}}}},wgjC:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});n(a("dz2s")),n(a("b/4S"));var _=n(a("SR9v")),o=n(a("+ytw")),r=n(a("0eBe"));function n(t){return t&&t.__esModule?t:{default:t}}e.default={props:["prop__width","prop__options","prop__showConfirm","prop__chosenFormType"],components:{ModModal:_.default,ModSioForm:o.default,ModGithubFilesForm:r.default},computed:{computed__hideEntries:function(){return this.prop__options&&this.prop__options.hideEntries||[]},computed__fromPath:function(){return this.prop__data,""}},methods:{method__onCancel:function(){this.$emit("cancel")},method__onConfirm:function(){this.$emit("confirm")}}}}});
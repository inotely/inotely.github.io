webpackJsonp([23],{Abue:function(t,e){},RECk:function(t,e,_){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=_("pmJN"),i=_.n(n),o=_("rcR9");var a=function(t){_("Abue")},s=_("VU/8")(i.a,o.a,a,null,null);e.default=s.exports},fuT4:function(t,e,_){t.exports=_.p+"img/2b292da22fb594683d00cf025120f636.svg"},pmJN:function(t,e,_){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s(_("Xxa5")),i=s(_("exGp")),o=s(_("dz2s")),a=s(_("b/4S"));function s(t){return t&&t.__esModule?t:{default:t}}var u=null;e.default={props:["prop__triggerLoginTimeStamp"],data:function(){return{data__show__popup__login__list:!1,data__userInfo:null,data__submenu__in__user:!1,data__hasGotUserInfo:!1,data__intervalCheckLoginTimer:null,data__githubRedirect:"https://github.com/login/oauth/authorize?client_id="+(a.default.env__isOnline?"dad692aae770fafde5f7":"04a1925d694f75260a81")+"&redirect_uri="+(a.default.env__isOnline?"https://api.mogonote.com":"http://localhost:7001")+"/oauth/redirect?from=github"}},methods:{method__login:function(){this.data__show__popup__login__list=!0},method__hidePopup:function(){this.data__show__popup__login__list=!1,this.method__oauthCloseInternalCheck()},method__intervalCheckLogin:function(t){var e=this;this.method__oauthCloseInternalCheck(),t>=0&&(this.data__intervalCheckLoginTimer=setTimeout((0,i.default)(n.default.mark(function _(){return n.default.wrap(function(_){for(;;)switch(_.prev=_.next){case 0:return clearTimeout(e.data__intervalCheckLoginTimer),_.next=3,a.default.method__getUserInfo(e);case 3:if(!_.sent){_.next=6;break}u&&u.close(),window.location.reload();case 6:e.method__intervalCheckLogin(t-1);case 7:case"end":return _.stop()}},_,e)})),3e3))},method__oauthClick__github:function(){var t=this;return(0,i.default)(n.default.mark(function e(){return n.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:u=window.open(t.data__githubRedirect,"kmind login","height=600,width=600,left=100,top=100"),t.method__intervalCheckLogin(10);case 2:case"end":return e.stop()}},e,t)}))()},method__oauthCloseInternalCheck:function(){clearTimeout(this.data__intervalCheckLoginTimer)},method__unloginClick:function(){var t=this;return(0,i.default)(n.default.mark(function e(){return n.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:a.default.async__method__unlogin(t);case 1:case"end":return e.stop()}},e,t)}))()},method__goLogin:function(){this.data__show__popup__login__list=!0}},mounted:function(){var t=this;return(0,i.default)(n.default.mark(function e(){return n.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:(0,o.default)("body").click(function(){t.data__submenu__in__user=!1}),document.body.appendChild(t.$el);case 2:case"end":return e.stop()}},e,t)}))()},destroyed:function(){this.$el&&this.$el.parentNode&&this.$el.parentNode.removeChild(this.$el)}}},rcR9:function(t,e,_){"use strict";var n={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"menu-left-login"},[t.data__show__popup__login__list?n("div",{staticClass:"layout__login__entry"},[n("div",{staticClass:"layout__login__entry__bg"}),t._v(" "),n("div",{staticClass:"layout__login__entry__box"},[n("img",{staticClass:"layout__login__entry__box__close",attrs:{src:_("fuT4")},on:{click:function(e){t.data__show__popup__login__list=!1}}}),t._v(" "),n("div",{staticClass:"layout__login__entry__box__list"},[n("div",{staticClass:"layout__login__entry__box__list__item",on:{click:t.method__oauthClick__github}},[n("img",{staticClass:"layout__login__entry__box__list__item__img",attrs:{src:_("JuAN")}}),t._v(" "),n("span",{staticClass:"layout__login__entry__box__list__item__text"},[t._v("github")])])]),t._v(" "),n("div",{staticClass:"layout__login__entry__box__desc"},[t._v("第三方登录")])])]):t._e()])},staticRenderFns:[]};e.a=n}});
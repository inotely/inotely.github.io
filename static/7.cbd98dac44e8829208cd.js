webpackJsonp([7],{"1MEz":function(t,e){},"2j3z":function(t,e){},BHFz:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{slidesLength:1,_width:0,auto:!0,slideing:!0,timer1:"",className:"",dom:{},t:{sx:0,s:0,m:0,e:0},index:1}},props:{autoPlay:{default:!0},duration:{default:500},interval:{default:2500},showIndicator:{default:!0}},mounted:function(){var t=this;this.className="wh_swiper_"+1e3*Math.random().toFixed(3),setTimeout(function(){t.starDom(),t.dom.transform="translate3d("+-1*t._width+"px, 0px, 0px)",t.dom["-webkit-transform"]="translate3d("+-1*t._width+"px, 0px, 0px)",t.dom["-ms-transform"]="translate3d("+-1*t._width+"px, 0px, 0px)",t.autoPlay&&t.setTime()},50)},methods:{s:function(t){this.slideing&&(this.clearTimeOut(),this.t.sx=this.getTransform(),this.t.s=t.touches[t.touches.length-1].clientX)},m:function(t){this.slideing&&-1!=this.t.s&&(this.clearTimeOut(),this.t.m=t.touches[t.touches.length-1].clientX-this.t.s,this.setTransform(this.t.m+this.t.sx))},e:function(t){if(this.slideing&&-1!=this.t.s){this.clearTimeOut(),this.setTransform(this.t.m+this.t.sx);t=this.getTransform();t+=this.t.m>0?.3*this._width:-.3*this._width,this.index=-1*Math.round(t/this._width),this.wh("touch")}},setTransform:function(t){this.dom.transform="translate3d("+t+"px, 0px, 0px)",this.dom["-webkit-transform"]="translate3d("+t+"px, 0px, 0px)",this.dom["-ms-transform"]="translate3d("+t+"px, 0px, 0px)"},getTransform:function(){var t=this.dom.transform||this.dom["-webkit-transform"]||this.dom["-ms-transform"];return t=(t=t.substring(12)).match(/(\S*)px/)[1],Number(t)},fn:function(t){t.preventDefault()},prevSlide:function(){this.clearTimeOut(),this.index--,this.wh()},nextSlide:function(){this.clearTimeOut(),this.index++,this.wh()},slideTo:function(t){this.clearTimeOut(),this.index=t+1,this.wh()},wh:function(t){var e=this;this.slideing=!1,this.dom.transition="touch"==t?"250ms":this.duration+"ms",this.setTransform(-1*this.index*this._width),this.t.m=0,this.t.s=-1,this.autoPlay&&this.setTime();var i="touch"==t?"250":this.duration;setTimeout(function(){e.dom.transition="0s",e.index>=e.slidesLength+1&&(e.index=1,e.setTransform(-1*e.index*e._width)),e.index<=0&&(e.index=e.slidesLength,e.setTransform(-1*e.index*e._width)),e.$emit("transtionend",e.index-1),e.auto=!0,e.slideing=!0},i)},setTime:function(){var t=this;this.timer1=window.setTimeout(function(){t.auto?(t.index++,t.wh()):window.clearTimeout(t.timer1)},this.interval)},starDom:function(){var t=document.querySelector("."+this.className).getElementsByClassName("wh_slide");if(this.slidesLength=t.length,this.slidesLength>1){var e=t[0].cloneNode(!0),i=t[this.slidesLength-1].cloneNode(!0);document.querySelector("."+this.className).insertBefore(i,t[0]),document.querySelector("."+this.className).appendChild(e),this._width=document.querySelector("."+this.className).offsetWidth,this.dom=document.querySelector("."+this.className).style}},clearTimeOut:function(){this.auto=!1,window.clearTimeout(this.timer1)}}}},"GV/7":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i("TSKi"),n=i.n(s),o=i("s9g4");var a=function(t){i("krYD")},_=i("VU/8")(n.a,o.a,a,null,null);e.default=_.exports},ICY9:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.Slide=e.Swiper=void 0;var s=o(i("VnKQ")),n=o(i("GV/7"));function o(t){return t&&t.__esModule?t:{default:t}}e.Swiper=s.default,e.Slide=n.default},IJZC:function(t,e,i){t.exports=i.p+"img/5b2191e22f686ea5f70b580e8b92d714.png"},OQSo:function(t,e,i){t.exports=i.p+"img/fefdfaa951c08f71e40dbe5354557059.png"},SFKB:function(t,e,i){t.exports=i.p+"img/1d0b9c555b9cfc114ba4d715ecba2d25.svg"},TSKi:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={methods:{clickSlide:function(){this.$emit("click")}}}},UFLw:function(t,e,i){"use strict";t.exports=o,t.exports.isMobile=o,t.exports.default=o;var s=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series[46]0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i,n=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series[46]0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino|android|ipad|playbook|silk/i;function o(t){t||(t={});var e=t.ua;if(e||"undefined"==typeof navigator||(e=navigator.userAgent),e&&e.headers&&"string"==typeof e.headers["user-agent"]&&(e=e.headers["user-agent"]),"string"!=typeof e)return!1;var i=t.tablet?n.test(e):s.test(e);return!i&&t.tablet&&t.featureDetect&&navigator&&navigator.maxTouchPoints>1&&-1!==e.indexOf("Macintosh")&&-1!==e.indexOf("Safari")&&(i=!0),i}},VnKQ:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i("BHFz"),n=i.n(s),o=i("pXxk");var a=function(t){i("2j3z")},_=i("VU/8")(n.a,o.a,a,null,null);e.default=_.exports},c57c:function(t,e){},hJ2R:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i("rZYC"),n=i.n(s),o=i("nT6f");var a=function(t){i("c57c"),i("1MEz")},_=i("VU/8")(n.a,o.a,a,"data-v-e0f855b6",null);e.default=_.exports},krYD:function(t,e){},nT6f:function(t,e,i){"use strict";var s={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"box",class:["box--theme-"+t.computed__theme]},[s("ModBecomeATester"),t._v(" "),s("div",{staticClass:"box__item box__item--gray"},[s("div",{staticClass:"box__item__bg"}),t._v(" "),s("div",{staticClass:"box__item__body box__item__body--firstscreen J__FirstScreen"},[s("div",{staticClass:"box__item__body__title box__item__body__title--biggest",domProps:{innerHTML:t._s(t.$t("homepage__mainFunction"))}}),t._v(" "),s("div",{staticClass:"box__item__body__title__desc box__item__body__title__desc--mobile",domProps:{innerHTML:t._s(t.$t("homepage__viewAllFunctionsInPc"))}}),t._v(" "),s("div",{staticClass:"box__item__body__desclist"},[s("div",{staticClass:"box__item__body__desclist__item",domProps:{innerHTML:t._s(t.$t("homepage__types"))}}),t._v(" "),s("div",{staticClass:"box__item__body__desclist__item",domProps:{innerHTML:t._s(t.$t("homepage__multiLevelDirectory"))}}),t._v(" "),s("div",{staticClass:"box__item__body__desclist__item",domProps:{innerHTML:t._s(t.$t("homepage__OnlineOffline"))}})]),t._v(" "),s("div",{staticClass:"box__item__body__useNow"},[s("a",{staticClass:"box__item__body__useNow__button",attrs:{href:t.method__getPageUrl("index")}},[t._v(t._s(t.$t("useForFree")))])])])]),t._v(" "),s("div",{staticClass:"box__item box__item--white"},[s("div",{staticClass:"box__item__bg"}),t._v(" "),s("div",{staticClass:"box__item__body"},[s("div",{staticClass:"box__item__body__title",domProps:{innerHTML:t._s(t.$t("homepage__easy"))}}),t._v(" "),s("div",{staticClass:"box__item__body__title__desc",domProps:{innerHTML:t._s(t.$t("homepage__support")+" "+t.$t("homepage__types")+" "+t.$t("homepage__more"))}}),t._v(" "),s("ModSwiper",{staticClass:"box__banners",attrs:{interval:2500}},[s("ModSlide",[s("div",{staticClass:"box__banners__item"},[s("img",{staticClass:"box__banners__item__img box__banners__item__img--big",attrs:{src:i("IJZC"),alt:""}})])]),t._v(" "),s("ModSlide",[s("div",{staticClass:"box__banners__item"},[s("img",{staticClass:"box__banners__item__img box__banners__item__img--big",attrs:{src:i("pREp"),alt:""}})])]),t._v(" "),s("ModSlide",[s("div",{staticClass:"box__banners__item"},[s("img",{staticClass:"box__banners__item__img box__banners__item__img--big",attrs:{src:i("OQSo"),alt:""}})])])],1)],1)]),t._v(" "),s("div",{staticClass:"box__item box__item--gray"},[s("div",{staticClass:"box__item__bg"}),t._v(" "),s("div",{staticClass:"box__item__body"},[t._m(0),t._v(" "),s("div",{staticClass:"box__item__body__title",domProps:{innerHTML:t._s(t.$t("homepage__OnlineOffline"))}}),t._v(" "),s("div",{staticClass:"box__item__body__title__desc",domProps:{innerHTML:t._s(t.$t("useEverywhere"))}})])])],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"box__item__body__iconbox box__item__body__iconbox--wifi"},[e("img",{staticClass:"box__item__body__icon",attrs:{src:i("SFKB")}})])}]};e.a=s},pREp:function(t,e,i){t.exports=i.p+"img/c3001ffe93d0a7f4897c8dc5e6e0d20c.png"},pXxk:function(t,e,i){"use strict";var s={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{staticClass:"wh_content",on:{touchmove:t.fn}},[i("div",{staticClass:"wh_swiper",class:t.className,on:{touchstart:t.s,touchmove:t.m,touchend:t.e}},[t._t("default")],2),t._v(" "),t.showIndicator?i("div",{staticClass:"wh_indicator"},t._l(t.slidesLength,function(e,s){return i("div",{staticClass:"wh_indicator_item",class:{wh_show_bgcolor:t.index-1==s}})})):t._e()])},staticRenderFns:[]};e.a=s},rZYC:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=l(i("Xxa5")),n=l(i("exGp")),o=l(i("woOf")),a=l(i("dz2s")),_=l(i("b/4S")),r=l(i("UFLw")),d=i("8Kg6"),c=i("ICY9");function l(t){return t&&t.__esModule?t:{default:t}}e.default={data:function(){return{data__isMobile:(0,r.default)(),data__prices__versions:null,data__switch__1:{internalTimer:null,curIndex:0,list:["","",""]}}},computed:(0,o.default)({},(0,d.mapState)({computed__theme:function(t){return t.theme||"white"}})),components:{ModSwiper:c.Swiper,ModSlide:c.Slide,ModBecomeATester:function(){return i.e(22).then(i.bind(null,"DrPv"))}},created:function(){var t=this;return(0,n.default)(s.default.mark(function e(){return s.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}},e,t)}))()},mounted:function(){if(!this.data__isMobile){(0,a.default)(".J__FirstScreen").css({"min-height":Math.max((0,a.default)(window).height()-(0,a.default)(".J__LayoutHeader").height()-200,0)+"px"})}},methods:{method__getPageUrl:function(t){return _.default.method__getPageUrl(t)},method__switchTo:function(t,e,i){var s=i.interval,n=void 0===s||s;this[t].curIndex=e,this.method__stopIntervalSwitch(t),n&&this.method__startIntervalSwitch(t)},method__stopIntervalSwitch:function(t){clearInterval(this[t].internalTimer)},method__startIntervalSwitch:function(t){this[t].list.length;this.method__stopIntervalSwitch(t)}}}},s9g4:function(t,e,i){"use strict";var s={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"wh_slide",on:{click:this.clickSlide}},[this._t("default")],2)},staticRenderFns:[]};e.a=s}});
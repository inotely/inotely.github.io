webpackJsonp([0,20,25,28,30],{"+QbD":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("sava"),n=a.n(i),o=a("kFkI");var _=function(t){a("EjH8")},r=a("VU/8")(n.a,o.a,_,"data-v-2f0c57ad",null);e.default=r.exports},"/sqI":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=p(a("Xxa5")),n=p(a("exGp")),o=p(a("woOf")),_=p(a("0CtP")),r=(p(a("NjcZ")),a("LPS8")),c=p(a("kArs")),s=p(a("1vWl")),u=p(a("+QbD")),d=p(a("lwFS")),l=p(a("rihc"));function p(t){return t&&t.__esModule?t:{default:t}}e.default={data:function(){return{data__productName:c.default.prop__productName,data__user__showSubList:!1,data__language__showSubList:!1,data__curContextType:"",data__languageList:c.default.languageList,data__user__contextMenuStyle:{},data__language__contextMenuStyle:{},data__submenu__in__user:!1,data__intervalCheckLoginTimer:null,data__curLanguage:c.default.curLanguage,data__env__isPcNative:c.default.env__isPcNative,data__githubRedirect:"https://github.com/login/oauth/authorize?client_id="+(c.default.env__isOnline?"dad692aae770fafde5f7":"04a1925d694f75260a81")+"&redirect_uri="+(c.default.env__isOnline?"https://api.mogonote.com":"http://localhost:7001")+"/oauth/redirect?from=github"}},props:["prop__current","prop__showToggleSidebar","prop__spreadMenuLeft","prop__showOffline"],computed:(0,o.default)({},(0,r.mapState)({computed__theme:function(t){return t.theme||"Light"},computed__showHeader:function(t){return t.showHeader},computed__accountLoginData__afterResulted:function(t){return t.accountLoginInfo.resulted?t.accountLoginInfo.data:null}})),components:{Contextmenu:s.default,ContextmenuItem:u.default,ContextmenuCheck:d.default,ContextmenuText:l.default},methods:{method__upperCaseFirstLetter:function(t){return c.default.method__upperCaseFirstLetter(t)},method__getPageUrl:function(t){return"always"===(arguments.length>1&&void 0!==arguments[1]?arguments[1]:"not-aways")?c.default.method__getPageUrl(t):t===this.prop__current?"javascript:void(0);":c.default.method__getPageUrl(t)},method__toggleSidebar:function(){var t=this;return(0,n.default)(i.default.mark(function e(){var a,n;return i.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.$store.state.spreadMenuLeft,n=!a,e.next=4,t.$store.dispatch("setSpreadMenuLeft",n);case 4:case"end":return e.stop()}},e,t)}))()},method__onUserClick:function(t){if("user"!==this.data__curContextType){this.data__curContextType="user";var e=c.default.method__getEventStyle(t),a=(e.left,e.top,(0,_.default)(t.target));this.data__user__contextMenuStyle={right:(0,_.default)(window).width()-a.offset().left-1.5*a.width()+"px",top:(0,_.default)(".J__LayoutHeader").outerHeight()-2+"px"}}else this.data__curContextType=""},method__onLanguageClick:function(t){if("language"!==this.data__curContextType){this.data__curContextType="language";var e=c.default.method__getEventStyle(t),a=(e.left,e.top,(0,_.default)(t.target));this.data__language__contextMenuStyle={right:(0,_.default)(window).width()-a.offset().left-a.width()-8+"px",top:(0,_.default)(".J__LayoutHeader").outerHeight()-2+"px",background:"transparent"}}else this.data__curContextType=""},async__method__logout:function(){var t=this;return(0,n.default)(i.default.mark(function e(){return i.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.default.async__method__unlogin(t);case 2:case"end":return e.stop()}},e,t)}))()},method__setLanguage:function(t){c.default.method__getLanguage(t)!==t&&(c.default.method__setLanguage(t),window.location.reload())}},mounted:function(){var t=this;return(0,n.default)(i.default.mark(function e(){return i.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:(0,_.default)("body").click(function(){t.data__submenu__in__user=!1}),t.$emit("headerReady",{height:(0,_.default)(".J__LayoutHeader").height()+"px"});case 2:case"end":return e.stop()}},e,t)}))()}}},"0b8E":function(t,e,a){t.exports=a.p+"img/473a8cacc90b07c02c44b40cdaafa229.svg"},"1vWl":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("97Zb"),n=a.n(i),o=a("LXAK");var _=function(t){a("bW2G")},r=a("VU/8")(n.a,o.a,_,"data-v-676d8a0c",null);e.default=r.exports},"2lnk":function(t,e,a){t.exports=a.p+"img/ee36fb796e79a949161b4ad73abd6f2f.svg"},"2oi7":function(t,e,a){t.exports=a.p+"img/c39b9bfb2e86ef7581ea0ade1d46fe11.svg"},"6lz8":function(t,e,a){t.exports=a.p+"img/af27cd6c3a6fec43fedec4af973b9dae.svg"},"7Jx4":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("/sqI"),n=a.n(i),o=a("v35v");var _=function(t){a("jiHk")},r=a("VU/8")(n.a,o.a,_,null,null);e.default=r.exports},"97Zb":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i,n=a("0CtP"),o=(i=n)&&i.__esModule?i:{default:i};e.default={props:{prop__style:{type:Object,default:{}}},data:function(){return{data__visible:!0,data__disableClickActor:!1}},watch:{data__visible:function(t){},prop__style:function(){(0,o.default)(this.$el).appendTo((0,o.default)(document.body))}},mounted:function(){document.body.addEventListener("click",this.method__handleBodyClick),document.body.appendChild(this.$el)},beforeDestroy:function(){this.data__disableClickActor=!0,document.body.removeEventListener("click",this.method__handleBodyClick),this.$el&&this.$el.parentNode&&this.$el.parentNode.removeChild(this.$el)},methods:{method__onClick:function(){this.$emit("hide"),this.$emit("hideAfterAction"),this.data__visible=!1,this.data__disableClickActor=!0},method__api__getStyle:function(){var t=(0,o.default)(this.$refs.contextmenu);return{width:t.width(),height:t.height()}},method__handleBodyClick:function(t){this.$el.contains(t.target)||this.data__disableClickActor||(this.$emit("hide"),this.$emit("hideAfterBlur"),this.data__disableClickActor=!0,this.data__visible=!1)}}}},At5a:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAOkUlEQVR4Xu2dCdB/1RjHP83YhkGYyC5kpqkxDFlroiiRtFKIEoqEaEGWGoSyi7KFrO2IFG1CskWWrGWdVGgixWAw33HT2/t/l/s79z7n3PM732fmP6Zxz3Oe83nu9/3de+45z1kLmwmYwLIE1jIbEzCB5QlYIL47TGAFAhaIbw8TsEB8D5hAGgH/gqRxc6tGCFggjSTaw0wjYIGkcXOrRghYII0k2sNMI2CBpHFzq0YIWCCNJNrDTCNggaRxc6tGCFggjSTaw0wjYIGkcXOrRghYII0k2sNMI2CBpHFzq0YIWCCNJNrDTCNggaRxc6tGCFggjSTaw0wjYIGkcXOrRghYII0k2sNMI2CBpHFzq0YIWCCNJNrDTCNggaRxc6tGCFggjSTaw0wjYIGkcXOrRghYII0k2sNMI2CBpHFzq0YIWCCNJNrDTCNggaRxc6tGCFggjSTaw0wjYIGkcXOrRghYII0k2sNMI2CBpHFzq0YIWCCNJNrDTCNggaRxc6tGCFggjSTaw0wjYIGkcXOr8QjsDKwHXLXg37njuR/myQIZxs+t0wg8HtgB2BFYewkX3wSOAk4Ark3rYpxWFsg4HO2lPwH9Yhzf8/JfAQd2QunZZNzLLJBxedrbygRmEcdCT08uJRILxLd0LgLbAacM6KyISCyQARlz094E7gycBWzQu8WaF54NbDGgfVJTCyQJmxvNSOAYYI8Z2yx1+YbAxSP46e3CAumNyhcmEtgLODqx7eJmhwCHjuSrlxsLpBcmX5RI4AHAmcAdEtsvbqbvI48eyVcvNxZIL0y+KJHA5wF98xjLLJCxSNpPcQKvDngcskCKp9UBjEFgS+CMMRwt8mGBBEC1y7wEbttN6T4ooNv9gbcE+F3Wpd9BctJuo68jgX0ChvpX4C7ANQG+LZCcUBvuazfg2KDxS3j7Bvm2QHKDbbC/+3VTuncPGPufuq/oFwX4XtGlH7FyE5/f/rQ0faeg4elj4/uCfFsgJcA21qdeno8IGvOHgGcF+V7VrX9BVkXkC1YhsClwXhAlrbvSAsXLg/yv6tYCWRWRL1iBwE27KV2JJMK2Bz4d4bivTwukLylftxSBw4EDgtC8EXh5kO/ebi2Q3qh84SIC2k9+YhCVc4DHAP8O8t/brQXSG5UvXEDgboA2MK0fQOW6ThxfD/A9s0sLZGZkbgB8BHhGEIn9gLcH+Z7ZrQUyM7LmGzwfeHcQheOAXYJ8J7m1QJKwNdtICxDPB24WQEAlfjSle2mA72SXFkgyuiYbng5sFTTypwGfCPKd7NYCSUbXXEPtBdcmqAh7J/CiCMdDfVogQwm20X5r4LSgoX6jm7XScvbJmQUyuZRMLqDbA18GNgqKTN87VDNrkmaBTDItkwpKRaT3DoroYOCwIN+juLVARsE4t052B7SaNsJOBbaNcDymTwtkTJrz5UtlQi8AbhMwrCu7Kd0fBvge1aUFMirOuXJ2MqDVtBH2HOADEY7H9mmBjE10PvwdBGg1bYRJGBJIFWaBVJGmrEFuBkQdgfaDbkpXj1hVmAVSRZqyBXkL4CvAg4N61Eu5Xs6rMQukmlRlCVRF2V4S1NPrgVcG+Q5za4GEoa3OsU5w0mraCNOHQH0QrM4skOpSFhLwPYFvAesEeNcSEq3S1cm11ZkFUl3KQgL+GKDVtBGmRYhajFilWSBVpm3UoFXOM+oG1vL1KOGNCmE5ZxZIFsyT7WTjwEefS7r3Dm2EqtYskGpTN0rgmtLdZBRPazrR1tmol/6gkNd0a4FkQz25jl4bOO36tsDp4qwgLZCsuCfT2TaBH+y0Z11Tun+bzGgHBGKBDIBXaVNN5X4HiDimQIXeNKUbtVQlO3ILJDvy4h1qseCeQVGoVGjUIsegkFd2a4EUwV6sUwkjapm5ikxHLY8vBswCKYY+e8faU67VtBH2++69Q8cVzJVZIHOVzhUH86XA9VA64CZqa27RDFkgRfFn61zvBlHFEd4bWNQhG6DlOrJAiqcgPIDNA8vqfK/7VdIhm3NpFshcpvX/g7oV8N2gYwrUyRMCC8pNIjMWyCTSEBaEqrCrGnuE6Ut8VCnSiHiTfFogSdiqaLRrYDHoLwYWsZ4UXAtkUukYLZh7Az8OOqbgz917x7dHi3bCjiyQCSdnQGif694PBrhYtukLAg/QiYh3kE8LZBC+STZ+MaDVtBH20cCj1yLiHezTAhmMcFIOHgZEHX75s+7R6reTGnFwMBZIMOCM7pXL7wceU7Bz4LHPGTHN1pUFMhuvKV8dWdPqzcABUx58VGwWSBTZvH6fBGg1bYR9tdvj8Y8I51P3ORWB3B94FKAiAip7eQ/gp90/bfo/Bvj51GEWim/djlPEMQX/7N47zis0tuLdTkEgu3XThrdegcYV3UacyRwwXzxzNwRwIrBjUDwHAkcE+a7CbWmBnNn9fPeFpetVOzZqX0PfOKZy3XMBraaNsJOAnSIc1+SzpEAuAvRoNavpUevpgfWcZo2n1PViJ4YR9rvu0UqPuU1bKYHsP/CnWwmUSHT6aqumWrpRxxQ8Ezi2VbALx11CIHcCdDa2CiYPMe1BkEhOH+Kk0rY6SuAVQbG/B9gnyHd1bksIRM+1J4xE6rpOJKeM5K8GN48FtJo2wi7s3gmvjnBeo88SAhn6eLWY83+ApwKfqjEBM8asqdxfBB1ToFC2bvQXedk0lBDI0cBeM94YfS7XdLHK+M+zRR5TcAhw6DzDSxlbCYGc030UTIl3tTZ7AB9e7aJK/3+9OEeN7QvA4yvlEhp2CYG8Djg4cFT6NvD+QP8lXN83cCXBVd2Urvau2xYRKCEQVd/TIfWRpn3YR0V2kNl35DEFzwP02GtbgkAJgdyne9GMTkjVR38tgKPCCFHvBnpk02OpbRkCJQSiUFSFb/cMWXkp8NYM/UR18UhAq2kj7CfdlO5lEc7nxWcpgdwL0Mu6/jfaXga8KbqTAP83AS4NOqZA4WqBY/SjbgCWvC5LCUSj1C9IrnquOsBeX59rsshjCg4HDqoJRqlYSwpEY9bc+2syDb6mef6nBH741Po1nQD1r0zcq+6mtEByi0QvvKoIOGW7K6DFmBH2904cX4twPo8+pyCQ3CKZ+uNW5DEFtU9aZNfgVASSWyRTPSpMO/iiJhSOB/ToZpuBwJQEklskeknVy+pU7IGAVtNG2G+6KV0tdLTNQGBqAsktEq0sVrmcKZgKs60fFIj2zXw8yPdcu52iQHKLRHvco0p19r15Io8pOBLYt28gvu7GBKYqEEWpBY1a2JjDSi5LiaxppW25mtL9Sw6I89jHlAUi3vrrnusRSH9l9dc2p90OuDzomAKNY0tAs2K2RAJTF4iGpdWm2iedw3KvAo48puBVGX+Bc+SmSB81CERgci5L2Tuw1tTCJL8QeEdQ1iW8Jwb5bsptLQJRUiKXXyxOerRINgAuDrrT/thN6arSu20ggZoEoqFuC3xm4Jj7No983FJlyI36BjLjdfO4o3JGBONdXptANPLIsjeLyUYcNxZ5TIGKfO853u1hTzUKRFnbDDg3U/rGnN3aKrCszo+6KV3NitlGIlCrQDT8TYFcZfnH+E5yc+BKIOKYAvHYLuPj50i33/Td1CwQ0X0EkGvp9n7AkOMXIo8peENgKdLp38WBEdYuEKGJPLhyMfrUZSmRxxSc3T1aqcKkbWQC8yAQIXlIVxB7ZDxLupt1geN63d7yiNhUm3gL4III5/YJ8yIQ5VJHAWjtUQ6b5eSlyGMKdCZ61MfGHBwn38c8CSS3SPpUS4k8pkDFuned/B1WeYDzJpDcj1sr7UzUoaQqbRRhv+zeO1QWyBZIYB4FIlwPzfhcrmX5hy2RI03prhOUOx338Mkg33a7gMC8CkRDfDhwfqZsL145G3lMgd459O5hy0BgngUifDm/k1xfUijymALNVmkD1LUZ7g13wXzNYi2X0E0AVUfPYSpOp39RpildffewZSIw778g12PMuSwlKnU6tFNfzG0ZCbQiECHNucBx7BR+FtDedVtmAi0JRGgjp16jUndF97Vcq3VtmQm0JhDh3Rw4KzPnId09G/jgEAdum06gRYGIll52z0zHlq2lzlrUQkdbIQKtCkS4c+5MTEmv9pRrSvcPKY3dZhwCLQtEBFU36oxxUI7uRVVJVJ3EVpBA6wIR+scBOid8SqaKkvo6bytMwAL5XwK2Bk4rnIvru9e7kR7/bBMgYIHckIQnTOCR5ppuAiHXvpYJ3ILTDsECuXF+tgFOLZgyVVt8V8H+3fUiAhbImrdEzuJ0C3vX+R06x8M2IQIWyNLJiDySYKkedfKTpnR/PaF7w6E0spo3NdHbAyenNp6xneoO6wxB28QI+Bdk5YTsAJwUnDNP6QYDHuLeAlmd3k7ACatflnSFjl5T/V/bRAlYIP0So7Ke+ku/Yb/Le111HLBLryt9UTECFkh/9Ot2IhlaPf0yQOWAcp2a1X+EvnINAhbI7DeF/uqrcJzONZ/FrgJUy+qtwCWzNPS15QhYIGnsb9mJRHtLtJ13JVNlFb3oSxz69bBVRMACGZ6stYGNuxpYdwT03zIdzXAhcPXwLuyhFAELpBR591sFAQukijQ5yFIELJBS5N1vFQQskCrS5CBLEbBASpF3v1UQsECqSJODLEXAAilF3v1WQcACqSJNDrIUAQukFHn3WwUBC6SKNDnIUgQskFLk3W8VBCyQKtLkIEsRsEBKkXe/VRCwQKpIk4MsRcACKUXe/VZBwAKpIk0OshQBC6QUefdbBQELpIo0OchSBCyQUuTdbxUELJAq0uQgSxGwQEqRd79VELBAqkiTgyxFwAIpRd79VkHAAqkiTQ6yFAELpBR591sFAQukijQ5yFIELJBS5N1vFQQskCrS5CBLEbBASpF3v1UQsECqSJODLEXAAilF3v1WQcACqSJNDrIUAQukFHn3WwUBC6SKNDnIUgQskFLk3W8VBCyQKtLkIEsRsEBKkXe/VRD4LyTnidgC6C6yAAAAAElFTkSuQmCC"},BPtI:function(t,e,a){t.exports=a.p+"img/ccce507b701f788ab46fb25d397bfb25.svg"},Bcrs:function(t,e){t.exports="data:image/png;base64,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"},EjH8:function(t,e){},Hv9V:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{prop__configType:{type:String,default:""},prop__iconType:{type:String,default:""},prop__text:{type:String,default:""},prop__config:{type:Boolean,default:!1},prop__checked:{type:Boolean,default:!1}},methods:{method__onConfigClick:function(){this.$emit("configClick")}}}},LXAK:function(t,e,a){"use strict";var i={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.data__visible?a("div",{ref:"contextmenu",class:["contextmenu","contextmenu--default"],style:t.prop__style,on:{click:function(e){e.stopPropagation(),t.method__onClick(e)}}},[t._t("default")],2):t._e()},staticRenderFns:[]};e.a=i},NjcZ:function(t,e,a){"use strict";var i,n,o=r(a("mvHQ")),_=r(a("pFYg"));function r(t){return t&&t.__esModule?t:{default:t}}
/*!
 * JavaScript Cookie v2.2.1
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */!function(o){var r;if(void 0===(n="function"==typeof(i=o)?i.call(e,a,e,t):i)||(t.exports=n),r=!0,"object"===(0,_.default)(e)&&(t.exports=o(),r=!0),!r){var c=window.Cookies,s=window.Cookies=o();s.noConflict=function(){return window.Cookies=c,s}}}(function(){function t(){for(var t=0,e={};t<arguments.length;t++){var a=arguments[t];for(var i in a)e[i]=a[i]}return e}function e(t){return t.replace(/(%[0-9A-Z]{2})+/g,decodeURIComponent)}return function a(i){function n(){}function _(e,a,_){if("undefined"!=typeof document){"number"==typeof(_=t({path:"/"},n.defaults,_)).expires&&(_.expires=new Date(1*new Date+864e5*_.expires)),_.expires=_.expires?_.expires.toUTCString():"";try{var r=(0,o.default)(a);/^[\{\[]/.test(r)&&(a=r)}catch(t){}a=i.write?i.write(a,e):encodeURIComponent(String(a)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),e=encodeURIComponent(String(e)).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent).replace(/[\(\)]/g,escape);var c="";for(var s in _)_[s]&&(c+="; "+s,!0!==_[s]&&(c+="="+_[s].split(";")[0]));return document.cookie=e+"="+a+c}}function r(t,a){if("undefined"!=typeof document){for(var n={},o=document.cookie?document.cookie.split("; "):[],_=0;_<o.length;_++){var r=o[_].split("="),c=r.slice(1).join("=");a||'"'!==c.charAt(0)||(c=c.slice(1,-1));try{var s=e(r[0]);if(c=(i.read||i)(c,s)||e(c),a)try{c=JSON.parse(c)}catch(t){}if(n[s]=c,t===s)break}catch(t){}}return t?n[t]:n}}return n.set=_,n.get=function(t){return r(t,!1)},n.getJSON=function(t){return r(t,!0)},n.remove=function(e,a){_(e,"",t(a,{expires:-1}))},n.defaults={},n.withConverter=a,n}(function(){})})},Ntt2:function(t,e,a){"use strict";var i={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"contextmenu__text__item",class:["contextmenu__text__item--"+this.prop__type,this.prop__hasIcon?"contextmenu__text__item--hasIcon":""]},[e("div",{staticClass:"contextmenu__text__item__left"},[this.prop__href?[e("a",{staticClass:"contextmenu__text__item__text",attrs:{href:this.prop__href,target:this.prop__newTarget?"_blank":"self"}},[this._t("default")],2)]:[e("span",{staticClass:"contextmenu__text__item__text"},[this._t("default")],2)]],2)])},staticRenderFns:[]};e.a=i},OJKz:function(t,e,a){t.exports=a.p+"img/2317178779e3aaefa67276e4710311ad.svg"},PRlJ:function(t,e,a){t.exports=a.p+"img/a1aa1e0d7ba717a5d34366291b2783ed.png"},RPN1:function(t,e,a){t.exports=a.p+"img/7e1d71f1ac41517c79c0c86182892b2c.svg"},SmEZ:function(t,e,a){t.exports=a.p+"img/53573baa01a12203d33b985fd7d419a5.svg"},bW2G:function(t,e){},eaRq:function(t,e){},f4c6:function(t,e){},jiHk:function(t,e){},kFkI:function(t,e,a){"use strict";var i={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"contextmenu__item",class:{"contextmenu__item--disabled":t.prop__disabled,"contextmenu__item--big":t.prop__big,"contextmenu__item--divided":t.prop__divider}},[t.prop__href?a("a",{staticClass:"contextmenu__item__link",attrs:{href:t.prop__href,target:"_blank"}},[t._t("default")],2):a("div",{on:{click:t.method__handleClick}},[t._t("default")],2)])},staticRenderFns:[]};e.a=i},lwFS:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("Hv9V"),n=a.n(i),o=a("mVCI");var _=function(t){a("eaRq")},r=a("VU/8")(n.a,o.a,_,"data-v-4c80585e",null);e.default=r.exports},mVCI:function(t,e,a){"use strict";var i={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"check__item"},[i("div",{staticClass:"check__item__left"},[t.prop__iconType?i("div",{staticClass:"check__item__icon__box"},["markdown"===t.prop__iconType?i("img",{staticClass:"check__item__icon check__item__icon--markdown",attrs:{src:a("2lnk")}}):t._e(),t._v(" "),"text"===t.prop__iconType?i("img",{staticClass:"check__item__icon check__item__icon--text",attrs:{src:a("RPN1")}}):t._e(),t._v(" "),"draw"===t.prop__iconType?i("img",{staticClass:"check__item__icon check__item__icon--draw",attrs:{src:a("BPtI")}}):t._e(),t._v(" "),"mindmap"===t.prop__iconType?i("img",{staticClass:"check__item__icon check__item__icon--mindmap",attrs:{src:a("Bcrs")}}):t._e()]):t._e(),t._v(" "),i("span",{staticClass:"check__item__text"},[t._v(t._s(t.prop__text))])]),t._v(" "),t.prop__configType?["config"===t.prop__configType?i("span",{staticClass:"check__item__right check__item__right--config",on:{click:function(e){e.stopPropagation(),t.method__onConfigClick(e)}}},[i("img",{staticClass:"check__item__right__img",attrs:{src:a("SmEZ")}})]):t._e(),t._v(" "),"exchange"===t.prop__configType?i("span",{staticClass:"check__item__right check__item__right--config",on:{click:function(e){e.stopPropagation(),t.method__onConfigClick(e)}}},[i("img",{staticClass:"check__item__right__img",attrs:{src:a("6lz8")}})]):t._e()]:t._e(),t._v(" "),i("span",{directives:[{name:"show",rawName:"v-show",value:t.prop__checked,expression:"prop__checked"}],staticClass:"check__item__right check__item__right--checked"},[i("img",{staticClass:"check__item__right__img",attrs:{src:a("At5a")}})])],2)},staticRenderFns:[]};e.a=i},rihc:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("yiL6"),n=a.n(i),o=a("Ntt2");var _=function(t){a("f4c6")},r=a("VU/8")(n.a,o.a,_,"data-v-a5eaf672",null);e.default=r.exports},sava:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{prop__divider:{type:Boolean,default:!1},prop__disabled:{type:Boolean,default:!1},prop__big:{type:Boolean,default:!1},prop__href:{type:String,default:""}},data:function(){return{}},methods:{method__handleClick:function(t){this.prop__disabled||this.$emit("click",this,t)}}}},v35v:function(t,e,a){"use strict";var i={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{directives:[{name:"show",rawName:"v-show",value:t.computed__showHeader,expression:"computed__showHeader"}],staticClass:"layout__header J__LayoutHeader",class:["layout__header--"+t.prop__current,"layout__header--theme-"+t.computed__theme]},["language"===t.data__curContextType?[i("Contextmenu",{key:"key__userSubList",ref:"ref__userSubList",attrs:{prop__style:t.data__language__contextMenuStyle},on:{hide:function(e){t.data__curContextType=""}}},t._l(t.data__languageList,function(e,a){return i("ContextmenuItem",{key:a,attrs:{prop__divider:a!==t.data__languageList.length-1},on:{click:function(a){t.method__setLanguage(e.val)}}},[i("ContextmenuCheck",{attrs:{prop__text:e.text,prop__checked:t.data__curLanguage===e.val}})],1)}))]:t._e(),t._v(" "),"user"===t.data__curContextType?[i("Contextmenu",{key:"key__userSubList",ref:"ref__userSubList",attrs:{prop__style:t.data__user__contextMenuStyle},on:{hide:function(e){t.data__curContextType=""}}},[t.computed__accountLoginData__afterResulted&&t.computed__accountLoginData__afterResulted.builtin?[i("ContextmenuItem",{on:{click:t.async__method__logout}},[i("ContextmenuText",[t._v(t._s(t.$t("account__logout")))])],1)]:void 0],2)]:t._e(),t._v(" "),i("div",{staticClass:"layout__header__mod layout__header__mod--left"},[i("a",{staticClass:"layout__header__item layout__header__item--left__logo",attrs:{href:t.method__getPageUrl(t.data__env__isPcNative?"note":"index")}},[i("img",{staticClass:"logo__img",attrs:{src:a("PRlJ")}}),t._v(" "),i("span",{staticClass:"logo__text",class:["logo__text--"+t.computed__theme]},[t._v(t._s(t.method__upperCaseFirstLetter(t.data__productName)))])]),t._v(" "),t.prop__showToggleSidebar?i("span",{staticClass:"layout__header__item layout__header__item--left--toggler J__ToggleSidebar",class:{"layout__header__item--left--toggler--collapsed":!t.prop__spreadMenuLeft,"layout__header__item--left--toggler--uncollapsed":t.prop__spreadMenuLeft},attrs:{title:t.$t("toggleSidebar")+"(cmd 1)"},on:{click:t.method__toggleSidebar}},[i("i",{staticClass:"layout__header__item--left--toggler__contentline"}),t._v(" "),i("i",{staticClass:"layout__header__item--left--toggler__contentline"}),t._v(" "),i("i",{staticClass:"layout__header__item--left--toggler__contentline"})]):t._e()]),t._v(" "),i("div",{staticClass:"layout__header__mod layout__header__mod--center"}),t._v(" "),i("div",{staticClass:"layout__header__mod layout__header__mod--right"},[i("div",{staticClass:"layout__header__item layout__header__item--right layout__header__item--right--formobile",class:{"layout__header__item--right--popuped":"language"===t.data__curContextType},on:{click:function(e){e.stopPropagation(),t.method__onLanguageClick(e)}}},["Dark"===t.computed__theme?i("img",{staticClass:"layout__header__item--right__icon layout__header__item--right__icon--language",attrs:{src:a("vBRf")}}):t._e(),t._v(" "),"Light"===t.computed__theme?i("img",{staticClass:"layout__header__item--right__icon layout__header__item--right__icon--language",attrs:{src:a("OJKz")}}):t._e(),t._v("\n\n            "+t._s(t.$t("language__"+t.data__curLanguage))+"\n        ")]),t._v(" "),t._e(),t._v(" "),t.computed__accountLoginData__afterResulted&&!t.data__env__isPcNative?[t.computed__accountLoginData__afterResulted.builtin?[i("div",{staticClass:"layout__header__split"}),t._v(" "),i("div",{staticClass:"layout__header__item layout__header__item--right",class:{"layout__header__item--right--popuped":"user"===t.data__curContextType},on:{click:function(e){e.stopPropagation(),t.method__onUserClick(e)}}},["Dark"===t.computed__theme?[i("img",{staticClass:"layout__header__item--right__icon",attrs:{src:a("0b8E")}})]:"Light"===t.computed__theme?[i("img",{staticClass:"layout__header__item--right__icon",attrs:{src:a("2oi7")}})]:t._e(),t._v("\n\n                    "+t._s(t.computed__accountLoginData__afterResulted.builtin.userName)+"\n                ")],2)]:t._e()]:t._e()],2),t._v(" "),i("div",{staticClass:"layout__header__mod layout__header__mod--right--mobile"},[i("div",{staticClass:"layout__header__item layout__header__item--right layout__header__item--right--formobile",class:{"layout__header__item--right--popuped":"language"===t.data__curContextType},on:{click:function(e){e.stopPropagation(),t.method__onLanguageClick(e)}}},[i("img",{staticClass:"layout__header__item--right__icon layout__header__item--right__icon--language",attrs:{src:a("vBRf")}}),t._v("\n            "+t._s(t.$t("language__"+t.data__curLanguage))+"\n        ")])])],2)},staticRenderFns:[]};e.a=i},vBRf:function(t,e,a){t.exports=a.p+"img/6b6de82802de2ce3caddb3ec1d820a31.svg"},yiL6:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{prop__hasIcon:{type:Boolean,default:!1},prop__type:{type:String,default:"normal"},prop__href:{type:String,default:""},prop__newTarget:{type:Boolean,default:!1}}}}});
webpackJsonp([30],{"3mxA":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i("tCph"),o=i.n(n),a=i("ah4o");var d=function(t){i("l8ut")},l=i("VU/8")(o.a,a.a,d,"data-v-03eab725",null);e.default=l.exports},ah4o:function(t,e,i){"use strict";var n={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.data__visible?i("ul",{ref:"contextmenu",class:["contextmenu","contextmenu--default"],style:t.prop__style,on:{click:function(e){e.stopPropagation(),t.method__onClick(e)}}},[t._t("default")],2):t._e()},staticRenderFns:[]};e.a=n},l8ut:function(t,e){},tCph:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n,o=i("dz2s"),a=(n=o)&&n.__esModule?n:{default:n};e.default={props:{prop__style:{type:Object,default:{}}},data:function(){return{data__visible:!0,data__disableClickActor:!1}},watch:{data__visible:function(t){},prop__style:function(){(0,a.default)(this.$el).appendTo((0,a.default)(document.body))}},mounted:function(){document.body.addEventListener("click",this.method__handleBodyClick),document.body.appendChild(this.$el)},beforeDestroy:function(){this.data__disableClickActor=!0,document.body.removeEventListener("click",this.method__handleBodyClick),this.$el&&this.$el.parentNode&&this.$el.parentNode.removeChild(this.$el)},methods:{method__onClick:function(){this.$emit("hide"),this.$emit("hideAfterAction"),this.data__visible=!1,this.data__disableClickActor=!0},method__api__getStyle:function(){var t=(0,a.default)(this.$refs.contextmenu);return{width:t.width(),height:t.height()}},method__handleBodyClick:function(t){this.$el.contains(t.target)||this.data__disableClickActor||(this.$emit("hide"),this.$emit("hideAfterBlur"),this.data__disableClickActor=!0,this.data__visible=!1)}}}}});
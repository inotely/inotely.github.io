webpackJsonp([9],{"/ZGx":function(e,t,_){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=l(_("Xxa5")),a=l(_("exGp")),n=l(_("woOf")),d=l(_("dEWB")),r=l(_("b/4S")),i=l(_("0407")),s=_("8Kg6");function l(e){return e&&e.__esModule?e:{default:e}}var u=r.default.method__local__getRootNotePath(),c=r.default.method__local__getRootNotePath();t.default={props:["prop__treeArr","prop__showFileInFolder","prop__quickKey","prop__getRootTreeArrStatus"],components:{ModFolder:function(){return _.e(18).then(_.bind(null,"LVb3"))},ModTag:function(){return _.e(31).then(_.bind(null,"gg01"))},Contextmenu:function(){return _.e(30).then(_.bind(null,"3mxA"))},ContextmenuItem:function(){return _.e(28).then(_.bind(null,"uE33"))},ContextmenuGroup:function(){return _.e(29).then(_.bind(null,"s6tb"))},ContextmenuSplit:function(){return _.e(27).then(_.bind(null,"M0rj"))},ContextmenuSubmenu:function(){return _.e(26).then(_.bind(null,"moGO"))},ContextmenuCheck:function(){return _.e(20).then(_.bind(null,"P4Xh"))},ContextmenuText:function(){return _.e(25).then(_.bind(null,"bOf1"))},ModMenuLeftLogin:function(){return _.e(23).then(_.bind(null,"RECk"))},ModModalSignin:function(){return _.e(19).then(_.bind(null,"o0SS"))},ModModalDonate:function(){return _.e(21).then(_.bind(null,"RfOG"))}},data:function(){return{data__modal__controller:{modalName:"",modalOptions:null},data__env__isPcNative:r.default.env__isPcNative,data__localTrashFolderPath:r.default.method__local__getTrashFolderPath(),data__cloudTrashFolderPath:r.default.method__cloud__getTrashFolderPath(),data__localRootFolderPath:u,data__cloudRootFolderPath:c,data__enableCmdDeleteFolder:!1,data__newAddFolderName:"",data__addFolderErrType:"",data__isAddingFolder:!1,data__disableAddFolderBlurActor:!1,data__oldSelectedFolderNode:null,data__modShowTypeSpread:!0,data__modFoldersSpread:!0,data__showTypeList:d.default.cloneDeep(r.default.defaultShowFileTypeList),data__saveMode:r.default.saveMode,data__modeList:[{name:r.default.saveMode.github,icon:"github"},{name:r.default.saveMode.offline,icon:"offline"}],data__modFolderTop:0,data__modUser__showSubList:!1,data__languageList:r.default.languageList,data__curLanguage:r.default.curLanguage,data__subList__contextmenu__style:{},data__folder__spreadDelayTimer:null,data__modHeight:40}},watch:{data__modShowTypeSpread:function(){var e=this;this.$nextTick(function(){e.method__setFolderPosition()})}},computed:(0,n.default)({computed__folderLoading:function(){return"pending"===this.prop__getRootTreeArrStatus},computed__limited:function(){return this.computed__limitInfo&&-1!==this.computed__limitInfo.fileLimit&&this.computed__limitInfo.limited},computed__curSaveModeInfo:function(){for(var e=null,t=this.data__modeList.length,_=0;_<t;_++)if(this.data__modeList[_].name===this.computed__saveMode){e=this.data__modeList[_];break}return e||this.data__modeList[t-1]}},(0,s.mapState)({computed__curContextmenuType__global:function(e){return e.curContextmenuType__global},computed__rootFolderNode:function(e){return e.rootFolderNode},computed__saveMode:function(e){return e.saveMode},computed__limitInfo:function(e){return e.limitInfo},computed__accountLoginData__afterResulted:function(e){return e.accountLoginInfo.resulted?e.accountLoginInfo.data:null},computed__storageLoginData__afterResulted:function(e){return e.storageLoginInfo.resulted?e.storageLoginInfo.data:null},computed__menuDragging:function(e){return e.menuDragging},computed__isNetworkEnabled:function(e){return e.isNetworkEnabled},computed__selectedFolderNode:function(e){return e.selectedFolderNode},computed__selectedFileNode:function(e){return e.selectedFileNode},computed__common__dragFromTarget:function(e){return e.dragFromTarget},computed__folder__dragOverTarget:function(e){return e.dragOverTarget},computed__folder__dragToTarget:function(e){return e.dragToTarget}}),{computed__curShowedTypeNum:function(){var e=this.data__showTypeList,t=0;return e.forEach(function(e){e[1]&&t++}),t}}),mounted:function(){this.method__openTargetSaveModeModal__fromStorage(),this.method__watchCmdDeleteFolderEnabled(),this.method__setShowFileTypeRegByShowTypeList(),this.method__setFolderPosition()},methods:{method__upperCaseFirstLetter:function(e){return e[0].toUpperCase()+e.slice(1)},method__openTargetSaveModeModal__fromStorage:function(){var e=r.default.method__localstorage__getOne(r.default.localStorage__key__openTargetSaveModeModal),t=null;try{t=JSON.parse(e)}catch(e){}t&&parseInt(t.expireTime+"")>=Date.now()&&(0,n.default)(this.data__modal__controller,{modalName:"modal__signin__"+t.saveMode}),r.default.method__localstorage__removeOne(r.default.localStorage__key__openTargetSaveModeModal)},method__getPageUrl:function(e){return r.default.method__getPageUrl(e)},async__method__logout:function(){var e=this;return(0,a.default)(o.default.mark(function t(){return o.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r.default.async__method__unlogin(e);case 2:case"end":return t.stop()}},t,e)}))()},method__setFolderPosition:function(){var e=this,t=[$(".J__ModHome"),$(".J__ModContact"),$(".J__ModMode"),$(".J__ModIntro"),$(".J__ModLanguage"),$(".J__ModSearch"),$(".J__ModTrash")],_=parseInt($(".J__MenuLeftContent").css("padding-top").replace("px",""))||0;t.map(function(t){if(t.length){var o=e.data__modHeight,a=parseInt(t.css("margin-top").replace("px",""))||0,n=parseInt(t.css("margin-bottom").replace("px",""))||0;_+=(o||0)+a+n}}),this.data__modFolderTop=_+"px"},method__onRefreshRootTreeArrClick:function(){this.$emit("refreshRootTreeArr")},method__toggleShowType:function(e,t){var _=this;this.$set(e,1,!e[1]);var o=setTimeout(function(){clearTimeout(o),_.method__setShowFileTypeRegByShowTypeList()},0)},method__switchSaveMode:function(e){var t=this,_=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=_.forceShowModals,d=void 0!==n&&n,i=_.ignored,s=void 0!==i&&i;return(0,a.default)(o.default.mark(function _(){var n,i,l;return o.default.wrap(function(_){for(;;)switch(_.prev=_.next){case 0:if(!s){_.next=2;break}return _.abrupt("return");case 2:if(n=function(){var _=(0,a.default)(o.default.mark(function _(){return o.default.wrap(function(_){for(;;)switch(_.prev=_.next){case 0:return r.default.method__localstorage__setOne(r.default.localstorage__key__saveMode,e),_.next=3,r.default.async__method__initSaveModeInStore(t,e);case 3:t.$emit("refreshRootTreeArr");case 4:case"end":return _.stop()}},_,t)}));return function(){return _.apply(this,arguments)}}(),i=function(){var _=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];t.data__modal__controller={modalName:"modal__signin__"+e,modalOptions:{hideEntries:_}}},!d){_.next=8;break}i([]),_.next=28;break;case 8:_.t0=e,_.next=_.t0===r.default.saveMode.github?11:_.t0===r.default.saveMode.offline?21:_.t0===r.default.saveMode.notely?24:27;break;case 11:return _.next=13,r.default.method__getGithubDataFromLoginData(t);case 13:if(!((l=_.sent)&&l.token&&l.repoList&&l.repoList.length)){_.next=19;break}return _.next=17,n();case 17:_.next=20;break;case 19:i([]);case 20:return _.abrupt("break",28);case 21:return _.next=23,n();case 23:return _.abrupt("break",28);case 24:return _.next=26,n();case 26:case 27:return _.abrupt("break",28);case 28:case"end":return _.stop()}},_,t)}))()},method__setShowFileTypeRegByShowTypeList:function(){var e={};this.data__showTypeList.forEach(function(t){e[t[0]]=t[1]}),this.$store.dispatch("setShowFileTypeList",d.default.cloneDeep(this.data__showTypeList))},method__onDragging:function(e){},method__onDragleave:function(e){},method__removeOutsideFolderFromList:function(e){this.$emit("removeOutsideFolderFromList",e)},method__disableBlurActor:function(){this.data__disableAddFolderBlurActor=!0,this.data__disableEditFolderBlurActor=!0},method__enableBlurActorLater:function(){var e=this,t=setTimeout(function(){e.data__disableAddFolderBlurActor=!1,e.data__disableEditFolderBlurActor=!1,clearTimeout(t)},500)},method__getI18nText:function(e){return r.default.method__getI18nText(e)},method__checkAddFolderValid:function(e){if(27==e.keyCode)return this.method__disableBlurActor(),this.method__enableBlurActorLater(),void this.method__cancelAdding();if(/\//.test(this.data__newAddFolderName))this.data__addFolderErrType="wrongPath";else if(this.data__newAddFolderName)if(this.data__newAddFolderName.length>=50)this.data__addFolderErrType="tooLong";else{var t=-1!==this.prop__treeArr.map(function(e){return e.isInLocalOutsideFolder?"":e.name}).indexOf(this.data__newAddFolderName);this.data__addFolderErrType=t?"exists":""}else this.data__addFolderErrType=""},method__onRootFolderClick:function(){},async__method__onConfirmAddFolder:function(){var e=this;return(0,a.default)(o.default.mark(function t(){var _,a,n,d,s,l;return o.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.data__addFolderErrType&&e.data__newAddFolderName){t.next=2;break}return t.abrupt("return");case 2:return e.method__disableBlurActor(),_=r.default.method__path__join(e.data__localRootFolderPath,e.data__newAddFolderName),a=_.replace(e.data__localRootFolderPath,""),t.next=7,r.default.async__method__generateFolderNode({relPath:a,parentFolderId:r.default.NODE__ID__ROOT,localBaseFolderPath:e.data__localRootFolderPath,readLocalFilesNumber:!1,saveMode:e.computed__saveMode});case 7:return n=t.sent,t.next=10,i.default.createFolder(n,{$vm:e});case 10:d=t.sent,s=d.success,l=d.data,s&&(n.id=l.id,e.async__method__refreshMenuAfterAddingFolder(n)),e.method__cancelAdding(),e.method__enableBlurActorLater();case 16:case"end":return t.stop()}},t,e)}))()},method__onBlurAddFolder:function(){this.data__disableAddFolderBlurActor||(!this.data__addFolderErrType&&this.data__newAddFolderName?this.async__method__onConfirmAddFolder():this.method__cancelAdding())},async__method__refreshMenuAfterAddingFolder:function(e){var t=this;return(0,a.default)(o.default.mark(function _(){var a,n,d,i,s;return o.default.wrap(function(_){for(;;)switch(_.prev=_.next){case 0:return _.next=2,r.default.async__method__generateFolderNode({relPath:"/",parentFolderId:r.default.NODE__ID__PREROOT,localBaseFolderPath:t.data__localRootFolderPath,saveMode:t.computed__saveMode});case 2:a=_.sent,n=a.children.filter(function(e){return e.children}),d=-1,i=0,s=n.length;case 6:if(!(i<s)){_.next=13;break}if(r.default.method__path__normalizePath(n[i].relPath)!==r.default.method__path__normalizePath(e.localShowedAbsPath)){_.next=10;break}return d=i,_.abrupt("break",13);case 10:i++,_.next=6;break;case 13:-1!==d?t.prop__treeArr.splice(d,0,e):t.prop__treeArr.push(e),r.default.method__sort__node(t.prop__treeArr);case 15:case"end":return _.stop()}},_,t)}))()},method__refreshMenuAfterRemoving:function(e){var t=this.prop__treeArr.indexOf(e);this.prop__treeArr.splice(t,1)},method__cancelAdding:function(){this.data__isAddingFolder=!1,this.data__addFolderErrType=""},method__onRefreshFolderClick:function(){this.$emit("refreshRootTreeArr")},method__onModalStorageSwitchConfirm:function(){var e=this;return(0,a.default)(o.default.mark(function t(){return o.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:e.method__switchSaveMode(e.data__modal__controller.modalName),e.data__modal__controller.modalName="";case 2:case"end":return t.stop()}},t,e)}))()},method__onRemoveRootFolderClick__notHandling:function(){var e=this;return(0,a.default)(o.default.mark(function t(){return o.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:t.t0=e.computed__saveMode,t.next=t.t0===r.default.saveMode.github?3:6;break;case 3:return t.next=5,e.method__switchSaveMode(r.default.saveMode.github);case 5:case 6:return t.abrupt("break",7);case 7:case"end":return t.stop()}},t,e)}))()},method__onAddFolderClick:function(){var e=this;return(0,a.default)(o.default.mark(function t(){return o.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.computed__folderLoading){t.next=2;break}return t.abrupt("return");case 2:t.t0=e.computed__saveMode,t.next=t.t0===r.default.saveMode.github?5:8;break;case 5:return t.next=7,e.method__switchSaveMode(r.default.saveMode.github,{forceShowModals:!0});case 7:return t.abrupt("break",15);case 8:return e.data__isAddingFolder=!0,e.data__oldSelectedFolderNode=e.computed__selectedFolderNode,e.data__isAddingFolder=!0,e.data__addFolderErrType="",e.data__newAddFolderName="",e.$nextTick(function(){$(".J__add__root__folder__input").focus()}),t.abrupt("break",15);case 15:case"end":return t.stop()}},t,e)}))()},method__watchCmdDeleteFolderEnabled:function(){var e=this;$(document).on("click",function(t){r.default.method__dom__isChild(t.target,$("#J__folder__box")[0])?e.data__enableCmdDeleteFolder=!0:e.data__enableCmdDeleteFolder=!1,r.default.method__dom__isChild(t.target,$("#J__ModIntroRightSublist")[0])||(e.data__modUser__showSubList=!1)})},method__modIntro__triggerLogin:function(){this.$refs.ref__menuLeftLogin.method__goLogin()},async__method__subList__contextmenu__userInfo__logout:function(){var e=this;return(0,a.default)(o.default.mark(function t(){return o.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$refs.ref__menuLeftLogin.method__unloginClick();case 2:case"end":return t.stop()}},t,e)}))()},method__subList__contextmenu__language__setLanguage:function(e){var t=this;return(0,a.default)(o.default.mark(function _(){return o.default.wrap(function(_){for(;;)switch(_.prev=_.next){case 0:if(e!==t.data__curLanguage){_.next=4;break}return _.next=3,t.method__hideAllContextmenu();case 3:return _.abrupt("return");case 4:r.default.method__setLanguage(e),window.location.reload();case 6:case"end":return _.stop()}},_,t)}))()},method__hideAllContextmenu:function(){var e=this;return(0,a.default)(o.default.mark(function t(){return o.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$store.dispatch("setCurContextmenuType__global","");case 2:case"end":return t.stop()}},t,e)}))()},method__triggerSearch:function(){console.log("todo")},async__method__subList__contextmenu__hideAfterBlur:function(){var e=this;return(0,a.default)(o.default.mark(function t(){return o.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.method__hideAllContextmenu();case 2:case"end":return t.stop()}},t,e)}))()},async__method__subList__contextmenu__handler:function(e,t){var _=this;return(0,a.default)(o.default.mark(function a(){var n,d,r;return o.default.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:if(_.computed__curContextmenuType__global!==t){o.next=4;break}return o.next=3,_.method__hideAllContextmenu();case 3:return o.abrupt("return");case 4:return n=$(e.target).parents(".J__Mod"),$(".J_MenuLeft"),o.next=8,_.$store.dispatch("setCurContextmenuType__global",t);case 8:d=n.offset(),d.left,r=d.top,_.$nextTick(function(){_.data__subList__contextmenu__style={left:$(".J__Dragline").offset().left+2+"px",top:r+"px"}});case 10:case"end":return o.stop()}},a,_)}))()},method__folder__onDragEnter:function(e){this.computed__common__dragFromTarget&&(this.data__folder__lastDragTime=Date.now())},async__method__folder__onDragOver:function(e){var t=this;return(0,a.default)(o.default.mark(function e(){var _;return o.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t.computed__common__dragFromTarget){e.next=2;break}return e.abrupt("return");case 2:if(t.computed__folder__dragToTarget!=t.computed__rootFolderNode){e.next=4;break}return e.abrupt("return");case 4:return e.next=6,t.$store.dispatch("setDragToTarget",null);case 6:if("file"!==t.computed__common__dragFromTarget.type){e.next=8;break}return e.abrupt("return");case 8:if("/"!=r.default.method__path__getParentFolderPath(t.computed__common__dragFromTarget.relPath)){e.next=10;break}return e.abrupt("return");case 10:t.$store.dispatch("setDragOverTarget",t.computed__rootFolderNode),300,(_=Date.now())-t.data__folder__lastDragTime>=300&&(t.data__folder__lastDragTime=_,t.$store.dispatch("setDragToTarget",t.computed__rootFolderNode));case 14:case"end":return e.stop()}},e,t)}))()}}}},FJji:function(e,t){},JuAN:function(e,t,_){e.exports=_.p+"img/172ef37c78c55f3b2d1705ab227d67bd.svg"},LUjV:function(e,t){},P5GP:function(e,t,_){e.exports=_.p+"img/0a512e370a821f64bc8d7ba7db91c1e4.svg"},UdTs:function(e,t,_){e.exports=_.p+"img/ac9c88df72acca90cad780b44d82217d.svg"},VB4H:function(e,t,_){"use strict";var o={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{ref:"menu-left",staticClass:"menu-left J_MenuLeft",class:["menu-left--theme-"+e.$store.state.theme],on:{dragover:e.method__onDragging,dragleave:e.method__onDragleave}},[o("div",{staticClass:"menu-left__content J__MenuLeftContent"},[e.computed__curContextmenuType__global?["g__contextmenutype__contentShadow__modIntro"===e.computed__curContextmenuType__global?o("Contextmenu",{ref:"ref__mod__subList",attrs:{prop__style:e.data__subList__contextmenu__style},on:{hide:e.async__method__subList__contextmenu__hideAfterBlur}},[[e.computed__accountLoginData__afterResulted&&e.computed__accountLoginData__afterResulted.notely?o("ContextmenuItem",{on:{click:e.async__method__subList__contextmenu__userInfo__logout}},[e._v("\n                        "+e._s(e.$t("account__logout"))+"\n                    ")]):[o("ContextmenuItem",{on:{click:e.method__modIntro__triggerLogin}},[o("ContextmenuText",[e._v(e._s(e.$t("account__signin")))])],1),e._v(" "),o("ContextmenuItem",{on:{click:e.method__modIntro__triggerLogin}},[o("ContextmenuText",[e._v(e._s(e.$t("account__signup")))])],1)]]],2):e._e(),e._v(" "),"g__contextmenutype__contentShadow__modUser"===e.computed__curContextmenuType__global?o("Contextmenu",{ref:"ref__mod__subList",attrs:{prop__style:e.data__subList__contextmenu__style},on:{hide:e.async__method__subList__contextmenu__hideAfterBlur}},[[e.computed__accountLoginData__afterResulted&&e.computed__accountLoginData__afterResulted.notely?o("ContextmenuItem",{attrs:{prop__divider:!0},on:{click:e.async__method__logout}},[o("ContextmenuText",[e._v(e._s(e.$t("account__logout")))])],1):o("ContextmenuItem",{attrs:{prop__divider:!0},on:{click:function(t){e.method__switchSaveMode(e.data__saveMode.notely,{forceShowModals:!0})},hide:e.async__method__subList__contextmenu__hideAfterBlur}},[o("ContextmenuText",[e._v(e._s(e.$t("account__signin")))])],1)],e._v(" "),o("ContextmenuItem",[o("ContextmenuText",{attrs:{prop__href:e.method__getPageUrl("home")}},[e._v(e._s(e.$t("goto__kmind__home")))])],1)],2):e._e(),e._v(" "),"g__contextmenutype__contentShadow__modContact"===e.computed__curContextmenuType__global?o("Contextmenu",{ref:"ref__mod__subList",attrs:{prop__style:e.data__subList__contextmenu__style},on:{hide:e.async__method__subList__contextmenu__hideAfterBlur}},[o("ContextmenuItem",{on:{click:function(t){e.data__modal__controller.modalName="modal__donate"}}},[o("ContextmenuText",{attrs:{prop__hasIcon:!0}},[o("img",{attrs:{src:_("pDXK")}}),e._v(e._s(e.$t("donate"))+"\n                    ")])],1),e._v(" "),o("ContextmenuItem",{attrs:{prop__href:"https://github.com/hoperyy"}},[o("ContextmenuText",{attrs:{prop__hasIcon:!0}},[o("img",{attrs:{src:_("JuAN")}}),e._v(e._s(e.$t("author"))+"\n                    ")])],1),e._v(" "),o("ContextmenuItem",{attrs:{prop__href:"https://github.com/brainsly/notely/issues"}},[o("ContextmenuText",{attrs:{prop__hasIcon:!0}},[o("img",{attrs:{src:_("P5GP")}}),e._v(e._s(e.$t("feedback"))+"\n                    ")])],1)],1):e._e(),e._v(" "),"g__contextmenutype__contentShadow__modMode"===e.computed__curContextmenuType__global?o("Contextmenu",{ref:"ref__mod__subList",attrs:{prop__style:e.data__subList__contextmenu__style},on:{hide:e.async__method__subList__contextmenu__hideAfterBlur}},e._l(e.data__modeList,function(t,_){return o("ContextmenuItem",{key:"key__subList__contextmenu__modMode__"+_,attrs:{prop__big:!0,prop__divider:_!==e.data__modeList.length-1},on:{click:function(_){e.method__switchSaveMode(t.name,{ignored:e.computed__saveMode===t.name})}}},[o("ContextmenuCheck",{attrs:{prop__text:e.method__upperCaseFirstLetter(e.method__getI18nText("save__"+t.name)),prop__configType:e.computed__storageLoginData__afterResulted&&t.name!==e.data__saveMode.offline?"exchange":"",prop__checked:e.computed__saveMode===t.name},on:{configClick:function(_){e.async__method__subList__contextmenu__hideAfterBlur()&&e.method__switchSaveMode(t.name,{forceShowModals:!0})}}}),e._v(" "),t.desc?o("ContextmenuText",{attrs:{prop__type:"small"}},[e._v(e._s(e.$t(t.desc)))]):e._e()],1)})):e._e(),e._v(" "),"g__contextmenutype__contentShadow__modShowType"===e.computed__curContextmenuType__global?o("Contextmenu",{ref:"ref__mod__subList",attrs:{prop__style:e.data__subList__contextmenu__style},on:{hide:e.async__method__subList__contextmenu__hideAfterBlur}},e._l(e.data__showTypeList,function(t,_){return o("ContextmenuItem",{key:"key__subList__contextmenu__modShowType__"+_,attrs:{prop__divider:_!==e.data__showTypeList.length-1},on:{click:function(o){e.method__toggleShowType(t,_)}}},[o("ContextmenuCheck",{attrs:{prop__iconType:t[0],prop__text:e.method__getI18nText(t[0]),prop__checked:t[1]}})],1)})):e._e(),e._v(" "),"g__contextmenutype__contentShadow__modLanguage"===e.computed__curContextmenuType__global?o("Contextmenu",{ref:"ref__mod__subList",attrs:{prop__style:e.data__subList__contextmenu__style},on:{hide:e.async__method__subList__contextmenu__hideAfterBlur}},e._l(e.data__languageList,function(t,_){return o("ContextmenuItem",{key:"key__subList__contextmenu__modLanguage__"+_,attrs:{prop__divider:_!==e.data__languageList.length-1},on:{click:function(_){e.method__subList__contextmenu__language__setLanguage(t.val)}}},[o("ContextmenuCheck",{attrs:{prop__text:t.text,prop__checked:t.val===e.data__curLanguage}})],1)})):e._e()]:e._e(),e._v(" "),e.data__env__isPcNative?e._e():o("div",{staticClass:"mod J__Mod J__ModHome",style:{height:e.data__modHeight+"px"}},[o("div",{staticClass:"mod__title",class:{"mod__title--notdragging":!e.computed__menuDragging,"mod__title--active":"g__contextmenutype__contentShadow__modUser"===e.computed__curContextmenuType__global}},[o("a",{staticClass:"mod__title__left",attrs:{title:e.$t("goto__kmind__home"),href:e.method__getPageUrl("home"),target:"_blank"}},[o("span",{staticClass:"mod__icon",class:["mod__icon--logo-notely"]}),e._v(" "),o("div",{staticClass:"mod__title__text g__ellipsis1"},[e._v(e._s(e.$t("goto__kmind__home")))])])])]),e._v(" "),o("div",{staticClass:"mod J__Mod J__ModContact",style:{height:e.data__modHeight+"px"}},[o("div",{staticClass:"mod__title",class:{"mod__title--notdragging":!e.computed__menuDragging,"mod__title--active":"g__contextmenutype__contentShadow__modContact"===e.computed__curContextmenuType__global},on:{click:function(t){t.stopPropagation(),e.async__method__subList__contextmenu__handler(t,"g__contextmenutype__contentShadow__modContact")}}},[o("div",{staticClass:"mod__title__left"},[o("span",{staticClass:"mod__icon",class:["mod__icon--logo-contact"]}),e._v(" "),o("div",{staticClass:"mod__title__text g__ellipsis1"},[e._v(e._s(e.$t("contactAndDonate")))])]),e._v(" "),e._m(0)])]),e._v(" "),o("div",{staticClass:"mod J__Mod J__ModMode",style:{height:e.data__modHeight+"px"}},[o("div",{staticClass:"mod__title",class:{"mod__title--notdragging":!e.computed__menuDragging,"mod__title--active":"g__contextmenutype__contentShadow__modMode"===e.computed__curContextmenuType__global},on:{click:function(t){t.stopPropagation(),e.async__method__subList__contextmenu__handler(t,"g__contextmenutype__contentShadow__modMode")}}},[o("div",{staticClass:"mod__title__left"},[o("span",{staticClass:"mod__icon mod__icon--mode",class:["mod__icon--mode--"+e.computed__curSaveModeInfo.icon]}),e._v(" "),o("div",{staticClass:"mod__title__text g__ellipsis1"},[e._v("\n                       "+e._s(e.method__upperCaseFirstLetter(e.$t("save__tail"))+" ( "+e.method__upperCaseFirstLetter(e.$t("save__"+e.computed__curSaveModeInfo.name))+" )")+"\n                    ")])]),e._v(" "),e._m(1)])]),e._v(" "),o("div",{staticClass:"mod mod--language J__Mod J__ModLanguage",style:{height:e.data__modHeight+"px"}},[o("div",{staticClass:"mod__title",class:{"mod__title--notdragging":!e.computed__menuDragging,"mod__title--active":"g__contextmenutype__contentShadow__modLanguage"===e.computed__curContextmenuType__global},on:{click:function(t){t.stopPropagation(),e.async__method__subList__contextmenu__handler(t,"g__contextmenutype__contentShadow__modLanguage")}}},[o("div",{staticClass:"mod__title__left"},[[o("span",{staticClass:"mod__icon mod__icon--language"}),e._v(" "),o("div",{staticClass:"mod__title__text g__ellipsis1"},[e._v(e._s(e.$t("language__"+e.data__curLanguage)))])]],2),e._v(" "),e._m(2)])]),e._v(" "),o("div",{directives:[{name:"show",rawName:"v-show",value:e.data__modFolderTop,expression:"data__modFolderTop"}],staticClass:"mod J__Mod mod--folder",style:{top:e.data__modFolderTop}},[o("div",{staticClass:"mod__title",class:{"mod__title--loading":e.computed__folderLoading,"mod__title--notdragging":!e.computed__menuDragging,"mod__title--selected":e.computed__selectedFolderNode&&e.computed__selectedFolderNode.localShowedAbsPath==e.data__localRootFolderPath},on:{click2:function(t){e.data__modFoldersSpread=!e.data__modFoldersSpread}}},[o("div",{staticClass:"mod__title__left"},[o("span",{staticClass:"mod__icon mod__icon--directory"}),e._v(" "),o("div",{staticClass:"mod__title__text g__ellipsis1",on:{click:e.method__onRootFolderClick}},[e._v(e._s(e.$t("dirs__name")))])]),e._v(" "),o("div",{staticClass:"mod__title__right"},[o("span",{staticClass:"mod__title__right__item mod__title__right__item--hoverable",on:{click:function(t){t.stopPropagation(),e.method__onRefreshFolderClick(t)}}},[o("img",{staticClass:"mod__title__right__item__img mod__title__right__item__img--refresh",class:{g__run__circle:e.computed__folderLoading},attrs:{src:_("UdTs"),title:e.$t("dir__refresh")}})]),e._v(" "),e.computed__limited?e._e():o("span",{staticClass:"mod__title__right__item mod__title__right__item--hoverable mod__title__right__item--addfolder",attrs:{title:e.$t("dir__add")},on:{click:function(t){t.stopPropagation(),e.method__onAddFolderClick(t)}}})])]),e._v(" "),o("div",{staticClass:"mod__content mod__content--folder",class:{"mod__content--spread":e.data__modFoldersSpread,"mod__content--folders-not-showing-all-types":e.computed__curShowedTypeNum!==e.data__showTypeList.length,"mod__content--draggingTo":e.computed__folder__dragToTarget&&e.computed__folder__dragToTarget===e.computed__rootFolderNode},style:{"margin-bottom":e.computed__limited?"100px":0},attrs:{id:"J__folder__box"},on:{dragenter:function(t){t.stopPropagation(),e.method__folder__onDragEnter(t)},dragover:function(t){t.stopPropagation(),e.async__method__folder__onDragOver(t)},contextmenu:function(e){e.stopPropagation()}}},["pending"===e.prop__getRootTreeArrStatus?[o("div",{staticClass:"mod__content--folder__disabled"})]:"rejected"===e.prop__getRootTreeArrStatus?[o("div",{staticClass:"mod__content--folder__fail"},[o("span",{staticClass:"mod__content--folder__fail__text"},[e._v(e._s(e.$t("directory__loadFailed")))]),e._v(" "),o("span",{staticClass:"mod__content--folder__fail__button",on:{click:function(t){t.stopPropagation(),e.method__onRefreshFolderClick(t)}}},[e._v(e._s(e.$t("directory__reload")))])])]:[e.data__isAddingFolder?[o("div",{staticClass:"folders folders--adding"},[o("div",{staticClass:"folder"},[o("div",{staticClass:"foldername"},[o("div",{staticClass:"foldername__left"},[o("span",{staticClass:"foldername__icon"}),e._v(" "),o("span",{staticClass:"name__input__line",class:{"name__input__line--hidden":e.data__addFolderErrType}}),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.data__newAddFolderName,expression:"data__newAddFolderName"}],staticClass:"name__input J__add__root__folder__input",domProps:{value:e.data__newAddFolderName},on:{keyup:[function(t){t.preventDefault(),e.method__checkAddFolderValid(t)},function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13))return null;e.async__method__onConfirmAddFolder(t)}],blur:e.method__onBlurAddFolder,input:function(t){t.target.composing||(e.data__newAddFolderName=t.target.value)}}}),e._v(" "),e.data__addFolderErrType?o("div",{staticClass:"name__input__error"},[e._v(e._s(e.$t("dir__input__errMsg."+e.data__addFolderErrType)))]):e._e()])])])])]:e._e(),e._v(" "),o("ModFolder",{attrs:{prop__treeArr:e.prop__treeArr,prop__showFileInFolder:e.prop__showFileInFolder,prop__quickKey:e.prop__quickKey,prop__enableCmdDeleteFolder:e.data__enableCmdDeleteFolder},on:{refreshRootListAfterRemoving:e.method__refreshMenuAfterRemoving,removeOutsideFolderFromList:e.method__removeOutsideFolderFromList,removeRootFolderClick__notHandling:e.method__onRemoveRootFolderClick__notHandling}})]],2)])],2),e._v(" "),[/modal__signin__/.test(e.data__modal__controller.modalName)?[o("ModModalSignin",{attrs:{prop__showConfirm:!1,prop__chosenFormType:e.data__modal__controller.modalName,prop__options:e.data__modal__controller.modalOptions},on:{confirm:e.method__onModalStorageSwitchConfirm,cancel:function(t){e.data__modal__controller.modalName=""}}})]:e._e(),e._v(" "),/modal__donate/.test(e.data__modal__controller.modalName)?[o("ModModalDonate",{attrs:{prop__showConfirm:!1},on:{confirm:function(t){e.data__modal__controller.modalName=""},cancel:function(t){e.data__modal__controller.modalName=""}}})]:e._e()]],2)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"mod__title__right"},[t("span",{staticClass:"mod__title__right__item"},[t("img",{staticClass:"mod__title__right__item__img mod__title__right__item__img--types",attrs:{src:_("twxr")}})])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"mod__title__right"},[t("span",{staticClass:"mod__title__right__item"},[t("img",{staticClass:"mod__title__right__item__img mod__title__right__item__img--types",attrs:{src:_("twxr")}})])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"mod__title__right"},[t("span",{staticClass:"mod__title__right__item"},[t("img",{staticClass:"mod__title__right__item__img mod__title__right__item__img--types",attrs:{src:_("twxr")}})])])}]};t.a=o},l5Ha:function(e,t,_){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=_("/ZGx"),a=_.n(o),n=_("VB4H");var d=function(e){_("FJji"),_("LUjV")},r=_("VU/8")(a.a,n.a,d,"data-v-15dc2a5b",null);t.default=r.exports},pDXK:function(e,t,_){e.exports=_.p+"img/19f1b4c5297f295b6ff566b77679085f.svg"},twxr:function(e,t,_){e.exports=_.p+"img/325b683d9a3965ef23496c82ebc16f87.svg"}});
if(!self.define){let e,s={};const a=(a,d)=>(a=new URL(a+".js",d).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(d,i)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let r={};const f=e=>a(e,c),b={module:{uri:c},exports:r,require:f};s[c]=Promise.all(d.map((e=>b[e]||f(e)))).then((e=>(i(...e),r)))}}define(["./workbox-ebf2f394"],(function(e){"use strict";e.setCacheNameDetails({prefix:"mr-hope"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/css/0.styles.99892225.css",revision:"193b634a414e18f601e6bab7ef2fa650"},{url:"assets/img/danger-dark.7b1d6aa1.svg",revision:"7b1d6aa1bdcf013d0edfe316ab770f8e"},{url:"assets/img/danger.b143eda2.svg",revision:"b143eda243548a9982491dca4c81eed5"},{url:"assets/img/default-skin.b257fa9c.svg",revision:"b257fa9c5ac8c515ac4d77a667ce2943"},{url:"assets/img/info-dark.f8a43cf6.svg",revision:"f8a43cf67fa96a27a078530a3a43253c"},{url:"assets/img/info.88826912.svg",revision:"88826912d81d91c9e2d03164cd1481a1"},{url:"assets/img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/img/tip-dark.075a244c.svg",revision:"075a244c83d1403c167defe81b4d7fe7"},{url:"assets/img/tip.a2b80aa5.svg",revision:"a2b80aa50b769a26da12fe352322a657"},{url:"assets/img/warning-dark.aac7e30c.svg",revision:"aac7e30c5fafc6748e21f7a9ef546698"},{url:"assets/img/warning.ec428b6d.svg",revision:"ec428b6d6d45ac5d0c610f08d757f40f"},{url:"assets/js/23.202ad9ba.js",revision:"5dd4418385f4b2955de77ad8f65e0a55"},{url:"assets/js/app.e5f107d9.js",revision:"43676b229dc8ec98c1f4b5e491b97192"},{url:"assets/js/layout-Blog.b0c6dcb7.js",revision:"342c067b8b0ba51c4100027f9ce25d33"},{url:"assets/js/layout-Layout.54347a9b.js",revision:"705fe36c8e6c6cdd4228d02890c04b9f"},{url:"assets/js/layout-NotFound.846facba.js",revision:"3a4db94d18b45d007ecc12d174662fb4"},{url:"assets/js/layout-Slide.88fa1023.js",revision:"4e6ba79b159798981d5563e15e2263ac"},{url:"assets/js/page--340e5eca.c95f57b2.js",revision:"4848782c438ba1e6ab6e5fcb0ac898b6"},{url:"assets/js/page--4c0dc106.7ad2507e.js",revision:"28b5f3515147466d6d073b2842c30f2c"},{url:"assets/js/page--4fdeacc4.e552a9df.js",revision:"9c73f195f310189216b63fc80b64498a"},{url:"assets/js/page--584954b8.b2f66e01.js",revision:"5724fbcee82536237bcd6d38533ddec3"},{url:"assets/js/page--5e0b8312.1f336454.js",revision:"03795d8f535657bf8aa1b6cb65a935b2"},{url:"assets/js/page--6723acaa.4fad50c8.js",revision:"0ee1cac0719c313c7dc2c7fad9d7d7cd"},{url:"assets/js/page--8fcba694.bce8a031.js",revision:"eb64f3eb1ebc8737a2ad1c2385fc5b4a"},{url:"assets/js/page--9bf3e428.cd5ab0a9.js",revision:"432ad2b20bc3915a90b1040d22210fbd"},{url:"assets/js/page--aec4dcea.d25a7bca.js",revision:"59add443a02f13567a71cf853567727f"},{url:"assets/js/page--c3b426fa.a5024669.js",revision:"62888bfba85522468075be27a74adc52"},{url:"assets/js/page--d99aed8e.d5506aaa.js",revision:"09893170dc02dcb5353374c96c854d9b"},{url:"assets/js/page-前言.b76c1a88.js",revision:"4f9445751a18972ab353035de429bbab"},{url:"assets/js/page-语法分析和语义分析.85427f02.js",revision:"811ab3371f38f46884e4d0d9425d1128"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound.ebefd1c7.js",revision:"6f775b4c382993f0492a07fff3f93958"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound~layout-Slide.33005620.js",revision:"66ab7f89839094e5d84f9652544d0b05"},{url:"assets/js/vendors~layout-Layout.d24908b2.js",revision:"d605979ebc14b754ffeaf074450213b4"},{url:"assets/js/vendors~photo-swipe.a1ad4d40.js",revision:"24aeae47b5966b7e499336cc2a9d33f1"},{url:"00.前言/index.html",revision:"d0d2872709e7ad81f0699b24c97daa89"},{url:"01.概述/index.html",revision:"94e263f5a7da346e98506fc1aad555da"},{url:"02.转译原理(1)/index.html",revision:"e5a6ad7a5a5b4851d9c0c89206fd6cd0"},{url:"02.转译原理(2)/index.html",revision:"da0ac4f53668275597860b29ec38a2b9"},{url:"03.Babel节点/index.html",revision:"049b29d2a61798fc2a423f510bf07914"},{url:"04.Babel工具集/index.html",revision:"b938dc7bd9ada2ef5bc489b74ed0dcb0"},{url:"05.Babel插件编写/index.html",revision:"ee25d6e29629274365c5fc4d538abf30"},{url:"06.Babel内置plugin/index.html",revision:"206658e4f28a664f2736f113cc85cb1e"},{url:"07.Babel内置preset/index.html",revision:"a81431a9be5d7f608205f51cfc6fb1df"},{url:"08.runtime/index.html",revision:"612b89987c97af806d7da2cc9e629eda"},{url:"09.Babel项目管理/index.html",revision:"75c9cb0eecc11ddf9d4722b36e4f8d42"},{url:"10.转译器对比/index.html",revision:"82a243f5dabe03690d00fc67149a395f"},{url:"404.html",revision:"a36394d12a808f3fbf8f14a781c08405"},{url:"article/index.html",revision:"a40572f6688b120ed56ed72201cbfce7"},{url:"category/index.html",revision:"5789fc73470d9126d802f3f5008b2a21"},{url:"encrypt/index.html",revision:"aad9680ea14c2d574068be5799ad00f6"},{url:"index.html",revision:"bf76cc1a854c211af4afeb4061e6d405"},{url:"slide/index.html",revision:"5e10499b2ae450c285767df2ed5c3365"},{url:"star/index.html",revision:"e566c9ca4f0a82609927c7aeec962add"},{url:"tag/index.html",revision:"a5a1ddb5f6468dd118e84fb19142d737"},{url:"timeline/index.html",revision:"93771c0bee6b14c0355bd85ba2a101a8"}],{}),e.cleanupOutdatedCaches()}));
//# sourceMappingURL=service-worker.js.map
addEventListener("message", (event) => {
  const replyPort = event.ports[0];
  const message = event.data;
  if (replyPort && message && message.type === "skip-waiting")
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        (error) => replyPort.postMessage({ error })
      )
    );
});

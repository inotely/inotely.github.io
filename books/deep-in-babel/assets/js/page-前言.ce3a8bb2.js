(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{485:function(v,_,l){"use strict";l.r(_);var e=l(1),a=Object(e.a)({},(function(){var v=this,_=v.$createElement,l=v._self._c||_;return l("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[l("h2",{attrs:{id:"前言"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[v._v("#")]),v._v(" 前言")]),v._v(" "),l("p",[v._v("Babel的功能用一句话就能说清楚：")]),v._v(" "),l("blockquote",[l("p",[v._v("Babel 是 JavaScript 转译器。")])]),v._v(" "),l("p",[v._v("Babel 毫无疑问是目前前端开发领域极其重要的基础设施之一，其正在强力推动 JavaScript 的发展。")]),v._v(" "),l("p",[v._v("利用 Babel，开发者可以使用 ECMAScript 的各种新特性进行开发，同时花极少的精力关注浏览器或其他JS运行环境对新特性的支持。")]),v._v(" "),l("p",[v._v("甚至，开发者可以根据自身需要，创造属于自己的语法集合，这样真的太赞了！")]),v._v(" "),l("p",[v._v("然而，Babel 对于大部分开发者而言，是熟悉又陌生的，开发者对Babel的了解和运用，比较常见的有：")]),v._v(" "),l("ul",[l("li",[v._v('Babel 实现代码转换时，经历了"代码字符串 - AST 节点 - AST 转换 - 新代码字符串生成"几个阶段')]),v._v(" "),l("li",[v._v("webpack/rollup 等构建工具中利用 Babel 支持解析 ES6/ES7/TypeScript 等语法")]),v._v(" "),l("li",[v._v("编写 Babel 插件，提升开发效率，比如 ant-design 团队出品的按需加载插件 "),l("code",[v._v("babel-plugin-import")])])]),v._v(" "),l("p",[v._v("除此之外，有几个问题可以思考一下：")]),v._v(" "),l("ul",[l("li",[v._v("Babel 是如何进行项目开发、质量管理的？")]),v._v(" "),l("li",[v._v("AST 有哪些节点，AST 的标准格式定义是什么？")]),v._v(" "),l("li",[v._v("Babel 除了有 AST 转换插件，还有什么类型的插件？")]),v._v(" "),l("li",[v._v("Babel 是如何判断源码中变量作用域的？")]),v._v(" "),l("li",[v._v("Babel 和 ECMAScript 是什么关系？")]),v._v(" "),l("li",[v._v("Babel 提供了哪些对外服务工具？")]),v._v(" "),l("li",[v._v("如何开发自己的 JS 语法？")])]),v._v(" "),l("p",[v._v("以上只是一部分问题，我们花点精力也能从网上海量的文章中找到答案。但是，对 Babel 从整体到细节的体系化理解，可能还需要再进一步。")]),v._v(" "),l("p",[v._v('对于我而言，接触 Babel 挺长一段时间内，也仅仅是知道怎么配置来支持 Async/Await/TypeScript/... 之类，是一名名副其实的"配置工程师"。在一次内部分享中，笔者萌生了深入了解一下 Babel 的想法，如此好用的工具，值得我们花时间好好了解一下。')]),v._v(" "),l("p",[v._v("但另一个问题出现了：")]),v._v(" "),l("p",[v._v('Babel 解析过程很简单，就是"解析-转换-生成"这三步，有必要写一本书来讲解吗？这么巧，我刚开始也是这么想的，所以在收到出版社的邀约后，我十分感动，然后拒绝了他们。')]),v._v(" "),l("p",[v._v('但了解还是要继续，随着对 Babel 了解的深入，我发现，Babel 除了本身是一个转译器之外，也是一个在大型项目管理、生态建设、质量控制、转译原理、ECMAScript 版本迭代、性能优化等领域的全面型的产品，我称之为"Babel 生态"，深入了解该产品可以帮助我们更高效、缜密地开展复杂项目开发。')]),v._v(" "),l("p",[v._v("这让我有点兴奋，原来还是有挺多能深入了解的，终于又一次内部分享后，答应了赵兴同学的怂恿，准备写书。但更多的是压力，毕竟我也是从小白一点点地摸索了解，不知道能否把这本书写出来，这也是慢慢学习的过程。")]),v._v(" "),l("p",[v._v('必须值得说明的是，本书并不侧重于过于深度的探索，而是侧重于将"Babel 生态"涉及的方方面面呈现给读者，做一个铺路人。')]),v._v(" "),l("p",[v._v("最后，十分感谢我的妻子，写书是一个十分消耗时间的事情，没有她的支持，是不会有这本书的。")]),v._v(" "),l("h2",{attrs:{id:"阅读建议"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#阅读建议"}},[v._v("#")]),v._v(" 阅读建议")]),v._v(" "),l("ul",[l("li",[l("p",[v._v("Babel 版本")]),v._v(" "),l("p",[v._v("Babel 一直在快速迭代，就在本书编写过程中，每周都能接收到 Babel 的大量更新。当你看到这本书时，本书讲到的某些知识点可能已经有了变化，但万变不离其宗，我们抓住 Babel 运行的本质——转译，理解其原理后，仍然可以比较容易地理解后续的更新逻辑。")]),v._v(" "),l("p",[v._v("本书采用的 Babel 版本是 7.12.12。")]),v._v(" "),l("p",[v._v("线上访问该版本仓库：https://github.com/babel/babel/releases/tag/v7.12.12。")]),v._v(" "),l("p",[v._v("下载代码，可以用命令："),l("code",[v._v("git clone -b v7.12.12 git@github.com:babel/babel.git")])])]),v._v(" "),l("li",[l("p",[v._v("阅读顺序")]),v._v(" "),l("p",[v._v("本书不是渐进式的，读者可以根据自身需要查看相应内容，以下是每章简介：")]),v._v(" "),l("p",[v._v("第一章，从整体角度对 Babel 进行讲解，包括了 Babel 模块划分、各个模块的使用方式、模块之间是怎样协作的。")])])])])}),[],!1,null,null,null);_.default=a.exports}}]);
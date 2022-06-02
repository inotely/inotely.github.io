(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{495:function(t,v,r){"use strict";r.r(v);var a=r(1),_=Object(a.a)({},(function(){var t=this,v=t.$createElement,r=t._self._c||v;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("p",[t._v("这里的转译器依然指的是将高版本 ECMAScript 向低版本转译的“转译器”，并非 JavaScript 引擎。本章将介绍社区常见的转译工具，以及它们在各个方面的对比，便于开发者选择。")]),t._v(" "),r("h2",{attrs:{id:"开源社区的转译工具"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#开源社区的转译工具"}},[t._v("#")]),t._v(" 开源社区的转译工具")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("转译工具")]),t._v(" "),r("th",[t._v("介绍")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("acorn")]),t._v(" "),r("td")]),t._v(" "),r("tr",[r("td",[t._v("@babel/eslint-parser")]),t._v(" "),r("td")]),t._v(" "),r("tr",[r("td",[t._v("babel-eslint9")]),t._v(" "),r("td")]),t._v(" "),r("tr",[r("td",[t._v("@babel/parser")]),t._v(" "),r("td")]),t._v(" "),r("tr",[r("td",[t._v("esformatter")]),t._v(" "),r("td")]),t._v(" "),r("tr",[r("td",[t._v("espree")]),t._v(" "),r("td")]),t._v(" "),r("tr",[r("td",[t._v("esprima")]),t._v(" "),r("td")]),t._v(" "),r("tr",[r("td",[t._v("flow")]),t._v(" "),r("td")]),t._v(" "),r("tr",[r("td",[t._v("hermes-parser")]),t._v(" "),r("td")]),t._v(" "),r("tr",[r("td",[t._v("meriyah")]),t._v(" "),r("td")]),t._v(" "),r("tr",[r("td",[t._v("recast")]),t._v(" "),r("td")]),t._v(" "),r("tr",[r("td",[t._v("seafox")]),t._v(" "),r("td")]),t._v(" "),r("tr",[r("td",[t._v("shift")]),t._v(" "),r("td")]),t._v(" "),r("tr",[r("td",[t._v("tenko")]),t._v(" "),r("td")]),t._v(" "),r("tr",[r("td",[t._v("traceur")]),t._v(" "),r("td")]),t._v(" "),r("tr",[r("td",[t._v("@typescript-eslint/parser")]),t._v(" "),r("td")]),t._v(" "),r("tr",[r("td",[t._v("typescript")]),t._v(" "),r("td")]),t._v(" "),r("tr",[r("td",[t._v("uglify-js")]),t._v(" "),r("td")])])]),t._v(" "),r("h2",{attrs:{id:"性能对比"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#性能对比"}},[t._v("#")]),t._v(" 性能对比")]),t._v(" "),r("h3",{attrs:{id:"benchmark-js"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#benchmark-js"}},[t._v("#")]),t._v(" benchmark.js")]),t._v(" "),r("p",[t._v("可以用 benchmark.js 对各个转译工具做性能基准测试。")]),t._v(" "),r("p",[t._v("https://www.cnblogs.com/jacksplwxy/p/11506183.html")]),t._v(" "),r("p",[t._v("A: 运行 N 次，看耗时")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",[r("code",[t._v("可能出现耗时 0ms 的情况，现在的设备运行速度越来越快了\n")])])]),r("p",[t._v("B: 运行 T 时间，看次数")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",[r("code",[t._v("会受垃圾回收引发停顿等的影响，每次测试获得的结果不同，如何获取更精确的结果呢？\n\n1. 多测试几次，取均值。但 V8 Benchmark Suite 只测试一次，Dromaeo 会测试 5 次\n1. 获取精确的系统时钟，把运行时间压缩到系统不会停顿的时间段内，将时间尽可能多地用在测试代码的运行上，而不是系统停顿\n")])])]),r("p",[t._v("C: 运行 N 次，但保证至少运行 T 时间")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",[r("code",[t._v("TODO\n")])])]),r("p",[t._v("D:")]),t._v(" "),r("h3",{attrs:{id:"性能对比数据"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#性能对比数据"}},[t._v("#")]),t._v(" 性能对比数据")]),t._v(" "),r("h2",{attrs:{id:"rust"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#rust"}},[t._v("#")]),t._v(" Rust")]),t._v(" "),r("h2",{attrs:{id:"esbuild"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#esbuild"}},[t._v("#")]),t._v(" Esbuild")])])}),[],!1,null,null,null);v.default=_.exports}}]);
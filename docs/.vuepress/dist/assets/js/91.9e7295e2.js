(window.webpackJsonp=window.webpackJsonp||[]).push([[91],{448:function(s,t,a){"use strict";a.r(t);var n=a(16),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"没啥关系的组件之间的通信"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#没啥关系的组件之间的通信"}},[s._v("#")]),s._v(" 没啥关系的组件之间的通信")]),s._v(" "),a("p",[s._v("参考文章 "),a("a",{attrs:{href:"https://www.imooc.com/article/283227",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://www.imooc.com/article/283227"),a("OutboundLink")],1),s._v("\nvue通信之间有很多种通信方法，很常见的比如写一个组件，子传父，父传子；通过路由之间通信")]),s._v(" "),a("p",[s._v("下面我介绍的是相互之间没有关系的组件之间通信的方法")]),s._v(" "),a("h2",{attrs:{id:"使用缓存"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用缓存"}},[s._v("#")]),s._v(" 使用缓存")]),s._v(" "),a("p",[s._v("最简单通信的就是使用缓存")]),s._v(" "),a("h2",{attrs:{id:"使用event-bus来订阅发布"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用event-bus来订阅发布"}},[s._v("#")]),s._v(" 使用event-bus来订阅发布")]),s._v(" "),a("p",[s._v("我们可以使用订阅发布模式来做，并且挂载到Vue.protytype之上，也就是喜闻乐见的 event-bus")]),s._v(" "),a("h3",{attrs:{id:"新建一个event-bus-js"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#新建一个event-bus-js"}},[s._v("#")]),s._v(" 新建一个event-bus.js")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Bus")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("constructor")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("callbacks "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("$on")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("fn")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("callbacks"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("callbacks"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("callbacks"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("push")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("fn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("$emit")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("args")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("callbacks"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 存在 遍历所有callback")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("callbacks"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("forEach")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("cb")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cb")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("args"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n \n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Vue")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("prototype"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("$bus "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Bus")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br")])]),a("h3",{attrs:{id:"使用与监听"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用与监听"}},[s._v("#")]),s._v(" 使用与监听")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 使用")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("eventBus")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("$bus"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("$emit")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'event-bus'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'消息'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n \n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 监听")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("$bus"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("$on")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"event-bus"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("msg")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("msg "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'接收event-bus消息:'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" msg\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("p"),s._v(" "),a("h2",{attrs:{id:"使用vuex"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用vuex"}},[s._v("#")]),s._v(" 使用vuex")]),s._v(" "),a("p",[s._v("其实vuex很简单，简单的理解来说就是一个数据管理框架，大家将数据都放到一个地方，由这个地方指定的命令来存储和读取数据。")]),s._v(" "),a("p",[s._v("先上一段代码")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("DOCTYPE")]),s._v(" html"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("html lang"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"en"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n \n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("head"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("meta charset"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"UTF-8"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("meta name"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"viewport"')]),s._v(" content"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"width=device-width, initial-scale=1.0"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("meta http"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("equiv"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"X-UA-Compatible"')]),s._v(" content"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ie=edge"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("title"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("Document"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("title"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("script src"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"../node_modules/vue/dist/vue.min.js"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("script"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("script src"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"../node_modules/vuex/dist/vuex.min.js"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("script"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("head"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n \n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("body"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("div id"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"app"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("h2"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("msg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("h2"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("button @click"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'add'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("点击"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("button"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("counter"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("counter"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("div"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n \n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("script"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" counter "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            template"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[s._v("`")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("\n            <div>\n                <div>{{count}}</div>\n                <div>{{name}}</div>\n                <div>{{username}}</div>\n            </div>           \n            ")]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[s._v("`")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            computed"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("count")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("$store"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("state"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("count\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("$store"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("state"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("name\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("username")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("$store"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("getters"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("username\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" store "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Vuex"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Store")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            state"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                count"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'姐姐'")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            getters"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("username")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("state")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" state"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("name "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("',你好'")]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            mutations"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("increment")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("state"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" num")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                    state"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("count "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" num\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("changeName")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("state"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" username")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                    state"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("name "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" username\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            actions"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("incrementAction")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("context"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" num")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                    context"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("commit")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'increment'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" num"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n \n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Vue")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            el"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'#app'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            store"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                msg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'使用'")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            components"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                counter\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            methods"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("$store"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("dispatch")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'incrementAction'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("500")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n                    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("$store"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("commit")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'changeName'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'哥哥'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("script"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("body"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("html"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br"),a("span",{staticClass:"line-number"},[s._v("47")]),a("br"),a("span",{staticClass:"line-number"},[s._v("48")]),a("br"),a("span",{staticClass:"line-number"},[s._v("49")]),a("br"),a("span",{staticClass:"line-number"},[s._v("50")]),a("br"),a("span",{staticClass:"line-number"},[s._v("51")]),a("br"),a("span",{staticClass:"line-number"},[s._v("52")]),a("br"),a("span",{staticClass:"line-number"},[s._v("53")]),a("br"),a("span",{staticClass:"line-number"},[s._v("54")]),a("br"),a("span",{staticClass:"line-number"},[s._v("55")]),a("br"),a("span",{staticClass:"line-number"},[s._v("56")]),a("br"),a("span",{staticClass:"line-number"},[s._v("57")]),a("br"),a("span",{staticClass:"line-number"},[s._v("58")]),a("br"),a("span",{staticClass:"line-number"},[s._v("59")]),a("br"),a("span",{staticClass:"line-number"},[s._v("60")]),a("br"),a("span",{staticClass:"line-number"},[s._v("61")]),a("br"),a("span",{staticClass:"line-number"},[s._v("62")]),a("br"),a("span",{staticClass:"line-number"},[s._v("63")]),a("br"),a("span",{staticClass:"line-number"},[s._v("64")]),a("br"),a("span",{staticClass:"line-number"},[s._v("65")]),a("br"),a("span",{staticClass:"line-number"},[s._v("66")]),a("br"),a("span",{staticClass:"line-number"},[s._v("67")]),a("br"),a("span",{staticClass:"line-number"},[s._v("68")]),a("br"),a("span",{staticClass:"line-number"},[s._v("69")]),a("br"),a("span",{staticClass:"line-number"},[s._v("70")]),a("br"),a("span",{staticClass:"line-number"},[s._v("71")]),a("br"),a("span",{staticClass:"line-number"},[s._v("72")]),a("br"),a("span",{staticClass:"line-number"},[s._v("73")]),a("br"),a("span",{staticClass:"line-number"},[s._v("74")]),a("br"),a("span",{staticClass:"line-number"},[s._v("75")]),a("br"),a("span",{staticClass:"line-number"},[s._v("76")]),a("br"),a("span",{staticClass:"line-number"},[s._v("77")]),a("br"),a("span",{staticClass:"line-number"},[s._v("78")]),a("br"),a("span",{staticClass:"line-number"},[s._v("79")]),a("br"),a("span",{staticClass:"line-number"},[s._v("80")]),a("br"),a("span",{staticClass:"line-number"},[s._v("81")]),a("br"),a("span",{staticClass:"line-number"},[s._v("82")]),a("br"),a("span",{staticClass:"line-number"},[s._v("83")]),a("br"),a("span",{staticClass:"line-number"},[s._v("84")]),a("br")])]),a("h3",{attrs:{id:"根据以上例子我们来解读vuex的规则"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#根据以上例子我们来解读vuex的规则"}},[s._v("#")]),s._v(" 根据以上例子我们来解读vuex的规则")]),s._v(" "),a("ul",[a("li",[s._v("state")])]),s._v(" "),a("p",[s._v("state是vuex的公共状态，我们可以把它看作所有组件的data，取值是this.$store.state.count")]),s._v(" "),a("ul",[a("li",[s._v("mutations")])]),s._v(" "),a("p",[s._v("可以理解为所有组件的methods属性，mutations对象中保存着更改数据的回调函数,第一个参数是state, 第二参数是payload, 也就是自定义的参数。传值： this.$store.commit('changeName', '哥哥')")]),s._v(" "),a("ul",[a("li",[s._v("actions")])]),s._v(" "),a("p",[s._v("actions类似于mutations，不同在于actions提交的是mutations，而不是直接改变其状态；actions可以包含异步操作；actions中回调函数的第一个参数是context,是一个与store实例具有相同属性和方法的对象。传值：this.$store.dispatch('incrementAction', 500)")]),s._v(" "),a("ul",[a("li",[s._v("getters")])]),s._v(" "),a("p",[s._v("可以理解为所有组件的computed属性，getters的返回值会根据它的依赖被缓存起来，且只有当它的依赖值发生了改变才会被重新计算。取值：this.$store.getters.username")])])}),[],!1,null,null,null);t.default=e.exports}}]);
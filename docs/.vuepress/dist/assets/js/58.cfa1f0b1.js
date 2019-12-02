(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{410:function(s,t,a){"use strict";a.r(t);var e=a(16),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"flex布局下的flex-grow、flex-shrink、flex-basis属性详解"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#flex布局下的flex-grow、flex-shrink、flex-basis属性详解"}},[s._v("#")]),s._v(" flex布局下的flex-grow、flex-shrink、flex-basis属性详解")]),s._v(" "),a("p",[s._v("这部分内容以前仅仅只是会使用"),a("code",[s._v("flex:1")]),s._v(",趁今天有时间，就系统的学了一下，发现so easy")]),s._v(" "),a("h2",{attrs:{id:"flex-grow"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#flex-grow"}},[s._v("#")]),s._v(" flex-grow")]),s._v(" "),a("p",[s._v("flex-grow属性定义剩余空间的分成，默认为0，如果存在剩余空间，也不会放大")]),s._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token property"}},[s._v("flex-grow")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("<number>"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* default 0 */")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"demo"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#demo"}},[s._v("#")]),s._v(" demo")]),s._v(" "),a("flex-grow"),s._v(" "),a("h3",{attrs:{id:"原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#原理"}},[s._v("#")]),s._v(" 原理")]),s._v(" "),a("p",[s._v("上面我设置的总宽度=600px;")]),s._v(" "),a("p",[s._v("当3个item的flex-grow都是0的时候，不分配剩余空间，所以就是自身的宽度"),a("code",[s._v("width=40px")]),s._v(";")]),s._v(" "),a("p",[s._v("当3个item的flex-grow都是1的时候，剩余的空间每个item都分1份，所以剩余空间480px（600-40*3）平均分成3份，每份160px，现在每个item宽度"),a("code",[s._v("width=200px（40+160）")])]),s._v(" "),a("p",[s._v("当item1的flex-grow=1,item2的flex-grow2=2,item3的flex-grow=0的时候，剩余空间480px平均分成3份，item1分1份"),a("code",[s._v("width=200px(40+160)")]),s._v("，item2分2份"),a("code",[s._v("width=360px(40+160*2)")]),s._v(",item3没有分到，所以是自身宽度")]),s._v(" "),a("h2",{attrs:{id:"flex-shrink"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#flex-shrink"}},[s._v("#")]),s._v(" flex-shrink")]),s._v(" "),a("p",[s._v("flex-shrink定义了项目的比例缩小，默认值为1，当flex-shrink:0的时候，不缩小")]),s._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token property"}},[s._v("flex-shrink")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" <number>"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* default 1 */")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"demo-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#demo-2"}},[s._v("#")]),s._v(" demo")]),s._v(" "),a("flex-shrink"),s._v(" "),a("h3",{attrs:{id:"原理-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#原理-2"}},[s._v("#")]),s._v(" 原理")]),s._v(" "),a("p",[s._v("上面我设置的总宽度=600，每个item的宽度=250")]),s._v(" "),a("p",[s._v("当3个item的flex-shrink都是0的时候，不缩小，所以本身宽度250*3>600就会超出去;")]),s._v(" "),a("p",[s._v("当3个item的flex-shrink都是1的时候，每个item都会按照超出空间(150*3-600=150px)按比例减少,150分成三份50px，现在每个item宽度"),a("code",[s._v("width=200px（250-50）")])]),s._v(" "),a("p",[s._v("当item1的flex-shrink=1,item2的flex-shrink=2,item3的flex-shrink=0的时候，多出空间平均分成3份，每份50px,item1减1份"),a("code",[s._v("width=200px(250-50)")]),s._v("，item2减2份"),a("code",[s._v("width=150px(250-50*2)")]),s._v(",item3就是自身宽度250px")]),s._v(" "),a("h2",{attrs:{id:"flex-basis"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#flex-basis"}},[s._v("#")]),s._v(" flex-basis")]),s._v(" "),a("p",[s._v("flex-basis定义了项目占据的主轴空间，浏览器根据这个属性，计算主轴多余空间或者剩余空间的大小，默认值为auto,为本事大小")]),s._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token property"}},[s._v("flex-basis")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" <length> | auto"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* default auto */")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"demo-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#demo-3"}},[s._v("#")]),s._v(" demo")]),s._v(" "),a("flex-basis"),s._v(" "),a("h3",{attrs:{id:"原理-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#原理-3"}},[s._v("#")]),s._v(" 原理")]),s._v(" "),a("p",[s._v("上面我设置的总宽度=600，每个item的样式如下")]),s._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token property"}},[s._v("width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 50px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("flex-grow")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("flex-shrink")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("TIP")]),s._v(" "),a("p",[s._v("项目的原始长度，flex-basis的优先级高于width属性，flex-basis为auto时，项目的原始长度就是其宽度")])]),s._v(" "),a("p",[s._v("当3个item的flex-basis都是0的时候，多余的空间600（600-3*0），平均分成3份，每份200px,所以每个item的宽度为"),a("code",[s._v("width=200px(0+200)")]),s._v(";")]),s._v(" "),a("p",[s._v("当3个item的flex-basis都是100px的时候，每个item都会按照多出空间300px(600-100*3)平均分成3份，所以每个item的宽度为"),a("code",[s._v("width=200px(100+100)")]),s._v(";")]),s._v(" "),a("p",[s._v("当item1的flex-basis=0,item2的flex-basis=100px,item3的flex-basis=200px的时候，每个item都会按照多出空间300px(600-0-100-200)平均分成3份，item1的宽度"),a("code",[s._v("width=100px(0+100)")]),s._v("，item2的宽度"),a("code",[s._v("width=200px(100+100)")]),s._v(",item3的宽度"),a("code",[s._v("width=300(200+100)")])]),s._v(" "),a("h2",{attrs:{id:"flex"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#flex"}},[s._v("#")]),s._v(" flex")]),s._v(" "),a("p",[s._v("flex 属性是 flex-grow、flex-shrink 和 flex-basis 属性的简写属性。")]),s._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token property"}},[s._v("flex")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" flex-grow flex-shrink flex-basis"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("flex")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("0 1 auto"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("//默认值\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h3",{attrs:{id:"属性值分析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#属性值分析"}},[s._v("#")]),s._v(" 属性值分析")]),s._v(" "),a("ol",[a("li",[s._v("flex:none等同于")])]),s._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token property"}},[s._v("flex-grow")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("flex-shrink")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("flex-basis")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" auto"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("ol",{attrs:{start:"2"}},[a("li",[s._v("flex:auto")])]),s._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token property"}},[s._v("flex-grow")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("flex-shrink")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("flex-basis")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" auto"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("ol",{attrs:{start:"3"}},[a("li",[s._v("flex:1等同于")])]),s._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token property"}},[s._v("flex-grow")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("flex-shrink")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("flex-basis")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 0%"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("ol",{attrs:{start:"4"}},[a("li",[s._v("当 flex 取值为一个长度或百分比，则视为 flex-basis 值，")])]),s._v(" "),a("p",[s._v("flex:24px")]),s._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token property"}},[s._v("flex-grow")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("flex-shrink")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("flex-basis")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 24px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("ol",{attrs:{start:"5"}},[a("li",[s._v("当 flex 取值为两个非负数字，则分别视为 flex-grow 和 flex-shrink 的值，")])]),s._v(" "),a("p",[s._v("flex: 2 3")]),s._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token property"}},[s._v("flex-grow")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("flex-shrink")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 3"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("flex-basis")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 0%"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("ol",{attrs:{start:"5"}},[a("li",[s._v("当 flex 取值为一个非负数字和一个长度或百分比，则分别视为 flex-grow 和 flex-basis 的值，")])]),s._v(" "),a("p",[s._v("flex: 2 20px")]),s._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token property"}},[s._v("flex-grow")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("flex-shrink")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("flex-basis")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 20px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])])],1)}),[],!1,null,null,null);t.default=n.exports}}]);
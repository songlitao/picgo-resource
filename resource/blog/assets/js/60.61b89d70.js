(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{551:function(t,a,s){"use strict";s.r(a);var n=s(22),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[t._v("对于元素的边框我们除了可以使用《"),s("RouterLink",{attrs:{to:"/pages/0c2859/"}},[t._v("CSS 边框")]),t._v("》一节中介绍的一些默认样式外，还可以通过 CSS3 中的 border-image 属性使用图像来作为元素的边框，以创建出丰富多彩边框效果。")],1),t._v(" "),s("p",[t._v("border-image 属性可以通过一些简单的规则，将一副图像划分为 9 个单独的部分，浏览器会自动使用相应的部分来替换边框的默认样式。border-image 属性是五个 border-image-* 属性的简写，其语法格式如下：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("border-image：border-image-source || border-image-slice [ / border-image-width | / border-image-width ? / border-image-outset ]? || border-image-repeat\n")])])]),s("p",[t._v("通过语法可以看出 border-image 是 border-image-source、border-image-slice、border-image-width、border-image-outset 和 border-image-repeat 属性的简写，其中：")]),t._v(" "),s("ul",[s("li",[t._v("border-image-source：定义边框图像的路径；")]),t._v(" "),s("li",[t._v("border-image-slice：定义边框图像从什么位置开始分割；")]),t._v(" "),s("li",[t._v("border-image-width：定义边框图像的厚度（宽度）；")]),t._v(" "),s("li",[t._v("border-image-outset：定义边框图像的外延尺寸（边框图像区域超出边框的量）；")]),t._v(" "),s("li",[t._v("border-image-repeat：定义边框图像的平铺方式。")])]),t._v(" "),s("p",[t._v("接下来我们通过如下所示的图片来演示一下 border-image-source、border-image-slice、border-image-width、border-image-outset 和 border-image-repeat 几个属性的使用。")]),t._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"边框图片","data-src":"https://fastly.jsdelivr.net/gh/songlitao/picgo/resource/blog/assets/imgs/css/35-01.png",loading:"lazy"}})]),t._v(" "),s("h2",{attrs:{id:"border-image-source"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#border-image-source"}},[t._v("#")]),t._v(" border-image-source")]),t._v(" "),s("p",[t._v("border-image-source 属性用来定义边框要使用的图像，通过该属性可以指定一个图像来替换边框的默认样式，当 border-image-source 属性的值为 none 或者指定的图像不可用时，则会显示边框默认的样式。")]),t._v(" "),s("p",[t._v("另外，border-image-source 属性除了可以使用图像来替换边框的默认样式外，您还可以使用渐变来定义边框样式，属性的语法格式如下：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("border-image-source：none | <image>\n")])])]),s("p",[t._v("其中，none 为 border-image-source 属性的默认值，表示不使用图像来替换边框的默认样式；<image> 为使用 url() 函数指定的图像路径或者使用 linear-gradient() 函数定义的渐变色，用来替换默认的边框样式。")]),t._v(" "),s("p",[t._v("【示例】通过 border-image-source 属性使用图像来替换默认的边框样式：")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token doctype"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<!")]),s("span",{pre:!0,attrs:{class:"token doctype-tag"}},[t._v("DOCTYPE")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token name"}},[t._v("html")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("html")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("head")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("style")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token style"}},[s("span",{pre:!0,attrs:{class:"token language-css"}},[t._v("\n        "),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 200px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("border")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 27px solid"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("padding")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 10px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("border-image-source")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token url"}},[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("url")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("./border.png"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    ")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("style")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("head")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("body")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("使用图片替换默认边框"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("body")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("html")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[t._v("运行结果如下图所示：")]),t._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"border-image-source 属性演示","data-src":"https://fastly.jsdelivr.net/gh/songlitao/picgo/resource/blog/assets/imgs/css/35-02.gif",loading:"lazy"}})]),t._v(" "),s("p",[t._v("通过运行结果可以看出，仅仅借助 border-image-source 属性并不能达到我们想要的效果，我们再来看一下其它几个函数。")]),t._v(" "),s("h2",{attrs:{id:"border-image-slice"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#border-image-slice"}},[t._v("#")]),t._v(" border-image-slice")]),t._v(" "),s("p",[t._v("border-image-slice 属性用来分割通过 border-image-source 属性加载的图像，属性的语法格式如下：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("border-image-slice：[ <number> | <percentage> ]{1,4} && fill?\n")])])]),s("p",[t._v("border-image-slice 属性可以接收三种类型的值：")]),t._v(" "),s("ul",[s("li",[t._v("<number>：数值，用具体数值指定图像分割的位置，数值代表图像的像素位置或向量坐标，不允许负值；")]),t._v(" "),s("li",[t._v("<percentage>：百分比，相对于图像尺寸的百分比，图像的宽度影响水平方向，高度影响垂直方向；")]),t._v(" "),s("li",[t._v("fill：保留边框图像的中间部分。")])]),t._v(" "),s("p",[t._v("border-image-slice 属性可以指定上、下、左、右四个方位来分割图像，并将图像分成 4 个角、4条边和中间区域等 9 个部份，中间区域始终是透明的（即没图像填充），除非加上关键字 fill，如下图所示：")]),t._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://fastly.jsdelivr.net/gh/songlitao/picgo/resource/blog/assets/imgs/css/35-03.gif",loading:"lazy"}})]),t._v(" "),s("p",[t._v("除 fill 关键字外，border-image-slice 属性可以接受 1~4 个参数值：")]),t._v(" "),s("ul",[s("li",[t._v("如果提供全部四个参数值，那么将按上、右、下、左的顺序对图像进行分割；")]),t._v(" "),s("li",[t._v("如果提供三个参数，那么第一个参数用于上方，第二个参数用于左、右两侧，第三个参数用于下方；")]),t._v(" "),s("li",[t._v("如果提供两个参数，那么第一个参数用于上方和下方，第二个参数用于左、右两个；")]),t._v(" "),s("li",[t._v("如果只提供一个参数，那么上、右、下、左都将使用该值进行分割。")])]),t._v(" "),s("p",[t._v("【示例】使用 border-image-slice 属性用来分割通过 border-image-source 属性加载的图像：")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token doctype"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<!")]),s("span",{pre:!0,attrs:{class:"token doctype-tag"}},[t._v("DOCTYPE")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token name"}},[t._v("html")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("html")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("head")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("style")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token style"}},[s("span",{pre:!0,attrs:{class:"token language-css"}},[t._v("\n        "),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 200px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("border")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 27px solid"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("padding")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 10px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("border-image-source")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token url"}},[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("url")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("./border.png"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("border-image-slice")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 27"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    ")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("style")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("head")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("body")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("使用图片替换默认边框"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("body")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("html")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[t._v("运行结果如下图所示：")]),t._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"border-image-slice 属性演示","data-src":"https://fastly.jsdelivr.net/gh/songlitao/picgo/resource/blog/assets/imgs/css/35-04.gif",loading:"lazy"}})]),t._v(" "),s("h2",{attrs:{id:"border-image-width"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#border-image-width"}},[t._v("#")]),t._v(" border-image-width")]),t._v(" "),s("p",[t._v("border-image-width 属性用来设置通过 border-image-source 属性加载的图像厚度（宽度），属性的语法格式如下：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("border-image-width：[ <length> | <percentage> | <number> | auto ]{1,4}\n")])])]),s("p",[t._v("语法说明如下：")]),t._v(" "),s("ul",[s("li",[t._v("<length>：使用数值加单位的形式指定图像边框的宽度，不允许为负值；")]),t._v(" "),s("li",[t._v("<percentage>：用百分比的形式指定图像边框的宽度，参照图像边框区域的宽和高进行换算，不允许负值；")]),t._v(" "),s("li",[t._v("<number>：使用浮点数指定图像边框的宽度，该值对应 border-width 的倍数，例如值为 2，则参数的实际值为 2 * border-width，不允许负值；")]),t._v(" "),s("li",[t._v("auto：由浏览器自动设定，当 border-image-width 设置为 auto 时，它的实际值与 border-image-slice 相同的值。")])]),t._v(" "),s("blockquote",[s("p",[t._v("提示：border-image-width 属性的默认值为 1，也就是说当我们省略 border-image-width 属性的值时，该属性的值会被设置为 1 * border-width，相当于会直接使用 border-width 的值。")])]),t._v(" "),s("p",[t._v("border-image-width 属性同样可以接受 1~4 个参数值：")]),t._v(" "),s("ul",[s("li",[t._v("如果提供全部四个参数值，那么将按照上、右、下、左的顺序设置图像边框四个方向上的宽度；")]),t._v(" "),s("li",[t._v("如果提供三个参数，那么第一个参数用于上边框，第二个参数用于左、右两个边框，第三个参数用于下边框；")]),t._v(" "),s("li",[t._v("如果提供两个参数，那么第一个参数用于上、下两个边框，第二个参数用于左、右两个边框；")]),t._v(" "),s("li",[t._v("如果只提供一个参数，那么上、右、下、左都将使用该值设置图像边框的宽度。")])]),t._v(" "),s("p",[t._v("【示例】使用 border-image-width 属性设置图像边框的宽度：")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token doctype"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<!")]),s("span",{pre:!0,attrs:{class:"token doctype-tag"}},[t._v("DOCTYPE")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token name"}},[t._v("html")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("html")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("head")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("style")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token style"}},[s("span",{pre:!0,attrs:{class:"token language-css"}},[t._v("\n        "),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 200px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("border")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 27px solid"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("padding")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 10px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("border-image-source")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token url"}},[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("url")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("./border.png"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("border-image-slice")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 27"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("border-image-width")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 10px 1 0.5 15px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    ")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("style")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("head")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("body")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("使用图片替换默认边框"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("body")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("html")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[t._v("运行结果如下图所示：")]),t._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"border-image-width 属性演示","data-src":"https://fastly.jsdelivr.net/gh/songlitao/picgo/resource/blog/assets/imgs/css/35-05.gif",loading:"lazy"}})]),t._v(" "),s("h2",{attrs:{id:"border-image-outset"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#border-image-outset"}},[t._v("#")]),t._v(" border-image-outset")]),t._v(" "),s("p",[t._v("border-image-outset 属性用来定义图像边框相对于边框边界向外偏移的距离（使图像边框延伸到盒子模型以外），该属性的语法格式如下：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("border-image-outset：[ <length> | <number> ]{1,4}\n")])])]),s("p",[t._v("语法说明如下：")]),t._v(" "),s("ul",[s("li",[t._v("<length>：用具体的数值加单位的形式指定图像边框向外偏移的距离，不允许为负值；")]),t._v(" "),s("li",[t._v("<number>：用浮点数指定图像边框向外偏移的距离，该值表示 border-width 的倍数，例如值为 2，则表示偏移量为 2 * border-width，不允许为负值。")])]),t._v(" "),s("p",[t._v("border-image-outset 属性同样可以接受 1~4 个参数值：")]),t._v(" "),s("ul",[s("li",[t._v("如果提供全部四个参数值，那么将按上、右、下、左的顺序作用于四边；")]),t._v(" "),s("li",[t._v("如果提供三个参数值，那么第一个参数将用于上边框，第二个参数将用于左、右两个边框，第三个参数将用于下边框；")]),t._v(" "),s("li",[t._v("如果提供两个参数，那么第一个参数将用于上、下两个边框，第二个参数将用于左、右两个边框；")]),t._v(" "),s("li",[t._v("如果只提供一个参数，那么该参数将同时作用于四边。")])]),t._v(" "),s("p",[t._v("【示例】使用 border-image-outset 属性设置图像边框相对于边框边界向外的偏移量：")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token doctype"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<!")]),s("span",{pre:!0,attrs:{class:"token doctype-tag"}},[t._v("DOCTYPE")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token name"}},[t._v("html")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("html")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("head")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("style")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token style"}},[s("span",{pre:!0,attrs:{class:"token language-css"}},[t._v("\n        "),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 200px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("border")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 27px solid"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("padding")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 10px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("margin")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 30px 0px 0px 30px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("border-image-source")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token url"}},[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("url")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("./border.png"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("border-image-slice")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 27"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("border-image-outset")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 25px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("background-color")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" #CCC"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    ")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("style")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("head")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("body")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("使用图片替换默认边框"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("body")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("html")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[t._v("运行结果如下图所示：")]),t._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"border-image-outset 属性演示","data-src":"https://fastly.jsdelivr.net/gh/songlitao/picgo/resource/blog/assets/imgs/css/35-06.gif",loading:"lazy"}})]),t._v(" "),s("h2",{attrs:{id:"border-image-repeat"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#border-image-repeat"}},[t._v("#")]),t._v(" border-image-repeat")]),t._v(" "),s("p",[t._v("border-image-repeat 属性用来设置如何填充使用 border-image-slice 属性分割的图像边框，例如平铺、拉伸等等，该属性的语法格式如下：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("border-image-repeat：[ stretch | repeat | round | space ]{1,2}\n")])])]),s("p",[t._v("语法说明如下：")]),t._v(" "),s("ul",[s("li",[t._v("stretch：将被分割的图像使用拉伸的方式来填充满边框区域；")]),t._v(" "),s("li",[t._v("repeat：将被分割的图像使用重复平铺的方式来填充满边框区域，当图像碰到边界时，超出的部分会被截断；")]),t._v(" "),s("li",[t._v("round：与 repeat 关键字类似，不同之处在于，当背景图像不能以整数次平铺时，会根据情况缩放图像；")]),t._v(" "),s("li",[t._v("space：与 repeat 关键字类似，不同之处在于，当背景图像不能以整数次平铺时，会用空白间隙填充在图像周围。")])]),t._v(" "),s("p",[t._v("border-image-repeat 属性能够接受 1~2 个参数值：")]),t._v(" "),s("ul",[s("li",[t._v("如果提供两个参数，那么第一个参数将用于水平方向，第二个将用于垂直方向；")]),t._v(" "),s("li",[t._v("如果只提供一个参数，那么将在水平和垂直方向都应用该值。")])]),t._v(" "),s("p",[t._v("【示例】使用 border-image-repeat 属性设置图像边框的填充方式：")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token doctype"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<!")]),s("span",{pre:!0,attrs:{class:"token doctype-tag"}},[t._v("DOCTYPE")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token name"}},[t._v("html")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("html")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("head")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("style")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token style"}},[s("span",{pre:!0,attrs:{class:"token language-css"}},[t._v("\n        "),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 200px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("border")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 27px solid"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("padding")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 10px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("border-image-source")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token url"}},[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("url")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("./border.png"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("border-image-slice")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 27"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("border-image-repeat")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" round repeat"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    ")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("style")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("head")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("body")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("使用图片替换默认边框"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("body")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("html")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[t._v("运行结果如下图所示：")]),t._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"border-image-repeat 属性演示","data-src":"https://fastly.jsdelivr.net/gh/songlitao/picgo/resource/blog/assets/imgs/css/35-07.gif",loading:"lazy"}})]),t._v(" "),s("h2",{attrs:{id:"border-image"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#border-image"}},[t._v("#")]),t._v(" border-image")]),t._v(" "),s("p",[t._v("了解完 border-image-source、border-image-slice、border-image-width、border-image-outset 和 border-image-repeat 这几个属性，我们回头再来看看 border-image 属性。border-image 属性是五个 border-image-* 属性的简写，通过 border-image 属性可以同时设置五个 border-image-* 属性。")]),t._v(" "),s("p",[t._v("【示例】使用 border-image 属性设置图片边框：")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token doctype"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<!")]),s("span",{pre:!0,attrs:{class:"token doctype-tag"}},[t._v("DOCTYPE")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token name"}},[t._v("html")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("html")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("head")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("style")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token style"}},[s("span",{pre:!0,attrs:{class:"token language-css"}},[t._v("\n        "),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 200px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("border")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 27px solid"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("padding")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 10px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("border-image")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token url"}},[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("url")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("./border.png"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])]),t._v(" 27 round"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    ")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("style")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("head")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("body")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("使用图片替换默认边框"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("body")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("html")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[t._v("运行结果如下图所示：")]),t._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"border-image 属性演示","data-src":"https://fastly.jsdelivr.net/gh/songlitao/picgo/resource/blog/assets/imgs/css/35-08.gif",loading:"lazy"}})])])}),[],!1,null,null,null);a.default=e.exports}}]);
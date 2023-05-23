(window.webpackJsonp=window.webpackJsonp||[]).push([[143],{633:function(t,a,s){"use strict";s.r(a);var e=s(19),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"file-对象-filelist-对象-filereader-对象"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#file-对象-filelist-对象-filereader-对象"}},[t._v("#")]),t._v(" File 对象，FileList 对象，FileReader 对象")]),t._v(" "),s("h2",{attrs:{id:"file-对象"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#file-对象"}},[t._v("#")]),t._v(" File 对象")]),t._v(" "),s("p",[t._v("File 对象代表一个文件，用来读写文件信息。它继承了 Blob 对象，或者说是一种特殊的 Blob 对象，所有可以使用 Blob 对象的场合都可以使用它。")]),t._v(" "),s("p",[t._v("最常见的使用场合是表单的文件上传控件（"),s("code",[t._v('<input type="file">')]),t._v("），用户选中文件以后，浏览器就会生成一个数组，里面是每一个用户选中的文件，它们都是 File 实例对象。")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// HTML 代码如下")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// <input id="fileItem" type="file">')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" file "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementById")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'fileItem'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("files"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nfile "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("instanceof")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("File")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true")]),t._v("\n")])])]),s("p",[t._v("上面代码中，"),s("code",[t._v("file")]),t._v("是用户选中的第一个文件，它是 File 的实例。")]),t._v(" "),s("h3",{attrs:{id:"构造函数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#构造函数"}},[t._v("#")]),t._v(" 构造函数")]),t._v(" "),s("p",[t._v("浏览器原生提供一个"),s("code",[t._v("File()")]),t._v("构造函数，用来生成 File 实例对象。")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("File")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("array"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" name "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" options"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[s("code",[t._v("File()")]),t._v("构造函数接受三个参数。")]),t._v(" "),s("ul",[s("li",[t._v("array：一个数组，成员可以是二进制对象或字符串，表示文件的内容。")]),t._v(" "),s("li",[t._v("name：字符串，表示文件名或文件路径。")]),t._v(" "),s("li",[t._v("options：配置对象，设置实例的属性。该参数可选。")])]),t._v(" "),s("p",[t._v("第三个参数配置对象，可以设置两个属性。")]),t._v(" "),s("ul",[s("li",[t._v("type：字符串，表示实例对象的 MIME 类型，默认值为空字符串。")]),t._v(" "),s("li",[t._v("lastModified：时间戳，表示上次修改的时间，默认为"),s("code",[t._v("Date.now()")]),t._v("。")])]),t._v(" "),s("p",[t._v("下面是一个例子。")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" file "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("File")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'foo'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'foo.txt'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'text/plain'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h3",{attrs:{id:"实例属性和实例方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#实例属性和实例方法"}},[t._v("#")]),t._v(" 实例属性和实例方法")]),t._v(" "),s("p",[t._v("File 对象有以下实例属性。")]),t._v(" "),s("ul",[s("li",[t._v("File.lastModified：最后修改时间")]),t._v(" "),s("li",[t._v("File.name：文件名或文件路径")]),t._v(" "),s("li",[t._v("File.size：文件大小（单位字节）")]),t._v(" "),s("li",[t._v("File.type：文件的 MIME 类型")])]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" myFile "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("File")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'file.bin'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("lastModified")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Date")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2018")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nmyFile"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("lastModified "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1517414400000")]),t._v("\nmyFile"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "file.bin"')]),t._v("\nmyFile"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("size "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 0")]),t._v("\nmyFile"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("type "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// ""')]),t._v("\n")])])]),s("p",[t._v("上面代码中，由于"),s("code",[t._v("myFile")]),t._v("的内容为空，也没有设置 MIME 类型，所以"),s("code",[t._v("size")]),t._v("属性等于0，"),s("code",[t._v("type")]),t._v("属性等于空字符串。")]),t._v(" "),s("p",[t._v("File 对象没有自己的实例方法，由于继承了 Blob 对象，因此可以使用 Blob 的实例方法"),s("code",[t._v("slice()")]),t._v("。")]),t._v(" "),s("h2",{attrs:{id:"filelist-对象"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#filelist-对象"}},[t._v("#")]),t._v(" FileList 对象")]),t._v(" "),s("p",[s("code",[t._v("FileList")]),t._v("对象是一个类似数组的对象，代表一组选中的文件，每个成员都是一个 File 实例。它主要出现在两个场合。")]),t._v(" "),s("ul",[s("li",[t._v("文件控件节点（"),s("code",[t._v('<input type="file">')]),t._v("）的"),s("code",[t._v("files")]),t._v("属性，返回一个 FileList 实例。")]),t._v(" "),s("li",[t._v("拖拉一组文件时，目标区的"),s("code",[t._v("DataTransfer.files")]),t._v("属性，返回一个 FileList 实例。")])]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// HTML 代码如下")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// <input id="fileItem" type="file">')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" files "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementById")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'fileItem'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("files"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nfiles "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("instanceof")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("FileList")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true")]),t._v("\n")])])]),s("p",[t._v("上面代码中，文件控件的"),s("code",[t._v("files")]),t._v("属性是一个 FileList 实例。")]),t._v(" "),s("p",[t._v("FileList 的实例属性主要是"),s("code",[t._v("length")]),t._v("，表示包含多少个文件。")]),t._v(" "),s("p",[t._v("FileList 的实例方法主要是"),s("code",[t._v("item()")]),t._v("，用来返回指定位置的实例。它接受一个整数作为参数，表示位置的序号（从零开始）。但是，由于 FileList 的实例是一个类似数组的对象，可以直接用方括号运算符，即"),s("code",[t._v("myFileList[0]")]),t._v("等同于"),s("code",[t._v("myFileList.item(0)")]),t._v("，所以一般用不到"),s("code",[t._v("item()")]),t._v("方法。")]),t._v(" "),s("h2",{attrs:{id:"filereader-对象"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#filereader-对象"}},[t._v("#")]),t._v(" FileReader 对象")]),t._v(" "),s("p",[t._v("FileReader 对象用于读取 File 对象或 Blob 对象所包含的文件内容。")]),t._v(" "),s("p",[t._v("浏览器原生提供一个"),s("code",[t._v("FileReader")]),t._v("构造函数，用来生成 FileReader 实例。")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" reader "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("FileReader")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("FileReader 有以下的实例属性。")]),t._v(" "),s("ul",[s("li",[t._v("FileReader.error：读取文件时产生的错误对象")]),t._v(" "),s("li",[t._v("FileReader.readyState：整数，表示读取文件时的当前状态。一共有三种可能的状态，"),s("code",[t._v("0")]),t._v("表示尚未加载任何数据，"),s("code",[t._v("1")]),t._v("表示数据正在加载，"),s("code",[t._v("2")]),t._v("表示加载完成。")]),t._v(" "),s("li",[t._v("FileReader.result：读取完成后的文件内容，有可能是字符串，也可能是一个 ArrayBuffer 实例。")]),t._v(" "),s("li",[t._v("FileReader.onabort："),s("code",[t._v("abort")]),t._v("事件（用户终止读取操作）的监听函数。")]),t._v(" "),s("li",[t._v("FileReader.onerror："),s("code",[t._v("error")]),t._v("事件（读取错误）的监听函数。")]),t._v(" "),s("li",[t._v("FileReader.onload："),s("code",[t._v("load")]),t._v("事件（读取操作完成）的监听函数，通常在这个函数里面使用"),s("code",[t._v("result")]),t._v("属性，拿到文件内容。")]),t._v(" "),s("li",[t._v("FileReader.onloadstart："),s("code",[t._v("loadstart")]),t._v("事件（读取操作开始）的监听函数。")]),t._v(" "),s("li",[t._v("FileReader.onloadend："),s("code",[t._v("loadend")]),t._v("事件（读取操作结束）的监听函数。")]),t._v(" "),s("li",[t._v("FileReader.onprogress："),s("code",[t._v("progress")]),t._v("事件（读取操作进行中）的监听函数。")])]),t._v(" "),s("p",[t._v("下面是监听"),s("code",[t._v("load")]),t._v("事件的一个例子。")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// HTML 代码如下")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// <input type="file" onchange="onChange(event)">')]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("onChange")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("event")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" file "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" event"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("target"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("files"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" reader "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("FileReader")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  reader"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("onload")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("event")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("event"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("target"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("result"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  reader"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("readAsText")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("file"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("上面代码中，每当文件控件发生变化，就尝试读取第一个文件。如果读取成功（"),s("code",[t._v("load")]),t._v("事件发生），就打印出文件内容。")]),t._v(" "),s("p",[t._v("FileReader 有以下实例方法。")]),t._v(" "),s("ul",[s("li",[t._v("FileReader.abort()：终止读取操作，"),s("code",[t._v("readyState")]),t._v("属性将变成"),s("code",[t._v("2")]),t._v("。")]),t._v(" "),s("li",[t._v("FileReader.readAsArrayBuffer()：以 ArrayBuffer 的格式读取文件，读取完成后"),s("code",[t._v("result")]),t._v("属性将返回一个 ArrayBuffer 实例。")]),t._v(" "),s("li",[t._v("FileReader.readAsBinaryString()：读取完成后，"),s("code",[t._v("result")]),t._v("属性将返回原始的二进制字符串。")]),t._v(" "),s("li",[t._v("FileReader.readAsDataURL()：读取完成后，"),s("code",[t._v("result")]),t._v("属性将返回一个 Data URL 格式（Base64 编码）的字符串，代表文件内容。对于图片文件，这个字符串可以用于"),s("code",[t._v("<img>")]),t._v("元素的"),s("code",[t._v("src")]),t._v("属性。注意，这个字符串不能直接进行 Base64 解码，必须把前缀"),s("code",[t._v("data:*/*;base64,")]),t._v("从字符串里删除以后，再进行解码。")]),t._v(" "),s("li",[t._v("FileReader.readAsText()：读取完成后，"),s("code",[t._v("result")]),t._v("属性将返回文件内容的文本字符串。该方法的第一个参数是代表文件的 Blob 实例，第二个参数是可选的，表示文本编码，默认为 UTF-8。")])]),t._v(" "),s("p",[t._v("下面是一个例子。")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('/* HTML 代码如下\n  <input type="file" onchange="previewFile()">\n  <img src="" height="200">\n*/')]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("previewFile")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" preview "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("querySelector")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'img'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" file    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("querySelector")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'input[type=file]'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("files"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" reader  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("FileReader")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  reader"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'load'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    preview"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("src "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" reader"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("result"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("file"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    reader"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("readAsDataURL")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("file"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("上面代码中，用户选中图片文件以后，脚本会自动读取文件内容，然后作为一个 Data URL 赋值给"),s("code",[t._v("<img>")]),t._v("元素的"),s("code",[t._v("src")]),t._v("属性，从而把图片展示出来。")])])}),[],!1,null,null,null);a.default=n.exports}}]);
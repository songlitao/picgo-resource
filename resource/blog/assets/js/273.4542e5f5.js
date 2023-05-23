(window.webpackJsonp=window.webpackJsonp||[]).push([[273],{762:function(a,t,s){"use strict";s.r(t);var e=s(19),r=Object(e.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"cherry-pick-分支转移"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cherry-pick-分支转移"}},[a._v("#")]),a._v(" cherry-pick 分支转移")]),a._v(" "),s("p",[a._v("对于多分支的代码库，将代码从一个分支转移到另一个分支是常见需求。")]),a._v(" "),s("p",[a._v("这时分两种情况。一种情况是，你需要另一个分支的所有代码变动，那么就采用合并（"),s("code",[a._v("git merge")]),a._v("）。另一种情况是，你只需要部分代码变动（某几个提交），这时可以采用 Cherry pick。")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://fastly.jsdelivr.net/gh/songlitao/picgo/resource/blog/assets/imgs/git/05-01.jpg",alt:"img"}})]),a._v(" "),s("h2",{attrs:{id:"一、基本用法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一、基本用法"}},[a._v("#")]),a._v(" 一、基本用法")]),a._v(" "),s("p",[s("code",[a._v("git cherry-pick")]),a._v("命令的作用，就是将指定的提交（commit）应用于其他分支。")]),a._v(" "),s("blockquote",[s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" cherry-pick "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("commitHash"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])])]),a._v(" "),s("p",[a._v("上面命令就会将指定的提交"),s("code",[a._v("commitHash")]),a._v("，应用于当前分支。这会在当前分支产生一个新的提交，当然它们的哈希值会不一样。")]),a._v(" "),s("p",[a._v("举例来说，代码仓库有"),s("code",[a._v("master")]),a._v("和"),s("code",[a._v("feature")]),a._v("两个分支。")]),a._v(" "),s("blockquote",[s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("    a - b - c - d   Master\n         "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n           e - f - g Feature\n")])])])]),a._v(" "),s("p",[a._v("现在将提交"),s("code",[a._v("f")]),a._v("应用到"),s("code",[a._v("master")]),a._v("分支。")]),a._v(" "),s("blockquote",[s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 切换到 master 分支")]),a._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" checkout master\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Cherry pick 操作")]),a._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" cherry-pick f\n")])])])]),a._v(" "),s("p",[a._v("上面的操作完成以后，代码库就变成了下面的样子。")]),a._v(" "),s("blockquote",[s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("    a - b - c - d - f   Master\n         "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n           e - f - g Feature\n")])])])]),a._v(" "),s("p",[a._v("从上面可以看到，"),s("code",[a._v("master")]),a._v("分支的末尾增加了一个提交"),s("code",[a._v("f")]),a._v("。")]),a._v(" "),s("p",[s("code",[a._v("git cherry-pick")]),a._v("命令的参数，不一定是提交的哈希值，分支名也是可以的，表示转移该分支的最新提交。")]),a._v(" "),s("blockquote",[s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" cherry-pick feature\n")])])])]),a._v(" "),s("p",[a._v("上面代码表示将"),s("code",[a._v("feature")]),a._v("分支的最近一次提交，转移到当前分支。")]),a._v(" "),s("h2",{attrs:{id:"二、转移多个提交"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二、转移多个提交"}},[a._v("#")]),a._v(" 二、转移多个提交")]),a._v(" "),s("p",[a._v("Cherry pick 支持一次转移多个提交。")]),a._v(" "),s("blockquote",[s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" cherry-pick "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("HashA"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("HashB"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])])]),a._v(" "),s("p",[a._v("上面的命令将 A 和 B 两个提交应用到当前分支。这会在当前分支生成两个对应的新提交。")]),a._v(" "),s("p",[a._v("如果想要转移一系列的连续提交，可以使用下面的简便语法。")]),a._v(" "),s("blockquote",[s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" cherry-pick A"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v("B \n")])])])]),a._v(" "),s("p",[a._v("上面的命令可以转移从 A 到 B 的所有提交。它们必须按照正确的顺序放置：提交 A 必须早于提交 B，否则命令将失败，但不会报错。")]),a._v(" "),s("p",[a._v("注意，使用上面的命令，提交 A 将不会包含在 Cherry pick 中。如果要包含提交 A，可以使用下面的语法。")]),a._v(" "),s("blockquote",[s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" cherry-pick A^"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v("B \n")])])])]),a._v(" "),s("h2",{attrs:{id:"三、配置项"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#三、配置项"}},[a._v("#")]),a._v(" 三、配置项")]),a._v(" "),s("p",[s("code",[a._v("git cherry-pick")]),a._v("命令的常用配置项如下。")]),a._v(" "),s("p",[s("strong",[a._v("（1）"),s("code",[a._v("-e")]),a._v("，"),s("code",[a._v("--edit")])])]),a._v(" "),s("p",[a._v("打开外部编辑器，编辑提交信息。")]),a._v(" "),s("p",[s("strong",[a._v("（2）"),s("code",[a._v("-n")]),a._v("，"),s("code",[a._v("--no-commit")])])]),a._v(" "),s("p",[a._v("只更新工作区和暂存区，不产生新的提交。")]),a._v(" "),s("p",[s("strong",[a._v("（3）"),s("code",[a._v("-x")])])]),a._v(" "),s("p",[a._v("在提交信息的末尾追加一行"),s("code",[a._v("(cherry picked from commit ...)")]),a._v("，方便以后查到这个提交是如何产生的。")]),a._v(" "),s("p",[s("strong",[a._v("（4）"),s("code",[a._v("-s")]),a._v("，"),s("code",[a._v("--signoff")])])]),a._v(" "),s("p",[a._v("在提交信息的末尾追加一行操作者的签名，表示是谁进行了这个操作。")]),a._v(" "),s("p",[s("strong",[a._v("（5）"),s("code",[a._v("-m parent-number")]),a._v("，"),s("code",[a._v("--mainline parent-number")])])]),a._v(" "),s("p",[a._v("如果原始提交是一个合并节点，来自于两个分支的合并，那么 Cherry pick 默认将失败，因为它不知道应该采用哪个分支的代码变动。")]),a._v(" "),s("p",[s("code",[a._v("-m")]),a._v("配置项告诉 Git，应该采用哪个分支的变动。它的参数"),s("code",[a._v("parent-number")]),a._v("是一个从"),s("code",[a._v("1")]),a._v("开始的整数，代表原始提交的父分支编号。")]),a._v(" "),s("blockquote",[s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" cherry-pick -m "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("commitHash"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])])]),a._v(" "),s("p",[a._v("上面命令表示，Cherry pick 采用提交"),s("code",[a._v("commitHash")]),a._v("来自编号1的父分支的变动。")]),a._v(" "),s("p",[a._v("一般来说，1号父分支是接受变动的分支（the branch being merged into），2号父分支是作为变动来源的分支（the branch being merged from）。")]),a._v(" "),s("h2",{attrs:{id:"四、代码冲突"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#四、代码冲突"}},[a._v("#")]),a._v(" 四、代码冲突")]),a._v(" "),s("p",[a._v("如果操作过程中发生代码冲突，Cherry pick 会停下来，让用户决定如何继续操作。")]),a._v(" "),s("p",[s("strong",[a._v("（1）"),s("code",[a._v("--continue")])])]),a._v(" "),s("p",[a._v("用户解决代码冲突后，第一步将修改的文件重新加入暂存区（"),s("code",[a._v("git add .")]),a._v("），第二步使用下面的命令，让 Cherry pick 过程继续执行。")]),a._v(" "),s("blockquote",[s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" cherry-pick --continue\n")])])])]),a._v(" "),s("p",[s("strong",[a._v("（2）"),s("code",[a._v("--abort")])])]),a._v(" "),s("p",[a._v("发生代码冲突后，放弃合并，回到操作前的样子。")]),a._v(" "),s("p",[s("strong",[a._v("（3）"),s("code",[a._v("--quit")])])]),a._v(" "),s("p",[a._v("发生代码冲突后，退出 Cherry pick，但是不回到操作前的样子。")]),a._v(" "),s("h2",{attrs:{id:"五、转移到另一个代码库"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#五、转移到另一个代码库"}},[a._v("#")]),a._v(" 五、转移到另一个代码库")]),a._v(" "),s("p",[a._v("Cherry pick 也支持转移另一个代码库的提交，方法是先将该库加为远程仓库。")]),a._v(" "),s("blockquote",[s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" remote "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("add")]),a._v(" target git://gitUrl\n")])])])]),a._v(" "),s("p",[a._v("上面命令添加了一个远程仓库"),s("code",[a._v("target")]),a._v("。")]),a._v(" "),s("p",[a._v("然后，将远程代码抓取到本地。")]),a._v(" "),s("blockquote",[s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" fetch target\n")])])])]),a._v(" "),s("p",[a._v("上面命令将远程代码仓库抓取到本地。")]),a._v(" "),s("p",[a._v("接着，检查一下要从远程仓库转移的提交，获取它的哈希值。")]),a._v(" "),s("blockquote",[s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" log target/master\n")])])])]),a._v(" "),s("p",[a._v("最后，使用"),s("code",[a._v("git cherry-pick")]),a._v("命令转移提交。")]),a._v(" "),s("blockquote",[s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" cherry-pick "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("commitHash"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])])]),a._v(" "),s("br"),a._v(" "),s("blockquote",[s("p",[a._v("参考来源：http://www.ruanyifeng.com/blog/2020/04/git-cherry-pick.html")])])])}),[],!1,null,null,null);t.default=r.exports}}]);
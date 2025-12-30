exports.defaultSnippets = [
  {
    languages: [
      "vue",
      "scss"
    ],
    name: "aapaasTheme",
    matched: "var[^)]*$",
    maxLabelLength: 28,
    triggerCharacters: ["v", "("],
    snippets: [
      { label: "--aap-color-primary", insertText: "--aap-color-primary", detail: '主题色', property: "", explain: "" },
      { label: "--aap-bg-paper", insertText: "--aap-bg-paper", detail: '背景-白', property: "#fff", explain: "" },
      { label: "--aap-bg-default", insertText: "--aap-bg-default", detail: '背景-灰', property: "#f0f2f5", explain: "" },
      { label: "--aap-border-color", insertText: "--aap-border-color", detail: '边框颜色', property: "#dcdfe6", explain: "" },
      { label: "--aap-text-primary", insertText: "--aap-text-primary", detail: '字体1', property: "#909399", explain: "" },
      { label: "--aap-text-secondary", insertText: "--aap-text-secondary", detail: '字体2', property: "", explain: "" },
      { label: "--el-color-primary-light-3", insertText: "--el-color-primary-light-3", detail: '主题-浅', property: "", explain: "" },
      { label: "--el-color-primary-light-5", insertText: "--el-color-primary-light-5", detail: '主题-浅', property: "", explain: "" },
      { label: "--el-color-primary-light-7", insertText: "--el-color-primary-light-7", detail: '主题-浅', property: "", explain: "" },
      { label: "--el-color-primary-light-8", insertText: "--el-color-primary-light-8", detail: '主题-浅', property: "", explain: "" },
      { label: "--el-color-primary-light-9", insertText: "--el-color-primary-light-9", detail: '主题-浅', property: "", explain: "" },
      { label: "--el-color-primary-dark-2", insertText: "--el-color-primary-dark-2", detail: '主题-深', property: "", explain: "" },
    ]
  },
  {
    languages: [
      "vue",
      "html"
    ],
    name: 'a-css-helper',
    matched: "a-[\\w-]*$",
    triggerCharacters: ["a", "-"],
    maxLabelLength: 15,
    snippets: [
      { label: "a-c-p", insertText: "a-c-p", detail: "鼠标手型", property: "cursor: pointer", explain: "" },
      { label: "a-fx", insertText: "a-fx", detail: "弹性布局，垂直居中", property: "display: flex;align-items: center", explain: "" },
      { label: "a-jc-c", insertText: "a-jc-c", detail: "主轴居中", property: "justify-content: center", explain: "" },
      { label: "a-jc-sb", insertText: "a-jc-sb", detail: "主轴两端对齐", property: "justify-content: space-between", explain: "" },
      { label: "a-d-f", insertText: "a-d-f", detail: "flex 布局", property: "display: flex", explain: "" },
      { label: "a-d-c", insertText: "a-d-c", detail: "将容器消失，仅保留子元素布局", property: "display: contents", explain: "" },
      { label: "a-jc-fe", insertText: "a-jc-fe", detail: "主轴靠右对齐", property: "justify-content: flex-end", explain: "" },
      { label: "a-ai-c", insertText: "a-ai-c", detail: "交叉轴居中", property: "align-items: center", explain: "" },
      { label: "a-fd-c", insertText: "a-fd-c", detail: "垂直方向排列", property: "flex-direction: column", explain: "" },
      { label: "a-p-r", insertText: "a-p-r", detail: "相对定位", property: "position: relative", explain: "" },
      { label: "a-p-a", insertText: "a-p-a", detail: "绝对定位", property: "position: absolute", explain: "" },
      { label: "a-d-n", insertText: "a-d-n", detail: "隐藏元素", property: "display: none !important", explain: "" },
      { label: "a-inset", insertText: "a-inset", detail: "上下左右 0", property: "top: 0;left: 0;right: 0;bottom: 0", explain: "" },
      { label: "a-pe-n", insertText: "a-pe-n", detail: "禁止鼠标事件", property: "pointer-events: none", explain: "" },
      { label: "a-o-h", insertText: "a-o-h", detail: "隐藏溢出", property: "overflow: hidden", explain: "" },
      { label: "a-o-a", insertText: "a-o-a", detail: "自动溢出", property: "overflow: auto", explain: "" },
      { label: "a-o-ha", insertText: "a-o-ha", detail: "上下隐藏，左右自动", property: "overflow: hidden auto", explain: "" },
      { label: "a-ellipsis", insertText: "a-ellipsis", detail: "文本溢出省略号", property: "overflow: hidden;white-space: nowrap;text-overflow: ellipsis", explain: "" },
      { label: "a-w-100", insertText: "a-w-100", detail: "宽度 100%", property: "width: 100% !important", explain: "" },
      { label: "a-mh-100", insertText: "a-mh-100", detail: "最小高度 100%", property: "min-height: 100%", explain: "" },
      { label: "a-h-100", insertText: "a-h-100", detail: "高度 100%", property: "height: 100%", explain: "" },
      { label: "a-mw-0", insertText: "a-mw-0", detail: "最小宽度 0", property: "min-width: 0", explain: "" },
      { label: "a-mh-0", insertText: "a-mh-0", detail: "最小高度 0", property: "min-height: 0", explain: "" },
      { label: "a-fs-0", insertText: "a-fs-0", detail: "禁止缩小", property: "flex-shrink: 0", explain: "" },
      { label: "a-h-0", insertText: "a-h-0", detail: "高度 0", property: "height: 0", explain: "" },
      { label: "a-f-1", insertText: "a-f-1", detail: "弹性伸展 1", property: "flex: 1", explain: "" },
      { label: "a-f-u", insertText: "a-f-u", detail: "取消该元素的放大比例", property: "flex-grow: unset !important", explain: "" },
      { label: "a-o-0", insertText: "a-o-0", detail: "透明度 0", property: "opacity: 0", explain: "" },
      { label: "a-o-1", insertText: "a-o-1", detail: "透明度 1", property: "opacity: 1", explain: "" }
    ]
  }
]
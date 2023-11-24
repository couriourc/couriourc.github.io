/* global hexo */

'use strict'
// 标签类型的插件
let fs = require('hexo-fs');

hexo.extend.tag.register("english", function (args, content) {
  return `<figure style="margin:0;padding:0;">
  <figcaption>${content}</figcaption>
  <audio
    style="display:none;"
      controls
      src="http://dict.youdao.com/dictvoice?type=0&audio=${args.join('')}">
          <a href="http://dict.youdao.com/dictvoice?type=0&audio=${args.join('')}">
              Download audio
          </a>
  </audio>
</figure>
`
}, { ends: true });

let init = false;
let defaultConfig = `{
  math: {
    mathjax: 'https://cdn.jsdelivr.net/gh/mathjax/mathjax@2.7.8/MathJax.js',
    config: 'TeX-AMS_HTML-full',
    TeX: { Macros: { RR: "{\\bf R}" } }
  },
  markdown: {
    smartypants: true
  },
  plugins: [RevealMarkdown],
  backgroundTransition: 'slide',
  // 显示演示文稿控制箭头
  controls: true,

  // 通过提供提示来帮助用户学习控件，例如，当用户第一次遇到垂直幻灯片时通过弹跳向下箭头来帮助他们
  controlsTutorial: true,

  // 确定控件出现的位置，“边缘”(edges)或“右下”(bottom-right)
  controlsLayout: 'bottom-right',

  // 向后导航箭头的可见性规则：渐变、隐藏、可见
  // "faded", "hidden", "visible"
  controlsBackArrows: 'faded',

  // 显示演示进度条
  progress: true,

  // 显示当前幻灯片的页码
  slideNumber: false,

  // 将当前幻灯片编号添加到URL散列中，以便重新加载页面/复制URL将返回到相同的幻灯片
  hash: false,

  // 将每个幻灯片更改推送到浏览器历史记录。这意味着 hash: true
  history: true,

  // 启用键盘快捷键进行导航
  keyboard: true,

  // 启用幻灯片概览模式
  overview: true,

  // 幻灯片的垂直居中
  center: true,

  // 在具有触摸输入的设备上启用触摸导航
  touch: true,

  // 循环演示
  loop: false,

  // 将显示方向更改为RTL
  rtl: false,

  // 阅读 https://github.com/hakimel/reveal.js/#navigation-mode
  navigationMode: 'default',

  // 每次演示加载时随机化幻灯片的顺序
  shuffle: false,

  // 全局打开和关闭片段
  fragments: true,

  // 标记是否在URL中包含当前片段，以便重新加载将您带到相同的片段位置
  fragmentInURL: false,

  // 标记演示文稿是否以嵌入式模式运行，即包含在屏幕的有限区域中
  embedded: false,

  // 当按下问号键时，如果我们应该显示帮助覆盖标志
  help: true,

  // 如果演讲者的笔记应该对所有观众可见，则标记
  showNotes: false,

  // 自动播放嵌入式媒体的全局覆盖 (video/audio/iframe)
  // - null: 仅当存在数据自动播放时，媒体才会自动播放
  // - true: 无论设置如何，所有媒体都会自动播放
  // - false: 无论设置如何，都不会自动播放媒体
  autoPlayMedia: null,

  // 全局替换，用于预加载延迟加载的iframe
  // - null: 在视图范围（viewDistance）内时，将加载具有data-src和data-preload的iframe，在可见时将加载仅具有data-src的iframe
  // - true: 在viewDistance中时，将加载所有带有data-src的iframe
  // - false: 所有带有data-src的iframe仅在可见时加载
  preloadIframes: null,

  // 自动前进到下一张幻灯片之间的毫秒数，设置为0时将禁用，可以通过使用幻灯片上的data-autoslide属性覆盖此值
  autoSlide: 0,

  // 用户输入后停止自动滑动
  autoSlideStoppable: true,

  // 自动滑动时使用此方法进行导航
  autoSlideMethod: Reveal.navigateNext,

  // 指定您认为每张幻灯片要花费的平均时间（以秒为单位）。 用于在扬声器视图中显示起搏计时器
  defaultTiming: 120,

  //通过鼠标滚轮启用幻灯片导航
  mouseWheel: false,

  // 如果不活动则隐藏光标
  hideInactiveCursor: true,

  // 隐藏光标之前的时间（以毫秒为单位）
  hideCursorTime: 5000,

  // 隐藏移动设备上的地址栏
  hideAddressBar: true,

  // 在iframe预览覆盖层中打开链接分别添加data-preview-link和 data-preview-link="false"自定义每个链接
  previewLinks: false,

  // 过渡风格 无/淡入/滑动/凸出/凹入/缩放
  transition: 'slide', // none/fade/slide/convex/concave/zoom

  // 过渡速度 默认/快速/慢
  transitionSpeed: 'default', // default/fast/slow

  // 整页幻灯片背景的过渡样式 无/淡入/滑动/凸出/凹入/缩放
  backgroundTransition: 'fade', // none/fade/slide/convex/concave/zoom

  // 远离当前可见的幻灯片数量
  viewDistance: 3,

  // 视差背景图片
  parallaxBackgroundImage: '', // e.g. "'https://s3.amazonaws.com/hakim-static/reveal-js/reveal-parallax-1.jpg'"

  // 视差背景尺寸
  parallaxBackgroundSize: '', // CSS syntax, e.g. "2100px 900px"

  // 每张幻灯片移动视差背景的像素数
  // - 除非指定，否则自动计算
  // - 设置为0以禁用沿轴移动
  parallaxBackgroundHorizontal: null,
  parallaxBackgroundVertical: null,

  // 用于显示幻灯片的显示模式
  display: 'block'
}`
hexo.extend.tag.register("revealmarkdown", function (args, content) {
  // 配置主体
  // let config = args[0] ?? "{}";
  // try {
  //   config = JSON.stringify({
  //     ...JSON.parse(config)
  //   });
  // } catch (err) {
  //   throw new SyntaxError("Please Input  Json Token")
  // }
  let script = ''
  if (!init) {
    script = `
    <link href="https://cdn.bootcdn.net/ajax/libs/reveal.js/4.3.1/theme/black.min.css" rel="stylesheet">
    <link href="https://cdn.bootcdn.net/ajax/libs/reveal.js/4.3.1/reveal.min.css" rel="stylesheet">
    <script src="https://cdn.bootcdn.net/ajax/libs/reveal.js/4.3.1/plugin/markdown/markdown.min.js"></script>
    <script>
      window.reveal = document.createElement("script");
      reveal.src ="https://cdn.bootcdn.net/ajax/libs/reveal.js/4.3.1/reveal.min.js";
      reveal.addEventListener("load",()=>{
        Reveal.initialize(JSON.parse(${defaultConfig}));
      document.head.append(reveal);
    </script>
    `;
    init = true;
  }
  return `
  ${script}
  <div class="reveal"  style="height: 45vh;">
    <section class="slides">
    <section data-background-color="aquamarine">
  <h2>🍦</h2>
</section>
    <section data-markdown
    >
      <textarea data-template>
        ${content}
      </textarea>
    </section>
  </section>
  </div>
  `
}, { ends: true, })



hexo.extend.tag.register("githubreader", function (args, content) {
  let repoName = args[0];
  let frameHeight = args[1];
  let frameWidth = args[2];

return `
  <iframe
    width="${frameWidth}"
    height="${frameHeight}"
    name="${repoName}"
    src="https://github1s.com/${repoName}">
  </iframe>
`
})





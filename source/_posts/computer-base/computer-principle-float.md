typora-root-url: ./computer-principle
title: 计算机组成原理——指令周期
author: CouriourC
mathjax: true
tags:
  - 计算机组成原理
  - 计算机基础
categories:
  - computer-base
nanoid: QVwLhKLmbhkv8dlJdb9A1
date: 2023-02-12 13:00:57
updated: 2023-02-13 12:00:57
sticky:
---
<script src="https://cdn.jsdelivr.net/npm/@svgdotjs/svg.js@3.0/dist/svg.min.js"></script>


# 指令周期


CPU 执行指令共有四个周期：取指周期->[间指周期]->执行周期->[中断周期]



<svg width="800" height="600" xmlns="http://www.w3.org/2000/svg" id="graph1">
 <g>
  <title>取指周期->执行周期的指令周期</title>
  <g id="svg_31">
   <rect stroke="#000" id="svg_29" height="168" width="82" y="232" x="653" fill="#fff"/>
   <text id="rom" x="659" xml:space="preserve" text-anchor="start" font-family="Noto Sans JP" font-size="24" stroke-width="0" id="svg_30" y="326" stroke="#000" fill="#000000">存储器</text>
  </g>
  <g stroke="null" id="svg_33">
   <rect stroke="#000" id="svg_6" height="287.99999" width="350.00001" y="154" x="54" fill="#fff"/>
   <rect stroke="#000" id="svg_7" height="65.57538" width="70.94595" y="177.92615" x="61.43243" fill="#fff"/>
   <text transform="matrix(0.675676 0 0 0.886154 17.5135 17.76)" stroke="#000" xml:space="preserve" text-anchor="start" font-family="Noto Sans JP" font-size="24" id="svg_8" y="226.74306" x="95" stroke-width="0" fill="#000000">PC</text>
   <path stroke="#000" id="svg_9" d="m274.27027,182.35692l83.78379,0l0,63.80307l-83.78379,0l0,-63.80307z" opacity="undefined" fill="#fff"/>
   <text transform="matrix(0.675676 0 0 0.886154 17.5135 17.76)" stroke="#000" xml:space="preserve" text-anchor="start" font-family="Noto Sans JP" font-size="24" stroke-width="0" id="svg_11" y="229.74306" x="416" fill="#000000">MAR</text>
   <rect stroke="#000" id="svg_12" height="40.76308" width="75" y="284.26461" x="277.64865" fill="#fff"/>
   <text transform="matrix(0.675676 0 0 0.886154 17.5135 17.76)" stroke="#000" xml:space="preserve" text-anchor="start" font-family="Noto Sans JP" font-size="24" stroke-width="0" id="svg_14" y="332.74306" x="425" fill="#000000">CU</text>
   <rect stroke="#000" id="svg_15" height="62.91692" width="87.83784" y="353.38461" x="273.5946" fill="#fff"/>
   <text transform="matrix(0.675676 0 0 0.886154 17.5135 17.76)" stroke="#000" xml:space="preserve" text-anchor="start" font-family="Noto Sans JP" font-size="24" stroke-width="0" id="svg_16" y="423.74306" x="413" fill="#000000">MDR</text>
   <rect stroke="#000" id="svg_17" height="57.6" width="70.94595" y="361.35999" x="62.10811" fill="#fff"/>
   <text transform="matrix(0.675676 0 0 0.886154 17.5135 17.76)" stroke="#000" xml:space="preserve" text-anchor="start" font-family="Noto Sans JP" font-size="24" stroke-width="0" id="svg_19" y="430.74306" x="93" fill="#000000">IR</text>
  </g>
  <g id="svg_37">
   <line id="svg_35" y2="209" x2="275" y1="208" x1="130" stroke="#000" fill="none"/>
   <text xml:space="preserve" text-anchor="start" font-family="Noto Sans JP" font-size="24" stroke-width="0" id="svg_36" y="198" x="192" stroke="#000" fill="#000000">1</text>
  </g>
  <g stroke="null" id="svg_40">
   <line stroke="#000" id="svg_38" y2="213" x2="473" y1="212" x1="360" fill="none"/>
   <text xml:space="preserve" text-anchor="start" font-family="Noto Sans JP" font-size="24" id="svg_45" y="195" x="408" stroke-width="0" stroke="#000" fill="#000000">2</text>
  </g>
  <text xml:space="preserve" text-anchor="start" font-family="'Dancing Script'" font-size="24" stroke-width="0" id="svg_42" y="60" x="382" stroke="#000" fill="#000000">地址总线</text>
  <text xml:space="preserve" text-anchor="start" font-family="'Dancing Script'" font-size="24" stroke-width="0" id="svg_43" y="60" x="489" stroke="#000" fill="#000000">数据总线</text>
  <text xml:space="preserve" text-anchor="start" font-family="'Dancing Script'" font-size="24" stroke-width="0" id="svg_44" y="60" x="594" stroke="#000" fill="#000000">控制总线</text>
  <g stroke="null" id="svg_48">
   <line stroke="#000" id="svg_46" y2="156" x2="707.00001" y1="155" x1="476" fill="none"/>
   <text xml:space="preserve" text-anchor="start" font-family="Noto Sans JP" font-size="24" id="svg_49" y="140" x="586" stroke-width="0" stroke="#000" fill="#000000">3</text>
   <line id="svg_52" y2="231" x2="707" y1="157" x1="707" stroke="#000" fill="none"/>
  </g>
  <line id="svg_56" y2="260" x2="656" y1="259" x1="608" stroke="#000" fill="none"/>
  <g id="svg_61">
   <path id="svg_54" d="m353,299l254,3" opacity="undefined" stroke="#000" fill="none"/>
   <text xml:space="preserve" text-anchor="start" font-family="Noto Sans JP" font-size="24" stroke-width="0" id="svg_60" y="292" x="436" stroke="#000" fill="#000000">4</text>
  </g>
  <text xml:space="preserve" text-anchor="start" font-family="Noto Sans JP" font-size="24" stroke-width="0" id="svg_62" y="242" x="622" stroke="#000" fill="#000000">5</text>
  <path id="svg_66" d="m277,307c-183,-1 -170,2 -170,2c0,0 -2,-64 -2,-64" opacity="NaN" stroke="#000" fill="none"/>
  <text xml:space="preserve" text-anchor="start" font-family="Noto Sans JP" font-size="24" stroke-width="0" id="svg_71" y="286" x="200" stroke="#000" fill="#000000">9</text>
  <g id="svg_72">
   <line id="svg_59" y2="382" x2="137" y1="381" x1="275" stroke="#000" fill="none"/>
   <text xml:space="preserve" text-anchor="start" font-family="Noto Sans JP" font-size="24" stroke-width="0" id="svg_70" y="365" x="195" stroke="#000" fill="#000000">8</text>
  </g>
  <g id="svg_73">
   <line id="svg_64" y2="393" x2="367" y1="392" x1="531" stroke="#000" fill="none"/>
   <text xml:space="preserve" text-anchor="start" font-family="Noto Sans JP" font-size="24" stroke-width="0" id="svg_69" y="381" x="437" stroke="#000" fill="#000000">7</text>
  </g>
  <g id="svg_74">
   <g id="svg_32">
    <line id="svg_24" y2="520" x2="471" y1="77" x1="474" stroke="#000" fill="none"/>
    <line id="svg_27" y2="520" x2="530" y1="77" x1="533" stroke="#000" fill="none"/>
    <line id="svg_28" y2="520" x2="605" y1="77" x1="608" stroke="#000" fill="none"/>
   </g>
   <line stroke="#000" id="svg_63" y2="357" x2="528.99999" y1="357" x1="655" fill="none"/>
   <text xml:space="preserve" text-anchor="start" font-family="Noto Sans JP" font-size="24" stroke-width="0" id="svg_68" y="343" x="571" stroke="#000" fill="#000000">6</text>
  </g>
 </g>
</svg>







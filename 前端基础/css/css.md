# BFC（Block Formatting Contexts）块级格式化上下文
> 决定了元素如何对其内容进行定位，以及与其它元素的关系和相互作用
## 触发方式
1. 弹性布局
2. 绝对定位
3. 溢出属性overflow：hidden/scroll/inherit/auto
4. 行内块
5. 浮动
6. display:table
## BFC布局规则
- 同一个BFC的两个相邻Box的margin会发生重叠
- BFC是一个独立的容器，里面的元素不会影响到外面的元素
## 作用
- 解决margin垂直方向重叠
- 解决高度塌陷
- 清除浮动

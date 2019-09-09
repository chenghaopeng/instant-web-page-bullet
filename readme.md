# 实时网页弹幕

用 JS 和 PHP 实现的简单的实时网页弹幕

## 效果图

![效果图](screenshot.gif)

由于 GIF 的原因，颜色有些失真

## 使用方法

1. 准备一个 PHP 服务器

2. 在服务器的某一个位置，存放 `src` 文件夹内的三个文件，**确保在同一目录下**

3. 在 `src/danmu.js` 中配置文件路径以及其他自定义项

4. 开启 PHP 服务器，即可通过 `src/index.html` 页面发射弹幕

5. 在需要接收、显示弹幕的网页上，引用如下 JS 文件。第一个是jQuery，第二个是弹幕脚本。弹幕脚本地址按实际位置修改

```js
    <script src="http://cdn.chper.cn/jquery-3.3.1.min.js"></script>
    <script src="http://chper.cn/danmu/danmu.js"></script>
```

## 推荐的组合

＋[impress.js](https://github.com/impress/impress.js)

网页幻灯片 + 弹幕与观众互动

## 在线预览

发射弹幕：[http://chper.cn/danmu](http://chper.cn/danmu/)

查看弹幕：[http://chper.cn/xlsjlh](http://chper.cn/xlsjlh)

**如果有多个人或者多个页面存在，会引起弹幕错乱**

## 未来有可能的规(ge)划(zi)

1. 用 JAVA 等多种语言写后端，自由选择更灵活

2. 前端用 WebSocket 代替轮询，解决跨域问题

3. 支持用户端自定义弹幕样式

4. 有兴趣的人 Fork 过去改吧，咕咕咕

## 联系我

QQ：794780360
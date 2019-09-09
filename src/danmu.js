/* ---- 用户配置 ---- */

/* deal.php 所在的位置 */
var server = "http://chper.cn/danmu";

/* 弹幕的自定义css */
/* 不建议修改 position, left, white-space, box-sizing 等可能引起弹幕位置、文字排列错乱的项 */
var customCss = {};

/* 弹幕的容器，默认为 body */
var container = "body";

/* 弹幕停留的最小时间和随机的额外时间 (ms) ，总时间为 (minTime + [0, 1) * randomDuration) */
var minTime = 4000, randomDuration = 6000;

/* 获取到的弹幕的发射延迟时间 (ms) ，为 ([0, 1) * shootDelay) */
var shootDelay = 1000;

/* 获取弹幕的间隔时间 (ms) */
var interval = 1000;






/* ---- 主代码部分 ---- */

/* 一般来说不需要修改这一部分的代码 */

function shoot(str) {
    var danmu = document.createElement("div");
    $(danmu).text(str);
    $(danmu).css({ //载入默认样式
        "position": "fixed",
        "padding": "20px 40px",
        "font-size": 4 + Math.random() * 2 + "vh",
        "left": "100%",
        "top": Math.random() * 90 + "%",
        "border-radius": "10px",
        "background-color": "rgba(" + Math.ceil(Math.random() * 255) + ", " + Math.ceil(Math.random() * 255) + ", " + Math.ceil(Math.random() * 255) + ", .5)",
        "color": "white",
        "white-space": "nowrap",
        "box-sizing": "border-box"
    });
    $(danmu).css(customCss); //载入自定义样式
    $(container).append(danmu); //添加弹幕到容器
    $(danmu).animate({
        left: "-" + $(danmu).css("width")
    }, minTime + Math.random() * randomDuration, 'linear', function() {
        $(danmu).remove();
    });
}
$(function() {
    var getDanmu = setInterval(function() {
        console.log("获取弹幕中...");
        $.ajax({
            url: server + "/deal.php",
            data: { op: "get" },
            type: "post",
            success: function(data) {
                if (data === "") return;
                console.log(data);
                var strs = data.split("\n");
                for (var i = 0; i < strs.length; ++i) {
                    if (strs[i] !== "") {
                        setTimeout(function(str) {
                            shoot(str);
                        }(strs[i]), Math.ceil(Math.random() * shootDelay));
                    }
                }
            },
            error: function() {
                console.log("服务器是不是坏了？");
            }
        });
    }, interval);
});
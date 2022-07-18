// ==UserScript==
// @name         河南专技在线辅助
// @namespace    https://hnzj.ghlearning.com/
// @version      0.2
// @description  继续教育公需科目专业科目辅助|自动播放下一个视频|自动跳过答题|一次刷完所有已选课程
// @author       wechat
// @match        *://*.ghlearning.com/*
// @run-at       document-end
// ==/UserScript==

(function () {
    //'use strict';


    function enterCourse() {


        for(var j = 0;j< document.getElementsByClassName("btn learning").length;j++){
            console.log(j);
           if(document.getElementsByClassName("btn learning")[j].innerText == "进入学习"){
                   document.getElementsByClassName("btn learning")[j].click();
               break;
             }
        }


        if (document.querySelector(".item-box")) {
            for (var i = 0; i < document.querySelectorAll(".item-box").length; i++) {
                if (document.querySelectorAll(".sr-only")[i * 2].innerText != "100.0%") {
                    document.querySelectorAll(".item-box")[i].click();
                    break;
                }
            }
            setTimeout(function () {
     //           console.log("恭喜您完成已选的所有课程！");
                clearInterval(myTimer);
      //          alert("恭喜您完成已选的所有课程！\n河南专技在线辅助\n作者：wechat\n网址：https://hnzj.ghlearning.com/");
                history.back(-1);
            }, 2000);
        }
        let jindu = document.querySelector("#a span[du-html=sumschedule]");
        if (jindu) {

            if (jindu.innerText != "100.00") {
                if (document.querySelector(".pv-video")) {
                    let playerH5 = document.querySelector(".pv-video");
                    playerH5.volume = 0;
                    if (playerH5.paused) {
                        playerH5.play();
                    }
                }
                let dangqian = document.querySelector(".videoLi.active");
                if (dangqian.innerText.match(/单元测试/)){
                    location.reload();
                } else if (dangqian.innerText.match(/[0-9]+%/)[0] == "100%" && document.querySelector(".pt5 [class=progress-bar]")){
                    document.querySelector(".pt5 [class=progress-bar]").parentElement.parentElement.click();
                    setTimeout("location.reload();",2000);
                }
 //               console.log("【河南专技在线辅助】\n" + dangqian.innerText);
            } else {
                history.back(-1);
            }
        }
    }
    let myTimer = setInterval(enterCourse, 3000);

})();


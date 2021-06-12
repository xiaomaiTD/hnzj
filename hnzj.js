// ==UserScript==
// @name         hnzjlearning
// @namespace    https://github.com/teapiall/hnzj
// @version      202101
// @description  继续教育公需科目专业科目辅助|自动播放下一个视频
// @author       wechat
// @match        *://*.ghlearning.com/*
// @run-at       document-end
// ==/UserScript==

(function() {
    'use strict';

setInterval(function () {
        if (document.getElementsByClassName("item-box")[0]) {
            for (var j = 0; j < document.getElementsByClassName("item-box").length; j++) {
              if (document.getElementsByClassName("bx-green")[j].innerText == "" ) {
             if (document.getElementsByClassName("sr-only")[j * 2].innerText != "100.0%") {
                  document.getElementsByClassName("item-box")[j].click();
                    break;
                }
                }
            }
            setTimeout(function () {
                console.log("恭喜您完成已选的所有课程！");

                alert("恭喜您完成已选的所有课程！");
            }, 3000);
        }


        if ($('button[id][class="btn btn-primary"][style="display:inline-block"]')[0].innerText == "返回课程列表" || document.getElementsByClassName("font-w7 text-aaa sum style beginstyle")[0].innerText == "总学时进度（100.00%）") {
               console.log('课程进度完成，即将返回课程列表');
                history.back(-1);
             }
  var course = document.getElementsByClassName("rightnav cursor-p")[0];
  var list = course.getElementsByTagName("li");
  var i;

    for(i=0;i<list.length;i++){

    if (list[i].className == "clearfix videoLi active" && list[i].innerText.indexOf("目录") == -1){
    console.log(list[i].innerText);
    console.log(i);
    var current_course = i;
      }
    }

    if(list[current_course].innerText.indexOf("100%") != -1){
        if(list[current_course+1].innerText.indexOf("%") == -1){
        list[current_course+2].click();
        }else{list[current_course+1].click();
             }
          }

    document.getElementsByClassName("pv-playpause pv-iconfont pv-icon-btn-play")[0].click();

        }, 20000);

})();



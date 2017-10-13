/**
 * Created by Administrator on 2017/10/7 0007.
 */

$(function(){
    //关注&粉丝
    var strSearch = window.location.href;
    var arrSearch = strSearch.split("#");
    var user = arrSearch[1].split("&")[0];

    var selfUID = JSON.parse(localStorage.getItem('key'));//从webstorage中获取我的UID

    if(user == 'selfUID'){                  //判断是否为自己uid (是否显示关注按钮)
        $(".care").css({"display":"none"});
    }else{

        $(".care").mouseenter(function(){
            /*if($(".care").html() == "已关注"){
             console.log(123);
             $(".care").html("取消关注");
             }*/
            $(".care").css({"background":"#5bc0de"});
        }).mouseleave(function(){
            /*if($(".care").html() == "取消关注"){
             $(".care").html("已关注");
             }*/
            $(".care").css({"background":"#666"});
        })

        $.ajax({
            type:"post",
            data:{selfUID:user,otherUID:"aaa"},   //我的UID，当前页面的UID
            success:function(){

            }
        })

    }

    $.ajax({
        type:"post",
        url:"http://www.maxlucio.top/tuji1.0.2/selectFans",          //粉丝地址
        success:function(){

        }
    })

})
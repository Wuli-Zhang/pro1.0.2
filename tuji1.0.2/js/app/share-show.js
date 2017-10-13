/*
 * @Author: zhang
 * @Date:   2017-10-04 10:06:13
 * @Last Modified by:   zhang
 * @Last Modified time: 2017-10-08 17:38:15
 */
$(function() {
    

    // 发帖
    $(".fatie button").click(function() {
        location.href = " postMessage.html"
    })


    // 回复
    $(".fatie span:nth-of-type(1)").hover(function() {
        $(this).find('i').css("background-image", "url(../img/icon/pinglun-done.png)")
    }, function() {
        $(this).find('i').css("background-image", "url(../img/icon/pinglun.png)")

    })
    $(".fatie span:nth-of-type(5)").hover(function() {
        $(this).find('i').css("background-image", "url(../img/icon/fenxiang-done.png)")
    }, function() {
        $(this).find('i').css("background-image", "url(../img/icon/fenxiang.png)")

    })
    // 点赞
    $(".fatie span:nth-of-type(3)").click(function() {
        if ($(this).attr('data-show') == "true") {
            $(this).children('i').css('background-image', "url(../img/icon/zan-done.png)")
            $(this).attr('data-show', 'false')

        } else {
            $(this).children('i').css('background-image', "url(../img/icon/zan.png)")

            $(this).attr('data-show', 'true')
        }
    })



    // 获取文章和留言
    $.ajax({
        url: 'http://www.maxlucio.top/tuji1.0.2/getonepost',
        type: 'post',
        dataType: 'json',
        data: {},
        success: function(data) {

        },
        error:function(){

        }
    })


    // 发表留言
    $(".pinglun").on("click","button",function() {
        // 留言信息
        var data = $("#pinglun").val();

        $.ajax({
            url: 'http://www.maxlucio.top/tuji1.0.2/addrep',
            type: 'post',
            dataType: 'json',
            data: {},
            success: function(data) {


                // 刷新页面
                location.reload();
            },
            error:function(){

            }
        })

    })


// ta 的其他的帖子
    $.ajax({
    	url: 'http://www.maxlucio.top/tuji1.0.2/getotherposts',
    	type: 'post',
    	dataType: 'json',
    	data: {param1: 'value1'},
    	success:function(data){

    	},
    	error:function(){

    	}
    })

    $(".other").on("click","a",function(){

    	// 

    	// localStorage.setItem("arcID",)

    	location.href = " share-show.html";
    })
    
    

})
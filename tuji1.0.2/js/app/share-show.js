/*
 * @Author: zhang
 * @Date:   2017-10-04 10:06:13
 * @Last Modified by:   zhang
 * @Last Modified time: 2017-10-13 19:26:51
 */
$(function() {
    

    // 发帖
    $(".fatie button").click(function() {
        location.href = " postMessage.html"
    })


    // 发帖的回复
    $(".fatie span:nth-of-type(1)").hover(function() {
        $(this).find('i').css("background-image", "url(../img/icon/pinglun-done.png)")
    }, function() {
        $(this).find('i').css("background-image", "url(../img/icon/pinglun.png)")

    })
    // 发帖的分享
    $(".fatie span:nth-of-type(5)").hover(function() {
        $(this).find('i').css("background-image", "url(../img/icon/fenxiang-done.png)")
    }, function() {
        $(this).find('i').css("background-image", "url(../img/icon/fenxiang.png)")

    })
    // 发帖的点赞
    $(".fatie span:nth-of-type(3)").click(function() {
        if ($(this).attr('data-show') == "true") {

            $(this).children('i').css('background-image', "url(../img/icon/zan-done.png)")
            $(this).attr('data-show', 'false')
            $(".title span i:nth-of-type(3)").html(parseInt($(".title span i:nth-of-type(3)").html())+1+"个人赞过")

        } else {
            $(this).children('i').css('background-image', "url(../img/icon/zan.png)")
            $(".title span i:nth-of-type(3)").html(parseInt($(".title span i:nth-of-type(3)").html())-1+"个人赞过")
            $(this).attr('data-show', 'true')
        }
    })


    var arcID = localStorage.getItem("arcID");
    // 获取文章和留言
    $.ajax({
        url: 'http://www.maxlucio.top/tuji1.0.2/getonepost',
        type: 'post',
        dataType: 'json',
        data: {post_id:arcID},
        success: function(data) {
            console.log(data)
            console.log(JSON.parse(data))
            var html = `<div class="article-top">
                    <a href="javascript:;"><img data-id='${data.user.id}' src="${data.user.headportrait}"></a>
                    <div class="title">
                        <h1>${data.title}</h1>
                        <span><i><a href="javascript:;">作者:${data.user.nickname}</a></i><i>${data.date}</i><i>${data.like}个人赞过</i><em>情感</em><em>青春</em></span>
                    </div>
                </div>`
            // 文章
            var $div_arc = $("<div class='article'>");
            $div_arc.html(data.content);
            // 评论
            for(var i=0;i<data.replayPosts.length;i++){
                var $li = $('<li class="pinglun-list">')
                var $li_a = $('<a class="pinglun-tx" href="javascript:;">')
                var $li_aimg = $('<img>')
                $li_aimg.attr('src', data.replayPosts);
            }


            $(".main-left").html(html).append($div_arc);

        },
        error:function(data){
            console.log(data)
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
            data: {data:data},
            success: function(data) {


                // 刷新页面
                location.reload();
            },
            error:function(data){
                console.log(data)
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

    // 点击ta的帖子
    $(".other").on("click","a",function(){

    	// var data = $("").attr('data-id')

    	// localStorage.setItem("arcID",)

    	location.href = " share-show.html";
    })
    
    

})
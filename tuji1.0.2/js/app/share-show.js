/*
 * @Author: zhang
 * @Date:   2017-10-04 10:06:13
 * @Last Modified by:   zhang
 * @Last Modified time: 2017-10-13 23:10:23
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
            var html = `<div class="article-top" data-id="${data.post_id}">
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
            /*
            <div class="pinglun">
                <h3>有什么想说的?</h3>
                <textarea id="pinglun" placeholder="不超过200个字..."></textarea>
                <button>发表</button>
                <div class="pinglun">
                    <ul>
                        <li class="pinglun-list">
                            <a class="pinglun-tx" href="javascript:;">
                                <img src="../img/touxiang2.jpg">
                            </a>
                            <div class="pinglun-main">
                                <div>
                                    <a href="javascript:;">凶残的晶晶</a>
                                    <span>2017-10-04 14:45:00</span>
                                    
                                </div>
                                <div>
                                    <p>你的孤独虽败犹荣</p>
                                </div>
                            </div>
                        </li>
            */ 
            var $div1 = $("<div class='pinglun'>");

            var $div1_h = $("<h3>");
            $div1_h.html("有什么想说的?");
            var $div1_text = $("<textarea id='pinglun' plaseholder='不超过200字...'>")
            var $div1_btn = $("<button>")
            $div1_btn.html("发表");
            $div1.append($div1_h).append($div1_text).append($div1_btn);
            var $div1_div = $("<div class='pinglun'>");
            var $div1_div_ul = $("<ul>");

            for(var i=0;i<data.replayPosts.length;i++){
                var $li = $('<li class="pinglun-list">')

                var $li_a = $('<a class="pinglun-tx" href="javascript:;">')
                var $li_aimg = $('<img>')
                $li_aimg.attr('src', data.replayPosts[i].rep_user.headportrait);
                $li_a.append($li_aimg);

                var $li_div = $("<div class='pinglun-main'>")
                var $li_div_1 = $("<div>");
                var $li_div_1a = $("<a href=javascript:;>");
                $li_div_1a.html(data.replayPosts[i].rep_user.nickname);
                var $li_div_1span = $("<span>");
                $li_div_1span.html(data.replayPosts[i].rep_date)
                $li_div_1.append($li_div_1a).append($li_div_1span);
                var $li_div_2 = $("<div>");
                var $li_div_2p = $("<p>");
                $li_div_2p.html(data.replayPosts[i].rep_content);
                $li_div_2.append($li_div_2p);

                $li_div.append($li_div_1).append($li_div_2);

                $li.append($li_a).append($li_div)

                $div1_div_ul.append($li);

            }
            $div1_div.append($div1_div_ul);
            $div1.append($div1_div);

            $(".main-left").html(html).append($div_arc).append($div1);


            // ta 的其他的帖子
            $.ajax({
                url: 'http://www.maxlucio.top/tuji1.0.2/getotherposts',
                type: 'post',
                dataType: 'json',
                data: {UID: data.user.id},
                success:function(data){
                    console.log(data)
                    console.log(JSON.parse(data))
                    $(".other").html("");
                    var $h3 = $("<h3>");
                    $h3.html("TA的其他帖子");
                    $(".other").append($h3)
                    for(var j=0;j<data.length;j++){
                        var p = $("<p>")
                        var a = $("<a href='javascript:;'>");
                        a.html(data[j].title);
                        p.append(a)
                        $(".other").append(p);
                    }


                },
                error:function(data){
                    console.log(data)
                }
            })


        },
        error:function(data){
            console.log(data)
        }
    })


    // 发表留言
    $(".pinglun").on("click","button",function() {
        // 留言信息
        var rep_content = $("#pinglun").val();

        $.ajax({
            url: 'http://www.maxlucio.top/tuji1.0.2/addrep',
            type: 'post',
            dataType: 'json',
            data: {rep_content:rep_content},
            success: function(data) {
                console.log(data);
                console.log(JSON.parse(data))
                if(data == 1){
                    // 刷新页面
                    location.reload();

                }else{
                    alert("留言失败")
                }
                
            },
            error:function(data){
                console.log(data)
            }
        })

    })




    // 点击ta的帖子
    $(".other").on("click","a",function(){

    	var data = $(".article-top").attr('data-id')

    	localStorage.setItem("arcID",data)

    	location.href = " share-show.html";
    })
    
    

})
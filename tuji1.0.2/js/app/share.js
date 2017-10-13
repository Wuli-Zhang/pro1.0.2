$(function() {
    // 轮播图
    var mySwiper = new Swiper('.swiper-container', {
        autoplay: 3000, //可选选项，自动滑动
        loop: true,
        pagination: '.swiper-pagination',
        paginationClickable: true,
        effect: 'fade',
        fade: {
            crossFade: false,
        },
        prevButton: '.swiper-button-prev',
        nextButton: '.swiper-button-next',
        // 分页器点击，自动轮播不失效
        autoplayDisableOnInteraction: false
    })

    // 获取最新
    $.ajax({
        url: "http://www.maxlucio.top/tuji1.0.2/getlatestposts",
        type: 'post',
        dataType:"json",
        success:function(data){
        	// 处理data数据，先清除原有的，在加载生成新的
            // $(".article-list").html("");



            data.map(function(item, i) {
                var $div = $("<div class='article-show'>");

                var $div1 = $("<div class='show-top'>");
                var $img = $("<img>")
                $img.attr("src",item.user.headportrait);

                var $div1_1 = $("<div class='show-title'>")
                var $p1 = $("<p class='title'>");
                var $p1_a = $("<a href='javascript:;'>");
                $p1_a.html(item.title).attr('data-id', item.post_id);

                $p1.append($p1_a);
                var $p2 = $("<p class='time'>");
                $p2.html(item.date);
                $div1_1.append($p1).append($p2);

                $div1.append($img).append($div1_1);

                var $div2 = $("<div class='show-txt'>")
                var $div2_a = $("<a href='javascript:;'>");
                $div2_a.html(item.content).attr('data-id', item.post_id);;
                $div2.append($div2_a);


                var $div3 = $("<div class='show-bottom'>");
                var $i = $("<i data-flag='true'>");
                $i.html(item.like);
                $div3.append($i);

                $div.append($div1).append($div2).append($div3);

                $(".article-list").append($div);

            })

        }

    })
    


    




    // 点击获取最新
    $(".tab a:nth-of-type(1)").click(function(){
    	$(this).addClass("active").siblings().removeClass("active");
    	$.ajax({
            url: "http://www.maxlucio.top/tuji1.0.2/getlatestposts",
            type: 'post',
            dataType:"json",
            success:function(data){
              
                // 处理data数据，先清除原有的，在加载生成新的
                // $(".article-list").html("");

                data.map(function(item, i) {
                    var $div = $("<div class='article-show'>");

                    var $div1 = $("<div class='show-top'>");
                    var $img = $("<img>")
                    $img.attr("src",item.user.headportrait);

                    var $div1_1 = $("<div class='show-title'>")
                    var $p1 = $("<p class='title'>");
                    var $p1_a = $("<a href='javascript:;'>");
                    $p1_a.html(item.title).attr('data-id', item.post_id);;
                    $p1.append($p1_a);
                    var $p2 = $("<p class='time'>");
                    $p2.html(item.date);
                    $div1_1.append($p1).append($p2);

                    $div1.append($img).append($div1_1);

                    var $div2 = $("<div class='show-txt'>")
                    var $div2_a = $("<a href='javascript:;'>");
                    $div2_a.html(item.content).attr('data-id', item.post_id);;
                    $div2.append($div2_a);


                    var $div3 = $("<div class='show-bottom'>");
                    var $i = $("<i data-flag='true'>");
                    $i.html(item.like);
                    $div3.append($i);

                    $div.append($div1).append($div2).append($div3);

                    $(".article-list").append($div);

                })


            },
            error:function(){

            }

        })
    });

    //，热门
    $(".tab a:nth-of-type(2)").click(function(){
        $(this).addClass("active").siblings().removeClass("active");
        $.ajax({
            url: "http://www.maxlucio.top/tuji1.0.2/gethotposts",
            type: 'post',
            success:function(data){
                // 
                // $(".article-list").html("");

                data.map(function(item, i) {
                    var $div = $("<div class='article-show'>");

                    var $div1 = $("<div class='show-top'>");
                    var $img = $("<img>")
                    $img.attr("src",item.user.headportrait);

                    var $div1_1 = $("<div class='show-title'>")
                    var $p1 = $("<p class='title'>");
                    var $p1_a = $("<a href='javascript:;'>");
                    $p1_a.html(item.title).attr('data-id', item.post_id);;
                    $p1.append($p1_a);
                    var $p2 = $("<p class='time'>");
                    $p2.html(item.date);
                    $div1_1.append($p1).append($p2);

                    $div1.append($img).append($div1_1);

                    var $div2 = $("<div class='show-txt'>")
                    var $div2_a = $("<a href='javascript:;'>");
                    $div2_a.html(item.content).attr('data-id', item.post_id);;
                    $div2.append($div2_a);


                    var $div3 = $("<div class='show-bottom'>");
                    var $i = $("<i data-flag='true'>");
                    $i.html(item.like);
                    $div3.append($i);

                    $div.append($div1).append($div2).append($div3);

                    $(".article-list").append($div);

                })

            },
            error:function(){

            }

        })
    });

    // 点击文章
    $(".article-show").on("click","a",function(){
        var data = $(this).attr("data-id")
        localStorage.setItem("arcID",data);
    	// 以某个属性进行查找或者本地存储查找
    	location.href = " share-show.html"
    });

    
    // 点赞
    $(".show-bottom").on("click","i",function(){
    	
    	if($(this).attr("data-show") == "true"){

    		$(this).css("background-image","url(../img/icon/zan-done.png)").attr("data-show","false");
    		
    	}else{
    		$(this).css("background-image","url(../img/icon/zan.png)").attr("data-show","true");
    		
    	}
    })

    // 右边热门帖子--列表
    $.ajax({
    	url: 'http://www.maxlucio.top/tuji1.0.2/gethotposts',
    	type: 'post',
        dataType:"json",
        success:function(data){
            // $(".article-list").html("");

                data.map(function(item, i) {
                   var $li = $("<li>");
                   var $a = $("<a href='javascript:;'>")
                   $a.html(item.title).attr('data-id',item.post_id);
                   $li.append($a);
                   $(".hot ul").append($li);
                })

        },
        error:function(){

        }
    	
    })

    // 热门帖子点击，属性或什么东西保存后跳转加载
    $(".hot").on("click","li",function(){
        var data = $(this).attr("data-id");
        localStorage.setItem("arcID",data )

    	location.href = " share-show.html"
    })

    // 右边标签
    $.ajax({
        url: 'http://www.maxlucio.top/tuji1.0.2/gethottag',
        type: 'post',
        dataType:"json",
        success:function(data){
            // 生成标签
            data.map(function(item, i) {
                var $i = $("<i>");
                $i.text(item.tag_name);
                $(".hot-label").append($i);
            })
        },
        error:function(data){
            console.log(data);
        }
    })


    // 标签点击
    $(".hot-label i").click(function(){
        // 以传值标签查找

        $.ajax({
            url: 'http://www.maxlucio.top/tuji1.0.2/getpostsbytag',
            type: 'post',
            dataType: 'json',//数据类型
            data: {},
            success:function(data){

            },
            error:function(data){
                console.log(data);
            }
        })
    })
    
    // 点击按钮
    $(".article-right .btnbtn").click(function(){
        location.href = " postMessage.html";
    })
})
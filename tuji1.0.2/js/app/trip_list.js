/*
 * @Author: zhang
 * @Date:   2017-09-25 21:11:08
 * @Last Modified by:   zhang
 * @Last Modified time: 2017-10-14 20:47:32
 */
$(function() {
    // 获取列表--不传参
    $.ajax({
        url: 'http://www.maxlucio.top/tuji1.0.2/selectSceneryCity',
        type: 'post',
        dataType: 'json',
        success: function(data) {
            for (var i = 0; i < data.length; i++) {
                var $a = $("<a href='javascript:;'>");
                $a.html(data[i].scenery_city_name).attr('data-id', data[i].scenery_city_id);
                $(".trip-left").append($a)
            }
        },
        error: function(data) {
            console.log(data)
        }
    })

    var $

    // 匹配城市景点----传递城市id
    $.ajax({
        url: 'http://www.maxlucio.top/tuji1.0.2/selectScenery',
        type: 'post',
        dataType: 'json',
        data: { 
        	scenery_city_id: localStorage.getItem("City") 
        },
        success: function(data) {
        	// 加题头介绍
        	var $h3 = $("<h3>")
        	$h3.html(localStorage.getItem("City-name")+"简介");
        	var $p = $("<p>")
        	$p.html(localStorage.getItem("City-jieshao"));

        	$(".trip-r-city").append($h3).append($p);

        	// 生成景点

        	for(var i=0;i<data.length;i++){
        		var $div = $("<div class='trip-view-show'>");

        		var $a = $("<a href='javascript:;'>");
        		$a.attr("data-id",data[i].scenery_id)

        		var $div1 = $("<div class='view-jieshao'>")
        		var h4 = $("<h4>");
        		h4.html(data[i].scenery_name)
        		var p = $("<p>");
        		p.html(data[i].scenery_desc)
        		$div1.append(h4).append(p);


        		var $div2 = $("<div class='view-img'>")
        		var $img = $("<img>");
        		$img.attr('src', "");

        		$a.append($div1).append($div2)
        		$div.append($a);

        	}


        }
    })

    // 城市列表点击-传递城市名字--重新加载
    $(".trip-left").on("click", "a", function() {
        // 传递城市名字
        var city = $(this).html();
        localStorage.setItem("City", city)
        location.href = " trip_list.html"
        // alert(city);

    })


    // 查询景点--传递景点的参数  no
    $(".trip-r-view").on("click", ".trip-view-show>a", function() {
        var view = $(this).find("h4").html();
        // alert(view);
        location.href = " trip_introduce.html"

        $.ajax({
            url: '',
            type: 'get',
            dataType: 'json',
            success: function(data) {

                // localStorage.setItem("",)
                location.href = " trip_introduce.html"
            }
        })

    })
})
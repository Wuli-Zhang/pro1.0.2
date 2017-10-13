/*
* @Author: zhang
* @Date:   2017-09-25 21:11:08
* @Last Modified by:   zhang
* @Last Modified time: 2017-10-10 12:58:17
*/
$(function(){
	// 获取列表--不传参
	$.ajax({
		url: 'http://www.maxlucio.top/tuji1.0.2/selectSceneryCity',
		type: 'post',
		dataType: 'json',
		success:function(data){

		}
	})
	
	// 匹配城市景点----传递城市
	$.ajax({
		url: 'http://www.maxlucio.top/tuji1.0.2/selectScenery',
		type: 'post',
		dataType: 'json',
		data: {param1: 'value1'},
		success:function(data){
			
		}
	})

	// 城市列表点击---刷新内容
	$(".trip-left").on("click","a",function(){
		var city = $(this).html();
		location.href=" trip_list.html"
		// alert(city);
		// 匹配城市----传递城市
		$.ajax({
			url: 'http://www.maxlucio.top/tuji1.0.2/selectScenery',
			type: 'post',
			dataType: 'json',
			data: {param1: 'value1'},
			success:function(data){

			}
		})
		
	})
	

	// 查询景点--传递景点的参数  no
	$(".trip-r-view").on("click",".trip-view-show>a",function(){
		var view = $(this).find("h4").html();
		// alert(view);
		location.href=" trip_introduce.html"

		$.ajax({
			url: '',
			type: 'get',
			dataType: 'json',
			success:function(data){

				// localStorage.setItem("",)
				location.href=" trip_introduce.html"
			}
		})
		
	})



	
})

/*
* @Author: zhang
* @Date:   2017-10-07 14:58:35
* @Last Modified by:   zhang
* @Last Modified time: 2017-10-08 17:39:48
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
	
	// 城市列表点击---跳转list页面
	$(".trip-left").on("click","a",function(){
		var city = $(this).html();
		alert(city);
		// 匹配城市----传递城市
		location.href=" trip_list.html"
		
	})
	
	// 点击推荐
	$(".trip-tuijian").click(function(){
		// 来个参数

		localStorage.setItem("findCity",data );

		location.href = " trip_list.html"
	})
	

	
})
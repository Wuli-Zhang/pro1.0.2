/*
* @Author: zhang
* @Date:   2017-10-05 19:52:23
* @Last Modified by:   zhang
* @Last Modified time: 2017-10-06 16:41:10
*/
$(function(){
	// --将内容加载页面----
	// 获取修改城市ID
	
	var cityID = localStorage.getItem("changeCity");

	$.ajax({
		url: 'http://www.maxlucio.top/tuji1.0.2/selectOneSceneryCity',
		type: 'post',
		dataType: 'json',
		data: {param1: 'value1'},
		success:function(data){
			
		}
	})
	
	// -------修改按钮---传递城市参数--返回0，修改失败，返回1修改成功---
	$(".change").click(function(){

		// 修改
		$.ajax({
			url: 'http://www.maxlucio.top/tuji1.0.2/updateSceneryCity',
			type: 'post',
			dataType: 'json',
			data: {param1: 'value1'},
			success:function(data){

			}
		})
		
		
	});



	// -------删除按钮---传递城市参数--返回0删除失败，返回1删除成功-----
	$(".delete").click(function(){
		$.ajax({
			url: 'http://www.maxlucio.top/tuji1.0.2/deleteSceneryCity',
			type: 'post',
			dataType: 'json',
			data: {param1: 'value1'},
			success:function(data){

			}
		})


	})
	
})
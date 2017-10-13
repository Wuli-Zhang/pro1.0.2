/*
* @Author: zhang
* @Date:   2017-10-05 19:52:31
* @Last Modified by:   zhang
* @Last Modified time: 2017-10-06 09:56:36
*/

$(function(){
	// --将内容加载页面--传递城市景点参数--
	$.ajax({
		url: 'http://www.maxlucio.top/tuji1.0.2/selectOneScenery',
		type: 'post',
		dataType: 'json',
		data: {param1: 'value1'},
		success:function(data){
			
		}
	})
	
	// -------修改按钮---传递城市和景点参数--返回0，修改失败，返回1修改成功---
	$(".change").click(function(){

		// 修改
		$.ajax({
			url: 'http://www.maxlucio.top/tuji1.0.2/updateScenery',
			type: 'post',
			dataType: 'json',
			data: {param1: 'value1'},
			success:function(data){

			}
		})
		
		
	});



	// -------删除按钮---传递城市和景点参数--返回0删除失败，返回1删除成功-----
	$(".delete").click(function(){
		$.ajax({
			url: 'http://www.maxlucio.top/tuji1.0.2/deleteScenery',
			type: 'post',
			dataType: 'json',
			data: {param1: 'value1'},
			success:function(data){

			}
		})


	})
	
})
/*
* @Author: zhang
* @Date:   2017-10-05 14:09:01
* @Last Modified by:   zhang
* @Last Modified time: 2017-10-08 17:34:28
*/
$(function(){
	// 加载内容---传递城市参数----
	$.ajax({
		url: 'http://www.maxlucio.top/tuji1.0.2/selectScenery',
		type: 'post',
		dataType: 'json',
		success:function(data){

		},
		error:function(data){

		}
	})
	
	// 刷新
	$(".fresh").click(function(){
		location.reload();
	})

	// 添加
	$(".add").click(function(){

		// 判断是否为超级管理员

		// todo

		location.href = " admin_addview.html"
	});

	// 修改，删除城市
	$(".id").click(function(){

		// 判断是否为超级管理员


		// todo

		location.href = " admin_changeview.html"
	})
})
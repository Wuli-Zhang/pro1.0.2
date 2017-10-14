/*
* @Author: zhang
* @Date:   2017-10-05 19:52:23
* @Last Modified by:   zhang
* @Last Modified time: 2017-10-14 12:30:46
*/
$(function(){
	// --将内容加载页面----
	// 获取修改城市ID
	
	var cityID = localStorage.getItem("City");

	$.ajax({
		url: 'http://www.maxlucio.top/tuji1.0.2/selectOneSceneryCity',
		type: 'post',
		dataType: 'json',
		data: {
			scenery_city_name: cityID
		},
		success:function(data){
			$("#text1").val(data.scenery_city_name)
			$("#text2").val(data.scenery_city_desc)
		},
		error:function(data){
			console.log(data)
		}
	})
	
	// -------修改按钮---传递城市参数--返回0，修改失败，返回1修改成功---
	$(".change").click(function(){

		// 修改
		$.ajax({
			url: 'http://www.maxlucio.top/tuji1.0.2/updateSceneryCity',
			type: 'post',
			dataType: 'json',
			data: {
				scenery_city_id: cityID,
				scenery_city_name:$("#text1").val(),
				scenery_city_desc:$("#text2").val()
			},
			success:function(data){
				if(data == 0){
					alert("修改失败");
				}else{
					alert("添加成功")
				}
				location.href="admin_city.html"
			},
			error:function(data) {
				/* Act on the event */
				console.log(data)
			}

		})
	});



	// -------删除按钮---传递城市参数--返回0删除失败，返回1删除成功-----
	$(".delete").click(function(){
		$.ajax({
			url: 'http://www.maxlucio.top/tuji1.0.2/deleteSceneryCity',
			type: 'post',
			dataType: 'json',
			data: {
				scenery_city_id: cityID
			},
			success:function(data){
				if (dara==0) {
					alert("删除失败");
				}else{
					alert("删除成功");
				}
				location.href="admin_city.html"
			},
			error:function(data){
				console.log(data)
			}
		})


	})
	
})
/*
* @Author: zhang
* @Date:   2017-10-05 19:52:31
* @Last Modified by:   zhang
* @Last Modified time: 2017-10-14 09:45:55
*/

$(function(){
	// --将内容加载页面--传递城市景点参数--
	var cityID=localStorage.getItem("City");
	var viewID = localStorage.getItem("View");

	$.ajax({
		url: 'http://www.maxlucio.top/tuji1.0.2/selectOneScenery',
		type: 'post',
		dataType: 'json',
		data: {scenery_city_id: cityID,scenery_id:viewID},
		success:function(data){
			$("#text1").val(data.scenery_name)
			$("#text2").val(data.scenery_desc)
			$("#text3").val(data.scenery_price)
			$("#text4").val(data.scenery_phone)
			$("#text5").val(data.scenery_address)
		}
	})

	// 加载图片--传递景点id
	$.ajax({
		url: 'http://www.maxlucio.top/tuji1.0.2/selectOneSceneryPhoto',
		type: 'post',
		dataType: 'json',
		data: {scenery_id: viewID},
		success:function(data){
			for(var i=0;i<data.length;i++){
				var img = $("<img>");
				img.attr('src', data[i].scenery_photo_desc);
				$(".form-photo").append(img)
			}
		},
		error:function(data){
			console.log(data)
			console.log(JSON.parse(data))
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
				console.log(data)
			},
			error:function(data){
				console.log(data)
			}
		})
		
		
	});



	// -------删除按钮---传递城市和景点参数--返回0删除失败，返回1删除成功-----
	$(".delete").click(function(){
		$.ajax({
			url: 'http://www.maxlucio.top/tuji1.0.2/deleteScenery',
			type: 'post',
			dataType: 'json',
			data: {scenery_city_id: cityID,scenery_id:viewID},
			success:function(data){
				if(data == 1){
					alert("删除成功");
				}else{
					alert("删除失败");
				}

				location.href="admin_view.html"
			},
			error:function(data){
				console.log(data)
			}
		})


	})
	
})
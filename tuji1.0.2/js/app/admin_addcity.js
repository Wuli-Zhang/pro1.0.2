/*
* @Author: zhang
* @Date:   2017-10-05 14:09:13
* @Last Modified by:   zhang
* @Last Modified time: 2017-10-14 10:23:43
*/
$(function(){
	// 添加城市---不用传参----返回0添加失败，返回1添加成功
	$(".add").click(function(){

		var CityName=$("#text1").val()
		var CityJieshao=$("#text2").val()


		$.ajax({
			url: 'http://www.maxlucio.top/tuji1.0.2/insertSceneryCity',
			type: 'post',
			dataType: 'json',
			data:{
				scenery_city_name:CityName,
				scenery_city_desc:CityJieshao
			},
			success:function(data){
				if(data == 1){
					alert("添加成功");
					location.href="admin_city.html"
				}else{
					alert("添加失败");
					$("#text1").val("")
					$("#text2").val("")
				}
			},
			error:function(data){
				console.log(data)
			}
		})
		
	})
})
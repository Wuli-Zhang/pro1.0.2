/*
* @Author: zhang
* @Date:   2017-09-25 19:40:39
* @Last Modified by:   zhang
* @Last Modified time: 2017-10-14 19:47:20
*/
$(function(){
	// 城市搜索
	$(".search img").on("click",function(){
		var name = $(".search input").val();
		$.ajax({
			url:"http://www.maxlucio.top/tuji1.0.2/getCitys",
			dataType:"json",
			data:{
				scenery_city_name:name
			},//传递参数--城市
			type:"post",
			success:function(data){
				if(data == 0){
					location.href="trip_error.html"
				}else{
					localStorage.setItem("City", data.scenery_city_id)
					localStorage.setItem("City-name", data.scenery_city_name)
					localStorage.setItem("City-jieshao", data.scenery_city_desc)
					location.href = "trip_list.html"
				}
			}
			,error:function(data){
				console.log(data)
			}
		})
	})
	
	// 3d页面
	$(".btn-go3D").on("click",function(){
		location.href="3d.html";
	})
})

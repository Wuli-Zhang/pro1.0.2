/*
* @Author: zhang
* @Date:   2017-09-25 19:40:39
* @Last Modified by:   zhang
* @Last Modified time: 2017-10-08 17:39:31
*/
$(function(){
	// 城市搜索
	$(".search img").on("click",function(){
		var data = $(".search input").val();
		$.ajax({
			url:"http://www.maxlucio.top/tuji1.0.2/getCitys",
			dataType:"json",
			data:{},//传递参数--城市
			type:"post",
			success:function(data){
				if(data == 0){
					location.href="trip_error.html"
				}else{
					location.href = "trip_list.html"
				}
			}
			,error:function(){
				
			}
		})
	})
	
	// 3d页面
	$(".btn-go3D").on("click",function(){
		location.href="3d.html";
	})
})

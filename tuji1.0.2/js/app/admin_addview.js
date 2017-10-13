/*
* @Author: zhang
* @Date:   2017-10-05 14:09:28
* @Last Modified by:   zhang
* @Last Modified time: 2017-10-08 17:33:27
*/
$(function(){	

	// 添加景点，传递城市参数----返回0添加失败，返回1添加成功

	$(".add").click(function(){
		$.ajax({
			url: 'http://www.maxlucio.top/tuji1.0.2/insertScenery',
			type: 'post',
			dataType: 'json',
			data: {param1: 'value1'},
			success:function(data){
				
			}

		})
	})

	
})
/*
* @Author: zhang
* @Date:   2017-10-05 14:09:13
* @Last Modified by:   zhang
* @Last Modified time: 2017-10-06 09:49:50
*/
$(function(){
	// 添加城市---不用传参----返回0添加失败，返回1添加成功
	$(".add").click(function(){
		$.ajax({
			url: 'http://www.maxlucio.top/tuji1.0.2/insertSceneryCity',
			type: 'post',
			dataType: 'json',
			success:function(data){
				
			}
		})
		
	})
})
/*
* @Author: zhang
* @Date:   2017-10-05 10:29:38
* @Last Modified by:   zhang
* @Last Modified time: 2017-10-08 17:34:19
*/
$(function(){
	// 加载内容
	$.ajax({
		url: 'http://www.maxlucio.top/tuji1.0.2/selectSceneryCity',
		type: 'post',
		dataType: 'json',
		success:function(data){
			/*var data = data.data;
			data.map(function(item,i){
				var $tr = $("<tr>");
				var $td1 = $("<td>");
				var $a = $("<a class='id' href='javascript:;'>");
				$a.html(item.ID)
				$td1.append($a);
				var $td2 = $("<td>");
				$td2.html(item.city)
				var $td3 = $("<td>");
				$td3.html(item.jianjie)
				var $td4 = $("<td>");
				var $btn = $("<button class='btn btn-warning search'>");
				$btn.html("查询");
				$td4.append($btn);


				$tr.append($td1).append($td2).append($td3).append($td4);
				$(".table").append($tr);
				
			})*/
		},
		error:function(data){

		}
	})
	
	// 刷新
	$(".fresh").click(function(){
		location.reload();
	})

	// 添加城市
	$(".add").click(function(){

		// 判断权限，，超级管理员

		// TODO

		location.href = "admin_addcity.html"
	});

	// 修改，删除城市
	$(".table").on("click","a",function(){
		// 判断权限，，超级管理员

		// TODO
		// 保存id用于查询
		var cityID = $(this).html();
		localStorage.setItem("changeCity", cityID)

		location.href = " admin_changecity.html"
	})

	// 查询景点按钮	---传递城市参数查询
	$(".table").on("click",".search",function(){


		var cityID = $(this).parents("tr").find(".id").html();
		localStorage.setItem("findView", cityID)
		
		location.href = " admin_view.html"
	})
	
})
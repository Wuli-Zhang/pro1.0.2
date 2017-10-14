/*
* @Author: zhang
* @Date:   2017-10-05 10:29:38
* @Last Modified by:   zhang
* @Last Modified time: 2017-10-14 07:24:57
*/
$(function(){

	var issuper = localStorage.getItem("issuper");

	if(issuper == "" ||issuper == null || issuper == 0){
		alert("对不起，您没有这个权限!将返回首页")
		location.href="index.html"
	}

	// 加载内容
	$.ajax({
		url: 'http://www.maxlucio.top/tuji1.0.2/selectSceneryCity',
		type: 'post',
		dataType: 'json',
		success:function(data){
			for(var i=0;i<data.length;i++){
				var $tr = $("<tr>");
				var $td1 = $("<td>");
				var $a = $("<a class='id' href='javascript:;'>");
				$a.html(data[i].scenery_city_id)
				$td1.append($a);
				var $td2 = $("<td>");
				$td2.html(data[i].scenery_city_name)
				var $td3 = $("<td>");
				$td3.html(data[i].scenery_city_desc)
				var $td4 = $("<td>");
				var $btn = $("<button class='btn btn-warning search'>");
				$btn.html("查询");
				$td4.append($btn);


				$tr.append($td1).append($td2).append($td3).append($td4);
				$(".table").append($tr);
			}
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
			console.log(data)
		}
	})
	
	// 刷新
	$(".fresh").click(function(){
		location.reload();
	})

	// 添加城市
	$(".add").click(function(){
		location.href = "admin_addcity.html"
	});

	// 修改，删除城市
	$(".table").on("click","a",function(){
		// TODO
		// 保存id用于查询
		var cityID = $(this).html();
		localStorage.setItem("City", cityID)

		location.href = " admin_changecity.html"
	})

	// 查询景点按钮	---传递城市参数查询
	$(".table").on("click",".search",function(){


		var cityID = $(this).parents("tr").find(".id").html();
		localStorage.setItem("City", cityID)
		
		location.href = " admin_view.html"
	})
	
})
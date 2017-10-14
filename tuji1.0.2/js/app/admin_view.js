/*
* @Author: zhang
* @Date:   2017-10-05 14:09:01
* @Last Modified by:   zhang
* @Last Modified time: 2017-10-14 07:25:27
*/
$(function(){
	// 加载内容---传递城市参数----
	$.ajax({
		url: 'http://www.maxlucio.top/tuji1.0.2/selectScenery',
		type: 'post',
		dataType: 'json',
		data:{scenery_city_id:localStorage.getItem("City")},
		success:function(data){
			/*
		<tr>
			<td><a class="id" href="javascript:;">0001</a></td>
			<td>兵马俑</td>
			<td>兵马俑，即秦始皇兵马俑，亦简称秦兵马俑或秦俑，第一批全国重点文物保护单位，第一批中国世界遗产，位于今陕西省西安市临潼区秦始皇陵以东1.5千米处的兵马俑坑内。</td>
			<td>照片</td>
			<td>010-66666666</td>
			<td>140元</td>
			<td>陕西省西安市临潼区</td>
		</tr>
			*/
			data.map(function(item, i) {
				var $tr = $("<tr>");
				var $td1 = $("<td>");
				var $a = $("<a class='id' href='javascript:;'>");
				$a.html(item.scenery_id)
				$td1.append($a);
				var $td2 = $("<td>");
				$td2.html(item.scenery_name)
				var $td3 = $("<td>");
				$td3.html(item.scenery_desc)
				var $td4 = $("<td>");
				$td4.html("有照片")
				var $td5 = $("<td>");
				$td5.html(item.scenery_phone)
				var $td6 = $("<td>");
				$td6.html(item.scenery_price)
				var $td7 = $("<td>");
				$td7.html(item.scenery_address);

				$tr.append($td1).append($td2).append($td3).append($td4).append($td5).append($td6).append($td7)

				$(".table").append($tr)

			})
		},
		error:function(data){
			console.log(data)
		}
	})
	
	// 刷新
	$(".fresh").click(function(){
		location.reload();
	})

	// 添加
	$(".add").click(function(){
		// todo

		location.href = " admin_addview.html"
	});

	// 修改，删除城市
	$(".id").click(function(){

		// 判断是否为超级管理员

		localStorage.setItem("View", $(this).html())
		// todo

		location.href = " admin_changeview.html"
	})
})
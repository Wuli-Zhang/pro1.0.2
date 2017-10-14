/*
 * @Author: zhang
 * @Date:   2017-10-05 14:09:28
 * @Last Modified by:   zhang
 * @Last Modified time: 2017-10-14 10:20:42
 */
$(function() {

    // 添加景点，传递城市参数----返回0添加失败，返回1添加成功

    $(".add").click(function() {
        var src = Array.from($(".imgWrap img"))

        var arr = [];
        for (var i = 0; i < src.length; i++) {
            arr.push(src[i].getAttribute("src"))
        }
        console.log(arr)

        $.ajax({
            url: 'http://www.maxlucio.top/tuji1.0.2/insertScenery',
            type: 'post',
            dataType: 'json',
            data: {
                scenery_city_id: localStorage.getItem("City"),
                scenery_name: $("#text1").val(),
                scenery_desc: $("#text2").val(),
                scenery_price: $("#text3").val(),
                scenery_phone: $("#text4").val(),
                scenery_address: $("#text5").val(),
                scenery_photo_desc: arr
            },
            success: function(data) {
                if (data == 1) {
                    alert("成功")
                } else {
                    alert("失败")
                }
            },
            error: function(data) {
                console.log(data);
            }

        })
    })


})
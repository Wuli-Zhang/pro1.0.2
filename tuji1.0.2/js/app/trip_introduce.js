/**
 * Created by Administrator on 2017/10/7 0007.
 */
var mySwiper = new Swiper ('.swiper-container', {
    direction: 'horizontal',
    autoplay : 3000,
    loop: true,
    effect : 'fade',
    // 如果需要前进后退按钮
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',

});
//




//获取景点介绍数据
function getIntroduce(){
    $.ajax({
        url:'http://www.maxlucio.top/tuji1.0.2/getScenery',
        type:'post',
        data:{
            classID:1,
            pageCode:1,
            linenumber:10
        },
        success:function(response) {
            var data = JSON.parse(response),
                imgArr = data.scenery_photo,
                imgStr = '',
                introduce = '';
            for (var i = 0; i < imgArr.length; i++) {
                imgStr += '<div class="swiper-slide">' +
                    '<img src="' + imgArr[i] + '" alt="">' +
                    '</div>';
            }
            introduce += '<h3>'+data.scenery_name+'</h3>'+
                '<p>人均：<span>'+data.scenery_price+'</span></p>'+
            '<p>联系电话：<span>'+data.scenery_phone+'</span></p>'+
            '<p>地址：<span>'+data.scenery_address+'</span></p>';
            $('.introduce').html(introduce);
            $('.swiper-wrapper').html(imgStr);
        }
    })
}

var scenery_obj = {
    scenery_id:"景点ID",
    scenery_name:"景点名字",
    scenery_desc:"景点简介",
    scenery_phone:'景点电话',
    scenery_price:'价格',
    scenery_address:'地址',
    scenery_photo:'图片',//图片应该是一个数组
    scenery_city_ids:'城市ID'
};

getIntroduce();
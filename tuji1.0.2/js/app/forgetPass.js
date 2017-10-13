/**
 * Created by Administrator on 2017/10/6 0006.
 */
////手机号码正则校验
//function checkMobile(user){
//    var sMobile = user;
//    if(!(/^1[3|4|5|7|8][0-9]\d{4,8}$/.test(sMobile)) || (/^([0-9A-Za-z\-_\.]+)@([0-9a-z]+\.[a-z]{2,3}(\.[a-z]{2})?)$/g.test(sMobile))){
////    alert("不是完整的11位手机号或者正确的手机号前七位");
//        $('.err').html("填写错误，请输入你的注册邮箱或手机")
//        return false;
//    }else{
//        location.href = 'findPass';
//    }
//}

$('#findPass').on('click',function(){
    var input = $('.input').val();
    //点击按钮向后台传送手机号
    $.ajax({
        type:'post',
        url:'http://www.maxlucio.top/tuji1.0.2/selectPhone',
        data:{
            tel:input
        },
        success:function(data){
            console.log(data)
            //判断页面输出，正确：跳转，错误：显示错误！
            //checkMobile(input);
            if(data==1){
            	localStorage.setItem(input)
                location.href =' findPass.html'
            }else{
                $('.err').html("填写错误，请输入你的注册手机")
            }
        },
        error:function(err){
            console.log(err)
        }
    });

});
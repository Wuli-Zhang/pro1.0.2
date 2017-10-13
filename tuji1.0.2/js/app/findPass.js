/**
 * Created by Administrator on 2017/10/6 0006.
 */

$("#basic-addon2").click(function(){
    var i=60,timer;
    console.log($(this).attr('data-flag'))
    if($(this).attr('data-flag') === 'true'){
        $(this).attr('data-flag','false');
        timer = setInterval(function(){
            $("#basic-addon2").html(i+" 秒");
            i--;
            if(i<0){
                clearInterval(timer);
                $("#basic-addon2").html("重新发送");
                $("#basic-addon2").attr('data-flag','true')
            }
        },1000)
    }
});
$('.again').on('click',function(){
    location.href = 'forgetPass.html'
})

//点击跳转校验验证码
$('.suerPass').on('click',function(){
    //获取验证码
    $.ajax({
        type:'post',
        url:'http://www.maxlucio.top/tuji1.0.2/selectduanxin',
        data:{
        	tel:localStorage.getItem(input),
        	code:$('.YZM').val()
        },
        success:function(data){
            console.log(data)
            if(data==1){
            	location.href = 'chengePass.html'
            }else{
            	alert('验证码错误，重新发送')
            }
        },
        error:function(err){
            console.log(err)
        }

    })


//    校验验证码
//    if($('.YZM').val() == data){
//        $('.YZMerr').html('验证码不正确，请重新输入！')
//    }else{
//        location.href = 'changePass.html'
//    }
});



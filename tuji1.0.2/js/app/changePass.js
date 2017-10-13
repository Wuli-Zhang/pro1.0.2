/**
 * Created by Administrator on 2017/10/6 0006.
 */
$('.suerPass').on('click',function(){
    if(($('.pass1').val() === $('.pass2').val()) && ($('.pass1').val()!=='')){
        $('.passErr').html('')
        //向后台传送更改后的密码
        $.ajax({
            type:'post',
            url:'http://www.maxlucio.top/tuji1.0.2/updatePassword',
            data:{
            	tel:localStorage.getItem(input),
                password:$('.pass1').val()
            },
            success:function(data){
                console.log(data)
                if(data==1){
                	
                	location.href = 'index.html';
                }else{
                	$('.passErr').html('更新失败！')
                }
            },
            error:function(err){
                console.log(err)
            }
        })
    }else if($('.pass1').val()==''||$('.pass2').val()==''){
        $('.passErr').html('密码不能为空！')
    }else if($('.pass1').val() !== $('.pass2').val()){
        $('.passErr').html('输入两次密码不一致，请重新输入！')
    }
});
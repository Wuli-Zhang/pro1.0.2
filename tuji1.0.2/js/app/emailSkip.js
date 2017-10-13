/**
 * Created by Administrator on 2017/10/7 0007.
 */

//判断邮箱是否激活
$.ajax({
    url:'',
    type:'get',
    success:function(data){
    //   判断data，成功跳转
        if(data ==''){
            location.href = 'emailSuccess.html'
        }
    },
    error:function(){

    }

});
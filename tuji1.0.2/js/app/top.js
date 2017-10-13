/**
 * Created by Administrator on 2017/10/4 0004.
 */


$(function(){

    //top搜索框
    $('#gosearch').on('click',function(){
        console.log($("#search").val());
        $.ajax({
            type:'post',
            url:'',
            data:{},
            success:function(){

            }
        })
    })


    //判断top显示登录注册还是个人信息部分
    if(localStorage.getItem('UID')){

        var myUID = localStorage.getItem('UID');

        $(".logRes").css({display:'none'});
        $("#afterLogin").css({display:'block'});

        $(function(){                  //获取个人信息
            $.ajax({
                type:"post",
                url:"http://www.maxlucio.top/tuji1.0.2/selectPersonage",
                data:{ID:myUID},
                success:function(data){

                    console.log(data);
                    console.log(JSON.parse(data));

                    $("#idPic").attr("src",data.headportrait);

                    $("#idName").html(data.nickname);
                    $("#selfindi").attr("href","Individual.html?userId="+data.ID);

                    $("#afterLogin").on("mouseenter",function(){
                        $("#afterLogin").find("ul").fadeIn(100);
                        $("#afterLogin").find("ul").on("mouseleave",function(){
                            $(this).fadeOut(100);
                        })
                    })
                },
                error:function(){
                    console.log("出错");
                }
            })
        })
    }
})

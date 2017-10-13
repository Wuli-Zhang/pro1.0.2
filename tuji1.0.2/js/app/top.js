/**
 * Created by Administrator on 2017/10/4 0004.
 */


$(function(){
    $.ajax({
        type:"post",
        url:"http://www.maxlucio.top/tuji1.0.2/selectPersonage",               // 用户信息地址
        success:function(data){
            //$(".logRes").css("display","none");

            //$("#idPic").attr("src",);
            //$("#idName").html();

            $("#afterLogin").on("mouseenter",function(){
                $("#afterLogin").find("ul").css("display","block");
                $("#afterLogin").find("ul").on("mouseleave",function(){
                    $(this).css("display","none");
                })
            })
        },
        error:function(){
            console.log("出错");
        }
    })
})

/**
 * Created by Administrator on 2017/10/7 0007.
 */

$(function(){

    var strSearch = window.location.href;
    var arrSearch = strSearch.split("?")[1];
    var thisuser = arrSearch.split('=')[1];    //当前主页的userID

    var myUID = localStorage.getItem('UID');     //从webstorage中获取我的UID



    if(thisuser == myUID){                  //判断是否为自己uid (是否显示关注按钮)
        $(".care").css({"display":"none"});
    }else{
        $(".care").mouseenter(function(){
            if($(".care").html() == "已关注"){
                $(".care").html("取消关注");
            }
            $(".care").css({"background":"#5bc0de"})
        }).mouseleave(function(){
            if($(".care").html() == "取消关注"){
                $(".care").html("已关注");
            }
            $(".care").css({"background":"#666"})
        })

        $.ajax({                               //判断是否关注
            type:"post",
            url:'http://www.maxlucio.top/tuji1.0.2/isFans',
            data:{fans_id:myUID,concern_id:thisuser},   //我的UID，当前页面的UID
            success:function(data){
                console.log(data);
                console.log(JSON.parse(data))

                if(data == 1){    //返回1为已关注
                    $("#iscare").html("已关注")
                    $(".care").on('click',function(){      //点击取消关注
                        $.ajax({
                            type:'post',
                            url:'http://www.maxlucio.top/tuji1.0.2/quxiaoguanzhu',
                            data:{fans_id:myUID,concern_id:thisuser},
                            success:function(data){
                                console.log(data)
                                $("#iscare").html("关注");
                            }
                        })
                    })

                }else{      //返回0为未关注
                    $("#iscare").html("关注");
                    $(".care").on('click',function(){      //点击关注
                        $.ajax({
                            type:'post',
                            url:'http://www.maxlucio.top/tuji1.0.2/guanzhu',
                            data:{fans_id:myUID,concern_id:thisuser},
                            success:function(data){
                                console.log(data)
                                $("#iscare").html("已关注")
                            }
                        })
                    })
                }
            }
        })
    }

    $.ajax({                                // 关注列表ajax
        type:"post",
        url:"http://www.maxlucio.top/tuji1.0.2/selectconcern",
        data:{fans_id:thisuser},
        success:function(data){
            console.log(data);
            console.log(JSON.parse(data));

            for(let i=0; i<data.length; i++){
                var concerncon = `<div>
                    <a href="Individual.html?username=${data[i].ID}">
                        <img src=${data[i].headportrait}/>
                    </a>
                    <p>${data[i].nickname}</p>
                    <p>${data[i].introduce}</p>
                </div>`
                $('#thisfollow').append(concerncon);
            }
        }
    })
})
/**
 * Created by Administrator on 2017/10/6 0006.
 */

$(function(){

    var strSearch = window.location.href;
    var arrSearch = strSearch.split("?")[1];
    var thisuser = arrSearch.split('=')[1];    //当前主页的userID

    var myUID = localStorage.getItem('UID');     //从webstorage中获取我的UID

    $("#thiscons").attr('href','follow.html?username='+thisuser);
    $("#thisfans").attr('href','followed.html?username='+thisuser);


//var user = "111"
    
    
    /*--标签栏--*/
    // input框输入标签
    var arr=[];
    $("#noteTip").keydown(function(e){
        console.log(111);
        var e = e||event;
        if(!($("#noteTip").val().match(/^[ ]+$/)) && e.keyCode == 32){
            var $i = $("<strong>").addClass("tip");
            $i.html($("#noteTip").val());
            arr.push($("#noteTip").val());
            $("#noteTip").before($i);
            $("#noteTip").val("").attr("placeholder"," ");
        }
        if(!$("#noteTip").val() && e.keyCode == 8){
            $(".noteTip").find("strong").last().remove();
        }
    })
    $("#release").on("click",function(){
        alert("模块正在开发中，请期待。");
    })
    $("#fileId").on("click",function(){
        $("#note").css({"height":"260px"}).find("p").eq(0).css({"display":"block"}).end().eq(1).css({"margin-top":"10px"});
    })
    // 添加图片
    function getUrl(file) {
        var img = document.getElementById("Image");
        for (var intI = 0; intI < file.length; intI++) {//图片回显
            var tmpFile = file[intI];
            var reader = new FileReader();
            reader.readAsDataURL(tmpFile);
            reader.onload = function (e) {
                var url = e.target.result;
                img.src = url;
                console.log(url);
            }
        }
    }


    /*--关于我部分--*/
    var tipflag = true;//关闭状态
    var introduceflag = true;

    $(".addtip").on("click",function(){
        if(tipflag){
            $(this).html("取消");
            $(".selftip").css({"display":"none"});
            $(".editselftip").css({"display":"block"});

            /*$("#tipbtn").on("click",function(){
                console.log(111);
                var tipArr=[];
                var temp = 0;
                var tip = [];
                //$(".editselftip").children().find("textarea").change(function(){
                    console.log(222);
                    var ele;
                    var str = $(".editselftip").val();
                    console.log(str.length);
                    for(var i=0; i<str.length; i++){
                        if(str[i].keyCode == 32){
                            ele = str.slice(temp,i);
                            console.log(ele);
                            tip.push(ele);
                            temp = i+1;
                        }
                    }
                //})
                console.log(tip);
            });*/

            tipflag = false;
        }else{
            $(this).html("添加");
            $(".selftip").css({"display":"block"});
            $(".editselftip").css({"display":"none"});
            tipflag = true;
        }
    })

    $(".addintroduce").on("click",function(){
        if(introduceflag){
            $(this).html("取消");
            $(".selfintroduce").css({"display":"none"});
            $(".editselfintroduce").css({"display":"block"});
            introduceflag = false;
        }else{
            $(this).html("添加");
            $(".selfintroduce").css({"display":"block"});
            $(".editselfintroduce").css({"display":"none"});
            introduceflag = true;
        }
    })


    //状态&帖子部分
		/*-------------------------状态待修改----------------------------*/
    $("#state").on("click",function(){
        console.log("state");
        $(".content").html("");
        $.ajax({
            type:"post",
            url:"",                //获取状态信息地址
            data:{UID:thisuser},
            success:function(data){
            	console.log(data);
            	console.log(JSON.parse(data));
            	for(var i=0;i<data.length;i++){
            		var states=`<div class="state">
                            <a href="Individual.html?username=${data[i].UID}">
                                <img src="${data[i].headportrait}" />
                            </a>
                            <div>
                                <p class="userId">
                                    <span>${data[i].username}</span>
                                    发布了一个<i>状态</i>
                                </p>
                                <div>

                                    <p>
                                        <i></i>
                                        <span>${data[i].content}</span>
                                        <i></i>
                                    </p>

                                    <img src="../img/share.jpg"/>
                                    <a href="javascript:;" class="zan">${data[i].like}</a>
                                </div>
                            </div>
                        </div>`;
                    $(".content").append(states);
            	}

            }
        })
    })

    $("#post").on("click",function(){
        console.log("tip");
        $(".content").html("");
        $.ajax({
            type:"post",
            url:"http://www.maxlucio.top/tuji1.0.2/getotherposts",   //帖子地址                  //获取帖子信息地址
            data:{UID:thisuser}, 
            success:function(data){
            	console.log(data);
            	console.log(JSON.parse(data));
            	for(var i=0;i<data.length;i++){
            		var posts = `<div class="post">
                            <a href="share-show.html?post=${data[i].}">
                                <!--<img src="#"/>-->
                                <span></span>
                                <div>${data[i].content}</div>
                                <span></span>
                            </a>
                            <div>
                                <a href="Individual.html?username=${data[i].UID}">
                                    <img src="${data[i].headportrait}"/>
                                </a>
                                <a href="#">
                                    <p>${data[i].title}</p>
                                </a>
                                <p>2017-10-08</p>
                                <span>${data[i].like}</span>
                            </div>
                        </div>`;
                    $(".content").append(posts);
            	}

            }
        })
    })


    // 获取个人信息
    $.ajax({
        type:"post",
        url:"http://www.maxlucio.top/tuji1.0.2/selectPersonage",                      //获取个人信息地址
        data:{ID:thisuser},
        success:function(data){
            console.log(data);
            console.log(JSON.parse(data));

			$("#selfpic").attr('src',data.headportrait);
			$("#selfname").html(data.nickname);
			$("#selfsign").html(data.introduce);
			$("#selfjob").html(data.job);
			$("#selfaddress").html(data.addres);
			$("#selfintro").html(data.introduce);
        }
    })


    //关注&粉丝

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
                            }
                        })
                    })
				}
            }
        })
    }

    $.ajax({                                // 关注ajax
        type:"post",
        url:"http://www.maxlucio.top/tuji1.0.2/selectconcern",
        data:{fans_id:thisuser},
        success:function(data){
            console.log(data);
            console.log(JSON.parse(data));
			for(let i=0; i<3; i++){
				var concerncon = `<a class="part" href="Individual.html?username=${data[i].ID}">
                            		<img src=${data[i].headportrait}/>
                        		</a>`
				$('#concern').append(concerncon);
			}
        }
    })

    $.ajax({                                // 粉丝ajax
        type:"post",
        url:"http://www.maxlucio.top/tuji1.0.2/selectFans",
        data:{concern_id:thisuser},
        success:function(data){
            console.log(data);
            console.log(JSON.parse(data));
			for(let i=0; i<3; i++){
				var fanscon = `<a class="part" href="Individual.html?username=${data[i].ID}">
                            		<img src=${data[i].headportrait}/>
                        		</a>`
				$('#fans').append(fanscon);
			}
        }
    })
})
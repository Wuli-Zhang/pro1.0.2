//手机号码正则校验
function checkMobile(user,ss) {  
    var sMobile = user;  
    if (!(/^1[3|4|5|7|8][0-9]\d{4,8}$/.test(sMobile)) || (/^([0-9A-Za-z\-_\.]+)@([0-9a-z]+\.[a-z]{2,3}(\.[a-z]{2})?)$/g.test(sMobile))) {
        //    alert("不是完整的11位手机号或者正确的手机号前七位");
        ss.html("手机/邮箱填写错误")
        return false;  
    } else {
    	
    	console.log(222)
    	//注册--验证码
		$('.message').on('click', function() {
		
			// 定时器
			var i=30,timer;
			if($(this).attr("data-flag") ==="true"){
				$(this).css("background","#2d62a7");
				$(this).attr("data-flag",'false');
		
				timer = setInterval(function(){
					$('.message').val(i+"秒后重新发送")
					i--
					if(i<0){
						$('.message').val("重新发送")
						clearInterval(timer);
						$('.message').attr("data-flag",'true');
						$('.message').css("background","#50c8d7");
					}
				},1000)
		
			    var phone = $('.ruser').val();
		
			    $.ajax({
			        type: "post",
			        url: "http://www.maxlucio.top/tuji1.0.2/duanxin",
			        data: {
			            phone: phone
			        },
			        success: function(data) {
			        	console.log(data)
			        	console.log(eval(data))
			            //location.href = 'index.html';
			            if(data==0){
							$('.codeErr').html('发送失败,点击重新发送')
						}
			        },
			        error: function(err) {
			            console.log(err)
			        }
			    });
			}
		});


    	
    	
        $('.phoneErr').html("")
    }
}
//校验昵称
function checkName(s) {
    var patrn = /(?:[a-zA-Z]{1,12})|(?:[\u4e00-\u9fa5]{1,6})|[._]/;
    if (!patrn.exec(s)) {
        $('.nameErr').html('昵称不合法');
        return false;
    }
}
//校验两次密码
function CheckForm(pass, pass1) {
	if(pass == ""){
		 $('.surePass').html('密码不能为空');
		 return false;
	}else{
		if (pass !== pass1) {
	        $('.surePass').html('您两次输入的密码不一样！请重新输入');
	        return false;
	    }
	}
    
    return true;
}

$('.login').on('mousedown',function(){
	$(this).css("background","#2d62a7");
}).on('mouseup',function(){
	$(this).css("background","#50c8d7");
})



//登录
$('.login').on('click', function() {
    var phone = $('.user').val();
    var ss =$('.phoneErr1');
    var email = "";
    checkMobile(phone,ss);

    /*//判断用户输入的是邮箱还是手机
    var phone = '',
        email = '';
    if (!(/^1[3|4|5|7|8][0-9]\d{4,8}$/.test(user1))) {
        phone = user1;
        email = '';
    } else if (/^([0-9A-Za-z\-_\.]+)@([0-9a-z]+\.[a-z]{2,3}(\.[a-z]{2})?)$/g.test(user1)) {
        phone = '';
        email = user1;

    }*/

    if ($('#pass').val() == '') {
        $('.passErr').html('密码不能为空');
    }

    if($(".user").val() !== "" && $("#pass").val() !==""){
    	$.ajax({
	        type: "post",
	        url: "http://www.maxlucio.top/tuji1.0.2/login",
	        data: {
	            tel: phone,
	            email: email,
	            password: $("#pass").val()/*,
	            status: 'login'*/
	        },
	        success: function(data) {
	        	console.log(data)
	        	console.log(eval(data))
	            // 登陆成功
	            if (data == 0) {
	               alert("登录失败,重新登录")
	            }else{
	            	localStorage.setItem('UID', data[0].id);//存UID
	                localStorage.setItem('issuper', data[0].issuper);//存用户权限
	                location.href='index.html';
	            }
	           
	        }
	    })
    }
    
});


//失去焦点判断电话邮箱

$('.ruser').blur(function() {
    var phone = $('.ruser').val();
    var ss = $('.phoneErr')
    if (phone == '') {
        $('.phoneErr').html('请填写手机号或者邮箱!')
    } else {
        $('.phoneErr').html('')
        checkMobile(phone,ss);
    }
})

//失去焦点判断昵称

$('.name').blur(function() {
    var nickName = $('.name').val();
    if (nickName == '') {
        $('.nameErr').html('请填昵称!')
    } else {
        $('.nameErr').html('')
        checkName(nickName);
    }
})
//失去焦点判断密码
$('.pass1').blur(function() {
    var pass = $('.pass').val();
    var pass1 = $('.pass1').val();
    if (pass1 == '') {
        $('.surePass').html('请确认密码')
    } else {
        $('.surePass').html('')
        CheckForm(pass,pass1);
    }
})




//注册--验证
$('.register').on('click', function() {
    var phone = $('.ruser').val();
    var name = $('.name').val();
    var pass = $('.pass').val();

    var pass1 = $('.pass1').val();
    var message = $('.code').val();
    //获取验证码
    var userCode = $('#code').val();
    var ss = $('.phoneErr1')
    if (userCode == '') {
        $('.codeErr').html('验证码不能为空')
    }

    //判断用户输入的是邮箱还是手机
    /*var phone = '',
        email = '';
    if (!(/^1[3|4|5|7|8][0-9]\d{4,8}$/.test(data))) {
        phone = data;
        email = '';
    } else if (/^([0-9A-Za-z\-_\.]+)@([0-9a-z]+\.[a-z]{2,3}(\.[a-z]{2})?)$/g.test(data)) {
        phone = '';
        email = data;
    }
*/
    var email = "";

	
    checkName(name);
    checkMobile(phone,ss);
    CheckForm(pass, pass1);
	
	
	
    $.ajax({
        type: "post",
        url: "http://www.maxlucio.top/tuji1.0.2/reg",
        data: {
            phone: phone,
            email:email,
            name: name,
            password: pass,
            password1: pass1,
            code: userCode
        },
        success: function(data) {
			console.log(data);

        	if(data == 1){
        		alert("注册成功,去登录");
        	}else{
        		alert("注册失败，重新注册");
        	}
            
        },
        error:function(){
        	alert('出错咯，稍后再试')
        }
    })
})
//手机号码正则校验
function checkMobile(user){
	var sMobile = user;
	if(!(/^1[3|4|5|7|8][0-9]\d{4,8}$/.test(sMobile))){
		$('.phoneErr').html("手机号码不正确！请重新输入");
		alert('err');
//    document.mobileform.mobile.focus();
		return false;
	}
}
//向后台请求用户信息
$.ajax({
	type:'post',
	url:'http://www.maxlucio.top/tuji1.0.2/userset',
	dataType:'json',
	data:{
		UID:localStorage.getItem('UID')
	},
	success:function(data){
		console.log(data)
		$('.UID').attr('placeholder',data.id)
		$('.name').val(data.nickname)
		$('.phone').val(data.tel)
		$('.email').val(data.email)
		$('.view').css('background',data.headportrait)
		$('.profession').val(data.job)
		$('.personally').val(data.introduce)
	},
	error:function(err){
		console.log('err')
	}
});

//校验昵称
function checkName(s){
	var patrn=/(?:[a-zA-Z]{1,12})|(?:[\u4e00-\u9fa5]{1,6})|[._]/;
	if (!patrn.exec(s)){
		$('.nameErr').html('昵称1-6个汉字或者1-12个字符（可以有下划线）!');
		return false;
	}else{
		$('.nameErr').html('');
	}
}
//手机号码正则校验
function checkMobile(user){
	var sMobile = user;
	if(!(/^1[3|4|5|7|8][0-9]\d{4,8}$/.test(sMobile))){
		$('.phoneErr').html("手机填写错误!")
		return false;
	}else{
		$('.phoneErr').html("")
	}
}
//手机号码正则校验
function checkEmail(user){
		var reg = new RegExp("^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$"); //正则表达式

		if(user === ""){ //输入不能为空
			$('.emailErr').html("不能为空")
			return false;
		}else if(!reg.test(user)){ //正则验证不通过，格式不对
			$('.emailErr').html("邮箱填写错误！")
			return false;
		}else{
			$('.emailErr').html("!")
			return true;
		}
}

//文本框失去焦点判断内容
$('.name').blur(function(){
	var name = $('.name').val();
	checkName(name)
});
$('.phone').blur(function(){
	var phone = $('.phone').val();
	checkMobile(phone)
});
$('.email').blur(function(){
	var email = $('.email').val();
	checkEmail(email)
});

//头像
$("#clipArea").hide();
$("#clipArea").photoClip({
	width: 200,
	height: 200,
	file: "#file",
	view: "#view",
	ok: "#clipBtn",
	loadStart: function() {
		console.log("照片读取中");
	},
	loadComplete: function() {
		console.log("照片读取完成");
	},
	clipFinish: function(dataURL) {
		console.log(dataURL);
	}
});
$("#clipBtn").on('click',function(){
	$("#clipArea").hide()
})
$('#file').on('click',function(){
	$("#clipArea").show()
})


$("#clipBtn").on('click',function(){
	$("#clipArea").hide()
});
$('#file').on('click',function(){
	$("#clipArea").show()
});
//基本资料和修改密码调换
$('.changePassword').hide();
$('#changePass').on('click',function(){
	$(this).addClass('active').siblings().removeClass('active');
	$('.basics').hide();
	$('.changePassword').show();
});

 $('#data').on('click',function(){
	 $(this).addClass('active').siblings().removeClass('active');
	 $('.changePassword').hide();
	 $('.basics').show();
 });

//向后台传递数据
$('.save').on('click',function(){
    //判断手机号码和邮箱
	var email = $('.email').val(),
		phone = $('.phone').val(),
		province = $('#province').find("option:selected").text(),
		city = $('#city').find("option:selected").text();
	var sex = '';
	//判断性别
	if($('#male').check()){
		sex = 1;
	}else {
		sex = 0;
	}
	checkMobile(phone);
	$.ajax({
		type:"post",
		url:"../updateset",
		async:true,
		data:{
			UID:$('.UID').val(),//UID
			nickname:$('.name').val(),//昵称
			tel:$('.phone').val(),//手机
			email:$('.email').val(),//邮箱
			headportrait:dataURL,//头像
			sex:sex,//性别
			city:province+city,//所在城市
			job:$('.profession').val(),//职业
			introduce:$('.personally').val()//个人签名
		},
		success:function(data){
			alert('资料更新成功！')
		},
		error:function(err){
			console.log(err)
		}
	});
});



//判断两次输入的新密码是否正确
$('.newPass1').blur(function(){
	console.log($('.newPass').val(),$('.newPass1').val())
	if($('.newPass').val()!== $('.newPass1').val()){
		$('.passErr').html('两次密码不一样！请重新输入')
	}
	else{
		$('.passErr').html('')
	}
});


//向后台传送密码
$(".btn-jj").click(function(){
	console.log($('.newPass').val(),$('.newPass1').val())
	$.ajax({
		url:'http://www.maxlucio.top/tuji1.0.2/changepwd',
		type:'post',
		dataType:"json",
		data:{
			nowPass:$('.oldPass').val(),
			newPass:$('.newPass').val()
		},
		success:function(data){
			console.log(data)
			if(data==0){
				alert('更新密码失败，请重新输入')
			}else{
				alert('更新成功！')
			}
			//判断老的密码填写是否正确
		},error:function(data){
			console.log(data)
		}
	});
})



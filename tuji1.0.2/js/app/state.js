/*
* @Author: zhang
* @Date:   2017-10-07 16:13:35
* @Last Modified by:   zhang
* @Last Modified time: 2017-10-10 13:09:34
*/
/**
 * Created by Administrator on 2017/10/7 0007.
 */

$(function() {
   //正在开发
    $(".btn-photo").click(function(){
	   	if($("#wrapper").css("display") == "none"){
	   		$("#wrapper").css("display","block");
	   	}else{
	   		$("#wrapper").css("display","none");
	   	}
	   
   })

    $(".btn-fabu").hover(function(){
    	$(this).css('background', '#7284e5');
    },function(){
    	$(this).css('background', '#72d8e5');
    })




})
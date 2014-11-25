$(document).ready(function(){

	//.b1_img的图片轮播
	var lis1 = $('.turn_img>ul li');
	var lis2 = $('.turn_img>ol li');
	//var width = $('.turn_img ul li').first().width();alert(width);
	var width = 450;
	var now = 0;

	lis2.click(function(){
		now = $(this).index();
		lis1.stop().animate({'left':-now*width},500);
		$(this).addClass('curr').siblings().removeClass('curr');
	});
	
	function slider(){
		if(now>=lis1.length-1){
			now = 0;
		}else{
			now++;
		}
		lis1.animate({'left':-now*width},700);
		lis2.eq(now).addClass('curr').siblings().removeClass('curr');
	}

	var stid = setInterval(slider,2500);
	$('.turn_img ol li').mouseover(function(){
		clearInterval(stid);
	}).mouseout(function(){
		stid = setInterval(slider,2500);
	});


	//.turn_msg的切换
	$('.turn_msg_title li').mouseover(function(){
		$(this).attr('class','curr_title').siblings().removeAttr('class');
		//$(this).parent().siblings().removeClass('curr2').eq($(this).index()).addClass('curr2');
		$(this).parent().siblings().hide().eq($(this).index()).show();
	});

	$('.turn_msg_title_vertical li').mouseover(function(){
		$(this).attr('class','curr_title').siblings().removeAttr('class');
		//$(this).parent().siblings().removeClass('curr2').eq($(this).index()).addClass('curr2');
		$(this).parent().siblings().hide().eq($(this).index()).show();
	});
	
	//底部导航
	$('select[name=select]').change(function(){
		var url = $(this).val();
		if(url!=''){
			open(url,'_blank');
		}
		$(this).children().first().attr('selected',true);
		$(this).blur();
	});

	//文本款提示关键字
	$(".keyword").focus(function(){
		if($(this).val() == "全文检索") $(this).val("").removeClass("keyword");
	}).blur(function(){
		if($(this).val() == "") $(this).val("全文检索").addClass("keyword");
	});
})




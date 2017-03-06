$('.circle').on("mouseenter click",function(){
	// alert("circle")
	if ($(this).is(".leftTop")) {
		// alert($(this).attr("class"));
		$(".center .arrowImg").css("transform","rotate(-100deg)");
		// $(".center img").css("height","70%");
		// $(".center img").css("margin-top","0%");
		$(this).css("opacity", "1");
		$(this).siblings(".circle").css("opacity", "0.4");
		$(".center").css("opacity", "1");
		$(".whatWeDoDiv").css("display","block");
		$(".whatWeDoDiv").siblings().css("display","none");
	}
	else if ($(this).is(".leftBottom")) {
		// alert($(this).attr("class"));
		$(".center .arrowImg").css("transform","rotate(-170deg)");
		// $(".center img").css("height","70%");
		// $(".center img").css("margin-top","0%");
		$(this).css("opacity", "1");
		$(this).siblings(".circle").css("opacity", "0.4");
		$(".center").css("opacity", "1");
		$(".whoWeAreDiv").css("display","block");
		$(".whoWeAreDiv").siblings().css("display","none");
	}
	else if ($(this).is(".bottom")) {
		// alert($(this).attr("class"));
		$(".center .arrowImg").css("transform","rotate(133deg)");
		// $(".center img").css("height","70%");
		// $(".center img").css("margin-top","0%");
		$(this).css("opacity", "1");
		$(this).siblings(".circle").css("opacity", "0.4");
		$(".center").css("opacity", "1");
		$(".ourMotoDiv").css("display","block");
		$(".ourMotoDiv").siblings().css("display","none");
	}
	else if ($(this).is(".rightBottom")) {
		// alert($(this).attr("class"));
		$(".center .arrowImg").css("transform","rotate(75deg)");
		// $(".center img").css("height","70%");
		// $(".center img").css("margin-top","0%");
		$(this).css("opacity", "1");
		$(this).siblings(".circle").css("opacity", "0.4");
		$(".center").css("opacity", "1");
		$(".ourVissionDiv").css("display","block");
		$(".ourVissionDiv").siblings().css("display","none");
	}
	else if ($(this).is(".rightTop")) {
		// alert($(this).attr("class"));
		$(".center .arrowImg").css("transform","rotate(10deg)");
		// $(".center img").css("height","70%");
		// $(".center img").css("margin-top","0%");
		$(this).css("opacity", "1");
		$(this).siblings(".circle").css("opacity", "0.4");
		$(".center").css("opacity", "1");
		$(".ourMissionDiv").css("display","block");
		$(".ourMissionDiv").siblings().css("display","none");
	}
	else if($(this).is(".top")) {
		// alert($(this).attr("class"));
		$(".center .arrowImg").css("transform","rotate(-45deg)");
		// $(".center img").css("height","70%");
		// $(".center img").css("margin-top","0%");
		$(this).css("opacity", "1");
		$(this).siblings(".circle").css("opacity", "0.4");
		$(".center").css("opacity", "1");
		$(".ourStoryDiv").css("display","block");
		$(".ourStoryDiv").siblings().css("display","none");
	}
});
$('.partner').on("mouseenter click",function(){
	$(this).children(".partnerOverlap").css("display","block");
	$(this).siblings(".partnerOverlapText").css("display","block");
	$(this).parents().siblings().children().children(".partnerOverlap").css("display","none");
	$(this).parents().siblings().children().siblings(".partnerOverlapText").css("display","none");	
});

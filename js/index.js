$(function() {
	$.ajax({
		type:"GET",
		url:"ajax/message.json",
		dataType:"json",
		success:function(data){
			data.myinfo.forEach(function(item){
				$(".home_info_box").append("<p>"+item+"</p>");
			});
			data.skill_list.forEach(function(item,index){
				$(".skill_content").append("<span class=skill"+(index+1)+">"+item+"<span>");
			});
		}
	});
	$('#dowebok').fullpage({
		scrollingSpeed: 400,
		css3: true,
		resize: true,
		anchors: ["page1", "page2", "page3", "page4", "page5"],
		verticalCentered: false,
		afterRender: function() {
			$(".home_head").css({
				"transform": "scale(1,1)"
			});
			$(".home_info1").fadeIn(700,function(){
				$(this).next().fadeIn(700,function(){
					$(this).next().animate({width:"800px"},700,function(){
						$(".home_info_box p").eq(0).fadeIn(400,function(){
							$(this).next().fadeIn(400,function(){
								$(this).next().fadeIn(400,function(){
									$(".aside").fadeIn(300);
								});
							});
						});
					});
				});
			});
			$(".aside a").eq(0).addClass("cur").siblings().removeClass("cur");
		},

		afterLoad: function(anchorLink, index) {
			if(index == 1) {
				$(".aside a").eq(0).addClass("cur").siblings().removeClass("cur");
			}
			if(index == 2) {
				$(".aside a").eq(1).addClass("cur").siblings().removeClass("cur");
				$(".title").append("<span></span>");
				$(".title span").animate({"width":"150px"},200);
				$(".skill1,skill4").fadeIn(1000,function(){
					$(".skill2,.skill5").fadeIn(700,function(){
						$(".skill3,.skill6").fadeIn(700,function(){
							$(".skill7,.skill9").fadeIn(700,function(){
								$(".skill8,.skill12").fadeIn(700,function(){
									$(".skill10,.skill11").fadeIn(700,function(){
										$(".skill13,.skill14").fadeIn(700);
									});
								});
							});
						});
					});
				});
			}
			if(index == 3) {
				$(".aside a").eq(2).addClass("cur").siblings().removeClass("cur");
				$(".title").append("<span></span>");
				$(".title span").animate({"width":"150px"},200);
				$(".exp_content").animate({height:"370px"},700,function(){
					$(".r_info").css({opacity:"1"});
				});
			}
			if(index == 4) {
				$(".aside a").eq(3).addClass("cur").siblings().removeClass("cur");
				$(".title").append("<span></span>");
				$(".title span").animate({"width":"150px"},200);
				var i=-1;
				$(".one_demo").each(function() {
					var $this=$(this);
					if(!$this.hasClass("b_to_t")){
						i+=2;
						setTimeout(function(){
					   $this.addClass("b_to_t");
					   },200*i);
					}
				});
				$(".more_demo").css({"opacity":"1"});
			}
			if(index == 5) {
				$(".aside a").eq(4).addClass("cur").siblings().removeClass("cur");
				$(".title").append("<span></span>");
				$(".title span").animate({"width":"150px"},200);
				$(".thanks_content").css({
					"margin-top":"60px"	
				});
			}
		},
		onLeave:function(index){
			if(index==2||index==3||index==4||index==5||index==6){
				$(".title span").remove();	
			}
		}
	});
	//内容适应居中
	$(function(){
		$(".home_content").css({"padding-top":($(".active").height()-$(".home_content").height())/6});
		$(".skill_content").css({"padding-top":($(".active").height()-$(".skill_content").height())/6});
		$(".exp_content").css({"padding-top":($(".active").height()-$(".exp_content").height())/9});
		$(".demo_content").css({"padding-top":($(".active").height()-$(".demo_content").height())/6});
		$(".thanks_content").css({"padding-top":($(".active").height()-$(".thanks_content").height())/6});
	});
});

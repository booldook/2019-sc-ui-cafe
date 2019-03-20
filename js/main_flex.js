$(".tabs > li").click(function(){

	$(".tabs > li").removeClass("tab_active");
	$(this).addClass("tab_active");
	
	var n = $(this).index();
	$(".menu_div").hide();
	$(".menu_div").eq(n).show();
});
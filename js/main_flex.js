$(".tabs > li").click(function(){

	$(".tabs > li").removeClass("tab_active");
	$(this).addClass("tab_active");
	
	var n = $(this).index();
	$(".menu_div").hide();
	$(".menu_div").eq(n).show();
});

var dt = new Date();
dateTime = dt.getFullYear() + "-" + zeroPlus(dt.getMonth()+1) + "-" + zeroPlus(dt.getDate()) + " " + getAmPm(dt.getHours()) + ":" + zeroPlus(dt.getMinutes());
$("form[name='contact_form']").find("input[name='reserve']").val(dateTime);

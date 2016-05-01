$(document).ready(function(){
	$("#menu").click(function(){
		$("nav.nav_closed").toggleClass("nav_open");
	});
	
	$("nav ul li a").click(function(){
		$("nav.nav_open").removeClass("nav_open");
	});
	
});
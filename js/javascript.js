$(document).ready(function(){
	$(".burger").click(function(){
		$(this).toggleClass("open");
	});

	$(".loader").toggleHidden("")

	$(window).load(functiono(){
		$(".loader").toggleClass("hidden");
	});

});

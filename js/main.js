$(function () {
	$('.offer-content a').click(function () {
		$('.triangles').css('width','300');
	});
	$('.logo').click(function () {
		$('.offer-content h1').css('font-size','50px');
	});
	$('.menu li a').click(function () {
		$(this).toggleClass('active');
	});	

});
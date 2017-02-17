$(function () {
	$('ul li:has("ul")').append('<span></span>');
	$('ul li a').click(function() {
		var checkElement = $(this).next();
		checkElement.stop().animate({'height':'toggle'}, 500);	
		if((checkElement.is('ul')) && (checkElement.is(':visible'))) {
			return false;
		}
	});
});	





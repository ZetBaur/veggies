

$(document).ready(function(){




	$('.slider').slick({});
  



// ================MENU and BURGER=============================================================================
    $('.burger').on('click', function(){
        $('.menu').toggleClass('open');
    });

    $('.menu-item').on('click', function(){
        if($('.menu').hasClass('open')){
            $('.menu').removeClass('open');
        }
    });

    $('html, body').on('click', function(e){
        if($('.menu').hasClass('open') && !$(e.target).is('.menu, .menu-item, .burger')){
            $('.menu').removeClass('open');
        }
    });



// =====================ibg================================================================================
function ibg(){
	$.each($('.ibg'), function(index, val) {
		if($(this).find('img').length>0){
			$(this).css('background-image','url("'+$(this).find('img').attr('src')+'")');
		}
	});
}
ibg();
// ==========UP==================================================================================================

$(window).scroll(function() {
		var w=$(window).width();
	if($(window).scrollTop()>50){
		$('#up').fadeIn(300);
	}else{
		$('#up').fadeOut(300);
	}
});
$('#up').click(function(event) {
	$('body,html').animate({scrollTop:0},300);
});


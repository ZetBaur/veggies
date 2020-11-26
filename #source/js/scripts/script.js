
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
// ==================TABS===========================================================
$('body').on('click','.tab-link',function(event) {
			var eq=$(this).index();
		if($(this).hasClass('parent')){
			var eq=$(this).parent().index();
		}
	if(!$(this).hasClass('active')){
			$(this).closest('.tabs').find('.tab-link').removeClass('active');
			$(this).addClass('active');
			$(this).closest('.tabs').find('.tab-item').removeClass('active').eq(eq).addClass('active');
		if($(this).closest('.tabs').find('.slick-slider').length>0){
			$(this).closest('.tabs').find('.slick-slider').slick('setPosition');
		}
	}
});
// ===================SPOLLER==========================================

$.each($('.spoller.active'), function(index, val) {
	$(this).next().show();
});
$('body').on('click','.spoller',function(event) {
	if($(this).hasClass('mob') && !isMobile.any()){
		return false;
	}
	if($(this).hasClass('closeall') && !$(this).hasClass('active')){
		$.each($(this).closest('.spollers').find('.spoller'), function(index, val) {
			$(this).removeClass('active');
			$(this).next().slideUp(300);
		});
	}
	$(this).toggleClass('active').next().slideToggle(300,function(index, val) {
			if($(this).parent().find('.slick-slider').length>0){
				$(this).parent().find('.slick-slider').slick('setPosition');
			}
	});
	return false;
});

// ==================TIP=================================================================


if($('.t,.tip').length>0){
	tip();
}
function tip(){
	$('.t,.tip').webuiPopover({
		placement:'top',
		trigger:'hover',
		backdrop: false,
		//selector:true,
		animation:'fade',
		dismissible: true,
		padding:false,
		//hideEmpty: true
		onShow: function($element) {},
		onHide: function($element) {},
	}).on('show.webui.popover hide.webui.popover', function(e){
		$(this).toggleClass('active');
	});
}
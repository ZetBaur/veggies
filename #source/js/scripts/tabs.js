




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
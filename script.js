//ハンバーガーメニュー

$(function(){
    $('.bl_hamburger').on('click', function() {
        $('.bl_headerNav').toggleClass('is_active');
        $('.bl_hamburger').toggleClass('is_close');
    });
});

//ビューワー
$(function(){

$('.bl_choice_list').click(function(){

$('#header').attr('style', $(this).attr('style'));

return false;
//親要素へのイベント伝播（伝わり広まること）を止める役割
});

});

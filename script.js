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


//画像キャプション表示
$(function(){
$('.bl_cardUnit__extended').children('.bl_card').append('<div>');
$('.bl_card').children('div').addClass('is_hover');

$('.is_hover').each(function(){

$(this).html(`<p>` + $(this).parent().children('.bl_card_imgWrapper').children('img').attr('alt')+ `</p>`);
$(this).hide();
});


$('.bl_cardUnit__extended').children('.bl_card').hover(function(){
$(this).children('div').stop().fadeIn(300);

$(this).children('div').children('p').stop().animate({top: '50%'},300);

},function(){


$(this).children('div').stop().fadeOut(300);
//キャプション部分のフェードアウト

$(this).children('div').children('p').stop().animate({top: '60%'}, 300);

});
});

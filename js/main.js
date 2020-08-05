// スライドする
$(document).ready(function(){
  $('.slider').bxSlider({
      auto: true,
      speed:1000,
      pause: 5000,
      mode: 'vertical',
      controls:false,
      pager:false, //ページの非表示
      
    
      onSlideBefore : function($slideElement) {
        $slideElement.find("img").addClass('blur');
      },
      onSlideAfter : function($slideElement) {
        $slideElement.find("img").removeClass('blur');
        
      }
  });
});

//クリックしたらゆっくりスクロールする
$(function(){
  $('a[href^="#"]').click(function(){
    var speed = 500;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });
});



$(function(){
  var effect_pos = 300; // 画面下からどの位置でフェードさせるか(px)
  var effect_move = 50; // どのぐらい要素を動かすか(px)
  var effect_time = 800; // エフェクトの時間(ms) 1秒なら1000

  // フェードする前のcssを定義
  $('.scroll-fade').css({
      opacity: 0,
      transform: 'translateY('+ effect_move +'px)',
      transition: effect_time + 'ms'
  });

  // スクロールまたはロードするたびに実行
  $(window).on('scroll load', function(){
      var scroll_top = $(this).scrollTop();
      var scroll_btm = scroll_top + $(this).height();
      effect_pos = scroll_btm - effect_pos;

      // effect_posがthis_posを超えたとき、エフェクトが発動
      $('.scroll-fade').each( function() {
          var this_pos = $(this).offset().top;
          if ( effect_pos > this_pos ) {
              $(this).css({
                  opacity: 1,
                  transform: 'translateY(0)'
              });
          }
      });
  });
});





$(document).ready(function(){
  $('.acco_title:eq(0)').addClass('on');
  $('.acco_sub:not(:eq(0))').hide();
  $('.acco_title').on('click', function(){
    if($(this).hasClass('on')==false){
      $('.acco_sub').stop().slideUp(400);
      $('.acco_title.on').removeClass('on')
      $(this).addClass('on');
      $(this).next().stop().slideDown(400);
    }
  })
})
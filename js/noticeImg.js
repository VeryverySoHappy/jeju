var sid;
function cycleMenu(){
  $('.noticeList a:gt(0)').hide();
  $('.move a').on('click',function(e){
    e.preventDefault();

    if($(this).hasClass('on')==false){
      // on이라는 클래스가 없다면
      if($('.stopBtn').hasClass('pause')==true){
        clearInterval(sid);
        sid=setInterval(cycleMenuAutoPlay,5000)
      }
      changeItem($(this).index())
    }
  })

  $('.stopBtn').on('click',function(e){
    e.preventDefault();
    if($(this).hasClass('pause')==true){
      clearInterval(sid)
      $(this).removeClass('pause');
      $(this).addClass('play');
    }else{
      sid=setInterval(cycleMenuAutoPlay,2000)
      $(this).removeClass('play');
      $(this).addClass('pause');
    }
  })
  sid=setInterval(cycleMenuAutoPlay,2000)
}

function changeItem(idx){
  $('.move a.on').removeClass('on');
  $('.move a:eq('+idx+')').addClass('on');
  var menuWidth=parseInt($('.noticeList').css('width'));
  $('.noticeList a:eq('+idx+')').css({
    'left':menuWidth+'px',
    'display':'block'
  })

  $('.noticeList a.on').animate({
    'left':-menuWidth+'px'
  },600,function(){
    $(this).removeClass('on');
    $(this).hide();
  })
  $('.noticeList a:eq('+idx+')').animate({
    'left':'0px'
  },600, function(){
    $(this).addClass('on')
  })
}

function cycleMenuAutoPlay(){
  var temp=$('.move a.on').index()+1;
  if(temp>$('.move a').length-1){
    temp=0;
  }
  changeItem(temp)
}
$(document).ready(function(){
  cycleMenu();
})

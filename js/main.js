// slide_wrap start

var num=1
$(document).ready(function(){
  $('.slide_list li:gt(0)').hide();
  // 인덱스 중에서 0보다 큰건 숨겨니까 첫번째꺼가 맨 위로 옴
  $('.btn_left').on('click',function(e){
    e.preventDefault()
    num--;
    if(num<1){
      num=5
    }
    move(num)
  })
  $('.btn_right').on('click',function(e){
    e.preventDefault()
    num++;
    if(num>5){
      num=1
    }
    move(num)
  })
  $('.btn_stop').on('click', function(e){
    e.preventDefault();
    if($(this).hasClass('pause')===true){
      clearInterval(popupset);
      $(this).removeClass('pause')
      $(this).addClass('play')
    }else{
      popupset = setInterval(function() {set()}, 5000)
      $(this).removeClass('play')
      $(this).addClass('pause')
    }
  })
    
  var popupset = setInterval(function(){
    set()
  },5000)
})

function move(num){
  $('.count').text(num);
  $('.slide_list li').hide();
  $('.slide_list li:eq('+(num-1)+')').show();
}
function set(){
  $('.btn_right').trigger('click')
}

// slide_wrap end

// noticeImg start
var sid;
function cycleMenu(){
  $('.noticeList a:gt(0)').hide();
  $('.move a').on('click',function(e){
    e.preventDefault();

    if($(this).hasClass('on')==false){
      if($('.StopBtn').hasClass('PauseBtn')==true){
        clearInterval(sid);
        sid=setInterval(cycleMenuAutoPlay,5000)
      }
      changeItem($(this).index())
    }
  })

  $('.StopBtn').on('click',function(e){
    e.preventDefault();
    if($(this).hasClass('PauseBtn')==true){
      clearInterval(sid)
      $(this).removeClass('PauseBtn');
      $(this).addClass('Play');
    }else{
      sid=setInterval(cycleMenuAutoPlay,5000)
      $(this).removeClass('Play');
      $(this).addClass('PauseBtn');
    }
  })
  sid=setInterval(cycleMenuAutoPlay,5000)
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
// noticeImg end
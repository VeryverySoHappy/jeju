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

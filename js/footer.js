var bannerWidth=120;
var sid;
function auto (dis){
  if(dis=='prev'){
    $('.banner').prepend($('.banner li:last'));
    $('.banner').css('left','-'+bannerWidth+'px');
    $('.banner').animate({
      left:0
    },3000)
  }else{
    $('.banner').animate({
      left:'-'+bannerWidth+'px'
    },3000,function(){
      $('.banner').append($('.banner li:first'));
      $('.banner').css('left','0px');
    })
  }
}

function cycleMenu(){
  $('.prevBtn').on('click',function(e){
    e.preventDefault();
    clearInterval(sid);
    sid=setInterval(auto,3000,'prev')
    if($('.playBtn').hasClass('on')==true){
      $('.playBtn').css('display','none');
      $('.stopBtn').css('display','inline-block')
    }
  })

  $('.nextBtn').on('click', function(e){
    e.preventDefault();
    clearInterval(sid);
    sid=setInterval(auto,3000,'next')
    if($('.playBtn').hasClass('on')==true){
      $('.playBtn').css('display','none');
      $('.stopBtn').css('display','inline-block')
    }
  })
  $('.playBtn').on('click', function(e){
    e.preventDefault();
    clearInterval(sid);
    sid=setInterval(auto,3000,'next');
    $(this).css('display','none');
    $('.stopBtn').css('display','inline-block')
  })
  $('.stopBtn').on('click', function(e){
    e.preventDefault();
    clearInterval(sid);
    $(this).css('display','none');
    $('.playBtn').css('display','inline-block')
    $('.playBtn').addClass('on')
  })

  sid=setInterval(auto,1000,'next')
}
$(document).ready(function(){
  cycleMenu();
})
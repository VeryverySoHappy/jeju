var bannerWidth=150;
var ft_sid;
function auto (dis){
//   if(dis=='prev'){
//     $('.ft_banner').prepend($('.ft_banner li:last'));
//     $('.ft_banner').css('left','-'+bannerWidth+'px');
//     $('.ft_banner').animate({
//       left:0
//     },3000)
//   }else{
//     $('.ft_banner').animate({
//       left:'-'+bannerWidth+'px'
//     },3000,function(){
//       $('.ft_banner').append($('.ft_banner li:first'));
//       $('.ft_banner').css('left','0px');
//     })
//   }
// }
if(dis=='prev'){
  $('.ft_banner').prepend($('.ft_banner li:last'));
  $('.ft_banner').css('left','-'+bannerWidth+'px');
  $('.ft_banner').animate({
    left:0
  },3000)
}else{
  $('.ft_banner').animate({
    left:'-'+bannerWidth+'px'
  },3000,function(){
    $('.ft_banner').append($('.ft_banner li:first'));
    $('.ft_banner').css('left','0px');
  })
}
}

function ft_cycleMenu(){
  $('.ft_prevBtn').on('click',function(e){
    e.preventDefault();
    clearInterval(ft_sid);
    ft_sid=setInterval(auto,3000,'next')
    if($('.ft_playBtn').hasClass('on')==true){
      $('.ft_playBtn').css('display','none');
      $('.ft_stopBtn').css('display','inline-block')
    }
  })

  $('.ft_nextBtn').on('click',function(e){
    e.preventDefault();
    clearInterval(ft_sid);
    ft_sid = setInterval(auto,3000,'prev')
    if($('.ft_playBtn').hasClass('on')==true){
      $('.ft_playBtn').css('display','none');
      $('.ft_stopBtn').css('display','inline-block')
    }  
  })  
  
  $('.ft_playBtn').on('click',function(e){
    e.preventDefault();
    clearInterval(ft_sid);
    ft_sid=setInterval(auto,3000,'next');
    $(this).css('display','none');
    $('.ft_stopBtn').css('display','inline-block');
  })
  
  $('.ft_stopBtn').on('click',function(e){
    e.preventDefault();
    clearInterval(ft_sid);
    $(this).css('display','none');
    $('.ft_playBtn').css('display','inline-block')
    $('.ft_playBtn').addClass('on')
  })

  ft_sid = setInterval(auto,3000,'next')
}
$(document).ready(function(){
  ft_cycleMenu();
})
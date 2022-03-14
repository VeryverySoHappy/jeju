var selectNum=0;
function changeItem(num){
  if($('.slide').is(':animated')==false){

    $('.page_navi li.on').removeClass('on')
    $('.page_navi li').eq(num).addClass('on')

    $('.slide').animate({
      top:-(num * 60) + 'px'
    },3000,'easeOutBack');
  }
}
$(document).ready(function(){
  $('.page_navi li').on('click', function(e){
    e.preventDefault()        
    selectNum=$(this).index()
    changeItem(selectNum)
  })

  $('.next').on('click', function(e){
    e.preventDefault()
    selectNum++
    if(selectNum>$('.page_navi li').length-1){
      selectNum=0;
    }
    changeItem(selectNum)
  })
  
  $('.prev').on('click', function(e){
    e.preventDefault()
    selectNum--
    if(selectNum<0) {
      selectNum=$('.page_navi li').length-1
    }
    changeItem(selectNum)
  })
})

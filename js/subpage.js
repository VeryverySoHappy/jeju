$(document).ready(function(){
  $('.faq_dd:not(:eq(0))').hide()
  $('dt').on('click',function(){
    $(this).toggleClass('open').next().slideToggle()
  })
})
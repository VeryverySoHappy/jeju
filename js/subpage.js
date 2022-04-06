// faq start
$(document).ready(function(){
  $('.faq_dd:not(:eq(0))').hide()
  $('.faq_dt').on('click',function(){
    $(this).toggleClass('open').next().slideToggle()
  })
})
// faq end

// praise start
function infoAdd(){
  var userName = $.trim($('#mem_name').val());
  if(userName==""){
    alert('이름을 입력하세요');
    $('.mem_name').focus();
    return;
  }

  var userText = $.trim($('#mem_txt').val());
  if(userText==""){
    alert('내용을 입력하세요');
    $('#mem_txt').focus();
    return;
  }

  if($('#addressList').hasClass('noData')==true){
    $('#addressList').removeClass('noData')
    $('#addressList tbody tr').remove();
  }

  var html="<tr>";
  html+="<td>"+userName+"</td>";
  html+="<td>"+userName+"</td>";
  html+="<td>";
  html+="<a href=\"\" onclick=\"deleteBtn(this); return false;\"><img src=\"../img/sub/btn_del.gif\" alt=\"\"></a>";
  html+="</td>";
  html+="</tr>";
  $('#addressList tbody').append(html)
  $('#mem_txt, #mem_name').val("")
}

function deleteBtn(obj){
  $(obj).parent().parent().remove();
  if($('#addressList tbody tr').length==0){
    $('#addressList').addClass('noData')
    $('#addressList tbody').append("<tr><td colspan='3'>등록된 내용이 없습니다</td>></tr>")
  }
}

  $(document).ready(function(){
  $('.addBtn').on('click',function(e){
    e.preventDefault()
    infoAdd()
  })

  $('#mem_txt').keyup(function(e){
    if(e.which==13){
    infoAdd()
      }
    })
  })
// praise end

// festival start
$(document).ready(function(){
  $('.fes_list_wrap dt').on('click', function(e){
    e.preventDefault();
    if($(this).hasClass('On')==true){
      alert('이미 선택한 축제입니다')
      return
    }
    if($('.fes_eventList li').length >=2){
      alert('축제는 2개까지만 선택이 가능합니다')
      return
    }
    $(this).addClass('On')

    var html = '<li>'
        html += '<div class="fes_info">'
        html += '<img src ='+$(this).find('img').prop('src')+' alt="">'
        html += '<span>'+$(this).find('.fes_text1').text()+'</span>'
        html += '<input type="button" value="x" class="delBtn">'
        html += '</div>'
        html += '</li>'
        $('.fes_eventList').append(html)
        $('.fes_eventList .delBtn:last').data('listObject',$(this)).on('click', function(){
          $(this).data('listObject').removeClass('On')
          $(this).parent().parent().remove()
        })
  })
})
// festival end
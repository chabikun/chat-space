$(function(){
  function buildHTML(comment){
    var html = `<div class="message">
                       <div class="upper-message">
                           <div class="upper-message__user-name">
                               ${ comment.user_name }
                           </div>
                           <div class="upper-message__date">
                               ${ comment.time }
                           </div>
                       </div>
                       <div class="lower-message">
                           <p class="lower-message__content">
                               ${ comment.content }
                           </p>
                       </div>
                   </div>`;
    return html;
  }
  $('#new_message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var href = $(this).attr('action')
    $.ajax({
      url: href,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false,
    })

    .done(function(data){
      var html = buildHTML(data);
      $('.messages').append(html)
      $('.lower-message__content').val('')
      $(".messages").scrollTop( $('.messages')[0].scrollHeight );
    })
    .fail(function(){
      alert('メッセージを入力してください。');
    })
    $("#send_botton").removeAttr('data-disable-with')
  })
});

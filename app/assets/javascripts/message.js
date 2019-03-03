$(function(){
  function buildHTML(comment){

    var html_being = `<div class="message message-id" data-id=${ comment.message_id }>
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
                           <div class="lower-message__imege">
                               <img src= "${ comment.image.url }">
                           </div>
                       </div>
                   </div>`;

    if (comment.image.url == null){
        var html_nil = `<div class="message message-id" data-id= ${ comment.message_id }>
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
      return html_nil
      } else{
      return html_being
      }
    };


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
      $('#new_message')[0].reset()
      $(".messages").scrollTop( $('.messages')[0].scrollHeight );
    })
    .fail(function(){
      alert('メッセージを入力してください。');
    })
    $("#send_botton").removeAttr('data-disable-with');
  })
});

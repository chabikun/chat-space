$(function(){
  function buildHTML(messages){

    var html_being = `<div class="message message-id" data-id=${ messages.message_id }>
                       <div class="upper-message">
                           <div class="upper-message__user-name">
                               ${ messages.user_name }
                           </div>
                           <div class="upper-message__date">
                               ${ messages.time }
                           </div>
                       </div>
                       <div class="lower-message">
                           <p class="lower-message__content">
                               ${ messages.content }
                           </p>
                           <div class="lower-message__imege">
                               <img src= "${ messages.image.url }">
                           </div>
                       </div>
                   </div>`;

    if (messages.image.url == null){
        var html_nil = `<div class="message message-id" data-id= ${ messages.message_id }>
                           <div class="upper-message">
                               <div class="upper-message__user-name">
                                   ${ messages.user_name }
                               </div>
                               <div class="upper-message__date">
                                   ${ messages.time }
                               </div>
                           </div>
                           <div class="lower-message">
                               <p class="lower-message__content">
                                   ${ messages.content }
                               </p>
                           </div>
                       </div>`;
      return html_nil
        }
    else{
      return html_being
    }
  };

$(function(){
  setInterval(update, 5000);

  function update(){
    if($('.message-id')[0]){
      var message_id = $(".message-id:last").data("id");
      console.log(message_id)
    }
    else {
      var message_id = 0
      console.log(message_id)
    }
    $.ajax({
      url: location.href,
      type: 'GET',
      data: {
        id: message_id
      },
      dataType: 'json'
    })

    .done(function(data){
      console.log(data)
      $.each(data,function(i,messages){
        var html = buildHTML(messages);
        $('.messages').append(html);
        $('#new_message')[0].reset()
        $(".messages").scrollTop( $('.messages')[0].scrollHeight );
        })
    })
   }
  });
});

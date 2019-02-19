$(function() {
  function buildHTML(user){
    var html = `<div class="chat-group-user clearfix">
                  <p class="chat-group-user__name">${ user.name }</p>
                  <a class="user-search-add chat-group-user__btn chat-group-user__btn--add" data-user-id= ${ user.user_id } data-user-name= ${ user.name }>追加</a>
                </div>`;
    return html
  }
  function buildHTML_add_candidacy(user_id, user_name){
    var html = `<div class='chat-group-user clearfix js-chat-member' id='chat-group-user-8'>
                  <input name='group[user_ids][]' type='hidden' value=${ user_id }>
                  <p class='chat-group-user__name'>${ user_name }</p>
                  <a class='user-search-remove chat-group-user__btn chat-group-user__btn--remove js-remove-btn'>削除</a>
                </div>`;
    return html
  }
  $("#user-search-field").on("keyup", function() {
    var input = $("#user-search-field").val();
    $.ajax({
      type: 'get',
      url: '/users',
      data: { keyword: input },
      dataType: 'json'
     })
    .done(function(data){
      $('#user-search-result').empty()
      data.forEach(function(user){
        var html = buildHTML(user)
        $('#user-search-result').append(html)
      })
    })
     .fail(function(){
       alert('ユーザー検索に失敗しました');
     })
  });
  $('body').on('click', '.user-search-add', function(){
    $(this).parent().remove()
    var user_name = $(this).data('user-name');
    var user_id = $(this).data('user-id');
    var html = buildHTML_add_candidacy(user_id, user_name)
    $('.chat-group-user-add-candidacy').append(html)
  });
  $('body').on('click', '.user-search-remove', function(){
    $(this).parent().remove()
  });
});


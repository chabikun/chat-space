json.array! @new_message do |new_message|
  json.content new_message.content
  json.user_name new_message.user.name
  json.time new_message.created_at.strftime("%Y/%m/%d %H:%M")
  json.image new_message.image
  json.message_id new_message.id
end

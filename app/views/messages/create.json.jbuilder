json.content @message.content
json.user_name @message.user.name
json.time @message.created_at.strftime("%Y/%m/%d %H:%M")
json.image @message.image
json.message_id @message.id

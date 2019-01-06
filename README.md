# README


## membersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|references|null: false, foreign_key: true|
|group_id|references|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user

## usersテーブル

|Column|Type|Options|
|------|----|-------|
|name|text|null: false|
|mailaddress|text|null: false|
|password|text|null:false|

### Association
- has_many :groups, through: :group_users
- has_many :members
- has_many :messages

## messagesテーブル

|Column|Type|Options|
|------|----|-------|
|body|text||
|image|string||
|group_id|references|null:false, foreign_key: true|
|user_id|references|null:false, foreign_key: true|

### Association
- has_many :groups

## groupsテーブル

|Column|Type|Options|
|------|----|-------|
|groupname|text|null:false|

### Association
- has_ many :users, through: :users_users
- has_many :members
- has_many :messages


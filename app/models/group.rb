class Group < ApplicationRecord
  has_many :members
  has_many :users, through: :members
  validates :name, presence: true
  has_many :messages

  def show_last_message
    if (last_massage = messages.last).present?
      last_massage.content? ? last_massage.content : '画像が投稿されています'
    else
      'まだメッセージはありません'
    end
  end
end

class Delivery < ApplicationRecord
  belongs_to :from_user, class_name: 'User', foreign_key: 'from_user_id'
  belongs_to :to_user, class_name: 'User', foreign_key: 'to_user_id'

  validates :from_user_id, :to_user_id, :item, :delivery_address, :status, presence: true
  enum status: [:pending, :canceled, :delivered]

end

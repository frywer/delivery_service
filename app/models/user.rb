class User < ActiveRecord::Base
  extend Devise::Models
  include DeviseTokenAuth::Concerns::User
  before_save -> { skip_confirmation! }

  has_many :deliveries_from, class_name: 'Delivery', foreign_key: 'from_user_id'
  has_many :deliveries_to, class_name: 'Delivery', foreign_key: 'to_user_id'

  def self.devise_modules
    [:database_authenticatable, :registerable, :rememberable, :validatable]
  end
end

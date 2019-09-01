class User < ActiveRecord::Base
  extend Devise::Models
  include DeviseTokenAuth::Concerns::User
  devise :database_authenticatable, :registerable, :rememberable, :validatable
end

FactoryBot.define do
  factory :user do
    sequence(:email) { |n| "##{n}@mail.com" }
    password { '123456' }
  end
end
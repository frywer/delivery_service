FactoryBot.define do
  factory :delivery do
    association :to_user, factory: :user
    association :from_user, factory: :user
    item { "MyString" }
    delivery_address { "MyString" }
    status { 'pending' }
  end
end

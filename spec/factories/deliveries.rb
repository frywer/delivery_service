FactoryBot.define do
  factory :delivery do
    from_user_id { 1 }
    to_user_id { 1 }
    item { "MyString" }
    delivery_address { "MyString" }
    status { 1 }
  end
end

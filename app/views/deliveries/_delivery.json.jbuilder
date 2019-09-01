json.extract! delivery, :id, :from_user_id, :to_user_id, :item, :delivery_address, :status, :created_at, :updated_at
json.from_user_mail delivery.from_user.email
json.to_user_mail delivery.to_user.email
json.url delivery_url(delivery, format: :json)

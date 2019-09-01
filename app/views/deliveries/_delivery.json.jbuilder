json.extract! delivery, :id, :from_user_id, :to_user_id, :item, :delivery_address, :status, :created_at, :updated_at
json.url delivery_url(delivery, format: :json)

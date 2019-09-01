class CreateDeliveries < ActiveRecord::Migration[6.0]
  def change
    create_table :deliveries do |t|
      t.integer :from_user_id, null: false
      t.integer :to_user_id, null: false
      t.string :item, null: false
      t.string :delivery_address ,null: false
      t.integer :status, default: 0

      t.timestamps
    end
  end
end

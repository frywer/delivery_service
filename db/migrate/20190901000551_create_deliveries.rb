class CreateDeliveries < ActiveRecord::Migration[6.0]
  def change
    create_table :deliveries do |t|
      t.integer :from_user_id
      t.integer :to_user_id
      t.string :item
      t.string :delivery_address
      t.integer :status

      t.timestamps
    end
  end
end

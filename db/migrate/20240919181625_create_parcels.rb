class CreateParcels < ActiveRecord::Migration[7.1]
  def change
    create_table :parcels do |t|
      t.text :name
      t.text :kaek
      t.float :area
      t.float :coordinates_2100, array: true, default: []
      t.float :coordinates_4326, array: true, default: []

      t.timestamps
    end
  end
end

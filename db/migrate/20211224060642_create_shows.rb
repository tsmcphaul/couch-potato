class CreateShows < ActiveRecord::Migration[6.1]
  def change
    create_table :shows do |t|
      t.string :title
      t.string :network
      t.integer :year
      t.integer :season
      t.string :image_link
      t.integer :rating

      t.timestamps
    end
  end
end

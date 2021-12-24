class CreateGenres < ActiveRecord::Migration[6.1]
  def change
    create_table :genres do |t|
      t.string :name
      t.references :show, null: false, foreign_key: true

      t.timestamps
    end
  end
end

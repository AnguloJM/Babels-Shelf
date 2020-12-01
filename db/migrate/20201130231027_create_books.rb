class CreateBooks < ActiveRecord::Migration[6.0]
  def change
    create_table :books do |t|
      t.references :user, null: false, foreign_key: true
      t.string :img_url
      t.string :title
      t.string :author
      t.string :genre

      t.timestamps
    end
  end
end

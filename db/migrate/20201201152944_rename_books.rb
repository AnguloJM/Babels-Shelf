class RenameBooks < ActiveRecord::Migration[6.0]
  def change
    rename_column :favorites, :books_id, :book_id
  end
end

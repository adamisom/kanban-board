class AddDeleteOnCascade < ActiveRecord::Migration[6.0]
  def change
    remove_foreign_key :lists, :boards
    add_foreign_key :lists, :boards, on_delete: :cascade

    remove_foreign_key :cards, :lists
    add_foreign_key :cards, :lists, on_delete: :cascade
  end
end

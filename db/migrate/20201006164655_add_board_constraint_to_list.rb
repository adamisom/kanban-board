class AddBoardConstraintToList < ActiveRecord::Migration[6.0]
  def change
    add_foreign_key :lists, :boards
  end
end

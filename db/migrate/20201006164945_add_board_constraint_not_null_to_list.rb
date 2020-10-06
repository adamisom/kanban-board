class AddBoardConstraintNotNullToList < ActiveRecord::Migration[6.0]
  def change
    change_column_null :lists, :board_id, false
  end
end

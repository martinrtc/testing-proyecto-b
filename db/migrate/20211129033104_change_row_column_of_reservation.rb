class ChangeRowColumnOfReservation < ActiveRecord::Migration[6.1]
  def change
    change_column :reservations, :row, :integer
  end
end

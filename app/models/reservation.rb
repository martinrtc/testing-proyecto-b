class Reservation < ApplicationRecord
  belongs_to :user
  belongs_to :movie, through: :schedule
  belongs_to :schedule
end

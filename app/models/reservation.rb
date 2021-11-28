class Reservation < ApplicationRecord
  belongs_to :user
  has_one :movie, through: :schedule
  has_one :theater, through: :schedule
  belongs_to :schedule
end

class Reservation < ApplicationRecord
  belongs_to :user
  has_one :movie, through: :schedule
  belongs_to :schedule
end

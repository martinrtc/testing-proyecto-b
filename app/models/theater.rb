class Theater < ApplicationRecord
    has_many :schedules
    has_many :reservations, through: :schedules
end

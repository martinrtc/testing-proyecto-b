class Reservation < ApplicationRecord
  belongs_to :user
  has_one :movie, through: :schedule
  has_one :theater, through: :schedule
  belongs_to :schedule

  def self.used_seats(schedule_id, date)
    reservations = Reservation.where(schedule_id: schedule_id, date: date)
    seats = (0..3).map{|x| (0..11).map{|y| 0}}
    
    reservations.each do |reservation|
      reservation.seats.each do |seat|
        seats[reservation.row][seat] = 1
      end
    end

    seats
  end
end

class Movie < ApplicationRecord
  has_many :schedules
  has_many :reservations, through: :schedules

  def get_all_info
    @schedules = Schedule.where(movie_id: self.id)
    to_return = {movie: self, schedule: { "matine": [], "tanda": [], "nigth": []}}
    # iterate over the schedules finding the theater name and hour to fill to_teturn variable 
    @schedules.each do |schedule|
      room_name = Theater.find(schedule.theater_id).name
      to_return[:schedule][schedule.hour].push([schedule, room_name])
    end

    to_return
  end
end

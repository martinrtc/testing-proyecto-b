class Movie < ApplicationRecord
  has_many :schedules
  has_many :reservations, through: :schedules

  def get_all_info
    @schedules = Schedule.where(movie_id: self.id)
    to_return = {movie: self, schedule: { matine: [], tanda: [], nigth: []}}
    # iterate over the schedules finding the theater name and hour to fill to_teturn variable 
    @schedules.each do |schedule|
      room_name = Theater.find(schedule.theater_id).name
      case schedule.hour
      when "matine"
        to_return[:schedule][:matine].push([schedule, room_name])
      when "tanda"
        to_return[:schedule][:tanda].push([schedule, room_name])
      when "nigth"
        to_return[:schedule][:nigth].push([schedule, room_name])
      end 
    end
    puts to_return
    to_return
  end
end

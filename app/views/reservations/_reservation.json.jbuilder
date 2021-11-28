json.extract! reservation, :id, :date, :row, :seats, :user_id, :movie_id, :schedule_id, :created_at, :updated_at
json.url reservation_url(reservation, format: :json)

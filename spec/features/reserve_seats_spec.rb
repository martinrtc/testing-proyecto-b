require 'rails_helper'

RSpec.feature "ReserveSeats", type: :request do
  it 'reserves seats' do
    expect {
      post '/create_reservation', params: {reservation: 
        {
          "date": "10/01/2020",
          "row": 1,
          "seats": [2,3,5],
          "schedule_id": 1,
          "user_name": "felipe", 
          "user_email": "fplois@gmail.com"
        }
      }
    }.to change {Reservation.count}.from(0).to(1)


    expect(response).to_have_http_status(:created)
  end
end

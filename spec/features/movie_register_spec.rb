require 'rails_helper'

RSpec.feature "MovieRegisters", type: :request do
  it 'creates a movie' do
    post '/create_movie', params: {movie: 
    {
      name: "shrek", 
      url: "https://pics.filmaffinity.com/shrek-903764423-large.jpg"
    }
    }

    expect(response).to have_http_status(:created)
  end 

end

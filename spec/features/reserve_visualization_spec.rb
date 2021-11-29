require 'rails_helper'

RSpec.feature "ReserveVisualizations", type: :request do
  it 'returns all reservations' do
    get '/reservations'

    expect(response).to_have_http_status(:success)
  end
end

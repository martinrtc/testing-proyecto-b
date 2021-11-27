# https://www.digitalocean.com/community/tutorials/build-a-restful-json-api-with-rails-5-part-one
module Response
    def json_response(object, status = :ok)
      render json: object, status: status
    end
  end
class TheatersController < ApplicationController
  include Response
  before_action :set_theater, only: %i[ update destroy ]

  # GET /theaters
  # GET /theaters.json
  def index
    @theaters = Theater.all
  end

  # GET /theaters/1
  # GET /theaters/1.json
  def show
    json_response(Reservation.used_seats(params[:id], params[:date]))
  end

  # POST /theaters
  # POST /theaters.json
  def create
    @theater = Theater.new(theater_params)

    if @theater.save
      render :show, status: :created, location: @theater
    else
      render json: @theater.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /theaters/1
  # PATCH/PUT /theaters/1.json
  def update
    if @theater.update(theater_params)
      render :show, status: :ok, location: @theater
    else
      render json: @theater.errors, status: :unprocessable_entity
    end
  end

  # DELETE /theaters/1
  # DELETE /theaters/1.json
  def destroy
    @theater.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_theater
      @theater = Theater.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def theater_params
      params.require(:theater).permit(:id, :date)
    end
end

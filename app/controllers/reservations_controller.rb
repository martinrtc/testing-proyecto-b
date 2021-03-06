class ReservationsController < ApplicationController
  include Response
  before_action :set_reservation, only: %i[ update destroy ]

  # GET /reservations
  # GET /reservations.json
  def index
    @reservations = Reservation.all
    render :nothing => true
  end

  # GET /reservations/1
  # GET /reservations/1.json
  def show
    json_response(@reservation)
  end

  # POST /reservation/user
  def user_reservations
    @user = User.find_by(email: params[:user_email])
    now = Time.now.strftime("%Y/%m/%d")
    puts now
    @reservation = Reservation.where("user_id = ? AND date >= ?", @user.id, now)
    json_response(@reservation)
  end

  # POST /reservations
  # POST /reservations.json
  def create
    user = User.get_or_create(params[:user_email], params[:user_name])
    @reservation = Reservation.new(
      date: params[:date],
      row: params[:row],
      schedule_id: params[:schedule_id],
      seats: params[:seats],
      user_id: user.id,
    )
    begin
      Reservation.check_seats(params[:schedule_id], params[:date], params[:row], params[:seats])
      if @reservation.save
        render :show, status: :created, location: @reservation
      else
        render json: @reservation.errors, status: :unprocessable_entity
      end
    rescue => exception
      json_response({}, 403)
    end
  end

  # PATCH/PUT /reservations/1
  # PATCH/PUT /reservations/1.json
  def update
    if @reservation.update(reservation_params)
      render :show, status: :ok, location: @reservation
    else
      render json: @reservation.errors, status: :unprocessable_entity
    end
  end

  # DELETE /reservations/1
  # DELETE /reservations/1.json
  def destroy
    @reservation.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_reservation
      @reservation = Reservation.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def reservation_params
      params.require(:reservation).permit(:date, :row, :user_email, :user_name, :schedule_id, :seats => [])
    end
end

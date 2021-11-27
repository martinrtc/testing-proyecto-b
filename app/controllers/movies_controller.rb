class MoviesController < ApplicationController
  include Response
  before_action :set_movie, only: %i[ show update destroy ]

  # GET /movies
  # GET /movies.json
  def index
    @movies = Movie.all
    json_response(@movies.map{|movie| movie.get_all_info})
  end

  # GET /movies/1
  # GET /movies/1.json
  def show
    @movie.get_all_info
  end

  # POST /movies
  # POST /movies.json
  def create
    @movie = Movie.new(movie_params)

    if @movie.save
      render :show, status: :created, location: @movie
    else
      render json: @movie.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /movies/1
  # PATCH/PUT /movies/1.json
  def update
    if @movie.update(movie_params)
      render :show, status: :ok, location: @movie
    else
      render json: @movie.errors, status: :unprocessable_entity
    end
  end

  # DELETE /movies/1
  # DELETE /movies/1.json
  def destroy
    @movie.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_movie
      @movie = Movie.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def movie_params
      params.require(:movie).permit(:name)
    end
end

Rails.application.routes.draw do
  resources :users
  resources :theaters
  resources :schedules
  resources :reservations
  resources :movies
  root 'pages#index'

  # namespace :api do
  #   namespace :v1 do
  #     resources :
  #   end 
  # end 
  get '*path', to: 'pages#index', via: :all

  # Para crear un endpoint ya sea post (pa crear algo nuevo o cambiar algo) o get(pa darle info al front)
  # Se pone el metodo despues entre '' se pone el nombre para ir a buscarlo al url y luego el to: 'modeloControlador#metodoDelControlador'
  # Aqui van un par de ejemplos: 
  # donde el url seria localhost:3000/create_user y se le envia la info pa crear el usuario llamando al controlador de users al metodo create
  post 'create_user', to: 'users#create'
  post 'create_movie', to: 'movies#create'
  post 'create_schedule', to: 'schedules#create'
  post 'create_reservation', to: 'reservations#create'
  get 'movies', to: 'movie#index'
  get 'reservations', to: 'reservation#index'
  # get 'reservations/show', to: 'reservation#show'
  get 'all_theaters', to: 'theater#index'
  get 'all_schedules', to: 'schedules#seats'
end

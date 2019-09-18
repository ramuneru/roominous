Rails.application.routes.draw do
  
  devise_for :admins
  root 'students#index'
  resources :students, only: [:index, :create, :edit, :update]
  resources :time_cards
end

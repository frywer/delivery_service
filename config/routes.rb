Rails.application.routes.draw do
  root 'my#dashboard'
  mount_devise_token_auth_for 'User', at: 'auth'
  resources :deliveries
  get 'my/deliveries', to: 'my#deliveries', as: :my_deliveries
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end

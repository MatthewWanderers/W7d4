Rails.application.routes.draw do
  # Your routes here!

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: { format: :json } do
    resources :parties
    resources :guests do
      resources :gifts, only: %i(index)
    end
    resources :gifts, except: :index
  end
end

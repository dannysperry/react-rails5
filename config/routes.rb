
Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'application#home'

  get '/menu', to: 'application#home'
  get '/contact', to: 'application#home'
end

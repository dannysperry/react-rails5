
Rails.application.routes.draw do
  root to: 'application#home'
  get '/other', to: 'application#home' # change_me to another route and update the Components
  # add other routes here for more pages, be sure to add them in app/javascript/config/routes.js

  get '/contact', to: 'application#home'
  post '/contact', to: 'contact#create'
end

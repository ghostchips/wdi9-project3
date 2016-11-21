Rails.application.routes.draw do
  get '/', to: 'pages#index'
  get '/tasks', to: 'tasks#all'
  post '/task', to: 'tasks#create'
  get 'tasks/:id', to: 'tasks#show'
end
if defined? Rack::Cors
  Rails.configuration.middleware.insert_before 0, Rack::Cors do
    allow do
      origins %w[
        https://growers-outlet.herokuapp.com
        http://growers-outlet.herokuapp.com
      ]
      resource '/assets/*'
    end
  end
end
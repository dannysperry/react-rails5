if defined? Rack::Cors
  Rails.configuration.middleware.insert_before 0, Rack::Cors do
    allow do
      origins %w[] # enter production urls here
      resource '/packs/*'
    end
  end
end
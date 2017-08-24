require 'sendgrid-ruby'
require 'json'

class ContactController < ApiController
  include SendGrid

  def create
    form_data = params.require(:contact).permit(:email, :name, :description)

    from    = Email.new(email: form_data[:email])
    to      = Email.new(email: ENV.fetch('CONTACT_EMAIL'))
    subject = "#{form_data[:name].capitalize} contacted you"
    content = Content.new(type: 'text/plain', value: form_data[:description])
    mail    = Mail.new(from, subject, to, content)

    sg = SendGrid::API.new(api_key: ENV['SENDGRID_API_KEY'], host: 'https://api.sendgrid.com')
    response = sg.client.mail._('send').post(request_body: mail.to_json)

    render json: response.to_json
  end
end

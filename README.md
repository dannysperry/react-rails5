# README

This is a starter template for building front-end applications in React while utilizing Rails backend api architecture.

ReactRouter4 and Rails 5.1 w/ webpacker

* System dependencies
  npm/yarn, ruby, postgresql
* Configuration
  run `bundle install` and `yarn install`
* Database creation
  run `bin/rails db:create`
* Database initialization
  run `bin/rails db:migrate`
* How to run the test suite
  run `bundle exec rspec`
* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions
  - push changes to master for auto deployment or manually deploy with the heroku remote in git.

  - Set it up and run `git push heroku master`

* Run locally
  - Local development is run with webpack and all es6 files in app/javascript/ are rendered by webpack. The backend is still handled in rails. In one window run `yarn build` and in another run `yarn start`.

  - To mimic a production run of staticically served assets you can run `yarn prod:local`. This will reinstall yarn and all the projects node_modules as well as clean out the public/assets and public/packs folders. From there we manually build webpack and precompile assets for production, and then run the production server which holds static assets served from webpack.

* Folder Structure
  - Front-End
    + assets
      - images
      - fonts
      - stylesheets - Uses an ITCSS folder structure that is loaded by the main webpack stylesheet
    + config
      - routes - setup routes for react-router and the navigation links here
      - settings - place reusable text strings here
    + modules
      - the bulk of your components will go in this structure
      - layout, home are the most important
  - Back-End
    + Rails 5

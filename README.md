## translate-dash

To run the app locally:

Migrate the database and build the server. First, in `db/config/config.json` change `development.username` to your postgres superuser (might be `postgres` or `root` or your machine's name if installed through Homebrew, as was my case). Then, after running postgres, from parent directory:

`$ npm install && npm run db:create && npm run db:migrate && npm run start`

Build the client.

`$ cd client && npm install && npm run start`

For authentication to Google-Cloud, the project needs the following environment variables to be set. You will find them in the secrets JSON file after creating a project in the Google-Cloud online console.

`GOOGLE_CLIENT_EMAIL`

`GOOGLE_CLIENT_KEY`

`GOOGLE_PROJECT_ID`

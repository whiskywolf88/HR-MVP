# TAILORED CUISINE-ART

>Too many pages require the user to parse through long-winded stories and excess fluff to find ingredients lists and recipes!
>
>This app pulls data from the Edamam API based on user-input searches and excludes allergies and/or ingredients specified.

## GET STARTED

>Fork and clone the repo, then run $npm install from the root directory. After the dependencies are finished installing, run
>>$npm run build-dev
>to have Webpack transpile the React files use Babel and watch for changes.

>Serve the files using $npm start (here configured to default to nodemon; if not installed globally either
>>$npm install nodemon
>or delete the script "start" from package.json), and you're (almost) ready to go (see below for API directions)!

## USING THE API

>Edamam API allows developers free limited access, simply visit 'https://developer.edamam.com/edamam-recipe-api' to sign up and get
>your own API ID and API Key.

>In the root directory, create a file named
>>config.js.
>Export an object with the following set-up:

>>{
>>app_id: ${APP_ID},
>>app_key: ${YOUR_APP_KEY}
>>}

>Now you're all set - enjoy, and bon appetit!
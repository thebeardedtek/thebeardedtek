# backend

copy files from local to remote
scp -r /Users/chocmuscguy/desktop/thebeardedtek/thebeardedtek root@67.205.167.84:/var/www/

#find directory
cd; cd desktop/github/thebeardedtek/bearded-app

#####to start the server with babel
npm run dev 
####################################



#Clone the project and install NPM
git clone https://github.com/thebeardedtek/thebeardedtek.git
cd backend
sudo npm init
sudo npm i
sudo npm i express --save

#Create a file named app.js
touch app.js
sudo npm install express-generator -g

express --no-view
#Generates a directory called public that includes directories for images, stylesheets, and scripts.
#Generates a directory called routes that define the app routes (CRUD actions)

#cd into folder (public by default)
cd public
npm i

#Start the server
DEBUG=[default]:* npm start

#Navigate to localhost port 3000
http://localhost:3000/[API]


#ByPass CORS
open -n -a /Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --args --user-data-dir="/tmp/chrome_dev_test" --disable-web-security



https://github.com/auth0/angular2-jwt
https://www.npmjs.com/package/password-hash



ERRORS

Case:
Cannot read property 'match' of undefined

Resolution:
Uninstall package-lock.json and run npm i


Case:
Cannot find module '../lib/init'

Resolution:
Run npm i nodemon -g



Disable Package Lock JSON
npm config set package-lock false

Enable Package Lock JSON
npm config set package-lock true  



cd.. to get to the root folder
cd etc/nginx/sites-enabled/ you will see the “default”file
nano default
Change the file then run sudo nginx -t
sudo systemctl restart nginx

75.24.196.224


 use admin;
> db.createUser({
      user: "admin",
      pwd: "elohiym3",
      roles: [
                { role: "userAdminAnyDatabase", db: "admin" },
                { role: "readWriteAnyDatabase", db: "admin" },
                { role: "dbAdminAnyDatabase",   db: "admin" }
             ]
  });

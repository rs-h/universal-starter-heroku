### Install
```
git clone https://github.com/stephengardner/universal-starter-heroku
cd universal-starter-heroku
npm i
```
### Deploying to Heroku:
```
git init
heroku login
heroku create
git add .
git commit -m "initial commit"
git push heroku master
heroku open
```
This application uses server side rendering and involves a couple of filters and fetches the appropriate SpaceX programs as results. 

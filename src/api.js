const express = require('express')
const serverless = require("serverless-http")
const app = express()
const router = express.Router();


  app.set('view engine', 'ejs');


  router.get('/', (req, res) => res.render('index'))
  .get('/index', (req, res) => res.render('index'))
  .get('/contact', (req, res) => res.render('contact'))
  .post('/contact', (req, res) => res.send('Successfully Submited'))
  .get('/services', (req, res) => res.render('services'))
  .get('/work', (req, res) => res.render('work'))




  app.use(`/.netlify/functions/api`, router);
module.exports = app;
module.exports.handler = serverless(app);
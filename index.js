const express = require('express')
const app = express();
const path = require('path')
const PORT = process.env.PORT || 3600


  app.use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('index'))
  .get('/index', (req, res) => res.render('index'))
  .get('/contact', (req, res) => res.render('contact'))
  .post('/contact', (req, res) => res.send('Successfully Submited'))
  .get('/services', (req, res) => res.render('services'))
  .get('/work', (req, res) => res.render('work'))


  app.listen(PORT, () => console.log(`Listening on ${ PORT }`))




const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const methodOverride = require('method-override');
const app = express();
const PORT = process.env.PORT || 4001;

// controllers
// const userCtrl = require('./controllers/userController');
const meetupCtrl = require('./controllers/dashboard');

//view
app.set('view engine', 'ejs');

/* middleware */
//gives us access to the public folder
app.use(express.static(`${__dirname}/public`));
//lets us use PUT and DELETE in forms
app.use(methodOverride('_method'));
//lets us retrieve data from the form
app.use(bodyParser.urlencoded({extended:false}));

//routes
app.get('/', (req, res) => { res.render("landing-page"); });
app.use('/dashboard', meetupCtrl);
// app.use('/users', userCtrl);  //users route
// app.use('/meetup', meetupCtrl);


app.get('*', (req, res) => {
  res.send(`<h1>404 ERROR <br> PAGE NOT FOUND</h1>`)
});

//server listener
app.listen(PORT, () => console.log(`server is running on port ${PORT}`)); 
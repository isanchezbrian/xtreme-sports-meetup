const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const methodOverride = require('method-override');
const app = express();
const PORT = process.env.PORT || 4001;

// controllers
const userCtrl = require('./controllers/userController');
const meetupCtrl = require('./controllers/meetupController');

//view
app.set('view engine', 'ejs');

/* middleware */
//gives us access to the public folder
app.use(express.static(`${__dirname}/public`));
//lets us use PUT and DELETE in forms
app.use(methodOverride('_method'));
//lets us retrieve data from the form
app.use(bodyParser.urlencoded({extended:false}));
//lets save current user information. used with auth
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,  //resave every request
  saveUninitialized: false, // track unauthenticated users
  cookie: {macAge: 1000*60*60*24*7*2}  //expires in 2 weeks
}));
//Used with auth. redirects user to login if they are not signed in
app.use(function(req, res, next) {
  if (req.path !== "/login" && req.path !== "/register" && req.session.currentUser == null){
      res.redirect('/login');
  }   else{
      next();
  }
});

//routes
app.get('/', (req, res) => { res.redirect("/login"); });
app.use('/users', userCtrl);  //users route
app.use('/meetup', meetupCtrl);


app.get('*', (req, res) => {
  res.send(`<h1>404 ERROR <br> PAGE NOT FOUND</h1>`)
});

//server listener
app.listen(PORT, () => console.log(`server is running on port ${PORT}`)); 
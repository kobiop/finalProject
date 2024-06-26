// yakir shriki 318005089
// kobi hazut 207496175
// asaf tzabari 318946977
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const bodyParser = require('body-parser');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const addCaloriesRouter = require('./routes/addcalories');
const reportRouter=require('./routes/report');
const aboutRouter = require('./routes/about');

const mongoose=require('mongoose');
const Calories = require('./models/calories');
const User = require('./models/users');

const app = express();

app.use(bodyParser.json());// Using bodyParser middleware to parse JSON request bodies

const dbURL = 'mongodb+srv://kobi:admin@cluster0.nwoaaje.mongodb.net/caloriesProject?retryWrites=true&w=majority&appName=Cluster0';
mongoose.set('strictQuery', true); // Setting Mongoose option for strict mode on queries

mongoose.connect(dbURL)// Connecting to MongoDB Atlas cluster
    .then(() => {
      console.log('MongoDB Connected!');
    })
    .catch((err) => {
      console.log('Connection error:', err);
    });

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/addcalories',addCaloriesRouter);
app.use('/report',reportRouter);
app.use('/about',aboutRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

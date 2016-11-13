
var logger = require('morgan');
var express = require('express');
var compass = require('compass');
var movieCrud = require('./routes/movie-crud');
var movieinfoCrud = require('./routes/movieinfo-crud');
var cityCrud = require('./routes/city-crud');
var theatreCrud = require('./routes/theatre-crud');
var showtimeCrud = require('./routes/showtime-crud');
var offerCrud = require('./routes/offer-crud');
var bookingCrud = require('./routes/booking-crud');
var trailerCrud = require('./routes/trailer-crud');
// var paymentCrud = require('./routes/payment-crud');
var bodyParser=require('body-parser');

var app = express();
app.use(compass({ cwd: __dirname + '/public' }));
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

compass.compile(function(err, stdout, stderr) {
    console.log('done');
});

// compiles in the given directory
compass.compile({ cwd: __dirname + '/public' }, function(err, stdout, stderr) {
    console.log('done');
});

//app.use('collection name',path of the crud.js files  )
app.use('/movie', movieCrud);
app.use('/movieinfo',movieinfoCrud);
app.use('/city', cityCrud);
app.use('/theatre', theatreCrud);
app.use('/showtime', showtimeCrud);
app.use('/offer',offerCrud);
app.use('/booking',bookingCrud);
app.use('/trailer',trailerCrud);

// Only load this middleware in dev mode (important).
if (app.get('env') === 'development') {
  var webpackMiddleware = require("webpack-dev-middleware");
  var webpack = require('webpack');

  var config = require('./webpack.config');

  app.use(webpackMiddleware(webpack(config), {
    publicPath: "/build",

    headers: { "X-Custom-Webpack-Header": "yes" },

    stats: {
      colors: true
    }
  }));

}



var server = app.listen(8000, function () {
  console.log('listening on port 8000');
});

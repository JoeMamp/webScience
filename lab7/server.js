const express = require('express');
const axios = require('axios');
const fs = require('fs');
const app = express();
const port = 3000;

// have express serve all the static webpages and js files
app.use(express.static('public'));

var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb+srv://joemamp:OckwzJS7YhItxp3N@websci-ofe87.mongodb.net/test", {useNewUrlParser: true, useUnifiedTopology: true});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {
    console.log('Connected To Mongo Database');
});
var nameSchema = new mongoose.Schema({
    section: String,
    last_updated: String,
    num_results: Number,
    results: [],
    copyright: String
});

const json2csv = require('json2csv').parse;
const fields = ['results', '_id', 'section', 'last_updated', 'num_results', 'copyright', '__v'];


// server route handler push page to index
app.get('/', function(req, res){
  res.sendFile(__dirname + '/public/index.html');
});

app.get('/index.html', function(req, res){
  res.sendFile(__dirname + '/public/index.html');
});

app.get('/stats.html', function(req, res){
  res.sendFile(__dirname + '/public/stats.html');
});

app.get( '/makequery/:keyW', async ( req, res ) => {   // :keyW is param passed in by the search bar
  console.log('Received query: ' + req.params.keyW);
  // init variables for api call
  let accessKEY = "vlxPUTO0iGRYOWkz3cfuR8rjybey1Wm6"
  let apiNews = ''
  let filename = __dirname + "/lab7.json";
  let s_key = req.params.keyW;
  if (s_key =='') {
    apiNews = 'https://api.nytimes.com/svc/topstories/v2/home.json?api-key='+ accessKEY;
  } else {
    apiNews = 'https://api.nytimes.com/svc/topstories/v2/' + s_key + '.json?api-key='+ accessKEY;
  }

  axios.get(apiNews).then(response => {
    console.log('API has been called');
    var news = response.data;
    console.log('Section is ' + news.section);
    console.log('Copyright: ' + news.copyright);
    console.log(news.num_results + ' results found');
    var Doc = mongoose.model(s_key, nameSchema);
    var myData = new Doc( {
      section: news.section,
      last_updated: news.last_updated,
      num_results: news.num_results,
      results: news.results,
      copyright: news.copyright
    });
    myData.save()
    .then(item => {
      console.log('Data has been saved to the database');
    })
    .catch(err => {
      console.log('Failed to save data to the database');
      // nothing
    });
  });
});

app.get( '/getMongoData/:keyW', async ( req, res ) => {   // :keyW is an attribute of the button
  let s_key = req.params.keyW;
  mongoose.model(s_key, nameSchema).find( function(err, data) {
    console.log('Success!');
    res.send(data[0]);
  });
});

app.get( '/getJSON', async ( req, res ) => {
  console.log('Attempting to export database...');
  mongoose.connection.db.listCollections().toArray(function(err, names) {
    var filename = __dirname + "/mampij-lab7.json";
    if (err) {
      console.log(err);
    } else {
      names.forEach( function(item) {
        mongoose.model(item.name, nameSchema).find( function(err, data) {
          fs.writeFile(filename, JSON.stringify(data[0]), (err) => {
            if (err) return console.log(err);
          });
        });
      });
      console.log("Database has been exported to JSON!");
      res.send("JSON is done!");
    }
  });
});

app.get( '/getCSV', async ( req, res ) => {
  console.log('Attempting to export database...');
  mongoose.connection.db.listCollections().toArray(function(err, names) {
    var filename = __dirname + "/mampij-lab7.csv";
    if (err) {
      console.log(err);
    } else {
      let rep_str;
      names.forEach( function(item) {
        mongoose.model(item.name, nameSchema).find( function(err, data) {
          rep_str = json2csv(data, { fields });
          // write to file
          fs.writeFile(filename, rep_str, (err) => {
             if (err) return console.log(err);
          });
        });
      });
      console.log("Database has been exported to CSV!");
      res.send("CSV is done!");
    }
  });
});
// let csv;
// csv = json2csv( data[0], { fields } );

app.get( '/clearDatabase', async ( req, res ) => {
  console.log('Attempting to clear database...');
  mongoose.connection.db.listCollections().toArray(function(err, names) {
    if (err) {
      console.log(err);
    } else {
      names.forEach( function(item) {
        mongoose.connection.db.dropCollection(item.name);
      })
      console.log("Database has been reset!");
    }
  });
  res.send("Cleared!");
});

// start server
app.listen(port, () => console.log(`Listening for queries from Joe's New York Times App on port ${port}`));
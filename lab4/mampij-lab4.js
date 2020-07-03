const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const fs = require('fs');
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function(req, res){
  res.sendFile(__dirname + '/mampij-lab4.html');
});

app.get('/', function(req, res) {
  var artist = req.params.artist;
  var song = req.params.song;
  var call = "";
  if (artist == '' || song == '') {
    call = "https://api.lyrics.ovh/v1/Taylor Swift/Look What You Made Me Do";
  } else {
    call = "https://api.lyrics.ovh/v1/" + artist + "/" + song;
  }
  axios.get(call).then(response => {
      // handle success
      console.log(response.data);
      var callData = JSON.stringify(response.data);
      var filename = __dirname + "/callData.json";
      fs.writeFile(filename, callData, (err) => {
        if (err) return console.log(err);
        console.log('Lyric saved!');
        res.send(callData);
      });
    });
});


app.listen(port, () => console.log(`App listening on port ${port}!`));
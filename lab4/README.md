Joseph Mampillil [mampij]
Web Science Systems Development
Professor Callahan
February 21, 2020
Lab 4 - lyrics.ovh API

I ended up running into "A cookie associated with a cross-site resource..." and "Failed to load resource: the server responded with a status of 404 (Not Found)" errors. I can use node and express to make the API call and store the data in a .json file, but using Angular to then get that data from the file was an issue.

My API is from https://lyricsovh.docs.apiary.io/#reference/0/lyrics-of-a-song. It follows the format of https://api.lyrics.ovh/v1/artist/songname/ and it returns a JSON object that only contains one key, "lyrics", and one variable, the lyrics of the song (in plain text).

To create a node app for this lab, I went into my command line, navigated to the
folder that all of my files are in (lab4), and did the following:
  I ran npm init to create the package file
  I ran npm install express
I used the resources at https://expressjs.com/en/starter/hello-world.html to get started on my application.
I use axios to make the HTTP get request for the API calls.
I also use body-parser for getting the HTML form data to search for lyrics and assemble the call addresses.
  npm instal body-parser

To save the file I use fs.writeFile() and JSON.strigify():
  https://stackabuse.com/writing-to-files-in-node-js/
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify

After this, I redirect the user to the page on which I display the song lyrics. I learned about this from http://expressjs.com/en/4x/api.html; I was redirected there from https://stackoverflow.com/questions/24151929/how-to-make-a-redirect-301-in-node-js-express (and I was redirected there from https://stackoverflow.com/questions/36434978/how-to-redirect-to-another-page-in-node-js)
...
So we're gonna be making an HTTP request from Node, and we're gonna save the JSON that we receive into a file in our directory. Then, we're gonna use Angular
to get that file from our directory and use its data to run our application.

The OG: https://fonts.google.com/?selection.family=Lacquer
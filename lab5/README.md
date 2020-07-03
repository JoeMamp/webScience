Joseph Mampillil [mampij]
Web Science Systems Development
Professor Callahan
April 3, 2020
Lab 5 - The New York Times API

I decided to use the news API from The New York Times. They have a cool developer view and I figured they would have a lot of data to sort through. I believe my database is hosted at websci-shard-00-01-ofe87.mongodb.net:27017, all IP addresses are whitelisted.

Some things about this lab were very difficult. Building the database took me forever. I was able to connect to mongo very easily, but sending information into the database took a while. After that, getting the information in the database in a readable format was challenging. I had Mongo set up before we worked on it in Web Science, but I'd never really had to write my own program to enter data into it, so this was quite the experience for me.

Displaying the data was surprisingly easy. The functions I needed to query the correct JSON objects from the database didn't take extremely long, and I happened to stumble upon the formatting I wanted much faster than expected. One big issue I found while displaying articles was that topics with 2-word names (such as Reader Corner, New York, U.S. News, World News, etc.) could not be found using the query from mongoose.model().find(). This was disappointing because some of those topics sounded very interesting (what good is an API from The New York Times if it doesn't display news about New York?). I finally figured out that the issue was that mongoose.model().find() doesn't query using the string passed into model(). I'm still not sure how it queries, but I have a feeling it's linked to the specific id value of each of the entries in a collection. Ultimately, we can display news from all of the categories that are listed on the app.

Exporting the database to JSON took me a little while -- there was a lot of sorting through module documentation and stackoverflow. Eventually I figured it out and it made sense to me. JSON was tedious but not difficult. Exporting to CSV was an issue so I moved on to clearing the database.

I actually ran into how to drop collections while I was looking for ways to export my database to JSON, so dropping the database took me no time at all to figure out.

It took me a long time to figure out how to export the CSV. I had initially tried to go directly from my mongo database queries to CSV, then I thought of just converting to a JSON file and then converting that file to CSV, and finally I found the json2csv module and found a very quick solution.

I'm actually really proud of this lab, because I was able to figure everything out by myself and everything does what I want it to. I'm really excited to build upon the app in future labs.
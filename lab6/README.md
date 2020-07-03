Joseph Mampillil [mampij]
Web Science Systems Development
Professor Callahan
April 10, 2020
Lab 6 - The New York Times API

--------------------------------------------------------------------------------

I. Upgrades that I think I can get done (start of lab):
  To upgrade my application, I'd like to do a number of things:
    1. Normalizing my theming across the page (or pages)
    2. Explaining how to populate the database (in plain English, not software jargon)
    3. Making sure the site is responsive across devices
    4. I'd like to actually display the news -- not just the headlines!

--------------------------------------------------------------------------------

II. End of Lab Reflections

  I was able to accomplish most of my goals that I had originally set out, although the app is not exactly what I'd had in mind when I'd started. Thanks to a bootstrap theme (credits to Thomas Park) I was able to normalize my theming across the page.

  I gave a short explanation as to how to populate the database and display the articles in my Jumbotron. I would have liked to start the user off on a clean instructions page, but due to the many refreshes needed to populate my database this was not easy to do. Ultimately, the datbase structures I had, which made use of many collections (basically one for each query), was not very accomodating to a dynamic webpage.

  Because of the way I had to set up my page (i.e. since I used a Jumbotron) my page looks quite odd on a small screen (though not unusable). However, it will work fine on large and medium screen sizes.

  I decided against displaying the news on my page so as not to crowd the user's view.

--------------------------------------------------------------------------------

III. Goals for the future
  I'd like to attempt to add onto this project in the future, perhaps in the following ways. These are the things that I would've liked to see in my ideal app, but couldn't quite manage to do for this lab.
    1. I'd like to make it so that when the user clicks on an article, the page pops up the article on the same tab (in a sort of mini view that takes up most of the screen) with an 'x' in one corner, so that they can actually read the news without having to leave the page for the actualy NYT website.
    2. I'd like to change the theming for my site, as the dark theme is great for developers and students but the majority of people might not like to see it all the time.
    3. I think that reorganizing my database structures might be a helpful thing to do. The way the API works isn't great for this idea, but it would make data retrieval much easier when displaying the news articles.

  Aside:
    4. I think that it would be cool to implement the 'Semantics' search option that the NYT offers. It's a different API, but from what I understand, it doesn't limit the user from searching for a specific topic of articles (i.e. I can search any term and it will return all articles featuring that term as a keyword). This is probably too much to do for this lab (as I'd like to stick with the API that I already chose for simplicity's sake), but I would still like to pursure it, and it might be something I look to extend into perhaps as a personal project outside the scope of this class. I do think that this API will have enough data to do Data Visualizations for next week's lab.

--------------------------------------------------------------------------------

IV. Resources
https://bootswatch.com/darkly/
https://li60.zendesk.com/hc/en-us/articles/115001604231-How-do-I-get-my-bootstrap-buttons-the-same-size-or-width-
https://getbootstrap.com/docs/4.4/getting-started/introduction/
https://stackoverflow.com/questions/27689927/how-to-give-spacing-between-buttons-using-bootstrap
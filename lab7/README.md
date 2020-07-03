Joseph Mampillil [mampij]
Web Science Systems Development
Professor Callahan
April 17, 2020
Lab 7 - Data Visualization

Ideas:
  Number of results per collection (as a bar graph)
  Number of authors per article (as a donut chart)
  Most popular queries (as a bar chart) <-- couldn't get this working
  Device being used to access the site (as a donut chart) <-- couldn't get this working

Changes from lab 6:

  Other than adding data visualizations, I made some minor changes to the site
  during this lab. I added more functionality to the buttons for each category. Now, the page automatically reloads on each click, so the user doesn't have to manually reload the page after each selection. I also added a new NYT logo in accordance with the branding requirements that were specified on the NYT Developers site.

Lab 7 Tasks:

  I was only able to get two visualizations working. My first visualization is a bar chart that shows how many articles are displayed from each of the queried categories. My second visualization is a donut chart of authors per article was a fun idea and required me to use .then() to ensure that the for loop was calculating the correct values before displaying them.

  My final visualization was going to be which devices were being used or what were the most popular queries, but I couldn't figure out how to get these either. They seemed to require maintaining data after refreshing the page, which I couldn't figure out (aside from saving them in an entirely new database, which almost caused me to mess up my current working server.js file).

This was a cool lab, but I just couldn't get it to work.

Resources
https://stackoverflow.com/questions/5480945/refreshing-page-on-click-of-a-button
https://www.w3schools.com/jsref/event_onload.asp
https://www.w3schools.com/jsref/jsref_split.asp
https://www.techonthenet.com/js/math_ceil.php
https://getbootstrap.com/docs/4.0/components/collapse/
https://stackoverflow.com/questions/16813945/how-to-add-many-functions-in-one-ng-click
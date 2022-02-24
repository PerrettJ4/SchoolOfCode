# Individual Monday Recap Tasks

## Topics

- SQL
- Node
- NPM
- Express

## Tasks

### Part 1 - 🎵🎵 Get your server running... Head out on the highway... 🎵🎵

👉 1. Go to `app.js`, and follow the steps in the comments at the bottom to get your server set up.

### Part 2 - Postgres

👉 2a. Install the [node-postgres package](https://node-postgres.com/), and set up your pool in `db/index.js` using your local Postgres credentials. Export your `query`. Remember to check the [example project structure](https://node-postgres.com/guides/project-structure) page of the docs if you get stuck!

👉 2b. Create and populate your table:

- **Create your table:** In `/scripts/createTable.js`, write a SQL statement to create a table for the cats data. Import and use your `query` in a function to send your SQL statement to your database. Run this file and check for your table on the database on Heroku.
- **Populate your table:** In `/scripts/populateTable.js`, you'll notice that you have an array of cats as sample data. Write a SQL query to populate the table you made in your `createTable` script with this cats data. Use your `query` to send this SQL query to your database too. Run this file and check that your table is populated on Heroku.

### Part 3 - Put it all together

👉 3. Hook your server up to the cats data in your local Postgres database rather than the array inside of `app.js`.

### Bonus

Once your API is working and hooked up to your database and you can see all your cat details on your front end, you can refine and refactor:

🌟 Create a `routes` folder with a `cats.js` file in it. Refactor so that all of the routing for "/cats" is done in a cats router that's then used in `app.js`. Run your server and check that it still functions before refactoring further.

🌟 Create a `models` folder with a `cats.js` file in it. Refactor so that the logic that queries the database lives in functions in the models and is imported into the cats router. Run your server and check that it still functions before refactoring further.

🌟 In your `db/scripts` folder, also create a dropTable file with a function that drops your cats table. Create scripts in your `package.json` to run each of these files with NPM. Then, create a script that runs all three of these, one after another, to reset your table (so it drops the table, creates the table, then populates the table).

🌟 Customize your front end. Ideas:

- Right now, it just contains a button to show all the cats in the database. Find a way to also use your routes that get a cat by id and by name.
- Practice your CSS and style it out.
- Get creative! Add any other functionality you can think of.

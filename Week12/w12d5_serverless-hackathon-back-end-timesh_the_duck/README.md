# Serverless Hackathon

Now that you've had a taste of deploying a serverless API to the cloud, it's time for you to get creative.

For today's hackathon, your challenge is to make and deploy a fullstack application, where the backend and frontend are as described below.

## Backend

Your challenge is to make and deploy a RESTful API in AWS via Serverless and provide data of your choosing in your lambda functions.

Things to keep in mind:

- Don't forget to make a fully fleshed-out plan before you start coding! As with everything else, it'll be a lot easier to code and deploy your API if you've fully sketched out what you want it to do.
- You have free reign! Get as creative as you want; while you use Serverless/AWS to talk to the database and deploy, you can still use your existing JavaScript/Node skills alongside the new tools you learned this week.
- You can interact with existing APIs as well, for example, so you could get data from somewhere else, do something with it in your code, and then serve it via your API.
- For more information on using Node to interact with DynamoDB, see the docs here: https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/GettingStarted.NodeJs.html

## Frontend

Build a frontend using React and deploy it using something like Netlify. The frontend should interact with (at least) the backend you've deployed via Serverless, letting users create, read, update and delete things.

Things to keep in mind:

- Use (at least) one of the styling/UI tools we've encountered recently (i.e. UI component libraries, CSS modules, React animation libraries).
- As usual, remember to plan your frontend and component tree. Think about the React concepts that we've covered (e.g. useState, useReducer, useEffect, useContext) and practice using concepts which you think are right for your application and use case(s).

## Overall

- Think about how you can parallelise development itself and better coordinate as a team to more quickly/efficiently deliver the project. For example, if you plan in advance the shape of the API requests and responses (even before any code has been written), this will allow both the backend and frontend to progress concurrently (because the interfaces/shapes of requests and responses has been agreed even if the implementation is not complete/quite working).
- Deploy early (both your frontend and backend)! It's a lot easier to debug things when there's less code.
- Regularly swap/alternate who's working on the frontend and backend. Each person should get to have time working in both front and back end pairs today.

Happy hacking!

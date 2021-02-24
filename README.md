# get-tweets
Get tweets from the Twitter API from a specific user

# NOTE:
Starting this react app I tried to fetch the endpoints, from the Twitter API, from client side.
After some research I came to the conclusion that this API can only be called from server side, so I developed a small server with only one route using node and express.
The client side with React uses that route to communicate with the server, to do this I added "proxy": "http://localhost:5000" to the package.json file in the client/gettweets folder.

# SERVER: 
Is an Express app, that uses the CORS package and listens the 5000 port.
This server uses "/tweets" as route.
The tweetRoutes file uses Router, from express, to define the get route, that is "/:id" This route calls the getTweets function from the tweetController route.
The tweetController file uses the twit package, to connect to the API with the provided keys, and defines the getTweets function. This function uses twit to connect to the Twitter API and query the endpoint to get the tweets from the given id.
The server uses as dev dependencies: Nodemon and Concurrently to keep the server running and to run multiple npm scripts.

# REACT APP:
In this app I use Material-ui to get all the icons used.
It has four components: Header, Feed, Form and Tweets.
The Header.jsx is used as the header for the app, it only has the twitter icon and the name I gave to this app.
The Feed component is the main component in this app:
- It uses useState to declare user and setUser, setUser is send via props to the Form component to store the username entered in the form.
The Form component has as input and a button, it is used to write an username in the input field, then when the button is clicked it calls setUser to store the username and send it back to the Feed component, it also stores this username in local storage.

The Feed component uses two useEffects to fetch the data from the API using the fetchData function.
One useEffect has the state user as its parameter, so every time that state changes the useEffect runs and the function fetchData is called.
The second useEffect has a setInterval function that runs every minute and calls the fetchData function. Everytime setInterval is called it uses the username stored in local storage to fetch this users tweets.

The fetchData function uses fetch to get the data from the url: http://localhost:5000/tweets/${name}
This data is mapped into an array of objects, the keys stored are: id, text, name, image (profile image), retweets, likes.
The resulted array is stored using setPost as state.

After this data is stored it is passed via props to the Tweets component.
To do this, this data is mapped to render multiple Tweet components.

# STYLE:
The style in this app was done only with css and flexbox.

# TESTS:
- in client/gettweets directory run: npm test

# HOW TO RUN THE APP:
### From the root directory
#### Only server side: npm start
#### Only client side: npm run client
#### Client and Server: npm run dev

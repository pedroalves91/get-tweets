import Twit from "twit";
import dotenv from "dotenv";

dotenv.config({ path: "./.env" });
let tweets = [];

let T = new Twit({
    consumer_key: process.env.API_KEY,
    consumer_secret: process.env.API_SECRET,
    access_token: process.env.ACCESS_TOKEN,
    access_token_secret: process.env.ACCESS_SECRET,
    timeout_ms: 60*1000,
    strictSSL: true
});

export const getTweets = (req, res) => {
    const id = req.params.id;
    console.log(id);

    T.get(`https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=${id}&count=5`
        , (err, data, resp) => {
            for(let eachData of data) {
                //console.log(eachData);
                tweets.push(eachData);
            };
    })
    setTimeout(() => {
        console.log(tweets.length);
        res.status(200).send(tweets);
        tweets = [];
    }, 1500);
};
import React, { useState, useEffect } from "react";
import Form from "./Form";
import Tweets from "./Tweets";

const Feed = ({ nomee }) => {
  const [user, setUser] = useState("");
  const [post, setPost] = useState([]);

  const fetchData = () => {
    let nome = localStorage.getItem("username");
    console.log("fetch " + nome);
    fetch(`http://localhost:5000/tweets/${nome}`)
      .then((res) => {
        if (!res.ok) {
          throw Error("Could not fetch data");
        }
        return res.json();
      })
      .then((data) => {
        const tweetsFromUser = data.map((tweetFromUser) => ({
          id: tweetFromUser.id,
          text: tweetFromUser.text,
          name: tweetFromUser.user.name,
          image: tweetFromUser.user.profile_image_url,
          ret: tweetFromUser.retweet_count,
          fav: tweetFromUser.favorite_count
        }));
        setPost(tweetsFromUser);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    fetchData();
  }, [user]);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log("intervalo");
      fetchData();
    }, 20000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="feed">
      <div className="feed-search">
        <h2>Search users</h2>
      </div>
      <Form setUser={setUser} />
      {post.map((pst) => (
        <Tweets
          data-testid="get-feed"
          key={pst.id}
          name={pst.name}
          user={user}
          text={pst.text}
          image={pst.image}
          ret={pst.ret}
          fav={pst.fav}
        />
      ))}
    </div>
  );
};

export default Feed;

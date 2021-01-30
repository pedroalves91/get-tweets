import { Avatar } from "@material-ui/core";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import React from "react";

const Tweets = ({ name, user, text, image, ret, fav }) => {
  return (
    <div className="tweet">
      <div className="tweet-avatar">
        <Avatar src={image} />
      </div>
      <div className="tweet-body">
        <div className="tweet-header">
          <div className="tweet-headerText">
            <h3>
              {name} <span className="tweet-headerUser">@{user}</span>
            </h3>
          </div>
          <div className="tweet-headerPost">
            <p>{text}</p>
          </div>
        </div>
        <div className="tweet-footer">
          <div className="comments">
            <ChatBubbleOutlineIcon fontSize="small" />
            <p></p>
          </div>
          <div className="retweet">
            <RepeatIcon fontSize="small" />
            <p>{ret}</p>
          </div>
          <div className="likes">
            <FavoriteBorderIcon fontSize="small" />
            <p>{fav}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tweets;

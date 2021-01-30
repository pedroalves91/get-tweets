import React, { useState } from "react";
import { Button } from "@material-ui/core";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

const Form = ({ setUser }) => {
  const [username, setUsername] = useState("");

  const handleClick = () => {
    localStorage.setItem("username", username);
    setUser(username);
    setUsername("");
  };

  return (
    <div className="form">
      <form>
        <div className="form-input">
          <AccountCircleIcon fontSize="large" />
          <input
            type="text"
            placeholder="Enter username ..."
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <Button className="form-button" onClick={handleClick}>
          Search
        </Button>
      </form>
    </div>
  );
};

export default Form;

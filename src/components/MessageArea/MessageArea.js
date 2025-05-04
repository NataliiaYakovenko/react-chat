import React, { useState } from "react";
import styles from "./MessageArea.module.css";

const MessageArea = (props) => {
  const [inputMessage, setInputMessage] = useState("");

  const changHandler = ({ target: { value } }) => {
    setInputMessage(value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.sendMessage(inputMessage);
    setInputMessage("");
  };

  return (
    <div className={styles.container}>
      <form onSubmit={submitHandler}>
        <textarea value={inputMessage} onChange={changHandler} />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default MessageArea;

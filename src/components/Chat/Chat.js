import React from "react";
import styles from "./Chat.module.css";

const Chat = (props) => {
  const {
    deshboardState: { message, error, isLoading },
  } = props;

  console.log(props)

  return <div className={styles.container}>Chat</div>;
};

export default Chat;

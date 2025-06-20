import React from "react";
import styles from "./Chat.module.css";
import ChatItem from "./ChatItem";

const Chat = (props) => {
  const {
    deshboardState: { messages, error, isLoading },
  } = props;

  const messageCardsArray = messages.map((currentMessage) => {
    const {
      body,
      id,
      user,
      user: { username },
    } = currentMessage;

    return (
      <ChatItem
        key={id}
        messageId={id}
        user={user}
        username={username}
        body={body}
      />
    );
  });

  console.log(props);

  console.log(messageCardsArray);

  return (
    <div className={styles.container}>
      {isLoading && <h1>LOADING...</h1>}
      {error && <h1>ERROR...</h1>}
      {messageCardsArray}
    </div>
  );
};

export default Chat;

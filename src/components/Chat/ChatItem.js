import React, { useContext } from "react";
import MessageContext from "../../contexts/MessageContext";
import styles from "./Chat.module.css";

const ChatItem = (props) => {
  const { deleteMessage } = useContext(MessageContext);

  const { user, username, body, messageId } = props;
  return (
    <article
      className={styles.msg}
      onDoubleClick={() => deleteMessage(messageId)}
    >
      <img
        className={styles.userAvatar}
        src={
          user.imgSrc ? user.imgSrc : "https://robohash.org/undefind/?set=set4"
        }
        alt={username}
      />

      <div className={styles.wrapper}>
        <p className={styles.bold}>{username}</p>
        <p>{body}</p>
      </div>
    </article>
  );
};

export default ChatItem;

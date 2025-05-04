import React, { useState, useReducer, useEffect } from "react";
import DialigList from "../DialogList/DialigList";
import Chat from "../Chat/Chat";
import MessageArea from "../MessageArea/MessageArea";
import styles from "./Dashboard.module.css";
import UserContext from "../../contexts/UserContext";
import { getMessages } from "../../api/api";
import CONSTANTS from "../../constants/constants";
import messageReducer from "../../reducers/MessageReducer";

const { ACTIONS } = CONSTANTS;

const initialState = {
  messages: [],
  error: null,
  isLoading: true,
};

function Dashboard() {
  const [user, setUser] = useState({
    id: 1,
    username: "Main admin 24",
    imageSrc: "https://robohash.org/solder",
  });

  const [state, dispatch] = useReducer(messageReducer, initialState);

  useEffect(() => {
    getMessages()
      .then((messages) => {
        dispatch({
          type: ACTIONS.MESSAGES_LOAD_SACCESS,
          payload: messages,
        });
      })
      .catch((error) => {
        dispatch({
          type: ACTIONS.MESSAGES_LOAD_ERROR,
          payload: error,
        });
      });
  }, []);

  return (
    <UserContext.Provider value={user}>
      <main className={styles.container}>
        <DialigList />

        <section className={styles.wrapper}>
          <Chat deshboardState={state} />
          <MessageArea />
        </section>
      </main>
    </UserContext.Provider>
  );
}

export default Dashboard;

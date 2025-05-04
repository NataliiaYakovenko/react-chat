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
    imgSrc: "https://robohash.org/main-admin-24?set=set4",
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

  const createMessage=(text)=>{
    const neWMessage={
      body: text,
      id: state.messages.length+1,
      user
    }

    dispatch({
      type:ACTIONS.ADD_NEW_MESSAGE,
      payload: neWMessage
    })

  }

  return (
    <UserContext.Provider value={user}>
      <main className={styles.container}>
        <DialigList />

        <section className={styles.wrapper}>
          <Chat deshboardState={state} />
          <MessageArea sendMessage={createMessage}/>
        </section>
      </main>
    </UserContext.Provider>
  );
}

export default Dashboard;

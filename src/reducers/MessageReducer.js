import CONSTANTS from "../constants/constants";

export const { ACTIONS } = CONSTANTS;

function messageReducer(state, action) {
  switch (action.type) {
    case ACTIONS.MESSAGES_LOAD_SACCESS: {
      const {
        payload: { comments },
      } = action;
      return {
        ...state,
        messages: comments,
        isLoading: false,
        error: null,
      };
    }

    case ACTIONS.MESSAGES_LOAD_ERROR: {
      const {
        payload: { error },
      } = action;
      return {
        ...state,
        error: error,
        isLoading: false,
      };
    }

    case ACTIONS.ADD_NEW_MESSAGE: {
      const { payload: newMessage } = action;
      const newMessagesArray = [...state.messages, newMessage];
      return {
        ...state,
        messages: newMessagesArray,
      };
    }

    case ACTIONS.DELETE_MESSAGE: {
      const { payload: deleteMessageId } = action;
      const filteredMessage = state.messages.filter(
        (currenrMessage) => currenrMessage.id !== deleteMessageId
      );
      return {
        ...state,
        messages: filteredMessage,
      };
    }

    default:
      return state;
  }
}

export default messageReducer;

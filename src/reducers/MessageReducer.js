
import CONSTANTS from "../constants/constants";

export const { ACTIONS } = CONSTANTS;

function messageReducer(state, action) {
  switch (action.type) {
    case ACTIONS.MESSAGES_LOAD_SACCESS: {
      const {
        payload: {comments },
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
    default:
      return state;
  }
}

export default messageReducer
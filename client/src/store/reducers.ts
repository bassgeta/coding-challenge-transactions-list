import { Action, ActionType, RootState } from './interfaces';

// Initial state
const initialState: RootState = {
  sendTransaction: {
    transactionId: null,
    error: null,
    isLoading: false,
  },
};

const reducer = (state = initialState, action: Action): RootState => {
  switch (action.type) {
    // Define your actions
    case ActionType.SendTransactionLoading:
      return {
        ...state,
        sendTransaction: {
          ...state.sendTransaction,
          isLoading: action.payload,
        },
      };
    case ActionType.SendTransactionSuccess:
      return {
        ...state,
        sendTransaction: {
          transactionId: action.payload.transactionId,
          isLoading: false,
          error: null,
        },
      };
    case ActionType.SendTransactionError:
      return {
        ...state,
        sendTransaction: {
          transactionId: null,
          isLoading: false,
          error: action.payload,
        },
      };
    case ActionType.ClearSendTransactionState:
      return {
        ...state,
        sendTransaction: {
          transactionId: null,
          isLoading: false,
          error: null,
        },
      };
    default:
      return state;
  }
};

export default reducer;

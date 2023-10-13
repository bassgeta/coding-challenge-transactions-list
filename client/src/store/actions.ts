import {
  ActionType,
  ClearSendTransactionAction,
  SendTransactionAction,
  SendTransactionErrorAction,
  SendTransactionLoadingAction,
  SendTransactionPayload,
  SendTransactionSuccessAction,
  SendTransactionSuccessPayload,
} from './interfaces';

// Type safety :)
export function sendTransactionAction(
  payload: SendTransactionPayload,
): SendTransactionAction {
  return {
    type: ActionType.SendTransaction,
    payload,
  };
}

export function sendTransactionSuccessAction(
  payload: SendTransactionSuccessPayload,
): SendTransactionSuccessAction {
  return {
    type: ActionType.SendTransactionSuccess,
    payload,
  };
}

export function sendTransactionErrorAction(
  message: string,
): SendTransactionErrorAction {
  return {
    type: ActionType.SendTransactionError,
    payload: message,
  };
}

export function sendTransactionLoadingAction(
  isLoading: boolean,
): SendTransactionLoadingAction {
  return {
    type: ActionType.SendTransactionLoading,
    payload: isLoading,
  };
}

export function clearSendTransactionStateAction(): ClearSendTransactionAction {
  return {
    type: ActionType.ClearSendTransactionState,
  };
}

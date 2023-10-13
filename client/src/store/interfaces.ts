import { Transaction } from '../types';

export interface RootState {
  sendTransaction: {
    transactionId: string | null;
    error: string | null;
    isLoading: boolean;
  };
}

export enum ActionType {
  SendTransaction = 'SEND_TRANSACTION',
  SendTransactionLoading = 'SEND_TRANSACTION_LOADING',
  SendTransactionSuccess = 'SEND_TRANSACTION_SUCCESS',
  SendTransactionError = 'SEND_TRANSACTION_ERROR',
  ClearSendTransactionState = 'CLEAR_SEND_TRANSACTION_STATE',
}

// when this would get too bloatey, it would be sensible to split all of these between slices
export interface SendTransactionPayload {
  sender: string;
  recipient: string;
  amount: number;
}

export type SendTransactionAction = {
  type: ActionType.SendTransaction;
  payload: SendTransactionPayload;
};

export interface SendTransactionSuccessPayload {
  transactionId: string;
}

export type SendTransactionSuccessAction = {
  type: ActionType.SendTransactionSuccess;
  payload: SendTransactionSuccessPayload;
};

export type SendTransactionLoadingAction = {
  type: ActionType.SendTransactionLoading;
  payload: boolean;
};

export type SendTransactionErrorAction = {
  type: ActionType.SendTransactionError;
  payload: string;
};

export type ClearSendTransactionAction = {
  type: ActionType.ClearSendTransactionState;
};

export type Action =
  | SendTransactionAction
  | SendTransactionLoadingAction
  | SendTransactionSuccessAction
  | SendTransactionErrorAction
  | ClearSendTransactionAction;

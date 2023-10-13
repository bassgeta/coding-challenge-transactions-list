import { Actions } from '../types';

export interface SendTransactionParams {
  sender: string;
  recipient: string;
  amount: number;
}

export type SendTransactionAction = {
  type: Actions.SendTransaction;
  payload: SendTransactionParams;
};

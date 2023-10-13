import { Actions } from '../types';
import { SendTransactionAction, SendTransactionParams } from './interfaces';

// Type safety :)
export function sendTransactionAction(
  payload: SendTransactionParams,
): SendTransactionAction {
  return {
    type: Actions.SendTransaction,
    payload,
  };
}

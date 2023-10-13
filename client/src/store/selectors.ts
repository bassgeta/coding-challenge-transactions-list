import { RootState } from './interfaces';

export function sendTransactionSelector(state: RootState) {
  return state.sendTransaction;
}

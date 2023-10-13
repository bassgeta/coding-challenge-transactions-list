import { put, takeEvery } from 'redux-saga/effects';
import {
  Transaction,
  TransactionResponse,
  TransactionReceipt,
  BrowserProvider,
  Signer,
} from 'ethers';

import apolloClient from '../apollo/client';
import { Transaction as TransactionAPI } from '../types';
import { GetAllTransactions, SaveTransaction } from '../queries';
import { ActionType, SendTransactionAction } from './interfaces';
import { convertETHToWei } from '../utils/currency';
import {
  sendTransactionErrorAction,
  sendTransactionLoadingAction,
  sendTransactionSuccessAction,
} from './actions';
import { FetchResult } from '@apollo/client';

function* sendTransaction({ payload }: SendTransactionAction) {
  yield put(sendTransactionLoadingAction(true));
  const { amount, recipient, sender } = payload;

  // this could have been passed along in a more elegant fashion,
  // but for the purpouses of this scenario it's good enough
  // @ts-ignore
  const walletProvider = new BrowserProvider(window.web3.currentProvider);

  const signer: Signer = yield walletProvider.getSigner();

  // Since the value is in ETH, we convert it to BigInt here
  const transaction = {
    to: recipient,
    from: sender,
    value: convertETHToWei(amount),
  };

  try {
    const txResponse: TransactionResponse = yield signer.sendTransaction(
      transaction,
    );
    const response: TransactionReceipt = yield txResponse.wait();

    const receipt: Transaction = yield response.getTransaction();

    const variables = {
      transaction: {
        gasLimit: (receipt.gasLimit && receipt.gasLimit.toString()) || '0',
        gasPrice: (receipt.gasPrice && receipt.gasPrice.toString()) || '0',
        to: receipt.to,
        from: receipt.from,
        value: (receipt.value && receipt.value.toString()) || '',
        data: receipt.data || null,
        chainId: (receipt.chainId && receipt.chainId.toString()) || '123456',
        hash: receipt.hash,
      },
    };

    const transactionResponse: FetchResult<TransactionAPI> =
      yield apolloClient.mutate({
        mutation: SaveTransaction,
        variables,
        refetchQueries: [{ query: GetAllTransactions }],
      });
    console.log('ma kaj bomo doili a', transactionResponse);

    /*
    if (transactionResponse.data) {
      yield put(
        sendTransactionSuccessAction({
          transactionId: transactionResponse.data.hash,
        }),
      );
    }
    */
  } catch (error) {
    console.error('Error while creating transaction', error);
    // It would be nicer to check the error type, but for the moment let's store a generic error message
    yield put(sendTransactionErrorAction('Something went wrong, try again'));
  }
}

export function* rootSaga() {
  yield takeEvery(ActionType.SendTransaction, sendTransaction);
}

/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Mutation = {
  __typename?: 'Mutation';
  addTransaction: Transaction;
};


export type MutationAddTransactionArgs = {
  transaction: TransactionInput;
};

export type Query = {
  __typename?: 'Query';
  getAllTransactions: Array<Transaction>;
  getTransaction?: Maybe<Transaction>;
};


export type QueryGetTransactionArgs = {
  hash: Scalars['String']['input'];
};

export type Transaction = {
  __typename?: 'Transaction';
  chainId: Scalars['String']['output'];
  data?: Maybe<Scalars['String']['output']>;
  from: Scalars['String']['output'];
  gasLimit: Scalars['String']['output'];
  gasPrice: Scalars['String']['output'];
  hash: Scalars['String']['output'];
  to: Scalars['String']['output'];
  value: Scalars['String']['output'];
};

export type TransactionInput = {
  chainId: Scalars['String']['input'];
  data?: InputMaybe<Scalars['String']['input']>;
  from: Scalars['String']['input'];
  gasLimit: Scalars['String']['input'];
  gasPrice: Scalars['String']['input'];
  hash: Scalars['String']['input'];
  to: Scalars['String']['input'];
  value: Scalars['String']['input'];
};

export type GetAllTransactionsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllTransactionsQuery = { __typename?: 'Query', getAllTransactions: Array<{ __typename?: 'Transaction', gasLimit: string, gasPrice: string, to: string, from: string, value: string, data?: string | null, chainId: string, hash: string }> };

export type GetSingleTransactionQueryVariables = Exact<{
  hash: Scalars['String']['input'];
}>;


export type GetSingleTransactionQuery = { __typename?: 'Query', getTransaction?: { __typename?: 'Transaction', gasLimit: string, gasPrice: string, to: string, from: string, value: string, data?: string | null, chainId: string, hash: string } | null };

export type SaveTransactionMutationVariables = Exact<{
  transaction: TransactionInput;
}>;


export type SaveTransactionMutation = { __typename?: 'Mutation', addTransaction: { __typename?: 'Transaction', hash: string } };


export const GetAllTransactionsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAllTransactions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getAllTransactions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"gasLimit"}},{"kind":"Field","name":{"kind":"Name","value":"gasPrice"}},{"kind":"Field","name":{"kind":"Name","value":"to"}},{"kind":"Field","name":{"kind":"Name","value":"from"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"data"}},{"kind":"Field","name":{"kind":"Name","value":"chainId"}},{"kind":"Field","name":{"kind":"Name","value":"hash"}}]}}]}}]} as unknown as DocumentNode<GetAllTransactionsQuery, GetAllTransactionsQueryVariables>;
export const GetSingleTransactionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetSingleTransaction"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"hash"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getTransaction"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"hash"},"value":{"kind":"Variable","name":{"kind":"Name","value":"hash"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"gasLimit"}},{"kind":"Field","name":{"kind":"Name","value":"gasPrice"}},{"kind":"Field","name":{"kind":"Name","value":"to"}},{"kind":"Field","name":{"kind":"Name","value":"from"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"data"}},{"kind":"Field","name":{"kind":"Name","value":"chainId"}},{"kind":"Field","name":{"kind":"Name","value":"hash"}}]}}]}}]} as unknown as DocumentNode<GetSingleTransactionQuery, GetSingleTransactionQueryVariables>;
export const SaveTransactionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SaveTransaction"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"transaction"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"TransactionInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addTransaction"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"transaction"},"value":{"kind":"Variable","name":{"kind":"Name","value":"transaction"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hash"}}]}}]}}]} as unknown as DocumentNode<SaveTransactionMutation, SaveTransactionMutationVariables>;
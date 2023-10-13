import { ethers } from 'ethers';

export function convertETHToWei(ethAmount: number): bigint {
  return ethers.parseEther(ethAmount.toString());
}

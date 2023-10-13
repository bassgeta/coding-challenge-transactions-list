import { ethers } from 'ethers';

export function convertETHToWei(ethAmount: number): bigint {
  return ethers.parseEther(ethAmount.toString());
}

export function convertWeiToETH(weiAmount: string): string {
  return ethers.formatEther(weiAmount);
}

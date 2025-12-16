import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import {  mainnet,sepolia } from 'wagmi/chains';
import {http} from 'wagmi'

export const config = getDefaultConfig({
  appName: 'nftGAME',
  projectId: '18e0c03a63806b7cd58530353f7b951a',
  chains: [sepolia,mainnet,],
  ssr: false,
  transports: {
    // 对于 Mainnet，可以使用默认的（或者也换成 Alchemy）
    [mainnet.id]: http(),
    [sepolia.id]: http('https://ethereum-sepolia.publicnode.com'),
  },
});
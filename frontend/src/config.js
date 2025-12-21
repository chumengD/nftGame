import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import {  sepolia } from 'wagmi/chains';
import {http} from 'wagmi'

export const config = getDefaultConfig({
  appName: 'nftGAME',
  projectId: '18e0c03a63806b7cd58530353f7b951a',
  chains: [sepolia],
  ssr: false,
  transports: {
    [sepolia.id]: http('https://sepolia.infura.io/v3/1753e902a5d243499b272f4f7309ab87'),
  },
});
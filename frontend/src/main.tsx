import React from 'react'
import ReactDOM from 'react-dom/client'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { WagmiConfig, createConfig } from 'wagmi'
import { mainnet } from 'wagmi/chains'
import { http } from 'viem'
import './index.css'
import Page from './page.tsx'

const config = createConfig({
	chains: [mainnet],
	transports:{
		[mainnet.id]:http()
	}
}) 

createRoot(document.getElementById('root')!).render(
  <StrictMode>
  <WagmiConfig config={config}>
    <Page />
    </WagmiConfig>
  </StrictMode>,
)

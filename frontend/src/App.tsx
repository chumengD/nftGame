
import { useState, useEffect } from 'react'
import {createPublicClient, createWalletClient, http, custom } from 'viem'
import { mainnet } from 'viem/chains'
import './App.css'

interface Props{
  connect: React.MouseEventHandler<HTMLButtonElement>;
  fetchBalance: React.MouseEventHandler<HTMLButtonElement>;

}

const erc20Abi = [
  {
    "name": "balanceOf",
    "type": "function",
    "stateMutability": "view",
    "inputs": [{ "name": "account", "type": "address" }],
    "outputs": [{ "name": "", "type": "uint256" }]
  }
];



function Connectbtn({connect}:Props){
  return <button onClick={connect}>Connncet Wallet</button>
}

function FetchBalancebtn({fetchBalance}:Props){
  return <button onClick={fetchBalance}>查询余额</button>
}

const publicClient = createPublicClient({
      chain:mainnet,
      transport:http() 
          })

function App() {
  const [blockNumber,setBlockNumber] = useState<bigint | null>(null);
  let signer;
  
  useEffect(()=>{
    publicClient.getBlockNumber()
    .then((num)=>{setBlockNumber(num)}) 
},[])

    async function connectWallet(){
      const [account] = await window.ethereum.request({
        method:"eth_requestAccounts"
    }) 
     signer = createWalletClient({
        account,
        chain:mainnet,
        transport:custom(window.ethereum)
      })
    }
   
    async function fetchBalance(){
        const userAddress = "0xacA55C6b1bdDE9fAA5c4BAE786f491a1767D6708";
        const result = await publicClient.getBalance({
          address: userAddress
      })
      alert(`余额为：${result}`)


    }


  return (
    <>
    <h1>viem demo</h1>
    <p>current block number:{blockNumber?.toString()}</p>
    <Connectbtn connect={connectWallet}/>
    <FetchBalancebtn fetchBalance={fetchBalance} />
</>
  )
}

export default App

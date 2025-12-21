import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useWriteContract,useAccount,useWaitForTransactionReceipt} from 'wagmi';
import { parseEventLogs } from 'viem';
import { contract } from '../hooks/contracts';
import { useState,useEffect } from 'react';
import { useMyStates } from '../hooks/states';

export const MyConnectButton = () => {
  const {writeContract} = useWriteContract()
  
  const {isConnected} =useAccount()
  const [hash,setHash] = useState()
  const {setExp,setMoney,setMood,setLv,setTokenId,setDays,setName} = useMyStates()


  useEffect(()=>{
    if(isConnected){
      console.log(`现在在使用时间函数`)
    writeContract({
        address: contract.address,
        abi: contract.abi,
        functionName: 'getCurrentTimestamp'
      }, {
        // 添加回调以确保状态重置
        onSuccess: (hash1) => {
              setHash(hash1)
             console.log("时间函数交易请求发送成功");
        },
        onError: (err) => {
             console.log("时间函数交易请求失败/拒绝", err);// 失败也要关闭开关，避免死循环
        }
      })
    }

  },[isConnected])

//监听getCurrentTimestamp事件函数，获取name,宠物经验，用户经验，心情，等级，tokenid，签到次数
      const {data:timeDAta,isSuccess:isTimeSuccess}= useWaitForTransactionReceipt({hash:hash})
      useEffect(()=>{

        if(isTimeSuccess){
        const logs =parseEventLogs({
          address:contract.address,
          abi:contract.abi,
          eventName: 'getCurrentTimestamp_Event',
          logs:timeDAta.logs
        })

        if(logs.length>0){
          const data =logs[0].args
          setMood(Number(data.current_pet_Happy));
          setExp(Number(data.current_pet_Exp));
          setLv(Number(data.current_pet_Level));
          setMoney(Number(data.current_user_Exp));
          setName(data.current_pet_name);
          setTokenId(Number(data.user_tokenid));
          setDays(Number(data.current_user_add_cnt))
          console.log(`current_pet_name:${data.current_pet_name}`)
          console.log(`home.time.message：`,data.message)

      }}},[isTimeSuccess,timeDAta])



  return (
    <ConnectButton.Custom>
      {({
        account,
        chain,
        openAccountModal,
        openChainModal,
        openConnectModal,
        authenticationStatus,
        mounted,
      }) => {
        // Note: If your app doesn't use authentication, you
        // can remove all 'authenticationStatus' checks
        const ready = mounted && authenticationStatus !== 'loading';
        const connected =
          ready &&
          account &&
          chain &&
          (!authenticationStatus ||
            authenticationStatus === 'authenticated');
        return (
          <div
            {...(!ready && {
              'aria-hidden': true,
              'style': {
                opacity: 0,
                pointerEvents: 'none',
                userSelect: 'none',
              },
            })}
          >
            {(() => {
              if (!connected) {
               // 移除 height: '60rem'
return (<div style={{
  position: 'absolute',
      top: '2.3rem',   
      right: '20rem', 
      backgroundColor: 'black',
      width:'3.4rem',
      height:'3rem',
}}>
  <button 
    onClick={()=>{
      openConnectModal()
    }}
    type="button" 
    style={{
      left:'-0.3rem',
      top:'-0.3rem',
      position: 'absolute', 
      backgroundColor: '#F66FCF',
      border: 'none', 
      cursor: 'pointer', 
      padding: '0',    
    }}
  >
    <img src='/checkin.png' width='52rem' height='' style={{ display: 'block' }} />
  </button>
  
</div>

                );
              }
              if (chain.unsupported) {
                return (
                  <button onClick={openChainModal} type="button">
                    Wrong network
                  </button>
                );
              }
              return (
                <div style={{ display: 'flex', gap: 12 , position:'absolute', top:'2.5rem' , left:'70rem', transform:'scale(1.2)'}}>
                  <button
                    onClick={openChainModal}
                    style={{ display: 'flex', alignItems: 'center', backgroundColor:'white', color:'black'}}
                    type="button"
                  >
                    {chain.hasIcon && (
                      <div
                        style={{
                          background: chain.iconBackground,
                          width: 12,
                          height: 12,
                          borderRadius: 999,
                          overflow: 'hidden',
                          marginRight: 4,
                        }}
                      >
                        {chain.iconUrl && (
                          <img
                            alt={chain.name ?? 'Chain icon'}
                            src={chain.iconUrl}
                            style={{ width: 12, height: 12 }}
                          />
                        )}
                      </div>
                    )}
                    {chain.name}
                  </button>
                  <button onClick={openAccountModal} type="button" style={{backgroundColor:'white', color:'black'}}>
                    {account.displayName}
                  </button>
                </div>
              );
            })()}
          </div>
        );
      }}
    </ConnectButton.Custom>
  );
};
import './checkInPart.css'
import { useWatchContractEvent, useWriteContract,useWaitForTransactionReceipt ,useAccount} from 'wagmi'
import { contract } from '../hooks/contracts'
import {useMyStates } from '../hooks/states'
import { useState ,useEffect} from 'react'
import { parseEventLogs } from 'viem'
import { message } from 'antd';

export function CheckIn_part({blessing}){
    const {setMoney,money,setDays,days} = useMyStates()
    const {address} = useAccount()
    const [checkInTxHash,setCheckInTxHash] = useState()
    let {writeContract } = useWriteContract()

  //监听签到函数
    const {data:receipt,isSuccess}=  useWaitForTransactionReceipt({hash:checkInTxHash})
    useEffect(()=>{
          if(isSuccess){
            console.log(`签到中...`)
            console.log("原始 Receipt Logs:", receipt.logs)
            const logs =parseEventLogs({
              address:contract.address,
              abi:contract.abi,
              eventName: 'add_user_exp_Event',
              logs: receipt.logs

            })

            console.log("解析后的 Logs:", logs)
            if(logs.length>0){
              const data =logs[0].args

              setMoney(Number(data.current_user_Exp));
              setDays(Number(data.count))

              setCheckInTxHash(undefined)
              console.log(`签到成功，用户经验：${Number(data.current_user_Exp)}
            签到次数：${Number(data.count)}`)
          }
        }
        },[receipt,isSuccess])

  /* 因未知原因失败的监听方式 
   useWatchContractEvent({
        address: contract.address,
        abi: contract.abi,
        eventName: 'add_user_exp_event',
        onLogs(logs){
            
            const lastLog = logs[logs.length-1]
            const data = lastLog.args
            if (lastLog.transactionHash !== checkInTxHash) {
                return 
            }
            console.log(`签到中`)
            setMoney(Number(data.current_user_Exp))
            setDays(Number(data.count))
            console.log(`CheinPart.event.count:${data.count}`)
            
        }
    })*/
  
const now = new Date();

// 获取月份 (0-11，需要+1)
const fake_month = now.getMonth() + 1;

// 获取日期 (1-31)
const date = now.getDate();

// 补零操作 (例如把 5 变成 '05')
const month = fake_month < 10 ? `0${fake_month}` : fake_month;
const day = date < 10 ? `0${date}` : date;



    return (
    <div className='checkIn'>
    <div className='check_bg_shadow'></div>
    <div className="check_bg">
        <div className='check_white'></div>
        <div className='check_yello_shadow'>
            <div className='check_yello'>
                <div className='today_content'>{blessing??'今天过得怎么样？'}</div></div></div>
        <div className='check_month_shadow'>
            <div className='check_month'>
                <div className='check_month_content'>{month??12}</div></div></div>
        <div className='check_day_shadow'>
            <div className='check_day'><div className='check_day_content'>{day??11}</div></div></div>
        <div className='checkIcon_shadow'>
            <button className='checkIcon'  onClick={ ()=>{
if(address){
writeContract({
     address:contract.address,
     abi:contract.abi,
     functionName:"add_user_exp"
 },{onSuccess: (Hash) => {
     setCheckInTxHash(Hash)
     message.success('签到中',2) 
                            },})

}
 else{
    alert('请先连接钱包')
 }
}}><img  src='/checked.png' width='50rem'></img></button></div>

  

        <div className='accumulat_days'>{days} days</div>

    </div>

    </div>)
}
import './checkInPart.css'
import { useWatchContractEvent, useWriteContract,useWaitForTransactionReceipt ,useAccount} from 'wagmi'
import { contract } from '../hooks/contracts'
import {useMyStates } from '../hooks/states'


export function CheckIn_part({blessing}){
    const {setMoney,money,setDays,days} = useMyStates()
    const {address} = useAccount()
    let {writeContract } = useWriteContract()

  //监听签到函数
    useWatchContractEvent({
        address: contract.address,
        abi: contract.abi,
        eventName: 'add_user_exp_event',
        onLogs(logs){
            console.log(`签到中`)
            const lastLog = logs[logs.length-1]
            const data = lastLog.args
            setMoney(Number(data.current_user_Exp))
            setDays(Number(data.count))
            console.log(`CheinPart.event.count:${data.count}`)
            console.log(`签到成功，用户经验：${Number(data.current_user_Exp)}
            签到次数：${Number(data.count)}`)
        }
    })
  
const now = new Date();

// 获取月份 (0-11，需要+1)
const fake_month = now.getMonth() + 1;

// 获取日期 (1-31)
const date = now.getDate();

// 补零操作 (例如把 5 变成 '05')
const month = fake_month < 10 ? `0${month}` : fake_month;
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
 })}
 else{
    alert('请先连接钱包')
 }
}}><img  src='/checked.png' width='50rem'></img></button></div>

  

        <div className='accumulat_days'>{days} days</div>

    </div>

    </div>)
}
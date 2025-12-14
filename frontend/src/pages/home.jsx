import {Link,useNavigate} from "react-router-dom"
import {ConnectButton} from "@rainbow-me/rainbowkit"
import { useReadContract, useWriteContract,useWatchContractEvent} from "wagmi"
import { useState,useEffect } from "react"
import {contract} from '../hooks/contracts'
import { ProgressBar } from "../components/progressBar"
import { MyConnectButton } from "../components/connectButton"
import { CheckIn_part } from "../components/checkInPart"
import { Shop } from "../components/shopping"
import {message} from 'antd'
import { useMyStates } from "../hooks/states"

import './home.css'

export function Home(){
  const {name,setName,mood,setMood,Exp,setExp,lv,setLv,setMoney}=useMyStates()
    const {writeContract}= useWriteContract()

  //展示浏览器储存数据，保证刷新后数据正常显示
  useEffect(()=>{
    const Data = localStorage.getItem('userData')
    if(Data){
      const userData = JSON.parse(Data)
          setMood(userData.mood)
          setExp(userData.Exp)
          setLv(userData.lv)
          setMoney(userData.money)
          setName(userData.name)}
  },[])


    //监听getCurrentTimestamp事件函数
    useWatchContractEvent({
      address:contract.address,
        abi:contract.abi,
        eventName:'getCurrentTimestamp_Event',
        onLogs(logs){
          const lastLog = logs[logs.length-1]
          const data = lastLog.args

          //浏览器存储数据，保证刷新后数据正常显示
          const user_data = {
            mood:Number(data.current_pet_Happy),
            Exp:Number(data.current_pet_Exp),
            lv:Number(data.current_pet_Level),
            money:Number(data.current_user_Exp),
            name:data.current_pet_name
          }

          setMood(user_data.mood);
          setExp(user_data.Exp);
          setLv(user_data.lv);
          setMoney(user_data.money);
          setName(user_data.name);
          console.log(`home.time.message：`,data.message)

          const userData= JSON.stringify(user_data)
          localStorage.setItem('userData',userData)
          
        }
    })
    
    //监听领养宠物函数事件
    useWatchContractEvent({
        abi:contract.abi,
        address:contract.address,
        eventName:'mint_Event',
        onLogs(logs){
          const lastLog = logs[logs.length-1]
          const data = lastLog.args
          data.isError?
          console.error(`领养失败：${data.message}`):
          console.log(`领养成功：${data.message}`)
          setExp(data.current_user_Exp)
        }
      })

    //获取宠物名称，在lv>=1时调用
    useReadContract({
      abi:contract.abi,
      address:contract.address,
      functionName:'get_pet_name',
      query:{
        enabled: lv>=1
      }
    })



    //跳转页面的函数
    const navigate =useNavigate()
    function To(){
      navigate('record');
    }

    return (<><div className="home">

    <div className="bg" >
        <div className="websiteName">
            <div className="w1"></div>
            <div className="inW1">Piglet </div>
            <div className="w2"></div>
            <div className="inW2">Paradise</div>
            <div className="yello"></div>
            <div className="pink"></div>
            <div className="yello2"></div>
        </div>

        <div className="display">
            <div className="bg3"></div>
            <div className="bg2">
                <div className="name">{name??'NAME'}</div>
                <div className="lv">Lv.{lv}</div>
                <button className='getpet' onClick={()=>{
                writeContract({
                  abi:contract.abi,
                  address:contract.address,
                  functionName:'mint',
                })
               }}>领养宠物</button>
         
            </div>
        </div>

        <div className="EXP">
            <div className="EXPbar">    
              <ProgressBar progress={Exp}/></div>
            <div className='EXPbarshadow'></div>
            <div className="exp">{Exp} /  100 XP</div>
        </div>

        <div className="mood">
          <div className="moodContent">
            <ProgressBar progress={mood} isUpright={true}>Mood</ProgressBar>
            <div className="moodValue">{mood} <br/>
                 /<br/>
                 100 <img src='../../public/mood.png' width='21rem'/><br/> </div>
          </div>
          <div className="moodBarshadow"></div>
        </div>

        <MyConnectButton/>

        <div className="historyShadow"><button  className="history" onClick={To}><div className="historyw">History</div></button></div> 

        <div className="checkIN"><CheckIn_part /></div>

        <div className="shop"><Shop/></div>
    </div>
        </div>  </>)
}



/*              <div className="pet"><img src='/1级.png' width='600rem'/></div>
    <button onClick={CheckIn}>签到</button>
    <ConnectButton accountStatus="avatar" chainStatus="icon" showBalance={false}/>
    <Link to="/record" className="Linkbtn">跳转到record</Link>*/
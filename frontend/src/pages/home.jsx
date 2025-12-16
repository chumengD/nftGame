import {Link,useNavigate} from "react-router-dom"
import { useReadContract, useWriteContract,useWatchContractEvent,useAccount} from "wagmi"
import { useState,useEffect } from "react"
import {contract} from '../hooks/contracts'
import { ProgressBar } from "../components/progressBar"
import { MyConnectButton } from "../components/connectButton"
import { CheckIn_part } from "../components/checkInPart"
import { Shop } from "../components/shopping"
import { useMyStates } from "../hooks/states"
import  NFTSDK  from 'nft-sdk'
import { MyInput } from "../components/Myinput"

import './home.css'

export function Home(){

  const {name,setName,
    mood,setMood,
    Exp,setExp,
    lv,setLv,
    setMoney,money,
    days,setDays,
    tokenId,setTokenId,
    image,setImage
  }=useMyStates()

  const {writeContract}= useWriteContract()
  const {address} = useAccount()
  const [isLoaded,setIsload] =useState(false)
  const [isModal,setIsmodal] = useState(false)
  const [inputName,setInputName] = useState('')

  //展示浏览器储存数据，保证刷新后数据正常显示
  useEffect(()=>{
    const Data = localStorage.getItem('userData')
    if(Data){
      const userData = JSON.parse(Data)
          setMood(userData.mood)
          setExp(userData.Exp)
          setLv(userData.lv)
          setMoney(userData.money)
          setDays(userData.days)
          }
          setIsload(true)
  },[])


  //保存数据到本地
useEffect(() => {
        if (!isLoaded) {
            return 
        }
        const user_data = {
            money: money, 
            mood: mood,
            Exp: Exp,
            lv: lv,
            days:days
        }
        console.log("自动存档中:", user_data) 
        localStorage.setItem('userData', JSON.stringify(user_data))
    }, [money, mood, Exp, lv,isLoaded,days]) 


    //监听getCurrentTimestamp事件函数，获取name,宠物经验，用户经验，心情，等级，tokenid，签到次数
    useWatchContractEvent({
      address:contract.address,
        abi:contract.abi,
        eventName:'getCurrentTimestamp_Event',
          filters: {
    user: address 
  },
        onLogs(logs){
          const lastLog = logs[logs.length-1]
          const data = lastLog.args
          setMood(Number(data.current_pet_Happy));
          setExp(Number(data.current_pet_Exp));
          setLv(Number(data.current_pet_Level));
          setMoney(Number(data.current_user_Exp));
          setName(data.current_pet_name);
          setTokenId(Number(data.user_tokenid));
          setDays(Number(data.current_user_add_cnt))
          console.log(`current_pet_name:${data.current_pet_name}`)
          console.log(`home.time.message：`,data.message)

        }
    })
    
    //监听领养宠物函数事件
    useWatchContractEvent({
        abi:contract.abi,
        address:contract.address,
        eventName:'mint_Event',
        onLogs(logs){
          const lastLog = logs[logs.length-1]
          const data = lastLog.args发
          data.isError?
          console.error(`领养失败：${data.message}`):
          console.log(`领养成功：${data.message}`)
          setMoney(Number(data.current_user_Exp))
          setLv(Number(data.current_pet_Level))
          setTokenId(Number(data.tokenId))
        }
      },{onSuccess:()=>{
        setIsmodal(true)
      }})

      //输入宠物名字




      //获取宠物名字
    const {data:petNAme} = useReadContract({
      abi:contract.abi,
      address:contract.address,
      functionName:'get_pet_name',
      query:{
        enabled: lv>=1
      }
    })
    useEffect(()=>{if(petNAme){setName(petNAme)}},[petNAme])



    //展示·宠物部分
    async function showpet() {
    if(lv){
    const sdk = new NFTSDK({
      contractAddress: contract.address, 
      abi: contract.abi,             
      rpcUrl: 'https://sepolia.infura.io/v3/1753e902a5d243499b272f4f7309ab87'  
    });
    const imageUrl = await sdk.getNFTImageUrl(tokenId);
    setImage(imageUrl)
  }}
  showpet()


    //跳转页面的函数
    const navigate =useNavigate()
    function To(){
      navigate('record');
    }

    return (<><div className="home">

      {isModal? <div className="over_shadow">
        <MyInput inputValue={inputName} setInputValue={setInputName} />
      </div>
      :<></>}

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
            {lv ?<div className="pet"><img src={image} width='600rem'/></div>: <button className='getpet' onClick={()=>{
                writeContract({
                  abi:contract.abi,
                  address:contract.address,
                  functionName:'mint',
                })
               }}>领养宠物</button>}
         
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
            <ProgressBar progress={mood/6} isUpright={true}>Mood</ProgressBar>
            <div className="moodValue">{mood} <br/>
                 /<br/>
                 600 <img src='../../public/mood.png' width='21rem'/><br/> </div>
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
import {Link,useNavigate} from "react-router-dom"
import { useReadContract, useWriteContract,useWatchContractEvent,useAccount, useWaitForTransactionReceipt} from "wagmi"
import { useState,useEffect } from "react"
import {contract} from '../hooks/contracts'
import { ProgressBar } from "../components/progressBar"
import { MyConnectButton } from "../components/connectButton"
import { CheckIn_part } from "../components/checkInPart"
import { Shop } from "../components/shopping"
import { useMyStates } from "../hooks/states"
import  {NFTSDK}  from 'nft-sdk'
import { MyInput } from "../components/Myinput"
import { parseEventLogs } from 'viem'
import { message } from 'antd';

import './home.css'


export function Home(){

  const {name,setName,
    mood,setMood,
    Exp,setExp,
    lv,setLv,
    setMoney,money,
    days,setDays,
    tokenId,setTokenId,
    image,setImage,
    isModal,setIsmodal,
  }=useMyStates()

  const {writeContract}= useWriteContract()
  const [isLoaded,setIsload] =useState(false)
  const [petHash,setPetHash] = useState()
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
          setTokenId(userData.tokenId)
          setName(userData.name)
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
            days:days,
            tokenId:tokenId,
            name:name,

        }
        console.log("自动存档中:", user_data) 
        localStorage.setItem('userData', JSON.stringify(user_data))
    }, [money, mood, Exp, lv,isLoaded,days,name]) 

    
    
    //监听领养宠物函数事件
    const {data:getPet,isSuccess:isPetComfired} =useWaitForTransactionReceipt({hash:petHash,confirmations: 1,})
    useEffect(()=>{
      if(isPetComfired){
        const logs =parseEventLogs({
          address:contract.address,
          abi:contract.abi,
          eventName: 'mint_Event',
          logs:getPet.logs
        })

        if(logs.length>0){
          const data =logs[0].args

          if (data.isError) {
          console.error(`领养失败：${data.message}`);
        } else {
          console.log(`领养成功：${data.message}`);
          setMoney(Number(data.current_user_Exp));
          setLv(Number(data.current_pet_Level));
          setTokenId(Number(data.tokenId));

          setIsmodal(true);  //触发命名弹窗
        }
      }else {
        console.warn("交易成功，但在 Logs 里没找到 mint_Event。原因可能是：ABI不匹配 或 合约没触发该事件");
      }
    }
    },[getPet,isPetComfired])


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
    useEffect(() => {
    async function fetchPetImage() {
      try {
        const sdk = new NFTSDK({
          contractAddress: contract.address,
          abi: contract.abi,
          // 建议：将 API Key 放入 Vercel 的 Environment Variables 中
          rpcUrl: 'https://sepolia.infura.io/v3/1753e902a5d243499b272f4f7309ab87' 
        });
        const imageUrl = await sdk.getNFTImageUrl(tokenId);
        setImage(imageUrl);
      } catch (error) {
        console.error('nft图片链接加载失败：', error);
      }
    }
    fetchPetImage();
  }, [tokenId,lv])

    //跳转页面的函数
    const navigate =useNavigate()
    function To(){
      navigate('record');
    }

    //对每张图片的大小单独调整
    const style=lv<3?{}:
    lv==3?{
      transform: 'scale(0.9)',
      top:'2rem',
    }:
    lv==4?{
      transform: 'scale(0.9)',
       top:'5rem',
    }:
    {
      transform: 'scale(0.85)',
       top:'2rem',
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
            {lv ?<div className="pet" style={style}><img src={image} width='600rem'/></div>: <button className='getpet' onClick={()=>{
                writeContract({
                  abi:contract.abi,
                  address:contract.address,
                  functionName:'mint',
                },{onSuccess:(writeHash)=>{
                  message.success('领养中',2)
                  setPetHash(writeHash)}})
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
                 600 <img src='/mood.png' width='21rem'/><br/> </div>
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
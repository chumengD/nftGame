import {Link,useNavigate} from "react-router-dom"
import {ConnectButton} from "@rainbow-me/rainbowkit"
import { useReadContract } from "wagmi"
import { useState,useEffect } from "react"
import {contract} from '../hooks/contracts'
import { ProgressBar } from "../components/progressBar"
import { MyConnectButton } from "../components/connectButton"
import { CheckIn } from "../components/checkInPart"
import { Shop } from "../components/shopping"
import './home.css'

export function Home(){
    const {data} =useReadContract({
        address:contract.address,
        abi:contract.abi,
        functionName:'getCurrentTimestamp'
    })
    const mood = data? data.current_pet_Happy:0;
    const Exp = data? data.current_pet_Exp:50;
    const lv = data?data.current_pet_Level:'xx';

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
                <div className="name">{name?name:'NAME'}</div>
                <div className="lv">Lv.{lv}</div>
                <div className="pet"><img src='/1级.png' width='600rem'/></div>
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
                 100 <img src='../../public/mood.png' width='17rem'/><br/> </div>
          </div>
          <div className="moodBarshadow"></div>
        </div>

            <div ><MyConnectButton/></div>

            <div className="historyShadow"><button  className="history" onClick={To}><div className="historyw">History</div></button></div> 

             <div className="checkIN"><CheckIn /></div>

             <div className="shop"><Shop/></div>
    </div>
        </div>  </>)
}



/*
    <button onClick={CheckIn}>签到</button>
    <ConnectButton accountStatus="avatar" chainStatus="icon" showBalance={false}/>
    <Link to="/record" className="Linkbtn">跳转到record</Link>*/
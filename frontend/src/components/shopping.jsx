import { useMyStates } from '../hooks/states'
import  './shopping.css'
import { useAccount, useReadContract,useWaitForTransactionReceipt,useWatchContractEvent,useWriteContract } from "wagmi";
import { contract } from '../hooks/contracts';
import { useState,useEffect } from 'react';
import { parseEventLogs } from 'viem';



function ShopCard({number,cost,image,des}){
    const{lv,setLv,setMoney,setExp,setMood,tokenId} = useMyStates()
    const {address} =useAccount()
    const [hash,setHash] = useState()
    const {writeContract} = useWriteContract()

    //监听商店函数
    const {data,isSuccess} = useWaitForTransactionReceipt({hash:hash})
    useEffect(()=>{
              if(isSuccess){
                console.log(`签到中...`)
    
                const logs =parseEventLogs({
                  address:contract.address,
                  abi:contract.abi,
                  eventName: 'shopping_Event',
                  logs: data.logs
                })
    
                if(logs.length>0){
                  const data =logs[0].args
    
                setLv(Number(data.current_pet_Level))
                if(Number(data.current_user_Exp))setMoney(Number(data.current_user_Exp))
                if(Number(data.current_pet_Exp))setExp(Number(data.current_pet_Exp))
                if(Number(data.current_pet_Happy))setMood(Number(data.current_pet_Happy))

                  console.log(`购买成功，用户经验：${Number(data.current_pet_Exp)}
                宠物心情：${Number(data.current_pet_Mood)}`)
              }
            }
            },[data,isSuccess])

  //用于同步宠物图片在钱包的刷新
  async function updatePicture() {
    console.log("开始请求 OpenSea 刷新元数据...");
      const url = `/opensea-api/api/v2/chain/sepolia/contract/${contract.address}/nfts/${tokenId}/refresh`;
    await new Promise(r => setTimeout(r, 2000));

      try{
        const response = await fetch(url,{
          method:'POST',
          headers:{
            'Accept': 'application/json',
            'X-API-KEY': '63ee6ef8cdc94ff8a90adbc9a4cffeed', 
            'Content-Type': 'application/json'
          }
        })
                  
      if(response.ok){
          console.log('nft图片更新成功！')
        }else{
          const error = await response.json()
          console.log('nft图片更新失败:',error)
          
        }
      }catch(error){
        console.error('网络请求错误:',error)
      }
            }

    /*因未知原因错误的监听方式
    useWatchContractEvent({
        address:contract.address,
        abi:contract.abi,
        eventName:'shopping',
        onLogs(logs){
            const lastLog = logs[logs.length-1]
            const data = lastLog.args
            if (lastLog.transactionHash !== hash) {
                return 
            }
            setLv(data.current_pet_Level)
            setMoney(data.current_user_Exp)
            setExp(data.current_pet_Exp)
        }   
           })*/

    return(<div className='goods_Shadow'>
    <div className='goods_bg'>
        <div className='goods_number'>Goods {number??0}</div>
        <div className='goods_cost'><span style={{color:'#F7FF1A'}}>$</span>{cost??0}</div>
        <div className='goods_image_shadow'>
            <div className='goods_image'><img src={image} width='60rem'/></div></div>
        <div className='goods_des_shadow'>
            <div className='goods_des'>{des??'还没有描述哦'}</div></div>
        <div className='goods_buy_shadow'>
            <button className='goods_buy'><img src='/buybtn.png' width='45rem' onClick={()=>{
                if(lv){
           writeContract({
            address:contract.address,
            abi:contract.abi,
            functionName:'shopping',
            args:[number]
           },{onSuccess:(hash)=>{
            setHash(hash)
            updatePicture()
            console.log(`购买${number}商品成功！`)
           },
           onError:(error)=>{
             console.log(`购买${number}商品失败！`,error)
           }
        }) 
        }else{
            alert('请先领养宠物')
        }
           }}/></button></div>
    </div>
    </div>)

}

export function Shop(){
    const {money}= useMyStates()


    
    return(<>
    <div className="shop_icon">
        <img src='/shopping.png' width='45rem' className='shop_img'/>
        <div className='money'>{money??'0'}<span style={{color:'#F7FF1A'}}>$</span></div>
    </div>
    <div className='shop_bg_shadow'>
    <div className='shop_bg'>
        <ShopCard number={1} cost={114} image='/沙滩球.png' des='小猪不知道沙滩是什么，但他总听主人说沙滩的旁边是海，海的那边是敌人'/>
        <ShopCard number={2} cost={99} image='/胡萝卜.png' des='猪饲料之一，能让猪营养均衡'/>
        <ShopCard number={3} cost={71} image='/白菜.png' des='都说猪拱白菜，小猪最喜欢吃白菜了'/>
         <ShopCard number={4} cost={86} image='/飞盘.png' des='小猪很喜欢追着飞盘上的星星跑，能给小猪减减肥'/>
    </div></div>

   
    </>)
}

/* <div className='up_scrollbar_button'><img src='./upArrow.png' width='50rem'/></div>
    <div className='down_scrollbar_button'><img src='./downArrow.png' width='50rem'/></div> */


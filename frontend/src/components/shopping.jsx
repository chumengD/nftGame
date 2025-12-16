import { useMyStates } from '../hooks/states'
import  './shopping.css'
import { useAccount, useReadContract,useWatchContractEvent,useWriteContract } from "wagmi";
import { contract } from '../hooks/contracts';




function ShopCard({number,cost,image,des}){
    const{lv} = useMyStates()
    const {address} =useAccount()
    const {writeContract} = useWriteContract()
    useWatchContractEvent({
        address:contract.address,
        abi:contract.abi,
        filters: {
    user: address 
  },
        eventName:'shopping',   
           })
    return(<div className='goods_Shadow'>
    <div className='goods_bg'>
        <div className='goods_number'>Goods {number??0}</div>
        <div className='goods_cost'><span style={{color:'#F7FF1A'}}>$</span>{cost??0}</div>
        <div className='goods_image_shadow'>
            <div className='goods_image'><img src={image} width='60rem'/></div></div>
        <div className='goods_des_shadow'>
            <div className='goods_des'>{des??'还没有描述哦'}</div></div>
        <div className='goods_buy_shadow'>
            <button className='goods_buy'><img src='/buybtn.png' width='45rem' ocClick={()=>{
                if(lv){
           writeContract({
            address:contract.address,
            abi:contract.abi,
            functionName:'shopping',
            args:[number]
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
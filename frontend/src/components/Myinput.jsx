//confirmClick与确定按钮绑定的是同一个函数
import { useState ,useEffect} from "react";
import { useMyStates } from "../hooks/states";
import { useWaitForTransactionReceipt, useWriteContract } from "wagmi";
import { contract } from "../hooks/contracts";
import { message } from 'antd';

export function MyInput({ inputValue, setInputValue,  }) {
  const {setName,name,setIsmodal}=useMyStates()
  const {writeContract}=useWriteContract()
  const [hash,setHash] =useState()
  const {isSuccess} = useWaitForTransactionReceipt({
    hash:hash
  })

  useEffect(()=>{
    if(isSuccess){
    console.log(`命名成功！,Ta的名字是：${name}`)
    setName(inputValue)
    setIsmodal(false)
  }
  },[isSuccess])


function confirmClick(){
      setName(inputValue)
  }




  return (
    <input
      style={{
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        width:'20rem',
        height:'2rem',
        borderRadius:'1px',
      }}
      type="text"
      placeholder="请输入宠物名字，完成后按下Enter"
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          confirmClick();
          writeContract({
          address:contract.address,
          abi:contract.abi,
          functionName:'set_pet_name',
          args:[inputValue],
          },
          {onSuccess:(writehash)=>{
              message.success('命名成功！',2)
              setHash(writehash)},
            onError:(error)=>{
              console.error('用户拒绝或交易出错', error);}
          },)
          
        }
      }}
    />
  );
}

      
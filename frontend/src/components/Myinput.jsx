//confirmClick与确定按钮绑定的是同一个函数
import { useState ,useEffect} from "react";
import { useMyStates } from "../hooks/states";
import { useWaitForTransactionReceipt, useWriteContract } from "wagmi";
import { contract } from "../hooks/contracts";

export function MyInput({ inputValue, setInputValue,  }) {
  const {setName,name}=useMyStates()
  const [isWrite,setIsWrite] =useState(false)
  const {writeContract}=useWriteContract()
  const [hash,setHash] =useState()
  const {isSuccess} = useWaitForTransactionReceipt({
    hash:hash
  })

  useEffect(()=>{
    console.log(`命名成功！,Ta的名字是：${name}`)
  },[isSuccess])


function confirmClick(){
      setName(inputValue)
      setIsWrite(true)
  }

  writeContract({
    address:contract.address,
    abi:contract.abi,
    functionName:'set_pet_name',
    args:[name],
    query:{
      enable:isWrite
    }
  },{onSuccess:(writehash)=>{
    setHash(writehash)
  }})


  return (
    <input
      type="text"
      placeholder="请输入宠物名字，完成后按下Enter"
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          confirmClick();
        }
      }}
    />
  );
}

      
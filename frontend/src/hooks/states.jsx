import { useState,createContext,useContext, Children } from "react";
//这是一个hook,用来给别的组件传递状态


const Context = createContext()

export function StatesProvider({children}){
    //const [,] = useState()
    const[money,setMoney]= useState(0)
    const[mood,setMood]=useState(0)
    const[lv,setLv] = useState(0)
    const[Exp,setExp] = useState(0)
    const[name,setName]= useState('NAME')
    const [days,setDays] = useState(0)
    const [tokenId,setTokenId]=useState()
    const [image,setImage] =useState()
    const valueToShare ={
        money,
        setMoney,
        mood,
        setMood,
        lv,setLv,
        Exp,setExp,
        name,setName,
        days,setDays,
        tokenId,setTokenId,
        image,setImage,
    }
    return (
        <Context.Provider value={valueToShare}>
            {children}
        </Context.Provider>
    )
}

export function useMyStates(){
    return useContext(Context)
}
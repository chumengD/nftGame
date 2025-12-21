// transform: "translate(-50%, -50%)",


export function ProgressBar({ progress ,isUpright=false,children}) {
  return (
    <div style={{      //白色进度条
      position: 'relative',
      marginLeft:'5.5rem',
      width: isUpright ? '2rem':'42rem',
      height: isUpright? '42rem':'2rem',
      background: 'white',
      display: 'flex',
      flexDirection: isUpright ? 'column-reverse' : 'row',
    }}>
       <div style={{    //粉色进度条
          width: isUpright ? "100%" : `${progress}%`,
          height: isUpright ? `${progress}%` : "100%",
          background: "#F66FCF",
          transition: "3s",
          position: "relative", // ★ 必须加！
        }}
      >
       {/* children 固定在进度条末端 */}
        {isUpright?<div style={{
           backgroundColor:'#000',
            position: "relative",
            display:'flex',
            width:'4.5rem',
            height:'2rem',
            zIndex:'1'
        }}
        ><div
          style={{
            backgroundColor:'#F7FF1A',
            position: "absolute",
            display:'flex',
            top:'-0.3rem',
            width:'4rem',
            fontSize:'1.3rem',
           alignItems:'center', 
           zIndex:'10',
           color:'black'  
          }}
        >
          {children}
        </div></div>:<></>}
        </div>
    </div>

  );
}
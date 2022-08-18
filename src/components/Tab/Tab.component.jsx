const TabComponent=(tabs,onChange)=>{


    return(
        <>
       { tabs.map((e)=><div onClick={onChange}>{e}</div>)}
        </>
        
    )

}


export default TabComponent
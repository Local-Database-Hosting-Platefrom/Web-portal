const ConnectDeveloperAccountToServiceManager=()=>{
    return <div style={{paddingLeft:"2rem",paddingRight:"2rem",paddingTop:"0.5rem"}}>
        <div style={{borderBottom:"1px solid black",fontSize:"1.5rem",padding:"1rem",fontWeight:"bold"}}>
           Connecting Developer Account to a Service Manager Account
        </div>
        <div style={{paddingLeft:"1rem",marginBottom:"5%"}}>
            <div style={{fontSize:"1rem"}}>
                {`For connecting to service manager you need to login your developer account and got Service Manager, you will see a list of service manager `}
            </div>
            <div style={{textAlign:"center"}}>
               <img src="./integration/image5.png" width={"600"}/>
            </div>
            <div style={{fontSize:"1rem",marginTop:"2%"}}>
               {`In case you are already connected to a service manager then you see above. Otherwise you see the following.`}
            </div>
            <div style={{textAlign:"center",marginTop:"2%"}}>
               <img src="./integration/image53.png" width={"600"}/>
            </div>
            <div style={{fontSize:"1rem",marginTop:"2%"}}>
               {`Click the connect button and select the hosts which you want to access.`}
            </div>
            <div style={{textAlign:"center",marginTop:"2%"}}>
               <img src="./integration/image44.png" width={"500"}/>
            </div>
            <div style={{fontSize:"1rem",marginTop:"2%"}}>
               {`And wait for service manager to accept or decline your request. You always can request status.`}
            </div>
            <div style={{textAlign:"center",marginTop:"2%"}}>
               <img src="./integration/image46.png" width={"600"}/>
            </div>
             {/*<div style={{fontSize:"1rem",marginTop:"2%"}}>
               <b> 5 : </b>After that click “Connect  Save” and you will see all other options will be enabled to use.
            </div>
            <div style={{textAlign:"center",marginTop:"2%"}}>
               <img src="./integration/image1.png" width={"600"}/>
            </div> */}
            
        </div>
    </div>
}

export default ConnectDeveloperAccountToServiceManager;
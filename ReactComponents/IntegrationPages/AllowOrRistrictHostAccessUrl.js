const AllowOrRistrictHostAccessUrl=()=>{
    return <div style={{paddingLeft:"2rem",paddingRight:"2rem",paddingTop:"0.5rem"}}>
        <div style={{borderBottom:"1px solid black",fontSize:"1.5rem",padding:"1rem",fontWeight:"bold"}}>
            Allow/Restrict Usage Of Any Hosts
        </div>
        <div style={{paddingLeft:"1rem",marginBottom:"5%"}}>
            <div style={{fontSize:"1rem"}}>
               {`To make hosts visible to any connected developer account, it is necessary to enable the host. For enabling a host account got to Bridge > Local Database Access Urls`}
            </div>
            <div style={{textAlign:"center"}}>
               <img src="./integration/image12.png" width={"600"}/>
            </div>
            <div style={{fontSize:"1rem"}}>
               To enable or disable click the circle and update it.
            </div>
            <div style={{textAlign:"center"}}>
               <img src="./integration/image25.png" width={"600"}/>
            </div>
          
            <div style={{fontSize:"1rem",marginTop:"2%"}}>
            Note : In case it is disabled then no request will be processed for this host.
            </div>
           
            {/* <div style={{fontSize:"1rem",marginTop:"2%"}}>
               <b> 3 : </b>For the first time you will see following screen by default opened
            </div>
            <div style={{textAlign:"center",marginTop:"2%"}}>
               <img src="./integration/image43.png" width={"500"}/>
            </div>
            <div style={{fontSize:"1rem",marginTop:"2%"}}>
               <b> 4 : </b>It is assumed that you already have a running MySQL instance. Provide the all required values and click the test connection
            </div>
            <div style={{textAlign:"center",marginTop:"2%"}}>
               <img src="./integration/image42.png" width={"600"}/>
            </div>
            <div style={{fontSize:"1rem",marginTop:"2%"}}>
               <b> 5 : </b>After that click “Connect  Save” and you will see all other options will be enabled to use.
            </div>
            <div style={{textAlign:"center",marginTop:"2%"}}>
               <img src="./integration/image1.png" width={"600"}/>
            </div> */}
            
        </div>
    </div>
}

export default AllowOrRistrictHostAccessUrl;
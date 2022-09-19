const ViewAndManageHostConnectionRequests=()=>{
    return <div style={{paddingLeft:"2rem",paddingRight:"2rem",paddingTop:"0.5rem"}}>
        <div style={{borderBottom:"1px solid black",fontSize:"1.5rem",padding:"1rem",fontWeight:"bold"}}>
            View/Manage Host Connection Requests
        </div>
        <div style={{paddingLeft:"1rem",marginBottom:"5%"}}>
        <div style={{fontSize:"1rem"}}>
              { `For viewing the list of host connection requests Host > Pending Hosts Requests`}
            </div>
            <div style={{textAlign:"center"}}>
               <img src="./integration/image23.png" width={"600"}/>
            </div>
           
            <div style={{fontSize:"1rem"}}>
             { `For connecting click on circle and click connect button in case you want to connect or click remove permanently button in case you don’t want to connect that host.`}
            </div>
            <div style={{textAlign:"center"}}>
               <img src="./integration/image34.png" width={"600"}/>
            </div>
          
            <div style={{fontSize:"1rem",marginTop:"2%"}}>
               {`For viewing the connected hosts Hosts > Connected Hosts`}
            </div>
            <div style={{textAlign:"center",marginTop:"2%"}}>
               <img src="./integration/image54.png" width={"600"}/>
            </div>
             <div style={{fontSize:"1rem",marginTop:"2%"}}>
               Click on the circle to perform an operation like disconnecting or removing permanently.
            </div>
            <div style={{textAlign:"center",marginTop:"2%"}}>
               <img src="./integration/image6.png" width={"500"}/>
            </div>
           {/* <div style={{fontSize:"1rem",marginTop:"2%"}}>
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

export default ViewAndManageHostConnectionRequests;
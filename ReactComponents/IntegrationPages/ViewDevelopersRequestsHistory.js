const ViewDevelopersRequestsHistory=()=>{
    return <div style={{paddingLeft:"2rem",paddingRight:"2rem",paddingTop:"0.5rem"}}>
        <div style={{borderBottom:"1px solid black",fontSize:"1.5rem",padding:"1rem",fontWeight:"bold"}}>
            View Requests History
        </div>
        <div style={{paddingLeft:"1rem",marginBottom:"5%"}}>
        <div style={{fontSize:"1rem"}}>
              { `To watch the requests history, performed by connected developers, go to Developers > Request History > Resolved`}
            </div>
            <div style={{textAlign:"center"}}>
               <img src="./integration/image56.png" width={"600"}/>
            </div>
           
            <div style={{fontSize:"1rem"}}>
             { `To view complete details of request click on circle and you will be able to see developer name, query, targeted host name and query response`}
            </div>
            <div style={{textAlign:"center"}}>
               <img src="./integration/image40.png" width={"600"}/>
            </div>
          
            <div style={{fontSize:"1rem",marginTop:"2%"}}>
               {`To view denied requests performed by connected developers go to Developers > Requests History > Denied`}
            </div>
            <div style={{textAlign:"center",marginTop:"2%"}}>
               <img src="./integration/image39.png" width={"600"}/>
            </div>
             <div style={{fontSize:"1rem",marginTop:"2%"}}>
               To view the reason for denial and other details click on the circle. Along with other details you can see the reason why request was denied
            </div>
            <div style={{textAlign:"center",marginTop:"2%"}}>
               <img src="./integration/image26.png" width={"500"}/>
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

export default ViewDevelopersRequestsHistory;
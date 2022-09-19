const ViewAndManageDeveloperConnectionRequests=()=>{
    return <div style={{paddingLeft:"2rem",paddingRight:"2rem",paddingTop:"0.5rem"}}>
        <div style={{borderBottom:"1px solid black",fontSize:"1.5rem",padding:"1rem",fontWeight:"bold"}}>
            View/Manage Developer Connection Requests
        </div>
        <div style={{paddingLeft:"1rem",marginBottom:"5%"}}>
        <div style={{fontSize:"1rem"}}>
              { `For viewing developer requests got to Developers > Accounts > Connection Requests`}
            </div>
            <div style={{textAlign:"center"}}>
               <img src="./integration/image31.png" width={"600"}/>
            </div>
           
            <div style={{fontSize:"1rem"}}>
             { `For performing operations like accepting a developer request to decline it click the circle.`}
            </div>
            <div style={{textAlign:"center"}}>
               <img src="./integration/image47.png" width={"600"}/>
            </div>
          
            <div style={{fontSize:"1rem",marginTop:"2%"}}>
               {`Now give an access role and click the accept button. You will see a confirmation message`}
            </div>
            <div style={{textAlign:"center",marginTop:"2%"}}>
               <img src="./integration/image50.png" width={"600"}/>
            </div>
             <div style={{fontSize:"1rem",marginTop:"2%"}}>
               {`For viewing all the developer connections got to Developers > Accounts > All Accounts`}
            </div>
            <div style={{textAlign:"center",marginTop:"2%"}}>
               <img src="./integration/image37.png" width={"500"}/>
            </div>
            <div style={{fontSize:"1rem",marginTop:"2%"}}>
               {`Now for performing actions, like disconnecting or updating access role, click on connected accounts click circle `}
            </div>
            <div style={{textAlign:"center",marginTop:"2%"}}>
               <img src="./integration/image15.png" width={"600"}/>
            </div>
           {/* <div style={{fontSize:"1rem",marginTop:"2%"}}>
               <b> 5 : </b>After that click “Connect  Save” and you will see all other options will be enabled to use.
            </div>
            <div style={{textAlign:"center",marginTop:"2%"}}>
               <img src="./integration/image1.png" width={"600"}/>
            </div> */}
            
        </div>
    </div>
}

export default ViewAndManageDeveloperConnectionRequests;
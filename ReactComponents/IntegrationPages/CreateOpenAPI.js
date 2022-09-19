const CreateOpenAPI=()=>{
    return <div style={{paddingLeft:"2rem",paddingRight:"2rem",paddingTop:"0.5rem"}}>
        <div style={{borderBottom:"1px solid black",fontSize:"1.5rem",padding:"1rem",fontWeight:"bold"}}>
            Creating an Open API
        </div>
        <div style={{paddingLeft:"1rem",marginBottom:"5%"}}>
        <div style={{fontSize:"1rem"}}>
              { `For creating an open API, you need to go to Open APIs > Create Open API`}
            </div>
            <div style={{textAlign:"center"}}>
               <img src="./integration/image33.png" width={"600"}/>
            </div>
           
            <div style={{fontSize:"1rem"}}>
             { `Fill in all the details and hit the test before you create it. `}
            </div>
            <div style={{fontSize:"1rem"}}>
             { `Note in case on clicking the test there is no response message then simply relogin. It is because of your login session is expired `}
            </div>
            <div style={{textAlign:"center"}}>
               <img src="./integration/image4.png" width={"600"}/>
            </div>
          
            <div style={{fontSize:"1rem",marginTop:"2%"}}>
               {`In case the response is successful then click “Click and Save” button it will be stored.`}
            </div>
            <div style={{fontSize:"1rem",marginTop:"2%"}}>
               {`Now to view all open APIs go to Open APIs > View Open APIs`}
            </div>
            <div style={{textAlign:"center",marginTop:"2%"}}>
               <img src="./integration/image14.png" width={"600"}/>
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

export default CreateOpenAPI;
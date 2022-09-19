const UsingHostAccessUrlInReactProject=()=>{
    return <div style={{paddingLeft:"2rem",paddingRight:"2rem",paddingTop:"0.5rem"}}>
        <div style={{borderBottom:"1px solid black",fontSize:"1.5rem",padding:"1rem",fontWeight:"bold"}}>
            Using Host Access Url In React Project (Accessing database)
        </div>
        <div style={{paddingLeft:"1rem",marginBottom:"5%"}}>
            <div style={{fontSize:"1rem"}}>
               For using a host access url in your react project you need to follow the following steps.
            </div>
            <div style={{fontSize:"1rem"}}>
               <b> 1 : </b>Execute “npm install ldh-react” in your project.
            </div>
            <div style={{fontSize:"1rem"}}>
               <b> 2 : </b>{`import {LocalDatabaseHosting} from 'ldh-react'`}
            </div>
            <div style={{fontSize:"1rem"}}>
               <b> 3 : </b>Create a variable const ldh = new LocalDatabaseHosting(accessToken,secretKey);
            </div>
            <div style={{fontSize:"1rem"}}>
               <b> 4 : </b>let response = await ldh.executeMysqlQuery(QUERY,DB_NAME,accessUrl);
            </div>
            <div style={{fontSize:"1rem"}}>
               <b> 5 : </b>And you will get response in response variable. 
            </div>
            <div style={{fontSize:"1rem",marginTop:"2%"}}>
            Here is how it looks in vscode.
            </div>
            <div style={{textAlign:"center"}}>
               <img src="./integration/image57.png" width={"600"}/>
            </div>
            <div style={{fontSize:"1rem",marginTop:"2%"}}>
            For getting secretKey,accessToken and accessUrl got option Access Token

            </div>
            <div style={{textAlign:"center",marginTop:"2%"}}>
               <img src="./integration/image9.png" width={"600"}/>
            </div>
            <div style={{fontSize:"1rem",marginTop:"2%"}}>
            Once you select host, expiry time and click Generate token you get all required values

            </div>
            <div style={{textAlign:"center",marginTop:"2%"}}>
               <img src="./integration/image10.png" width={"400"}/>
            </div>
            {/* <div style={{textAlign:"center",marginTop:"2%"}}>
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

export default UsingHostAccessUrlInReactProject;
import { Edit, Lock } from "@mui/icons-material";
import { Avatar, Container, Divider, Grid } from "@mui/material";
import { useState } from "react";
import Heading from "../../../Support/Heading";
import InputField from "../../../Support/InputFields";

const ManageProfile = ()=>{
    const [isEditingEnabled,setIsEditingEnabled] =useState(false);
    const useData = JSON.parse(localStorage.getItem("loggedInUser"));
    const user = useData.responsePayload;

    return <Container style={{paddingTop: "2%" }}>
        <div>
            <Heading text="Profile" fontSize="1.5rem"/>
            <Divider sx={{width:"10rem"}}/>
        </div>
      
        <div>
        <div onClick={()=>{setIsEditingEnabled(!isEditingEnabled);}} style={{cursor: "pointer",display: "flex",alignItems:"right",justifyContent:"right",width: "80%"}}>
           {!isEditingEnabled ?  <Edit/> : <Lock/> }
        </div>
            <Grid container>
                <Grid item xs={5}></Grid>
                <Grid item xs={2} style={{border: "1px solid #7ea69f",borderRadius:"60%",height:"10rem",display: "flex",alignItems: "center",justifyContent: "center"}}>
                    <img src={"https://lh3.googleusercontent.com/a/AItbvmn-5aTlj4Y4JJiRp2fznk-m_BkdMjgiwECujor9=s96-c"} width={150} height={150}/>
                </Grid>
                <Grid item xs={5}></Grid>
                <Grid item xs={4}></Grid>
                <Grid item xs={4} style={{marginTop:"2%"}}>

                <InputField
                      placeholder={"First Name"}
                      //   value={""}
                      onChange={(e) => {
                        console.log(e.target.value);
                      }}
                      disabled={isEditingEnabled}
                    />
                </Grid>
                <Grid item xs={4}></Grid>
                <Grid item xs={4}></Grid>
                <Grid item xs={4} style={{marginTop:"1%"}}>
                <InputField
                      placeholder={"Last Name"}
                      //   value={""}
                      onChange={(e) => {
                        console.log(e.target.value);
                      }}
                      disabled={isEditingEnabled}
                    />
                </Grid>
                <Grid item xs={4}></Grid>
                <Grid item xs={4}></Grid>
                <Grid item xs={4} style={{marginTop:"1%"}}>
                <InputField
                      placeholder={"Email"}
                      //   value={""}
                      onChange={(e) => {
                        console.log(e.target.value);
                      }}
                      disabled={false}
                    />
                </Grid>
                <Grid item xs={4}></Grid>
                <Grid item xs={4}></Grid>
                <Grid item xs={4} style={{marginTop:"1%"}}>
                <InputField
                      placeholder={"Mobile Number"}
                      //   value={""}
                      onChange={(e) => {
                        console.log(e.target.value);
                      }}
                      disabled={false}
                    />
                </Grid>
                <Grid item xs={4}></Grid>
            
            </Grid>
        </div>
    </Container>
}
export default ManageProfile;
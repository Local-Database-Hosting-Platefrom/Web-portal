import { Container, Divider, Grid } from "@mui/material";
import Heading from "../../Support/Heading"
import { useState } from "react";
import ManageProfile from "./Forms/ManageProfile";
import ResetPassword from "./Forms/ResetPassword";
import ManageCaching from "./Forms/ManageCaching";
import ManageResponsesFormate from "./Forms/ManageResponsesFormate";
import MasterControls from "./Forms/MasterControls";
const Settings = ()=>{
    const [value, setValue] = useState(0);
    const [currentOpenedScreen, setCurrentOpenedScreen]= useState(<ManageProfile/>);
 
    const handleScreenChange=(index)=>{
        switch(index) {
          case 0:
            setCurrentOpenedScreen(<ManageProfile/>)
          break;
          case 1:
            setCurrentOpenedScreen(<ResetPassword/>)
          break;
          case 2:
            setCurrentOpenedScreen(<ManageCaching/>)
          break;
          case 3:
            setCurrentOpenedScreen(<ManageResponsesFormate/>)
          break;
          case 4:
            setCurrentOpenedScreen(<MasterControls/>)
          break;
        }
      }
    return <Container>
        <div>
            <Heading text="Settings" fontSize="2rem" fontWeight="bold"/>
            <Divider/>
        </div>
        <div>
          <Grid container>
          
            <Grid item xs={2} >
              {/* Sub options 1.List of consumer account and 2.Create new user*/}
              <div style={{marginTop:"5%",padding:"5%",borderRight: "1px solid #7ea69f"}}>
                <div style={{margin:"5%",cursor: "pointer"}} onClick={() =>{handleScreenChange(0)}}>
                <Heading text={"Profile"} fontSize="1rem"/>
                </div>
                <Divider/>
                <div style={{margin:"5%",cursor: "pointer"}} onClick={() =>{handleScreenChange(1)}}>
                <Heading text={"Reset Passowrd"} fontSize="1rem"/>
                </div>
                <Divider/>
                {/* <div style={{margin:"5%",cursor: "pointer"}} onClick={() =>{handleScreenChange(2)}}>
                <Heading text={"Manage Connection"} fontSize="1rem"/>
                </div>
                <Divider/>
                <div style={{margin:"5%",cursor: "pointer"}} onClick={() =>{handleScreenChange(3)}}>
                <Heading text={"Manage Responses"} fontSize="1rem"/>
                </div>
                <Divider/> */}
                <div style={{margin:"5%",cursor: "pointer"}} onClick={() =>{handleScreenChange(4)}}>
                <Heading text={"Master Controls"} fontSize="1rem"/>
                </div>
                <Divider/>
              </div>
            </Grid>
            <Grid item xs={10}>
              {/* Screen of sub options or call them forms and lists */}
              {currentOpenedScreen}
            </Grid>
          </Grid>
        </div>
    </Container>
}
export default Settings;
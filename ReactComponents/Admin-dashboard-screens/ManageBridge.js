import { Grid } from "@mui/material";
import Tab_ManageConsumer from "./Tabs/Tab_ManageConsumer";
import Heading from "../../Support/Heading"
import Tab_ManageBridge from "./Tabs/Tab_ManageBridge";
const ManageBridge = ()=>{
    return <div>
        <Grid container>
            <Grid item xs={8} style={{borderBottom:"1px solid #7ea69f",padding:"1%"}}>
                {/* Title */}
                <Heading text={"Manage Bridge"} fontSize={"2rem"} fontWeight="bold"/>
                <Heading text={"Control access and other settings of host access urls and open APIs"} fontSize={"0.8rem"}/>
                
            </Grid>
            <Grid item xs={4} style={{textAlign: "center",borderBottom:"1px solid #7ea69f",borderLeft:"1px solid #7ea69f"}}>
                {/* Icon and detail */}
                <img src={"/sammy-no-connection.gif"} width="120" height="120" />
            </Grid>
            <Grid item xs={12}>
                {/* Tabs */}
                <Tab_ManageBridge/>
            </Grid>
        </Grid>
    </div>
}
export default ManageBridge;
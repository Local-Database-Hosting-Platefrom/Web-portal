import { Grid } from "@mui/material";
import Tab_ManageConsumer from "./Tabs/Tab_ManageConsumer";
import Heading from "../../Support/Heading"
import Tab_ManageHost from "./Tabs/Tab_ManageHost";
const ManageHosts = ()=>{
    return <div>
        <Grid container>
            <Grid item xs={8} style={{borderBottom:"1px solid #7ea69f",padding:"1%"}}>
                {/* Title */}
                <Heading text={"Manage Host"} fontSize={"2rem"} fontWeight="bold"/>
                <Heading text={"Here you can create the host accounts and manage the caching and other settings and view all their requests and other statistics "} fontSize={"0.8rem"}/>
            </Grid>
            <Grid item xs={4} style={{textAlign: "center",borderBottom:"1px solid #7ea69f",borderLeft:"1px solid #7ea69f"}}>
                {/* Icon and detail */}
                <img src={"https://i.postimg.cc/ryfbt3hD/hosts-Icon.png"} width="20%"/>
            </Grid>
            <Grid item xs={12}>
                {/* Tabs */}
                <Tab_ManageHost/>
            </Grid>
        </Grid>
    </div>
}

export default ManageHosts;
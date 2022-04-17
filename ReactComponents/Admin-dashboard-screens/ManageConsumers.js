import { Grid } from "@mui/material";
import Tab_ManageConsumer from "./Tabs/Tab_ManageConsumer";
import Heading from "../../Support/Heading"
const ManageConsumers = ()=>{
    return <div>
        <Grid container>
            <Grid item xs={8} style={{borderBottom:"1px solid #7ea69f",padding:"1%"}}>
                {/* Title */}
                <Heading text={"Manage Consumers"} fontSize={"2rem"} fontWeight="bold"/>
                <Heading text={"Here you can create the consumer accounts and generate tokens for them and view all their requests and other statistics "} fontSize={"0.8rem"}/>
                
            </Grid>
            <Grid item xs={4} style={{textAlign: "center",borderBottom:"1px solid #7ea69f",borderLeft:"1px solid #7ea69f"}}>
                {/* Icon and detail */}
                <img src={"/home-page/manage_connection_icon.png"} />
            </Grid>
            <Grid item xs={12}>
                {/* Tabs */}
                <Tab_ManageConsumer/>
            </Grid>
        </Grid>
    </div>
}
export default ManageConsumers;
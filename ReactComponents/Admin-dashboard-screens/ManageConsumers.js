import { Grid } from "@mui/material";
import Tab_ManageConsumer from "./Tabs/Tab_ManageConsumer";
import Heading from "../../Support/Heading";

const ManageConsumers = ()=>{
    return <div>
        <Grid container>
            <Grid item xs={8} style={{borderBottom:"1px solid #7ea69f",padding:"1%"}}>
                {/* Title */}
                <Heading text={"Manage Developers"} fontSize={"2rem"} fontWeight="bold"/>
                <Heading text={`Manage developer account and new connection requests along with request hist management`} fontSize={"0.8rem"}/>
                
            </Grid>
            <Grid item xs={4} style={{textAlign: "center",borderBottom:"1px solid #7ea69f",borderLeft:"1px solid #7ea69f"}}>
                {/* Icon and detail */}
                <img src={"/developers.png"} width={"120"} height={"120"} />
            </Grid>
            <Grid item xs={12}>
                {/* Tabs */}
                <Tab_ManageConsumer/>
            </Grid>
        </Grid>
    </div>
}
export default ManageConsumers;
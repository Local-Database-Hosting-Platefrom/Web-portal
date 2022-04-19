import { Card, Divider, Grid } from "@mui/material";

const ItemHolder_ConsumerResolvedRequest = ({item})=>{
    return <div>
        <Divider/>
        <Grid container style={{padding:"2%"}}>
            <Grid item xs={2} style={{textAlign: "center" }}>
                {/* Icon */}
                <img src="/home-page/consumerIconForList.png" width="25%"/>
            </Grid>
            <Grid item xs={2} style={{borderRight: "1px solid #7ea69f"}}> 
                {/* Request ID */}
                {`${item.requestId}`}
            </Grid>
            <Grid item xs={3} style={{paddingLeft:"3%",borderRight: "1px solid #7ea69f"}}>
                {/* Consumer Id */}
                {`${item.consumerId}`}
            </Grid>
            <Grid item xs={2} style={{paddingLeft:"2%"}}>
                {/* Consumer Role */}
                {`${item.consumerRole}`}
            </Grid>
            <Grid item xs={2} style={{paddingLeft:"2%"}}>
                {/* Time */}
                {`${item.requestTime}`}
            </Grid>
            
        </Grid>
        <Divider/>
    </div>
}
export default ItemHolder_ConsumerResolvedRequest;
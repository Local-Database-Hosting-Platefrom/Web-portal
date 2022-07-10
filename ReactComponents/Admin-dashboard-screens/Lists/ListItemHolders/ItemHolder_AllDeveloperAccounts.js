import { Card, Divider, Grid } from "@mui/material";

const ItemHolder_AllDeveloperAccounts = ({item})=>{
    return <div>
        <Divider/>
        <Grid container style={{padding:"2%"}}>
            <Grid item xs={2} style={{textAlign: "center" }}>
                {/* Icon */}
                <img src="/home-page/consumerIconForList.png" width="25%"/>
            </Grid>
            <Grid item xs={2} style={{borderRight: "1px solid #7ea69f"}}> 
                {/* Consumer Name */}
                {`${item.consumerName}`}
            </Grid>
            <Grid item xs={3} style={{paddingLeft:"3%",borderRight: "1px solid #7ea69f"}}>
                {/* Consumer Id */}
                {`${item.consumerId}`}
            </Grid>
            <Grid item xs={2} style={{paddingLeft:"2%"}}>
                {/* Consumer Role */}
                {`${item.role}`}
            </Grid>
        </Grid>
        <Divider/>
    </div>
}
export default ItemHolder_AllDeveloperAccounts;
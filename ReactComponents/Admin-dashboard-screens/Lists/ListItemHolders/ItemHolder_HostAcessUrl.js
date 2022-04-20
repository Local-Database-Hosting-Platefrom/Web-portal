import { Card, Divider, FormControlLabel, Grid, Switch } from "@mui/material";
import { ContentCopyOutlined } from "@mui/icons-material";
const ItemHolder_HostAcessUrl = ({item})=>{
    return <div>
        <Divider/>
        <Grid container style={{padding:"2%"}}>
            <Grid item xs={1} style={{textAlign: "left" }}>
                {/* Icon */}
                <img src="/home-page/consumerIconForList.png" width="40%"/>
            </Grid>
            <Grid item xs={2} style={{borderRight: "1px solid #7ea69f"}}> 
                {/* Request ID */}
                {`${item.hostId}`}
            </Grid>
            <Grid item xs={2} style={{paddingLeft: "2%",borderRight: "1px solid #7ea69f"}}>
                {/* Consumer Id */}
                {`${item.hostName}`}
            </Grid>
            <Grid item xs={3} style={{paddingLeft:"2%",borderRight: "1px solid #7ea69f"}}>
                {/* Consumer Role */}
               {`${item.accessUrl}`}
               <div style={{display:"inline-block",float: "right",marginRight:"2%"}}>
                   <ContentCopyOutlined size="small"/>
               </div>
            </Grid>
            <Grid item xs={2} style={{paddingLeft:"2%",borderRight: "1px solid #7ea69f"}}>
                {/* Consumer Role */}
                {`${item.numberofRequests}`}
            </Grid>
            
            <Grid item xs={2} style={{paddingLeft:"2%"}}>
                {/* Time */}
                {/* {`Switch`} */}
                <FormControlLabel
          value="end"
          control={<Switch color="secondary" defaultChecked />}
          label="End"
          labelPlacement="Status"
        />
            </Grid>
            
        </Grid>
        <Divider/>
    </div>
}
export default ItemHolder_HostAcessUrl;
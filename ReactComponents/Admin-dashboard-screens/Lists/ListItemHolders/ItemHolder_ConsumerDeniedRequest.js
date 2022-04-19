import { Card, Divider, Grid } from "@mui/material";
import CustomButton from "../../../../Support/CustomButton";

const ItemHolder_ConsumerDeniedRequest = ({item})=>{
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
            <Grid item xs={1} style={{paddingLeft:"2%"}}>
                {/* Time */}
                <CustomButton
                      style={{
                        // marginLeft:isMediumScreen? "40%":"35%",
                        // marginTop: isMediumScreen? "3%":"3%",
                        // left: isMediumScreen? "10":"",
                        backgroundColor: "#10365B",
                        // fontSize: isMediumScreen? "0.8rem" :"",
                    //    
                      }}
                      onClick={()=>{}}
                      name="Reason"
                    />
                  
            </Grid>
            
        </Grid>
        <Divider/>
    </div>
}
export default ItemHolder_ConsumerDeniedRequest;
import { Card, Divider, FormControlLabel, Grid, Switch } from "@mui/material";
import { ContentCopyOutlined } from "@mui/icons-material";
import { SET_STATUS_OF_HOST_ACCESS_URL } from "../../../../request-manager/requestUrls";
import Heading from "../../../../Support/Heading";
import { useEffect, useState } from "react";
import { sendResquestToCentralAPI } from "../../../../request-manager/requestManager";
import { BACK_END_BASE_URL } from "../../../../request-manager/urls";
const ItemHolder_HostAcessUrl = ({ item,}) => {
  const [hostStatus,setHostStatus]=useState(false)
  const handleHostStatucChange=()=>{

    sendResquestToCentralAPI("POST", SET_STATUS_OF_HOST_ACCESS_URL,{
      hostId:item.hostId,
      status:!hostStatus
      
    }).then(async (success)=>{
      const list = await success.json();
      console.log("host accessUrl",list)
      setHostStatus(!hostStatus)
    },(error)=>{
      console.log("Error",error)
      setHostStatus(hostStatus)
    });
  };

  useEffect(()=>{
    setHostStatus((item.hostAcessUrl!=undefined) ? item.hostAcessUrl.status : false)
  },[item])

  return (
    <div>
      <Divider />
      <Grid container style={{ padding: "2%" }}>
        <Grid item xs={1} style={{ textAlign: "left" }}>
          {/* Icon */}
          <img src="/home-page/consumerIconForList.png" width="40%" />
        </Grid>
        <Grid item xs={2} style={{ borderRight: "1px solid #7ea69f" }}>
          {/* Host ID */}
          {/* {`${item.hostId}`} */}
          <Heading text={item.hostId} fontSize={"0.8rem"}/>
        </Grid>
        <Grid
          item
          xs={2}
          style={{ paddingLeft: "2%", borderRight: "1px solid #7ea69f" }}
        >
          {/* Consumer Id */}
          {/* {`${item.hostName}`} */}
          <Heading text={`${item.hostName}`} fontSize={"0.9rem"}/>
        </Grid>
        <Grid
          item
          xs={3}
          style={{ paddingLeft: "2%", borderRight: "1px solid #7ea69f" }}
        >
          {/* Consumer Role */}
      
          <Heading text={`${BACK_END_BASE_URL}/${(item.hostAcessUrl!=undefined) ? item.hostAcessUrl.url : '' }`} fontSize={"0.7rem"}/>
          <div
            style={{
              display: "inline-block",
              float: "right",
              marginRight: "2%",
            }}
          >
            <ContentCopyOutlined size="small" />
          </div>
        </Grid>
        <Grid
          item
          xs={2}
          style={{ paddingLeft: "2%", borderRight: "1px solid #7ea69f" }}
        >
          {/* Consumer Role */}
          {`${(item.hostAcessUrl!=undefined) ? item.hostAcessUrl.numberOfHits : ''}`}
        </Grid>

        <Grid item xs={2} style={{ paddingLeft: "2%" }}>
          {/* Time */}
          {/* {`Switch`} */}
          <FormControlLabel
            value="end"
            control={<Switch color="secondary"  checked={hostStatus} />}
            onChange={(e)=>{
              handleHostStatucChange();
            }}
            label="Status"
            labelPlacement="Status"
          />
        </Grid>
      </Grid>
      <Divider />
    </div>
  );
};
export default ItemHolder_HostAcessUrl;

import { Grid } from "@mui/material";
import { sendResquestToCentralAPI } from "../../../request-manager/requestManager";
import CustomButton from "../../../Support/CustomButton";
import Heading from "../../../Support/Heading";

export const   OpenApisListItemHolder = ({url}) => {
  const handleTest=()=>{
    if(localStorage.getItem("apiKey")){
        const urlRoute =url.url+localStorage.getItem("apiKey");
        fetch(urlRoute).then((resp)=>{
            return resp.json()
        }).then((data)=>{
            alert(JSON.stringify(data))
        })
    }
    else{
        alert("No APIkey found");
    }
  }
  return (
    <Grid container>
      <Grid item xs={2} style={{ textAlign: "center" }}>
        {url.urlProvider}
      </Grid>
      <Grid item xs={2} style={{ textAlign: "center" }}>
        {url.urlTitle}
      </Grid>
      <Grid item xs={5} style={{ textAlign: "left" }}>
        {/* {url.url} */}
        <Heading text={url.url} fontSize={"0.8rem"} />
      </Grid>
      <Grid item xs={3} style={{ textAlign: "center" }}>
        <CustomButton
          style={{
            // marginLeft:isMediumScreen? "40%":"35%",
            marginTop: "3%",
            // left: isMediumScreen? "10":"",
            backgroundColor: "#10365B",
            fontSize: "0.8rem",
          }}
          onClick={() => {
            handleTest()
          }}
          name="Test"
        />
      </Grid>
    </Grid>
  );
};

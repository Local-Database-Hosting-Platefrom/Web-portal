import { Grid, useMediaQuery } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useEffect, useState } from "react";
import DropDownForSelectingTokenType from "../../../Support/DropDownForSelectingTokenType";
import Heading from "../../../Support/Heading";
import InputField from "../../../Support/InputFields";
import CustomButton from "../../../Support/CustomButton";
import { GENERATE_AND_UPDATE_APIKEY } from "../../../request-manager/requestUrls";
import { sendResquestToCentralAPI } from "../../../request-manager/requestManager";

const useStyles = makeStyles({
  root: {
    marginTop: "4%",
    width: "100%",
    // borderLeft: "1px solid black",
    // height: "100%",
  },
  root_sm:{
    marginTop: "4%",
   
    height: "100%",
  }
});
const GenerateAPIKey = () => {
  const classes = useStyles();
 
  const isMediumScreen = useMediaQuery("(min-width:600px)");
  const [serverResponse,setServerResponse]=useState("");
  const [refresh,setRefresh]=useState(false);
  useEffect(()=>{
    setServerResponse(localStorage.getItem("apiKey")!=undefined ? localStorage.getItem("apiKey") : '')
  },[refresh])
  const handleGenerateKey =()=>{ 
    const useData = JSON.parse(localStorage.getItem("loggedInUser"));
    const email = useData.responsePayload.email; 
    sendResquestToCentralAPI("POST", GENERATE_AND_UPDATE_APIKEY, {
      email
    }).then(
      async (success) => {
        const response = await success.json();
        console.log("api key", response);
        localStorage.setItem("apiKey",response.responsePayload)
        setRefresh(!refresh)
      },
      (error) => {
        console.log("Error", error);
      }
    );
  }
  return (
    <div className={isMediumScreen? classes.root : classes.root_sm}>
        
        
      <div style={{ textAlign: "center", marginTop: "3%" }}>
        
      <div style={{ marginTop: "2%", textAlign: "center" }}>
          <CustomButton
            onClick={()=>{
              let apiKey=localStorage.getItem("apiKey");
              if(apiKey!=undefined || apiKey!=null){
                navigator.clipboard.writeText(apiKey);
                alert("Copied to clipboard")
              }
            }}
            style={{
              // marginTop: isMediumScreen? "3%":"3%",
              backgroundColor: "#10365B",
              // fontSize: isMediumScreen? "0.8rem" :"",
            }}
            name="Copy already stored"
          />
        </div>
        <div style={{ marginTop: "2%", textAlign: "center" }}>
          <CustomButton
            onClick={handleGenerateKey}
            style={{
              // marginTop: isMediumScreen? "3%":"3%",
              backgroundColor: "#10365B",
              // fontSize: isMediumScreen? "0.8rem" :"",
            }}
            name="Generate key"
          />
        </div>
        <div style={{ marginTop: "2%" }}>
          {serverResponse}
        </div>
      </div>
    </div>
  );
};

export default GenerateAPIKey;

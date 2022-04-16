import { Grid, useMediaQuery } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useState } from "react";
import DropDownForSelectingTokenType from "../../Support/DropDownForSelectingTokenType";
import Heading from "../../Support/Heading";
import InputField from "../../Support/InputFields";
import CustomButton from "../../Support/CustomButton";

const useStyles = makeStyles({
  root: {
    marginTop: "4%",
    borderLeft: "1px solid black",
    height: "100%",
  },
  root_sm:{
    marginTop: "4%",
   
    height: "100%",
  }
});
const GetTokenDetails = () => {
  const classes = useStyles();
  const [currentSelectedOption, setCurrentSelectedOption] = useState(
    "Host-url Access Token"
  );
  const isMediumScreen = useMediaQuery("(min-width:600px)");

  const [serverResponse,setServerResponse]=useState("");
  const handleRenewToken =()=>{
    setTimeout(()=>{
      setServerResponse("Verifying token")
    },1000)
    setTimeout(()=>{
      setServerResponse("Verifying consumer id")
    },3000)
    setTimeout(()=>{
      setServerResponse(`{
          Last time reqewed : 24/3/2022 5:33 PM,
          Expire date : 24/3/2022 5:33 PM,
      }`)
    },6000)
    
  }
  return (
    <div className={isMediumScreen? classes.root : classes.root_sm}>
    <Grid container>
        <Grid item md={7} sm={12}>
          <div style={{ marginLeft: isMediumScreen?"1.5rem":"" }}>
            <Heading text={"Get Token Details"} fontSize={isMediumScreen ? "2rem":"1.5rem"}  />
          </div>
        </Grid>
        <Grid item md={5} sm={12}>
          <DropDownForSelectingTokenType
            currentSelectedOption={currentSelectedOption}
            setCurrentSelectedOption={setCurrentSelectedOption}
          />
        </Grid>
      </Grid>
      <div style={{ textAlign: "center", marginTop: "3%" }}>
        <div>
          <InputField placeholder="Token" />
        </div>
        <div style={{ marginTop: "2%" }}>
          <InputField placeholder="Consumer Id" />
        </div>
        <div style={{ marginTop: "2%", textAlign: "center" }}>
          <CustomButton
            onClick={handleRenewToken}
            style={{
              // marginTop: isMediumScreen? "3%":"3%",
              backgroundColor: "#10365B",
              // fontSize: isMediumScreen? "0.8rem" :"",
            }}
            name="Load details"
          />
        </div>
        <div style={{ marginTop: "2%" }}>
          {serverResponse}
        </div>
      </div>
    </div>
  );
};

export default GetTokenDetails;

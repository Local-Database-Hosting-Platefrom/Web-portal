import { Grid } from "@mui/material";
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
});
const RenewTokenForm = () => {
  const classes = useStyles();
  const [currentSelectedOption, setCurrentSelectedOption] = useState(
    "Host-url Access Token"
  );
  const [serverResponse,setServerResponse]=useState("");
  const handleRenewToken =()=>{
    setTimeout(()=>{
      setServerResponse("Verifying token")
    },1000)
    setTimeout(()=>{
      setServerResponse("Verifying consumer id")
    },3000)
    setTimeout(()=>{
      setServerResponse("Request has been sent successfully.!")
    },6000)
    
  }
  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={7}>
          <div style={{ marginLeft: "1.5rem" }}>
            <Heading text={"Rewew Token"} fontSize="2rem" />
          </div>
        </Grid>
        <Grid item xs={5}>
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
            name="Renew"
          />
        </div>
        <div style={{ marginTop: "2%" }}>
          {serverResponse}
        </div>
      </div>
    </div>
  );
};

export default RenewTokenForm;

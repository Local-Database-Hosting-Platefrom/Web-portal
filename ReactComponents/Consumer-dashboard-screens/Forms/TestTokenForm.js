import { Grid, useMediaQuery } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useState } from "react";
import DropDownForSelectingTokenType from "../../../Support/DropDownForSelectingTokenType";
import Heading from "../../../Support/Heading";
import InputField from "../../../Support/InputFields";
import CustomButton from "../../../Support/CustomButton";
import CustomMultilineInputField from "../../../Support/CustomMultilineInputField";

const useStyles = makeStyles({
  root: {
    marginTop: "4%",
    width: "100%",
    // borderLeft: "1px solid black",
    // height: "100%",
  },
  root_sm: {
    marginTop: "4%",
    height: "100%",
  },
  
});
const TestTokenForm = () => {
  const classes = useStyles();
  const [currentSelectedOption, setCurrentSelectedOption] = useState(
    "Host access url"
  );
  const isMediumScreen = useMediaQuery("(min-width:600px)");

  const [serverResponse, setServerResponse] = useState("");
  const [qurey, setQuery] = useState("{}");
  const [showTestResult, setShowTestResult] = useState(false);
  const [queryResponse, setQueryResponse] = useState(
    "{Response,Response,Response,Response,Response,Response,Response,Response,Response,Response,Response,Response,Response,Response,Response,Response,Response,Response,Response,Response,Response,Response,Response,}"
  );
  const handleRenewToken = () => {
   
  };
  return (
    <div className={isMediumScreen? classes.root : classes.root_sm}>
    <Grid container>
        {/* <Grid item md={7} xs={12}>
          <div style={{ marginLeft: isMediumScreen?"1.5rem":""  }}>
            <Heading text={"Test Token"} fontSize={isMediumScreen ? "2rem":"1.5rem"}/>
          </div>
        </Grid> */}
        <Grid item md={12} xs={12}>
        <div style={{ position: "relative" }}>
            <div style={{ position: "absolute", right: "10%" }}>
              <DropDownForSelectingTokenType
                currentSelectedOption={currentSelectedOption}
                setCurrentSelectedOption={setCurrentSelectedOption}
              />
            </div>
          </div>
        </Grid>
      </Grid>
      <div style={{ textAlign: "center", marginTop: "3%" }}>
        
        {currentSelectedOption == "Host access url" && (
          <div style={{ marginTop: "5%" }}>
            <CustomMultilineInputField
              rows={4}
              value={qurey}
              handleChange={(e) => {
                setQuery(e.target.value);
              }}
              label="Qurey"
            />
          </div>

        )}
       
        <div style={{ marginTop: "2%", textAlign: "center" }}>
          <CustomButton
            // onClick={handleRenewToken}
            style={{
              // marginTop: isMediumScreen? "3%":"3%",
              backgroundColor: "#10365B",
              // fontSize: isMediumScreen? "0.8rem" :"",
            }}
            name="Test"
          />
        </div>
       
    </div>
    </div>
  );
};

export default TestTokenForm;

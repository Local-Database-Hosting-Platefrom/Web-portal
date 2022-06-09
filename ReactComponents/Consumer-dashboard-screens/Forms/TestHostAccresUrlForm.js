import { Grid, useMediaQuery } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useState } from "react";
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
const TestHostAccresUrlForm = () => {
  const classes = useStyles();
  const [currentSelectedOption, setCurrentSelectedOption] = useState(
    "Host-url Access Token"
  );
  const isMediumScreen = useMediaQuery("(min-width:600px)");

  const [serverResponse, setServerResponse] = useState("");
  const [qurey, setQuery] = useState("{}");
  const [showTestResult, setShowTestResult] = useState(false);
  const [queryResponse, setQueryResponse] = useState(
    "{Response,Response,Response,Response,Response,Response,Response,Response,Response,Response,Response,Response,Response,Response,Response,Response,Response,Response,Response,Response,Response,Response,Response,}"
  );
  const handleRenewToken = () => {
    setShowTestResult(false);
    setTimeout(() => {
      setServerResponse("Verifying token");
    }, 1000);
    setTimeout(() => {
      setServerResponse("Verifying consumer id");
    }, 3000);
    setTimeout(() => {
      setServerResponse("Request has been sent successfully.!");
    }, 6000);

    setTimeout(() => {
      setShowTestResult(true);
    }, 6000);
  };
  return (
    <div className={isMediumScreen? classes.root : classes.root_sm}>
    <Grid container>
        {/* <Grid item md={7} xs={12}>
          <div style={{ marginLeft: isMediumScreen?"1.5rem":""  }}>
            <Heading text={"Test Host Access Url"} fontSize={isMediumScreen ? "2rem":"1.5rem"}/>
          </div>
        </Grid> */}
        {/* <Grid item md={5} xs={12}>
          <DropDownForSelectingTokenType
            currentSelectedOption={currentSelectedOption}
            setCurrentSelectedOption={setCurrentSelectedOption}
          />
        </Grid> */}
      </Grid>
      <div style={{ textAlign: "center", marginTop: "3%" }}>
        <div>
          <InputField placeholder="Token" />
        </div>
        <div style={{ marginTop: "2%" }}>
          <InputField placeholder="Consumer Id" />
        </div>
        <div style={{ marginTop: "2%" }}>
          <InputField placeholder="Url" />
        </div>
        {currentSelectedOption == "Host-url Access Token" && (
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
            onClick={handleRenewToken}
            style={{
              // marginTop: isMediumScreen? "3%":"3%",
              backgroundColor: "#10365B",
              // fontSize: isMediumScreen? "0.8rem" :"",
            }}
            name="Start "
          />
        </div>
        <div style={{ marginTop: "2%" }}>{serverResponse}</div>
     
        {showTestResult && (
          <div style={{ marginTop: "5%", textAlign: "center" }}>
            <CustomMultilineInputField
              rows={5}
              value={queryResponse}
              handleChange={(e) => {
                setQueryResponse(e.target.value);
              }}
              label="Result"
            />
          </div>
        )}
    </div>
    </div>
  );
};

export default TestHostAccresUrlForm;

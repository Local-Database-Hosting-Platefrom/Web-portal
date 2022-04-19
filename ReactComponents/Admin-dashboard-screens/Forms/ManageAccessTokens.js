import { ContentCopyOutlined } from "@mui/icons-material";
import { Container, Grid } from "@mui/material";
import { useState } from "react";
import CustomButton from "../../../Support/CustomButton";
import CustomDropDown from "../../../Support/CustomDropDown";

const ManageAccessTokens = () => {
  const [selectedConsumer, setSelectedConsumer] = useState("");
  const [listOfOptions_Consumers, setListOfOptions_Consumers] = useState([
    {
      optionTitle: "Zee",
      optionValue: "Zee",
    },
    {
      optionTitle: "Shan",
      optionValue: "Shan",
    },
    {
      optionTitle: "Ahmd",
      optionValue: "Ahmd",
    },
    {
      optionTitle: "Ali",
      optionValue: "Ali",
    },
  ]);
  const [selectedValidationTime, setSelectedValidationTime] = useState("");
  const [listOfOptions_ValidationTime] = useState([
    {
      optionTitle: "1 hour",
      optionValue: "1 hour",
    },
    {
      optionTitle: "1 day",
      optionValue: "1 day",
    },
    {
      optionTitle: "1 week",
      optionValue: "1 week",
    },
    {
      optionTitle: "1 month",
      optionValue: "1 month",
    },
    {
      optionTitle: "1 year",
      optionValue: "1 year",
    },
    {
      optionTitle: "Life time",
      optionValue: "Life time",
    },
  ]);
  const [selecteEndPoint, setSelectedEndPoint] = useState("");
  const [listOfOptions_EndPoints, setListOfOptions_EndPoints] = useState([
    {
      optionTitle: "https://<our-domain>/<endpoint-address>",
      optionValue: "32",
    },
    {
      optionTitle: "https://<our-domain>/<endpoint-address>",
      optionValue: "32",
    },
    {
      optionTitle: "https://<our-domain>/<endpoint-address>",
      optionValue: "32",
    },
  ]);

  const [isTokenGenerated, setIsTokenGenerated] = useState(false);
  const [generatedConsumerToken, setGeneratedConsumerToken] = useState("");

  return (
    <div>
      <Container>
        <Grid container>
          <Grid item xs={4}></Grid>
          <Grid item xs={4}>
            <div style={{ width: "100%" }}>
              {/* Select user */}
              <CustomDropDown
                currentSelectedOption={selectedConsumer}
                setCurrentSelectedOption={setSelectedConsumer}
                label="Select Consumer"
                listOfOptions={listOfOptions_Consumers}
              />
            </div>
            <div style={{ width: "100%", marginTop: "5%" }}>
              {/* Select user */}
              <CustomDropDown
                currentSelectedOption={selectedValidationTime}
                setCurrentSelectedOption={setSelectedValidationTime}
                label="Select Validation time"
                listOfOptions={listOfOptions_ValidationTime}
              />
            </div>
            <div style={{ width: "100%", marginTop: "5%" }}>
              {/* Select user */}
              <CustomDropDown
                currentSelectedOption={selecteEndPoint}
                setCurrentSelectedOption={setSelectedEndPoint}
                label="Select End point"
                listOfOptions={listOfOptions_EndPoints}
              />
            </div>
            <div
              style={{ width: "100%", textAlign: "center", marginTop: "5%" }}
            >
              <CustomButton
                style={{
                  // marginLeft:isMediumScreen? "40%":"35%",
                  // marginTop: isMediumScreen? "3%":"3%",
                  // left: isMediumScreen? "10":"",
                  backgroundColor: "#10365B",
                  // fontSize: isMediumScreen? "0.8rem" :"",
                }}
                onClick={() => {
                  setIsTokenGenerated(true);
                  setGeneratedConsumerToken("7654334");
                }}
                name="Generate"
              />
            </div>
          </Grid>
          <Grid item xs={4}></Grid>
          <Grid item xs={4}></Grid>
          <Grid item xs={4}>
            {isTokenGenerated && (
              <div style={{ marginTop: "5%" }}>
                <Grid container>
                  <Grid item xs={3} style={{ textAlign: "center" }}>
                    {/* Id */}
                    {`Token`}
                  </Grid>

                  <Grid item xs={3} style={{ textAlign: "center" }}>
                    {/* Id */}
                    {generatedConsumerToken}
                  </Grid>
                  <Grid item xs={3} style={{ textAlign: "center" }}>
                    {/* Copy button */}
                    <ContentCopyOutlined
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        alert("Copied");
                      }}
                    />
                  </Grid>
                  <Grid item xs={3} style={{ textAlign: "center" }}>
                    <CustomButton
                      style={{
                        // marginLeft:isMediumScreen? "40%":"35%",
                        // marginTop: isMediumScreen? "3%":"3%",
                        // left: isMediumScreen? "10":"",
                        backgroundColor: "#10365B",
                        // fontSize: isMediumScreen? "0.8rem" :"",
                      }}
                      onClick={() => {}}
                      name="Save"
                    />
                  </Grid>
                </Grid>
              </div>
            )}
          </Grid>
          <Grid item xs={4}>
            <div>
              <CustomButton
                style={{
                  // marginLeft:isMediumScreen? "40%":"35%",
                  // marginTop: isMediumScreen? "3%":"3%",
                  // left: isMediumScreen? "10":"",
                  backgroundColor: "#10365B",
                  // fontSize: isMediumScreen? "0.8rem" :"",
                }}
                onClick={() => {}}
                name="How to use?"
              />
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};
export default ManageAccessTokens;

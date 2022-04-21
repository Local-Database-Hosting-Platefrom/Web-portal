import { Container, Grid } from "@mui/material";
import Heading from "../../../Support/Heading";
import InputField from "../../../Support/InputFields";

import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import CustomButton from "../../../Support/CustomButton";
import { ContentCopyOutlined } from "@mui/icons-material";
import { useState } from "react";

const CreateHostAccount = () => {
  const [isIdGenerated, setIdGenerated] = useState(false);
  return (
    <Container>
      <div>
        <Heading text={"Create host account"} fontSize="1.5rem" />
        <Grid container>
          <Grid item xs={4}></Grid>
          <Grid item xs={4}>
            <InputField
              placeholder={"Host Name"}
              //   value={""}
              onChange={(e) => {
                console.log(e.target.value);
              }}
            />
          </Grid>
          <Grid item xs={4}></Grid>

          <Grid item xs={4}></Grid>

          <Grid item xs={4} style={{ marginLeft: "2%" }}>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox color="success" defaultChecked />}
                label="Allow request cache"
              />
              <FormControlLabel
                control={<Checkbox color="success" defaultChecked />}
                label="Allow log maintainance"
              />
            </FormGroup>
          </Grid>

          <Grid item xs={4}></Grid>

          <Grid item xs={4} style={{ textAlign: "center", marginTop: "2%" }}>
            <CustomButton
              style={{
                // marginLeft:isMediumScreen? "40%":"35%",
                // marginTop: isMediumScreen? "3%":"3%",
                // left: isMediumScreen? "10":"",
                backgroundColor: "#10365B",
                // fontSize: isMediumScreen? "0.8rem" :"",
              }}
              onClick={() => {
                setIdGenerated(true);
              }}
              name="Create"
            />
          </Grid>
          <Grid item xs={4}></Grid>

          <Grid item xs={4}></Grid>
          <Grid item xs={4}>
            {isIdGenerated && (
              <div>
                <Grid container style={{ marginTop: "5%" }}>
                  <Grid item xs={4} style={{ textAlign: "center" }}>
                    {`ID:`}
                  </Grid>
                  <Grid item xs={4} style={{ textAlign: "center" }}>
                    {`49309rjf`}
                  </Grid>
                  <Grid item xs={4} style={{ textAlign: "center" }}>
                    <ContentCopyOutlined
                      style={{ cursor: "pointer" }}
                      onClick={(e) => {
                        alert("Copied");
                      }}
                    />
                  </Grid>
                </Grid>
              </div>
            )}
          </Grid>
          <Grid item xs={4}></Grid>
        </Grid>
      </div>
    </Container>
  );
};
export default CreateHostAccount;

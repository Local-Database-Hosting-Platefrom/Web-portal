import {
  Container,
  Divider,
  FormControlLabel,
  Grid,
  Switch,
} from "@mui/material";
import Heading from "../../../Support/Heading";

const MasterControls = () => {
  return (
    <Container style={{ paddingTop: "2%" }}>
      <div style={{backgroundColor:"red",paddingLeft: "1%"}}>
        <Heading text="Master Controls" fontSize="1.5rem" />
        <Divider />
      </div>
      <div style={{ marginTop: "2%" }}>
        <Grid container >
         
          <Grid
            item
            xs={3}
            style={{
              border: "1px solid #7ea69f",
              padding: "2%",
              textAlign: "center",
              marginLeft: "1%"
            }}
          >
            <Heading
              text="Terminate All Host Access Urls"
              fontSize="1rem"
            ></Heading>
            <Divider />
            <div>
              <FormControlLabel
                value="end"
                control={<Switch color="secondary" defaultChecked />}
                // label="Status"
                // labelPlacement="Status"
              />
            </div>
          </Grid>
          <Grid item xs={1}></Grid>

          <Grid
            item
            xs={3}
            style={{
              border: "1px solid #7ea69f",
              padding: "2%",
              textAlign: "center",
              paddingLeft: "1%"
            }}
          >
            <Heading
              text="Terminate All Remote database Access Urls"
              fontSize="1rem"
            ></Heading>
            <Divider />
            <div>
              <FormControlLabel
                value="end"
                control={<Switch color="secondary" defaultChecked />}
                // label="Status"
                // labelPlacement="Status"
              />
            </div>
          </Grid>

          <Grid item xs={1}></Grid>
          <Grid
            item
            xs={3}
            style={{
              border: "1px solid #7ea69f",
              padding: "2%",
              textAlign: "center",
              paddingLeft: "1%"
            }}
          >
            <Heading
              text="Desolve All consumer tokens"
              fontSize="1rem"
            ></Heading>
            <Divider />
            <div>
              <FormControlLabel
                value="end"
                control={<Switch color="secondary" defaultChecked />}
                // label="Status"
                // labelPlacement="Status"
              />
            </div>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
};
export default MasterControls;

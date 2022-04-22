import { Container, Grid } from "@mui/material";
import Heading from "../../Support/Heading";
import States from "./Cards/States";
const Statistics = () => {
  return (
    <Container>
      <div>
        <Heading text={"Overview"} fontSize="2rem" fontWeight="bold" />
      </div>
      <div style={{paddingLeft:"5%"}}>
        <Grid container style={{marginTop:"2%"}}>
          <Grid item xs={3}>
            <States  title="Total Consumers" value="12"/>
          </Grid>
          <Grid item xs={1}></Grid>
          <Grid item xs={3}>
            <States  title="Total Hosts" value="3"/>
          </Grid>
          <Grid item xs={1}></Grid>
          <Grid item xs={3}>
            <States  title="Remote End-points" value="12"/>
          </Grid>
          <Grid item xs={1}></Grid>
          <Grid item xs={3} style={{marginTop:"2%"}}>
            <States  title="Entertained requests" value="12"/>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
};
export default Statistics;

import { Container, Grid } from "@mui/material";
import Heading from "../../Support/Heading";
import States from "./Cards/States";
const StatisticsScreen = () => {
  return (
    <Container>
      <div>
        <Heading text={"Overview"} fontSize="2rem" fontWeight="bold" />
      </div>
      <div style={{paddingLeft:"5%"}}>
        <Grid container style={{marginTop:"2%"}}>
          <Grid item xs={3}>
            <States  title="API Hists" value="12"/>
          </Grid>
          <Grid item xs={1}></Grid>
          <Grid item xs={3}>
            <States  title="Alowed H-Access-Urls" value="3"/>
          </Grid>
          <Grid item xs={1}></Grid>
          <Grid item xs={3}>
            <States  title="Alowed R-Access-Urls" value="12"/>
          </Grid> 
          <Grid item xs={2}></Grid>
          <Grid item xs={3} style={{marginTop:"2%"}}>
            <States  title="Denied requests" value="12"/>
          </Grid>
          <Grid item xs={1}></Grid>
          <Grid item xs={3} style={{marginTop:"2%"}}>
            <States  title="Under Process requests" value="12"/>
          </Grid>
         
        </Grid>
      </div>
    </Container>
  );
};
export default StatisticsScreen;

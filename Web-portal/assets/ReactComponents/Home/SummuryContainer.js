import {
  Card,
  CardContent,
  Container,
  Grid,
  useMediaQuery,
} from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {},
  summury_container: {
    marginTop: "4%",
  },
  summury_card: {
    textAlign: "center",
  },
});

const SummuryContainer = () => {
  const classes = useStyles();
  const isMediumScreen = useMediaQuery("(min-width:600px)");
  return (
    <Container>
      {/* <Card>
            <CardContent> */}
      <Grid container className={classes.summury_container}>
        <Grid item xs={4} className={classes.summury_card}>
          <div>60000</div>
          <div>Consumers</div>
        </Grid>
        <Grid item xs={4} className={classes.summury_card}>
           <div>20000</div>
          <div>Hosts</div>
        </Grid>
        <Grid item xs={4} className={classes.summury_card}>
        <div>3000000</div>
          <div>Requests</div>
        </Grid>
       
      </Grid>
      {/* </CardContent>
        </Card> */}
    </Container>
  );
};

export default SummuryContainer;

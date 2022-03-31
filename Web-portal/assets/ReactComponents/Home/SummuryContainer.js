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
  summury_container_md: {
    marginTop: -50,
  },
  summury_container_xs: {
    marginTop: 0,
  },

  summury_card: {
    textAlign: "center",
  },
  summury_card_title_md: {
    fontFamily: "Fira Sans",
    // fontWeight:'bold',
    // fontSize:"1.5rem"
  },
  summury_card_title_xs: {
    fontFamily: "Fira Sans",
  },
  summury_card_number_md: {
    fontFamily: "Fira Sans",
    fontWeight: "bold",
    fontSize: "1rem",
  },
  summury_card_number_xs: {
    fontFamily: "Fira Sans",
  },
});

const SummuryContainer = () => {
  const classes = useStyles();
  const isMediumScreen = useMediaQuery("(min-width:600px)");
  return (
    // <Container>
    //   {/* <Card>
    // <CardContent> */}
    <Grid container className={isMediumScreen ? classes.summury_container_md : classes.summury_container_xs}>
      <Grid item md={1} xs={0}></Grid>
      <Grid item md={3} xs={6} className={classes.summury_card}>
        <img src="/consumer.png" width={isMediumScreen?"30%":"30%"}  />
        <div
          className={
            isMediumScreen
              ? classes.summury_card_title_md
              : classes.summury_card_title_xs
          }
        >
          Consumers
        </div>
        <div
          className={
            isMediumScreen
              ? classes.summury_card_number_md
              : classes.summury_card_number_xs
          }
        >
          {" "}
          90099
        </div>
      </Grid>
      <Grid item md={4} xs={6} className={classes.summury_card}>
        <img src="/hosts.png"  width={isMediumScreen?"25%":"30%"}  />
        <div
          className={
            isMediumScreen
              ? classes.summury_card_title_md
              : classes.summury_card_title_xs
          }
        >
          Hosts
        </div>
        <div
          className={
            isMediumScreen
              ? classes.summury_card_number_md
              : classes.summury_card_number_xs
          }
        >
          {" "}
          8021
        </div>
      </Grid>
      <Grid item md={3} xs={12} className={classes.summury_card}>
        <img src="/requests.png" width={isMediumScreen?"35%":"30%"} />
        <div
          className={
            isMediumScreen
              ? classes.summury_card_title_md
              : classes.summury_card_title_xs
          }
        >
          Requests
        </div>
        <div
          className={
            isMediumScreen
              ? classes.summury_card_number_md
              : classes.summury_card_number_xs
          }
        >
         
          85903
        </div>
      </Grid>
      <Grid item md={1}></Grid>
    </Grid>
    //   {/* </CardContent>
    //     </Card> */}
    // </Container>
  );
};

export default SummuryContainer;

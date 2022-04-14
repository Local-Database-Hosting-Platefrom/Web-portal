import {
    Box,
    Card,
    CardContent,
    Container,
    Grid,
    useMediaQuery,
  } from "@mui/material";
  import { makeStyles } from "@mui/styles";
  
  const useStyles = makeStyles({
    root: {marginTop:"10%"},
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
  
const ServiceSummury=()=>{
    const classes = useStyles();
    const isMediumScreen = useMediaQuery("(min-width:600px)");
    return (
     
      <Grid container className={isMediumScreen ? classes.summury_container_md : classes.summury_container_xs}>
        <Grid item md={1} xs={0}></Grid>
        <Grid item md={3} xs={6} className={classes.summury_card}>
          <img src="/home-page/consumerIcon.png" width={isMediumScreen?"30%":"30%"}  />
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
        <Grid item md={3} xs={6} className={classes.summury_card}>
          <img src="/home-page/hostsIcon.png"  width={isMediumScreen?"30%":"30%"}  />
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
        <Grid item md={3} xs={4} className={classes.summury_card}>
        <Box sx={{display:{xs:"none",md:"block"}}}>
          <img src="/home-page/requestsIcon.png" width={isMediumScreen?"35%":"30%"} />
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
          </Box>
        </Grid>
        <Grid item md={1} xs={0}></Grid>
       
        <Grid item md={0} xs={12}  className={classes.summury_card}>
          <Box sx={{display:{xs:"block",md:"none"}}}>
          <img src="/home-page/requestsIcon.png" width={isMediumScreen?"35%":"15%"} />
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
          </Box>
        </Grid>
        
      </Grid>
 
    );
}
export default ServiceSummury;
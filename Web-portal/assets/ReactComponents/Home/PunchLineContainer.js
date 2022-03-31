import { Button, useMediaQuery } from "@mui/material";
import { Typography } from "@mui/material";
import { Grid } from "@mui/material";
import MainScreen from "../../public/MainScreen.png";
import LOGO1 from "../../public/LOGO1.png";
import { Box } from "@mui/system";
import { makeStyles } from "@mui/styles";
import SummuryContainer from "./SummuryContainer";

const useStyles = makeStyles({
  root: {
    width: "100%",
    marginTop: "6%",
  },

  // Text headings
  txt_heading_1_md: {
    marginTop: "3rem",
    fontWeight: "bold",
    letterSpacing: "0.3rem",
    color: "#07456A",
    fontSize: "3.5rem",
    fontFamily: "Fira Sans",
  },
  txt_heading_1_xs: {
    marginTop: "3rem",
    fontWeight: "bold",
    fontSize: "3rem",
    width: "90%",
    color: "#07456A",
    marginLeft: "5%",
    fontSize: "3.5rem",
    fontFamily: "Fira Sans",
  },
  txt_feature_heading_2_md: {
    fontSize: "1.3rem",
    fontWeight: "bold",
    fontFamily: "Fira Sans",
    marginLeft: "0.5rem",
  },
  txt_feature_heading_2_xs: {
    fontSize: "1.3rem",
    fontWeight: "bold",
    marginLeft: "0.5rem",
    fontFamily: "Fira Sans",
  },
  txt_feature_details_heading_3_md: {
    fontSize: "0.8rem",

    fontFamily: "Fira Sans",
    marginLeft: "0.5rem",
  },
  txt_feature_details_heading_3_xs: {
    fontSize: "0.8rem",

    marginLeft: "0.5rem",
    fontFamily: "Fira Sans",
  },

  // Buttons containers.
  get_starting_btn_constainer_md: {
    marginTop: "10%",
  },
  get_starting_btn_constainer_xs: {
    marginTop: "5%",
    textAlign: "center",
  },

  // Buttons
  get_host_application_md: {},
  get_host_application_xs: {
    marginTop: "5%",
  },
});

const PunchLineContainer = () => {
  const classes = useStyles();
  const isMediumScreen = useMediaQuery("(min-width:600px)");
  console.log(isMediumScreen);
  return (
    <div className={classes.root}>
      {/* <Box sx={{ display: { xs: "none", md: "flex" } }}> */}
      <Grid container>
        <Grid item md={1} xs={0}></Grid>
        <Grid item md={5} xs={11}>
          <div
            className={
              isMediumScreen
                ? classes.txt_heading_1_md
                : classes.txt_heading_1_xs
            }
          >
            Host Local Database
          </div>

          {/* This image will be visible only when its mobile screen */}

          <Box sx={{ display: { xs: "block", md: "none" } }}>
            <img src="/MainScreen2.png" width="350hv" height="400hv" />
             <SummuryContainer/>
          </Box>
          <div
            style={{
              marginTop: "5%",
              fontWeight: "",
              fontSize: "1rem",
              width: "90%",
            }}
          >
            <Grid container>
              <Grid item xs={2} style={{ textAlign: "right" }}>
                <img src="/connectbtn.png" width="50%" height="70%" />
               
              </Grid>
              <Grid item xs={10} style={{ backgroundColor: "" }}>
                <div
                  className={
                    isMediumScreen
                      ? classes.txt_feature_heading_2_md
                      : classes.txt_feature_heading_2_xs
                  }
                 
                >
                  Connect
                </div>
                <div
                  className={
                    isMediumScreen
                      ? classes.txt_feature_details_heading_3_md
                      : classes.txt_feature_details_heading_3_xs
                  }
                 
                >
                  Connect your local database with us and share your database
                  with team
                </div>
              </Grid>
            </Grid>

            <Grid container style={{ marginTop: "2%" }}>
              <Grid item xs={2} style={{ textAlign: "right" }}>
                <img src="/manage_connection.png" width="50%" height="70%" />
              </Grid>
              <Grid item xs={10} style={{ backgroundColor: "" }}>
                <div
                  className={
                    isMediumScreen
                      ? classes.txt_feature_heading_2_md
                      : classes.txt_feature_heading_2_xs
                  }
                >
                  Manage
                </div>
                <div
                  className={
                    isMediumScreen
                      ? classes.txt_feature_details_heading_3_md
                      : classes.txt_feature_details_heading_3_xs
                  }
                >
                  Manage,control and analyze your sahred databases.
                </div>
              </Grid>
            </Grid>
            <Grid container style={{ marginTop: "3%" }}>
              <Grid item xs={2} style={{ textAlign: "right" }}>
                <img src="/npm.png" width="50%" height="70%" />
              </Grid>
              <Grid item xs={10} style={{ backgroundColor: "" }}>
                <div
                  className={
                    isMediumScreen
                      ? classes.txt_feature_heading_2_md
                      : classes.txt_feature_heading_2_xs
                  }
                >
                  Consume
                </div>
                <div
                  className={
                    isMediumScreen
                      ? classes.txt_feature_details_heading_3_md
                      : classes.txt_feature_details_heading_3_xs
                  }
                >
                  Consume shared databases within application based on
                  React,Next-js,Electron JS, and any framework based on
                  Javascript and using NPM
                </div>
              </Grid>
            </Grid>
          </div>

          {/* Buttons */}
          <Grid
            container
            className={
              isMediumScreen
                ? classes.get_starting_btn_constainer_md
                : classes.get_starting_btn_constainer_xs
            }
          >
            <Grid item md={1} xs={0}></Grid>
            <Grid item md={5} xs={12}>
              <Button
                variant="outlined"
                style={{ backgroundColor: "#169CD8", color: "white" }}
              >
                Start Managing
              </Button>
            </Grid>
            <Grid
              item
              md={5}
              xs={12}
              className={
                isMediumScreen
                  ? classes.get_host_application_md
                  : classes.get_host_application_xs
              }
            >
              <Button
                variant="outlined"
                style={{ backgroundColor: "#10365B", color: "white" }}
              >
                Get Host Application
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={6} xs={0}>
          <Box sx={{ display: { xs: "none", md: "block" } }}>
            <img src="/MainScreen2.png" width="90%"  />
            <SummuryContainer/>
          </Box>
        </Grid>
      </Grid>
      {/* </Box> */}
    </div>
  );
};
export default PunchLineContainer;

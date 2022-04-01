import {
  Email,
  EmailRounded,
  FacebookRounded,
  GitHub,
  Twitter,
} from "@mui/icons-material";
import { Button, Container, Grid, useMediaQuery } from "@mui/material";
import { makeStyles } from "@mui/styles";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";
const useStyles = makeStyles({
  root: {
    backgroundColor: "#343434",
  
    marginTop: "10%",
  },
  txt_cat_title_md: {
    color: "white",
    fontWeight: "bold",
    fontSize: "1rem",
  },
  txt_cat_title_xs: {
    color: "white",
    fontWeight: "bold",
    fontSize: "1rem",
  },
  txt_cat_detail_md: {
      color:"white",
      fontSize:"0.8rem",
      marginTop:'3%'
  },
  txt_cat_detail_xs: {
      color:"white"
  },

  txt_connect_with_us_md: {
    color: "white",
  },
  txt_connect_with_us_xs: {
    color: "white",
  },
});
const Footer = () => {
  const classes = useStyles();
  const isMediumScreen = useMediaQuery("(min-width:600px)");

  return (
    <div className={classes.root}>
      <Container>
        <Grid container style={{ paddingTop: "5%" }}>
            <Grid item md={1} xs={12}>  <ConnectWithoutContactIcon
            fontSize="large"
            sx={{ fontSize: 40 }}
            style={{ color: "white" }}
          />
          <div style={{color:"white",fontSize:"1rem",fontWeight:"bold",letterSpacing:"1rem"}}>LDH</div>
          </Grid>
          <Grid item md={2} xs={6} style={{padding:"2%"}}>
            <div
              className={
                isMediumScreen
                  ? classes.txt_cat_title_md
                  : classes.txt_cat_title_xs
              }
            >
              Services
            </div>
            <div className={isMediumScreen?classes.txt_cat_detail_md:classes.txt_cat_detail_xs}>
                Remote qurey execution
            </div>
            <div className={isMediumScreen?classes.txt_cat_detail_md:classes.txt_cat_detail_xs}>
                Remote mysql database access
            </div>
      
            <div className={isMediumScreen?classes.txt_cat_detail_md:classes.txt_cat_detail_xs}>
                Request cache 
            </div>
            
          </Grid>

          <Grid item md={2} xs={6} style={{padding:"2%"}}>
            <div
              className={
                isMediumScreen
                  ? classes.txt_cat_title_md
                  : classes.txt_cat_title_xs
              }
            >
              Learn
            </div>
            <div className={isMediumScreen?classes.txt_cat_detail_md:classes.txt_cat_detail_xs}>
                Request cache 
            </div>
            <div className={isMediumScreen?classes.txt_cat_detail_md:classes.txt_cat_detail_xs}>
                How to renew access token token
            </div>
            <div className={isMediumScreen?classes.txt_cat_detail_md:classes.txt_cat_detail_xs}>
                How to view details of access token
            </div>
          </Grid>
          <Grid item md={2} xs={6} style={{padding:"2%"}}>
            <div
              className={
                isMediumScreen
                  ? classes.txt_cat_title_md
                  : classes.txt_cat_title_xs
              }
            >
              Code
            </div>
            <div className={isMediumScreen?classes.txt_cat_detail_md:classes.txt_cat_detail_xs}>
                create  table using host access url
            </div>
            
            <div className={isMediumScreen?classes.txt_cat_detail_md:classes.txt_cat_detail_xs}>
                Fetch data using host access url
            </div>
            <div className={isMediumScreen?classes.txt_cat_detail_md:classes.txt_cat_detail_xs}>
                send data using host access url
            </div>
            <div className={isMediumScreen?classes.txt_cat_detail_md:classes.txt_cat_detail_xs}>
                update data using host access url
            </div>

          </Grid>
          <Grid item md={2} xs={6} style={{padding:"2%"}}>
            <div
              className={
                isMediumScreen
                  ? classes.txt_cat_title_md
                  : classes.txt_cat_title_xs
              }
            >
             Integration Support
            </div>
            <div className={isMediumScreen?classes.txt_cat_detail_md:classes.txt_cat_detail_xs}>
               React Js
            </div>
            <div className={isMediumScreen?classes.txt_cat_detail_md:classes.txt_cat_detail_xs}>
               Electron Js
            </div>
            <div className={isMediumScreen?classes.txt_cat_detail_md:classes.txt_cat_detail_xs}>
               React Native
            </div>
            <div className={isMediumScreen?classes.txt_cat_detail_md:classes.txt_cat_detail_xs}>
               Next Js
            </div>
          </Grid>
          <Grid md={3} xs={12}>
            <div
              className={
                isMediumScreen
                  ? classes.txt_connect_with_us_md
                  : classes.txt_connect_with_us_xs
              }
            >
              Connect With Us
            </div>
            <Grid container style={{ marginTop: "2%" }}>
              {/* Github,Facebook,Twiter,Email */}
              <Grid item xs={2}>
                <GitHub fontSize="large" style={{ color: "#666666" }} />
              </Grid>
              <Grid item xs={2}>
                <FacebookRounded
                  fontSize="large"
                  style={{ color: "#666666" }}
                />
              </Grid>
              <Grid item xs={2}>
                <Twitter fontSize="large" style={{ color: "#666666" }} />
              </Grid>
              <Grid item xs={2}>
                <Email fontSize="large" style={{ color: "#666666" }} />
              </Grid>
            </Grid>
            <div style={{ marginTop: "5%" }}>
              <Button
                variant="outlined"
                style={{ backgroundColor: "#666666", color: "white" }}
              >
                Stay in loop
              </Button>
            </div>
          </Grid>
        </Grid>
        <div style={{textAlign:"center",color:"#666666",marginTop:"2%"}}>
        Copyright © 2022 Local database hosting Foundation. All rights reserved.
        </div>
        <div style={{textAlign:"center",color:"#666666"}}>
        For web site terms of use, trademark policy and general project policies please see URL.
        </div>
      </Container>
    </div>
  );
};
export default Footer;

import { Box, Container, Grid, useMediaQuery } from "@mui/material";
import { makeStyles } from "@mui/styles";
const useStyles = makeStyles({
  root: {
    marginTop: "5%",
  },

  txt_heading_1_md: {
    textAlign: "center",
    fontFamily: "Fira Sans",
    fontSize: "3.5rem",
    fontWeight: "bold",
    marginTop: "5%",
    // letterSpacing: "1rem",
  },
  txt_heading_1_xs: {
    textAlign: "center",
    fontFamily: "Fira Sans",
    fontSize: "2.5rem",
    fontWeight: "bold",
    marginTop: "5%",
    // letterSpacing: "0.5rem",
  },
  txt_sub_heading_1_md: {
    textAlign: "center",
    fontFamily: "Fira Sans",
    fontSize: "1.5rem",

    marginTop: "1%",
    // letterSpacing: "0.2rem",
  },
  txt_sub_heading_1_xs: {
    textAlign: "center",
    fontFamily: "Fira Sans",
    fontSize: "0.8rem",

    marginTop: "1%",
    // letterSpacing: "0.2rem",
  },

  //   Service containers.
  service_number_container_xs: {
    textAlign: "center",
    marginTop: "1%",
  },
  service_number_container_md: {
    textAlign: "center",
    marginTop: "3%",
  },
  service_image_container_xs: {
    textAlign: "center",
    marginTop: "3%",
  },
  service_detail_container_xs: {},
  service_detail_container_md: {
    height: 400,
  },
  service_title_container_xs: {
    fontFamily: "Fira Sans",
    fontSize: "1.8rem",
    // letterSpacing: "0.1rem",
    marginLeft: "5%",
    fontWeight: "bold",
    marginTop: "5%",
    textAlign: "center",
  },
  service_title_container_md: {
    fontFamily: "Fira Sans",
    fontSize: "1.8rem",
    // letterSpacing: "0.1rem",
    marginLeft: "5%",
    fontWeight: "bold",
    marginTop: "5%",
  },
  service_summury_container_xs: {
    fontFamily: "Fira Sans",
    fontSize: "1rem",
    // letterSpacing: "0.1rem",
    marginLeft: "10%",
    marginRight: "10%",
    marginTop: "5%",
    textAlign: "center",
  },
  service_summury_container_md: {
    fontFamily: "Fira Sans",
    fontSize: "1rem",
    // letterSpacing: "0.1rem",
    marginLeft: "10%",
    marginRight: "20%",
    marginTop: "5%",
  },
});

const OurService=()=>{
    const classes = useStyles();
    const isMediumScreen = useMediaQuery("(min-width:600px)");
    return (
      <div className={classes.root}>
        <div style={{ backgroundColor: "#F5F6F8" }}>
          <Grid container>
            <Grid item xs={12}>
              <div
                className={
                  isMediumScreen
                    ? classes.txt_heading_1_md
                    : classes.txt_heading_1_xs
                }
              >
                {/* Heading */}
                What we provide
              </div>
            </Grid>
            <Grid item md={2} xs={0}></Grid>
            <Grid item md={8} xs={12}>
              <div>
                <div
                  className={
                    isMediumScreen
                      ? classes.txt_sub_heading_1_md
                      : classes.txt_sub_heading_1_xs
                  }
                >
                  {/* Summury */}
                  we provide you diffrent services to utlize your locally hosted
                  databases and access them within your applications from any
                  where.
                </div>
              </div>
            </Grid>
            <Grid item md={2} xs={0}></Grid>
          </Grid>
          {/*Servic 1  */}
          <Grid>
            <Grid
              item
              xs={12}
              className={
                isMediumScreen
                  ? classes.service_number_container_md
                  : classes.service_number_container_xs
              }
            >
              <img src="/home-page/one_icon.png" />
            </Grid>
          </Grid>
  
          <Grid container>
            {/* Visible only on pc */}
            <Grid
              item
              md={6}
              xs={12}
              className={
                isMediumScreen
                  ? classes.service_image_container_md
                  : classes.service_image_container_xs
              }
            >
              {/* Image/gif */}
              <Box sx={{ display: { xs: "none", md: "flex" } }}>
                <div>
                  <img
                    src="/home-page/service_1_icon.png"
                    width={isMediumScreen ? "100%" : "70%"}
                  />
                </div>
              </Box>
            </Grid>
  
            <Grid
              item
              md={6}
              xs={12}
              className={
                isMediumScreen
                  ? classes.service_detail_container_md
                  : classes.service_detail_container_xs
              }
            >
              {/* Description */}
              <div
                className={
                  isMediumScreen
                    ? classes.service_title_container_md
                    : classes.service_title_container_xs
                }
                style={{}}
              >
                Execute database quries remotely
              </div>
              <div
                className={
                  isMediumScreen
                    ? classes.service_summury_container_md
                    : classes.service_summury_container_xs
                }
              >
                We provide you service to execute your database quries on your
                locally hosted database from any where and get repoonses. Lorem
                Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy text
                ever since the 1500s, when an unknown printer took a galley of
           
              </div>
            </Grid>
  
            {/* Visible only on mobile */}
            <Grid
              item
              md={6}
              xs={12}
              className={
                isMediumScreen
                  ? classes.service_image_container_md
                  : classes.service_image_container_xs
              }
            >
              {/* Image/gif */}
              <Box sx={{ display: { xs: "flex", md: "none" } }}>
                <div>
                  <img
                    src="/home-page/service_1_icon.png"
                    width={isMediumScreen ? "100%" : "70%"}
                  />
                </div>
              </Box>
            </Grid>
          </Grid>
        </div>
  
        <div style={{ backgroundColor: "#E6E8EC" }}>
          {/* Service 2 */}
          <Grid container>
            <Grid
              item
              md={12}
              xs={12}
              className={
                isMediumScreen
                  ? classes.service_number_container_md
                  : classes.service_number_container_xs
              }
            >
              <img src="/home-page/two_icon.png" />
            </Grid>
          </Grid>
          <Grid container>
            {/* Visisble only on mobile */}
  
            <Grid
              item
              md={6}
              xs={12}
              className={
                isMediumScreen
                  ? classes.service_detail_container_md
                  : classes.service_detail_container_xs
              }
            >
              {/* Description */}
              <div
                className={
                  isMediumScreen
                    ? classes.service_title_container_md
                    : classes.service_title_container_xs
                }
                style={{ marginLeft: isMediumScreen ? "10%" : "" }}
              >
                No need of Node Js to access MySQL
              </div>
              <div
                className={
                  isMediumScreen
                    ? classes.service_summury_container_md
                    : classes.service_summury_container_xs
                }
                style={{ marginLeft: isMediumScreen ? "15%" : "" }}
              >
                We provide you service that without Node js API, access your local
                databases in your applications from anywhere. Lorem Ipsum is
                simply dummy text of the printing and typesetting industry. Lorem
                Ipsum has been the industry's standard dummy text ever since the
                1500s, when an unknown printer took a galley of type and scrambled
                it to make a type specimen book
              </div>
            </Grid>
  
            <Grid
              item
              md={6}
              xs={12}
              className={
                isMediumScreen
                  ? classes.service_image_container_md
                  : classes.service_image_container_xs
              }
            >
              {/* Image/gif */}
  
              <div>
                <img
                  src="/home-page/service_2_icon.png"
                  width={isMediumScreen ? "100%" : "70%"}
                />
              </div>
            </Grid>
          </Grid>
        </div>
  
        <div style={{ backgroundColor: "#F5F6F8" }}>
          {/* Service 3 */}
          <Grid container>
            <Grid
              item
              xs={12}
              className={
                isMediumScreen
                  ? classes.service_number_container_md
                  : classes.service_number_container_xs
              }
            >
              <img src="/home-page/three_icon.png" />
            </Grid>
          </Grid>
          <Grid container>
            {/* Only visible on pc */}
            <Grid
              item
              md={6}
              xs={12}
              className={
                isMediumScreen
                  ? classes.service_image_container_md
                  : classes.service_image_container_xs
              }
            >
              {/* Image/gif */}
              <Box sx={{ display: { xs: "none", md: "flex" } }}>
                <div>
                  <img src="/home-page/service_3_icon.png" width="90%" />
                </div>
              </Box>
            </Grid>
  
            <Grid
              item
              md={6}
              xs={12}
              className={
                isMediumScreen
                  ? classes.service_detail_container_md
                  : classes.service_detail_container_xs
              }
            >
              {/* Description */}
              <div
                className={
                  isMediumScreen
                    ? classes.service_title_container_md
                    : classes.service_title_container_xs
                }
              >
                Manage your consumers and hosts
              </div>
              <div
                className={
                  isMediumScreen
                    ? classes.service_summury_container_md
                    : classes.service_summury_container_xs
                }
              >
                We provide you to service to manage your shared databases, get
                analytics your consumers and connected hosts with
                admin-dashboard.Lorem Ipsum is simply dummy text of the printing
                and typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown printer
                took a galley of type and scrambled it to make a type specimen
                book
              </div>
            </Grid>
  
            {/* Only visible on mobile */}
            <Grid
              item
              md={6}
              xs={12}
              className={
                isMediumScreen
                  ? classes.service_image_container_md
                  : classes.service_image_container_xs
              }
            >
              {/* Image/gif */}
              <Box sx={{ display: { xs: "flex", md: "none" } }}>
                <div>
                  <img
                    src="/home-page/service_3_icon.png"
                    width={isMediumScreen ? "100%" : "60%"}
                  />
                </div>
              </Box>
            </Grid>
          </Grid>
        </div>
      </div>
    );  
}

export default OurService;
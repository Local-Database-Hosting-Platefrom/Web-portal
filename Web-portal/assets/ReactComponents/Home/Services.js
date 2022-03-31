import { Container, Grid, useMediaQuery } from "@mui/material";
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
    letterSpacing: "1rem",
  },
  txt_heading_1_xs: {
    textAlign: "center",
    fontFamily: "Fira Sans",
    fontSize: "3.5rem",
    fontWeight: "bold",
    marginTop: "5%",
    letterSpacing: "1rem",
  },
  txt_sub_heading_1_md: {
    textAlign: "center",
    fontFamily: "Fira Sans",
    fontSize: "1.5rem",

    marginTop: "1%",
    letterSpacing: "0.2rem",
  },
  txt_sub_heading_1_xs: {
    textAlign: "center",
    fontFamily: "Fira Sans",
    fontSize: "1.5rem",

    marginTop: "1%",
    letterSpacing: "0.2rem",
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
  service_image_container_xs: {},
  service_detail_container_xs: {},
  service_detail_container_md: {
    height: 400,
  },
  service_title_container_xs: {
    fontFamily: "Fira Sans",
    fontSize: "1.8rem",
    letterSpacing: "0.1rem",
    marginLeft: "5%",
    fontWeight: "bold",
    marginTop: "5%",
  },
  service_title_container_md: {
    fontFamily: "Fira Sans",
    fontSize: "1.8rem",
    letterSpacing: "0.1rem",
    marginLeft: "5%",
    fontWeight: "bold",
    marginTop: "5%",
  },
  service_summury_container_xs: {
    fontFamily: "Fira Sans",
    fontSize: "1rem",
    letterSpacing: "0.1rem",
    marginLeft: "10%",
    marginRight: "20%",
    marginTop: "5%",
  },
  service_summury_container_md: {
    fontFamily: "Fira Sans",
    fontSize: "1rem",
    letterSpacing: "0.1rem",
    marginLeft: "10%",
    marginRight: "20%",
    marginTop: "5%",
  },
});
const Services = () => {
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
          <Grid item xs={2}></Grid>
          <Grid item xs={8}>
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
          <Grid item xs={2}></Grid>
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
            <img src="/one.png" />
          </Grid>
        </Grid>
        <Grid container>
          <Grid
            item
            xs={6}
            className={
              isMediumScreen
                ? classes.service_image_container_md
                : classes.service_image_container_xs
            }
          >
            {/* Image/gif */}
            <div>
              <img src="/service_1.png" />
            </div>
          </Grid>
          <Grid
            item
            xs={6}
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
              Execute database quries remotely
            </div>
            <div
              className={
                isMediumScreen
                  ? classes.service_summury_container_md
                  : classes.service_summury_container_md
              }
            >
              We provide you service to execute your database quries on your
              locally hosted database from any where and get repoonses
            </div>
          </Grid>
        </Grid>
      </div>
      <div style={{ backgroundColor: "#E6E8EC" }}>
        {/* Service 2 */}
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
            <img src="/two.png" />
          </Grid>
        </Grid>
        <Grid container>
          <Grid
            item
            xs={6}
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
              Access local dabases without Node js API
            </div>
            <div
              className={
                isMediumScreen
                  ? classes.service_summury_container_md
                  : classes.service_summury_container_md
              }
            >
              We provide you service that without Node js API, access your local
              databases in your applications from anywhere.
            </div>
          </Grid>
          <Grid
            item
            xs={6}
            className={
              isMediumScreen
                ? classes.service_image_container_md
                : classes.service_image_container_xs
            }
          >
            {/* Image/gif */}
            <div>
              <img src="/service_2.png" />
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
            <img src="/three.png" />
          </Grid>
        </Grid>
        <Grid container>
          <Grid
            item
            xs={6}
            className={
              isMediumScreen
                ? classes.service_image_container_md
                : classes.service_image_container_xs
            }
          >
            {/* Image/gif */}
            <div>
              <img src="/service_3.png" />
            </div>
          </Grid>
          <Grid
            item
            xs={6}
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
                  : classes.service_summury_container_md
              }
            >
              We provide you to service to manage your shared databases, get
              analytics your consumers and connected hosts with admin-dashboard.
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};
export default Services;

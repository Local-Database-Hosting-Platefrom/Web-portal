import { Container, Grid, useMediaQuery } from "@mui/material";
import { makeStyles } from "@mui/styles";
import FramworkHolder from "./FramworkHolder";

const useStyles=makeStyles({
    root:{},
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

    //   Framework-holder
    frame_work_container_md:{
        textAlign:"center",
        padding:"2rem"
    },
    frame_work_container_xs:{
        textAlign:"center"
    }
    
    
});
const Supporting=()=>{
    const classes = useStyles();
    const isMediumScreen = useMediaQuery("(min-width:600px)");
    return <div className={classes.root}>
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
              Easy Integration
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
               We allow you to integrate our service in various popular frameworks
              </div>
            </div>
          </Grid>
          <Grid item md={2} xs={0}></Grid>
        </Grid>
        <Grid  container style={{marginTop:"2%",padding:"2rem"}}>
          
            <Grid item md={4}>
                <div className={isMediumScreen?classes.frame_work_container_md:classes.frame_work_container_xs}>
                    <FramworkHolder/>
                </div>
            </Grid>
            <Grid item md={4}>
                <div className={isMediumScreen?classes.frame_work_container_md:classes.frame_work_container_xs}>
                    <FramworkHolder/>
                </div>
            </Grid>
            <Grid item md={4}>
                <div className={isMediumScreen?classes.frame_work_container_md:classes.frame_work_container_xs}>
                    <FramworkHolder/>
                </div>
            </Grid>
           
        </Grid>
    </div>
}

export default Supporting;
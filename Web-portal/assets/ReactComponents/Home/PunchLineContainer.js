import { Button } from "@mui/material";
import { Typography } from "@mui/material";
import { Grid } from "@mui/material";
import MainScreen from "../../public/MainScreen.png";
import LOGO1 from "../../public/LOGO1.png";
import { Box } from "@mui/system";
const PunchLineContainer = () => {
  return (
    <div style={{ backgroundColor: "", height: 500, width: "100%" }}>
      <Box sx={{ display: { xs: "none", md: "flex" } }}>
        <Grid container>
          <Grid item xs={1}></Grid>
          <Grid item xs={5}>
            <div
              style={{
                marginTop: "3rem",
                fontWeight: "bold",
                fontSize: "3.5rem",
              }}
            >
              Host Local Database
            </div>
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
                  <img src="/connectbtn.png" width="50%" height="50%" />
                </Grid>
                <Grid item xs={10} style={{ backgroundColor: "" }}>
                  <div
                    style={{
                      fontSize: "1.4rem",
                      fontWeight: "bold",
                      marginLeft: "0.5rem",
                    }}
                  >
                    Connect
                  </div>
                  <div
                    style={{
                      marginTop: "0.1rem",
                      marginLeft: "0.5rem",
                      fontSize: "0.8rem",
                    }}
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
                    style={{
                      fontSize: "1.4rem",
                      fontWeight: "bold",
                      marginLeft: "0.5rem",
                    }}
                  >
                    Manage
                  </div>
                  <div
                    style={{
                      marginTop: "0.1rem",
                      marginLeft: "0.5rem",
                      fontSize: "0.8rem",
                    }}
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
                    style={{
                      fontSize: "1.4rem",
                      fontWeight: "bold",
                      marginLeft: "0.5rem",
                    }}
                  >
                    Consume
                  </div>
                  <div
                    style={{
                      marginTop: "0.1rem",
                      marginLeft: "0.5rem",
                      fontSize: "0.8rem",
                    }}
                  >
                    Consume shared databases within application based on React,Next-js,Electron
                    JS, and any framework based on Javascript and using NPM
                  </div>
                </Grid>
              </Grid>
            </div> 
                    
                    {/* Buttons */}
            <Grid container style={{marginTop:"10%"}}>
              <Grid item xs={1}></Grid>
              <Grid item xs={5}>
                <Button variant="outlined" color="primary">Start Managing</Button>
              </Grid>
              <Grid item xs={5}>
                <Button variant="outlined" color="primary">Get Host Application</Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={6}>
            <img src="/MainScreen2.png" width="90%" height="100%" />
          </Grid>
        </Grid>
      </Box>
      
    </div>
  );
};
export default PunchLineContainer;

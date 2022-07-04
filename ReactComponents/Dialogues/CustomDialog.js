import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import CloseIcon from '@mui/icons-material/Close';
import { Grid, useMediaQuery } from "@mui/material";
import dialogueTypes from "./dialogueTypes"
import CustomButton from "../../Support/CustomButton";
export default function CustomDialog({
  handleClickOpen,
  alertType,
  handleCloseEvent,
  open,
  alertMessage,
  alertTitle,
  handleOkEvent=null
}) {

  const isMediumScreen = useMediaQuery("(min-width:600px)");

  return (
    <div>
     
    {
      (alertType==dialogueTypes.INFO) && (<div>
      <Dialog
        open={open}
        onClose={handleCloseEvent}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        fullWidth
        
        maxWidth="sm"
      >
        {/* <DialogTitle id="alert-dialog-title">{alertTitle}</DialogTitle> */}
        <DialogContent>
          <div>
              <Grid container>
                <Grid item md={8}>
                  <div style={{fontSize:"1.7rem"}}>
                  {/* {alertTitle} */}
                  </div>
                </Grid>
                <Grid item md={4} style={{textAlign: "right"}}>
                    <div style={{cursor: "pointer"}} onClick={handleCloseEvent  }>
                    <CloseIcon/>     
                    </div>
                </Grid>
              </Grid>
             
           
          </div>
          <div >
          <DialogContentText id="alert-dialog-description">
            <div>
              <Grid container>
                  <Grid item xs={12}>
                    <div style={{fontSize:"1.7rem",textAlign:"center"}}>
                      {alertTitle}
                    </div>
                    <div style={{textAlign:"center"}}>
                    <img src="https://img.icons8.com/external-flaticons-flat-flat-icons/64/000000/external-failure-factory-flaticons-flat-flat-icons-3.png"/>
                    </div>
                    <div style={{fontSize:"1rem",textAlign:"center"}}>
                      {alertMessage}
                    </div>
                  </Grid> 
                  <Grid item xs={12}>

                  {
                    (handleOkEvent!=null) && (
                      <CustomButton
                      style={{
                        // marginLeft:isMediumScreen? "40%":"35%",
                        marginTop: isMediumScreen ? "3%" : "3%",
                        // left: isMediumScreen? "10":"",
                        backgroundColor: "#10365B",
                        fontSize: isMediumScreen ? "0.8rem" : "",
                      }}
                      onClick={() => {
                        // localStorage.setItem("isLoggedIn", true);
                        // navigation.push("/admin-dashboard");
                        handleOkEvent("re-login")
                      }}
                      name="Ok"
                    />
                    )
                  }
                  </Grid>
              </Grid>
            </div>


          </DialogContentText>
          </div>
        </DialogContent>

      </Dialog>
      </div>)
    }

{
      (alertType==dialogueTypes.INVALID_LOGIN) && (<div>
      <Dialog
        open={open}
        onClose={handleCloseEvent}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        fullWidth
        
        maxWidth="sm"
      >
        {/* <DialogTitle id="alert-dialog-title">{alertTitle}</DialogTitle> */}
        <DialogContent>
          <div>
              <Grid container>
                <Grid item md={8}>
                  <div style={{fontSize:"1.7rem"}}>
                  {/* {alertTitle} */}
                  </div>
                </Grid>
              </Grid>
             
           
          </div>
          <div >
          <DialogContentText id="alert-dialog-description">
            <div>
              <Grid container>
                  <Grid item xs={12}>
                    <div style={{fontSize:"1.7rem",textAlign:"center"}}>
                      {alertTitle}
                    </div>
                    <div style={{textAlign:"center"}}>
                    <img src="https://img.icons8.com/external-flaticons-flat-flat-icons/64/000000/external-failure-factory-flaticons-flat-flat-icons-3.png"/>
                    </div>
                    <div style={{fontSize:"1rem",textAlign:"center"}}>
                      {alertMessage}
                    </div>
                  </Grid> 
                  <Grid item xs={12}>

                  {
                    (handleOkEvent!=null) && (
                      <CustomButton
                      style={{
                        // marginLeft:isMediumScreen? "40%":"35%",
                        marginTop: isMediumScreen ? "3%" : "3%",
                        // left: isMediumScreen? "10":"",
                        backgroundColor: "#10365B",
                        fontSize: isMediumScreen ? "0.8rem" : "",
                      }}
                      onClick={() => {
                        // localStorage.setItem("isLoggedIn", true);
                        // navigation.push("/admin-dashboard");
                        handleOkEvent("re-login")
                      }}
                      name="Ok"
                    />
                    )
                  }
                  </Grid>
              </Grid>
            </div>


          </DialogContentText>
          </div>
        </DialogContent>

      </Dialog>
      </div>)
    }
      
    </div>
  );
}

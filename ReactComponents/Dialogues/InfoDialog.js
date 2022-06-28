import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import CloseIcon from '@mui/icons-material/Close';
import { Grid } from "@mui/material";
export default function InfoDialog({
  handleClickOpen,
  alertType,
  handleCloseEvent,
  open,
  alertMessage,
  alertTitle,
}) {
  return (
    <div>
     
    {
      (alertType=="Info") && (<div>
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
                  {alertTitle}
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
            {alertMessage}
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

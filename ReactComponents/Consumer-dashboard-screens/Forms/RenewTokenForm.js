import { Grid, useMediaQuery } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useState } from "react";
import DropDownForSelectingTokenType from "../../../Support/DropDownForSelectingTokenType";
import Heading from "../../../Support/Heading";
import InputField from "../../../Support/InputFields";
import CustomButton from "../../../Support/CustomButton";

import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

const useStyles = makeStyles({
  root: {
    marginTop: "4%",
    width: "100%",
    // border: "1px solid black",
    // height: "100%",
  },
  root_sm: {
    marginTop: "4%",
    height: "100%",
  },
});

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid",
  boxShadow: 24,
  p: 4,
};

const RenewTokenForm = () => {
  const classes = useStyles();
  const Alert = () => {
    return <div>Alert</div>;
  };
  const handleClose = () => setOpenModal(false);

  const [openModal, setOpenModal] = useState(false);

  const isMediumScreen = useMediaQuery("(min-width:600px)");

  const [currentSelectedOption, setCurrentSelectedOption] = useState(
    "Host-url Access Token"
  );
  const [serverResponse, setServerResponse] = useState("");
  const handleRenewToken = () => {
    setTimeout(() => {
      setServerResponse("Verifying token");
    }, 1000);
    setTimeout(() => {
      setServerResponse("Verifying consumer id");
    }, 3000);
    setTimeout(() => {
      setServerResponse("Request has been sent successfully.!");
      setOpenModal(true);
    }, 6000);
  };
  return (
    <div className={isMediumScreen ? classes.root : classes.root_sm}>
      <div>
      <Grid container>
        {/* <Grid item md={7} xs={12}>
          <div style={{ marginLeft: isMediumScreen?"1.5rem":"" }}>
            <Heading text={"Renew Token"} fontSize={isMediumScreen ? "2rem":"1.5rem"} />
          </div>
        </Grid> */}
        <Grid item md={12} xs={12}>
          <div style={{ position: "relative" }}>
            <div style={{ position: "absolute", right: "10%" }}>
              <DropDownForSelectingTokenType
                currentSelectedOption={currentSelectedOption}
                setCurrentSelectedOption={setCurrentSelectedOption}
              />
            </div>
          </div>
        </Grid>
      </Grid>
      <div style={{ textAlign: "center", marginTop: "3%" }}>
        <div>
          <InputField placeholder="Token" />
        </div>
        <div style={{ marginTop: "2%" }}>
          <InputField placeholder="Consumer Id" />
        </div>
        <div style={{ marginTop: "2%", textAlign: "center" }}>
          <CustomButton
            onClick={handleRenewToken}
            style={{
              // marginTop: isMediumScreen? "3%":"3%",
              backgroundColor: "#10365B",
              // fontSize: isMediumScreen? "0.8rem" :"",
            }}
            name="Renew"
          />
        </div>
        <div style={{ marginTop: "2%" }}>{serverResponse}</div>
      </div>

      <div>
        <Modal
          open={openModal}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}></Box>
        </Modal>
      </div>
      </div>
    </div>
  );
};

export default RenewTokenForm;

import { Container, Divider, Grid } from "@mui/material";
import Heading from "../../Support/Heading";
import { useState } from "react";
import ManageProfile from "./Forms/ManageProfile";
import ResetPassword from "./Forms/ResetPassword";
import DeleteAccount from "./Forms/DeleteAccount";
const SettingsScreen = () => {
  const [value, setValue] = useState(0);
  const [currentOpenedScreen, setCurrentOpenedScreen] = useState(
    <ManageProfile />
  );
  const useData = JSON.parse(localStorage.getItem("loggedInUser"));
  const authType = useData.responsePayload.authType;

  const handleScreenChange = (index) => {
    switch (index) {
      case 0:
        setCurrentOpenedScreen(<ManageProfile />);
        break;
      case 1:
        setCurrentOpenedScreen(<ResetPassword />);
        break;
      case 2:
        setCurrentOpenedScreen(<DeleteAccount />);
        break;
    }
  };
  return (
    <Container>
      <div>
        <Heading text="Settings" fontSize="2rem" fontWeight="bold" />
        <Divider />
      </div>
      <div>
        <Grid container>
          <Grid item xs={2}>
            {/* Sub options 1.List of consumer account and 2.Create new user*/}
            <div
              style={{
                marginTop: "5%",
                padding: "5%",
                borderRight: "1px solid #7ea69f",
              }}
            >
              <div
                style={{ margin: "5%", cursor: "pointer" }}
                onClick={() => {
                  handleScreenChange(0);
                }}
              >
                <Heading text={"Profile"} fontSize="1rem" />
              </div>
              {authType == "userName&Password" && (
                <div>
                  <Divider />
                  <div
                    style={{ margin: "5%", cursor: "pointer" }}
                    onClick={() => {
                      handleScreenChange(1);
                    }}
                  >
                    <Heading text={"Reset Passowrd"} fontSize="1rem" />
                  </div>
                </div>
              )}

              <Divider />
              <div
                style={{ margin: "5%", cursor: "pointer" }}
                onClick={() => {
                  handleScreenChange(2);
                }}
              >
                <Heading text={"Delete Account"} fontSize="1rem" />
              </div>
            </div>
          </Grid>
          <Grid item xs={10}>
            {/* Screen of sub options or call them forms and lists */}
            {currentOpenedScreen}
          </Grid>
        </Grid>
      </div>
    </Container>
  );
};
export default SettingsScreen;

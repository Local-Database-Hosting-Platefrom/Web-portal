import { Box, Grid, Typography } from "@material-ui/core";
import Navbar from "./Navbar";
import NavbarV1 from "./NavbarV1";
import PunchLineContainer from "./PunchLineContainer";

const HomeScreenOptionsContainer = () => {
  return (
    <div
    style={{height:"100%"}}
    >
      {/* <Navbar /> */}
      <NavbarV1/>
      <PunchLineContainer />

    </div>
  );
};

export default HomeScreenOptionsContainer;

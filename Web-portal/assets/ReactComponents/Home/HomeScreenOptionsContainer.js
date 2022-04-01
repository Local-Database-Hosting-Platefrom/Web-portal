import { Box, Grid, Typography } from "@material-ui/core";
import Navbar from "./Navbar";
import NavbarV1 from "./NavbarV1";
import PunchLineContainer from "./PunchLineContainer";
import Services from "./Services";
import SummuryContainer from "./SummuryContainer";
import Supporting from "./Supporting";

const HomeScreenOptionsContainer = () => {
  return (
    <div
    style={{height:"100%"}}
    >
      {/* <Navbar /> */}
      <NavbarV1/>
      <PunchLineContainer />
      <Services/>
      <Supporting/>
    </div>
  );
};

export default HomeScreenOptionsContainer;

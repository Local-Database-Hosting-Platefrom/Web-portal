import { Box, Grid, Typography } from "@material-ui/core";
import Navbar from "./Navbar";
import PunchLineContainer from "./PunchLineContainer";

const HomeScreenOptionsContainer = () => {
  return (
    <div
      style={{
        backgroundColor: "#080808",
        width: "100%",
        height: "100%",
        spacing: 0,
        justify: "space-around",
      }}
    >
      <Navbar />
      <PunchLineContainer />
    </div>
  );
};

export default HomeScreenOptionsContainer;

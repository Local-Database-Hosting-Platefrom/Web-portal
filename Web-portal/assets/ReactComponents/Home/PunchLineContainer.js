import { Button } from "@mui/material";
import { Typography } from "@mui/material";
const PunchLineContainer = () => {
  return (
    <div style={{ height: "25rem", textAlign: "center" }}>
      <div>
        <Typography
          variant="h2"
          noWrap
          component="div"
          style={{
            marginTop: "10%",
            fontFamily: "Anton",
            color: "#2f28f7",
            display: "inline-block",
          }}
        >
          HOST
        </Typography>
      </div>
      <div style={{ display: "inline-block" }}>
        <Typography
          variant="h1"
          noWrap
          component="div"
          style={{
            display: "inline-block",
            marginTop: "1%",
            fontFamily: "Anton",
            color: "#db0000",
          }}
        >
          Connect
        </Typography>
      </div>
      <div>
        <Typography
          variant="h2"
          noWrap
          component="div"
          style={{
            marginTop: "1%",
            fontFamily: "Anton",
            color: "#0aab25",
            display: "inline-block",
          }}
        >
          Consume
        </Typography>
      </div>
      <div style={{ display: "inline-block" }}>
        <Button
          variant="outlined"
          style={{
            color: "white",
            borderColor: "white",
            fontSize: "1.3rem",
            width: "10rem",
            padding: "0.5rem",
            marginTop: "1rem",
          }}
        >
          Get Start
        </Button>
      </div>
    </div>
  );
};
export default PunchLineContainer;

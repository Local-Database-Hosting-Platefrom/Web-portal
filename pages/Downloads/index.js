import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import NavbarWraper from "../../ReactComponents/HomePage-Navbar/NavbarWraper";
import Heading from "../../Support/Heading";
import { Button, Card } from "antd";
import React from "react";
import { Avatar } from "antd";
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
const { Meta } = Card;
import 'antd/dist/antd.css'; 
import FooterWraper from "../../ReactComponents/HomePage-Footer/FooterWraper";
const useStyles = makeStyles({
  root: {
    marginTop: "5%",
    paddingBottom:"5%"
  },
});

const Index = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div style={{ marginLeft: "10%", marginTop: "5rem" }}>
        <Heading text={"Desktop Application Setup"} fontSize="2rem" fontWeight={"bold"} />
      </div>
      <div style={{ marginTop: "4%" }}>
        <Grid container style={{ textAlign: "center" }}>
          <Grid item xs={4}>
            
          </Grid>
          <Grid item xs={3}>
            <Card
              style={{
                width: 300,
                padding:"3rem"
              }}
              cover={
                <img
                  alt="example"
                  src="/windows.png"
                  width="250"
                />
              }
              
            >
            <div>
                <div style={{fontSize:"1rem",fontWeight:"bold"}}>
                    Windows version   
                </div>
                <div style={{marginTop:"3%"}}>
            <Button
                    type="primary"
                    shape="round"
                    style={{ width: "70%" }}
                    size={"middle"}
                    onClick={() => {
                    //   handleOkEvent(null);
                    
                  window.open("https://drive.google.com/file/d/1xI9EV5MdsLa8oRaie9wIRndMFOsEB7l0/view?usp=sharing");
                    }}
                  >
                    Download
                  </Button>
                </div>
                <div style={{fontSize:"0.7rem",fontWeight:"bold"}}>
                    File Size : ~ 191 MB   
                </div>
            </div>
            </Card>
          </Grid>
          <Grid item xs={3}>
          <Card
              style={{
                width: 300,
                padding:"3rem"
              }}
              cover={
                <img
                  alt="example"
                  src="/ubuntu-logo14.png"
                  width="250"
                  height="205"
                />
              }
               
            >
            <div>
                <div style={{fontSize:"1rem",fontWeight:"bold"}}>
                    Linux version   
                </div>
                <div style={{marginTop:"3%"}}>
            <Button
                    type="primary"
                    shape="round"
                    style={{ width: "70%" }}
                    size={"middle"}
                    onClick={() => {
                    //   handleOkEvent(null);
                    
                  window.open("https://drive.google.com/file/d/1xI9EV5MdsLa8oRaie9wIRndMFOsEB7l0/view?usp=sharing");
                    }}
                  >
                    Download
                  </Button>
                </div>
                <div style={{fontSize:"0.7rem",fontWeight:"bold"}}>
                    File Size : ~ 191 MB   
                </div>
            </div>
            </Card>
          </Grid>
          <Grid item xs={2}>
            
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default FooterWraper(NavbarWraper(Index));

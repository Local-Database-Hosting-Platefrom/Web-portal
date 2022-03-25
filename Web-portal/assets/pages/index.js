import { Container, Grid } from "@mui/material";
import * as React from "react";
import HomeScreenOptionsContainer from "../ReactComponents/Home/HomeScreenOptionsContainer";
import Navbar from "../ReactComponents/Home/Navbar";
import ParticleBackground from "../ReactComponents/Home/ParticleBackground";

export default function Index() {
  return (
    <div>
      {/* <Navbar /> */}
      <Grid
       
      >
        <Grid item xs={1}></Grid>
        <Grid item xs={10}  style={{
          
          width: '100vw',
          height: '100vh',
          spacing: 0,
          justify: 'space-around'
        }}> 
          <ParticleBackground />
          <HomeScreenOptionsContainer />
        </Grid>
        <Grid item xs={1}></Grid>
      </Grid>
    </div>
  );
}

import { Container, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import Heading from "../../Support/Heading";
import States from "./Cards/States";
const StatisticsScreen = () => {
  const [firstName,setFirstName]=useState(null);
  const [isLoggedIn,setIsLoggedIn]=useState(false);
  useEffect(()=>{
    // Access values from localStorage for now , later on we will access values from the redux
    if(localStorage.getItem("isLoggedIn")=="true") {
      const data = JSON.parse(localStorage.getItem("loggedInUser"));
      const {firstName} = data.responsePayload;
      setFirstName(firstName);
      setIsLoggedIn(true);
      console.log("Data for print",data)
    }
  },[])
  return (
    <Container>
      <div>
      
      {  (isLoggedIn==true) && <Heading text={`Well come ${firstName}`} fontSize="2rem" fontWeight="bold" />   } 
        <Heading text={"Overview"} fontSize="2rem" fontWeight="bold" />
      </div>
      <div style={{paddingLeft:"5%"}}>
        <Grid container style={{marginTop:"2%"}}>
          <Grid item xs={3}>
            <States  title="API Hists" value="12"/>
          </Grid>
          <Grid item xs={1}></Grid>
          <Grid item xs={3}>
            <States  title="Alowed H-Access-Urls" value="3"/>
          </Grid>
          <Grid item xs={1}></Grid>
          <Grid item xs={3}>
            <States  title="Alowed R-Access-Urls" value="12"/>
          </Grid> 
          <Grid item xs={2}></Grid>
          <Grid item xs={3} style={{marginTop:"2%"}}>
            <States  title="Denied requests" value="12"/>
          </Grid>
          <Grid item xs={1}></Grid>
          <Grid item xs={3} style={{marginTop:"2%"}}>
            <States  title="Under Process requests" value="12"/>
          </Grid>
         
        </Grid>
      </div>
    </Container>
  );
};
export default StatisticsScreen;

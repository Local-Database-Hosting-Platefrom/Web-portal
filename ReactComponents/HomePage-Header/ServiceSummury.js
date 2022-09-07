import {
    Box,
    Card,
    CardContent,
    Container,
    Grid,
    useMediaQuery,
  } from "@mui/material";
  import { makeStyles } from "@mui/styles";
import { useEffect } from "react";
import { useState } from "react";
import { sendResquestToCentralAPI } from "../../request-manager/requestManager";
import { GET_MAJOR_COUNTS } from "../../request-manager/requestUrls";
  
  const useStyles = makeStyles({
    root: {marginTop:"10%"},
    summury_container_md: {
      marginTop: -50,
    },
    summury_container_xs: {
      marginTop: 0,
    },
  
    summury_card: {
      textAlign: "center",
    },
    summury_card_title_md: {
      fontFamily: "Fira Sans",
      // fontWeight:'bold',
      // fontSize:"1.5rem"
    },
    summury_card_title_xs: {
      fontFamily: "Fira Sans",
    },
    summury_card_number_md: {
      fontFamily: "Fira Sans",
      fontWeight: "bold",
      fontSize: "1rem",
    },
    summury_card_number_xs: {
      fontFamily: "Fira Sans",
    },
  });
  
const ServiceSummury=()=>{
    const classes = useStyles();
    const isMediumScreen = useMediaQuery("(min-width:600px)");
    const [numberOfRequest,setNumberRequests]=useState(0);
    const [numberOfDevelopers,setNumberOfDevelopers]=useState(0);
    const [numberOfHosts,setNumberOfHosts]=useState(0);
    const [isDataLoading,setIsDataLoading]=useState(false)
    
    useEffect(()=>{
      setIsDataLoading(true);
      sendResquestToCentralAPI("GET",GET_MAJOR_COUNTS,{}).then((resp)=>resp.json()).then((data)=>{
        console.log(data)
        setIsDataLoading(false);
        setNumberOfDevelopers(data.responsePayload.numberOfDevelopers);
        setNumberOfHosts(data.responsePayload.numberHosts);
        setNumberRequests(data.responsePayload.numberOfRequests)
      })
    },[])
    return (
     
      <Grid container className={isMediumScreen ? classes.summury_container_md : classes.summury_container_xs}>
        <Grid item md={1} xs={0}></Grid>
        <Grid item md={3} xs={6} className={classes.summury_card}>
          <img src="https://i.postimg.cc/QCbGwMss/consumer-Icon.png" width={isMediumScreen?"30%":"30%"}  />
          <div
            className={
              isMediumScreen
                ? classes.summury_card_title_md
                : classes.summury_card_title_xs
            }
          >
            Developers
          </div>
          <div
            className={
              isMediumScreen
                ? classes.summury_card_number_md
                : classes.summury_card_number_xs
            }
          >
            {" "}
            {isDataLoading==false && <div>{numberOfDevelopers}</div>}
            {isDataLoading==true && <img src="https://i.postimg.cc/9FBhSDMk/output-onlinegiftools.gif" width="100px" height="100px" />}
            
          </div>
        </Grid>
        <Grid item md={3} xs={6} className={classes.summury_card}>
          <img src="https://i.postimg.cc/ryfbt3hD/hosts-Icon.png"  width={isMediumScreen?"30%":"30%"}  />
          <div
            className={
              isMediumScreen
                ? classes.summury_card_title_md
                : classes.summury_card_title_xs
            }
          >
            Hosts
          </div>
          <div
            className={
              isMediumScreen
                ? classes.summury_card_number_md
                : classes.summury_card_number_xs
            }
          >
            {" "}
            {isDataLoading==false && <div>{numberOfHosts}</div>}
            {isDataLoading==true && <img src="https://i.postimg.cc/9FBhSDMk/output-onlinegiftools.gif" width="100px" height="100px" />}
            
          </div>
        </Grid>
        <Grid item md={3} xs={4} className={classes.summury_card}>
        <Box sx={{display:{xs:"none",md:"block"}}}>
          <img src="https://i.postimg.cc/Xqqs8N2p/requestsIcon.png" width={isMediumScreen?"35%":"30%"} />
          <div
            className={
              isMediumScreen
                ? classes.summury_card_title_md
                : classes.summury_card_title_xs
            }
          >
            Requests
          </div>
          <div
            className={
              isMediumScreen
                ? classes.summury_card_number_md
                : classes.summury_card_number_xs
            }
          >
           
            {isDataLoading==false && <div>{numberOfRequest}</div>}
            {isDataLoading==true && <img src="https://i.postimg.cc/9FBhSDMk/output-onlinegiftools.gif" width="100px" height="100px" />}
           
          </div>
          </Box>
        </Grid>
        <Grid item md={1} xs={0}></Grid>
       
        <Grid item md={0} xs={12}  className={classes.summury_card}>
          <Box sx={{display:{xs:"block",md:"none"}}}>
          <img src="https://i.postimg.cc/Xqqs8N2p/requestsIcon.png" width={isMediumScreen?"35%":"15%"} />
          <div
            className={
              isMediumScreen
                ? classes.summury_card_title_md
                : classes.summury_card_title_xs
            }
          >
            Requests
          </div>
          <div
            className={
              isMediumScreen
                ? classes.summury_card_number_md
                : classes.summury_card_number_xs
            }
          >
           
            85903
          </div>
          </Box>
        </Grid>
        
      </Grid>
 
    );
}
export default ServiceSummury;
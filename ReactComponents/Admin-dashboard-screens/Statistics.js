import { Container, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { sendResquestToCentralAPI } from "../../request-manager/requestManager";
import {
  GET_TOTAL_NUMBER_OF_DENIED_REQUESTS_ADMIN,
  GET_TOTAL_NUMBER_OF_DEVELOPERS_ADMIN,
  GET_TOTAL_NUMBER_OF_ENTERTAINED_REQUESTS_ADMIN,
  GET_TOTAL_NUMBER_OF_HOSTS_ADMIN,
  GET_TOTAL_NUMBER_OF_OPEN_APIS_ADMIN,
} from "../../request-manager/requestUrls";
import Heading from "../../Support/Heading";
import States from "./Cards/States";
const Statistics = () => {
  const [firstName, setFirstName] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [totalNumberOfDevelopers, setTotalNumberOfDevelopers] = useState(null);
  const [totalNumberOfHosts, setTotalNumberOfHosts] = useState(null);
  const [totalNumberOfOpenAPIs, setTotalNumberOfOpenAPIs] = useState(null);
  const [
    totalNumberOfEntertainedRequests,
    setTotalNumberOfEntertainedRequests,
  ] = useState(null);
  const [totalNumberOfDeniedRequests, setTotalNumberOfDeniedRequests] =
    useState(null);

  useEffect(() => {
    if (localStorage.getItem("isLoggedIn") == "true") {
      const data = JSON.parse(localStorage.getItem("loggedInUser"));
      const { firstName } = data.responsePayload;
      setFirstName(firstName);
      setIsLoggedIn(true);
      console.log("Data for print", data);
    } else {
      setIsLoggedIn(false);
    }

    fetchAndSetTotalNumberOfDevelopers();
    fetchAndSetTotalNumberOHosts();
    fetchAndSetTotalNumberOfRemoteDatabaseAccessUrls();
    fetchAndSetTotalNumberOfEntertainedRequests();
    fetchAndSetTotalNumberOfDeniedRequests();
  }, []);

  const fetchAndSetTotalNumberOfDevelopers = () => {
    const data = JSON.parse(localStorage.getItem("loggedInUser"));
    sendResquestToCentralAPI("POST", GET_TOTAL_NUMBER_OF_DEVELOPERS_ADMIN, {
      adminId: data.responsePayload._id,
    })
      .then((resp) => resp.json())
      .then((data) => {
        if(data.responsePayload!=null)
        {
          setTotalNumberOfDevelopers(data.responsePayload);
        }else{
          setTotalNumberOfDevelopers(0)
        }
      });
  };

  const fetchAndSetTotalNumberOHosts = () => {
    const data = JSON.parse(localStorage.getItem("loggedInUser"));
    sendResquestToCentralAPI("POST", GET_TOTAL_NUMBER_OF_HOSTS_ADMIN, {
      adminId: data.responsePayload._id,
    })
      .then((resp) => resp.json())
      .then((data) => {
        if(data.responsePayload!=null){
          setTotalNumberOfHosts(data.responsePayload);
        }else{
          setTotalNumberOfHosts(0)
        }
        
      });
  };

  const fetchAndSetTotalNumberOfRemoteDatabaseAccessUrls = () => {
    const data = JSON.parse(localStorage.getItem("loggedInUser"));
    sendResquestToCentralAPI("POST", GET_TOTAL_NUMBER_OF_OPEN_APIS_ADMIN, {
      adminId: data.responsePayload._id,
    })
      .then((resp) => resp.json())
      .then((data) => {
        if(data.responsePayload!=null){
          setTotalNumberOfOpenAPIs(data.responsePayload);
        }else{
          setTotalNumberOfOpenAPIs(0);
        }
        
      });
  };
  const fetchAndSetTotalNumberOfEntertainedRequests = () => {
    const data = JSON.parse(localStorage.getItem("loggedInUser"));
    sendResquestToCentralAPI(
      "POST",
      GET_TOTAL_NUMBER_OF_ENTERTAINED_REQUESTS_ADMIN,
      {
        adminId: data.responsePayload._id,
      }
    )
      .then((resp) => resp.json())
      .then((data) => {
        if(data.responsePayload!=null){
        setTotalNumberOfEntertainedRequests(data.responsePayload);
        }else{
          setTotalNumberOfEntertainedRequests(0)
        }
        
      });
  };
  const fetchAndSetTotalNumberOfDeniedRequests = () => {
    const data = JSON.parse(localStorage.getItem("loggedInUser"));
    sendResquestToCentralAPI(
      "POST",
      GET_TOTAL_NUMBER_OF_DENIED_REQUESTS_ADMIN,
      {
        adminId: data.responsePayload._id,
      }
    )
      .then((resp) => resp.json())
      .then((data) => {
        if(data.responsePayload!=null){
          setTotalNumberOfDeniedRequests(data.responsePayload);
        }else{
          setTotalNumberOfDeniedRequests(0);
        }
        
      });
  };

  return (
    <Container>
      <div>
        {isLoggedIn == true && (
          <Heading
            text={`Well come ${firstName}`}
            fontSize="2rem"
            fontWeight="bold"
          />
        )}
        <Heading text={"Overview"} fontSize="1.5rem" fontWeight="bold" />
      </div>
      <div style={{ paddingLeft: "5%" }}>
        <Grid container style={{ marginTop: "2%",paddingLeft:"15%",paddingRight:"15%"}}>

          {/* <Grid item xs={1}></Grid> */}
          <Grid item xs={5} style={{marginTop:"1%"}}>
            <States title="Developers" value={totalNumberOfDevelopers} />
          </Grid>
          <Grid item xs={2}></Grid>
          <Grid item xs={5} style={{marginTop:"1%"}}>
            <States title="Hosts" value={totalNumberOfHosts} />
          </Grid>
          {/* <Grid item xs={1}></Grid> */}


          {/* <Grid item xs={1}></Grid> */}
          <Grid item xs={5} style={{marginTop:"1%"}}>
            <States title="Open APIs" value={totalNumberOfOpenAPIs} />
          </Grid>
          <Grid item xs={2}></Grid>
          <Grid item xs={5} style={{marginTop:"1%"}}>
            <States
              title="Entertained Requests"
              value={totalNumberOfEntertainedRequests}
            />
          </Grid>
          {/* <Grid item xs={1}></Grid> */}

          <Grid item xs={12} style={{paddingLeft:"35%",paddingRight:"35%",marginTop:"5%"}}>
            <States
              title="Denied Requests"
              value={totalNumberOfDeniedRequests}
            />
          </Grid>
        </Grid>
      </div>
    </Container>
  );
};
export default Statistics;

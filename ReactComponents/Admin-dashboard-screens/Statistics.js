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

  const [totalNumberOfDevelopers, setTotalNumberOfDevelopers] = useState(0);
  const [totalNumberOfHosts, setTotalNumberOfHosts] = useState(0);
  const [totalNumberOfOpenAPIs, setTotalNumberOfOpenAPIs] = useState(0);
  const [
    totalNumberOfEntertainedRequests,
    setTotalNumberOfEntertainedRequests,
  ] = useState(0);
  const [totalNumberOfDeniedRequests, setTotalNumberOfDeniedRequests] =
    useState(0);

  //

  // const intervalId = setInterval(()=>{
  //   fetchAndSetTotalNumberOfDevelopers();
  //   fetchAndSetTotalNumberOHosts();
  // },10000)

  useEffect(() => {
    // Access values from localStorage for now , later on we will access values from the redux
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
        setTotalNumberOfDevelopers(data.responsePayload);
        
      });
  };

  const fetchAndSetTotalNumberOHosts = () => {
    const data = JSON.parse(localStorage.getItem("loggedInUser"));
    sendResquestToCentralAPI("POST", GET_TOTAL_NUMBER_OF_HOSTS_ADMIN, {
      adminId: data.responsePayload._id,
    })
      .then((resp) => resp.json())
      .then((data) => {
        if(data.responsePayload!=null)
        setTotalNumberOfHosts(data.responsePayload);
        
      });
  };
  const fetchAndSetTotalNumberOfRemoteDatabaseAccessUrls = () => {
    const data = JSON.parse(localStorage.getItem("loggedInUser"));
    sendResquestToCentralAPI("POST", GET_TOTAL_NUMBER_OF_OPEN_APIS_ADMIN, {
      adminId: data.responsePayload._id,
    })
      .then((resp) => resp.json())
      .then((data) => {
        if(data.responsePayload!=null)
        setTotalNumberOfOpenAPIs(data.responsePayload);
        
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
        if(data.responsePayload!=null)
        setTotalNumberOfEntertainedRequests(data.responsePayload);
        
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
        if(data.responsePayload!=null)
        setTotalNumberOfDeniedRequests(data.responsePayload);
        
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
        <Grid container style={{ marginTop: "2%" }}>
          <Grid item xs={3}>
            <States title="Developers" value={totalNumberOfDevelopers} />
          </Grid>
          <Grid item xs={1}></Grid>
          <Grid item xs={3}>
            <States title="Hosts" value={totalNumberOfHosts} />
          </Grid>
          <Grid item xs={1}></Grid>
          <Grid item xs={3}>
            <States title="Open APIs" value={totalNumberOfOpenAPIs} />
          </Grid>
          <Grid item xs={2}></Grid>
          <Grid item xs={3} style={{ marginTop: "2%" }}>
            <States
              title="Entertained Requests"
              value={totalNumberOfEntertainedRequests}
            />
          </Grid>
          <Grid item xs={1}></Grid>
          <Grid item xs={3} style={{ marginTop: "2%" }}>
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

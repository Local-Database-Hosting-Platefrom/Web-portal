import { Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { sendResquestToCentralAPI } from "../../request-manager/requestManager";
import { LOAD_LIST_OF_REMOTE_ENDPOINTS } from "../../request-manager/requestUrls";
import CustomButton from "../../Support/CustomButton";
import Heading from "../../Support/Heading";
import TestTokenForm from "./Forms/TestTokenForm";
import { OpenApisListItemHolder } from "./itemHolders/OpenApisListItemHolder";
const OpenAPIs = () => {
  const [listOfUrls, setListOfUrls] = useState([]);

  useEffect(() => {
    let loggedInUser = localStorage.getItem("loggedInUser");
    loggedInUser = JSON.parse(loggedInUser);
    // console.log(loggedInUser);
    let developerId = loggedInUser.responsePayload._id;
    let token = loggedInUser.responsePayload.jwtToken;
    sendResquestToCentralAPI(
      "POST",
      LOAD_LIST_OF_REMOTE_ENDPOINTS,
      {developerId:developerId},
      token
    ).then(
      async (response) => {
        const r = await response.json();
        let list = r.responsePayload.map((url) => {
          return {
            urlProvider:url.adminData.adminName,
            urlTitle:url.url.url,
            url: `${url.host}${url.url.endPointUrlAddress}`,
            urlCompleteInfo: url,
          };
        });
        // console.log(response)
        setListOfUrls(list)
      },
      (error) => {
        console.log(error);
      }
    );
  }, []);

  return (
    <div>
      <div>
        <Heading text="Open APIs" fontSize="2rem" fontWeight="bold" />
      </div>
      <div style={{ padding: "5%" }}>
        <Grid container style={{ borderBottom: "1px solid #7ea69f" }}>
          <Grid item xs={2} style={{ textAlign: "center" }}>
            <Heading text={"Provider"} fontSize={"1rem"} fontWeight={"bold"} />
          </Grid>
          <Grid item xs={2} style={{ textAlign: "center" }}>
            <Heading text={"Title"} fontSize={"1rem"} fontWeight={"bold"} />
          </Grid>
          <Grid item xs={5} style={{ textAlign: "left" }}>
            <Heading text={"Url"} fontSize={"1rem"} fontWeight={"bold"} />
          </Grid>
          <Grid item xs={3} style={{ textAlign: "center" }}>
            <Heading text={"Execute"} fontSize={"1rem"} fontWeight={"bold"} />
          </Grid>
        </Grid>
        <div style={{ padding: "1%" }}>
          {listOfUrls.length > 0 && (
            <div>
              {listOfUrls.map((url) => {
                return (
                 <OpenApisListItemHolder url={url}/>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default OpenAPIs;

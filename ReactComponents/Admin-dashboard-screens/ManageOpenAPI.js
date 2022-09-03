import { Grid } from "@mui/material";
import { Button, Divider } from "antd";
import { useState } from "react";
import Heading from "../../Support/Heading";
import CreateRemoteDatabaseAccessUrl from "./Forms/CreateRemoteDatabaseAccessUrl";
import ListOfRemoteDatabaseAccessUrls from "./Lists/ListOfRemoteDatabaseAccessUrls";

const ManageOpenAPI=()=>{
    const [currentOpenedScreen, setCurrentOpenedScreen] = useState(
        <CreateRemoteDatabaseAccessUrl />
      );
    const handleScreenChange = (index) => {
        switch (index) {
          case 0:
            setCurrentOpenedScreen(<ListOfRemoteDatabaseAccessUrls />);
            break;
          case 1:
            setCurrentOpenedScreen(<CreateRemoteDatabaseAccessUrl />);
            break;
        }
      };
    return <div >
       <Grid container>
            {/* <Grid item xs={12}>
                <Heading text={"Remote Database Access Urls"} fontSize="1.5rem" fontWeight="bold"/>
            </Grid> */}
             <Grid item xs={8} style={{borderBottom:"1px solid #7ea69f",padding:"1%"}}>
                {/* Title */}
                <Heading text={"Manage Open APIs"} fontSize={"2rem"} fontWeight="bold"/>
                <Heading text={`Manage developer account and new connection requests along with request hist management`} fontSize={"0.8rem"}/>
            </Grid>
            <Grid item xs={4} style={{textAlign: "center",borderBottom:"1px solid #7ea69f",borderLeft:"1px solid #7ea69f"}}>
                {/* Icon and detail */}
                <img src={"/api-key.png"} width={"120"} height={"120"} />
            </Grid>
            <Grid item xs={2}>
              {/* Sub options 1.List of consumer account and 2.Create new user*/}
              <div
                style={{
                  marginTop: "5%",
                  padding: "5%",
                  borderRight: "1px solid #7ea69f",
                }}
              >
                <div
                  style={{ margin: "5%", cursor: "pointer" }}
                  onClick={() => {
                    handleScreenChange(0);
                  }}
                >
                  {/* <Heading text={"All Open APIs"} fontSize="1rem"/> */}
                  <Button
                    type="secondary"
                    shape="round"
                    style={{ width: "100%" }}
                    size={"middle"}
                  >
                    View Open APIs
                  </Button>
                </div>
                <Divider />
                <div
                  style={{ margin: "5%", cursor: "pointer" }}
                  onClick={() => {
                    handleScreenChange(1);
                  }}
                >
                  <Button
                    type="secondary"
                    shape="round"
                    style={{ width: "100%" }}
                    size={"middle"}
                  >
                    Create Open APIs
                  </Button>
                </div>
                <Divider />
              </div>
            </Grid>
            <Grid item xs={10}>
              {/* Screen of sub options or call them forms and lists */}
              {currentOpenedScreen}
            </Grid>
          </Grid>
    </div>
}
 
export default ManageOpenAPI;
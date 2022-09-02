import { Container } from "@mui/material";
import { useRouter } from "next/router";
import { useState } from "react";
import { useEffect } from "react";
import NavbarWraper from "../../ReactComponents/HomePage-Navbar/NavbarWraper";
import { sendResquestToCentralAPI } from "../../request-manager/requestManager";
import { CREATE_ADMIN_ACCOUNT } from "../../request-manager/requestUrls";
import {
  ALREADY_CREATED_ACCOUNT,
  COULD_NOT_CREATE_ACCOUNT,
} from "../../request-manager/responseCodes";
import Heading from "../../Support/Heading";
const Index = () => {
  const router = useRouter();
  const navigation = useRouter();
  const [serverResponse, setServerResponse] = useState(
    "Please wait we are setting up environment for you..!! "
  );

  const [isDataLoading, setIsDataLoading] = useState(false);
  const [serverResponseCode, setServerResponseCode] = useState(0);

  let user_Id = null;
  let authType = null;

  if (router != undefined) {
    user_Id = router.query.id;
    authType = router.query.authType;
  }

  useEffect(() => {
    if (user_Id != null || user_Id != undefined) {
      setIsDataLoading(true);
      

      sendResquestToCentralAPI("POST", CREATE_ADMIN_ACCOUNT, {
        user_Id: user_Id,
        authType: authType,
        accountType: localStorage.getItem("accountType"),
      }).then(
        async (success) => {
          // Check if account is created or not.
          const data = await success.json();
          console.log("login response", data);
          if (
            data.responseCode == CREATE_ADMIN_ACCOUNT ||
            ALREADY_CREATED_ACCOUNT
          ) {
            // when account is created.

            
            
            setServerResponseCode(data.responseCode);

            if (localStorage.getItem("accountType") == "admin")
              setServerResponse("Redirecting to admin dashboard");
            else if (localStorage.getItem("accountType") == "developer")
              setServerResponse("Redirecting to developer dashboard");

            setTimeout(() => {
              setIsDataLoading(false);
              localStorage.setItem("loggedInUser", JSON.stringify(data));
              if (data.responsePayload.apiKey != undefined)
                localStorage.setItem("apiKey", data.responsePayload.apiKey);
              localStorage.setItem("isLoggedIn", true);
              if (localStorage.getItem("accountType") == "admin")
                navigation.push("/admin-dashboard");
              else if (localStorage.getItem("accountType") == "developer")
                navigation.push("/developer-dashboard/");
              else navigation.push("/Authentication/SignIn");
            }, 2000);
          } else if (data.responseCode == COULD_NOT_CREATE_ACCOUNT) {
            // when could not create account or got an error while creating.
            setServerResponse(data.responseMessage);
          }
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }, [user_Id]);

  return (
    <Container>
      <div style={{ marginTop: "5%", textAlign: "center" }}>
        <div>
        {serverResponseCode == 0 && (
            <div>
              <img
                src="/setingup-enviroment.jpg"
                width="350px"
                height="350px"
              />
            </div>
          )}
          {serverResponseCode == ALREADY_CREATED_ACCOUNT && (
            <div>
              <img
                src="/setingup-enviroment.jpg"
                width="350px"
                height="350px"
              />
            </div>
          )}
          {serverResponseCode == CREATE_ADMIN_ACCOUNT && (
            <div>
              <img
                src="/setingup-enviroment.jpg"
                width="350px"
                height="350px"
              />
            </div>
          )}
           {serverResponseCode == COULD_NOT_CREATE_ACCOUNT && (
            <div>
              <img
                src="/conifer-access-denied.png"
                width="350px"
                height="350px"
              />
            </div>
          )}
        </div>
        <div>
          {isDataLoading == true && (
            <div>
              <img
                src="/output-onlinegiftools.gif"
                width="100px"
                height="100px"
              />
            </div>
          )}
        </div>
        <div>
          <Heading text={serverResponse} fontSize="1rem" />
        </div>
      </div>
    </Container>
  );
};

export default NavbarWraper(Index);

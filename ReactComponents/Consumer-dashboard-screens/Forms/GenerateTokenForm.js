import { ContentCopyOutlined } from "@mui/icons-material";
import { Container, Grid } from "@mui/material";
import { useEffect } from "react";
import { useState } from "react";
import { sendResquestToCentralAPI } from "../../../request-manager/requestManager";
import { GENERATE_HOST_ACCESS_URL_TOKEN, LOAD_LIST_OF_ACTIVE_HOSTS_BY_DEVELOPER_ID } from "../../../request-manager/requestUrls";
import { FETCHED } from "../../../request-manager/responseCodes";
import CustomButton from "../../../Support/CustomButton";
import CustomDropDown from "../../../Support/CustomDropDown";

const GenerateTokenForm = () => {
  const [jwtToken,setJwtToken] = useState(null);
  const [url,setUrl]=useState("");
  const [secretKey,setSecretKey]=useState("");
  const [selectedHost, setSelectedHost] = useState("");
  const [listOfOptions_Hosts, setListOfOptions_Hosts] = useState([
    {
      optionTitle: "Zee",
      optionValue: "Zee",
    },
  ]);

  // console.log("Selected option ",selectedHost)
  useEffect(()=>{
    // load list of hosts...
    const useData = JSON.parse(localStorage.getItem("loggedInUser"));
    const _id = useData.responsePayload._id; 
    sendResquestToCentralAPI("POST", LOAD_LIST_OF_ACTIVE_HOSTS_BY_DEVELOPER_ID,{
     developerId:_id
    }).then(async (success)=>{
      const list = await success.json();
      console.log("Host list",list)
      // (list.responsePayload);
      let temp=[]
      list.responsePayload.forEach((item) => {
          item.listOfDatabases.map((host)=>{
            if(host.hostAcessUrl.status==true){
            let m = {
              optionTitle:host.hostName,
              optionValue:host.hostId,
              hostUrl:host.hostAcessUrl.url
            }
            temp.push(m);
          }
          })
      });
      // console.log("ddas",temp)
      setListOfOptions_Hosts(temp);
    },(error)=>{
      console.log("Error",error)
    })
  },[])


  const [selectedValidationTime, setSelectedValidationTime] = useState("");
  const [listOfOptions_ValidationTime] = useState([
    {
      optionTitle: "1 hour",
      optionValue: "3600s",
    },
    {
      optionTitle: "1 day",
      optionValue: "1d",
    },
    {
      optionTitle: "1 week",
      optionValue: "604800s",
    },
  ]);

  const [selecteEndPoint, setSelectedEndPoint] = useState("");

  const [listOfOptions_EndPoints, setListOfOptions_EndPoints] = useState([
    {
      optionTitle: "https://<our-domain>/<endpoint-address>",
      optionValue: "32",
    },
    {
      optionTitle: "https://<our-domain>/<endpoint-address>",
      optionValue: "32",
    },
    {
      optionTitle: "https://<our-domain>/<endpoint-address>",
      optionValue: "32",
    },
  ]);

  const [isTokenGenerated, setIsTokenGenerated] = useState(false);
  const [generatedConsumerToken, setGeneratedConsumerToken] = useState("");
  
  const handelGenerateToken=()=>{
    console.log(selectedValidationTime)
    const currentSelectedItem = JSON.parse(selectedHost);
    console.log(currentSelectedItem);
    sendResquestToCentralAPI("POST", GENERATE_HOST_ACCESS_URL_TOKEN,{
     hostId:currentSelectedItem.optionValue,
     developerEmail:JSON.parse(localStorage.getItem("loggedInUser")).responsePayload.email,
     expiresIn:JSON.parse(selectedValidationTime).optionValue
    }).then(async (success)=>{
        const data = await success.json();
        console.log("Response  : ",data)
        if(data.responseCode==FETCHED){
          setJwtToken(data.responsePayload.jwtToken);
          setUrl(data.responsePayload.host[0].hostAcessUrl.url);
          setSecretKey(JSON.parse(localStorage.getItem("loggedInUser")).responsePayload.email)
        }
    })
  }
  return (
    <div style={{ width: "100%"}}>
      <Container>
        <Grid container>
          <Grid item xs={4}></Grid>
          <Grid item xs={4}>
            <div style={{ width: "100%" }}>
              {/* Select user */}
              <CustomDropDown
                currentSelectedOption={selectedHost}
                setCurrentSelectedOption={setSelectedHost}
                label="Select Host"
                listOfOptions={listOfOptions_Hosts}
              />
            </div>
            <div style={{ width: "100%", marginTop: "5%" }}>
              {/* Select user */}
              <CustomDropDown
                currentSelectedOption={selectedValidationTime}
                setCurrentSelectedOption={setSelectedValidationTime}
                label="Select Validation time"
                listOfOptions={listOfOptions_ValidationTime}
              />
            </div>
            {/* <div style={{ width: "100%", marginTop: "5%" }}>
            
              <CustomDropDown
                currentSelectedOption={selecteEndPoint}
                setCurrentSelectedOption={setSelectedEndPoint}
                label="Select End point"
                listOfOptions={listOfOptions_EndPoints}
              />
            </div> */}
            <div
              style={{ width: "100%", textAlign: "center", marginTop: "5%" }}
            >
              <CustomButton
                style={{
                  // marginLeft:isMediumScreen? "40%":"35%",
                  // marginTop: isMediumScreen? "3%":"3%",
                  // left: isMediumScreen? "10":"",
                  backgroundColor: "#10365B",
                  // fontSize: isMediumScreen? "0.8rem" :"",
                }}
                onClick={() => {
                  // setIsTokenGenerated(true);
                  // setGeneratedConsumerToken("7654334");
                  handelGenerateToken();
                }}
                name="Generate"
              />
            </div>
            <div style={{ textAlign: "center", marginTop: "5%" }}>
              {
                (jwtToken!=null) && (<div style={{ width: "100%"}}>
                  <CustomButton
                style={{
                  // marginLeft:isMediumScreen? "40%":"35%",
                  // marginTop: isMediumScreen? "3%":"3%",
                  // left: isMediumScreen? "10":"",
                  backgroundColor: "#10365B",
                  // fontSize: isMediumScreen? "0.8rem" :"",
                }}
                onClick={() => {
                  // setIsTokenGenerated(true);
                  // setGeneratedConsumerToken("7654334");
                  // handelGenerateToken();
                  navigator.clipboard.writeText(jwtToken);
                  alert("Token copied")
                }}
                name="Copy Token"
              />
   <CustomButton
                style={{
                  marginLeft:"10%",
                  // marginTop: isMediumScreen? "3%":"3%",
                  // left: isMediumScreen? "10":"",
                  backgroundColor: "#10365B",
                  // fontSize: isMediumScreen? "0.8rem" :"",
                }}
                onClick={() => {
                  // setIsTokenGenerated(true);
                  // setGeneratedConsumerToken("7654334");
                  navigator.clipboard.writeText(url);
                  alert("url copied")
                }}
                name="Copy Url"
              />
                </div>) 
              }
            </div>
          </Grid>
          <Grid item xs={4}></Grid>
          <Grid item xs={4}></Grid>
          <Grid item xs={4}>
            {isTokenGenerated && (
              <div style={{ marginTop: "5%" }}>
                <Grid container>
                  <Grid item xs={3} style={{ textAlign: "center" }}>
                    {/* Id */}
                    {`Token`}
                  </Grid>

                  <Grid item xs={3} style={{ textAlign: "center" }}>
                    {/* Id */}
                    {generatedConsumerToken}
                  </Grid>
                  <Grid item xs={3} style={{ textAlign: "center" }}>
                    {/* Copy button */}
                    <ContentCopyOutlined
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        alert("Copied");
                      }}
                    />
                  </Grid>
                  <Grid item xs={3} style={{ textAlign: "center" }}>
                    <CustomButton
                      style={{
                        // marginLeft:isMediumScreen? "40%":"35%",
                        // marginTop: isMediumScreen? "3%":"3%",
                        // left: isMediumScreen? "10":"",
                        backgroundColor: "#10365B",
                        // fontSize: isMediumScreen? "0.8rem" :"",
                      }}
                      onClick={() => {}}
                      name="Save"
                    />
                  </Grid>
                </Grid>
              </div>
            )}
          </Grid>
          <Grid item xs={4}>
            <div>
              <CustomButton
                style={{
                  // marginLeft:isMediumScreen? "40%":"35%",
                  // marginTop: isMediumScreen? "3%":"3%",
                  // left: isMediumScreen? "10":"",
                  backgroundColor: "#10365B",
                  // fontSize: isMediumScreen? "0.8rem" :"",
                }}
                onClick={() => {}}
                name="How to use?"
              />
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};
export default GenerateTokenForm;

// const GenerateTokenForm=()=>{
//   return <div style={{backgroundColor:"blue", width: "100%"}}>
   
//   </div>
// }

// export default GenerateTokenForm;
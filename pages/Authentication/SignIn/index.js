import { Google, UndoRounded } from "@mui/icons-material";
import {
  Card,
  Container,
  FormControl,
  FormControlLabel,
  Grid,
  Link,
  Radio,
  RadioGroup,
  useMediaQuery,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useRouter } from "next/router";
// import { gapi } from "gapi-script";
// import { useGoogleApi } from 'react-gapi'
import { useGoogleLogin } from "react-use-googlelogin";
import { UserOutlined } from "@ant-design/icons";
import FooterWraper from "../../../ReactComponents/HomePage-Footer/FooterWraper";
import HomePagefooter from "../../../ReactComponents/HomePage-Footer/HomePagefooter";
import NavbarWraper from "../../../ReactComponents/HomePage-Navbar/NavbarWraper";
import fonts from "../../../styles/Fonts";
import Strings from "../../../styles/Strings";
import CustomButton from "../../../Support/CustomButton";
import Heading from "../../../Support/Heading";
import InputField from "../../../Support/InputFields";
import "antd/dist/antd.css";
// Request Manager
import { sendResquestToCentralAPI } from "../../../request-manager/requestManager";
import {
  CHECK_API_STATUS,
  CREATE_ADMIN_ACCOUNT,
  GITHUB_AUTH,
  GOOGLE_AUTH,
  LOGIN_TO_ACCOUNT,
  NO_INTERNET_CONNECTION,
} from "../../../request-manager/requestUrls";

import { useEffect, useState } from "react";
import {
  ALREADY_CREATED_ACCOUNT,
  COULD_NOT_CREATE_ACCOUNT,
  COULD_NOT_LOGIN,
  CREATED_ACCOUNT,
} from "../../../request-manager/responseCodes";

import CustomDialog from "../../../ReactComponents/Dialogues/CustomDialog";
import dialogueTypes from "../../../ReactComponents/Dialogues/dialogueTypes";
import { Input, Switch } from "antd";
import Title from "antd/lib/skeleton/Title";

import { GoogleOutlined, GithubFilled } from "@ant-design/icons";
import { Button } from "antd";
import openNotificationWithIcon from "../../../ReactComponents/Dialogues/Notification";

const useStyles = makeStyles({
  root: {
    marginTop: "5%",
  },
  headingContainer_md: {
    textAlign: "center",
    marginTop: "15%",
  },
  headingContainer_xs: {
    textAlign: "left",
    marginTop: "10%",
    paddingLeft:"5%"
  },
  formContainer_md: {
    marginTop: "7%",
    textAlign: "center",
  },
  formContainer_xs: {
    marginTop: "2%",
    textAlign: "center",
  },
  signInBtnWithOtherBtn_xs: {
    borderStyle: "groove",
    borderWidth: "1px",
    borderRadius: "10%",
  },
  signInBtnWithOtherBtn_xs: {
    borderStyle: "groove",
    borderWidth: "1px",
    borderRadius: "8%",
    marginTop: "5%",
    cursor: "pointer",
  },
  githubButton: {
    borderStyle: "groove",
    borderWidth: "1px",
    borderRadius: "8%",
    marginTop: "5%",
    height: "90%",
    backgroundColor: "black",
    color: "white",
    cursor: "pointer",
  },
});

const Index = (props) => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const classes = useStyles();
  const navigation = useRouter();
  const isMediumScreen = useMediaQuery("(min-width:600px)");
  const [alertType, setAlertType] = useState(null);
  const [openCustomDialog, setOpenCustomDialog] = useState(false);
  const [alertMessage_CustomDialog, setAlertMessage_CustomDialog] =
    useState("");
  const [alertTitle_CustomDialog, setAlertTitle_CustomDialog] = useState("");
  const [accountType, setAccountType] = useState(null);
  
  const router = useRouter();

  let user_Id = null;
  let authType = null;

  if (router != undefined) {
    user_Id = router.query.id;
    authType = router.query.authType;
  }
 
  

  useEffect(() => {
    
    if (user_Id != null || user_Id != undefined) {

      displayDialog(
        dialogueTypes.SETTING_UP_ENVIRONMENT,
        "Setting Up The Environment",
        "Please wait until we finish up setup. Have patience it will not take too long.."
      );

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
            localStorage.setItem("loggedInUser", JSON.stringify(data));
            if (data.responsePayload.apiKey != undefined)
              localStorage.setItem("apiKey", data.responsePayload.apiKey);
            localStorage.setItem("isLoggedIn", true);
            if (localStorage.getItem("accountType") == "admin")
              navigation.push("/admin-dashboard");
            else if (localStorage.getItem("accountType") == "developer")
              navigation.push("/developer-dashboard/");
            else navigation.push("/Authentication/SignIn");
            handleClose_CustomDialog();
          } else if (data.responseCode == COULD_NOT_CREATE_ACCOUNT) {
            // when coul not create acconut or got an error while creating.
            setAlertType(dialogueTypes.INFO);
            setAlertTitle_CustomDialog("Something wrong went");
            setAlertMessage_CustomDialog(data.responseMessage);
            handleClickOpen_CustomDialog();
          }
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }, [user_Id]);

  // const handleChange = (event) => {
  //   setAccountType(event.target.value);
  //   localStorage.setItem("accountType", event.target.value);
  // };

  const googleAuth = useGoogleLogin({
    clientId:
      "1021611673334-buf3dq11lnl5hb17jd5ohbvkhhkgh93d.apps.googleusercontent.com",
  });

  const handleClickOpen_CustomDialog = () => {
    setOpenCustomDialog(true);
  };
  const handleClose_CustomDialog = () => {
    setOpenCustomDialog(false);
  };

  // const signIn = () => {

  // };

  // const googleSignIn = () => {

  // };

  // const githubSignIn = () => {

  // };

  const displayDialog = (dialogType, dialogTitle, dialogMessage) => {
    setAlertMessage_CustomDialog(dialogMessage);
    setAlertTitle_CustomDialog(dialogTitle);
    setAlertType(dialogType);
    handleClickOpen_CustomDialog();
  };

  const [loadingsForSignIn, setLoadingsForSignIn] = useState([]);
  const [loadingsForGoogleBtn, setLoadingsForGoogleBtn] = useState([]);
  const [loadingsForGithubBtn, setLoadingsForGithubBtn] = useState([]);

  const enterLoading_signInBtn = (index) => {
    
    if (email != null && password != null && accountType != null) {
      setLoadingsForSignIn((prevLoadings) => {
        const newLoadings = [...prevLoadings];
        newLoadings[index] = true;
        return newLoadings;
      });

      sendResquestToCentralAPI("POST", LOGIN_TO_ACCOUNT, {
        email: email,
        password: password,
        accountType: accountType,
      })
        .then((resp) => resp.json())
        .then((data) => {

          setLoadingsForSignIn((prevLoadings) => {
            const newLoadings = [...prevLoadings];
            newLoadings[index] = false;
            return newLoadings;
          });        

          if (data.responseCode == COULD_NOT_LOGIN) {
            openNotificationWithIcon("warning","Server response",data.responseMessage,"bottom")
          } else {
            openNotificationWithIcon("info","Server response",data.responseMessage,"bottom")
    
            localStorage.setItem("loggedInUser", JSON.stringify(data));
            if (data.responsePayload.apiKey != undefined)
              localStorage.setItem("apiKey", data.responsePayload.apiKey);
            localStorage.setItem("isLoggedIn", true);
            if (localStorage.getItem("accountType") == "admin")
              navigation.push("/admin-dashboard");
            else if (localStorage.getItem("accountType") == "developer")
              navigation.push("/developer-dashboard/");
            else navigation.push("/Authentication/SignIn");
          }
        }).catch((error)=>{
          console.log("error catched")
          openNotificationWithIcon("error","Server response","Seems there is internet connection problem","bottom")
        })
    } else {
      
      openNotificationWithIcon("warning","Invalid input","Please fill all the filed","bottom")
      
    }
  };

  const enterLoading_googleBtn = (index) => {
    if (accountType != null) {
      setLoadingsForGoogleBtn((prevLoadings) => {
        const newLoadings = [...prevLoadings];
        newLoadings[index] = true;
        return newLoadings;
      });
      //set navigation if api is running.
      sendResquestToCentralAPI("GET",CHECK_API_STATUS,{}).then((resp)=>resp.json).then((data)=>{
        navigation.push(GOOGLE_AUTH);
      }).catch((error)=>{
        navigation.push(NO_INTERNET_CONNECTION);
      })
    } else {
     
      openNotificationWithIcon("warning","Invalid input","Please choose account type","bottom")
     
    }
   
  };

  const enterLoading_githubBtn = (index) => {
    if (accountType != null) {
      setLoadingsForGithubBtn((prevLoadings) => {
        const newLoadings = [...prevLoadings];
        newLoadings[index] = true;
        return newLoadings;
      });
      sendResquestToCentralAPI("GET",CHECK_API_STATUS,{}).then((resp)=>resp.json).then((data)=>{
        navigation.push(GITHUB_AUTH);
      }).catch((error)=>{
        navigation.push(NO_INTERNET_CONNECTION);
      })
      // navigation.push(GITHUB_AUTH);
    } else {
      
      openNotificationWithIcon("warning","Invalid input","Please choose account type","bottom")
     
    }

    
  };

  return (
    <div className={classes.root}>
      <Container>
        <Grid container>
          <Grid item md={8} style={{display: isMediumScreen?"block":"none"}}>
            {/* Image side */}
            <img
              src="/home-page/signinvector.png"
              width={isMediumScreen ? "70%" : "100%"}
            />
          </Grid>
          <Grid item md={4} xs={12}>
            {/* Form */}
            <div>
              <div
                className={
                  isMediumScreen
                    ? classes.headingContainer_md
                    : classes.headingContainer_xs
                }
              >
                <Heading
                  text={Strings.SignInPage.Heading1}
                  fontSize="2.5rem"
                  fontWeight="bold"
                  fontFamily={fonts.style1}
                />
              </div>
              <Grid
                container
                className={
                  isMediumScreen
                    ? classes.formContainer_md
                    : classes.formContainer_xs
                }
              >
                <Grid item xs={12}>
                  <div style={{ paddingLeft: "10%", paddingRight: "10%" }}>
                    {/* <InputField
                      placeholder={"Email"}
                     value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                    /> */}
                    <Input
                      style={{
                        fontSize: "1rem",
                        padding: "0.7rem",
                        borderRadius: "5rem",
                      }}
                      autoSize={true}
                      type="text"
                      bordered={true}
                      size="large"
                      prefix={<UserOutlined />}
                      // showCount={true}
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                      value={email}
                      placeholder="Type email"
                    />
                  </div>
                </Grid>
                <Grid item xs={12}>
                  <div
                    style={{
                      marginTop: "5%",
                      paddingLeft: "10%",
                      paddingRight: "10%",
                    }}
                  >
                    {/* <InputField
                      placeholder={"Password"}
                      value={password}
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                    /> */}
                    <Input.Password
                      style={{
                        fontSize: "1rem",
                        padding: "0.7rem",
                        borderRadius: "5rem",
                      }}
                      autoSize={true}
                      size="large"
                      placeholder="input password"
                      value={password}
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                    />
                  </div>
                </Grid>

                <Grid item md={12} xs={12}>
                  {/* <FormControl style={{ marginTop: "3%" }}>
                     <RadioGroup
                      row
                      aria-labelledby="demo-controlled-radio-buttons-group"
                      name="controlled-radio-buttons-group"
                      accountType={accountType}
                      onChange={handleChange}
                    >
                      <FormControlLabel
                        value="admin"
                        control={
                          <Radio
                            sx={{
                              color: "blue",
                              "&.Mui-checked": {
                                color: "red",
                              },
                            }}
                          />
                        }
                        label="Admin"
                      />
                      <FormControlLabel
                        value="developer"
                        control={
                          <Radio
                            sx={{
                              color: "blue",
                              "&.Mui-checked": {
                                color: "red",
                              },
                            }}
                          />
                        }
                        label="Developer"
                      />
                    </RadioGroup>
                  </FormControl> */}
                  <div style={{ marginTop: "4%" }}>
                    <h5>Select account type</h5>
                    <Switch
                      checkedChildren="I am admin"
                      unCheckedChildren="I am developer"
                      defaultChecked
                      onChange={(e) => {
                        if (e) {
                          //admin
                          localStorage.setItem("accountType", "admin");
                          setAccountType("admin")
                        } else {
                          //developer
                          localStorage.setItem("accountType", "developer");
                          setAccountType("developer")
                        }
                      }}
                    />
                  </div>
                </Grid>

                <Grid item md={12} xs={12}>
                  <div style={{ marginTop: "3%" }}>
                    {/* <CustomButton
                      style={{
                        // marginLeft:isMediumScreen? "40%":"35%",
                        marginTop: isMediumScreen ? "3%" : "3%",
                        // left: isMediumScreen? "10":"",
                        backgroundColor: "#10365B",
                        fontSize: isMediumScreen ? "0.8rem" : "",
                      }}
                      onClick={() => {
                        signIn();
                      }}
                      name="Sin in"
                    /> */}
                    <Button
                      type="secondary"
                      style={{ color: "black" }}
                      size="large"
                      shape="round"
                      loading={loadingsForSignIn[0]}
                      onClick={() => enterLoading_signInBtn(0)}
                    >
                      Sign In
                    </Button>
                  </div>
                </Grid>

                <Grid
                  item
                  md={12}
                  xs={12}
                  style={{
                    paddingLeft: "5%",
                    paddingRight: "5%",
                    marginTop: "2%",
                  }}
                >
                  {/* <div
                    onClick={() => {
                      githubSignIn();
                    }}
                    className={
                      isMediumScreen
                        ? classes.signInBtnWithOtherBtn_xs
                        : classes.signInBtnWithOtherBtn_xs
                    }
                  >
                    <img
                      src="/home-page/github.png"
                      width={isMediumScreen ? "35%" : "30%   "}
                    />
                  </div> */}
                  <Button
                    // type="primary"
                    style={{ backgroundColor: "black", color: "white" }}
                    size="large"
                    shape="round"
                    icon={<GithubFilled />}
                    loading={loadingsForGithubBtn[2]}
                    onClick={() => enterLoading_githubBtn(2)}
                  >
                    Continue with Github
                  </Button>
                </Grid>
                <Grid
                  item
                  md={12}
                  xs={12}
                  style={{
                    paddingLeft: "5%",
                    paddingRight: "5%",
                    marginTop: "2%",
                  }}
                >
                  {/* <div
                    onClick={() => {
                      googleSignIn();
                    }}
                    className={
                      isMediumScreen
                        ? classes.signInBtnWithOtherBtn_xs
                        : classes.signInBtnWithOtherBtn_xs
                    }
                  >
                    <img
                      src="/home-page/google.png"
                      width={isMediumScreen ? "35%" : "30%   "}
                    /> */}

                  <Button
                    type="danger"
                    // style={{backgroundColor:"red"}}
                    size="large"
                    shape="round"
                    icon={<GoogleOutlined />}
                    loading={loadingsForGoogleBtn[2]}
                    onClick={() => enterLoading_googleBtn(2)}
                  >
                    Continue with Google
                  </Button>

                  {/* </div> */}
                </Grid>
                <Grid
                  item
                  md={12}
                  xs={12}
                  style={{
                    marginTop: "2%",
                    textDecoration: "underline",
                    textAlign: "center",
                  }}
                >
                  <a
                    style={{ fontSize: "0.8rem" }}
                    onClick={() => {
                      navigation.push("/Authentication/SignUp");
                    }}
                  >
                    {"Don't have account? Create one"}
                  </a>
                </Grid>
              </Grid>
            </div>
          </Grid>
        </Grid>
        <></>

        <CustomDialog
          alertType={alertType}
          handleClickOpen={handleClickOpen_CustomDialog}
          handleCloseEvent={handleClose_CustomDialog}
          open={openCustomDialog}
          alertMessage={alertMessage_CustomDialog}
          alertTitle={alertTitle_CustomDialog}
        />
      </Container>
    </div>
  );
};

// This gets called on every request

// export async function getServerSideProps({ query }) {

// Here we are doing two things. First is to get the encrypted user id and making request again for creating account. Then we  // Second is to get the jwt token for session verification.
// const user_Id = query.id;
// const authType = query.authType;
// let payload = null;
// if (user_Id==null) {
//   return {
//     props: {
//       isThereAnyInternalError: false,
//       payload: payload,
//     },
//   };
// }

// const response=null;
// console.log("Making post request to create account");

// await sendResquestToCentralAPI("POST", CREATE_ADMIN_ACCOUNT, {
//   user_Id: user_Id,
//   authType: authType,
// })
//   .then(async (response) => {
//     // console.log("Resp status:",response.status);
//     // we have status codes :
//     // - 200 for success of request with not server error
//     // - 501 for invalid user id [error in decryption];

//     if (response.status == 200) {
//       const data = await response.json();
//       // console.log(data);
//       // return {
//       //   props: {
//       //     isThereAnyInternalError: false,
//       //     payload: data,
//       //   },
//       // };

//       response =  {
//             isThereAnyInternalError: false,
//             payload: data,
//       }

//     } else if (response.status == 501) {

//       // return {
//       //   props: {
//       //     isThereAnyInternalError: true,
//       //     payload: {
//       //       responseMessage: "Could not decrypt the user id",
//       //     },
//       //   },
//       // };

//       response =  {
//         isThereAnyInternalError: true,
//         payload: {
//           responseMessage: "Could not decrypt the user id",
//         },
//       };

//     }
//   })
//   .catch((error) => {
//     // return {
//     //   props: {
//     //     isThereAnyInternalError: true,
//     //     payload: {
//     //       responseMessage: error.message,
//     //     },
//     //   },
//     // };
//     reesponse= {
//           isThereAnyInternalError: true,
//           payload: {
//             responseMessage: error.message,
//           }
//     }

//   });

// console.log("returning the response after making request"+response);

// console.log("Making account request")
// let response = await fetch(`}${CREATE_ADMIN_ACCOUNT}`, {
//   method: 'POST', // *GET, POST, PUT, DELETE, etc.
//   mode: 'cors', // no-cors, *cors, same-origin
//   headers: {
//     'Content-Type': 'application/json',
//     Accept: 'application/json',
//     // 'Content-Type': 'application/x-www-form-urlencoded',
//     'User-Agent': '*',
//   },
//   body: JSON.stringify({
//     user_Id: user_Id,
//     authType: authType,
//   }) // body data type must match "Content-Type" header
// });

// response = await response.json();
// console.log("RESPONSE : ",response);
// let data ={
//   name:"ze"
// }

//   return {
//     props: {
//       name:"Zeeshan"
//     }
//   }

// }

export default FooterWraper(NavbarWraper(Index));

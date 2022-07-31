import { Google } from "@mui/icons-material";
import { Card, Container, FormControl, FormControlLabel, Grid, Link, Radio, RadioGroup, useMediaQuery } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useRouter } from "next/router";
// import { gapi } from "gapi-script";
// import { useGoogleApi } from 'react-gapi'
import { useGoogleLogin } from "react-use-googlelogin";

import FooterWraper from "../../../ReactComponents/HomePage-Footer/FooterWraper";
import HomePagefooter from "../../../ReactComponents/HomePage-Footer/HomePagefooter";
import NavbarWraper from "../../../ReactComponents/HomePage-Navbar/NavbarWraper";
import fonts from "../../../styles/Fonts";
import Strings from "../../../styles/Strings";
import CustomButton from "../../../Support/CustomButton";
import Heading from "../../../Support/Heading";
import InputField from "../../../Support/InputFields";

// Request Manager
import { sendResquestToCentralAPI } from "../../../request-manager/requestManager";
import { CREATE_ADMIN_ACCOUNT, GITHUB_AUTH, GOOGLE_AUTH } from "../../../request-manager/requestUrls";

import { useEffect, useState } from "react";
import { ALREADY_CREATED_ACCOUNT, COULD_NOT_CREATE_ACCOUNT,CREATED_ACCOUNT } from "../../../request-manager/responseCodes";

import CustomDialog from '../../../ReactComponents/Dialogues/CustomDialog'
import dialogueTypes from '../../../ReactComponents/Dialogues/dialogueTypes'
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
    marginTop: "0%",
  },
  formContainer_md: {
    marginTop: "10%",
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

  const classes = useStyles();
  const navigation = useRouter();
  const isMediumScreen = useMediaQuery("(min-width:600px)");
  const [alertType,setAlertType]=useState(null);
  const [openCustomDialog, setOpenCustomDialog] = useState(false);
  const [alertMessage_CustomDialog,setAlertMessage_CustomDialog]=useState("");
  const [alertTitle_CustomDialog,setAlertTitle_CustomDialog]=useState("");
  const [accountType, setAccountType] = useState(null);

  

  const router = useRouter()
  let user_Id=null;
  let authType=null;
  if(router!=undefined){
    user_Id = router.query.id;
    authType = router.query.authType;
  }

useEffect(()=>{

      if(user_Id!=null || user_Id!=undefined)
      {
        sendResquestToCentralAPI("POST", CREATE_ADMIN_ACCOUNT,{
          user_Id: user_Id,
          authType: authType,
          accountType:localStorage.getItem("accountType")
        }).then(async (success)=>{
            // Check if account is created or not.
            const data = await success.json();
            console.log("login response",data)
            if(data.responseCode==CREATE_ADMIN_ACCOUNT || ALREADY_CREATED_ACCOUNT)
            {
              // when account is created.
              localStorage.setItem("loggedInUser",JSON.stringify(data));
              localStorage.setItem("isLoggedIn",true)
              if(localStorage.getItem("accountType")=="admin")
              navigation.push("/admin-dashboard");
              else  if(localStorage.getItem("accountType")=="developer")
              navigation.push("/developer-dashboard/");
              else 
              navigation.push("/Authentication/SignIn");
            }
            else if(data.responseCode==COULD_NOT_CREATE_ACCOUNT){
              // when coul not create acconut or got an error while creating. 
              setAlertType(dialogueTypes.INFO)
              setAlertTitle_CustomDialog("Something wrong went");
              setAlertMessage_CustomDialog(data.responseMessage);
              handleClickOpen_CustomDialog();
            }
        },(error)=>{
          // When 
          console.log(error);   
          console.log('hell') 
       
        })
      }
        
    
  },[user_Id])

  
  const handleChange = (event) => {
    setAccountType(event.target.value);
    localStorage.setItem('accountType',event.target.value);
  };
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


  const signIn=()=>{
    handleClickOpen_CustomDialog();
  }

  const googleSignIn = () => {
    if(accountType!=null){
      navigation.push(GOOGLE_AUTH);
    }else {
      displayDialog(dialogueTypes.INFO,"Invalid Input","Please choose account type")
    }
  };

  const githubSignIn = () => {
    if(accountType!=null){
    navigation.push(GITHUB_AUTH);
    }else{
      displayDialog(dialogueTypes.INFO,"Invalid Input","Please choose account type")
    }
  };


 

  const displayDialog = (dialogType,dialogTitle,dialogMessage) => {
    setAlertMessage_CustomDialog(dialogMessage);
    setAlertTitle_CustomDialog(dialogTitle);
    setAlertType(dialogType);
    handleClickOpen_CustomDialog();
  }


  return (
    <div className={classes.root}>
      <Container>
        <Grid container>
          <Grid item md={8} xs={12}>
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
                <Grid item md={12}>
                  <div>
                    <InputField
                      placeholder={"User Name"}
                      //   accountType={""}
                      onChange={(e) => {
                        console.log(e.target.accountType);
                      }}
                    />
                  </div>
                </Grid>
                <Grid item md={12}>
                  <div style={{ marginTop: "5%" }}>
                    <InputField
                      placeholder={"Password"}
                      //   accountType={""}
                      onChange={(e) => {
                        console.log(e.target.accountType);
                      }}
                    />
                  </div>
                </Grid>

              
                <Grid item md={12} xs={12}>
                  <FormControl style={{ marginTop: "3%" }}>
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
                  </FormControl>
                </Grid>

                <Grid item md={12} xs={12}>
                  <div>
                    <CustomButton
                      style={{
                        // marginLeft:isMediumScreen? "40%":"35%",
                        marginTop: isMediumScreen ? "3%" : "3%",
                        // left: isMediumScreen? "10":"",
                        backgroundColor: "#10365B",
                        fontSize: isMediumScreen ? "0.8rem" : "",
                      }}
                      onClick={() => {
                        // localStorage.setItem("isLoggedIn", true);
                        // navigation.push("/admin-dashboard");
                        signIn();
                      }}
                      name="Sin in"
                    />
                  </div>
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
                <Grid item md={1} xs={0}></Grid>
                <Grid
                  item
                  md={5}
                  xs={12}
                  style={{ paddingLeft: "5%", paddingRight: "5%" }}
                >
                  <div
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
                  </div>
                </Grid>
                <Grid
                  item
                  md={5}
                  xs={12}
                  style={{ paddingLeft: "5%", paddingRight: "5%" }}
                >
                  <div
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
                    />
                  </div>
                </Grid>
                <Grid item md={1} xs={0}></Grid>
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

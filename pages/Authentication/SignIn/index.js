import { Google } from "@mui/icons-material";
import { Card, Container, Grid, Link, useMediaQuery } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useRouter } from "next/router";
import { useParams } from "react-router";
// import useSWR from 'swr';

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
import { CREATE_ADMIN_ACCOUNT, SERVER_URL } from "../../../request-manager/requestUrls";
import { useEffect, useState } from "react";
import { COULD_NOT_CREATE_ACCOUNT } from "../../../request-manager/responseCodes";
import InfoDialog from "../../../ReactComponents/Dialogues/InfoDialog";

// const fetcher = (...args) => fetch(...args).then((res) => res.json())

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
  const [alertType,setAlertType]=useState("Info");
  const [openInfoDialogDialog, setOpenInfoDialogDialog] = useState(false);
  const [alertMessage_InfoDialog,setAlertMessage_InfoDialog]=useState("");
  const [alertTitle_InfoDialog,setAlertTitle_InfoDialog]=useState("");

  // const { data, error } = useSWR('/api/test_api', fetcher);
  // console.log(data)

  useEffect(()=>{
    console.log("I am here meri jan")
  },[]);

  // Getting values from query string.

  // let { id } = useParams();

  // const [accounts, setAccounts] = useState([]);

  // useEffect(() => { 
  //     const fetchData= async () => {
  //       console.log("Fetching")
  //       const response = await fetch('/api/test_api')
  //       const data = await response.json()
  //       console.log(data)
  //       setAccounts(data)
  //     };

  //     fetchData();

  //   },[])

    // console.log("Accounts ",accounts)

  // const authentication =  ()=>{
    
  //   sendResquestToCentralAPI("POST", CREATE_ADMIN_ACCOUNT, {
  //     // user_Id: user_Id,
  //     // authType: authType,
  //   }).then(async (response) => {
  //       // console.log("Resp status:",response.status);
  //       // we have status codes :
  //       // - 200 for success of request with not server error
  //       // - 501 for invalid user id [error in decryption];
  //       console.log(response)
  //       if (response.status == 200) {
  //         const data = await response.json();
  //         console.log(data);
  //         // check if user is loggged in out not
          
  //       } else if (response.status == 501) {
  //         // problem line failed to encrypt
  //         console.log("Server error")
  //       }
  //     })
  //     .catch((error) => {
  //       console.log("Error")
  //       console.log(error.message)
  //     }); 
  // }



  // authentication();


  // Checking if user is authenticated and authorized.  
  
  // props.payload //u get the response .
  // if (props.isThereAnyInternalError === false) 
  // {    
    // Request to get jwt token is sent and in payload we have response.
  //   if (props.payload.responseCode == CREATED_ACCOUNT) {
  //     // created the account
  //     console.log(" -------------- Account created ------------");

  //   } else if ((props.payload.responseCode = COULD_NOT_CREATE_ACCOUNT)) {
  //     // could'nt create account

  //     console.log("Could not create the account");
  //     setAlertType("Info");
  //     setAlertTitle_InfoDialog("Server Response");
  //     setAlertMessage_InfoDialog(" Could Not create account");
  //     handleClickOpen_InfoDialog();

  //   }
  // }
  // else {
  //   // still no auth request is sent.
  //   console.log("No auth req is sent")
  // }

  const googleAuth = useGoogleLogin({
    clientId:
      "1021611673334-buf3dq11lnl5hb17jd5ohbvkhhkgh93d.apps.googleusercontent.com",
  });

  const handleClickOpen_InfoDialog = () => {
    setOpenInfoDialogDialog(true);
  };
  const handleClose_InfoDialog = () => {
    setOpenInfoDialogDialog(false);
  };


  const signIn=()=>{
    handleClickOpen_InfoDialog();
  }

  const googleSignIn = () => {
    navigation.push("http://localhost:3003/auth-api/googleAuthentication");
  };

  const githubSignIn = () => {
    navigation.push("http://localhost:3003//auth-api/githubAuhentication");
  };

  // if (error) return <div>failed to load</div>
  // if (!data) return <div>loading...</div>

  if (error) return <div style={{marginTop: "5%" }}>failed to load </div>
  if (!data) return <div style={{marginTop: "5%" }}>loading...</div>

  // useEffect(()=>{
  //   console.log("Data",data)
  // },[data,error]);

  // render data
  return <div style={{marginTop: "5%" }}>hello {data.name}!</div>

  // return <div style={{marginTop: "5%" }}>

  // </div>
  // render data
  // return <div style={{marginTop:"5%"}}>hello {data.name}!</div>
  // return (
  //   <div className={classes.root}>
  //     <Container>
  //       <Grid container>
  //         <Grid item md={8} xs={12}>
            {/* Image side */}
          //   <img
          //     src="/home-page/signinvector.png"
          //     width={isMediumScreen ? "70%" : "100%"}
          //   />
          // </Grid>
          // <Grid item md={4} xs={12}>
            {/* Form */}
  //           <div>
  //             <div
  //               className={
  //                 isMediumScreen
  //                   ? classes.headingContainer_md
  //                   : classes.headingContainer_xs
  //               }
  //             >
  //               <Heading
  //                 text={Strings.SignInPage.Heading1}
  //                 fontSize="2.5rem"
  //                 fontWeight="bold"
  //                 fontFamily={fonts.style1}
  //               />
  //             </div>
  //             <Grid
  //               container
  //               className={
  //                 isMediumScreen
  //                   ? classes.formContainer_md
  //                   : classes.formContainer_xs
  //               }
  //             >
  //               <Grid item md={12}>
  //                 <div>
  //                   <InputField
  //                     placeholder={"User Name"}
  //                     //   value={""}
  //                     onChange={(e) => {
  //                       console.log(e.target.value);
  //                     }}
  //                   />
  //                 </div>
  //               </Grid>
  //               <Grid item md={12}>
  //                 <div style={{ marginTop: "5%" }}>
  //                   <InputField
  //                     placeholder={"Password"}
  //                     //   value={""}
  //                     onChange={(e) => {
  //                       console.log(e.target.value);
  //                     }}
  //                   />
  //                 </div>
  //               </Grid>
  //               <Grid item md={12} xs={12}>
  //                 <div>
  //                   <CustomButton
  //                     style={{
  //                       // marginLeft:isMediumScreen? "40%":"35%",
  //                       marginTop: isMediumScreen ? "3%" : "3%",
  //                       // left: isMediumScreen? "10":"",
  //                       backgroundColor: "#10365B",
  //                       fontSize: isMediumScreen ? "0.8rem" : "",
  //                     }}
  //                     onClick={() => {
  //                       // localStorage.setItem("isLoggedIn", true);
  //                       // navigation.push("/admin-dashboard");
  //                       signIn();
  //                     }}
  //                     name="Sin in"
  //                   />
  //                 </div>
  //               </Grid>
  //               <Grid
  //                 item
  //                 md={12}
  //                 xs={12}
  //                 style={{
  //                   marginTop: "2%",
  //                   textDecoration: "underline",
  //                   textAlign: "center",
  //                 }}
  //               >
  //                 <a
  //                   style={{ fontSize: "0.8rem" }}
  //                   onClick={() => {
  //                     navigation.push("/Authentication/SignUp");
  //                   }}
  //                 >
  //                   {"Don't have account? Create one"}
  //                 </a>
  //               </Grid>
  //               <Grid item md={1} xs={0}></Grid>
  //               <Grid
  //                 item
  //                 md={5}
  //                 xs={12}
  //                 style={{ paddingLeft: "5%", paddingRight: "5%" }}
  //               >
  //                 <div
  //                   onClick={() => {
  //                     githubSignIn();
  //                   }}
  //                   className={
  //                     isMediumScreen
  //                       ? classes.signInBtnWithOtherBtn_xs
  //                       : classes.signInBtnWithOtherBtn_xs
  //                   }
  //                 >
  //                   <img
  //                     src="/home-page/github.png"
  //                     width={isMediumScreen ? "35%" : "30%   "}
  //                   />
  //                 </div>
  //               </Grid>
  //               <Grid
  //                 item
  //                 md={5}
  //                 xs={12}
  //                 style={{ paddingLeft: "5%", paddingRight: "5%" }}
  //               >
  //                 <div
  //                   onClick={() => {
  //                     googleSignIn();
  //                   }}
  //                   className={
  //                     isMediumScreen
  //                       ? classes.signInBtnWithOtherBtn_xs
  //                       : classes.signInBtnWithOtherBtn_xs
  //                   }
  //                 >
  //                   <img
  //                     src="/home-page/google.png"
  //                     width={isMediumScreen ? "35%" : "30%   "}
  //                   />
  //                 </div>
  //               </Grid>
  //               <Grid item md={1} xs={0}></Grid> 
  //             </Grid>
  //           </div>
         
  //         </Grid>
  //       </Grid>
  //       <></>

  //       <InfoDialog
  //         alertType={alertType}
  //         handleClickOpen={handleClickOpen_InfoDialog}
  //         handleCloseEvent={handleClose_InfoDialog}
  //         open={openInfoDialogDialog}
  //         alertMessage={alertMessage_InfoDialog}
  //         alertTitle={alertTitle_InfoDialog}
  //       />
  //     </Container>
  //   </div>
  // );
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
  // let response = await fetch(`${SERVER_URL}${CREATE_ADMIN_ACCOUNT}`, {
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
//     props: {}
//   }

// }

export default FooterWraper(NavbarWraper(Index));

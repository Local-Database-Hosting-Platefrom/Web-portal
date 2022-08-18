import { Google } from "@mui/icons-material";
import { Card, Container, Grid, Link, useMediaQuery } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useRouter } from "next/router";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { useFormik } from "formik";
import FooterWraper from "../../../ReactComponents/HomePage-Footer/FooterWraper";
import HomePagefooter from "../../../ReactComponents/HomePage-Footer/HomePagefooter";
import NavbarWraper from "../../../ReactComponents/HomePage-Navbar/NavbarWraper";
import fonts from "../../../styles/Fonts";
import Strings from "../../../styles/Strings";
import CustomButton from "../../../Support/CustomButton";
import Heading from "../../../Support/Heading";
import InputField from "../../../Support/InputFields";
import { useState } from "react";
import { useEffect } from "react";
import { BACK_END_BASE_URL } from "../../../request-manager/urls";
import { sendResquestToCentralAPI } from "../../../request-manager/requestManager";
import {
  CREATE_ADMIN_ACCOUNT,
  GET_UNIQUE_ID,
} from "../../../request-manager/requestUrls";
import "antd/dist/antd.css";
import { Button, Input, Switch, Tooltip } from "antd";
import CountryPhoneInput, { ConfigProvider } from "antd-country-phone-input";
import en from "world_countries_lists/data/countries/en/world.json";
import "antd-country-phone-input/dist/index.css";

const useStyles = makeStyles({
  root: {
    marginTop: "5%",
    paddingBottom: "5%",
  },
  headingContainer_md: {
    textAlign: "center",
    marginTop: "8%",
  },
  headingContainer_xs: {
    textAlign: "left",
    marginTop: "0%",
  },
  formContainer_md: {
    marginTop: "8%",
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
  },
});

const regex = /\S+@\S+\.\S+/;

const Index = () => {
  const classes = useStyles();
  const navigation = useRouter();
  const isMediumScreen = useMediaQuery("(min-width:600px)");
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [mobileNumber, setMobileNumber] = useState(null);
  const [value, setValue] = useState("female");
  const [isMobileNumberInvalid, setIsMobileNumberInvalid] = useState(false);
  const [isEmailInvalid, setIsEmailInvalid] = useState(false);
  const [isPasswordInvalid, setIsPasswordInvalid] = useState(false);
  const [isAllInputsInvalid, setIsAllInputsInvalid] = useState(false);

  const [loadingsForSignIn, setLoadingsForSignIn] = useState([]);

  // const formik = useFormik({
  //   initialValues: {
  //     firstName:"",
  //     lastName:"",
  //     email:"",
  //     password:"",
  //   },
  //   onSubmit: (values) => {

  //   },
  // });

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSignUp = async () => {};

  const googleSignIn = () => {
    navigation.push(`${BACK_END_BASE_URL}/auth-api/googleAuthentication`);
  };

  const githubSignIn = () => {
    navigation.push(`${BACK_END_BASE_URL}/auth-api/githubAuhentication`);
  };

  const enterLoading_signInBtn = (index) => {
    if (
      firstName != null &&
      lastName != null &&
      email != null &&
      password != null &&
      mobileNumber != null
    ) {
      setLoadingsForSignIn((prevLoadings) => {
        const newLoadings = [...prevLoadings];
        newLoadings[index] = true;
        return newLoadings;
      });
      alert(mobileNumber)
      sendResquestToCentralAPI("GET", GET_UNIQUE_ID, {})
        .then((resp) => resp.json())
        .then((response) => {
          // console.log()
          const user_Id = response.payload;
          sendResquestToCentralAPI("POST", CREATE_ADMIN_ACCOUNT, {
            firstName,
            lastName,
            email,
            password,
            mobileNumber,
            accountType: value,
            authType: "userName&Password",
            user_Id: user_Id,
          })
            .then((resp) => resp.json())
            .then((data) => {
              setLoadingsForSignIn((prevLoadings) => {
                const newLoadings = [...prevLoadings];
                newLoadings[index] = false;
                return newLoadings;
              });
              alert(JSON.stringify(data));
            });
        });
    } else {
      // alert("Please do not provide any empty field");
      setIsAllInputsInvalid(true);
      setTimeout(() => {
        setIsAllInputsInvalid(false);
      }, 3000);
    }

    // setTimeout(() => {
    //   // setLoadings((prevLoadings) => {
    //   //   const newLoadings = [...prevLoadings];
    //   //   newLoadings[index] = false;
    //   //   return newLoadings;
    //   // });
    // }, 3000);
  };
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
                  text={Strings.SignUpPage.Heading1}
                  fontSize="2.2rem"
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
                  <div style={{ paddingLeft: "10%", paddingRight: "10%" }}>
                    {/* <InputField
                      placeholder={"First Name"}
                      value={firstName}
                      onChange={(e) => {
                        setFirstName(e.target.value);
                        // console.log(e.target.value)
                      }} */}
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
                      // prefix={<UserOutlined />}
                      // showCount={true}
                      onChange={(e) => {
                        setFirstName(e.target.value);
                      }}
                      value={firstName}
                      placeholder="First Name"
                    />
                  </div>
                </Grid>
                <Grid item md={12}>
                  <div
                    style={{
                      marginTop: "3%",
                      paddingLeft: "10%",
                      paddingRight: "10%",
                    }}
                  >
                    {/* <InputField
                      placeholder={"Last Name"}
                      value={lastName}
                      onChange={(e) => {
                        setLastName(e.target.value);
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
                      // prefix={<UserOutlined />}
                      // showCount={true}
                      onChange={(e) => {
                        setLastName(e.target.value);
                      }}
                      value={lastName}
                      placeholder="Last Name"
                    />
                  </div>
                </Grid>
                <Grid item md={12}>
                  <div
                    style={{
                      marginTop: "3%",
                      paddingLeft: "10%",
                      paddingRight: "10%",
                    }}
                  >
                    {/* <InputField
                      placeholder={"Mobile Number"}
                      value={mobileNumber}
                      onChange={(e) => {
                        setMobileNumber(e.target.value);
                      }}
                    /> */}
                    <Tooltip
                      title="Invalid input"
                      placement="right"
                      visible={isMobileNumberInvalid}
                    >
                      <ConfigProvider locale={en}>
                        <CountryPhoneInput
                          style={{
                            fontSize: "1rem",
                            padding: "0.7rem",
                            borderRadius: "5rem",
                          }}
                          autoSize={true}
                          type="text"
                          bordered={true}
                          size="large"
                          placeholder="3053206009"
                          maxLength={10}
                          onChange={(e) => {
                            if (!isNaN(e.phone)) {
                              setIsMobileNumberInvalid(false);
                            } else {
                              setIsMobileNumberInvalid(true);
                            }

                            setMobileNumber("+"+e.code + e.phone);
                          }}
                        />
                      </ConfigProvider>
                    </Tooltip>
                    {/* <Input
                      style={{
                        fontSize: "1rem",
                        padding: "0.7rem",
                        borderRadius: "5rem",
                      }}
                      autoSize={true}
                      type="number"
                      bordered={true}
                      size="large"
                      // prefix={<UserOutlined />}
                      // showCount={true}
                      onChange={(e) => {
                        setMobileNumber(e.target.value);
                      }}
                      value={mobileNumber}
                      placeholder="Mobile Number"
                    /> */}
                  </div>
                </Grid>
                <Grid item md={12}>
                  <div
                    style={{
                      marginTop: "3%",
                      paddingLeft: "10%",
                      paddingRight: "10%",
                    }}
                  >
                    {/* <InputField
                      placeholder={"Email"}
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                    /> */}
                    <Tooltip
                      title="Invalid email"
                      placement="right"
                      visible={isEmailInvalid}
                    >
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
                        // prefix={<UserOutlined />}
                        // showCount={true}
                        onChange={(e) => {
                          setEmail(e.target.value);
                        }}
                        onBlur={() => {
                          if (!regex.test(email)) {
                            setIsEmailInvalid(true);
                          } else {
                            setIsEmailInvalid(false);
                          }
                        }}
                        value={email}
                        placeholder="Email"
                      />
                    </Tooltip>
                  </div>
                </Grid>

                <Grid item md={12}>
                  <div
                    style={{
                      marginTop: "3%",
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

                    <Tooltip
                      title="Must be at least 6 characters"
                      placement="right"
                      visible={isPasswordInvalid}
                    >
                      <Input.Password
                        style={{
                          fontSize: "1rem",
                          padding: "0.7rem",
                          borderRadius: "5rem",
                        }}
                        autoSize={true}
                        minLength={6}
                        size="large"
                        placeholder="password"
                        value={password}
                        onChange={(e) => {
                          setPassword(e.target.value);
                          setIsPasswordInvalid(false);
                        }}
                        onBlur={() => {
                          if (password != null) {
                            if (password.length >= 6) {
                              setIsPasswordInvalid(false);
                            } else {
                              setIsPasswordInvalid(true);
                            }
                          }
                        }}
                      />
                    </Tooltip>
                  </div>
                </Grid>
                <Grid item md={12} xs={12}>
                  {/* <FormControl style={{ marginTop: "3%",paddingLeft: "10%", paddingRight: "10%" }}>
                    <RadioGroup
                      row
                      aria-labelledby="demo-controlled-radio-buttons-group"
                      name="controlled-radio-buttons-group"
                      value={value}
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
                          setValue("admin");
                        } else {
                          //developer
                          localStorage.setItem("accountType", "developer");
                          setValue("developer");
                        }
                      }}
                    />
                  </div>
                </Grid>
                <Grid item md={12} xs={12}>
                  <div style={{marginTop:"2%"}}>
                    {/* <CustomButton
                      style={{
                        // marginLeft:isMediumScreen? "40%":"35%",
                        marginTop: isMediumScreen ? "3%" : "3%",
                        // left: isMediumScreen? "10":"",
                        backgroundColor: "#10365B",
                        fontSize: isMediumScreen ? "0.8rem" : "",
                      }}
                      onClick={() => {
                        //TODO:set is loggedin true when you are using bearer method ..
                        // localStorage.setItem("isLoggedIn", true);
                        // navigation.push("/admin-dashboard");
                        handleSignUp();
                      }}
                      name="Create"
                    /> */}
                      <Tooltip
                      title="Please fill all fields"
                      placement="right"
                      visible={isAllInputsInvalid}
                    >
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
                    </Tooltip>
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
                      navigation.push("/Authentication/SignIn");
                    }}
                  >
                    {"Already have an account?"}
                  </a>
                </Grid>
                <Grid item md={1} xs={0}></Grid>
                {/* <Grid
                  item
                  md={5}
                  xs={6}
                  style={{ paddingLeft: "5%", paddingRight: "5%" }}
                >
                  <div
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
                  xs={6}
                  style={{ paddingLeft: "5%", paddingRight: "5%" }}
                >
                  <div
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
                <Grid item md={1} xs={0}></Grid> */}
              </Grid>
            </div>
          </Grid>
        </Grid>
        <></>
      </Container>
    </div>
  );
};

export default FooterWraper(NavbarWraper(Index));

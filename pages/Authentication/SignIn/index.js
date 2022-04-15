import { Google } from "@mui/icons-material";
import { Card, Container, Grid, Link, useMediaQuery } from "@mui/material";
import { makeStyles } from "@mui/styles";
import FooterWraper from "../../../ReactComponents/HomePage-Footer/FooterWraper";
import HomePagefooter from "../../../ReactComponents/HomePage-Footer/HomePagefooter";
import NavbarWraper from "../../../ReactComponents/HomePage-Navbar/NavbarWraper";
import fonts from "../../../styles/Fonts";
import Strings from "../../../styles/Strings";
import Button from "../../../Support/Button";
import Heading from "../../../Support/Heading";
import InputField from "../../../Support/InputFields";
const useStyles = makeStyles({
  root: {
    marginTop: "5%",
  },
  headingContainer_md:{
    textAlign: "center", marginTop: "15%"
  },
  headingContainer_xs:{
    textAlign: "left", marginTop: "0%"
  },
  formContainer_md:{
    marginTop: "10%", textAlign: "center" 
  },
  formContainer_xs:{
    marginTop: "2%", textAlign: "center" 
},
signInBtnWithOtherBtn_xs:{
    borderStyle: "groove",
    borderWidth: "1px",
    borderRadius: "10%",
 },
 signInBtnWithOtherBtn_xs:{
    borderStyle: "groove",
    borderWidth: "1px",
    borderRadius: "8%",
    marginTop:"5%"
}
});

const Index = () => {
  const classes = useStyles();
  const isMediumScreen = useMediaQuery("(min-width:600px)");
  return (
    <div className={classes.root}>
      <Container>
        <Grid container>
          <Grid item md={8} xs={12}>
            {/* Image side */}
            <img src="/home-page/signinvector.png" width={isMediumScreen?"70%":"100%"} />
          </Grid>
          <Grid item md={4} xs={12}>
            {/* Form */}
            <div>
              <div className={isMediumScreen?classes.headingContainer_md:classes.headingContainer_xs}>
                <Heading
                  text={Strings.SignInPage.Heading1}
                  fontSize="2.5rem"
                  fontWeight="bold"
                  fontFamily={fonts.style1}
                />
              </div>
              <Grid container className={isMediumScreen?classes.formContainer_md:classes.formContainer_xs}>
                <Grid item md={12}>
                  <div>
                    <InputField
                      placeholder={"User Name"}
                      //   value={""}
                      onChange={(e) => {
                        console.log(e.target.value);
                      }}
                    />
                  </div>
                </Grid>
                <Grid item md={12}>
                  <div style={{ marginTop: "5%" }}>
                    <InputField
                      placeholder={"Password"}
                      //   value={""}
                      onChange={(e) => {
                        console.log(e.target.value);
                      }}
                    />
                  </div>
                </Grid>
                <Grid item md={12} xs={12}>
                  <div>
                    <Button
                      style={{
                        marginLeft:isMediumScreen? "40%":"35%",
                        marginTop: isMediumScreen? "3%":"3%",
                        // left: isMediumScreen? "10":"",
                        backgroundColor: "#10365B",
                        fontSize: isMediumScreen? "0.8rem" :"",
                      }}
                      name="Sin in"
                    />
                  </div>
                </Grid>
                <Grid
                  item
                 md={12}
                 xs={12}
                  style={{ marginTop: "2%", textDecoration: "underline",textAlign:"center"}}
                >
                  <a style={{fontSize: "0.8rem" }}>
                    Don't have account? Create one
                  </a>
                </Grid>
                <Grid item md={1} xs={0}></Grid>
                <Grid item md={5} xs={6}  style={{ paddingLeft: "5%",paddingRight: "5%",}}>
                  <div
                    className={isMediumScreen? classes.signInBtnWithOtherBtn_xs:classes.signInBtnWithOtherBtn_xs}
                  >
                    <img src="/home-page/github.png" width={isMediumScreen?"35%":"30%   "} />
                  </div>
                </Grid>
                <Grid item md={5} xs={6} style={{ paddingLeft: "5%",paddingRight: "5%"}}>
                <div
                    className={isMediumScreen? classes.signInBtnWithOtherBtn_xs:classes.signInBtnWithOtherBtn_xs}
                  >
                    <img src="/home-page/google.png"  width={isMediumScreen?"35%":"30%   "} />
                  </div>
                </Grid>
                <Grid item md={1} xs={0}></Grid>
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

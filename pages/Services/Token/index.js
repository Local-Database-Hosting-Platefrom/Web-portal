import { Container, Divider, Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useState } from "react";
import GetTokenDetails from "../../../ReactComponents/Forms/GetTokenDetails";
import RenewTokenForm from "../../../ReactComponents/Forms/RenewTokenForm";
import TestTokenForm from "../../../ReactComponents/Forms/TestTokenForm";
import NavbarWraper from "../../../ReactComponents/HomePage-Navbar/NavbarWraper";
import Heading from '../../../Support/Heading'

const useStyles = makeStyles({
    root:{
        marginTop:"8%"
    }
})
 
const Index = ()=>{
    const classes = useStyles(<RenewTokenForm/>);
    const [currentOpenedScreen,setCurrentOpenedScreen] = useState();
    const handleScreen = (index)=>{
        switch(index) {
            case 0:
                setCurrentOpenedScreen(<RenewTokenForm/>)
                break;
            case 1:
                setCurrentOpenedScreen(<GetTokenDetails/>)
                break;
            case 2:
                setCurrentOpenedScreen(<TestTokenForm/>)
                break; 
        } 
    }
    return <div className={classes.root}>
        <Container>
            <Grid container>
                <Grid item xs={12}>
                    <Heading text={"Manage tokens"} fontSize={"3rem"} fontWeight="bold"/>
                    <div style={{borderBottom: "1px solid #7ea69f"}}></div>
                </Grid>
                <Grid item xs={12}> 
                    <Grid container>
                        <Grid item xs={3} /*style={{borderRight: "1px solid #7ea69f"}}*/ style={{marginTop:"2%"}}>
                            <div style={{textAlign: "center",padding:"3%",cursor:"pointer" }} onClick={()=>{handleScreen(0)}}><Heading text={"Renew Token"} fontSize={"1.2rem"}/></div>
                            <Divider/>
                            <div style={{textAlign: "center",padding:"3%",cursor:"pointer" }} onClick={()=>{handleScreen(1)}}><Heading text={"Get Token Details"} fontSize={"1.2rem"}/></div>
                            <Divider/>
                            <div style={{textAlign: "center",padding:"3%",cursor:"pointer" }} onClick={()=>{handleScreen(2)}}><Heading text={"Test Token"} fontSize={"1.2rem"}/></div>
                            <Divider/>
                        </Grid>
                        <Grid item xs={1}></Grid>
                        <Grid item xs={8}>
                            {currentOpenedScreen}
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    </div>
}

export default NavbarWraper(Index);
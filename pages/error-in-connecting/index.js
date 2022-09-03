import { Container } from "@mui/material";
import { makeStyles } from "@mui/styles";
import NavbarWraper from "../../ReactComponents/HomePage-Navbar/NavbarWraper";
import Heading from "../../Support/Heading";
const useStyles=makeStyles({
    root:{
        marginTop:"5%",
        textAlign:"center"
    }
})
const Index = ()=>{
    const classes = useStyles();
    return <Container>
         <div style={{marginTop:"10%",textAlign:"center"}}>
            <div>
              <img
                src="/jelly-no-connection.png"
                width="250px"
                height="250px"
              />

            </div>
            <div>
              <Heading text={"Looks like server is down..! Try again later"} fontWeight="bold" fontSize="1rem"/>
            </div>
          </div>
    </Container>
}

export default NavbarWraper(Index);
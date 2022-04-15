import { makeStyles } from "@mui/styles";
import NavbarWraper from "../../../ReactComponents/HomePage-Navbar/NavbarWraper";
const useStyles=makeStyles({
    root:{
        marginTop:"5%"
    }
})

const Index = ()=>{
    const classes = useStyles();
    return <div className={classes.root}>Sign up page</div>
}

export default NavbarWraper(Index);
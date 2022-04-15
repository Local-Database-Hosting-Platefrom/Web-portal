import NavbarWraper from "../../../ReactComponents/HomePage-Navbar/NavbarWraper";
const useStyles=makeStyles({
    root:{
        marginTop:"5%"
    }
})

const Index = ()=>{
    const classes = useStyles();
    return <div className={classes.root}>Sign in page</div >
}

export default NavbarWraper(Index);
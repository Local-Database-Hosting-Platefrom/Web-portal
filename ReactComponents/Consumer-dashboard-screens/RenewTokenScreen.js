import { Grid } from "@mui/material"
import Heading from "../../Support/Heading"
import RenewTokenForm from './Forms/RenewTokenForm'
const RenewTokenScreen = ()=>{
    return <div>
       <div>
            <Heading text="Renew Token" fontSize="2rem" fontWeight="bold"/>
        </div>
        <div>
            <Grid container style={{marginTop:"2%",textAlign: "center"}}>
                <RenewTokenForm/>
            </Grid>
        </div>
    </div>
}

export default RenewTokenScreen
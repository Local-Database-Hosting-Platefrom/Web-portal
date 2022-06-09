import { Grid } from "@mui/material"
import Heading from "../../Support/Heading"
import GetTokenDetails from "./Forms/GetTokenDetails"
const GetTokenDetailsScreen = ()=>{
    return <div>
       <div>
            <Heading text="Get token details" fontSize="2rem" fontWeight="bold"/>
        </div>
        <div>
            <Grid container style={{marginTop:"2%"}}>
                <GetTokenDetails/>
            </Grid>
        </div>
    </div>
}

export default GetTokenDetailsScreen
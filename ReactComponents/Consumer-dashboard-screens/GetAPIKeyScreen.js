import { Grid } from "@mui/material"
import Heading from "../../Support/Heading"
import GenerateAPIKey from "./Forms/GenerateAPIKey"
const GetAPIKeyScreen = ()=>{
    return <div>
       <div>
            <Heading text="Get API Key" fontSize="2rem" fontWeight="bold"/>
        </div>
        <div>
            <Grid container style={{marginTop:"2%"}}>
                <GenerateAPIKey/>
            </Grid>
        </div>
    </div>
}

export default GetAPIKeyScreen
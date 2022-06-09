import { Grid } from "@mui/material"
import Heading from "../../Support/Heading"
import TestHostAccresUrlForm from "./Forms/TestHostAccresUrlForm"
const TestHostAccresUrlScreen = ()=>{
    return <div>
       <div>
            <Heading text="Host Access Urls" fontSize="2rem" fontWeight="bold"/>
        </div>
        <div>
            <Grid container style={{marginTop:"2%"}}>
                <TestHostAccresUrlForm/>
            </Grid>
        </div>
    </div>
}

export default TestHostAccresUrlScreen
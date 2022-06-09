import { Grid } from "@mui/material"
import Heading from "../../Support/Heading"
import TestTokenForm from "./Forms/TestTokenForm"
const TestTokenScreen = ()=>{
    return <div>
       <div>
            <Heading text="Test tokens" fontSize="2rem" fontWeight="bold"/>
        </div>
        <div>
            <Grid container style={{marginTop:"2%"}}>
                <TestTokenForm/>
            </Grid>
        </div>
    </div>
}

export default TestTokenScreen
import { Grid } from "@mui/material"
import Heading from "../../Support/Heading"
import GenerateTokenForm from './Forms/GenerateTokenForm'
const GenerateTokenScreen = ()=>{
    return <div>
        <div>
            <Heading text="Generate Token" fontSize="2rem" fontWeight="bold"/>
        </div>
        <div>
            <Grid container style={{marginTop:"2%"}}>
                <GenerateTokenForm/>
            </Grid>
        </div>
    </div>
}

export default GenerateTokenScreen
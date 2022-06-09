import { Grid } from "@mui/material"
import Heading from "../../Support/Heading"
import TestRemoteDatabaseAccessUrlForm from "./Forms/TestRemoteDatabaseAccessUrlForm"
const TestRemoteDatabaseAccessUrlScreen = ()=>{
    return <div>
       <div>
            <Heading text="Remote database Access Urls" fontSize="2rem" fontWeight="bold"/>
        </div>
        <div>
            <Grid container style={{marginTop:"2%"}}>
              <TestRemoteDatabaseAccessUrlForm/>
            </Grid>
        </div>
    </div>
}

export default TestRemoteDatabaseAccessUrlScreen
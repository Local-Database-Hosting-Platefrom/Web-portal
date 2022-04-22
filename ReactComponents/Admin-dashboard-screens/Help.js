import { Container, Divider, Grid } from "@mui/material";
import CustomSearchBar from "../../Support/CustomSearchBar";
import Heading from "../../Support/Heading"
import HelpQuestion from "./Cards/HelpQuestion"
const Help = ()=>{
    return <Container>
        <div>
            <Heading text="Do you need Help???" fontSize="2rem" fontWeight="bold"/>
            <Divider/>
            <div style={{marginTop:"3%"}}>
                <CustomSearchBar/>
            </div>
            <div>
                <Grid container spacing={2}>
                    <Grid item xs={3}>
                        <HelpQuestion  title="Create Host Account" description="How to create a new host accont"/>
                    </Grid>
                    <Grid item xs={3}>
                        <HelpQuestion  title="Create Host Account" description="How to create a new host accont"/>
                    </Grid>
                    <Grid item xs={3}>
                        <HelpQuestion  title="Create Host Account" description="How to create a new host accont"/>
                    </Grid>
                    <Grid item xs={3}>
                        <HelpQuestion  title="Create Host Account" description="How to create a new host accont"/>
                    </Grid>
                    <Grid item xs={3}>
                        <HelpQuestion  title="Create Host Account" description="How to create a new host accont"/>
                    </Grid>
                    <Grid item xs={3}>
                        <HelpQuestion  title="Create Host Account" description="How to create a new host accont"/>
                    </Grid>
                    <Grid item xs={3}>
                        <HelpQuestion  title="Create Host Account" description="How to create a new host accont"/>
                    </Grid>
                    <Grid item xs={3}>
                        <HelpQuestion  title="Create Host Account" description="How to create a new host accont"/>
                    </Grid>
                    <Grid item xs={3}>
                        <HelpQuestion  title="Create Host Account" description="How to create a new host accont"/>
                    </Grid>
                    <Grid item xs={3}>
                        <HelpQuestion  title="Create Host Account" description="How to create a new host accont"/>
                    </Grid>
                    <Grid item xs={3}>
                        <HelpQuestion  title="Create Host Account" description="How to create a new host accont"/>
                    </Grid>
                </Grid>
            </div>
        </div>
    </Container>
}
export default Help;
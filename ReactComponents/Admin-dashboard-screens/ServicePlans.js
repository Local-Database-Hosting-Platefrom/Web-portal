import { Container, Grid } from "@mui/material";
import { useState } from "react";
import Heading from "../../Support/Heading";
import PlanHolder from "./Cards/PlanHolder";
import StripeContainer from "./Stripe/StripeContainer";

const ServicePlans = ()=>{
    const [listOfOptions_FreePlanFeatures,setListOfOptions_FreePlanFeatures]=useState([
        {
            featureTitle:"Feature 1"
        },
        {
            featureTitle:"Feature 2"
        },
        {
            featureTitle:"Feature 3"
        },
    ]);
    const [listOfOptions_BasicPlanFeatures,setListOfOptions_BasicPlanFeatures]=useState([
        {
            featureTitle:"Feature 1"
        },
        {
            featureTitle:"Feature 2"
        },
        {
            featureTitle:"Feature 3"
        },
    ]);
    const [listOfOptions_ProPlanFeatures,setListOfOptions_ProPlanFeatures]=useState([
        {
            featureTitle:"Feature 1"
        },
        {
            featureTitle:"Feature 2"
        },
        {
            featureTitle:"Feature 3"
        },
    ]);
    
    return <Container>
        <div>
            <Heading text="Service Plans" fontSize="2rem" fontWeight="bold"/>
        </div>
        <div>
            <Grid container style={{marginTop:"2%"}}>
                <StripeContainer/> 
                {/* <Grid item xs={4}>
                    <PlanHolder title="Free" listOfOptions={listOfOptions_FreePlanFeatures} />
                </Grid>
                <Grid item xs={4}>
                    <PlanHolder title="Basic [10$/month]" listOfOptions={listOfOptions_BasicPlanFeatures}/>
                </Grid>
                <Grid item xs={4}>
                    <PlanHolder title="Pro [20$/month]" listOfOptions={listOfOptions_ProPlanFeatures}/>
                </Grid> */}
            
            </Grid>
        </div>
    </Container>
}
export default ServicePlans;
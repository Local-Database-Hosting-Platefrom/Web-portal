import { Container, Grid } from "@mui/material";
import { useState } from "react";
import Heading from "../../../Support/Heading";
import InputField from "../../../Support/InputFields";
import CustomDropDown from "../../../Support/CustomDropDown";
import CustomButton from "../../../Support/CustomButton";
const ManageHostConnections = ()=>{
    
    const [listOfOptions_HostNames,setListOfOptions_HostNames] =useState([
        {
            optionTitle: "zee",
            optionValue: "zee",
        },
        {
            optionTitle: "zee",
            optionValue: "zee",
        },
        {
            optionTitle: "zee",
            optionValue: "zee",
        },
        {
            optionTitle: "zee",
            optionValue: "zee",
        },
        
    ]);
    const [currentSelectedOptionHostName,setCurrentSelectedOptionHostName] =useState("");
    
    return <Container>
        <div>
            {/* <Heading text={"Connection"} /> */}
            <Grid container>
                <Grid item xs={4}></Grid>
                <Grid item xs={4}>
                    <CustomDropDown currentSelectedOption={currentSelectedOptionHostName} setCurrentSelectedOption={setCurrentSelectedOptionHostName} label="Select Host" listOfOptions={listOfOptions_HostNames}/>
                </Grid>
                <Grid item xs={4}></Grid>
                <Grid item xs={4}></Grid>
                <Grid item xs={4} style={{marginTop:"2%",textAlign: "center"}}>
                <CustomButton
                      style={{
                        // marginLeft:isMediumScreen? "40%":"35%",
                        // marginTop: isMediumScreen? "3%":"3%",
                        // left: isMediumScreen? "10":"",
                        backgroundColor: "#10365B",
                        // fontSize: isMediumScreen? "0.8rem" :"",
                       
                      }}
                      onClick={()=>{}}
                      name="Create and Test"
                    />
                </Grid>
                <Grid item xs={4}></Grid>
                
            </Grid>
        </div>
    </Container>
}
export default ManageHostConnections;
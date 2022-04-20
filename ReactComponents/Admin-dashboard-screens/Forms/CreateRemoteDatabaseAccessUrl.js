import { Container, Grid } from "@mui/material";
import { useState } from "react";
import CustomButton from "../../../Support/CustomButton";
import CustomDropDown from "../../../Support/CustomDropDown";
import CustomMultilineInputField from "../../../Support/CustomMultilineInputField";
import Heading from "../../../Support/Heading";
import InputField from "../../../Support/InputFields";

const CreateRemoteDatabaseAccessUrl = ()=>{
    const [listOfOptions_HostNames]=useState([
        {
            optionTitle:"Zee",
            optionValue:"Zee"
        },
        {
            optionTitle:"Shan",
            optionValue:"Shan"
        },
        {
            optionTitle:"Ahmed",
            optionValue:"Ahmed"
        },
        
    ])
    const [currentSelectedOption, setCurrentSelectedOption]=useState("");

    return <Container>
        <div>
            <Heading text={"Create New End-point"} fontSize="1.5rem"/>
            <Grid container>
                <Grid item xs={4}></Grid>
                <Grid item xs={4}>
                    <CustomDropDown currentSelectedOption={currentSelectedOption} setCurrentSelectedOption={setCurrentSelectedOption} label="Select host" listOfOptions={listOfOptions_HostNames}/>
                </Grid>
                <Grid item xs={4}></Grid>
                <Grid item xs={4}></Grid>
                <Grid item xs={3} style={{marginTop:"2%" }}>
                <CustomMultilineInputField
              rows={3}
            //   value={qurey}
            //   handleChange={(e) => {
            //     setQuery(e.target.value);
            //   }}
              label="Qurey"
            />
                </Grid>
                <Grid item xs={1} style={{marginTop:"2%",paddingTop:"1%" }}>
                <CustomButton
                      style={{
                        // marginLeft:isMediumScreen? "40%":"35%",
                        // marginTop: isMediumScreen? "3%":"3%",
                        // left: isMediumScreen? "10":"",
                        backgroundColor: "#10365B",
                        // fontSize: isMediumScreen? "0.8rem" :"",
                      }}
                      onClick={()=>{}}
                      name="Run"
                    />
                </Grid>
                <Grid item xs={4}></Grid>
                <Grid item xs={4}></Grid>
                <Grid item xs={3} style={{marginTop:"2%"}}>
                <CustomMultilineInputField
              rows={3}
            //   value={qurey}
            //   handleChange={(e) => {
            //     setQuery(e.target.value);
            //   }}
             
              label="Set Response Formate"
            />
                </Grid>
                <Grid item xs={1} style={{marginTop:"2%",paddingTop:"1%" }}>
                <CustomButton
                      style={{
                        // marginLeft:isMediumScreen? "40%":"35%",
                        // marginTop: isMediumScreen? "3%":"3%",
                        // left: isMediumScreen? "10":"",
                        backgroundColor: "#10365B",
                        // fontSize: isMediumScreen? "0.8rem" :"",
                      }}
                      onClick={()=>{}}
                      name="Run"
                    />
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
                      name="Create"
                    />
                </Grid>
                <Grid item xs={4}></Grid>
          
            </Grid>
        </div>
    </Container>
}
export default CreateRemoteDatabaseAccessUrl;
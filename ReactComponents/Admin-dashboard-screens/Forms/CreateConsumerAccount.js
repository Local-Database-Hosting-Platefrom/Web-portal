import { Grid,Container } from "@mui/material";
import InputField from "../../../Support/InputFields"
import Heading from "../../../Support/Heading";
import CustomButton from "../../../Support/CustomButton"
import DropDownForSelectingConsumerRole from "../../../Support/DropDownForSelectingConsumerRole";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import CustomDropDown from "../../../Support/CustomDropDown";
import { useState } from "react";
const CreateConsumerAccount = ()=>{
    const [currentSelectedOption, setCurrentSelectedOption]=useState("Read/Write");
    const [generatedConsumerId,setGeneratedConsumerId]=useState("ryewuor3-434-323");
    const [listOfOptions_Roles,setListOfOptions_Roles]=useState([
        {
            optionTitle: "Read/Write",
            optionValue: "readWrite"
        },
        {
            optionTitle: "Read Only",
            optionValue: "readOnly"
        },
        {
            optionTitle: "Write only",
            optionValue: "writeOnly"
        },
        
    ]);
    const [isIdGenerated,setIdGenerated]=useState(false);
    return <Container>
        <div>
            <Heading text="Create Consumer Account" fontSize="1.5rem"/>
        </div>
        <Grid container style={{marginTop:"2%",textAlign:"center"}}>
            <Grid item xs={4}></Grid>
            <Grid item xs={4}>
            
                <div>
                    <div>
                  
                     {/* <Heading text="User Name" fontSize="0.9rem"/> */}
                        <InputField placeholder="User Name"/>
                        {
                            (isIdGenerated) && (
                                <div style={{marginTop:"3%"}}>
                                    <Grid container>
                                        <Grid item xs={8}>
                                            {/* Id */}
                                            {generatedConsumerId}
                                        </Grid>
                                        <Grid item xs={4}>
                                            {/* Copy button */}
                                            <ContentCopyIcon style={{cursor: "pointer"}} onClick={()=>{alert("Copied")}}/>
                                        </Grid>
                                    </Grid>
                                </div>
                            )
                        }
                    </div>
                </div>
            </Grid>
            <Grid item xs={4}></Grid>
            <Grid item xs={4}></Grid>
            <Grid item xs={4} style={{textAlign: 'left'}}>
             
                    <div style={{marginTop:"5%"}}>
                       {/* <Heading text="Select Role" fontSize="0.9rem"/> */}
                       <CustomDropDown  setCurrentSelectedOption={setCurrentSelectedOption} currentSelectedOption={currentSelectedOption} label="Select Role" listOfOptions={listOfOptions_Roles}/> 
                    </div>
              
            </Grid>
            <Grid item xs={4}></Grid>
            <Grid item xs={12}>
                <div style={{textAlign: 'center',marginTop:"1%"}}>
                <CustomButton
                      style={{
                        // marginLeft:isMediumScreen? "40%":"35%",
                        // marginTop: isMediumScreen? "3%":"3%",
                        // left: isMediumScreen? "10":"",
                        backgroundColor: "#10365B",
                        // fontSize: isMediumScreen? "0.8rem" :"",
                        fontSize:"0.8rem"
                      }}
                      onClick={()=>{setIdGenerated(true)}}
                      name="Create"
                    />
                </div>
            </Grid>
        </Grid>
    </Container>
}
export default CreateConsumerAccount;
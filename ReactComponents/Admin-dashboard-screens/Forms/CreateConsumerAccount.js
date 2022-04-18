import { Grid,Container } from "@mui/material";
import InputField from "../../../Support/InputFields"
import Heading from "../../../Support/Heading";
import CustomButton from "../../../Support/CustomButton"
import DropDownForSelectingConsumerRole from "../../../Support/DropDownForSelectingConsumerRole";
import { useState } from "react";
const CreateConsumerAccount = ()=>{
    const [currentSelectedOption, setCurrentSelectedOption]=useState("Read/Write");
    return <Container>
        <div>
            <Heading text="Create Consumer Account" fontSize="1.5rem"/>
        </div>
        <Grid container style={{marginTop:"2%"}}>
            <Grid item xs={5}>
            
                <div style={{textAlign: 'left'}}>
                    <div>
                  
                    <Heading text="User Name" fontSize="0.9rem"/>
                        <InputField placeholder="User Name"/>
                    </div>
                </div>
            </Grid>
            <Grid item xs={2}>
                <div style={{textAlign: 'left'}}>
                    <div>
                       <Heading text="Select Role" fontSize="0.9rem"/>
                       <DropDownForSelectingConsumerRole setCurrentSelectedOption={setCurrentSelectedOption} currentSelectedOption={currentSelectedOption} />
                    </div>
                </div>
            </Grid>
            <Grid item xs={3}>
                <div style={{textAlign: 'center',marginTop:"5%"}}>
                <CustomButton
                      style={{
                        // marginLeft:isMediumScreen? "40%":"35%",
                        // marginTop: isMediumScreen? "3%":"3%",
                        // left: isMediumScreen? "10":"",
                        backgroundColor: "#10365B",
                        // fontSize: isMediumScreen? "0.8rem" :"",
                        fontSize:"0.8rem"
                      }}
                    //   onClick={()=>{localStorage.setItem("isLoggedIn",true); navigation.push("/admin-dashboard")}}
                      name="Create"
                    />
                </div>
            </Grid>
        </Grid>
    </Container>
}
export default CreateConsumerAccount;
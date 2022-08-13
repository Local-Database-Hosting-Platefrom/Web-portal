import { Container } from "@mui/material";
import { useState } from "react";
import CustomButton from "../../../Support/CustomButton";
import Heading from "../../../Support/Heading";
import InputField from "../../../Support/InputFields";

const DeleteAccount = ()=>{
    const [isLinkSent,setIsLinkSent]=useState(false);
    return <Container>
        <div>
            <Heading text="Delete My Account" fontSize="1.5rem"/>
        </div>
        <div style={{textAlign: "center"}}>
            <div>
            <InputField
                      placeholder={"Type your Email"}
                      //   value={""}
                      onChange={(e) => {
                        console.log(e.target.value);
                      }}
                    />
            </div>
            <div>
            <InputField
                      placeholder={"Enter your password"}
                      //   value={""}
                      onChange={(e) => {
                        console.log(e.target.value);
                      }}
                    />
            </div>
            
            <div style={{marginTop: "2%"}}>
            <CustomButton
                      style={{
                        // marginLeft:isMediumScreen? "40%":"35%",
                        // marginTop: isMediumScreen? "3%":"3%",
                        // left: isMediumScreen? "10":"",
                        backgroundColor: "red",
                        // fontSize: isMediumScreen? "0.8rem" :"",
                       
                      }}
                      onClick={()=>{setIsLinkSent(true)}}
                      name="Delete My Account"
                    />
            </div>
            <div>
                {isLinkSent ? `We sent you reset link on provided email.!` : ``}
            </div>
        </div>
    </Container>
}
export default DeleteAccount;
import { Container } from "@mui/material";
import { useState } from "react";
import CustomButton from "../../../Support/CustomButton";
import Heading from "../../../Support/Heading";
import InputField from "../../../Support/InputFields";

const ResetPassword = ()=>{
    const [isLinkSent,setIsLinkSent]=useState(false);
    return <Container>
        <div>
            <Heading text="Reset Password" fontSize="1.5rem"/>
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
            <div style={{marginTop: "2%"}}>
            <CustomButton
                      style={{
                        // marginLeft:isMediumScreen? "40%":"35%",
                        // marginTop: isMediumScreen? "3%":"3%",
                        // left: isMediumScreen? "10":"",
                        backgroundColor: "#10365B",
                        // fontSize: isMediumScreen? "0.8rem" :"",
                       
                      }}
                      onClick={()=>{setIsLinkSent(true)}}
                      name="Send Me Reset Link"
                    />
            </div>
            <div>
                {isLinkSent ? `We sent you reset link on provided email.!` : ``}
            </div>
        </div>
    </Container>
}
export default ResetPassword;
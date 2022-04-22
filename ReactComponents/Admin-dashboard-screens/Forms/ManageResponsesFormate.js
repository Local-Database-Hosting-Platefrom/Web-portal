import { Container, Divider, Grid } from "@mui/material";
import CustomButton from "../../../Support/CustomButton";
import Heading from "../../../Support/Heading";
import InputField from "../../../Support/InputFields";
import ListOfActionResponses from "../Lists/ListOfActionResponses";

const ManageResponsesFormate = ()=>{
    return <Container style={{paddingTop: "2%" }}>
        <div>
            <Heading text="Manage Responses" fontSize="1.5rem"/>
            <Divider sx={{width:"15rem"}}/>
        </div>
        <div style={{marginTop: "2%"}}>
            <Grid container>
                <Grid item xs={2}></Grid>
                <Grid item xs={3}>
                <Heading text="Action" fontSize="0.9rem"/>
                <InputField
                      placeholder={"Action"}
                      //   value={""}
                      onChange={(e) => {
                        console.log(e.target.value);
                      }}
                    />
                </Grid>
                <Grid item xs={3}>
                <Heading text="Response" fontSize="0.9rem"/>
             
                <InputField
                      placeholder={"Response"}
                      //   value={""}
                      onChange={(e) => {
                        console.log(e.target.value);
                      }}
                    />
                </Grid>
                <Grid item xs={3}>
                <CustomButton
                      style={{
                        // marginLeft:isMediumScreen? "40%":"35%",
                        // marginTop: isMediumScreen? "3%":"3%",
                        // left: isMediumScreen? "10":"",
                        backgroundColor: "#10365B",
                        // fontSize: isMediumScreen? "0.8rem" :"",
                       
                      }}
                      onClick={()=>{}}
                      name="Add"
                    />
                </Grid>
            </Grid>
        </div>
        <div style={{marginTop:"2%"}}>
          <ListOfActionResponses/>
        </div>
    </Container>
}
export default ManageResponsesFormate;
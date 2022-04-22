import { Container, Grid } from "@mui/material";
import CustomButton from "../../../Support/CustomButton";
import Heading from "../../../Support/Heading";
import InputField from "../../../Support/InputFields";

const ManageCaching = ()=>{
    return <Container>
        <div>
            <Heading text="Manage Connection" fontSize="1.5rem"/>
        </div>
        <div style={{ marginTop: "3%" }}>
            <Grid container>
                <Grid item xs={3}></Grid>
                <Grid item xs={5}>
                <Heading text="Number Of Requests" fontSize="0.9rem"/>
                <InputField
                      placeholder={"Number of Requests"}
                      //   value={""}
                      onChange={(e) => {
                        console.log(e.target.value);
                      }}
                    />
                </Grid>
                <Grid item xs={2}>
                <CustomButton
                      style={{
                        // marginLeft:isMediumScreen? "40%":"35%",
                        marginTop: "15%",
                        // left: isMediumScreen? "10":"",
                        backgroundColor: "#10365B",
                        // fontSize: isMediumScreen? "0.8rem" :"",
                       
                      }}
                      onClick={()=>{}}
                      name="Set"
                    />
                </Grid>
                <Grid item xs={2}></Grid>
                


                <Grid item xs={3}></Grid>
                <Grid item xs={5} style={{marginTop:"2%"}}>
                <Heading text="Connection Timeo-out" fontSize="0.9rem"/>
                <InputField
                      placeholder={"Connection Timeo-out"}
                      //   value={""}
                      onChange={(e) => {
                        console.log(e.target.value);
                      }}
                    />
                </Grid>
                <Grid item xs={2} style={{marginTop:"2%"}}>
                <CustomButton
                      style={{
                        // marginLeft:isMediumScreen? "40%":"35%",
                        marginTop: "15%",
                        // left: isMediumScreen? "10":"",
                        backgroundColor: "#10365B",
                        // fontSize: isMediumScreen? "0.8rem" :"",
                       
                      }}
                      onClick={()=>{}}
                      name="Set"
                    />
                </Grid>
                <Grid item xs={2}></Grid>
                

                <Grid item xs={3}></Grid>
                <Grid item xs={5} style={{marginTop:"2%"}}>
                <Heading text="Request Cache Size" fontSize="0.9rem"/>
                <InputField
                      placeholder={"Request Cache Size"}
                      //   value={""}
                      onChange={(e) => {
                        console.log(e.target.value);
                      }}
                    />
                </Grid>
                <Grid item xs={2} style={{marginTop:"2%"}}>
                <CustomButton
                      style={{
                        // marginLeft:isMediumScreen? "40%":"35%",
                        marginTop: "15%",
                        // left: isMediumScreen? "10":"",
                        backgroundColor: "#10365B",
                        // fontSize: isMediumScreen? "0.8rem" :"",
                       
                      }}
                      onClick={()=>{}}
                      name="Set"
                    />
                </Grid>
                <Grid item xs={2}></Grid>
                
                <Grid item xs={4}></Grid>
                <Grid item xs={4} style={{textAlign: "center"}}>
                <CustomButton
                      style={{
                        // marginLeft:isMediumScreen? "40%":"35%",
                        marginTop: "15%",
                        // left: isMediumScreen? "10":"",
                        backgroundColor: "#10365B",
                        // fontSize: isMediumScreen? "0.8rem" :"",
                       
                      }}
                      onClick={()=>{}}
                      name="Update"
                    />
                </Grid>
                <Grid item xs={4}></Grid>
                

                
            </Grid>
        </div>
    </Container>
}
export default ManageCaching;
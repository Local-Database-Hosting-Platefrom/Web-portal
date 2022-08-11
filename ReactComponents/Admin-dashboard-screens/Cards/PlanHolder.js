import { CheckRounded } from "@mui/icons-material";
import { Card, Container, Divider, Grid } from "@mui/material";
import CustomButton from "../../../Support/CustomButton";
import Heading from "../../../Support/Heading";

const PlanHolder = ({title,listOfOptions,...props})=>{
    
    return <Container>
        <Card elevation={0} style={{padding:"5%",border: "1px solid #7ea69f",minheight:"15rem"}}>
            <div style={{textAlign: "center",padding:"3%"}}>
                <Heading text={title} fontSize="1.5rem "/>
                <Divider/>
            </div>
            <div style={{padding:"5%"}}>
                    {
                        listOfOptions.map((item)=>{
                            return <div>
                                <Grid container>
                                    <Grid item xs={2}>
                                        <CheckRounded size="small"/>
                                    </Grid>
                                    <Grid item xs={10}>
                                        {item.featureTitle}
                                    </Grid>
                                </Grid>
                            </div>
                        })
                    }
            </div>
            
            <div style={{textAlign: "center",padding:"3%",}}>
            <Divider/> 
            <CustomButton
                      style={{
                        // marginLeft:isMediumScreen? "40%":"35%",
                        marginTop: "3%",
                        // left: isMediumScreen? "10":"",
                        backgroundColor: "#10365B",
                        // fontSize: isMediumScreen? "0.8rem" :"",
                       
                      }}
                      onClick={()=>{}}
                      name="Select"
                    />
            </div>
        </Card>
    </Container>
}

export default PlanHolder;
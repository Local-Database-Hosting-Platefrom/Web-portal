import { Card, Divider } from "@mui/material";
import Heading from "../../../Support/Heading";
const States = ({title,value})=>{
    return <Card elevation={0} style={{border: "1px solid #7ea69f",borderRadius:"5%"}}>
        <div style={{textAlign: "center",padding:"3%"}}>
            <Heading text={title} fontSize="1.3rem"/>
            <Divider/>
        </div>
        <div style={{textAlign: "center",padding:"3%"}}>
            <Heading text={value} fontSize="4rem"/>
        </div>
    </Card>
}

export default States;
import { Container, Grid } from "@mui/material";
import Heading from "../../../Support/Heading";
import InputField from "../../../Support/InputFields";
import {useState}  from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import CustomDropDown from "../../../Support/CustomDropDown";
import CustomButton from "../../../Support/CustomButton";
import CustomListOfSelectOptions from "../../../Support/CustomListOfSelectOptions";
const ManageConsumerRole = () => {
  const [currentSelectedOptionHostName, setCurrentSelectedOptionHostName]=useState();  
  const [currentSelectedOptionTableName, setCurrentSelectedOptionTableName]=useState();  
  const [listOfOptions_HostNames]=useState([
      {
          optionTitle:"Zee",
          optionValue:"zee"
      },
      {
        optionTitle:"Shan",
        optionValue:"shan"
    },
    {
        optionTitle:"Ahmed",
        optionValue:"Ahmed"
    },
  
  ]);
  const [listOfOptions_TableName]=useState([
    {
        optionTitle:"Table 1",
        optionValue:"Table 1"
    },
    {
      optionTitle:"Table 2",
      optionValue:"Table 2"
  },
  {
      optionTitle:"Table 3",
      optionValue:"Table 3"
  },
]);
const [listOfSelectedOptions, setListOfSelectedOptions] = useState([
    { key: 0, label: 'Angular' },
  ]);

  return (
    <Container>
      <div>
        <Heading text={"Create Role for consumer"} fontSize="1.5rem" />
        <Grid container>
          <Grid item xs={4}></Grid>
          <Grid item xs={4}>
            <InputField
              placeholder={"Role title"}
              //   value={""}
              onChange={(e) => {
                console.log(e.target.value);
              }}
            />
          </Grid>
          <Grid item xs={4}></Grid>
          <Grid item xs={4}></Grid>
          <Grid item xs={4} style={{marginTop: "2%",paddingLeft: "1%"}}>
            <FormControl>
              <FormLabel id="demo-row-radio-buttons-group-label">
                Select role
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
              >
                <FormControlLabel
                  value="Read only"
                  control={<Radio />}
                  label="Read only"
                />
                <FormControlLabel
                  value="Write only"
                  control={<Radio />}
                  label="Write only"
                />
                <FormControlLabel
                  value="Read and Write only"
                  control={<Radio />}
                  label="Read and Write only"
                />
                
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item xs={4}></Grid>
          <Grid item xs={4}></Grid>
        
          <Grid item xs={4} style={{marginTop:"2%"}}>    
              <CustomDropDown currentSelectedOption={currentSelectedOptionHostName} setCurrentSelectedOption={setCurrentSelectedOptionHostName} label="Select Host" listOfOptions={listOfOptions_HostNames}/>
          </Grid>
          <Grid item xs={4}></Grid>
          <Grid item xs={4}></Grid>
        
        <Grid item xs={3} style={{marginTop:"2%"}}>    
            <CustomDropDown currentSelectedOption={currentSelectedOptionTableName} setCurrentSelectedOption={setCurrentSelectedOptionTableName} label="Select Table" listOfOptions={listOfOptions_TableName}/>
        </Grid>
        <Grid item xs={1} style={{marginTop:"2%",marginLeft:"1%"}}>    
        <CustomButton
                      style={{
                        // marginLeft:isMediumScreen? "40%":"35%",
                        // marginTop: isMediumScreen? "3%":"3%",
                        // left: isMediumScreen? "10":"",
                        backgroundColor: "#10365B",
                        // fontSize: isMediumScreen? "0.8rem" :"",
                       
                      }}
                      onClick={()=>{
                          listOfSelectedOptions.push({key:listOfSelectedOptions.length+1,label:currentSelectedOptionTableName})
                          setListOfSelectedOptions(listOfSelectedOptions)
                        }}
                      name="Add"
                    />
        </Grid>
        <Grid item xs={4}></Grid>
        <Grid item xs={4} style={{marginTop:"2%"}}>
            <CustomListOfSelectOptions listOfSelectedOptions={listOfSelectedOptions} setListOfSelectedOptions={setListOfSelectedOptions} />
        </Grid>
        <Grid item xs={4}></Grid>
        <Grid item xs={4}></Grid>
   
        <Grid item xs={4} style={{textAlign: 'center',marginTop:"2%"}}>
        <CustomButton
                      style={{
                        // marginLeft:isMediumScreen? "40%":"35%",
                        // marginTop: isMediumScreen? "3%":"3%",
                        // left: isMediumScreen? "10":"",
                        backgroundColor: "#10365B",
                        // fontSize: isMediumScreen? "0.8rem" :"",
                       
                      }}
                      onClick={()=>{localStorage.setItem("isLoggedIn",true);navigation.push("/admin-dashboard")}}
                      name="Create"
                    />
        </Grid>
        <Grid item xs={4}></Grid>
       
        </Grid>

      </div>
    </Container>
  );
};
export default ManageConsumerRole;

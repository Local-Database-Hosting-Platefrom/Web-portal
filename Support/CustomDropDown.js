import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function CustomDropDown({currentSelectedOption={},setCurrentSelectedOption,label,listOfOptions=[],...props}) {
  
  const handleChange = (event) => {
    // console.log("selected options : ",event.target.value)
    setCurrentSelectedOption(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth size="small">
        <InputLabel id="demo-simple-select-label">{label}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={currentSelectedOption}
          label="currentSelectedOption"
          onChange={handleChange}
          defaultValue={currentSelectedOption}
        >
            {/*

            [
                {
                    optionTitle:"Read/Only",
                    optionValue:"readOnly"
                } 
            ]
             */}
        {
            listOfOptions.map((item)=>{
                return  <MenuItem value={JSON.stringify(item)}>{item.optionTitle}</MenuItem>
            }) 
        }
        </Select>
      </FormControl>
    </Box>
  );
}

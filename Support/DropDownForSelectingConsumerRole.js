import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function DropDownForSelectingConsumerRole({currentSelectedOption="Host-url Access Token",setCurrentSelectedOption,label,...props}) {
  
  const handleChange = (event) => {
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
        >
          <MenuItem value={"readWrite"}>Read/Write</MenuItem>
          <MenuItem value={"readOnly"}>Read Only</MenuItem>
          <MenuItem value={"writeOnly"}>Write Only</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}

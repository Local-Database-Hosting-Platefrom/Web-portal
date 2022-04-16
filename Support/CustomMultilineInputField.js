import { TextField } from "@mui/material"

const CustomMultilineInputField=({rows,label,value,handleChange,...props})=>{
    return     <TextField
    id="filled-multiline-flexible"
    label={label}
    multiline
    maxRows={rows}
    value={value}
    onChange={handleChange}
    variant="filled"
   
    InputLabelProps={{
        style: { color: 'black' },
      }}
  />
}

export default CustomMultilineInputField;
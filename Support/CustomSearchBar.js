import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';

export default function CustomSearchBar() {
  return (
    <Paper
      elevation={0}
      component="form"
      sx={{ display: 'flex', alignItems: 'center', width: 400,border: "1px solid #7ea69f"}}
    >
     
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search for help"
        inputProps={{ 'aria-label': 'search google maps' }}
      />
      <IconButton  sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
      
    </Paper>
  );
}

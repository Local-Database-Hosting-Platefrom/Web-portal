import { Card, Divider, FormControlLabel, Grid, Switch } from "@mui/material";
import { ContentCopyOutlined } from "@mui/icons-material";
import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
const options = [
  'Details',
  'Settings',
  'Status',
];

const ITEM_HEIGHT = 48;
const ItemHolder_ConnectedHost = ({ item }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <Divider />
      <Grid container style={{ padding: "2%" }}>
        <Grid item xs={1} style={{ textAlign: "left" }}>
          {/* Icon */}
          <img src="/home-page/consumerIconForList.png" width="40%" />
        </Grid>
        <Grid item xs={3} style={{ borderRight: "1px solid #7ea69f" }}>
          {/* Host ID */}
          {`${item.hostId}`}
        </Grid>
        <Grid item xs={3} style={{ borderRight: "1px solid #7ea69f",marginLeft:"2%" }}>
          {/* Host ID */}
          {`${item.hostName}`}
        </Grid>
        <Grid item xs={3} style={{ borderRight: "1px solid #7ea69f",marginLeft:"2%" }}>
          {/* Host ID */}
          {`${item.lastSeen}`}
        </Grid>
        <Grid item xs={1} style={{ paddingLeft: "2%" }}>
        <div>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: '20ch',
          },
        }}
      >
        {options.map((option) => (
          <MenuItem key={option} selected={option === 'Pyxis'} onClick={handleClose}>
            {option}
          </MenuItem>
        ))}
      </Menu>
    </div>
        </Grid>   
      </Grid>
      <Divider />
    </div>
  );
};
export default ItemHolder_ConnectedHost;

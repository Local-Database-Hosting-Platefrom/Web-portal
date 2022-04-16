import * as React from 'react';
import Button from '@mui/material/Button';

export default function CustomButton({name,...props}) {
  return (
      <Button  style={props.style} {...props} >{name}</Button>
  );
}

import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function FramworkHolder(props) {
  return (
    <Card sx={{ maxWidth: 340,height:400 }}>

      <CardContent>
          <div>
              <img src={`/${props.img}`} width="50%" height="150"/>
          </div>
        <Typography gutterBottom variant="h5" component="div">
          {props.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" >
          {props.details}
        
        </Typography>
      </CardContent>
      <CardActions>
        
        <Button size="small">Integrate</Button>
      </CardActions>
    </Card>
  );
}

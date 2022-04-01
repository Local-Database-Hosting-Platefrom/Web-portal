import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function FramworkHolder(props) {
  return (
    <Card style={{backgroundColor:"#E6E8EC"}} sx={{ maxWidth: 340,height:350,}}>

      <CardContent>
          <div>
              <img src={`/${props.img}`} width="35%" height="100"/>
          </div>
        <Typography gutterBottom variant="h5" component="div">
          {props.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" >
          {props.details}
        </Typography>
        <div style={{textAlign:"center",marginTop:"10%"}}>
        <Button variant='outlined'  size="small" style={{backgroundColor:"black",color:"white",fontSize:"0.8rem",letterSpacing:"0.1rem"}}>Integrate</Button>
        </div>
      </CardContent>
      {/* <CardActions>
        <Button size="small">Integrate</Button>
      </CardActions> */}
    </Card>
  );
}

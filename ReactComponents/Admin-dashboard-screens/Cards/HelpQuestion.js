import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

const HelpQuestion = ({title, description,...props})=>{
    return <div style={{marginTop: "4%"}}>
          <Card sx={{ maxWidth: 345,border: "1px solid #7ea69f"}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="110"
          image="/home-page/MainScreen2.png"
          alt="green iguana"
          style={{borderBottom: "1px solid #7ea69f"}}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="secondary">
          Learn
        </Button>
      </CardActions>
    </Card>
    </div>
}

export default HelpQuestion
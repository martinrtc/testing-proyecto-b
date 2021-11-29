import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

export default function MovieCard({name, url, schedule}) {
  console.log("aaaaaaaaah", schedule);
  return (
    <Card sx={{ maxWidth: 400 }} style={{borderColor: "#303030"}}>
      <CardMedia
        component="img"
        height="200"
        image={url}
        alt="photo"
      />
      <CardContent>
        <Typography gutterBottom variant="h4" component="div" align="center">
          {name}
        </Typography>
      </CardContent>
      <CardActions>
        MATINE:
        {schedule.matine.length !== 0 ?
          schedule.matine.map((sched) => (
              <Link to={`/DetailFunction/${sched[0].id}`}>{sched[1]}</Link>
              ))
              : (<p>No disponible</p>)}
      </CardActions>
      <CardActions>
        TANDA:
        {schedule.tanda.length !== 0 ?
          schedule.tanda.map((sched) => (
              <Link to={`/DetailFunction/${sched[0].id}`}>{sched[1]}</Link>
              ))
              : (<p>No disponible</p>)}
      </CardActions>
      <CardActions>
        NOCHE:
        {schedule.nigth.length !== 0 ?
          schedule.nigth.map((sched) => (
              <Link to={`/DetailFunction/${sched[0].id}`}>{sched[1]}</Link>
              ))
              : (<p>No disponible</p>)}
      </CardActions>
    </Card>
  );
}
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

export default function ReservationCard({date, row, seats, schedule_id}) {
  return (
    <Card sx={{ maxWidth: 400 }}>
      <CardContent>
        <Typography gutterBottom variant="h4" component="div" align="center">
          {name}
        </Typography>
        <Typography variant="h5" component="div">
          be{bull}nev{bull}o{bull}lent
        </Typography>
      </CardContent>
    </Card>
  );
}
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

export default function MovieCard({id, name, url}) {
  return (
    <Card sx={{ maxWidth: 400 }}>
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
        <Link to={`/DetailFunction/${id}`}>Sala 1</Link>
        <Link to={`/DetailFunction/${id}`}>Sala 2</Link>
        <Link to={`/DetailFunction/${id}`}>Sala 3</Link>
        <Link to={`/DetailFunction/${id}`}>Sala 4</Link>
      </CardActions>
      <CardActions>
        TANDA:
        <Link to={`/DetailFunction/${id}`}>Sala 1</Link>
        <Link to={`/DetailFunction/${id}`}>Sala 2</Link>
        <Link to={`/DetailFunction/${id}`}>Sala 3</Link>
      </CardActions>
      <CardActions>
        NOCHE:
        <Link to={`/DetailFunction/${id}`}>Sala 4</Link>
      </CardActions>
    </Card>
  );
}
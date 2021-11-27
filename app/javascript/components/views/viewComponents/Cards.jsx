import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

export default function MovieCard(prop) {
  return (
    <Card sx={{ maxWidth: 400 }}>
      <CardMedia
        component="img"
        height="140"
        image="https://as.com/meristation/imagenes/2021/01/25/noticias/1611576361_977797_1611576540_sumario_grande.jpg"
        alt="titanes"
      />
      {/* <img alt="book" src="https://upload.wikimedia.org/wikipedia/commons/9/92/Lagartija_de_lava_de_Gal%C3%A1pagos_%28Microlophus_albemarlensis%29%2C_isla_Santa_Cruz%2C_islas_Gal%C3%A1pagos%2C_Ecuador%2C_2015-07-26%2C_DD_19.JPG" /> */}
      <CardContent>
        <Typography gutterBottom variant="h4" component="div" align="center">
          Attack on Titan
        </Typography>
      </CardContent>
      <CardActions>
        MATINE:
        <Link to="/DetailFunction">Sala 1</Link>
        <Link to="/DetailFunction">Sala 2</Link>
        <Link to="/DetailFunction">Sala 3</Link>
        <Link to="/DetailFunction">Sala 4</Link>
      </CardActions>
      <CardActions>
        TANDA:
        <Link to="/DetailFunction">Sala 1</Link>
        <Link to="/DetailFunction">Sala 2</Link>
        <Link to="/DetailFunction">Sala 3</Link>
      </CardActions>
      <CardActions>
        NOCHE:
        <Link to="/DetailFunction">Sala 4</Link>
      </CardActions>
    </Card>
  );
}
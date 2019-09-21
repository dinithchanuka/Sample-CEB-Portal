import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
  },
});

export default function ImgMediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Customer image"
          height="140"
          src="https://scrummyloyalty.com/wp-content/uploads/2017/06/Loyal-Customers.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Customer
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Something abot customers
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <div>
        {/* <Button size="small" color="primary">
          Customers
        </Button> */}
        <Button variant="outlined" color="primary" className={classes.button}>
            More
      </Button>
        </div>
      </CardActions>
    </Card>
  );
}

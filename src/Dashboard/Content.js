import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles({
  card: {
    maxWidth: 345,
  },
});

export default function ImgMediaCard() {
  const classes = useStyles();

  return (
    <Grid container>
      <Grid item xs={4}>
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
                Customers
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Something abot customers
              </Typography>
            </CardContent>
          </CardActionArea> 
          <CardActions>
            <Button variant="outlined" color="primary" className={classes.button}>
              More
            </Button>
          </CardActions>
        </Card>
      </Grid>

      <Grid item xs={4}>
        <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Customer image"
            height="140"
            src="https://c1.sfdcstatic.com/content/dam/blogs/ca/Blog%20Posts/what-is-the-best-way-to-train-your-customer-service-team-header.jpg"
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Officers
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Something abot Officers
            </Typography>
          </CardContent>
        </CardActionArea> 
        <CardActions>
          <Button variant="outlined" color="primary" className={classes.button}>
            More
          </Button>
        </CardActions>
      </Card>
        </Grid>
      <Grid item xs={4}>
        <Card className={classes.card}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Customer image"
              height="140"
              src="https://www.moonstone.co.za/upmedia/uploads/Technology-disintermediation.png"
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Staff
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Something abot staff
              </Typography>
            </CardContent>
          </CardActionArea> 
          <CardActions>
            <Button variant="outlined" color="primary" className={classes.button}>
              More
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </Grid>    
  );
}

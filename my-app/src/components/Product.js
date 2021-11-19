import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { AddShoppingCart } from '@material-ui/icons';
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
  }),
);

export default function Product({product : {id, title, price, description, image}}) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
       
        action={
         <Typography 
         className={classes.action}
         variant='5'
         color='textSecondary'
         >
        {accouting.formatMoney(price, "800")}
         </Typography>
        }
        title={name}
        subheader="12 disponibles"
      />
      <CardMedia
        className={classes.media}
        image={image}
        title="Almohadon de lienzo"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          Almohadon ideal para decorar tu hogar, mide 40x40cm y se puede sacar la funda para su lavado
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label='Add to Cart'>
          <AddShoppingCart fontSize="large"/>
          </IconButton>
        <IconButton aria-label="share">
         <Button>+</Button>
         <p>1</p>
         <Button>-</Button>
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
        <Typography paragraph></Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}

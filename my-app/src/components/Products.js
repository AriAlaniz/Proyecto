import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import productList from './Cards';
import Product from './Product';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }),
);

export default function Product () {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        {
          products.map(product => (
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Products key={product.id} product={product}/>
        </Grid>
        ))
      }
       </Grid>
    </div>
  );
}

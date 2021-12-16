 import React from 'react';
 import AppBar from '@material-ui/core/AppBar';
 import Toolbar from '@material-ui/core/Toolbar';
 import IconButton from '@material-ui/core/IconButton';
 import Typography from '@material-ui/core/Typography';
 import { createStyles, alpha, Theme, makeStyles } from '@material-ui/core/styles';
 import logo from '../NavBar/logo.png';
 import { Badge, Button } from '@material-ui/core';
 import CartWidget from '../CartWidgets/CartWidgets';
 import { NavLink } from 'react-router-dom';



 const useStyles = makeStyles((theme: Theme) => ({
         root: {
         flexGrow: 1,
        marginBottom: "7rem",
     },
     appBar: {
     background: 'linear-gradient(45deg, #FE6B8B 30%, #21CBF3 90% )',
    boxShadow:"none",
    },
     grow: {
        flexGrow: 1,
     },
     button: {
         marginLeft: theme.spacing(2),
             
             },
     image: {
         marginRight: "15px",
         height:"6rem",
     },
 }));

 const categories = [
   { category: 'Productos' },
   { category: 'Cocina' },
   { category: 'Papeleria' },
   { category: 'Accesorios' },
   { category: 'Deco' }
 ]

 export default function NavBar() {
   const classes = useStyles();
 
   return (
     <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
         <Toolbar>
           <IconButton
             edge="start"
             className={classes.menuButton}
            color="inherit"
             aria-label="open drawer"
          >
             <img src={logo} className={classes.image}/>
           </IconButton>
           <div className={classes.grow}/>
           <Typography  variant="h6" color="textPrimary" component="parrafo">
            Bienvenidos a Cositas Bellas!
           </Typography>
           <div className={classes.button}>

              <NavLink to="/Home"><Button variant="outlined">
                 <strong>Inicio</strong>
               </Button></NavLink>

               <NavLink to="/category/cocina"><Button variant="outlined">
                 <strong>Cocina</strong>
              </Button></NavLink>

               <NavLink to="/category/papeleria"><Button variant="outlined">
             <strong>Papeleria</strong>
               </Button></NavLink>

               <NavLink to="/category/accesorios"><Button variant="outlined">
                <strong>Accesorios</strong>
               </Button></NavLink>

               <NavLink to="/category/deco"><Button variant="outlined">
                <strong>Deco</strong>
               </Button></NavLink>
               
             <CartWidget></CartWidget>
           </div>
         </Toolbar>
       </AppBar>
     </div>
  );
 }


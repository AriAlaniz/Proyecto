import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { createStyles, alpha, Theme, makeStyles } from '@material-ui/core/styles';
import logo from '../imag/logo.jpeg';
import SearchIcon from '@material-ui/icons/Search';
import { Badge, Button } from '@material-ui/core';
import { AccessAlarm, ShoppingCart, ThreeDRotation } from '@material-ui/icons';

const useStyles = makeStyles((theme: Theme) => ({
        root: {
        flexGrow: 1,
        marginBottom: "7rem",
    },
    appBar: {
    backgroundColor: "whitesmoke",
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
              <Button variant="outlined">
              <strong>Iniciar sesion</strong>
              </Button>
             <IconButton aria-label="show cart items" color="inherit">
                <Badge badgeContent={2} color="secondary">
                <ShoppingCart fontSize="large" color="primary" />
                </Badge>
             </IconButton>       
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}





//import '../styles/NavBar.css';
//import logo from '../imag/logo.jpeg';
//import CartWidgets from '../components/CartWidgets';
//import { Link } from 'react-router-dom';
//function NavBar() {
    //return <>
        //<nav className="conteiner">
      //     <Link Link to={'/cart'} ></Link><img src={logo}></img>
       // <ul>
         //   <li className='navLi' to="/Inicio ">Inicio</li>
           // <li className='navLi' to="/Productos">Productos</li>
           // <li className='navLi'to="/Como comprar">Como comprar</li>
            //<li className='navLi' to="/Contacto">Contacto</li>
        //</ul>
        //<CartWidgets/>
    //    </nav>
  //  </>
//}
//export default NavBar



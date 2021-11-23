import React from "react";
import AddLocationIcon from '@material-ui/icons/AddLocation';
import InstagramIcon from '@material-ui/icons/Instagram';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import MailIcon from '@material-ui/icons/Mail';
import { createStyles, alpha, Theme, makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme: Theme) => ({
        root: {
        flexGrow: 1,
        marginBottom: "7rem",
    },
    footer: {
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

export default function Footer() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
        <Footer className={classes.footer}>
         <h1 className={classes.grow}>Contactos</h1>
         <AddLocationIcon>Buenos Aires, Gonzalez catan.</AddLocationIcon>
         <InstagramIcon>@cositasbellasok</InstagramIcon>
         <WhatsAppIcon>1167446772</WhatsAppIcon>
         <MailIcon>alanizariadna592@gmail.com</MailIcon>
         </Footer>
        </div>
    )
}
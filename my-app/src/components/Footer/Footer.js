import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import InstagramIcon from '@material-ui/icons/Instagram';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import MailIcon from '@material-ui/icons/Mail';

export default function Footer() {
    return <footer>

        <Box 
        px={{ xs: 3, sm:10 }}
        py={{ xs: 5, sm:10 }}
        bgcolor="text.secondary"
        color="white">

            <Container maxWidth="lg">
                <Grid container spacing={5}>
                    <Grid item xs={12} sm={4}>
                        <Box borderBottom={1}>Ubicacion</Box>
                            <Box>
                                <LocationOnIcon></LocationOnIcon>
                                Buenos Aires, Gonzalez catan.                                                  
                                </Box>
                    </Grid>       
                    <Grid item xs={12} sm={4}>
                        <Box borderBottom={1}>Contactos</Box>
                            <Box>
                            <WhatsAppIcon></WhatsAppIcon>
                                <Link href="https://web.whatsapp.com/" color="inherit">
                                    1167446772                                
                                </Link>                    
                                </Box>     
                                <Box>
                                <InstagramIcon></InstagramIcon>
                                    <Link href="https://www.instagram.com/cositasbellasok/?hl=es" color="inherit">
                                        @cositasbellasok
                                    </Link>
                                    
                                    </Box>
                                    <Box>
                                        <MailIcon></MailIcon>
                                            alanizariadna592@gmail.com                                        
                                    </Box>
                    </Grid>       
                </Grid>
                <Box textAlign="center" pt={{xs: 5, sm: 10 }} pb={{xs: 5, sm: 0 }}>
                Ariadna Alaniz &reg; {new Date().getFullYear()}
                </Box>
            </Container>
        </Box>
    </footer>
};
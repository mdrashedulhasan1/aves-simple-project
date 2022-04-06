import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';
import { Typography } from '@mui/material';
import bg from '../../Images/footer-bg.jpg';
const Footer = () => {
    const bgImage = {
        background: `url(${bg})`,
        backgroundPosition: 'center',
        backgroundImage: 'cover',
        height: '300px',
        opacity:'.7',
        backgroundColor:'black',
        backgroundBlendMode: 'overlay',
    }
    return (
        <Box>
            <Box style={bgImage}>
                <Box sx={{ flexGrow: 1, m: 5, p: 5 }}>
                    <Box>
                        <Grid container spacing={2}>
                        <Grid style={{ textAlign: 'left', }} item xs={12} md={4}>
                            <Link to="">Links</Link><br />
                            <Link to="">Terms and Condition</Link><br />
                            <Link to="">Delivery and Shipping</Link><br />
                            <Link to="">Refund and Cancellation</Link><br />
                            <Link to="">Privacy Policies</Link>
                        </Grid>
                        <Grid item xs={12} md={4} style={{color:'white' }}>
                            <Typography style={{ fontWeight: '30', textAlign: 'left' }} variant="body2">
                                Our Branches :<br />
                                Mumbai, Maharashtra<br />
                                Kollam, Kerala
                            </Typography>
                            <Typography style={{ fontWeight: '30', textAlign: 'left' }} variant="body2">
                                Phone :<br />
                                +91-7907713977<br />
                            </Typography>
                            <Typography style={{ fontWeight: '30', textAlign: 'left' }} variant="body2">
                                Email Address :<br />
                                info@imagiobox.com<br />
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={4} style={{color:'white' }}>
                            <input type="email" class="form-control" id="inputPassword2" placeholder="enter your email"/>
                            <Typography style={{ fontWeight: '700', textAlign: 'left' }} variant="h3" component="div">
                                AVES
                            </Typography>
                            <Typography style={{ fontWeight: '30', textAlign: 'left' }} variant="body2">
                                AVES Academy aims at developing a better environment where the current learning process could be made more interactive as well as fun generative with the help of cretive thinking through arts and other contemporary educational methods.
                            </Typography>
                        </Grid>
                    </Grid>
                    </Box>

                </Box>
            </Box>
            <Box style={{ backgroundColor: 'black', color: 'white' }}>
                <small>Made by AVES Academy 2018. All Rights Reserved</small>
            </Box>
        </Box>
    );
};

export default Footer;
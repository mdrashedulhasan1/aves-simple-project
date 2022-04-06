import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Button, Typography } from '@mui/material';
import img from '../../../../Images/about.jpg';
import './About1.css';
const About1 = () => {
    return (
        <Box style={{ height: "450px"}} sx={{ flexGrow: 1, m: 5, p: 5 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Box style={{ borderLeft: '5px solid yellow' }}>
                        <Typography style={{ fontWeight: '900', marginLeft: '15px', textAlign: 'left' }} variant="h5" component="h2">
                            INTRODUCING<br />
                            IMAGIOBOX
                        </Typography>
                    </Box>
                    <Typography style={{ textAlign: 'left' }} variant="body2">
                        Imagiobox is world's first smart activity subscription box designed to meet the creative needs of young developing minds.
                        <br /><br />
                        We believe that the role of arts in education cannot be denied any further and that it is high time our children get access to appropriate and effective art resources to explore their creativity and to express it.
                        <br /><br />
                        Each box contains a series of fun filled art and craft activities, books, DIY projects and other exciting collectibles uniquely designed to encourage curiosity and to inspire your child's natural creative instincts.
                    </Typography>
                    <Box style={{ display: 'flex', justifyContent: "space-around" }}>
                        <Button variant="contained">Read More</Button>
                        <Button variant="contained">Color Pancil</Button>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{ width: '100%', height: "400px" }} src={img} alt="" />
                </Grid>
            </Grid>
        </Box>
    );
};

export default About1;
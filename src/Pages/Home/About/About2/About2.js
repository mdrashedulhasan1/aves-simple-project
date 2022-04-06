import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Button, Typography } from '@mui/material';
import img1 from '../../../../Images/carousel-img.jpg';
import img2 from '../../../../Images/carousel-img2.jpg';
import img3 from '../../../../Images/carousel-img3.jpg';
import './About2.css';
const About2 = () => {
    return (
        <Box style={{ height:"550px"}} sx={{ flexGrow: 1, m: 5, p: 5 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner about2-image-size">
                            <div className="carousel-item active">
                                <img  src={img1} className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img  src={img2} className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img  src={img3} className="d-block w-100" alt="..." />
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Box style={{ borderLeft: '5px solid yellow' }}>
                        <Typography style={{ fontWeight: '900', textAlign: 'left', marginLeft: '15px' }} variant="h5" component="h2">
                            HOW IMAGIO BOX<br />
                            SUBSCRIPTION<br />
                            WORKS?
                        </Typography>
                    </Box>
                    <Typography style={{ textAlign: 'left' }} variant="body2">
                        Imagiobox and ColorPencil combo provides your kid a smart way to develop creativity.
                        <br /><br />
                        You can subscribe for your IMAGIO box based on any of our monthly subscription plans.
                        <br /><br />
                        After subscription you will receive at your door step every month a customized art activity box designed for your child's age group.
                        <br /><br />
                        You will get regular updates from us on the registered mobile number and email id about the box and the delivery.
                        <br /><br />
                        Imagiobox subscribers get access to the smart application ColorPencil specially created for the kids to track their progress and participate in several events and competitions organised frequently.
                    </Typography>
                    <Box style={{ textAlign: 'left' }}>
                        <Button variant="contained">Shop-Now</Button>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default About2;
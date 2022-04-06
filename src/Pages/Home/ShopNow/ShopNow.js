import { Box, Typography } from '@mui/material';
import React from 'react';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
const ShopNow = () => {
    return (
        <Box sx={{ flexGrow: 1, m: 5, p: 5 }}>
            <Box style={{ textAlign: 'left', borderLeft: "5px solid yellow" }}>
                <Typography style={{ fontWeight: '500', marginLeft: '15px' }} variant="h5" component="div">
                    SHOP NOW
                </Typography>
            </Box>
            <Box style={{ textAlign: 'left', marginTop: '15px' }}>
                <Typography style={{ fontWeight: '500', backgroundColor: 'rgb(181, 183, 183)', padding: '5px', borderRadius: '5px' }} variant="h6" component="div">
                    1.Age Group
                </Typography>
                <Typography style={{ fontWeight: '500', margin: '15px 0', backgroundColor: 'rgb(181, 183, 183)', padding: '5px', borderRadius: '5px' }} variant="h6" component="div">
                    2.Subscription length
                </Typography>
                <Typography style={{ fontWeight: '500', backgroundColor: 'rgb(181, 183, 183)', padding: '5px', borderRadius: '5px' }} variant="h6" component="div">
                    3.Personalie it
                </Typography>
            </Box>
            <Box style={{marginTop: '15px', backgroundColor: 'rgb(181, 183, 183)', borderRadius: '5px', textAlign: 'left', height:'130px'}}>
                <Typography style={{ fontWeight: '500', padding: '5px' }} variant="h6" component="div">
                    Price: 0.00
                </Typography>
                <Box style={{ backgroundColor: 'rgb(205, 208, 208)', margin:'15px', borderRadius:'5px', padding:'5px' }} sx={{ flexGrow: 1}}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={4}>
                            <Typography style={{ textAlign: 'left' }} variant="body2">
                                Free Shipping
                            </Typography>
                            <Typography style={{ textAlign: 'left', fontSize: '10px' }} variant="body2">
                                on all subscriptions within INDIA.
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Typography style={{ textAlign: 'left' }} variant="body2">
                                Cancel Anytime
                            </Typography>
                            <Typography style={{ textAlign: 'left', fontSize: '10px' }} variant="body2">
                                no commitment
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Typography style={{ textAlign: 'left' }} variant="body2">
                                We're Here to Help
                            </Typography>
                            <Typography style={{ textAlign: 'left', fontSize: '10px' }} variant="body2">
                                ask us anything at info@imagiobox.com
                            </Typography>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Box>
    );
};

export default ShopNow;
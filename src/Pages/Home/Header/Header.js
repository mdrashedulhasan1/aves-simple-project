import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import header from '../../../Images/header.jpg';
const Header = () => {
    const bgImage = {
        background: `url(${header})`,
        backgroundPosition: 'center',
        backgroundImage: 'cover',
        height: '400px',
    }
    return (
        <Box style={bgImage} sx={{ display: 'flex', alignItems: 'center', justifyContent:'center' }}>
                <Box>
                    <Typography variant="h1" component="h2">
                        imagiobox
                    </Typography>
                    <Typography variant="h6" component="h2">
                        inspiring creativity through arts
                    </Typography>
                    <Button variant="contained">Shop-Now</Button>
                </Box>
        </Box>
    );
};

export default Header;
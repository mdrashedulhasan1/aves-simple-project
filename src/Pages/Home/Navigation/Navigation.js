import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import logo from '../../../Images/logo.png';
import { NavLink } from 'react-router-dom';
const Navigation = () => {
    const navStyle = {
        textDecoration:'none',
         marginRight:'20px',
          color:'white'
    }
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ ml: 6 }}
                    >
                        <img style={{ width: '50%', backgroundColor: 'white', borderRadius: '5px' }} src={logo} alt="" />
                    </IconButton>
                    <Box  sx={{ ml: 'auto', mr: 6 }}>
                        <NavLink
                        style={navStyle}
                            to="/home"
                            activeStyle={{
                                fontWeight: "bold",
                                color: "goldenrod"
                            }}
                        >
                            Home
                        </NavLink>
                        <NavLink
                        style={navStyle}
                            to="/about"
                            activeStyle={{
                                fontWeight: "bold",
                                color: "goldenrod"
                            }}
                        >
                            About
                        </NavLink>
                        <NavLink
                        style={navStyle}
                            to="/shop-now"
                            activeStyle={{
                                fontWeight: "bold",
                                color: "goldenrod"
                            }}
                        >
                            Shop-Now
                        </NavLink>
                        <NavLink
                        style={navStyle}
                            to="/faq"
                            activeStyle={{
                                fontWeight: "bold",
                                color: "goldenrod"
                            }}
                        >
                            FAQ
                        </NavLink>
                        <NavLink
                        style={navStyle}
                            to="/blog"
                            activeStyle={{
                                fontWeight: "bold",
                                color: "goldenrod"
                            }}
                        >
                            Blog
                        </NavLink>
                        <NavLink
                        style={navStyle}
                            to="/aves"
                            activeStyle={{
                                fontWeight: "bold",
                                color: "goldenrod"
                            }}
                        >
                            AVES
                        </NavLink>

                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Navigation;
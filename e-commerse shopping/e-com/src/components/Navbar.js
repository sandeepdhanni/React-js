import React from "react";
import { ShoppingCart, Menu as MenuIcon } from "@mui/icons-material";
import { AppBar, Toolbar, IconButton, Button, Typography, Drawer, List, ListItem, ListItemText } from "@mui/material";
import { useState } from "react";
import { WbSunny, NightsStay } from '@mui/icons-material';
import { useThemeContext } from '../ThemeContext';

const Navbar = () => {
    const { toggleTheme } = useThemeContext();
    // Determine which icon to show based on the current theme
    const isDarkMode = document.body.classList.contains('dark');

    const [drawerOpen, setDrawerOpen] = useState(false);

    const toggleDrawer = () => {
        setDrawerOpen(!drawerOpen);
    };

    const navItems = ["Home", "Contact", "Shop", "FAQ", "Login"];

    return (
        <div className="flex-grow">
            <AppBar position="static" color="primary">
                <Toolbar className="flex justify-between">
                    {/* Logo or Brand Name */}
                    <Typography variant="h6" className="font-bold text-white">
                        MyShop
                    </Typography>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex space-x-4">
                        {navItems.map((item) => (
                            <Button key={item} color="inherit" className="hover:bg-gray-700 rounded px-3">
                                {item}
                            </Button>
                        ))}
                        <IconButton color="inherit">
                            <ShoppingCart />
                        </IconButton>
                    </div>

                    <IconButton color="inherit" onClick={toggleTheme}>
                        {isDarkMode ? <WbSunny /> : <NightsStay />}
                    </IconButton>

                    {/* Mobile Menu Icon */}
                    <IconButton
                        edge="end"
                        color="inherit"
                        aria-label="menu"
                        className="md:hidden"
                        onClick={toggleDrawer}
                    >
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>

            {/* Drawer for Mobile */}
            <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer}>
                <List className="w-64">
                    {navItems.map((item) => (
                        <ListItem button key={item} onClick={toggleDrawer}>
                            <ListItemText primary={item} />
                        </ListItem>
                    ))}
                    <ListItem button onClick={toggleDrawer}>
                        <IconButton edge="end" color="inherit">
                            <ShoppingCart />
                        </IconButton>
                    </ListItem>
                </List>
            </Drawer>
        </div>
    );
};

export default Navbar;

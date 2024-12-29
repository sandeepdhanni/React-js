import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Typography,
  Drawer,
  Badge,
  List,
  ListItem,
  ListItemText,
  TextField,
} from "@mui/material";
import {
  ShoppingCart,
  Menu as MenuIcon,
  WbSunny,
  NightsStay,
} from "@mui/icons-material";
import { useSelector } from "react-redux";
import { useThemeContext } from "../ThemeContext";
import CartSidebar from "./cartSidebar";

const Navbar = () => {
  const { toggleTheme, darkMode } = useThemeContext();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  const cartItems = useSelector((state) => state.cart.items);

  // Calculate total quantity of items in the cart
  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const toggleCart = () => {
    setCartOpen(!cartOpen);
  };

  const navItems = ["Home", "Contact", "Shop", "FAQ", "Login"];

  return (
    <div className="flex-grow">
      <AppBar position="static" color="primary">
        <Toolbar className="flex justify-between">
          <Typography variant="h6" className="font-bold text-white">
            MyShop
          </Typography>

          <TextField
            variant="outlined"
            placeholder="Search..."
            size="small"
            className="hidden md:block mx-4 text-bold"
          />

          <div className="hidden md:flex space-x-4">
            {navItems.map((item) => (
              <Button
                key={item}
                color="inherit"
                className="hover:bg-gray-700 rounded px-3"
              >
                {item}
              </Button>
            ))}
            <IconButton color="inherit" onClick={toggleCart}>
              <Badge badgeContent={totalQuantity} color="secondary">
                <ShoppingCart />
              </Badge>
            </IconButton>
          </div>

          <IconButton color="inherit" onClick={toggleTheme}>
            {darkMode ? <WbSunny /> : <NightsStay />}
          </IconButton>

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

      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer}>
        <List className="w-64">
          {navItems.map((item) => (
            <ListItem button key={item} onClick={toggleDrawer}>
              <ListItemText primary={item} />
            </ListItem>
          ))}
        </List>
      </Drawer>

      <Drawer anchor="right" open={cartOpen} onClose={toggleCart}>
        <CartSidebar />
      </Drawer>
    </div>
  );
};

export default Navbar;
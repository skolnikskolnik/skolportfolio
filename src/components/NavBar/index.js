import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';


export default function NavBar() {

  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    navBar: {
      backgroundColor: "#35CAC3"
    }
  }));

  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const [isOpen, setIsOpen] = useState(false);


  const handleMenu = (event) => {
    event.preventDefault();
    setIsOpen(true);
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    if(isOpen === true){
      console.log("test");
      setIsOpen(false); 
    }
  };

  const handleClosePortfolio = () => {
    setAnchorEl(null);
    window.location.href = "/portfolio";
  };

  const handleCloseHome = () => {
    setAnchorEl(null);
    window.location.href = "/";
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.navBar}>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={handleMenu}>
            <MenuIcon />
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              // open={open}
              open={isOpen}
              onClose={handleClose}
            >
              <MenuItem onClick={handleCloseHome} >Home</MenuItem>
              <MenuItem onClick={handleClosePortfolio} >Portfolio</MenuItem>
            </Menu>
          </IconButton>
          <Typography variant="h6" 
          onClick={handleClose}
          className={classes.title}>
            Navigate
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
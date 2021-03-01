import React from "react";

import { makeStyles } from "@material-ui/core/styles";


import { withRouter } from "react-router-dom";

import {
  AppBar,
  Toolbar,
  Box,
  Avatar,
  CssBaseline,
  IconButton,

  
  
  Typography,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import profile from "../../../images/profile.jpg";

// import { useDispatch } from 'react-redux';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    // flexGrow:1,
  },
  appBar: {
    marginLeft: drawerWidth,
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    // marginRight:drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "wrap",
  },
  
  
  toolbar: {
    display: "flex",
    marginLeft: drawerWidth,
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  Brand:{
      color:'black',
      marginLeft:'20%',
      fontSize:'17px',
      fontWeight:'700'
  },
  logout_text:{
    fontSize:'13px',
    color:'grey'

  },

}));

function DashAppbar(props) {
 
  const classes = useStyles();
 
  
  // const {title}=this.props

  

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        style={{ position: "fixed", top: 0, background: "transparent" }}
        
        // position="static"
        // className={clsx(classes.appBar, {
        //   [classes.appBarShift]: open,
        // })}
      >
        <Toolbar display="flex">
          <Box flexGrow={1}>
            <Typography className={classes.Brand}>
              Dashboard
            </Typography>
          </Box>
          <Box>
            <IconButton aria-label="search" color="black">
              <SearchIcon />
            </IconButton>
          </Box>
          <Box className="mr-2">
            <IconButton aria-label="search" color="black">
              <NotificationsNoneIcon />
            </IconButton>
          </Box>
          <Box>
            <Avatar alt="Cindy Baker" src={profile} className={classes.small} />
          </Box>
          <Box className="ml-3">
            <Typography className={classes.logout_text}>Logout</Typography>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
}
export default withRouter(DashAppbar);

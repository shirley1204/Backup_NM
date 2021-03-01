import React from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";

import { Dashboard, FileCopy } from "@material-ui/icons";
import GTranslateOutlinedIcon from "@material-ui/icons/GTranslateOutlined";
import GroupAddOutlinedIcon from "@material-ui/icons/GroupAddOutlined";
import SupervisedUserCircleOutlinedIcon from "@material-ui/icons/SupervisedUserCircleOutlined";
import SettingsIcon from "@material-ui/icons/Settings";
import ContactPhoneIcon from "@material-ui/icons/ContactPhone";
import logo from "../../images/logo.PNG";

import { withRouter } from "react-router-dom";

import {
  Drawer,
  List,
  CssBaseline,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@material-ui/core";

const drawerWidth = 200;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
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
  },
  drawerPaper: {
    width: drawerWidth,
  },

  toolbar: {
    display: "flex",
    // marginLeft: drawerWidth,
    alignItems: "center",
    marginTop: "5%",
    justifyContent: "flex-end",

    // padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    // ...theme.mixins.toolbar,
  },
  content: {
    // flexGrow: 1,
    // padding: theme.spacing(3),
    marginTop: "2%",
    width: "100%",
    marginLeft:'20px',
  },
  title: {
    flexGrow: 1,
  },
  drawerlist: {
    // back:'#191919',
    color: "white",
    height: "100%",
    width: "100%",

    /* position:fixed;top:0%; left:0%; */
    border: "1px solid black",
    backgroundColor: "#191919",
    borderRadius: "0px 25px 25px 0px",
    //  fontSize:'13px'
  },
  listitemtext: {
    fontSize: "13px",
    color: "lightgrey",
    marginLeft:'-10px'
  },
  listicons: {
    fontSize: "16px",
    color: "lightgrey",
    marginLeft:'10px'
  },
}));

function MiniDrawer(props) {
  const { history } = props;
  const classes = useStyles();

  // const {title}=this.props

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        {/* <div className={classes.toolbar}>
           <IconButton onClick={handleDrawerClose}> 
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
         </div>  */}

        <List className="drawerlist">
          <div className="mb-3">
            <img src={logo} alt="logo" className="logo" />
          </div>

          {[
            {
              text: (
                <Typography className={classes.listitemtext}>
                  Dashboard
                </Typography>
              ),
              icon: <Dashboard className={classes.listicons} />,
              Action: () => history.push("/dashboard"),
            },
            {
              text: (
                <Typography className={classes.listitemtext}>
                  Members
                </Typography>
              ),
              icon: <GroupAddOutlinedIcon className={classes.listicons} />,
              Action: () => history.push("/members"),
            },
            {
              text: (
                <Typography className={classes.listitemtext}>
                  Services Requests
                </Typography>
              ),
              icon: <GTranslateOutlinedIcon className={classes.listicons} />,
              Action: () => history.push("/services"),
            },
            {
              text: (
                <Typography className={classes.listitemtext}>
                  Vendors
                </Typography>
              ),
              icon: (
                <SupervisedUserCircleOutlinedIcon
                  className={classes.listicons}
                />
              ),
              Action: () => history.push("/vendors"),
            },
            {
              text: (
                <Typography className={classes.listitemtext}>
                  My Agenda
                </Typography>
              ),
              icon: <FileCopy className={classes.listicons} />,
              Action: () => history.push("/agenda"),
            },
          ].map((item, index) => (
            <ListItem
              button
              key={item.text}
              onClick={item.Action}
              className="listitems"
            >
              <ListItemIcon>{item.icon ? item.icon : null}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {props.children}
      </main>
    </div>
  );
}
export default withRouter(MiniDrawer);

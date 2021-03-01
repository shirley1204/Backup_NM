import React from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";

import { Dashboard, FileCopy } from "@material-ui/icons";
import GTranslateOutlinedIcon from "@material-ui/icons/GTranslateOutlined";
import GroupAddOutlinedIcon from "@material-ui/icons/GroupAddOutlined";
import SupervisedUserCircleOutlinedIcon from "@material-ui/icons/SupervisedUserCircleOutlined";
import SettingsIcon from "@material-ui/icons/Settings";
import ContactPhoneIcon from "@material-ui/icons/ContactPhone";
import sidelogo from "../../images/sidebar_logo.PNG";

import { withRouter } from "react-router-dom";

import {
  Drawer,
  List,
  CssBaseline,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
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
  drawerOpen: {
    width: drawerWidth,

    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1,
    },
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
  title: {
    flexGrow: 1,
  },
}));

function MiniDrawer(props) {
  const { history } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  // const {title}=this.props

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        {/* <div className={classes.toolbar}>
           <IconButton onClick={handleDrawerClose}> 
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
         </div>  */}

        <List className="drawerlist">
          <div className="mb-3">
            <img
              src={sidelogo}
              alt="logo"
              className="sidenavlogo"
              onClick={handleDrawerOpen}
            />
          </div>

          {[
            {
              text: "Dashboard",
              icon: <Dashboard fontSize="small" style={{ color: "white" }} />,
              Action: () => history.push("/dashboard"),
            },
            {
              text: "Members",
              icon: (
                <GroupAddOutlinedIcon
                  fontSize="small"
                  style={{ color: "white" }}
                />
              ),
              Action: () => history.push("/members"),
            },
            {
              text: "ServicesRequests",
              icon: (
                <GTranslateOutlinedIcon
                  fontSize="small"
                  style={{ color: "white" }}
                />
              ),
              Action: () => history.push("/services"),
            },
            {
              text: "Vendors",
              icon: (
                <SupervisedUserCircleOutlinedIcon
                  fontSize="small"
                  style={{ color: "white" }}
                />
              ),
              Action: () => history.push("/vendors"),
            },
            {
              text: "My Agenda",
              icon: <FileCopy fontSize="small" style={{ color: "white" }} />,
              Action: () => history.push("/agenda"),
            },
            {
              text: "Settings",
              icon: (
                <SettingsIcon fontSize="small" style={{ color: "white" }} />
              ),
              Action: () => history.push("/settings"),
            },
            {
              text: "Contact Us",
              icon: (
                <ContactPhoneIcon fontSize="small" style={{ color: "white" }} />
              ),
              Action: () => history.push("/contact_details"),
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

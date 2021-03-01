import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Grid from "@material-ui/core/Grid";

import HomeIcon from "@material-ui/icons/Home";
import CallIcon from "@material-ui/icons/Call";
import MailOutlineIcon from "@material-ui/icons/MailOutline";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",

    // flexGrow:1,
  },
  Paper: {
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      // color: theme.palette.text.secondary,
    },
  },
  Box: {
    width: "320px",
    margin: "auto",
  },
  Accordion: {
    backgroundColor: "#FEFCFD",
    marginBottom: "8px",
  },
  heading: {
    marginLeft: "40px",
    fontSize: "12px",
  },

  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: 500,
  },

  Borderbox: {
    border: "1px solid lightgrey",
    borderRadius: "5px",
    height: "85px",
    backgroundColor: "#FEFCFD",
  },
}));

export default function ContactBox() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.Box}>
        <Grid container spacing={2} className={classes.Borderbox}>
          <Grid item xs className="mt-4">
            <HomeIcon />
          </Grid>
          <Grid item xs={10}>
            <p className="text-muted">Mailing Address</p>
            <p>3900 S Las vegas Blvd,Las Vegas NV 89119, United States</p>
          </Grid>
        </Grid>
        <br />
        <Grid container spacing={2} className={classes.Borderbox}>
          <Grid item xs className="mt-4">
            <CallIcon />
          </Grid>
          <Grid item xs={10}>
            <p className="text-muted">Contact Numbers</p>
            <p>+710-8888-8888</p>
          </Grid>
        </Grid>
        <br />
        <Grid container spacing={2} className={classes.Borderbox}>
          <Grid item xs className="mt-4">
            <MailOutlineIcon />
          </Grid>
          <Grid item xs={10}>
            <p className="text-muted">Email ID</p>
            <p>axyxvv@gmail.com</p>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import Paper from "@material-ui/core/Paper";
// import Typography from '@material-ui/core/Typography';
import Button from "@material-ui/core/Button";

import LanguageIcon from "@material-ui/icons/Language";
import MonetizationOnOutlinedIcon from "@material-ui/icons/MonetizationOnOutlined";
import NotificationsActiveOutlinedIcon from "@material-ui/icons/NotificationsActiveOutlined";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    // flexGrow:1,
  },
  Paper: {
    height: "85vh",
    width: "100%",
  },
  Box: {
    width: "320px",
    display: "block",

    margin: " auto",
  },
  Accordion: {
    backgroundColor: "#FEFCFD",
    marginBottom: "8px",
  },
  heading: {
    marginLeft: "65px",
    fontSize: "12px",
  },

  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: 500,
  },
  Button: {
    backgroundColor: "black",
    color: "white",
    borderRadius: "5px",
    fontSize: "10px",
    // marginLeft:'25%',
    display: "block",
    margin: "auto",
  },
}));

export default function SettingBox() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.Paper}>
        <br />
        <br />
        <br />

        <div className={classes.Box}>
          <Accordion className={classes.Accordion}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <div className="row">
                <div className="col-md-2 mt-3 mr-2">
                  <LanguageIcon />
                </div>
                <div className="col-md-10 col-lg-8">
                  <p className="text-muted">Select Time Zone</p>
                </div>

                <p className={classes.heading}> Washington, DC, USA (GMT-4)</p>
              </div>
            </AccordionSummary>
          </Accordion>
          <Accordion className={classes.Accordion}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <div className="row">
                <div className="col-md-2 mt-3 mr-2">
                  <MonetizationOnOutlinedIcon />
                </div>
                <div className="col-md-10 col-lg-8">
                  <p className="text-muted">Select Currency</p>
                </div>

                <p className={classes.heading}> USD-United States</p>
              </div>
            </AccordionSummary>
          </Accordion>
          <Accordion className={classes.Accordion}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3a-content"
              id="panel3a-header"
            >
              <div className="row">
                <div className="col-md-2 mt-3 mr-2">
                  <NotificationsActiveOutlinedIcon />
                </div>
                <div className="col-md-10 col-lg-8">
                  <p className="text-muted">Notification Setting</p>
                </div>

                <p className={classes.heading}> Yes</p>
              </div>
            </AccordionSummary>
          </Accordion>
          <Button variant="contained" className={classes.Button}>
            Save Changes
          </Button>
        </div>
      </Paper>
    </div>
  );
}

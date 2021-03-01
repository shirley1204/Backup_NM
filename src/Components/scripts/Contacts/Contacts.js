import React, { Component } from 'react'
import Drawer from '../../reusuable/Drawer'
import Appbar from '../../reusuable/Appbar'
import ContactBox from './ContactBox'

import {Paper} from "@material-ui/core";
import { withStyles } from '@material-ui/styles';


const useStyles = (theme=> ({
    root: {
      width: "100%",
    //   display:'block',
    //   margin:'auto',
      
    height:'90vh'
    },
    
    
  }));
  

 class Settings extends Component {
     
     
    render() {
        const {classes} = this.props;

        return (
            <React.Fragment>
              
            <Drawer>
            <Appbar title="Contacts" />
            <Paper className={classes.root}>
                <br />
                <br />
                <br />
                <ContactBox className={classes.ContactBox} />
                </Paper>
             
         
                
                </Drawer>
                </React.Fragment>


        )
    }
}
export default withStyles(useStyles)(Settings)
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    // width:'500px'
  },
  tablebox:{
    width:'700px',

  },
  tablehead:{
    fontWeight:'600'
  },
  details:{
    fontSize:'12px',
    fontWeight:'550'
  },
  status:{
    color:'lightgreen',
    fontSize:'12px'
  },
  tabledata:{
    color:'#737373',
    fontSize:'12px',
  }
});

function createData(newdate, name, membership, venue, status,details) {
  return { newdate, name, membership, venue, status,details };
}

const rows = [
  createData('01 May 2020','Arjun Nikam','Gold','New York','Confirmed','View Detail'),
  createData('01 May 2020','Arjun Nikam','Gold','New York','Confirmed','View Detail'),
  createData('01 May 2020','Arjun Nikam','Gold','New York','Confirmed','View Detail'),
  createData('01 May 2020','Arjun Nikam','Gold','New York','Processing','View Detail'),
  createData('01 May 2020','Arjun Nikam','Gold','New York','Processing','View Detail'),
  createData('01 May 2020','Arjun Nikam','Gold','New York','Confirmed','View Detail'),
  createData('01 May 2020','Arjun Nikam','Gold','New York','Confirmed','View Detail'),


];

export default function Dashboardtable() {
  const classes = useStyles();

  return (
    
    <React.Fragment>
      <div className={classes.tablebox}>
        <p style={{fontSize:'13px',color:'black',fontWeight:'bold'}}>Agenda</p>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell className={classes.tablehead}>Date</TableCell>
                <TableCell align="center" className={classes.tablehead}>Name</TableCell>
                <TableCell align="center" className={classes.tablehead}>Membership</TableCell>
                <TableCell align="center" className={classes.tablehead}>Venue</TableCell>
                <TableCell align="center" className={classes.tablehead}>Status</TableCell>
                <TableCell align="center"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.name}>
                  <TableCell component="th" scope="row" className={classes.tabledata}>
                    {row.newdate}
                  </TableCell>
                  <TableCell align="left" className={classes.tabledata}>{row.name}</TableCell>
                  <TableCell align="center" className={classes.tabledata}>{row.membership}</TableCell>
                  <TableCell align="left" className={classes.tabledata}>{row.venue}</TableCell>
                  <TableCell align="left" className={classes.status}>{row.status}</TableCell>
                  <TableCell align="left" className={classes.details}>{row.details}</TableCell>

                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </React.Fragment>
  );
}
import React, { Component } from 'react';
import Customer from './components/Customer'
import './App.css';
import Paper from '@material-ui/core/Paper'
import Table from '@material-ui/core/Table'
import TableHead from '@material-ui/core/TableHead'
import TableBody from '@material-ui/core/TableBody'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table: {
    minWidth: 1080
  }
})

const customer = [{
  'id': 1,
  'name': 'Steve Lee',
  'birthday': '900511',
  'gender': 'male',
  'job': 'Student',
  'image': 'https://placeimg.com/64/64/any'
}];

class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Profile Image</TableCell>
              <TableCell>Full Name</TableCell>
              <TableCell>Birth Date</TableCell>
              <TableCell>Gender</TableCell>
              <TableCell>Job</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          {customer.map(customer => {
            return (
              <Customer
                id={customer.id}
                image={customer.image}
                name={customer.name}
                birthday={customer.birthday}
                gender={customer.gender}
                job={customer.job}
              />
            );
          })}
          </TableBody>
        </Table>
       
      </Paper>
    );
  }
}

export default withStyles(styles)(App);

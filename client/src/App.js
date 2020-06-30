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

const customers = [
  {
      "id": 1,
      "name": "Steve Lee",
      "birthday": "900511",
      "gender": "male",
      "job": "Student",
      "image": "https://placeimg.com/64/64/1"
    },
    {
      "id": 2,
      "name": "James Park",
      "birthday": "930201",
      "gender": "male",
      "job": "Clerk",
      "image": "https://placeimg.com/64/64/2"
    },
    {
      "id": 1,
      "name": "Irene Kim",
      "birthday": "950603",
      "gender": "female",
      "job": "Designer",
      "image": "https://placeimg.com/64/64/3"
    }
];

class App extends Component {

  state = {
    customers: ""
  }

  componentDidMount() {
    this.callApi()
    .then(res => this.setState({customers: res}))
    .catch(err => console.log(err));
  }

  callApi = async() => {
    const response = await fetch('/api/customers')
    const body = await response.json();
    return body;
  }

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
          {this.state.customers ? this.state.customers.map(c => {
            return (
              <Customer
                id={c.id}
                image={c.image}
                name={c.name}
                birthday={c.birthday}
                gender={c.gender}
                job={c.job}
              />
            );
          }) : ""}
          </TableBody>
        </Table>
       
      </Paper>
    );
  }
}

export default withStyles(styles)(App);

import React, { Component } from 'react';
import Customer from './components/Customer'
import './App.css';

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
    return (
      <div>
        {
          customer.map(customer => {
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
          })
        }
      </div>
    );
  }
}

export default App;

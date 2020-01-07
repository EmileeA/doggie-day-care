/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import './App.scss';
// import NavBar from '../components/NavBar/NavBar.js';
import dogsData from '../helpers/data/dogsData';
import DogPen from '../components/DogPen/DogPen';
import employeesData from '../helpers/data/employeesData';
import StaffRoom from '../components/StaffRoom/StaffRoom';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  state = {
    dogs: [],
    employees: [],
  }

  componentDidMount() {
    const dogs = dogsData.getAllDogs();
    const employees = employeesData.getAllEmployees();
    this.setState({ dogs, employees });
  }

  render() {
    return (
    <div className="App">
      <h1>Doggie Day Care</h1>
      <div className="row d-flex justify-content-between">
      <DogPen dogs={this.state.dogs} />
      <StaffRoom employees={this.state.employees} />
      </div>
    </div>
    );
  }
}

export default App;

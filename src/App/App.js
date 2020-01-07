/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import './App.scss';
// import NavBar from '../components/NavBar/NavBar.js';
import dogsData from '../helpers/data/dogsData';
import DogPen from '../components/DogPen/DogPen';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  state = {
    dogs: [],
  }

  componentDidMount() {
    const dogs = dogsData.getAllDogs();
    this.setState({ dogs });
  }

  render() {
    return (
    <div className="App">
      <h1>Doggie Day Care</h1>
      <DogPen dogs={this.state.dogs} />
      </div>
    );
  }
}

export default App;

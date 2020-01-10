/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import firebase from 'firebase/app';
import NavBar from '../components/NavBar/NavBar';
import firebaseConnection from '../helpers/data/connection';
import Home from '../components/Home/Home';

firebaseConnection();

class App extends React.Component {
  state = {
    authed: false,
  }

  componentDidMount() {
    this.removeListener = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ authed: true });
      } else {
        this.setState({ authed: false });
      }
    });
  }

  componentWillUnmount() {
    this.removeListener();
  }

  render() {
    const { authed } = this.state;
    return (
    <div className="App">
      <NavBar authed={authed} />
      <div className="authedContainer">
        {
          (authed) ? (<Home />) : (<img className="homeDog m-2" src="https://cdn.wallpaper.com/main/styles/fp_922x565/s3/legacy/gallery/17056799/G_Doggy_Style.jpg" alt="King Dog" />)
        }
      </div>
    </div>
    );
  }
}

export default App;

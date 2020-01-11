import React from 'react';
import PropTyles from 'prop-types';
import walkShape from '../../helpers/propz/walkShape';
import dogsData from '../../helpers/data/dogsData';
import employeeData from '../../helpers/data/employeesData';
import walksWithDataShape from '../../helpers/propz/walksWithDataShape';

class SingleWalk extends React.Component {
  static propTypes = {
    walksWithData: walksWithDataShape.walksWithDataShape,
    setEditMode: PropTypes.func,
    setWalkToEdit: PropTypes.func,
  }


setEditMode = (e) => {
  const { setEditMode, setWalkToEdit, walk } = this.props;
  e.preventDefault();
  setEditMode(true);
  setWalkToEdit(walk);
}


// componentDidMount() {
//   this.getDog();
//   this.getEmployee();
// }

// getDog = () => {
//   const { walk } = this.props;
//   dogsData.getDogById(walk.dogId)
//     .then((dog) => {
//       const dogName = dog.data.name;
//       this.ListeningStateChangedEvent({ dogName });
//     })
//     .catch((error) => console.error(error));
// }

// getEmployee = () => {
//   const { walk } = this.props;
//   employeeData.getEmployeeById(walk.employeeId)
//     .then((employee) => {
//       const employeeFirstName = employee.data.firstName;
//       const employeeLastName = employee.data.lastName;
//       const employeeName = `${employeeFirstName} ${employeeLastName}`;
//       this.ListeningStateChangedEvent({ employeeName });
//     })
//     .catch((error) => console.error(error));
// }

render() {
  const { walk } = this.props;


  return (
  <div className="card col-3 m-3">
    <div className="card-body">
      <h5 className="card-title">{walk.dogName}</h5>
      <p className="card-text">{walk.employeeName}</p>
      <p className="card-text">{walk.date}</p>
    </div>
    <div className="card-footer d-flex justify-content-around">
      <button className="btn btn-secondary" onClick={() => {}}>Delete</button>
      <button className="btn btn-light" onClick={this.setEditMode}>Edit</button>
    </div>
  </div>
  );
}
}

export default SingleWalk;

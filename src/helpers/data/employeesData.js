// const employees = [
//   {
//     id: 'employeee1',
//     firstName: 'Oscar',
//     lastName: 'Grouch',
//     phoneNumber: '555-867-5309',
//   },
//   {
//     id: 'employeee2',
//     firstName: 'Mister',
//     lastName: 'Rogers',
//     phoneNumber: '615-516-6156',
//   },
//   {
//     id: 'employeee3',
//     firstName: 'Cesar',
//     lastName: 'Millan',
//     phoneNumber: '789-654-1233',
//   },
// ];
import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getAllEmployees = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/employees.json`)
    .then((result) => {
      const allEmployeesObj = result.data;
      const employees = [];
      if (allEmployeesObj != null) {
        Object.keys(allEmployeesObj).forEach((employeeId) => {
          const newEmployee = allEmployeesObj[employeeId];
          newEmployee.id = employeeId;
          employees.push(newEmployee);
        });
      }
      resolve(employees);
    })
    .catch((error) => {
      reject(error);
    });
});

const getEmployeeById = (employeeId) => axios.get(`${baseUrl}/employees/${employeeId}.json`);

export default { getAllEmployees, getEmployeeById };

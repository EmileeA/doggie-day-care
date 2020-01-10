/* eslint-disable max-len */
// const dogs = [
//   {
//     id: 'dog1',
//     imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/7/7e/Basset_Hound_600.jpg',
//     name: 'Coco',
//     owner: 'Peter Danger',
//     description: 'Burps minimally. Can read (but cannot understand) Hebrew.',
//   },
//   {
//     id: 'dog2',
//     imageUrl: 'http://1kjkdg1axrkd2g03cnboj761.wpengine.netdna-cdn.com/wp-content/uploads/2017/12/braydon-anderson-105552-e1512684107659.jpg',
//     name: 'Chester',
//     owner: 'Buster Brown',
//     description: 'Does not use excessive acronyms. Expertly quotes and recognizes dialogue from early seasons of The Simpsons.',
//   },
//   {
//     id: 'dog3',
//     imageUrl: 'http://1.bp.blogspot.com/-VjM0CmtN-vU/T7YX-LXa09I/AAAAAAAADA0/Vt1oGWEG0lw/s1600/sheepdog+border+collie+shakes+off+water+funny+picture+photo+pulling+faces+raspberry+tongue.jpg',
//     name: 'George Jr',
//     owner: 'George Sr',
//     description: 'Enjoys fine wine.',

//   },
// ];
import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getAllDogs = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/dogs.json`)
    .then((result) => {
      const allDogsObj = result.data;
      const dogs = [];
      if (allDogsObj != null) {
        Object.keys(allDogsObj).forEach((dogId) => {
          const newDog = allDogsObj[dogId];
          newDog.id = dogId;
          dogs.push(newDog);
        });
      }
      resolve(dogs);
    })
    .catch((error) => {
      reject(error);
    });
});

const getDogById = (dogId) => axios.get(`$baseUrl}/dogs/${dogId}.json`);

export default { getAllDogs, getDogById };

import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getAllWalks = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/walks.json`)
    .then((result) => {
      const allWalksObj = result.data;
      const walks = [];
      if (allWalksObj != null) {
        Object.keys(allWalksObj).forEach((walkId) => {
          const newWalk = allWalksObj[walkId];
          newWalk.id = walkId;
          walks.push(newWalk);
        });
      }
      resolve(walks);
    })
    .catch((error) => {
      reject(error);
    });
});


const saveWalk = (walkInfo) => axios.post(`${baseUrl}/walks.json`, walkInfo);

const updateWalk = (walkId, newWalkInfo) => axios.put(`${baseUrl}/walks/${walkId}.json`, newWalkInfo);

const deleteWalk = (walkId) => axios.delete(`${baseUrl}/walks/${walkId}.json`);


export default {
  getAllWalks,
  saveWalk,
  updateWalk,
  deleteWalk,
};

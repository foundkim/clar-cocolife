import axios from 'axios';
import { createMessage, returnErrors } from './messages';

import { GET_LOCATIONS, DELETE_LOCATION, ADD_LOCATION, UPDATE_LOCATION } from './types';

// const baseURL = 'http://127.0.0.1:8000'
const baseURL = 'https://clar-cocolife-api.azurewebsites.net'
// GET LOCATIONS
export const getLocations = () => (dispatch) => {
  axios
    .get(baseURL + '/locations/')
    .then((res) => {
      dispatch({
        type: GET_LOCATIONS,
        payload: res.data,
      });
    })
    .catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
};

// DELETE LOCATION
export const deleteLocation = (id) => (dispatch) => {
  axios
    .delete(baseURL + `/locations/${id}/`)
    .then((res) => {
      dispatch(createMessage({ deleteLocation: 'Localité supprimée' }));
      dispatch({
        type: DELETE_LOCATION,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};

// ADD LOCATION
export const addLocation = (location) => (dispatch) => {
  axios
    .post(baseURL + '/locations/',location)
    .then((res) => {
      dispatch(createMessage({ addLocation: 'Localité enrgistrée' }));
      dispatch({
        type: ADD_LOCATION,
        payload: res.data,
      });
    })
    .catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
};

// UPDATE LOCATION
export const updateLocation = (id, location) => (dispatch) => {
    axios
      .put(baseURL + `/locations/${id}/`,location)
      .then((res) => {
        dispatch(createMessage({ updateLocation: 'Localité mise à jour' }));
        dispatch({
          type: UPDATE_LOCATION,
          payload: res.data,
        });
      })
      .catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
  };
  

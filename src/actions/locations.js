import axios from "axios";
import { tokenConfig } from "./auth";
import { baseURL } from "./config";
import { createMessage, returnErrors } from "./messages";

import {
  GET_LOCATIONS,
  DELETE_LOCATION,
  ADD_LOCATION,
  UPDATE_LOCATION,
  USER_LOADING,
} from "./types";

// GET LOCATIONS
export const getLocations = () => (dispatch, getState) => {
  dispatch({ type: USER_LOADING });
  axios
    .get(baseURL + "/locations/", tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: GET_LOCATIONS,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

// DELETE LOCATION
export const deleteLocation = (id) => (dispatch, getState) => {
  dispatch({ type: USER_LOADING });
  axios
    .delete(baseURL + `/locations/${id}/`, tokenConfig(getState))
    .then((res) => {
      dispatch(createMessage({ deleteLocation: "Localité supprimée" }));
      dispatch({
        type: DELETE_LOCATION,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};

// ADD LOCATION
export const addLocation = (location) => (dispatch, getState) => {
  dispatch({ type: USER_LOADING });
  axios
    .post(baseURL + "/locations/", location, tokenConfig(getState))
    .then((res) => {
      dispatch(createMessage({ addLocation: "Localité enrgistrée" }));
      dispatch({
        type: ADD_LOCATION,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

// UPDATE LOCATION
export const updateLocation = (id, location) => (dispatch, getState) => {
  dispatch({ type: USER_LOADING });
  axios
    .put(baseURL + `/locations/${id}/`, location, tokenConfig(getState))
    .then((res) => {
      dispatch(createMessage({ updateLocation: "Localité mise à jour" }));
      dispatch({
        type: UPDATE_LOCATION,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

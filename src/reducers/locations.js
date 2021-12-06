import {
  GET_LOCATIONS,
  DELETE_LOCATION,
  ADD_LOCATION,
  UPDATE_LOCATION,
  CLEAR_LOCATIONS
} from "../actions/types.js";

const initialState = {
  locations: [],
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function locations(state = initialState, action) {
  switch (action.type) {
    case GET_LOCATIONS:
      return {
        ...state,
        locations: action.payload,
      };
    case DELETE_LOCATION:
      return {
        ...state,
        locations: state.locations.filter(
          (location) => location.id !== action.payload
        ),
      };
    case ADD_LOCATION:
      return {
        ...state,
        locations: [...state.locations, action.payload],
      };
    case UPDATE_LOCATION:
      return {
        ...state,
        locations: [
          ...state.locations.filter(
            (location) => location.id !== action.payload.id
          ),
          action.payload,
        ],
      };
    case CLEAR_LOCATIONS:
      return {
        ...state,
        locations: [],
      };
    default:
      return state;
  }
}

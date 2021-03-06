import { GET_ERRORS } from '../actions/types';

const initialState = {
  msg: {},
  status: null,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function errors (state = initialState, action) {
  switch (action.type) {
    case GET_ERRORS:
      return {
        msg: action.payload.msg,
        status: action.payload.status,
      };
    default:
      return state;
  }
}

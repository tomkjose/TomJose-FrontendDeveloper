import {
  FETCH_CAPSULE_REQUEST,
  FETCH_CAPSULE_SUCCESS,
  FETCH_CAPSULE_FAILURE,
} from "./action";

const initialState = {
  capsules: [],
  loading: false,
  error: null,
};

const capsulesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CAPSULE_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_CAPSULE_SUCCESS:
      return {
        ...state,
        loading: false,
        capsules: action.payload,
      };
    case FETCH_CAPSULE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default capsulesReducer;

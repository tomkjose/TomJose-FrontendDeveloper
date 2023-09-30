import { fetchAllCapsules } from "../api";

export const FETCH_CAPSULE_REQUEST = "FETCH_CAPSULE_REQUEST";
export const FETCH_CAPSULE_SUCCESS = "FETCH_CAPSULE_SUCCESS";
export const FETCH_CAPSULE_FAILURE = "FETCH_CAPSULE_FAILURE";

export const fetchCapsuleRequest = () => ({
  type: FETCH_CAPSULE_REQUEST,
});

export const fetchCapsuleSuccess = (capsule) => ({
  type: FETCH_CAPSULE_SUCCESS,
  payload: capsule,
});

export const fetchCapsuleFailure = (error) => ({
  type: FETCH_CAPSULE_FAILURE,
  payload: error,
});

export const fetchCapsule = () => async (dispatch) => {
  dispatch(fetchCapsuleRequest());

  try {
    const response = await fetchAllCapsules();
    dispatch(fetchCapsuleSuccess(response));
  } catch (error) {
    dispatch(fetchCapsuleFailure(error.message));
  }
};

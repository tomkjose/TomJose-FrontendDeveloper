const API_ROOT = "https://api.spacexdata.com/v3/launches";
const API_KEY = "AIzaSyAM-sUnjZNJUkbzYEzPc0YeI51oeQD4GfM";

export const API_SIGNUP = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`;

export const API_SIGNIN = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`;

export const API_URLS = {
  allCapsules: () => `${API_ROOT}/`,
  oneCapsule: (id) => `${API_ROOT}/${id}`,
  upcomingCapsules: () => `${API_ROOT}/upcoming`,
  pastCapsules: () => `${API_ROOT}/past`,
};

export const setLocalStorge = (response) => {
  localStorage.setItem("user", JSON.stringify(response));
};

export const getLocalStorge = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  return user;
};

export const removeLocalStorge = () => {
  localStorage.removeItem("user");
};

export const isUserAuthenticated = () => {
  const userData = localStorage.getItem("user");
  if (userData) {
    const parsedUserData = JSON.parse(userData);
    return !!parsedUserData.token;
  }
  return false;
};

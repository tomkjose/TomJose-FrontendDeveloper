export const setLocalStorge = (response) => {
  localStorage.setItem("user", JSON.stringify(response));
};

export const getLocalStorge = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  return user;
};

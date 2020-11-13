import axios from "axios";

const API_URL = "https://www.subastasonline.me/api/";

const register = (username, email, password) => {
  return axios.post(API_URL + "signup", {
    username,
    email,
    password,
  });
};

const login = (email, password) => {
  let to;
  return axios
    .post(API_URL + "login", {
      email,
      password,
    })
    .then((response) => {
      let { data } = response.data;
      getRole(data[0].token).then((r) => {
        return r;
      });
      let temp = JSON.parse(localStorage.getItem("temp"));
      let roles = temp.data[0].role;
      let id = temp.data[0].id_role;
      if (data[0].token) {
        console.log("LocalStorage");
        localStorage.setItem(
          "user",
          JSON.stringify({
            accessToken: data[0].token,
            id: id,
            roles: [roles],
          })
        );
      }
      return response.data;
    });
};

function getRole(token) {
  return axios
    .get("https://www.subastasonline.me/api/user/profile/role", {
      headers: {
        Authorization: token,
      },
    })
    .then((response) => {
      localStorage.setItem("temp", JSON.stringify(response.data));
      return response;
    });
}

const logout = () => {
  localStorage.removeItem("user");
  localStorage.removeItem("temp");
};

export default {
  register,
  login,
  logout,
};

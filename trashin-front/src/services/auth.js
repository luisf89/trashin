import axios from "axios";

const base_url = 'http://localhost:4000/api'

export const signup = auth => {
    return axios.post(`${base_url}/auth/signup`, auth)
    .then(res => res.data)
    .catch(error => {
      throw error.response.data
    })
  }

export const login = auth => {
    return axios.post(`${base_url}/auth/login`, auth)
    .then(res => res.data)
    .catch(error => {
      throw error.response.data
    })
  }

export const logout = () => {
  localStorage.removeItem("TOKEN");
  localStorage.removeItem("USER");
  window.location.reload();
};

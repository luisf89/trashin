import axios from "axios";

const isProduction = process.env.NODE_ENV === 'production'
const base_url = isProduction
  ? 'https://trashin.herokuapp.com/api'
  : 'http://localhost:3000/api'


// const base_url = 'http://localhost:4000/api'

export const signup = auth => {
    return axios.post(`${base_url}/auth/register`, auth)
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

  export const newPost = (data) => {
    return axios.post(`${base_url}/post/posting`, data)
    .then(res => res.data)
    .catch(error => {
      throw error.response.data
    })
  }
  export const getMyPosts = (id) => {
    return axios.get(`${base_url}/post/postMyPosts/${id}`)
    .then(res => res.data.post)
    .catch(error => {
      throw error.response.data
    })
  }
  export const getAllPosts = () => {
    return axios.get(`${base_url}/post/getAllPosts`)
    .then(res => res.data)
    .catch(error => {
      throw error.response.data
    })
  }
  export const getPost = (id) => {
    return axios.get(`${base_url}/post/${id}`)
    .then(res => res.data)
    .catch(error => {
      throw error.response.data
    })
  }
  export const editPost = (id) => {
    return axios.patch(`${base_url}/post/${id}`)
    .then(res => res.data)
    .catch(error => {
      throw error.response.data
    })
  }
  export const deletePost = (id) => {
    return axios.delete(`${base_url}/post/${id}`)
    .then(res => res.data)
    .catch(error => {
      throw error.response.data
    })
  }
  export const editPerfil = (id,data) => {
    return axios.patch(`${base_url}/perfil/${id}`,data)
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

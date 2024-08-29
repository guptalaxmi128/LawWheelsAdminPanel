import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/",
  // baseURL:'https://law-wheels.onrender.com/',

});

api.interceptors.request.use(
  (req) => {
    const userProfile = JSON.parse(localStorage.getItem("profile"));

    if (userProfile) {
      const authToken = userProfile.data || userProfile.authToken;

      if (authToken) {
        req.headers.Authorization = `Bearer ${authToken}`;
      }
    }
    return req;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const adminLogin = (userInfo) => api.post(`api/admin/login`, userInfo);
export const getUser= () => api.get(`api/admin/users`);
export const getMutualForm= (id) => api.get(`api/admin/mutualDivorceDetails/${id}`);
export const getContact= () => api.get(`api/admin/contactUsForm`);
export const getReachOut= () => api.get(`api/admin/reachOut`);
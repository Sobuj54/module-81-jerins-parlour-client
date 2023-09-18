import axios from "axios";
import { useEffect } from "react";
import useAuthContext from "./useAuthContext";
import { useNavigate } from "react-router-dom";

const axiosSecure = axios.create({
  baseURL: `https://jerins-parlour-server-three.vercel.app`,
});

const useAxiosSecure = () => {
  const { logOut } = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    // request interceptor
    axiosSecure.interceptors.request.use((config) => {
      const token = localStorage.getItem("token");
      if (token) {
        config.headers.Authorization = `bearer ${token}`;
      }
      return config;
    });

    // response interceptor
    axiosSecure.interceptors.response.use(
      (response) => {
        return response;
      },
      async (error) => {
        if (
          error.response &&
          (error.response.status === 401 || error.response.status === 403)
        ) {
          await logOut();
          navigate("/login");
        }
        return Promise.reject(error);
      }
    );
  }, [logOut, navigate]);

  return [axiosSecure];
};

export default useAxiosSecure;
